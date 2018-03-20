import { TestBed, inject, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import {
  MembersOnlineService,
  Member,
  MembersResponse
} from "./members-online.service";

describe("MembersOnlineService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: MembersOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MembersOnlineService]
    });
    injector = getTestBed();
    service = injector.get(MembersOnlineService);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return full members.", () => {

    const fullMembers: MembersResponse = {
      errors: null,
      data: [
      {
        nick: "tom",
        online: true
      },
      {
        nick: "dick",
        online: true
      },
      {
        nick: "tom",
        online: true
      },
      {
        nick: "harry",
        online: true
      },
      {
        nick: "Captain Virgil Hilts",
        online: true
      }
    ]
  };

    const expectedMembers: Array<Member> = [
      {
        nick: "tom",
        online: true
      },
      {
        nick: "dick",
        online: true
      },
      {
        nick: "tom",
        online: true
      },
      {
        nick: "harry",
        online: true
      },
      {
        nick: "Captain Virgil Hilts",
        online: true
      }
    ];

    service.getMembers().subscribe(members => {
      expect(members).toEqual(expectedMembers);
    });

    const req = httpMock.expectOne("http://localhost:8888/users");
    expect(req.request.method).toBe("GET");
    req.flush(fullMembers);
  });
});
