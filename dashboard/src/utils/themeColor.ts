export const updateThemeColor = (themeName: string, fallback?: string) => {
	const el = document.querySelector('meta[name="theme-color"]');
	const map: Record<string, string> = {
		dark: "#08080a",
		light: "#f2f0eb",
		custom: fallback || "#08080a",
	};
	const color = fallback || map[themeName] || map.dark;
	el?.setAttribute("content", color);
};
