import React, { Component } from 'react';
class Counter extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}


export default Counter;