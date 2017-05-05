# Introduction

A sample app showing how to use Hoodie in a React-Redux application. This is a modification to [this](http://bit.ly/2pgT5nE) example which uses Firebase.

## Instruction ##

- Clone this repo
- Open the cloned directory from the terminal
- Update the code in `src/actions/index` with the url to your hoodie server
```
	 const hoodie = new Hoodie({
		url: 'http://localhost:8000',
		PouchDB: PouchDB
	  });
```
- Run the command `npm install`
- Start the app with `npm start`

### Notes ###
1. You would have to setup Hoodie server and use that as the hoodie server url above. [See the Hoodie server readme for setup instruction](https://github.com/hoodiehq/hoodie-server)

2. I haven't tried this with the conventional way of building hoodie apps where you have the frontend code in a public folder and serve the complete hoodie script from the server and then add hoodie plugins and easily code the backend. 

This is still experimental so you can open an issue to start a discussion. 