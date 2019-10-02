import React from "react";
import Icon from "../icon";

import "./comment.css";

export class Comment extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="comment" />;
  }
}
