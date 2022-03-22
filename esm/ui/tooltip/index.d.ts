import type { SpreadSheet } from "../../sheet-type";
import { TooltipContentType, TooltipPosition, TooltipShowOptions } from "../../common/interface";
import './index.less';
/**
 * Base tooltips component
 */
export declare class BaseTooltip {
    spreadsheet: SpreadSheet;
    container: HTMLElement;
    options: TooltipShowOptions;
    position: TooltipPosition;
    constructor(spreadsheet: SpreadSheet);
    /**
     * Show toolTips
     * @param position
     * @param data
     * @param options {@link TooltipOptions}
     * @param content
     */
    show<T = Element | string>(showOptions: TooltipShowOptions<T>): void;
    hide(): void;
    destroy(): void;
    renderContent<T = TooltipContentType>(content: T): void;
    clearContent(): void;
    disablePointerEvent(): void;
    private resetPosition;
    /**
     * ToolTips container element
     */
    protected getContainer(): HTMLElement;
}
