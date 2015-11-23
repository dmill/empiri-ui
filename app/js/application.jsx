import React from "react";
import ReactDOM from "react-dom";
import Auth0 from "./auth0/auth0-variables";
import Home from "./auth0/home";
import UserProfileView from "./views/user_profile_view";
import store from "./redux/store";
import { SET_CURRENT_USER, SET_ID_TOKEN } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setupAjax();
    this.createLock();
    this.setIdToken();
    this.lock.getProfile(store.getState().currentUser.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      store.dispatch({ type: SET_CURRENT_USER, payload: profile });
    });
  }

  createLock() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  }

  setupAjax() {
    $.ajaxSetup({
      'beforeSend': function(xhr) {
        if (localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
                'Bearer ' + localStorage.getItem('userToken'));
        }
      }
    });
  }

  setIdToken() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
    store.dispatch({ type: SET_ID_TOKEN, payload: idToken });
  }

  render() {
    if (store.getState().currentUser.idToken) {
      return (<UserProfileView store={store} />);
    } else {
      return (<Home lock={this.lock} />);
    }
  }
};

ReactDOM.render(<App clientId={Auth0.AUTH0_CLIENT_ID} domain={Auth0.AUTH0_DOMAIN} />,
  document.getElementById('root'));

