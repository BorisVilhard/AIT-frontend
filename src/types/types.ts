export type EntryValue = number | string;

export interface Entry {
  title: string;
  value: EntryValue;
  date: string | number;
}

export type IndexedEntries = {
  [index: number]: Entry[];
};

export type DocumentData = {
  [category: string]: IndexedEntries;
};
