import { DocumentData, Entry } from '@/types/types'; // Ensure your type imports are correct

// This function now returns an array of DocumentData.
export function mergeDocumentData(data1: DocumentData[], data2: DocumentData[]): DocumentData[] {
  if (data1.length === 0 || data2.length === 0) return data1.length > 0 ? data1 : data2;

  const mergedResults: DocumentData[] = [];

  // Merge each corresponding DocumentData object in arrays
  for (let i = 0; i < Math.max(data1.length, data2.length); i++) {
    let result: DocumentData = {};

    const document1 = data1[i] || {};
    const document2 = data2[i] || {};

    const allCategories = new Set([...Object.keys(document1), ...Object.keys(document2)]);

    allCategories.forEach((category) => {
      result[category] = {};

      const categoryIndices = new Set([
        ...(document1[category] ? Object.keys(document1[category]).map(Number) : []),
        ...(document2[category] ? Object.keys(document2[category]).map(Number) : []),
      ]);

      categoryIndices.forEach((index) => {
        const entries1 =
          document1[category] && document1[category][index] ? document1[category][index] : [];
        const entries2 =
          document2[category] && document2[category][index] ? document2[category][index] : [];

        // Merge entries based on value type
        let mergedEntries: Entry[] = [...entries1];

        entries2.forEach((entry2) => {
          // Check if there is any entry in entries1 with a string value
          const hasStringValues = entries1.some((entry1) => typeof entry1.value === 'string');

          // Determine if the current entry2 should be merged
          if (!hasStringValues || typeof entry2.value === 'number') {
            mergedEntries.push(entry2);
          }
        });

        result[category][index] = mergedEntries;
      });
    });

    mergedResults.push(result);
  }

  return mergedResults;
}
