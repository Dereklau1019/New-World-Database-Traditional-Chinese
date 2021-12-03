import * as React from "react";

export interface HomePageProps {}

export interface HomePageState {}

export default class HomePage extends React.Component<
  HomePageProps,
  HomePageState
> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Welcome To New World !</div>;
  }
}
