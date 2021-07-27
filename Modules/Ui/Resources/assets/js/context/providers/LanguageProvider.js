import React, {Component, createContext} from 'react';
import _ from 'lodash';
import {config} from "../../utils";
import {withRouter} from 'react-router-dom';
import Languages from '../../translations';


const LanguageContext = createContext({});
export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
    state = {
        selectedLang: this.props.match.params.locale || (localStorage?.lang !== 'undefined' && localStorage.lang) || config.defaultLanguage,
        languages: {...Languages}
    }
    methods = {
        selectLanguage: this.selectLanguage.bind(this),
        translate: this.translate.bind(this)
    }

    componentDidUpdate() {
        if (this.props.match.params.locale && this.props.match.params.locale !== this.state.selectedLang) {
            this.selectLanguage(this.props.match.params.locale)
        }
    }

    getLanguageParams(lang) {
        return this.state.languages[lang].params
    }

    selectLanguage(lang) {
        this.setState({selectedLang: lang}, () => {
            localStorage.setItem('lang', lang)
        })
    }

    translate(val, vars) {
        const compiled = (_.isString(val) && this.state.languages[this.state.selectedLang][val]) && _.template(this.state.languages[this.state.selectedLang][val]);
        return (compiled && compiled(vars)) || val || 'Please Set Trnaslate Value'
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export default withRouter(LanguageProvider);
