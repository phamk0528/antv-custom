import { Style } from './basic';
import { ResizeArea } from './theme';
import { S2Event } from "../constant/events/basic";
import { ResizeType, ResizeAreaEffect, ResizeDirectionType } from "../constant/resize";
export declare type ResizeGuideLinePath = [operation: 'M' | 'L', x: number, y: number];
export declare type ResizeEvent = S2Event.LAYOUT_RESIZE | S2Event.LAYOUT_RESIZE_SERIES_WIDTH | S2Event.LAYOUT_RESIZE_ROW_WIDTH | S2Event.LAYOUT_RESIZE_COL_WIDTH | S2Event.LAYOUT_RESIZE_ROW_HEIGHT | S2Event.LAYOUT_RESIZE_COL_HEIGHT | S2Event.LAYOUT_RESIZE_TREE_WIDTH;
export interface ResizeGuideLinePosition {
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
}
export interface ResizePosition {
    offsetX?: number;
    offsetY?: number;
}
export interface ResizeDetail {
    eventType: ResizeEvent;
    style?: Style;
    seriesNumberWidth?: number;
}
export interface ResizeParams {
    resizeInfo?: ResizeInfo;
    style?: Style;
}
export interface ResizeInfo {
    theme: ResizeArea;
    type: ResizeDirectionType;
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
    size: number;
    /** 改动影响区域 */
    effect: ResizeAreaEffect;
    isResizeArea?: boolean;
    /** 字段id */
    id?: string;
}
export interface ResizeActiveOptions {
    rowCellVertical?: boolean;
    cornerCellHorizontal?: boolean;
    colCellHorizontal?: boolean;
    colCellVertical?: boolean;
    rowResizeType?: ResizeType;
}
