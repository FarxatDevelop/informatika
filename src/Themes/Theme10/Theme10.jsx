import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FullProgImg from "../../assets/full-prog.jpg";
import PaintImg from "../../assets/paint-menu.jpg";
import ColorPanel from "../../assets/color-panel.jpg";
import Old1 from "../../assets/old1.jpg"
import Old2 from "../../assets/old2.jpg"
import Old3 from "../../assets/old3.jpg"
import Old4 from "../../assets/old4.jpg"
import { FaWindows } from "react-icons/fa6";
import PaintBlock from "../../assets/paint-block.jpg";
import "./theme10.css";

const Theme10 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>10-sabaq. Paint programmasi’ haqqi’nda</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Insanlar a’yyemnen su’wret sali’w wo’neri menen shug’i’llani’p, wo’z
            su’wretlerinde insan ko’rinislerin, tu’rli ja’nliklerdi, waqi’ya
            yamasa ha’diyselerdi sa’wlelendiriwge ha’reket yetken. A’yyemgi
            su’wret wo’neri u’lgilerin arxeologlar ta’repinen tabi’lg’an
            taslardag’i’, a’yyemgi diywal ha’m sopal i’di’slardag’i’
            ko’rinislerden de ko’riw mu’mkin.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            To’mendegi su’wretlerde a’yyemgi ko’rkem-o’ner do’retpelerinen
            u’lgiler keltirilgen:
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img src={Old1} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Old2} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Old3} alt="" />
          </div>
          <div className="operation-sistem">
            <img src={Old4} alt="" />
          </div>
        </div>
        <div className="subtitle">
          <h3>Paint grafikali’q redaktori’</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Paint</b> – Windows sharayati’nda islewshi grafikali’q redaktor
            yesaplani’p, to’mendegi imkaniyatlarg’a iye:
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            - qa’lem, mayqa’lem, bu’rkigish ja’rdeminde su’wret, ko’rinisler
            jarati’w, olardi’ tu’rli ren’lerge boyaw
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            - tuwri’ si’zi’q, iymek si’zi’q, elli ps, to’rtmu’yeshlik
            ja’rdeminde tu’rli figuralar jasaw, ishki oblasti’n boyaw
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>- su’wretlerdi wo’zgertiw, buri’w ha’m nusqa ali’w</p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            - su’wretli fayllardi’ ju’klep ali’w, olarg’a wo’zgeris kirgiziw
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>- qa’legen oblastti’ qi’rqi’p ali’w</p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>- su’wretlerdi saqlap qoyi’w</p>
        </div>
        <div className="subtitle">
          <h3>Paintti’ iske tu’siriw</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Paint</b> programmasi’n iske tu’siriw ushi’n to’mendegi
            usi’llardi’n’ birinen paydalani’w mu’mkin
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>1-usul. </b>«Mi’shka» ja’rdeminde jumi’s stoli’nda{" "}
            <FaWindows size={25} style={{ transform: "translateY(20%)" }} />{" "}
            tu’ymesi iske tu’siriledi ha’m to’mendegi izbe-izlik tiykari’nda
            a’melge asi’ri’ladi’
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
              src="https://cdn.kibrispdr.org/data/758/logo-microsoft-paint-0.jpg"
              width={40}
              alt=""
            />
            <p>Paint</p>
          </div>
        </div>

        <div className="text">
          <span className="provel"></span>
          <p>
            Payda bolg’an standart programmalar diziminen <b>Paint</b>{" "}
            programmasi’ tan’lanadi’ ha’m iske tu’siriledi
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-usi’l.</b> Jumi’s stoli’nda jaylasti’ri’lg’an yarli’gi’
            ja’rdeminde iske tu’siriledi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <span className="provel"></span>
          <p>
            <b>
              Iske tu’sirilgen Paint programmasi’ interfeysi 6 bo’limnen ibarat:
            </b>
          </p>
        </div>
        <div className="img-desktop">
          <img
            src={PaintBlock}
            className="yaer-img"
            alt=""
            width={360}
            height={250}
          />
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Baslama qatari’ –</b>programma ati’ ha’m fayl ati’ jazi’lg’an
            ko’k ren’li panel. Jan’a ashi’lg’an fayl ati’{" "}
            <b>«Безымянный» (atsi’z)</b>
            jag’dayi’nda boladi’
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Menyu qatari’</b> – progrmma menen islew procesinde za’ru’r
            bolg’an tiykarg’i’ buyri’qlar dizimi. Wog’an{" "}
            <b>
              <i>Файл</i>
            </b>{" "}
            (Fayl),{" "}
            <b>
              <i>Правка</i>
            </b>{" "}
            (Du’zetiw),{" "}
            <b>
              <i>Вид</i>
            </b>{" "}
            (Ko’rinis),{" "}
            <b>
              <i>Рисунок</i>
            </b>{" "}
            (Su’wret),{" "}
            <b>
              <i>Палитра</i>
            </b>{" "}
            (Ren’ler toplami’),{" "}
            <b>
              <i>Справка</i>
            </b>{" "}
            (Mag’luwmat) bo’limleri kiredi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Файл</b> (Fayl) bo’limine kiriwshi tiykarg’i’ buyri’qlar:
          </p>
        </div>
        <div className="title-top paint">
          <span>
            <img src={PaintImg} width={200} height={300} alt="" />
          </span>
          <div className="text">
            <div className="subtitle">
              <h3>Fayl</h3>
            </div>
            <p>
              <ol style={{ marginLeft: "20px" }}>
                <li>Payda etiw</li>
                <li>Fayldi’ ashi’w</li>
                <li>Saqlaw</li>
                <li>...si’yaqli’ saqlaw</li>
                <li>Basi’p shi’g’ari’w</li>
                <li>skaner yamasa kameradan</li>
                <li>jiberiw</li>
                <li>shi’g’i’p ketiw</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Правка</b> (Du’zetiw) bo’limine kiriwshi tiykarg’i’ a’meller ha’m
            buyri’qlar:
          </p>
        </div>
        <div className="title-top paint">
          <span>
            <img
              src="https://paintnet.ru/wp-content/uploads/2021/03/pravka-2.png"
              width={200}
              height={300}
              alt=""
            />
          </span>
          <div className="text">
            <div className="subtitle">
              <h3>Du’zetiw</h3>
            </div>
            <p>
              <ol style={{ marginLeft: "20px" }}>
                <li>Biykar yetiw</li>
                <li>Ta’kirarlaw</li>
                <li>Qi’rqi’p ali’w</li>
                <li>Nusqa ali’w</li>
                <li>Jaylasti’ri’w</li>
                <li>Belgilengendi o’shiriw</li>
                <li>Ha’mmesin belgilew</li>
                <li>Faylg’a ko’shiriw</li>
                <li>Fayldan ali’p qoyi’w</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Вид</b> (Ko’rinis) bo’limine kiriwshi tiykarg’i’ a’meller:
          </p>
        </div>
        <div className="title-top paint">
          <span>
            <img
              src="https://paintnet.ru/wp-content/uploads/2021/03/vid.png"
              width={200}
              height={270}
              alt=""
            />
          </span>
          <div className="text">
            <div className="subtitle">
              <h3>Ko’rinis</h3>
            </div>
            <p>
              <ol style={{ marginLeft: "20px" }}>
                <li>U’skeneler toplami’</li>
                <li>Palitra</li>
                <li>Ko’rinis qatari’</li>
                <li>Tekst wo’zgeshelikleri paneli</li>
                <li>Masshtab</li>
                <li>Su’wretti ko’rip shi’g’i’w</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Палитра</b> (Ren’ler toplami’) — ren’lerdi tan’law ha’m
            wo’zgertiw imkaniyati’n beriwshi ren’ler toplami’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Изменить палитру</b> ko’rsetpesi tan’lansa, jumi’s maydani’nda
            ren’ler paneli payda boladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Справка</b> (Mag’luwmat) – Paint programmasi’ ha’m wondag’i’
            imkaniyatlari’ haqqi’nda mag’luwmat yamasa ja’rdem ali’w mu’mkin
            bolg’an mag’luwmatlar.
          </p>
        </div>
        <div className="subtitle">
          <h3>Ren’ler paneli</h3>
        </div>
        <div className="img-desktop">
          <img
            src={ColorPanel}
            className="yaer-img"
            alt=""
            width={360}
            height={250}
          />
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Ren’ler panelinde 28 tu’rli ren’ler bar boli’p, si’zi’q yamasa
            tuyi’q oblastti’ qa’legen ren’lerde boyaw ushi’n mo’lsherlengen.
          </p>
        </div>
        <div className="subtitle">
          <h3>Ko’rinis qatari’</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Ko’rinis qatari’ «mi’shka» ko’rsetkishinin’ jumi’s maydani’nda
            turg’an worni’na sa’ykes noqatlar worni’n ha’m si’zi’li’p ati’rg’an
            figurani’n’ piksellerdegi shamasi’n ko’rsetip turadi’. Paint jumi’s
            maydani’ni’n’ shegarasi’ 8600x500 piksel (noqat) ge ten’
          </p>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            A’yyemgi su’wret ha’m ko’rinis jarati’w usi’llari’ haqqi’nda ayti’p
            berin’.
          </li>
          <li>Kompyuterde su’wret jarati’w ushi’n neler kerek?</li>
          <li>Kompyuter grafikasi’nan qaysi’ taraw iyeleri paydalanadi’?</li>
          <li>
            Qanday programmalar grafikali’q redaktorg’a mi’sal bola aladi’?
          </li>
          <li>
            Paint grafikali’q redaktori’ni’n’ imkaniyatlari’n tu’sindirip
            berin’.
          </li>
          <li>
            Paint programmasi’n iske tu’siriwdin’ qanday usi’llari’n bilesiz?
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme10;
