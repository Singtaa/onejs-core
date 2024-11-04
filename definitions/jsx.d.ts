type Texture = CS.UnityEngine.Texture;
type Sprite = CS.UnityEngine.Sprite;
type Rect = CS.UnityEngine.Rect;
type Vector2 = CS.UnityEngine.Vector2;
type Vector2Int = CS.UnityEngine.Vector2Int;
type Vector3 = CS.UnityEngine.Vector3;
type Vector3Int = CS.UnityEngine.Vector3Int;
type Vector4 = CS.UnityEngine.Vector4;
type RectInt = CS.UnityEngine.RectInt;
type Bounds = CS.UnityEngine.Bounds;
type BoundsInt = CS.UnityEngine.BoundsInt;
type Texture2D = CS.UnityEngine.Texture2D;

type AttachToPanelEvent = CS.UnityEngine.UIElements.AttachToPanelEvent;
type BlurEvent = CS.UnityEngine.UIElements.BlurEvent;
type ChangeEvent<T> = CS.UnityEngine.UIElements.ChangeEvent<T>;
type ClickEvent = CS.UnityEngine.UIElements.ClickEvent;
type DetachFromPanelEvent = CS.UnityEngine.UIElements.DetachFromPanelEvent;
type DragEnterEvent = CS.UnityEngine.UIElements.DragEnterEvent;
type DragExitedEvent = CS.UnityEngine.UIElements.DragExitedEvent;
type DragLeaveEvent = CS.UnityEngine.UIElements.DragLeaveEvent;
type DragPerformEvent = CS.UnityEngine.UIElements.DragPerformEvent;
type DragUpdatedEvent = CS.UnityEngine.UIElements.DragUpdatedEvent;
type ExecuteCommandEvent = CS.UnityEngine.UIElements.ExecuteCommandEvent;
type FocusEvent = CS.UnityEngine.UIElements.FocusEvent;
type FocusInEvent = CS.UnityEngine.UIElements.FocusInEvent;
type FocusOutEvent = CS.UnityEngine.UIElements.FocusOutEvent;
type GeometryChangedEvent = CS.UnityEngine.UIElements.GeometryChangedEvent;
type InputEvent = CS.UnityEngine.UIElements.InputEvent;
type KeyDownEvent = CS.UnityEngine.UIElements.KeyDownEvent;
type KeyUpEvent = CS.UnityEngine.UIElements.KeyUpEvent;
type MouseCaptureEvent = CS.UnityEngine.UIElements.MouseCaptureEvent;
type MouseCaptureOutEvent = CS.UnityEngine.UIElements.MouseCaptureOutEvent;
type MouseDownEvent = CS.UnityEngine.UIElements.MouseDownEvent;
type MouseEnterEvent = CS.UnityEngine.UIElements.MouseEnterEvent;
type MouseEnterWindowEvent = CS.UnityEngine.UIElements.MouseEnterWindowEvent;
type MouseLeaveEvent = CS.UnityEngine.UIElements.MouseLeaveEvent;
type MouseLeaveWindowEvent = CS.UnityEngine.UIElements.MouseLeaveWindowEvent;
type MouseMoveEvent = CS.UnityEngine.UIElements.MouseMoveEvent;
type MouseOutEvent = CS.UnityEngine.UIElements.MouseOutEvent;
type MouseOverEvent = CS.UnityEngine.UIElements.MouseOverEvent;
type MouseUpEvent = CS.UnityEngine.UIElements.MouseUpEvent;
type NavigationCancelEvent = CS.UnityEngine.UIElements.NavigationCancelEvent;
type NavigationMoveEvent = CS.UnityEngine.UIElements.NavigationMoveEvent;
type NavigationSubmitEvent = CS.UnityEngine.UIElements.NavigationSubmitEvent;
type PickingMode = CS.UnityEngine.UIElements.PickingMode;
type PointerCancelEvent = CS.UnityEngine.UIElements.PointerCancelEvent;
type PointerCaptureEvent = CS.UnityEngine.UIElements.PointerCaptureEvent;
type PointerCaptureOutEvent = CS.UnityEngine.UIElements.PointerCaptureOutEvent;
type PointerDownEvent = CS.UnityEngine.UIElements.PointerDownEvent;
type PointerEnterEvent = CS.UnityEngine.UIElements.PointerEnterEvent;
type PointerLeaveEvent = CS.UnityEngine.UIElements.PointerLeaveEvent;
type PointerMoveEvent = CS.UnityEngine.UIElements.PointerMoveEvent;
type PointerOutEvent = CS.UnityEngine.UIElements.PointerOutEvent;
type PointerOverEvent = CS.UnityEngine.UIElements.PointerOverEvent;
type PointerStationaryEvent = CS.UnityEngine.UIElements.PointerStationaryEvent;
type PointerUpEvent = CS.UnityEngine.UIElements.PointerUpEvent;
type ScrollViewMode = CS.UnityEngine.UIElements.ScrollViewMode;
type ScrollerVisibility = CS.UnityEngine.UIElements.ScrollerVisibility;
type TouchScrollBehavior = CS.UnityEngine.UIElements.ScrollView.TouchScrollBehavior;
type TooltipEvent = CS.UnityEngine.UIElements.TooltipEvent;
type TransitionCancelEvent = CS.UnityEngine.UIElements.TransitionCancelEvent;
type TransitionEndEvent = CS.UnityEngine.UIElements.TransitionEndEvent;
type TransitionRunEvent = CS.UnityEngine.UIElements.TransitionRunEvent;
type TransitionStartEvent = CS.UnityEngine.UIElements.TransitionStartEvent;
type ValidateCommandEvent = CS.UnityEngine.UIElements.ValidateCommandEvent;
type VectorImage = CS.UnityEngine.UIElements.VectorImage;
type WheelEvent = CS.UnityEngine.UIElements.WheelEvent;

