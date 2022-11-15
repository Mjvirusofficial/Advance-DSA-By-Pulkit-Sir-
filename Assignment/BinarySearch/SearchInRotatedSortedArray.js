function SearchInRotatedSortedArray(a, x) {
    let l = 0;
    let r = a.length - 1;
    let mid = Math.floor(l + (r - l) / 2)
 
}

function mid(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (a[mid] < a[mid - 1]) return mid;

        if (a[mid] > a[r]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }

    return 0;
}


let a = [5, 6, 7, 8, 1, 2, 3, 4]
console.log(mid(a))
//console.log(SearchInRotatedSortedArray(a,6))