var React = require( 'react' );

var PersonForm = React.createClass( {
    'handleSubmit' : function ( e ) {
        e.preventDefault();
        var firstname       = this.refs.firstname.getDOMNode().value.trim();
        var lastname        = this.refs.lastname.getDOMNode().value.trim();
        var nickname        = this.refs.nickname.getDOMNode().value.trim();
        var birthday        = this.refs.birthday.getDOMNode().value.trim();
        var age             = this.refs.age.getDOMNode().value.trim();
        var currentLocation = this.refs.currentLocation.getDOMNode().value.trim();
        var remarks         = this.refs.remarks.getDOMNode().value.trim();

        if ( !firstname || !lastname ) {
            return;
        }

        this.props.onUserSubmit( {
            'firstname'       : firstname,
            'lastname'        : lastname,
            'nickname'        : nickname,
            'birthday'        : birthday,
            'age'             : age,
            'currentLocation' : currentLocation,
            'remarks'         : remarks
        } );

        this.refs.firstname.getDOMNode().value     = '';
        this.refs.lastname.getDOMNode().value      = '';
        this.refs.nickname.getDOMNode().value        = '';
        this.refs.birthday.getDOMNode().value        = '';
        this.refs.age.getDOMNode().value             = '';
        this.refs.currentLocation.getDOMNode().value = '';
        this.refs.remarks.getDOMNode().value         = '';

        return;
    },
    'render' : function () {
        return (
            <div>
                <form className="PersonForm" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="firstname" name="firstname" ref="firstname" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="lastname" name="lastname" ref="lastname" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="nickname" name="nickname" ref="nickname" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="birthday" name="birthday" ref="birthday" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="age" name="age" ref="age" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="current location" name="current-location" ref="currentLocation" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="remarks" name="remarks" ref="remarks" />
                    </div>
                    <input type="submit" className="btn btn-default" name="Save" />
                </form>
            </div>
        );
    }
} );

module.exports = PersonForm;