// next.js
import Head from "next/head";

// components
import Header from "../components/Header";
import Particle from "../components/Particle";

// utilities
import Headroom from "react-headroom";

// styles
import bootstrap from "bootstrap/dist/css/bootstrap.css";

const layoutStyle = {
	marginLeft: "4%",
	marginRight: "4%",
	padding: "3%"
};

const Layout = props => (
	<div>
		<Head>
			<title>riceapps</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>
		</Head>
		<Headroom>
			<Header />
		</Headroom>
		<Particle />
		<div style={layoutStyle}>{props.children}</div>
		<style jsx global>
			{`
				html, body {
					font-family: 'Roboto' !important;
					font-weight: 300;
					color: #fff !important;
					background-color: #000 !important;
					background: #000 !important;
				}
				p {
					font-weight: 300;
				}
			`}
		</style>
		<style global jsx>
			{bootstrap}
		</style>
	</div>
);

export default Layout;
