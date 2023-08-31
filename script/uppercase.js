/* Objetivo: Capturar o nome do curso e apresentar o código correspondente
Verificar:
Se js_cursodig for igual a SIST, apresentar o código "SIST001/FB".
Caso contrário, apresentar a mensagem "Curso Inválido!".
Objetos e Métodos:
Entrada: document.form
Saída: document.form (para código válido no campo de saída do formulário)
Saída: window.alert (para código inválido por janela de alerta)
Formulário: formcurso
Função: cadcurso
Evento: onclick
*/
/* Definicao das variaveis */
var js_cursodig;
/* função cadcurso() */
function cadcurso(){
    js_cursodig=document.formcurso.f_cursodig.value;
    if (js_cursodig.toUpperCase()=='SIST'){
    document.formcurso.f_codcurso.value='SIST001/FB';
    }
    else {
    window.alert('Curso Inv\u00E1lido!');
    } // fechamento da estrutura if/else
    } // fechamento da function 