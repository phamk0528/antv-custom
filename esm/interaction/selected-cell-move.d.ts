import { BaseEvent, BaseEventImplement } from './base-interaction';
import { CellMeta } from "../common";
import { SpreadSheet } from "../sheet-type";
export declare class SelectedCellMove extends BaseEvent implements BaseEventImplement {
    startCell: CellMeta | null;
    endCell: CellMeta | null;
    constructor(spreadsheet: SpreadSheet);
    bindEvents(): void;
    private getCellMetaFromViewMeta;
    private handleMove;
    private generateCellMeta;
    private getRangeCells;
    private getMoveInfo;
    private calculateOffset;
    scrollToActiveCell(spreadsheet: SpreadSheet, rowIndex: number, colIndex: number): void;
}
