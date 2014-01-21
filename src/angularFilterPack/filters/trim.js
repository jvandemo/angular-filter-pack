angular.module('angularFilterPack.filters')
    .filter('trim', ['filterPack', function (filterPack) {
        return filterPack.trim;
    }]);