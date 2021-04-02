//Access Bonus by gauge
function buildGauge(sample){
    d3.json('data/samples.json').then((data) => {console.log(data)
        var location = data.location;
        var washFreq = location.filter(sampleObject => sampleObject.wfreq == sample)
        console.log(washFreq);


        var trace3 = [
            {
                type: "indicator",
                mode: "gauge+delta",
                value: "",
                title: { text: "Belly Button Washing Frequency: Scrubs per Week", font: { size: 15 } },
                delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
                gauge: {
                  axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
                  bar: { color: "darkblue" },
                  bgcolor: "white",
                  borderwidth: 2,
                  bordercolor: "gray",
                  steps: [
                    { range: [0, 250], color: "cyan" },
                    { range: [250, 400], color: "royalblue" }
                  ],
                  threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 490
                  }
                }
              }
            ];
            
            var layout = {
              width: 500,
              height: 400,
              margin: { t: 25, r: 25, l: 25, b: 25 },
              font: { color: "darkblue", family: "Arial" }
            };

        Plotly.newPlot("gauge", trace3, layout);
    });
};

buildGauge();