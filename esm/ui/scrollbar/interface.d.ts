import { ScrollBarTheme } from "../../common/interface/theme";
export interface ScrollBarCfg {
    readonly isHorizontal?: boolean;
    readonly trackLen: number;
    readonly thumbLen: number;
    readonly position: PointObject;
    readonly minThumbLen?: number;
    readonly thumbOffset?: number;
    readonly scrollTargetMaxOffset: number;
    readonly theme?: ScrollBarTheme;
}
export interface PointObject {
    x: number;
    y: number;
}
