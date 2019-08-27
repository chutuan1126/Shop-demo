import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { SHOP_DATA } from './util/db';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//redux, react-redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createCollection } from './redux/shop/shop.action';

//routing
import Routing from './Route/Routing';

//header-footer
import Header from './components/Header_Nav/Header';
import Footer from './components/Footer/Footer.component';

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser, getData } = this.props;

    getData(SHOP_DATA);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router >
        <Header />
        <div className='content'>
          <Routing />
        </div>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  getData: data => dispatch(createCollection(data))
});

export default connect(null, mapDispatchToProps)(App);