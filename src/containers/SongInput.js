import React from 'react';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';

class SongInput extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <form>
                <InputField id="input-title" />
                <InputField id="input-artist" />
                <InputSelect id="input-genre" />
                <InputSelect id="input-rating" />
                <button>Voeg toe</button>
            </form>
        )
    }
}

export default SongInput;