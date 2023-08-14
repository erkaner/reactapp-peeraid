import React from 'react';
import { ReactNode } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div style={{ height: "100vh", backgroundImage: "url(/siteimages/timeline-background.png)" }}>
            <NavMenu />
            <Container className="pb-4 pt-4 bg-white">
                {children}
            </Container>
        </div>
    );
};

export default Layout;
