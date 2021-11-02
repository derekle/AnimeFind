// math - contains any function that just handles processing and manipulation of data outside of the components.

// truncatestring - used to truncate the provided string to  provided maximum6 length.
export default function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num)
        return subStr + '...'
    } else {
        return str
    }
}