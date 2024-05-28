import React from "react";
import "./theme1.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import sitImg from "../../assets/sit.jpg";

const Theme1 = () => {
  return (
    <div className="theme-1 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>
          1-Sabaq. Qa’wipsizlik texnikasi’ qag’i’ydalari’ ha’m
          sanitariya-gigiena talaplari’
        </h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"></span>
          <p>
            A'ziz woqi'wshi'lar! «Informatika» pa'ninen sabaqlar kompyuter
            klasi'nda ali'p bari'ladi'. Usi' sabaqli'qta berilgen a'meliy
            tapsi'rmalardi' tikkeley kompyuterler ja'rdeminde wori'nlaysiz.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            Kompyuterler de basqa elektr u'skeneleri si'yaqli' elektr togi'
            ja'rdeminde isleydi. Elektr togi' bolsa ju'da' abayli'li'q penen
            jumi's ali'p bari'wdi' talap yetedi.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            Kompyuter klasi'ndag'i' qurilmalardan naduri's paydalani'w wo'rt
            shi'g'i'wi', baxi'tsi'z ha'diyseler ju'z beriwi ha'm buni'n'
            na'tiyjesinde insan salamatli'g'i'na zi'yan jetiwi ha'm de kompyuter
            quri'lmalari'ni'n' buzi'li'wi'na ali'p keliwi mu'mkin.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            Joqari'dag'i' unamsi'z jag'daylardi'n' aldi'n ali'w maqsetinde
            qa'wipsizlik texnikasi' qag'i'ydalari' ha'm sanitariya-gigiena
            talaplari'na a'mel yetiwin'iz talap yetiledi.
          </p>
        </div>
        <div className="rules">
          <ol type="1">
            <h3>Qa’wipsizlik texnikasi’ qag’i’ydalari’</h3>
            <li>
              Mug'allimnin' ruqsati'si'z o'zbetinshe etip kompyuterdi iske
              tu'siriw
            </li>
            <li>Kompyuter bo'lmesine u'stki kiyimlerde kirip oti'ri'w;</li>
            <li>
              Elektr togi' dereklerin ha'm tutasti’ri’wshi’ si'mlardi' uslaw;
            </li>
            <li>O'zbetinshe kompyuter sazlaw jumi'slari'n ali'p bari'w;</li>
            <li>
              Kompyuter ekrani'n qol menen uslaw, islep turg'an kompyuterde
              tazalaw jumi'slari'n ali'p bari'w;
            </li>
            <li>
              Uzaq waqi't dawami'nda islep turg'an kompyuterlerdi qarawsi'z
              qaldi'ri’w;
            </li>
            <li>
              Kompyuterdin' qasi'nda basqa elektr ha'm i'si'ti'w a'sbaplari'nan
              paydalani'w;
            </li>
            <li>Kompyuterdin' qasi'nda awqatlani'w, suw ishiw;</li>
            <li>
              Tez janatug'i'n buyi'mlar ha'm quri'lmalardi'n' ishki
              elementlerine keri ta'sir yetiwshi kislotali', qurami’nda xlor
              bolg'an zatlardi' ali'p kiriw;
            </li>
            <li>
              Klaviatura ha'm kompyuter «mi’shka»si'n «ti'shqansha»si'n i̇'zg'ar
              qollari'n'ï'z benen basqari’w;
            </li>
            <li>Klaviatura ha'm «mi'shka»dan paydalang'anda ku'sh isletiw;</li>
            <li>Kompyuterdi ruqsatsi'z o'shirip, jumi'sti' juwmaqlaw;</li>
          </ol>
          <div className="imgs">
            <img src="https://pbs.twimg.com/media/EWcZyuWWoAAlpwp.png" alt="" />
            <img
              src="https://www.wikihow.com/images/thumb/9/99/Clean-a-Touch-Screen-Computer-Step-2.jpg/v4-460px-Clean-a-Touch-Screen-Computer-Step-2.jpg.webp"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/1f/08/27/1f0827bffa0f2c7c607b7eebffd4dd71.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/485/543/non_2x/wet-hands-plugging-in-the-power-dangerous-from-water-danger-to-life-and-property-safety-first-vector.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              Kompyuterden paydalani’w bari’si’nda baxi’tsi’z ha’diyseler
              bolmawi’ ha’m densawli’g’i’n’i’zg’a zi’yan tiymewi ushi’n
              qa’wipsizlik texnikasi’ qag’i’ydalari’na so’zsiz a’mel yetiwin’iz
              kerek!
            </b>
          </p>
        </div>
        <div className="rules">
          <ol type="1" className="rule-gigiena">
            <h3>Sanitariya-gigiena talaplari’</h3>
            <div className="text">
              <span className="provel"> </span>
              <p>
                Yesin’izde saqlan’, kompyuterde islew dawami’nda kerekli
                talaplarg’a a’mel yetpew insan salamatli’g’i’na u’lken zi’yan
                yetiwi mu’mkin. A’sirese, ko’z, qan aylani’w sistemasi’, bas miy
                xi’zmeti, womi’rtqa bag’anasi’ni’n’ a’zzileniwi ha’m tu’rli
                keselliklerdin’ kelip shi’g’i’wi’na sebepshi boladi’.
              </p>
            </div>
            <div className="text">
              <span className="provel"> </span>
              <p>
                Bulardi’n’ aldi’n ali’w ha’m kompyuterde islew dawami’nda
                salamatli’g’i’n’i’zg’a zi’yan yetpewi ushi’n to’mendegi
                talaplarg’a a’mel yetiwin’iz ha’m wolardi’ yesten
                shi’g’armawi’n’i’z kerek:
              </p>
            </div>
            <li>Kompyuter stoli’nan 20 sm uzaqli’qta oti’ri’n’</li>
            <li>
              Ko’zin’iz kompyuter monitori’nan 50—60 sm uzaqli’qta bolsi’n,
              20—30 minuttan son’ ko’zge dem berip turi’w ha’m kompyuterde islew
              ku’nine 180 minuttan aspawi’ kerek
            </li>
            <li>
              Iyin ha’m qol shi’g’anag’i’ arasi’ndag’i’ mu’yesh 90o —120o ti’
              payda yetsin
            </li>
            <li>
              Kompyuter aldi’nda oti’rg’ani’n’i’zda denen’izdi tik uslan’
            </li>
            <li>Ayaq tabani’n’i’z polg’a toli’q tiyi p tursi’n</li>
            <li>Qol alaqani’ ha’m barmaqlari’- n’i’zdi’ yerkin uslan’</li>
            <li>Qoli’n’i’zdi’ denen’izge jaqi’n arali’qta uslan’</li>
            <li>Dize asti’ mu’yeshi 90o ti’ payda yetsin</li>
          </ol>
          <div className="imgs sit-properly">
            <img src={sitImg} alt="" />
          </div>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              Kompyuter aldi’nda naduri’s oti’ri’w omi’rtqa bag’anan’i’zda
              awi’ri’wlar payda boli’wi’na ha’m de tez sharshawi’n’i’zg’a
              sebepshi boladi’.
            </b>
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            <b>1-shi’ni’g’i’w.</b> Ko’z bulshi’q yetlerin 4 sekund qatti’ jumi’p
            turi’n’, son’ wolardi’ ashi’p, 6 sekund uzaqlarg’a qarap turi’n’.
            Bul shi’ni’g’i’wdi’ 3— 4 ma’rte ta’kirarlan’.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            <b>2-shi’ni’g’i’w.</b> Ko’zlerin’izdi 4 sekund muri’n ushi’na
            qarati’n’, keyin 6 sekund uzaqlarg’a qarap turi’n’. Bul
            shi’ni’g’i’wdi’ 3—4 ma’rte ta’kirarlan’.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            <b>3-shi’ni’g’i’w.</b> Basti’ burmag’an halda
            ko’zin’izdi aldi’n won’g’a qarati’n’ ha’m bul jag’daydi’ biraz
            saqlap turi’n’, keyin ko’zin’izdi tuwri’g’a qarati’p, 6 sekund
            uzaqlarg’a qarap turi’n’. Mine usi’ shi’ni’g’i’wlardi’ ko’zin’izdi
            shepke, pa’stke ha’m joqari’g’a qarati’p ori’nlan’. Shi’ni’g’i’wdi’
            1—6 yesabi’nda ta’kirarlan’.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            <b>4-shi’ni’g’i’w.</b> Ko’zdi joqari’g’a on’ ta’repten dioganal
            boylap to’mengi shep ta’repine qaran’, son’i’nan uzaqlarg’a 6 sekund
            qarap turi’n’. Tap usi’nday usi’l menen tek ko’zdi joqarg’i’ shep
            ta’repten to’mengi on’ ta’repine qaran’ ha’m 6 sekund uzaqlarg’a
            qarap turi’n’. Bul shi’ni’g’i’wdi’ 3—5 ma’rte ta’kirarlan’.
          </p>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            Qa’wipsizlik texnikasi’ qag’i’ydalari’n biliw ne ushi’n kerek?
          </li>
          <li>
            Elektr togi’ menen baylani’sli’ qanday qag’i’ydalardi’ bilesiz?
          </li>
          <li>
            Kompyuter bo’lmesindegi u’skeneler uzaq waqi’t xi’zmet yetiwi ushi’n
            qanday qag’i’ydalarg’a a’mel yetiw kerek?
          </li>
          <li>
            Sanitariya-gigiena talaplari’na a’mel yetpew nelerge ali’p keledi?
          </li>
          <li>
            Kompyuterdi iske qosi’w ha’m jumi’sti’ juwmaqlaw ta’rtibine itibar
            bermew qanday jag’daylarg’a ali’p keliwi mu’mkin?
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Theme1;
