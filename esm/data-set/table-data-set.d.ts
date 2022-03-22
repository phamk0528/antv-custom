import { CellDataParams, DataType } from './interface';
import { BaseDataSet } from "./base-data-set";
import { S2DataConfig } from "../common/interface";
export declare class TableDataSet extends BaseDataSet {
    protected displayData: DataType[];
    processDataCfg(dataCfg: S2DataConfig): S2DataConfig;
    setDataCfg(dataCfg: S2DataConfig): void;
    /**
     * 返回顶部冻结行
     * @returns
     */
    protected getStartRows(): DataType[];
    /**
     * 返回底部冻结行
     * @returns
     */
    protected getEndRows(): DataType[];
    /**
     * 返回可移动的非冻结行
     * @returns
     */
    protected getMovableRows(): DataType[];
    handleDimensionValueFilter: () => void;
    handleDimensionValuesSort: () => void;
    getDimensionValues(field: string, query?: DataType): string[];
    getCellData({ query }: CellDataParams): DataType;
    getMultiData(query: DataType, isTotals?: boolean): DataType[];
}
