import React from 'react';
import Table from '../components/Table/Table';

const TableList = (props) => {
    return (
        <table>
            <thead>
                <tr className="song-header">
                    <th className="song-row_item">Song</th>
                    <th className="song-row_item">Artist</th>
                    <th className="song-row_item">Genre <select defaultValue="default"><option value="default" disabled hidden>Filter...</option></select></th>
                    <th className="song-row_item">Rating <select defaultValue="default"><option value="default" disabled hidden>Filter...</option></select></th>
                </tr>
            </thead>
            <Table items={props.list} onClick={props.onClick} />
        </table>
    )
}

export default TableList;