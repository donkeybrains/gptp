import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface Message {
  timestamp: number;
  from: string;
  msg: string;
}

export interface HistoryResponse {
  errors: null;
  data: Array<Message>;
}

@Injectable()
export class HistoryService {
  constructor(private http: HttpClient) {}

  getHistory(nickname: string): Observable<Array<Message>> {
    return new Observable<Array<Message>>(observer => {
      this.http
        .get<HistoryResponse>("http://localhost:8888/history")
        .subscribe(fullHistory => {
          let filteredHistory = fullHistory.data.filter(
            h => h.from === nickname
          );
          console.log(filteredHistory);
          observer.next(filteredHistory);
        });
    });
  }
}
