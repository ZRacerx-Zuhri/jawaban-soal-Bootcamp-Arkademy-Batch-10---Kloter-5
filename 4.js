//soalno.4
function cetak_gambar(n) {
  if (n % 2 == 1) {
    x = "";
    for (i = 0; i < n; i++) {
      x += " x ";
    }
    x += "\n";
    for (l = 2; l < n; l++) {
      for (j = 1 + (n - 1) / 2; j < n; j++) {
        x += " = ";
      }
      for (k = n - 1; k < n; k++) {
        x += " x ";
      }
      for (j = 1 + (n - 1) / 2; j < n; j++) {
        x += " = ";
      }
      x += "\n";
    }
    for (k = 0; k < n; k++) {
      x += " x ";
    }
    return x;
  } else {
    return "harus bilangan ganjil";
  }
}

console.log(cetak_gambar(9));

//nodejs
