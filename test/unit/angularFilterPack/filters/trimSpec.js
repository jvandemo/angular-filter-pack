describe('Trim filter', function(){

    var filter;

    beforeEach(module('angularFilterPack.filters'));

    beforeEach(inject(function($filter){
        filter = $filter('trim');
    }));

    it('should exist', function(){
        expect(filter).toBeDefined();
    });

    it('should trim spaces by default', function(){
        expect(filter('  hello world  ')).toEqual('hello world');
    });

    it('should trim single characters', function(){
        expect(filter('--hello world--', '-')).toEqual('hello world');
    });

    it('should trim character sequences', function(){
        expect(filter('abhello worldab', 'ab')).toEqual('hello world');
    });

});