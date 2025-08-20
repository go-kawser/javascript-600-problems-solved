// problem solved------------------------------>578
// Custom Promise.all Implementation
// Implement your own Promise.myAll() that works exactly like Promise.all.
function myAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// problem solved------------------------------>579
// LRU Cache Implementation
// Implement a Least Recently Used (LRU) cache in JavaScript.
class LRUCache {
  constructor(limit = 3) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, val);
  }
}

// problem solved------------------------------>580
// Debounce & Throttle Functions
// Write debounce() and throttle() utilities.
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// problem solved------------------------------>581
// Deep Clone with Circular Reference
// Write a deepClone() that handles nested objects and circular references.
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (let key in obj) {
    clone[key] = deepClone(obj[key], map);
  }
  return clone;
}

// problem solved------------------------------>582
// Event Emitter Implementation
// Build your own event emitter (like Node.js EventEmitter).
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => fn(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((fn) => fn !== listener);
    }
  }
}

// problem solved------------------------------>583
// Currying with Placeholder Support
// Implement curry() that supports placeholders.
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...next) => curried(...args, ...next);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6

// problem solved------------------------------>584
// Task Scheduler (Async Concurrency Control)
// Limit concurrent async tasks.
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }

  add(task) {
    return new Promise((resolve) => {
      this.queue.push(() => task().then(resolve));
      this.run();
    });
  }

  run() {
    while (this.running < this.limit && this.queue.length) {
      const task = this.queue.shift();
      this.running++;
      task().finally(() => {
        this.running--;
        this.run();
      });
    }
  }
}
