import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject, of, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogsService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setLogForm(log: Log) {
    this.logSource.next(log);
  }
}
