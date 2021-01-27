let simulation, circles
let dataset, svg, barchart


const races = ['White', 'Asian','Hispanic', 'Black',  'Other']

const data1 = [
    {LOCATIONNAME: "NYC DOE District 2", 
    Other: .0652062,
    Black: .0769146,
    Hispanic: .1765096,
    Asian: .2659794,
    White: .4153903},

    {LOCATIONNAME:  "PS 33 Chelsea Prep",
    Other: .0859649,
    Black: .1736842,
    Hispanic: .2842105,
    Asian: .245614,
    White: .2105263}
    ]

const data2 = [34.01549312,5.781015146,8.000924962,5.249161753,7.399699387,6.035379813,11.16892126,13.3194589,6.266620419,8.185917447,13.3194589,11.09954908,8.417158053,5.781015146,3.352988785,7.931552781,7.399699387,12.76448144,6.127876055,10.89143254,11.95513932,12.30200023,3.699849694,9.550237022,6.104751994,7.723436235,9.318996416,7.191582842,7.399699387,7.654064054,6.035379813,7.445947508,4.162330905,9.550237022,14.45253787,6.867845994,4.948548965,6.31286854,4.162330905,5.827263267,11.70077466,12.71823332,5.827263267,12.23262805,10.08209042,12.48699272,7.399699387,6.844721933,10.10521448,7.654064054,14.38316568,4.694184299,8.787143022,9.018383628,7.330327205,8.740894901,7.931552781,13.3194589,14.38316568,3.676725633,5.781015146,5.503526419,14.91501908,6.798473812,9.550237022,4.439819632,15.44687247,7.0990866,8.740894901,4.971673026,6.035379813,8.740894901,14.38316568,10.33645508,13.85131229,8.463406174,7.977800902,5.711642965,11.16892126,8.740894901,8.278413689,6.590357267,6.590357267,9.550237022,6.382240721,9.48086484,10.35957914,7.12221066,6.31286854,6.31286854,5.179789571,6.867845994,4.647936178,7.330327205,8.417158053,9.295872355,6.636605388,3.653601572,8.394033992,7.654064054,3.653601572,8.278413689,5.734767025,6.058503873,13.29633484,5.734767025,2.867383513,7.0990866,6.636605388,12.51011678,4.717308359,12.20950399,5.249161753,6.035379813,6.636605388,9.596485143,10.61394381,6.058504,13.29633,10.01272,5.781015,6.058504,10.10521,9.295872,7.399699,5.318534,6.312869,8.463406,8.99526,10.12834,4.046711,10.61394,11.42329,6.243496,6.844722,10.08209,5.827263,9.272748,7.191583,7.977801,4.092959,4.717308,5.850387,6.03538,9.480865,10.08209,14.40629,14.66065,7.399699,9.873974,9.272748,5.781015,6.104752,9.550237,9.550237,10.5677,8.417158,12.57949,11.74702,7.330327,5.781015,4.694184,10.61394,5.757891,6.590357,10.05897,8.139669,8.740895,8.671523,13.04197,5.17979,7.908429,3.653602,7.931553,6.867846,10.12834,7.977801,11.16892,10.08209,3.907966,10.35958,8.740895,9.272748,4.717308,3.653602,8.99526,8.671523,8.417158,10.33646,4.43982,4.925425,9.804602,4.717308,4.43982,12.2095,13.31946,9.550237,9.064632,4.994797,9.804602,9.596485,9.804602,5.734767,7.469072,7.654064,6.058504,9.550237,15.44687,10.08209,10.08209,7.052838,5.249162,10.12834,12.51012,9.272748,3.653602,12.16326,9.480865,13.85131,4.717308,10.89143,9.018384,8.99526,7.954677,5.757891,6.867846,4.092959,8.209042,12.16326,10.08209,8.740895,8.99526,7.908429,7.607816,6.867846,11.70077,11.37704,6.058504,8.25529,12.23263,12.51012,7.122211,11.95514,5.249162,4.116083,10.89143,7.399699,7.399699,8.185917, 17.06556,7.885305,6.867846,10.35958,5.804139,10.61394,8.417158,8.740895,7.330327,5.17979,4.994797,7.654064,12.51012,6.03538,9.480865,8.787143,7.191583,6.77535,4.694184,7.122211,6.844722,12.51012,6.844722,7.723436,14.10568,6.382241,3.884842,6.382241,14.31379,7.399699,5.804139,5.804139,5.781015,5.249162,9.550237,4.162331,9.480865,7.931553,12.51012,4.694184,10.61394,5.041045,7.399699,11.40016,3.69985,11.23829,15.77061,5.503526,5.249162,4.694184,7.122211,12.83385,5.503526,6.312869,5.827263,7.075963,18.68424,11.1458,6.844722,7.862181,5.249162,8.116545,9.480865,11.21517,7.122211,6.867846,11.16892,5.572899,5.827263,8.671523,6.590357,13.85131,8.949011,5.804139,10.54457,6.844722,7.330327,7.122211,15.47,3.630478,7.885305,7.885305,11.49266,5.850387,15.47,2.566771,11.21517,10.03584,5.17979,9.873974,7.931553,8.463406,5.711643,6.590357,12.27888,6.844722,6.867846,7.654064,5.781015,8.740895,5.734767,5.827263,8.99526,3.907966,14.17505,7.931553,6.26662,11.42329,10.12834,9.550237,11.6314,6.520985,13.57382,9.804602,4.971673,4.116083,6.382241,7.191583,12.27888,5.804139,8.463406,7.191583,8.185917,6.26662,2.844259,6.26662,6.520985,6.26662,7.931553,4.925425,7.931553,11.6314,5.572899,11.70077,10.33646,7.908429,12.76448,6.844722,8.671523,8.99526,5.249162,14.66065,7.954677,9.249624,11.6314,5.781015,7.954677,8.99526,9.804602,7.931553,11.42329,7.145335,6.520985,12.48699,8.532778,8.740895,5.041045,7.399699,6.590357,7.862181,9.550237,6.798474,8.463406,6.312869,10.54457,6.844722,8.949011,10.61394,7.862181,6.844722,10.12834,5.804139,6.03538,7.399699,6.382241,10.08209,6.636605,7.931553,6.382241,6.590357,14.36004,7.954677,6.844722,8.532778,14.63753,16.0481,8.209042,6.058504,12.51012,13.04197,9.295872,9.550237,4.370447,5.781015,10.10521,10.61394,6.058504,9.318996,9.804602,9.272748,2.821135,7.330327,8.740895,16.81119,8.532778,8.99526,5.757891,8.185917,10.29021,6.104752,7.607816,4.370447,8.463406,4.694184,6.867846,8.185917,5.017921,10.08209,3.907966,12.27888,9.295872,8.185917,9.596485,4.717308,5.17979,13.89756,12.48699,11.16892,10.61394,6.636605,11.74702,14.91502,3.098624,7.075963,11.1458,5.804139,9.295872,4.948549,8.949011,9.064632,3.977338,6.243496,13.04197,10.89143,5.249162,12.02451,9.272748,5.781015,7.330327,4.162331,7.052838,3.029252]


