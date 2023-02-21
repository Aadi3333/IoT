var plotly = require('plotly')("aadi333", "rOQMGCx7YGysV9wvbCpA")

const express = require('express');
const app = express();
const port = 3010;
const base = `${__dirname}/public`;
app.use(express.static('public'));

app.get('/', (req, res) => {
    var data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
    var layout = {fileopt : "overwrite", filename : "simple-node-example"};

    plotly.plot(data, layout, function (err, msg) {
        if (err) return console.log(err);
        console.log(msg);
        var chart = msg.url+".embed";
        console.log(chart);
        var page = "<p>Graph below:</p>"+"<iframe width=800 height=600 src=\'"+chart+"\'></iframe>";
        res.send(page);
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});