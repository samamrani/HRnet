import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../redux/alertSlice';
import '../styles/main.scss';

function Alert() {
    const { message, type } = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    if (!message) return null;

    return (
        <>
        <div className="alert-dark" onClick={() => dispatch(clearAlert())}></div>
        <div className={`alert ${type}`}>
            {message}
            <button onClick={() => dispatch(clearAlert())}>X</button>
        </div>
    </>
    );
};
export default Alert;
