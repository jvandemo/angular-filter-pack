(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angularFilterPack.config', []);

// Modules
angular.module('angularFilterPack.filters', []);
angular.module('angularFilterPack',
    [
        'angularFilterPack.config',
        'angularFilterPack.filters'
    ]);
angular.module('angularFilterPack.filters')
    .filter('slugify', [function(){

        return function(input){

            if(!angular.isString(input)){
                return input;
            }

            return input.toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text

        };

    }]);})(window, document);