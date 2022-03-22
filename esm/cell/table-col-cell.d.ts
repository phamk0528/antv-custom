import { Group } from '@antv/g-canvas';
import { ColCell } from "./col-cell";
export declare class TableColCell extends ColCell {
    protected handleRestOptions(...[headerConfig]: [any]): void;
    protected isFrozenCell(): boolean;
    protected getColResizeArea(): Group | import("@antv/g-canvas").IGroup;
    protected isSortCell(): boolean;
    protected showSortIcon(): boolean;
    protected getTextStyle(): import("../common/interface").TextTheme;
    getContentArea(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    protected getHorizontalResizeAreaName(): string;
    protected drawBackgroundShape(): void;
}
