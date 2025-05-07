
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    };
};



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredObj = items.filter((element) => element.rating >= 4);
    return filteredObj;
};



