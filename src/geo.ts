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

const LENGTH_OF_ONE_DEGREE = 111.32; // 1° ≈ 111.32 km（简化版地理计算）
/**
 * 根据起点、半径、角度 计算终点坐标
 * @param {[number, number]} start - 圆心坐标 [经度, 纬度]
 * @param {number} radiusKm - 半径（公里）
 * @param {number} bearing - 方向角度（0°为正北，90°为正东）
 **/
export function calculateRadiusEnd(start: GeoJSON.Position, radiusKm: number, bearing = 90): GeoJSON.Position {
  const angleRad = (bearing * Math.PI) / 180; // 角度转弧度
  const dx = (radiusKm * Math.sin(angleRad)) / LENGTH_OF_ONE_DEGREE;
  const dy = (radiusKm * Math.cos(angleRad)) / LENGTH_OF_ONE_DEGREE;
  return [start[0] + dx, start[1] + dy];
}

/**
 * 生成圆形坐标点（GeoJSON Polygon）
 * @param {[number, number]} center - 圆心坐标 [经度, 纬度]
 * @param {number} radiusKm - 半径（公里）
 * @param {number} [points=64] - 圆形的分段数（越多越平滑）
 */
export function createCircle(center: GeoJSON.Position, radiusKm: number, points = 64): GeoJSON.Feature {
  const coords = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI; // 当前角度（弧度）
    const dx = (radiusKm * Math.sin(angle)) / LENGTH_OF_ONE_DEGREE;
    const dy = (radiusKm * Math.cos(angle)) / LENGTH_OF_ONE_DEGREE;
    coords.push([center[0] + dx, center[1] + dy]);
  }
  coords.push(coords[0]); // 闭合圆形
  return {
    type: 'Feature',
    properties: {
      centroid: center
    },
    geometry: {
      type: 'Polygon',
      coordinates: [coords],
    },
  };
}

export function createSector(
  center: GeoJSON.Position,
  radiusKm: number,
  startAngle: number,
  endAngle: number,
  points = 64
): GeoJSON.Feature {
  const coords = [];

  // 添加中心点
  coords.push(center);

  // 生成扇形弧线上的点
  for (let i = 0; i <= points; i++) {
    // 计算当前角度（从startAngle到endAngle）
    const progress = i / points;
    const angle = startAngle + (endAngle - startAngle) * progress;
    const angleRad = angle * Math.PI / 180; // 转换为弧度

    // 计算偏移量（考虑地球曲率）
    const dx = (radiusKm * Math.sin(angleRad)) / LENGTH_OF_ONE_DEGREE;
    const dy = (radiusKm * Math.cos(angleRad)) / LENGTH_OF_ONE_DEGREE;

    // 计算实际坐标
    const lon = center[0] + dx;
    const lat = center[1] + dy;
    coords.push([lon, lat]);
  }

  // 闭合扇形（从最后一个点回到中心点）
  coords.push(center);

  return {
    type: 'Feature',
    properties: {
      centroid: center,
      radius: radiusKm,
      startAngle: startAngle,
      endAngle: endAngle,
      angleRange: endAngle - startAngle
    },
    geometry: {
      type: 'Polygon',
      coordinates: [coords],
    },
  };
}

// 根据中心点和半径创建一个正方形
export function createSquare(center: GeoJSON.Position, radiusKm: number): GeoJSON.Feature {
  const radius = radiusKm / LENGTH_OF_ONE_DEGREE;
  const topLeft = [center[0] - radius, center[1] + radius];
  const topRight = [center[0] + radius, center[1] + radius];
  const bottomRight = [center[0] + radius, center[1] - radius];
  const bottomLeft = [center[0] - radius, center[1] - radius];

  return {
    type: 'Feature',
    properties: {
      centroid: center
    },
    geometry: {
      type: 'Polygon',
      coordinates: [[topLeft, topRight, bottomRight, bottomLeft, topLeft]],
    },
  };
}

const R = 6378137;
/**
 * 计算两点直接的直线距离， 单位 m
 */
export function getDistanceByLatlng(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
