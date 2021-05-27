/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(A) {
  let times = new Map()
  for(let i = 0; i < A.length; i++){
    if(!times.has(A[i])){
      times.set(A[i], 1)
    }else{
      let val = times.get(A[i])
      val += 1
      times.set(A[i], val)
    }
  }

  for(let [key,value] of times.entries()){
    if(value % 2 != 0){
      return key
    }
  }
}