let groups = d3.map(data1, function(d){return(d.LOCATIONNAME)}).keys()

const classname = ['Class A', 'Class B', 'Class C', 'Class D']

const classnamexy =  {'Class A':  [5,100],
            'Class B':  [5,225],
            'Class C':  [5,350],
            'Class D':  [5,500]   }


const margin = {left: 170, top: 90, bottom: 50, right: 20}
const width = 1000 - margin.left - margin.right
const height = 950 - margin.top - margin.bottom

const colors = ['#00FF00', '#FF0000', '#FFA500', '#0000ff', '#808080']
const subgroups = ["Other","Black", "Hispanic","Asian", "White"]
let formatPercent = d3.format(".0%");

const EDlegend = ["Not Economically Disadvantaged", "Economically Disadvantaged"]

const barPadding = .2;
const axisTicks = {qty: 5, outerSize: 0, dateFormat: '%m-%d'};

const colorsgrp = ['#000080','red']

const colorshist = ['#FFA500','#000080']
  
const data3 = [
    {
      "grp":"Economically Disadvantaged",
      "Rest":.07,
      "NYC":.13
    },
    {
      "grp":"Race",
      "NYC":.30,
      "Rest":.13
    },
    {
      "grp":"English Language Learners",
      "NYC":.56,
      "Rest":.39
    },
    {
      "grp":"Students with Disabilities",
      "NYC":.92,
      "Rest":.77
    }
  ];

  data3new = data3.map(i => {
    i.grp = i.grp;
      return i;
  });

