class Mjvirus{
    constructor(){
      this.data  = []
      this.front = 0;
      this.rear  = 0;
    }
    
    isEmpty(){
        return this.front == this.rear;
    }
    
    enqueue(x){
      this.data[this.rear] = x;
      this.rear++;
    }
    
    dequeue(){
      if(this.isEmpty()) return 'Stack Underflow...!'
        
      let poped = this.data[this.front]
      this.front++;
        
      return poped;
    }
}


var MyStack = function() {
    this.q1 = new Mjvirus()
    this.q2 = new Mjvirus()

    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
   this.q1.enqueue(x)
   this.length++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
    for(let i = 0; i < this.length-1; i++){
        this.q2.enqueue(this.q1.dequeue())
    }
    
    let popedElement = this.q1.dequeue();

    
    while(!this.q2.isEmpty()){
        this.q1.enqueue(this.q2.dequeue())
    }
    
    this.length--;
    return popedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    
    for(let i = 0; i < this.length-1; i++){
        this.q2.enqueue(this.q1.dequeue())
    }
    
    let topElement = this.q1.dequeue()
    
    while(!this.q2.isEmpty()){
         this.q1.enqueue(this.q2.dequeue())
    }
    
    
    this.q1.enqueue(topElement)
    return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    
    return this.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */































// class MyQueue {
//     constructor(){
//         this.data  = []
//         this.front = 0;
//         this.rear  = 0;
//     }

//     isEmpty(){
//         return this.front == this.rear;
//     }

//     enqueue(x){
//         this.data[this.rear] = x;
//         this.rear++;
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return "Stack Underflow..!"
//         }

//         let popedE = this.data[this.front]
//         this.front++;
//         return popedE;
//     }

//     getRear(){
//         if(this.isEmpty()){
//             return "Stack Underflow..!"
//         }
//     }

//     display(){
//         for(let i = this.front; i < this.rear; i++){
//             console.log(this.data[i])
//         }
//     }

// }

// let q = new MyQueue()
// q.enqueue(1)
// q.enqueue(2) 
// q.enqueue(3)
// q.enqueue(4)

// q.display()