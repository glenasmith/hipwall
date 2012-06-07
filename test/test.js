
// Sample data from https://www.hipchat.com/docs/api/method/rooms/list
function getRoomsMock() {

	return {
	  "rooms": [
	    {
	      "room_id": 7,
	      "name": "Development",
	      "topic": "Make sure to document your API functions well!",
	      "last_active": 1269020400,
	      "created": 1269010311,
	      "owner_user_id": 1,
	      "is_archived": false,
	      "is_private": false,
	      "xmpp_jid": "7_development@conf.hipchat.com"
	    },
	    {
	      "room_id": 10,
	      "name": "Ops",
	      "topic": "Chef is so awesome.",
	      "last_active": 1269010500,
	      "created": 1269010211,
	      "owner_user_id": 5,
	      "is_archived": false,
	      "is_private": true,
	      "xmpp_jid": "10_ops@conf.hipchat.com"
	    }
	  ]
	};

}

// Sample data from https://www.hipchat.com/docs/api/method/rooms/history
function getHistoryMock() {

	return {
	  "messages": [
	    {
	      "date": "2010-11-19T15:48:19-0800",
	      "from": {
		"name": "Garret Heaton",
		"user_id": 10
	      },
	      "message": "Good morning! This is a regular message."
	    },
	    {
	      "date": "2010-11-19T15:49:44-0800",
	      "from": {
		"name": "Garret Heaton",
		"user_id": 10
	      },
	      "file": {
		"name": "Screenshot.png",
		"size": 141909,
		"url": "http:\/\/uploads.hipchat.com\/xxx\/Screenshot.png"
	      },
	      "message": "This is a file upload"
	    },
	    {
	      "date": "2010-11-19T16:13:40-0800",
	      "from": {
		"name": "Deploy Bot",
		"user_id": "api"
	      },
	      "message": "This message is sent via the API so the user_id is 'api'."
	    },
	    {
	      "date": "2010-11-19T16:48:19-0800",
	      "from": {
		"name": "Garret Heaton",
		"user_id": 10
	      },
	      "message": "This is message number four."
	    },
	    {
	      "date": "2010-11-19T17:48:19-0800",
	      "from": {
		"name": "Garret Heaton",
		"user_id": 10
	      },
	      "message": "And this is the last message we're looking at."
	    },
	  ]
	}


}



module("Remote HipChat Mocked Calls", {
	setup: function() {
		
		$.mockjax({
		  url: /.*\/rooms\/list.*/,
		  responseTime: 150,
		  responseText: getRoomsMock()
		});
		
		$.mockjax({
		  url: /.*\/rooms\/history.*/,
		  responseTime: 150,
		  responseText: getHistoryMock()
		});
		
		
	}
});

// good primer on async tests at http://net.tutsplus.com/tutorials/javascript-ajax/how-to-test-your-javascript-code-with-qunit/
asyncTest("Test getting the most recent messages", 1, function() {
    	

	getRecentMessages(function(recentMessages) {
	
		ok(4 === recentMessages.length);
		start();
	
	});
	
 
	
});