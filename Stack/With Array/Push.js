class Stack {
    constructor(){
        this.data = []
        this.index = 0;
    }

    push(data){
        this.data[this.index] = data;
        this.index++;
    }
}

let s = new Stack()
s.push(10)
console.log(s.data," in "+s.index +" index ")

s.push(50)
console.log(s.data," in "+s.index +" index ")

s.push(90)
console.log(s.data," in "+s.index +" index ")