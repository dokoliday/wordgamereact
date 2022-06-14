import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TGifExampleState {
  value: string;
}

const initialState: TGifExampleState = {
  value: ''
};

export const fetchGif = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchGifRequest: () => {
      console.log('saga will be called');
    },

    fetchGifSuccess: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const {fetchGifRequest, fetchGifSuccess} = fetchGif.actions;
