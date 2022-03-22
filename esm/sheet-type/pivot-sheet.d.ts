import { Event as CanvasEvent } from '@antv/g-canvas';
import { SpreadSheet } from './spread-sheet';
import { Node } from "../facet/layout/node";
import { S2Options, SortMethod, SpreadSheetFacetCfg } from "../common/interface";
import { RowCellCollapseTreeRowsType } from "../common/interface/emitter";
export declare class PivotSheet extends SpreadSheet {
    getDataSet(options: S2Options): any;
    /**
     * Check if is pivot mode
     */
    isPivotMode(): boolean;
    /**
     * Check if is pivot mode
     */
    isTableMode(): boolean;
    /**
     * tree type must be in strategy mode
     */
    isHierarchyTreeType(): boolean;
    /**
     * Check whether scroll contains row header
     * For now contains row header in ListSheet mode by default
     */
    isScrollContainsRowHeader(): boolean;
    /**
     * Scroll Freeze Row Header
     */
    isFrozenRowHeader(): boolean;
    /**
     * Check if the value is in the columns
     */
    isValueInCols(): boolean;
    clearDrillDownData(rowNodeId?: string, preventRender?: boolean): void;
    protected getFacetCfgFromDataSetAndOptions(): SpreadSheetFacetCfg;
    protected buildFacet(): void;
    protected bindEvents(): void;
    protected handleRowCellCollapseTreeRows(data: RowCellCollapseTreeRowsType): void;
    protected handleTreeRowsCollapseAll(isCollapsed: boolean): void;
    groupSortByMethod(sortMethod: SortMethod, meta: Node): void;
    handleGroupSort(event: CanvasEvent, meta: Node): void;
}
