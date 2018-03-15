$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('home') == 1) {
        $('.ed-destaques--menu').addClass('ed-hide');
    }
    if (window.location.hash.indexOf('Lonas') == 1) {
        $('.ed-destaques--menu').removeClass('ed-hide');
    }
});
