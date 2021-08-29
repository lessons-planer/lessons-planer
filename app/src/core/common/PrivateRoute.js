import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				return <h2>isLoading...</h2>; //implement loader
			} else if (!auth.isAuthenticated) {
				return <Redirect to='/login_form' />;
			} else {
				return <Component {...props} />;
			}
		}}
	/>
);

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
