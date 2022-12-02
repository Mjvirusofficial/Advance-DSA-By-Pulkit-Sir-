class Queue{
    constructor(){
        this.data = []
        this.first = 0;
        this.index = 0;
    }

    Enqueue(data){
        this.data[this.index] = data;
        this.index++
    }
}

let q = new Queue()
q.Enqueue(1)
console.log('Data is ',q.data, "and index is:- ",q.index)

q.Enqueue(2)
console.log('Data is ',q.data, "and index is:- ",q.index)

q.Enqueue(3)
console.log('Data is ',q.data, "and index is:- ",q.index)

q.Enqueue(4)
console.log('Data is ',q.data, "and index is:- ",q.index)


