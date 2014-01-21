# Filter Pack for AngularJS

Useful filters to add to your AngularJS application.

## Installation

Install via bower:

```shell
$ bower install angular-filter-pack
```

Then include the module in your AngularJS app:

```javascript
angular.module('yourApp', ['angularFilterPack']);
```

## Filters

### Slugify

Slugifies a string:

- lowercases the string
- replaces whitespace a dash

In your view template:

```html
{{ 'hello world' | slugify }}
```

In your JavaScript code:

```javascript
angular.controller('someCtrl', ['slugifyFilter', function(slugify){

    var name = slugify('Hello world'); // hello-world

}]);
```

Examples:

Input | Output
--- | ---
Hello world | hello-world

## Change log

### v0.1.0

- Added slugify filter
- Initial version

