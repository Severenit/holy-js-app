import React from "react";
import Icon from "../icon";

import "./short.css";

export class Short extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="short" />;
  }
}
