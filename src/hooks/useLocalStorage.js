import { useState } from "react";

/**
 * useLocalStorage
 * Drop-in replacement for useState that persists the value in localStorage.
 *
 * @param {string} key      - The localStorage key to read/write
 * @param {*}      initial  - Default value if nothing is stored yet
 * @returns {[value, setter]} - Same API as useState
 */
export default function useLocalStorage(key, initial) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initial;
    } catch (err) {
      console.warn(`useLocalStorage: failed to read "${key}"`, err);
      return initial;
    }
  });

  function setValue(valueOrUpdater) {
    try {
      setStoredValue((prev) => {
        const next =
          typeof valueOrUpdater === "function"
            ? valueOrUpdater(prev)
            : valueOrUpdater;
        window.localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    } catch (err) {
      console.warn(`useLocalStorage: failed to write "${key}"`, err);
    }
  }

  return [storedValue, setValue];
}
