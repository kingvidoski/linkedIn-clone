import styled from 'styled-components';
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

const Header = (props) => {
    return (
    <Container>
        <Content>
            <Logo>
                <a href='/home'>
                    <img src='Images/home-logo.svg' alt='' />
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder='Search' />
                </div>
                <SearchIcon><img src='/Images/search-icon.svg' alt='' /></SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className='active'><a><img src='/Images/nav-home.svg' alt=''/><span>Home</span></a></NavList>
                    <NavList><a><img src='/Images/nav-network.svg' alt=''/><span>My Network</span></a></NavList>
                    <NavList><a><img src='/Images/nav-jobs.svg' alt=''/><span>Jobs</span></a></NavList>
                    <NavList><a><img src='/Images/nav-messaging.svg' alt=''/><span>Messaging</span></a></NavList>
                    <NavList><a><img src='/Images/nav-notifications.svg' alt=''/><span>Notification</span></a></NavList>

                    <User>
                        <a>
                            {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt=""/> : <img src='/Images/user.svg' alt='' />}
                            <span>
                                Me
                                <img className='down' src='/Images/down-icon.svg' alt='' />
                            </span>
                        </a>
                        <SignOut onClick={() => props.signOut()}><a>Sign Out</a></SignOut>
                    </User>
                    <Work>
                        <a>
                            <img src='/Images/nav-work.svg' alt='' />
                            <span>
                                Work
                                <img src='/Images/down-icon.svg' alt='' />
                            </span>
                        </a>
                    </Work>
                </NavListWrap>
            </Nav>
        </Content> 
    </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 8px 24px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Content = styled.div`
    max-width: 1128px;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Logo = styled.span`
    margin-right: 8px;
`;

const Search = styled.div`
    position: relative;
    div{
        max-width: 280px;

        input{
            width: 218px;
            height: 34px;
            padding: 0 8px 0 40px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.9);
            border: none;
            background: #eef3f8;
            border-radius: 2px;
            line-height: 1.75;
            &:focus{
                outline-color: #dce8f1;
            }
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    top: 10px;
    left: 2px;
    z-index: 1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const Nav = styled.nav`
    margin-left: auto;
    display: flex;

    @media (max-width: 768px){
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: white;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active{
        span:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 8px;
            width: 80%;
            border-bottom: 2px solid rgba(0, 0, 0, 0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;

    a{
        min-width: 80px;
        min-height: 42px;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        position: relative;

        span{
            color: rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px){
            min-width: 70px;
        }

        &:hover, &:active{
            span{
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`;

const SignOut = styled.div`
    width: 100px;
    height: 48px;
    font-size: 16px;
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    transition-duration: 167ms;
    display: none;
`;

const User = styled(NavList)`
    a{
        img{
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }

        img.down{
            width: 20px;
        }

        span{
            display: flex;
            align-items: center;
        }
    }
    &:hover{
        ${SignOut} {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    span{
        img{
            width: 15px;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
