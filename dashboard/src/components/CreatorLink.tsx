import { Box, Text } from "@chakra-ui/react";
import type { FC } from "react";

export const CREATOR_NAME = "UnchartedAli";
export const CREATOR_TELEGRAM_URL = "https://t.me/yamods";

const TelegramGlyph: FC = () => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<title>Telegram</title>
		<path d="M21.94 4.36c.3-1.23-.45-1.72-1.28-1.4L2.6 9.9c-1.2.48-1.19 1.16-.22 1.46l4.64 1.45 1.8 5.52c.22.6.11.85.75.85.5 0 .72-.23 1-.5l2.4-2.34 5 3.7c.92.5 1.58.24 1.8-.86l3.17-14.88zM8.4 12.6l9.9-6.25c.46-.28.88-.13.54.18l-8.02 7.24-.31 3.3-2.1-4.47z" />
	</svg>
);

type CreatorLinkProps = {
	variant?: "header" | "footer";
};

export const CreatorLink: FC<CreatorLinkProps> = ({ variant = "header" }) => {
	if (variant === "footer") {
		return (
			<Box
				as="a"
				href={CREATOR_TELEGRAM_URL}
				target="_blank"
				rel="noopener noreferrer"
				display="inline-flex"
				alignItems="center"
				gap={2}
				color="panel.textMuted"
				fontSize="xs"
				letterSpacing="0.08em"
				transition="color 0.15s ease"
				_hover={{ color: "panel.accent" }}
				aria-label={`${CREATOR_NAME} on Telegram`}
			>
				<TelegramGlyph />
				<Text as="span">by {CREATOR_NAME}</Text>
			</Box>
		);
	}

	return (
		<Box
			as="a"
			href={CREATOR_TELEGRAM_URL}
			target="_blank"
			rel="noopener noreferrer"
			h="34px"
			px={2.5}
			borderRadius="full"
			bg="transparent"
			color="panel.textSecondary"
			display="inline-flex"
			alignItems="center"
			gap={2}
			cursor="pointer"
			transition="background 0.15s ease, color 0.15s ease, transform 0.15s ease"
			_hover={{
				bg: "panel.elevated",
				color: "panel.text",
				transform: "translateY(-1px)",
			}}
			_active={{ transform: "translateY(0)" }}
			_focusVisible={{
				boxShadow: "0 0 0 2px var(--rb-panel-accent)",
				outline: "none",
			}}
			aria-label={`${CREATOR_NAME} on Telegram`}
		>
			<TelegramGlyph />
			<Text fontSize="xs" fontWeight="semibold" lineHeight="1">
				{CREATOR_NAME}
			</Text>
		</Box>
	);
};
