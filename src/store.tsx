// store merupakan global state yang dapat diakses dan diubah dari berbagai komponen
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// buat interface untuk mendeklarasikan object dengan tipe data string
interface UserStateValue {
  username: string;
}

interface UserState {
  value: UserStateValue;
}

// function untuk mendeklarasikan state awal slice yang  memiliki value
// bernama username dengan type data string
const initialState = {value: { username: ''}} as UserState;


// Ini merupakan slicer

// slice digunakan untuk mengelompokan data dari state global kedalam bagian yang lebih kecil, biasanya file state memiliki file sendiri
//  ini contoh slice tetapi filenya sama dengan global state
// slice juga terdiri dari reducer dan action. reducer merupakan funct untuk merubah value dari sebuah state.
// reducer mengambil 2 paramater yaitu state saat ini dan action yang akan diterima 
//  kemudian Actions merupakan sebuah object yang berisi informasi tentang aksi yang akan dilakukan pada state.

// buat slice menggunakan createSlice()
const userSlice = createSlice({
  name: 'user', // nama slice
  initialState, // state awal slice
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    },
    logout: (state: UserState) => {
      state.value = initialState.value;
    }
  }
})

// export logic func login dan logout
export const {login, logout} = userSlice.actions;


export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
