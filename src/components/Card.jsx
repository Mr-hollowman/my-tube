import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  width:  ${(props)=>props.type !== "sm" && "360px"};
  margin-bottom:  ${(props)=>props.type === "sm" ? "10px" :"45px"};
  cursor: pointer;
  display: ${(props)=>props.type === "sm" && "flex"};
  gap: 10px
`;

const Image = styled.img`
  width: 100%;
  height:  ${(props)=>props.type === "sm" ? "120px" : "202px"};
  background: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top:  ${(props)=>props.type === "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display: ${(props)=>props.type === "sm" && "none"}
`;

const Texts = styled.div`

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text}
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export default function Card({type}) {
  return (
    <Link to={"/video/test"} style={{textDecoration:'none'}}>
      <Container type={type}>
        <Image type={type} src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VwnCdshko-tWWvLg64cPqgHaEK%26pid%3DApi&f=1&ipt=df64562edea8e56f470ed7c9b2f6441ea6060f023b5641dce75c79d0498faf4c&ipo=images"} />
        <Details>
          <ChannelImage type={type} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VwnCdshko-tWWvLg64cPqgHaEK%26pid%3DApi&f=1&ipt=df64562edea8e56f470ed7c9b2f6441ea6060f023b5641dce75c79d0498faf4c&ipo=images" />
          <Texts>
            <Title>Test video</Title>
          <ChannelName>Mr.Hollowman</ChannelName>
            <Info>1cr views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
