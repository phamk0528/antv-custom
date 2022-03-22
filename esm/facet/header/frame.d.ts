import { Group } from '@antv/g-canvas';
import { FrameConfig } from "../../common/interface";
export declare class Frame extends Group {
    cfg: FrameConfig;
    constructor(cfg: FrameConfig);
    layout(): void;
    /**
     * 渲染
     */
    render(): void;
    onBorderScroll(scrollX: number): void;
    onChangeShadowVisibility(scrollX: number, maxScrollX: number): void;
    private addCornerRightBorder;
    private addCornerBottomBorder;
    private addSplitLineShadow;
    private addSplitLineLeftShadow;
    private addSplitLineRightShadow;
}
