import React from 'react';
import usePagination from '@mui/material/usePagination';

/**
 * Composant de contrôle de pagination.
 * 
 * Ce composant utilise le hook `usePagination` de Material-UI pour générer des contrôles de pagination
 * permettant de naviguer entre les pages d'une liste. Il affiche des boutons pour aller à la page précédente,
 * à la page suivante, et pour naviguer directement vers des pages spécifiques.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.count - Le nombre total de pages.
 * @param {number} props.page - La page actuelle sélectionnée.
 * @param {function} props.onChange - Fonction appelée lorsqu'une page est sélectionnée.
 * 
 * @returns {React.ReactElement} Un élément React représentant les contrôles de pagination.
 */
function PaginationControls({ count, page, onChange }) {
  const { items } = usePagination({ count, page });

  return (
    <nav>
      <ul className="pagination-list">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                className={`pagination-button ${selected ? 'pagination-button-selected' : ''}`}
                {...item}
                onClick={() => onChange(null, page)}
              >
                {page}
              </button>
            );
          } else if (type === 'previous') {
            children = (
              <button
                type="button"
                className="pagination-name"
                {...item}
                onClick={() => onChange(null, page)}
              >
                {'Previous'}
              </button>
            );
          } else if (type === 'next') {
            children = (
              <button
                type="button"
                className="pagination-name"
                {...item}
                onClick={() => onChange(null, page)}
              >
                {'Next'}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}

export default PaginationControls;
