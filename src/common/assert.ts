class IllegalStateException extends Error {}

// Source: https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
export function assertNever(x: never): never {
  throw new IllegalStateException(
    `Unexpectedly encountered illegal state: ${x}`
  );
}
