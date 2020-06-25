import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shop.comonent';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up'
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { auth, createUserProfiledocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)


class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfiledocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      } else {
        setCurrentUser( userAuth )   // this is equivalent to set current user to null
      }
    })
  }


  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signIn'  render={() => 
            this.props.currentUser ? (
              <Redirect to="" />
              ) : (
                <SignInAndSignUpPage />
                )
              }
              />


        </Switch>


      </div>
    );
  }
}

// we have access to this.props.currentUser due to mapStateToProps method
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispathToProps)(App);
