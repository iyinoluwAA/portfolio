'use client';

import { MantineProvider } from '@mantine/core';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}


