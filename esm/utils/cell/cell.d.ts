import { SimpleBBox } from '@antv/g-canvas';
import { AreaRange } from './../../common/interface/scroll';
import { CellBorderPosition, CellTheme, IconCfg, Padding, TextAlignCfg, TextBaseline, TextAlign } from "../../common/interface";
/**
 * -----------------------------
 * |           padding         |
 * |  |---------------------|  |
 * |  |                     |  |
 * |  |                     |  |
 * |  |---------------------|  |
 * |           padding         |
 * -----------------------------
 */
export declare const getContentArea: (bbox: SimpleBBox, padding: Padding) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const getMaxTextWidth: (contentWidth: number, iconCfg?: IconCfg) => number;
export declare const getVerticalPosition: ({ y, height }: SimpleBBox, textBaseline: TextBaseline, size?: number) => number;
export declare const getTextAndFollowingIconPosition: (contentBox: SimpleBBox, textCfg: TextAlignCfg, textWidth?: number, iconCfg?: IconCfg, iconCount?: number) => {
    text: {
        x: number;
        y: number;
    };
    icon: {
        x: number;
        y: number;
    };
};
export declare const getTextPosition: (contentBox: SimpleBBox, textCfg: TextAlignCfg) => {
    x: number;
    y: number;
};
/**
 * 在给定视窗和单元格的情况下，计算单元格文字实际绘制位置
 * 计算遵循原则：
 * 1. 若可视范围小，尽可能多展示文字
 * 2. 若可视范围大，居中展示文字
 * @param viewport 视窗坐标信息
 * @param content content 列头单元格 content 区域坐标信息
 * @param textWidth 文字实际绘制区域宽度（含icon）
 * @returns 文字绘制位置
 */
export declare const getTextAreaRange: (viewport: AreaRange, content: AreaRange, textWidth: number) => AreaRange;
export declare const getBorderPositionAndStyle: (position: CellBorderPosition, contentBox: SimpleBBox, style: CellTheme) => {
    position: {
        x1: any;
        x2: any;
        y1: any;
        y2: any;
    };
    style: any;
};
/**
 * 根据单元格文字样式调整 viewport range，使文字在滚动时不会贴边展示
 *
 * 以 textAlign=left 情况为例，由大到小的矩形分别是 viewport、cellContent、cellText
 * 左图是未调整前，滚动相交判定在 viewport 最左侧，即 colCell 滚动到 viewport 左侧后，文字会贴左边绘制
 * 右图是调整后，range.start 提前了 padding.left 个元素，文字与 viewport 有一定间隙更加美观
 *
 *    range.start                                   range.start
 *         |                                             |
 *         |      range.width                            |  range.width
 *         v<---------------------->                     v<------------------>
 *
 *         +-----------------------+                 +-----------------------+
 *         |       viewport        |                 |       viewport        |
 *     +-------------------+       |             +-------------------+       |
 *     |   +---------+     |       |             |   |   +---------+ |       |
 *     |   |  text   |     |       |             |   |   |  text   | |       |
 *     |   +---------+     |       |             |   |   +---------+ |       |
 *     +-------------------+       |             +-------------------+       |
 *         +-----------------------+                 +-----------------------+
 *
 *                                                   <-->
 *                                                padding.left
 *
 * @param viewport 原始 viewport
 * @param textAlign 文字样式
 * @param textPadding 单元格 padding 样式
 * @returns viewport range
 */
export declare const adjustColHeaderScrollingViewport: (viewport: AreaRange, textAlign: TextAlign, textPadding?: Padding) => {
    start: number;
    width: number;
};
/**
 * 根据文字样式调整绘制的起始点（底层g始终使用 center 样式绘制）
 * @param startX
 * @param restWidth
 * @param textAlign
 * @returns
 */
export declare const adjustColHeaderScrollingTextPostion: (startX: number, restWidth: number, textAlign: TextAlign) => number;
