/// <reference types="lodash" />
import { Hierarchy } from './hierarchy';
import { SpreadSheet } from "../../sheet-type";
import { S2CellType } from "../../common/interface";
import { CornerNodeType } from "../../common/interface/node";
export interface BaseNodeConfig {
    id: string;
    key: string;
    value: string;
    label?: string;
    level?: number;
    rowIndex?: number;
    colIndex?: number;
    parent?: Node;
    isTotals?: boolean;
    isSubTotals?: boolean;
    isCollapsed?: boolean;
    isGrandTotals?: boolean;
    hierarchy?: Hierarchy;
    isPivotMode?: boolean;
    seriesNumberWidth?: number;
    field?: string;
    spreadsheet?: SpreadSheet;
    query?: Record<string, any>;
    belongsCell?: S2CellType;
    isTotalMeasure?: boolean;
    inCollapseNode?: boolean;
    isLeaf?: boolean;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    padding?: number;
    children?: Node[];
    extra?: Record<string, any>;
}
/**
 * Node for cornerHeader, colHeader, rowHeader
 */
export declare class Node {
    isTotalMeasure: boolean;
    config: BaseNodeConfig;
    constructor(cfg: BaseNodeConfig);
    /**
     * Get node's field path
     * eg: node.id = root[&]东北[&]黑龙江
     * => [area, province]
     * @param node
     */
    static getFieldPath(node: Node, isDrillDown?: boolean): string[];
    /**
     * Get all leaves in this node branch, eg:
     *        c1
     *    b1〈
     *        c2
     * a〈
     *        c3
     *    b2〈
     *        c4
     * get a branch's all leaves(c1~c4)
     * @param node
     */
    static getAllLeavesOfNode(node: Node): Node[];
    /**
     * Get all children nodes in this node branch, eg:
     *        c1
     *    b1〈
     *        c2
     * a〈
     *        c3
     *    b2〈
     *        c4
     * get a branch's all nodes(c1~c4, b1, b2)
     * @param node
     */
    static getAllChildrenNode(node: Node): Node[];
    /**
     * Get all children branch in this node branch, eg:
     *        c1
     *    b1〈
     *        c2
     * a〈
     *        c3
     *    b2〈
     *        c4
     * get all branch [[b1,c1],[b1,c2],[b2,c3],[b2,c4]]
     * @param parent
     */
    static getAllBranch(parent: Node): Node[][];
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
    key: string;
    value: string;
    colIndex: number;
    level: number;
    rowIndex: number;
    parent: Node;
    isLeaf: boolean;
    isTotals: boolean;
    colId: string;
    static blankNode(): Node;
    isCollapsed: boolean;
    children: Node[];
    padding: number;
    hierarchy: Hierarchy;
    isPivotMode: boolean;
    seriesNumberWidth: number;
    field: string;
    spreadsheet: SpreadSheet;
    query?: Record<string, any>;
    belongsCell?: S2CellType;
    inCollapseNode?: boolean;
    cornerType?: CornerNodeType;
    isGrandTotals?: boolean;
    isSubTotals?: boolean;
    [key: string]: any;
    static rootNode(): Node;
    toJSON(): import("lodash").Omit<this, "config" | "parent" | "hierarchy" | "spreadsheet">;
}
