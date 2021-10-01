import React, {memo as Memo} from 'react';
import _ from 'lodash'
import withLanguageContext from "../../context/consumers/LanguageConsumer";

const Translate = Memo((props) => {
    let compiled = props.languages?.[props.selectedLang]?.[props.val] && _.template(props.languages[props.selectedLang][props.val]);
    return (
        (compiled && compiled(props.vars)) || props.val || null
    )
})

export default withLanguageContext(Translate, '*');
