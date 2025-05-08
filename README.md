# Q1: What are some differences between `interface`s and `type`s in TypeScript?

In TypeScript, interface and type are used for typescript aliases for defining data types. They also define the shape of data. The key differences between interface and type are following:

## Use Cases:

### Type
It can define primitives, non-primitive, unions, intersections, tuples types.

```typescript
type Title = string;
type Car = {
    brand: string;
    model: string;
    year: number;
}
```

### Interface
It is mainly used to define object shapes and class contracts. It can also describe function types and indexable types.

```typescript
interface Car {
    brand: string;
    model: string;
    year: number;
}
```

## Extending:

### Type
It uses intersection (&) for extension. But cannot be merged.

```typescript
type Car = {
  brand: string;
};
type Bike = {
  wheels: number;
};

type Vehicle = Car & Bike;
```

### Interface
It can be extended by interface or class also can be merged.

```typescript
interface Car extends Bike{
    brand: string
}
```

## Use Case Scenarios:

- **Type**: It is used for complex types, unions, aliases, utility types
- **Interface**: It mainly used for object shapes, especially in OOP or when declaration merging is needed(especially in libraries, class contracts)

## Syntax:

### Type

```typescript
type Car = {
    brand: string;
    model: string;
    year: number;
}
```

### Interface

```typescript
interface Car {
    brand: string;
    model: string;
    year: number;
}
```

## Summary:
In short, interface should be used when designing object shapes needed to be extended or implemented, especially in OOP scenarios and type should be used when we need more flexibility like combining types or defining unions and tuples.

---

# Q2: What is the use of the `keyof` keyword in TypeScript? Provide an example.

In TypeScript, the keyof is a keyword that is used for accessing and obtaining the type of all keys of a declared type or interface. It creates a union type consisting of the key property names of the specified type. This is particularly useful for type-safe operations as it involve object keys. When we want to ensure that a key exists in an object or when working with dynamic property access we use keyof.

## Uses of `keyof`:
It allows you to extract the keys of an object type as a union of string literals.
It is commonly used in scenarios like:
- Type-safe property access.
- Creating utility types or mapped types.
- Ensuring that a function or variable only accepts valid keys of an object.

## Example:

```typescript
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

type Car = keyof Vehicle;
```