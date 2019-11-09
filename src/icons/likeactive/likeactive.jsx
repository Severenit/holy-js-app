import React from "react";
import Icon from "../icon";
import { ReactComponent as LikeactiveComponents } from "./likeactive.svg";

import "./likeactive.css";

export class IconLikeActive extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="likeactive">
        <LikeactiveComponents />
      </Icon>
    );
  }
}
