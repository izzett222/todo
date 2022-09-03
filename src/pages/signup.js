import styled from "styled-components";
import { useAuth } from "../auth";
import { signupApi } from "../features/todo/user/apis/auth";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";
import { useEffect } from "react";

const Signup = () => {
    const { token, setToken } = useAuth()
    const navigate = useNavigate()
    const { mutate, error, isLoading, isError } = useMutation(signupApi, {
        onSuccess: (data) => {
            setToken(data.token)
            navigate("/dashboard")
        },
        onError: (error) => {
            setToken(null)
        }
    })
    useEffect(() => {
       if (token) {
        return navigate('/dashboard')
    } 
    }, [navigate, token])
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username: e.target[0].value, password: e.target[1].value}
        mutate(user)

    }
    const emailTakenMessage = error?.response?.data?.message.includes("already exist") ? "email already taken" : null
    
    return <Container>
        <SignupWrapper>
            <h1>Todo</h1>
            <p className="title-message">Join us and keep all your tasks and todo lists in one place</p>
            <form onSubmit={handleSubmit}>
                <Label>Username</Label>
                <Input required placeholder="Enter your Username" />
                <Label>Password</Label>
                <Input required placeholder="Enter your Password" type="password" />
                {isError && <ErrorWrapper>{emailTakenMessage}</ErrorWrapper>}
                <Button disabled={isLoading}>
                {isLoading && <Loader className="loading" />}
                {isLoading ? 'joining' : 'join'}
                </Button>
                <Link to='/' className="connect">already joined. sign in</Link>
            </form>
        </SignupWrapper>
    </Container>
}

const Container = styled.div`
    min-height: 100%;
    height: 100%;
    background: #E8EFEB;
    position: relative;
    .loading {
        background: white;
        margin-right: 6px;
        position: relative;
        top: 4px;
    }
    .connect {
        display: inline-block;
        margin-top: 6px;
    }
`
const SignupWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #474D4A;
        margin-bottom: 8px;
    }
    .title-message {
        max-width: 285px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #474D4A;
        margin-top: 0;
        margin-bottom: 16px;
    }

`
const Input = styled.input`
    display: block;
    width: 335px;
    height: 56px;
    background: #F3F7F5;
    border: 2px solid #D2D9D5;
    border-radius: 6px;
    margin: 0;
    margin-bottom: 8px;
    padding-left: 16px;
    &::placeholder {
        padding-right: 16px; 
    }
`
const Label = styled.label`
    font-weight: 400;
    font-size: 18px;
    color: #474D4A;
    margin: 0;
    margin-bottom: 4px;

`
const Button = styled.button`
    border: 0;
    background-color: #339E64;
    color: #D6F5E4;
    display: block;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 16px;

`
const ErrorWrapper = styled.p`
    background: #F0CED4;
    border-radius: 6px;
    color: #AF344A;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    width: 100%;
    margin: 0;
    max-width: initial;
    `
export default Signup;