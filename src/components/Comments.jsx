import styled from "styled-components"
import { Comment } from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%
`;
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme})=>theme.soft} ;
    background: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;


export const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VwnCdshko-tWWvLg64cPqgHaEK%26pid%3DApi&f=1&ipt=df64562edea8e56f470ed7c9b2f6441ea6060f023b5641dce75c79d0498faf4c&ipo=images"}/>
            <Input placeholder="Add a comment..." />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}
