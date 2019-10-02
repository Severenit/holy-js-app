import React from "react";
import Icon from "../icon";

import "./chart.css";

export class Chart extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return <Icon {...this.props} name="chart" />;
  }
}
