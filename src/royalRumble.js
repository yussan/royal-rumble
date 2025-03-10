import { romanToNum } from './modules/romanToNum';

export function royalRumble(names = []) {
  // check is names array and not empty
  if(typeof names != "object" || names.length === 0) return names;
  return (
    names
      .map((n) => ({ name: n, num: romanToNum(n.split(" ").pop()) }))
      .sort((a, b) => {
        if (a.name < b.name && (a.num - b.num)) {
          return -1;
        }
      })
      .map(({ name, num }) => name)
  );
}