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

    }]);