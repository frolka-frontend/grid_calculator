$(document).ready(function(){
	$( "input" ).keyup(function() {
		var pageWidthValue = $('#pagewidth').val();
	  	var columncountValue = $('#columncount').val();
		var marginValue = $('#marginval').val() * 2;
	  	var gutterValue = $('#gutterval').val();
	  	var pageWidthVirtualValue = $('#pagewidth').val() - marginValue;
	  	var columnWidth = Math.floor(pageWidthVirtualValue / columncountValue) - (((columncountValue - 1) * gutterValue) /columncountValue).toFixed(2);
	  	var columnWidthVal = Math.floor(columnWidth).toFixed(0);
		$('#pixelresult span').text(columnWidthVal);
	  	var columnWidthVal = $(columnWidth).text();
		var colWidthPercentage = ((columnWidth / pageWidthValue )*100).toFixed(3);

//shame on me

    	$('#wrapresult').text(pageWidthValue);
    	$('#percentresult span').text(colWidthPercentage);
    	$('.visual-wrapper').css('width', pageWidthValue);
    	$('.column, .gutter, .margin').remove();
    	for ( var i = 0; i < columncountValue; i++){
    		$('.visual-wrapper').append('<div class="column"><span class="visual-value"></span></div>');
    		$('.visual-wrapper').append('<div class="gutter"><span class="visual-value"></span></div>');
    	}
    	$('.visual-wrapper').append('<span class="margin"><span class="visual-value"></span></span>');
    	$('.visual-wrapper').prepend('<span class="margin"><span class="visual-value"></span></span>');
    	$('.visual-wrapper div.gutter:last-of-type').remove();
		$('.column').css('width', columnWidth);
		$('.gutter').css('width', gutterValue);
		$('.margin').css('width', $('#marginval').val());
		$('.column .visual-value').text(columnWidth);
		$('.gutter .visual-value').text(gutterValue);
		$('.margin .visual-value').text(marginValue/2);    	
  	});
});





