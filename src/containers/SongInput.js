import React from 'react';
import InputField from '../components/InputField';

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
                <button>Voeg toe</button>
            </form>
        )
    }
}

export default SongInput;