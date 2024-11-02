import React from 'react';

const Filter = ({ types, selectedType, setSelectedType }) => {
    return (
        <div className="filter">
            <h3>Filter by Type</h3>
            <label htmlFor="filter-select">Choose a type:</label>
            <select
                id="filter-select"
                onChange={(e) => setSelectedType(e.target.value)}
                value={selectedType}
            >
                <option value="">All</option>
                {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
