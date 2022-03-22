import { IGroup } from '@antv/g-canvas';
import { ColHeader, ColHeaderConfig } from './col';
import { TableColCell, TableCornerCell } from "../../cell";
import { Node } from "../layout/node";
import { SpreadSheet } from "../../sheet-type/index";
/**
 * Column Header for SpreadSheet
 */
export declare class TableColHeader extends ColHeader {
    frozenColGroup: IGroup;
    frozenTrailingColGroup: IGroup;
    constructor(cfg: ColHeaderConfig);
    protected isFrozenCell(meta: Node): boolean;
    clear(): void;
    protected getCellInstance(item: Node, spreadsheet: SpreadSheet, headerConfig: ColHeaderConfig): TableCornerCell | TableColCell;
    protected getCellGroup(node: Node): IGroup;
    protected isColCellInRect(item: Node): boolean;
    getScrollGroupClipBBox: () => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    protected clip(): void;
}
