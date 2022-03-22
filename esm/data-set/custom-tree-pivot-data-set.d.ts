import { PivotDataSet } from "./pivot-data-set";
import { CellDataParams, DataType } from "./interface";
import { S2DataConfig } from "../common/interface";
export declare class CustomTreePivotDataSet extends PivotDataSet {
    getCellData(params: CellDataParams): DataType;
    setDataCfg(dataCfg: S2DataConfig): void;
    processDataCfg(dataCfg: S2DataConfig): S2DataConfig;
}
