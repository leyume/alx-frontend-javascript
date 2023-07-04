/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 */
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let newWord = '';
  set.forEach((word) => {
    if (typeof word === 'string' && word.startsWith(startString)) {
      newWord += (newWord ? '-' : '') + word.replace(startString, '');
    }
  });
  return newWord;
}
