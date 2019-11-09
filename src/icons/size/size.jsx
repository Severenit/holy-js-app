import React from "react";
import Icon from "../icon";
import { ReactComponent as SizeComponents } from "./size.svg";

import "./size.css";

export class IconSize extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="size">
        <SizeComponents />
      </Icon>
    );
  }
}
