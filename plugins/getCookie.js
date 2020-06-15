const getCookie = function(cname, req) {
    let name = cname + '='
    let decodedCookie
    if (typeof window === 'undefined') {
        decodedCookie = decodeURIComponent(req.headers.cookie)
    } else decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}
export default getCookie


// exmaples:

// from request
// const token = getCookie("token", req);

// inside a component
// import getCookie from "~/plugins/getCookie";
// const savedtoken = getCookie("token");