const  NYCpercents = [
    {
    percent: "13%",
    ypos: 582,
    xpos: 137},
    
    {percent: "30%",
    ypos: 468,
    xpos: 137},
    
    {percent: "56%",
    ypos:292,
    xpos: 137},
    
    {percent: "92%",
    ypos: 50,
    xpos: 137}]

const  Restpercents = [
    {
    percent: "7%",
    ypos: 620,
    xpos: 50},
    
    {percent: "13%",
    ypos: 582,
    xpos: 50},
    
    {percent: "39%",
    ypos:405,
    xpos: 50},
    
    {percent: "77%",
    ypos: 150,
    xpos: 50}]


d3.csv('PS33_12_20_new.csv', function(d){
    return {
        Race: d.Race,
        ED: +d.EDstat,
        OfficialClass: d.OfficialClass,
        OfficialClassOne: d.OfficialClassOne,
        OfficialClassTwo: d.OfficialClassTwo,
        ClassRoll: +d.ClassRoll,
        EDRoll: +d.EDRoll,
        EDRollOne: +d.EDRollOne, 
        EDRollTwo: +d.EDRollTwo
    };
}).then(data => {
    dataset = data
    console.log(dataset)
    createScales()
    setTimeout(drawInitial(), 
    // draw1(), draw(2), draw3(), draw4(), draw5(),draw6(), 
    100)
})

//Create all the scales and save to global variables

function createScales(){
    // Race color scale
    raceColorScale = d3.scaleOrdinal()
                .domain(["White", "Black", "Asian", "Hispanic", "Other"])
                .range([ '#00FF00', "#0000FF", '#FF0000', '#FFA500', '#808080']);
    
    // ED colorscale
    EDColorScale = d3.scaleOrdinal()
                .domain([0,1])
                .range([ '#D3D3D3','#000080']);

    EDColorScaleLegend = d3.scaleOrdinal()
                .domain(["Not Economically Disadvantaged","Economically Disadvantged"])
                .range([ '#D3D3D3','#000080']);
    // Class color scale   -- May not need this
    classColorScale = d3.scaleOrdinal()
                .domain(["Class A", "Class B", "Class C", "Class D"])
                .range([ '#00FF00', '#FF0000', '#FFA500', '#0000ff']);
    
    classYScale = d3.scaleBand()
                .domain(['Class A', 'Class B', 'Class C', 'Class D'])
                .range([100,500]) 
                .padding(0.1)
    
    classXScale = d3.scaleLinear()
                .domain([1,30])
                .range([margin.left, width+250])

    x = d3.scaleBand()
                .domain(groups)
                .range([50, 800])
                .padding([0.2])
    
    y = d3.scaleLinear()
                .domain([0, 1.00])
                .range([ height, 100 ]);


    xhist = d3.scaleLinear()
                .domain([0, 40])
                .range([50, 800]);

    histogram = d3.histogram()
                .value(function(d) {
              return d})   
                .domain(xhist.domain())  
                .thresholds(xhist.ticks(50));
    
    bins = histogram(data2);

    yhist = d3.scaleLinear()
                .range([height, 0]);
    yhist.domain([0, d3.max(bins, function(d) { return d.length; })]); 

    xScale0grp = d3.scaleBand()
			.domain(data3new.map(d => d.grp))
			.range([50, 1000])
            .padding(barPadding);
      
    xScale1grp = d3.scaleBand()
			.domain(['Rest','NYC'])
        .range([0, xScale0grp.bandwidth()]);
      
    yScalegrp = d3.scaleLinear()
			.domain([0, d3.max(data3new, d =>  d.Rest > d.NYC ? d.Rest: d.NYC )])
			.range([height - margin.top - margin.bottom, 50]);
    }


    function createraceLegend(){
        let svg = d3.select('#legend')

        svg.append('g')
            .attr('class', 'raceLegend')
            .attr('transform', `translate(100,50)`)
    
        raceLegend = d3.legendColor()
                                .shape('path', d3.symbol().type(d3.symbolCircle).size(400)())
                                .shapePadding(10)
                                .scale(raceColorScale)
        
        d3.select('.raceLegend')
            .call(raceLegend)
    }

    function createraceLegend3(){
        let svg = d3.select('#legend3')

        svg.append('g')
            .attr('class', 'raceLegend3')
            .attr('transform', `translate(100,50)`)
    
        raceLegend3 = d3.legendColor()
                                .shape('path', d3.symbol().type(d3.symbolCircle).size(400)())
                                .shapePadding(10)
                                .scale(raceColorScale)
        
        d3.select('.raceLegend3')
            .call(raceLegend3)
    }

    function createEDLegend(){
        let svg = d3.select('#legend2')

        svg.append('g')
            .attr('class', 'EDLegend')
            .attr('transform', `translate(20,50)`)
    
        EDLegend = d3.legendColor()
                                .shape('path', d3.symbol().type(d3.symbolCircle).size(400)())
                                .shapePadding(10)
                                .scale(EDColorScaleLegend)
        
        d3.select('.EDLegend')
            .call(EDLegend)
    }


