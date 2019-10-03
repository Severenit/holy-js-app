import React from "react";
import Icon from "../icon";
import { ReactComponent as LongComponents } from "./long.svg";

import "./long.css";

export class IconLong extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="long">
        <LongComponents />
      </Icon>
    );
  }
}
