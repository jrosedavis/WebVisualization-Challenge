//Use D3 library to read in samples.json

function readSamples(){
    d3.json('data/samples.json').then((data) => {console.log(data)
    var samples = data.dataset.sample_values;
    console.log(samples);
    var ids = data.dataset.otu_ids;
    console.log(ids);
    var labels = data.dataset.otu_labels;
    console.log(labels);

    var trace1 = {
        type: "bar",
        x: samples,
        y: ids,
        marker:{
        color: 'red'
        },
        orientation: 'h'
    };

    var data = [trace1];

    var layout = {
        title:'OTU',
        yaxs: {
        autorange: true,
        type: 'linear'
        }
    };
    Plotly.newPlot("bar", data, layout);
    })
}

readSamples();