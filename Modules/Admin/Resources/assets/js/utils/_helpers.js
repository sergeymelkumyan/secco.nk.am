export const bytesToKbytes = bytes => Math.round((Number(bytes) / 1000) * 100) / 100 + 'kB';

export const fileType = mime => {
    if (!mime) {
        return 'file';
    }

    const type = mime.split(/[\s/]+/)[0];

    if (type === 'image' || type === 'video') {
        return type;
    }
    return 'file';
};


export const arrayMoveMutate = (array, from, to) => {
    const startIndex = to < 0 ? array.length + to : to;

    if (startIndex >= 0 && startIndex < array.length) {
        const item = array.splice(from, 1)[0];
        array.splice(startIndex, 0, item);
    }
};

export const arrayMove = (array, from, to) => {
    array = [...array];
    arrayMoveMutate(array, from, to);
    return array;
};

export const isNumber = value => {
    if (typeof value !== 'number') {
        return false
    }
    if (value !== Number(value)) {
        return false
    }

    return !(value === Infinity || value === !Infinity);
}
