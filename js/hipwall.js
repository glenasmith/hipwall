
var HipWall = {

	auth_token: 'abcdefghijklmnopqrstuvwxyz',
	room_id: '54321',
	date: 'recent',
	timezone: 'Australia/ACT',
	frequency: 5000

}


function populateRecentMessages(recentMessages) {

	$('#chatlist').html("");

	$(recentMessages).each(function(idx, element) {
		var timestamp = moment(element.date)
		$('#chatlist')
			.append("<div class='chat'><div class='chatmessage'>" + 
				element.message + "</div><div class='chatauthor'>" + 
				timestamp.fromNow() + " by " + 
				element.from.name + "</div></div>");
			
	});
	//$('.chatmessage').textfill( { maxFontPixels: 40 } );
	//$('.chatauthor').textfill( { maxFontPixels: 30 } );
	
}


function getRecentMessages(callback) {


		var recentMessages = [];	
	
		$.ajax({
			url: 'https://api.hipchat.com/v1/rooms/history',
			dataType: "jsonp",
			type: 'GET',
			data: {
				auth_token: HipWall.auth_token,
				room_id: HipWall.room_id,
				date: HipWall.date,
				timezone: HipWall.timezone,


			},

			success:  function(data) {

				if (data.messages.length > 4) {

					callback(data.messages.slice(-4));


				} else {

					callback(data.messages);

				}

			}

		});
		

}

$(document).ready(function() {

	getRecentMessages(populateRecentMessages);
	setInterval(function() { getRecentMessages(populateRecentMessages) }, HipWall.frequency);
	
});