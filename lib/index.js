/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

/*
 * This file is browserify'ed into a standalone 'Plotly' object.
 */

var symbolDefs = require('../src/components/drawing/symbol_defs');

symbolDefs.custom = {
    n: 45,
    f: function(r) {
        var rs = d3.round(r, 2),
            rs2 = rs/2;

        return 'M'+rs+',0A'+rs+','+rs2+' 0 1,1 0,-'+rs+
            'A'+rs+','+rs2+' 0 0,1 '+rs+',0Z';
    }
};

var Core = require('./core');

// Load all trace modules
Core.register([
    require('./bar'),
    require('./box'),
    require('./heatmap'),
    require('./histogram'),
    require('./histogram2d'),
    require('./histogram2dcontour'),
    require('./pie'),
    require('./contour'),
    require('./scatter3d'),
    require('./surface'),
    require('./mesh3d'),
    require('./scattergeo'),
    require('./choropleth'),
    require('./scattergl')
]);

module.exports = Core;
