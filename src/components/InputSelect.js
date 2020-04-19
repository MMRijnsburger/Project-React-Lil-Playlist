import React from 'react';

class InputSelect extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(event) {
        // console.log(event.target.value)
        this.props.onChange(event.target.value)
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
                onChange={this.handleSelectChange}
            >
                {options}
            </select>
        )
    }
}

export default InputSelect;