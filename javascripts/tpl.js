;window.NAVY = window.NAVY || {};
window.NAVY.TPL = {
	templates:{},
	loadTemplates:function(names,cbf){
		var self = this;
		var tplLength = names.length;
		var loadTemplate = function(index){
			var name = names[index];
			if(self.templates[name] === undefined){
				$.get('tpl/'+name+'.html',function(data){
					self.templates[name] = data;
					if(++index < tplLength){
						loadTemplate(index);
					}else{
						cbf();
					}
				})
			}else{
				if(++index < tplLength){
					loadTemplate(index);
				}else{
					cbf();
				}			
			}
		}
		loadTemplate(0);
	},
	get:function(name){
		return this.templates[name];
	}
}