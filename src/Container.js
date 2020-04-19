import React from 'react';
import SongInput from './containers/SongInput';
import SongList from './containers/SongList';
import SongData from './data/SongData';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: SongData
        }
        this.handleSongInput = this.handleSongInput.bind(this)
    }

    handleSongInput(song) {
        console.log(song)

        //! TODO:
        //! er voor zorgen dat song in songList geplaatst wordt.
        //! 1: setState aanroepen en prevState gebruiken voor stap 2
        //! 2: copy maken van songList uit prevState zie,  spread operator [...]
        //! 3: song toevoegen aan copy van songList (push)
        //! 4: return new songList als object..
    }

    render() {
        return (
            <div>
                <SongInput onSubmit={this.handleSongInput} />
                <SongList list={this.state.songList} />
            </div>
        )
    }

}

export default Container;