import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme})=>theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size:12px;
  font-weight: 400;
  color: ${({theme})=>theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

export const Comment = () => {
  return (
    <Container>
      <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VwnCdshko-tWWvLg64cPqgHaEK%26pid%3DApi&f=1&ipt=df64562edea8e56f470ed7c9b2f6441ea6060f023b5641dce75c79d0498faf4c&ipo=images" />
      <Details>
        <Name>Mr.hollowman <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius a asperiores soluta harum id repellat reiciendis repudiandae sunt omnis, autem debitis? Non pariatur mollitia reiciendis, aut velit obcaecati blanditiis laboriosam.</Text>
      </Details>
    </Container>
  )
}
