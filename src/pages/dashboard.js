import styled from "styled-components/macro";
import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../features/todo/apis/tasks";
import ListWrapper from "../features/todo/ListWrapper";
import NewList from "../features/todo/NewList";
import { FullscreenLoader } from "../components/loader";
import { useAuth } from "../auth";
const Dashboard = () => {
  const { token } = useAuth()
  const { data, isLoading } = useQuery(["lists"], () => getAllTasks(token))
  return <Container>
    {isLoading ? <FullscreenLoader /> : (<>
      <NewList />
      {data.map(list => <ListWrapper key={list.id} list={list} />)}
    </>)}
  </Container>
}

// styed comoment
const Container = styled.div`  
  width: 100vw;
  min-height: 100vh;
  padding-top: 96px;
  background: #E8EFEB;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 72px;
`
export default Dashboard;
