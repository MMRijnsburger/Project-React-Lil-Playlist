import React from 'react';

const TableItem = (props) => {
    return (
        <tr>
            <td> {props.item.title} </td>
            <td> {props.item.artist} </td>
            <td> {props.item.genre} </td>
            <td> {props.item.rating} </td>
        </tr>
    )
}

export default TableItem;