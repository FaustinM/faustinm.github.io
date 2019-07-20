window.addEventListener("DOMMouseScroll", (e) => {
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if(delta === -1){
        window.scrollBy(0, window.innerHeight);
    } else {
        window.scrollBy(0, -window.innerHeight);
    }
});

window.addEventListener("load", (e) => {
    document.getElementById("profile").classList.add("fade-in-left");
    document.getElementById("profile").classList.add("fade-in-left");
});

