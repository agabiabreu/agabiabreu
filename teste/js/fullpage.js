$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['home', 'Lonas', 'Adesivos', 'Placas'],
        scrollOverflow: true,
        keyboardScrolling: false,
        normalScrollElements:'.fp-kill'
    });
});