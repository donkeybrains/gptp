import { TestBed, inject, getTestBed } from "@angular/core/testing";
import { HistoryService, Message, HistoryResponse } from "./history.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("HistoryService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HistoryService]
    });
    injector = getTestBed();
    service = injector.get(HistoryService);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return history for specific nickname", () => {
    const nickname = "john";

    const fullHistory: HistoryResponse = {
      errors: null,
      data: [
        {
          timestamp: 1521478001749,
          from: "john",
          msg: "New user: dave joined."
        },
        {
          timestamp: 1521478001750,
          from: "john",
          msg: "john is now known as Dave"
        },
        { timestamp: 1521478060341, from: "john", msg: "Dave dropped out." }
      ]
    };

    const expectedHistory: Array<Message> = [
      {
        timestamp: 1521478001749,
        from: "john",
        msg: "New user: dave joined."
      },
      {
        timestamp: 1521478001750,
        from: "john",
        msg: "john is now known as Dave"
      },
      { timestamp: 1521478060341, from: "john", msg: "Dave dropped out." }
    ];

    service.getHistory(nickname).subscribe(history => {
      expect(history).toEqual(expectedHistory);
    });

    const req = httpMock.expectOne("http://localhost:8888/history");
    expect(req.request.method).toBe("GET");
    req.flush(fullHistory);
  });
});