function drawInitial(){
    createraceLegend()
    createraceLegend3()
    createEDLegend()
    
let svg = d3.select("#vis")
    .append("svg")
    .attr("height",1000)
    .attr("width",850)
    .attr('opacity', 1)

//  elements of the bar chart


// Set up simulation
simulation = d3.forceSimulation()
    .force("x",d3.forceX(width/2).strength(0.05))
    .force("y",d3.forceY(height/2).strength(0.05))
    .force("collide",d3.forceCollide(30))

circles = svg.selectAll("circle")
            .data(dataset)
            .enter().append("circle")
            .attr('class','circles')
            .attr('opacity', 0)
            .attr("r", 20)
            .attr("fill","#f5f4f1")
    

            
simulation.nodes(dataset)
            .on("tick", ticked)
    
function ticked(){
            circles
            .attr('class','circles')
            .attr("cx",function(d){
                return d.x
            })
            .attr("cy", function(d){
                return d.y
            })
        }

        simulation.stop()

let groups = d3.map(data1, function(d){return(d.LOCATIONNAME)}).keys()


  
   
  
    let stackedData = d3.stack()
      .keys(subgroups)
      (data1)
  
    // Show the bars
    svg.append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter().append("g")
      .attr("class", "barchart")
        .attr("fill", function(d) { return raceColorScale(d.key); })
        .selectAll("rect")
        .attr("class","barchart")
        .data(function(d) { return d; })
        .enter().append("rect")
          .attr("x", function(d) { return x(d.data.LOCATIONNAME); })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .attr("width",x.bandwidth())

          svg.append("g")
    .attr("transform",  'translate(0,' + y(0) + ')')
        .attr('class', 'barchart')
      .style("font", "18px times")
      .call(d3.axisBottom(x).tickSizeOuter(0));
  
    svg.append("g")
        .style("font", "18px times")
        .attr('class','barchart')
        .attr("transform", "translate(50,0)")
        .call(d3.axisLeft(y).ticks(10)
        .tickFormat(formatPercent))
        ;
       


// Draw legend
var legend = svg.selectAll(".legend")
  .data(colors)
  .enter().append("g")
  .attr("class", "barchart")
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
 
legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("class", "barchart")
  .attr("height", 18)
  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
legend.append("text")
  .attr("x", width - 100)
//   .attr("class", "legend")
  .attr("class","barchart")
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d, i) { 
    switch (i) {
      case 4: return "White";
      case 3: return "Asian";
      case 2: return "Hispanic";
      case 1: return "Black";
      case 0: return "Other"
    }
  });
// grouped barchart
  let grp = svg.selectAll(".grp")
  .data(data3new)
  .enter().append("g")
  .attr("class", "grp")
  .attr('opacity',0)
  .attr("transform", d => `translate(${xScale0grp(d.grp)},0)`);
  
  /* Add NYC bars */
  grp.selectAll(".bar.NYC")
  .data(d => [d])
  .enter()
  .append("rect")
  .transition(5000).delay(100).delay(1)
  .attr("class", "grp")
  .attr('opacity',0)
  .style("fill","#000080")
  .attr("x", d => xScale1grp('NYC'))
  .attr("y", d => yScalegrp(d.NYC))
  .attr("width", xScale1grp.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScalegrp(d.NYC)
  })

  grp.append('text')
