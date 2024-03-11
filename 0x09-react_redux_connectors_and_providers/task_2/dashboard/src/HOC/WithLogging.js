import React, {Component} from 'react'

const WithLogging = ({ wrappedComponent }) => {
  const getDisplayName = (wrappedComponent) => {
    wrappedComponent.displayName || wrappedComponent.name || 'Component';
  };
  WithLogging.displayName = `WithLogging(${getDisplayName(wrappedComponent)})`;

  return class extends Component {
    ComponentDidMount() {
      console.log(
        `Component ${getDisplayName(wrappedComponent)} is mounted`
      );
    };
    ComponentWillUnmount() {
      console.log(
        `Component ${getDisplayName(wrappedComponent)} is going to unmount`
      );
    }
    render() {
      return <wrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;