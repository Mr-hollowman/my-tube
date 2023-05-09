import styled from "styled-components";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Home({type}) {
  const [videos, setVideos] = useState([]);
  console.log(videos,"videos");

  const getData = async () => {
    await axios.get(`/videos/${type}`).then((res) => {
      setVideos(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, [type]);
  return <Container>{videos && videos.map((video) => <Card key={video._id} video={video} />)}</Container>;
}
