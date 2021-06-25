class Queue
{
	constructor()
	{
		this.items = [];
	}

    enqueue(element)
    {	
    	this.items.push(element);
    }
    dequeue()
    {
    	if(this.isEmpty())
    		return "Underflow";
    	return this.items.shift();
    }
    front()
    {
    	if(this.isEmpty())
    		return "No elements in Queue";
    	return this.items[0];
    }
    isEmpty()
    {
    	return this.items.length == 0;
    }
    printQueue()
    {
    	var str = "";
    	for(var i = 0; i < this.items.length; i++)
    		str += this.items[i] +" ";
    	return str;
    }
}
var queue = new Queue();
			
console.log(queue.dequeue());

console.log(queue.isEmpty());

queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
console.log(queue.printQueue());
console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.printQueue());