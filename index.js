<!DOCTYPE html>
<html>
<body>

<h2>Classificador de Nível de Herói</h2>

<label for="nome">Digite o nome do herói:</label>
  <input type="text" id="nome" name="nome"><br>
  
<label for="numero">Quantidade de XP do Herói:</label>
  <input type="number" id="numero" name="numero" min="1" step="1"><br><br>

<button onclick="classificar()">Classificar Herói</button>

<p id="resultado"></p>

<script>

function classificar(){
  //Variável para armazenar o nivel do herói	
  let nivel;
  //obtem o nome do herói
  var nome = document.getElementById("nome").value;
  //obtem a quantidade de XP
  var xp = document.getElementById("numero").value;
  // Classificação de nível
  if (xp <= 1000) {
      nivel = "Ferro";
  } else if (xp > 1000 && xp <= 2000) {
      nivel = "Bronze";
  } else if (xp > 2000 && xp <= 5000) {
      nivel = "Prata";
  } else if (xp > 5000 && xp <= 7000) {
      nivel = "Ouro";
  } else if (xp > 7000 && xp <= 8000) {
      nivel = "Platina";
  } else if (xp > 8000 && xp <= 9000) {
      nivel = "Ascendente";
  } else if (xp > 9000 && xp <= 10000) {
      nivel = "Imortal";
  } else if (xp > 10000) {
      nivel = "Radiante";
  } else {
      nivel = "Iniciante";
  }

  //exibe o resultado
  document.getElementById("resultado").textContent = "O Herói de nome " + nome+ " está no nível de " + nivel;
}

</script>

</body>
</html>
