import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components"
import Title from "./Title";
import TodoList from "./TodoList";
import AddNewTask from "./AddNewTask";
import addButton from "../../resources/add.svg"
import line from "../../resources/line.svg"
import Spacer from "../../components/Spacer";
import { addNewTask, updateListTitle } from "./apis/tasks";
import { useAuth } from "../../auth";

const ListWrapper = ({ list }) => {
    const [addTodo, setAddTodo] = useState(false)
    const queryClient = useQueryClient()
    const { token } = useAuth()
    console.log('list wrapper =========')
    console.log(token, "======= add new task =======")
    const showAddTodo = () => {
        setAddTodo(true)
      }
      const taskMutation = useMutation((task) => addNewTask(list.id, task, token), {
        onSuccess: () => {
          return queryClient.invalidateQueries(['lists'])
        }
      })
      const titleMutation = useMutation((data) => updateListTitle(list.id, data, token), {
        onSuccess: () => {
          return queryClient.invalidateQueries(['lists'])
        }
      })
    return <TodoListWrapper>
        <Title title={list.title || ''} handleTitle={titleMutation.mutate} isSucess={titleMutation.isSuccess} isLoading={titleMutation.isLoading} />
        <TodoList todos={list.Tasks} />
        {addTodo ? (<>
            <LineBreak />
            <AddNewTask add={taskMutation.mutate} isLoading={taskMutation.isLoading} />
        </>) : (<>
            {!list.Tasks.length && (<><Text>Click here to create a new task</Text>
                <Line src={line} alt="curved line" /></>)}
            {!!list.Tasks.length && <Spacer size={1} />}
            <Button onClick={showAddTodo}>
                <img src={addButton} alt="button" /><span>create task</span>
            </Button></>)}
    </TodoListWrapper>
}


const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  height: 407px;
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
export default ListWrapper;
