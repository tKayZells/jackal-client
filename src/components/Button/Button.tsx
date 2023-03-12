import React from 'react';

import { Color } from '@/utils';

type Size = 'small' | 'medium' | 'large';
type Type = 'fill' | 'outline' | 'none';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	label: string;
	size: Size;
	color: Color;
	buttonType: Type;
	fill?: boolean;
}

function getFontSize(size: Size) {
	let baseSize = 'text-base';
	switch (size) {
		case 'small':
			baseSize = 'text-sm py-2';
			break;
		case 'large':
			baseSize = 'text-xl';
			break;
		case 'medium':
		default:
			break;
	}
	return baseSize;
}

function getContainer(color: Color, isOutline: boolean) {
	let baseColor = isOutline ? `border-palmas-600` : `bg-palmas-600`;
	switch (color) {
		case 'cararra':
			baseColor = isOutline ? `border-cararra-600` : `bg-cararra-600`;
			break;
		case 'bombay':
			baseColor = isOutline ? `border-bombay-600` : `bg-bombay-600`;
			break;
		case 'clay':
			baseColor = isOutline ? `border-clay-600` : `bg-clay-600`;
			break;
		case 'mahogany':
			baseColor = isOutline ? `border-mahogany-600` : `bg-mahogany-600`;
			break;
		case 'palmas':
		default:
			break;
	}
	return baseColor;
}

function getTextColor(color: Color) {
	let baseColor = `text-palmas-600`;
	switch (color) {
		case 'cararra':
			baseColor = `text-cararra-600`;
			break;
		case 'bombay':
			baseColor = `text-bombay-600`;
			break;
		case 'clay':
			baseColor = `text-clay-600`;
			break;
		case 'mahogany':
			baseColor = `text-mahogany-600`;
			break;
		case 'palmas':
		default:
			break;
	}
	return baseColor;
}

export const Button = ({
	label,
	type,
	fill,
	disabled,
	color = 'palmas',
	buttonType = 'outline',
	size = 'medium',
	...props
}: ButtonProps) => {
	const fontSizeStyle = getFontSize(size);
	const widthStyle = fill ? 'w-full' : 'w-fit';
	const btnBaseColor = disabled ? 'bombay' : color;
	const containerColorStyle =
		buttonType === 'none' ? '' : getContainer(btnBaseColor, buttonType === 'outline');
	const fontColor = ['outline', 'none'].includes(buttonType)
		? getTextColor(btnBaseColor)
		: `text-white`;
	const border = buttonType === 'outline' ? 'border' : '';
	const classFromProps = `${fontColor} ${fontSizeStyle} ${widthStyle} ${border} ${containerColorStyle}`;

	return (
		<button
			className={`rounded-sm py-2 px-4 text-center font-mukta font-bold ${classFromProps}`}
			type={type}
			{...props}
		>
			{label}
		</button>
	);
};
