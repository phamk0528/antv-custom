import { BaseFacet } from "./base-facet";
import { LayoutResult } from "../common/interface";
export declare class PivotFacet extends BaseFacet {
    get rowCellTheme(): import("../common").CellTheme;
    protected doLayout(): LayoutResult;
    private calculateNodesCoordinate;
    /**
     * Calculate all col header related coordinate
     * height, width, x, y
     * colsHierarchy's height
     * colsHierarchy's width
     * @param colLeafNodes
     * @param colsHierarchy
     */
    private calculateColNodesCoordinate;
    /**
     * Auto Auto Auto column no-leaf node's width and x coordinate
     * @param colLeafNodes
     */
    private autoCalculateColNodeWidthAndX;
    private calculateColLeafNodesWidth;
    private getColNodeHeight;
    /**
     * 获得图标区域预估宽度
     * 不考虑用户自定义的 displayCondition 条件
     * @param iconStyle 图标样式
     * @returns 宽度
     */
    private getExpectedCellIconWidth;
    /**
     * Calculate all row header related coordinate
     * height, width, x, y
     * rowHierarchy's height
     * rowHierarchy's width
     * @param rowLeafNodes
     * @param rowsHierarchy
     */
    private calculateRowNodesCoordinate;
    /**
     * @description Auto calculate row no-leaf node's height and y coordinate
     * @param rowLeafNodes
     */
    private autoCalculateRowNodeHeightAndY;
    /**
     * @description adjust the coordinate of total nodes and their children
     * @param hierarchy Hierarchy
     * @param isRowHeader boolean
     */
    private adustTotalNodesCoordinate;
    /**
     * @description adust the coordinate of subTotal nodes when there is just one value
     * @param hierarchy Hierarchy
     * @param isRowHeader boolean
     */
    private adjustSubTotalNodesCoordinate;
    /**
     * 计算 grid 模式下 node 宽度
     * @param node
     * @returns
     */
    private calculateGridRowNodesWidth;
    /**
     *  计算树状模式等宽条件下的列宽
     * @returns number
     */
    private getAdaptTreeColWidth;
    private getColLabelLength;
    /**
     *  计算平铺模式等宽条件下的列宽
     * @returns number
     */
    private getAdaptGridColWidth;
    /**
     * 计算树状结构行头宽度
     * @returns number
     */
    private getTreeRowHeaderWidth;
    /**
     * 计算 compact 模式下 node 宽度
     *
     * |   fieldName  |
     *  _______________
     * | label - icon  | <- node
     * | label - icon  |
     * | label - icon  |
     *
     * @param node 目标节点
     * @returns 宽度
     */
    private getCompactGridRowWidth;
    getViewCellHeights(layoutResult: LayoutResult): {
        getTotalHeight: () => number;
        getCellOffsetY: (index: number) => number;
        getTotalLength: () => number;
        getIndexRange: (minHeight: number, maxHeight: number) => {
            start: number;
            end: number;
        };
    };
}
