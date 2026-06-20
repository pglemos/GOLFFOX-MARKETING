/** @type {import('tailwindcss').Config} */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Load design tokens from tokens.yaml
let tokens = {};
try {
  const tokensPath = path.join(__dirname, 'design-system/tokens.yaml');
  const tokensContent = fs.readFileSync(tokensPath, 'utf8');
  // Remove YAML document separators and merge sections
  const cleanedContent = tokensContent.split('---').filter(section => section.trim()).join('\n');
  tokens = yaml.load(cleanedContent) || {};
} catch (error) {
  console.warn('⚠️  Could not load tokens.yaml:', error.message);
}

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "sans-serif"],
      },
      colors: {
        // Design System Semantic Colors (from tokens.yaml)
        ...(tokens.colors ? {
          'semantic-brand': tokens.colors.brand?.base?.value || '#F97316',
          'semantic-brand-dark': tokens.colors['brand-dark']?.base?.value || '#EA580C',
          'semantic-brand-light': tokens.colors['brand-light']?.base?.value || '#FFF7ED',
          'semantic-error': tokens.colors.error?.base?.value || '#DC2626',
          'semantic-error-dark': tokens.colors.error?.dark?.value || '#991B1B',
          'semantic-success': tokens.colors.success?.base?.value || '#10B981',
          'semantic-warning': tokens.colors.warning?.base?.value || '#F59E0B',
          'semantic-info': tokens.colors.info?.base?.value || '#3B82F6',
          'semantic-foreground': tokens.colors.foreground?.base?.value || '#1A1A1A',
          'semantic-muted': tokens.colors.muted?.base?.value || '#666666',
          'semantic-border': tokens.colors.border?.base?.value || '#CCCCCC',
          'semantic-background': tokens.colors.background?.base?.value || '#FFFFFF',
          'semantic-card': tokens.colors.card?.base?.value || '#F5F5F5',
          'semantic-ink-strong': tokens.colors['ink-strong']?.base?.value || '#262626',
          'semantic-ink-muted': tokens.colors['ink-muted']?.base?.value || '#999999',
        } : {}),
        // Legacy HSL colors (backward compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // GOLF FOX Design System - Brand Colors (prefixo --gf-)
        brand: {
          DEFAULT: "var(--gf-brand)",
          hover: "var(--gf-brand-hover)",
          light: "var(--gf-brand-light)",
          soft: "var(--gf-brand-soft)",
        },
        // GOLF FOX Design System - Ink (Text) Colors
        ink: {
          DEFAULT: "var(--gf-ink)",
          strong: "var(--gf-ink-strong)",
          muted: "var(--gf-ink-muted)",
          light: "var(--gf-ink-light)",
          disabled: "var(--gf-ink-disabled)",
        },
        // GOLF FOX Design System - Background Colors
        bg: {
          DEFAULT: "var(--gf-bg)",
          soft: "var(--gf-bg-soft)",
          elevated: "var(--gf-bg-elevated)",
          hover: "var(--gf-bg-hover)",
          pattern: "var(--gf-bg-pattern)",
        },
        // GOLF FOX Design System - Accent Colors (custom, different from shadcn accent)
        "accent-custom": {
          DEFAULT: "var(--gf-accent)",
          dark: "var(--gf-accent-dark)",
          soft: "var(--gf-accent-soft)",
          light: "var(--gf-accent-light)",
        },
        // GOLF FOX Design System - Status Colors
        success: {
          DEFAULT: "var(--gf-success)",
          light: "var(--gf-success-light)",
        },
        warning: {
          DEFAULT: "var(--gf-warning)",
          light: "var(--gf-warning-light)",
        },
        error: {
          DEFAULT: "var(--gf-error)",
          light: "var(--gf-error-light)",
        },
        info: {
          DEFAULT: "var(--gf-info)",
          light: "var(--gf-info-light)",
        },
        // Dark surface tokens — landing/marketing/premium-ui dark theme
        surface: {
          void:    '#020202',   // deepest dark (hero backgrounds, full-bleed)
          deep:    '#050505',   // standard dark page background
          dark:    '#0a0a0a',   // slightly lighter dark (sidebar panels)
          overlay: '#141414',   // elevated dark surfaces
          raised:  '#1a1a1a',   // hover states on dark surfaces
          border:  '#2d2d2d',   // borders on dark backgrounds
          navy:    '#020617',   // dark navy (landing page shell)
          ink:     '#02040a',   // near-black for landing backgrounds
        },
        // WhatsApp brand color — FAQ contact buttons
        whatsapp: {
          DEFAULT: '#25D366',
          hover:   '#20BD5A',
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
        strong: "var(--gf-border-strong)",
        light: "var(--gf-border-light)",
      },
      boxShadow: {
        xs: "var(--gf-shadow-xs)",
        sm: "var(--gf-shadow-sm)",
        md: "var(--gf-shadow-md)",
        lg: "var(--gf-shadow-lg)",
        xl: "var(--gf-shadow-xl)",
        "2xl": "var(--gf-shadow-2xl)",
        inner: "var(--gf-shadow-inner)",
        brand: "var(--gf-shadow-brand)",
        "brand-lg": "var(--gf-shadow-brand-lg)",
        soft: "var(--gf-shadow-soft)",
        glow: "var(--gf-shadow-glow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "var(--gf-radius-xs)",
        "sm-custom": "var(--gf-radius-sm)",
        "md-custom": "var(--gf-radius-md)",
        "lg-custom": "var(--gf-radius-lg)",
        xl: "var(--gf-radius-xl)",
        "2xl": "var(--gf-radius-2xl)",
        "3xl": "var(--gf-radius-3xl)",
        full: "var(--gf-radius-full)",
      },
      spacing: {
        // Design System Spacing Tokens (from tokens.yaml)
        ...(tokens.spacing ? {
          'spacing-xs': tokens.spacing.xs?.base?.value || '4px',
          'spacing-sm': tokens.spacing.sm?.base?.value || '8px',
          'spacing-md': tokens.spacing.md?.base?.value || '12px',
          'spacing-lg': tokens.spacing.lg?.base?.value || '16px',
          'spacing-xl': tokens.spacing.xl?.base?.value || '24px',
          'spacing-2xl': tokens.spacing['2xl']?.base?.value || '32px',
          'spacing-3xl': tokens.spacing['3xl']?.base?.value || '48px',
        } : {}),
        '18': '4.5rem', // 72px for topbar height
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      height: {
        '18': '4.5rem', // 72px for topbar height
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      minHeight: {
        'touch': '44px', // Minimum touch target
      },
      minWidth: {
        'touch': '44px', // Minimum touch target
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.05em' }], // 10px — uppercase labels
        'xs-mobile': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'base-mobile': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
