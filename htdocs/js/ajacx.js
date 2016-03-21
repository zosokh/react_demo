function do_hastle() {

	$.ajax({
		'url'	 : 'ajax/resource/delete.php',
		'type'	: 'POST',
		'dataType': 'json',
		'data'	:{
			'form' : 'test',
			'eventId'  : 'unko',
		},
		'beforeSend' :function(XMLHttpRequest){
			//loading.show();
		},
		'complete':function(XMLHttpRequest){
			//loading.hide();
		},
		'success' : function(data,dataType){
			console.log(data);

		},
		'error'   : function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest);
		},
	});
}
