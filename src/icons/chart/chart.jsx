import React from "react";
import Icon from "../icon";
import { ReactComponent as ChartComponents } from "./chart.svg";

import "./chart.css";

export class IconChart extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="chart">
        <ChartComponents />
      </Icon>
    );
  }
}
