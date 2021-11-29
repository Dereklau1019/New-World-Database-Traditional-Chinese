import * as React from "react";
export interface WeaponsViewProps {}

export interface WeaponsViewState {}

export default class WeaponsView extends React.Component<
  WeaponsViewProps,
  WeaponsViewState
> {
  constructor(props: WeaponsViewProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Hello World</div>;
  }
}
