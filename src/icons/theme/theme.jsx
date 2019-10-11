import React from "react";
import Icon from "../icon";
import { ReactComponent as ThemeComponents } from "./theme.svg";

import "./theme.css";

export class IconTheme extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="theme">
        <ThemeComponents />
      </Icon>
    );
  }
}
