---
title: "React Hooks Deep Dive"
date: "2024-05-20"
tags: ["react", "hooks", "frontend"]
---

# React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

## useState
`useState` is a Hook that lets you add React state to function components.

```javascript
const [count, setCount] = useState(0);
```

## useEffect
`useEffect` lets you perform side effects in function components.

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```
