/**
 * Utils to render all g supported shape
 * https://github.com/antvis/g
 */
import { Group, IShape, ShapeAttrs, SimpleBBox } from '@antv/g-canvas';
import { GuiIcon, GuiIconCfg } from "../common/icons/gui-icon";
import { TextTheme } from "../common/interface/theme";
export declare function renderRect(group: Group, attrs: ShapeAttrs): IShape;
export declare function renderPolygon(group: Group, attrs: ShapeAttrs): IShape;
export declare function renderText(group: Group, shapes: IShape[], x: number, y: number, text: string, textStyle: TextTheme, extraStyle?: ShapeAttrs): IShape;
export declare function renderLine(group: Group, coordinate: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}, lineStyle: ShapeAttrs): IShape;
export declare function updateShapeAttr<K extends keyof ShapeAttrs>(shape: IShape, attribute: K, value: ShapeAttrs[K]): void;
export declare function updateFillOpacity(shape: IShape, opacity: number): void;
export declare function updateStrokeOpacity(shape: IShape, opacity: number): void;
export declare function renderIcon(group: Group, iconCfg: GuiIconCfg): GuiIcon;
export declare function renderTreeIcon(group: Group, area: SimpleBBox, fill: string, isCollapse: boolean, onClick?: () => void): GuiIcon;
