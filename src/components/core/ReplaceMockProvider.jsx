import React from 'react'

function AttachedToMock(WrappedComponent, configs) {
    class MockComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedComponent  {...this.props}/>
        }
    }

    return MockComponent;
}

export default AttachedToMock;