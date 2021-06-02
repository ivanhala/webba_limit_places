function wbk_on_form_rendered( service ){
    jQuery('#wbk-book-quantity').find('option').remove();
    var options = '';
    for( var i = 1; i <= 30; i++ ){
      options += '<option value='+ i  + '>' + i + '</option>';
    }
    jQuery('#wbk-book-quantity').html(options);
}
