/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  const newObj = {};
  return Object.assign(newObj, obj);
}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const newObj = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key in newObj) {
        newObj[key] += value;
      } else {
        newObj[key] = value;
      }
    });
  });

  return newObj;
}

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  const newObj = { ...obj };
  keys.forEach((el) => (el in obj ? delete newObj[el] : el));
  return newObj;
}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  return (
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every((key) => obj1[key] === obj2[key])
  );
}

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  Object.freeze(obj);
  return obj;
}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  const words = new Array(100);
  Object.entries(lettersObject).forEach(([key, value]) =>
    value.forEach((index) => words.fill(key, index, index + 1))
  );
  return words.join('');
}

/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  let sum = 0;

  queue.forEach((el) => {
    if (el === 25) sum += 25;
    else sum -= el;
  });
  if (sum < 0) return false;
  return true;
}

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;

  this.height = height;

  this.getArea = function getArea() {
    return this.height * this.width;
  };
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const newObj = JSON.parse(json);
  Object.setPrototypeOf(newObj, proto);
  return newObj;
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  return arr.sort((curr, next) => {
    if (curr.country !== next.country) {
      return curr.country.localeCompare(next.country);
    }
    return curr.city.localeCompare(next.city);
  });
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  return array.reduce((map, obj) => {
    const key = keySelector(obj);
    const value = valueSelector(obj);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(value);

    return map;
  }, new Map());
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class CssSelectorBuilder {
  constructor() {
    this.result = '';
    this.previousOrder = 0;
    this.elementUsed = [false, 0];
    this.idUsed = [false, 1];
    this.classUsed = [false, 2];
    this.attrUsed = [false, 3];
    this.pseudoClassUsed = [false, 4];
    this.pseudoElementUsed = [false, 5];
    this.combinatorUsed = [false, 6];
  }

  checkUsage(methodName) {
    const usedFlag = `${methodName}Used`;
    if (this[usedFlag][1] < this.previousOrder) {
      throw new Error(
        `Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element`
      );
    }
    const flag = this[usedFlag][1];
    this.previousOrder = flag;
    if (
      !['classUsed', 'attrUsed', 'pseudoClassUsed', 'combinatorUsed'].includes(
        usedFlag
      )
    ) {
      if (this[usedFlag][0]) {
        throw new Error(
          `Element, id and pseudo-element should not occur more then one time inside the selector" if element, id or pseudo-element occurs twice or more times`
        );
      }
      this[usedFlag][0] = true;
    }
  }

  element(value) {
    this.checkUsage('element');
    this.result += value;
    return this;
  }

  id(value) {
    this.checkUsage('id');
    this.result += `#${value}`;
    return this;
  }

  class(value) {
    this.checkUsage('class');
    this.result += `.${value}`;
    return this;
  }

  attr(value) {
    this.checkUsage('attr');
    this.result += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    this.checkUsage('pseudoClass');
    this.result += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    this.checkUsage('pseudoElement');
    this.result += `::${value}`;
    return this;
  }

  stringify() {
    const { result } = this;
    this.reset();
    return result;
  }

  reset() {
    this.result = '';
    this.previousOrder = 0;
    this.elementUsed = [false, 0];
    this.idUsed = [false, 1];
    this.classUsed = [false, 2];
    this.attrUsed = [false, 3];
    this.pseudoClassUsed = [false, 4];
    this.pseudoElementUsed = [false, 5];
    this.combinatorUsed = [false, 6];
  }
}

CssSelectorBuilder.prototype.combine = function anonymus(
  selector1,
  combinator,
  selector2
) {
  const result = new CssSelectorBuilder();
  result.result = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
  return result;
};

const cssSelectorBuilder = {
  result: '',
  BaseElementSelector(value, type) {
    return {
      value,
      elementUsed: true,
      type,
    };
  },
  element(value) {
    // return new this.BaseElementSelector(value, 'element');
    return new CssSelectorBuilder().element(value);
  },

  id(value) {
    return new CssSelectorBuilder().id(value);
  },

  class(value) {
    return new CssSelectorBuilder().class(value);
  },

  attr(value) {
    return new CssSelectorBuilder().attr(value);
  },

  pseudoClass(value) {
    return new CssSelectorBuilder().pseudoClass(value);
  },

  pseudoElement(value) {
    return new CssSelectorBuilder().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return new CssSelectorBuilder().combine(selector1, combinator, selector2);
  },
};

// const cssSelectorBuilder = (function anonymus() {
//   class CssSelectorBuilder {
//     constructor() {
//       this.reset();
//     }

//     reset() {
//       this.result = '';
//       this.elementUsed = false;
//       this.idUsed = false;
//       this.classUsed = false;
//       this.attrUsed = false;
//       this.pseudoClassUsed = false;
//       this.pseudoElementUsed = false;
//       this.combinatorUsed = false;
//     }

//     checkUsage(methodName) {
//       const usedFlag = `${methodName}Used`;
//       if (['classUsed', 'attrUsed', 'pseudoClassUsed'].includes(usedFlag))
//         return;
//       if (this[usedFlag]) {
//         throw new Error(`Cannot call ${methodName} after using ${this.result}`);
//       }
//       this[usedFlag] = true;
//     }

//     element(value) {
//       this.checkUsage('element');
//       this.result += value;
//       return this;
//     }

//     id(value) {
//       this.checkUsage('id');
//       this.result += `#${value}`;
//       return this;
//     }

//     class(value) {
//       this.checkUsage('class');
//       this.result += `.${value}`;
//       return this;
//     }

//     attr(value) {
//       this.checkUsage('attr');
//       this.result += `[${value}]`;
//       return this;
//     }

//     pseudoClass(value) {
//       this.checkUsage('pseudoClass');
//       this.result += `:${value}`;
//       return this;
//     }

//     pseudoElement(value) {
//       this.checkUsage('pseudoElement');
//       this.result += `::${value}`;
//       return this;
//     }

//     combine(selector1, combinator, selector2) {
//       this.checkUsage('combine');
//       this.result = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
//       return this;
//     }

//     stringify() {
//       const { result } = this;
//       this.reset();
//       return result;
//     }
//   }

//   return new CssSelectorBuilder();
// })();

// const cssSelectorBuilder1 = {
//   function() {},

//   element(/* value */) {
//     throw new Error('Not implemented');
//   },

//   id(/* value */) {
//     throw new Error('Not implemented');
//   },

//   class(/* value */) {
//     throw new Error('Not implemented');
//   },

//   attr(/* value */) {
//     throw new Error('Not implemented');
//   },

//   pseudoClass(/* value */) {
//     throw new Error('Not implemented');
//   },

//   pseudoElement(/* value */) {
//     throw new Error('Not implemented');
//   },

//   combine(/* selector1, combinator, selector2 */) {
//     throw new Error('Not implemented');
//   },
// };

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
