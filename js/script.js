$(document).ready(function () {
    $('.sidebar a').click(function () {
        $('[class^=category-]').hide('fast','linear');
        var id = $(this).attr('id');
        if(id == 'all') {
             $('[class^=category-]').show('fast','linear');
        } else {
             $('.category-'+id).show('fast','linear');
        }
    });
});