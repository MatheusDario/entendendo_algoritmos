function binary_search(list, item) {
  let low = 0;
  let hight = list.length - 1;

  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const my_list = [1, 3, 5, 7, 9]
console.log(binary_search(my_list, 9))