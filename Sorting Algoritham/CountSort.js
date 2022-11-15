let CountSort = (a) =>{
   let map = {}

   for(i of a){
    map[i] = map[i]+1 ||1
   }

   let newA = []
   for(i in map){
    while(map[i]--){
        newA.push(parseInt(i))
    }
   }
  return newA;
}
   
let a = [5,1,3,2,4]
console.log(CountSort(a))