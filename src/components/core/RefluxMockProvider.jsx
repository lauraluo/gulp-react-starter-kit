import React from 'react'

function AttachedToMock(WrappedComponent, refluxObject, refluxAction, config) {
    class MockComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <WrappedComponent
                    ref={()=>{refluxObject[refluxAction](config)}} 
                    {...this.props}
                />
            )
        }
    }

    return MockComponent;
}

export default AttachedToMock;