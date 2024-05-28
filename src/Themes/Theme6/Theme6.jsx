import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./theme6.css";
import KeyboardImg from "../../assets/keyboard.jpg";
import Eng_ru from "../../assets/ru-eng.jpg";
import A_FImg from "../../assets/a-f.jpg";
import FnKeysImg from "../../assets/fn-keys.jpg";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

const Theme6 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>6-sabaq. Klaviatura menen tani’si’w</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Klaviatura kompyuterdin’ tiykarg’i’ quri’lmalari’nan biri
            yesaplani’wi’ ha’m woni’n’ ja’rdeminde mag’luwmatlar payda yetiw
            mu’mkinligi sizge aldi’ng’i’ temalardan belgili. Klaviaturada biz
            bilgen barli’q belgiler, sanlar, ha’ripler ja’mlengen. Demek,
            ha’ripler izbe-izliginen so’zler, so’zlerden qatarlar, qatarlardan
            tekstler payda yetiw ha’m woni’ kompyuter yadi’nda saqlaw mu’mkin.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Sonday-aq, klaviatura insan menen kompyuter wortasi’nda baylani’s
            wazi’ypasi’n atqari’wshi’ qural boli’p yesaplanadi’. Sol sebepli
            klaviaturada islew ko’nlikpelerin payda yetiw, tu’ymeshelerdin’
            jaylasi’wi’ ha’m wolardi’n’ tiykarg’i’ wazi’ypalari’ menen tani’si’p
            ali’w za’ru’r. Klaviaturani’n’ wondag’i’ tu’ymesheler sani’na qarap
            birneshe tu’rleri bar. Ha’rbir tu’ymeshede 1, 2, 3 yamasa 4 ke
            shekem belgi (ha’rip, san, belgiler) yamasa kursordi’ basqari’w
            buyri’qlari’ jaylasqan.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Klaviaturadag’i’ tu’ymesheler wazi’ypasi’na qaray <b>6</b> toparg’a
            bo’linedi
          </p>
        </div>
        <div className="img-desktop keyboard-img">
          <img src={KeyboardImg} alt="" height={200} />
        </div>
        <ol type="1">
          <li>
            <b>Alfavit-cifrli’</b> tu’ymesheler lati’n, kirill ha’ripleri yamasa
            arab cifrlari’ ko’rsetilgen tu’ymesheler topari’nan ibarat:
          </li>
          <div className="text">
            <span className="provel"></span>
            <p>
              <b>Sanlar:</b> 0 1 2 3 4 5 6 7 8 9. Belgiler: @ № ! $ & * + ( ) =
              / ha’m t.b.
            </p>
          </div>
          <div className="text">
            <span className="provel"></span>
            <p>
              <b>Lati’n ha’m kirill ha’ripleri:</b> А Щ Ы Ю S Z R G L ...
            </p>
          </div>
          <div className="text">
            <span className="provel"></span>
            <p>
              Klaviatura tu’ymeshedegi belgilerden birin tan’law «Alt+Shift»
              yamasa <b>«Ctrl + Shift» </b>tu’ymeshelerin birgelikte basi’w
              ja’rdeminde a’melge asi’ri’ladi’. Bul usi’l menen lati’n
              alfavitinen kirill alfavitine ha’m kerisinshe o’tiw a’mellerin
              ori’nlaw mu’mkin.
            </p>
          </div>

          <div className="img-desktop A_FImg">
            <img src={A_FImg} alt="" />
          </div>

          <div className="text">
            <span className="provel"></span>
            <p>
              <b>1-usi’l.</b> Ma’seleler panelinde <mark>EN</mark>{" "}
              piktogrammasi’na «mi’shka»ni’n’ shep tu’ymesi basi’ladi’, payda
              bolg’an tan’law aynasi’nan kerekli til tan’lanadi’.
            </p>
          </div>
          <div className="text">
            <span className="provel"></span>
            <p>
              Kirill alfavitine tiykarlang’an wo’zbek alfavitindegi ha’riplerin{" "}
              <b>ў, ҳ, ғ, қ</b> payda yetiw usi’llari’:
            </p>
          </div>
          <div className="img-desktop">
            <img src={Eng_ru} alt="" width={330} height={150} />
          </div>
          <li>
            <b>
              Arnawli’ xi’zmet wazi’ypasi’n wori’nlawshi’ tu’ymesheler topari’:
            </b>
          </li>
          {/*  */}

          <table>
            <tr>
              <th>Tu’ymeshelerdin’ inglisshe atamasi’</th>
              <th>Oqi’li’wi’</th>
              <th>Wazi’ypasi’</th>
            </tr>
            <tr>
              <td>Esc</td>
              <td>[eskeyp]</td>
              <td>Son’g’i’ a’meldi biykar etiw</td>
            </tr>
            <tr>
              <td>Enter</td>
              <td>[enter]</td>
              <td>Buyri’q yamasa a’meldi tasti’yi’qlaw</td>
            </tr>
            <tr>
              <td>Shift</td>
              <td>[shift]</td>
              <td>Klaviaturadag’i’ joqari’ registr belgilerin kirgiziw</td>
            </tr>
            <tr>
              <td>Caps Lock</td>
              <td>[kaps lok]</td>
              <td>Tek g’ana bas ha’riplerdi jazi’w</td>
            </tr>
            <tr>
              <td>Control {"{Ctrl}"}</td>
              <td>[kontrol]</td>
              <td>Basqa klavishlar menen birgelikte isletiw</td>
            </tr>
            <tr>
              <td>Alt</td>
              <td>[alt]</td>
              <td>Basqa klavishlar menen birgelikte isletiw</td>
            </tr>
            <tr>
              <td>Back Space</td>
              <td>[bek speys]</td>
              <td>Kursordan shepte turg’an belgini o’shiriw</td>
            </tr>
            <tr>
              <td>Delete</td>
              <td>[delit]</td>
              <td>Kursordan won’da turg’an belgini wo’shiriw</td>
            </tr>
            <tr>
              <td>Insert</td>
              <td>[insert]</td>
              <td>Ha’rip yamasa belgini almasti’ri’w ta’rtibine o’tiw</td>
            </tr>
          </table>

          {/*  */}
          <li>
            <b>Kursordi’ basqari’w tu’ymesheleri:</b>
          </li>
          <table>
            <tr>
              <td>Home</td>
              <td>Kusordi’ qatardi’n’ basi’na wo’tkeriw</td>
              <td>
                <FaArrowLeft />
              </td>
              <td>Kursordi’ bir belgi aldi’g’a wo’tkeriw</td>
            </tr>
            <tr>
              <td>End</td>
              <td>Kursordi’ qatardi’n’son’i’na wo’tkeriw</td>
              <td>
                <FaArrowRight />
              </td>
              <td>Kursordi’ bir belgi keyinge wo’tkeriw</td>
            </tr>
            <tr>
              <td>PgUp</td>
              <td>Kursordi’ aldi’ng’i’ betke wo’tkeriw</td>
              <td>
                <FaArrowUp />
              </td>
              <td>Kursordi’ bir qatar joqari’g’a wo’tkeriw</td>
            </tr>
            <tr>
              <td>PgDn</td>
              <td>Kursordi’ keyingi betke wo’tkeriw</td>
              <td>
                <FaArrowDown />
              </td>
              <td>Kursordi’ bir qatar to’menge tu’siriw</td>
            </tr>
          </table>
          <li>
            <b>Funkcional tu’ymesheler</b> – arnawli’ wazi’ypalardi’ wori’nlaw
            ushi’n arnalg’an. Wolardi’n’ wazi’ypalari’ ha’rbir programmada
            wo’zine ta’n wo’zgeshelikke iye boli’wi’ mu’mkin:
          </li>
          <div className="img-desktop FnKeysImg">
            <img src={FnKeysImg} alt="" />
          </div>
          <li>
            <b>Cifrli’ tu’ymesheler paneli:</b>
          </li>
          <div className="text">
            <span className="provel"></span>
            <p>
              <b>{"{NumLock}"}</b> – indikatori’ jani’p turg’ani’nda –
              <b>«kalkulyator»</b>, o’shik turg’ani’nda kursordi’ basqari’w
              wazi’ypasi’n atqaradi’.
            </p>
          </div>

          <li>
            <b>Indikatorlar:</b>
          </li>
          <ol>
            <li>
              <b>{"{Power}"}</b> – komoyuterdi wo’shiriw;
            </li>
            <li>
              <b>
                <b>{"{PrintScreen}"}</b> – ekrandag’i’ ko’rinistin’ nusqasi’n
                yadta saqlap turi’w
              </b>
            </li>
            <li>
              <b>
                {"{Pause / Break}"} – kompyuterde iske tu’sirilgen muzi’ka,
                video, kliplerdi toqtati’p turi’w
              </b>
            </li>
          </ol>
        </ol>

        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>Klaviaturani’n’ wazi’ypasi’n tu’sindirip berin’.</li>
          <li>Klaviatura qanday ha’ripler topari’nan ibarat?</li>
          <li>
            <b>«Shift»</b> ha’m <b>«Caps Lock»</b> tu’ymeshelerinin’
            ayi’rmashi’li’g’i’n tu’sindirip berin’.
          </li>
          <li>Kursordi’ basqari’w tu’ymeshelerin ayti’p berin’</li>
          <li>Funkcional tu’ymeshelerdin’ wazi’ypasi’n tu’sindirin’.</li>
          <li>
            Kirill ha’m lati’n alfavitlerine wo’tiw usi’llari’n ayti’p berin’.
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme6;
