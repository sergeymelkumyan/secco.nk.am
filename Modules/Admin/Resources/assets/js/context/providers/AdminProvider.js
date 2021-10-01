import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom';
import {api} from '../../utils';

const AdminContext = createContext({});
export const AccountConsumer = AdminContext.Consumer;

class AdminProvider extends Component {
    state = {
        admin: {},
        isLoggedIn: undefined
    }

    methods = {
        login: this.login.bind(this),
        logout: this.logout.bind(this),
        resetPassword: this.resetPassword.bind(this),
        forgotPassword: this.forgotPassword.bind(this)
    }

    componentDidMount() {
        this.checkIsLoggedIn();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state?.isLoggedIn && this.state.isLoggedIn !== prevState.isLoggedIn) {
            this.checkIsLoggedIn();
        }
    }

    checkIsLoggedIn() {
        const token = localStorage.getItem('access_token') !== 'undefined' && localStorage.getItem('access_token');
        if (token) {
            this.getAdmin();
        } else {
            this.setState({
                isLoggedIn: false
            })
        }
    }

    getAdmin() {
        api.get('account')
            .then(({admin}) => {
                this.setState({
                    admin: admin,
                    isLoggedIn: true
                })
            })
            .catch(err => {
                this.setState({
                    isLoggedIn: false
                })
            });
    }

    login(data) {
        return api.post('login', data)
            .then(({access_token}) => {
                localStorage.setItem('access_token', access_token);
                this.setState({
                    isLoggedIn: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    logout() {
        return api.post('logout')
            .then(() => {
                localStorage.removeItem('access_token');
                this.setState({
                    isLoggedIn: false
                })
            })
            .catch(err => {
                console.log(err)
            });
    }

    forgotPassword(data) {
        return api.post('password/email', data);
    }

    resetPassword(data) {
        return api.post('password/reset', data)
    }

    render() {
        return (
            <AdminContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}

export default withRouter(AdminProvider);
