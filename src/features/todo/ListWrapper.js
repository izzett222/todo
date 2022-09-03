import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components"
import Title from "./Title";
import TodoList from "./TodoList";
import AddNewTask from "./AddNewTask";
import addButton from "../../resources/add.svg"
import { addNewTask, updateListTitle } from "./apis/tasks";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";

const ListWrapper = ({ list }) => {
    const [addTodo, setAddTodo] = useState(false)
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { token } = useAuth()
    const showAddTodo = () => {
        setAddTodo(true)
      }
      const taskMutation = useMutation((task) => addNewTask(list.id, task, token), {
        onSuccess: () => {
          return queryClient.invalidateQueries(['lists'])
        },
        onError: (error) => {
          if (error?.response?.status === 409) {
            navigate('/')
          }
        }
      })
      const titleMutation = useMutation((data) => updateListTitle(list.id, data, token), {
        onSuccess: () => {
          return queryClient.invalidateQueries(['lists'])
        },
        onError: (error) => {
          if (error?.response?.status === 409) {
            navigate('/')
          }
        }
      })
    return <TodoListWrapper>
        <Title title={list.title || ''} handleTitle={titleMutation.mutate} isSucess={titleMutation.isSuccess} isLoading={titleMutation.isLoading} />
        <TodoList todos={list.Tasks} />
        {addTodo ? (<>
            <LineBreak />
            <AddNewTask add={taskMutation.mutate} isLoading={taskMutation.isLoading} />
        </>) : (<>
            <Button onClick={showAddTodo}>
                <img src={addButton} alt="button" /><span>create task</span>
            </Button></>)}
    </TodoListWrapper>
}


const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  height: 340px;
  width: 276px;
  border: 1px solid #BDC7C2;
  border-radius: 6px;
`
const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background: #CBD1CE;
  margin-bottom: 8px;
`
const Button = styled.button`
    border: 0;
    margin-top: auto;
    margin-bottom: 16px;
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
export default ListWrapper;
