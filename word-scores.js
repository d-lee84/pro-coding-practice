"use strict";

/* function takes in an array of words and returns an array of calculated scores for each word */
function wordScores(words) {

  // Feedback: Could create a callback function that scores a single word (and use .map to call)
  return words.map(calculateWordScore);
}

/* function that takes in a word and calculates its corresponding score */
function calculateWordScore(word) {
  let wordScore = 0;

  for (let letter of word) {
    // For an invalid character, set wordScore to null and break. 
    if (!(letter.toUpperCase() in SCORE_KEY)) {
      return null;
    }

    wordScore += SCORE_KEY[letter.toUpperCase()];
  }

  return wordScore;

}

// Feedback: Another option of name is LETTER_TO_SCORE (what object is helping with)
const SCORE_KEY = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
