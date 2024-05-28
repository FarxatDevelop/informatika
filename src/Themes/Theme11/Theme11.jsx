import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FullProgImg from "../../assets/full-prog.jpg";
import PaintImg from "../../assets/paint-menu.jpg";
import ColorPanel from "../../assets/color-panel.jpg";
import { FaWindows } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";
import PaintBlock from "../../assets/paint-block.jpg";
import ToolPanels from "../../assets/tool-panels.jpg";
import StarIcon from "../../assets/start-tool.jpg";
import StarIcon2 from "../../assets/square.jpg";
import StarIcon3 from "../../assets/oshirgish.jpg";
import StarIcon4 from "../../assets/spread.jpg";
import StarIcon5 from "../../assets/pan.jpg";
import StarIcon6 from "../../assets/search.jpg";
import Availability1 from "../../assets/availability1.jpg";
import Availability2 from "../../assets/availability2.jpg";
import Availability3 from "../../assets/availability3.jpg";
import Availability4 from "../../assets/availability4.jpg";
import Paxta1 from "../../assets/paxta1.jpg";
import Paxta2 from "../../assets/paxta2.jpg";
import Paxta3 from "../../assets/paxta3.jpg";
import Paxta4 from "../../assets/paxta4.jpg";
import Qayiq1 from "../../assets/qayiq1.jpg";
import Qayiq2 from "../../assets/qayiq2.jpg";
import "./theme11.css";

