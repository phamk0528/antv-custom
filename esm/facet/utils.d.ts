import { SimpleBBox, IGroup } from '@antv/g-canvas';
import { Indexes } from '../utils/indexes';
import { ViewCellHeights } from './layout/interface';
import { FrozenCellType, FrozenOpts, FrozenCellIndex } from "../common/constant/frozen";
import { Pagination, ScrollSpeedRatio } from "../common/interface";
export declare const isFrozenCol: (colIndex: number, frozenCount: number) => boolean;
export declare const isFrozenTrailingCol: (colIndex: number, frozenCount: number, colLength: number) => boolean;
export declare const isFrozenRow: (rowIndex: number, minRowIndex: number, frozenCount: number) => boolean;
export declare const isFrozenTrailingRow: (rowIndex: number, maxRowIndex: number, frozenCount: number) => boolean;
/**
 * 计算偏移 scrollX、scrollY 的时候，在视窗中的节点索引
 * @param scrollX
 * @param scrollY
 * @param widths
 * @param heights
 * @param viewport
 * @param rowRemainWidth
 */
export declare const calculateInViewIndexes: (scrollX: number, scrollY: number, widths: number[], heights: ViewCellHeights, viewport: SimpleBBox, rowRemainWidth?: number) => Indexes;
/**
 * 优化滚动方向，对于小角度的滚动，固定为一个方向
 * @param x
 * @param y
 * @param ratio
 */
export declare const optimizeScrollXY: (x: number, y: number, ratio: ScrollSpeedRatio) => [number, number];
export declare const translateGroup: (group: IGroup, scrollX: number, scrollY: number) => void;
export declare const translateGroupX: (group: IGroup, scrollX: number) => void;
export declare const translateGroupY: (group: IGroup, scrollY: number) => void;
/**
 * frozen                     frozenTrailing
 * ColCount                   ColCount
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * |     |     frozenRow     |          |  frozenRowCount
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * | fro |                   | fro      |
 * | zen |      panel        | zen      |
 * | col |      scroll       | trailing |
 * |     |                   | col      |
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * |     | frozenTrailingRow |          |  frozenTrailingRowCount
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @description returns which group data cell belongs in frozen mode
 */
export declare const getFrozenDataCellType: (meta: {
    colIndex: number;
    rowIndex: number;
}, frozenOpts: FrozenOpts, colLength: number, cellRange: {
    start: number;
    end: number;
}) => FrozenCellType.ROW | FrozenCellType.COL | FrozenCellType.TRAILING_ROW | FrozenCellType.TRAILING_COL | FrozenCellType.SCROLL;
/**
 * @description calculate all cells in frozen group's intersection region
 */
export declare const calculateFrozenCornerCells: (opts: FrozenOpts, colLength: number, cellRange: {
    start: number;
    end: number;
}) => {
    [key: string]: FrozenCellIndex[];
};
export declare const isFrozenCell: (colIndex: number, rowIndex: number, frozenOpts: FrozenOpts, colLength: number, cellRange: {
    start: number;
    end: number;
}) => boolean;
/**
 * @description split all cells in current panel with five child group
 */
export declare const splitInViewIndexesWithFrozen: (indexes: Indexes, frozenOpts: FrozenOpts, colLength: number, cellRange: {
    start: number;
    end: number;
}) => {
    center: Indexes;
    frozenRow: Indexes;
    frozenCol: Indexes;
    frozenTrailingCol: Indexes;
    frozenTrailingRow: Indexes;
};
export declare const getCellRange: (viewCellHeights: ViewCellHeights, pagination?: Pagination) => {
    start: number;
    end: number;
};
