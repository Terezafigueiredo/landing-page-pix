// ---------- COPIAR CHAVE PIX ----------
function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");
  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(mostrarToast._timer);
  mostrarToast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function copiarPix() {
  const chavePix = document.getElementById("pix").innerText.trim();

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(chavePix)
      .then(() => mostrarToast("✅ Chave Pix copiada com sucesso!"))
      .catch(() => copiarPixFallback(chavePix));
  } else {
    copiarPixFallback(chavePix);
  }
}

// Fallback para navegadores/webviews (ex.: Instagram, WhatsApp in-app) sem suporte à Clipboard API
function copiarPixFallback(texto) {
  const campoTemporario = document.createElement("textarea");
  campoTemporario.value = texto;
  campoTemporario.setAttribute("readonly", "");
  campoTemporario.style.position = "fixed";
  campoTemporario.style.left = "-9999px";
  document.body.appendChild(campoTemporario);
  campoTemporario.select();

  try {
    document.execCommand("copy");
    mostrarToast("✅ Chave Pix copiada com sucesso!");
  } catch (erro) {
    mostrarToast("Não foi possível copiar. Copie manualmente a chave Pix.");
  }

  document.body.removeChild(campoTemporario);
}
