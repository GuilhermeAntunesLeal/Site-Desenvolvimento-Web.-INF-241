function toggleTexto(topico) {
  const conteudo = topico.querySelector('.conteudo');
  const estaAberto = conteudo.style.maxHeight && conteudo.style.maxHeight !== "0px";

  if (estaAberto) {
    conteudo.style.maxHeight = null;
    conteudo.style.paddingBottom = "0";
  } else {
    conteudo.style.maxHeight = conteudo.scrollHeight + "px";
    conteudo.style.paddingBottom = "12px";
  }
}