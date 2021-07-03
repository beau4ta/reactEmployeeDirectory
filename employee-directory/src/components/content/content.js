import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import createContext from '../../utils/createContext';
import './content.css';

const Content = () => {
    const [employeeState, setEmployeeState] = useState({
        employees: [],
        order: 'ascend',
        filter: [],
        headings: [
            { name: 'Name', width: '10%' },
            { name: 'Number', width: '20%' },
            { name: 'Email', width: '20%' },
            { name: 'Date', width: '10%' },
            { name: 'Picture', width: '10%' },

        ]
    });

    useEffect(() => {
        API.getRandomUser().then(results => {
            setEmployeeState({
                ...employeeState,
                employees: results.data.results,
                filter: results.data.results
            });
        });
    }, []);

    return(
        <createContext.Provider
        value={{ employeeState }}
        >
            
        </createContext.Provider>
    )
}

export default Content;