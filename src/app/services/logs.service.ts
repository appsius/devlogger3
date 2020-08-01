import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root",
})
export class LogsService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generate items",
        date: new Date("12/23/2020 12:33:42"),
      },
      {
        id: "2",
        text: "Update ul",
        date: new Date("11/22/2010 03:33:42"),
      },
      {
        id: "1",
        text: "Update common frameworks",
        date: new Date("12/23/2020 12:22:42"),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
