import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <textarea
                className='app__input'
                value={this.props.input}
                onChange={this.props.handleChange}
            />
        )
    }
}