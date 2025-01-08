const Logo = () => (
	<svg viewBox="0 0 200 200"  width="60" height="60" xmlns="http://www.w3.org/2000/svg">
		<circle
			cx="100"
			cy="100"
			r="95"
			fill="white"
			stroke="#E63946"
			strokeWidth="4"
		/>

		<path
			d="M100 40 C100 40 140 90 140 130 C140 152 122 170 100 170 C78 170 60 152 60 130 C60 90 100 40 100 40Z"
			fill="#E63946"
		/>

		<path
			d="M90 100 L110 100 M100 90 L100 110"
			stroke="white"
			strokeWidth="8"
			strokeLinecap="round"
		/>

		<path id="circlePath" d="M100,25 A75,75 0 1,1 99.9,25" fill="none" />

		<text>
			<textPath
				href="#circlePath"
				startOffset="25%"
				fontFamily="Arial, sans-serif"
				fontSize="22"
				fill="#E63946"
				textAnchor="middle"
			>
				LIFE • BLOOD • BANK
			</textPath>
		</text>
	</svg>
);

export default Logo;
