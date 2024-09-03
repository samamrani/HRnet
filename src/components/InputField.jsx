import React from 'react';
import '../styles/main.scss';

const InputField = ({ id, label, value, onChange, required = false, type = 'text' }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        />
    </div>
);

export default InputField;
