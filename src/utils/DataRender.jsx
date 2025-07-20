// src/utils/DataRender.js

// Months of the year
export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Generate a dynamic year range (e.g., from currentYear - 10 to currentYear + 10)
export const years = (() => {
  const currentYear = new Date().getFullYear();
  const range = 10; // Adjust as needed
  const yearsArray = [];

  for (let i = currentYear - range; i <= currentYear + range; i++) {
    yearsArray.push(i);
  }

  return yearsArray;
})();

// Convert array items to <option> elements
export function generateDataOptions(dataArray) {
  return dataArray.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
}
