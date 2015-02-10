var React = require( 'react' );

var BootstrapButton = React.createClass( {
  render: function() {
    return (
      <a {...this.props}
        href = "javascript:;"
        role ="button"
        className={ (this.props.className || '' ) + ' btn' } />
    );
  }
} );

var BootstrapModal = React.createClass( {

	'componentDidMount' : function () {
		$( this.getDOMNode() ).modal( {
			'backdrop' : 'static',
			'keyboard' : false,
			'show'     : false
		} );
	},

	'componentWillUnmount' : function () {
		$( this.getDOMNode() ).off( 'hidden', this.handleHidden );
	},

	'close' : function () {
		$( this.getDOMNode() ).modal( 'hide' );
	},

	'open' : function () {
		$( this.getDOMNode() ).modal( 'show' );
	},

	'render' : function () {
		var confirmButton = null;
		var cancelButton = null;

		if ( this.props.confirm ) {
			confirmButtom = (
				<BootstrapButton 
					onClick= { this.handleConfirm }
					className = "btn-primary">
					{ this.props.confirm }
				</BootstrapButton>
			);
		}

		if ( this.props.cancel ) {
			cancelButton = (
				<BootstrapButton
					onClick = { this.handleCancel }
					className = "btn-default">
					{ this.props.cancel }
				</BootstrapButton>
			);
		}

		var body = this.props.children;

		return (
			<div className="modal fade">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" onClick= { this.props.onCancel }> &times; </button>
							<h3> { this.props.title } </h3>
						</div>
						<div className="modal-body">
							{ body }
						</div>
						<div className="modal-footer">
							{ cancelButton }
							{ confirmButton }
						</div>
					</div>
				</div>
			</div>
		);
	},

	'handleCancel' : function () {
		if ( this.props.onCancel ) {
			this.props.onCancel();
		}
	},

	'handleConfirm' : function () {
	    if (this.props.onConfirm) {
	      this.props.onConfirm();
	    }
	}

} );

var ModalBox = React.createClass( {

  'handleCancel' : function () {
      this.refs.modal.close();
  },

  'render' : function () {
    var modal = null;

    modal = (
      <BootstrapModal
        ref       = "modal"
        confirm   = "OK"
        cancel    = "Cancel"
        onCancel  = {this.handleCancel}
        onConfirm = {this.closeModal}
        title     = { this.props.title } >
        { this.props.children }
      </BootstrapModal>
    );

    return (
      <div className="example">
      	{ modal }
        <BootstrapButton onClick={this.openModal} className="btn-default">
          { this.props.label }
        </BootstrapButton>
      </div>
    );
  },

  'openModal' : function () {
    this.refs.modal.open();
  },

  'closeModal' : function () {
    this.refs.modal.close();
  }

} );

module.exports = ModalBox;