import React from 'react';
import SongInput from './containers/SongInput'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <SongInput />
            </div>
        )
    }

}

export default Container