import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/hokusai-logo.svg";

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Navbar variant="dark">
            <Navbar.Brand>
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/images/hokusai-logo.svg"
                    alt="Hokusai Logo"
                    width="40"
                    height="40"
                  />
                </a>
              </Link>
              {/* <Image src={Logo} alt="Hokusai Logo" width={40} height={40} /> */}
            </Navbar.Brand>
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Link href="/bio" passHref>
                <Nav.Link>Bio</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
