describe('Legacy Code Gilded Rose', function() {
	beforeEach(function() {
		gildedRose = new GildedRose();
	});

	it('should return 0 for an empty string', function() {
		expect(gildedRose.add('')).toEqual(0);
	});
});
