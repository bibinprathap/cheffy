import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<title>Chefy | US</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
