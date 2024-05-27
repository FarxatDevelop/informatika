import React from "react";
import Class from "./Class";
import "./classes.css";

const Classes = () => {
  return (
    <div className="classes">
      <Class theme="Kirisiw" tasks="0" numberOfTheme="0" />
      <Class
        theme="Xawipsizlik texnikasi qaǵiydalari ham sanitariya-gigena talablari"
        tasks="5"
        numberOfTheme="1"
      />
      <Class
        theme="Kompyuter. Kompyuterdiń tiykarǵi qurilmalari ham olardiń waziypalari"
        tasks="7"
        numberOfTheme="2"
      />
      <Class
        theme="Kompyuterdi basqariw programmalari"
        tasks="7"
        numberOfTheme="3"
      />
      <Class theme="Fayl ham papka túsinigi" tasks="5" numberOfTheme="4" />
      <Class theme="Ámeliy shınıǵıw" tasks="4" numberOfTheme="5" />
      <Class
        theme="Klaviatura menen tanısıw"
        tasks="6"
        numberOfTheme="6"
      />{" "}
      <Class
        theme="Klaviatura trenajorida shınıǵıwlar"
        tasks="5"
        numberOfTheme="7"
      />
      <Class
        theme="Klaviatura trenajorida shınıǵıwlar"
        tasks="4"
        numberOfTheme="8"
      />
      <Class
        theme="Kompyuterdegi kalkulatordan paydalanıw"
        tasks="6"
        numberOfTheme="9"
      />
      <Class theme="Paint programması haqqında" tasks="6" numberOfTheme="10" />
    </div>
  );
};

export default Classes;
