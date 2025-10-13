"use strict";

document.getElementById("action").addEventListener("click", processForm);

let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

function processForm() {
    let xInput = Number(document.getElementById("xInput").value);
    let yInput = Number(document.getElementById("yInput").value);
    let choice = document.getElementById("bugMode").value;

    // clear the canvas
    drawing.selectAll("*").remove();

    // Draw the ladybug
    ladybug(drawing, xInput, yInput, true, choice);
}

