
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
    namespace UnityEngine.Experimental.AI {
        /** Represents a compact identifier for the data of a NavMesh node.
        */
        class PolygonId extends System.ValueType implements System.IEquatable$1<UnityEngine.Experimental.AI.PolygonId>
        {
            protected [__keep_incompatibility]: never;
            /** Returns true if the PolygonId has been created empty and has never pointed to any node in the NavMesh.
            */
            public IsNull () : boolean
            public static op_Equality ($x: UnityEngine.Experimental.AI.PolygonId, $y: UnityEngine.Experimental.AI.PolygonId) : boolean
            public static op_Inequality ($x: UnityEngine.Experimental.AI.PolygonId, $y: UnityEngine.Experimental.AI.PolygonId) : boolean
            /** Returns true if two PolygonId objects refer to the same NavMesh node.
            */
            public Equals ($rhs: UnityEngine.Experimental.AI.PolygonId) : boolean
            /** Returns true if two PolygonId objects refer to the same NavMesh node.
            */
            public Equals ($obj: any) : boolean
        }
        /** A world position that is guaranteed to be on the surface of the NavMesh.
        */
        class NavMeshLocation extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Unique identifier for the node in the NavMesh to which the world position has been mapped.
            */
            public get polygon(): UnityEngine.Experimental.AI.PolygonId;
            /** A world position that sits precisely on the surface of the NavMesh or along its links.
            */
            public get position(): UnityEngine.Vector3;
        }
        /** Bit flags representing the resulting state of NavMeshQuery operations.
        */
        enum PathQueryStatus
        { Failure = -2147483648, Success = 1073741824, InProgress = 536870912, StatusDetailMask = 16777215, WrongMagic = 1, WrongVersion = 2, OutOfMemory = 4, InvalidParam = 8, BufferTooSmall = 16, OutOfNodes = 32, PartialResult = 64 }
        /** The types of nodes in the navigation data.
        */
        enum NavMeshPolyTypes
        { Ground = 0, OffMeshConnection = 1 }
        /** Assembles together a collection of NavMesh surfaces and links that are used as a whole for performing navigation operations.
        */
        class NavMeshWorld extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Returns true if the NavMeshWorld has been properly initialized.
            */
            public IsValid () : boolean
            /** Returns a reference to the single NavMeshWorld that can currently exist and be used in Unity.
            */
            public static GetDefaultWorld () : UnityEngine.Experimental.AI.NavMeshWorld
            /** Tells the NavMesh world to halt any changes until the specified job is completed.
            * @param $job The job that needs to be completed before the NavMesh world can be modified in any way.
            */
            public AddDependency ($job: Unity.Jobs.JobHandle) : void
        }
        /** Object used for doing navigation operations in a NavMeshWorld.
        */
        class NavMeshQuery extends System.ValueType implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            /** Destroys the NavMeshQuery and deallocates all memory used by it.
            */
            public Dispose () : void
            public BeginFindPath ($start: UnityEngine.Experimental.AI.NavMeshLocation, $end: UnityEngine.Experimental.AI.NavMeshLocation, $areaMask?: number, $costs?: Unity.Collections.NativeArray$1<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            /** Continues a path search that is in progress.
            * @param $iterations Maximum number of nodes to be traversed by the search algorithm during this call.
            * @param $iterationsPerformed Outputs the actual number of nodes that have been traversed during this call.
            * @returns InProgress if the search needs to continue further by calling UpdateFindPath again.
            Success if the search is completed and a path has been found or not.
            Failure if the search for the desired position could not be completed because the NavMesh has changed significantly since the search was initiated.
            Additionally the returned value can contain the OutOfNodes flag when the pathNodePoolSize parameter for the NavMeshQuery initialization was not large enough to accommodate the search space. 
            */
            public UpdateFindPath ($iterations: number, $iterationsPerformed: $Ref<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            /** Obtains the number of nodes in the path that has been computed during a successful NavMeshQuery.UpdateFindPath operation.
            * @param $pathSize A reference to an int which will be set to the number of NavMesh nodes in the found path.
            * @returns Success when the number of nodes in the path was retrieved correctly.
            PartialPath when a path was found but it falls short of the desired end location.
            Failure when the path size can not be evaluated because the preceding call to UpdateFindPath was not successful. 
            */
            public EndFindPath ($pathSize: $Ref<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            public GetPathResult ($path: Unity.Collections.NativeSlice$1<UnityEngine.Experimental.AI.PolygonId>) : number
            /** Returns true if the node referenced by the specified PolygonId is active in the NavMesh.
            * @param $polygon Identifier of the NavMesh node to be checked.
            */
            public IsValid ($polygon: UnityEngine.Experimental.AI.PolygonId) : boolean
            /** Returns true if the node referenced by the PolygonId contained in the NavMeshLocation is active in the NavMesh.
            * @param $location Location on the NavMesh to be checked. Same as checking location.polygon directly.
            */
            public IsValid ($location: UnityEngine.Experimental.AI.NavMeshLocation) : boolean
            /** Returns the identifier of the agent type the NavMesh was baked for or for which the link has been configured.
            * @param $polygon Identifier of a node from a NavMesh surface or link.
            * @returns Agent type identifier. 
            */
            public GetAgentTypeIdForPolygon ($polygon: UnityEngine.Experimental.AI.PolygonId) : number
            /** Returns a valid NavMeshLocation for a position and a polygon provided by the user.
            * @param $position World position of the NavMeshLocation to be created.
            * @param $polygon Valid identifier for the NavMesh node.
            * @returns Object containing the desired position and NavMesh node. 
            */
            public CreateLocation ($position: UnityEngine.Vector3, $polygon: UnityEngine.Experimental.AI.PolygonId) : UnityEngine.Experimental.AI.NavMeshLocation
            /** Finds the closest point and PolygonId on the NavMesh for a given world position.
            * @param $position World position for which the closest point on the NavMesh needs to be found.
            * @param $extents Maximum distance, from the specified position, expanding along all three axes, within which NavMesh surfaces are searched.
            * @param $agentTypeID Identifier for the agent type whose NavMesh surfaces should be selected for this operation. The Humanoid agent type exists for all NavMeshes and has an ID of 0. Other agent types can be defined manually through the Editor. A separate NavMesh surface needs to be baked for each agent type.
            * @param $areaMask Bitmask used to represent areas of the NavMesh that should (value of 1) or shouldn't (values of 0) be sampled. This parameter is optional and defaults to NavMesh.AllAreas if unspecified. Additional resources:.
            * @returns An object with position and valid PolygonId  - when a point on the NavMesh has been found.
            An invalid object - when no NavMesh surface with the desired features has been found within the search area. Additional resources: NavMeshQuery.IsValid. 
            */
            public MapLocation ($position: UnityEngine.Vector3, $extents: UnityEngine.Vector3, $agentTypeID: number, $areaMask?: number) : UnityEngine.Experimental.AI.NavMeshLocation
            public MoveLocations ($locations: Unity.Collections.NativeSlice$1<UnityEngine.Experimental.AI.NavMeshLocation>, $targets: Unity.Collections.NativeSlice$1<UnityEngine.Vector3>, $areaMasks: Unity.Collections.NativeSlice$1<number>) : void
            public MoveLocationsInSameAreas ($locations: Unity.Collections.NativeSlice$1<UnityEngine.Experimental.AI.NavMeshLocation>, $targets: Unity.Collections.NativeSlice$1<UnityEngine.Vector3>, $areaMask?: number) : void
            /** Translates a NavMesh location to another position without losing contact with the surface.
            * @param $location Position to be moved across the NavMesh surface.
            * @param $target World position you require the agent to move to.
            * @param $areaMask Bitmask with values of 1 set at the indices corresponding to areas that can be traversed, and with values of 0 for areas that should not be traversed. This parameter can be omitted, in which case it defaults to NavMesh.AllAreas. Additional resources:.
            * @returns A new location on the NavMesh placed as closely as possible to the specified target position.
            The start location is returned when that start is inside an area which is not allowed by the areaMask. 
            */
            public MoveLocation ($location: UnityEngine.Experimental.AI.NavMeshLocation, $target: UnityEngine.Vector3, $areaMask?: number) : UnityEngine.Experimental.AI.NavMeshLocation
            /** Obtains the end points of the line segment common to two adjacent NavMesh nodes.
            * @param $polygon First NavMesh node.
            * @param $neighbourPolygon Second NavMesh node.
            * @param $left One of the world points for the resulting separation edge which must be passed through when traversing between the two specified nodes. This point is the left side of the edge when traversing from the first node to the second.
            * @param $right One of the world points for the resulting separation edge which must be passed through when traversing between the two specified nodes. This point is the right side of the edge when traversing from the first node to the second.
            * @returns True if a connection exists between the two NavMesh nodes.
            False if no connection exists between the two NavMesh nodes. 
            */
            public GetPortalPoints ($polygon: UnityEngine.Experimental.AI.PolygonId, $neighbourPolygon: UnityEngine.Experimental.AI.PolygonId, $left: $Ref<UnityEngine.Vector3>, $right: $Ref<UnityEngine.Vector3>) : boolean
            /** Returns the transformation matrix of the NavMesh surface that contains the specified NavMesh node (Read Only).
            * @param $polygon NavMesh node for which its owner's transform must be determined.
            * @returns Transformation matrix for the surface owning the specified polygon.
            Matrix4x4.identity when the NavMesh node is a. 
            */
            public PolygonLocalToWorldMatrix ($polygon: UnityEngine.Experimental.AI.PolygonId) : UnityEngine.Matrix4x4
            /** Returns the inverse transformation matrix of the NavMesh surface that contains the specified NavMesh node (Read Only).
            * @param $polygon NavMesh node for which its owner's inverse transform must be determined.
            * @returns Inverse transformation matrix of the surface owning the specified polygon.
            Matrix4x4.identity when the NavMesh node is a. 
            */
            public PolygonWorldToLocalMatrix ($polygon: UnityEngine.Experimental.AI.PolygonId) : UnityEngine.Matrix4x4
            /** Returns whether the NavMesh node is a polygon or a link.
            * @param $polygon Identifier of a node from a NavMesh surface or link.
            * @returns Ground when the node is a polygon on a NavMesh surface.
            OffMeshConnection when the node is a. 
            */
            public GetPolygonType ($polygon: UnityEngine.Experimental.AI.PolygonId) : UnityEngine.Experimental.AI.NavMeshPolyTypes
            public Raycast ($hit: $Ref<UnityEngine.AI.NavMeshHit>, $start: UnityEngine.Experimental.AI.NavMeshLocation, $targetPosition: UnityEngine.Vector3, $areaMask?: number, $costs?: Unity.Collections.NativeArray$1<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            public Raycast ($hit: $Ref<UnityEngine.AI.NavMeshHit>, $path: Unity.Collections.NativeSlice$1<UnityEngine.Experimental.AI.PolygonId>, $pathCount: $Ref<number>, $start: UnityEngine.Experimental.AI.NavMeshLocation, $targetPosition: UnityEngine.Vector3, $areaMask?: number, $costs?: Unity.Collections.NativeArray$1<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            public GetEdgesAndNeighbors ($node: UnityEngine.Experimental.AI.PolygonId, $edgeVertices: Unity.Collections.NativeSlice$1<UnityEngine.Vector3>, $neighbors: Unity.Collections.NativeSlice$1<UnityEngine.Experimental.AI.PolygonId>, $edgeIndices: Unity.Collections.NativeSlice$1<number>, $verticesCount: $Ref<number>, $neighborsCount: $Ref<number>) : UnityEngine.Experimental.AI.PathQueryStatus
            public constructor ($world: UnityEngine.Experimental.AI.NavMeshWorld, $allocator: Unity.Collections.Allocator, $pathNodePoolSize?: number)
        }
    }
    namespace UnityEngine.AI {
        /** Result information for NavMesh queries.
        */
        class NavMeshHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Position of hit.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Normal at the point of hit.
            */
            public get normal(): UnityEngine.Vector3;
            public set normal(value: UnityEngine.Vector3);
            /** Distance to the point of hit.
            */
            public get distance(): number;
            public set distance(value: number);
            /** Mask specifying NavMesh area at point of hit.
            */
            public get mask(): number;
            public set mask(value: number);
            /** Flag set when hit.
            */
            public get hit(): boolean;
            public set hit(value: boolean);
        }
        class NavMeshBuilder extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CollectSources ($includedWorldBounds: UnityEngine.Bounds, $includedLayerMask: number, $geometry: UnityEngine.AI.NavMeshCollectGeometry, $defaultArea: number, $generateLinksByDefault: boolean, $markups: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildMarkup>, $includeOnlyMarkedObjects: boolean, $results: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>) : void
            public static CollectSources ($includedWorldBounds: UnityEngine.Bounds, $includedLayerMask: number, $geometry: UnityEngine.AI.NavMeshCollectGeometry, $defaultArea: number, $markups: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildMarkup>, $results: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>) : void
            public static CollectSources ($root: UnityEngine.Transform, $includedLayerMask: number, $geometry: UnityEngine.AI.NavMeshCollectGeometry, $defaultArea: number, $generateLinksByDefault: boolean, $markups: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildMarkup>, $includeOnlyMarkedObjects: boolean, $results: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>) : void
            public static CollectSources ($root: UnityEngine.Transform, $includedLayerMask: number, $geometry: UnityEngine.AI.NavMeshCollectGeometry, $defaultArea: number, $markups: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildMarkup>, $results: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>) : void
            public static BuildNavMeshData ($buildSettings: UnityEngine.AI.NavMeshBuildSettings, $sources: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>, $localBounds: UnityEngine.Bounds, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AI.NavMeshData
            public static UpdateNavMeshData ($data: UnityEngine.AI.NavMeshData, $buildSettings: UnityEngine.AI.NavMeshBuildSettings, $sources: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>, $localBounds: UnityEngine.Bounds) : boolean
            public static UpdateNavMeshDataAsync ($data: UnityEngine.AI.NavMeshData, $buildSettings: UnityEngine.AI.NavMeshBuildSettings, $sources: System.Collections.Generic.List$1<UnityEngine.AI.NavMeshBuildSource>, $localBounds: UnityEngine.Bounds) : UnityEngine.AsyncOperation
            public static Cancel ($data: UnityEngine.AI.NavMeshData) : void
        }
        /** Used for specifying the type of geometry to collect. Used with NavMeshBuilder.CollectSources.
        */
        enum NavMeshCollectGeometry
        { RenderMeshes = 0, PhysicsColliders = 1 }
        /** The NavMesh build markup allows you to control how certain objects are treated during the NavMesh build process, specifically when collecting sources for building.
        */
        class NavMeshBuildMarkup extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Use this to specify whether the area type of the GameObject and its children should be overridden by the area type specified in this struct.
            */
            public get overrideArea(): boolean;
            public set overrideArea(value: boolean);
            /** The area type to use when override area is enabled.
            */
            public get area(): number;
            public set area(value: number);
            /** Set this to true in order to enable the ignoreFromBuild property.
            */
            public get overrideIgnore(): boolean;
            public set overrideIgnore(value: boolean);
            /** Use this to specify whether the GameObject and its children should be ignored.
            */
            public get ignoreFromBuild(): boolean;
            public set ignoreFromBuild(value: boolean);
            /** Use this to specify whether the default links generation condition for the GameObject and its children should be overridden by the generateLinks option specified in this struct.
            */
            public get overrideGenerateLinks(): boolean;
            public set overrideGenerateLinks(value: boolean);
            /** Use this to specify whether the GameObject and its children should be included in the link generation process.
            */
            public get generateLinks(): boolean;
            public set generateLinks(value: boolean);
            /** Use this to specify if the GameObject's children also use these markup settings.
            */
            public get applyToChildren(): boolean;
            public set applyToChildren(value: boolean);
            /** Use this to specify which GameObject (including the GameObject’s children) the markup should be applied to.
            */
            public get root(): UnityEngine.Transform;
            public set root(value: UnityEngine.Transform);
        }
        /** The input to the NavMesh builder is a list of NavMesh build sources.
        */
        class NavMeshBuildSource extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Describes the local to world transformation matrix of the build source. That is, position and orientation and scale of the shape.
            */
            public get transform(): UnityEngine.Matrix4x4;
            public set transform(value: UnityEngine.Matrix4x4);
            /** Describes the dimensions of the shape.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            /** The type of the shape this source describes. Additional resources: NavMeshBuildSourceShape.
            */
            public get shape(): UnityEngine.AI.NavMeshBuildSourceShape;
            public set shape(value: UnityEngine.AI.NavMeshBuildSourceShape);
            /** Describes the area type of the NavMesh surface for this object.
            */
            public get area(): number;
            public set area(value: number);
            /** Enables the links generation for this object.
            */
            public get generateLinks(): boolean;
            public set generateLinks(value: boolean);
            /** Describes the object referenced for Mesh and Terrain types of input sources.
            */
            public get sourceObject(): UnityEngine.Object;
            public set sourceObject(value: UnityEngine.Object);
            /** Points to the owning component - if available, otherwise null.
            */
            public get component(): UnityEngine.Component;
            public set component(value: UnityEngine.Component);
        }
        /** Contains and represents NavMesh data.
        */
        class NavMeshData extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns the bounding volume of the input geometry used to build this NavMesh (Read Only).
            */
            public get sourceBounds(): UnityEngine.Bounds;
            /** Gets or sets the world space position of the NavMesh data.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Gets or sets the orientation of the NavMesh data.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            public constructor ()
            public constructor ($agentTypeID: number)
        }
        /** The NavMeshBuildSettings struct allows you to specify a collection of settings which describe the dimensions and limitations of a particular agent type.
        */
        class NavMeshBuildSettings extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The agent type ID the NavMesh will be baked for.
            */
            public get agentTypeID(): number;
            public set agentTypeID(value: number);
            /** The radius of the agent for baking in world units.
            */
            public get agentRadius(): number;
            public set agentRadius(value: number);
            /** The height of the agent for baking in world units.
            */
            public get agentHeight(): number;
            public set agentHeight(value: number);
            /** The maximum slope angle which is walkable (angle in degrees).
            */
            public get agentSlope(): number;
            public set agentSlope(value: number);
            /** The maximum vertical step size an agent can take.
            */
            public get agentClimb(): number;
            public set agentClimb(value: number);
            /** Maximum agent drop height.
            */
            public get ledgeDropHeight(): number;
            public set ledgeDropHeight(value: number);
            /** Maximum agent jump distance.
            */
            public get maxJumpAcrossDistance(): number;
            public set maxJumpAcrossDistance(value: number);
            /** The approximate minimum area of individual NavMesh regions.
            */
            public get minRegionArea(): number;
            public set minRegionArea(value: number);
            /** Enables overriding the default voxel size. Additional resources: voxelSize.
            */
            public get overrideVoxelSize(): boolean;
            public set overrideVoxelSize(value: boolean);
            /** Sets the voxel size in world length units.
            */
            public get voxelSize(): number;
            public set voxelSize(value: number);
            /** Enables overriding the default tile size. Additional resources: tileSize.
            */
            public get overrideTileSize(): boolean;
            public set overrideTileSize(value: boolean);
            /** Sets the tile size in voxel units.
            */
            public get tileSize(): number;
            public set tileSize(value: number);
            /** The maximum number of worker threads that the build process can utilize when building a NavMesh with these settings.
            */
            public get maxJobWorkers(): number;
            public set maxJobWorkers(value: number);
            public get preserveTilesOutsideBounds(): boolean;
            public set preserveTilesOutsideBounds(value: boolean);
            /** Enables the creation of additional data needed to determine the height at any position on the NavMesh more accurately.
            */
            public get buildHeightMesh(): boolean;
            public set buildHeightMesh(value: boolean);
            /** Options for collecting debug data during the build process.
            */
            public get debug(): UnityEngine.AI.NavMeshBuildDebugSettings;
            public set debug(value: UnityEngine.AI.NavMeshBuildDebugSettings);
            /** Validates the properties of NavMeshBuildSettings.
            * @param $buildBounds Describes the volume to build NavMesh for.
            * @returns The list of violated constraints. 
            */
            public ValidationReport ($buildBounds: UnityEngine.Bounds) : System.Array$1<string>
        }
        /** Level of obstacle avoidance.
        */
        enum ObstacleAvoidanceType
        { NoObstacleAvoidance = 0, LowQualityObstacleAvoidance = 1, MedQualityObstacleAvoidance = 2, GoodQualityObstacleAvoidance = 3, HighQualityObstacleAvoidance = 4 }
        /** Navigation mesh agent.
        */
        class NavMeshAgent extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Gets or attempts to set the destination of the agent in world-space units.
            */
            public get destination(): UnityEngine.Vector3;
            public set destination(value: UnityEngine.Vector3);
            /** Stop within this distance from the target position.
            */
            public get stoppingDistance(): number;
            public set stoppingDistance(value: number);
            /** Access the current velocity of the NavMeshAgent component, or set a velocity to control the agent manually.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** Gets or sets the simulation position of the navmesh agent.
            */
            public get nextPosition(): UnityEngine.Vector3;
            public set nextPosition(value: UnityEngine.Vector3);
            /** Get the current steering target along the path. (Read Only)
            */
            public get steeringTarget(): UnityEngine.Vector3;
            /** The desired velocity of the agent including any potential contribution from avoidance. (Read Only)
            */
            public get desiredVelocity(): UnityEngine.Vector3;
            /** The distance between the agent's position and the destination on the current path. (Read Only)
            */
            public get remainingDistance(): number;
            /** The relative vertical displacement of the owning GameObject.
            */
            public get baseOffset(): number;
            public set baseOffset(value: number);
            /** Is the agent currently positioned on an OffMeshLink? (Read Only)
            */
            public get isOnOffMeshLink(): boolean;
            /** The current OffMeshLinkData.
            */
            public get currentOffMeshLinkData(): UnityEngine.AI.OffMeshLinkData;
            /** The next OffMeshLinkData on the current path.
            */
            public get nextOffMeshLinkData(): UnityEngine.AI.OffMeshLinkData;
            /** Should the agent move across OffMeshLinks automatically?
            */
            public get autoTraverseOffMeshLink(): boolean;
            public set autoTraverseOffMeshLink(value: boolean);
            /** Should the agent brake automatically to avoid overshooting the destination point?
            */
            public get autoBraking(): boolean;
            public set autoBraking(value: boolean);
            /** Should the agent attempt to acquire a new path if the existing path becomes invalid?
            */
            public get autoRepath(): boolean;
            public set autoRepath(value: boolean);
            /** Does the agent currently have a path? (Read Only)
            */
            public get hasPath(): boolean;
            /** Is a path in the process of being computed but not yet ready? (Read Only)
            */
            public get pathPending(): boolean;
            /** Is the current path stale. (Read Only)
            */
            public get isPathStale(): boolean;
            /** The status of the current path (complete, partial or invalid).
            */
            public get pathStatus(): UnityEngine.AI.NavMeshPathStatus;
            public get pathEndPosition(): UnityEngine.Vector3;
            /** This property holds the stop or resume condition of the NavMesh agent.
            */
            public get isStopped(): boolean;
            public set isStopped(value: boolean);
            /** Property to get and set the current path.
            */
            public get path(): UnityEngine.AI.NavMeshPath;
            public set path(value: UnityEngine.AI.NavMeshPath);
            /** Returns the owning object of the NavMesh the agent is currently placed on (Read Only).
            */
            public get navMeshOwner(): UnityEngine.Object;
            /** The type ID for the agent.
            */
            public get agentTypeID(): number;
            public set agentTypeID(value: number);
            /** Specifies which NavMesh areas are passable. Changing areaMask will make the path stale (see isPathStale).
            */
            public get areaMask(): number;
            public set areaMask(value: number);
            /** Maximum movement speed when following a path.
            */
            public get speed(): number;
            public set speed(value: number);
            /** Maximum turning speed in (deg/s) while following a path.
            */
            public get angularSpeed(): number;
            public set angularSpeed(value: number);
            /** The maximum acceleration of an agent as it follows a path, given in units / sec^2.
            */
            public get acceleration(): number;
            public set acceleration(value: number);
            /** Gets or sets whether the transform position is synchronized with the simulated agent position. The default value is true.
            */
            public get updatePosition(): boolean;
            public set updatePosition(value: boolean);
            /** Should the agent update the transform orientation?
            */
            public get updateRotation(): boolean;
            public set updateRotation(value: boolean);
            /** Allows you to specify whether the agent should be aligned to the up-axis of the NavMesh or link that it is placed on.
            */
            public get updateUpAxis(): boolean;
            public set updateUpAxis(value: boolean);
            /** The avoidance radius for the agent.
            */
            public get radius(): number;
            public set radius(value: number);
            /** The height of the agent for purposes of passing under obstacles, etc.
            */
            public get height(): number;
            public set height(value: number);
            /** The level of quality of avoidance.
            */
            public get obstacleAvoidanceType(): UnityEngine.AI.ObstacleAvoidanceType;
            public set obstacleAvoidanceType(value: UnityEngine.AI.ObstacleAvoidanceType);
            /** The avoidance priority level.
            */
            public get avoidancePriority(): number;
            public set avoidancePriority(value: number);
            /** Is the agent currently bound to the navmesh? (Read Only)
            */
            public get isOnNavMesh(): boolean;
            /** Sets or updates the destination thus triggering the calculation for a new path.
            * @param $target The target point to navigate to.
            * @returns True if the destination was requested successfully, otherwise false. 
            */
            public SetDestination ($target: UnityEngine.Vector3) : boolean
            /** Enables or disables the current off-mesh link.
            * @param $activated Is the link activated?
            */
            public ActivateCurrentOffMeshLink ($activated: boolean) : void
            /** Completes the movement on the current OffMeshLink.
            */
            public CompleteOffMeshLink () : void
            /** Warps agent to the provided position.
            * @param $newPosition New position to warp the agent to.
            * @returns True if agent is successfully warped, otherwise false. 
            */
            public Warp ($newPosition: UnityEngine.Vector3) : boolean
            /** Apply relative movement to current position.
            * @param $offset The relative movement vector.
            */
            public Move ($offset: UnityEngine.Vector3) : void
            /** Clears the current path.
            */
            public ResetPath () : void
            /** Assign a new path to this agent.
            * @param $path New path to follow.
            * @returns True if the path is succesfully assigned. 
            */
            public SetPath ($path: UnityEngine.AI.NavMeshPath) : boolean
            /** Locate the closest NavMesh edge.
            * @param $hit Holds the properties of the resulting location.
            * @returns True if a nearest edge is found. 
            */
            public FindClosestEdge ($hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
            /** Trace a straight path towards a target postion in the NavMesh without moving the agent.
            * @param $targetPosition The desired end position of movement.
            * @param $hit Properties of the obstacle detected by the ray (if any).
            * @returns True if there is an obstacle between the agent and the target position, otherwise false. 
            */
            public Raycast ($targetPosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
            /** Calculate a path to a specified point and store the resulting path.
            * @param $targetPosition The final position of the path requested.
            * @param $path The resulting path.
            * @returns True if either a complete or partial path is found. False otherwise. 
            */
            public CalculatePath ($targetPosition: UnityEngine.Vector3, $path: UnityEngine.AI.NavMeshPath) : boolean
            /** Sample a position along the current path.
            * @param $areaMask A bitfield mask specifying which NavMesh areas can be passed when tracing the path.
            * @param $maxDistance Terminate scanning the path at this distance.
            * @param $hit Holds the properties of the resulting location.
            * @returns True if terminated before reaching the position at maxDistance, false otherwise. 
            */
            public SamplePathPosition ($areaMask: number, $maxDistance: number, $hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
            /** Sets the cost for traversing over areas of the area type.
            * @param $areaIndex Area cost.
            * @param $areaCost New cost for the specified area index.
            */
            public SetAreaCost ($areaIndex: number, $areaCost: number) : void
            /** Gets the cost for path calculation when crossing area of a particular type.
            * @param $areaIndex Area Index.
            * @returns Current cost for specified area index. 
            */
            public GetAreaCost ($areaIndex: number) : number
            public constructor ()
        }
        /** State of OffMeshLink.
        */
        class OffMeshLinkData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Is link valid (Read Only).
            */
            public get valid(): boolean;
            /** Is link active (Read Only).
            */
            public get activated(): boolean;
            /** Link type specifier (Read Only).
            */
            public get linkType(): UnityEngine.AI.OffMeshLinkType;
            /** Link start world position (Read Only).
            */
            public get startPos(): UnityEngine.Vector3;
            /** Link end world position (Read Only).
            */
            public get endPos(): UnityEngine.Vector3;
            /** Get the object used to create the NavMesh link represented by the data in this struct.
            */
            public get owner(): UnityEngine.Object;
        }
        /** Status of path.
        */
        enum NavMeshPathStatus
        { PathComplete = 0, PathPartial = 1, PathInvalid = 2 }
        /** A path as calculated by the navigation system.
        */
        class NavMeshPath extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Corner points of the path. (Read Only)
            */
            public get corners(): System.Array$1<UnityEngine.Vector3>;
            /** Status of the path. (Read Only)
            */
            public get status(): UnityEngine.AI.NavMeshPathStatus;
            /** Calculate the corners for the path.
            * @param $results Array to store path corners.
            * @returns The number of corners along the path - including start and end points. 
            */
            public GetCornersNonAlloc ($results: System.Array$1<UnityEngine.Vector3>) : number
            /** Erase all corner points from path.
            */
            public ClearCorners () : void
            public constructor ()
        }
        /** Shape of the obstacle.
        */
        enum NavMeshObstacleShape
        { Capsule = 0, Box = 1 }
        /** An obstacle for NavMeshAgents to avoid.
        */
        class NavMeshObstacle extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Height of the obstacle's cylinder shape.
            */
            public get height(): number;
            public set height(value: number);
            /** Radius of the obstacle's capsule shape.
            */
            public get radius(): number;
            public set radius(value: number);
            /** Velocity at which the obstacle moves around the NavMesh.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** Should this obstacle make a cut-out in the navmesh.
            */
            public get carving(): boolean;
            public set carving(value: boolean);
            /** Should this obstacle be carved when it is constantly moving?
            */
            public get carveOnlyStationary(): boolean;
            public set carveOnlyStationary(value: boolean);
            /** Threshold distance for updating a moving carved hole (when carving is enabled).
            */
            public get carvingMoveThreshold(): number;
            public set carvingMoveThreshold(value: number);
            /** Time to wait until obstacle is treated as stationary (when carving and carveOnlyStationary are enabled).
            */
            public get carvingTimeToStationary(): number;
            public set carvingTimeToStationary(value: number);
            /** The shape of the obstacle.
            */
            public get shape(): UnityEngine.AI.NavMeshObstacleShape;
            public set shape(value: UnityEngine.AI.NavMeshObstacleShape);
            /** The center of the obstacle, measured in the object's local space.
            */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The size of the obstacle, measured in the object's local space.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            public constructor ()
        }
        /** Link type specifier.
        */
        enum OffMeshLinkType
        { LinkTypeManual = 0, LinkTypeDropDown = 1, LinkTypeJumpAcross = 2 }
        /** Link allowing movement outside the planar navigation mesh.
        */
        class OffMeshLink extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        /** Contains data describing a triangulation of a navmesh.
        */
        class NavMeshTriangulation extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Vertices for the navmesh triangulation.
            */
            public vertices : System.Array$1<UnityEngine.Vector3>
            /** Triangle indices for the navmesh triangulation.
            */
            public indices : System.Array$1<number>
            /** NavMesh area indices for the navmesh triangulation.
            */
            public areas : System.Array$1<number>
        }
        /** The instance is returned when adding NavMesh data.
        */
        class NavMeshDataInstance extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** True if the NavMesh data is added to the navigation system - otherwise false (Read Only).
            */
            public get valid(): boolean;
            /** Get or set the owning Object.
            */
            public get owner(): UnityEngine.Object;
            public set owner(value: UnityEngine.Object);
            /** Removes this instance from the NavMesh system.
            */
            public Remove () : void
        }
        /** Used for runtime manipulation of links connecting polygons of the NavMesh.
        */
        class NavMeshLinkData extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Start position of the link.
            */
            public get startPosition(): UnityEngine.Vector3;
            public set startPosition(value: UnityEngine.Vector3);
            /** End position of the link.
            */
            public get endPosition(): UnityEngine.Vector3;
            public set endPosition(value: UnityEngine.Vector3);
            /** If positive, overrides the pathfinder cost to traverse the link.
            */
            public get costModifier(): number;
            public set costModifier(value: number);
            /** If true, the link can be traversed in both directions, otherwise only from start to end position.
            */
            public get bidirectional(): boolean;
            public set bidirectional(value: boolean);
            /** If positive, the link will be rectangle aligned along the line from start to end.
            */
            public get width(): number;
            public set width(value: number);
            /** Area type of the link.
            */
            public get area(): number;
            public set area(value: number);
            /** Specifies which agent type this link is available for.
            */
            public get agentTypeID(): number;
            public set agentTypeID(value: number);
        }
        /** Represents a link available for pathfinding.
        */
        class NavMeshLinkInstance extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Specifies which agent type and areas to consider when searching the NavMesh.
        */
        class NavMeshQueryFilter extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** A bitmask representing the traversable area types.
            */
            public get areaMask(): number;
            public set areaMask(value: number);
            /** The agent type ID, specifying which navigation meshes to consider for the query functions.
            */
            public get agentTypeID(): number;
            public set agentTypeID(value: number);
            /** Returns the area cost multiplier for the given area type for this filter.
            * @param $areaIndex Index to retreive the cost for.
            * @returns The cost multiplier for the supplied area index. 
            */
            public GetAreaCost ($areaIndex: number) : number
            /** Sets the pathfinding cost multiplier for this filter for a given area type.
            * @param $areaIndex The area index to set the cost for.
            * @param $cost The cost for the supplied area index.
            */
            public SetAreaCost ($areaIndex: number, $cost: number) : void
        }
        /** Singleton class to access the baked NavMesh.
        */
        class NavMesh extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Area mask constant that includes all NavMesh areas.
            */
            public static AllAreas : number
            /** Set a function to be called before the NavMesh is updated during the frame update execution.
            */
            public static onPreUpdate : UnityEngine.AI.NavMesh.OnNavMeshPreUpdate
            /** Describes how far in the future the agents predict collisions for avoidance.
            */
            public static get avoidancePredictionTime(): number;
            public static set avoidancePredictionTime(value: number);
            /** The maximum number of nodes processed for each frame during the asynchronous pathfinding process.
            */
            public static get pathfindingIterationsPerFrame(): number;
            public static set pathfindingIterationsPerFrame(value: number);
            /** Trace a line between two points on the NavMesh.
            * @param $sourcePosition The origin of the ray.
            * @param $targetPosition The end of the ray.
            * @param $hit Holds the properties of the ray cast resulting location.
            * @param $areaMask A bitfield mask specifying which NavMesh areas can be passed when tracing the ray.
            * @returns True if the ray is terminated before reaching target position. Otherwise returns false. 
            */
            public static Raycast ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $areaMask: number) : boolean
            /** Calculate a path between two points and store the resulting path.
            * @param $sourcePosition The initial position of the path requested.
            * @param $targetPosition The final position of the path requested.
            * @param $areaMask A bitfield mask specifying which NavMesh areas can be passed when calculating a path.
            * @param $path The resulting path.
            * @returns True if either a complete or partial path is found. False otherwise. 
            */
            public static CalculatePath ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $areaMask: number, $path: UnityEngine.AI.NavMeshPath) : boolean
            /** Locate the closest NavMesh edge from a point on the NavMesh.
            * @param $sourcePosition The origin of the distance query.
            * @param $hit Holds the properties of the resulting location.
            * @param $areaMask A bitfield mask specifying which NavMesh areas can be passed when finding the nearest edge.
            * @returns True if the nearest edge is found. 
            */
            public static FindClosestEdge ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $areaMask: number) : boolean
            /** Finds the nearest point based on the NavMesh within a specified range.
            * @param $sourcePosition The origin of the sample query.
            * @param $hit Holds the properties of the resulting location. The value of hit.normal is never computed. It is always (0,0,0).
            * @param $maxDistance Sample within this distance from sourcePosition.
            * @param $areaMask A mask that specifies the NavMesh areas allowed when finding the nearest point.
            * @returns True if the nearest point is found. 
            */
            public static SamplePosition ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $maxDistance: number, $areaMask: number) : boolean
            /** Sets the cost for finding path over geometry of the area type on all agents.
            * @param $areaIndex Index of the area to set.
            * @param $cost New cost.
            */
            public static SetAreaCost ($areaIndex: number, $cost: number) : void
            /** Gets the cost for path finding over geometry of the area type.
            * @param $areaIndex Index of the area to get.
            */
            public static GetAreaCost ($areaIndex: number) : number
            /** Returns the area index for a named NavMesh area type.
            * @param $areaName Name of the area to look up.
            * @returns Index if the specified are, or -1 if no area found. 
            */
            public static GetAreaFromName ($areaName: string) : number
            /** Calculates triangulation of the current navmesh.
            */
            public static CalculateTriangulation () : UnityEngine.AI.NavMeshTriangulation
            /** Adds the specified NavMeshData to the game.
            * @param $navMeshData Contains the data for the navmesh.
            * @returns Representing the added navmesh. 
            */
            public static AddNavMeshData ($navMeshData: UnityEngine.AI.NavMeshData) : UnityEngine.AI.NavMeshDataInstance
            /** Adds the specified NavMeshData to the game.
            * @param $navMeshData Contains the data for the navmesh.
            * @param $position Translate the navmesh to this position.
            * @param $rotation Rotate the navmesh to this orientation.
            * @returns Representing the added navmesh. 
            */
            public static AddNavMeshData ($navMeshData: UnityEngine.AI.NavMeshData, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AI.NavMeshDataInstance
            /** Removes the specified NavMeshDataInstance from the game, making it unavailable for agents and queries.
            * @param $handle The instance of a NavMesh to remove.
            */
            public static RemoveNavMeshData ($handle: UnityEngine.AI.NavMeshDataInstance) : void
            /** Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.
            * @param $link Object that describes the properties of the link.
            * @returns Object that identifies the added link. 
            */
            public static AddLink ($link: UnityEngine.AI.NavMeshLinkData) : UnityEngine.AI.NavMeshLinkInstance
            /** Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.
            * @param $link Object that describes the properties of the link.
            * @param $position Translate the link to this position.
            * @param $rotation Rotate the link to this orientation.
            * @returns Object that identifies the added link. 
            */
            public static AddLink ($link: UnityEngine.AI.NavMeshLinkData, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.AI.NavMeshLinkInstance
            /** Removes a link from the NavMesh.
            * @param $handle The instance of a link to remove.
            */
            public static RemoveLink ($handle: UnityEngine.AI.NavMeshLinkInstance) : void
            /** Determines whether the instance of the link can be used to NavMesh.CalculatePath|calculate paths, and if NavMesh agents can move over it.
            * @param $handle The link instance whose state to query.
            * @returns True if agents can plan paths through, and traverse, this instance of the link, otherwise false. 
            */
            public static IsLinkActive ($handle: UnityEngine.AI.NavMeshLinkInstance) : boolean
            /** Activates or deactivates the link instance. An active link instance can be traversed by agents and used to plan paths, but a deactivated link cannot.
            * @param $handle The link instance whose active state to modify.
            * @param $value Whether agents can plan paths through, and traverse, the link. When the value is true, agents can plan paths through, and traverse, the link. Otherwise, no paths can use the link instance.
            */
            public static SetLinkActive ($handle: UnityEngine.AI.NavMeshLinkInstance, $value: boolean) : void
            /** Determines whether or not a NavMesh agent is currently using this link.
            * @param $handle The link instance whose state to query.
            * @returns True if an agent is currently traversing the link, otherwise false. 
            */
            public static IsLinkOccupied ($handle: UnityEngine.AI.NavMeshLinkInstance) : boolean
            /** Determines whether the link instance is part of the current data used for navigation.
            * @param $handle The identifier of the link instance to check.
            * @returns True if the NavMesh link is added to the navigation system - otherwise false. 
            */
            public static IsLinkValid ($handle: UnityEngine.AI.NavMeshLinkInstance) : boolean
            /** Gets the object, if any, that is associated with the link instance.
            * @param $handle The identifier of the link instance whose owner needs to be retrieved.
            * @returns The object that was passed into SetLinkOwner for the specified link instance.
            Returns null when no owner object has been assigned or when the link instance is not valid. 
            */
            public static GetLinkOwner ($handle: UnityEngine.AI.NavMeshLinkInstance) : UnityEngine.Object
            /** Associates an object with the instance of a link.
            * @param $handle The identifier of the link instance for which you assign an owner.
            * @param $owner An object that carries useful information in relation to the instance of the link.
            */
            public static SetLinkOwner ($handle: UnityEngine.AI.NavMeshLinkInstance, $owner: UnityEngine.Object) : void
            /** Samples the position nearest the sourcePosition on any NavMesh built for the agent type specified by the filter.
            * @param $sourcePosition The origin of the sample query.
            * @param $hit Holds the properties of the resulting location. The value of hit.normal is never computed. It is always (0,0,0).
            * @param $maxDistance Sample within this distance from sourcePosition.
            * @param $filter A filter specifying which NavMesh areas are allowed when finding the nearest point.
            * @returns True if the nearest point is found. 
            */
            public static SamplePosition ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $maxDistance: number, $filter: UnityEngine.AI.NavMeshQueryFilter) : boolean
            /** Locate the closest NavMesh edge from a point on the NavMesh, subject to the constraints of the filter argument.
            * @param $sourcePosition The origin of the distance query.
            * @param $hit Holds the properties of the resulting location.
            * @param $filter A filter specifying which NavMesh areas can be passed when finding the nearest edge.
            * @returns True if the nearest edge is found. 
            */
            public static FindClosestEdge ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $filter: UnityEngine.AI.NavMeshQueryFilter) : boolean
            /** Traces a line between two positions on the NavMesh, subject to the constraints defined by the filter argument.
            * @param $sourcePosition The origin of the ray.
            * @param $targetPosition The end of the ray.
            * @param $hit Holds the properties of the ray cast resulting location.
            * @param $filter A filter specifying which NavMesh areas can be passed when tracing the ray.
            * @returns True if the ray is terminated before reaching target position. Otherwise returns false. 
            */
            public static Raycast ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>, $filter: UnityEngine.AI.NavMeshQueryFilter) : boolean
            /** Calculates a path between two positions mapped to the NavMesh, subject to the constraints and costs defined by the filter argument.
            * @param $sourcePosition The initial position of the path requested.
            * @param $targetPosition The final position of the path requested.
            * @param $filter A filter specifying the cost of NavMesh areas that can be passed when calculating a path.
            * @param $path The resulting path.
            * @returns True if a either a complete or partial path is found and false otherwise. 
            */
            public static CalculatePath ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $filter: UnityEngine.AI.NavMeshQueryFilter, $path: UnityEngine.AI.NavMeshPath) : boolean
            /** Creates and returns a new entry of NavMesh build settings available for runtime NavMesh building.
            * @returns The created settings. 
            */
            public static CreateSettings () : UnityEngine.AI.NavMeshBuildSettings
            /** Removes the build settings matching the agent type ID.
            * @param $agentTypeID The ID of the entry to remove.
            */
            public static RemoveSettings ($agentTypeID: number) : void
            /** Returns an existing entry of NavMesh build settings.
            * @param $agentTypeID The ID to look for.
            * @returns The settings found. 
            */
            public static GetSettingsByID ($agentTypeID: number) : UnityEngine.AI.NavMeshBuildSettings
            /** Returns the number of registered NavMesh build settings.
            * @returns The number of registered entries. 
            */
            public static GetSettingsCount () : number
            /** Returns an existing entry of NavMesh build settings by its ordered index.
            * @param $index The index to retrieve from.
            * @returns The found settings. 
            */
            public static GetSettingsByIndex ($index: number) : UnityEngine.AI.NavMeshBuildSettings
            /** Returns the name associated with the NavMesh build settings matching the provided agent type ID.
            * @param $agentTypeID The ID to look for.
            * @returns The name associated with the ID found. 
            */
            public static GetSettingsNameFromID ($agentTypeID: number) : string
            /** Removes all NavMesh surfaces and links from the game.
            */
            public static RemoveAllNavMeshData () : void
        }
        /** Bitmask used for operating with debug data from the NavMesh build process.
        */
        enum NavMeshBuildDebugFlags
        { None = 0, InputGeometry = 1, Voxels = 2, Regions = 4, RawContours = 8, SimplifiedContours = 16, PolygonMeshes = 32, PolygonMeshesDetail = 64, All = 127 }
        /** Used with NavMeshBuildSource to define the shape for building NavMesh.
        */
        enum NavMeshBuildSourceShape
        { Mesh = 0, Terrain = 1, Box = 2, Sphere = 3, Capsule = 4, ModifierBox = 5 }
        /** Specify which of the temporary data generated while building the NavMesh should be retained in memory after the process has completed.
        */
        class NavMeshBuildDebugSettings extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Specify which types of debug data to collect when building the NavMesh.
            */
            public get flags(): UnityEngine.AI.NavMeshBuildDebugFlags;
            public set flags(value: UnityEngine.AI.NavMeshBuildDebugFlags);
        }
    }
    namespace UnityEngine.AI.NavMesh {
        interface OnNavMeshPreUpdate
        { 
        () : void; 
        Invoke?: () => void;
        }
        var OnNavMeshPreUpdate: { new (func: () => void): OnNavMeshPreUpdate; }
    }
}
