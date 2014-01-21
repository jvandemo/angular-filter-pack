describe('Dasherize filter', function(){

    var filter;

    beforeEach(module('angularFilterPack.filters'));

    beforeEach(inject(function($filter){
        filter = $filter('dasherize');
    }));

    it('should exist', function(){
        expect(filter).toBeDefined();
    });

    it('should convert spaces to dashes', function(){
        expect(filter('hello world')).toBe('hello-world');
    });

    it('should convert capitals to dashes', function(){
        expect(filter('helloWorld')).toBe('hello-world');
        expect(filter('HelloWorld')).toBe('hello-world');
        expect(filter('Hello World')).toBe('hello-world');
    });

    it('should convert underscores to dashes', function(){
        expect(filter('hello_world')).toBe('hello-world');
    });

});