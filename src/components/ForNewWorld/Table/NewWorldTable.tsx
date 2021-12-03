import * as React from "react";
export interface NewWorldTableProps {
  tableHeads: String[];
  tableItems: any[];
  tableFoots: String[];
}

export interface NewWorldTableState {}

export default class NewWorldTable extends React.Component<
  NewWorldTableProps,
  NewWorldTableState
> {
  constructor(props: NewWorldTableProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.props.tableHeads.map((i) => (
                <th key="TableHeads">{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.tableItems.map((i) => (
              <tr key="TableItems">
                <td>
                  <img src="../../../assets/img/new-world/getImages/onyxcutt4.png" />
                </td>
                <td>{i["typeOfGem"]}</td>
                <td>{i["effectNames"]}</td>
                <td>{i["effects"]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {this.props.tableFoots.map((i) => (
                <th key="TableFoots">{i}</th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
