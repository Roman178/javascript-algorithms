/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const lowStr1 = str1.toLowerCase();
  const lowStr2 = str2.toLowerCase();

  if (lowStr1 === lowStr2) return false;
  if (lowStr1.length !== lowStr2.length) return false;

  for (let char of lowStr1) {
    if (!lowStr2.includes(char)) return false;
  }
  return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(anagram("finder", "Friend")); // true
// console.log(anagram("hello", "bye")); // false
// console.log(anagram("aba", "ba"));
console.log(anagram("up", "UP"));
