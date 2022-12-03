import {shuffle} from './shuffleArray';

export const azertyKeyboardLetters = () => [
  'a',
  'z',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'q',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'w',
  'x',
  'c',
  'v',
  'b',
  'n',
  '<',
  '<='
];

const qwertyKeyboardLetters = () => [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  '<',
  '<='
];
const shuffledKeyboard = () => {
  const azerty = azertyKeyboardLetters();
  const arr = azerty.splice(azertyKeyboardLetters().length - 2, 2);
  console.log(arr);

  return shuffle(
    [...azertyKeyboardLetters()].splice(0, azertyKeyboardLetters().length - 2)
  ).concat(arr);
};

export const keyBoardPatterns = {
  regular: {azertyKeyboardLetters, qwertyKeyboardLetters},
  shuffle: shuffledKeyboard
};
