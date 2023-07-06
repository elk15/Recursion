
function mergeSort(arr) {
    // if length is 1 it's ready for merge
    if (arr.length === 1) return arr;
    // Split evenly
    let mid = arr.length/2;
    let firstHalf = mergeSort(arr.slice(0, mid));
    let secondHalf = mergeSort(arr.slice(mid));

    // Start merge
    let tempArr = [];
    let k = 0;
    let j = 0;
    let i = 0;
    // Append the smallest value from the front of each list
    // to new array
    while(k < firstHalf.length && j < secondHalf.length) {
        if(firstHalf[k] < secondHalf[j]) {
            tempArr[i++] = firstHalf[k++];
        } else {
            tempArr[i++] = secondHalf[j++];
        }
    }

    // Once one list is empty append the rest of the 
    // values of other list to the new array.
    while(k < firstHalf.length) {
        tempArr[i++] = firstHalf[k++];
    }

    while(j < secondHalf.length) {
        tempArr[i++] = secondHalf[j++];
    }
    return tempArr;
}

console.log(mergeSort([10, 3 , 5, 2, 4, 23, 1, 9, 6]));