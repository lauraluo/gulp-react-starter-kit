import React from 'react'
import Mock from 'mockjs'

function AttachedToMock(WrappedComponent, configs) {
    class MockComponent extends React.Component {
        constructor(props) {
            super(props);
            this.mockTemplate = {
                'list|1-10': [
                    {
                        'id|+1': 1,
                        'email': '@EMAIL'
                    }
                ]
            };
            this.state = {initData: Mock.mock(this.mockTemplate)};
        }

        componentWillMount = () => {
            Mock.mock(/\.json/, this.mockTemplate);
            Mock.setup({timeout: '200-600'});
            
        }

        render() {
            return <WrappedComponent  initData={this.state.initData} {...this.props}/>
        }
    }

    return MockComponent;
}

export default AttachedToMock;