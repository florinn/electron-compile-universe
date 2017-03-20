import React, { PropTypes } from 'react';

const TITLEBAR_HEIGHT = 30;

class Main extends React.Component {
    render() {
        return (
            <div className="main" ref="main" style={{
                paddingTop: TITLEBAR_HEIGHT
            }}>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object.isRequired
};

export default Main;
