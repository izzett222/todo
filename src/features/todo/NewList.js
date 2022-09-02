import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newlist from "../../resources/newlist.svg";
import { createNewList } from "./apis/tasks";
import { Loader } from "../../components/loader";
import { useAuth } from "../../auth";
const NewList = () => {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(() => createNewList(token), {
    onSuccess: () => {
      return queryClient.invalidateQueries(['lists'])
    }
  })
  return <TodoListWrapper disabled={isLoading} onClick={() => mutate()}>
    {isLoading ? <Loader /> : (<>
      <img src={newlist} alt="new list" />
      <div>Create new todo list</div>
    </>)}

  </TodoListWrapper>
}

const TodoListWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F3F3F3;
  height: 407px;
  width: 347px;
  border: 1px solid #BDC7C2;
  div {
    font-size: 22px;
    color: #47514C;
    margin-top: 12px;
  }
  &:disabled {
    /* border: 1px solid rgba(189, 199, 194, 0.3); */
    box-shadow: inset 3px 4px 4px rgba(217, 236, 226, 0.3);
  }
  &:disabled:hover {
    box-shadow: inset 3px 4px 4px rgba(217, 236, 226, 0.3);
    cursor: initial;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 5px 6px 6px #D9ECE2;
  }
`

export default NewList