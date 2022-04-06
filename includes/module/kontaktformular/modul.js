function checkkontaktformular() {

	if (document.kontaktformular.name.value == "Ihr Name" || document.kontaktformular.name.value == " ") {

		alert("Bitte tragen Sie Ihren Namen ein!");
		document.kontaktformular.name.focus();
		return false;

 	} else if (document.kontaktformular.email.value == "Ihre eMail Adresse" || document.kontaktformular.email.value == " ") {

		alert("Bitte tragen Sie Ihre eMail Adresse ein!");
		document.kontaktformular.email.focus();
		return false;

 	} else if (document.kontaktformular.betreff.value == "Betreff Ihrer Nachricht" || document.kontaktformular.betreff.value == " ") {

		alert("Bitte geben Sie einen Betreff ein!");
		document.kontaktformular.betreff.focus();
		return false;

 	} else if (document.kontaktformular.text.value == "Ihre Nachricht" || document.kontaktformular.text.value == " ") {

		alert("Bitte geben Sie eine Nachricht ein!");
		document.kontaktformular.text.focus();
		return false;

 	}

}