var AppDispatcher   = require( '../dispatcher/AppDispatcher' );
var PersonConstants = require( '../constants/PersonConstants' );

var PersonActions = {

	'create' : function ( data ) {
		AppDispatcher.dispatch( {
			'actionType' : PersonConstants.PERSON_CREATE,
			'data' : data
		} );
	},

	'destroy' : function ( id ) {
		AppDispatcher.dispatch( {
			'actionType' : PersonConstants.PERSON_DELETE,
			'data' : { 'id' : id }
		} );
	}

};

module.exports = PersonActions;