declare global {
    export namespace JSX {

        // export interface IntrinsicElements {
        //     [elemName: string]: any; // Allows any element with any props
        //     // For specific elements, define more strictly, e.g.,
        //     // div: any; // For a div, replace `any` with a more specific type as needed
        // }

        interface IntrinsicAttributes {
            id?: string
        }

        // interface VNode<P = {}> {
        //     type: ComponentType<P> | string;
        //     props: P & { children: ComponentChildren };
        //     key: Key;
        //     ref?: Ref<any> | null;
        //     startTime?: number;
        //     endTime?: number;
        // }

        // interface Element extends VNode<any> { }

        /**
         * Base elements
         */

        interface BaseElement {

        }

        type RecursiveElement = string | number | object | bigint | boolean | BaseElement | null | undefined | RecursiveElement[]

        interface CommonEvents {
            onValidateCommand?: (e: ValidateCommandEvent) => void
            onExecuteCommand?: (e: ExecuteCommandEvent) => void
            onDragExited?: (e: DragExitedEvent) => void
            onDragEnter?: (e: DragEnterEvent) => void
            onDragLeave?: (e: DragLeaveEvent) => void
            onDragUpdated?: (e: DragUpdatedEvent) => void
            onDragPerform?: (e: DragPerformEvent) => void
            onFocusOut?: (e: FocusOutEvent) => void
            onBlur?: (e: BlurEvent) => void
            onFocusIn?: (e: FocusInEvent) => void
            onFocus?: (e: FocusEvent) => void
            onInput?: (e: InputEvent) => void
            onKeyDown?: (e: KeyDownEvent) => void
            onKeyUp?: (e: KeyUpEvent) => void
            onGeometryChanged?: (e: GeometryChangedEvent) => void
            onMouseDown?: (e: MouseDownEvent) => void
            onMouseUp?: (e: MouseUpEvent) => void
            onMouseMove?: (e: MouseMoveEvent) => void
            // onContextClick?: (e: ContextClickEvent) => void
            onWheel?: (e: WheelEvent) => void
            onMouseEnter?: (e: MouseEnterEvent) => void
            onMouseLeave?: (e: MouseLeaveEvent) => void
            onMouseEnterWindow?: (e: MouseEnterWindowEvent) => void
            onMouseLeaveWindow?: (e: MouseLeaveWindowEvent) => void
            onMouseOver?: (e: MouseOverEvent) => void
            onMouseOut?: (e: MouseOutEvent) => void
            // onContextualMenuPopulate?: (e: ContextualMenuPopulateEvent) => void
            onNavigationMove?: (e: NavigationMoveEvent) => void
            // onNavigationTab?: (e: NavigationTabEvent) => void
            onNavigationCancel?: (e: NavigationCancelEvent) => void
            onNavigationSubmit?: (e: NavigationSubmitEvent) => void
            onAttachToPanel?: (e: AttachToPanelEvent) => void
            onDetachFromPanel?: (e: DetachFromPanelEvent) => void
            onPointerDown?: (e: PointerDownEvent) => void
            onPointerMove?: (e: PointerMoveEvent) => void
            onPointerStationary?: (e: PointerStationaryEvent) => void
            onPointerUp?: (e: PointerUpEvent) => void
            onPointerCancel?: (e: PointerCancelEvent) => void
            onClick?: (e: ClickEvent) => void
            onPointerEnter?: (e: PointerEnterEvent) => void
            onPointerLeave?: (e: PointerLeaveEvent) => void
            onPointerOver?: (e: PointerOverEvent) => void
            onPointerOut?: (e: PointerOutEvent) => void
            // onCustomStyleResolved?: (e: CustomStyleResolvedEvent) => void
            onTooltip?: (e: TooltipEvent) => void
            onTransitionRun?: (e: TransitionRunEvent) => void
            onTransitionStart?: (e: TransitionStartEvent) => void
            onTransitionEnd?: (e: TransitionEndEvent) => void
            onTransitionCancel?: (e: TransitionCancelEvent) => void
            // onIMGUI?: (e: IMGUIEvent) => void
        }

        type AppendCapture<T> = {
            [K in keyof T as `${Extract<K, string>}Capture`]: T[K]
        };

        type RefObject<T> = { current: T | null };
        type RefCallback<T> = (instance: T | null) => void;
        type Ref<T> = RefObject<T> | RefCallback<T>;

        interface VisualElement extends CommonEvents, AppendCapture<CommonEvents> {
            id?: string
            ref?: Ref<any>
            key?: string | number
            disabled?: boolean

            children?: RecursiveElement

            dangerouslySetInnerHTML?: {
                __html: string;
            }

            name?: string
            class?: string
            style?: Partial<CS.OneJS.Dom.DomStyle>
            tooltip?: string
            focusable?: boolean
            tabindex?: number
            "picking-mode"?: PickingMode
            "view-data-key"?: string

            onPointerCaptureOut?: (e: PointerCaptureOutEvent) => void
            onPointerCapture?: (e: PointerCaptureEvent) => void
            onMouseCaptureOut?: (e: MouseCaptureOutEvent) => void
            onMouseCapture?: (e: MouseCaptureEvent) => void
        }

        type VisualElementNoChildren = Omit<VisualElement, "children">
        type BindableElementNoChildren = Omit<BindableElement, "children">

        interface BindableElement extends VisualElement {
            "binding-path"?: string
        }

        /**
         * Utilities
         */

        interface Box extends VisualElement {

        }

        interface TextElement extends VisualElement {
            text?: string
            enableRichText?: boolean
        }

        interface Label extends TextElement {

        }

        interface Image extends VisualElementNoChildren {
            image?: Texture
            sprite?: Sprite
            vectorImage?: VectorImage
            sourceRect?: Rect
            uv?: Rect
            scaleMode?: ScaleMode
            tintColor?: Color
        }

        interface IMGUIContainer extends VisualElementNoChildren {

        }

        interface Foldout extends BindableElement {

        }

        /**
         * Templates
         */

        interface Template extends BindableElementNoChildren {
            name?: string
            path?: string
        }

        interface Instance extends BindableElementNoChildren {
            template?: string
        }

        interface TemplateContainer extends BindableElementNoChildren {
            template?: string
        }

        /**
         * Controls
         */

        interface BaseField<T> extends BindableElementNoChildren {
            label?: string
            value?: T
            onValueChanged?: (e: ChangeEvent<T>) => void
        }

        interface BaseBoolField extends BaseField<boolean> {
            text?: string
        }

        interface Button extends TextElement {

        }

        interface RadioButton extends BaseBoolField {

        }

        interface RadioButtonGroup extends BaseField<number> {

        }

        interface RepeatButton extends TextElement {
            delay?: number
            interva?: number
        }

        interface Toggle extends BaseBoolField {

        }

        interface Scroller extends VisualElementNoChildren {
            "low-value"?: number
            "high-value"?: number
            direction?: "Horizontal" | "Vertical"
            value?: number
        }

        enum SliderDirection {
            Horizontal,
            Vertical
        }

        interface Slider extends BaseField<number> {
            "low-value"?: number
            "high-value"?: number
            direction?: SliderDirection
            "page-size"?: number
        }

        interface SliderInt extends BaseField<number> {
            "low-value"?: number
            "high-value"?: number
            direction?: SliderDirection
            "page-size"?: number
        }

        interface MinMaxSlider extends BaseField<Vector2> {
            "low-limit"?: number
            "high-limit"?: number
            "min-value"?: number
            "max-value"?: number
        }

        interface EnumField extends BaseField<number> {
            type?: string
            value?: number
        }

        interface ProgressBar extends BindableElementNoChildren {
            "low-value"?: number
            "high-value"?: number
            value?: number
            title?: string
        }

        /**
         * Text input
         */

        interface TextInputBaseField<T> extends BaseField<T> {
            text?: string
            "max-length"?: number
            "is-password-field"?: boolean
            "mask-char"?: string
            "is-read-only"?: boolean
            "select-all-on-focus"?: boolean
            "select-all-on-mouse-up"?: boolean
            "vertical-scroller-visibility"?: ScrollerVisibility
        }

        interface TextField extends TextInputBaseField<string> {
            multiline?: boolean
        }

        interface TextValueField<T> extends TextInputBaseField<T> {
            formatString?: string
        }

        interface IntegerField extends TextValueField<number> {

        }

        interface LongField extends TextValueField<number> {

        }

        interface FloatField extends TextValueField<number> {

        }

        interface DoubleField extends TextValueField<number> {

        }

        interface Vector2Field extends BaseField<Vector2> {
            x?: number
            y?: number
        }

        interface Vector2IntField extends BaseField<Vector2Int> {
            x?: number
            y?: number
        }

        interface Vector3Field extends BaseField<Vector3> {
            x?: number
            y?: number
            z?: number
        }

        interface Vector3IntField extends BaseField<Vector3Int> {
            x?: number
            y?: number
            z?: number
        }

        interface Vector4Field extends BaseField<Vector4> {
            x?: number
            y?: number
            z?: number
            w?: number
        }

        interface RectField extends BaseField<Rect> {
            x?: number
            y?: number
            w?: number
            h?: number
        }

        interface RectIntField extends BaseField<RectInt> {
            x?: number
            y?: number
            w?: number
            h?: number
        }

        interface BoundsField extends BaseField<Bounds> {
            cx?: number
            cy?: number
            cz?: number
            ex?: number
            ey?: number
            ez?: number
        }

        interface BoundsIntField extends BaseField<BoundsInt> {
            px?: number
            py?: number
            pz?: number
            sx?: number
            sy?: number
            sz?: number
        }

        interface ListView extends VisualElementNoChildren {
            "item-height"?: number
        }

        interface SimpleListView extends ListView {
            make?: () => any
            bind?: (e: any, i: number) => void
        }

        interface ScrollView extends VisualElement {
            mode?: ScrollViewMode
            "horizontal-scroller-visibility"?: ScrollerVisibility
            "vertical-scroller-visibility"?: ScrollerVisibility
            "horizontal-page-size"?: number
            "vertical-page-size"?: number
            "touch-scroll-behavior"?: TouchScrollBehavior
            "scroll-deceleration-rate"?: number
            "elasticity"?: number
        }

        interface TreeView extends VisualElement {
            "item-height"?: number
        }

        interface PopupWindow extends TextElement {

        }

        interface DropdownField extends BaseField<string> {
            text?: string
            label?: string
            index?: number
            choices?: string[]
            value?: string
        }

        /**
         * OneJS Elements
         */

        interface GradientRect extends VisualElement {
            colors?: Color[]
        }

        interface Flipbook extends VisualElement {
            src?: string | Texture2D
            count?: number
            interval?: number
            "num-per-row"?: number
            "random-rotation"?: boolean
        }

        /**
         * All-in-one
         */

        export interface IntrinsicElements {
            div: VisualElement
            box: Box
            textelement: TextElement
            label: Label
            image: Image
            foldout: Foldout
            template: Template
            instance: Instance
            templatecontainer: TemplateContainer
            button: Button
            radiobutton: RadioButton
            radiobuttongroup: RadioButtonGroup
            repeatbutton: RepeatButton
            toggle: Toggle
            scroller: Scroller
            slider: Slider
            sliderint: SliderInt
            minmaxslider: MinMaxSlider
            enumfield: EnumField
            progressbar: ProgressBar

            textfield: TextField
            integerfield: IntegerField
            floatfield: FloatField
            vector2field: Vector2Field
            vector2intfield: Vector2IntField
            vector3field: Vector3Field
            vector3intfield: Vector3IntField
            vector4field: Vector4Field
            rectfield: RectField
            rectintfield: RectIntField
            boundsfield: BoundsField
            boundsintfield: BoundsIntField

            listview: ListView
            scrollview: ScrollView
            treeview: TreeView
            popupwindow: PopupWindow
            dropdownfield: DropdownField

            // /* OneJS Custom */
            gradientrect: GradientRect
            // flipbook: Flipbook
            // simplelistview: SimpleListView
        }
    }
}

export type IntrinsicElements = JSX.IntrinsicElements;
export type CommonEvents = JSX.CommonEvents;
export type VisualElement = JSX.VisualElement;

export { };