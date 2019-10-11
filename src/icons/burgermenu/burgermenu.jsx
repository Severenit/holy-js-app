import React from "react";
import Icon from "../icon";
import { ReactComponent as BurgermenuComponents } from "./burgermenu.svg";

import "./burgermenu.css";

export class IconBurgerMenu extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="burgermenu">
        <BurgermenuComponents />
      </Icon>
    );
  }
}
