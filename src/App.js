import React from "react";
import "./App.css";
import axios from "axios";
import { UncontrolledCollapse, Button, Col, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,} from 'reactstrap';

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
      <Container>
     
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h2>{this.state.user.name}</h2>
        <Button color="secondary" id="toggler" style={{ marginBottom: '1rem' }}>
      Show User Info
    </Button>
    <UncontrolledCollapse toggler="#toggler">
        <Card className="block-example border border-dark">
        <img src={this.state.user.avatar_url} alt="avatar" width='100%' />
        <CardBody>
          <p>{this.state.user.login}</p>
          <p>Location: {this.state.user.location}</p>
          <p>
            Profile: 
            <a href={this.state.user.url}>{this.state.user.url}</a>
          </p>
          {/* <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p> */}
          <p>Bio: {this.state.user.bio}</p>
          <h2>Followers:</h2>
        {this.state.followers.map((follower) => (
          <p key={follower.id}>{follower.login}</p>
        ))}
        </CardBody>
        </Card>
        </UncontrolledCollapse>
        </Col>
      </Container>
    );
  }
}

export default App;
