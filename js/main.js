let data;
let scatterplot;

// const dispatcher = d3.dispatch('filterCities'); // initialize dispatcher that is used to orchestrate events

// load data from CSV file asynchronously and render charts
d3.csv('data/Agrofood_co2_emission.csv').then(_data => {
    data = _data;
    data.forEach(d => {
        d.rent = +d['Rural population'];
        d.insurance = +d['Urban population'];
    });

    // console.log(data);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // initialize color scale based on city name

    scatterplot = new ScatterPlot({parentElement: '#scatterplot'}, data, colorScale);
    scatterplot.updateVis();

    

}).catch(error => console.error(error));

// based on the click event in bar chart, filter and update the data in scatter plot accordingly
// function filterData() {
//     if (cityFilter.length === 0) {
//         scatterplot.data = data;
//     } else {
//         scatterplot.data = data.filter(d => cityFilter.includes(d.city));
//     }
//     scatterplot.updateVis();
// }

// dispatcher.on('filterCities', selectedCities => {
//     if (selectedCities.length === 0) {
//         scatterplot.data = data;
//     } else {
//         scatterplot.data = data.filter(d => selectedCities.includes(d.city));
//     }
//     scatterplot.updateVis();
// });