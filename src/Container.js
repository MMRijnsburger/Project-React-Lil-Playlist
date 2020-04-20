import React from 'react';
import SongInput from './containers/SongInput';
// import SongList from './containers/SongList';
import SongData from './data/SongData';
import TableList from './containers/TableList';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: SongData
        }
        this.handleSongInput = this.handleSongInput.bind(this)
    }

    handleSongInput(song) {
        // console.log(song)
        this.setState(prevState => {
            const songList = [...prevState.songList]
            songList.push({
                id: songList.length + 1,
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            })
            return {
                songList: songList
            }

        })

    }

    render() {
        return (
            <div>
                <SongInput onSubmit={this.handleSongInput} />
                {/* <SongList list={this.state.songList} /> */}
                <TableList list={this.state.songList} />
            </div>
        )
    }

}

export default Container;