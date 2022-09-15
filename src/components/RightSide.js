import styled from "styled-components";

const RightSide = () => {
    return (
    <Container>
        <FollowCard>
        <Title>
            <h2>Add to your feed</h2>
            <img src="/Images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
            <li>
                <a>
                    <Avatar />
                </a>
                <div>
                    <span>#Linkedin</span>
                    <button>Follow</button>
                </div>
            </li>
            <li>
                <a>
                    <Avatar />
                </a>
                <div>
                    <span>#Video</span>
                    <button>Follow</button>
                </div>
            </li>
        </FeedList>
        <Recommendation>
            View all recommendations
            <img src='/Images/right-icon.svg' alt=''/>
        </Recommendation>
        </FollowCard>
        <BannerCard>
            <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt='' />
        </BannerCard>
    </Container>
    );
};

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    padding: 12px;
    margin-bottom: 8px;
    background: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%, 0 0 0 rgb(0 0 0 / 20%));
    position: relative;
    overflow: hidden;
`;

const Title = styled.div`
    width: 100%;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

const FeedList = styled.ul`
    margin-top: 16px;
    li{
        font-size: 14px;
        margin: 12px 0;
        display: flex;
        align-items: center;
        position: relative;

        div{
            display: flex;
            flex-flow: column;
        }

        button{
            max-width: 480px;
            min-height: 32px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.6);
            text-align: center;
            background: transparent;
            padding: 16px;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
            border: 0;
            border-radius: 15px;
            outline: none;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    background: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs") center center/contain no-repeat;
    margin-right: 8px;
`;

const Recommendation = styled.a`
    font-size: 14px;
    color: #0a66c2;
    display: flex;
    align-items: center;
`;

const BannerCard = styled(FollowCard)`
    img{
        width: 100%;
        height: 100%;
    }
`;

export default RightSide;
