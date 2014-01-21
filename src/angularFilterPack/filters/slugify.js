angular.module('angularFilterPack.filters')
    .filter('slugify', ['filterPack', function (filterPack) {
        return filterPack.slugify;
    }]);