import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MembersOnlineService, Member } from "../members-online.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

@Component({
  selector: "app-members-online-page",
  templateUrl: "./members-online-page.component.html",
  styleUrls: ["./members-online-page.component.css"]
})
export class MembersOnlinePageComponent implements OnInit {
  members: Observable<Array<Member>>;

  //todo fix this so dunamic
  // initail member
  nickname: string = "Zonk";

  constructor(private mon: MembersOnlineService) {}

  ngOnInit() {
    this.members = this.mon.getMembers();
  }

  setMemberName(member: string) {
    this.nickname = member;
  }
}
