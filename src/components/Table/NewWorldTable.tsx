import * as React from "react";

export interface NewWorldTableProps {
  jsonItems: [];
}

export interface NewWorldTableState {}

export default class NewWorldTable extends React.Component<
  NewWorldTableProps,
  NewWorldTableState
> {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>1</th>
          </thead>
          <tbody>
            <td>
              {this.props.jsonItems.map((i) => i["id"])}
              Tse Wai Ho
            </td>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  }
}
