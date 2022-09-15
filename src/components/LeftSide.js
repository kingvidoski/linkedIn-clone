import styled from 'styled-components';
import { connect } from "react-redux";

const LeftSide = (props) => {
    return (
    <Container>
        <ArtCard>
            <UserInfo>
                <CardBg />
                <a>
                    <Photo />
                    <Link>Welcome, {props.user ? props.user.displayName : "there!"}</Link>
                </a>
                <a>
                    <AddPhotoText>Add a Photo</AddPhotoText>
                </a>
            </UserInfo>
            <Widget>
                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <img src='/Images/widget-icon.svg' alt='' />
                </a>
            </Widget>
            <Item>
                <span>
                    <img src='/Images/item-icon.svg' alt='' />
                    My Items
                </span>
            </Item>
        </ArtCard>
        <CommunityCard>
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>Events<img src='/Images/plus-icon.svg' alt='' /></span>
            </a>
            <a>
                <span>Follow Hashtags</span>
            </a>
            <a>
                <span>Discover more</span>
            </a>
        </CommunityCard>
    </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    position: relative;
`;

const UserInfo = styled.div`
    padding: 12px 12px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const CardBg = styled.div`
    height: 54px;
    background: url("/Images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    width: 72px;
    height: 72px;
    background-image: url("/Images/photo.svg");
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    background-color: white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.5;
`;

const AddPhotoText = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #0a68c2;
    margin-top: 4px;
    line-height: 1.33;
    cursor: pointer;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    a{
        padding: 4px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            background: rgba(0, 0, 0, 0.08)
        }

        div{
            display: flex;
            flex-flow: column;
            text-align: left;

            span{
                font-size: 12px;
                line-height: 1.333;

                &:first-child{
                    color: rgba(0, 0, 0, 0.6);
                }

                &:nth-child(2){
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }
`;

const Item = styled.a`
    display: block;
    border-color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    padding: 12px 0 12px 12px;
    cursor: pointer;

    span{
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px;
    text-align: left;
    display: flex;
    flex-flow: column;

    a{
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
        cursor: pointer;

        &:hover{
            color: #0a66c2;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child{
            color: rgba(0, 0, 0, 0.6);
            padding: 12px;
            text-decoration: none;
            border-top: 1px solid #d6cec2;

            &:hover{
                background: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(LeftSide);
