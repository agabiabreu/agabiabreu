$('section.fp-kill').scroll(function() {
    $('.ed-header').toggleClass('ed-header__bg mdc-elevation--z2', $(this).scrollTop() > 1);
    $('.ed-header--toolbar__title').toggleClass('ed-unhide', $(this).scrollTop() > 1);
    $('.ed-header--toolbar__social').toggleClass('ed-unhide', $(this).scrollTop() > 1);
});
$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('home') == 1) {
        $('.ed-header').removeClass('ed-header__bg mdc-elevation--z2');
        $('.ed-header--toolbar__title').removeClass('ed-unhide');
        $('.ed-header--toolbar__social').removeClass('ed-unhide');
    }
});