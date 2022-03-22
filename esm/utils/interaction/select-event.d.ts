import { CellMeta, S2CellType, ViewMeta } from "../../common/interface";
import { SpreadSheet } from "../../sheet-type";
export declare const getCellMeta: (cell: S2CellType) => {
    id: string;
    colIndex: number;
    rowIndex: number;
    type: import("../../common/constant").CellTypes;
};
export declare const selectCells: (spreadsheet: SpreadSheet, cells: CellMeta[]) => void;
export declare function getRangeIndex<T extends CellMeta | ViewMeta>(start: T, end: T): {
    start: {
        rowIndex: number;
        colIndex: number;
    };
    end: {
        rowIndex: number;
        colIndex: number;
    };
};
