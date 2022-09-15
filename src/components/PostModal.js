import { useState } from "react";
import ReactPlayer from "react-player";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postArticleAPI } from '../actions';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const PostModal = (props) => {
    const  [editorText, setEditorText]  = useState("");
    const  [shareImage, setShareImage]  = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [showShare, setShowShare] = useState("");

    const handleShare = (e) =>{
        setShowShare(`${e.target.id}`)
    }

    const postArticle = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        props.click();
    };


    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setShareImage(image);
    };


    return (
      <Container>
        <Content>
          <Header>
            <h2>Create a post</h2>
            <button onClick={props.click}>
              <img src="/Images/close-icon.svg" alt="" />
            </button>
          </Header>
          <SharedContent>
            <UserInfo>
              {props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/Images/user.svg" alt="" />
              )}
              <span>{props.user.displayName}</span>
            </UserInfo>
            <Editor>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="What do you want to talk about?"
                autoFocus={true}
              />
              <UploadImage>
                {showShare === "image" && (
                  <>
                    <input
                      type="file"
                      except="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </>
                )}

                {showShare === "video" && (
                  <>
                    <input
                      type="text"
                      placeholder="Please input a video link"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                    {videoLink && (
                      <ReactPlayer width={"100%"} url={videoLink} />
                    )}
                  </>
                )}
              </UploadImage>
            </Editor>
          </SharedContent>
          <SharedCreation>
            <AttachedAssets>
              <AssetButton id="image" onClick={handleShare}>
                <img className="first" src="/Images/share-image.png" alt="" />
              </AssetButton>
              <AssetButton id="video" onClick={handleShare}>
                <img src="/Images/share-video.png" alt="" />
              </AssetButton>
            </AttachedAssets>
            <SharedComment>
              <AssetButton className="comment">
                <img src="/Images/share-comment.png" alt="" />
                Anyone
              </AssetButton>
            </SharedComment>
            <PostButton
              disabled={!editorText ? true : false}
              onClick={(e) => postArticle(e)}
            >
              Post
            </PostButton>
          </SharedCreation>
        </Content>
      </Container>
    );
}

const Container = styled.div`
    color: black;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    inset: 0 0 0 0;
    z-index: 9999;
    animation: fadeIn 0.3s;

    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;  

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    max-height: 90%;
    margin: 0 auto;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 32px;
    overflow: initial;
`;

const Header = styled.div`
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 40px;
        height: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
    }
`;

const SharedContent = styled.div`
    padding: 8px 12px;
    background: transparent;
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    overflow-y: auto;
`;

const UserInfo = styled.div`
    padding: 12px 24px;
    display: flex;
    align-items: center;

    img{
        width: 48px;
        height: 48px;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const SharedCreation = styled.div`
    padding: 12px 24px 12px 16px;
    display: flex;
    justify-content: space-between;
`;

const AttachedAssets = styled.div`
    padding-right: 8px;
    display: flex;
    align-items: center;
`;

const AssetButton = styled.button`
    height: 48px;
    width: 40px;
    min-width: auto;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    margin-left: 8px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        pointer-events: none;
        width: 32px;
    }

    .first{
        padding-right: 5px;
    }
`;

const SharedComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);

    .comment{
        width: fit-content;
        img{
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    padding: 0 16px;
    color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.4)' : 'white'};
    border: 0;
    border-radius: 20px;
    background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.8)' : '#0a66c2'};

    &:hover{
        background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.8)' : '#004182'};
    }
`;

const Editor = styled.div`
    padding: 12px 24px;

    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
