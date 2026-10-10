import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.25rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			colors: {
				navy: {
					50: 'hsl(var(--navy-50))',
					100: 'hsl(var(--navy-100))',
					200: 'hsl(var(--navy-200))',
					300: 'hsl(var(--navy-300))',
					400: 'hsl(var(--navy-400))',
					500: 'hsl(var(--navy-500))',
					600: 'hsl(var(--navy-600))',
					700: 'hsl(var(--navy-700))',
					800: 'hsl(var(--navy-800))',
					900: 'hsl(var(--navy-900))',
					950: 'hsl(var(--navy-950))'
				},
				green: {
					50: 'hsl(var(--green-50))',
					100: 'hsl(var(--green-100))',
					200: 'hsl(var(--green-200))',
					300: 'hsl(var(--green-300))',
					400: 'hsl(var(--green-400))',
					500: 'hsl(var(--green-500))',
					600: 'hsl(var(--green-600))',
					700: 'hsl(var(--green-700))',
					800: 'hsl(var(--green-800))',
					900: 'hsl(var(--green-900))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					strong: 'hsl(var(--brand-strong))',
					soft: 'hsl(var(--brand-soft))',
					foreground: 'hsl(var(--brand-foreground))',
					muted: 'hsl(var(--brand-foreground-muted))',
					'soft-foreground': 'hsl(var(--brand-on-soft))'
				},
				whatsapp: {
					DEFAULT: 'hsl(var(--whatsapp))',
					hover: 'hsl(var(--whatsapp-hover))',
					active: 'hsl(var(--whatsapp-active))',
					foreground: 'hsl(var(--whatsapp-foreground))',
					soft: 'hsl(var(--whatsapp-soft))',
					'soft-foreground': 'hsl(var(--whatsapp-soft-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				display: ['var(--font-display)'],
				sans: ['var(--font-sans)']
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius-md)',
				sm: 'var(--radius-sm)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)'
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'glow-navy': 'var(--shadow-glow-navy)',
				'glow-whatsapp': 'var(--shadow-glow-whatsapp)',
				'glow-whatsapp-strong': 'var(--shadow-glow-whatsapp-strong)'
			},
			transitionTimingFunction: {
				standard: 'cubic-bezier(0.2, 0, 0, 1)',
				entrance: 'cubic-bezier(0.16, 1, 0.3, 1)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
