let arr = [1, 23, 4, 78, 2, 12, 23, 10, 93, 64];

// Example 1

function info(arr) {
    str = "";
    for (i = 0; i < arr.length; i++) {
        str += `${arr[i]} `
    }
    console.log(str);
}

function infoEven(arr) {
    str = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            str += `${arr[i]} `;
    }
    console.log(str);
}

function returnSum(arr) {
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function returnMax(arr) {
    max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

function addItem(arr, i, n) {
    arr[i] = n;
}

function deleteItem(arr, i) {
    arr[i] = undefined;
}

info(arr);
infoEven(arr);
console.log(returnSum(arr));
console.log(returnMax(arr));
addItem(arr, 13, 123);
addItem(arr, 12, 111);
info(arr);
deleteItem(arr, 9);
info(arr);

// Example 2
console.log("--------------------")
let arr1 = [1, 84, 23, 65, 12];
function uniqueArr(arr) {
    tempArr = arr;
    for (i = 0; i < tempArr.length; i++) {
        for (j = i + 1; j < tempArr.length; j++) {
            if (tempArr[i] == tempArr[j])
                tempArr.splice(j--, 1);
        }
    }
    return tempArr;
}
function concatArr(arr, arr1) {
    tempArr = arr.concat(arr1);
    let resArr = uniqueArr(tempArr);
    return resArr;
}

function generalArr(arr1, arr2) {
    res = [];
    if (arr1.length < arr2.length) {
        temp = [];
        temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j])
                res.push(arr2[j]);
        }
    }
    return uniqueArr(res);
}

function uniqueNumbersFromTheFirstArray(arr1, arr2){
    let res = arr1.filter(function(i){
        return this.indexOf(i) < 0;
    }, arr2)
    return res;
}

info(concatArr(arr, arr1));
info(generalArr(arr, arr1));
info(uniqueNumbersFromTheFirstArray(arr, arr1));

// Example 3

console.log("-----------------------");
let arrFruit = ["apple", "orange", "peache", "mango", "strawberry"];
arrFruit.sort();

function showFruit(arr){
    document.write("<ul>");
    arr.forEach(t=>document.write(`<li> ${t}</li>`));
    document.write("</ul>");
}

function searchFruitInArray(str){
    let res = arrFruit.map(t=> {return t.toLowerCase();}).indexOf(str.toLowerCase());
    return res;
}

showFruit(arrFruit);
console.log(searchFruitInArray("peache"));

