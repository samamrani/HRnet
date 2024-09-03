import React from 'react';
import '../styles/main.scss';

const SelectField = ({ id, label, options, value, onChange, required = false }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        >
            <option value="">Select</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;
