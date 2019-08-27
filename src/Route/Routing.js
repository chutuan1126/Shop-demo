import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

//redux, react-redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';

//page
import Index from '../pages/HomePage/Home.component';
import ShopPage from '../pages/ShopPage/Shop_Page.component';
import CheckoutPage from '../pages/Checkout/Checkout.component';
import Collection from '../pages/CollectionPage/Collection.component';
import LoginAndSignUp from '../pages/LoginAndSignUp/Login_And_SignUp.component';

function Routing({ currentUser }) {
    return (
        <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/shop/' component={ShopPage} />
            <Route exact path='/contact/' component={CheckoutPage} />
            <Route exact path='/checkout/' component={CheckoutPage} />
            <Route exact path='/login/' render={() => currentUser ? <Redirect to='/' /> : <LoginAndSignUp /> } />
            <Route path='/shop/:collectionId' component={Collection} />
        </Switch>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Routing);