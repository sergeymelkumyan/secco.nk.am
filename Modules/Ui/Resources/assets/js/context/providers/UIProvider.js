import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom';

const UIContext = createContext({});
export const UIConsumer = UIContext.Consumer;


class UIProvider extends Component {
    state = {
        loading: false,
        preloader: true,
    }
    methods = {
        enablePreloader: this.enablePreloader.bind(this),
        disablePreloader: this.disablePreloader.bind(this),
    }

    componentDidMount() {
        this.checkNotFoundPage()
    }

    componentDidUpdate(prevProps) {
        this.checkNotFoundPage()
    }

    checkNotFoundPage() {
        if (this.props.location.pathname === '/404') {
            this.disablePreloader();
        }
    }

    enablePreloader() {
        !this.state.preloader && this.setState({preloader: true})
    }

    disablePreloader() {
        this.state.preloader && setTimeout(() => {
            this.setState({preloader: false})
        }, 500)
    }


    render() {
        return (
            <UIContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </UIContext.Provider>
        )
    }
}

export default withRouter(UIProvider);
