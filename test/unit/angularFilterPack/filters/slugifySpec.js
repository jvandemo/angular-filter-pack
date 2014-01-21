describe('Slugify filter', function(){

    var filter;

    beforeEach(module('angularFilterPack.filters'));

    beforeEach(inject(function($filter){
        filter = $filter('slugify');
    }));

    it('should exist', function(){
        expect(filter).toBeDefined();
    });

    it('should convert spaces to dashes', function(){
        expect(filter('hello world')).toBe('hello-world');
    });

    it('should convert to lowercase', function(){
        expect(filter('helloWorld')).toBe('helloworld');
        expect(filter('HelloWorld')).toBe('helloworld');
        expect(filter('Hello World')).toBe('hello-world');
    });

    it('should leave underscores alone', function(){
        expect(filter('hello_world')).toBe('hello_world');
    });

});