![AngularJS Filter Pack](http://i.imgur.com/fZEGeiw.png)

# Filter Pack for AngularJS

AngularJS filters are awesome and convenient.

Unfortunately AngularJS only contains a few basic filters.

This filter pack conveniently provides your AngularJS application with an additional set of filters.

Lightweight and tested.

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

### Trim

Trims a string:

- lowercases the string
- replaces whitespace a dash

Signature: `trim(input [,characters])`

- *input*: string (in a view template this is the piped expression)
- *characters*: characters to trim, defaults to whitespace

In a view template:

```html
{{ ' hello world ' | trim }}
{{ '-hello world-' | trim:'-' }}
```

In JavaScript code:

```javascript
angular.controller('someCtrl', ['slugifyFilter', function(slugify){

    slugify('Hello world'); // hello-world
    slugify('Hello World'); // hello-world
    slugify('HelloWorld'); // helloworld
    slugify('Hello_World'); // hello-world

}]);
```

### Slugify

Slugifies a string:

- lowercases the string
- replaces whitespace a dash

Signature: `slugify(input)`

- *input*: string (in a view template this is the piped expression)

In a view template:

```html
{{ 'hello world' | slugify }}
```

In JavaScript code:

```javascript
angular.controller('someCtrl', ['slugifyFilter', function(slugify){

    slugify('Hello world'); // hello-world
    slugify('Hello World'); // hello-world
    slugify('HelloWorld'); // helloworld
    slugify('Hello_World'); // hello-world

}]);
```

### Dasherize

Dasherizes a string:

- lowercases the string
- replaces whitespace with dash
- replaces underscores with dash
- leaves existing dashes untouched
- replaces capitals with dash and lowercase

Signature: `dasherize(input)`

- *input*: string (in a view template this is the piped expression)

In a view template:

```html
{{ 'hello world' | dasherize }}
```

In JavaScript code:

```javascript
angular.controller('someCtrl', ['dasherizeFilter', function(dasherize){

    dasherize('Hello world'); // hello-world
    dasherize('Hello World'); // hello-world
    dasherize('HelloWorld'); // hello-world

}]);
```

## Change log

### v0.2.0

- Added dasherize filter
- Added trim filter

### v0.1.0

- Added slugify filter
- Initial version

