var React = require( 'react' );

var PersonStore   = require( '../stores/PersonStore' );
var PersonActions = require( '../actions/PersonActions' );

var PersonTable = require( './Table' );
var PersonForm  = require( './Form' );
var Modal       = require( './Modal' );

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

        var form = (
            <PersonForm
                onUserSubmit={ this.handleUserSubmit }
                newPerson={ this.state.allPerson } />
        );

        var table;
        if ( this.state.allPerson.length !== 0 ) {
            table = (
                <PersonTable
                    handleDeletePerson = { this.handleDeletePerson }
                    persons            = { this.state.allPerson }
                    removePerson       = { this.state.removePerson } />
            );
        } else {
            table = <p>No data to display</p>;
        }

        return (
            <div className="PersonBox">
                <Modal label="Add Person" title="Add Person">{ form }</Modal>
                { table }
            </div>
        );
    }
} );

module.exports = PersonBox;