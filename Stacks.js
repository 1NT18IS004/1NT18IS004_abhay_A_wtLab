class Stack {
    constructor() {
        this.items = [];
    }
    
    add(element) {
        return this.items.push(element);
    }

    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(6);
stack.add(7);
stack.add(8);
stack.add(11);
console.log(stack.items);
stack.remove();
console.log(stack.items);
console.log(stack.isEmpty());
stack.clear();
console.log(stack.items)