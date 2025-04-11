// WAJIB: Tambahkan ini untuk ESM
import dayjs from "dayjs";
import { today } from "./main.js";

describe("today()", () => {
  it("should return today's date in YYYY-MM-DD format", () => {
    const expected = dayjs().format("YYYY-MM-DD");
    expect(today()).toBe(expected);
  });
});
