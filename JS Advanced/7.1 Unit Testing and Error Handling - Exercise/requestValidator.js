function requestValidator(data) {

    let methodValidator = [`GET`, `POST`, `DELETE`, `CONNECT`]
    let versionValidator = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`]
    let uriPattern = /^[\w.]+$/g;
    let messageValidator = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!methodValidator.includes(data.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!data.uri || !data.uri === "*" || !data.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!versionValidator.includes(data.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!data.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (let el of messageValidator) {
        if (data.message.includes(el)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    return data;

}

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));