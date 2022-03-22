import { IGroup } from '@antv/g-canvas';
import { BaseEvent, BaseEventImplement } from './base-interaction';
import { ResizePosition } from "../common/interface/resize";
export declare class RowColumnResize extends BaseEvent implements BaseEventImplement {
    private resizeTarget;
    resizeReferenceGroup: IGroup;
    resizeStartPosition: ResizePosition;
    bindEvents(): void;
    private initResizeGroup;
    private getResizeAreaTheme;
    private setResizeTarget;
    private getGuideLineWidthAndHeight;
    private updateResizeGuideLinePosition;
    private bindMouseDown;
    private bindMouseMove;
    private getResizeGuideLinePosition;
    private getResizeWidthDetail;
    private getResizeHeightDetail;
    private getResizeDetail;
    private showResizeGroup;
    private hideResizeGroup;
    private bindMouseUp;
    private resizeMouseMove;
    private updateHorizontalResizingEndGuideLinePosition;
    private updateVerticalResizingEndGuideLinePosition;
    private renderResizedResult;
    private getResizeInfo;
    private render;
}
