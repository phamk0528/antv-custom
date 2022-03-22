export declare let Lang: string;
/**
 * 设置语言
 * @param lang
 */
export declare const setEVALocale: (lang: string) => void;
/**
 * 国际化方法
 * 国际化是 eva 整个整体设置，不跟着实例走！默认认为同一页面，不可能出现中文和英文两种语言
 *
 */
export declare const i18n: (key: string, defaultValue?: string) => any;
