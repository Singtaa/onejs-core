
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
    namespace OneJS {
        class EventfulPropertyAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public get CheckEquality(): boolean;
            public constructor ($checkEquality?: boolean)
        }
        interface IClassStrProcessor
        {
            ProcessClassStr ($classStr: string, $dom: OneJS.Dom.Dom) : string
        }
        class Bundler extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public defaultFiles : System.Array$1<OneJS.DefaultFileMapping>
            public directoriesToPackage : System.Array$1<string>
            public outputsZip : UnityEngine.TextAsset
            public version : string
            public forceExtract : boolean
            public ignoreList : System.Array$1<string>
            public ExtractOutputsIfNotFound () : void
            public ExtractForStandalone () : void
            public PackageOutputsZipWithPrompt () : void
            public PackageOutputsZip () : void
            public ZeroOutOutputsZipWithPrompt () : void
            public ZeroOutOutputsZip () : void
            public PackageDirectoriesWithPrompt () : void
            public PackageDirectories () : void
            public constructor ()
        }
        class DefaultFileMapping extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public path : string
            public textAsset : UnityEngine.TextAsset
            public constructor ()
        }
        class DTSGenerator extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public assemblies : System.Array$1<string>
            public namespaces : System.Array$1<string>
            public whitelistedTypes : System.Array$1<string>
            public blacklistedTypes : System.Array$1<string>
            public savePath : string
            public strictAssemblies : boolean
            public strictNamespaces : boolean
            public exact : boolean
            public whitelistOnly : boolean
            public includeGlobalObjects : boolean
            public constructor ()
        }
        interface IEngineHost {
            add_onReload ($value: System.Action) : void
            remove_onReload ($value: System.Action) : void
            add_onDispose ($value: System.Action) : void
            remove_onDispose ($value: System.Action) : void
        }
        class EngineHost extends System.Object implements System.IDisposable, IEngineHost
        {
            protected [__keep_incompatibility]: never;
            public add_onReload ($value: System.Action) : void
            public remove_onReload ($value: System.Action) : void
            public add_onDispose ($value: System.Action) : void
            public remove_onDispose ($value: System.Action) : void
            public subscribe ($eventSource: any, $eventName: string, $handler: Function) : System.Action
            public subscribe ($eventName: string, $handler: Function) : System.Action
            public Dispose () : void
            public constructor ($engine: OneJS.ScriptEngine)
        }
        class ScriptEngine extends UnityEngine.MonoBehaviour implements OneJS.IScriptEngine
        {
            protected [__keep_incompatibility]: never;
            public editorWorkingDirInfo : OneJS.EditorWorkingDirInfo
            public playerWorkingDirInfo : OneJS.PlayerWorkingDirInfo
            public preloads : System.Array$1<UnityEngine.TextAsset>
            public globalObjects : System.Array$1<OneJS.ObjectMappingPair>
            public styleSheets : System.Array$1<UnityEngine.UIElements.StyleSheet>
            public dtsGenerator : OneJS.DTSGenerator
            public get Tick(): number;
            public get WorkingDir(): string;
            public get JsEnv(): Puerts.JsEnv;
            public get AddToGlobal(): System.Action$2<string, any>;
            public add_OnPreInit ($value: System.Action$1<Puerts.JsEnv>) : void
            public remove_OnPreInit ($value: System.Action$1<Puerts.JsEnv>) : void
            public add_OnPostInit ($value: System.Action$1<Puerts.JsEnv>) : void
            public remove_OnPostInit ($value: System.Action$1<Puerts.JsEnv>) : void
            public add_OnReload ($value: System.Action) : void
            public remove_OnReload ($value: System.Action) : void
            public GetFullPath ($filepath: string) : string
            public Shutdown () : void
            public Reload () : void
            public EvalFile ($filepath: string) : void
            public Eval ($code: string, $chunkName?: string) : void
            public GenerateGlobalsDefinitions () : void
            public constructor ()
        }
        interface IScriptEngine
        {
            WorkingDir : string
        }
        class CommonGlobals extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static atob ($str: string) : string
            public static btoa ($str: string) : string
            public constructor ()
        }
        interface MyCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var MyCallback: { new (func: () => void): MyCallback; }
        class Resource extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public loadFont ($path: string) : UnityEngine.Font
            public loadFontDefinition ($path: string) : UnityEngine.UIElements.FontDefinition
            public loadImage ($path: string) : UnityEngine.Texture2D
            public constructor ($engine: OneJS.ScriptEngine)
        }
        class Janitor extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public clearLogs : boolean
            public clearGameObjects : boolean
            public ClearGameObjects () : void
            public Clean () : void
            public ClearLog () : void
            public constructor ()
        }
        class StaticCoroutine extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Start ($coroutine: System.Collections.IEnumerator) : UnityEngine.Coroutine
            public static Stop ($coroutine: UnityEngine.Coroutine) : void
            public constructor ()
        }
        class WebApi extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public getText ($uri: string, $callback: System.Action$1<string>, $headersJson?: string) : UnityEngine.Coroutine
            public getImage ($url: string, $callback: System.Action$1<UnityEngine.Texture2D>, $headersJson?: string, $forceRefresh?: boolean) : UnityEngine.Coroutine
            public constructor ()
        }
        class Runner extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public entryFile : string
            public runOnStart : boolean
            public liveReload : boolean
            public pollingInterval : number
            public clearGameObjects : boolean
            public clearLogs : boolean
            public respawnJanitorOnSceneLoad : boolean
            public stopCleaningOnDisable : boolean
            public standalone : boolean
            public Reload () : void
            public constructor ()
        }
        class ScreenMonitor extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public breakpoints : System.Array$1<number>
            public standalone : boolean
            public constructor ()
        }
        class EditorWorkingDirInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public baseDir : OneJS.EditorWorkingDirInfo.EditorBaseDir
            public relativePath : string
            public constructor ()
        }
        class PlayerWorkingDirInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public baseDir : OneJS.PlayerWorkingDirInfo.PlayerBaseDir
            public relativePath : string
            public constructor ()
        }
        class ObjectMappingPair extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public obj : UnityEngine.Object
            public name : string
            public constructor ($obj: UnityEngine.Object, $m: string)
        }
        class PairMappingAttribute extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public from : string
            public to : string
            public separator : string
            public label : string
            public constructor ($from: string, $to: string, $separator?: string, $label?: string)
        }
        class PlainStringAttribute extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace OneJS.Dom {
        class Dom extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get document(): OneJS.Dom.IDocument;
            public get ve(): UnityEngine.UIElements.VisualElement;
            public get childNodes(): System.Array$1<OneJS.Dom.Dom>;
            public get firstChild(): OneJS.Dom.Dom;
            public get parentNode(): OneJS.Dom.Dom;
            public get nextSibling(): OneJS.Dom.Dom;
            public get nodeType(): number;
            public get Id(): string;
            public set Id(value: string);
            public get key(): string;
            public set key(value: string);
            public get style(): OneJS.Dom.DomStyle;
            public get value(): any;
            public get checked(): boolean;
            public get data(): any;
            public set data(value: any);
            public get innerHTML(): string;
            public get layoutSize(): UnityEngine.Vector2;
            public get _children(): any;
            public set _children(value: any);
            public get _listeners(): System.Collections.Generic.Dictionary$2<string, UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>>;
            public get className(): string;
            public set className(value: string);
            public SetBackgroundColor ($color: UnityEngine.Color) : void
            public clearChildren () : void
            public _addToListeners ($name: string, $callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>) : void
            public _getFromListeners ($name: string) : UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>
            public _callListener ($name: string, $evt: UnityEngine.UIElements.EventBase) : void
            public addEventListener ($name: string, $callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, $useCapture?: boolean) : void
            public removeEventListener ($name: string, $callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, $useCapture?: boolean) : void
            public appendChild ($node: OneJS.Dom.Dom) : void
            public removeChild ($child: OneJS.Dom.Dom) : void
            public insertBefore ($a: OneJS.Dom.Dom, $b: OneJS.Dom.Dom) : void
            public insertAfter ($a: OneJS.Dom.Dom, $b: OneJS.Dom.Dom) : void
            public setAttribute ($name: string, $val: any) : void
            public removeAttribute ($name: string) : void
            public contains ($child: OneJS.Dom.Dom) : boolean
            public focus () : void
            public First ($predicate: System.Func$2<OneJS.Dom.Dom, boolean>) : OneJS.Dom.Dom
            public ProcessClassStr ($classStr: string, $dom: OneJS.Dom.Dom) : string
            public constructor ($ve: UnityEngine.UIElements.VisualElement, $document: OneJS.Dom.IDocument)
        }
        class ElementCreationOptions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public is : string
            public constructor ()
        }
        class Document extends System.Object implements OneJS.Dom.IDocument
        {
            protected [__keep_incompatibility]: never;
            public get scriptEngine(): OneJS.ScriptEngine;
            public get Root(): UnityEngine.UIElements.VisualElement;
            public get body(): OneJS.Dom.Dom;
            public addRuntimeUSS ($uss: string) : void
            public removeRuntimeStyleSheet ($sheet: UnityEngine.UIElements.StyleSheet) : void
            public clearRuntimeStyleSheets () : void
            public createElement ($tagName: string) : OneJS.Dom.Dom
            public createElement ($tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            public createElementNS ($ns: string, $tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            public createTextNode ($text: string) : OneJS.Dom.Dom
            public getElementById ($id: string) : OneJS.Dom.Dom
            public querySelectorAll ($selector: string) : System.Array$1<OneJS.Dom.Dom>
            public getDomFromVE ($ve: UnityEngine.UIElements.VisualElement) : OneJS.Dom.Dom
            public clearCache () : void
            public loadRemoteImage ($url: string, $callback: System.Action$1<UnityEngine.Texture2D>) : UnityEngine.Coroutine
            public loadImage ($path: string, $filterMode?: UnityEngine.FilterMode) : UnityEngine.Texture2D
            public loadFont ($path: string) : UnityEngine.Font
            public loadFontDefinition ($path: string) : UnityEngine.UIElements.FontDefinition
            public static createStyleEnum ($v: number, $type: System.Type) : any
            public static createStyleEnumWithKeyword ($keyword: UnityEngine.UIElements.StyleKeyword, $type: System.Type) : any
            public static createStyleList ($v: any, $type: System.Type) : any
            public static createStyleListWithKeyword ($keyword: UnityEngine.UIElements.StyleKeyword, $type: System.Type) : any
            public constructor ($root: UnityEngine.UIElements.VisualElement, $scriptEngine: OneJS.ScriptEngine)
            public loadRemoteImage ($path: string, $callback: System.Action$1<UnityEngine.Texture2D>) : UnityEngine.Coroutine
            public AddCachingDom ($dom: OneJS.Dom.Dom) : void
            public RemoveCachingDom ($dom: OneJS.Dom.Dom) : void
        }
        interface IDocument
        {
            createElement ($tagName: string) : OneJS.Dom.Dom
            createElement ($tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            createElementNS ($ns: string, $tagName: string, $options: OneJS.Dom.ElementCreationOptions) : OneJS.Dom.Dom
            createTextNode ($text: string) : OneJS.Dom.Dom
            clearCache () : void
            loadRemoteImage ($path: string, $callback: System.Action$1<UnityEngine.Texture2D>) : UnityEngine.Coroutine
            loadImage ($path: string, $filterMode?: UnityEngine.FilterMode) : UnityEngine.Texture2D
            loadFont ($path: string) : UnityEngine.Font
            loadFontDefinition ($path: string) : UnityEngine.UIElements.FontDefinition
            AddCachingDom ($dom: OneJS.Dom.Dom) : void
            RemoveCachingDom ($dom: OneJS.Dom.Dom) : void
        }
        class RegisteredCallbackHolder extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public callback : UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>
            public jsValue : any
            public useCapture : boolean
            public constructor ()
        }
        class DomStyle extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get veStyle(): UnityEngine.UIElements.IStyle;
            public getProperty ($key: string) : any
            public setProperty ($key: string, $value: any) : void
            public SetAlignContent ($value: UnityEngine.UIElements.Align) : void
            public SetAlignItems ($value: UnityEngine.UIElements.Align) : void
            public SetAlignSelf ($value: UnityEngine.UIElements.Align) : void
            public SetBackgroundColor ($value: UnityEngine.Color) : void
            public SetBackgroundImage ($value: UnityEngine.UIElements.Background) : void
            public SetBackgroundSize ($value: UnityEngine.UIElements.BackgroundSize) : void
            public SetBackgroundRepeat ($value: UnityEngine.UIElements.StyleBackgroundRepeat) : void
            public SetBackgroundPosition ($value: UnityEngine.UIElements.StyleBackgroundPosition) : void
            public SetBackgroundPositionX ($value: UnityEngine.UIElements.StyleBackgroundPosition) : void
            public SetBackgroundPositionY ($value: UnityEngine.UIElements.StyleBackgroundPosition) : void
            public SetBorderColor ($value: UnityEngine.Color) : void
            public SetBorderTopColor ($value: UnityEngine.Color) : void
            public SetBorderRightColor ($value: UnityEngine.Color) : void
            public SetBorderBottomColor ($value: UnityEngine.Color) : void
            public SetBorderLeftColor ($value: UnityEngine.Color) : void
            public SetBorderWidth ($value: number) : void
            public SetBorderTopWidth ($value: number) : void
            public SetBorderRightWidth ($value: number) : void
            public SetBorderBottomWidth ($value: number) : void
            public SetBorderLeftWidth ($value: number) : void
            public SetBorderRadius ($value: UnityEngine.UIElements.Length) : void
            public SetBorderTopLeftRadius ($value: UnityEngine.UIElements.Length) : void
            public SetBorderTopRightRadius ($value: UnityEngine.UIElements.Length) : void
            public SetBorderBottomRightRadius ($value: UnityEngine.UIElements.Length) : void
            public SetBorderBottomLeftRadius ($value: UnityEngine.UIElements.Length) : void
            public SetBottom ($value: UnityEngine.UIElements.Length) : void
            public SetColor ($value: UnityEngine.Color) : void
            public SetCursor ($value: UnityEngine.UIElements.Cursor) : void
            public SetDisplay ($value: UnityEngine.UIElements.DisplayStyle) : void
            public SetFilter ($value: System.Collections.Generic.List$1<UnityEngine.UIElements.FilterFunction>) : void
            public SetFilter ($value: UnityEngine.UIElements.FilterFunction) : void
            public SetFlexBasis ($value: UnityEngine.UIElements.StyleLength) : void
            public SetFlexDirection ($value: UnityEngine.UIElements.FlexDirection) : void
            public SetFlexGrow ($value: number) : void
            public SetFlexShrink ($value: number) : void
            public SetFlexWrap ($value: UnityEngine.UIElements.Wrap) : void
            public SetFontSize ($value: UnityEngine.UIElements.Length) : void
            public SetHeight ($value: UnityEngine.UIElements.Length) : void
            public SetJustifyContent ($value: UnityEngine.UIElements.Justify) : void
            public SetLeft ($value: UnityEngine.UIElements.Length) : void
            public SetLetterSpacing ($value: UnityEngine.UIElements.Length) : void
            public SetMargin ($value: UnityEngine.UIElements.Length) : void
            public SetMarginTop ($value: UnityEngine.UIElements.Length) : void
            public SetMarginRight ($value: UnityEngine.UIElements.Length) : void
            public SetMarginBottom ($value: UnityEngine.UIElements.Length) : void
            public SetMarginLeft ($value: UnityEngine.UIElements.Length) : void
            public SetMaxHeight ($value: UnityEngine.UIElements.Length) : void
            public SetMaxWidth ($value: UnityEngine.UIElements.Length) : void
            public SetMinHeight ($value: UnityEngine.UIElements.Length) : void
            public SetMinWidth ($value: UnityEngine.UIElements.Length) : void
            public SetOpacity ($value: number) : void
            public SetOverflow ($value: UnityEngine.UIElements.Overflow) : void
            public SetPadding ($value: UnityEngine.UIElements.Length) : void
            public SetPaddingTop ($value: UnityEngine.UIElements.Length) : void
            public SetPaddingRight ($value: UnityEngine.UIElements.Length) : void
            public SetPaddingBottom ($value: UnityEngine.UIElements.Length) : void
            public SetPaddingLeft ($value: UnityEngine.UIElements.Length) : void
            public SetPosition ($value: UnityEngine.UIElements.Position) : void
            public SetRight ($value: UnityEngine.UIElements.Length) : void
            public SetRotate ($value: UnityEngine.UIElements.Rotate) : void
            public SetScale ($value: UnityEngine.UIElements.Scale) : void
            public SetTextOverflow ($value: UnityEngine.UIElements.TextOverflow) : void
            public SetTextShadow ($value: UnityEngine.UIElements.TextShadow) : void
            public SetTop ($value: UnityEngine.UIElements.Length) : void
            public SetTransformOrigin ($value: UnityEngine.UIElements.TransformOrigin) : void
            public SetTransitionDelay ($value: System.Collections.Generic.List$1<UnityEngine.UIElements.TimeValue>) : void
            public SetTransitionDuration ($value: System.Collections.Generic.List$1<UnityEngine.UIElements.TimeValue>) : void
            public SetTransitionProperty ($value: System.Collections.Generic.List$1<UnityEngine.UIElements.StylePropertyName>) : void
            public SetTransitionTimingFunction ($value: System.Collections.Generic.List$1<UnityEngine.UIElements.EasingFunction>) : void
            public SetTranslate ($value: UnityEngine.UIElements.Translate) : void
            public SetTranslate (a: number, b: number) : void
            public SetUnityBackgroundImageTintColor ($value: UnityEngine.Color) : void
            public SetUnityBackgroundScaleMode ($value: UnityEngine.ScaleMode) : void
            public SetUnityFont ($value: UnityEngine.Font) : void
            public SetUnityFontDefinition ($value: UnityEngine.UIElements.FontDefinition) : void
            public SetUnityFontStyleAndWeight ($value: UnityEngine.FontStyle) : void
            public SetUnityOverflowClipBox ($value: UnityEngine.UIElements.OverflowClipBox) : void
            public SetUnityParagraphSpacing ($value: UnityEngine.UIElements.Length) : void
            public SetUnitySliceBottom ($value: number) : void
            public SetUnitySliceLeft ($value: number) : void
            public SetUnitySliceRight ($value: number) : void
            public SetUnitySliceTop ($value: number) : void
            public SetUnitySliceScale ($value: number) : void
            public SetUnityTextAlign ($value: UnityEngine.TextAnchor) : void
            public SetUnityTextOutlineColor ($value: UnityEngine.Color) : void
            public SetUnityTextOutlineWidth ($value: number) : void
            public SetUnityTextOverflowPosition ($value: UnityEngine.UIElements.TextOverflowPosition) : void
            public SetVisibility ($value: UnityEngine.UIElements.Visibility) : void
            public SetWhiteSpace ($value: UnityEngine.UIElements.WhiteSpace) : void
            public SetWidth ($value: UnityEngine.UIElements.Length) : void
            public SetWordSpacing ($value: UnityEngine.UIElements.Length) : void
            public static GetLength ($value: any, $lengthValue: $Ref<UnityEngine.UIElements.Length>) : boolean
            public static TryParseColorString ($s: string, $color: $Ref<UnityEngine.Color>) : boolean
            public constructor ($dom: OneJS.Dom.Dom)
        }
        class Flipbook extends UnityEngine.UIElements.Image implements UnityEngine.UIElements.Experimental.ITransitionAnimations, UnityEngine.UIElements.IVisualElementScheduler, UnityEngine.UIElements.IResolvedStyle, UnityEngine.UIElements.IStylePropertyAnimations, UnityEngine.UIElements.IEventHandler, UnityEngine.UIElements.IExperimentalFeatures
        {
            protected [__keep_incompatibility]: never;
            public get src(): any;
            public set src(value: any);
            public get numPerRow(): number;
            public set numPerRow(value: number);
            public get count(): number;
            public set count(value: number);
            public get interval(): number;
            public set interval(value: number);
            public get randomRotation(): boolean;
            public set randomRotation(value: boolean);
            public constructor ()
        }
        class GradientRect extends UnityEngine.UIElements.VisualElement implements UnityEngine.UIElements.Experimental.ITransitionAnimations, UnityEngine.UIElements.IVisualElementScheduler, UnityEngine.UIElements.IResolvedStyle, UnityEngine.UIElements.IStylePropertyAnimations, UnityEngine.UIElements.IEventHandler, UnityEngine.UIElements.IExperimentalFeatures
        {
            protected [__keep_incompatibility]: never;
            public get Colors(): System.Array$1<UnityEngine.Color>;
            public set Colors(value: System.Array$1<UnityEngine.Color>);
            public constructor ()
        }
        class Img extends UnityEngine.UIElements.Image implements UnityEngine.UIElements.Experimental.ITransitionAnimations, UnityEngine.UIElements.IVisualElementScheduler, UnityEngine.UIElements.IResolvedStyle, UnityEngine.UIElements.IStylePropertyAnimations, UnityEngine.UIElements.IEventHandler, UnityEngine.UIElements.IExperimentalFeatures
        {
            protected [__keep_incompatibility]: never;
            public get Src(): string;
            public set Src(value: string);
            public SetSrc ($src: string) : void
            public constructor ()
        }
    }
    namespace Puerts {
        class GenericDelegate extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class JsEnv extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        type JSObject = any;
    }
    namespace OneJS.EditorWorkingDirInfo {
        enum EditorBaseDir
        { ProjectPath = 0, PersistentDataPath = 1, StreamingAssetsPath = 2 }
    }
    namespace OneJS.PlayerWorkingDirInfo {
        enum PlayerBaseDir
        { PersistentDataPath = 0, StreamingAssetsPath = 1, AppPath = 2 }
    }
    namespace OneJS.Utils {
        class AssemblyFinder extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static FindType ($name: string) : System.Type
            public static IsValidNamespace ($namespaceName: string) : boolean
            public static FindTypesInNamespace ($namespaceName: string) : System.Collections.Generic.List$1<System.Type>
            public constructor ()
        }
        class TypeUtil {
            public static GetType(obj: any): System.Type; // More reliable to use this than `obj.GetType()` for puerts blittable types
        }
        class FloatConvUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CreateFloatBuffer ($obj: Puerts.JSObject) : System.Array$1<number>
            public static SetFloatValue ($arr: System.Array, $val: number, $index: number) : void
            public static SetFloat2Value ($arr: System.Array, $val: Unity.Mathematics.float2, $index: number) : void
            public static SetFloat3Value ($arr: System.Array, $val: Unity.Mathematics.float3, $index: number) : void
            public static SetFloat4Value ($arr: System.Array, $val: Unity.Mathematics.float4, $index: number) : void
            public constructor ()
        }
        class CoroutineUtil extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static get Instance(): OneJS.Utils.CoroutineUtil;
            public static Start ($routine: System.Collections.IEnumerator) : void
            public static Stop ($routine: System.Collections.IEnumerator) : void
            public static StopAll () : void
            public static Chain (...actions: System.Collections.IEnumerator[]) : System.Collections.IEnumerator
            public static DelaySeconds ($action: System.Action, $delay: number) : System.Collections.IEnumerator
            public static DelayFrames ($action: System.Action, $delay: number) : System.Collections.IEnumerator
            public static EndOfFrame ($action: System.Action) : System.Collections.IEnumerator
            public static WaitForSeconds ($t: number) : System.Collections.IEnumerator
            public static WaitForSeconds ($t: number, $action: System.Action) : System.Collections.IEnumerator
            public static WaitForFrames ($t: number) : System.Collections.IEnumerator
            public static Do ($action: System.Action) : System.Collections.IEnumerator
            public constructor ()
        }
        class DelegateWrapper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Wrap ($jsEnv: Puerts.JsEnv, $eventInfo: System.Reflection.EventInfo, $handler: Function) : Function
            public GetWrapped () : Function
            public GetAction () : System.Action
            public constructor ($jsEnv: Puerts.JsEnv, $eventInfo: System.Reflection.EventInfo, $handler: Function)
        }
        class GenericDelegateWrapper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Wrap ($jsEnv: Puerts.JsEnv, $eventInfo: System.Reflection.EventInfo, $handler: Function) : Function
            public GetWrapped () : Function
            public GetAction () : System.Action
            public constructor ($jsEnv: Puerts.JsEnv, $eventInfo: System.Reflection.EventInfo, $handler: Function)
        }
        class GradientTextureFillJob extends System.ValueType implements Unity.Jobs.IJobParallelFor
        {
            protected [__keep_incompatibility]: never;
            public colors : Unity.Collections.NativeArray$1<UnityEngine.Color32>
            public width : number
            public height : number
            public topRightColor : UnityEngine.Color32
            public static Run ($colors: Unity.Collections.NativeArray$1<UnityEngine.Color32>, $width: number, $height: number, $topRightColor: UnityEngine.Color32) : void
            public Execute ($index: number) : void
        }
        class StringUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SanitizeFilename ($filename: string) : string
            public constructor ()
        }
        class TarCreator extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get ExcludeTS(): boolean;
            public set ExcludeTS(value: boolean);
            public get ExcludeTSDef(): boolean;
            public set ExcludeTSDef(value: boolean);
            public get UglifyJS(): boolean;
            public set UglifyJS(value: boolean);
            public get IgnoreList(): System.Array$1<string>;
            public set IgnoreList(value: System.Array$1<string>);
            public get IncludeRoot(): boolean;
            public set IncludeRoot(value: boolean);
            public CreateTar ($tarOutputStream: ICSharpCode.SharpZipLib.Tar.TarOutputStream, $curDir?: string) : void
            public WriteEntry ($tarOutputStream: ICSharpCode.SharpZipLib.Tar.TarOutputStream, $filepath: string, $tarName: string) : void
            public static CreateTarManually ($tarOutputStream: ICSharpCode.SharpZipLib.Tar.TarOutputStream, $baseDir: string, $curDir?: string) : void
            public static WriteFileEntry ($tarOutputStream: ICSharpCode.SharpZipLib.Tar.TarOutputStream, $filepath: string, $tarName: string) : void
            public constructor ($baseDir: string, $rootDir: string)
        }
        class UIStyleUtil extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetStyleFloat ($n: number) : UnityEngine.UIElements.StyleFloat
            public static GetStyleInt ($n: number) : UnityEngine.UIElements.StyleInt
            public constructor ()
        }
    }
    namespace ICSharpCode.SharpZipLib.Tar {
        class TarOutputStream extends System.IO.Stream implements System.IAsyncDisposable, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace OneJS.Extensions {
        class ColorExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ToVector3 ($color: UnityEngine.Color) : UnityEngine.Vector3
            public static ToFloat3 ($color: UnityEngine.Color) : Unity.Mathematics.float3
            public static ToFloat4 ($color: UnityEngine.Color) : Unity.Mathematics.float4
            public static ToColor ($f4: Unity.Mathematics.float4) : UnityEngine.Color
            public static ToColor ($f3: Unity.Mathematics.float3) : UnityEngine.Color
            public static ToColor32 ($f3: Unity.Mathematics.float3) : UnityEngine.Color32
            public static ToColor32 ($f4: Unity.Mathematics.float4) : UnityEngine.Color32
            public static ToFloat3 ($color: UnityEngine.Color32) : Unity.Mathematics.float3
            public static ToColor ($color: UnityEngine.Color32) : UnityEngine.Color
            public static ToColor32 ($color: UnityEngine.Color) : UnityEngine.Color32
            public static ToFloat4 ($color: UnityEngine.Color32) : Unity.Mathematics.float4
            public static ToInt4 ($color: UnityEngine.Color32) : Unity.Mathematics.int4
            public static ToColor32 ($color: Unity.Mathematics.int4) : UnityEngine.Color32
            public static ToUInt ($color: UnityEngine.Color32) : number
            public static ToColor32 ($color: number) : UnityEngine.Color32
        }
        class ComponentExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetCopyOf ($comp: UnityEngine.Component, $other: UnityEngine.Component) : UnityEngine.Component
            public static TryGetComp ($go: UnityEngine.GameObject, $componentName: string, $comp: $Ref<UnityEngine.Component>) : boolean
            public static TryGetComp ($go: UnityEngine.GameObject, $componentType: System.Type, $comp: $Ref<UnityEngine.Component>) : boolean
            public static GetComp ($comp: UnityEngine.Component, $componentName: string) : UnityEngine.Component
            public static GetComp ($comp: UnityEngine.Component, $componentType: System.Type) : UnityEngine.Component
            public static AddComp ($comp: UnityEngine.Component, $componentName: string) : UnityEngine.Component
            public static AddComp ($comp: UnityEngine.Component, $componentType: System.Type) : UnityEngine.Component
        }
        class GameObjectExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static TryAddComp ($go: UnityEngine.GameObject, $componentName: string) : boolean
            public static TryAddComp ($go: UnityEngine.GameObject, $componentName: string, $comp: $Ref<UnityEngine.Component>) : boolean
            public static AddComp ($go: UnityEngine.GameObject, $componentName: string) : UnityEngine.Component
            public static AddComp ($go: UnityEngine.GameObject, $componentType: System.Type) : UnityEngine.Component
            public static TryGetComp ($go: UnityEngine.GameObject, $componentName: string, $comp: $Ref<UnityEngine.Component>) : boolean
            public static TryGetComp ($go: UnityEngine.GameObject, $componentType: System.Type, $comp: $Ref<UnityEngine.Component>) : boolean
            public static GetComp ($go: UnityEngine.GameObject, $componentName: string) : UnityEngine.Component
            public static GetComp ($go: UnityEngine.GameObject, $componentType: System.Type) : UnityEngine.Component
            public static FindType ($name: string) : System.Type
        }
        class Texture2DExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetRawDataColor32 ($texture: UnityEngine.Texture2D) : Unity.Collections.NativeArray$1<UnityEngine.Color32>
        }
        class TypeExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetFormattedName ($type: System.Type) : string
            public static GetBaseTypes ($type: System.Type, $includeSelf?: boolean) : System.Collections.Generic.IEnumerable$1<System.Type>
            public static GetBaseClasses ($type: System.Type, $includeSelf?: boolean) : System.Collections.Generic.IEnumerable$1<System.Type>
        }
        class VisualElementExts extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Q ($e: UnityEngine.UIElements.VisualElement, $type: System.Type, $name?: string, ...classes: string[]) : UnityEngine.UIElements.VisualElement
            public static Query ($e: UnityEngine.UIElements.VisualElement, $type: System.Type, $name?: string, ...classes: string[]) : UnityEngine.UIElements.UQueryBuilder$1<UnityEngine.UIElements.VisualElement>
            public static Register ($cbeh: UnityEngine.UIElements.CallbackEventHandler, $eventType: System.Type, $handler: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown) : void
            public static Unregister ($cbeh: UnityEngine.UIElements.CallbackEventHandler, $eventType: System.Type, $handler: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, $useTrickleDown?: UnityEngine.UIElements.TrickleDown) : void
            public static ForceUpdate ($view: UnityEngine.UIElements.VisualElement) : void
        }
    }
    namespace OneJS.Dom.Dom {
        interface RegisterCallbackDelegate
        { 
        (ve: UnityEngine.UIElements.VisualElement, callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, trickleDown: UnityEngine.UIElements.TrickleDown) : void; 
        Invoke?: (ve: UnityEngine.UIElements.VisualElement, callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, trickleDown: UnityEngine.UIElements.TrickleDown) => void;
        }
        var RegisterCallbackDelegate: { new (func: (ve: UnityEngine.UIElements.VisualElement, callback: UnityEngine.UIElements.EventCallback$1<UnityEngine.UIElements.EventBase>, trickleDown: UnityEngine.UIElements.TrickleDown) => void): RegisterCallbackDelegate; }
    }
    namespace OneJS.CustomStyleSheets {
        class CSSSpec extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static GetSelectorSpecificity ($selector: string) : number
            public static GetSelectorSpecificity ($parts: System.Array$1<OneJS.CustomStyleSheets.StyleSelectorPart>) : number
            public static ParseSelector ($selector: string, $parts: $Ref<System.Array$1<OneJS.CustomStyleSheets.StyleSelectorPart>>) : boolean
        }
        class StyleSelectorPart extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get value(): string;
            public get type(): OneJS.CustomStyleSheets.StyleSelectorType;
            public static CreateClass ($className: string) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreatePseudoClass ($className: string) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreateId ($Id: string) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreateType ($t: System.Type) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreateType ($typeName: string) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreatePredicate ($predicate: any) : OneJS.CustomStyleSheets.StyleSelectorPart
            public static CreateWildCard () : OneJS.CustomStyleSheets.StyleSelectorPart
            public ToOriginal () : any
        }
        class StyleValueImporter extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get disableValidation(): boolean;
            public set disableValidation(value: boolean);
            public get importErrors(): OneJS.CustomStyleSheets.StyleSheetImportErrors;
            public get assetPath(): string;
            public static FromUssString ($ussValue: string) : OneJS.CustomStyleSheets.StyleValueFunction
        }
        class CustomStyleSheetImporterImpl extends OneJS.CustomStyleSheets.StyleValueImporter
        {
            protected [__keep_incompatibility]: never;
            public BuildStyleSheet ($asset: UnityEngine.UIElements.StyleSheet, $contents: string) : void
            public constructor ($scriptEngine: OneJS.IScriptEngine)
        }
        class Dimension extends System.ValueType implements System.IEquatable$1<OneJS.CustomStyleSheets.Dimension>
        {
            protected [__keep_incompatibility]: never;
            public unit : OneJS.CustomStyleSheets.Dimension.Unit
            public value : number
            public ToLength () : UnityEngine.UIElements.Length
            public ToTime () : UnityEngine.UIElements.TimeValue
            public ToAngle () : UnityEngine.UIElements.Angle
            public static op_Equality ($lhs: OneJS.CustomStyleSheets.Dimension, $rhs: OneJS.CustomStyleSheets.Dimension) : boolean
            public static op_Inequality ($lhs: OneJS.CustomStyleSheets.Dimension, $rhs: OneJS.CustomStyleSheets.Dimension) : boolean
            public Equals ($other: OneJS.CustomStyleSheets.Dimension) : boolean
            public Equals ($obj: any) : boolean
            public ToOriginal () : any
            public constructor ($value: number, $unit: OneJS.CustomStyleSheets.Dimension.Unit)
        }
        class ScalableImage extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum StyleSelectorType
        { Unknown = 0, Wildcard = 1, Type = 2, Class = 3, PseudoClass = 4, RecursivePseudoClass = 5, ID = 6, Predicate = 7 }
        enum StyleSelectorRelationship
        { None = 0, Child = 1, Descendent = 2 }
        enum StyleValidationStatus
        { Ok = 0, Error = 1, Warning = 2 }
        class StyleValidationResult extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public status : OneJS.CustomStyleSheets.StyleValidationStatus
            public message : string
            public errorValue : string
            public hint : string
            public get success(): boolean;
            public FromOriginal ($original: any) : void
        }
        enum StyleValueKeyword
        { Inherit = 0, Initial = 1, Auto = 2, Unset = 3, True = 4, False = 5, None = 6 }
        enum StyleValueType
        { Invalid = 0, Keyword = 1, Float = 2, Dimension = 3, Color = 4, ResourcePath = 5, AssetReference = 6, Enum = 7, Variable = 8, String = 9, Function = 10, CommaSeparator = 11, ScalableImage = 12, MissingAssetReference = 13 }
        class StyleSheetImportError extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public error : OneJS.CustomStyleSheets.StyleSheetImportErrorType
            public code : OneJS.CustomStyleSheets.StyleSheetImportErrorCode
            public assetPath : string
            public message : string
            public line : number
            public isWarning : boolean
            public ToString () : string
            public ToString ($glossary: OneJS.CustomStyleSheets.StyleSheetImportGlossary) : string
            public constructor ($error: OneJS.CustomStyleSheets.StyleSheetImportErrorType, $code: OneJS.CustomStyleSheets.StyleSheetImportErrorCode, $assetPath: string, $message: string, $line?: number, $isWarning?: boolean)
        }
        enum StyleSheetImportErrorType
        { Syntax = 0, Semantic = 1, Validation = 2, Internal = 3 }
        enum StyleSheetImportErrorCode
        { None = 0, Internal = 1, UnsupportedUnit = 2, UnsupportedTerm = 3, InvalidSelectorListDelimiter = 4, InvalidComplexSelectorDelimiter = 5, UnsupportedSelectorFormat = 6, RecursiveSelectorDetected = 7, MissingFunctionArgument = 8, InvalidProperty = 9, InvalidURILocation = 10, InvalidURIScheme = 11, InvalidURIProjectAssetPath = 12, InvalidVarFunction = 13, InvalidHighResolutionImage = 14 }
        class StyleSheetImportGlossary extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public internalError : string
            public internalErrorWithStackTrace : string
            public error : string
            public warning : string
            public line : string
            public unsupportedUnit : string
            public ussParsingError : string
            public unsupportedTerm : string
            public missingFunctionArgument : string
            public missingVariableName : string
            public emptyVariableName : string
            public tooManyFunctionArguments : string
            public emptyFunctionArgument : string
            public unexpectedTokenInFunction : string
            public missingVariablePrefix : string
            public invalidHighResAssetType : string
            public invalidSelectorListDelimiter : string
            public invalidComplexSelectorDelimiter : string
            public unsupportedSelectorFormat : string
            public unknownFunction : string
            public circularImport : string
            public invalidUriLocation : string
            public invalidUriScheme : string
            public invalidAssetPath : string
            public invalidAssetType : string
            public constructor ()
        }
        class StyleSheetImportErrors extends System.Object implements System.Collections.Generic.IEnumerable$1<OneJS.CustomStyleSheets.StyleSheetImportError>, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            public get assetPath(): string;
            public set assetPath(value: string);
            public get hasErrors(): boolean;
            public get hasWarning(): boolean;
            public AddSyntaxError ($message: string, $line: number) : void
            public AddSemanticError ($code: OneJS.CustomStyleSheets.StyleSheetImportErrorCode, $message: string, $line: number) : void
            public AddSemanticWarning ($code: OneJS.CustomStyleSheets.StyleSheetImportErrorCode, $message: string, $line: number) : void
            public AddInternalError ($message: string, $line?: number) : void
            public AddValidationWarning ($message: string, $line: number) : void
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<OneJS.CustomStyleSheets.StyleSheetImportError>
            public constructor ()
        }
        enum StyleValueFunction
        { Unknown = 0, Var = 1, Env = 2, LinearGradient = 3 }
        enum URIValidationResult
        { OK = 0, InvalidURILocation = 1, InvalidURIScheme = 2, InvalidURIProjectAssetPath = 3 }
        class StyleSheetBuilderWrapper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public BuildTo ($styleSheet: UnityEngine.UIElements.StyleSheet) : void
            public AddCommaSeparator () : void
            public BeginComplexSelector ($specificity: number) : System.IDisposable
            public AddSimpleSelector ($parts: System.Array$1<OneJS.CustomStyleSheets.StyleSelectorPart>, $previousRelationsip: OneJS.CustomStyleSheets.StyleSelectorRelationship) : void
            public BeginRule ($line: number) : void
            public EndRule () : void
            public BeginProperty ($name: string, $line: number) : void
            public EndProperty () : void
            public AddValue ($func: OneJS.CustomStyleSheets.StyleValueFunction) : void
            public AddValue ($val: number) : void
            public AddValue ($color: UnityEngine.Color) : void
            public AddValue ($value: UnityEngine.Object) : void
            public AddValue ($dimension: OneJS.CustomStyleSheets.Dimension) : void
            public AddValue ($keyword: OneJS.CustomStyleSheets.StyleValueKeyword) : void
            public AddValue ($value: string, $type: OneJS.CustomStyleSheets.StyleValueType) : void
            public constructor ()
        }
        class StyleValidatorWrapper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public ValidateProperty ($name: string, $str: string) : OneJS.CustomStyleSheets.StyleValidationResult
            public constructor ()
        }
    }
    namespace OneJS.CustomStyleSheets.Dimension {
        enum Unit
        { Unitless = 0, Pixel = 1, Percent = 2, Second = 3, Millisecond = 4, Degree = 5, Gradian = 6, Radian = 7, Turn = 8 }
    }
}
