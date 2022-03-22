/**
 * 获取tooltip中需要显示的数据项
 */
import * as CSS from 'csstype';
import { Event as CanvasEvent } from '@antv/g-canvas';
import { AutoAdjustPositionOptions, Data, ListItem } from "../common/interface";
import { LayoutResult } from "../common/interface/basic";
import { SummaryParam, TooltipData, TooltipDataItem, TooltipDataParam, TooltipHeadInfo, TooltipOptions, TooltipPosition, TooltipSummaryOptions, TooltipOperatorOptions, TooltipOperation, TooltipOperatorMenu } from "../common/interface/tooltip";
import { S2CellType } from "../common/interface/interaction";
import { SpreadSheet } from "../sheet-type";
import { CellTypes } from "../common/constant";
import { Tooltip, ViewMeta } from "../common/interface";
/** whether the data of hover is selected */
export declare const isHoverDataInSelectedData: (selectedData: TooltipDataItem[], activeData: TooltipDataItem) => boolean;
/**
 * calculate tooltip show position
 */
export declare const getAutoAdjustPosition: ({ spreadsheet, position, tooltipContainer, autoAdjustBoundary, }: AutoAdjustPositionOptions) => TooltipPosition;
export declare const getTooltipDefaultOptions: (options?: TooltipOptions) => TooltipOptions;
export declare const getMergedQuery: (meta: ViewMeta) => {
    [x: string]: any;
};
/**
 * add style to container
 */
export declare const setContainerStyle: (container: HTMLElement, options?: {
    style?: CSS.Properties;
    className?: string;
}) => void;
export declare const getFriendlyVal: (val: any) => number | string;
export declare const getFieldFormatter: (spreadsheet: SpreadSheet, field: string) => (v: unknown, data?: Data) => string | number;
export declare const getListItem: (spreadsheet: SpreadSheet, { data, field, valueField, useCompleteDataForFormatter, }: {
    data: TooltipDataItem;
    field: string;
    valueField?: string;
    useCompleteDataForFormatter?: boolean;
}) => ListItem;
export declare const getFieldList: (spreadsheet: SpreadSheet, fields: string[], activeData: TooltipDataItem) => ListItem[];
/**
 * 获取选中格行/列头信息
 * @param spreadsheet
 * @param activeData
 */
export declare const getHeadInfo: (spreadsheet: SpreadSheet, activeData: TooltipDataItem, options?: TooltipOptions) => TooltipHeadInfo;
/**
 * 获取数据明细
 * @param spreadsheet
 * @param activeData
 * @param options
 */
export declare const getDetailList: (spreadsheet: SpreadSheet, activeData: TooltipDataItem, options: TooltipOptions) => ListItem[];
export declare const getSummaryName: (spreadsheet: SpreadSheet, currentField: any, isTotals: any) => string;
export declare const getSelectedValueFields: (selectedData: TooltipDataItem[], field: string) => string[];
export declare const getSelectedCellIndexes: (spreadsheet: SpreadSheet, layoutResult: LayoutResult) => any[];
export declare const getSelectedCellsData: (spreadsheet: SpreadSheet, showSingleTips?: boolean) => TooltipDataItem[];
export declare const getSummaries: (params: SummaryParam) => TooltipSummaryOptions[];
export declare const getTooltipData: (params: TooltipDataParam) => {
    summaries: any;
    interpretation: any;
    infos: any;
    tips: any;
    name: any;
    headInfo: any;
    details: any;
};
export declare const mergeCellInfo: (cells: S2CellType[]) => TooltipData[];
export declare const getActiveCellsTooltipData: (spreadsheet: SpreadSheet) => TooltipData[];
export declare const getTooltipOptionsByCellType: (cellTooltipConfig: Tooltip, cellType: CellTypes) => Tooltip;
export declare const getTooltipOptions: (spreadsheet: SpreadSheet, event: CanvasEvent | MouseEvent | Event) => Tooltip;
export declare const getTooltipVisibleOperator: (operation: TooltipOperation, options: {
    defaultMenus?: TooltipOperatorMenu[];
    cell: S2CellType;
}) => TooltipOperatorOptions;
