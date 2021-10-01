import React, {memo as Memo} from 'react';
import {imagePathToWebP, isWebPSupport} from '../../utils';

const Image = Memo(({src, alt, webp, className, svg}) => {
    const isWebP = isWebPSupport();
    let image = src;

    if (isWebP && image && !svg) {
        image = webp ? webp : imagePathToWebP(image);
    }

    return (
        <div className={`image ${className || ''}`}>
            <img src={image} alt={alt || 'image'} draggable="false" className="image-tag"/>
        </div>
    );
})

export default Image
