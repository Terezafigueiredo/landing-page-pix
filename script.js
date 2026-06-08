function copiarPix() {
  const chavePix = document.getElementById("pix").innerText.trim();
  const toast = document.getElementById("toast");

  navigator.clipboard.writeText(chavePix).then(() => {
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
}