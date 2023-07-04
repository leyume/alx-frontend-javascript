/**
 * Changes the quantity of unique grocery items to 100.
 * A map of the name of a grocery and its quantity.
 */
export default function updateUniqueItems(map) {
  // check that map is a Map
  if (!(map instanceof Map)) {
    throw TypeError('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
