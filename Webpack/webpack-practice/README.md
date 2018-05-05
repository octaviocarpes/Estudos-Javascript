# Webpack Practice!

<p> In this repo are my practices with webpack</p>

<p>
Since version 4, webpack does not require a configuration file to bundle your project, nevertheless it is incredibly configurable to better fit your needs.

To get started you only need to understand its Core Concepts:

<ul>
<li>Entry</li>
<li>Output</li>
<li>Loaders</li>
<li>Plugins</li>
</ul>

### Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by configuring the entry property in the webpack configuration. For example:

webpack.config.js

<strong>
module.exports = {
  entry: './path/to/my/entry/file.js'
};
</strong>

### Output
The output property tells webpack where to emit the bundles it creates and how to name these files, it defaults to ./dist/bundle.js for the main output file and to the ./dist folder for any other generated file.

You can configure this part of the process by specifying an output field in your configuration:

webpack.config.js

<strong>
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
</strong>
</p>