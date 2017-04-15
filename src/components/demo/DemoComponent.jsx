import React, {Component} from 'react'
//引用node module裡的react，並使用變數"React"代表

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>this is demo</p>
            </div>
        );
    }
}

export default DemoComponent;