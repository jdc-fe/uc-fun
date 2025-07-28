import assert = require('power-assert');
import { convert3857ToWGS84, appendCentroid, calculateCentroid } from '../src/geo';

describe('geo 坐标转换和几何计算测试', () => {
    describe('convert3857ToWGS84', () => {
        it('应正确转换 3857 坐标到 WGS84 坐标', () => {
            const { longitude, latitude } = convert3857ToWGS84(111319.49079327357, 0);
            assert(Math.abs(longitude - 1) < 1e-10); // 允许一定的误差范围
            assert(Math.abs(latitude - 0) < 1e-10);
        });

        it('应正确转换负值的 3857 坐标到 WGS84 坐标', () => {
            const { longitude, latitude } = convert3857ToWGS84(-111319.49079327357, 0);
            assert(Math.abs(longitude + 1) < 1e-10);
            assert(Math.abs(latitude - 0) < 1e-10);
        });
    });

    describe('calculateCentroid', () => {
        it('应正确计算多边形的中心点', () => {
            const polygon: GeoJSON.Polygon = {
                type: 'Polygon',
                coordinates: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]]
            };
            const centroid = calculateCentroid(polygon);
            assert.deepStrictEqual(centroid, [5, 5]);
        });

        it('应正确计算多边形的中心点，包含多个环', () => {
            const polygon: GeoJSON.MultiPolygon = {
                type: 'MultiPolygon',
                coordinates: [
                    [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]],
                    [[[20, 20], [20, 30], [30, 30], [30, 20], [20, 20]]]
                ]
            };
            const centroid = calculateCentroid(polygon);
            assert.deepStrictEqual(centroid, [15, 15]);
        });

        it('应处理空多边形的情况', () => {
            const polygon: GeoJSON.Polygon = {
                type: 'Polygon',
                coordinates: [[]]
            };
            const centroid = calculateCentroid(polygon);
            assert.strictEqual(centroid, null);
        });
    });

    describe('appendCentroid', () => {
        it('应为 GeoJSON 要素添加中心点属性', () => {
            const geojson: GeoJSON.FeatureCollection = {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]]
                    },
                    properties: {}
                }]
            };
            const result = appendCentroid(geojson);
            assert.deepStrictEqual(result.features[0].properties.centroid, [5, 5]);
        });
    });
});