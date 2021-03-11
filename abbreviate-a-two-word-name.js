/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name){
  const newName = name.split(' ')
  return newName[0].charAt(0).toUpperCase() + '.' + newName[1].charAt(0).toUpperCase()
}
