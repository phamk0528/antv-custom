import { CellTypes } from '../common/constant';
import { ViewMeta } from '../common/interface';
import { DataCell } from './data-cell';
import { SpreadSheet } from "../sheet-type";
import { S2CellType } from "../common/interface/interaction";
/**
 * Cell for panelGroup area
 */
export declare class MergedCell extends DataCell {
    cells: S2CellType[];
    isPartiallyVisible: boolean;
    constructor(spreadsheet: SpreadSheet, cells: S2CellType[], meta?: ViewMeta, isPartiallyVisible?: boolean);
    handleRestOptions(...[cells]: [S2CellType[]]): void;
    get cellType(): CellTypes;
    update(): void;
    protected initCell(): void;
    /**
     * Draw merged cells background
     */
    protected drawBackgroundShape(): void;
    /**
     * Render data text
     */
    drawTextShape(): void;
}
