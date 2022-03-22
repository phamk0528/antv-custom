import { Group, Point } from '@antv/g-canvas';
import { SortParam } from "../../common/interface";
import { Node } from "../layout/node";
import { SpreadSheet } from "../../sheet-type";
/**
 * Base header config interface
 */
export interface BaseHeaderConfig {
    scrollX?: number;
    scrollY?: number;
    width: number;
    height: number;
    originalWidth?: number;
    originalHeight?: number;
    viewportWidth: number;
    viewportHeight: number;
    position: Point;
    data: Node[];
    spreadsheet: SpreadSheet;
    sortParam?: SortParam;
}
/**
 * New Base Header for all headers(cornerHeader, rowHeader, colHeader)
 * NOTE: Do not use this.cfg(which lays in group) to get header config,
 * use {@see headerConfig} instead
 */
export declare abstract class BaseHeader<T extends BaseHeaderConfig> extends Group {
    protected headerConfig: T;
    protected constructor(cfg: T);
    /**
     * 清空热区，为重绘做准备，防止热区重复渲染
     * @param type 当前重绘的header类型
     */
    protected clearResizeAreaGroup(type: string): void;
    render(type: string): void;
    /**
     * Scroll header group's x,y
     * @param scrollX hScrollBar horizontal offset
     * @param scrollY hScrollBar vertical offset
     * @param type
     */
    onScrollXY(scrollX: number, scrollY: number, type: string): void;
    /**
     * Only call when hRowScrollBar scrolls
     * @param rowScrollX  hRowScrollbar horizontal offset
     * @param type
     */
    onRowScrollX(rowScrollX: number, type: string): void;
    protected abstract layout(): any;
    protected abstract offset(): any;
    protected abstract clip(): any;
    clear(): void;
    /**
     * Check whether header cell in viewPort
     * @param gridPos
     * @param gridSize
     * @param viewportPos
     * @param viewportSize
     */
    protected isHeaderCellInViewport: (gridPos: any, gridSize: any, viewportPos: any, viewportSize: any) => boolean;
}
