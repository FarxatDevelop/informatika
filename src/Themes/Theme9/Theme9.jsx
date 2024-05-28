import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./theme9.css";
import FullProgImg from "../../assets/full-prog.jpg";
import YearImg from "../../assets/year.jpg";
import KatalogImg from "../../assets/katalog.jpg";
import DanishpanlarImg from "../../assets/danishpanlar.jpg";
import KeyboardImg from "../../assets/keyboard.jpg";
import Eng_ru from "../../assets/ru-eng.jpg";
import A_FImg from "../../assets/a-f.jpg";
import FnKeysImg from "../../assets/fn-keys.jpg";
import StartBoomImg from "../../assets/star-boom.jpg";
import StartBoomImg2 from "../../assets/star-boom-2.jpg";
import StartBoomFullImg from "../../assets/star-boom-full.jpg";
import StartBoomImgCongrut from "../../assets/star-boom-congrut.jpg";
import CalcImg from "../../assets/calc.jpg";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

const Theme9 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>9-sabaq. Kompyuterdegi kalkulyatordan paydalani’w</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Kompyuterler woylap tabi’lmastan aldi’n insanlar yesap-sanaq
            jumi’slari’n wori’nlawda abak (shotlar)tan, matematikali’q
            formuladan paydalang’an. Keyin ala yesaplaw texnikasi’ ha’m
            elektronikani’n’ rawajlani’wi’ na’tiyjesinde «kalkulyator» dep
            atalg’an yesaplaw mashinkalari’ jarati’ldi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"> </span>
          <p>
            Windows operacion sistemasi’ni’n’ standart programmalari’na kiriwshi
            <b>«Kalkulyator»</b> <i>(ingl. «calculator»)</i> programmasi’
            a’piwayi’ kalkulyatordi’n’ vizual ko’rinisi nusqasi’nan
            paydalani’wg’a imkan beredi. Wonda a’piwayi’ kalkulyatordag’i’
            si’yaqli’ tiykarg’i’ arifmetikali’q a’meller ha’m injenerlik
            yesap-sanaq wazi’ypalari’ ori’nlanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"> </span>
          <p>
            Kalkulyator programmasi’n to’mendegi izbe-izlik tiykari’nda iske
            tu’siriw mu’mkin:
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
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/calculator-design-template-6fc886285cbddbf45937f0b37ad0e956_screen.jpg?ts=1626617378"
              width={40}
              alt=""
            />
            <p>Блокнот</p>
          </div>
        </div>
        <div className="title-top themes-9">
          <span>
            <img src={CalcImg} width={150} alt="" />
          </span>
          <div className="text">
            <span className="provel"></span>
            <p>
              Ekranda kalkulyator programmasi’ni’n’ <b>a’piwayi’</b> ko’rinisi
              ko’rinedi. <b>«Injenerlik»</b> ko’riniske wo’tiw ushi’n{" "}
              <b>«Вид» «Инженерный» </b>tanlanadi. A’piwayi’ ko’riniske qayti’w
              ushi’n <b>«Вид» «Обычный»</b> ko’rsetpesi tan’lanadi’.
              <b>«Kalkulyator»</b> programmasi’ni’n’ aynasi’ to’rt bo’limnen
              quralg’an
            </p>
          </div>
        </div>
        <ol type="1">
          <li>Sanlardi’ ko’rsetiwshi ekran</li>
          <li>Tu’ymesheler maydani’</li>
          <li>Baslama qatari’</li>
          <li>Menyuler qatari’</li>
        </ol>

        <div className="subtitle">
          <h3>Menyu ja’rdeminde a’mellerdi wori’nlaw</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Правка</b> (du’zetiw) bo’limindegi ba’ndlerdi ashi’w ushi’n
            «mi’shka»ni’n’ shep tu’ymesi bir ma’rte basi’ladi’. Du’zetiw
            bo’liminde to’mendegi a’mellerdi wori’nlaw mu’mkin:
          </p>
        </div>
        <ol type="1">
          <li>Kопировать (Nusqa ali’w) yamasa (Ctrl+C);</li>
          <li>Вставить (Jaylasti’ri’w) yamasa (Ctrl+V);</li>
          <li>Вид (Ko’rinis) bo’liminde joqari’da ko’rsetilgenindey;</li>
        </ol>
        <p>
          <b>
            <i>A’piwayi’</i>
          </b>{" "}
          ha’m{" "}
          <b>
            <i>injenerlik</i>
          </b>{" "}
          ko’rinislerine wo’tiwdi a’melge asi’ri’w mu’mkin;
        </p>
        <br />
        <p>
          <b>
            <i>Sandi’ razryadlar boyi’nsha toparg’a bo’liw</i>
          </b>{" "}
          ba’ndinde sandi’ 600. 567. 081 si’yaqli’ toparlarg’a aji’rati’wdi’
          a’melge asi’ri’w mu’mkin.
        </p>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Справка</b> (Mag’luwmat) bo’liminde kalkulyator programmasi’
            haqqi’nda mag’luwmat ali’w imkaniyati’ bar
          </p>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              Yeskertiw! «Kalkulyator» programmasi’nda sanlar ha’m a’mel
              tu’ymesheleri «mi’shka» ko’rsetkishi ja’rdeminde tan’lanadi’.
            </b>
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>1-shi’ni’g’i’w.</b> Kalkulyator programmasi’n iske tu’sirip,
            a’meller izbeizligin wori’nlan’ ha’m na’tiyjeni jazi’p ali’n’:
          </p>
        </div>
        <ol type="1">
          <li>123+670:8</li>
          <li>34+55+100</li>
          <li>1229:(785+444)</li>
          <li>11+11–21</li>
          <li>67–44:22</li>
          <li>81:3:27</li>
          <li>120021–2033</li>
          <li>400:4+200</li>
        </ol>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-shi’ni’g’i’w.</b> Kalkulyator yadi’ menen islewge tiyisli
            shi’ni’g’i’wlardi’ wori’nlan’ ha’m na’tiyjeni jazi’p ali’n’:
          </p>
        </div>
        <ol type="1">
          <li>(43+43)+(35:5)</li>
          <li>(21+11)+(3*2)</li>
          <li>(5:5)+(67-7)</li>
          <li>45+(9+3–7)</li>
        </ol>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>3-shi’ni’g’i’w.</b> Du’kanda ha’m diyqan bazari’nda sati’p
            ali’ng’an uluwma qa’rejetlerdi yesaplan’: ali’n’:
          </p>
        </div>
        <table className="table-8theme">
          <tr>
            <td>№</td>
            <th>Du’kanda:</th>
            <td>№</td>
            <th>Diyqan bazari’nda:</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Su’t – 2000 sum</td>
            <td>1</td>
            <td>Alma – 4000 sum</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tvorog – 3300 sum</td>
            <td>2</td>
            <td>Almurt – 5000 sum</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Yogurt – 4500 sum</td>
            <td>3</td>
            <td>Ju’zim – 5000 sum</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Shokolad – 4000 sum</td>
            <td>4</td>
            <td>Shabdali’ – 4000 sum</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nan – 1000 sum</td>
            <td>5</td>
            <td>Xurma – 3000 sum</td>
          </tr>
        </table>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>«Kalkulyator»di’n’ wazi’ypasi’n tu’sindirip berin’.</li>
          <li>«Kalkulyator» programmasi’ qalay iske tu’siriledi?</li>
          <li>
            «Kalkulyator» programmasi’ interfeysi qanday bo’limlerden turadi’?
          </li>
          <li>«Kalkulyator» programmasi’ni’n’ a’hmiyeti qanday?</li>
          <li>
            «Kalkulyator» programmasi’nda qanday matematikali’q a’mellerdi
            wori’nlaw mu’mkin?
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme9;
