import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface Member {
  nick: string;
  online: boolean;
}

export interface MembersResponse {
  errors: null;
  data: Array<Member>;
}

@Injectable()
export class MembersOnlineService {
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Array<Member>> {
    return new Observable<Array<Member>>(observer => {
      this.http
        .get<MembersResponse>("http://localhost:8888/users")
        .subscribe(allMembers => {
          console.log(allMembers);
          observer.next(allMembers.data);
        });
    });
  }

  getMemberFiltered(nickname: string): Observable<Array<Member>> {
    return new Observable<Array<Member>>(observer => {
      this.http
        .get<MembersResponse>("http://localhost:8888/users")
        .subscribe(allMembersOnline => {
          let filteredMembers = allMembersOnline.data.filter(
            h => h.nick === nickname
          );
          console.log(allMembersOnline);
          observer.next(filteredMembers);
        });
    });
  }
}
