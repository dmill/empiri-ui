import React from "react";

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profile: null};
  }

  componentDidMount() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      this.setState({profile: profile});
    }.bind(this));
  }

  render() {
    const profile = this.state.profile;
    if(!profile) {
      return <div>no user</div>;
    } else {
      return (
        <div>
          <h2>{profile.name}</h2>
          <h6>{profile.headline}</h6>
          <img src={profile.picture} />
          <p>{profile.summary}</p>
        </div>
      );
    }
  }

};

export default UserProfileView;
