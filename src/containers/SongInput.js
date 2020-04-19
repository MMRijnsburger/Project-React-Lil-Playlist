import React from 'react';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';

class SongInput extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            artist: '',
            genre: '',
            rating: 0
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
    }

    handleTitleChange(title) {
        // console.log('SI title:', title)
        this.setState(() => {
            return {
                title: title
            }
        })
    }

    handleArtistChange(artist) {
        // console.log('SI artist:', artist)
        this.setState(() => {
            return {
                artist: artist
            }
        })
    }

    render() {
        return (
            <form>
                <InputField
                    id="input-title"
                    value={this.state.title}
                    placeholder="voer titel in"
                    onChange={this.handleTitleChange}
                />
                <InputField
                    id="input-artist"
                    value={this.state.artist}
                    placeholder="voer artiest in"
                    onChange={this.handleArtistChange}
                />
                <InputSelect id="input-genre" />
                <InputSelect id="input-rating" />
                <button>Voeg toe</button>
            </form>
        )
    }
}

export default SongInput;