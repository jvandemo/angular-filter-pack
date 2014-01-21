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

### Trim

Trims a string:

- lowercases the string
- replaces whitespace a dash

Arguments:

- *characters*: characters to trim, defaults to whitespace


In your view template:

```html
{{ ' hello world ' | trim }}
{{ '-hello world-' | trim:'-' }}
```

In your JavaScript code:

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

In your view template:

```html
{{ 'hello world' | slugify }}
```

In your JavaScript code:

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

In your view template:

```html
{{ 'hello world' | dasherize }}
```

In your JavaScript code:

```javascript
angular.controller('someCtrl', ['dasherizeFilter', function(dasherize){

    dasherize('Hello world'); // hello-world
    dasherize('Hello World'); // hello-world
    dasherize('HelloWorld'); // hello-world

}]);
```

## Change log

### v0.1.0

- Added slugify filter
- Initial version

