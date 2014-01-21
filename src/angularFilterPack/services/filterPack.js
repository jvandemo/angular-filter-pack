/**
 * Create one big filterPack service so filters can call each other without
 * having AngularJS dependency injection to instantiate dependant filters.
 */
angular.module('angularFilterPack.services')
    .provider('filterPack', [function () {

        this.$get = function () {

            function FilterPack() {
            }

            /**
             * Escape string so it can be used inside regular expression
             * without having to worry about being interpreted as a
             * special character by the regular expression
             *
             * @param input
             * @returns {string}
             */
            FilterPack.prototype.escapeRegExp = function (input) {
                return String(input)
                    .replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
            };

            /**
             * Slugify
             *
             * - lowercases the string
             * - replaces whitespace with dash
             *
             * "hello world" => "hello-world"
             * "Hello World" => "helloworld"
             *
             * @param input
             * @returns {string}
             */
            FilterPack.prototype.slugify = function (input) {

                if (!angular.isString(input)) {
                    return input;
                }

                input = input.toLowerCase()
                    .replace(/\s+/g, '-')       // Replace whitespace with dash
                    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                    .replace(/\-\-+/g, '-');    // Replace multiple dashes with single dash

                return FilterPack.prototype.trim(input, '-');        // Trim leading and ending dashes
            };

            /**
             * Dasherize:
             *
             * - lowercases the string
             * - replaces whitespace with dash
             * - replaces underscores with dash
             * - leaves existing dashes untouched
             * - replaces capitals with dash and lowercase
             *
             * "hello world" => "hello-world"
             * "Hello World" => "hello-world"
             *
             * @param input
             * @returns {string}
             */
            FilterPack.prototype.dasherize = function (input) {

                if (!angular.isString(input)) {
                    return input;
                }

                input = FilterPack.prototype.trim(input);

                input = input
                    .replace(/([A-Z])/g, '-$1')     // Replace capitals with dash and lowercase
                    .replace(/[-_\s]+/g, '-')       // Replace whitespace, underscores with dashes
                    .toLowerCase();

                return FilterPack.prototype.trim(input, '-');   // Trim leading and ending dashes
            };

            /**
             * Trim leading and trailing characters.
             * If no characters are passed, whitespace is trimmed.
             *
             * @param input
             * @param characters
             * @returns String
             */
            FilterPack.prototype.trim = function (input, characters) {

                if (!angular.isString(input)) {
                    return input;
                }

                if (!characters) {
                    if (String.prototype.trim) {
                        return String.prototype.trim.call(input);
                    }
                    characters = '\\s';
                }

                return String(input)
                    .replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');

            };

            return new FilterPack();

        };

        this.$get.$inject = [];

    }]);