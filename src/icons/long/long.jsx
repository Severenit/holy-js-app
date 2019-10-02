import React from "react";
import Icon from "../icon";

import "./long.css";

export class Long extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="long" />;
  }
}
