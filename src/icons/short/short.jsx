import React from "react";
import Icon from "../icon";
import { ReactComponent as ShortComponents } from "./short.svg";

import "./short.css";

export class IconShort extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="short">
        <ShortComponents />
      </Icon>
    );
  }
}
