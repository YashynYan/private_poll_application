import React from "react";
import styled from "styled-components";
import { useAuth } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
`;

export const AuthForm = () => {
  const { signInWithGoogle} = useAuth();

  return (
    <Container>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </Container>
  );
};
