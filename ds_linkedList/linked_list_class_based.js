// create a new Node with default value
class Node { 
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}
// Declare LinkedList Class
class linkedList{
    constructor(val){
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    addAtLast(item){
        const newNode = new Node(item);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    addAtBeginning(item){
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}
const l = new linkedList(10);
l.addAtLast(20);
l.addAtLast(30)
l.addAtBeginning(40);
l.addAtBeginning(50);
console.log(JSON.stringify(l));
