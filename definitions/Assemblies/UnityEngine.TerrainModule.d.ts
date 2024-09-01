
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
        /** Indicate the types of changes to the terrain in OnTerrainChanged callback.
        */
        enum TerrainChangedFlags
        { Heightmap = 1, TreeInstances = 2, DelayedHeightmapUpdate = 4, FlushEverythingImmediately = 8, RemoveDirtyDetailsImmediately = 16, HeightmapResolution = 32, Holes = 64, DelayedHolesUpdate = 128, WillBeDestroyed = 256 }
        /** Enum provding terrain rendering options.
        */
        enum TerrainRenderFlags
        { heightmap = 1, trees = 2, details = 4, all = 7, Heightmap = 1, Trees = 2, Details = 4, All = 7 }
        /** The Terrain component renders the terrain.
        */
        class Terrain extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The Terrain Data that stores heightmaps, terrain textures, detail meshes and trees.
            */
            public get terrainData(): UnityEngine.TerrainData;
            public set terrainData(value: UnityEngine.TerrainData);
            /** The maximum distance at which trees are rendered.
            */
            public get treeDistance(): number;
            public set treeDistance(value: number);
            /** Distance from the camera where trees will be rendered as billboards only.
            */
            public get treeBillboardDistance(): number;
            public set treeBillboardDistance(value: number);
            /** Total distance delta that trees will use to transition from billboard orientation to mesh orientation.
            */
            public get treeCrossFadeLength(): number;
            public set treeCrossFadeLength(value: number);
            /** Maximum number of trees rendered at full LOD.
            */
            public get treeMaximumFullLODCount(): number;
            public set treeMaximumFullLODCount(value: number);
            /** Detail objects will be displayed up to this distance.
            */
            public get detailObjectDistance(): number;
            public set detailObjectDistance(value: number);
            /** Density of detail objects.
            */
            public get detailObjectDensity(): number;
            public set detailObjectDensity(value: number);
            /** An approximation of how many pixels the terrain will pop in the worst case when switching lod.
            */
            public get heightmapPixelError(): number;
            public set heightmapPixelError(value: number);
            /** Limits the Terrain's maximum rendering resolution.
            */
            public get heightmapMaximumLOD(): number;
            public set heightmapMaximumLOD(value: number);
            /** Limits how simplified the rendered terrain can be.
            */
            public get heightmapMinimumLODSimplification(): number;
            public set heightmapMinimumLODSimplification(value: number);
            /** Heightmap patches beyond basemap distance will use a precomputed low res basemap.
            */
            public get basemapDistance(): number;
            public set basemapDistance(value: number);
            /** The index of the baked lightmap applied to this terrain.
            */
            public get lightmapIndex(): number;
            public set lightmapIndex(value: number);
            /** The index of the realtime lightmap applied to this terrain.
            */
            public get realtimeLightmapIndex(): number;
            public set realtimeLightmapIndex(value: number);
            /** The UV scale & offset used for a baked lightmap.
            */
            public get lightmapScaleOffset(): UnityEngine.Vector4;
            public set lightmapScaleOffset(value: UnityEngine.Vector4);
            /** The UV scale & offset used for a realtime lightmap.
            */
            public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
            public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
            /** Defines whether Unity frees per-Camera rendering resources for the Terrain when those resources aren't in use after a certain number of frames.
            */
            public get keepUnusedRenderingResources(): boolean;
            public set keepUnusedRenderingResources(value: boolean);
            /** Allows you to set the shadow casting mode for the terrain.
            */
            public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
            public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
            /** How reflection probes are used for terrain. See Rendering.ReflectionProbeUsage.
            */
            public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
            public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
            /** The custom material Unity uses to render the Terrain.
            */
            public get materialTemplate(): UnityEngine.Material;
            public set materialTemplate(value: UnityEngine.Material);
            /** Indicates whether Unity draws the Terrain geometry itself.
            */
            public get drawHeightmap(): boolean;
            public set drawHeightmap(value: boolean);
            /** Specifies if the terrain tile will be automatically connected to adjacent tiles.
            */
            public get allowAutoConnect(): boolean;
            public set allowAutoConnect(value: boolean);
            /** Grouping ID for auto connect.
            */
            public get groupingID(): number;
            public set groupingID(value: number);
            /** Set to true to enable the terrain instance renderer. The default value is false.
            */
            public get drawInstanced(): boolean;
            public set drawInstanced(value: boolean);
            /** When this options is enabled, Terrain heightmap geometries will be added in acceleration structures used for Ray Tracing.
            */
            public get enableHeightmapRayTracing(): boolean;
            public set enableHeightmapRayTracing(value: boolean);
            /** Returns the normal map texture computed from sampling the heightmap. It is only used when terrain is rendered using instancing.
            */
            public get normalmapTexture(): UnityEngine.RenderTexture;
            /** Specify if terrain trees and details should be drawn.
            */
            public get drawTreesAndFoliage(): boolean;
            public set drawTreesAndFoliage(value: boolean);
            /** Set the terrain bounding box scale.
            */
            public get patchBoundsMultiplier(): UnityEngine.Vector3;
            public set patchBoundsMultiplier(value: UnityEngine.Vector3);
            /** The multiplier to the current LOD bias used for rendering LOD trees (i.e. SpeedTree trees).
            */
            public get treeLODBiasMultiplier(): number;
            public set treeLODBiasMultiplier(value: number);
            /** Collect detail patches from memory.
            */
            public get collectDetailPatches(): boolean;
            public set collectDetailPatches(value: boolean);
            /** When enabled, the terrain ignores the terrain overrides set in the QualitySettings.
            */
            public get ignoreQualitySettings(): boolean;
            public set ignoreQualitySettings(value: boolean);
            /** Controls what part of the terrain should be rendered.
            */
            public get editorRenderFlags(): UnityEngine.TerrainRenderFlags;
            public set editorRenderFlags(value: UnityEngine.TerrainRenderFlags);
            /** Whether to bake an array of internal light probes for Tree Editor trees (Editor only).
            */
            public get bakeLightProbesForTrees(): boolean;
            public set bakeLightProbesForTrees(value: boolean);
            /** Removes ringing from light probes on Tree Editor trees (Editor only).
            */
            public get deringLightProbesForTrees(): boolean;
            public set deringLightProbesForTrees(value: boolean);
            /** The motion vector rendering mode for all SpeedTree models painted on the terrain. 
            */
            public get treeMotionVectorModeOverride(): UnityEngine.TreeMotionVectorModeOverride;
            public set treeMotionVectorModeOverride(value: UnityEngine.TreeMotionVectorModeOverride);
            /** Allows you to specify how Unity chooses the for tree instances.
            */
            public get preserveTreePrototypeLayers(): boolean;
            public set preserveTreePrototypeLayers(value: boolean);
            /** Graphics format of the Terrain heightmap.
            */
            public static get heightmapFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            public static get heightmapTextureFormat(): UnityEngine.TextureFormat;
            /** RenderTextureFormat of the terrain heightmap.
            */
            public static get heightmapRenderTextureFormat(): UnityEngine.RenderTextureFormat;
            /** Graphics format of the Terrain normal map texture.
            */
            public static get normalmapFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            /** Texture format of the Terrain normal map texture.
            */
            public static get normalmapTextureFormat(): UnityEngine.TextureFormat;
            /** Render texture format of the Terrain normal map texture.
            */
            public static get normalmapRenderTextureFormat(): UnityEngine.RenderTextureFormat;
            /** Graphics format of the Terrain holes Texture when it is not compressed.
            */
            public static get holesFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            /** Render texture format of the Terrain holes Texture.
            */
            public static get holesRenderTextureFormat(): UnityEngine.RenderTextureFormat;
            /** Graphics format of the Terrain holes Texture when it is compressed.
            */
            public static get compressedHolesFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            /** Texture format of the Terrain holes Texture when it is compressed.
            */
            public static get compressedHolesTextureFormat(): UnityEngine.TextureFormat;
            /** The active Terrain. This is a convenient function to get to the main Terrain in the Scene.
            */
            public static get activeTerrain(): UnityEngine.Terrain;
            /** The active terrains in the Scene.
            */
            public static get activeTerrains(): System.Array$1<UnityEngine.Terrain>;
            /** The Terrain tile to the left, which is in the negative X direction.
            */
            public get leftNeighbor(): UnityEngine.Terrain;
            /** The Terrain tile to the left, which is in the positive X direction.
            */
            public get rightNeighbor(): UnityEngine.Terrain;
            /** Terrain top neighbor.
            */
            public get topNeighbor(): UnityEngine.Terrain;
            /** Terrain bottom neighbor.
            */
            public get bottomNeighbor(): UnityEngine.Terrain;
            /** Determines which rendering layers the Terrain renderer lives on.
            */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /**
            * @param $cameraInstanceID The InstanceID of the camera being queried. See Object.GetInstanceID.
            * @returns Returns true if all rendering resources for the given camera are saved regardless of usage. Returns false if garbage collection is allowed to free unused resources. 
            */
            public GetKeepUnusedCameraRenderingResources ($cameraInstanceID: number) : boolean
            /** Defines whether Unity cleans up rendering resources for a given Camera during garbage collection.
            * @param $cameraInstanceID The InstanceID of the camera for which freeUnusedRenderingResources is being set. See Object.GetInstanceID.
            * @param $freeUnusedRenderingResources The value to set to this camera's freeUnusedRenderingResources flag.
            */
            public SetKeepUnusedCameraRenderingResources ($cameraInstanceID: number, $keepUnused: boolean) : void
            public GetClosestReflectionProbes ($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>) : void
            /** Samples the height at the given position defined in world space, relative to the Terrain space.
            */
            public SampleHeight ($worldPosition: UnityEngine.Vector3) : number
            /** Adds a tree instance to the terrain.
            */
            public AddTreeInstance ($instance: UnityEngine.TreeInstance) : void
            /** Lets you set up the connection between neighboring Terrain tiles. This ensures LOD matches up on neighboring Terrain tiles.
            * @param $left The Terrain tile to the left is in the negative X direction.
            * @param $top The Terrain tile to the top is in the positive Z direction.
            * @param $right The Terrain tile to the right is in the positive X direction.
            * @param $bottom The Terrain tile to the bottom is in the negative Z direction.
            */
            public SetNeighbors ($left: UnityEngine.Terrain, $top: UnityEngine.Terrain, $right: UnityEngine.Terrain, $bottom: UnityEngine.Terrain) : void
            /** Get the position of the terrain.
            */
            public GetPosition () : UnityEngine.Vector3
            /** Flushes any change done in the terrain so it takes effect.
            */
            public Flush () : void
            /** Set the additional material properties when rendering the terrain heightmap using the splat material.
            */
            public SetSplatMaterialPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
            /** Get the previously set splat material properties by copying to the dest MaterialPropertyBlock object.
            */
            public GetSplatMaterialPropertyBlock ($dest: UnityEngine.MaterialPropertyBlock) : void
            /** Marks the current connectivity status as invalid.
            */
            public static SetConnectivityDirty () : void
            public static GetActiveTerrains ($terrainList: System.Collections.Generic.List$1<UnityEngine.Terrain>) : void
            /** Creates a Terrain including collider from TerrainData.
            */
            public static CreateTerrainGameObject ($assignTerrain: UnityEngine.TerrainData) : UnityEngine.GameObject
            public constructor ()
        }
        /** The TerrainData class stores heightmaps, detail mesh positions, tree instances, and terrain texture alpha maps.
        */
        class TerrainData extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns the heightmap texture.
            */
            public get heightmapTexture(): UnityEngine.RenderTexture;
            /** The size of the heightmap in texels for either the width or the height.
            */
            public get heightmapResolution(): number;
            public set heightmapResolution(value: number);
            /** Returns a Vector3 where the x and z components are the size of each heightmap sample (i.e. the space between two neighboring heightmap samples), and the y component is the entire Terrain's height range in world space.
            */
            public get heightmapScale(): UnityEngine.Vector3;
            /** Returns the Terrain holes Texture.
            */
            public get holesTexture(): UnityEngine.Texture;
            /** Enable the Terrain holes Texture compression.
            */
            public get enableHolesTextureCompression(): boolean;
            public set enableHolesTextureCompression(value: boolean);
            /** Returns the Terrain holes resolution for both the data and the Texture.
            */
            public get holesResolution(): number;
            /** The total size in world units of the terrain.
            */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            /** The local bounding box of the TerrainData object.
            */
            public get bounds(): UnityEngine.Bounds;
            /** Strength of the waving grass in the terrain.
            */
            public get wavingGrassStrength(): number;
            public set wavingGrassStrength(value: number);
            /** Amount of waving grass in the terrain.
            */
            public get wavingGrassAmount(): number;
            public set wavingGrassAmount(value: number);
            /** Speed of the waving grass.
            */
            public get wavingGrassSpeed(): number;
            public set wavingGrassSpeed(value: number);
            /** Color of the waving grass that the terrain has.
            */
            public get wavingGrassTint(): UnityEngine.Color;
            public set wavingGrassTint(value: UnityEngine.Color);
            /** The resolution of the detail data stored in TerrainData.
            */
            public get detailWidth(): number;
            /** The resolution of the detail data stored in TerrainData.
            */
            public get detailHeight(): number;
            /** The maximum value of each sample in the detail map of the terrain data.
            */
            public get maxDetailScatterPerRes(): number;
            /** The number of patches along a terrain tile edge. This is squared to make a grid of patches.
            */
            public get detailPatchCount(): number;
            /** Detail Resolution of the TerrainData.
            */
            public get detailResolution(): number;
            /** Detail Resolution of each patch. A larger value will decrease the number of batches used by detail objects.
            */
            public get detailResolutionPerPatch(): number;
            /** Additional resources: DetailScatterMode
            */
            public get detailScatterMode(): UnityEngine.DetailScatterMode;
            /** Contains the detail texture/meshes that the Terrain has.
            */
            public get detailPrototypes(): System.Array$1<UnityEngine.DetailPrototype>;
            public set detailPrototypes(value: System.Array$1<UnityEngine.DetailPrototype>);
            /** Contains the current trees placed in the terrain.
            */
            public get treeInstances(): System.Array$1<UnityEngine.TreeInstance>;
            public set treeInstances(value: System.Array$1<UnityEngine.TreeInstance>);
            /** Returns the number of tree instances.
            */
            public get treeInstanceCount(): number;
            /** The list of tree prototypes available in the inspector.
            */
            public get treePrototypes(): System.Array$1<UnityEngine.TreePrototype>;
            public set treePrototypes(value: System.Array$1<UnityEngine.TreePrototype>);
            /** Number of alpha map layers.
            */
            public get alphamapLayers(): number;
            /** The size of the alpha map in texels for either the width or the height.
            */
            public get alphamapResolution(): number;
            public set alphamapResolution(value: number);
            /** Width of the alpha map.
            */
            public get alphamapWidth(): number;
            /** Height of the alpha map. (Read only.)
            */
            public get alphamapHeight(): number;
            /** Resolution of the base map used for rendering far patches on the terrain.
            */
            public get baseMapResolution(): number;
            public set baseMapResolution(value: number);
            /** Returns the number of alphamap textures.
            */
            public get alphamapTextureCount(): number;
            /** Alpha map textures used by the Terrain. Used by Terrain Inspector for undo.
            */
            public get alphamapTextures(): System.Array$1<UnityEngine.Texture2D>;
            /** Retrieves the terrain layers used by the current terrain.
            */
            public get terrainLayers(): System.Array$1<UnityEngine.TerrainLayer>;
            public set terrainLayers(value: System.Array$1<UnityEngine.TerrainLayer>);
            /** The name for the Terrain alpha map textures.
            */
            public static get AlphamapTextureName(): string;
            /** The name for the Terrain holes Texture.
            */
            public static get HolesTextureName(): string;
            /** Gets the world space height of the Terrain at a certain point x,y without adding the Terrain's world position y.
            */
            public GetHeight ($x: number, $y: number) : number
            /** Gets an interpolated height at a point x,y. The x and y coordinates are clamped to [0, 1].
            * @param $x X coordinate of the point in the range of [0, 1].
            * @param $y Y coordinate of the point in the range of [0, 1].
            */
            public GetInterpolatedHeight ($x: number, $y: number) : number
            /** Gets an array of terrain height values using the normalized x,y coordinates.
            * @param $xBase The base x coordinate.
            * @param $yBase The base y coordinate.
            * @param $xCount The number of queries along the X axis.
            * @param $yCount The number of queries along the Y axis.
            * @param $xInterval The interval between each query along the X axis.
            * @param $yInterval The interval between each query along the Y axis.
            */
            public GetInterpolatedHeights ($xBase: number, $yBase: number, $xCount: number, $yCount: number, $xInterval: number, $yInterval: number) : System.Array$1<number>
            /** Fills the array with Terrain height values using normalized x,y coordinates.
            * @param $results The array to fill with height values.
            * @param $resultXOffset The offset from the beginning of the array, along the X axis, at which to start filling in height values.
            * @param $resultYOffset The offset from the beginning of the array, along the Y axis, at which to start filling in height values.
            * @param $xBase The base x coordinate.
            * @param $yBase The base y coordinate.
            * @param $xCount The number of queries along the X axis.
            * @param $yCount The number of queries along the Y axis.
            * @param $xInterval The interval between each query along the X axis.
            * @param $yInterval The interval between each query along the Y axis.
            */
            public GetInterpolatedHeights ($results: System.Array$1<number>, $resultXOffset: number, $resultYOffset: number, $xBase: number, $yBase: number, $xCount: number, $yCount: number, $xInterval: number, $yInterval: number) : void
            /** Gets an array of heightmap samples.
            * @param $xBase First index of heightmap samples to retrieve along the Terrain's x axis.
            * @param $yBase First index of heightmap samples to retrieve along the Terrain's z axis.
            * @param $width Number of samples to retrieve along the Terrain's x axis.
            * @param $height Number of samples to retrieve along the Terrain's z axis.
            */
            public GetHeights ($xBase: number, $yBase: number, $width: number, $height: number) : System.Array$1<number>
            /** Sets an array of heightmap samples.
            * @param $xBase First x index of heightmap samples to set.
            * @param $yBase First y index of heightmap samples to set.
            * @param $heights Array of heightmap samples to set (values range from 0 to 1, array indexed as [y,x]).
            */
            public SetHeights ($xBase: number, $yBase: number, $heights: System.Array$1<number>) : void
            /** Returns an array of min max height values for all the renderable patches in a terrain.  The returned array can be modified and then passed to OverrideMinMaxPatchHeights.
            * @returns Minimum and maximum height values for each patch. 
            */
            public GetPatchMinMaxHeights () : System.Array$1<UnityEngine.PatchExtents>
            /** Override the minimum and maximum patch heights for every renderable terrain patch.  Note that the overriden values get reset when the terrain resolution is changed and stays unchanged when the terrain heightmap is painted or changed via script.
            * @param $minMaxHeights Array of minimum and maximum terrain patch height values.
            */
            public OverrideMinMaxPatchHeights ($minMaxHeights: System.Array$1<UnityEngine.PatchExtents>) : void
            /** Returns an array of tesselation maximum height error values per renderable terrain patch.  The returned array can be modified and passed to OverrideMaximumHeightError.
            * @returns Float array of maximum height error values. 
            */
            public GetMaximumHeightError () : System.Array$1<number>
            /** Override the maximum tessellation height error with user provided values.  Note that the overriden values get reset when the terrain resolution is changed and stays unchanged when the terrain heightmap is painted or changed via script.
            * @param $maxError Provided maximum height error values.
            */
            public OverrideMaximumHeightError ($maxError: System.Array$1<number>) : void
            /** Sets an array of heightmap samples.
            * @param $xBase First x index of heightmap samples to set.
            * @param $yBase First y index of heightmap samples to set.
            * @param $heights Array of heightmap samples to set (values range from 0 to 1, array indexed as [y,x]).
            */
            public SetHeightsDelayLOD ($xBase: number, $yBase: number, $heights: System.Array$1<number>) : void
            /** Gets whether a certain point at x,y is a hole.
            */
            public IsHole ($x: number, $y: number) : boolean
            /** Gets an array of Terrain holes samples.
            * @param $xBase First x index of Terrain holes samples to retrieve.
            * @param $yBase First y index of Terrain holes samples to retrieve.
            * @param $width Number of samples to retrieve along the Terrain holes x axis.
            * @param $height Number of samples to retrieve along the Terrain holes y axis.
            */
            public GetHoles ($xBase: number, $yBase: number, $width: number, $height: number) : System.Array$1<boolean>
            /** Sets an array of Terrain holes samples.
            * @param $xBase First x index of Terrain holes samples to set.
            * @param $yBase First y index of Terrain holes samples to set.
            * @param $holes Array of Terrain holes samples to set (array indexed as [y,x]).
            */
            public SetHoles ($xBase: number, $yBase: number, $holes: System.Array$1<boolean>) : void
            /** Sets an array of Terrain holes samples.
            * @param $xBase First x index of Terrain holes samples to set.
            * @param $yBase First y index of Terrain holes samples to set.
            * @param $holes Array of Terrain holes samples to set (array indexed as [y,x]).
            */
            public SetHolesDelayLOD ($xBase: number, $yBase: number, $holes: System.Array$1<boolean>) : void
            /** Gets the gradient of the terrain at point (x,y).
            */
            public GetSteepness ($x: number, $y: number) : number
            /** Get an interpolated normal at a given location.
            */
            public GetInterpolatedNormal ($x: number, $y: number) : UnityEngine.Vector3
            /** Sets the resolution of the detail map.
            * @param $detailResolution Specifies the number of pixels in the detail resolution map. A larger detailResolution, leads to more accurate detail object painting.
            * @param $resolutionPerPatch Specifies the size in pixels of each individually rendered detail patch. A larger number reduces draw calls, but might increase triangle count since detail patches are culled on a per batch basis. A recommended value is 16. If you use a very large detail object distance and your grass is very sparse, it makes sense to increase the value.
            */
            public SetDetailResolution ($detailResolution: number, $resolutionPerPatch: number) : void
            /** Sets the DetailScatterMode.
            * @param $detailScatterMode Sets the DetailScatterMode that specifies how to represent detail density at each sample of the detail resolution map.
            */
            public SetDetailScatterMode ($scatterMode: UnityEngine.DetailScatterMode) : void
            /** Reloads all the values of the available prototypes (ie, detail mesh assets) in the TerrainData Object.
            */
            public RefreshPrototypes () : void
            /** Returns an array of all supported detail layer indices in the area.
            */
            public GetSupportedLayers ($xBase: number, $yBase: number, $totalWidth: number, $totalHeight: number) : System.Array$1<number>
            public GetSupportedLayers ($positionBase: UnityEngine.Vector2Int, $size: UnityEngine.Vector2Int) : System.Array$1<number>
            /** Returns a 2D array of the detail object density (i.e. the number of detail objects for this layer) in the specific location.
            * @param $xBase First x index of detail object density data to retrieve.
            * @param $yBase First y index of detail object density data to retrieve.
            * @param $width The amount of detail object density data to retrieve along the Terrain's x axis.
            * @param $height The amount of detail object density data to retrieve along the Terrain's z axis.
            * @param $layer The index of the detail in the TerrainData.detailPrototypes array.
            */
            public GetDetailLayer ($xBase: number, $yBase: number, $width: number, $height: number, $layer: number) : System.Array$1<number>
            public GetDetailLayer ($positionBase: UnityEngine.Vector2Int, $size: UnityEngine.Vector2Int, $layer: number) : System.Array$1<number>
            /** This function computes and returns an array of detail object transforms for the specified patch and the specified prototype. You can use this function to retrieve the exact same transform data the Unity engine uses for detail rendering.
            * @param $patchX The x index of the patch.
            * @param $patchY The y index of the patch.
            * @param $layer The prototype index.
            * @param $density The density setting of the detail.
            * @param $bounds Returns the bounds of the detail objects.
            */
            public ComputeDetailInstanceTransforms ($patchX: number, $patchY: number, $layer: number, $density: number, $bounds: $Ref<UnityEngine.Bounds>) : System.Array$1<UnityEngine.DetailInstanceTransform>
            /** This function computes and returns the coverage (how many instances fit in a square unit) of a detail prototype, given its index.
            */
            public ComputeDetailCoverage ($detailPrototypeIndex: number) : number
            /** Sets the detail layer density map.
            */
            public SetDetailLayer ($xBase: number, $yBase: number, $layer: number, $details: System.Array$1<number>) : void
            public SetDetailLayer ($basePosition: UnityEngine.Vector2Int, $layer: number, $details: System.Array$1<number>) : void
            /** Returns an array of detail patches, which are each identified by X-Z coordinates. Detail objects in the patches are clamped to the maximum count.
            * @param $density The detail density value. See Terrain.detailObjectDensity.
            */
            public GetClampedDetailPatches ($density: number) : System.Array$1<UnityEngine.Vector2Int>
            /** Sets the Tree Instance array, and optionally snaps Trees onto the surface of the Terrain heightmap.
            * @param $instances The array of TreeInstance objects.
            * @param $snapToHeightmap Specifies whether to snap Trees to the Terrain heightmap.
            */
            public SetTreeInstances ($instances: System.Array$1<UnityEngine.TreeInstance>, $snapToHeightmap: boolean) : void
            /** Gets the tree instance at the specified index. It is used as a faster version of treeInstances[index] as this function doesn't create the entire tree instances array.
            * @param $index The index of the tree instance.
            */
            public GetTreeInstance ($index: number) : UnityEngine.TreeInstance
            /** Sets the tree instance with new parameters at the specified index. However, you cannot change TreeInstance.prototypeIndex and TreeInstance.position. If you change them, the method throws an ArgumentException.
            * @param $index The index of the tree instance.
            * @param $instance The new TreeInstance value.
            */
            public SetTreeInstance ($index: number, $instance: UnityEngine.TreeInstance) : void
            /** Removes the detail prototype at the specified index.
            * @param $index The index of the detail prototype.
            */
            public RemoveDetailPrototype ($index: number) : void
            /** Returns the alpha map at a position x, y given a width and height.
            * @param $x The x offset to read from.
            * @param $y The y offset to read from.
            * @param $width The width of the alpha map area to read.
            * @param $height The height of the alpha map area to read.
            * @returns A 3D array of floats, where the 3rd dimension represents the mixing weight of each splatmap at each x,y coordinate. 
            */
            public GetAlphamaps ($x: number, $y: number, $width: number, $height: number) : System.Array$1<number>
            /** Assign all splat values in the given map area.
            */
            public SetAlphamaps ($x: number, $y: number, $map: System.Array$1<number>) : void
            /** Marks the terrain data as dirty to trigger an update of the terrain basemap texture.
            */
            public SetBaseMapDirty () : void
            /** Returns the alphamap texture at the specified index.
            * @param $index Index of the alphamap.
            * @returns Alphamap texture at the specified index. 
            */
            public GetAlphamapTexture ($index: number) : UnityEngine.Texture2D
            /** This function sets the terrainLayers property, and in addition, registers the action to the Editor's undo stack.
            * @param $terrainLayers The Terrain Layer assets to set.
            * @param $undoName The name of the Editor's undo action.
            */
            public SetTerrainLayersRegisterUndo ($terrainLayers: System.Array$1<UnityEngine.TerrainLayer>, $undoName: string) : void
            /** Performs synchronization queued by previous calls to CopyActiveRenderTextureToHeightmap and DirtyHeightmapRegion, which makes the height data and LOD data used for tessellation up to date.
            */
            public SyncHeightmap () : void
            /** Copies the specified part of the active RenderTexture to the Terrain heightmap texture.
            * @param $sourceRect The part of the active Render Texture to copy.
            * @param $dest The X and Y coordinates of the heightmap texture to copy into.
            * @param $syncControl Controls how CPU synchronization is performed.
            */
            public CopyActiveRenderTextureToHeightmap ($sourceRect: UnityEngine.RectInt, $dest: UnityEngine.Vector2Int, $syncControl: UnityEngine.TerrainHeightmapSyncControl) : void
            /** Marks the specified part of the heightmap as dirty.
            * @param $region The rectangular region to mark as dirty.
            * @param $syncControl Controls how CPU synchronization is performed.
            */
            public DirtyHeightmapRegion ($region: UnityEngine.RectInt, $syncControl: UnityEngine.TerrainHeightmapSyncControl) : void
            /** Copies the specified part of the active RenderTexture to the Terrain texture.
            * @param $textureName The name of the Terrain texture to copy into.
            * @param $textureIndex The index of the Terrain texture to copy into.
            * @param $sourceRect The part of the active Render Texture to copy.
            * @param $dest The X and Y coordinates of the Terrain texture to copy into.
            * @param $allowDelayedCPUSync Specifies whether to allow delayed CPU synchronization of the texture.
            */
            public CopyActiveRenderTextureToTexture ($textureName: string, $textureIndex: number, $sourceRect: UnityEngine.RectInt, $dest: UnityEngine.Vector2Int, $allowDelayedCPUSync: boolean) : void
            /** Marks the specified part of the Terrain texture as dirty.
            * @param $textureName The name of the Terrain texture.
            * @param $region The rectangular region to mark as dirty.
            * @param $allowDelayedCPUSync Specifies whether to allow delayed CPU synchronization of the texture.
            */
            public DirtyTextureRegion ($textureName: string, $region: UnityEngine.RectInt, $allowDelayedCPUSync: boolean) : void
            /** Performs synchronization queued by previous calls to CopyActiveRenderTextureToTexture and DirtyTextureRegion, which makes CPU data of the Terrain textures up to date.
            * @param $textureName The name of the Terrain texture to synchronize.
            */
            public SyncTexture ($textureName: string) : void
            public constructor ()
        }
        /** Contains information about a tree placed in the Terrain game object.
        */
        class TreeInstance extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Position of the tree.
            */
            public position : UnityEngine.Vector3
            /** Width scale of this instance (compared to the prototype's size).
            */
            public widthScale : number
            /** Height scale of this instance (compared to the prototype's size).
            */
            public heightScale : number
            /** Read-only.
            Rotation of the tree on X-Z plane (in radians).
            */
            public rotation : number
            /** Color of this instance.
            */
            public color : UnityEngine.Color32
            /** Lightmap color calculated for this instance.
            */
            public lightmapColor : UnityEngine.Color32
            /** Index of this instance in the TerrainData.treePrototypes array.
            */
            public prototypeIndex : number
        }
        /** Options for motion vector rendering on the terrain.
        */
        enum TreeMotionVectorModeOverride
        { CameraMotionOnly = 0, PerObjectMotion = 1, ForceNoMotion = 2, InheritFromPrototype = 3 }
        /** Extension methods to the Terrain class, used only for the UpdateGIMaterials method used by the Global Illumination System.
        */
        class TerrainExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
            */
            public static UpdateGIMaterials ($terrain: UnityEngine.Terrain) : void
            /** Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
            */
            public static UpdateGIMaterials ($terrain: UnityEngine.Terrain, $x: number, $y: number, $width: number, $height: number) : void
        }
        /** Tree Component for the tree creator.
        */
        class Tree extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Data asociated to the Tree.
            */
            public get data(): UnityEngine.ScriptableObject;
            public set data(value: UnityEngine.ScriptableObject);
            /** Tells if there is wind data exported from SpeedTree are saved on this component.
            */
            public get hasSpeedTreeWind(): boolean;
            public constructor ()
        }
        /** This static class provides events that Unity triggers when Terrain data changes.
        */
        class TerrainCallbacks extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static add_heightmapChanged ($value: UnityEngine.TerrainCallbacks.HeightmapChangedCallback) : void
            public static remove_heightmapChanged ($value: UnityEngine.TerrainCallbacks.HeightmapChangedCallback) : void
            public static add_textureChanged ($value: UnityEngine.TerrainCallbacks.TextureChangedCallback) : void
            public static remove_textureChanged ($value: UnityEngine.TerrainCallbacks.TextureChangedCallback) : void
        }
        /** Simple class that contains a pointer to a tree prototype.
        */
        class TreePrototype extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Retrieves the actual GameObject used by the tree.
            */
            public get prefab(): UnityEngine.GameObject;
            public set prefab(value: UnityEngine.GameObject);
            /** Bend factor of the tree prototype.
            */
            public get bendFactor(): number;
            public set bendFactor(value: number);
            /** The LOD index of a Tree LODGroup that Unity uses to generate a NavMesh. It uses this value only for Trees with a LODGroup, and ignores this value for regular Trees.
            */
            public get navMeshLod(): number;
            public set navMeshLod(value: number);
            public constructor ()
            public constructor ($other: UnityEngine.TreePrototype)
        }
        /** Render mode for detail prototypes.
        */
        enum DetailRenderMode
        { GrassBillboard = 0, VertexLit = 1, Grass = 2 }
        /** Provides options to specify how details are scattered on the terrain.
        */
        enum DetailScatterMode
        { CoverageMode = 0, InstanceCountMode = 1 }
        /** Detail prototype used by the Terrain GameObject.
        */
        class DetailPrototype extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** GameObject used by the DetailPrototype.
            */
            public get prototype(): UnityEngine.GameObject;
            public set prototype(value: UnityEngine.GameObject);
            /** Texture used by the DetailPrototype.
            */
            public get prototypeTexture(): UnityEngine.Texture2D;
            public set prototypeTexture(value: UnityEngine.Texture2D);
            /** Minimum width of the grass billboards (if render mode is GrassBillboard).
            */
            public get minWidth(): number;
            public set minWidth(value: number);
            /** Maximum width of the grass billboards (if render mode is GrassBillboard).
            */
            public get maxWidth(): number;
            public set maxWidth(value: number);
            /** Minimum height of the grass billboards (if render mode is GrassBillboard).
            */
            public get minHeight(): number;
            public set minHeight(value: number);
            /** Maximum height of the grass billboards (if render mode is GrassBillboard).
            */
            public get maxHeight(): number;
            public set maxHeight(value: number);
            /** Specifies the random seed value for detail object placement.
            */
            public get noiseSeed(): number;
            public set noiseSeed(value: number);
            /** Controls the spatial frequency of the noise pattern used to vary the scale and color of the detail objects.
            */
            public get noiseSpread(): number;
            public set noiseSpread(value: number);
            /** Controls detail density for this detail prototype, relative to it's size.
            */
            public get density(): number;
            public set density(value: number);
            /** Controls how far away detail objects are from the edge of the hole area.
            */
            public get holeEdgePadding(): number;
            public set holeEdgePadding(value: number);
            /** Color when the DetailPrototypes are "healthy".
            */
            public get healthyColor(): UnityEngine.Color;
            public set healthyColor(value: UnityEngine.Color);
            /** Color when the DetailPrototypes are "dry".
            */
            public get dryColor(): UnityEngine.Color;
            public set dryColor(value: UnityEngine.Color);
            /** Render mode for the DetailPrototype.
            */
            public get renderMode(): UnityEngine.DetailRenderMode;
            public set renderMode(value: UnityEngine.DetailRenderMode);
            /** Indicates whether this detail prototype uses the Mesh object from the GameObject specified by prototype.
            */
            public get usePrototypeMesh(): boolean;
            public set usePrototypeMesh(value: boolean);
            /** Indicates whether this detail prototype uses for rendering.
            */
            public get useInstancing(): boolean;
            public set useInstancing(value: boolean);
            /** Controls the detail's target coverage.
            */
            public get targetCoverage(): number;
            public set targetCoverage(value: number);
            /** Indicates the global density scale set in the terrain settings affects this detail prototype.
            */
            public get useDensityScaling(): boolean;
            public set useDensityScaling(value: boolean);
            /** Rotate detail axis parallel to the ground's normal direction, so that the detail is perpendicular to the ground.
            */
            public get alignToGround(): number;
            public set alignToGround(value: number);
            /** Controls how Unity generates the detail positions.
            */
            public get positionJitter(): number;
            public set positionJitter(value: number);
            /** Returns true if the detail prototype is valid and the Terrain can accept it.
            * @param $errorMessage Returns a message that indicates the cause of failed validation.
            */
            public Validate () : boolean
            /** Returns true if the detail prototype is valid and the Terrain can accept it.
            * @param $errorMessage Returns a message that indicates the cause of failed validation.
            */
            public Validate ($errorMessage: $Ref<string>) : boolean
            public constructor ()
            public constructor ($other: UnityEngine.DetailPrototype)
        }
        /** A Splat prototype is just a texture that is used by the TerrainData.
        */
        class SplatPrototype extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Texture of the splat applied to the Terrain.
            */
            public get texture(): UnityEngine.Texture2D;
            public set texture(value: UnityEngine.Texture2D);
            /** Normal map of the splat applied to the Terrain.
            */
            public get normalMap(): UnityEngine.Texture2D;
            public set normalMap(value: UnityEngine.Texture2D);
            /** Size of the tile used in the texture of the SplatPrototype.
            */
            public get tileSize(): UnityEngine.Vector2;
            public set tileSize(value: UnityEngine.Vector2);
            /** Offset of the tile texture of the SplatPrototype.
            */
            public get tileOffset(): UnityEngine.Vector2;
            public set tileOffset(value: UnityEngine.Vector2);
            public get specular(): UnityEngine.Color;
            public set specular(value: UnityEngine.Color);
            /** The metallic value of the splat layer.
            */
            public get metallic(): number;
            public set metallic(value: number);
            /** The smoothness value of the splat layer when the main texture has no alpha channel.
            */
            public get smoothness(): number;
            public set smoothness(value: number);
            public constructor ()
        }
        /** Structure containing minimum and maximum terrain patch height values.
        */
        class PatchExtents extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Minimum height of a terrain patch.
            */
            public get min(): number;
            public set min(value: number);
            /** Maximum height of a terrain patch.
            */
            public get max(): number;
            public set max(value: number);
        }
        /** Controls what Terrain heightmap data to synchronize when there are changes to the heightmap texture.
        */
        enum TerrainHeightmapSyncControl
        { None = 0, HeightOnly = 1, HeightAndLod = 2 }
        /** Describes the transform of a Terrain detail object.
        */
        class DetailInstanceTransform extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The X coordinate of the detail object in the Terrain's local space. To get the X in world space, add this value to position X of the Terrain.
            */
            public posX : number
            /** The Y coordinate of the detail object in the Terrain's local space. To get the Y in world space, add this value to position Y of the Terrain.
            */
            public posY : number
            /** The Z coordinate of the detail object in the Terrain's local space. To get the Z in world space, add this value to position Z of the Terrain.
            */
            public posZ : number
            /** The X and Z scale values of the detail object. These two values are always the same.
            */
            public scaleXZ : number
            /** The Y scale value of the detail object.
            */
            public scaleY : number
            /** The angle, in radians, at which the detail object rotates around the Y-axis.
            */
            public rotationY : number
        }
        /** Description of a terrain layer.
        */
        class TerrainLayer extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The diffuse texture used by the terrain layer.
            */
            public get diffuseTexture(): UnityEngine.Texture2D;
            public set diffuseTexture(value: UnityEngine.Texture2D);
            /** Normal map texture used by the terrain layer.
            */
            public get normalMapTexture(): UnityEngine.Texture2D;
            public set normalMapTexture(value: UnityEngine.Texture2D);
            /** The mask map texture used by the terrain layer.
            */
            public get maskMapTexture(): UnityEngine.Texture2D;
            public set maskMapTexture(value: UnityEngine.Texture2D);
            /** UV Tiling size.
            */
            public get tileSize(): UnityEngine.Vector2;
            public set tileSize(value: UnityEngine.Vector2);
            /** UV tiling offset.
            */
            public get tileOffset(): UnityEngine.Vector2;
            public set tileOffset(value: UnityEngine.Vector2);
            /** Specular color.
            */
            public get specular(): UnityEngine.Color;
            public set specular(value: UnityEngine.Color);
            /** Metallic factor used by the terrain layer.
            */
            public get metallic(): number;
            public set metallic(value: number);
            /** Smoothness of the specular reflection.
            */
            public get smoothness(): number;
            public set smoothness(value: number);
            /** A float value that scales the normal vector. The minimum value is 0, the maximum value is 1.
            */
            public get normalScale(): number;
            public set normalScale(value: number);
            /** A Vector4 value specifying the minimum RGBA value that the diffuse texture maps to when the value of the channel is 0.
            */
            public get diffuseRemapMin(): UnityEngine.Vector4;
            public set diffuseRemapMin(value: UnityEngine.Vector4);
            /** A Vector4 value specifying the maximum RGBA value that the diffuse texture maps to when the value of the channel is 1.
            */
            public get diffuseRemapMax(): UnityEngine.Vector4;
            public set diffuseRemapMax(value: UnityEngine.Vector4);
            /** A Vector4 value specifying the minimum RGBA value that the mask map texture maps to when the value of the channel is 0.
            */
            public get maskMapRemapMin(): UnityEngine.Vector4;
            public set maskMapRemapMin(value: UnityEngine.Vector4);
            /** A Vector4 value specifying the maximum RGBA value that the mask map texture maps to when the value of the channel is 1.
            */
            public get maskMapRemapMax(): UnityEngine.Vector4;
            public set maskMapRemapMax(value: UnityEngine.Vector4);
            /** Choose the source for smoothness value.
            */
            public get smoothnessSource(): UnityEngine.TerrainLayerSmoothnessSource;
            public set smoothnessSource(value: UnityEngine.TerrainLayerSmoothnessSource);
            public constructor ()
        }
        /** Source of smoothness value used in the underlying splat material of a TerrainLayer when TerrainLayer.diffuseTexture has an alpha channel.
        */
        enum TerrainLayerSmoothnessSource
        { Constant = 0, DiffuseAlphaChannel = 1 }
    }
    namespace UnityEngine.Terrain {
        enum MaterialType
        { BuiltInStandard = 0, BuiltInLegacyDiffuse = 1, BuiltInLegacySpecular = 2, Custom = 3 }
    }
    namespace UnityEngine.TerrainCallbacks {
        interface HeightmapChangedCallback
        { 
        (terrain: UnityEngine.Terrain, heightRegion: UnityEngine.RectInt, synched: boolean) : void; 
        Invoke?: (terrain: UnityEngine.Terrain, heightRegion: UnityEngine.RectInt, synched: boolean) => void;
        }
        var HeightmapChangedCallback: { new (func: (terrain: UnityEngine.Terrain, heightRegion: UnityEngine.RectInt, synched: boolean) => void): HeightmapChangedCallback; }
        interface TextureChangedCallback
        { 
        (terrain: UnityEngine.Terrain, textureName: string, texelRegion: UnityEngine.RectInt, synched: boolean) : void; 
        Invoke?: (terrain: UnityEngine.Terrain, textureName: string, texelRegion: UnityEngine.RectInt, synched: boolean) => void;
        }
        var TextureChangedCallback: { new (func: (terrain: UnityEngine.Terrain, textureName: string, texelRegion: UnityEngine.RectInt, synched: boolean) => void): TextureChangedCallback; }
    }
    namespace UnityEngine.TerrainUtils {
        /** Specifies a set of 2D tile coordinates.
        */
        class TerrainTileCoord extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** Tile X coordinate.
            */
            public tileX : number
            /** Tile Z coordinate.
            */
            public tileZ : number
            public constructor ($tileX: number, $tileZ: number)
        }
        /** Type for mapping 2D (X,Z) tile coordinates to a Terrain object.
        */
        class TerrainMap extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Mapping from TileCoord to Terrain.
            */
            public get terrainTiles(): System.Collections.Generic.Dictionary$2<UnityEngine.TerrainUtils.TerrainTileCoord, UnityEngine.Terrain>;
            /** Retrieves the Terrain object corresponding to the tile coordinates (tileX,tileZ).
            * @param $tileX Tile X coordinate.
            * @param $tileZ Tile Z coordinate.
            * @returns Returns a valid Terrain object if successful, null otherwise. 
            */
            public GetTerrain ($tileX: number, $tileZ: number) : UnityEngine.Terrain
            public static CreateFromConnectedNeighbors ($originTerrain: UnityEngine.Terrain, $filter?: System.Predicate$1<UnityEngine.Terrain>, $fullValidation?: boolean) : UnityEngine.TerrainUtils.TerrainMap
            public static CreateFromPlacement ($originTerrain: UnityEngine.Terrain, $filter?: System.Predicate$1<UnityEngine.Terrain>, $fullValidation?: boolean) : UnityEngine.TerrainUtils.TerrainMap
            public static CreateFromPlacement ($gridOrigin: UnityEngine.Vector2, $gridSize: UnityEngine.Vector2, $filter?: System.Predicate$1<UnityEngine.Terrain>, $fullValidation?: boolean) : UnityEngine.TerrainUtils.TerrainMap
            public constructor ()
        }
        /** Provides a set of utility functions that are used by the terrain tools.
        */
        class TerrainUtility extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Automatically connects neighboring terrains.
            */
            public static AutoConnect () : void
        }
    }
    namespace UnityEngine.TerrainTools {
        /** Represents a linear 2D transformation between brush UV space and a target XY space (typically this is a Terrain-local object space.)
        */
        class BrushTransform extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** (Read Only) Brush UV origin, in XY space.
            */
            public get brushOrigin(): UnityEngine.Vector2;
            /** (Read Only) Brush U vector, in XY space.
            */
            public get brushU(): UnityEngine.Vector2;
            /** (Read Only) Brush V vector, in XY space.
            */
            public get brushV(): UnityEngine.Vector2;
            /** (Read Only) Target XY origin, in Brush UV space.
            */
            public get targetOrigin(): UnityEngine.Vector2;
            /** (Read Only) Target X vector, in Brush UV space.
            */
            public get targetX(): UnityEngine.Vector2;
            /** (Read Only) Target Y vector, in Brush UV space.
            */
            public get targetY(): UnityEngine.Vector2;
            /** Get the axis-aligned bounding rectangle of the brush, in target XY space.
            * @returns Bounding rectangle in target XY space. 
            */
            public GetBrushXYBounds () : UnityEngine.Rect
            /** Creates an axis-aligned BrushTransform from a rectangle.
            * @param $brushRect Brush rectangle, in target XY coordinates.
            * @returns BrushTransform describing the brush. 
            */
            public static FromRect ($brushRect: UnityEngine.Rect) : UnityEngine.TerrainTools.BrushTransform
            /** Applies the transform to convert a target XY coordinate to Brush UV space.
            * @param $targetXY Point in target XY space.
            * @returns Point transformed to Brush UV space. 
            */
            public ToBrushUV ($targetXY: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Applies the transform to convert a Brush UV coordinate to the target XY space.
            * @param $brushUV Brush UV coordinate to transform.
            * @returns Target XY coordinate. 
            */
            public FromBrushUV ($brushUV: UnityEngine.Vector2) : UnityEngine.Vector2
            public constructor ($brushOrigin: UnityEngine.Vector2, $brushU: UnityEngine.Vector2, $brushV: UnityEngine.Vector2)
        }
        /** The context for a paint operation that may span multiple connected Terrain tiles.
        */
        class PaintContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** (Read Only) The Terrain used to build the PaintContext.
            */
            public get originTerrain(): UnityEngine.Terrain;
            /** (Read Only) The pixel rectangle that this PaintContext represents.
            */
            public get pixelRect(): UnityEngine.RectInt;
            /** (Read Only) The width of the target terrain texture.  This is the resolution for a single Terrain.
            */
            public get targetTextureWidth(): number;
            /** (Read Only) The height of the target terrain texture.  This is the resolution for a single Terrain.
            */
            public get targetTextureHeight(): number;
            /** (Read Only) The size of a PaintContext pixel in terrain units (as defined by originTerrain.)
            */
            public get pixelSize(): UnityEngine.Vector2;
            /** (Read Only) Render target that stores the original data from the Terrain tiles.
            */
            public get sourceRenderTexture(): UnityEngine.RenderTexture;
            /** (Read Only) RenderTexture that an edit operation writes to modify the data.
            */
            public get destinationRenderTexture(): UnityEngine.RenderTexture;
            /** (Read Only) The value of RenderTexture.active at the time CreateRenderTargets is called.
            */
            public get oldRenderTexture(): UnityEngine.RenderTexture;
            /** (Read Only) The number of Terrain tiles in this PaintContext.
            */
            public get terrainCount(): number;
            /** The minimum height of all Terrain tiles that this PaintContext touches in world space.
            */
            public get heightWorldSpaceMin(): number;
            /** The height range (from Min to Max) of all Terrain tiles that this PaintContext touches in world space.
            */
            public get heightWorldSpaceSize(): number;
            /** Unity uses this value internally to transform a [0, 1] height value to a texel value, which is stored in TerrainData.heightmapTexture.
            */
            public static get kNormalizedHeightScale(): number;
            /** Retrieves a Terrain from the PaintContext.
            * @param $terrainIndex Index of the terrain.
            * @returns Returns the Terrain object. 
            */
            public GetTerrain ($terrainIndex: number) : UnityEngine.Terrain
            /** Retrieves the clipped pixel rectangle for a Terrain.
            * @param $terrainIndex Index of the Terrain.
            * @returns Returns the clipped pixel rectangle. 
            */
            public GetClippedPixelRectInTerrainPixels ($terrainIndex: number) : UnityEngine.RectInt
            /** Retrieves the clipped pixel rectangle for a Terrain, relative to the PaintContext render textures.
            * @param $terrainIndex Index of the Terrain.
            * @returns Returns the clipped pixel rectangle. 
            */
            public GetClippedPixelRectInRenderTexturePixels ($terrainIndex: number) : UnityEngine.RectInt
            /** Constructs a PaintContext that you can use to edit a texture on a Terrain, in the region defined by boundsInTerrainSpace and extraBorderPixels.
            * @param $terrain Terrain that defines terrain space for this PaintContext.
            * @param $boundsInTerrainSpace Terrain space bounds to edit in the target terrain texture.
            * @param $inputTextureWidth Width of the input Terrain Texture for all connected Terrains.
            * @param $inputTextureHeight Height of the input Terrain Texture for all connected Terrains.
            * @param $extraBorderPixels Number of extra border pixels required. The default value is 0.
            * @param $sharedBoundaryTexel Whether to stretch the Textures so that edge texels lie on the Terrain boundary, and are shared with connected Terrains.
            * @param $fillOutsideTerrain Whether to fill empty space outside of the Terrain tiles with data from the nearest tile.
            */
            public static CreateFromBounds ($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $inputTextureWidth: number, $inputTextureHeight: number, $extraBorderPixels?: number, $sharedBoundaryTexel?: boolean, $fillOutsideTerrain?: boolean) : UnityEngine.TerrainTools.PaintContext
            /** Creates the sourceRenderTexture and destinationRenderTexture.
            * @param $colorFormat Render Texture format.
            */
            public CreateRenderTargets ($colorFormat: UnityEngine.RenderTextureFormat) : void
            /** Releases the allocated resources of this PaintContext.
            * @param $restoreRenderTexture When true, indicates that this function restores RenderTexture.active
            */
            public Cleanup ($restoreRenderTexture?: boolean) : void
            public Gather ($terrainSource: System.Func$2<UnityEngine.TerrainTools.PaintContext.ITerrainInfo, UnityEngine.Texture>, $defaultColor: UnityEngine.Color, $blitMaterial?: UnityEngine.Material, $blitPass?: number, $beforeBlit?: System.Action$1<UnityEngine.TerrainTools.PaintContext.ITerrainInfo>, $afterBlit?: System.Action$1<UnityEngine.TerrainTools.PaintContext.ITerrainInfo>) : void
            public Scatter ($terrainDest: System.Func$2<UnityEngine.TerrainTools.PaintContext.ITerrainInfo, UnityEngine.RenderTexture>, $blitMaterial?: UnityEngine.Material, $blitPass?: number, $beforeBlit?: System.Action$1<UnityEngine.TerrainTools.PaintContext.ITerrainInfo>, $afterBlit?: System.Action$1<UnityEngine.TerrainTools.PaintContext.ITerrainInfo>) : void
            /** Gathers the heightmap information into sourceRenderTexture.
            */
            public GatherHeightmap () : void
            /** Applies an edited heightmap PaintContext by copying modifications back to the source Terrain tiles.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public ScatterHeightmap ($editorUndoName: string) : void
            /** Gathers the Terrain holes information into sourceRenderTexture.
            */
            public GatherHoles () : void
            /** Applies an edited Terrain holes PaintContext by copying modifications back to the source Terrain tiles.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public ScatterHoles ($editorUndoName: string) : void
            /** Gathers the normal information into sourceRenderTexture.
            */
            public GatherNormals () : void
            /** Gathers the alphamap information into sourceRenderTexture.
            * @param $inputLayer TerrainLayer used for painting.
            * @param $addLayerIfDoesntExist Set to true to specify that the inputLayer is added to the terrain if it does not already exist. Set to false to specify that terrain layers are not added to the terrain.
            */
            public GatherAlphamap ($inputLayer: UnityEngine.TerrainLayer, $addLayerIfDoesntExist?: boolean) : void
            /** Applies an edited alphamap PaintContext by copying modifications back to the source Terrain tiles.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public ScatterAlphamap ($editorUndoName: string) : void
            /** Flushes the delayed actions created by PaintContext heightmap and alphamap modifications.
            */
            public static ApplyDelayedActions () : void
            public constructor ($terrain: UnityEngine.Terrain, $pixelRect: UnityEngine.RectInt, $targetTextureWidth: number, $targetTextureHeight: number, $sharedBoundaryTexel?: boolean, $fillOutsideTerrain?: boolean)
        }
        /** Built-in render passes for paint material.
        */
        enum TerrainBuiltinPaintMaterialPasses
        { RaiseLowerHeight = 0, StampHeight = 1, SetHeights = 2, SmoothHeights = 3, PaintTexture = 4, PaintHoles = 5 }
        /** A set of utility functions for custom terrain paint tools.
        */
        class TerrainPaintUtility extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns the built-in in paint material used by the built-in tools.
            * @returns Built-in terrain paint material. 
            */
            public static GetBuiltinPaintMaterial () : UnityEngine.Material
            /** Calculates the minimum and maximum Brush size limits, in world space.
            * @param $minBrushWorldSize Returns the minimum Brush size, in world space units.
            * @param $maxBrushWorldSize Returns the maximum Brush size, in world space units.
            * @param $terrainTileWorldSize The size of a Terrain tile, in world space units.
            * @param $terrainTileTextureResolutionPixels The resolution of the Terrain tile texture the Brush edits, in pixels.
            * @param $minBrushResolutionPixels The minimum Brush resolution, in pixels.  Default is 1 pixel.
            * @param $maxBrushResolutionPixels The maximum Brush resolution, in pixels.  Default is 8192 pixels.
            */
            public static GetBrushWorldSizeLimits ($minBrushWorldSize: $Ref<number>, $maxBrushWorldSize: $Ref<number>, $terrainTileWorldSize: number, $terrainTileTextureResolutionPixels: number, $minBrushResolutionPixels?: number, $maxBrushResolutionPixels?: number) : void
            /** Creates a BrushTransform from the input parameters.
            * @param $terrain Reference terrain, defines terrain UV and object space.
            * @param $brushCenterTerrainUV Center point of the brush, in terrain UV space (0-1 across the terrain tile).
            * @param $brushSize Size of the brush, in terrain space.
            * @param $brushRotationDegrees Brush rotation in degrees (clockwise).
            * @returns Transform from terrain space to Brush UVs. 
            */
            public static CalculateBrushTransform ($terrain: UnityEngine.Terrain, $brushCenterTerrainUV: UnityEngine.Vector2, $brushSize: number, $brushRotationDegrees: number) : UnityEngine.TerrainTools.BrushTransform
            /** Builds a Scale & Offset transform to convert between one PaintContext's UV space and another PaintContext's UV space.
            * @param $src Source PaintContext.
            * @param $dst Destination PaintContext.
            * @param $scaleOffset ScaleOffset transform.
            */
            public static BuildTransformPaintContextUVToPaintContextUV ($src: UnityEngine.TerrainTools.PaintContext, $dst: UnityEngine.TerrainTools.PaintContext, $scaleOffset: $Ref<UnityEngine.Vector4>) : void
            /** Sets up all of the material properties used by functions in TerrainTool.cginc.
            * @param $paintContext PaintContext describing the area we are editing, and the terrain space.
            * @param $brushXform BrushTransform from terrain space to Brush UVs.
            * @param $material Material to populate with transform properties.
            */
            public static SetupTerrainToolMaterialProperties ($paintContext: UnityEngine.TerrainTools.PaintContext, $brushXform: $Ref<UnityEngine.TerrainTools.BrushTransform>, $material: UnityEngine.Material) : void
            /** Releases the allocated resources of the specified PaintContext.
            * @param $ctx The PaintContext containing the resources to release.
            */
            public static ReleaseContextResources ($ctx: UnityEngine.TerrainTools.PaintContext) : void
            /** Helper function to set up a PaintContext for modifying the heightmap of one or more Terrain tiles.
            * @param $terrain Reference Terrain tile.
            * @param $boundsInTerrainSpace The region in terrain space to edit.
            * @param $extraBorderPixels Number of extra border pixels required.
            * @param $fillOutsideTerrain Whether to fill empty space outside of Terrain tiles with data from the nearest tile.
            * @returns PaintContext containing the combined heightmap data for the specified region. 
            */
            public static BeginPaintHeightmap ($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number, $fillOutsideTerrain?: boolean) : UnityEngine.TerrainTools.PaintContext
            /** Helper function to complete a heightmap modification.
            * @param $ctx The heightmap paint context to complete.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public static EndPaintHeightmap ($ctx: UnityEngine.TerrainTools.PaintContext, $editorUndoName: string) : void
            /** Helper function to set up a PaintContext for modifying the Terrain holes of one or more Terrain tiles.
            * @param $terrain Reference Terrain tile.
            * @param $boundsInTerrainSpace The region in Terrain space to edit.
            * @param $extraBorderPixels Number of extra border pixels required.
            * @param $fillOutsideTerrain Whether to fill empty space outside of Terrain tiles with data from the nearest tile.
            * @returns PaintContext that contains the combined Terrain holes data for the specified region. 
            */
            public static BeginPaintHoles ($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number, $fillOutsideTerrain?: boolean) : UnityEngine.TerrainTools.PaintContext
            /** Helper function to complete a Terrain holes modification.
            * @param $ctx The Terrain holes PaintContext to complete.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public static EndPaintHoles ($ctx: UnityEngine.TerrainTools.PaintContext, $editorUndoName: string) : void
            /** Helper function to set up a PaintContext that collects mesh normal data from one or more Terrain tiles.
            * @param $terrain Reference Terrain tile.
            * @param $boundsInTerrainSpace The region in terrain space from which to collect normals.
            * @param $extraBorderPixels Number of extra border pixels required.
            * @param $fillOutsideTerrain Whether to fill empty space outside of Terrain tiles with data from the nearest tile.
            * @returns PaintContext containing the combined normalmap data for the specified region. 
            */
            public static CollectNormals ($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number, $fillOutsideTerrain?: boolean) : UnityEngine.TerrainTools.PaintContext
            /** Helper function to set up a PaintContext for modifying the alphamap of one or more Terrain tiles.
            * @param $terrain Reference Terrain tile.
            * @param $inputLayer Selects the alphamap to paint.
            * @param $boundsInTerrainSpace The region in terrain space to edit.
            * @param $extraBorderPixels Number of extra border pixels required.
            * @param $fillOutsideTerrain Whether to fill empty space outside of Terrain tiles with data from the nearest tile.
            * @returns PaintContext containing the combined alphamap data for the specified region. 
            */
            public static BeginPaintTexture ($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $inputLayer: UnityEngine.TerrainLayer, $extraBorderPixels?: number, $fillOutsideTerrain?: boolean) : UnityEngine.TerrainTools.PaintContext
            /** Helper function to complete a texture alphamap modification.
            * @param $ctx The texture paint context to complete.
            * @param $editorUndoName Unique name used for the undo stack.
            */
            public static EndPaintTexture ($ctx: UnityEngine.TerrainTools.PaintContext, $editorUndoName: string) : void
            /** Returns the default material for blitting operations.
            * @returns Built in "Hidden/BlitCopy" material. 
            */
            public static GetBlitMaterial () : UnityEngine.Material
            /** Returns the Material to use when copying the Terrain heightmap.
            * @returns Built in "HiddenTerrainEngineHeightBlitCopy" material. 
            */
            public static GetHeightBlitMaterial () : UnityEngine.Material
            /** Returns the default copy terrain layer material.
            * @returns Built in "HiddenTerrainTerrainLayerUtils" material. 
            */
            public static GetCopyTerrainLayerMaterial () : UnityEngine.Material
            /** Returns the alphamap texture at mapIndex.
            * @param $terrain Terrain tile.
            * @param $mapIndex Index to retrieve.
            * @returns Alphamap texture at mapIndex. 
            */
            public static GetTerrainAlphaMapChecked ($terrain: UnityEngine.Terrain, $mapIndex: number) : UnityEngine.Texture2D
            /** Finds the index of a TerrainLayer in a Terrain tile.
            * @param $terrain Terrain tile.
            * @param $inputLayer Terrain layer to search for.
            * @returns Returns the index of the terrain layer if it exists or -1 if it doesn't exist. 
            */
            public static FindTerrainLayerIndex ($terrain: UnityEngine.Terrain, $inputLayer: UnityEngine.TerrainLayer) : number
        }
    }
    namespace UnityEngine.TerrainTools.PaintContext {
        interface ITerrainInfo
        {
            terrain : UnityEngine.Terrain
            clippedTerrainPixels : UnityEngine.RectInt
            clippedPCPixels : UnityEngine.RectInt
            paddedTerrainPixels : UnityEngine.RectInt
            paddedPCPixels : UnityEngine.RectInt
            gatherEnable : boolean
            scatterEnable : boolean
            userData : any
        }
    }
}
