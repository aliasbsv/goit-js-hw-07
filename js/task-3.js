class StringBuilder {
    #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }


  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

    padStart(str) { 
this.#value = str + this.#value;
    }

    padBoth(str) { 
this.#value = str + this.#value + str;
    }
}
 

console.log('****** TASK 3 ****** ');
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
console.log('****** END ****** ');