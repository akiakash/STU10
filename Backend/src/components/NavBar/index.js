import React from "react";
import * as S from "./styles";
import Calendar from "../../assets/icons/calendar-nav.png";
import Message from "../../assets/icons/message.png";
import Time from "../../assets/icons/time.png";
import User from "../../assets/icons/user.png";
import Shape from "../../assets/icons/shape.png";
import Arrow from "../../assets/icons/arrow-right.png";
import ArrowDown from "../../assets/icons/arrow-down-nav.png";

export default function NavBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Profile>
          <S.ProfileImg></S.ProfileImg>
          <S.ProfileInfo></S.ProfileInfo>
        </S.Profile>
        <S.List>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={User} alt="user" />
              Admin
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>

          <S.ListItem>
            <S.Item href="/teammanagement">
              <S.ItemIcon src={Time} alt="time" />
              Team Manegement
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/albummanagement">
              <S.ItemIcon src={Time} alt="time" />
              Album Manegement
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
