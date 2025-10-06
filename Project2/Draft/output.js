"use strict"



function output(content, htmlFlag) {
    let o = document.getElementById("output");
    if (content == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        if (!htmlFlag) {
            let p = document.createElement("p");
            let tn = document.createTextNode(content);
            p.appendChild(tn);
            o.appendChild(p);
        } else {
            o.innerHTML += content;
        }
    }
}



function rule() {
    let o = document.getElementById("output");
    let hr = document.createElement("hr");
    o.appendChild(hr);
}



function clear() {
    let o = document.getElementById("output");
    o.replaceChildren();
}