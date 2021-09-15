class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	traverse() {
		let currentNode = this.head;
		while (currentNode) {
			console.log(currentNode.val);
			currentNode = currentNode.next;
		}
	}
	find(val) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.val === val) return true;
			currentNode = currentNode.next;
		}
		return false;
	}
	append(val) {
		// let currentNode = this.head;
		// while (currentNode.next) {
		// 	currentNode = currentNode.next;
		// }
		// currentNode.next = new Node(val);

		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		this.tail.next = newNode;
		this.tail = newNode;
	}
}

// const firstPage = new Node(
// 	'google.com',
// 	new Node('reddit.com', new Node('amazon.com', new Node('twitter.com', new Node('youtube.com'))))
// );

// const history = new LinkedList();
// history.head = firstPage;

const train = new LinkedList();
train.append('Engine');
train.append('Freight car 1');
train.append('Freight car 2');
