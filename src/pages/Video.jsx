import { AddTaskOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import styled from "styled-components"
import { Comments } from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
  `;

const Content = styled.div`
    flex: 5;
  `;
const VideoWrapper = styled.div`
  
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({theme})=>theme.textSoft}
`;

const Buttons = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 20px;
  color: ${({theme})=>theme.text}
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme})=>theme.textSoft};
`;


const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display:flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text}
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft}
  font-size: 12px;
`;
const Description = styled.div`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer
`;


export default function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width={'100%'}
            height={'420'}
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube video player"
            frameBorder={0}
            allow="acclerometer; autoplay; cliboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1cr views . Apr 1, 2023</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOutlined /> Dislike
            </Button>
              <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr></Hr>
        <Channel>
          <ChannelInfo>
            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VwnCdshko-tWWvLg64cPqgHaEK%26pid%3DApi&f=1&ipt=df64562edea8e56f470ed7c9b2f6441ea6060f023b5641dce75c79d0498faf4c&ipo=images" />
            <ChannelDetail>
              <ChannelName>Mr.Hollowman</ChannelName>
              <ChannelCounter>100M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minus debitis molestias in atque odio deleniti reprehenderit nisi, temporibus assumenda similique. Fugit iure quo similique non hic laborum unde cumque?
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}
