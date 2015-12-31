import React from 'react';

const propTypes = {
  title: React.PropTypes.string
};

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.title
    }
  }

  render() {
    return (
      <div className="header">
        <h1>{ this.state.header }</h1>
      </div>
    )
  }
}

HeaderComponent.propTypes = propTypes;
