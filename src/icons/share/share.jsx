import React from "react";
import Icon from "../icon";

import "./share.css";

export class Share extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="share" />;
  }
}
