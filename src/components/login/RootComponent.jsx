import update from 'react-addons-update'
import React from 'react'
import _ from 'lodash'


var MyComponent = React.createClass({
	propTypes: {
		// initData: React.PropTypes.array
	},
	getInitialState: function () {
		return {
			validation: {
				result: true,
				errorMsg: null,
				childs: [
					{
						key: "account",
						rules: ['/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i'],
						result: true,
						errorMsg: null
					},
					{
						key: "password",
						rules: ['\S{6,}'],
						result: true,
						errorMsg: null
					}
				]

			},
			form: {
				account: "",
				password: ""
			}
		}
	},
	_validation: function(){
		// var _this = this;
		// var mapResult = false;
		// var validationChild = _this.state.validation.child;
		// var fomrData = _this.form;

		// var testRule = function(rules,item){
		// 	var results = rules.map(function(ruleString,index){
		// 		var re = new RegExp(ruleString);
		// 		return re.test(item);
		// 	});

		// 	return results.indexOf(false) == -1;
		// };

		// validationChild.forEach((item,key) => {
		// 	var result = testRule(item.rule,formData[key]);
			

		// });
	},
	_handleChange: function(e) {
		var nodes = e.target.dataset.rel.split('.');
		var phaserJsonString = "{<%= sub %>}";
		var phaserObject = {};
		var _this = this;
		var subPhaserString;
		nodes.forEach(function(item,index){
			var compiled = _.template(phaserJsonString);
			if(index == nodes.length -1 ){
				subPhaserString = '"'+item+'"'+':'+ '"'+e.target.value+'"';
				phaserJsonString = compiled({ 'sub': subPhaserString });
			} else {
				subPhaserString = '"'+item+'"'+':{<%= sub %>}';
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
		// var _this = this;

		return (
			<form>
				<div className="form-group  has-error">
					<label htmlFor="exampleInputEmail1">Account</label>
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
						請輸入正確的帳號格式：name@abc.com
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input
						className="form-control"
						name="password"
						data-rel="form.password"
						value={ this.state.form.password }
						onChange={this._handleChange} 
						type="password"
						id="exampleInputPassword1"
						placeholder="Password" />
					<div className="help-block">
						請輸入正確的密碼格式：長度至少大於六
					</div>
				</div>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
		)
	}
});


export default MyComponent;