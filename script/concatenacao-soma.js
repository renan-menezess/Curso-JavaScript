/* Objetivo: Desenvolver um programa em JavaScript que faça a Leitura de 2 números inteiros
e apresente o resultado da soma entre eles.
*/
/* Definição das Variáveis */
var js_n1;
var js_n2;
var js_soma;
/* Entrada de Dados */
js_n1 = window.prompt('Informe o primeiro número: ' , 'Digite aqui');
js_n2 = window.prompt('Informe o segundo número: ' , 'Digite aqui');
/* Processamento de Dados */
js_soma = parseInt(js_n1) + parseInt(js_n2);
/* Saída de Dados */
document.write('O Resultado da soma= '+ js_soma);