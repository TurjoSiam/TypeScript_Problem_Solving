
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
};



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredObj = items.filter((element) => element.rating >= 4);
    return filteredObj;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) {
        return [];
    }
    else {
        const concatenatedArray = arrays[0].concat(...arrays.slice(1));
        return concatenatedArray;
    }
};




