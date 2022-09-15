import { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = () => {
    setShow((prevData) => !prevData);
  };

  return (
    <>
      {props.article.length === 0 ? (
        <p>There are no posts</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/Images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="/Images/photo-icon.png" alt="" />
                <span>Photo</span>
              </button>
              <button>
                <img src="/Images/video-icon.png" alt="" />
                <span>Video</span>
              </button>
              <button>
                <img src="/Images/event-icon.jpeg" alt="" />
                <span>Event</span>
              </button>
              <button>
                <img src="/Images/article-icon.png" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>

          <Content>
            {props.loading && <img src="/Images/spin-loader.gif" alt="" />}

            {props.article.length > 0 &&
              props.article.map((art, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={art.actor.image} alt="" />
                      <div>
                        <span>{art.actor.title}</span>
                        <span>{art.actor.description}</span>
                        <span>{art.actor.date}</span>
                      </div>
                    </a>
                    <button>
                      ...
                      <img src="" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{art.description}</Description>
                  <SharedImg>
                    <a>
                      {!art.sharedImg && art.video ? (
                        <ReactPlayer width={"100%"} url={art.video} />
                      ) : (
                        art.sharedImg && <img src={art.sharedImg} />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCount>
                    <li>
                      <button>
                        <img
                          className="clap"
                          src="/Images/claps-icon.jpeg"
                          alt=""
                        />
                        <img src="/Images/like-icon.png" alt="" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>2 comments</a>
                    </li>
                  </SocialCount>
                  <SocialAction>
                    <button>
                      <img src="/Images/transparentLike-icon.png" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/Images/comments-icon.jpeg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/Images/share-icon.png" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/Images/send-icon.jpeg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialAction>
                </Article>
              ))}
          </Content>
          {show && <PostModal click={handleClick} />}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  background: #fff;
  margin-bottom: 8px;
  text-align: center;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  position: relative;
  overflow: hidden;
`;

const ShareBox = styled(CommonCard)`
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  display: flex;
  flex-flow: column;

  div {
    button {
      min-height: 48px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.6);
      border: none;
      outline: none;
      background: transparent;
      display: flex;
      align-items: center;

      img {
        width: 24px;
        margin: 0 4px 0 -2px;
      }
    }
    &:first-child {
      padding: 8px 16px 0 16px;
      display: flex;
      align-items: center;

      img {
        width: 48px;
        margin-right: 8px;
        border-radius: 50%;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      padding-bottom: 4px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      span {
        color: #7ab5f9;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;

  button {
    img {
      width: 34px;
    }
  }
`;

const SharedActor = styled.div`
  padding: 12px 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  a {
    margin-right: 12px;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    img {
      width: 48px;
      height: 48px;
    }

    div {
      margin-left: 8px;
      display: flex;
      flex-flow: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 12px;
    border: 0;
    outline: none;
    background: transparent;
  }
`;

const Description = styled.div`
  font-size: 14px;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  overflow: hidden;
`;

const SharedImg = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 8px;
  display: block;
  position: relative;
  background: #f9fafb;

  a > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SocialCount = styled.ul`
  padding: 8px 0;
  margin: 0 16px;
  line-height: 1.3;
  border-bottom: 1px solid #e9e5df;
  display: flex;
  align-items: flex-start;
  list-style: none;
  overflow: auto;

  li {
    font-size: 12px;
    margin-right: 5px;

    a {
      display: inline-block;
      margin-top: 12px;
      padding-left: 4px;
    }

    button {
      border: 0;
      display: flex;
      align-items: center;
    }

    &:first-child {
      button {
        img {
          width: 24px;
        }
        .clap {
          width: 38px;
          margin-right: -6px;
        }
      }
    }
  }
`;

const SocialAction = styled.div`
  min-height: 40px;
  margin: 0;
  font-size: 14px;
  padding: 4px 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    color: #0a66c2;
    padding: 8px;
    margin-left: 20px;
    display: inline-flex;
    align-items: center;
    border: 0;
    border-radius: 8px;

    @media (min-width: 768px) {
      span {
        margin-left: 4px;
      }
    }
  }
`;

const Content = styled.div`
  height: 500px;
  text-align: center;
  img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    article: state.articleState.article,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
