/**
 * Test helper methods only that are not exposed as filter.
 *
 * Filters are tested using their own specs.
 */

describe('FilterPack service', function(){

    var filterPack;

    beforeEach(module('angularFilterPack.services'));

    beforeEach(inject(function(_filterPack_){
        filterPack = _filterPack_;
    }));

    it('should exist', function(){
        expect(filterPack).toBeDefined();
    });

    describe('escapeRegExp method', function(){

        it('should escape special characters correctly', function(){
            expect(filterPack.escapeRegExp('.*+?^=!:${}()|[\]\/\\')).toBe('\\.\\*\\+\\?\\^\\=\\!\\:\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\');
        });

    })

});