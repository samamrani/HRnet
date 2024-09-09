import React from 'react';
import { TextField, MenuItem, Select, FormControl } from '@mui/material';

/**
 * Composant de contrôles pour la table des employés.
 * 
 * Ce composant permet à l'utilisateur de sélectionner le nombre d'entrées à afficher par page
 * et de rechercher parmi les employés. Il utilise les composants `Select` et `TextField` de Material-UI
 * pour fournir une interface utilisateur pour ces contrôles.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.employeesPerPage - Le nombre d'employés affichés par page.
 * @param {function} props.handleEntriesPerPageChange - Fonction appelée lorsqu'un nombre d'entrées par page est sélectionné.
 * @param {string} props.searchTerm - Le terme de recherche actuellement utilisé.
 * @param {function} props.handleSearchChange - Fonction appelée lorsque le terme de recherche change.
 * 
 * @returns {React.ReactElement} Un élément React représentant les contrôles de la table.
 * 
 */
function TableControls({ employeesPerPage, handleEntriesPerPageChange, searchTerm, handleSearchChange }) {
    return (
        <div className="table-controls">
            <div className='form-control'>
               <span>Show</span>
               <FormControl size="small">
                    <Select
                        value={employeesPerPage}
                        onChange={handleEntriesPerPageChange}
                        className='select-custom'
                    >
                        <MenuItem className='menu-item-custom' value={10}>10</MenuItem>
                        <MenuItem className='menu-item-custom' value={25}>25</MenuItem>
                        <MenuItem className='menu-item-custom' value={50}>50</MenuItem>
                        <MenuItem className='menu-item-custom' value={100}>100</MenuItem>
                    </Select>
                </FormControl>
                <span>entries</span>
            </div>
           <div className='form-control'> 
            <span>Search:</span>
                <TextField  
                    size="small"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
           </div>
        </div>
    );
}

export default TableControls;