.data(NYCpercents)
  .text(function(d,i) {return d.percent})
  .attr("x", function(d,i) {return d.xpos})
  .attr("y", function(d,i) {return d.ypos-5})
  .attr("font-family" , "sans-serif")
    .attr("font-size" , "20px")
    .attr("fill" , "black")
    .attr("text-anchor", "middle");
  
  /* Add Rest bars */
  grp.selectAll(".bar.Rest")
  .data(d => [d])
  .enter()
  .append("rect")
  .transition(5000).delay(100).delay(1)
  .attr("class", "grp")
  .attr('opacity',0)
  .style("fill","red")
  .attr("x", d => xScale1grp('Rest'))
  .attr("y", d => yScalegrp(d.Rest))
  .attr("width", xScale1grp.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScalegrp(d.Rest)
  })
  
  grp.append('text')
    .data(Restpercents)
    .text(function(d,i) {return d.percent})
    .attr("x", function(d,i) {return d.xpos})
    .attr("y", function(d,i) {return d.ypos-5})
  .attr("font-family" , "sans-serif")
    .attr("font-size" , "20px")
    .attr("fill" , "black")
    .attr("text-anchor", "middle");;


  let xAxisgrp = d3.axisBottom(xScale0grp).tickSizeOuter(axisTicks.outerSize);

  let yAxisgrp = d3.axisLeft(yScalegrp)
          .ticks(axisTicks.qty)
          .tickSizeOuter(axisTicks.outerSize)
  
  // Add the X Axis
  svg.append("g")
  .style("font", "20px times")
   .attr("class", "grp")
   .attr('opacity',0)
   .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
   .call(xAxisgrp)
    .selectAll("text")
    // .attr("y", 0)
    // .attr("x", 9)
    .attr("transform", "rotate(0)")
  
  // Add the Y Axis
  svg.append("g")
  .style("font", "20px times")
   .attr("class", "grp")
   .attr('opacity',0)
   .attr("transform", "translate(50,0)")
   .call(yAxisgrp
   .tickFormat(formatPercent))
  
  
  
  /* Legend */
  var legendgrp = svg.selectAll(".legendgrp")
  .data(colorsgrp)
  .enter().append("g")
  .attr("class", "grp")
  .attr('opacity',0)
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
  
  legendgrp.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .attr("class", "grp")
  .attr('opacity',0)
  .style("fill", function(d, i) {return colorsgrp.slice().reverse()[i];});
  
  legendgrp.append("text")
  .attr("x", width - 130)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("font", "20px times")
  .attr("class", "grp")
  .attr('opacity',0)
  .style("text-anchor", "start")
  .text(function(d, i) { 
    switch (i) {
      case 0: return "Rest of NYS";
      case 1: return "NYC"
    }
  });
  


}

function draw1(){

    simulation.stop()
    
    let svg = d3.select("#vis")
          .append("svg")
          .attr("width", 1000)
          .attr("height", 950)
          .append('g')
    
    svg.selectAll('.barchart').attr('opacity', 1)

    svg.selectAll(".circles").transition().attr('opacity', 0)
    
    }
    


function draw2(){

    simulation.stop()

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)

  svg.selectAll("circle")
  .transition().duration(500).delay(100)
  .attr('opacity', 1)
  .attr("r", 15)
.attr("fill",function(d,i) {return raceColorScale(d.Race);})

svg.selectAll('.barchart').attr('opacity', 0)
svg.selectAll(".hist").attr("opacity",0)

simulation.alpha(.95).restart()



}
            
function draw3(){

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)

    svg.selectAll('.barchart')
    .attr('opacity', 0)

    svg.selectAll(".hist").attr("opacity",0)

    svg.selectAll('circle')
    .transition().duration(5000).delay(100)
    .attr('fill', function(d,i) {return raceColorScale(d.Race);})
    .attr('r', 15)
    .attr('cx', function(d, i) {return classXScale(d.ClassRoll) + 5;})
    .attr('cy', function(d, i){ return classYScale(d.OfficialClass) ;});


    simulation.stop()

}

