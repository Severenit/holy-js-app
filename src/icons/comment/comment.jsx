import React from "react";
import Icon from "../icon";
import { ReactComponent as CommentComponents } from "./comment.svg";

import "./comment.css";

export class IconComment extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="comment">
        <CommentComponents />
      </Icon>
    );
  }
}
