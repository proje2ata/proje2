function parcala(cookiename) {
    var cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}

function checkCookie() {
    console.log("checkCookie");
    var check = parcala("check");

    if (check != "true") {
        window.location.href = "index.html";
    }
}

window.onload = checkCookie();