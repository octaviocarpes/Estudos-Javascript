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
<li>Mode</li>
</ul>

### Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by configuring the entry property in the webpack configuration. For example:

webpack.config.js

<strong>
```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
</strong>

### Output
The output property tells webpack where to emit the bundles it creates and how to name these files, it defaults to ./dist/bundle.js for the main output file and to the ./dist folder for any other generated file.

You can configure this part of the process by specifying an output field in your configuration:

webpack.config.js

<strong>
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
</strong>

### Loaders
Out of the box, webpack only understands JavaScript files. Loaders allow webpack to process other types of files and converting them into valid modules that can be consumed by your application and added to the dependency graph.

At a high level, loaders have two purposes in your webpack configuration:

1 - The test property identifies which file or files should be transformed.
2 - The use property indicates which loader should be used to do the transforming.

webpack.config.js

<strong>
```
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```
</strong>
### Plugins

### Mode

By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.
<strong>
```
module.exports = {
  mode: 'production'
};
```
</strong>
</p>