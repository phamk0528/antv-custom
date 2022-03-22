import { FilterDataItemCallback, MappingDataItemCallback, S2CellType, CellMeta } from "../../common/interface";
import { Data } from "../../common/interface/s2DataConfig";
export declare const handleDataItem: (data: Data, callback?: FilterDataItemCallback | MappingDataItemCallback) => import("../../common/interface").DataItem | Record<string, string | number>;
/**
 * @description  Determine if the current cell belongs to Cells
 * @param cells active cells
 * @param currentCell current activated cell
 */
export declare const includeCell: (cells: CellMeta[], currentCell: S2CellType) => boolean;
export declare const getDataCellId: (rowIndex: string, colIndex: string) => string;
