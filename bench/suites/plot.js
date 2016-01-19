var Plotly = require('@src');


suite('Plotly.plot', function() {
    benchmark('Plotly.plot', function() {

        Plotly.plot(this.graphDiv, [{
            x: [1, 2, 3],
            y: [2, 1, 2]
        }]);

    })

}, {

    setup: function() {
        this.graphDiv = document.createElement('div');
        document.body.appendChild(this.graphDiv);
    },
    teardown: function() {
        document.body.removeChild(this.graphDiv);
        this.graphDiv = null;
    }
});
