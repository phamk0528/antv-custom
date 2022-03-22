import { DataCell } from "./data-cell";
import { CellTypes } from "../common/constant";
import { TextTheme } from "../common/interface";
export declare class TableRowCell extends DataCell {
    get cellType(): CellTypes;
    protected getTextStyle(): TextTheme;
    protected drawBorderShape(): void;
    drawResizeArea(): void;
}
