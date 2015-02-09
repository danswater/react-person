var React = require( 'react' );

var PersonStore   = require( '../stores/PersonStore' );
var PersonActions = require( '../actions/PersonActions' );

var PersonTable = require( './Table' );
var PersonForm  = require( './Form' );

function getPersonState () {
    return {
        'allPerson'    : PersonStore.getAll(),
        'removePerson' : ''
    };
}


var PersonBox = React.createClass( {
    'getInitialState' : function () {
        return getPersonState();
    },

    'componentDidMount' : function () {
        PersonStore.addChangeListener( this._onChange );
    },

    'componentWillUnmount' : function () {
        PersonStore.removeListener( this._onChange );
    },

    '_onChange' : function () {
        this.setState( getPersonState() );
    },

    'handleDeletePerson' : function ( id ) {
        if( id ) {
            PersonActions.destroy( id );
        }
    },

    'handleUserSubmit' : function ( newPerson ) {
        PersonActions.create( newPerson );
    },

    'render' : function () {
        return (
            <div className="PersonBox">
                <PersonForm
                    onUserSubmit={ this.handleUserSubmit }
                    newPerson={ this.state.allPerson }
                />

                <PersonTable
                    handleDeletePerson={ this.handleDeletePerson }
                    persons={ this.state.allPerson }
                    removePerson = { this.state.removePerson }
                />
            </div>
        );
    }
} );

module.exports = PersonBox;