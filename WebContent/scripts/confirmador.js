/**
 * Validação de formulário
 * @author Anderson Batista
 */
 
 function confirmar(idcon){
 	let resposta = confirm("Confirma a exclusão deste contato ?");
 	if(resposta === true){
 	//alert(idcon);
 	window.location.href = "delete?idcon=" + idcon;
 	}
 }
