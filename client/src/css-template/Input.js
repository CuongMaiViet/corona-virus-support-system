import styled from 'styled-components'

export const Container = styled.div`
    display: flex !important;
    flex-flow: row wrap;
    width: 100%;
    justify-content: flex-start;

    >*{
        margin-left: 1rem;
    }

    label{
    font-size: 0.8rem;
    color: #002341;
    }

    input, select{
    color: #002341;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    box-sizing: border-box;
    font-size: 1.2rem;
    padding: 0.2rem 0.7rem 0.7rem 0.7rem;
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid #afcbe4;
    }

    .uneditable{
        color: #869eb4;
    }

    .editable:focus, .editable:hover{
        color: #00A473;
        border-bottom: 3px solid #00A473;
    }
    select{
        padding: 0.5rem;
        border: 3px solid #afcbe4;
    }

    select:focus, select:hover{
        color: #00A473;
        border: 3px solid #00A473;

   
}
`;

export const Field = styled.div`
    flex-basis: 45%;
`;

export const FieldBig = styled.div`
    flex-basis: 100%;
`

export const CheckboxField = styled.div`
    flex-basis: 33%;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;

    input{
        border: 1.3px solid #afcbe4;
        background-color: #ffffff ;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance:none;
        width: 0.3rem;
        margin-left: 1rem;
        transform: scale(2);
        -ms-transform: scale(2);
        -webkit-transform: scale(2);
        padding: 0.3rem;
        line-height: 0;
        -webkit-transition: background-color 0.2s ease-out;
        -moz-transition: background-color 0.2s ease-out;
         -o-transition: background-color 0.2s ease-out;
         transition: background-color 0.2s ease-out;
    }

    
    h2{
        display: inline-block !important;
        font-size: 1.2rem;
        width: 80%;
    }

    input:hover, input:checked{
        cursor: pointer;
        border: 2px solid #00A473;
    }

    input:checked{
        background-color: #00A473;
    }
`

export const TextAreaField = styled.div`
    flex-basis: 100%;
    box-sizing: border-box;

    textarea{
        width: 100%;
        color: #002341;
        font-size: 1.2rem;
        line-height: 1.3rem;
        box-sizing: border-box;
        padding: 0.7rem;
        border: 3px solid #afcbe4;
    }
    
    textarea:focus, textarea:hover{
        border: 3px solid #00A473;
        outline: none;
    }

    h2{
        font-size: 1.2rem;
    }

`