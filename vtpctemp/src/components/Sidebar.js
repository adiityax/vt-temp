import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Navbar from "react-bootstrap";
import Nav from "react-bootstrap";

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<div className="App container py-3">
			<Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
				<NavIcon to="#">
					<FaIcons.FaBars onClick={showSidebar} />
				</NavIcon>
				<h1 style = {{color: "white",
					 marginLeft: "20px",}}>
					VTPC
				</h1>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav activeKey={window.location.pathname}>
						<Nav.Link href="/login">Login</Nav.Link>
						<img src = {image} alt = ''/>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
