function Item(name, sell_in, quality) {
	this.name = name;
	this.sell_in = sell_in;
	this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));


//refactored
function update_quality() {
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const isAgedBrie = item.name === 'Aged Brie';
		const isBackstagePasses = item.name === 'Backstage passes to a TAFKAL80ETC concert';
		const isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
		const isConjured = item.name === 'Conjured Mana Cake';

		updateQualityBeforeSellDate(item, isAgedBrie, isBackstagePasses, isSulfuras, isConjured);

		//Update sell_in (except for Sulfuras)
		if (!isSulfuras) item.sell_in--;

		updateQualityAfterSellDate(item, isAgedBrie, isBackstagePasses, isSulfuras, isConjured);
	}
}

function updateQualityBeforeSellDate(item, isAgedBrie, isBackstagePasses, isSulfuras, isConjured) {
	if (isAgedBrie || isBackstagePasses) {
		increaseQuality(item); //Items increase in quality (+1)

		if (isBackstagePasses) { //Special handling for increasing quality based on sell_in
			if (item.sell_in <= 10) increaseQuality(item); //+2
			if (item.sell_in <= 5) increaseQuality(item); //+3
		}
	} else {
		//General items that decrease in quality
		if (!isSulfuras && item.quality > 0) {
			decreaseQuality(item);

			//Conjured items degrade twice as fast
			if (isConjured) decreaseQuality(item);
		}
	}
}

function updateQualityAfterSellDate(item, isAgedBrie, isBackstagePasses, isSulfuras, isConjured) {
	if (item.sell_in < 0) {
		if (isAgedBrie) increaseQuality(item); //Only Aged Brie increases quality after passed sell_in
		else if (isBackstagePasses) item.quality = 0; //Backstage: Quality drops to 0 after concert
		else if (!isSulfuras && item.quality > 0) {
			decreaseQuality(item); //Gerneral items decrease twice as fast after sell date


			if (isConjured) decreaseQuality(item); //Conjured items degrade twice as fast
		}
	}
}

function increaseQuality(item) {
	if (item.quality < 50) item.quality++;
}

function decreaseQuality(item) {
	if (item.quality > 0) item.quality--;
}