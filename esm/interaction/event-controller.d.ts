import { Canvas, Event as CanvasEvent } from '@antv/g-canvas';
import { EmitterType } from "../common/interface/emitter";
import { SpreadSheet } from "../sheet-type";
interface EventListener {
    target: EventTarget;
    type: string;
    handler: EventListenerOrEventListenerObject;
}
interface S2EventHandler {
    type: keyof EmitterType;
    handler: EmitterType[keyof EmitterType];
}
interface EventHandler {
    type: string;
    handler: (event: CanvasEvent) => void;
}
export declare class EventController {
    spreadsheet: SpreadSheet;
    private target;
    canvasEventHandlers: EventHandler[];
    s2EventHandlers: S2EventHandler[];
    domEventListeners: EventListener[];
    private isCanvasEffect;
    constructor(spreadsheet: SpreadSheet);
    get canvasContainer(): Canvas;
    get isAutoResetSheetStyle(): boolean;
    bindEvents(): void;
    private getTargetType;
    private onKeyboardCopy;
    private onKeyboardEsc;
    private resetSheetStyle;
    private isMouseOnTheCanvasContainer;
    private getContainerRect;
    private isMouseOnTheTooltip;
    private isResizeArea;
    private activeResizeArea;
    private resetResizeArea;
    private onCanvasMousedown;
    private onCanvasMousemove;
    private onCanvasMouseup;
    private onCanvasDoubleClick;
    private onCanvasMouseout;
    private onCanvasContextMenu;
    clear(): void;
    private unbindEvents;
    private addCanvasEvent;
    private addS2Event;
    private addDomEventListener;
    clearAllEvents(): void;
}
export {};
