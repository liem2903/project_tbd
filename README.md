# Project: Event Scheduler
# Description:
A web-app that reminds you of your events and that can easily add to google calender using smart prompts.  

# Authentication System:
This website uses JWT Tokens for the access tokens, and opaque tokens for the refresh tokens. The refresh token is stored in the data-base and also in cookies, whilst 
the access token is just stored in the cookie. Everytime an api call is called - a access token is attached and verified. If it is expired the interceptor will refresh
the token and cookie using the refresh token. Everytime the refresh token is used it is rotated - meaning a new one is created for security purposes.

It also requires google authentication - with the access token being stored within a REDIS cache for quick and easy access - with. Refresh token is stored in data-base. Every google call requires an access token - and this is promptly refreshed when required.

If a user attempts to access a page that is protected they will be moved to login. Also if the user attempts to access the login page - the Auth Context that wraps the app will redirect it to the home page.
 
# Features: 
- Reminding system - smart nudges based off event type - will send you the email. IE meeting will be 15 min.
- Email at beginning of day: reminding of stuff that you have that day -> and at end of day - telling you about next days things. 
- Auto categorising events based on key words --> IE dinner with Emma tmr 5pm - 7pm will fill that in my google calender. 
- Can make recurring events. Can also delete recurring events with same word prompts.
- Sync to your google calender.
- Simple dashboard design - show today's commitments, weekly commitments as a sidebar you can scroll through. 
- So two types of things: Events and Due Dates --> and due dates have reminders that you can set.
- Being able to add friends. By adding friends everytime you create an event with their name you invite them to a google calender.
- Can type events that span multiple days - eg wao 11pm-3am and this will be accounted for creating two events for you.
