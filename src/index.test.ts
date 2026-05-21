import { langname, iso6393_from_6391 } from "./index.js";
import { describe, it, expect } from "vitest";

describe("langname", () => {
    it("returns known name", () => {
        expect(langname("fin", "sme")).toBe("suomagiella");
    });
    it("returns known name capitalized", () => {
        expect(langname("nob", "nob", true)).toBe("Norsk\u{A0}bokmål");
    });
    it("returns code when unknown", () => {
        expect(langname("xyz", "eng")).toBe("xyz");
    });
});

describe("iso6393_from_6391", () => {
    it("converts known code", () => {
        expect(iso6393_from_6391("en")).toBe("eng");
    });
    it("throws on unknown", () => {
        expect(() => iso6393_from_6391("xx")).toThrow();
    });
});
