/// <reference types="lodash" />
import { Fields, FilterParam, Formatter, Meta, S2DataConfig, SortParams } from '../common/interface';
import { ValueRange } from './../common/interface/condition';
import { CellDataParams, DataType } from "./interface";
import { SpreadSheet } from "../sheet-type";
export declare abstract class BaseDataSet {
    fields: Fields;
    meta: Meta[];
    originData: DataType[];
    totalData: DataType[];
    indexesData: DataType[][] | DataType[];
    sortParams: SortParams;
    filterParams: FilterParam[];
    protected spreadsheet: SpreadSheet;
    constructor(spreadsheet: SpreadSheet);
    protected displayData: DataType[];
    /**
     * 查找字段信息
     */
    getFieldMeta: ((field: string, meta?: Meta[]) => Meta) & import("lodash").MemoizedFunction;
    /**
     * 获得字段名称
     * @param field
     */
    getFieldName(field: string): string;
    /**
     * 获得字段格式方法
     * @param field
     */
    getFieldFormatter(field: string): Formatter;
    /**
     * 获得字段描述
     * @param field
     */
    getFieldDescription(field: string): string;
    setDataCfg(dataCfg: S2DataConfig): void;
    getDisplayDataSet(): DataType[];
    getValueRangeByField(field: string): ValueRange;
    /** ******************NEED IMPLEMENT BY USER CASE************************ */
    /**
     * Try to process dataConfig in different mode
     * @param dataCfg
     */
    abstract processDataCfg(dataCfg: S2DataConfig): S2DataConfig;
    /**
     * 1、query !== null
     * province  city => field
     *   辽宁省
     *          达州市
     *          芜湖市
     *  field = province
     *  query = {province: '辽宁省'}
     *  => [达州市,芜湖市]
     *
     *  2、query = null
     *  query param is not necessary, when just
     *  get some field's all dimension values
     *
     * @param field current dimensions
     * @param query dimension value query
     */
    abstract getDimensionValues(field: string, query?: DataType): string[];
    /**
     * In most cases, this function to get the specific
     * cross data cell data
     * @param params
     */
    abstract getCellData(params: CellDataParams): DataType;
    /**
     * To get a row or column cells data;
     * if query is empty, return all data
     * @param query
     * @param isTotals
     * @param isRow
     * @param drillDownFields
     */
    abstract getMultiData(query: DataType, isTotals?: boolean, isRow?: boolean, drillDownFields?: string[]): DataType[];
    moreThanOneValue(): boolean;
}
