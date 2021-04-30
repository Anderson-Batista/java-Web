/**
 * Confirmação de exclusão de um contato
 * @author Anderson Batista
 */

function confirmar(idcon){
	let resposta = confirm("Cenfirma exclusão deste contato ?");
	if(resposta === true){
		//alert(idcon);
		Window.location.href = "delete?idcon=" + idcon;
	}
}