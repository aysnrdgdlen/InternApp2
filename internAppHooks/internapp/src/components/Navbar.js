import {Menu, Container, Image, Dropdown} from 'semantic-ui-react'
const Navbar = () => {

    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='h2' header>
                    InternApp
                </Menu.Item>
            </Container>
        </Menu>

    )

}
export default Navbar;


