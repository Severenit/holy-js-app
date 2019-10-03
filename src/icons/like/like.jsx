import React from "react";
import Icon from "../icon";
import { ReactComponent as LikeComponents } from "./like.svg";

import "./like.css";

export class IconLike extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="like">
        <LikeComponents />
      </Icon>
    );
  }
}
