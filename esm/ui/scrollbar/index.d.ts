import type { IElement, IGroup, IShape } from '@antv/g-canvas';
import { Group } from '@antv/g-canvas';
import type { PointObject, ScrollBarCfg } from './interface';
import { ScrollBarTheme } from "../../common/interface/theme";
export declare enum ScrollType {
    ScrollChange = "scroll-change",
    ScrollEnd = "scroll-end"
}
export interface EventListenerReturn {
    remove: () => void;
}
export interface EventHandler {
    target: IElement;
    type: keyof HTMLElementEventMap;
    handler: (e: MouseEvent | TouchEvent) => void;
}
export declare class ScrollBar extends Group {
    isHorizontal: boolean;
    trackLen: number;
    thumbLen: number;
    position: PointObject;
    minThumbLen: number;
    thumbOffset: number;
    scrollTargetMaxOffset: number;
    theme: ScrollBarTheme;
    scrollBarGroup: IGroup;
    trackShape: IShape;
    thumbShape: IShape;
    private startPos;
    private isMobile;
    private clearEvents;
    private eventHandlers;
    private scrollFrameId;
    constructor(scrollBarCfg: ScrollBarCfg);
    getCoordinates: () => {
        from: string;
        to: string;
    };
    /**
     * 当前滑块滑动的位置 0 ~ 1
     */
    current: () => number;
    /**
     * 更新滑道长度
     * @param newTrackLen 新的滑块长度
     */
    updateTrackLen: (newTrackLen: number) => void;
    /**
     * 更新滑块长度
     * @param newThumbLen 新的滑道长度
     */
    updateThumbLen: (newThumbLen: number) => void;
    /**
     * 更新滑块的 offset 值
     * @param offset
     */
    updateThumbOffset: (offset: number, emitScrollChange?: boolean) => void;
    /**
     * 只更新位置属性，而不emit滚动事件
     * @param offset
     */
    onlyUpdateThumbOffset: (offset: number) => void;
    emitScrollChange: (offset: number, updateThumbOffset?: boolean) => void;
    protected addEventListener: (target: EventTarget, eventType: keyof HTMLElementEventMap, callback: EventListenerOrEventListenerObject) => EventListenerReturn;
    protected addEvent: (target: EventHandler['target'], type: EventHandler['type'], handler: EventHandler['handler']) => void;
    private initScrollBar;
    private createScrollBarGroup;
    private createTrackShape;
    private createThumbShape;
    private bindEvents;
    private onStartEvent;
    private bindLaterEvent;
    private onTrackClick;
    private onMouseMove;
    private onMouseUp;
    private onTrackMouseOver;
    private onTrackMouseOut;
    private validateRange;
}
