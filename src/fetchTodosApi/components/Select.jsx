import React from 'react';

const Select = ({ id, categoryName }) => {

    return (
        <option value={id} key ={id}> {categoryName} </option>
    )
}
export default Select