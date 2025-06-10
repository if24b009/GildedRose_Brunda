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

});
