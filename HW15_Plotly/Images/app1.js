//Use D3 library to read in samples.json

// function readSamples(){
//     d3.json('data/samples.json').then((data) => {console.log(data)
//     var samples = data.sample_values;
//     console.log(samples);
//     var ids = data.dataset.otu_ids;
//     console.log(ids);
//     var labels = data.dataset.otu_labels;
//     console.log(labels);

//     var trace1 = {
//         type: "bar",
//         x: samples,
//         y: ids,
//         marker:{
//         color: 'red'
//         },
//         orientation: 'h'
//     };

//     var data = [trace1];

//     var layout = {
//         title:'OTU',
//         yaxs: {
//         autorange: true,
//         type: 'linear'
//         }
//     };
//     Plotly.newPlot("bar", data, layout);
//     })
// }

// readSamples();
    
    //bubble
    var trace2 = {
        x: data.dataset.otu_ids,
        y: data.dataset.sample_values,
        marker: {
            size: data.dataset.sample_values[0],
            color: data.dataset.otu_ids
        },
        text: data.dataset.otu_labels
    };

    var layout2 = {
        xaxis: {title: "OTU ID"},
        height: 600,
        width: 1000
    };

    var data2 = [trace2];

    Plotly.newPlot("bubble", data2, layout2)


    // function readSamples(){
    //     d3.json('data/samples.json').then((data) => {console.log(data)
    //     var samples = data.dataset.sample_values;
    //     console.log(samples);
    //     var ids = data.dataset.otu_ids;
    //     console.log(ids);
    //     var labels = data.dataset.otu_labels;
    //     console.log(labels);


    
//Possible method for drop down?

// function init(){
//     d3.json('data/samples.json').then((data) => {
//         var list = data.names;
//         var dropdown = d3.select('selDataset');
//         list.forEach(element => {
            
//         })
//     })
// }