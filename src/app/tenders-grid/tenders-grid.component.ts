import { Component, OnInit } from "@angular/core";
import { Tender, TenderSKU, TendersService } from "../tenders.service";
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: "app-tenders-grid",
  templateUrl: "./tenders-grid.component.html",
  styleUrls: ["./tenders-grid.component.scss"],
  providers: [TendersService]
})
export class TendersGridComponent implements OnInit {
  gridConfig = [
    {
      name: "Tender ID internal",
      dataKey: "tenderId",
      isVisible: true
    },
    {
      name: "TAM",
      dataKey: "tam",
      isVisible: true
    },
    {
      name: "Region",
      dataKey: "region",
      isVisible: true
    },
    {
      name: "INN",
      dataKey: "inn",
      isVisible: true
    },
    {
      name: "Client name",
      dataKey: "clientName",
      isVisible: true
    },
    {
      name: "Tender Status",
      dataKey: "tenderStatus",
      isVisible: true
    },
    {
      name: "Link to gos zakupki web-site",
      dataKey: "goszakupkiLink",
      isVisible: true
    },
    {
      name: "Date of tender",
      dataKey: "dateOfTender",
      isVisible: true
    },
    {
      name: "Winner (partner) of the tender",
      dataKey: "winner",
      isVisible: true
    },
    {
      name: "Indication",
      dataKey: "indication",
      isVisible: true
    },
    {
      name: "Supplier of the tender",
      dataKey: "contractDetails",
      isVisible: true
    },
    {
      name: "details",
      dataKey: "details",
      isVisible: false
    }
  ];
  tenders: Tender[];

  columns: string[];
  data: any[];

  getColumns(): string[] {
    return this.gridConfig
      .filter(item => item.isVisible)
      .map(item => item.name);
  }

  getDataSource(): any[] {
    return this.tenders
      ? this.tenders.map(value => {
          const tender = {};

          for (const item of this.gridConfig) {
            tender[item.name] = value[item.dataKey];
          }

          return tender;
        })
      : [];
  }

  constructor(tendersService: TendersService) {
    this.tenders = tendersService.tenders;
    this.data = this.getDataSource();
    this.columns = this.getColumns();
  }

  getStoreForTenderSKU(data: TenderSKU[]): ArrayStore {
    return new ArrayStore({
      data
    });
  }

  ngOnInit() {}
}
