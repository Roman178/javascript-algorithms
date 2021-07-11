/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
 */

function sumOfTwo(arr, sum) {
  let result = false;
  arr.forEach((dig, index, itterArr) => {
    for (let i = 0; i < itterArr.length; i++) {
      if (i === index) continue;
      if (dig + itterArr[i] === sum) {
        result = true;
        break;
      }
    }
  });
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
// console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
console.log(sumOfTwo([1, 1, 1], 2)); // true
console.log(sumOfTwo([1, 2, 3, 4, 5], 6)); // true
