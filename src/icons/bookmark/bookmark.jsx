import React from "react";
import Icon from "../icon";
import { ReactComponent as BookmarkComponents } from "./bookmark.svg";

import "./bookmark.css";

export class IconBookmark extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="bookmark">
        <BookmarkComponents />
      </Icon>
    );
  }
}
