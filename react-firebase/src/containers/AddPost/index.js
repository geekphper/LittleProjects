import React, {Component} from 'react';

class AddPost extends Component {

    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.firebase.ref('posts').push({
            title: this.state.title,
            upvote: 0,
            downvote: 0
        });
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" 
                    placeholder="Write the title of your post"
                    onChange={this.handleChange}
                    value={this.state.title}/>
                <button type="text"
                    onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }

}

export default AddPost;