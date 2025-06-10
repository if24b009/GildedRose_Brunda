describe("General logic", function() {
//+5 Dexterity Vest
//Elixir of the Mongoose

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

	it("quality is never negative even though sell_in by date has passed", function() {
      items = [new Item("GeneralItem", 0, 0)];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

});


describe("Aged Brie", function() {

  it("quality should never be more than 50", function() {
    items = [ new Item("Aged Brie", 10, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality should increase to 50 after sell_in by date has passed", function() {
    items = [ new Item("Aged Brie", -1, 49) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality should increase by 2 after sell_in by date has passed", function() {
    items = [ new Item("Aged Brie", -1, 40) ];
    update_quality();
    expect(items[0].quality).toEqual(42);
  });

});


describe("Sulfuras", function() {

  it("quality should never decrease", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 2, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("quality should never decrease even though sell_in by date has passed", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", -1, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("quality should never decrease even though sell_in is 0", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

});


describe("Backstage passes", function() {

  it("quality should never be more than 50", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality should increase by 2 when 10 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 32) ];
    update_quality();
    expect(items[0].quality).toEqual(34);
  });

  it("quality should increase to 50 when 10 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality should increase to 50 when 5 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality should increase by 3 when 5 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 32) ];
    update_quality();
    expect(items[0].quality).toEqual(35);
  });

  it("quality should increase by 3 when 4 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 32) ];
    update_quality();
    expect(items[0].quality).toEqual(35);
  });

  it("quality should drop to 0 when 0 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 32) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("quality should drop to 0 when sell_in by date has passed", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 12) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
  
  it("quality should increase by 1 when more than 10 days are left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 13, 32) ];
    update_quality();
    expect(items[0].quality).toEqual(33);
  });

});