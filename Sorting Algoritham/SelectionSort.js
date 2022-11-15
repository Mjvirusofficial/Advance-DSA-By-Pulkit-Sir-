let SelectionSort = (a) => {

    for (let i = 0; i < a.length; i++) {
        let min = i;

        for (let j = i+1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            } 
            let swap = a[i]
            a[i] = a[min]
            a[min] = swap;
        }
        
    }
    return a;
}

let a = [5, 4, 1, 3, 2]
console.log(SelectionSort(a))
