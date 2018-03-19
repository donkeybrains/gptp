import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HistoryService, Message } from "../history.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

@Component({
  selector: "history-page",
  templateUrl: "./history-page.component.html",
  styleUrls: ["./history-page.component.css"]
})
export class HistoryPageComponent implements OnInit {
  history: Observable<Array<Message>>;

  nickname: string = "_server";

  constructor(private hs: HistoryService) {
    //this.history = this.hs.getHistory(this.nickname);
  }

  ngOnInit() {
    this.history = this.hs.getHistory(this.nickname);
  }
}
