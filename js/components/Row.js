var React = require( 'react' );

var PersonRow = React.createClass({
    'handleDeletePerson' : function ( e ) {
           e.preventDefault();
            e.stopPropagation();
           this.props.handleDeletePerson( this.props.id );
    },

    render: function() {
        console.log( this.props );
        return (
            <tr>
                <td><span>{ this.props.firstname }</span></td>
                <td><span>{ this.props.lastname }</span></td>
                <td><span>{ this.props.nickname }</span></td>
                <td><span>{ this.props.birthday }</span></td>
                <td><span>{ this.props.age }</span></td>
                <td><span>{ this.props.currentLocation }</span></td>
                <td><span>{ this.props.remarks }</span></td>
                <td><a href="#" className="glyphicon glyphicon-remove" onClick={ this.handleDeletePerson } data-toggle="tooltip" data-placement="right" title="remove"></a></td>
            </tr>
        );
    }
});

module.exports = PersonRow;