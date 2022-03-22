import type { Event as CanvasEvent } from '@antv/g-canvas';
import type { SpreadSheet } from "../../sheet-type";
import type { S2CellType, SortParam } from "./";
import type { BaseTooltip } from "../../ui/tooltip";
export declare type TooltipDataItem = Record<string, any>;
export interface TooltipOperatorMenu {
    key: string;
    icon?: Element | string;
    text?: string;
    onClick?: (cell: S2CellType) => void;
    visible?: boolean | ((cell: S2CellType) => boolean);
    children?: TooltipOperatorMenu[];
}
export interface TooltipOperatorOptions {
    onClick?: (...args: unknown[]) => void;
    menus?: TooltipOperatorMenu[];
}
export interface TooltipPosition {
    x: number;
    y: number;
}
export declare type ListItem = {
    name: string;
    value: string | number;
    icon?: Element | string;
};
export interface SortQuery {
    [key: string]: string;
}
export interface TooltipOptions {
    hideSummary?: boolean;
    operator?: TooltipOperatorOptions;
    enterable?: boolean;
    isTotals?: boolean;
    showSingleTips?: boolean;
    onlyMenu?: boolean;
    enableFormat?: boolean;
}
export interface TooltipSummaryOptions {
    name: string;
    value: number | string;
    selectedData: TooltipDataItem[];
}
export interface TooltipNameTipsOptions {
    name?: string;
    tips?: string;
}
export interface TooltipOperationOptions {
    plot: SpreadSheet;
    sortFieldId: string;
    sortQuery: SortQuery;
}
export interface TooltipOperationState {
    sortParam: SortParam;
}
export declare type TooltipDetailProps = {
    list: ListItem[];
};
export declare type TooltipInterpretationOptions = {
    name: string;
    icon?: Element | string;
    text?: string;
    render?: Element | string;
};
export declare type TooltipShowOptions<T = TooltipContentType> = {
    position: TooltipPosition;
    data?: TooltipData;
    cellInfos?: TooltipDataItem[];
    options?: TooltipOptions;
    content?: ((cell: S2CellType, defaultTooltipShowOptions: TooltipShowOptions<T>) => T) | T;
    event?: CanvasEvent | MouseEvent;
};
export declare type TooltipData = {
    summaries?: TooltipSummaryOptions[];
    details?: ListItem[];
    headInfo?: TooltipHeadInfo;
    name?: string;
    tips?: string;
    infos?: string;
    interpretation?: TooltipInterpretationOptions;
    colIndex?: number;
    rowIndex?: number;
};
export declare type TooltipHeadInfo = {
    rows: ListItem[];
    cols: ListItem[];
};
export declare type DataParam = {
    spreadsheet: SpreadSheet;
    options?: TooltipOptions;
    isHeader?: boolean;
    getShowValue?: (selectedData: TooltipDataItem[], valueField: string) => string | number;
};
export declare type IconProps = {
    icon: Element | string;
    [key: string]: unknown;
};
export interface SummaryProps {
    summaries: TooltipSummaryOptions[];
}
export interface SummaryParam extends DataParam {
    cellInfos?: TooltipDataItem[];
}
export interface TooltipDataParam extends DataParam {
    cellInfos: TooltipDataItem[];
}
export interface OrderOption {
    sortMethod: 'ASC' | 'DESC';
    type: 'globalAsc' | 'globalDesc' | 'groupAsc' | 'groupDesc' | 'none';
    name: string;
}
export declare type TooltipAutoAdjustBoundary = 'body' | 'container';
export declare type TooltipContentType = Element | string;
export interface BaseTooltipConfig<T = TooltipContentType> {
    readonly showTooltip?: boolean;
    readonly content?: TooltipShowOptions<T>['content'];
    readonly operation?: TooltipOperation;
    readonly autoAdjustBoundary?: TooltipAutoAdjustBoundary;
    readonly renderTooltip?: (spreadsheet: SpreadSheet) => BaseTooltip;
    readonly getContainer?: () => HTMLElement;
}
export interface Tooltip<T = TooltipContentType> extends BaseTooltipConfig<T> {
    readonly row?: BaseTooltipConfig<T>;
    readonly col?: BaseTooltipConfig<T>;
    readonly corner?: BaseTooltipConfig<T>;
    readonly data?: BaseTooltipConfig<T>;
}
export interface TooltipOperation extends TooltipOperatorOptions {
    hiddenColumns?: boolean;
    trend?: boolean;
    sort?: boolean;
    tableSort?: boolean;
}
export interface AutoAdjustPositionOptions {
    position: TooltipPosition;
    tooltipContainer: HTMLElement;
    spreadsheet: SpreadSheet;
    autoAdjustBoundary: TooltipAutoAdjustBoundary;
}
