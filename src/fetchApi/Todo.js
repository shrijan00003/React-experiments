import React from 'react';


const Todo = ({ id , title, details }) => (
	<tr>
		<td>{ id }</td>
		<td>{ title }</td>
		<td>{ details }</td>
	</tr>
);

export default Todo;