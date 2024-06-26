import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';  

export interface User {
  id: any;
  userType: string;
  edad: number;
  genero: string;
  nombre: string;
  ubi: string;
  email: string;
  pisoId: any;
}

interface UserState {
  user: User | null; 
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload; 
    },
  },
});

export const { updateUser } = userSlice.actions;  
export default userSlice.reducer;  

export const selectUser = (state: RootState) => state.user.user;
