
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
    namespace UnityEngine.Analytics {
        class SubsystemsAnalyticBase extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public subsystem : string
            public constructor ($eventName: string)
        }
        class SubsystemsAnalyticStart extends UnityEngine.Analytics.SubsystemsAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class SubsystemsAnalyticStop extends UnityEngine.Analytics.SubsystemsAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class SubsystemsAnalyticInfo extends UnityEngine.Analytics.SubsystemsAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class VRDeviceAnalyticBase extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class VRDeviceAnalyticAspect extends UnityEngine.Analytics.VRDeviceAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public vr_aspect_ratio : number
            public constructor ()
        }
        class VRDeviceMirrorAnalytic extends UnityEngine.Analytics.VRDeviceAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public vr_device_mirror_mode : boolean
            public constructor ()
        }
        class VRDeviceUserAnalytic extends UnityEngine.Analytics.VRDeviceAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public vr_user_presence : number
            public constructor ()
        }
        class VRDeviceActiveControllersAnalytic extends UnityEngine.Analytics.VRDeviceAnalyticBase
        {
            protected [__keep_incompatibility]: never;
            public vr_active_controllers : System.Array$1<string>
            public constructor ()
        }
        class AnalyticsCommon extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get ugsAnalyticsEnabled(): boolean;
            public static set ugsAnalyticsEnabled(value: boolean);
        }
        /** Analytics API result.
        */
        enum AnalyticsResult
        { Ok = 0, NotInitialized = 1, AnalyticsDisabled = 2, TooManyItems = 3, SizeLimitReached = 4, TooManyRequests = 5, InvalidData = 6, UnsupportedPlatform = 7 }
        // interface UGSAnalyticsInternalTools
        // {
        //     static SetPrivacyStatus ($status: boolean) : void
        // }
        class AnalyticInfoAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get version(): number;
            public get vendorKey(): string;
            public get eventName(): string;
            public constructor ($eventName: string, $vendorKey?: string, $version?: number, $maxEventsPerHour?: number, $maxNumberOfElements?: number)
        }
        interface IAnalytic
        {
            TryGatherData ($data: $Ref<UnityEngine.Analytics.IAnalytic.IData>, $error: $Ref<System.Exception>) : boolean
        }
        class Analytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public instance : UnityEngine.Analytics.IAnalytic
            public info : UnityEngine.Analytics.AnalyticInfoAttribute
            public constructor ($instance: UnityEngine.Analytics.IAnalytic, $info: UnityEngine.Analytics.AnalyticInfoAttribute)
        }
    }
    namespace UnityEngine.Analytics.IAnalytic {
        interface IData
        {
        }
        class DataList$1<T> extends System.ValueType implements UnityEngine.Analytics.IAnalytic.IData, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
            public constructor ($datas: System.Array$1<T>)
        }
    }
    namespace UnityEditor.Analytics {
        class AssetDatabaseRefreshAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public isV2 : boolean
            public Imports_Imported : bigint
            public Imports_ImportedInProcess : bigint
            public Imports_ImportedOutOfProcess : bigint
            public Imports_Refresh : bigint
            public Imports_DomainReload : bigint
            public CacheServer_MetadataRequested : bigint
            public CacheServer_MetadataDownloaded : bigint
            public CacheServer_MetadataFailedToDownload : bigint
            public CacheServer_MetadataUploaded : bigint
            public CacheServer_ArtifactsFailedToUpload : bigint
            public CacheServer_MetadataVersionsDownloaded : bigint
            public CacheServer_MetadataMatched : bigint
            public CacheServer_ArtifactsDownloaded : bigint
            public CacheServer_ArtifactFilesDownloaded : bigint
            public CacheServer_ArtifactFilesFailedToDownload : bigint
            public CacheServer_ArtifactsUploaded : bigint
            public CacheServer_ArtifactFilesUploaded : bigint
            public CacheServer_ArtifactFilesFailedToUpload : bigint
            public CacheServer_Connects : bigint
            public CacheServer_Disconnects : bigint
            public constructor ()
        }
        class BuildAssetBundleAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public success : boolean
            public error : string
            public constructor ()
        }
        class CollabOperationAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public category : string
            public operation : string
            public result : string
            public start_ts : bigint
            public duration : bigint
            public constructor ()
        }
        class LicensingErrorAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public licensingErrorType : string
            public additionalData : string
            public errorMessage : string
            public correlationId : string
            public sessionId : string
            public constructor ()
        }
        class LicensingInitAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public licensingProtocolVersion : string
            public licensingClientVersion : string
            public channelType : string
            public initTime : number
            public isLegacy : boolean
            public sessionId : string
            public correlationId : string
            public constructor ()
        }
        class MetalPatchShaderComputeBufferAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class NavmeshBakingAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class ProjectSettingsInformationAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class SendGameBuildAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class PackageManagerBaseAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public start_ts : bigint
            public duration : bigint
            public blocking : boolean
            public package_id : string
            public status_code : number
            public error_message : string
            public constructor ($eventName: string)
        }
        class PackageManagerAddPackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerTestAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerRemovePackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerResolvePackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public packages : System.Array$1<string>
            public package_registries : System.Array$1<string>
            public package_signatures : System.Array$1<string>
            public package_sources : System.Array$1<string>
            public package_types : System.Array$1<string>
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerEmbedPackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerResetPackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerResolveErrorPackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public reason : string
            public action : string
            public constructor ()
            public constructor ($eventName: string)
        }
        class PackageManagerStartServerPackageAnalytic extends UnityEditor.Analytics.PackageManagerBaseAnalytic
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
            public constructor ($eventName: string)
        }
        class StallSummaryAnalytic extends UnityEngine.Analytics.AnalyticsEventBase
        {
            protected [__keep_incompatibility]: never;
            public Duration : number
            public constructor ()
        }
    }
}
