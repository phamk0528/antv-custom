import { TableColCell } from './table-col-cell';
export declare class TableCornerCell extends TableColCell {
    getStyle(name?: string): any;
    protected showSortIcon(): boolean;
    protected drawLeftBorder(): void;
    protected drawBorders(): void;
}
