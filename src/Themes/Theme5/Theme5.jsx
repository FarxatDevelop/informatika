import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./theme5.css";
import FullProgImg from "../../assets/full-prog.jpg";
import YearImg from "../../assets/year.jpg";
import KatalogImg from "../../assets/katalog.jpg";
import DanishpanlarImg from "../../assets/danishpanlar.jpg";
import "./theme5.css";
const Theme5 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>5-sabaq. A’meliy shi’ni’g’i’w</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Aldi’ng’i’ sabaqlarda sizler klaviaturani’n’ tiykarg’i’ wazi’ypasi’,
            fayl ha’m papka tu’sinigi, Windows jag’dayi’nda wolar menen
            wori’nlaw mu’mkin bolg’an a’meller haqqi’nda tani’si’p aldi’n’i’z.
            Teoriyali’q bilimlerdi bekkemlew maqsetinde to’mende berilgen
            shi’ni’g’i’wlardi’ wori’nlap, kompyuterde wolar menen islew
            ko’nlikpesin payda yetin’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayl payda yetiwdin’ yen’ a’piwayi’ usi’llari’nan biri —{" "}
            <b>«Блокнот»</b>
            programmasi’nda tekst jarati’w ha’m woni’ kompyuter yadi’nda saqlap
            qali’w boli’p yesaplanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>1-shi’ni’g’i’w.</b> Windows jumi’s stoli’nda to’mendegi
            ko’rsetpeler tiykari’nda «Блокнот» programmasi’n iske tu’sirin’ ha’m
            berilgen tekstti terin’.
          </p>
        </div>
        <div className="etaplar-imgs">
          <div className="etap-img">
            <img
              src="https://cdni.comss.net/logo/Windows_11_logo.png"
              width={35}
              alt=""
            />
          </div>
          <div className="etap-img standart">
            <img src={FullProgImg} width={150} alt="" />
          </div>
          <div className="etap-img file">
            <img
              src="https://s1.iconbird.com/ico/2013/10/464/w512h5121380984756folder.png"
              width={40}
              alt=""
            />
            <p>Стандартные</p>
          </div>
          <div className="etap-img file">
            <img
              src="https://www.freeiconspng.com/thumbs/notepad-icon/notepad-icon-7.png"
              width={40}
              alt=""
            />
            <p>Блокнот</p>
          </div>
        </div>
        <ol type="a">
          <li>«O’zbekistan – g’a’rezsiz watani’m menin’!»</li>
          <li>«Ulli’ ha’m muqaddessen’, Watan!»</li>
          <li>«Yel-jurtti’n’ sadi’q perzenti bol!»</li>
        </ol>
        <div className="text">
          <span className="provel"></span>
          <p>
            Terilgen tekst kompyuter yadi’nda saqlani’wi’ ushi’n{" "}
            <b>«Блокнот»</b>
            programmasi’ni’n’ menyu panelinen «Файл» bo’limi tan’lanadi’ ha’m
            <b> «Сохранить» (Saqlaw)</b> ko’rsetpesi wori’nlanadi’. Ashi’lgan
            aynani’n’ <b>«Имя файла»</b> (Fayldi’n’ ati’) qatari’nda{" "}
            <b>«Watan.txt»</b>
            atamasi’ beriledi ha’m «Ok» basi’ladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-shi’ni’g’i’w.</b> Jumi’s stoli’nda «JI’L» papkasi’n payda
            yetin’ ha’m woni’n’ ishinde sxema boyi’nsha papkalar payda yetin’
          </p>
        </div>
        <div className="img-desktop">
          <img
            src={YearImg}
            className="yaer-img"
            alt=""
            width={360}
            height={250}
          />
        </div>
        <div className="subtitle">
          <h3>Fayl ha’m papkag’a qayta atama beriw</h3>
        </div>

        <div className="text">
          <span className="provel"></span>
          <p>
            <b>3-shi’ni’g’i’w.</b> To’mendegi a’mellerdi ori’nlan’:
          </p>
        </div>
        <ol>
          <li>
            <b>«Ji’l» </b>papkasi’na <b>«Pa’nler»</b> papkasi’ dep qayta atama
            berin’.
          </li>
          <li>
            <b>Ba’ha’r, Jaz, Gu’z, Qi’s</b> papkalari’na sa’ykes tu’rde{" "}
            <b>I sherek, II sherek, III sherek, IV sherek</b> dep qayta atama
            berin’.
          </li>
        </ol>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>4-shi’ni’g’i’w.</b> To’mendegi a’meller izbe-izligin wori’nlan’
          </p>
        </div>
        <ol type="a">
          <li>Jumi’s stoli’nda «Katalog» papkasi’n payda yetin’;</li>
          <li>
            «Katolog» papkasi’nda ja’ne «Hu’jjetler», «Muzi’ka» ha’m «Su’wret»
            dep atalg’an papka payda yetin’
          </li>
          <div className="img-desktop">
            <img
              src={KatalogImg}
              className="yaer-img"
              alt=""
              width={360}
              height={200}
            />
          </div>
          <li>
            Payda bolg’an papkalarg’a sa’ykes tu’rde to’mendegishe qayta atama
            berin’
          </li>
          <div className="img-desktop">
            <img
              src={DanishpanlarImg}
              className="yaer-img"
              alt=""
              width={360}
              height={200}
            />
          </div>
        </ol>

        <div className="text">
          <span className="provel"></span>
          <p>
            Papkalarg’a qayta atama beriw si’yaqli’ fayllarg’a da qayta atama
            beriw mu’mkin
          </p>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            Papka payda yetiw ha’m papkani’ ashi’w a’mellerinin’ parqi’n
            tu’sindirip berin’
          </li>
          <li>Birdey atamadag’i’ fayl yamasa papkalar jarati’w mu’mkin be?</li>
          <li>Jan’a fayllar qalay jarati’ladi’?</li>
          <li>Mag’luwmatlardi’ ta’rtiplestiriw degende neni tu’sinesiz?</li>
          <li>
            Kompyuterde jan’a jazi’lg’an mag’luwmatlar avtomatikali’q tu’rde
            qaysi’ jerde saqlani’p qaladi’?
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme5;
