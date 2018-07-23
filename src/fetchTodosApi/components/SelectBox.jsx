import React from 'react';

const SelectBox = ({ selectClass, values = [] }) => {
    return (
        <select className={selectClass}>
            {
                values.map((val,index) => (
                    <option value = {val} key ={index}> {val} </option>
                    )
                )//end of map
            }
        </select>
    )
}
export default SelectBox