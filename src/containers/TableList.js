import React from 'react';
import Table from '../components/Table/Table';

const TableList = (props) => {
    return (
        <table>
            <thead>
                <tr className="song-header">
                    <th className="song-row_item">Song</th>
                    <th className="song-row_item">Artist</th>
                    <th className="song-row_item">Genre</th>
                    <th className="song-row_item">Rating</th>
                </tr>
            </thead>

            <Table items={props.list} />
        </table>
    )
}

export default TableList;