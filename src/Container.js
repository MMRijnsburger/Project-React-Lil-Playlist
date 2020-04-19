import React from 'react';
import SongInput from './containers/SongInput';
import SongList from './containers/SongList';
import SongData from './sample/SongData';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: SongData
        }
    }

    render() {
        return (
            <div>
                <SongInput />
                <SongList list={this.state.songList} />
            </div>
        )
    }

}

export default Container;