import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shop.comonent';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up'
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { auth, createUserProfiledocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions'



class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

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

          <Route exact path='/signIn' render={() =>
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
  currentUser: selectCurrentUser,
  // collectionsArray:selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
