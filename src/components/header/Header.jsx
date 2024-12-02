import "./header.css";
import { HearderTop } from "./HearderTop";
import { HeaderMiddle } from "./HeaderMiddle";
import { Navbar } from "./Navbar";
import { useState } from "react";
export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <HearderTop setToggle={setToggle} toggle={toggle} />
      <HeaderMiddle />
      <Navbar toggle={ toggle} setToggle={setToggle} />
    </header>
  );
};
