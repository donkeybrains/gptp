# README #

## The task: ##

The assignment is to create a simple web based chat application. There’s a simple chat server with NodeJS that provides both a very simple websocket and REST APIs. Your job is to create a HTML/CSS/JavaScript application that works in modern browsers (Chrome/Firefox). The application should be responsive so that it scales to 1024 x 768 and larger. You must use one of the following JS frameworks: Angular, React or Vue. If you have great expertise on some other framework, please contact us before starting the assignment. Feel free to use your choice of modules.

You'll be evaluated on:

* usability
* responsiveness
* performance
* code readability
* project structure

You will find some documentation on the server further below. There is no need for authentication or persistence and the server itself does not even support them.
 
The client must have these three features:

* Be able to send and receive chat messages through the websocket interface
* See who else is there (use GET /users API call)
* Filtered history view (use GET /history API call) i.e. user should be able to see messages from only one specific user

There are some images of the chat client in the "ui_design" directory to illustrate the general idea. They are not meant to be the exact goal. 
If you like to use some ui framework that has different looking components it’s ok.

Also remember:

* Please include instructions on how to build and host the application.
* Please commit and push to the repository in the same way you would on any regular professional project.
* There's no strict deadline for this assignment. However, please keep track of your hours and mention them when you submit your assignment.


## The Server: ##

### Stupid and simple chat server for Leadin ###

### Install ###

* Install [NodeJS](https://nodejs.org)
* Install libraries: `npm install`
* Run: `node app.js`

By the default both the websocket server and REST API server listens on port 8888.

### How to use ###

This is very simple and stupid chat server without any persistence or authentication. Do not use in any real environment.

The server has two parts:

* websocket server
* REST API

#### Websocket Server ####

The websocket server relays all chat messages and allows user to change his nickname. Once you connect to the websocket server (e.g. ws://127.0.0.1:8888) it responds with the hello message. Before you can send any messages, register a nick name by sending `/nick nickname` command to the websocket server. If the nick is free i.e. nobody uses it right now, it assigned to you and you can start sending messages. Send any text data without leadin '/' character to be sent all other respondents.

*Note! You can take existing nick if that user is not currently online. Like I said, this server has no security!*

Messages from other users are in JSON format: `{"from": nickname,"message": message}`. Example:
{"from":"katti","message":"hello world"}

Server will send some updates like when new user joins or leaves. Server messages come from user '_server'. BTW, you cannot take a nick starting with the underscore.

#### REST API ####

The server exposes two REST API calls:

* GET /users - get list of all users and their online/offline status
* GET /history - get chat history

Both calls return JSON objects in form: `{errors: null, data: returned data}`

#### Known Bugs ####

* If user disconnects before taking the nick, the server dies.