"use strict";

/* This function takes in a string and returns the first of the most common letter */

function mostPopular(word) {
  let ltrCount = {};
  let maxCount = 0;
  let mostCommonLtr;

  for (let letter of word) {
    // Add one to the previous count of the letter, or if it's the 
    // first occurrence of the letter, set the letter count to 1 
    ltrCount[letter] = ltrCount[letter] + 1 || 1;

    if (ltrCount[letter] > maxCount) {
      maxCount = ltrCount[letter];
      mostCommonLtr = letter;
    }
  }

  return mostCommonLtr;
}