const Theme11 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>11-sabaq. Paint u’skeneler paneli ha’m wonnan paydalani’w</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Paint programmasi’ aynasi’nda u’skeneler paneli bar ekenligi
            aldi’ng’i’ sabaqlardan sizge belgili.{" "}
            <b>
              <i>U’skeneler panelinde</i>
            </b>{" "}
            18 kishi piktogrammalar jaylasqan boli’p, ha’rbirinin’wo’z
            wazi’ypasi’ bar. Wolardan paydalani’wdan aldi’n ha’rbir u’skene
            menen wo’z aldi’na tani’si’p o’temiz.
          </p>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              U’skeneler panelindegi kerekli u’skeneden paydalani’w ushi’n
              «mi’shka» ko’rsetkishi tan’lang’an u’skene u’stine ali’p
              bari’ladi’ ha’m woni’n’ shep tu’ymesi basi’ladi’.
            </b>
          </p>
        </div>
        <div className="title-top">
          <span>
            <img src={ToolPanels} width={90} alt="" height={250} />
          </span>
          <div className="text">
            <span className="provel"></span>
            <p>
              <ol style={{ marginLeft: "15px" }}>
                <li>
                  <img src={StarIcon} width={20} height={20} alt="" />– Paint
                  programmasi’ni’n’ jumi’s maydani’nda si’zi’lg’an su’wretti
                  qa’legen formada belgileydi;
                </li>
                <li>
                  <img src={StarIcon2} width={20} height={20} alt="" />– Paint
                  programmasi’ni’n’ jumi’s maydani’nda si’zi’lg’an su’wretti
                  tuwri’mu’yeshlik formasi’nda belgileydi;
                </li>
                <li>
                  <img src={StarIcon3} width={20} height={20} alt="" />
                  –wo’shirgish (lastik) – «mi’shka» bag’i’ti’ boyi’nsha
                  si’zi’qlardi’ yamasa boyalg’an oblastti’ wo’shiredi;
                </li>
                <li>
                  <img src={StarIcon4} width={20} height={20} alt="" />
                  –tuyi’q oblastti’ yamasa jumi’s maydani’n boyaydi’;
                </li>
                <li>
                  <img src={StarIcon5} width={20} height={20} alt="" />
                  –su’wrettin’ qa’legen oblasti’ndag’i’ ren’di ani’qlaydi’ ha’m
                  usi’ ren’di politra panelinde ko’rsetip turadi’;
                </li>
                <li>
                  {" "}
                  <img src={StarIcon6} width={20} height={20} alt="" />
                  –su’wretti yamasa belgilengen oblastti’ u’lkeytedi.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="subtitle">
          <h3>U’skeneler panelinin’ qosi’msha imkaniyatlari’:</h3>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img src={Availability1} alt="" />
            <h4 className="operation-sistem-name">
              O’shirgishtin’ qali’n’li’g’i’
            </h4>
          </div>
          <div className="operation-sistem">
            <img src={Availability2} alt="" />
            <h4>Si’zi’qti’n’ qali’n’li’g’i’</h4>
          </div>
          <div className="operation-sistem">
            <img src={Availability3} alt="" />
            <h4>Mayqa’lemnin’ qali’n’li’g’i’</h4>
          </div>
          <div className="operation-sistem">
            <img src={Availability4} alt="" />
            <h4>To’rtmu’yeshliktin’ qali’n’li’g’i’</h4>
          </div>
        </div>
        <div className="subtitle">
          <h3>Qa’lem ha’m mayqa’lem ja’rdeminde ko’rinis si’zi’w</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Grafikali’q redaktorlardag’i’ qa’lem ha’m mayqa’lem u’skenelerinin’
            a’piwayi’ qa’lem ha’m mayqa’lemnen parqi’ sonda, wolar barmaqlar
            ha’reketi menen yemes, al «mi’shka» ha’reketi menen si’zi’ladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>1-shi’ni’g’i’w.</b> Paxta shanag’i’. U’skeneler panelinen –
            qa’lem yamasa – mayqa’lem tan’lanadi’. Su’wret jumi’s maydani’nda
            «mi’shka»ni’n’ shep tu’ymesin basi’p turg’an halda qol u’zbesten
            si’zi’ladi’ (1-su’wret). Bul paxtani’n’ shanaq bo’legi boli’p
            yesaplanadi’. Son’ paxtani’n’ wo’zi de qoldi’ u’zbesten si’zi’ladi’
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Paxtani’n’ shanag’i’ qon’i’r ren’de bolg’ani’ ushi’n ol usi’ ren’ge
            boyaladi’. Boyawdi’ a’melge asi’ri’w ushi’n u’skeneler panelinen
            u’skenesi tan’lanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            - Заливка (Boyaw) u’skenesi tan’lang’annan son’, ren’ler panelinen
            qon’i’r ren’i tan’lanadi’ ha’m «mi’shka» ko’rsetkishi shanaq u’stine
            wo’tkerilip, shep tu’yme basi’ladi’
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Usi’ usi’l menen paxta talshi’qlari’ da ashi’q hawaren’ tu’ske
            boyaladi’
          </p>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              Si’zi’lg’an figurani’n’ ishki oblasti’n boyaw ushi’n oblast
              shegarasi’ pu’tkilley tuyi’q boli’wi’ sha’rt.
            </b>
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img src={Paxta1} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Paxta2} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Paxta3} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Paxta4} alt="" />
          </div>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-shi’ni’g’i’w.</b> Ten’iz ha’m qayi’qti’n’ su’wretin sali’w
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            U’skeneler panelinen – qa’lem tan’lanadi’. «Mi’shka» ko’rsetkishi
            jumi’s oblasti’ni’n’ shep ta’repindegi shegara bo’limine ali’p
            bari’ladi’. «Mi’shka»ni’n’ shep tu’ymesi basi’lg’an halda won’
            ta’repke qaray tolqi’nlar si’zi’ladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Ten’iz quslari’ – mayqa’lem u’skenesi ja’rdeminde si’zi’ladi’.
            Woni’n’ qali’n’li’g’i’n belgilewde bolsa, qosi’msha u’skeneler
            panelinen paydalani’ladi’. Qayi’q ta mayqa’lemnin’ usi’ tu’rinen
            paydalani’p si’zi’ladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            U’skenesi menen eskiz si’zi’p bolg’annan son’, u’skenesi ja’rdeminde
            ishki oblastlar boyaladi’
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img src={Qayiq1} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Qayiq2} alt="" />
          </div>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            Paint programmasi’ u’skeneler panelinde qanday u’skeneler jaylasqan?
          </li>
          <li>
            <img src={StarIcon} width={20} height={20} alt="" /> ha’m{" "}
            <img src={StarIcon2} width={20} height={20} alt="" />
            u’skenelerinin’ parqi’n ha’m wazi’ypasi’n tu’sindirip berin’.
          </li>
          <li>
            <img src={StarIcon3} width={20} height={20} alt="" /> – wo’shirgish
            ha’m <img src={StarIcon4} width={20} height={20} alt="" />– boyaw
            u’skenelerinin’ wazi’ypasi’n ayti’p berin’.
          </li>
          <li>
            <img src={StarIcon4} width={20} height={20} alt="" /> ha’m{" "}
            <img src={StarIcon5} width={20} height={20} alt="" /> u’skeneleri ne
            ushi’n kerek?
          </li>
          <li>
            Geometriyali’q figuralardi’ qanday u’skeneler ja’rdeminde payda
            yetiw mu’mkin?
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme11;
