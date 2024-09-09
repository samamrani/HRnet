import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employesSlice';

/**
 * Composant CreateEmployee permettant de gérer la création d'un nouvel employé.
 * Il utilise le hook `useDispatch` de Redux pour envoyer une action afin d'ajouter un employé.
 * Ce composant devrait contenir un formulaire pour la saisie des informations de l'employé
 * et déclencher l'action `handleSubmit` lors de la soumission du formulaire.
 *
 * @component
 * @returns {React.ReactElement} Le composant CreateEmployee avec un formulaire pour ajouter un employé.
 *
 */
function CreateEmployee() {
  const dispatch = useDispatch();
  
  const handleSubmit = (employee) => {
    // Dispatch de l'action pour ajouter un employé
    dispatch(addEmployee(employee));
  };

  return (
    <CreateEmployee onSubmit={handleSubmit} />
  );
}

export default CreateEmployee;
