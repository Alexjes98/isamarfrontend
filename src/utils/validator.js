export const isEmpty = (string) => {
    return string === ""; 
}

export const notPhoneNumber = (string) => {
    const regex = /(?=.*?\d{3}( |-|.)?\d{4})((?:\+?(?:1)(?:\1|\s*?))?(?:(?:\d{3}\s*?)|(?:\((?:\d{3})\)\s*?))\1?(?:\d{3})\1?(?:\d{4})(?:\s*?(?:#|(?:ext\.?))(?:\d{1,5}))?)\b/gi;
    return !regex.test(string);
}

export const weakPassword = (string) => {
    const regex = /.{5,}/gm;
    return !regex.test(string);
}