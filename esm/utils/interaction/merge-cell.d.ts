import { MergedCell } from "../../cell/merged-cell";
import { MergedCellInfo, TempMergedCell, ViewMeta } from "../../common/interface";
import { S2CellType } from "../../common/interface/interaction";
import { SpreadSheet } from "../../sheet-type";
/**
 *  according to the coordinates of the starting point of the rectangle,
 * return the four sides of the rectangle in a clockwise direction.
 * [TopLeft] --- [TopRight]
 *    |               |
 * [BottomLeft] -[BottomRight]
 * @param x
 * @param y
 * @param width
 * @param height
 */
export declare const getRectangleEdges: (x: number, y: number, width: number, height: number) => number[][][];
/**
 * return the edges without overlapping edges
 * @param edges the collection of edges
 */
export declare const unique: (edges: number[][][]) => number[][][];
/**
 * return the edge according to the  coordinate of current edge
 * eg: curEdge: [[0,0], [100,0]] then the next edge: [[100, 0 ], [100, 100]]
 * @param curEdge the  coordinate of current edge
 * @param edges the collection of edges
 */
export declare const getNextEdge: (curEdge: number[][], edges: number[][][]) => number[][];
/**
 * return all the points of the polygon
 * @param cells the collection of information of cells which needed be merged
 */
export declare const getPolygonPoints: (cells: S2CellType[]) => number[][];
/**
 * get cells on the outside of visible area through mergeCellInfo
 * @param invisibleCellInfo
 * @param sheet
 */
export declare const getInvisibleInfo: (invisibleCellInfo: MergedCellInfo[], sheet: SpreadSheet) => {
    cells: S2CellType<ViewMeta>[];
    cellsMeta: ViewMeta;
};
/**
 * get { cells, invisibleCellInfo, cellsMeta } in the inside of visible area through mergeCellInfo
 * @param cellsInfos
 * @param allVisibleCells
 * @returns { cells, invisibleCellInfo, cellsMeta }
 */
export declare const getVisibleInfo: (cellsInfos: MergedCellInfo[], allVisibleCells: S2CellType[]) => {
    cells: S2CellType<ViewMeta>[];
    invisibleCellInfo: MergedCellInfo[];
    cellsMeta: ViewMeta | Node;
};
/**
 * get the data cell and meta that make up the mergedCell
 * @param cellsInfos
 * @param allVisibleCells
 * @param sheet
 */
export declare const getTempMergedCell: (allVisibleCells: S2CellType[], sheet?: SpreadSheet, cellsInfos?: MergedCellInfo[]) => TempMergedCell;
/**
 * get the active cells' info as the default info of merged cells
 * @param sheet
 */
export declare const getActiveCellsInfo: (sheet: SpreadSheet) => MergedCellInfo[];
/**
 * draw the background of the merged cell
 * @param sheet the base sheet instance
 * @param cellsInfo
 * @param hideData
 */
export declare const mergeCell: (sheet: SpreadSheet, cellsInfo?: MergedCellInfo[], hideData?: boolean) => void;
/**
 * remove unmergedCells Info, return new mergedCell info
 * @param removeMergedCell
 * @param mergedCellsInfo
 */
export declare const removeUnmergedCellsInfo: (removeMergedCell: MergedCell, mergedCellsInfo: MergedCellInfo[][]) => MergedCellInfo[][];
/**
 * unmerge MergedCell
 * @param removedCells
 * @param sheet
 */
export declare const unmergeCell: (sheet: SpreadSheet, removedCells: MergedCell) => void;
/**
 * 合并 TempMergedCell, 通过 cell.viewMeta.id 判断 TempMergedCell 是否是同一个。
 * @param TempMergedCells
 * @param otherTempMergedCells
 */
export declare const mergeTempMergedCell: (TempMergedCells: TempMergedCell[], otherTempMergedCells: TempMergedCell[]) => TempMergedCell[];
/**
 * 将 MergedCell 转换成 TempMergedCell
 * @param oldMergedCells
 * @constructor
 */
export declare const MergedCellConvertTempMergedCells: (oldMergedCells: MergedCell[]) => {
    cells: S2CellType<ViewMeta>[];
    viewMeta: ViewMeta;
    isPartiallyVisible: boolean;
}[];
/**
 * 对比两个TempMergedCell，返回 mainTempMergedCells 中存在的，但是 otherTempMergedCells 中不存在的的 TempMergedCell
 * 因为 g-base 无法渲染不在可视区域内的图形，所以 isPartiallyVisible 为 true 时也需要重新渲染
 * @param mainTempMergedCells
 * @param compareTempMergedCells
 */
export declare const differenceTempMergedCells: (mainTempMergedCells: TempMergedCell[], compareTempMergedCells: TempMergedCell[]) => TempMergedCell[];
/**
 * update the mergedCell
 * @param sheet the base sheet instance
 */
export declare const updateMergedCells: (sheet: SpreadSheet) => void;
