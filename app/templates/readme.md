# <%= props.name %>

> <%= props.description %>


## Getting started

### Node.js

```
$ npm install --save <%= slugname %>
```

```js
var <%= camelname %> = require('<%= slugname %>');
<%= camelname %>.awesome(); // "awesome"
```

### Browser

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/<%= props.githubUsername %>/<%= slugname %>/master/dist/<%= slugname %>.min.js
[max]: https://raw.github.com/<%= props.githubUsername %>/<%= slugname %>/master/dist/<%= slugname %>.js

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


## License

<%= props.license %> © <%= props.authorName %>
