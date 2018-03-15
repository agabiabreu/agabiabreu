//DESTAQUE - Lonas
$(function() {
    $('#lonas-banners-more').click(function() {
        if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__back').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__banners').removeClass('ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        }
    });
    $('#lonas-back-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__back').removeClass('ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        }
    });
    $('#lonas-sanet-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__back').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__sanet').removeClass('ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
        }
    });
    
    
    $('#adesivos-simples-more').click(function() {
        if (
            $('.ed-destaque--adesivos__blackout').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__perfurado').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__removivel').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__simples').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--adesivos__simples').removeClass('ed-hide');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeIn');
        }
    });
    
    $('#adesivos-blackout-more').click(function() {
        if (
            $('.ed-destaque--adesivos__simples').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__perfurado').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__removivel').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__blackout').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--adesivos__blackout').removeClass('ed-hide');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeIn');
        }
    });
    
    $('#adesivos-perfurado-more').click(function() {
        if (
            $('.ed-destaque--adesivos__simples').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__blackout').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__removivel').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__perfurado').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--adesivos__perfurado').removeClass('ed-hide');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeIn');
        }
    });
    
    $('#adesivos-removivel-more').click(function() {
        if (
            $('.ed-destaque--adesivos__simples').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__simples').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__simples').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__blackout').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__blackout').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__blackout').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__perfurado').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--adesivos__perfurado').removeClass('animated fadeIn');
            $('.ed-destaque--adesivos__perfurado').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--adesivos__removivel').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--adesivos__removivel').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--adesivos__removivel').removeClass('ed-hide');
            $('.ed-destaque--adesivos__removivel').addClass('animated fadeIn');
        }
    });
    
    
    $('#placa-more').click(function() {
        if (
            $('.ed-destaque--placa__totem').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--placa__totem').removeClass('animated fadeIn');
            $('.ed-destaque--placa__totem').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__ps').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__ps').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--placa__ps').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--placa__ps').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__ps').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--placa__ps').removeClass('ed-hide');
            $('.ed-destaque--placa__ps').addClass('animated fadeIn');
        }
    });
    
        $('#totem-more').click(function() {
        if (
            $('.ed-destaque--placa__ps').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--placa__ps').removeClass('animated fadeIn');
            $('.ed-destaque--placa__ps').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__totem').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__totem').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--placa__totem').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--placa__totem').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--placa__totem').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--placa__totem').removeClass('ed-hide');
            $('.ed-destaque--placa__totem').addClass('animated fadeIn');
        }
    });
    
    
    
    
    
    
    
    
    
    
});