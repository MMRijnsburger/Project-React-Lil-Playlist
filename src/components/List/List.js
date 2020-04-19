import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return (
            <div>
                List
                <ul>
                    <ListItem />
                </ul>
            </div>
        )
    }
}

export default List;