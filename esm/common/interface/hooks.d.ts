import { Node } from "../../facet/layout/node";
import { SpreadSheet } from "../../sheet-type";
import { GetCellMeta } from "./basic";
/**
 * determine the order of every row/column tree branch
 */
export declare type LayoutArrange = (spreadsheet: SpreadSheet, parent: Node, field: string, fieldValues: string[]) => string[];
/**
 * determine what does row/column hierarchy look like
 * eg: add/delete some nodes in the specified position
 */
export declare type LayoutHierarchy = (spreadsheet: SpreadSheet, node: Node) => LayoutHierarchyReturnType;
export interface LayoutHierarchyReturnType {
    push?: Node[];
    unshift?: Node[];
    delete?: boolean;
}
/**
 * determine the location(x,y,width,height eg..) of every node
 */
export declare type LayoutCoordinate = (spreadsheet: SpreadSheet, rowNode: Node, colNode: Node) => void;
/**
 * determine the data of cells in Cartesian coordinates
 */
export declare type LayoutDataPosition = (spreadsheet: SpreadSheet, getCellData: GetCellMeta) => GetCellMeta;
