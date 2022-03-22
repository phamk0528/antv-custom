import { DataType } from "../../data-set/interface";
import { DataPathParams, PivotMeta, SortedDimensionValues } from "../../data-set/interface";
interface Param {
    rows: string[];
    columns: string[];
    originData: DataType[];
    indexesData: DataType[][] | DataType[];
    totalData?: DataType[];
    sortedDimensionValues: SortedDimensionValues;
    rowPivotMeta?: PivotMeta;
    colPivotMeta?: PivotMeta;
}
/**
 * Transform from origin single data to correct dimension values
 * data: {
 *  price: 16,
 *  province: '辽宁省',
 *  city: '芜湖市',
 *  category: '家具',
 *  subCategory: '椅子',
 * }
 * dimensions: [province, city]
 * return [辽宁省, 芜湖市]
 *
 * @param record
 * @param dimensions
 */
export declare function transformDimensionsValues(record: DataType, dimensions: string[], sortedDimensionValues: SortedDimensionValues): string[];
/**
 * Get dimensions without path pre
 * dimensions: ['辽宁省[&]芜湖市[&]家具[&]椅子']
 * return ['椅子']
 *
 * @param dimensions
 */
export declare function getDimensionsWithoutPathPre(dimensions: string[]): string[];
/**
 * Get dimensions with parent path
 * field: 'category'
 * defaultDimensions: ['province', 'city', 'category', 'subCategory']
 * dimensions: [
 *  {
 *   province: '辽宁省',
 *   city: '芜湖市',
 *   category: '家具',
 *   subCategory: '椅子',
 *   price: ''
 *  },
 * ]
 * return ['辽宁省[&]芜湖市[&]家具']
 *
 * @param field
 * @param defaultDimensions
 * @param dimensions
 */
export declare function getDimensionsWithParentPath(field: string, defaultDimensions: string[], dimensions: DataType[]): string[];
/**
 * Transform a single data to path
 * {
 * $$VALUE$$: 15
 * $$EXTRA$$: 'price'
 * "price": 15,
 * "province": "辽宁省",
 * "city": "达州市",
 * "category": "家具",
 * "subCategory": "椅子"
 * }
 * rows: [province, city]
 * columns: [category, subCategory, $$EXTRA$$]
 *
 * rowDimensionValues = [辽宁省, 达州市]
 * colDimensionValues = [家具, 椅子, price]
 *
 * @param params
 */
export declare function getDataPath(params: DataPathParams): number[];
/**
 * 获取查询结果中的纬度值
 * @param dimensions [province, city]
 * @param query { province: '四川省', city: '成都市', type: '办公用品' }
 * @returns ['四川省', '成都市']
 */
export declare function getQueryDimValues(dimensions: string[], query: DataType): string[];
/**
 * 转换原始数据为二维数组数据
 * @param rows
 * @param columns
 * @param originData
 * @param indexesData
 * @param totalData
 * @param sortedDimensionValues
 * @param rowPivotMeta
 * @param colPivotMeta
 */
export declare function transformIndexesData(params: Param): {
    paths: any[];
    indexesData: DataType[];
    rowPivotMeta: PivotMeta;
    colPivotMeta: PivotMeta;
    sortedDimensionValues: SortedDimensionValues;
};
export declare function deleteMetaById(meta: PivotMeta, nodeId: string): void;
export {};
