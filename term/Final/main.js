"use strict"
// Define SVG canvas size
let svgWidth = 1400;  
let svgHeight = 650;

let margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 80
}

// Create SVG element inside #canvas
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

// Add a background rectangle
svg.append("rect")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "#fcf5f7")




let data
//i didnt use xAxis, yAxis, xScale, yScale




//load data from d3.json
(async function () {
    data = await d3.json("data.json").then(buildVisualization)
    console.log("Data loaded:", data)
})();




//bulidVisualization
function buildVisualization(data) {
    //make original data tobe organize
    let renderData = organizeData(data);
    //will use for moodscale
    buildScales(renderData);
    //will use for drawing heart and legend
    drawVisualization(renderData, svg);
    return data;
}




//build color moodscale
let moodScale;

function buildScales(data) {
    //Create the linear color scale for mood. Mood 0–5 maps to pink→purple gradient.
    moodScale = d3.scaleLinear()
        .domain([0, 5])
        .range(["#ffc4dd", "#7b2cbf"]);
}




//organizeData
function organizeData(data) {
    //Group all listening entries by personality type.
    let grouped = d3.group(data, function(d){ return d.personality; });
    let result = [];

    grouped.forEach(function(records, type){
     //records-listening behavior; type-personality

        //calculate total listening minutes for this personality. then convert to hours.
        let totalMin = d3.sum(records, function(d){ return +d.duration; });
 
        //Convert minutes → hours; used to filled squares.
        let hours = totalMin / 60;

        //Average mood determines the color used to fill each square.
        let avgMood = d3.mean(records, function(d){ return +d.mood; });

        result.push({
            personality: type,
            hours: hours,
            mood: avgMood
        });
    });

    return result;
}





//Heart Shape Template
let heart = [
    [0,1,1,0,1,1,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0]
];

//draw visualization of heart
function drawVisualization(data, drawing) {
    //sort by A-Z
    data.sort(function(a,b){
        return d3.ascending(a.personality, b.personality);
    })

    let cellSize = 24;
    let spacing = 220;
    let startX = 80;
    let startY = 120;
    
    //each type has one heart
    data.forEach(function(person, i){

    //each heart appears side-by-side.
    let gx = startX + i * spacing;
    let gy = startY;

        
    //lable the personality type
    drawing.append("text")
        .attr("x", gx + 20)
        .attr("y", gy - 20)
        .attr("class", "personalityLabel")
        .text(person.personality);

      //cordinate 坐标 of suqares
        let coords = [];
        //"r" is row, "row" is data in one row
        heart.forEach(function(row, r){
            //"c" is the list number in one row ; "v" is the number in the "c",only is 1 or 0
            row.forEach(function(v, c){
                if (v == 1){
                    coords.push({ r:r, c:c });
                }
            });
        });

        //total number of fillable squares inside the heart template
        let maxCells = coords.length;

        
        //each cell represents 0.5 hour → filled = hours * 2.
        //example: 3 hours = 6 squares.
        let filled = Math.round(person.hours * 2);  
        if (filled > maxCells) filled = maxCells; 


        //draw each square of the heart
        coords.forEach(function(pos, index){

            //if index < filled, fill with mood color; otherwise draw grey.
            let shouldFill = (index < filled);

            let fillcolor;
            if (shouldFill){fillcolor = moodScale(person.mood);}
            else {fillcolor = "#fcfcfcff";}

            drawing.append("rect")
                .attr("x", gx + pos.c * cellSize)
                .attr("y", gy + pos.r * cellSize)
                .attr("width", cellSize - 2)
                .attr("height", cellSize - 2)
                .attr("fill", fillcolor)
                .attr("stroke", "#7d217764");
        });


        //add hours and mood text below each heart
        drawing.append("text")
            .attr("x", gx + 10)
            .attr("y", gy + 7 * cellSize + 25)
            .attr("class", "infoText")
            .text("Hours: " + person.hours.toFixed(1));

        drawing.append("text")
            .attr("x", gx + 10)
            .attr("y", gy + 7 * cellSize + 45)
            .attr("class", "infoText")
            .text("Mood: " + person.mood.toFixed(1));
    });

    drawLegend(drawing);
}





//Legend

function drawLegend(svg){

    let lx = 80;
    let ly = 450;

    //mood scale tittle
    svg.append("text")
        .attr("x", lx)
        .attr("y", ly - 25)
        .attr("class", "legendTitle")
        .text("Mood Color Scale");
 
    
    //define linearGradient using the same colors as moodScale.
    let defs = svg.append("defs");

    let gradient = defs.append("linearGradient") //defination 
        .attr("id", "moodGradient")
        .attr("x1", "0%").attr("x2", "100%")
        .attr("y1", "0%").attr("y2", "0%");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#ffc4dd");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#7b2cbf");

    
    //Draw the actual linear gradient bar
    svg.append("rect")
        .attr("x", lx)
        .attr("y", ly)
        .attr("width", 300)
        .attr("height", 24)
        .attr("fill", "url(#moodGradient)")
        .attr("stroke", "black");

    svg.append("text")
        .attr("x", lx)
        .attr("y", ly - 5)
        .attr("class", "legendText")
        .text("Mood 0");

    svg.append("text")
        .attr("x", lx + 300 - 40)
        .attr("y", ly - 5)
        .attr("class", "legendText")
        .text("Mood 5");

    

    // square defination
    svg.append("rect")
        .attr("x",lx)
        .attr("y", ly + 42)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill","#fcfcfcff")
        .attr("stroke","#49144664")

    svg.append("text")
        .attr("x", lx+ 25)
        .attr("y", ly + 60)
        .attr("class", "legendTitle")
        .text("1 filled square = 0.5 hour");

    

    // Data Note
    svg.append("text")
        .attr("x", lx)
        .attr("y", ly + 120)
        .attr("class", "legendNote")
        .style("font-size", "14px")
        .text("Data collected between Oct 17–22; Mood is the average of all recorded values.");

    //MBTI defination
    svg.append("text")
    .attr("x", lx)
    .attr("y", ly + 140)
    .attr("class", "legendNote")
    .text("MBTI types use four letters: E/I, N/S, F/T, P/J. These describe how people get energy, process info, make decisions,");

    svg.append("text")
    .attr("x", lx)
    .attr("y", ly + 155)
    .attr("class", "legendNote")
    .text("and approach life. Example: INFP = Introverted–Intuitive–Feeling–Perceiving.");
    
}
