/*
 * @Author: vivien
 * @Date: 2022-04-05 20:49:47
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-15 12:35:18
 */
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "screens/context/auth-context";
import React from "react";
import styled from "@emotion/styled";
import { Row } from "components/lib";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}></button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
