import * as React from "react";
export interface MostersViewProps {}

export interface MostersViewState {}

export default class MostersView extends React.Component<
  MostersViewProps,
  MostersViewState
> {
  constructor(props: MostersViewProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Hello World</div>;
  }
}
