import React, {Component} from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newProduct: {
                title: '',
                description: '',
                price: 0,
                availability: 0
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(key, e) {
        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newProduct);
    }

    render() {
        return (
            <div>
                <h2>Add new product</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title: <input type="text" onChange={(e) => this.handleInput('title', e)}/>
                        </label>
                        <label>
                            Description: <input type="text" onChange={(e) => this.handleInput('description', e)}/>
                        </label>
                        <label>
                            Price: <input type="text" onChange={(e) => this.handleInput('price', e)}/>
                        </label>
                        <label>
                            Availability: <input type="text" onChange={(e) => this.handleInput('availability', e)}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct;