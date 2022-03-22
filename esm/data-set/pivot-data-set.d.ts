import { Node } from "../facet/layout/node";
import { Data, Formatter, S2DataConfig, ViewMeta } from "../common/interface";
import { BaseDataSet } from "./base-data-set";
import { CellDataParams, DataType, PivotMeta, SortedDimensionValues } from "./interface";
export declare class PivotDataSet extends BaseDataSet {
    rowPivotMeta: PivotMeta;
    colPivotMeta: PivotMeta;
    sortedDimensionValues: SortedDimensionValues;
    protected pathIndexMax: any[];
    /**
     * When data related config changed, we need
     * 1、re-process config
     * 2、re-transform origin data
     * 3、sort and other things
     * @param dataCfg
     */
    setDataCfg(dataCfg: S2DataConfig): void;
    /**
     * Provide a way to append some drill-down data in indexesData
     * @param extraRowField
     * @param drillDownData
     * @param rowNode
     */
    transformDrillDownData(extraRowField: string, drillDownData: DataType[], rowNode: Node): void;
    /**
     * Clear drill down data by rowNodeId
     * rowNodeId is undefined => clear all
     * @param rowNodeId
     */
    clearDrillDownData(rowNodeId?: string): void;
    /**
     * 排序优先级：
     * 1、sortParams里的条件优先级高于原始数据
     * 2、sortParams多个item：按照顺序优先级，排在后面的优先级高
     * 3、item中多个条件：sortByField > sortFunc > sortBy > sortMethod
     */
    handleDimensionValuesSort: () => void;
    protected standardTransform(originData: Data[], fieldsValues: string[]): any[];
    processDataCfg(dataCfg: S2DataConfig): S2DataConfig;
    getDimensionValues(field: string, query?: DataType): string[];
    getTotalValue(query: DataType): {
        $$value$$: number;
    };
    getCellData(params: CellDataParams): DataType;
    getCustomData: (path: number[]) => DataType | DataType[] | DataType[][];
    getTotalStatus: (query: DataType) => {
        isRowTotal: boolean;
        isRowSubTotal: boolean;
        isColTotal: boolean;
        isColSubTotal: boolean;
    };
    getMultiData(query: DataType, isTotals?: boolean, isRow?: boolean, drillDownFields?: string[]): DataType[];
    getFieldFormatter(field: string, cellMeta?: ViewMeta): Formatter;
    private getFieldFormatterForTotalValue;
    /**
     * 自定义度量组位置值
     * @param customValueOrder 用户配置度量组位置，从 0 开始
     * @param fields Rows || Columns
     */
    private handleCustomMeasuresOrder;
    private isCustomMeasuresPosition;
}
