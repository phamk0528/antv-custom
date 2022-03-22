/// <reference types="node" />
import { EventController } from './event-controller';
import { ColCell, DataCell, MergedCell, RowCell } from "../cell";
import { InteractionStateName, InterceptType } from "../common/constant";
import { InteractionStateInfo, Intercept, MergedCellInfo, S2CellType, SelectHeaderCellInfo } from "../common/interface";
import { BaseEvent } from "./base-event";
import { SpreadSheet } from "../sheet-type";
export declare class RootInteraction {
    spreadsheet: SpreadSheet;
    interactions: Map<string, BaseEvent>;
    intercepts: Set<Intercept>;
    private hoverTimer;
    eventController: EventController;
    private defaultState;
    constructor(spreadsheet: SpreadSheet);
    destroy(): void;
    reset(): void;
    setState(interactionStateInfo: InteractionStateInfo): void;
    getState(): InteractionStateInfo;
    setInteractedCells(cell: S2CellType): void;
    getInteractedCells(): S2CellType<import("../common/interface").ViewMeta>[];
    resetState(): void;
    getCurrentStateName(): InteractionStateName;
    isEqualStateName(stateName: InteractionStateName): boolean;
    private isStateOf;
    isSelectedState(): boolean;
    isHoverFocusState(): boolean;
    isHoverState(): boolean;
    isActiveCell(cell: S2CellType): import("../common/interface").CellMeta;
    isSelectedCell(cell: S2CellType): import("../common/interface").CellMeta;
    getCells(): import("../common/interface").CellMeta[];
    getActiveCells(): S2CellType<import("../common/interface").ViewMeta>[];
    clearStyleIndependent(): void;
    getPanelGroupAllUnSelectedDataCells(): DataCell[];
    getPanelGroupAllDataCells(): DataCell[];
    getAllRowHeaderCells(): RowCell[];
    getAllColHeaderCells(): ColCell[];
    getRowColActiveCells(ids: string[]): S2CellType<import("../common/interface").ViewMeta>[];
    getAllCells(): S2CellType<import("../common/interface").ViewMeta>[];
    selectAll: () => void;
    selectHeaderCell: (selectHeaderCellInfo: SelectHeaderCellInfo) => boolean;
    mergeCells: (cellsInfo?: MergedCellInfo[], hideData?: boolean) => void;
    unmergeCell: (removedCells: MergedCell) => void;
    hideColumns(hiddenColumnFields?: string[]): void;
    private getDefaultInteractions;
    private registerInteractions;
    private registerEventController;
    draw(): void;
    clearState(): void;
    changeState(interactionStateInfo: InteractionStateInfo): void;
    updatePanelGroupAllDataCells(): void;
    updateCells(cells?: S2CellType[]): void;
    addIntercepts(interceptTypes?: InterceptType[]): void;
    hasIntercepts(interceptTypes?: InterceptType[]): boolean;
    removeIntercepts(interceptTypes?: InterceptType[]): void;
    clearHoverTimer(): void;
    setHoverTimer(timer: NodeJS.Timeout): void;
    getHoverTimer(): NodeJS.Timeout;
}
