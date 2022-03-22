import { IShape } from '@antv/g-canvas';
import { BaseEventImplement } from './base-event';
import { BaseEvent } from './base-interaction';
import { ScrollDirection } from "../common/constant";
import { InteractionBrushSelectionStage } from "../common/constant/interaction";
import { BrushPoint, BrushRange } from "../common/interface";
import { DataCell } from "../cell";
/**
 * Panel area's brush selection interaction
 */
export declare class BrushSelection extends BaseEvent implements BaseEventImplement {
    displayedDataCells: DataCell[];
    prepareSelectMaskShape: IShape;
    startBrushPoint: BrushPoint;
    endBrushPoint: BrushPoint;
    brushRangeDataCells: DataCell[];
    brushSelectionStage: InteractionBrushSelectionStage;
    brushSelectionMinimumMoveDistance: number;
    scrollAnimationComplete: boolean;
    mouseMoveDistanceFromCanvas: number;
    bindEvents(): void;
    private getPrepareSelectMaskTheme;
    private initPrepareSelectMaskShape;
    private setBrushSelectionStage;
    private bindMouseDown;
    private isPointInCanvas;
    private setMoveDistanceFromCanvas;
    formatBrushPointForScroll: (delta: {
        x: number;
        y: number;
    }) => {
        x: {
            value: number;
            needScroll: boolean;
        };
        y: {
            value: number;
            needScroll: boolean;
        };
    };
    private autoScrollIntervalId;
    private autoScrollConfig;
    validateYIndex: (yIndex: number) => number;
    validateXIndex: (xIndex: number) => number;
    adjustNextColIndexWithFrozen: (colIndex: number, dir: ScrollDirection) => any;
    adjustNextRowIndexWithFrozen: (rowIndex: number, dir: ScrollDirection) => any;
    private getNextScrollDelta;
    private onScrollAnimationComplete;
    private autoScroll;
    private handleScroll;
    private clearAutoScroll;
    private renderPrepareSelected;
    private bindMouseMove;
    private bindMouseUp;
    private resetDrag;
    private isValidBrushSelection;
    private setDisplayedDataCells;
    private updatePrepareSelectMask;
    hidePrepareSelectMaskShape(): void;
    private resetScrollDelta;
    private getBrushPoint;
    getBrushRange(): BrushRange;
    private isInBrushRange;
    private getBrushRangeDataCells;
    private showPrepareSelectedCells;
    getSelectedCellMetas: (range: BrushRange) => any[];
    private updateSelectedCells;
}
