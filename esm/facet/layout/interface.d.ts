import { TotalClass } from "./total-class";
import { TotalMeasure } from "./total-measure";
import { Node } from "./node";
import { CustomTreeItem, SpreadSheetFacetCfg } from "../../common/interface";
import { Hierarchy } from "./hierarchy";
import { SpreadSheet } from "../../sheet-type";
import { PivotMeta } from "../../data-set/interface";
export declare type FieldValue = string | TotalClass | TotalMeasure;
export interface BuildHeaderParams {
    isRowHeader: boolean;
    facetCfg: SpreadSheetFacetCfg;
    isTreeHierarchy?: boolean;
}
export interface GridHeaderParams {
    addTotalMeasureInTotal: boolean;
    addMeasureInTotalQuery: boolean;
    parentNode: Node;
    currentField: string;
    fields: string[];
    facetCfg: SpreadSheetFacetCfg;
    hierarchy: Hierarchy;
}
export interface BuildHeaderResult {
    leafNodes: Node[];
    hierarchy: Hierarchy;
}
export interface TotalParams {
    isFirstField: boolean;
    currentField: string;
    lastField: string;
    fieldValues: FieldValue[];
    spreadsheet: SpreadSheet;
}
export interface HeaderNodesParams {
    currentField: string;
    fields: string[];
    fieldValues: FieldValue[];
    addTotalMeasureInTotal: boolean;
    addMeasureInTotalQuery: boolean;
    facetCfg: SpreadSheetFacetCfg;
    hierarchy: Hierarchy;
    parentNode: Node;
    level: number;
    query: Record<string, any>;
}
export interface TreeHeaderParams {
    parentNode: Node;
    facetCfg: SpreadSheetFacetCfg;
    hierarchy: Hierarchy;
    currentField: string;
    level: number;
    pivotMeta: PivotMeta;
}
export interface TableHeaderParams {
    parentNode: Node;
    facetCfg: SpreadSheetFacetCfg;
    hierarchy: Hierarchy;
}
export interface ViewCellHeights {
    getCellOffsetY: (index: number) => number;
    getTotalHeight: () => number;
    getTotalLength: () => number;
    getIndexRange: (minHeight: number, maxHeight: number) => {
        start: number;
        end: number;
    };
}
export interface CustomTreeHeaderParams {
    facetCfg: SpreadSheetFacetCfg;
    parentNode: Node;
    level: number;
    hierarchy: Hierarchy;
    customTreeItems: CustomTreeItem[];
}
