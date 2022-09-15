import styled from 'styled-components';
import { connect } from "react-redux";
import { signInAPI } from '../actions';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    return (
    <Container>
        {props.user && <Navigate to="/home" />}
        <nav className='login'>
            <div><img src="/Images/login-logo.svg" alt=""/></div>
            <div>
                <Join>Join now</Join>
                <SignIn>Sign in</SignIn>
            </div>
        </nav>
        <section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src='/Images/login-hero.svg' alt='' />
            </Hero>
            <Form>
                <Google onClick={()=> props.signIn()}>
                    <img src='/Images/google.svg' alt='' />
                    Sign in with Google
                </Google>
            </Form>
        </section>
    </Container>
    )
}

const Container = styled.div``;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    margin-right: 20px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover{
        background: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        border-radius: 4px;
    }
`;

const SignIn = styled.a`
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    color: #0a68c2;
    padding: 10px 24px;
    box-shadow: inset 0 0 0 1px #0a68c2;
    border-radius: 24px;
    transition-duration: 167ms;
    cursor: pointer;

    &:hover{
        background: rgba(112, 181, 249, 0.15);
    }
`;

const Hero = styled.div`
    width: 100%;

    h1{
        width: 55%;
        font-size: 56px;
        font-weight: 200;
        color: #2977c9;
        line-height: 70px;

        @media (max-width: 768px) {
            width: 100%;
            font-size: 20px;
            text-align: center;
            line-height: 2;
        }
    }

    img{
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        /* z-index: -1; */

        @media (max-width: 768px){
            position: initial;
            width: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    width: 408px;
    margin-top: -100px;

    @media (max-width: 768px){
        margin-top: 20px;
        margin-inline: auto;
    }
`;

const Google = styled.button`
    width: 100%;
    height: 54px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 28px;
    border: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0), inset 0 0 0 1px rgb(0 0 0 / 0);
    transition-duration: 167ms;
    cursor: pointer;

    &:hover{
        background: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: ()=> dispatch(signInAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);

