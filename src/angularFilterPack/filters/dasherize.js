angular.module('angularFilterPack.filters')
    .filter('dasherize', ['filterPack', function (filterPack) {
        return filterPack.dasherize;
    }]);