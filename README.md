This is the Core JS Lib for OneJS V2.

---

## h()

```tsx
import { h } from "@onejs/core"

export default function (target) {
    return <div>
        <div>{target.make}</div>
        <div>{target.year}</div>
        <div>{target.color}</div>
    </div>
}
```

## emo

```ts
import { emo } from "onejs/styled"
import { h, render } from "preact"

const Foo = (props) => {
    return <div class={emo`
        font-size: ${props.size ?? 10}px;
        color: red;
    `}>Hello</div>
}

render(<Foo size={30} />, document.body)
```