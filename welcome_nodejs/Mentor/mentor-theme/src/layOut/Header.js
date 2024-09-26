import { Navbar, Nav } from 'react-bootstrap';

function HeaderComponent() {
    const siteName = "Mentor";

    const mainMenu = [
        { url: "#home", text: "Home" },
        { url: "#about", text: "About" },
        { url: "#services", text: "Services" },
        { url: "#contact", text: "Contact" },
    ];

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">{siteName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {mainMenu.map((item, index) => (
                            <Nav.Link href={item.url} key={index}>
                                {item.text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default HeaderComponent;
