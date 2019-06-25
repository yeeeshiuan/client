import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';


class MyNavBar extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive() {
        this.setState({
                          open: !this.state.open,
                        });
        console.log(this.state.open);
    }

    render() { 
        return (
            <Navbar color="dark" 
                    active={this.state.open}>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        {this.props.title}
                    </Navbar.Item>
                    <Navbar.Burger
                        active={this.state.open.toString()}
                        onClick={this.setActive}
                    />
                </Navbar.Brand>
                <Navbar.Menu active={this.state.open.toString()}>
                    <Navbar.Container>
                        <Navbar.Item href="/about">
                            About
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">
                            At the end
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}
export default MyNavBar;
