import { extendTheme } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const mobileSheetQuery = "@media screen and (max-width: 47.99em)";
const mobileSheet = {
	margin: "0 !important",
	width: "100%",
	maxWidth: "100% !important",
	maxHeight: "92dvh",
	minHeight: "0",
	borderBottomWidth: "0",
	borderRadius: "16px 16px 0 0",
	paddingBottom: "env(safe-area-inset-bottom)",
	animation: "rb-sheet-up 0.28s cubic-bezier(0.32, 0.72, 0, 1)",
	"&::before": {
		content: '""',
		display: "block",
		width: "36px",
		height: "4px",
		borderRadius: "full",
		bg: "panel.borderStrong",
		mx: "auto",
		mt: "8px",
		flexShrink: 0,
	},
};

const sharedThemeConfig = {
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	direction: "ltr" as const,
	shadows: { outline: "0 0 0 2px var(--chakra-colors-primary-200)" },
	fonts: {
		body: `Arad,Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif`,
	},
	colors: {
		"light-border": "#d2d2d4",
		panel: {
			app: "var(--rb-panel-bg)",
			main: "var(--rb-panel-main)",
			sidebar: "var(--rb-panel-sidebar)",
			surface: "var(--rb-panel-surface)",
			elevated: "var(--rb-panel-elevated)",
			border: "var(--rb-panel-border)",
			borderStrong: "var(--rb-panel-border-strong)",
			text: "var(--rb-panel-text)",
			textSecondary: "var(--rb-panel-text-secondary)",
			textMuted: "var(--rb-panel-text-muted)",
			accent: "var(--rb-panel-accent)",
			accentHover: "var(--rb-panel-accent-hover)",
			warning: "#f59e0b",
			success: "#22c55e",
			danger: "#ef4444",
		},
		bg: {
			light: "var(--bg-light)",
			dark: "var(--bg-dark)",
		},
		surface: {
			light: "var(--surface-light)",
			dark: "var(--surface-dark)",
		},
		primary: {
			50: "var(--primary-50)",
			100: "var(--primary-100)",
			200: "var(--primary-200)",
			300: "var(--primary-300)",
			400: "var(--primary-400)",
			500: "var(--primary-500)",
			600: "var(--primary-600)",
			700: "var(--primary-700)",
			800: "var(--primary-800)",
			900: "var(--primary-900)",
		},
		gray: {
			750: "#222C3B",
		},
	},
	styles: {
		global: {
			".chakra-modal__overlay": {
				bg: "blackAlpha.500 !important",
				backdropFilter: "none !important",
				WebkitBackdropFilter: "none !important",
			},
			".chakra-modal__content": {
				backgroundColor: "var(--rb-panel-surface) !important",
				color: "var(--rb-panel-text) !important",
				borderColor: "var(--rb-panel-border) !important",
				borderRadius: "16px !important",
				boxShadow: "0 24px 72px rgba(0, 0, 0, 0.46) !important",
			},
			":root": {
				"--primary-50": "#fde8ea",
				"--primary-100": "#f8bcc1",
				"--primary-200": "#ef8890",
				"--primary-300": "#e35560",
				"--primary-400": "#d4303c",
				"--primary-500": "#c4121f",
				"--primary-600": "#a30e19",
				"--primary-700": "#820b14",
				"--primary-800": "#61080f",
				"--primary-900": "#40050a",
				"--bg-light": "#08080a",
				"--bg-dark": "#08080a",
				"--surface-light": "#111114",
				"--surface-dark": "#111114",
			},

			".rb-theme-dark": {
				"--rb-panel-bg": "#08080a",
				"--rb-panel-main": "#0a0a0c",
				"--rb-panel-sidebar": "#0d0d10",
				"--rb-panel-surface": "#111114",
				"--rb-panel-elevated": "#17171b",
				"--rb-panel-border": "#222227",
				"--rb-panel-border-strong": "#34343b",
				"--rb-panel-text": "#e8e4dc",
				"--rb-panel-text-secondary": "#b4b0a8",
				"--rb-panel-text-muted": "#7b7872",
				"--bg-light": "#08080a",
				"--bg-dark": "#08080a",
				"--surface-light": "#111114",
				"--surface-dark": "#111114",
			},
			".rb-theme-light": {
				"--rb-panel-bg": "#f2f0eb",
				"--rb-panel-main": "#f5f3ee",
				"--rb-panel-sidebar": "#fbfaf7",
				"--rb-panel-surface": "#fbfaf7",
				"--rb-panel-elevated": "#ebe8e1",
				"--rb-panel-border": "#dcd8cf",
				"--rb-panel-border-strong": "#c6c1b6",
				"--rb-panel-text": "#17161a",
				"--rb-panel-text-secondary": "#4d4a45",
				"--rb-panel-text-muted": "#7c786f",
				"--bg-light": "#f2f0eb",
				"--bg-dark": "#f2f0eb",
				"--surface-light": "#fbfaf7",
				"--surface-dark": "#fbfaf7",
			},
			body: {
				backgroundColor: "panel.main",
				color: "panel.text",
			},
			"[data-theme='dark'] body, .chakra-ui-dark body": {
				backgroundColor: "panel.main",
				color: "panel.text",
			},

			".rb-seasonal-christmas": {
				"--primary-50": "#ffe6e6",
				"--primary-100": "#ffcdd2",
				"--primary-200": "#ef9a9a",
				"--primary-300": "#e57373",
				"--primary-400": "#ef5350",
				"--primary-500": "#d32f2f",
				"--primary-600": "#c62828",
				"--primary-700": "#b71c1c",
				"--primary-800": "#8d0f0f",
				"--primary-900": "#5f0a0a",
				"--bg-light": "#fdf7f2",
				"--bg-dark": "#0b0f19",
				"--surface-light": "#f7eee8",
				"--surface-dark": "#172235",
			},
		},
	},
	components: {
		Card: {
			baseStyle: (props: StyleFunctionProps) => ({
				container: {
					bg: mode("panel.surface", "panel.surface")(props),
					borderWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
					boxShadow: "none",
					borderRadius: "6px",
				},
			}),
		},
		Modal: {
			baseStyle: (props: StyleFunctionProps) => ({
				dialogContainer: { [mobileSheetQuery]: { alignItems: "flex-end !important" } },
				dialog: {
					bg: mode("panel.surface", "panel.surface")(props),
					borderWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
					borderRadius: "6px",
					boxShadow: "0 20px 60px rgba(0, 0, 0, 0.42)",
					[mobileSheetQuery]: mobileSheet,
				},
				header: {
					borderBottomWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
				},
				footer: {
					borderTopWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
				},
			}),
		},
		Drawer: {
			baseStyle: (props: StyleFunctionProps) => ({
				dialog: {
					bg: mode("panel.surface", "panel.surface")(props),
					borderColor: mode("panel.border", "panel.border")(props),
					borderWidth: "0",
				},
			}),
		},
		Menu: {
			baseStyle: (props: StyleFunctionProps) => {
				const hoverBg = mode("panel.elevated", "panel.elevated")(props);
				return {
					list: {
						bg: mode("panel.surface", "panel.surface")(props),
						borderWidth: "1px",
						borderColor: mode("panel.border", "panel.border")(props),
						boxShadow: "0 18px 48px rgba(0, 0, 0, 0.38)",
					},
					item: {
						bg: "transparent !important",
						color: mode("panel.text", "panel.text")(props),
						_hover: {
							bg: `${hoverBg} !important`,
						},
						_focus: {
							bg: `${hoverBg} !important`,
						},
						_active: {
							bg: `${hoverBg} !important`,
						},
					},
				};
			},
		},
		Popover: {
			baseStyle: (props: StyleFunctionProps) => ({
				content: {
					bg: mode("panel.surface", "panel.surface")(props),
					borderWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
					boxShadow: "0 18px 48px rgba(0, 0, 0, 0.38)",
				},
				header: {
					borderBottomWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
				},
				footer: {
					borderTopWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
				},
			}),
		},
		Accordion: {
			baseStyle: (props: StyleFunctionProps) => ({
				container: {
					borderTopWidth: "0",
					borderBottomWidth: "1px",
					borderColor: mode("panel.border", "panel.border")(props),
					_last: {
						borderBottomWidth: "1px",
					},
				},
				button: {
					bg: "transparent",
					_hover: {
						bg: mode("panel.elevated", "panel.elevated")(props),
					},
					_expanded: {
						bg: mode("panel.elevated", "panel.elevated")(props),
					},
				},
				panel: {
					bg: mode("panel.surface", "panel.surface")(props),
				},
			}),
		},
		Alert: {
			baseStyle: {
				container: {
					borderRadius: "6px",
					fontSize: "sm",
				},
			},
		},
		Select: {
			baseStyle: {
				field: {
					bg: "panel.surface",
					color: "panel.text",
					_dark: {
						borderColor: "panel.borderStrong",
						borderRadius: "6px",
					},
					_light: {
						borderRadius: "6px",
					},
				},
			},
		},
		FormHelperText: {
			baseStyle: {
				fontSize: "xs",
			},
		},
		FormLabel: {
			baseStyle: {
				fontSize: "sm",
				fontWeight: "medium",
				mb: "1",
				_dark: { color: "panel.textSecondary" },
			},
		},
		Input: {
			baseStyle: {
				addon: {
					bg: "panel.elevated",
					_dark: {
						borderColor: "panel.borderStrong",
						_placeholder: {
							color: "panel.textMuted",
						},
					},
				},
				field: {
					bg: "panel.surface",
					color: "panel.text",
					_focusVisible: {
						boxShadow: "none",
						borderColor: "primary.500",
						outlineColor: "primary.500",
					},
					_dark: {
						borderColor: "panel.borderStrong",
						_disabled: {
							color: "panel.textMuted",
							borderColor: "panel.border",
						},
						_placeholder: {
							color: "panel.textMuted",
						},
					},
				},
			},
		},
		Table: {
			baseStyle: {
				table: {
					borderCollapse: "separate",
					borderSpacing: 0,
				},
				thead: {
					borderBottomColor: "light-border",
				},
				th: {
					background: "panel.elevated",
					color: "panel.text",
					borderColor: "panel.border !important",
					borderBottomColor: "panel.border !important",
					borderTop: "1px solid ",
					borderTopColor: "panel.border !important",
					_first: {
						borderLeft: "1px solid",
						borderColor: "panel.border !important",
					},
					_last: {
						borderRight: "1px solid",
						borderColor: "panel.border !important",
					},
					_dark: {
						borderColor: "panel.border !important",
						background: "panel.elevated",
					},
				},
				td: {
					transition: "all .1s ease-out",
					borderColor: "panel.border",
					borderBottomColor: "panel.border !important",
					_first: {
						borderLeft: "1px solid",
						borderColor: "panel.border",
						_dark: {
							borderColor: "panel.border",
						},
					},
					_last: {
						borderRight: "1px solid",
						borderColor: "panel.border",
						_dark: {
							borderColor: "panel.border",
						},
					},
					_dark: {
						borderColor: "panel.border",
						borderBottomColor: "panel.border !important",
					},
				},
				tr: {
					"&.interactive": {
						cursor: "pointer",
						_hover: {
							"& > td": {
								bg: "panel.elevated",
							},
							_dark: {
								"& > td": {
									bg: "panel.elevated",
								},
							},
						},
					},
					_last: {
						"& > td": {
							_first: {
								borderBottomLeftRadius: "8px",
							},
							_last: {
								borderBottomRightRadius: "8px",
							},
						},
					},
				},
			},
		},
		Button: {
			variants: {
				outline: (props: StyleFunctionProps) => ({
					borderColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
					_hover: {
						bg: mode("blackAlpha.50", "whiteAlpha.100")(props),
					},
					_active: {
						bg: mode("blackAlpha.100", "whiteAlpha.200")(props),
					},
				}),
			},
		},
	},
};

export const theme = extendTheme(sharedThemeConfig);
export const rtlTheme = extendTheme({ ...sharedThemeConfig, direction: "rtl" });
