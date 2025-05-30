/**
 * 将 3857 坐标系转换为 WGS84 坐标系
 * @param {number} x 3857 坐标系的 x 坐标
 * @param {number} y 3857 坐标系的 y 坐标
 * @returns {{ longitude: number; latitude: number }} WGS84 坐标系的经纬度对象
 */
export function convert3857ToWGS84(x: number, y: number): { longitude: number, latitude: number } {
  const R: number = 6378137; // WGS84 椭球体的长半轴
  const longitude: number = (x / R) * (180 / Math.PI);
  const latitude: number = (2 * Math.atan(Math.exp(y / R)) - Math.PI / 2) * (180 / Math.PI);
  return { longitude, latitude };
}

/**
 * 将 WGS84 坐标系转换为 3857 坐标系
 */
export function convertWGS84To3857(longitude: number, latitude: number): { x: number, y: number } {
  if (longitude < -180 || longitude > 180 || latitude < -90 || latitude > 90) {
    throw new Error('Invalid coordinates: Longitude must be between -180 and 180, Latitude must be between -90 and 90.');
  }
  const R = 6378137; // 地球半径
  const x = (longitude * Math.PI / 180) * R;
  const y = (Math.log(Math.tan((Math.PI / 4) + (latitude * Math.PI / 360))) * R);
  return { x, y };
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
export function calculateCentroid(geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon): [number, number] | null {
  let x = 0.0, y = 0.0, A = 0.0;

  const processPolygon = (coordinates: number[][][]) => {
    const ring = coordinates[0]; // 主环
    if (!ring || ring.length === 0) {
      return;
    }

    for (let i = 0; i < ring.length; i++) {
      const j = (i + 1) % ring.length;
      const xi = ring[i][0];
      const yi = ring[i][1];
      const xj = ring[j][0];
      const yj = ring[j][1];
      const a = ((xi * yj) - (xj * yi)) / 2.0;
      A += a;
      x += (xi + xj) * a;
      y += (yi + yj) * a;
    }
  };

  if (geometry.type === 'Polygon') {
    processPolygon(geometry.coordinates);
  } else if (geometry.type === 'MultiPolygon') {
    for (const polygon of geometry.coordinates) {
      processPolygon(polygon);
    }
  }

  // 防止除以零
  if (A === 0.0) {
    return null;
  }
  return [x / (3.0 * A), y / (3.0 * A)];
}
