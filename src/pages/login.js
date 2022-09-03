import styled from "styled-components";
import { useAuth } from "../auth";
import { signinApi } from "../features/todo/user/apis/auth";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";
import { useEffect } from "react";

const Login = () => {
    const { token, setToken } = useAuth()
    const navigate = useNavigate()
    
    const { mutate, error, isLoading, isError } = useMutation(signinApi, {
        onSuccess: (data) => {
            setToken(data.token)
            navigate("/dashboard")
        },
        onError: (error) => {
            setToken(null)
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username: e.target[0].value, password: e.target[1].value}
        mutate(user)

    }
    useEffect(() => {
        if (token) {
         return navigate('/dashboard')
     } 
     }, [navigate, token])
    return <Container>
        <LoginWrapper>
            <h1>Todo</h1>
            <p>Sign in to your account</p>
            <form onSubmit={handleSubmit}>
                <Label>Username</Label>
                <Input placeholder="Enter your Username" />
                <Label>Password</Label>
                <Input placeholder="Enter your Password" type="password" />
                {isError && <ErrorWrapper>{error?.response?.data?.message}</ErrorWrapper>}
                <Button disabled={isLoading}>
                {isLoading && <Loader className="loading" />}
                {isLoading ? 'loading' : 'Signin'}
                </Button>
                <Link className="connect" to="/signup">not yet joined. Sign up</Link>
            </form>
        </LoginWrapper>
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
const LoginWrapper = styled.div`
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
        font-size: 24px;
        color: #474D4A;
    }
    p {
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
    min-width: 100%;
    `
export default Login;