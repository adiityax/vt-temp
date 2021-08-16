import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Total Export Value All India</Heading>
		</Column>
		<Column>
			<Heading>Total No. Of Ports In India</Heading>
		</Column>
		<Column>
			<Heading>Karnataka's Total Exports</Heading>
		</Column>
		<Column>
			<Heading>Total States</Heading>
		</Column>
        <Column>
			<Heading>No. Of Ports in Karnataka</Heading>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
