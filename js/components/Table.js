var React = require( 'react' );
var _     = require( 'underscore' );

var PersonRow   = require( './Row' );

var PersonTable = React.createClass( {
    'render' : function () {
       var self = this;
       var PersonRows = _.map(this.props.persons, function ( person, index ) {
            return (
                <PersonRow
                    handleDeletePerson = { self.props.handleDeletePerson }
                    firstname          = { person.firstname }
                    lastname           = { person.lastname }
                    nickname           = { person.nickname }
                    birthday           = { person.birthday }
                    age                = { person.age }
                    currentLocation    = { person.currentLocation }
                    remarks            = { person.remarks }
                    key                = { person.id } 
                    id                 = { person.id }
                />
            );
        } );

        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Nickname</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Current Location</th>
                        <th>Remarks</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { PersonRows }
                </tbody>
            </table>
        );
    }
} );

module.exports = PersonTable;