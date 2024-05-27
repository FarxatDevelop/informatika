import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "../Theme3/theme3.css";
import { CiWarning } from "react-icons/ci";
import "./theme4.css";
const Theme2 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>4-sabaq. Fayl ha’m papka tu’sinigi</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Kompyuterde wori’nlanatug’i’n barli’q a’mellerdi uluwmalasti’rg’an
            jag’dayda, wolardi’ u’sh tiykarg’i’ wazi’ypalarg’a aji’rati’wi’mi’z
            mu’mkin: xabarlardi’ ji’ynaw (jarati’w yamasa kiritiw), xabarlardi’
            qayta islew (yamasa wo’zgertiw) ha’m xabarlardi’ jetkerip beriw.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Usi’ wazi’ypalardi’ a’melge asi’ri’w ushi’n xabarlar, programmalar,
            mag’luwmatlar kompyuter yadi’nda ayri’qsha ta’rtipte payda yetiledi
            ha’m saqlanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Fayl</b> – inglis tilinen ali’ng’an boli’p, «hu’jjetler
            papkasi’», «mag’luwmatlar» ma’nisin an’latadi’. Ku’ndelikli
            turmi’si’mi’zda biz mag’luwmatlardi’ belgili bir ta’rtip ha’m
            qag’i’ydalarg’a tiykarlani’p payda yetemiz ha’m saqlaymi’z.
            Ma’selen, klasi’n’i’zdag’i’ ha’rbir woqi’wshi’ haqqi’ndag’i’
            mag’luwmatlar wo’z aldi’na papka da saqlanadi’ (bir papkada birneshe
            woqi’wshi’lar haqqi’ndag’i’ mag’luwmatlar aralasti’ri’li’p
            jiberilmeydi). Da’l usi’ si’yaqli’, sizin’ klasi’n’i’zdag’i’
            woqi’wshi’lar haqqi’ndag’i’ mag’luwmatlar ja’mlengen papka da basqa
            klass woqi’wshi’lari’ni’n’ papkalari’ menen aralasti’ri’li’p
            jiberilmeydi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Mag’luwmatlardi’ bunday qag’i’ydalarg’a tiykarlani’p
            ta’rtiplestiriwinin’ tiykarg’i’ maqseti — kerekli mag’luwmatlardi’
            an’satli’q penen izlep tabi’w boli’p yesaplanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayldi’n’ ati’na kompyuter quri’lmalari’ni’n’ ati’n ha’m buyri’qlar
            ati’n paydalani’w mu’mkin yemes.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayllardi’ kompyuter yadi’nda saqlaw ushi’n wolarg’a wo’z aldi’na
            atama beremiz. Buni’n tiykarg’i’ sebebi sonnan ibarat, yeger de
            ha’rbir faylg’a wo’z aldi’na atama berilmese, aljasi’w payda
            boladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayllardi’ ja’ne de ta’rtiplestiriw ushi’n wolardi’ mazmuni’
            boyi’nsha wo’z aldi’na papkalarg’a jaylasti’rami’z.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Kompyuterde fayllar jarati’wdan aldi’n wo’zin’izdin’ papkan’i’zdi’
            payda yetin’. Usi’ papkan’i’zg’a jaratqan tekstlerin’izdi,
            ko’rinislerin’iz, dawi’sli’ ha’m video fayllari’n’i’zdi’ saqlap
            bari’n’
          </p>
        </div>
        <div className="warning">
          <div className="warning-icon">
            <CiWarning size={35} color="red" />
          </div>
          <p>
            <b>
              Fayl – si’rtqi’ yadta qanday da bir atama menen saqlap qoyi’lg’an
              ha’rqanday mag’luwmat.
            </b>
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Faylda saqlani’p ati’rg’an mag’luwmatlar tekst, ko’rinis, film,
            muzi’ka, programma yamasa tu’rli basqa mag’luwmatlar boli’wi’
            mu’mkin. Wolar si’rtqi’ yad yesaplani’wshi’{" "}
            <b>
              {" "}
              disketa, magnit lenta, qatti’ disk, CD ha’m DVD diskler, flesh-yad{" "}
            </b>
            si’yaqli’ quri’lmalarda fayl ko’rinisinde saqlanadi’
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Ha’rbir fayldi’n’ atamasi’ boli’p, ol 2 bo’limnen ibarat boladi’:
            <b>fayl atamasi’ ha’m woni’n’ ken’eytpesi</b>. Fayldi’n’ ken’eytpesi
            faylda saqlang’an mag’luwmat qanday tu’rdegi mag’luwmat yekenliginen
            derek beredi. Fayldi’n’ atamasi’ 255 belgiden aspawi’ kerek.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayldi’n’ atamasi’ ha’m woni’n’ ken’eytpesi noqat penen
            aji’rati’li’p jazi’ladi’. Fayllardi’ ashi’w yamasa qayta islew kerek
            bolsa, wog’an atamasi’ arqali’ mu’ra’ja’a’t yetiledi ha’m izlenedi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>Kompyuterde fayllar u’stinde tu’rli a’meller ori’nlaw mu’mkin:</p>
        </div>
        <table>
          <tr>
            <td>Fayllardi’ payda yetiw</td>
            <td>Fayllardi’ ashi’w</td>
          </tr>
          <tr>
            <td>Fayllarni’ saqlaw</td>
            <td>Fayllardan nusqa ali’w</td>
          </tr>
          <tr>
            <td>Fayllarg’a wo’zgerisler kirigiziw</td>
            <td>Fayllardi’ basi’p shi’g’ari’w</td>
          </tr>
        </table>
        <div className="text">
          <span className="provel"></span>
          <p>
            Bul a’mellerdin’ ayi’ri’mlari’ menen tani’si’p, wolar menen islew
            ko’nlikpelerin payda yetemiz.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayllardi’ to’mendegi usi’llardi’n’ biri ja’rdeminde ashi’w mu’mkin:
          </p>
        </div>
        <ol>
          <li>
            <b>«Mi’shka»</b> ko’rsetkishi fayldi’ belgilep alg’annan keyin,
            «mi’shka»ni’n’ won’ tu’ymesi basi’ladi’ ha’m payda bolg’an
            kontekst-menyuden{" "}
            <b>
              <i>Oткрыть</i>
            </b>{" "}
            (Ashi’w) buyri’g’i’ tan’lanadi’
          </li>
          <li>
            <b>«Mi’shka»</b> ko’rsetkishi menen belgilengen fayl u’stinde shep
            tu’ymeshesi 2 ma’rte tez basi’ladi’.
          </li>
          <li>
            Fayl «mi’shka» ko’rsetkishi ja’rdeminde belgilep ali’ng’annan keyin,
            klaviaturani’n’{" "}
            <i>
              <b>Enter</b>
            </i>{" "}
            tu’ymesi basi’ladi’.
          </li>
        </ol>
        <div className="subtitle">
          <h3>Fayllardi’ payda yetiw</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Papka yamasa katalog</b> – fayl atamalari’ ha’m fayl haqqi’nda
            mag’luwmat saqlanatug’i’n disktin’ wo’z aldi’na aji’rati’lg’an
            worni’. Windows operacion sistemasi’nda papka ko’rinisi menen
            ko’rsetiledi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Fayllardi’ ja’ne de tez tabi’w ha’m qolayli’ usi’lda saqlaw
            maqsetinde hu’jjetlerdi, muzi’ka, su’wret, fotosu’wretler ha’m
            a’lbette, woyi’n programmalari’n wo’z aldi’na papkalarda saqlaw
            usi’ni’s yetiledi.
          </p>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>Kompyuter yadi’nda qanday mag’luwmatlar boli’wi’ mu’mkin?</li>
          <li>Mag’luwmatlar kompyuterde qanday ko’riniste saqlanadi’?</li>
          <li>Qanday mag’luwmatlarg’a fayl dep ayta alami’z?</li>
          <li>Fayllardi’n’ qanday tu’rleri bar?</li>
          <li>Fayl ha’m papka ashi’wdi’n’ neshe usi’li’n bilesiz?</li>
          <li>Papka qaysi’ jag’daylarda jarati’ladi’?</li>
          <li>Papkani’ payda yetiw qalay a’melge asi’ri’ladi’?</li>
          <li>Jumi’s stoli’nda papka jarati’n’ ha’m wog’an atama berin’</li>
          <li>
            Fayllar menen wori’nlaw mu’mkin bolg’an qanday a’mellerdi bilesiz?
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Theme2;
