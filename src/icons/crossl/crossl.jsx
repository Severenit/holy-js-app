import React from "react";
import Icon from "../icon";
import { ReactComponent as CrosslComponents } from "./crossl.svg";

import "./crossl.css";

export class IconCrossL extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="crossl">
        <CrosslComponents />
      </Icon>
    );
  }
}
