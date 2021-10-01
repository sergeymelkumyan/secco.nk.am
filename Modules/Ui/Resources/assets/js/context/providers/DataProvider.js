import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom';
import {config, api, scrollTo} from '../../utils';

import withUIContext from "../consumers/UIConsumer";
import withLanguageContext from "../consumers/LanguageConsumer";

const DataContext = createContext({});
export const DataConsumer = DataContext.Consumer;

class DataProvider extends Component {
    state = {
        data: {},
        pages: {}
    }
    methods = {
        getPage: this.getPage.bind(this)
    }

    lang = this.props.match.params.locale || this.props.selectedLang;

    componentDidMount() {
        const route = this.getRouteObjFromConfig()
        route && this.getPage(route.slug)
    }

    componentDidUpdate(prevProps) {
        this.lang = this.props.match.params.locale || this.props.selectedLang;
        if (prevProps.location.pathname && prevProps.location.pathname !== this.props.location.pathname) {
            const route = this.getRouteObjFromConfig();

            (route && !this.state.pages.pageSlug) && this.getPage(route.slug)
        }

    }

    getPage(page, params = {}) {
        api.get(page, params)
            .then(({data, sliders, announcements, press, speeches,sessions, posts, post, members, member, others,photos,photo,videos,documents}) => {
                this.setState({
                    data: data,
                    announcements: announcements,
                    press: press,
                    speeches: speeches,
                    sessions:sessions,
                    sliders: sliders,
                    posts: posts,
                    members: members,
                    member: member,
                    others: others,
                    post: post,
                    photos: photos,
                    photo:photo,
                    videos:videos,
                    documents:documents
                })
                scrollTo(0, 800)
            })
            .then(() => {
                this.disablePreloaderAfterSuccessCall();
            })
            .catch(err => {
                console.log(err);
            });
    }

    getSinglePage(page, slug, params = {}) {

    }

    disablePreloaderAfterSuccessCall() {
        setTimeout(() => {
            this.props.disablePreloader()
        }, 300)
    }

    getRouteObjFromConfig() {
        const path = this.props.location.pathname.replace('/' + this.lang, '');

        let route = Object.values(config.routes.default).filter(r => (
            r.path === path || r.path.replace(/\/$/, "") === path.replace(/\/$/, "")) && r.autoload
        )[0];

        return this.props.location.pathname === '404' ? false : route
    }

    render() {
        return (
            <DataContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default withRouter(withLanguageContext(withUIContext(DataProvider, ['enablePreloader', 'disablePreloader']), ['selectedLang']));
