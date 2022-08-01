import styled from "styled-components/macro";
import TodoList from "./features/todo/TodoList";
import AddNewTask from "./features/todo/AddNewTask";
import Title from "./features/todo/Title";
import addButton from "./resources/add.svg"
import line from "./resources/line.svg"
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewTask, getAllTasks } from "./features/todo/apis/tasks";


import Spacer from "./components/Spacer";
const App = () => {
  const [title, setTitle] = useState("")
  const queryClient = useQueryClient()
  const [addTodo, setAddTodo] = useState(false)
  const { data, isLoading } = useQuery(["tasks"], getAllTasks)
  const handleTitle = (value) => {
    setTitle(value)
  }
  const showAddTodo = () => {
    setAddTodo(true)
  }
  const taskMutation  = useMutation(addNewTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
  return <Container>
    {isLoading ? <div>loading tasks</div> : (
      <TodoListWrapper>
        <Title title={title} handleTitle={handleTitle} />
        <TodoList todos={data} />
        {addTodo ? (<>
          <LineBreak />
          <AddNewTask add={taskMutation.mutate} />
        </>) : (<>
          {!data.length && (<><Text>Click here to create a new task</Text>
            <Line src={line} alt="curved line" /></>)}
          {!!data.length && <Spacer size={1} />}
          <Button onClick={showAddTodo}>
            <img src={addButton} alt="button" />
            <span>create task</span>
          </Button></>)}
      </TodoListWrapper>
    )}

  </Container>
}






// styed comoment
const Container = styled.div`  
  width: 100vw;
  height: 100vh;
  background: #E8EFEB;
  display: flex;
  justify-content: center;
`
const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  margin-top: 154px;
  max-height: 407px;
  height: fit-content;
  width: 347px;
  border: 1px solid #BDC7C2;
`
const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background: #CBD1CE;
  margin: 14px 0;
`
const Button = styled.button`
    border: 0;
    margin-top: auto;
    margin-bottom: 32px;
    align-self: center;
    padding: 8px 18px;
    border-radius: 6px;
    color: #DFE8E3;
    font-size: 16px;
    display: block;
    background-color: #43AF75;
    transition: cubic-bezier();
    &:hover {
        background-color: #339E64;
    }
    img {
        position: relative;
        top: 3px;
        display: inline-block;
        margin-right: 4px
    }
  `
const Text = styled.p`
  font-size: 16px;
  width: 140px;
  margin-left: 32px;
  margin-top: 24px;
`
const Line = styled.img`
  width: 100px;
  height: 70px;
  display: block;
`
export default App;
