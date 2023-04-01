import styled from 'styled-components';
import MyTube from '../img/logo.png';
import { AccountCircleOutlined, ArticleOutlined, ExploreOffOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, LibraryMusicOutlined, LiveTvOutlined, MovieOutlined, SettingsBrightnessOutlined, SettingsOutlined, SportsBasketballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined,  } from '@mui/icons-material';

const Container = styled.div`
    flex:1;
    background:${({theme})=>theme.bg};
    height:100vh;
    color:${({theme})=>theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding:18px 15px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight:bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height:25px;

`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 7.5px 0px;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`;

const Login = styled.div`

`;

const Button = styled.button`
    padding: 5px 15px;
    background: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export default function Menu({setDarkMode, darkMode}) {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={MyTube} />
                MyTube
            </Logo>
            <Item><Home />Home</Item>
            <Item><ExploreOffOutlined />Explore</Item>
            <Item><SubscriptionsOutlined />Subscriptions</Item>
            <Hr />
            <Item><VideoLibraryOutlined />Library</Item>
            <Item><HistoryOutlined />History</Item>
            <Hr />
            <Login>
                Sign in to like videos, comment and Subscribe
                <Button><AccountCircleOutlined />SIGN IN</Button>
            </Login>
            <Hr />
            <Item><LibraryMusicOutlined />Music</Item>
            <Item><SportsBasketballOutlined />Sports</Item>
            <Item><SportsEsportsOutlined />Gaming</Item>
            <Item><MovieOutlined />Movies</Item>
            <Item><ArticleOutlined />News</Item>
            <Item><LiveTvOutlined />Live</Item>
            <Hr />
            <Item><SettingsOutlined />Settings</Item>
            <Item><FlagOutlined />Report</Item>
            <Item><HelpOutlineOutlined />Help</Item>
            <Item onClick={()=>setDarkMode(!darkMode)}><SettingsBrightnessOutlined />{darkMode? "Light" : "Dark"} Mode</Item>
        </Wrapper>
    </Container>
  )
}
