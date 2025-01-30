import { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: string) => void] {
  const [value, setValue] = useState<string>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
