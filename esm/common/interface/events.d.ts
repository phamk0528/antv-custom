import { Event as GEvent } from '@antv/g-canvas';
import { S2CellType } from './interaction';
import { Node } from "../../facet/layout/node";
export interface CellScrollPosition {
    scrollX: number;
    scrollY: number;
    thumbOffset?: number;
}
export interface ListSortParams {
    sortFieldId: string;
    sortMethod: string;
}
export declare type LayoutRow = [number, string, string];
export declare type LayoutCol = [number, string, string];
export interface TargetCellInfo {
    target: S2CellType;
    event: GEvent;
    viewMeta: Node;
}
