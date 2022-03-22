import { Node } from "../facet/layout/node";
import { BaseDataSet } from "./base-data-set";
import { SortParam } from "../common/interface";
export declare type DataType = Record<string, any>;
export declare type PivotMetaValue = {
    level: number;
    children: PivotMeta;
    childField?: string;
};
export declare type PivotMeta = Map<string, PivotMetaValue>;
export declare type SortedDimensionValues = Record<string, string[]>;
export declare type DataPathParams = {
    rowDimensionValues: string[];
    colDimensionValues: string[];
    isFirstCreate?: boolean;
    careUndefined?: boolean;
    rowFields?: string[];
    colFields?: string[];
    rowPivotMeta?: PivotMeta;
    colPivotMeta?: PivotMeta;
};
export interface CellDataParams {
    query: DataType;
    isTotals?: boolean;
    rowNode?: Node;
    isRow?: boolean;
}
export interface SortActionParams {
    dataSet?: BaseDataSet;
    sortParam?: SortParam;
    originValues?: string[];
    measureValues?: string[];
    sortByValues?: string[];
    isSortByMeasure?: boolean;
}
