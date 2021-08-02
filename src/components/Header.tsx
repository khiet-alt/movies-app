import React from 'react'
import { Wrapper} from '../styles/header.style'
import { Navbar, Container, Nav, NavItem, Modal, Form, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ButtonStyled } from '../styles/header.style'

type Props = {
    auth: userState;
    loginUser: (creds: user) => void;
    logoutUser: () => void;
    signupUser: (creds: user) => void
}

class ShowModal extends React.Component<{
    show: boolean;
    toggle: () => void,
    loginUser: (creds: user) => void,
    signupUser: (creds: user) => void
}, any> {

    constructor(props: any){
        super(props)

        this.state = {
            username: '',
            password: '',
            signup: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.transformModal = this.transformModal.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleSubmit(event: React.FormEvent) {
        this.props.toggle()
        event.preventDefault()
        this.props.loginUser({username: this.state.username, password: this.state.password})
    }

    handleSignup(event: React.FormEvent){
        this.transformModal()
        event.preventDefault()
        this.props.signupUser({username: this.state.username, password: this.state.password})
    }

    handleChange(event: any) {
        const target = event.target;
        const value: string = target.value;
        const name: string = target.name;
    
        this.setState({
          [name]: value
        });
    }

    transformModal() {
        this.setState((prevState: any) => {
            return {
                ...prevState,
                signup: !prevState.signup
            }
        })
    }

    render(){
        return (
            <Modal {...this.props} backdrop="static">
                <Modal.Header>
                    {this.state.signup
                        ?   <Modal.Title>Sign Up</Modal.Title>
                        :   <Modal.Title>Log in</Modal.Title>
                    }
                    <button onClick={this.props.toggle}><span className="fa fa-window-close fa-lg"></span></button>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.state.signup ? this.handleSignup : this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input className="form-control" placeholder="Enter username" 
                                    type="text" id="username" name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                            />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" placeholder="Enter password"
                                    type="password" id="password" name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                            />
                        </div>
    
                        <ButtonStyled type="submit" className="btn btn-success btn-block">Submit</ButtonStyled>
                        <Modal.Footer>
                            <p>or</p>
                            {this.state.signup
                                ?   <Button variant="light" onClick={this.transformModal}>Log in</Button>
                                :   <Button variant="info" onClick={this.transformModal}>Sign up</Button>
                            }
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

const Header = (props: Props): JSX.Element => {
        
    const [isModalOpen, setModalOpen] = React.useState(false)
    const toggle = (): void => setModalOpen(!isModalOpen)

    return (
        <>
        <Wrapper expand="md" className="navbar-light">
            <Container>
                    <Navbar.Brand href="/">
                        <img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top"
                            />{' '}
                        Movies
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="offset-3">
                    <Nav className="me-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/movies">
                                <span className="fa fa-film fa-lg"></span> Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/favorites">
                                <span className="fa fa-heart fa-lg"></span> My Favorites
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {
                                !props.auth.isAuthenticated
                                ?
                                    <button onClick={toggle}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </button>
                                :
                                    <>
                                    <div className="navbar-text mr-3">{props.auth.user ? props.auth.user.username : null}</div>
                                    <button onClick={props.logoutUser}>
                                        <span className="fa fa-sign-in-alt fa-lg"></span> Logout
                                    </button>
                                    </>    
                            }
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Wrapper>
        <ShowModal show={isModalOpen} toggle={toggle} loginUser={props.loginUser} signupUser={props.signupUser}/>
        </>
    )
}

export default Header