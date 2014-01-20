'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angularFilterPack');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angularFilterPack.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('angularFilterPack.filters')).toBeTruthy();
    });
    

    

    

});
