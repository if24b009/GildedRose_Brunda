describe("General logic", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

   it("quality and sell_in should decrease by 1 for general items", function() {
      items = [new Item("GeneralItem", 4, 20)];
      update_quality();
      expect(items[0].sell_in).toEqual(3);
      expect(items[0].quality).toEqual(19);
    });

	it("quality decreases by 2 once sell by date has passed", function() {
      items = [new Item("GeneralItem", 0, 20)];
      update_quality();
      expect(items[0].sell_in).toEqual(-1);
      expect(items[0].quality).toEqual(18);
    });

	it("quality is never negative", function() {
      items = [new Item("GeneralItem", 2, 0)];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

});
