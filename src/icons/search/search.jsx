import React from "react";
import Icon from "../icon";

import "./search.css";

export class Search extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="search" />;
  }
}
