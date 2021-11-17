import styledComponentsCjs from "styled-components"

export const CardContainer = styledComponentsCjs.img `
    width: 7rem;
    cursor: pointer;
    display: inline-block;
	transition-duration: 0.2s;
	transition-property: transform;

	@include hideTapHighlightColor();
	@include hardwareAccel();
	@include improveAntiAlias();

	&:hover {
		transform: translateY(-5px);
	}
`

export const SelectedCardContainer = styledComponentsCjs.div `
	display: flex;
	flex-direction: row;
	
	img {
		width: 7rem;
		margin-right: 0.3rem;
	}
`
