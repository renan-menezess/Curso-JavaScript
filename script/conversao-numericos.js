/* Objetivo: Desenvolver um programa em JavaScript que faça a Leitura de 2 números inteiros
 aplique a conversão de valores com parseInt e apresente o resultado da soma
entre eles.
 Entrada de Dados por Formulário.
*/
/* Definição das Variáveis */
var js_n1;
var js_n2;
var js_soma;
/* Definição da função soma() para capturar dados, processar somatória e apresentar o resultado
*/
function soma() {
/* Entrada de Dados */
js_n1 = parseInt(document.MeuFormulario.f_n1.value);
js_n2 = parseInt(document.MeuFormulario.f_n2.value);
/* Processamento de Dados */
js_soma = js_n1 + js_n2;
/* Saída de Dados */
window.alert('Resultado da Somatória = ' + js_soma.toString());
}