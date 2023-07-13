import axios from "axios";

export default function ({ $axios, redirect }) {
  // Konfigurasi interceptors, headers, dll.
  // Misalnya, Anda dapat menambahkan interceptors untuk menangani error atau mengatur header Authorization.

  // Contoh penanganan error:
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 404) {
      redirect("/404"); // Redirect ke halaman 404 jika API mengembalikan status 404
    }
  });
}
