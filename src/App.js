import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jasonelliots")
      .then((res) =>
        // console.log(res)
        this.setState({ user: res.data })
      )
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/jasonelliots/followers")
      .then((res) =>
        // console.log(res.data[0])
        this.setState({ followers: res.data })
      )
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(this.state.followers)
    // console.log(this.state.user)
    return (
      <div className="card">
        <img src={this.state.user.avatar_url} alt="avatar" />
        <div className="card-info">
          <h1>{this.state.user.name}</h1>
          <p className="username">{this.state.user.login}</p>
          <p>Location: {this.state.user.location}</p>
          <p>
            Profile:
            <a href={this.state.user.url}>{this.state.user.url}</a>
          </p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
          <p>Bio: {this.state.user.bio}</p>
        </div>
        <h2>Followers:</h2>
        {this.state.followers.map((follower) => (
          <p key={follower.id}>{follower.login}</p>
        ))}
      </div>
    );
  }
}

export default App;
