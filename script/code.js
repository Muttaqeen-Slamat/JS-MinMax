//global array
let numbers = [0,2,4,6,8,10]

//function for max number of the array and making use of rest operator
function max(){
    let maxNumb = Math.max(...numbers)
    console.log(maxNumb);
}
max()

//function for min number of the array and making use of rest operator
function min(){
    let minNumb = Math.min(...numbers)
    console.log(minNumb);
}
min()

