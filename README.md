# Plot.ly Homework - Belly Button Biodiversity

## Summary:

* Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

![image](https://user-images.githubusercontent.com/72557712/120235160-b19f2c80-c216-11eb-881d-236c6862a1f3.png)


## Files:
* index.html file
* 'static/js' folder includes app.js file
* 'data' folder inclues the data used
* 'Images' folder includes final screenshots of visualizations

## Instructions:

### Plotly

* Use the D3 library to read in `samples.json`.
* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      * Use `sample_values` as the values for the bar chart.
      * Use `otu_ids` as the labels for the bar chart.
      * Use `otu_labels` as the hovertext for the chart.
      
* Create a bubble chart that displays each sample.
      * Use `otu_ids` for the x values.
      * Use `sample_values` for the y values.
      * Use `sample_values` for the marker size.
      * Use `otu_ids` for the marker colors.
      * Use `otu_labels` for the text values.

* Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.
* Update all of the plots any time that a new sample is selected.
