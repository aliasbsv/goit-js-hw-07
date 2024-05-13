class Storage {
  #items;
  constructor(items)
  {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);


console.log('****** TASK 2 ****** ');

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

 storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
 
/* 
************** 2 Variant *****************

class Storage {
  #items = [];
  constructor(items)
  {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    } else {
      console.log(`"${itemToRemove}" not found :-( `);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);


console.log('****** TASK 2 ****** ');

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

 storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
 */



