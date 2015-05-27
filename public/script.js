var Cookie = {
	set: function() {
		var domain = $("#cookie-domain").val();
		var value = $("#cookie-value").val();

		$.ajax({
			type: 'POST',
			url: '/cookie',
			data: {
				domain: domain,
				value: value
			}
		}).done(function() {
			Notify.show("Cookie created.", "good");
		}).fail(function() {
			Notify.show("Error creating cookie.", "bad");	
		});
	},

	clear: function() {
		$.ajax({
			type: 'DELETE',
			url: '/cookie'
		}).done(function() {
			Notify.show("Cookie cleared.", "good");
		}).fail(function() {
			Notify.show("Error clearing cookie.", "bad");	
		});
	},

	get: function() {
		var cookies = document.cookie;
		var cookieArray = cookies.split("; ");
		if (cookieArray.indexOf("cookie-test=true") !== -1) {
			Notify.show("Cookie is visible.", "good");
		}
		else {
			Notify.show("Cookie is not visible.", "bad");
		}
	}
}

var Notify = {
	show: function(message, type) {
		var id = Notify.generateId();
		var html = "<div id='" + id + "' class='notification " + type + "'>" + message + "</div>";
		$("body").append(html);
		$("#" + id).animate({
			"bottom": "0"
		}, 200);
		setTimeout(function() {
			Notify.remove(id);
		}, 3000);
	},
	generateId: function() {
		return new Date().getTime().toString();
	},
	remove: function(id) {
		$("#" + id).animate({
			"bottom": "-300px"
		}, 200, function() {
			$(this).remove();
		});
	}
};