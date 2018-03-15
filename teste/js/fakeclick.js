$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('QuemSomos') == 1) {
        document.getElementById('ed-quemsomos').click();
    }
    if (window.location.hash.indexOf('Servicos') == 1) {
        document.getElementById('ed-servicos').click();
    }
    if (window.location.hash.indexOf('Fizemos') == 1) {
        document.getElementById('ed-fizemos').click();
    }
    if (window.location.hash.indexOf('Contato') == 1) {
        document.getElementById('ed-contato').click();
    }
});