jQuery(document).on( 'wbk_on_form_rendered', function(){
    const limit = 8;
    jQuery('.wbk-book-quantity').find('option').remove();
    var options = '';
    for( var i = 1; i <= limit; i++ ){
      options += '<option value='+ i  + '>' + i + '</option>';
    }
    jQuery('.wbk-book-quantity').html(options)
});
