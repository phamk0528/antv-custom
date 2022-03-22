import { Node } from "../../facet/layout/node";
import { CellTypes } from "../../common/constant";
import { DefaultCellTheme, IconTheme } from "../../common/interface/theme";
import { SpreadSheet } from "../../sheet-type";
export declare const getTableColIconsWidth: (ss: SpreadSheet, meta: Node, cellType: CellTypes, iconStyle: IconTheme) => number;
export declare const getExtraPaddingForExpandIcon: (ss: SpreadSheet, field: string, style: DefaultCellTheme) => {
    left: any;
    right: any;
};
export declare const getOccupiedWidthForTableCol: (s2: SpreadSheet, meta: Node, style: DefaultCellTheme) => any;
