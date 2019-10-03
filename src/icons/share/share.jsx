import React from "react";
import Icon from "../icon";
import { ReactComponent as ShareComponents } from "./share.svg";

import "./share.css";

export class IconShare extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="share">
        <ShareComponents />
      </Icon>
    );
  }
}
