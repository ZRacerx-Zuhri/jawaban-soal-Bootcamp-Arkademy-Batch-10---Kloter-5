function ganti_kata(x, y, z) {
  a = x.split("");
  for (i = 0; i < a.length; i++) {
    if (a[i].includes(y)) {
      a.splice([i], 1, z);
    }
  }
  return a.join("");
}

baru = ganti_kata("purwakarta", "a", "o");
console.log(baru);

//nodejs
