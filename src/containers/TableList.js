import React from 'react';
import Table from '../components/Table/Table';
import InputSelect from '../components/InputSelect';
import GenreData from '../data/GenreData';
import RatingData from '../data/RatingData';

const TableList = (props) => {
    const handleGenreChange = (genre) => { console.log('click genre', genre) }
    const handleRatingChange = (rating) => { console.log('click rating', rating) }
    return (
        <table>
            <thead>
                <tr className="song-header">
                    <th className="song-row_item">Song</th>
                    <th className="song-row_item">Artist</th>
                    <th className="song-row_item">Genre
                    <InputSelect
                            options={GenreData}
                            onChange={handleGenreChange}
                        />
                    </th>
                    <th className="song-row_item">Rating
                    <InputSelect
                            options={RatingData}
                            onChange={handleRatingChange}
                        />
                    </th>
                </tr>
            </thead>
            <Table items={props.list} onClick={props.onClick} />

        </table>
    )
}

export default TableList;