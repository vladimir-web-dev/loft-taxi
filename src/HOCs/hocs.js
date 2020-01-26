import React from 'react';
import AuthContext from '../context/AuthContext'

export function authorizationCheckHOC(WrappedComponents) {
    return class extends React.Component {
        static displayName = 'authorizationCheckHOC';
        static contextType = AuthContext;

        render() {
            return (
                this.context.isLoggedIn ? <WrappedComponents {...this.props}/> : <h1>You are unauthorized to enter this page</h1>
            );
        }
    }
}