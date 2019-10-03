import React from "react";
import Icon from "../icon";
import { ReactComponent as SearchComponents } from "./search.svg";

import "./search.css";

export class IconSearch extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="search">
        <SearchComponents />
      </Icon>
    );
  }
}
