$(function(){
    $('.right-menu').sidr({
        name: 'sidr-right',
        side: 'right'
    });
    $('#sidrClose').click(function() {
        $.sidr('close', 'sidr-right');
    });
});