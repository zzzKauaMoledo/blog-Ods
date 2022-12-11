//Cria uma variável para manipilar um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET", "xml/conteudo.xml", false);
//Envia o arquivo aberto pra leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("corpo");
y = xmlDoc.getElementsByTagName("conteudo");

function texto1() {
  for (i = 0; i < 1; i++) {
    document.write(
      x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
  }
}
function noticiageral() {
  for (i = y.length - 1; i >= 0; i--) {
    document.write(
      "<div class='col-12 col-sm-6 col-lg-4'>" +
      "<div class='card' id='cartao' style='width:400px'>" +
      "<div class='card-body'>" +
      "<div class='card position-relative'>" +
      "<img class='card-img-top' src='imgs/" + y[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='400px'>" +
      "<div class='card-body'>" +
      "<h4>" +
      y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h4>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p class='card-text'>" + y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue.substr(0, 400) + "..." + "</p>" + 

      "<a class='btn btn-primary text-white fw-bold' href='postagem.html?codigo_postagem=" + i + "'>Saiba mais</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>");
  }
}

function titulo(){
  url = new URL (window.location.href);
  parametro = url.searchParams;
  i = parametro.get("codigo_conteudo");
  document.write(
      "<div class='row d-flex px-2 my-4'>" +
        "<div id='title-text-color' class='d-flex col-6 col-md-12 justify-content-center h2'>" +
        y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
        "</div>" +
      "</div>" +

      "<div class='container'>" +
         "<img class='img-responsive rounded' src='imgs/" + y[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "' width='100%'>" +
         "<br><br><br><br>" +
         "<a class='h4 text-decoration-none text-light'>" + y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</a>" +
      "</div>"
  );
}