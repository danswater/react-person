var React        = require('react/addons');
var EventEmitter = require( 'events' ).EventEmitter;
var _            = require( 'underscore' );
var assign       = require( 'object-assign' );

var AppDispatcher   = require( '../dispatcher/AppDispatcher' );
var PersonConstants = require( '../constants/PersonConstants' );

var CHANGE_EVENT = 'change';

var _persons = [];

function create ( data ) {
	var id = +new Date();

	data.id = id;
    var newData = React.addons.update( _persons, {
        '$push' : [ data ]
    } );
    _persons = newData;
}

function destroy ( id ) {
    var newData = _.reject( _persons, function ( person ) {
        return person.id === id;
    } );

    _persons = newData;
}

var PersonStore = assign( {}, EventEmitter.prototype, {

	'emitChange' : function () {
		this.emit( CHANGE_EVENT );
	},

	'addChangeListener' : function ( callback ) {
		this.on( CHANGE_EVENT, callback );
	},

	'removeChangeListener' : function ( callback ) {
		this.removeListener( CHANGE_EVENT, callback );
	},

	'getAll' : function () {
		return _persons;
	}

} );

AppDispatcher.register( function ( action ) {
	var data = {};

	switch( action.actionType ) {
		case PersonConstants.PERSON_CREATE:
			create( action.data );
			PersonStore.emitChange();
		break;

		case PersonConstants.PERSON_DELETE:
			var id = action.data.id;

			if( id ) {
				destroy( id );
			}
			PersonStore.emitChange();
		break;
	}

} );

module.exports = PersonStore;

