function format(str) {
    for(var i = 1; i < arguments.length; ++i) {
        var attrs = arguments[i];
        for(var attr in attrs) {
            if (attrs.hasOwnProperty(attr)) {
                str = str.replace(new RegExp('\\{' + attr + '\\}', 'g'), attrs[attr]);
            }
        }
    }
    return str;
}

module.exports = format;
