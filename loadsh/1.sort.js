/**
 * --- 测试用例 ---
 *
 * 输入：[1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
 * 输出：[1, 3, 5, 6, 6, 7, 8, 9, 34, 76]
 *
 * --- 说明 ---
 *
 * 思考：快速排序是稳定的吗？
 * 解答：base 的每次选择，会导致快排是不稳定排序。
 */
function quickSort(arr) {

  if(arr.length < 2) {
    return arr
  }
  const left = [],
    right = [],
    pre = Math.floor(arr.length / 2), // 向下取整
    base = arr.splice(pre, 1)[0];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if(base > element ) {
        left.push(element)
      } else {
        right.push(element)
      }
    }
  return quickSort(left).concat([base], quickSort(right));
}
// console.log(quickSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        const tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))


/**
 * --- 测试用例 ---
 *
 * 输入：[6, 45, 3, 2, 5, 6, 8, 4, 3, 4, 56, 67, 5]
 * 输出：[2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 45, 56, 67]
 *
 * --- 说明 ---
 *
 * 思考：选择排序是稳定的吗？
 * 解答：要看代码是如何实现的，在本例中由于有交换，所以是不稳定排序。
 */

const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }

    if(arr[min] < arr[i]) {
      console.log(min);
      const tem = arr[min];
      arr[min]  = arr[i];
      arr[i] = tem
    }
  }

  return arr;
}
// console.log(selectSort([6, 45, 3, 2, 5, 6, 8, 4, 3, 4, 56, 67, 5]))
