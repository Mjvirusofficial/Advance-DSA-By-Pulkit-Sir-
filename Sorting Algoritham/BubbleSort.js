/*  #################Bubble Sort Algoritham###############

--> Create a function that takes an array as a argument. 
    Like this:- let BubbleSort = (a) => {}
    
--> Start a for loop @fter creating your function that run till array.length;
    Like this:-  for(let i = 0; i < a.length; i++){}

--> Again start a for loop thats also run till array.length, But start with i+1;
    Like this:-  for(let j = i+1; j <a.length; j++){}

--> Next start comparasion the element i of first loop is greater than the 
    element of second loop j, if it is that swap i and j;

--> After that return array a outside of a loop_________________________________#

*/ 

let BubbleSort = (a) =>{
    let ite = 0;
 for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
        if(a[i] > a[j]){
            let mj = a[i]
            a[i] = a[j]
            a[j] = mj;
            ite++
            
            
        }
    }
 }console.log(ite)
    return a;
    
}

let a = [1,2,4,3]
console.log(BubbleSort(a))

