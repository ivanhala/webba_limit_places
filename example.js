jQuery(document).on( 'wbk_on_form_rendered', function(){
    jQuery('#wbk-book-quantity').find('option').remove();
    jQuery('#wbk-book-quantity').html('<option value="1">1</option><option value="2">2</option>'); 
});
