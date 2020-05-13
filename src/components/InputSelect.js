import React from 'react';

class InputSelect extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(event) {
        // console.log(event.target.value)
        this.props.onSelectChange(event.target.value)
    }

    render() {
        //! TODO:
        //! initiele waarde op leeg??

        const options = this.props.options
            .map(option => {
                return (
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.name}
                    </option>)
            })
        return (
            <select
                id={this.props.id}
                defaultValue="default"
                onChange={this.handleSelectChange}
            >
                <option value="default" disabled hidden>Kies...</option>
                {options}
            </select>
        )
    }
}

export default InputSelect;