<script src="game_login.js"></script>

function addUser()
{
    var Login_jogador_1 = document.getElementById("Player1Name").value;

var Login_jogador_2 = document.getElementById("Player2Name").value;

 localStorage.setItem("koriadon", Login_jogador_1);
 localStorage.setItem("miraidon", Login_jogador_2);
    window.location = "game_page.html";
}