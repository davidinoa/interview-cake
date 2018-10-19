class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) {
      return null;
    }
    this.items.pop();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  push(item) {
    if (this.maxesStack.peek === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
    this.stack.push(item);
  }

  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  getMax() {
    return this.maxesStack.peek();
  }
}
