/* Objetivo: Aplicação do Laço Incondicional <for>, incrementando +2 na variável js_num e apresentando os
valores acumulados de 1 a 10.
*/
/* Definicao das variaveis */
var js_num;
document.write('<p>Apresentação dos valores acumulados para js_num=1 e menor ou igual a 10 incrementando a variável de +=2:');
document.write('<p>(Note que o limite irá até 9, pois 9+2=11, portanto será maior do que 10)');
/* Aplicação do Laço Incondicional - for */
for (js_num=1; js_num<=10; js_num+=2) {
 document.write('<p>' + js_num);
 }