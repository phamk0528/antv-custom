import type { IGroup, IShape } from '@antv/g-canvas';
import { BaseHeader, BaseHeaderConfig } from './base';
import { ColCell } from "../../cell";
import { Node } from "../layout/node";
import { SpreadSheet } from "../../sheet-type/index";
export interface ColHeaderConfig extends BaseHeaderConfig {
    cornerWidth?: number;
    scrollContainsRowHeader?: boolean;
}
/**
 * Column Header for SpreadSheet
 */
export declare class ColHeader extends BaseHeader<ColHeaderConfig> {
    protected scrollGroup: IGroup;
    protected background: IShape;
    constructor(cfg: ColHeaderConfig);
    /**
     * Make colHeader scroll with hScrollBar
     * @param scrollX horizontal offset
     * @param cornerWidth only has real meaning when scroll contains rowCell
     * @param type
     */
    onColScroll(scrollX: number, type: string): void;
    protected clip(): void;
    clear(): void;
    protected getCellInstance(item: Node, spreadsheet: SpreadSheet, headerConfig: ColHeaderConfig): ColCell;
    protected getCellGroup(node: Node): IGroup;
    protected isColCellInRect(item: Node): boolean;
    protected layout(): void;
    protected offset(): void;
}
