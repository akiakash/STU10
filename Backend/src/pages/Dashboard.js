import React from "react";
import Efficiency from "../components/Efficiency";
import NavBar from "../components/NavBar";
import Tab from "../components/Tab";
import TopBar from "../components/TopBar";
import * as S from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TeamManagement from "components/Managements/TeamManagement";
import ImagesManagement from "components/Managements/ImagesManagement";

export default function Dashboard() {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
          {/* <Tab /> */}
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Efficiency />} />

            <Route path="/teammanagement" element={<TeamManagement />} />
            <Route path="/albummanagement" element={<ImagesManagement />} />
          </Routes>
        </BrowserRouter>
      </S.Main>
    </S.Container>
  );
}
