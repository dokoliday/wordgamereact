import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: ''
};

export const fetchGif = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchGifRequest: () => {
      console.log('saga will be called');
    },

    fetchGifSucccess: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const {fetchGifRequest, fetchGifSucccess} = fetchGif.actions;
