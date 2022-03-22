import type { SimpleBBox } from '@antv/g-canvas';
import type { InteractionStateName, CellTypes, InterceptType, ScrollbarPositionType } from '../constant';
import type { ViewMeta } from './basic';
import type { ResizeActiveOptions } from './resize';
import type { BaseCell, ColCell, CornerCell, DataCell, MergedCell, RowCell } from "../../cell";
import type { HeaderCell } from "../../cell/header-cell";
import type { Node } from "../../facet/layout/node";
import type { BaseEvent } from "../../interaction/base-event";
import type { SpreadSheet } from "../../sheet-type";
export declare type S2CellType<T extends SimpleBBox = ViewMeta> = DataCell | HeaderCell | ColCell | CornerCell | RowCell | MergedCell | BaseCell<T>;
export interface CellMeta {
    id: string;
    colIndex: number;
    rowIndex: number;
    type: CellTypes;
}
export interface InteractionStateInfo {
    stateName?: InteractionStateName;
    cells?: CellMeta[];
    interactedCells?: S2CellType[];
    nodes?: Node[];
    force?: boolean;
}
export interface SelectHeaderCellInfo {
    cell: S2CellType<ViewMeta>;
    isTreeRowClick?: boolean;
    isMultiSelection?: boolean;
}
export declare type InteractionConstructor = new (spreadsheet: SpreadSheet) => BaseEvent;
export interface CustomInteraction {
    key: string;
    interaction: InteractionConstructor;
}
export interface BrushPoint {
    rowIndex: number;
    colIndex: number;
    x: number;
    y: number;
    scrollX?: number;
    scrollY?: number;
}
export interface BrushRange {
    start: BrushPoint;
    end: BrushPoint;
    width: number;
    height: number;
}
export declare type StateShapeLayer = 'interactiveBgShape' | 'interactiveBorderShape';
export declare type Intercept = InterceptType.HOVER | InterceptType.CLICK | InterceptType.BRUSH_SELECTION | InterceptType.MULTI_SELECTION | InterceptType.RESIZE;
export interface BrushAutoScrollConfigItem {
    value: number;
    scroll: boolean;
}
export interface BrushAutoScrollConfig {
    x: BrushAutoScrollConfigItem;
    y: BrushAutoScrollConfigItem;
}
export interface ScrollSpeedRatio {
    horizontal?: number;
    vertical?: number;
}
export interface InteractionOptions {
    readonly linkFields?: string[];
    readonly selectedCellsSpotlight?: boolean;
    readonly hoverHighlight?: boolean;
    readonly hoverFocus?: boolean;
    readonly enableCopy?: boolean;
    readonly copyWithFormat?: boolean;
    readonly autoResetSheetStyle?: boolean;
    readonly hiddenColumnFields?: string[];
    readonly scrollSpeedRatio?: ScrollSpeedRatio;
    readonly resize?: boolean | ResizeActiveOptions;
    readonly brushSelection?: boolean;
    readonly multiSelection?: boolean;
    readonly rangeSelection?: boolean;
    readonly selectedCellMove?: boolean;
    readonly scrollbarPosition?: ScrollbarPositionType;
    /** ***********CUSTOM INTERACTION HOOKS**************** */
    customInteractions?: CustomInteraction[];
}
