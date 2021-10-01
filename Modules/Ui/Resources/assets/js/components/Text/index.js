import React, {memo as Memo} from 'react';
import Translate from '../Translate';
//aper cuyc tu urdees uzum ogtagorces
const Text = Memo(props => {
    let string = <Translate val={props.text}/>

    switch (props.tag) {
        case 'h1':
            string = <h1 {...props.attr}
                         className={`comp-title ${props.className || 'h1'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h1>
            break;
        case 'h2':
            string = <h2 {...props.attr}
                         className={`comp-title ${props.className || 'h2'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h2>
            break;
        case 'h3':
            string = <h3 {...props.attr}
                         className={`comp-title ${props.className || 'h3'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h3>
            break;
        case 'h4':
            string = <h4 {...props.attr}
                         className={`comp-title ${props.className || 'h4'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h4>
            break;
        case 'h5':
            string = <h5 {...props.attr}
                         className={`comp-title ${props.className || 'h5'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h5>
            break;
        case 'h6':
            string = <h6 {...props.attr}
                         className={`comp-title ${props.className || 'h6'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</h6>
            break;
        case 'label':
            string = <label {...props.attr}
                            className={`comp-title ${props.className || ''} ${props.uppercase ? 'text-upper' : ''}`}
                            onClick={props.onClick || null}>{props.children || string}</label>
            break;
        default:
            string = <p {...props.attr}
                        className={`comp-title ${props.className || 'p'} ${props.uppercase ? 'text-upper' : ''}`}>{props.children || string}</p>
    }

    return string
})

export default Text;
