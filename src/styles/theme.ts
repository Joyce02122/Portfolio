export const theme = {
  colors: {
    primary: '#61a0ff', // Main blue color
    secondary: '#2c5282', // Darker blue for contrast
    accent: '#90cdf4', // Light blue for accents
    background: '#FFFFFF', // White background
    text: '#2B6CB0', // Dark blue text
    lightGray: '#F5F7FA', // Light blue gray
    gray: '#90CAF9', // Medium blue gray
  },
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      h1: '2.25rem',
      h2: '1.75rem',
      h3: '1.5rem',
      body: '1rem',
      small: '0.875rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  borderRadius: {
    small: '6px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.08)',
    large: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
}; 