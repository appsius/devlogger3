import { Component, OnInit } from "@angular/core";
import { LogsService } from "../../services/logs.service";
import { Log } from "src/app/models/Log";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"],
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogsService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe((logs) => {
      this.logs = logs;
    });
  }

  onSelect(log: Log) {
    this.logService.setLogForm(log);
  }
}
