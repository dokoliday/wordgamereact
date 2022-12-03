import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {azertyKeyboardLetters} from '../../components/keyboard/keyboardPatterns';

export interface TGameState {
  word: string;
  wordinput: string;
  score: number;
  keyboard: string[];
  life: number;
}

const initialState: TGameState = {
  word: '',
  wordinput: '',
  score: 0,
  keyboard: azertyKeyboardLetters(),
  life: 3
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<{word: string}>) => {
      state.word = action.payload.word;
    },
    setWordInput: (state, action: PayloadAction<{wordinput: string}>) => {
      if (state.word === action.payload.wordinput) {
        state.score = state.score + 10;
        state.wordinput = '';
      } else {
        state.wordinput = action.payload.wordinput;
      }
    },

    setScore: (state, action: PayloadAction<{score: number}>) => {
      state.score = action.payload.score;
    },
    setKeyboard: (state, action: PayloadAction<{keyboard: string[]}>) => {
      state.keyboard = action.payload.keyboard;
    },
    setLife: (state, action: PayloadAction<{life: number}>) => {
      state.life = action.payload.life;
    }
  }
});

export const {
  setWord,
  setWordInput,
  setScore,
  setKeyboard,
  setLife
} = game.actions;
