import { useEffect, useState } from 'react';

const useLocalStorgae = <TState>(key: string, newState: TState) => {
  const [state, setState] = useState<TState>(() => {
    const stateStr = window.localStorage.getItem(key);
    return stateStr ? JSON.parse(stateStr) : newState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorgae;
