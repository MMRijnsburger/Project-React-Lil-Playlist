import React from 'react';
import SongInput from './containers/SongInput'
import SongList from './containers/SongList'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <SongInput />
                <SongList />
            </div>
        )
    }

}

export default Container