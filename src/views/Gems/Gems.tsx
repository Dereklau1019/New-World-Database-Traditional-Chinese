import * as React from "react";
import NewWorldTable from "../../components/ForNewWorld/Table/NewWorldTable";
import tableItemsEN from "../../assets/json/gemDeatils-EN.json";
import tableItemsTC from "../../assets/json/gemDetails-TC.json";

export interface GemsViewProps {}

export interface GemsViewState {
  siteLanguage: string;
  tableItems: any[];
}
export default class GemsView extends React.Component<
  GemsViewProps,
  GemsViewState
> {
  constructor(props: GemsViewProps) {
    super(props);
    this.state = { siteLanguage: "TC", tableItems: tableItemsTC };
  }
  HandleLanaguageToggle() {
    if (this.state.siteLanguage === "EN") {
      this.setState({ siteLanguage: "TC", tableItems: tableItemsTC });
    } else if (this.state.siteLanguage === "TC") {
      this.setState({ siteLanguage: "EN", tableItems: tableItemsEN });
    }
  }
  tableHead = ["Image", "Type", "EffectName", "Effects"];
  tableFoots = ["Image", "Type", "EffectName", "Effects"];

  render() {
    return (
      <div key="NewWorldTable">
        <div>
          <button onClick={() => this.HandleLanaguageToggle()}>
            Language : {this.state.siteLanguage}
          </button>
        </div>
        <NewWorldTable
          tableHeads={this.tableHead}
          tableItems={this.state.tableItems}
          tableFoots={this.tableFoots}
        />
      </div>
    );
  }
}
