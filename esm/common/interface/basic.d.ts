import { Event, ShapeAttrs } from '@antv/g-canvas';
import { S2CellType } from './interaction';
import { DataItem, S2DataConfig } from './s2DataConfig';
import { BaseHeaderConfig } from "../../facet/header/base";
import { Condition, CustomTreeItem, Data, ResizeInfo } from "./";
import { S2BasicOptions } from "./s2Options";
import { BaseDataSet, DataType } from "../../data-set";
import { Frame } from "../../facet/header";
import { CellTypes } from "../constant";
import { FrameConfig } from "./frame";
import { Hierarchy } from "../../facet/layout/hierarchy";
import { Node } from "../../facet/layout/node";
import { SpreadSheet } from "../../sheet-type";
import { S2Options, S2TableSheetOptions } from "./s2Options";
export declare type Formatter = (v: unknown, data?: Data | Data[]) => string;
export interface FormatResult {
    formattedValue: string;
    value: DataItem;
}
export declare type SortMethod = 'ASC' | 'DESC' | 'asc' | 'desc';
export declare enum CellBorderPosition {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
/**
 * 布局类型：
 * adaptive: 行列等宽，均分整个 canvas 画布宽度
 * colAdaptive：列等宽，行头紧凑布局，列等分画布宽度减去行头宽度的剩余宽度
 * compact：行列紧凑布局，指标维度少的时候无法布满整个画布
 */
export declare type LayoutWidthType = 'adaptive' | 'colAdaptive' | 'compact';
export interface Meta {
    readonly field?: string;
    readonly name?: string;
    readonly description?: string;
    readonly formatter?: Formatter;
}
/**
 * Strategy mode's value type
 * data's key size must be equals fields.length
 * value can be empty
 * FieldC(Last fields is real value field)
 * example:
 * {
 *   fields: [fieldA, fieldB, fieldC],
 *   data: [
 *   {
 *     fieldA: 'valueA',
 *     fieldB: 'valueB',
 *     fieldC: 'valueC',
 *   }
 *   {
 *     fieldA: 'valueA',
 *     fieldB: '',
 *     fieldC: 'valueC',
 *   }
 *   ]
 * }
 */
export interface Extra {
    key: string;
    collapse: boolean;
    remark: string;
}
export interface Fields {
    rows?: string[];
    customTreeItems?: CustomTreeItem[];
    columns?: string[];
    values?: string[];
    valueInCols?: boolean;
    customValueOrder?: number;
}
export interface TotalsStatus {
    isRowTotal: boolean;
    isRowSubTotal: boolean;
    isColTotal: boolean;
    isColSubTotal: boolean;
}
export declare enum Aggregation {
    SUM = "SUM",
    MIN = "MIN",
    MAX = "MAX",
    AVG = "AVG"
}
export interface CalcTotals {
    aggregation?: Aggregation;
    calcFunc?: (query: DataType, arr: DataType[]) => number;
}
export interface Total {
    /** 是否显示总计 */
    showGrandTotals: boolean;
    /** 是否显示小计 */
    showSubTotals: boolean;
    calcTotals?: CalcTotals;
    calcSubTotals?: CalcTotals;
    /** 小计的汇总维度 */
    subTotalsDimensions: string[];
    /** 总计布局位置，默认是下或右 */
    reverseLayout: boolean;
    /** 小计布局位置，默认下或者右 */
    reverseSubLayout: boolean;
    label?: string;
    subLabel?: string;
}
/**
 * tableau的英文是这个，这里有个绕的概念
 * 如，某行维度需要展示小计，实际上是将对应的一列数据进行聚合，所以文案上显示的应该是“展示列小计”
 * 但是内部配置我倾向于仍然按照字段所属维度区，即配置的row，代表的是行维度而不是行小计
 */
export interface Totals {
    readonly row?: Partial<Readonly<Total>>;
    readonly col?: Partial<Readonly<Total>>;
}
export interface Sort {
    /** 字段id，业务中一般是displayId */
    sortFieldId: string;
    sortMethod?: SortMethod;
    /** 自定义排序 */
    sortBy?: string[];
    /** 按照数值字段排序 */
    sortByMeasure?: string;
    /** 筛选条件，缩小排序范围 */
    query?: Record<string, any>;
    /** 组内排序用来显示icon */
    type?: string;
}
export interface SortFuncParam extends Sort {
    data: Array<string | Record<string, any>>;
}
export interface SortParam extends Sort {
    /** 自定义func */
    sortFunc?: (v: SortFuncParam) => Array<string | Record<string, any>>;
}
export interface FilterParam {
    filterKey: string;
    filteredValues?: unknown[];
    customFilter?: (row: DataType) => boolean;
}
export declare type SortParams = SortParam[];
export interface Style {
    readonly layoutWidthType?: LayoutWidthType;
    readonly treeRowsWidth?: number;
    readonly collapsedRows?: Record<string, boolean>;
    readonly collapsedCols?: Record<string, boolean>;
    readonly cellCfg?: CellCfg;
    readonly colCfg?: ColCfg;
    readonly rowCfg?: RowCfg;
    readonly device?: 'pc' | 'mobile';
}
export declare type Pagination = {
    pageSize: number;
    current: number;
    total?: number;
};
export interface CustomSVGIcon {
    name: string;
    svg: string;
}
export interface HeaderActionIconProps {
    iconName: string;
    meta: Node;
    event?: Event;
}
export interface HeaderActionIcon {
    iconNames: string[];
    belongsCell: Omit<CellTypes, 'dataCell'>;
    defaultHide?: boolean;
    displayCondition?: (mete: Node) => boolean;
    action: (headerActionIconProps: HeaderActionIconProps) => void;
}
export declare type LayoutArrangeCallback = (spreadsheet: SpreadSheet, parent: Node, field: string, fieldValues: string[]) => string[];
export declare type LayoutCallback = (spreadsheet: SpreadSheet, rowNode: Node, colNode: Node) => void;
export declare type CellCallback<T extends BaseHeaderConfig> = (node: Node, spreadsheet: SpreadSheet, headerConfig: T) => S2CellType;
export declare type DataCellCallback = (viewMeta: ViewMeta) => S2CellType;
export declare type FrameCallback = (cfg: FrameConfig) => Frame;
export declare type CornerHeaderCallback = (parent: S2CellType, spreadsheet: SpreadSheet, ...restOptions: unknown[]) => void;
export declare type HierarchyResult = {
    nodes: Node[];
    push: boolean;
};
export declare type HierarchyCallback = (spreadsheet: SpreadSheet, node: Node) => HierarchyResult;
export interface CellCfg {
    width?: number;
    height?: number;
    valuesCfg?: {
        originalValueField?: string;
        widthPercentCfg?: number[];
        conditions?: {
            text: Condition;
        };
    };
}
export interface RowCfg {
    width?: number;
    widthByField?: Record<string, number>;
    heightByField?: Record<string, number>;
    treeRowsWidth?: number;
}
export interface ColCfg {
    height?: number;
    widthByFieldValue?: Record<string, number>;
    heightByField?: Record<string, number>;
    hideMeasureColumn?: boolean;
}
/**
 * the label names of rows or columns.
 * Using the ID_SEPARATOR('[&]') to join two labels
 * when there are hierarchical relations between them.
 */
export interface CustomHeaderCells {
    cellLabels: string[];
    mode?: 'pick' | 'omit';
}
/**
 * the index of rows or columns.
 */
export interface MergedCellInfo {
    colIndex?: number;
    rowIndex?: number;
    showText?: boolean;
}
/**
 * the data cell and meta that make up the mergedCell, temporary use
 */
export declare type TempMergedCell = {
    cells: S2CellType[];
    viewMeta: ViewMeta;
    isPartiallyVisible?: boolean;
};
export declare type FilterDataItemCallback = (valueField: string, data: DataItem) => DataItem;
export declare type MappingDataItemCallback = (valueField: string, data: DataItem) => Record<string, string | number> | DataItem;
/**
 * Spreadsheet facet config
 */
export interface SpreadSheetFacetCfg extends Fields, S2BasicOptions, S2TableSheetOptions, Style {
    spreadsheet: SpreadSheet;
    dataSet: BaseDataSet;
    meta?: Meta[];
}
export interface ViewMeta {
    spreadsheet: SpreadSheet;
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    data: Record<string, any>;
    rowIndex: number;
    colIndex: number;
    valueField: string;
    fieldValue: DataItem;
    isTotals?: boolean;
    rowQuery?: Record<string, any>;
    colQuery?: Record<string, any>;
    rowId?: string;
    colId?: string;
    field?: string;
    [key: string]: any;
}
export declare type ViewMetaIndexType = keyof Pick<ViewMeta, 'colIndex' | 'rowIndex'>;
export declare type GetCellMeta = (rowIndex?: number, colIndex?: number) => ViewMeta;
export interface LayoutResult {
    colNodes: Node[];
    colsHierarchy: Hierarchy;
    rowNodes: Node[];
    rowsHierarchy: Hierarchy;
    rowLeafNodes: Node[];
    colLeafNodes: Node[];
    getCellMeta: GetCellMeta;
    spreadsheet: SpreadSheet;
}
export interface OffsetConfig {
    offsetX?: {
        value: number | undefined;
        animate?: boolean;
    };
    offsetY?: {
        value: number | undefined;
        animate?: boolean;
    };
}
export interface CellAppendInfo<T = Node> extends Partial<ResizeInfo> {
    isRowHeaderText?: boolean;
    cellData?: T;
}
export interface CellAttrs<T extends Record<string, unknown> = Node> extends ShapeAttrs {
    text?: string;
    appendInfo?: CellAppendInfo<T>;
}
export declare type S2MountContainer = string | Element;
export declare type S2Constructor<T = Element | string> = [
    S2MountContainer,
    S2DataConfig,
    S2Options<T>
];
export interface OriginalEvent extends Event {
    layerX: number;
    layerY: number;
}
export interface PartDrillDownDataCache {
    rowId: string;
    drillLevel: number;
    drillField: string;
    drillData: Record<string, string | number>[];
}
export interface PartDrillDownFieldInLevel {
    drillField: string;
    drillLevel: number;
}
export interface TableSortParam extends SortParam {
    sortKey: string;
}
