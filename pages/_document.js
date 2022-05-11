import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" type="image/svg+xml" href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;format=svg"></link>
				<link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v3/bundles/css?components=o-header@^10.0.1,o-footer@^9.2.2,o-colors@^6.0.8,o-typography@^7.0.2,o-teaser@^6.2.2,o-teaser-collection@^4.2.1,o-grid@^6.1.5,o-labels@^6.2.2&brand=core&system_code=$$$-no-bizops-system-code-$$$" />
				<script src="https://www.ft.com/__origami/service/build/v3/bundles/js?components=o-header@^10.0.1,o-autoinit@^3.0.0,o-footer@^9.2.2,o-colors@^6.0.8,o-typography@^7.0.2,o-teaser@^6.2.2,o-teaser-collection@^4.2.1,o-grid@^6.1.5,o-labels@^6.2.2&system_code=$$$-no-bizops-system-code-$$$" defer></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}