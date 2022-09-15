import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
    return (
    <Container>
        {!props.user && <Navigate to="/" />}
        <Section>
            <h5><a>Hiring in a hurry? - </a></h5>
            <p>Find talented pros in record time with Upwork and keep business moving.</p>
        </Section>
        <Layout>
            <LeftSide />
            <Main />
            <RightSide />
        </Layout>
    </Container>
    )
}

const Container = styled.div`
    padding: 52px 20px 0 20px;
    max-width: 100%;
`;


const Section = styled.section`
    min-height: 50px;
    /* padding: 16px 0; */
    box-sizing: content-box;
    text-align: center;
    display: flex;
    justify-content: center;
    text-decoration: underline;

    h5{
        color: #0a66c2;
        a{
            font-weight: 700;
        }
    }

    p{
        font-size: 14px;
        color: #434549;
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    /* grid-template-row: auto; */
    column-gap: 25px;
    row-gap: 25px;
    
    @media (max-width: 768px){
        display: flex;
        flex-flow: column;
        padding: 0 5px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);
