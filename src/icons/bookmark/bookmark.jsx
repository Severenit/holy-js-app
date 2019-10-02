import React from "react";
import Icon from "../icon";

import "./bookmark.css";

export class Bookmark extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="bookmark" />;
  }
}
