import React from 'react';
import TableItem from './TableItem';

class Table extends React.Component {
    render() {
        const items = this.props.items
        const tableItems = items.map(item => (
            <TableItem
                key={item.id}
                item={item}
            />
        ))

        return (
            <table>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        )
    }
}

export default Table;