function draw4(){

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)

    svg.selectAll('.barchart')
    .attr('opacity', 0)

    svg.selectAll(".hist").attr("opacity",0)

    svg.selectAll('circle')
    .transition().duration(5000).delay(100)
    .attr('fill', function(d,i) {return EDColorScale(d.ED);})
    .attr('r', 15)
    .attr('cx', function(d, i) {return classXScale(d.EDRoll) + 35;})
    .attr('cy', function(d, i){ return classYScale(d.OfficialClass) ;});

    simulation.stop()

}

function draw5(){

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

    svg.selectAll('.barchart')
    .attr('opacity', 0)

    svg.selectAll(".hist").attr("opacity",0)

    svg.selectAll('circle')
    .transition().duration(5000).delay(100)
    .attr('fill', function(d,i) {return EDColorScale(d.ED);})
    .attr('r', 15)
    .attr('cx', function(d, i) {return classXScale(d.EDRollOne) + 5;})
    .attr('cy', function(d, i){ return classYScale(d.OfficialClassOne) ;});

    

    simulation.stop()

}


function draw6(){

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)

    svg.selectAll('.barchart')
    .attr('opacity', 0)

    svg.selectAll(".hist").attr("opacity",0)

    svg.selectAll('circle')
    .transition().duration(5000).delay(100)
    // .attr('fill', '#f5f4f1')
    .attr('fill', function(d,i) {return EDColorScale(d.ED);})
    .attr('r', 15)
    .attr('cx', function(d, i) {return classXScale(d.EDRollTwo) + 5;})
    .attr('cy', function(d, i){ return classYScale(d.OfficialClassTwo) ;});

    

    simulation.stop()

}

function draw7(){

    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)
    

    svg.selectAll('circle')
          .transition().duration(50).delay(1)
          .attr('fill', '#f5f4f1')
          .attr('r', 15)
          .attr('cx', function(d, i) {return classXScale(d.EDRollTwo) + 5;})
          .attr('cy', function(d, i){ return classYScale(d.OfficialClassTwo) ;});


 svg.selectAll(".grp").attr("opacity",0)
 svg.selectAll('.barchart')
    .attr('opacity', 0)
      
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.attr('class','hist')
.style("font", "20px times")
.call(d3.axisBottom(xhist))


svg.append("g")
.attr('class','hist')
.attr("transform", "translate(50,0)")
.style("font", "20px times")
.call(d3.axisLeft(yhist))

    svg.append("g").selectAll("rect")
                        .data(bins)
                        .enter()
                        .append("rect")
                        .transition(5000).delay(100).delay(1)
                        .attr("class","hist")
                          .attr("x", 1)
                          .attr("transform", function(d) { return "translate(" + xhist(d.x0) + "," + yhist(d.length) + ")"; })
                          .attr("width", function(d) { return xhist(d.x1) - xhist(d.x0) -1 ; })
                          .attr("height", function(d) { return height - yhist(d.length); })
                          .style("fill", function(d){ if(d.x0<32){return '#000080'} else {return '#FFA500'}})
                         
       
                          /* Legend */
var legendgrp = svg.selectAll(".legendgrp")
.data(colorshist)
.enter().append("g")
.attr("class", "hist")
.attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });

legendgrp.append("rect")
.attr("x", width - 18)
.attr("width", 18)
.attr("height", 18)
.attr("padding", 10)
.attr("class", "hist")
.style("fill", function(d, i) {return colorshist.slice().reverse()[i];});

legendgrp.append("text")
.attr("x", width - 375)
.attr("y", 9)
.attr("dy", ".35em")
.attr("class", "hist")
.style("text-anchor", "start")
.style("font", "20px times")
.text(function(d, i) { 
  switch (i) {
    case 1: return "2019-20 PS33 Economic Segregation Index";
    case 0: return "Simulated Economic Segregation Index"
  }
});
    

}

function draw8(){
    let svg = d3.select("#vis")
    .select('svg')
    .attr('width', 1000)
    .attr('height', 950)

    svg.selectAll(".hist").attr("opacity",0)
    svg.selectAll('.barchart').attr('opacity', 0)
    svg.selectAll(".grp").attr("opacity",1).transition(5000).delay(100)
}



let activationFunctions = [
    draw1,
    draw2,
    draw3,
    draw4,
    draw5, 
    draw6, 
    draw7,
    draw8
]

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    
    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1; 
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(i => {
        activationFunctions[i]();
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 0.7){

    }
})
