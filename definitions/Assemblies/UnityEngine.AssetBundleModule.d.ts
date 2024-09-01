
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
        /** The result of an Asset Bundle Load or Recompress Operation.
        */
        enum AssetBundleLoadResult
        { Success = 0, Cancelled = 1, NotMatchingCrc = 2, FailedCache = 3, NotValidAssetBundle = 4, NoSerializedData = 5, NotCompatible = 6, AlreadyLoaded = 7, FailedRead = 8, FailedDecompression = 9, FailedWrite = 10, FailedDeleteRecompressionTarget = 11, RecompressionTargetIsLoaded = 12, RecompressionTargetExistsButNotArchive = 13 }
        /** API for accessing the content of AssetBundle files.
        */
        class AssetBundle extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Return true if the AssetBundle contains Unity Scene files
            */
            public get isStreamedSceneAssetBundle(): boolean;
            /** Controls the size of the shared AssetBundle loading cache. Default value is 1MB. 
            */
            public static get memoryBudgetKB(): number;
            public static set memoryBudgetKB(value: number);
            /** Unloads all currently loaded AssetBundles.
            * @param $unloadAllObjects Determines whether the current instances of objects loaded from AssetBundles will also be unloaded.
            */
            public static UnloadAllAssetBundles ($unloadAllObjects: boolean) : void
            /** Get an enumeration of all the currently loaded AssetBundles.
            */
            public static GetAllLoadedAssetBundles () : System.Collections.Generic.IEnumerable$1<UnityEngine.AssetBundle>
            /** Asynchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromFileAsync ($path: string) : UnityEngine.AssetBundleCreateRequest
            /** Asynchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromFileAsync ($path: string, $crc: number) : UnityEngine.AssetBundleCreateRequest
            /** Asynchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromFileAsync ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundleCreateRequest
            /** Synchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Loaded AssetBundle object or null if failed. 
            */
            public static LoadFromFile ($path: string) : UnityEngine.AssetBundle
            /** Synchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Loaded AssetBundle object or null if failed. 
            */
            public static LoadFromFile ($path: string, $crc: number) : UnityEngine.AssetBundle
            /** Synchronously loads an AssetBundle from a file on disk.
            * @param $path Path of the file on disk.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @param $offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
            * @returns Loaded AssetBundle object or null if failed. 
            */
            public static LoadFromFile ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundle
            /** Asynchronously load an AssetBundle from a memory region.
            * @param $binary Array of bytes with the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromMemoryAsync ($binary: System.Array$1<number>) : UnityEngine.AssetBundleCreateRequest
            /** Asynchronously load an AssetBundle from a memory region.
            * @param $binary Array of bytes with the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromMemoryAsync ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundleCreateRequest
            /** Synchronously load an AssetBundle from a memory region.
            * @param $binary Array of bytes with the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @returns Loaded AssetBundle object or null if failed. 
            */
            public static LoadFromMemory ($binary: System.Array$1<number>) : UnityEngine.AssetBundle
            /** Synchronously load an AssetBundle from a memory region.
            * @param $binary Array of bytes with the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
            * @returns Loaded AssetBundle object or null if failed. 
            */
            public static LoadFromMemory ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundle
            /** Asynchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromStreamAsync ($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number) : UnityEngine.AssetBundleCreateRequest
            /** Asynchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromStreamAsync ($stream: System.IO.Stream, $crc: number) : UnityEngine.AssetBundleCreateRequest
            /** Asynchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns Asynchronous load request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
            */
            public static LoadFromStreamAsync ($stream: System.IO.Stream) : UnityEngine.AssetBundleCreateRequest
            /** Synchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns The loaded AssetBundle object or null when the object fails to load. 
            */
            public static LoadFromStream ($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number) : UnityEngine.AssetBundle
            /** Synchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns The loaded AssetBundle object or null when the object fails to load. 
            */
            public static LoadFromStream ($stream: System.IO.Stream, $crc: number) : UnityEngine.AssetBundle
            /** Synchronously loads an AssetBundle from a managed Stream.
            * @param $stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
            * @param $crc An optional CRC-32 checksum of the uncompressed content.
            * @param $managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
            * @returns The loaded AssetBundle object or null when the object fails to load. 
            */
            public static LoadFromStream ($stream: System.IO.Stream) : UnityEngine.AssetBundle
            /** Check if an AssetBundle contains a specific object.
            */
            public Contains ($name: string) : boolean
            /** Synchronously loads an Asset from the AssetBundle.
            * @param $name Name of the Asset.  For the most precise matching this should be the relative path of the Asset that was built into the AssetBundle, including the file extension.
            The relative path and file extension are optional, and Assets can be found and loaded based on the filename alone.  However this opens the potential for unexpected results if the filename is not unique within the AssetBundle.
            At build time it is also possible to specify a name for the Asset using AssetBundleBuild.addressableNames.  In that case that specified name will be expected to load the Asset instead of the Asset path.
            * @param $type The provided type will be checked against the Asset's main object, and if that is not compatible it will be matched against visible objects within the Asset.
            Not all nested objects are visible, for example this will not work to directly retrieve a Transform, MonoBehaviour or other Component.
            In cases where there are multiple matches for the name argument, the requested type can determine which Asset to load.
            */
            public LoadAsset ($name: string) : UnityEngine.Object
            /** Synchronously loads an Asset from the AssetBundle.
            * @param $name Name of the Asset.  For the most precise matching this should be the relative path of the Asset that was built into the AssetBundle, including the file extension.
            The relative path and file extension are optional, and Assets can be found and loaded based on the filename alone.  However this opens the potential for unexpected results if the filename is not unique within the AssetBundle.
            At build time it is also possible to specify a name for the Asset using AssetBundleBuild.addressableNames.  In that case that specified name will be expected to load the Asset instead of the Asset path.
            * @param $type The provided type will be checked against the Asset's main object, and if that is not compatible it will be matched against visible objects within the Asset.
            Not all nested objects are visible, for example this will not work to directly retrieve a Transform, MonoBehaviour or other Component.
            In cases where there are multiple matches for the name argument, the requested type can determine which Asset to load.
            */
            public LoadAsset ($name: string, $type: System.Type) : UnityEngine.Object
            /** Asynchronously loads an Asset from the bundle.
            * @param $name Name of the Asset.  For the most precise matching this should be the relative path of the Asset that was built into the AssetBundle, including the file extension.
            The relative path and file extension are optional, and Assets can be found and loaded based on the filename alone.  However this opens the potential for unexpected results if the filename is not unique within the AssetBundle.
            At build time it is also possible to specify a name for the Asset using AssetBundleBuild.addressableNames.  In that case that specified name will be expected to load the Asset instead of the Asset path.
            * @param $type The provided type will be checked against the Asset's main object, and if that is not compatible it will be matched against visible objects within the Asset.
            Not all nested objects are visible, for example this will not work to directly retrieve a Transform, MonoBehaviour or other Component.
            In cases where there are multiple matches for the name argument, the requested type can determine which Asset to load.
            */
            public LoadAssetAsync ($name: string) : UnityEngine.AssetBundleRequest
            /** Asynchronously loads an Asset from the bundle.
            * @param $name Name of the Asset.  For the most precise matching this should be the relative path of the Asset that was built into the AssetBundle, including the file extension.
            The relative path and file extension are optional, and Assets can be found and loaded based on the filename alone.  However this opens the potential for unexpected results if the filename is not unique within the AssetBundle.
            At build time it is also possible to specify a name for the Asset using AssetBundleBuild.addressableNames.  In that case that specified name will be expected to load the Asset instead of the Asset path.
            * @param $type The provided type will be checked against the Asset's main object, and if that is not compatible it will be matched against visible objects within the Asset.
            Not all nested objects are visible, for example this will not work to directly retrieve a Transform, MonoBehaviour or other Component.
            In cases where there are multiple matches for the name argument, the requested type can determine which Asset to load.
            */
            public LoadAssetAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
            /** Loads Asset and sub Assets from the AssetBundle synchronously.
            * @param $name Name of the Asset.
            * @param $type Type to load.
            */
            public LoadAssetWithSubAssets ($name: string) : System.Array$1<UnityEngine.Object>
            /** Loads Asset and sub Assets from the AssetBundle synchronously.
            * @param $name Name of the Asset.
            * @param $type Type to load.
            */
            public LoadAssetWithSubAssets ($name: string, $type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads Asset and sub Assets from the AssetBundle asynchronously.
            * @param $name Name of the Asset.
            * @param $type Type to load.
            */
            public LoadAssetWithSubAssetsAsync ($name: string) : UnityEngine.AssetBundleRequest
            /** Loads Asset and sub Assets from the AssetBundle asynchronously.
            * @param $name Name of the Asset.
            * @param $type Type to load.
            */
            public LoadAssetWithSubAssetsAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
            /** Loads all Assets contained in the AssetBundle synchronously.
            * @param $type When specified only main or visible objects that derive from the provided type are returned.
            */
            public LoadAllAssets () : System.Array$1<UnityEngine.Object>
            /** Loads all Assets contained in the AssetBundle synchronously.
            * @param $type When specified only main or visible objects that derive from the provided type are returned.
            */
            public LoadAllAssets ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads all Assets contained in the AssetBundle asynchronously.
            * @param $type When specified only main or visible objects that derive from the provided type are returned.
            */
            public LoadAllAssetsAsync () : UnityEngine.AssetBundleRequest
            /** Loads all Assets contained in the AssetBundle asynchronously.
            * @param $type When specified only main or visible objects that derive from the provided type are returned.
            */
            public LoadAllAssetsAsync ($type: System.Type) : UnityEngine.AssetBundleRequest
            /** Unloads an AssetBundle freeing its data.
            * @param $unloadAllLoadedObjects Determines whether the current instances of objects loaded from the AssetBundle will also be unloaded.
            */
            public Unload ($unloadAllLoadedObjects: boolean) : void
            /** Unloads assets in the bundle.
            * @returns Asynchronous unload request for an AssetBundle. 
            */
            public UnloadAsync ($unloadAllLoadedObjects: boolean) : UnityEngine.AssetBundleUnloadOperation
            /** Return all Asset names in the AssetBundle.
            */
            public GetAllAssetNames () : System.Array$1<string>
            /** Return all the names of Scenes in the AssetBundle.
            */
            public GetAllScenePaths () : System.Array$1<string>
            /** Asynchronously recompress a downloaded/stored AssetBundle from one BuildCompression to another.
            * @param $inputPath Path to the AssetBundle to recompress.
            * @param $outputPath Path to the recompressed AssetBundle to be generated. Can be the same as inputPath.
            * @param $method The compression method, level and blocksize to use during recompression. Only some BuildCompression types are supported (see note).
            * @param $expectedCRC CRC of the AssetBundle to test against. Testing this requires additional file reading and computation. Pass in 0 to skip this check. Unity does not compute a CRC when the source and destination BuildCompression are the same, so no CRC verification takes place (see note).
            * @param $priority The priority at which the recompression operation should run. This sets thread priority during the operation and does not effect the order in which operations are performed. Recompression operations run on a background worker thread.
            */
            public static RecompressAssetBundleAsync ($inputPath: string, $outputPath: string, $method: UnityEngine.BuildCompression, $expectedCRC?: number, $priority?: UnityEngine.ThreadPriority) : UnityEngine.AssetBundleRecompressOperation
        }
        /** Asynchronous load request for an AssetBundle.
        */
        class AssetBundleCreateRequest extends UnityEngine.AsyncOperation
        {
            protected [__keep_incompatibility]: never;
            /** Asset object being loaded (Read Only).
            */
            public get assetBundle(): UnityEngine.AssetBundle;
            public constructor ()
        }
        /** Asynchronous load request from an AssetBundle.
        */
        class AssetBundleRequest extends UnityEngine.ResourceRequest
        {
            protected [__keep_incompatibility]: never;
            /** Asset object being loaded (Read Only).
            */
            public get asset(): UnityEngine.Object;
            /** Asset objects with sub assets being loaded. (Read Only)
            */
            public get allAssets(): System.Array$1<UnityEngine.Object>;
            public constructor ()
        }
        /** Async unload operation for an AssetBundle.
        */
        class AssetBundleUnloadOperation extends UnityEngine.AsyncOperation
        {
            protected [__keep_incompatibility]: never;
            /** Synchronously waits for the operation to complete.
            */
            public WaitForCompletion () : void
            public constructor ()
        }
        /** Asynchronous AssetBundle recompression from one compression method and level to another.
        */
        class AssetBundleRecompressOperation extends UnityEngine.AsyncOperation
        {
            protected [__keep_incompatibility]: never;
            /** A string describing the recompression operation result (Read Only).
            */
            public get humanReadableResult(): string;
            /** Path of the AssetBundle being recompressed (Read Only).
            */
            public get inputPath(): string;
            /** Path of the resulting recompressed AssetBundle (Read Only).
            */
            public get outputPath(): string;
            /** Result of the recompression operation.
            */
            public get result(): UnityEngine.AssetBundleLoadResult;
            /** True if the recompress operation is complete and was successful, otherwise false (Read Only).
            */
            public get success(): boolean;
            public constructor ()
        }
        /** Manifest for all the AssetBundles in the build.
        */
        class AssetBundleManifest extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Get all the AssetBundles in the manifest.
            * @returns An array of asset bundle names. 
            */
            public GetAllAssetBundles () : System.Array$1<string>
            /** Get all the AssetBundles with variant in the manifest.
            * @returns An array of asset bundle names. 
            */
            public GetAllAssetBundlesWithVariant () : System.Array$1<string>
            /** Get the hash for the given AssetBundle.
            * @param $assetBundleName Name of the asset bundle.
            * @returns The 128-bit hash for the asset bundle. 
            */
            public GetAssetBundleHash ($assetBundleName: string) : UnityEngine.Hash128
            /** Get the direct dependent AssetBundles for the given AssetBundle.
            * @param $assetBundleName Name of the asset bundle.
            * @returns Array of asset bundle names this asset bundle depends on. 
            */
            public GetDirectDependencies ($assetBundleName: string) : System.Array$1<string>
            /** Get all the dependent AssetBundles for the given AssetBundle.
            * @param $assetBundleName Name of the asset bundle.
            */
            public GetAllDependencies ($assetBundleName: string) : System.Array$1<string>
        }
    }
    namespace UnityEngine.Experimental.AssetBundlePatching {
        class AssetBundleUtility extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static PatchAssetBundles ($bundles: System.Array$1<UnityEngine.AssetBundle>, $filenames: System.Array$1<string>) : void
        }
    }
}
