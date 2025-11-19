---
title: "TypeScript Generics"
date: "2024-05-21"
tags: ["typescript", "types"]
---

# Generics

Generics provide a way to make components work with any data type and not restrict to one data type.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```
