import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './firebase-config';

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    }
    firebase.initializeApp(config);
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');
    let _this = this;
    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());
      _this.setState( {
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          firebase: firebase.database(),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;
