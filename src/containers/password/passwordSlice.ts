import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  input: string;
  isAccessGranted: boolean | null;
  correctPin: string;
}

const initialState: PasswordState = {
  input: '',
  isAccessGranted: null,
  correctPin: '1337',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeDigit: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkPassword: (state) => {
      state.isAccessGranted = state.input === state.correctPin;
    },
    reset: (state) => {
      state.input = '';
      state.isAccessGranted = null;
    },
  },
});

export const { addDigit, removeDigit, checkPassword, reset } = passwordSlice.actions;
export default passwordSlice.reducer;
