// components
import Layout from "../layouts/Layout";
import Landing from "../components/Landing";
import Example from "../components/Projects";

// styles
import { Button } from "reactstrap";

const Index = () => (
	<Layout>
		<Landing />
		<Example />
	</Layout>
);

export default Index;
