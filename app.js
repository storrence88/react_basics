
window.onload = ticking_clock = () => {
    let t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString();
}

setInterval(ticking_clock, 1000);