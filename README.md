# poc-jest-sandbox

This is a sandbox repo for playing around with Jest + Typescript + Node.

## Test that a function...

- gets called
- returns the expected results
- throws the expected errors

## You might use describe like this

```typescript
// describe noun
describe("The function", () => {
    // describe behavior
    describe("should throw an error", () => {
        // test case
        test("when dependency throws", () => {
            //
        });

        // test case
        test("when input is bad", () => {
            //
        });
    });
});
```