let InsertionSort = (a) =>{
 for (let i = 0; i < a.length; i++) {
    let Sorted = i-1;
    let NotSorted = a[i]

    while (NotSorted < a[Sorted] && Sorted >= 0) {
        a[Sorted+1] = a[Sorted]
        Sorted--;
    }
    a[Sorted+1] = NotSorted;
 }

 return a
}

let a = [5,1,3,2,4]
console.log(InsertionSort(a))