HipWall
=======

This is a small experiment in putting a [HipChat](http://www.hipchat.com/) window on the the big screen. You can read the backstory on [Glen's blog](http://blogs.bytecode.com.au/glen/2012/04/25/hipwall-hipchat-for-plasma-sized-team-walls.html).

## Customising For Your Account ##

You'll need to modify /js/hipwall.js with your own account auth token and the room id that you want to show. You can get that info from the admin page on the HipChat site.


	var HipWall = {
	
		auth_token: 'abcdefghijklmnopqrstuvwxyz',
		room_id: '54321',
		date: 'recent',
		timezone: 'Australia/ACT',
		frequency: 5000
	
	} 



The frequence is the number of milliseconds between polls. If it's too high, you will get throttled by the HipChat servers.

The timezone field needs to be one of HipChat's [list](https://www.hipchat.com/docs/api/timezones).

Once that's done, fire up index.html and you're in business.