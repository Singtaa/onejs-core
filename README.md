This is the Core JS Lib for OneJS V2. It contains the following:

1) Document and Dom wrappers
2) Type definitions for a good portion of built-in Unity assemblies
3) Utility scripts used by esbuild and tailwind
4) Convenience color parsing utils for better usage in JS
5) A suite of math utils to make vector, quaternion, and matrix math way easier in JS

## Examples

### Math Utils

https://github.com/Singtaa/onejs-core/tree/main/math

```ts
import { vec3, quat, mul, add } from 'onejs/math';

// Create a position vector
const position = vec3(1, 2, 3);

// Create a rotation
const rotation = quat(0, 0, 0, 1);

// Apply rotation to direction vector
const direction = vec3(0, 0, 1);
const rotatedDirection = mul(rotation, direction);

// Move in the rotated direction
const newPosition = add(position, rotatedDirection);

console.log(newPosition); // [1, 2, 4]
```

### Color Utils

```tsx
import { namedColor, parseColor, palettes } from "onejs-core/utils"
import { useEffect, useRef } from "preact/hooks"
import { h, render } from "preact"
import { forwardRef } from "preact/compat"
import { GameObject, PrimitiveType, MeshRenderer, Vector3, Physics, Random, Rigidbody, CollisionDetectionMode, PhysicsMaterial, SphereCollider, Mathf, Camera, Collider } from "UnityEngine"
import { RuntimePanelUtils } from "UnityEngine/UIElements"

let plane = GameObject.CreatePrimitive(PrimitiveType.Plane)
plane.transform.position = new Vector3(0, -10, 0)
plane.GetComp(MeshRenderer).material.color = namedColor("maroon")
plane.transform.localScale = new Vector3(15, 1, 15)

let pm = new PhysicsMaterial()
pm.bounciness = 0.6
plane.GetComp(Collider).material = pm

var cam = GameObject.Find("Main Camera")
cam.transform.position = new Vector3(0, 6, -10)
cam.transform.LookAt(new Vector3(0, -15, 0))

Physics.gravity = new Vector3(0, -30, 0)

let balls: GameObject[] = []

function createRandomBall() {
    let ball = GameObject.CreatePrimitive(PrimitiveType.Sphere)
    ball.GetComp(MeshRenderer).material.color = parseColor(palettes[Mathf.RoundToInt(Random.Range(0, 99))][2])
    ball.transform.position = Vector3.op_Multiply(Random.insideUnitSphere, 2)
    let rb = ball.AddComp(Rigidbody)
    rb.collisionDetectionMode = CollisionDetectionMode.Continuous
    rb.drag = 0.3
    ball.GetComp(SphereCollider).material = pm
    balls.push(ball)
}

for (let i = 0; i < 10; i++) {
    createRandomBall()
}

const NamePlate = forwardRef(({ index }: { index: number }, ref) => {
    return <div ref={ref} class="absolute hidden text-teal-700 text-xl">{`Ball ${index}`}</div>
})

const App = () => {
    const refs = Array.from({ length: balls.length }, () => useRef<Element>())

    useEffect(() => {
        var interval = setInterval(update)
        return () => clearInterval(interval)
    }, [])

    function update() {
        for (let i = 0; i < balls.length; i++) {
            const ball = balls[i]
            var pos = RuntimePanelUtils.CameraTransformWorldToPanel(document.body!.ve.panel, ball.transform.position, Camera.main);
            refs[i].current!.style.translate = pos
            refs[i].current!.style.display = "flex"
        }
    }

    return <div class="w-full h-full">
        {balls.map((ball, i) => <NamePlate ref={refs[i]} index={i} />)}
    </div>
}

render(<App />, document.body)
```