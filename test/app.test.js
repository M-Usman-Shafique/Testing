import { test } from "node:test"
import assert from "node:assert"
import greet from "../app.js";

test('should return greet message', () => {
    const actual = greet("Usman");
    const expected = "Hello, Usman";

    assert.strictEqual(actual, expected);
})