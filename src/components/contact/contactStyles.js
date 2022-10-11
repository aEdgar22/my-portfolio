import styled from "styled-components";

export const ContactStyled = styled.section`
  padding: 10rem 0 2rem 0;
  margin-bottom: 2rem;
  .contact__container {
    grid-template-columns: repeat(2, 50%);
    padding-top: 3rem;
    column-gap: 4rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 100%);
    }
  }
`;

export const ContactInfoItemContainer = styled.div`
  padding: 2rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 2rem;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.cardDataColor};

  .icon__container {
    background-color: ${({ theme }) => theme.colors.titleColor};
    font-size: 2rem;
    color: #fff;
    padding: 1.3rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
  }

  .info__container-text {
    max-width: 500px;
    font-size: 1.2rem;
    line-height: 1.3em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const ContactFormStyled = styled.form`
  border: 2px solid ${({ theme }) => theme.colors.cardDataColor};
  border-radius: 8px;
  padding: 1rem;

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 1rem;

    label {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.textColor};
    }

    .input__data {
      width: 100%;
      font-size: 1rem;
      padding: 1.2rem;
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      border: 2px solid ${({ theme }) => theme.colors.cardDataColor};
    }

    textarea {
      resize: none;
      height: auto;
    }
  }

  .button {
    height: 1.5rem;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.fontSemiBold};
    border: none;
    cursor: pointer;
  }
`;
