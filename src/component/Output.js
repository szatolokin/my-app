import React from 'react';

export default class Output extends React.Component {
    render() {
        return (
            <div
                className='app__output'
                dangerouslySetInnerHTML={{
                    __html: this.props.html
                }}
            />
        );
    }
}