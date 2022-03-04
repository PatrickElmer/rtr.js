const rtr = document.querySelector("#rtr")

window.addEventListener("DOMContentLoaded", onRouteChange)
window.addEventListener("hashchange", onRouteChange)

function onRouteChange() {
    let uri = window.location.hash.substr(1) || 'index'
    fetch(`pages/${uri}.html`)
        .then(res => { return res.text() })
        .then(data => { rtr.innerHTML = data })
}
