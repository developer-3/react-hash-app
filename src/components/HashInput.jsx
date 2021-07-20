import React from 'react'
import 'bulma/css/bulma.min.css';

class HashInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <input class="input" type="text" placeholder="Start typing..." value={this.state.value} onChange={this.onChange}></input>
            </div>
        )
    }
}

export default HashInput