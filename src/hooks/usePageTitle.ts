import { useEffect } from 'react';

const BASE = 'Złoty Jeleń';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} – Dom Gościnny i Restauracja`;
  }, [title]);
}
