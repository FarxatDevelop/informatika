import React from "react";
import FullTheme from "./FullTheme";
import "./full-themes.css";

const FullThemes = () => {
  return (
    <div className="classes">
      <FullTheme theme="Kirisiw" tasks="0" numberOfTheme="0" />
      <FullTheme
        theme="Xawipsizlik texnikasi qaǵiydalari ham sanitariya-gigena talablari"
        tasks="5"
        numberOfTheme="1"
      />
      <FullTheme
        theme="Kompyuter. Kompyuterdiń tiykarǵi qurilmalari ham olardiń waziypalari"
        tasks="7"
        numberOfTheme="2"
      />
      <FullTheme
        theme="Kompyuterdi basqariw programmalari"
        tasks="7"
        numberOfTheme="3"
      />
      <FullTheme theme="Fayl ham papka túsinigi" tasks="5" numberOfTheme="4" />
      <FullTheme theme="Ámeliy shınıǵıw" tasks="4" numberOfTheme="5" />
      <FullTheme
        theme="Klaviatura menen tanısıw"
        tasks="6"
        numberOfTheme="6"
      />{" "}
      <FullTheme
        theme="Klaviatura trenajorida shınıǵıwlar"
        tasks="5"
        numberOfTheme="7"
      />
      <FullTheme
        theme="Klaviatura trenajorida shınıǵıwlar"
        tasks="4"
        numberOfTheme="8"
      />
      <FullTheme
        theme="Kompyuterdegi kalkulatordan paydalanıw"
        tasks="6"
        numberOfTheme="9"
      />
      <FullTheme
        theme="Paint programması haqqında"
        tasks="6"
        numberOfTheme="10"
      />
      <FullTheme
        theme="Paint u’skeneler paneli
ha’m wonnan paydalani’w"
        tasks="7"
        numberOfTheme="11"
      />
    </div>
  );
};
export default FullThemes;
