import React from 'react';
import { TextField, MenuItem, Select, FormControl } from '@mui/material';

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
