    //     var sample_values = data.dataset.sample_values;
    //     console.log(samples_values);
    //     var ids = data.dataset.otu_ids;
    //     console.log(ids);
    //     var labels = data.dataset.otu_labels;
    //     console.log(labels);

    //     var trace1 = {
    //         type: "bar",
    //         x: sample_values,
    //         y: otu_ids
    //       };
      
    //       var data = [trace1];
      
    //       var layout = {
    //         title: `OTU`,
    //         yaxis: {
    //           autorange: true,
    //           type: "linear"
    //         }
    //       };
      
    //       Plotly.newPlot("plot", data, layout);
      
    //     });
    
    //bubble
    var trace2 = {
        x: data.dataset.otu_ids,
        y: data.dataset.sample_values,
        marker: {
            size: data.dataset.sample_values,
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