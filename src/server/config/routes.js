module.exports = function( app ){


	//var contacts = require( '../app/controllers/contacts' );

	//home route
	app.get( '/', function (req, res) {
		console.log('root');
		res.send('holaaaaa');
	});

	//find a contact route
	//app.get( '/api/contacts/:id', contacts.findById );

	//add a contact route
	//app.post( '/api/contacts', contacts.addContact );

	//update a contact route
	//app.put( '/api/contacts/:id', contacts.editContact );

	//update a contact route
	//app.delete( '/api/contacts/:id', contacts.deleteContact );

};
