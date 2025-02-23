import React from 'react';

function Table({ data }) {
    if (!data || data.length === 0) {
        return ;
    }

    // Assuming the data is an array of objects (rows)
    return (
        <div className="query-results">
            <table className="table" border="1">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, idx) => (
                                <td key={idx}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
