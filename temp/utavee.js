;(function() {
	var _id, _name, _email, _token;

	var utavee = {
		setToken : function(token){
			_token = token;
		},
		setIdentity : function (obj) {
			_id = obj.id;
			_name = obj.name;
			_email = obj.email;
		}
	};

	//
	// 

	window.onload = function(){
		var params = "token=" + _token + "&name=" + _name + "&email" +_email + "&id=" + _id;
		var link = "atatusWidget.html?"+params;
		var iframe = document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.setAttribute("src", link);
		iframe.setAttribute("style", "position:absolute; bottom:0; right: 50; width: 512px; height: 500px;");
		document.getElementsByTagName("body")[0].appendChild(iframe);
	}
	window.utavee = utavee;
})(window);

