import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./theme8.css";
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
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

const Theme8 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>8-sabaq. Klaviatura trenajori’nda shi’ni’g’i’wlar</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            A’ziz woqi’wshi’lar! Klaviatura trenajori’nda wori’nlanatug’i’n
            shi’ni’g’i’wlardan tabi’sli’ wo’tip, klaviatura menen jaqi’nnan
            tani’si’p alg’ani’n’i’z benen qutli’qlaymi’z. Sebebi, bul
            shi’ni’g’i’wlar ja’rdeminde tu’ymeshelerdegi ha’rip, san ha’m
            belgilerdin’ jaylasi’wi’n bilip aldi’n’i’z. Ha’riplerden so’zler,
            so’zlerden ga’pler, ga’plerden bolsa tekstler payda
            bolatug’i’nli’g’i’ belgili. Tekst jazi’wda so’zler arasi’nda bosli’q
            (probel) boli’wi’, abzac, shegarali’qqa a’mel yetiw kerekligi de
            sizge belgili. Klaviaturada teriletug’i’n tekst te usi’
            qag’i’ydalarg’a tiykarlang’an jag’dayda jazi’ladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>1-shi’ni’g’i’w. </b> Elektron diktant. «Блокнот» programmasi’nda
            berilgen tekstti terin’.
          </p>
        </div>
        <div className="subtitle">
          <h3>«Aqi’lli’» mektep</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            «Star Boom» (ingl. «juldi’zlar jaqti’si’») trenajor programmasi’ 2
            shi’ni’g’i’wdi’ wo’z ishine aladi’. Trenajor programmasi’n CD disk
            yamasa flesh-yadtan kompyuterdin’ tiykarg’i’ yadi’na hesh qanday
            qi’yi’nshi’li’qsi’z ko’shirip ali’w ha’m iske tu’siriw mu’mkin.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Jaqi’nda gazetadag’i’ bir maqalani’ ko’rip, qi’zi’g’i’p woqi’y
            basladi’m. Wonda keleshektegi mektepler haqqi’nda a’jayi’p pikirler
            bildirilgen yedi. <b>Robotlar</b> ha’m <b>megakompyuterler</b> bar
            bolg’an bul mekteplerde derlik tazalawshi’lar ha’m xi’zmetshiler
            bolmaydi’ yeken. Ko’she, ha’wli ha’m klass bo’lmelerin tazalawda
            <b>robot-shan’jutqi’shlar</b> xi’zmet yetedi yeken. Ha’rbir klass
            bo’lmelerinde bolsa <b>robot awdarmashi’lar, robottrenajorlar</b>{" "}
            jumi’s ali’p baradi’ yeken. Bunday robotlar qatnasi’wi’nda tu’rli
            tilde so’ylesiw, ha’tteki tildi toli’q u’yreniw mu’mkinshiligi meni
            qi’zi’qti’ri’p qaldi’. Proekttegi zamanago’y klass bo’lmelerine
            sa’ykeslep jarati’li’p ati’rg’an{" "}
            <b>
              ji’lti’r doska, matricali’ virtual baylani’s aynalari’ ha’m
              betlenetug’i’n elektron kitaplar
            </b>{" "}
            bolsa meni ja’ne de hayran qaldi’rdi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-shi’ni’g’i’w.</b>Test sorawlari’. Duri’s tabi’lg’an juwap
            varianti’n yekinshi bag’anag’a jazi’n’ ha’m payda bolg’an so’zdi
            ani’qlan’:
          </p>
        </div>
        <table className="table-8theme">
          <tr>
            <td>1</td>
            <td>
              Mag’luwmatti’ kompyuter yadi’na kirgiziw quri’lmasi’n tabi’n’.
              <br />A{")"} modem; D{")"} monitor; V{")"} printer; K{")"}{" "}
              klaviatura.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Qaysi’ tu’ymeshe so’zler arasi’nda bos wori’n qaldi’radi’?
              <br />A{")"} Caps Lock; E{")"} Shift; L{")"} Probel; N{")"} Tab.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Bas ha’riplerdi jazi’w ushi’n qanday tu’ymeshe basi’ladi’?
              <br />A{")"} Caps Lock; B{")"} Tab; L{")"} Esc; H{")"} Ctrl.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Arnawli’ funkciyalardi’ wori’nlawshi’ tu’ymesheler neshew?
              <br />A{")"} 10 ; B{")"} 8; V{")"} 12; D{")"} 16 .
            </td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Qaysi’ tu’ymeshe ja’rdeminde taza qatarg’a wo’tiw mu’mkin? <br />{" "}
              A{")"} Tab; C{")"} Esc; V{")"} Probel; I{")"} Enter
            </td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              Kursordan won’ ta’reptegi belgini wo’shiriw ushi’n qaysi’
              tu’ymeshe basi’ladi’? <br /> А{")"} Delete; C{")"} Backspace; F
              {")"}
              Tab; Z{")"} Home.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              Kursordi’ bir bet to’menge wo’tkeriw ushi’n qaysi’ tu’yme
              basi’ladi’? <br /> A{")"} Home; K{")"} PgUp; T{")"} PgDn; K{")"}{" "}
              End.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              Kursordi’ qatardi’n’ basi’na wo’tkeriw tu’ymesin belgilen’: A{")"}
              strelka shepke; L{")"} PgUp; M{")"} End; U{")"} Home.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Qanday da bir belgini joqari’ registrda jazi’w ushi’n qaysi’
              tu’ymeshe qollani’ladi’? A{")"} Caps Lock; R{")"} Shift; G{")"}{" "}
              Esc; U{")"} Probel
            </td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              Lati’n ha’ripleri qaysi’ registrda jaylasqan? A{")"} joqari’; B
              {")"}
              to’men; C{")"} worta ; D{")"} duwri’ juwap joq.
            </td>
            <td></td>
          </tr>
        </table>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>3-shi’ni’g’i’w.</b> «Блокнот» programmasi’nan paydalani’p
            «Dosti’ma xat» temasi’nda tekst jarati’n’.
          </p>
        </div>

        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            «Keleshek kompyuterleri» temasi’nda gu’rrin’ jazi’n’ ha’m woni’
            basi’p shi’g’ari’n’.
          </li>
          <li>
            «Menin’ doslari’m» temasi’nda mag’luwmat jazi’p, basi’p shi’g’ari’n’
          </li>
          <li>«Kompyuter bizin’ wo’mirimizde» temasi’nda buklet tayarlan’.</li>
          <li>
            Wo’tilgen temalar boyi’nsha krossvord yamasa basqati’rma du’zin’.
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme8;
