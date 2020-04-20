import React from 'react';
import Table from '../components/Table/Table';

const TableList = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr className="song-header">
                        <th className="song-row_item">Song</th>
                        <th className="song-row_item">Artist</th>
                        <th className="song-row_item">Genre</th>
                        <th className="song-row_item">Rating</th>
                    </tr>
                </thead>
            </table>
            <Table items={props.list} />
        </div>
    )
}

export default TableList;