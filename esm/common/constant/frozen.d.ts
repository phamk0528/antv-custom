export declare enum FrozenCellType {
    ROW = "row",
    COL = "col",
    TRAILING_ROW = "trailingRow",
    TRAILING_COL = "trailingCol",
    SCROLL = "scroll",
    TOP = "top",
    BOTTOM = "bottom"
}
export declare const FrozenCellGroupMap: {
    row: string;
    col: string;
    trailingCol: string;
    trailingRow: string;
    scroll: string;
    top: string;
    bottom: string;
};
export interface FrozenOpts {
    frozenRowCount: number;
    frozenColCount: number;
    frozenTrailingRowCount: number;
    frozenTrailingColCount: number;
}
export interface FrozenCellIndex {
    x: number;
    y: number;
}
