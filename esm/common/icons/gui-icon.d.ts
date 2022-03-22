/**
 * @Description: 请严格要求 svg 的 viewBox，若设计产出的 svg 不是此规格，请叫其修改为 '0 0 1024 1024'
 */
import { Group, ShapeAttrs } from '@antv/g-canvas';
export interface GuiIconCfg extends ShapeAttrs {
    readonly name: string;
}
/**
 * 使用 iconfont 上的 svg 来创建 Icon
 */
export declare class GuiIcon extends Group {
    private image;
    constructor(cfg: GuiIconCfg);
    private getImage;
    hasSupportSuffix: (image: string) => boolean;
    private render;
}
