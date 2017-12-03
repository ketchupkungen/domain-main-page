$(document).ready(function() {

    $('.toggle-text').on('click', function() {
        $parent_box = $(this).closest('.box');
        $parent_box.siblings().find('.bottom').hide();
        $parent_box.find('.bottom').toggle(400);
    });

});