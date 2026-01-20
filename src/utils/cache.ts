// utils/cache.ts

export const readFromCache = <T>(key: string): T | null => {
  try {
    const cached = localStorage.getItem(key);
    // Add logic to check for expiration here if needed
    return cached ? (JSON.parse(cached) as T) : null;
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return null;
  }
};

export const writeToCache = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
};