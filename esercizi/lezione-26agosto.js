const getElementsByRange = (array, startIndex, endIndex) => {
    const a = [];
    for (let i = 0; i < array.length; i++) {
      if (i >= startIndex && i <= endIndex) {
        a.push(array[i]);
      }
      // i = 0 -> false;
      // i = 1 -> false;
      // i = 2 -> true -> push; -> 3
      // i = 3 -> true -> push; -> 4
      // i = 4 -> true -> push; -> 5
      // i = 5 -> true -> push; -> 6
      // i = 6 -> true -> push; -> 7
      // i = 7 -> false;
      // i = 8 -> false;
      // i = 9 -> false;
      // exit;
  
      // [3]
      // [3, 4]
      // [3, 4, 5]
      // [3, 4, 5, 6]
      // [3, 4, 5, 6, 7]
      // exit;
    }
    return a;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  getElementsByRange(array, 2, 6) // [3, 4, 5, 6, 7]
  
  // 2 -> 6 = 5
  // startIndex = 2
  // qnt = (endIndex - startIndex) + 1;
  
  // getElementsByRange(array, 3, 8)
  // startIndex = 3;
  // qnt = (endIndex - startIndex) + 1 = 8 - 3 + 1 = 6
  // splice(startIndex, qnt) -> splice(3, 6)
  
  const getElementsByRange = (array, startIndex, endIndex) => {
    return array.splice(startIndex, (endIndex - startIndex) + 1);
  }
  
  Array.prototype.getElementsByRange = (startIndex, endIndex) => {
    return this.splice(startIndex, (endIndex - startIndex) + 1);
  }
  
  array.getElementsByRange(2, 6);





//COME FUNZIONA FILTER
  function myFilter(callback = (item, index, array) => {}) {
    const a = [];
    const array = this;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array) === true) {
        // a[a.length] = array[i];
        a.push(array[i]);
        // [3]
        // [3, 4]
        // [3, 4, 5]
        // exit;
      }
    }
    return a;
  }
  
  Array.prototype.filter = myFilter;
  
  const numbers = [0, 1, 2, 3, 4, 5];
  
  console.log(numbers.filter((item) => item > 2));