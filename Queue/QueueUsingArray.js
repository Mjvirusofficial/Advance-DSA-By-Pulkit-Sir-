class Queue{
    constructor(){
        this.data = []
        this.last = 0;
        this.first = 0;
    }

    isEmpty(){
        return this.first == this.last;
    }
    enqueue(data){
        this.data[this.last] = data;
        this.last++;
    }

    dequeue(){
        let removeData = this.data[this.first];
        this.first++
        return removeData;
    }

    length(){
        return this.last-this.first;
    }

    display(){
        for(let i = this.first; i < this.last; i++){
            console.log(this.data[i])
        }
    }
}

let q = new Queue();
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.display()
console.log('Deleted',q.dequeue())
console.log('After Deleting:-')
q.display()
console.log('Deleted',q.dequeue())
q.display()
console.log('Length is:- ',q.length())
q.enqueue(15)
console.log('Length is:- ',q.length())
q.display()
console.log(q.isEmpty())
