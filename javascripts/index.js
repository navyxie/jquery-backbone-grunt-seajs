;$(function(){
	var TPL = NAVY.TPL;
	$('#index').on('tap',function(){
		TPL.loadTemplates(['new-note'],function(){
			console.log(TPL.get('new-note'));
		})
	}).trigger('tap');
});