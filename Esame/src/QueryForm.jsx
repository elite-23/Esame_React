import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QueryForm({ onQuerySubmit }) {
    const [tables, setTables] = useState([]);
    const [columns, setColumns] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedColumn, setSelectedColumn] = useState('');
    const [whereCondition, setWhereCondition] = useState('');
    const [useWhere, setUseWhere] = useState(false);
    const [serverMode, setServerMode] = useState(null);

    useEffect(() => {
      // Fetch the server mode from the API
      const fetchServerMode = async () => {
        try {
          const response = await fetch('http://localhost:8050/api/server-mode');
          const data = await response.json();
          setServerMode(data.mode);
        } catch (error) {
          console.error('Error fetching server mode:', error);
        }
      };

      fetchServerMode();
    }, []);


    useEffect(() => {
        axios.get('http://127.0.0.1:8050/api/tables')
          .then((response) => setTables(response.data))
          .catch((error) => console.error('Error fetching tables:', error));
    }, []);
    
    // Fetch columns for the selected table from the Flask API using axios
    useEffect(() => {
    if (selectedTable) {
        axios.post('http://127.0.0.1:8050/api/columns', { table: selectedTable })
        .then((response) => {
            setColumns(response.data);
        })
        .catch((error) => {
            console.error('Error fetching columns:', error);
        });
    }
    }, [selectedTable]);

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
    setSelectedColumn('');
  };

  const handleColumnChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  const handleWhereChange = (event) => {
    setWhereCondition(event.target.value);
  };

  const handleWhereToggle = () => {
    setUseWhere(!useWhere);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      table: selectedTable,
      column: selectedColumn,
      where_condition: useWhere ? whereCondition : null,
    };

    onQuerySubmit(requestData);
  };

  return (
    <div>
      <h1>Ricerca nel Database dell'università</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        SELECT    
          <div style={{ flex: 1 }}>
            <select id="column" value={selectedColumn} onChange={handleColumnChange} required>
            <option value="">Nome colonna</option>
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
        FROM
          <div style={{ flex: 1 }}>
            <select id="table" value={selectedTable} onChange={handleTableChange} required>
              <option value="">Nome tabella</option>
              {tables.map((table) => (
                <option key={table} value={table}>
                  {table}
                </option>
              ))}
            </select>
          </div>
        </div>
        {serverMode === 'real' && (
        <div>
          <label htmlFor="where-toggle">
            <input
              type="checkbox"
              id="where-toggle"
              checked={useWhere}
              onChange={handleWhereToggle}
            />
            WHERE
          </label>
        </div>
        )}
        {useWhere && (
          <div className="where-container">
            <label htmlFor="where-condition"></label>
            <input className="checkmark"
              type="text"
              id="where-condition"
              value={whereCondition}
              onChange={handleWhereChange}
              placeholder="e.g. name='John'"
            />
          </div>
        )}

        <button type="submit">Generate Query</button>
      </form>
    </div>
  );
}

export default QueryForm;
