import type { IShape, Point } from '@antv/g-canvas';
import { BaseCell } from "./base-cell";
import { CellTypes, InteractionStateName } from "../common/constant/interaction";
import { GuiIcon } from "../common/icons";
import { Condition, Conditions, FormatResult, IconCfg, MappingResult, CellMeta, TextTheme, ViewMeta } from "../common/interface";
/**
 * DataCell for panelGroup area
 * ----------------------------
 * |                  |       |
 * |interval      text| icon  |
 * |                  |       |
 * ----------------------------
 * There are four conditions(]{@see BaseCell.conditions}) to determine how to render
 * 1、background color
 * 2、icon align in right with size {@link ICON_SIZE}
 * 3、left rect area is interval(in left) and text(in right)
 */
export declare class DataCell extends BaseCell<ViewMeta> {
    protected conditions: Conditions;
    protected conditionIntervalShape: IShape;
    protected conditionIconShape: GuiIcon;
    get cellType(): CellTypes;
    protected handlePrepareSelect(cells: CellMeta[]): void;
    protected handleSelect(cells: CellMeta[]): void;
    protected handleHover(cells: CellMeta[]): void;
    update(): void;
    setMeta(viewMeta: ViewMeta): void;
    protected initCell(): void;
    protected getTextStyle(): TextTheme;
    getIconStyle(): IconCfg | undefined;
    protected getFormattedFieldValue(): FormatResult;
    protected getMaxTextWidth(): number;
    protected getTextPosition(): Point;
    protected drawConditionIconShapes(): void;
    /**
     * 计算柱图的 scale 函数（两种情况）
     *
     * min_________x_____0___________________________max
     * |<----r---->|
     *
     * 0_________________min_________x_______________max
     * |<-------------r------------->|
     *
     * @param minValue in current field values
     * @param max in current field values
     */
    private getIntervalScale;
    /**
     * Draw interval condition shape
     * @private
     */
    protected drawConditionIntervalShape(): void;
    getBackgroundColor(): {
        backgroundColor: string;
        strokeColor: string;
    };
    /**
     * Draw cell background
     */
    protected drawBackgroundShape(): void;
    /**
     * 绘制hover悬停，刷选的外框
     */
    protected drawInteractiveBorderShape(): void;
    /**
     * Draw interactive color
     */
    protected drawInteractiveBgShape(): void;
    private changeRowColSelectState;
    /**
     * Render cell border controlled by verticalBorder & horizontalBorder
     * @private
     */
    protected drawBorderShape(): void;
    /**
     * Find current field related condition
     * @param conditions
     */
    protected findFieldCondition(conditions: Condition[]): Condition;
    /**
     * Mapping value to get condition related attrs
     * @param condition
     */
    protected mappingValue(condition: Condition): MappingResult;
    updateByState(stateName: InteractionStateName): void;
    clearUnselectedState(): void;
    protected drawLeftBorder(): void;
}
