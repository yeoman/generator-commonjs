# <%= props.title || props.name %>

<%= props.description %>

## Getting Started
### On the server
Install the module with: `npm install <%= slugname %>`

```javascript
var <%= slugname %> = require('<%= slugname %>');
<%= slugname %>.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/<%= props.github_username %>/<%= props.github_repo %>/master/dist/<%= slugname %>.min.js
[max]: https://raw.github.com/<%= props.github_username %>/<%= props.github_repo %>/master/dist/<%= slugname %>.js

In your web page:

```html
<script src="dist/<%= slugname %>.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach <%= slugname %>'s methods to any object.

```html
<script>
var exports = Yeoman.utils;
</script>
<script src="dist/<%= slugname %>.min.js"></script>
<script>
Yeoman.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
 
 Copyright (c) <%= currentYear %> <%= props.author_name %>. Licensed under the <%= props.license %> license.
