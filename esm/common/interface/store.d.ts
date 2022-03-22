import { BBox, Group } from '@antv/g-canvas';
import { InteractionStateInfo, S2CellType, SortParam, ViewMeta } from '../interface';
import { ValueRanges } from './condition';
import { S2DataConfig } from './s2DataConfig';
import { Node } from "../../facet/layout/node";
import { PartDrillDownFieldInLevel } from "./";
import { GuiIcon } from "../icons";
export interface Selected {
    type: 'cell' | 'row' | 'brush' | 'col' | 'column' | 'row&col' | 'column-multiple';
    indexes: [number | number[], number | number[]];
}
export interface ReachedBorderId {
    rowId?: string;
    colId?: string;
}
export interface HiddenColumnsInfo {
    hideColumnNodes: Node[];
    displaySiblingNode: {
        prev: Node;
        next: Node;
    };
}
/**
 * All stored keys need type define here
 */
export interface StoreKey {
    scrollX: number;
    scrollY: number;
    hRowScrollX: number;
    sortParam: SortParam;
    drillDownIdPathMap: Map<string, number[][]>;
    drillDownNode: Node;
    drillItemsNum: number;
    drillDownFieldInLevel: PartDrillDownFieldInLevel[];
    interactionStateInfo: InteractionStateInfo;
    originalDataCfg: S2DataConfig;
    panelBBox: BBox;
    activeResizeArea: Group;
    valueRanges: ValueRanges;
    initColumnLeafNodes: Node[];
    /**
     * 隐藏列详情
     *  | a, b, [c,d 隐藏] [icon e ] , [f 隐藏], [icon g]   |
     */
    hiddenColumnsDetail: HiddenColumnsInfo[];
    lastRenderedColumnFields: string[];
    resized: boolean;
    visibleActionIcons: GuiIcon[];
    lastClickedCell: S2CellType<ViewMeta>;
    [key: string]: unknown;
}
