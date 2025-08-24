import { describe, it, mock } from "node:test";
import assert from "node:assert";
import { greet } from "../app.js";

describe('Greetings', () => {
  it('should return greet message', () => {
    const mockUser = { id: 101, name: "John" };

    // To avoid DB call
    const mockFindUser = mock.fn(() => mockUser);

    assert.strictEqual(mockFindUser.mock.callCount(), 0);

    // DI using mock function
    const actual = greet(101, mockFindUser);
    const expected = "Hello, John";
    assert.strictEqual(actual, expected);

    // Verify the mock was called once
    assert.strictEqual(mockFindUser.mock.callCount(), 1);

    const call = mockFindUser.mock.calls[0];

    // Verify the mock was called with correct arguments
    assert.deepStrictEqual(call.arguments, [101]);

    // Verify the returned value from the mock call
    assert.deepStrictEqual(call.result, mockUser);
  });
});
