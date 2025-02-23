import React, { useState } from 'react';
import QueryForm from './QueryForm';
import Table from './Table.jsx';
import axios from 'axios';
import './App.css'

function App() {
    const [queryResults, setQueryResults] = useState([]);

    const handleQuerySubmit = (queryData) => {
        axios.post('http://127.0.0.1:8050/api/query', queryData)
            .then(response => {
                setQueryResults(response.data);
                console.info(response.data)
            })
            .catch(error => {
                console.error("Error executing query:", error);
            });
    };

    return (
        <div className="container">
            <QueryForm onQuerySubmit={handleQuerySubmit} />
            <Table data={queryResults} />
        </div>
    );
}

export default App;
