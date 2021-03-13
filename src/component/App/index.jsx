import React from 'react';

import './index.scss';

const createID = (() => {
    let freeID = 0;
    return () => freeID++;
})();

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list || [],
            newItem: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange(event) {
        this.setState(state => ({
            newItem: event.target.value,
        }));
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                this.addItem();
                return;
            case 'Backspace':
                this.deleteItem();
                return;
        }
    }

    addItem() {
        this.setState(state => ({
            list: [...state.list, state.newItem || state.list.length + 1],
            newItem: '',
        }));
    }

    deleteItem() {
        this.setState(state => ({
            list: state.list.slice(0, -1),
        }));
    }

    render() {
        return (
            <div className='app'>
                <h3 className='app__title'>{
                    !!this.state.list.length && `List of ${this.state.list.length}` || 'Empty list'
                }</h3>
                <input
                    className='app__input'
                    value={this.state.newItem}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    className='app__button'
                    onClick={this.addItem}
                >
                    Add
                </button>
                <button
                    className='app__button'
                    disabled={!this.state.list.length}
                    onClick={this.deleteItem}
                >
                    Delete
                </button>
                {!!this.state.list.length && <ul className='app__list'>
                    {this.state.list.map(item => <li className='app__item' key={createID()}>{item}</li>)}
                </ul>}
            </div>
        );
    }
}