import styled from 'vue3-styled-components'

export const Input = styled.input`
    background-color: #0f4071;
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 15px 15px;
    margin-bottom: 15px;
    color: #ccc;
    font-weight: 600;
    outline: none;
    font-size: 18px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);

    &::placeholder {
        color: #ccc;
        font-weight: 500;
        font-size: 13px;
    }
}
`

export const Select = styled.select`
    background-color: #0f4071;
    color: #ccc;
    display: block;
    width: 107%;
    height: 51px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

export const Button = styled.button`
    display: inline-block;
    padding: 10px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #ccc ;
    background-color:#037fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0 9px #0f4071;
    font-weight: 600;
    margin-top: 20px;  

    &:hover {
        background-color:#037fff;
    }

    &:active {
        background-color:#037fff;
        box-shadow: 0 5px #0f4071;
        transform: translateY(4px);
    }
`
export const ErrorMessage = styled.div`
    color: rgb(199, 15, 15);
    text-align: left;
    padding-bottom: 5px;
`

export const Form = styled.form`
    background-color: #141e30;
    padding: 20px 50px 40px 20px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

export const FormTitle = styled.h3`
    font-size: 30px;
`