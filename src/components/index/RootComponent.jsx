 import React  from 'react'
 import $ from "jquery"

/*var MyComponent = React.createClass({
    propTypes: {
        initData: React.PropTypes.object
    },
    getInitialState: function(){
        return {
            datas: null
        }
    },
    handleGetNewData: function(e){
        var _this = this;
        $.ajax({url: 'hello.json', dataType: 'json'})
        .done(function (data, status, jqXHR) {
            _this.setState({datas: data});
        });
    },
    getListbyItem: function(itmes,prefixKey){
        // var _this = this;
        var result = itmes.map(function(item,i){
            return (
            <li key={prefixKey + i}>
                <span>{item.id}</span>
                <span>{item.email}</span>
            </li>
            
            )	
        });

        return result;
    },
    render: function(){
        var _this = this;
        var listItems = []
        var newListItems = [];

        if(_this.props.initData && _this.props.initData.list) {
            listItems = _this.getListbyItem(_this.props.initData.list,"props");
        }

        if(_this.state.datas && _this.state.datas.list) {
            newListItems = _this.getListbyItem(_this.state.datas.list,"state");
        }
        
        return (
            <ul>
                {listItems}
                {newListItems}
                <button className="getNewData" onClick={_this.handleGetNewData}>取得新資料</button>
            </ul>)
    }
});

export default MyComponent;*/

class RootComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            datas: null
        }

    }

    getListbyItem = (itmes,prefixKey) => {
        var result = itmes.map(function(item,i){
            return (
            <li key={prefixKey + i}>
                <span>{item.id}</span>
                <span>{item.email}</span>
            </li>
            
            )	
        });

        return result;
    }
    handleGetNewData = (e) =>{
        let _this = this;
        $.ajax({url: 'hello.json', dataType: 'json'})
        .done(function (data, status, jqXHR) {
            _this.setState({datas: data});
        });
    }

    render() {
        let _this = this;
        var listItems = []
        var newListItems = [];

        if(_this.props.initData && _this.props.initData.list) {
            listItems = _this.getListbyItem(_this.props.initData.list,"props");
        }

        if(_this.state.datas && _this.state.datas.list) {
            newListItems = _this.getListbyItem(_this.state.datas.list,"state");
        }
        
        return (
            <ul>
                {listItems}
                {newListItems}
                <button className="getNewData" onClick={_this.handleGetNewData}>取得新資料</button>
            </ul>
        )
    }
}

export default RootComponent;