import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example/user", () => {
    return HttpResponse.json({
      users: ["John Doe", "Jane Doe"],
    });
  }),
];
