/* 	Objetivo: Capturar nome e sobrenome do usuário, concatenar (juntar) os campos e 
			  apresentar uma saudação personalizada 
 	          Elementos de Entrada: método form do objeto document
	          Elementos de Saída: método alert do objeto window 
        */

    /* Definição das Variáveis */
    var js_nome;
    var js_sobrenome;
    var js_nomecompleto;

function concatena( ) {

/* Entrada de Dados */
    js_nome = document.FormConcatena.f_nome.value;
    js_sobrenome = document.FormConcatena.f_sobrenome.value;

/* Processamento de Dados */
    js_nomecompleto = js_nome + ' ' + js_sobrenome;

/* Saída de Dados */
    window.alert('Ol\u00e1 ' + js_nomecompleto);

} 