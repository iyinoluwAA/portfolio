import { createTheme, MantineColorsTuple } from '@mantine/core';

// Slate Gray color palette
const slateGray: MantineColorsTuple = [
  '#f1f5f9', // 0 - lightest (backgrounds)
  '#e2e8f0', // 1 - light (card backgrounds)
  '#cbd5e1', // 2 - medium-light (borders, subtle elements)
  '#94a3b8', // 3 - medium (secondary elements)
  '#64748b', // 4 - medium-dark (primary elements)
  '#475569', // 5 - dark (main brand color)
  '#334155', // 6 - darker (text on light)
  '#1e293b', // 7 - dark (headings)
  '#0f172a', // 8 - very dark (strong emphasis)
  '#020617', // 9 - almost black (use sparingly)
];

export const theme = createTheme({
  primaryColor: 'slate',
  colors: {
    slate: slateGray,
  },
  defaultRadius: 'md',
  fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  headings: {
    fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '600',
  },
  other: {
    // Custom color values for easy access
    background: '#94a3b8', // Darker slate - beyond medium, not too dark
    backgroundLight: '#f8fafc', // Very light ash (for cards)
    backgroundCard: '#ffffff', // White for cards
    textPrimary: '#1e293b', // Dark slate for text
    textSecondary: '#475569', // Medium slate for secondary text
    accent: '#94a3b8', // Soft blue-gray for accents
    border: '#e2e8f0', // Light gray for borders
  },
});

