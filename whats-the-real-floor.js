/* being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3 */

function getRealFloor(n) {
  if(n <= 0){
    return n
  }else if(n < 13){
    return n - 1
  }else{
    return n - 2
  }
}
