import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./theme7.css";
import StartBoomImg from "../../assets/star-boom.jpg";
import StartBoomImg2 from "../../assets/star-boom-2.jpg";
import StartBoomFullImg from "../../assets/star-boom-full.jpg";
import StartBoomImgCongrut from "../../assets/star-boom-congrut.jpg";

const Theme7 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>7-sabaq. Klaviatura trenajori’nda shi’ni’g’i’wlar</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Kompyuter klaviaturasi’ ja’rdeminde hu’jjetler tayarlaw, xat jazi’w
            yamasa basi’p shi’g’ari’w si’yaqli’ wazi’ypalardi’ wori’nlawda
            qa’tege jol qoymaw ha’m belgilerdi duri’s qollana biliw
            ko’nlikpeleri talap yetiledi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Kompyuterde islew ko’nlikpesi bolmag’an ha’m birinshi ma’rte islew
            niyetinde bolg’an paydalani’wshi’lar ushi’n ko’p g’ana qi’zi’qli’
            klaviatura trenajorlari’ (shi’ni’g’i’wdi’ wori’nlaytug’i’n kompyuter
            programmalari’) jarati’lg’an. Ko’binese bunday trenajorlar birneshe
            basqi’shli’ boladi’. Wolar a’piwayi’shi’ni’g’i’wlardan baslanadi’,
            birinshi basqi’shta jaqsi’ na’tiyjelerge iye bolg’annan son’,
            quramali’ shi’ni’g’i’wlardi’ wori’nlawg’a wo’tiledi. Trenajor
            shi’ni’g’i’wlari’ ja’rdeminde qol barmaqlari’n duri’s jaylasti’ri’w,
            qolayli’ usi’llardan paydalang’an jag’dayda islew tezligin
            asi’ri’wg’a yerisiw mu’mkin.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Bunday trenajorlar qatari’na:{" "}
            <b>
              {" "}
              Typing trainer, Rapid typing, Keyblaze typing tutor, Kiran's
              typing tutor!
            </b>{" "}
            si’yaqli’ programmalar kiredi
          </p>
        </div>
        <div className="subtitle">
          <h3>«STAR BOOM!» trenajori’</h3>
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
        <div className="img-desktop">
          <img src={StartBoomImg} alt="" width={250} height={250} />
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Shi’ni’g’i’wlar lati’n yamasa kirill ha’riplerin tan’law arqali’
            iske tu’siriledi. Demek, shi’n’i’g’i’wlardi’{" "}
            <b>o’zbek (kirill, lati’n), inglis ha’m rus tillerinde</b> ori’nlaw
            imkaniyatlari’ boladi’.
          </p>
        </div>
        <div className="img-desktop">
          <img src={StartBoomFullImg} alt="" width={250} height={250} />
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Shi’ni’g’i’wdi’ wori’nlawda a’lbette waqi’t, tezlik ha’m qa’teler
            sani’ yesapqa ali’nadi’. Baslawshi’lar ushi’n 1-tezlikti tan’lag’an
            maqul. Ha’riplerdin’ jaylasi’wi’ menen tani’si’p ali’ng’annan son’,
            keyingi tezlikke wo’tiw usi’ni’s yetiledi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>2-shi’ni’g’i’w. </b>Ekran boylap ko’rinip turg’an tekstti
            qa’tesiz teriw. Shi’ni’g’i’w qi’sqa waqi’t ishinde terilgen belgiler
            sani’na qarap bahalanadi’. Shi’ni’g’i’wdi’n’ ja’ne bir qi’zi’qli’
            ta’repi, duri’s tan’lang’an belgi jasi’l si’zi’qtan ko’k si’zi’qqa
            wo’tedi, keri jag’dayda jasi’l si’zi’qtan ji’lji’maydi’ ha’m
            waqi’tti’ uslap turadi’
          </p>
        </div>
        <div className="img-desktop StartBoomImg2">
          <img src={StartBoomImg2} alt="" width={500} height={250} />
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Ha’r yeki shi’ni’g’i’wdi’n’ na’tiyjelerin programma aynasi’nda
            qadag’alap turi’w mu’mkin. Uluwma na’tiyjeni bolsa, <b>Shig'iw</b>{" "}
            tu’ymeshesin tan’law arqali’ ani’qlaw mu’mkin
          </p>
        </div>
        <div className="img-desktop StartBoomImgCongrut">
          <img src={StartBoomImgCongrut} alt="" width={500} height={250} />
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>
            Klaviatura trenajorlari’ni’n’ maqseti ha’m wazi’ypasi’n
            tu’sindirin’.
          </li>
          <li>
            «Klaviatura trenajori’» dep atali’wshi’ ja’ne qanday programmalardi’
            bilesiz?
          </li>
          <li>
            Trenajorlarda wori’nlang’an shi’ni’g’i’wlar paydalani’wshi’larg’a
            qanday bilim ha’m ko’nlikpeler beredi?
          </li>
          <li>«Star Boom!» programmasi’ haqqi’nda mag’luwmat berin’</li>
          <li>Tekst teriw boyi’nsha «Kim shaqqan» woyi’ni’n wo’tkerin’.</li>
        </ol>
      </div>
    </div>
  );
};
export default Theme7;
