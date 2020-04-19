import React from 'react';
import List from '../components/List/List';

const SongList = () => {
    return (
        <div>
            Songlist
            <ul>
                <li>Song</li>
                <li>Artist</li>
                <li>Genre</li>
                <li>Rating</li>
            </ul>
            <List />
        </div>
    )
}

export default SongList;