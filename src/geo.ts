/**
 * 将 3857 坐标系转换为 WGS84 坐标系
 * @param {number} x 3857 坐标系的 x 坐标
 * @param {number} y 3857 坐标系的 y 坐标
 * @returns {{ longitude: number; latitude: number }} WGS84 坐标系的经纬度对象
 */
export function convert3857ToWGS84(x: number, y: number): { longitude: number; latitude: number } {
  const R: number = 6378137; // WGS84 椭球体的长半轴
  const longitude: number = (x / R) * (180 / Math.PI);
  const latitude: number = (2 * Math.atan(Math.exp(y / R)) - Math.PI / 2) * (180 / Math.PI);
  return { longitude, latitude };
}

/**
* 计算 GeoJSON 多边形要素的中心点，并添加到要素的 properties 中
* @param {GeoJSON.FeatureCollection} geojson GeoJSON 要素集合
* @returns {GeoJSON.FeatureCollection} 添加中心点后的 GeoJSON 要素集合
*/
export function appendCentroid(geojson: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection {
  const features: GeoJSON.Feature[] = geojson.features.map((i: GeoJSON.Feature) => ({
      ...i,
      properties: {
          ...i.properties,
          centroid: calculateCentroid(i.geometry as GeoJSON.Polygon) // 类型断言为 GeoJSON.Polygon
      }
  }));

  return {
      ...geojson,
      features
  };
}

/**
* 计算多边形几何对象的中心点
* @param {GeoJSON.Polygon} polygon 多边形几何对象
* @returns {[number, number] | null} 中心点的 [x, y] 坐标数组，如果计算失败则返回 null
*/
export function calculateCentroid(polygon: GeoJSON.Polygon): [number, number] | null {
  let x: number = 0.0, y: number = 0.0, A: number = 0.0;
  // 假设 polygon.coordinates 是一个二维数组，表示多边形的坐标
  const coordinates: number[][] = polygon.coordinates[0];

  for (let i: number = 0; i < coordinates.length; i++) {
      const j: number = (i + 1) % coordinates.length;
      const xi: number = coordinates[i][0];
      const yi: number = coordinates[i][1];
      const xj: number = coordinates[j][0];
      const yj: number = coordinates[j][1];
      const a: number = ((xi * yj) - (xj * yi)) / 2.0;
      A += a;
      x += (xi + xj) * a;
      y += (yi + yj) * a;
  }

  // 防止除以零
  if (A === 0.0) {
      return null;
  }
  return [x / (3.0 * A), y / (3.0 * A)];
}