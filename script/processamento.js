/* Objetivo: Desenvolver um programa que faça o teste de execução de duas opções.
Utilizando o método confirm, verificar o botão selecionado pelo usuário e apresentar a opção selecionada.
*/
/* Definicao das variaveis */
var js_resp;
/* Após o botão selecionado, js_resp receberá um valor lógico true ou false, capturado pelo método
confirm */
js_resp = window.confirm('Clique em um dos dois botões. ');
/* Decisão Condicional Composta if/else comparado ao valor lógico true */
if (js_resp == true) {
document.write('Você acionou o botão: <b>OK</b> !!!' );
}
else {
document.write('Você acionou o botão: <b>Cancelar</b> !!!' );
} 