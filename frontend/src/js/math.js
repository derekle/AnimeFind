// math - contains any function that just handles processing and manipulation of data outside of the components.

// truncatestring - used to truncate the provided string to  provided maximum6 length.
export const truncateString = function(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num)
        return subStr + '...'
    } else {
        return str
    }
}

// parseurl - used to bridge the parameters in a search url with params and the resource route in the api server
export const  parseURL = function() {
    let search = window.location.search;
    let params = new URLSearchParams(search);

    return params.get('genre')
        ? '/search/genre/'+params.get('genre')
        : '/search/'+params.get('q')
}