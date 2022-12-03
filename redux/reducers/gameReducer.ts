import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TGameState {
  word: string;
  wordinput: string;
  score: number;
}

const initialState: TGameState = {
  word: '',
  wordinput: '',
  score: 0
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
    }
  }
});

export const {setWord, setWordInput, setScore} = game.actions;
