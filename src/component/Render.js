import React from 'react';

export default class Render extends React.Component {
    render() {
        return (
            <div className='app__render'>
                {this.props.html}
            </div>
        );
    }
}