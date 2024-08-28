
declare namespace CS {
    // const __keep_incompatibility: unique symbol;
    // 
    // interface $Ref<T> {
    //     value: T
    // }
    // namespace System {
    //     interface Array$1<T> extends System.Array {
    //         get_Item(index: number):T;
    //         
    //         set_Item(index: number, value: T):void;
    //     }
    // }
    // interface $Task<T> {}
    namespace UnityEngine {
        /** Use these flags to constrain motion of Rigidbodies.
        */
        enum RigidbodyConstraints
        { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        /** Use ForceMode to specify how to apply a force using Rigidbody.AddForce or ArticulationBody.AddForce.
        */
        enum ForceMode
        { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        /** Determines how to snap physics joints back to its constrained position when it drifts off too much.
        */
        enum JointProjectionMode
        { None = 0, PositionAndRotation = 1, PositionOnly = 2 }
        /** Cooking options that are available with MeshCollider.
        */
        enum MeshColliderCookingOptions
        { None = 0, InflateConvexMesh = 1, CookForFasterSimulation = 2, EnableMeshCleaning = 4, WeldColocatedVertices = 8, UseFastMidphase = 16 }
        /** WheelFrictionCurve is used by the WheelCollider to describe friction properties of the wheel tire.
        */
        class WheelFrictionCurve extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Extremum point slip (default 1).
            */
            public get extremumSlip(): number;
            public set extremumSlip(value: number);
            /** Force at the extremum slip (default 20000).
            */
            public get extremumValue(): number;
            public set extremumValue(value: number);
            /** Asymptote point slip (default 2).
            */
            public get asymptoteSlip(): number;
            public set asymptoteSlip(value: number);
            /** Force at the asymptote slip (default 10000).
            */
            public get asymptoteValue(): number;
            public set asymptoteValue(value: number);
            /** Multiplier for the extremumValue and asymptoteValue values (default 1).
            */
            public get stiffness(): number;
            public set stiffness(value: number);
        }
        /** The limits defined by the CharacterJoint.
        */
        class SoftJointLimit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The limit position/angle of the joint (in degrees).
            */
            public get limit(): number;
            public set limit(value: number);
            /** When the joint hits the limit, it can be made to bounce off it.
            */
            public get bounciness(): number;
            public set bounciness(value: number);
            /** Determines how far ahead in space the solver can "see" the joint limit.
            */
            public get contactDistance(): number;
            public set contactDistance(value: number);
        }
        /** The configuration of the spring attached to the joint's limits: linear and angular. Used by CharacterJoint and ConfigurableJoint.
        */
        class SoftJointLimitSpring extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The stiffness of the spring limit. When stiffness is zero the limit is hard, otherwise soft.
            */
            public get spring(): number;
            public set spring(value: number);
            /** The damping of the spring limit. In effect when the stiffness of the sprint limit is not zero.
            */
            public get damper(): number;
            public set damper(value: number);
        }
        /** How the joint's movement will behave along its local X axis.
        */
        class JointDrive extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Strength of a rubber-band pull toward the defined direction. Only used if mode includes Position.
            */
            public get positionSpring(): number;
            public set positionSpring(value: number);
            /** Resistance strength against the Position Spring. Only used if mode includes Position.
            */
            public get positionDamper(): number;
            public set positionDamper(value: number);
            /** Amount of force applied to push the object toward the defined direction.
            */
            public get maximumForce(): number;
            public set maximumForce(value: number);
            /** Defines whether the drive is an acceleration drive or a force drive.
            */
            public get useAcceleration(): boolean;
            public set useAcceleration(value: boolean);
        }
        /** The ConfigurableJoint attempts to attain position / velocity targets based on this flag.
        */
        enum JointDriveMode
        { None = 0, Position = 1, Velocity = 2, PositionAndVelocity = 3 }
        /** Rigidbody interpolation mode.
        */
        enum RigidbodyInterpolation
        { None = 0, Interpolate = 1, Extrapolate = 2 }
        /** The JointMotor is used to motorize a joint.
        */
        class JointMotor extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The motor will apply a force up to force to achieve targetVelocity.
            */
            public get targetVelocity(): number;
            public set targetVelocity(value: number);
            /** The motor will apply a force.
            */
            public get force(): number;
            public set force(value: number);
            /** If freeSpin is enabled the motor will only accelerate but never slow down.
            */
            public get freeSpin(): boolean;
            public set freeSpin(value: boolean);
        }
        /** JointSpring is used add a spring force to HingeJoint and PhysicMaterial.
        */
        class JointSpring extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The spring forces used to reach the target position.
            */
            public spring : number
            /** The damper force uses to dampen the spring.
            */
            public damper : number
            /** The target position the joint attempts to reach.
            */
            public targetPosition : number
        }
        /** JointLimits is used by the HingeJoint to limit the joints angle.
        */
        class JointLimits extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The lower angular limit (in degrees) of the joint.
            */
            public get min(): number;
            public set min(value: number);
            /** The upper angular limit (in degrees) of the joint.
            */
            public get max(): number;
            public set max(value: number);
            /** Determines the size of the bounce when the joint hits it's limit. Also known as restitution.
            */
            public get bounciness(): number;
            public set bounciness(value: number);
            /** The minimum impact velocity which will cause the joint to bounce.
            */
            public get bounceMinVelocity(): number;
            public set bounceMinVelocity(value: number);
            /** Distance inside the limit value at which the limit will be considered to be active by the solver.
            */
            public get contactDistance(): number;
            public set contactDistance(value: number);
        }
        /** ControllerColliderHit is used by CharacterController.OnControllerColliderHit to give detailed information about the collision and how to deal with it.
        */
        class ControllerColliderHit extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The controller that hit the collider.
            */
            public get controller(): UnityEngine.CharacterController;
            /** The collider that was hit by the controller.
            */
            public get collider(): UnityEngine.Collider;
            /** The rigidbody that was hit by the controller.
            */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The game object that was hit by the controller.
            */
            public get gameObject(): UnityEngine.GameObject;
            /** The transform that was hit by the controller.
            */
            public get transform(): UnityEngine.Transform;
            /** The impact point in world space.
            */
            public get point(): UnityEngine.Vector3;
            /** The normal of the surface we collided with in world space.
            */
            public get normal(): UnityEngine.Vector3;
            /** The direction the CharacterController was moving in when the collision occured.
            */
            public get moveDirection(): UnityEngine.Vector3;
            /** How far the character has travelled until it hit the collider.
            */
            public get moveLength(): number;
            public constructor ()
        }
        /** A base class of all colliders.
        */
        class Collider extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Enabled Colliders will collide with other Colliders, disabled Colliders won't.
            */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** The rigidbody the collider is attached to.
            */
            public get attachedRigidbody(): UnityEngine.Rigidbody;
            /** The articulation body the collider is attached to.
            */
            public get attachedArticulationBody(): UnityEngine.ArticulationBody;
            /** Specify if this collider is configured as a trigger.
            */
            public get isTrigger(): boolean;
            public set isTrigger(value: boolean);
            /** Contact offset value of this collider.
            */
            public get contactOffset(): number;
            public set contactOffset(value: number);
            /** The world space bounding volume of the collider (Read Only).
            */
            public get bounds(): UnityEngine.Bounds;
            /** Specify whether this Collider's contacts are modifiable or not.
            */
            public get hasModifiableContacts(): boolean;
            public set hasModifiableContacts(value: boolean);
            /** Whether or not this Collider generates contacts for Physics.ContactEvent.
            */
            public get providesContacts(): boolean;
            public set providesContacts(value: boolean);
            /** A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
            */
            public get layerOverridePriority(): number;
            public set layerOverridePriority(value: number);
            /** The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
            */
            public get excludeLayers(): UnityEngine.LayerMask;
            public set excludeLayers(value: UnityEngine.LayerMask);
            /** The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
            */
            public get includeLayers(): UnityEngine.LayerMask;
            public set includeLayers(value: UnityEngine.LayerMask);
            /** The structure holding the geometric shape of the collider and its type. (Read Only)
            */
            public get GeometryHolder(): UnityEngine.LowLevelPhysics.GeometryHolder;
            /** The shared physic material of this collider.
            */
            public get sharedMaterial(): UnityEngine.PhysicMaterial;
            public set sharedMaterial(value: UnityEngine.PhysicMaterial);
            /** The material used by the collider.
            */
            public get material(): UnityEngine.PhysicMaterial;
            public set material(value: UnityEngine.PhysicMaterial);
            /** Returns a point on the collider that is closest to a given location.
            * @param $position Location you want to find the closest point to.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public ClosestPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Casts a Ray that ignores all Colliders except this one.
            * @param $ray The starting point and direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
            * @param $maxDistance The max length of the ray.
            * @returns True when the ray intersects the collider, otherwise false. 
            */
            public Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            /** The closest point to the bounding box of the attached collider.
            */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ()
        }
        /** A CharacterController allows you to easily do movement constrained by collisions without having to deal with a rigidbody.
        */
        class CharacterController extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The current relative velocity of the Character (see notes).
            */
            public get velocity(): UnityEngine.Vector3;
            /** Was the CharacterController touching the ground during the last move?
            */
            public get isGrounded(): boolean;
            /** What part of the capsule collided with the environment during the last CharacterController.Move call.
            */
            public get collisionFlags(): UnityEngine.CollisionFlags;
            /** The radius of the character's capsule.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The height of the character's capsule.
            */
            public get height(): number;
            public set height(value: number);
            /** The center of the character's capsule relative to the transform's position.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The character controllers slope limit in degrees.
            */
            public get slopeLimit(): number;
            public set slopeLimit(value: number);
            /** The character controllers step offset in meters.
            */
            public get stepOffset(): number;
            public set stepOffset(value: number);
            /** The character's collision skin width.
            */
            public get skinWidth(): number;
            public set skinWidth(value: number);
            /** Gets or sets the minimum move distance of the character controller.
            */
            public get minMoveDistance(): number;
            public set minMoveDistance(value: number);
            /** Determines whether other rigidbodies or character controllers collide with this character controller (by default this is always enabled).
            */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** Enables or disables overlap recovery.
            Enables or disables overlap recovery. Used to depenetrate character controllers from static objects when an overlap is detected.
            */
            public get enableOverlapRecovery(): boolean;
            public set enableOverlapRecovery(value: boolean);
            /** Moves the character with speed.
            */
            public SimpleMove ($speed: UnityEngine.Vector3) : boolean
            /** Supplies the movement of a GameObject with an attached CharacterController component.
            */
            public Move ($motion: UnityEngine.Vector3) : UnityEngine.CollisionFlags
            public constructor ()
        }
        /** Control of an object's position through physics simulation.
        */
        class Rigidbody extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity vector of the rigidbody measured in radians per second.
            */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The drag of the object.
            */
            public get drag(): number;
            public set drag(value: number);
            /** The angular drag of the object.
            */
            public get angularDrag(): number;
            public set angularDrag(value: number);
            /** The mass of the rigidbody.
            */
            public get mass(): number;
            public set mass(value: number);
            /** Controls whether gravity affects this rigidbody.
            */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Maximum velocity of a rigidbody when moving out of penetrating state.
            */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** Controls whether physics affects the rigidbody.
            */
            public get isKinematic(): boolean;
            public set isKinematic(value: boolean);
            /** Controls whether physics will change the rotation of the object.
            */
            public get freezeRotation(): boolean;
            public set freezeRotation(value: boolean);
            /** Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
            */
            public get constraints(): UnityEngine.RigidbodyConstraints;
            public set constraints(value: UnityEngine.RigidbodyConstraints);
            /** The Rigidbody's collision detection mode.
            */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** Whether or not to calculate the center of mass automatically.
            */
            public get automaticCenterOfMass(): boolean;
            public set automaticCenterOfMass(value: boolean);
            /** The center of mass relative to the transform's origin.
            */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the rigidbody in world space (Read Only).
            */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            /** Whether or not to calculate the inertia tensor automatically.
            */
            public get automaticInertiaTensor(): boolean;
            public set automaticInertiaTensor(value: boolean);
            /** The rotation of the inertia tensor.
            */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The inertia tensor of this body, defined as a diagonal matrix in a reference frame positioned at this body's center of mass and rotated by Rigidbody.inertiaTensorRotation.
            */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** Should collision detection be enabled? (By default always enabled).
            */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** The position of the rigidbody.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Rigidbody.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** Interpolation provides a way to manage the appearance of jitter in the movement of your Rigidbody GameObjects at run time.
            */
            public get interpolation(): UnityEngine.RigidbodyInterpolation;
            public set interpolation(value: UnityEngine.RigidbodyInterpolation);
            /** The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
            */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The maximum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }.
            */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The maximum linear velocity of the rigidbody measured in meters per second.
            */
            public get maxLinearVelocity(): number;
            public set maxLinearVelocity(value: number);
            /** The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
            */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** The additional layers that all Colliders attached to this Rigidbody should exclude when deciding if the Collider can come into contact with another Collider.
            */
            public get excludeLayers(): UnityEngine.LayerMask;
            public set excludeLayers(value: UnityEngine.LayerMask);
            /** The additional layers that all Colliders attached to this Rigidbody should include when deciding if the Collider can come into contact with another Collider.
            */
            public get includeLayers(): UnityEngine.LayerMask;
            public set includeLayers(value: UnityEngine.LayerMask);
            /** Sets the mass based on the attached colliders assuming a constant density.
            */
            public SetDensity ($density: number) : void
            /** Moves the kinematic Rigidbody towards position.
            * @param $position Provides the new position for the Rigidbody object.
            */
            public MovePosition ($position: UnityEngine.Vector3) : void
            /** Rotates the rigidbody to rotation.
            * @param $rot The new rotation for the Rigidbody.
            */
            public MoveRotation ($rot: UnityEngine.Quaternion) : void
            /** Moves the Rigidbody to position and rotates the Rigidbody to rotation.
            * @param $position The new position for the Rigidbody.
            * @param $rotation The new rotation for the Rigidbody.
            */
            public Move ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Forces a rigidbody to sleep at least one frame.
            */
            public Sleep () : void
            /** Is the rigidbody sleeping?
            */
            public IsSleeping () : boolean
            /** Forces a rigidbody to wake up.
            */
            public WakeUp () : void
            /** Reset the center of mass of the rigidbody.
            */
            public ResetCenterOfMass () : void
            /** Reset the inertia tensor value and rotation.
            */
            public ResetInertiaTensor () : void
            /** The velocity relative to the rigidbody at the point relativePoint.
            */
            public GetRelativePointVelocity ($relativePoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** The velocity of the rigidbody at the point worldPoint in global space.
            */
            public GetPointVelocity ($worldPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Applies the position and rotation of the Rigidbody to the corresponding Transform component.
            */
            public PublishTransform () : void
            /** Returns the force that the Rigidbody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated force expressed in ForceMode.Force. 
            */
            public GetAccumulatedForce ($step: number) : UnityEngine.Vector3
            public GetAccumulatedForce () : UnityEngine.Vector3
            /** Returns the torque that the Rigidbody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated torque expressed in ForceMode.Force. 
            */
            public GetAccumulatedTorque ($step: number) : UnityEngine.Vector3
            public GetAccumulatedTorque () : UnityEngine.Vector3
            /** Adds a force to the Rigidbody.
            * @param $force Force vector in world coordinates.
            * @param $mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param $force Force vector in world coordinates.
            * @param $mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the Rigidbody.
            * @param $x Size of force along the world x-axis.
            * @param $y Size of force along the world y-axis.
            * @param $z Size of force along the world z-axis.
            * @param $mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param $x Size of force along the world x-axis.
            * @param $y Size of force along the world y-axis.
            * @param $z Size of force along the world z-axis.
            * @param $mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $force Force vector in local coordinates.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $force Force vector in local coordinates.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $x Size of force along the local x-axis.
            * @param $y Size of force along the local y-axis.
            * @param $z Size of force along the local z-axis.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param $x Size of force along the local x-axis.
            * @param $y Size of force along the local y-axis.
            * @param $z Size of force along the local z-axis.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody.
            * @param $torque Torque vector in world coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param $torque Torque vector in world coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody.
            * @param $x Size of torque along the world x-axis.
            * @param $y Size of torque along the world y-axis.
            * @param $z Size of torque along the world z-axis.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param $x Size of torque along the world x-axis.
            * @param $y Size of torque along the world y-axis.
            * @param $z Size of torque along the world z-axis.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $torque Torque vector in local coordinates.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $torque Torque vector in local coordinates.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $x Size of torque along the local x-axis.
            * @param $y Size of torque along the local y-axis.
            * @param $z Size of torque along the local z-axis.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param $x Size of torque along the local x-axis.
            * @param $y Size of torque along the local y-axis.
            * @param $z Size of torque along the local z-axis.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param $force Force vector in world coordinates.
            * @param $position Position in world coordinates.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param $force Force vector in world coordinates.
            * @param $position Position in world coordinates.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param $explosionForce The force of the explosion (which may be modified by distance).
            * @param $explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param $explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param $upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param $mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number) : void
            /** The closest point to the bounding box of the attached colliders.
            */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Tests if a rigidbody would collide with anything, if it was moved through the Scene.
            * @param $direction The direction into which to sweep the rigidbody.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (Additional resources: RaycastHit).
            * @param $maxDistance The length of the sweep.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the rigidbody sweep intersects any collider, otherwise false. 
            */
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Like Rigidbody.SweepTest, but returns all hits.
            * @param $direction The direction into which to sweep the rigidbody.
            * @param $maxDistance The length of the sweep.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            public constructor ()
        }
        /** Describes how physics materials of the colliding objects are combined.
        The friction force as well as the residual bounce impulse are applied symmertrically to both of the colliders in contact, so each pair of overlapping colliders must have a single set of friction and bouciness settings. However, one can set arbitrary physics materials to any colliders. For that particular reason, there is a mechanism that allows the combination of two different sets of properties that correspond to each of the colliders in contact into one set to be used in the solver.
        Specifying Average, Maximum, Minimum or Multiply as the physics material combine mode, you directly set the function that is used to combine the settings corresponding to the two overlapping colliders into one set of settings that can be used to apply the material effect.
        Note that there is a special case when the two overlapping colliders have physics materials with different combine modes set. In this particular case, the function that has the highest priority is used. The priority order is as follows: Average < Minimum < Multiply < Maximum. For example, if one material has Average set but the other one has Maximum, then the combine function to be used is Maximum, since it has higher priority.
        */
        enum PhysicMaterialCombine
        { Average = 0, Minimum = 2, Multiply = 1, Maximum = 3 }
        /** Describes a collision.
        */
        class Collision extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The total impulse applied to this contact pair to resolve the collision.
            */
            public get impulse(): UnityEngine.Vector3;
            /** The relative linear velocity of the two colliding objects (Read Only).
            */
            public get relativeVelocity(): UnityEngine.Vector3;
            /** The Rigidbody we hit (Read Only). This is null if the object we hit is a collider with no rigidbody attached.
            */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The ArticulationBody of the collider that your GameObject collides with (Read Only).
            */
            public get articulationBody(): UnityEngine.ArticulationBody;
            /** The Rigidbody or ArticulationBody of the collider that your Component collides with (Read Only).
            */
            public get body(): UnityEngine.Component;
            /** The Collider we hit (Read Only).
            */
            public get collider(): UnityEngine.Collider;
            /** The Transform of the object we hit (Read Only).
            */
            public get transform(): UnityEngine.Transform;
            /** The GameObject whose collider you are colliding with. (Read Only).
            */
            public get gameObject(): UnityEngine.GameObject;
            /** Gets the number of contacts for this collision.
            */
            public get contactCount(): number;
            /** The contact points generated by the physics engine. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead.
            */
            public get contacts(): System.Array$1<UnityEngine.ContactPoint>;
            /** Gets the contact point at the specified index.
            * @param $index The index of the contact to retrieve.
            * @returns The contact at the specified index. 
            */
            public GetContact ($index: number) : UnityEngine.ContactPoint
            /** Retrieves all contact points for this collision.
            * @param $contacts An array of ContactPoint used to receive the results.
            * @returns Returns the number of contacts placed in the contacts array. 
            */
            public GetContacts ($contacts: System.Array$1<UnityEngine.ContactPoint>) : number
            public GetContacts ($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint>) : number
            public constructor ()
        }
        /** A body that forms part of a Physics articulation.
        */
        class ArticulationBody extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The type of joint connecting this body to its parent body.
            */
            public get jointType(): UnityEngine.ArticulationJointType;
            public set jointType(value: UnityEngine.ArticulationJointType);
            /** Position of the anchor relative to this body.
            */
            public get anchorPosition(): UnityEngine.Vector3;
            public set anchorPosition(value: UnityEngine.Vector3);
            /** Position of the anchor relative to this body's parent.
            */
            public get parentAnchorPosition(): UnityEngine.Vector3;
            public set parentAnchorPosition(value: UnityEngine.Vector3);
            /** Rotation of the anchor relative to this body.
            */
            public get anchorRotation(): UnityEngine.Quaternion;
            public set anchorRotation(value: UnityEngine.Quaternion);
            /** Rotation of the anchor relative to this body's parent.
            */
            public get parentAnchorRotation(): UnityEngine.Quaternion;
            public set parentAnchorRotation(value: UnityEngine.Quaternion);
            /** Indicates whether this body is the root body of the articulation (Read Only).
            */
            public get isRoot(): boolean;
            /** Whether the parent anchor should be computed automatically or not.
            */
            public get matchAnchors(): boolean;
            public set matchAnchors(value: boolean);
            /** The type of lock along X axis of movement.
            */
            public get linearLockX(): UnityEngine.ArticulationDofLock;
            public set linearLockX(value: UnityEngine.ArticulationDofLock);
            /** The type of lock along Y axis of movement.
            */
            public get linearLockY(): UnityEngine.ArticulationDofLock;
            public set linearLockY(value: UnityEngine.ArticulationDofLock);
            /** The type of lock along Z axis of movement.
            */
            public get linearLockZ(): UnityEngine.ArticulationDofLock;
            public set linearLockZ(value: UnityEngine.ArticulationDofLock);
            /** The magnitude of the conical swing angle relative to Y axis.
            */
            public get swingYLock(): UnityEngine.ArticulationDofLock;
            public set swingYLock(value: UnityEngine.ArticulationDofLock);
            /** The magnitude of the conical swing angle relative to Z axis.
            */
            public get swingZLock(): UnityEngine.ArticulationDofLock;
            public set swingZLock(value: UnityEngine.ArticulationDofLock);
            /** The type of lock for twist movement.
            */
            public get twistLock(): UnityEngine.ArticulationDofLock;
            public set twistLock(value: UnityEngine.ArticulationDofLock);
            /** The properties of drive along or around X.
            */
            public get xDrive(): UnityEngine.ArticulationDrive;
            public set xDrive(value: UnityEngine.ArticulationDrive);
            /** The properties of drive along or around Y.
            */
            public get yDrive(): UnityEngine.ArticulationDrive;
            public set yDrive(value: UnityEngine.ArticulationDrive);
            /** The properties of drive along or around Z.
            */
            public get zDrive(): UnityEngine.ArticulationDrive;
            public set zDrive(value: UnityEngine.ArticulationDrive);
            /** Allows you to specify that this body is not movable.
            */
            public get immovable(): boolean;
            public set immovable(value: boolean);
            /** Controls whether gravity affects this articulation body.
            */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Damping factor that affects how this body resists linear motion.
            */
            public get linearDamping(): number;
            public set linearDamping(value: number);
            /** Damping factor that affects how this body resists rotations.
            */
            public get angularDamping(): number;
            public set angularDamping(value: number);
            /** Allows you to specify the amount of friction that is applied as a result of the parent body moving relative to this body.
            */
            public get jointFriction(): number;
            public set jointFriction(value: number);
            /** The additional layers that all Colliders attached to this ArticulationBody should exclude when deciding if the Collider can come into contact with another Collider.
            */
            public get excludeLayers(): UnityEngine.LayerMask;
            public set excludeLayers(value: UnityEngine.LayerMask);
            /** The additional layers that all Colliders attached to this ArticulationBody should include when deciding if a the Collider can come into contact with another Collider.
            */
            public get includeLayers(): UnityEngine.LayerMask;
            public set includeLayers(value: UnityEngine.LayerMask);
            /** Linear velocity of the body defined in world space.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity of the body defined in world space.
            */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The mass of this articulation body.
            */
            public get mass(): number;
            public set mass(value: number);
            /** Whether or not to calculate the center of mass automatically.
            */
            public get automaticCenterOfMass(): boolean;
            public set automaticCenterOfMass(value: boolean);
            /** The center of mass of the body defined in local space.
            */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the body defined in world space (Read Only).
            */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            /** Whether or not to calculate the inertia tensor automatically.
            */
            public get automaticInertiaTensor(): boolean;
            public set automaticInertiaTensor(value: boolean);
            /** The inertia tensor of this body.
            */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** The rotation of the inertia tensor.
            */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The solverIterations determines how accurately articulation body joints and collision contacts are resolved.
            */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The solverVelocityIterations affects how accurately articulation body joints and collision contacts are resolved during bounce.
            */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** The maximum angular velocity of the articulation body measured in radians per second.
            */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The maximum linear velocity of the articulation body measured in meters per second.
            */
            public get maxLinearVelocity(): number;
            public set maxLinearVelocity(value: number);
            /** The maximum joint velocity of the articulation body joint in reduced coordinates.
            */
            public get maxJointVelocity(): number;
            public set maxJointVelocity(value: number);
            /** The maximum velocity of an articulation body when moving out of penetrating state.
            */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** The joint position in reduced coordinates.
            */
            public get jointPosition(): UnityEngine.ArticulationReducedSpace;
            public set jointPosition(value: UnityEngine.ArticulationReducedSpace);
            /** The joint velocity in reduced coordinates.
            */
            public get jointVelocity(): UnityEngine.ArticulationReducedSpace;
            public set jointVelocity(value: UnityEngine.ArticulationReducedSpace);
            /** The joint acceleration in reduced coordinates.
            */
            public get jointAcceleration(): UnityEngine.ArticulationReducedSpace;
            public set jointAcceleration(value: UnityEngine.ArticulationReducedSpace);
            /** The joint force in reduced coordinates.
            */
            public get jointForce(): UnityEngine.ArticulationReducedSpace;
            public set jointForce(value: UnityEngine.ArticulationReducedSpace);
            /** The drive force in reduced coordinates.
            */
            public get driveForce(): UnityEngine.ArticulationReducedSpace;
            /** The amount of degrees of freedom of a body.
            */
            public get dofCount(): number;
            /** The index of the body in the hierarchy of articulation bodies.
            */
            public get index(): number;
            /** The ArticulationBody's collision detection mode.
            */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** Returns the force that the ArticulationBody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated force expressed in ForceMode.Force. 
            */
            public GetAccumulatedForce ($step: number) : UnityEngine.Vector3
            public GetAccumulatedForce () : UnityEngine.Vector3
            /** Returns the torque that the ArticulationBody has accumulated before the simulation step.
            * @param $step The timestep of the next physics simulation.
            * @returns Accumulated torque expressed in ForceMode.Force. 
            */
            public GetAccumulatedTorque ($step: number) : UnityEngine.Vector3
            public GetAccumulatedTorque () : UnityEngine.Vector3
            /** Applies a force to the ArticulationBody.
            * @param $force The force vector to apply.
            * @param $mode The type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to the ArticulationBody.
            * @param $force The force vector to apply.
            * @param $mode The type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3) : void
            /** Applies a force to the Articulation Body, relative to its local coordinate system.
            * @param $force The force vector in local coordinates.
            * @param $mode The type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to the Articulation Body, relative to its local coordinate system.
            * @param $force The force vector in local coordinates.
            * @param $mode The type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3) : void
            /** Add torque to the articulation body.
            * @param $torque The torque to apply.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Add torque to the articulation body.
            * @param $torque The torque to apply.
            * @param $mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3) : void
            /** Applies a torque to the articulation body, relative to its local coordinate system.
            * @param $torque The torque vector in local coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies a torque to the articulation body, relative to its local coordinate system.
            * @param $torque The torque vector in local coordinates.
            * @param $mode The type of torque to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3) : void
            /** Applies a force at a specific position, resulting in applying a torque and force on the object.
            * @param $force The force vector in world coordinates.
            * @param $position A position in world coordinates.
            * @param $mode The type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies a force at a specific position, resulting in applying a torque and force on the object.
            * @param $force The force vector in world coordinates.
            * @param $position A position in world coordinates.
            * @param $mode The type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3) : void
            /** Resets the center of mass of the articulation body.
            */
            public ResetCenterOfMass () : void
            /** Resets the inertia tensor value and rotation.
            */
            public ResetInertiaTensor () : void
            /** Forces an articulation body to sleep.
            */
            public Sleep () : void
            /** Indicates whether the articulation body is sleeping.
            */
            public IsSleeping () : boolean
            /** Forces an articulation body to wake up.
            */
            public WakeUp () : void
            /** Teleport the root body of the articulation to a new pose.
            * @param $position The new position of the root articulation body.
            * @param $rotation The new orientation of the root articulation body.
            */
            public TeleportRoot ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Return the point on the articulation body that is closest to a given one.
            * @param $point The point of interest.
            * @returns The point on the surfaces of all Colliders attached to this articulation body that is closest to the given one. 
            */
            public GetClosestPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            /** The velocity relative to the articulation body at the point relativePoint.
            */
            public GetRelativePointVelocity ($relativePoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Gets the velocity of the articulation body at the specified worldPoint in global space.
            */
            public GetPointVelocity ($worldPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates and writes dense Jacobian matrix of the articulation body hierarchy to the supplied struct.
            * @param $jacobian Supplied struct to read back and store Jacobian matrix values. 
            * @returns Number of elements in Jacobian matrix. 
            */
            public GetDenseJacobian ($jacobian: $Ref<UnityEngine.ArticulationJacobian>) : number
            public GetJointPositions ($positions: System.Collections.Generic.List$1<number>) : number
            public SetJointPositions ($positions: System.Collections.Generic.List$1<number>) : void
            public GetJointVelocities ($velocities: System.Collections.Generic.List$1<number>) : number
            public SetJointVelocities ($velocities: System.Collections.Generic.List$1<number>) : void
            public GetJointAccelerations ($accelerations: System.Collections.Generic.List$1<number>) : number
            public GetJointForces ($forces: System.Collections.Generic.List$1<number>) : number
            public SetJointForces ($forces: System.Collections.Generic.List$1<number>) : void
            /** Returns the forces required for the body to reach the provided acceleration in reduced space.
            * @param $acceleration The desired acceleration in reduced space.
            * @returns The forces needed for the body to reach the desired acceleration in reduced space. 
            */
            public GetJointForcesForAcceleration ($acceleration: UnityEngine.ArticulationReducedSpace) : UnityEngine.ArticulationReducedSpace
            public GetDriveForces ($forces: System.Collections.Generic.List$1<number>) : number
            public GetJointGravityForces ($forces: System.Collections.Generic.List$1<number>) : number
            public GetJointCoriolisCentrifugalForces ($forces: System.Collections.Generic.List$1<number>) : number
            public GetJointExternalForces ($forces: System.Collections.Generic.List$1<number>, $step: number) : number
            public GetDriveTargets ($targets: System.Collections.Generic.List$1<number>) : number
            public SetDriveTargets ($targets: System.Collections.Generic.List$1<number>) : void
            public GetDriveTargetVelocities ($targetVelocities: System.Collections.Generic.List$1<number>) : number
            public SetDriveTargetVelocities ($targetVelocities: System.Collections.Generic.List$1<number>) : void
            public GetDofStartIndices ($dofStartIndices: System.Collections.Generic.List$1<number>) : number
            /** Sets the target value of the specified drive.
            * @param $axis The drive axis.
            * @param $value The value to set the target to.
            */
            public SetDriveTarget ($axis: UnityEngine.ArticulationDriveAxis, $value: number) : void
            /** Sets the target velocity value of the specified drive.
            * @param $axis The drive axis.
            * @param $value The value to set the target velocity to.
            */
            public SetDriveTargetVelocity ($axis: UnityEngine.ArticulationDriveAxis, $value: number) : void
            /** Sets the lower and upper limits of the drive.
            * @param $axis The drive axis.
            * @param $lower The lower limit of the drive.
            * @param $upper The upper limit of the drive.
            */
            public SetDriveLimits ($axis: UnityEngine.ArticulationDriveAxis, $lower: number, $upper: number) : void
            /** Sets the stiffness value of the specified drive.
            * @param $axis The drive axis.
            * @param $value The value to set the stiffness to.
            */
            public SetDriveStiffness ($axis: UnityEngine.ArticulationDriveAxis, $value: number) : void
            /** Sets the damping value of the specified drive.
            * @param $axis The drive axis.
            * @param $value The value to set the damping to.
            */
            public SetDriveDamping ($axis: UnityEngine.ArticulationDriveAxis, $value: number) : void
            /** Sets the force limit of the specified drive.
            * @param $axis The drive axis.
            * @param $value The value to set the force limit to.
            */
            public SetDriveForceLimit ($axis: UnityEngine.ArticulationDriveAxis, $value: number) : void
            /** Reads the position and rotation of the Articulation Body from the physics system and applies it to the corresponding Transform component.
            */
            public PublishTransform () : void
            /** Snap the anchor to the closest contact between the connected bodies.
            */
            public SnapAnchorToClosestContact () : void
            public constructor ()
        }
        /** Describes a contact point where the collision occurs.
        */
        class ContactPoint extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The point of contact.
            */
            public get point(): UnityEngine.Vector3;
            /** Normal of the contact point.
            */
            public get normal(): UnityEngine.Vector3;
            /** The impulse applied to this contact pair to resolve the collision.
            */
            public get impulse(): UnityEngine.Vector3;
            /** The first collider in contact at the point.
            */
            public get thisCollider(): UnityEngine.Collider;
            /** The other collider in contact at the point.
            */
            public get otherCollider(): UnityEngine.Collider;
            /** The distance between the colliders at the contact point.
            */
            public get separation(): number;
        }
        /** CollisionFlags is a bitmask returned by CharacterController.Move.
        */
        enum CollisionFlags
        { None = 0, Sides = 1, Above = 2, Below = 4, CollidedSides = 1, CollidedAbove = 2, CollidedBelow = 4 }
        /** Overrides the global Physics.queriesHitTriggers.
        */
        enum QueryTriggerInteraction
        { UseGlobal = 0, Ignore = 1, Collide = 2 }
        /** The collision detection mode constants used for Rigidbody.collisionDetectionMode.
        */
        enum CollisionDetectionMode
        { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        /** Constrains movement for a ConfigurableJoint along the 6 axes.
        */
        enum ConfigurableJointMotion
        { Locked = 0, Limited = 1, Free = 2 }
        /** Control ConfigurableJoint's rotation with either X & YZ or Slerp Drive.
        */
        enum RotationDriveMode
        { XYAndZ = 0, Slerp = 1 }
        /** The type of the joint that restricts movement of the two connected articulation bodies.
        */
        enum ArticulationJointType
        { FixedJoint = 0, PrismaticJoint = 1, RevoluteJoint = 2, SphericalJoint = 3 }
        /** The lock type applied to a particular degree of freedom of an articulation body.
        */
        enum ArticulationDofLock
        { LockedMotion = 0, LimitedMotion = 1, FreeMotion = 2 }
        /** The drive type applied to a particular drive of an ArticulationBody.
        */
        enum ArticulationDriveType
        { Force = 0, Acceleration = 1, Target = 2, Velocity = 3 }
        /** Drive applies forces and torques to the connected bodies.
        */
        class ArticulationDrive extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The lower limit of motion for a particular degree of freedom.
            */
            public lowerLimit : number
            /** The upper limit of motion for a particular degree of freedom.
            */
            public upperLimit : number
            /** The stiffness of the spring connected to this drive.
            */
            public stiffness : number
            /** The damping of the spring attached to this drive.
            */
            public damping : number
            /** The maximum force this drive can apply to a body.
            */
            public forceLimit : number
            /** The target value the drive will try to reach.
            */
            public target : number
            /** The velocity of the body this drive will try to reach.
            */
            public targetVelocity : number
            /** Specifies which drive type to use for this drive.
            */
            public driveType : UnityEngine.ArticulationDriveType
        }
        /** Coordinates in reduced space.
        */
        class ArticulationReducedSpace extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The number of degrees of freedom of a body.
            */
            public dofCount : number
            public get_Item ($i: number) : number
            public set_Item ($i: number, $value: number) : void
            public constructor ($a: number)
            public constructor ($a: number, $b: number)
            public constructor ($a: number, $b: number, $c: number)
        }
        /** The floating point dense Jacobian matrix of the articulation body hierarchy.
        */
        class ArticulationJacobian extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Number of rows of the matrix is equal to the number of articulation bodies in hierarchy times 6: 3 rows of linearpositional DOF and 3 rows of angularrotational DOF for each body.
            */
            public get rows(): number;
            public set rows(value: number);
            /** Number of columns of the matrix is equal to the total number of all joint degrees of freedom(DOF), plus 6 if ArticulationBody.immovable is false.
            */
            public get columns(): number;
            public set columns(value: number);
            /** List of floats representing Jacobian matrix.
            */
            public get elements(): System.Collections.Generic.List$1<number>;
            public set elements(value: System.Collections.Generic.List$1<number>);
            public constructor ($rows: number, $cols: number)
        }
        /** An axis of a drive of an ArticulationBody.
        */
        enum ArticulationDriveAxis
        { X = 0, Y = 1, Z = 2 }
        /** Global physics properties and helper methods.
        */
        class Physics extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Layer mask constant to select ignore raycast layer.
            */
            public static IgnoreRaycastLayer : number
            /** Layer mask constant to select default raycast layers.
            */
            public static DefaultRaycastLayers : number
            /** Layer mask constant to select all layers.
            */
            public static AllLayers : number
            /** The gravity applied to all rigid bodies in the Scene.
            */
            public static get gravity(): UnityEngine.Vector3;
            public static set gravity(value: UnityEngine.Vector3);
            /** The default contact offset of the newly created colliders.
            */
            public static get defaultContactOffset(): number;
            public static set defaultContactOffset(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public static get sleepThreshold(): number;
            public static set sleepThreshold(value: number);
            /** Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
            */
            public static get queriesHitTriggers(): boolean;
            public static set queriesHitTriggers(value: boolean);
            /** Whether physics queries should hit back-face triangles.
            */
            public static get queriesHitBackfaces(): boolean;
            public static set queriesHitBackfaces(value: boolean);
            /** Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
            */
            public static get bounceThreshold(): number;
            public static set bounceThreshold(value: number);
            /** The maximum default velocity needed to move a Rigidbody's collider out of another collider's surface penetration. Must be positive.
            */
            public static get defaultMaxDepenetrationVelocity(): number;
            public static set defaultMaxDepenetrationVelocity(value: number);
            /** The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
            */
            public static get defaultSolverIterations(): number;
            public static set defaultSolverIterations(value: number);
            /** The defaultSolverVelocityIterations affects how accurately the Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
            */
            public static get defaultSolverVelocityIterations(): number;
            public static set defaultSolverVelocityIterations(value: number);
            /** Controls when Unity executes the physics simulation.
            */
            public static get simulationMode(): UnityEngine.SimulationMode;
            public static set simulationMode(value: UnityEngine.SimulationMode);
            /** Default maximum angular speed of the dynamic Rigidbody, in radians (default 50).
            */
            public static get defaultMaxAngularSpeed(): number;
            public static set defaultMaxAngularSpeed(value: number);
            /** Enables an improved patch friction mode that guarantees static and dynamic friction do not exceed analytical results.
            */
            public static get improvedPatchFriction(): boolean;
            public static set improvedPatchFriction(value: boolean);
            /** Whether or not MonoBehaviour collision messages will be sent by the physics system.
            */
            public static get invokeCollisionCallbacks(): boolean;
            public static set invokeCollisionCallbacks(value: boolean);
            /** The PhysicsScene automatically created when Unity starts.
            */
            public static get defaultPhysicsScene(): UnityEngine.PhysicsScene;
            /** Whether or not to automatically sync transform changes with the physics system whenever a Transform component changes.
            */
            public static get autoSyncTransforms(): boolean;
            public static set autoSyncTransforms(value: boolean);
            /** Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks.
            */
            public static get reuseCollisionCallbacks(): boolean;
            public static set reuseCollisionCallbacks(value: boolean);
            /** Sets the minimum separation distance for cloth inter-collision.
            */
            public static get interCollisionDistance(): number;
            public static set interCollisionDistance(value: number);
            /** Sets the cloth inter-collision stiffness.
            */
            public static get interCollisionStiffness(): number;
            public static set interCollisionStiffness(value: number);
            public static get interCollisionSettingsToggle(): boolean;
            public static set interCollisionSettingsToggle(value: boolean);
            /** Cloth Gravity setting.
            Set gravity for all cloth components.
            */
            public static get clothGravity(): UnityEngine.Vector3;
            public static set clothGravity(value: UnityEngine.Vector3);
            public static add_ContactModifyEvent ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static remove_ContactModifyEvent ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static add_ContactModifyEventCCD ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            public static remove_ContactModifyEventCCD ($value: System.Action$2<UnityEngine.PhysicsScene, Unity.Collections.NativeArray$1<UnityEngine.ModifiableContactPair>>) : void
            /** Makes the collision detection system ignore all collisions between collider1 and collider2.
            * @param $collider1 Any collider.
            * @param $collider2 Another collider you want to have collider1 to start or stop ignoring collisions with.
            * @param $ignore Whether or not the collisions between the two colliders should be ignored or not.
            */
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider, $ignore: boolean) : void
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : void
            /** Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.
            Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this.
            */
            public static IgnoreLayerCollision ($layer1: number, $layer2: number, $ignore: boolean) : void
            public static IgnoreLayerCollision ($layer1: number, $layer2: number) : void
            /** Are collisions between layer1 and layer2 being ignored?
            */
            public static GetIgnoreLayerCollision ($layer1: number, $layer2: number) : boolean
            /** Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
            * @param $collider1 The first collider to compare to collider2.
            * @param $collider2 The second collider to compare to collider1.
            * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not. 
            */
            public static GetIgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : boolean
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore Colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true if the ray intersects with a Collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts a ray against all colliders in the Scene and returns detailed information on what was hit.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param $ray The starting point and direction of the ray.
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param $ray The starting point and direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Returns true if there is any collider intersecting the line between start and end.
            * @param $start Start point.
            * @param $end End point.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : boolean
            /** Returns true if there is any collider intersecting the line between start and end.
            * @param $start Start point.
            * @param $end End point.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the capsule sweep intersects any collider, otherwise false. 
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : boolean
            /** * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction into which to sweep the sphere.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number) : boolean
            /** * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Additional resources: Raycast.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layermask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.
            * @param $ray The starting point and direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of RaycastHit objects. Note that the order of the results is undefined. 
            */
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray) : System.Array$1<UnityEngine.RaycastHit>
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param $ray The starting point and direction of the ray.
            * @param $results The buffer to store the hits into.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param $origin The starting point and direction of the ray.
            * @param $results The buffer to store the hits into.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $maxDistance The max length of the sweep.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction in which to sweep the sphere.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders.
            * @param $point0 The center of the sphere at the start of the capsule.
            * @param $point1 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders touching or inside the capsule. 
            */
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Computes and stores colliders touching or inside the sphere.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $layerMask A defines which layers of colliders to include in the query.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns an array with all colliders touching or inside the sphere. 
            */
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Simulate physics in the Scene.
            * @param $step The time to advance physics by.
            */
            public static Simulate ($step: number) : void
            /** Apply Transform changes to the physics engine.
            */
            public static SyncTransforms () : void
            /** Compute the minimal translation required to separate the given colliders apart at specified poses.
            * @param $colliderA The first collider.
            * @param $positionA Position of the first collider.
            * @param $rotationA Rotation of the first collider.
            * @param $colliderB The second collider.
            * @param $positionB Position of the second collider.
            * @param $rotationB Rotation of the second collider.
            * @param $direction Direction along which the translation required to separate the colliders apart is minimal.
            * @param $distance The distance along direction that is required to separate the colliders apart.
            * @returns True, if the colliders overlap at the given poses. 
            */
            public static ComputePenetration ($colliderA: UnityEngine.Collider, $positionA: UnityEngine.Vector3, $rotationA: UnityEngine.Quaternion, $colliderB: UnityEngine.Collider, $positionB: UnityEngine.Vector3, $rotationB: UnityEngine.Quaternion, $direction: $Ref<UnityEngine.Vector3>, $distance: $Ref<number>) : boolean
            /** Returns a point on the given collider that is closest to the specified location.
            * @param $point Location you want to find the closest point to.
            * @param $collider The collider that you find the closest point on.
            * @param $position The position of the collider.
            * @param $rotation The rotation of the collider.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public static ClosestPoint ($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Vector3
            /** Computes and stores colliders touching or inside the sphere into the provided buffer.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $results The buffer to store the results into.
            * @param $layerMask A defines which layers of colliders to include in the query.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns the amount of colliders stored into the results buffer. 
            */
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit into the buffer.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $results The buffer to store the hits into.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the buffer. 
            */
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction in which to sweep the sphere.
            * @param $results The buffer to save the hits into.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param $ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param $radius The radius of the sphere.
            * @param $results The buffer to save the results to.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Checks if any colliders overlap a capsule-shaped volume in world space.
            * @param $start The center of the sphere at the start of the capsule.
            * @param $end The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number) : boolean
            /** Check whether the given box overlaps with other colliders or not.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $orientation Rotation of the box.
            * @param $layermask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if the box overlaps with any colliders. 
            */
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layermask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : boolean
            /** Find all colliders touching or inside of the given box.
            * @param $center Center of the box.
            * @param $halfExtents Half of the size of the box in each dimension.
            * @param $orientation Rotation of the box.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders that overlap with the given box. 
            */
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : System.Array$1<UnityEngine.Collider>
            /** Find all colliders touching or inside of the given box, and store them into the buffer.
            * @param $center Center of the box.
            * @param $halfExtents Half of the size of the box in each dimension.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of colliders stored in results. 
            */
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Cast the box along the direction, and store hits in the provided buffer.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored to the results buffer. 
            */
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.BoxCast, but returns all hits.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns All colliders that were hit. 
            */
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
            * @param $point0 The center of the sphere at the start of the capsule.
            * @param $point1 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $results The buffer to store the results into.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of entries written to the buffer. 
            */
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Prepares the mesh for use with a MeshCollider.
            * @param $meshID The instance ID of the mesh to bake collision data from.
            * @param $convex A flag to indicate whether to bake convex geometry or not.
            * @param $cookingOptions The cooking options to use when you bake the mesh.
            */
            public static BakeMesh ($meshID: number, $convex: boolean, $cookingOptions: UnityEngine.MeshColliderCookingOptions) : void
            /** Prepares the mesh for use with a MeshCollider and uses default cooking options.
            * @param $meshID The instance ID of the mesh to bake collision data from.
            * @param $convex A flag to indicate whether to bake convex geometry or not.
            */
            public static BakeMesh ($meshID: number, $convex: boolean) : void
            public static add_ContactEvent ($value: UnityEngine.Physics.ContactEventDelegate) : void
            public static remove_ContactEvent ($value: UnityEngine.Physics.ContactEventDelegate) : void
            public constructor ()
        }
        /** Represents a single instance of a 3D physics Scene.
        */
        class PhysicsScene extends System.ValueType implements System.IEquatable$1<UnityEngine.PhysicsScene>
        {
            protected [__keep_incompatibility]: never;
            public static op_Equality ($lhs: UnityEngine.PhysicsScene, $rhs: UnityEngine.PhysicsScene) : boolean
            public static op_Inequality ($lhs: UnityEngine.PhysicsScene, $rhs: UnityEngine.PhysicsScene) : boolean
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.PhysicsScene) : boolean
            /** Gets whether the physics Scene is valid or not.
            * @returns Is the physics scene valid? 
            */
            public IsValid () : boolean
            /** Gets whether the physics Scene is empty or not.
            * @returns Is the physics Scene is empty? 
            */
            public IsEmpty () : boolean
            /** Simulate physics associated with this PhysicsScene.
            * @param $step The time to advance physics by.
            * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail. 
            */
            public Simulate ($step: number) : void
            /** Runs specified physics simulation stages on this physics scene.
            * @param $step The time to advance physics by.
            * @param $stages An enum to specify which stages to run.
            * @param $options A flag enum to specify any additional simulation options.
            */
            public RunSimulationStages ($step: number, $stages: UnityEngine.SimulationStage, $options?: UnityEngine.SimulationOption) : void
            /** Interpolates Rigidbodies in this PhysicsScene.
            */
            public InterpolateBodies () : void
            /** Resets the Transform positions of interpolated and extrapolated Rigidbodies in this PhysicsScene to Rigidbody.position and Transform rotations to Rigidbody.rotation.
            */
            public ResetInterpolationPoses () : void
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore Colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True if the ray intersects with a Collider, otherwise false. 
            */
            public Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : boolean
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param $origin The starting point of the ray in world coordinates.
            * @param $direction The direction of the ray.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max distance the ray should check for collisions.
            * @param $layerMask A that is used to selectively ignore Colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True if the ray intersects with a Collider, otherwise false. 
            */
            public Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : boolean
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param $origin The starting point and direction of the ray.
            * @param $direction The direction of the ray.
            * @param $raycastHits The buffer to store the hits into.
            * @param $maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction The amount of hits stored into the results buffer.
            * @returns True if the ray intersects with a Collider, otherwise false. 
            */
            public Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $raycastHits: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            /** Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the capsule sweep intersects any collider, otherwise false. 
            */
            public CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : boolean
            /** Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
            * @param $point1 The center of the sphere at the start of the capsule.
            * @param $point2 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $direction The direction into which to sweep the capsule.
            * @param $results The buffer to store the results in.
            * @param $maxDistance The max length of the sweep.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored to the results buffer. 
            */
            public CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            /** Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
            * @param $point0 The center of the sphere at the start of the capsule.
            * @param $point1 The center of the sphere at the end of the capsule.
            * @param $radius The radius of the capsule.
            * @param $results The buffer to store the results into.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of entries written to the buffer. 
            */
            public OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction into which to sweep the sphere.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : boolean
            /** Cast sphere along the direction and store the results into buffer.
            * @param $origin The center of the sphere at the start of the sweep.
            * @param $radius The radius of the sphere.
            * @param $direction The direction into which to sweep the sphere.
            * @param $results The buffer to save the results to.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction A that is used to selectively ignore colliders when casting a capsule.
            * @returns The amount of hits stored into the results buffer. 
            */
            public SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            /** Computes and stores colliders touching or inside the sphere into the provided buffer.
            * @param $position Center of the sphere.
            * @param $radius Radius of the sphere.
            * @param $results The buffer to store the results into.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of colliders stored into the results buffer. 
            */
            public OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : boolean
            public BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Find all colliders touching or inside of the given box, and store them into the buffer.
            * @param $center Center of the box.
            * @param $halfExtents Half of the size of the box in each dimension.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of colliders stored in results. 
            */
            public OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            public OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param $center Center of the box.
            * @param $halfExtents Half the size of the box in each dimension.
            * @param $direction The direction in which to cast the box.
            * @param $results The buffer to store the results in.
            * @param $orientation Rotation of the box.
            * @param $maxDistance The max length of the cast.
            * @param $layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param $queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored to the results buffer. 
            */
            public BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: UnityEngine.QueryTriggerInteraction) : number
            public BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
        }
        /** A light-weight proxy that allows to access the contact buffers directly.
        */
        class ModifiableContactPair extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** World-space rotation of the first collider in this contact pair as seen by the solver.
            */
            public rotation : UnityEngine.Quaternion
            /** World-space position of the first collider in this contact pair as seen by the solver.
            */
            public position : UnityEngine.Vector3
            /** World-space rotation of the second collider in this contact pair as seen by the solver.
            */
            public otherRotation : UnityEngine.Quaternion
            /** World-space position of the second collider in this contact pair as seen by the solver.
            */
            public otherPosition : UnityEngine.Vector3
            /** Instance ID of the first Collider in this contact pair.
            */
            public get colliderInstanceID(): number;
            /** Instance ID of the second collider in this contact pair.
            */
            public get otherColliderInstanceID(): number;
            /** Instance ID of the first body in this contact pair.
            */
            public get bodyInstanceID(): number;
            /** Instance ID of the second body in this contact pair.
            */
            public get otherBodyInstanceID(): number;
            /** Linear velocity of the first body in the contact pair.
            */
            public get bodyVelocity(): UnityEngine.Vector3;
            /** Angular velocity of the first body in the contact pair.
            */
            public get bodyAngularVelocity(): UnityEngine.Vector3;
            /** Linear velocity of the second body in the contact pair.
            */
            public get otherBodyVelocity(): UnityEngine.Vector3;
            /** Angular velocity of the second body in the contact pair.
            */
            public get otherBodyAngularVelocity(): UnityEngine.Vector3;
            /** The amount of the contact points generated for this contact pair.
            */
            public get contactCount(): number;
            /** Mass-related properties of this contact pair, such as the mass ratio.
            */
            public get massProperties(): UnityEngine.ModifiableMassProperties;
            public set massProperties(value: UnityEngine.ModifiableMassProperties);
            /** Get the location of a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns The location of a contact point. 
            */
            public GetPoint ($i: number) : UnityEngine.Vector3
            /** Set the location of a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $v The location of a contact point.
            */
            public SetPoint ($i: number, $v: UnityEngine.Vector3) : void
            /** Get the normal at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns Normal at the contact point. 
            */
            public GetNormal ($i: number) : UnityEngine.Vector3
            /** Set the normal at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $normal Normal at the contact point.
            */
            public SetNormal ($i: number, $normal: UnityEngine.Vector3) : void
            /** Get the separation value at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns The separation at a contact point. 
            */
            public GetSeparation ($i: number) : number
            /** Set the separation value at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $separation The separation at a contact point.
            */
            public SetSeparation ($i: number, $separation: number) : void
            /** Get the target velocity the solver should aim reaching at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns The target velocity at a contact point. 
            */
            public GetTargetVelocity ($i: number) : UnityEngine.Vector3
            /** Set the target velocity the solver should aim reaching at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $velocity The target velocity at a contact point.
            */
            public SetTargetVelocity ($i: number, $velocity: UnityEngine.Vector3) : void
            /** Get the restitution value for the specified contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns Bounciness value for the specified contact point. 
            */
            public GetBounciness ($i: number) : number
            /** Set the restitution value for the specified contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $bounciness Bounciness value for the specified contact point.
            */
            public SetBounciness ($i: number, $bounciness: number) : void
            /** Get the static friction coefficient at a particular point of the contact pair.
            * @param $i Index of the contact point.
            * @returns The static friction coefficient at a contact point. 
            */
            public GetStaticFriction ($i: number) : number
            /** Set the static friction coefficient at a particular point of the contact pair.
            * @param $i Index of the contact point.
            * @param $staticFriction The static friction coefficient at a contact point.
            */
            public SetStaticFriction ($i: number, $staticFriction: number) : void
            /** Get the value of the dynamic friction for a specified contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns Dynamic friction coefficient. 
            */
            public GetDynamicFriction ($i: number) : number
            /** Set the value of the dynamic friction for a specified contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $dynamicFriction Dynamic friction coefficient.
            */
            public SetDynamicFriction ($i: number, $dynamicFriction: number) : void
            /** Get the maximum impulse that the solver can apply at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @returns The maximum impulse that can be applied. 
            */
            public GetMaxImpulse ($i: number) : number
            /** Set the maximum impulse that the solver can apply at a particular contact point in this contact pair.
            * @param $i Index of the contact point.
            * @param $value The maximum impulse that can be applied.
            */
            public SetMaxImpulse ($i: number, $value: number) : void
            /** Ignore the specified contact point in this contact pair.
            * @param $i Index of the contact point.
            */
            public IgnoreContact ($i: number) : void
            /** Get the index of a face a particular contact point belongs to in this contact pair. Use this with Mesh.triangles.
            * @param $i Index of the contact point.
            * @returns Index of a face this contact point belongs to. 
            */
            public GetFaceIndex ($i: number) : number
        }
        /** A selection of modes that control when Unity executes the physics simulation.
        */
        enum SimulationMode
        { FixedUpdate = 0, Update = 1, Script = 2 }
        /** Structure used to get information back from a raycast.
        */
        class RaycastHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The Collider that was hit.
            */
            public get collider(): UnityEngine.Collider;
            /** Instance ID of the Collider that was hit.
            */
            public get colliderInstanceID(): number;
            /** The impact point in world space where the ray hit the collider.
            */
            public get point(): UnityEngine.Vector3;
            public set point(value: UnityEngine.Vector3);
            /** The normal of the surface the ray hit.
            */
            public get normal(): UnityEngine.Vector3;
            public set normal(value: UnityEngine.Vector3);
            /** The barycentric coordinate of the triangle we hit.
            */
            public get barycentricCoordinate(): UnityEngine.Vector3;
            public set barycentricCoordinate(value: UnityEngine.Vector3);
            /** The distance from the ray's origin to the impact point.
            */
            public get distance(): number;
            public set distance(value: number);
            /** The index of the triangle that was hit.
            */
            public get triangleIndex(): number;
            /** The uv texture coordinate at the collision location.
            */
            public get textureCoord(): UnityEngine.Vector2;
            /** The secondary uv texture coordinate at the impact point.
            */
            public get textureCoord2(): UnityEngine.Vector2;
            /** The Transform of the rigidbody or collider that was hit.
            */
            public get transform(): UnityEngine.Transform;
            /** The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null.
            */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null.
            */
            public get articulationBody(): UnityEngine.ArticulationBody;
            /** The uv lightmap coordinate at the impact point.
            */
            public get lightmapCoord(): UnityEngine.Vector2;
        }
        /** A header struct which contains colliding bodies.
        */
        class ContactPairHeader extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Instance ID of the first Rigidbody or the ArticualtionBody in the pair.
            */
            public get bodyInstanceID(): number;
            /** Instance ID of the second Rigidbody or the ArticualtionBody in the pair.
            */
            public get otherBodyInstanceID(): number;
            /** The first Rigidbody or ArticulationBody in the pair.
            */
            public get body(): UnityEngine.Component;
            /** The second Rigidbody or ArticulationBody in the pair.
            */
            public get otherBody(): UnityEngine.Component;
            /** Number of ContactPairs that this header contains.
            */
            public get pairCount(): number;
            /** Gets the ContactPair at index of this pair header.
            * @param $index The ContactPair index.
            * @returns A reference or a copy of the ContactPair struct at index. 
            */
            public GetContactPair ($index: number) : $Ref<UnityEngine.ContactPair>
        }
        /** Mass-related modifiable properties of a contact pair.
        */
        class ModifiableMassProperties extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The inverse mass scaling that the solver should apply to the first body of this contact pair.
            */
            public inverseMassScale : number
            /** The inverse inertia scaling that the solver should apply to the first body of this contact pair.
            */
            public inverseInertiaScale : number
            /** The inverse mass scaling that the solver should apply to the second body of this contact pair.
            */
            public otherInverseMassScale : number
            /** The inverse inertia scaling that the solver should apply to the second body of this contact pair.
            */
            public otherInverseInertiaScale : number
        }
        /** Physics material describes how to handle colliding objects (friction, bounciness).
        */
        class PhysicMaterial extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
            */
            public get bounciness(): number;
            public set bounciness(value: number);
            /** The friction used when already moving.  This value is usually between 0 and 1.
            */
            public get dynamicFriction(): number;
            public set dynamicFriction(value: number);
            /** The friction coefficient used when an object is lying on a surface.
            */
            public get staticFriction(): number;
            public set staticFriction(value: number);
            /** Determines how the friction is combined.
            */
            public get frictionCombine(): UnityEngine.PhysicMaterialCombine;
            public set frictionCombine(value: UnityEngine.PhysicMaterialCombine);
            /** Determines how the bounciness is combined.
            */
            public get bounceCombine(): UnityEngine.PhysicMaterialCombine;
            public set bounceCombine(value: UnityEngine.PhysicMaterialCombine);
            public constructor ()
            public constructor ($name: string)
        }
        /** A mesh collider allows you to do between meshes and primitives.
        */
        class MeshCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The mesh object used for collision detection.
            */
            public get sharedMesh(): UnityEngine.Mesh;
            public set sharedMesh(value: UnityEngine.Mesh);
            /** Use a convex collider from the mesh.
            */
            public get convex(): boolean;
            public set convex(value: boolean);
            /** Options used to enable or disable certain features in mesh cooking.
            */
            public get cookingOptions(): UnityEngine.MeshColliderCookingOptions;
            public set cookingOptions(value: UnityEngine.MeshColliderCookingOptions);
            public constructor ()
        }
        /** A capsule-shaped primitive collider.
        */
        class CapsuleCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the capsule, measured in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The radius of the sphere, measured in the object's local space.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The height of the capsule measured in the object's local space.
            */
            public get height(): number;
            public set height(value: number);
            /** The direction of the capsule.
            */
            public get direction(): number;
            public set direction(value: number);
            public constructor ()
        }
        /** A box-shaped primitive collider.
        */
        class BoxCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the box, measured in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The size of the box, measured in the object's local space.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            public constructor ()
        }
        /** A sphere-shaped primitive collider.
        */
        class SphereCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
            /** The center of the sphere in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The radius of the sphere measured in the object's local space.
            */
            public get radius(): number;
            public set radius(value: number);
            public constructor ()
        }
        /** A force applied constantly.
        */
        class ConstantForce extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The force applied to the rigidbody every frame.
            */
            public get force(): UnityEngine.Vector3;
            public set force(value: UnityEngine.Vector3);
            /** The force - relative to the rigid bodies coordinate system - applied every frame.
            */
            public get relativeForce(): UnityEngine.Vector3;
            public set relativeForce(value: UnityEngine.Vector3);
            /** The torque applied to the rigidbody every frame.
            */
            public get torque(): UnityEngine.Vector3;
            public set torque(value: UnityEngine.Vector3);
            /** The torque - relative to the rigid bodies coordinate system - applied every frame.
            */
            public get relativeTorque(): UnityEngine.Vector3;
            public set relativeTorque(value: UnityEngine.Vector3);
            public constructor ()
        }
        /** Joint is the base class for all joints.
        */
        class Joint extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** A reference to another rigidbody this joint connects to.
            */
            public get connectedBody(): UnityEngine.Rigidbody;
            public set connectedBody(value: UnityEngine.Rigidbody);
            /** A reference to an articulation body this joint connects to.
            */
            public get connectedArticulationBody(): UnityEngine.ArticulationBody;
            public set connectedArticulationBody(value: UnityEngine.ArticulationBody);
            /** The Direction of the axis around which the body is constrained.
            */
            public get axis(): UnityEngine.Vector3;
            public set axis(value: UnityEngine.Vector3);
            /** The Position of the anchor around which the joints motion is constrained.
            */
            public get anchor(): UnityEngine.Vector3;
            public set anchor(value: UnityEngine.Vector3);
            /** Position of the anchor relative to the connected Rigidbody.
            */
            public get connectedAnchor(): UnityEngine.Vector3;
            public set connectedAnchor(value: UnityEngine.Vector3);
            /** Should the connectedAnchor be calculated automatically?
            */
            public get autoConfigureConnectedAnchor(): boolean;
            public set autoConfigureConnectedAnchor(value: boolean);
            /** The force that needs to be applied for this joint to break.
            */
            public get breakForce(): number;
            public set breakForce(value: number);
            /** The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
            */
            public get breakTorque(): number;
            public set breakTorque(value: number);
            /** Enable collision between bodies connected with the joint.
            */
            public get enableCollision(): boolean;
            public set enableCollision(value: boolean);
            /** Toggle preprocessing for this joint.
            */
            public get enablePreprocessing(): boolean;
            public set enablePreprocessing(value: boolean);
            /** The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
            */
            public get massScale(): number;
            public set massScale(value: number);
            /** The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
            */
            public get connectedMassScale(): number;
            public set connectedMassScale(value: number);
            /** The force applied by the solver to satisfy all constraints.
            */
            public get currentForce(): UnityEngine.Vector3;
            /** The torque applied by the solver to satisfy all constraints.
            */
            public get currentTorque(): UnityEngine.Vector3;
            public constructor ()
        }
        /** The HingeJoint groups together 2 rigid bodies, constraining them to move like connected by a hinge.
        */
        class HingeJoint extends UnityEngine.Joint
        {
            protected [__keep_incompatibility]: never;
            /** The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second.
            */
            public get motor(): UnityEngine.JointMotor;
            public set motor(value: UnityEngine.JointMotor);
            /** Limit of angular rotation (in degrees) on the hinge joint.
            */
            public get limits(): UnityEngine.JointLimits;
            public set limits(value: UnityEngine.JointLimits);
            /** The spring attempts to reach a target angle by adding spring and damping forces.
            */
            public get spring(): UnityEngine.JointSpring;
            public set spring(value: UnityEngine.JointSpring);
            /** Enables the joint's motor. Disabled by default.
            */
            public get useMotor(): boolean;
            public set useMotor(value: boolean);
            /** Enables the joint's limits. Disabled by default.
            */
            public get useLimits(): boolean;
            public set useLimits(value: boolean);
            /** If enabled, the angle of the hinge is extended to [-360, 360] degrees.
            */
            public get extendedLimits(): boolean;
            public set extendedLimits(value: boolean);
            /** Enables the joint's spring. Disabled by default.
            */
            public get useSpring(): boolean;
            public set useSpring(value: boolean);
            /** The angular velocity of the joint in degrees per second. (Read Only)
            */
            public get velocity(): number;
            /** The current angle in degrees of the joint relative to its rest position. (Read Only)
            */
            public get angle(): number;
            /** Defines whether the HingeJoint.spring outputs accelerations instead of forces.
            */
            public get useAcceleration(): boolean;
            public set useAcceleration(value: boolean);
            public constructor ()
        }
        /** The spring joint ties together 2 rigid bodies, spring forces will be automatically applied to keep the object at the given distance.
        */
        class SpringJoint extends UnityEngine.Joint
        {
            protected [__keep_incompatibility]: never;
            /** The spring force used to keep the two objects together.
            */
            public get spring(): number;
            public set spring(value: number);
            /** The damper force used to dampen the spring force.
            */
            public get damper(): number;
            public set damper(value: number);
            /** The minimum distance between the bodies relative to their initial distance.
            */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** The maximum distance between the bodies relative to their initial distance.
            */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** The maximum allowed error between the current spring length and the length defined by minDistance and maxDistance.
            */
            public get tolerance(): number;
            public set tolerance(value: number);
            public constructor ()
        }
        /** The Fixed joint groups together 2 rigidbodies, making them stick together in their bound position.
        */
        class FixedJoint extends UnityEngine.Joint
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        /** Character Joints are mainly used for Ragdoll effects.
        */
        class CharacterJoint extends UnityEngine.Joint
        {
            protected [__keep_incompatibility]: never;
            /** The secondary axis around which the joint can rotate.
            */
            public get swingAxis(): UnityEngine.Vector3;
            public set swingAxis(value: UnityEngine.Vector3);
            /** The configuration of the spring attached to the twist limits of the joint.
            */
            public get twistLimitSpring(): UnityEngine.SoftJointLimitSpring;
            public set twistLimitSpring(value: UnityEngine.SoftJointLimitSpring);
            /** The configuration of the spring attached to the swing limits of the joint.
            */
            public get swingLimitSpring(): UnityEngine.SoftJointLimitSpring;
            public set swingLimitSpring(value: UnityEngine.SoftJointLimitSpring);
            /** The lower limit around the primary axis of the character joint.
            */
            public get lowTwistLimit(): UnityEngine.SoftJointLimit;
            public set lowTwistLimit(value: UnityEngine.SoftJointLimit);
            /** The upper limit around the primary axis of the character joint.
            */
            public get highTwistLimit(): UnityEngine.SoftJointLimit;
            public set highTwistLimit(value: UnityEngine.SoftJointLimit);
            /** The angular limit of rotation (in degrees) around the primary axis of the character joint.
            */
            public get swing1Limit(): UnityEngine.SoftJointLimit;
            public set swing1Limit(value: UnityEngine.SoftJointLimit);
            /** The angular limit of rotation (in degrees) around the primary axis of the character joint.
            */
            public get swing2Limit(): UnityEngine.SoftJointLimit;
            public set swing2Limit(value: UnityEngine.SoftJointLimit);
            /** Brings violated constraints back into alignment even when the solver fails.
            */
            public get enableProjection(): boolean;
            public set enableProjection(value: boolean);
            /** Set the linear tolerance threshold for projection.
            */
            public get projectionDistance(): number;
            public set projectionDistance(value: number);
            /** Set the angular tolerance threshold (in degrees) for projection.
            */
            public get projectionAngle(): number;
            public set projectionAngle(value: number);
            public constructor ()
        }
        /** The configurable joint is an extremely flexible joint giving you complete control over rotation and linear motion.
        */
        class ConfigurableJoint extends UnityEngine.Joint
        {
            protected [__keep_incompatibility]: never;
            /** The joint's secondary axis.
            */
            public get secondaryAxis(): UnityEngine.Vector3;
            public set secondaryAxis(value: UnityEngine.Vector3);
            /** Allow movement along the X axis to be Free, completely Locked, or Limited according to Linear Limit.
            */
            public get xMotion(): UnityEngine.ConfigurableJointMotion;
            public set xMotion(value: UnityEngine.ConfigurableJointMotion);
            /** Allow movement along the Y axis to be Free, completely Locked, or Limited according to Linear Limit.
            */
            public get yMotion(): UnityEngine.ConfigurableJointMotion;
            public set yMotion(value: UnityEngine.ConfigurableJointMotion);
            /** Allow movement along the Z axis to be Free, completely Locked, or Limited according to Linear Limit.
            */
            public get zMotion(): UnityEngine.ConfigurableJointMotion;
            public set zMotion(value: UnityEngine.ConfigurableJointMotion);
            /** Allow rotation around the X axis to be Free, completely Locked, or Limited according to Low and High Angular XLimit.
            */
            public get angularXMotion(): UnityEngine.ConfigurableJointMotion;
            public set angularXMotion(value: UnityEngine.ConfigurableJointMotion);
            /** Allow rotation around the Y axis to be Free, completely Locked, or Limited according to Angular YLimit.
            */
            public get angularYMotion(): UnityEngine.ConfigurableJointMotion;
            public set angularYMotion(value: UnityEngine.ConfigurableJointMotion);
            /** Allow rotation around the Z axis to be Free, completely Locked, or Limited according to Angular ZLimit.
            */
            public get angularZMotion(): UnityEngine.ConfigurableJointMotion;
            public set angularZMotion(value: UnityEngine.ConfigurableJointMotion);
            /** The configuration of the spring attached to the linear limit of the joint.
            */
            public get linearLimitSpring(): UnityEngine.SoftJointLimitSpring;
            public set linearLimitSpring(value: UnityEngine.SoftJointLimitSpring);
            /** The configuration of the spring attached to the angular X limit of the joint.
            */
            public get angularXLimitSpring(): UnityEngine.SoftJointLimitSpring;
            public set angularXLimitSpring(value: UnityEngine.SoftJointLimitSpring);
            /** The configuration of the spring attached to the angular Y and angular Z limits of the joint.
            */
            public get angularYZLimitSpring(): UnityEngine.SoftJointLimitSpring;
            public set angularYZLimitSpring(value: UnityEngine.SoftJointLimitSpring);
            /** Boundary defining movement restriction, based on distance from the joint's origin.
            */
            public get linearLimit(): UnityEngine.SoftJointLimit;
            public set linearLimit(value: UnityEngine.SoftJointLimit);
            /** Boundary defining lower rotation restriction, based on delta from original rotation.
            */
            public get lowAngularXLimit(): UnityEngine.SoftJointLimit;
            public set lowAngularXLimit(value: UnityEngine.SoftJointLimit);
            /** Boundary defining upper rotation restriction, based on delta from original rotation.
            */
            public get highAngularXLimit(): UnityEngine.SoftJointLimit;
            public set highAngularXLimit(value: UnityEngine.SoftJointLimit);
            /** Boundary defining rotation restriction, based on delta from original rotation.
            */
            public get angularYLimit(): UnityEngine.SoftJointLimit;
            public set angularYLimit(value: UnityEngine.SoftJointLimit);
            /** Boundary defining rotation restriction, based on delta from original rotation.
            */
            public get angularZLimit(): UnityEngine.SoftJointLimit;
            public set angularZLimit(value: UnityEngine.SoftJointLimit);
            /** The desired position that the joint should move into.
            */
            public get targetPosition(): UnityEngine.Vector3;
            public set targetPosition(value: UnityEngine.Vector3);
            /** The desired velocity that the joint should move along.
            */
            public get targetVelocity(): UnityEngine.Vector3;
            public set targetVelocity(value: UnityEngine.Vector3);
            /** Definition of how the joint's movement will behave along its local X axis.
            */
            public get xDrive(): UnityEngine.JointDrive;
            public set xDrive(value: UnityEngine.JointDrive);
            /** Definition of how the joint's movement will behave along its local Y axis.
            */
            public get yDrive(): UnityEngine.JointDrive;
            public set yDrive(value: UnityEngine.JointDrive);
            /** Definition of how the joint's movement will behave along its local Z axis.
            */
            public get zDrive(): UnityEngine.JointDrive;
            public set zDrive(value: UnityEngine.JointDrive);
            /** This is a Quaternion. It defines the desired rotation that the joint should rotate into.
            */
            public get targetRotation(): UnityEngine.Quaternion;
            public set targetRotation(value: UnityEngine.Quaternion);
            /** This is a Vector3. It defines the desired angular velocity that the joint should rotate into.
            */
            public get targetAngularVelocity(): UnityEngine.Vector3;
            public set targetAngularVelocity(value: UnityEngine.Vector3);
            /** Control the object's rotation with either X & YZ or Slerp Drive by itself.
            */
            public get rotationDriveMode(): UnityEngine.RotationDriveMode;
            public set rotationDriveMode(value: UnityEngine.RotationDriveMode);
            /** Definition of how the joint's rotation will behave around its local X axis. Only used if Rotation Drive Mode is Swing & Twist.
            */
            public get angularXDrive(): UnityEngine.JointDrive;
            public set angularXDrive(value: UnityEngine.JointDrive);
            /** Definition of how the joint's rotation will behave around its local Y and Z axes. Only used if Rotation Drive Mode is Swing & Twist.
            */
            public get angularYZDrive(): UnityEngine.JointDrive;
            public set angularYZDrive(value: UnityEngine.JointDrive);
            /** Definition of how the joint's rotation will behave around all local axes. Only used if Rotation Drive Mode is Slerp Only.
            */
            public get slerpDrive(): UnityEngine.JointDrive;
            public set slerpDrive(value: UnityEngine.JointDrive);
            /** Brings violated constraints back into alignment even when the solver fails. Projection is not a physical process and does not preserve momentum or respect collision geometry. It is best avoided if practical, but can be useful in improving simulation quality where joint separation results in unacceptable artifacts.
            */
            public get projectionMode(): UnityEngine.JointProjectionMode;
            public set projectionMode(value: UnityEngine.JointProjectionMode);
            /** Set the linear tolerance threshold for projection.
            If the joint separates by more than this distance along its locked degrees of freedom, the solver
            will move the bodies to close the distance.
            Setting a very small tolerance may result in simulation jitter or other artifacts.
            Sometimes it is not possible to project (for example when the joints form a cycle).
            */
            public get projectionDistance(): number;
            public set projectionDistance(value: number);
            /** Set the angular tolerance threshold (in degrees) for projection.
            If the joint deviates by more than this angle around its locked angular degrees of freedom,
            the solver will move the bodies to close the angle.
            Setting a very small tolerance may result in simulation jitter or other artifacts.
            Sometimes it is not possible to project (for example when the joints form a cycle).
            */
            public get projectionAngle(): number;
            public set projectionAngle(value: number);
            /** If enabled, all Target values will be calculated in world space instead of the object's local space.
            */
            public get configuredInWorldSpace(): boolean;
            public set configuredInWorldSpace(value: boolean);
            /** Enable this property to swap the order in which the physics engine processes the Rigidbodies involved in the joint. This results in different joint motion but has no impact on Rigidbodies and anchors.
            */
            public get swapBodies(): boolean;
            public set swapBodies(value: boolean);
            public constructor ()
        }
        /** A flag enum to determine which simulation stages to run.
        */
        enum SimulationStage
        { None = 0, PrepareSimulation = 1, RunSimulation = 2, PublishSimulationResults = 4, All = 7 }
        /** An enumerator that specifies physics simulation options.
        */
        enum SimulationOption
        { None = 0, SyncTransforms = 1, IgnoreEmptyScenes = 2, All = 3 }
        /** Scene extensions to access the underlying physics scene.
        */
        class PhysicsSceneExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** An extension method that returns the 3D physics Scene from the Scene.
            * @param $scene The Scene from which to return the 3D physics Scene.
            * @returns The 3D physics Scene used by the Scene. 
            */
            public static GetPhysicsScene ($scene: UnityEngine.SceneManagement.Scene) : UnityEngine.PhysicsScene
        }
        /** A pair of Colliders that belong to the bodies in the parent ContactPairHeader struct.
        */
        class ContactPair extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Instance ID of the first Collider in the ContactPair.
            */
            public get colliderInstanceID(): number;
            /** Instance ID of the second Collider in the ContactPair.
            */
            public get otherColliderInstanceID(): number;
            /** The first Collider component of the ContactPair.
            */
            public get collider(): UnityEngine.Collider;
            /** The second Collider component of the ContactPair.
            */
            public get otherCollider(): UnityEngine.Collider;
            /** The number of ContactPairPoints that this pair contains.
            */
            public get contactCount(): number;
            /** Total impulse sum of the pair.
            */
            public get impulseSum(): UnityEngine.Vector3;
            /** Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionEnter events.
            */
            public get isCollisionEnter(): boolean;
            /** Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionExit events.
            */
            public get isCollisionExit(): boolean;
            /** Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionStay events.
            */
            public get isCollisionStay(): boolean;
            public CopyToNativeArray ($buffer: Unity.Collections.NativeArray$1<UnityEngine.ContactPairPoint>) : void
            /** Gets the ContactPairPoint at the provided index of this pair.
            * @param $index The ContactPairPoint index.
            * @returns A reference or a copy of the ContactPairPoint struct at index. 
            */
            public GetContactPoint ($index: number) : $Ref<UnityEngine.ContactPairPoint>
            /** Get the index of a face that a particular contact point belongs to in this ContactPairPoint.
            * @param $contactIndex The ContactPairPoint index.
            * @returns Index of a face this contact point belongs to. 
            */
            public GetContactPointFaceIndex ($contactIndex: number) : number
        }
        /** A readonly struct describing a contact point between two Colliders.
        */
        class ContactPairPoint extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The position of the contact point between the Colliders, in world space.
            */
            public get position(): UnityEngine.Vector3;
            /** The distance between the edges of Colliders at the contact point.
            */
            public get separation(): number;
            /** Normal of the contact point.
            */
            public get normal(): UnityEngine.Vector3;
            /** The impulse applied to this contact pair to resolve the collision.
            */
            public get impulse(): UnityEngine.Vector3;
        }
        /** Creates a struct to set up parameters for batch queries: RaycastCommand, BoxcastCommand, CapsulecastCommand, SpherecastCommand.
        */
        class QueryParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** A LayerMask that is used to selectively ignore Colliders when casting a ray.
            */
            public layerMask : number
            /** Whether raycast batch query should hit multiple faces.
            */
            public hitMultipleFaces : boolean
            /** Whether queries hit Triggers by default.
            */
            public hitTriggers : UnityEngine.QueryTriggerInteraction
            /** Whether physics queries should hit back-face triangles.
            */
            public hitBackfaces : boolean
            /** Create a default QueryParameters struct.
            */
            public static get Default(): UnityEngine.QueryParameters;
            public constructor ($layerMask?: number, $hitMultipleFaces?: boolean, $hitTriggers?: UnityEngine.QueryTriggerInteraction, $hitBackfaces?: boolean)
        }
        /** Struct used to retrieve information from an Overlap batch query.
        */
        class ColliderHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The instance ID of the Collider that was hit.
            */
            public get instanceID(): number;
            /** The Collider that was hit.
            */
            public get collider(): UnityEngine.Collider;
        }
        /** Struct used to set up a raycast command to be performed asynchronously during a job.
        */
        class RaycastCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The starting point of the ray in world coordinates.
            */
            public get from(): UnityEngine.Vector3;
            public set from(value: UnityEngine.Vector3);
            /** The direction of the ray.
            */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            /** The maximum distance the ray should check for collisions.
            */
            public get distance(): number;
            public set distance(value: number);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.RaycastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.RaycastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $from: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
        }
        /** Use this struct to set up a sphere cast command that is performed asynchronously during a job.
        */
        class SpherecastCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The starting point of the sphere cast in world coordinates.
            */
            public get origin(): UnityEngine.Vector3;
            public set origin(value: UnityEngine.Vector3);
            /** The radius of the casting sphere.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The direction of the sphere cast.
            */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** The maximum distance the sphere should check for collisions.
            */
            public get distance(): number;
            public set distance(value: number);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.SpherecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.SpherecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
        }
        /** Use this struct to set up a capsule cast command that is performed asynchronously during a job.
        */
        class CapsulecastCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The center of the sphere at the start of the capsule.
            */
            public get point1(): UnityEngine.Vector3;
            public set point1(value: UnityEngine.Vector3);
            /** The center of the sphere at the end of the capsule.
            */
            public get point2(): UnityEngine.Vector3;
            public set point2(value: UnityEngine.Vector3);
            /** The radius of the capsule.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The direction of the capsule cast.
            */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** The maximum distance the capsule cast checks for collision.
            */
            public get distance(): number;
            public set distance(value: number);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.CapsulecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.CapsulecastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
        }
        /** Use this struct to set up a box cast command to be performed asynchronously during a job.
        */
        class BoxcastCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The center of the box.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The half size of the box in each dimension.
            */
            public get halfExtents(): UnityEngine.Vector3;
            public set halfExtents(value: UnityEngine.Vector3);
            /** The rotation of the box.
            */
            public get orientation(): UnityEngine.Quaternion;
            public set orientation(value: UnityEngine.Quaternion);
            /** The direction in which to sweep the box.
            */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** The maximum distance of the sweep.
            */
            public get distance(): number;
            public set distance(value: number);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.BoxcastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.BoxcastCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $direction: UnityEngine.Vector3, $queryParameters: UnityEngine.QueryParameters, $distance?: number)
        }
        /** Struct used to set up a closest point command to be performed asynchronously during a job.
        When you use this struct to schedule a batch of closest commands, they are performed asynchronously and in parallel to each other. The results of the closest points are written to the results buffer. Because the results are written asynchronously, the results buffer cannot be accessed until the job has been completed.
        The result for a command at index N in the command buffer is stored at index N in the results buffer.
        */
        class ClosestPointCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Location you want to find the closest point to.
            */
            public get point(): UnityEngine.Vector3;
            public set point(value: UnityEngine.Vector3);
            /** The ID of the Collider that you find the closest point on.
            */
            public get colliderInstanceID(): number;
            public set colliderInstanceID(value: number);
            /** The position of the Collider.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Collider.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The global scale of the Collider.
            */
            public get scale(): UnityEngine.Vector3;
            public set scale(value: UnityEngine.Vector3);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.ClosestPointCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.Vector3>, $minCommandsPerJob: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($point: UnityEngine.Vector3, $colliderInstanceID: number, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3)
            public constructor ($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3)
        }
        /** Struct used to setup an overlap sphere command to be performed asynchronously during a job.
        */
        class OverlapSphereCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The center of the sphere.
            */
            public get point(): UnityEngine.Vector3;
            public set point(value: UnityEngine.Vector3);
            /** The radius of the sphere.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The physics scene the command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapSphereCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($point: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $point: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters)
        }
        /** Struct used to set up an overlap box command to be performed asynchronously during a job.
        */
        class OverlapBoxCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The center of the box.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** Half of the size of the box in each dimension.
            */
            public get halfExtents(): UnityEngine.Vector3;
            public set halfExtents(value: UnityEngine.Vector3);
            /** The orientation of the box.
            */
            public get orientation(): UnityEngine.Quaternion;
            public set orientation(value: UnityEngine.Quaternion);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapBoxCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $queryParameters: UnityEngine.QueryParameters)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $queryParameters: UnityEngine.QueryParameters)
        }
        /** Struct used to set up an overlap capsule command to be performed asynchronously during a job.
        */
        class OverlapCapsuleCommand extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
            */
            public queryParameters : UnityEngine.QueryParameters
            /** The center of the sphere at the start of the capsule.
            */
            public get point0(): UnityEngine.Vector3;
            public set point0(value: UnityEngine.Vector3);
            /** The center of the sphere at the end of the capsule.
            */
            public get point1(): UnityEngine.Vector3;
            public set point1(value: UnityEngine.Vector3);
            /** The radius of the capsule.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The physics scene this command is run in.
            */
            public get physicsScene(): UnityEngine.PhysicsScene;
            public set physicsScene(value: UnityEngine.PhysicsScene);
            public static ScheduleBatch ($commands: Unity.Collections.NativeArray$1<UnityEngine.OverlapCapsuleCommand>, $results: Unity.Collections.NativeArray$1<UnityEngine.ColliderHit>, $minCommandsPerJob: number, $maxHits: number, $dependsOn?: Unity.Jobs.JobHandle) : Unity.Jobs.JobHandle
            public constructor ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters)
            public constructor ($physicsScene: UnityEngine.PhysicsScene, $point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $queryParameters: UnityEngine.QueryParameters)
        }
    }
    namespace UnityEngine.Physics {
        interface ContactEventDelegate
        { 
        (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) : void; 
        Invoke?: (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void;
        }
        var ContactEventDelegate: { new (func: (scene: UnityEngine.PhysicsScene, headerArray: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void): ContactEventDelegate; }
    }
    namespace UnityEngine.LowLevelPhysics {
        /** Holds the basic information of a geometric shape and its type.
        */
        class GeometryHolder extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Returns the type of the geometry shape that was saved previously.
            */
            public get Type(): UnityEngine.LowLevelPhysics.GeometryType;
            public constructor ()
        }
        /** A transform, containing a position and rotation.
        */
        class ImmediateTransform extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The world space rotation of the object.
            */
            public get Rotation(): UnityEngine.Quaternion;
            public set Rotation(value: UnityEngine.Quaternion);
            /** The world space position of the object.
            */
            public get Position(): UnityEngine.Vector3;
            public set Position(value: UnityEngine.Vector3);
        }
        /** Describes a contact where two shapes collide.
        */
        class ImmediateContact extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The normal of the contact point.
            */
            public get Normal(): UnityEngine.Vector3;
            public set Normal(value: UnityEngine.Vector3);
            /** The distance between the shapes at the contact point.
            */
            public get Separation(): number;
            public set Separation(value: number);
            /** The position of the contact point in world space.
            */
            public get Point(): UnityEngine.Vector3;
            public set Point(value: UnityEngine.Vector3);
        }
        /** This class contains methods to run the immediate simulation steps.
        */
        class ImmediatePhysics extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GenerateContacts ($geom1: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.LowLevelPhysics.GeometryHolder>, $geom2: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.LowLevelPhysics.GeometryHolder>, $xform1: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.LowLevelPhysics.ImmediateTransform>, $xform2: Unity.Collections.NativeArray$1.ReadOnly<UnityEngine.LowLevelPhysics.ImmediateTransform>, $pairCount: number, $outContacts: Unity.Collections.NativeArray$1<UnityEngine.LowLevelPhysics.ImmediateContact>, $outContactCounts: Unity.Collections.NativeArray$1<number>, $contactDistance?: number) : number
        }
        interface IGeometry
        {
            /** Return the geometry type of the shape that implemented this interface.
            */
            GeometryType : UnityEngine.LowLevelPhysics.GeometryType
        }
        /** The set of basic geometry shape types that can exist.
        */
        enum GeometryType
        { Sphere = 0, Capsule = 2, Box = 3, ConvexMesh = 4, TriangleMesh = 5, Terrain = 6, Invalid = -1 }
        /** Contains the basic geometric shape of a box.
        */
        class BoxGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** The half extents of the box shape.
            */
            public get HalfExtents(): UnityEngine.Vector3;
            public set HalfExtents(value: UnityEngine.Vector3);
            /** Returns the geometry type of this shape, which is BoxGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            public constructor ($halfExtents: UnityEngine.Vector3)
        }
        /** Contains the basic geometric shape of a sphere.
        */
        class SphereGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** The radius of the sphere shape.
            */
            public get Radius(): number;
            public set Radius(value: number);
            /** Returns the geometry type of this shape, which is SphereGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            public constructor ($radius: number)
        }
        /** Contains the basic geometric shape of a capsule.
        */
        class CapsuleGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** The radius of the half-sphere at either cap of the capsule.
            */
            public get Radius(): number;
            public set Radius(value: number);
            /** The distance from the center of the shape to the center of either half-sphere at the caps.
            */
            public get HalfLength(): number;
            public set HalfLength(value: number);
            /** Returns the geometry type of this shape, which is CapsuleGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
            public constructor ($radius: number, $halfLength: number)
        }
        /** Contains the basic geometric shape of a convex mesh.
        */
        class ConvexMeshGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** The scale of this geometry.
            */
            public get Scale(): UnityEngine.Vector3;
            public set Scale(value: UnityEngine.Vector3);
            /** The rotation of the scale axis of this geometry.
            */
            public get ScaleAxisRotation(): UnityEngine.Quaternion;
            public set ScaleAxisRotation(value: UnityEngine.Quaternion);
            /** Returns the geometry type of this shape, which is ConvexMeshGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
        }
        /** Contains the basic geometric shape of a non-convex mesh (sometimes known as a triangle mesh).
        */
        class TriangleMeshGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** The scale of this geometry.
            */
            public get Scale(): UnityEngine.Vector3;
            public set Scale(value: UnityEngine.Vector3);
            /** The rotation of the scale axis of this geometry.
            */
            public get ScaleAxisRotation(): UnityEngine.Quaternion;
            public set ScaleAxisRotation(value: UnityEngine.Quaternion);
            /** Returns the geometry type of this shape, which is TriangleMeshGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
        }
        /** Contains the geometric shape of a Terrain collider.
        */
        class TerrainGeometry extends System.ValueType implements UnityEngine.LowLevelPhysics.IGeometry
        {
            protected [__keep_incompatibility]: never;
            /** Returns the geometry type of this shape, which is TerrainGeometry.
            */
            public get GeometryType(): UnityEngine.LowLevelPhysics.GeometryType;
        }
    }
}
