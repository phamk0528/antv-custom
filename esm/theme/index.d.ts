import { S2Theme, ThemeCfg } from '../common/interface';
import { SpreadSheet } from '../sheet-type';
/**
 * @describe generate the theme according to the type
 * @param  name
 */
export declare const getTheme: (themeCfg: Omit<ThemeCfg, 'theme'> & {
    spreadsheet?: SpreadSheet;
}) => S2Theme;
