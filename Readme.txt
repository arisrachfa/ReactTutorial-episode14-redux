Pada episode 14 ini mempelajari tentang Redux Toolkit, React Redux sendiri merupakaan sebuah state management untuk react.
Pada Episode 14 Redux Toolkit yang dipelajari yaitu membuat sebuah provider yang digunakan untuk mengakses sebuah global state bernama 'store'.
Global State merupakan sebuah state yang dapat diakses oleh berbagai komponen. selain itu pada episode ini
juga mempelajari tentang pembuatan 'slice', 'slice' yaitu state yang lebih kecil yang merupakan bagian dari sebuah 'store' atau global state.

untuk membuat slice kita dapat menggunakan funct createSlice().

Dalam Redux, memiliki dua konsep penting dalam mengelola sebuah state/store yaitu reducer dan action.
# Reducer merupakan reducer merupakan funct untuk merubah value dari sebuah state. reducer mengambil 2 paramater yaitu state saat ini dan action yang akan diterima.
# Action  merupakan sebuah object yang berisi informasi tentang aksi yang akan dilakukan pada state.

Lalu untuk dapat memberikan aksi/action pada sebuah komponen untuk mengakses sebuah slice/store dapat menggunakan funct:
# useDispatch() = digunakan untuk mengirimkan sebuah action yang dihasilkan oleh Redux ke Reducer dan kemudian mengirimkannya ke store
# useSelector() = digunakan untuk mendapatkan state value pada store redux

