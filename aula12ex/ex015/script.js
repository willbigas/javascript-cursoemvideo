function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');

  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id' , 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        // Crianca
        img.setAttribute('src' , 'bebe-menino.png');
      } else if (idade < 21 ) {
        // Jovem
        img.setAttribute('src' , 'jovem-homem.png');
      } else if (idade < 50) {
        img.setAttribute('src' , 'adulto-homem.png');
      } else {
      img.setAttribute('src' , 'senhor-homem.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src' , 'bebe-menina.png');
      } else if (idade < 21 ) {
        img.setAttribute('src' , 'jovem-mulher.png');
      } else if (idade < 50) {
        img.setAttribute('src' , 'adulta-mulher.png');
      } else {
        img.setAttribute('src' , 'senhora-mulher.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img)
  }
}

