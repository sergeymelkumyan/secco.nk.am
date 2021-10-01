export const isWebPSupport = () => {
    const elem = typeof document === 'object' ? document.createElement('canvas') : {};
    if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false
}

export const imagePathToWebP = (src) => {
    let pos = src.lastIndexOf("."),
        image = src.substr(0, pos < 0 ? src.length : pos) + ".webp";
    return image;
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
