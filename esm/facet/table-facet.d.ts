import type { IGroup } from '@antv/g-canvas';
import { ColHeader } from "./header/col";
import { SeriesNumberHeader } from './header';
import type { LayoutResult, S2CellType, SpreadSheetFacetCfg, ViewMeta } from "../common/interface";
import { BaseFacet } from "./base-facet";
import { PanelIndexes } from "../utils/indexes";
export declare class TableFacet extends BaseFacet {
    rowOffsets: number[];
    frozenGroupInfo: Record<string, {
        width?: number;
        height?: number;
        range?: number[];
    }>;
    panelScrollGroupIndexes: any[];
    constructor(cfg: SpreadSheetFacetCfg);
    get dataCellTheme(): import("../common/interface").CellTheme;
    protected calculateCornerBBox(): void;
    destroy(): void;
    protected doLayout(): LayoutResult;
    private getAdaptiveColWidth;
    private getColNodeHeight;
    private calculateColNodesCoordinate;
    private calculateColLeafNodesWidth;
    protected getDefaultCellHeight(): number;
    getCellHeight(index: number): any;
    protected initRowOffsets(): void;
    getViewCellHeights(): {
        getTotalHeight: () => number;
        getCellOffsetY: (offset: number) => number;
        getTotalLength: () => number;
        getIndexRange: (minHeight: number, maxHeight: number) => {
            start: number;
            end: number;
        };
    };
    protected initFrozenGroupPosition: () => void;
    getTotalHeightForRange: (start: number, end: number) => number;
    private getShadowFill;
    protected renderFrozenGroupSplitLine: (scrollX: number, scrollY: number) => void;
    protected renderFrozenPanelCornerGroup: () => void;
    addFrozenCell: (colIndex: number, rowIndex: number, group: IGroup) => void;
    addCell: (cell: S2CellType<ViewMeta>) => void;
    init(): void;
    protected getColHeader(): ColHeader;
    protected updateRowResizeArea(): void;
    render(): void;
    private getFrozenOptions;
    calculateFrozenGroupInfo(): void;
    protected getRowHeader(): any;
    protected getSeriesNumberHeader(): SeriesNumberHeader;
    protected translateRelatedGroups(scrollX: number, scrollY: number, hRowScroll: number): void;
    calculateXYIndexes(scrollX: number, scrollY: number): PanelIndexes;
    protected clip(scrollX: number, scrollY: number): void;
}
