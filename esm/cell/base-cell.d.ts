import { Group, IShape, Point, SimpleBBox } from '@antv/g-canvas';
import { CellTypes, InteractionStateName } from "../common/constant";
import { CellThemes, FormatResult, ResizeActiveOptions, ResizeArea, S2CellType, S2Theme, StateShapeLayer, TextTheme } from "../common/interface";
import { SpreadSheet } from "../sheet-type";
export declare abstract class BaseCell<T extends SimpleBBox> extends Group {
    protected meta: T;
    protected spreadsheet: SpreadSheet;
    protected theme: S2Theme;
    protected backgroundShape: IShape;
    protected textShape: IShape;
    protected linkFieldShape: IShape;
    protected actualText: string;
    protected actualTextWidth: number;
    protected stateShapes: Map<StateShapeLayer, IShape>;
    constructor(meta: T, spreadsheet: SpreadSheet, ...restOptions: unknown[]);
    getMeta(): T;
    setMeta(viewMeta: T): void;
    getIconStyle(): import("../common/interface").IconTheme;
    getTextAndIconPosition(iconCount?: number): {
        text: {
            x: number;
            y: number;
        };
        icon: {
            x: number;
            y: number;
        };
    };
    getActualText(): string;
    getFieldValue(): string;
    /**
     * in case there are more params to be handled
     * @param options any type's rest params
     */
    protected handleRestOptions(...options: unknown[]): void;
    /**
     * Return the type of the cell
     */
    abstract get cellType(): CellTypes;
    /**
     * Determine how to render this cell area
     */
    protected abstract initCell(): void;
    /**
     * Update cell's selected state
     */
    abstract update(): void;
    protected abstract getTextStyle(): TextTheme;
    protected abstract getFormattedFieldValue(): FormatResult;
    protected abstract getMaxTextWidth(): number;
    protected abstract getTextPosition(): Point;
    getStyle<K extends keyof S2Theme = keyof CellThemes>(name?: K): S2Theme[K];
    protected getResizeAreaStyle(): ResizeArea;
    protected shouldDrawResizeAreaByType(type: keyof ResizeActiveOptions): boolean | import("../common/constant").ResizeType;
    protected getCellArea(): {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    getContentArea(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    protected getIconPosition(iconCount?: number): {
        x: number;
        y: number;
    };
    protected drawTextShape(): void;
    protected drawLinkFieldShape(showLinkFieldShape: boolean, linkFillColor: string): void;
    updateByState(stateName: InteractionStateName, cell: S2CellType): void;
    hideInteractionShape(): void;
    clearUnselectedState(): void;
}
