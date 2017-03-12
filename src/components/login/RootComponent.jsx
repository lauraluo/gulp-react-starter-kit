var update = require('react-addons-update'); 

var MyComponent = React.createClass({
	propTypes: {
		// initData: React.PropTypes.array
	},
	getInitialState: function () {
		return {
			validation: {
				result: true,
				errorMsg: null,
				account: {
					result: true,
					errorMsg: null
				},
				account: {
					result: true,
					errorMsg: null
				}
			},
			form: {
				account: "",
				password: ""
			}
		}
	},
	_handleChange: function(e) {
		var nodes = e.target.dataset.rel.split('.');
		var phaserJsonString = "{<%= sub %>}";
		var phaserObject = {};
		var _this = this;

		nodes.forEach(function(item,index){
			var compiled = _.template(phaserJsonString);
			if(index == nodes.length -1 ){
				var subPhaserString = '"'+item+'"'+':'+ '"'+e.target.value+'"';
				phaserJsonString = compiled({ 'sub': subPhaserString });
			} else {
				var subPhaserString = '"'+item+'"'+':{<%= sub %>}';
				phaserJsonString = compiled({ 'sub': subPhaserString });
			}
		});

		phaserObject = JSON.parse(phaserJsonString);
		
		this.setState({
			form: update(_this.state.form, {
				$merge: phaserObject.form
			})
		});
	},
	_submit: function () {

	},
	render: function () {
		var _this = this;

		return (
			<form>
				<div className="form-group  has-error">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						className="form-control"
						name="account"
						data-rel="form.account"
						value={ this.state.form.account }
						onChange={this._handleChange} 
						type="email"
						id="exampleInputEmail1"
						placeholder="Email" />
					<div className="help-block">
						請輸入正確的帳號
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					<div className="help-block">
						請輸入正確的密碼
					</div>
				</div>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
		)
	}
});


module.exports = MyComponent;