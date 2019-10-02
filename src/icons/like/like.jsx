import React from "react";
import Icon from "../icon";

import "./like.css";

export class Like extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="like" />;
  }
}
