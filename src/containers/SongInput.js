import React from 'react';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';
import GenreData from '../data/GenreData';
import RatingData from '../data/RatingData';

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
        this.handleGenreChange = this.handleGenreChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
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

    handleGenreChange(name) {
        console.log('SI genre:', name)
        this.setState(() => {
            return {
                genre: name
            }
        })
    }

    handleRatingChange(value) {
        console.log('SI rating:', value)
        this.setState(() => {
            return {
                rating: value
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
                <InputSelect
                    id="input-genre"
                    options={GenreData}
                    onChange={this.handleGenreChange}
                />
                <InputSelect
                    id="input-rating"
                    options={RatingData}
                    onChange={this.handleRatingChange}
                />
                <button>Voeg toe</button>
            </form>
        )
    }
}

export default SongInput;