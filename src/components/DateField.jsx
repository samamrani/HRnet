import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import '../styles/main.scss';

const DateField = ({ id, label, value, onChange }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <Datetime
            id={id}
            value={value}
            onChange={(date) => onChange(date ? date.toDate() : '')}
            timeFormat={false}
            dateFormat="DD/MM/YYYY"
        />
    </div>
);

export default DateField;
