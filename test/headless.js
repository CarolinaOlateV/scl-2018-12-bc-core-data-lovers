global.window = global;
global.assert= require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');