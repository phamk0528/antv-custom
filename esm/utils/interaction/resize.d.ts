import { IGroup, ShapeAttrs, SimpleBBox } from '@antv/g-canvas';
import { ResizeInfo } from "../../common/interface/resize";
import { SpreadSheet } from "../../sheet-type/spread-sheet";
export declare const getResizeAreaAttrs: (options: Omit<ResizeInfo, 'size'>) => ShapeAttrs;
export declare const getOrCreateResizeAreaGroupById: (spreadsheet: SpreadSheet, id: string) => IGroup;
export declare const shouldAddResizeArea: (resizeArea: SimpleBBox, resizeClipArea: SimpleBBox, scrollOffset?: {
    scrollX?: number;
    scrollY?: number;
}) => boolean;
