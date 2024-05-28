import React from "react";
import "./theme2.css";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Theme2 = () => {
  return (
    <div className="theme-2 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>
          2-sabaq. Kompyuter. Kompyuterdin’ tiykarg’i’ quri’lmalari’ ha’m
          olardi’n’ wazi’ypalari’
        </h3>
      </div>
      <div className="theme-information">
        <div className="title-top">
          <span>
            <img
              src="https://pngimg.com/d/computer_pc_PNG102088.png"
              width={150}
              alt=""
            />
          </span>
          <div className="text">
            <span className="provel"></span>
            <p>
              Bu’gingi ku’nde paydalani’li’p ati’rg’an zamango’y kompyuterlerge
              XX a’sirdin’ 40-ji’llari’nda tiykar sali’ng’an boli’p, wolardi’n’
              jarati’li’wi’ insanni’n’ ulli’ woylap tabi’wlari’nan sanaladi’.
              <b> Kompyuter</b> inglis tilinen
              <b>
                <i> «computer»</i>
              </b>
              so’zinen ali’ng’an boli’p,
              <b>
                <i> «esaplag’i’sh» </i>
              </b>
              ma’nisin an’latadi’.
            </p>
          </div>
        </div>
        <div className="text">
          <span className="provel"> </span>
          <p>
            Kompyuterler adamlardi’n’ ku’ndelikli turmi’si’nda za’ru’r
            wazi’ypalardi’ wori’nlap ati’rg’anli’g’i’ sebepli wog’an bolg’an
            talap ku’nnen-ku’nge arti’p barmaqta. Sebebi kompyuterler
            ja’rdeminde tu’rli ko’rinistegi xabarlardi’ izlew, toplaw, saqlaw,
            qayta islew ha’m jetkeri p beriw si’yaqli’ wazi’ypalardi’ an’satli’q
            penen tez a’melge asi’ri’w mu’mkin
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>Zamanago’y jeke kompyuterlerdin’ birneshe tu’ri bar:</p>
        </div>
        <div className="imgs">
          <img src="https://pngimg.com/d/computer_pc_PNG102088.png" alt="" />
          <img
            src="https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-3-1024x833.png"
            alt=""
          />
          <img src="https://pngimg.com/d/laptop_PNG5905.png" alt="" />
          <img
            src="https://wiki.scummvm.org/images/2/2d/Pocketpc_phone.png"
            alt=""
          />
        </div>
        <div className="subtitle">
          <h3>Kompyuterdin’ tiykarg’i’ quri’lmalari’</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Zamanago’y kompyuter to’mendegi tiykarg’i’ quri’lmalardan turadi’:
          </p>
        </div>
        <div className="img-desktop">
          <img
            src="https://i.pinimg.com/originals/9e/43/44/9e4344fbf8840d797623bdaedae115e8.png"
            alt=""
            width={250}
            height={250}
          />
        </div>
        <ol type="1">
          <li>
            <b>Sistemali’ blok</b> – wo’zinde birneshe quramali’ quri’lmalardi’
            birlestirgen ha’m qorg’aw qabi’g’i’na oralg’an quri’lma. Onda
            tiykarg’i’ plata, processor, yad, qatti’ disk si’yaqli’ za’ru’rli
            quri’lmalar jaylasqan.
          </li>
          <div className="text">
            <span className="provel"></span>
            <p>
              <b>Tiykarg’i’ plata</b> — bir pu’tin tiykarg’a ji’ynalg’an
              elektron sxemalardan ibarat. Wog’an processor, yad ha’m basqa
              quri’lmalar jalg’anadi’
            </p>
          </div>
          <div className="text">
            <span className="provel"></span>
            <p>
              <b>Processor</b> — kompyuterdin’ quramli’q quri’lmasi’
              esaplani’p, basqa barli’q quri’lmalardi’ basqaradi’
            </p>
            <div className="text">
              <span className="provel"></span>
              <p>
                <b>Qatti’ disk</b> — mag’luwmatlardi’ saqlawshi’ yad quri’lmasi’
              </p>
            </div>
            <div className="text">
              <span className="provel"></span>
              <p>
                <b>Tez (operativ) yad</b> — mag’luwmatlardi’ waqti’nsha –
                kompyuter islewi dawami’nda saqlaydi’
              </p>
            </div>
            <li>
              <b>Monitor</b> (lati’nsha so’z boli’p,{" "}
              <b>
                <i>«esletiwshi»</i>,
              </b>
              <b>
                <i> «xabar beriwshi» </i>
              </b>
              ma’nislerin an’latadi’) – kompyuterdegi tekst, grafika ha’m basqa
              tu’rdegi mag’luwmatlardi’ ekranda sa’wlelendiriwshi quri’lma
              boli’p, woni’n’ birneshe tu’rleri bar:
            </li>
            <div className="monitor-imgs">
              <div className="monitor-img">
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/01/12/58/monitor-23352_640.png"
                  alt=""
                />
                <p>Elektron nurli’ trubkali’</p>
              </div>
              <div className="monitor-img">
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-monitormonitorscomputer-displayvisual-displayelectronicdisplay-devicecrystal-displaylcdledamoled-1701528362367vrixg.png"
                  alt=""
                />
                <p>Plazmali’ paneller</p>
              </div>
              <div className="monitor-img">
                <img src="https://pngimg.com/d/monitor_PNG101653.png" alt="" />
                <p>Suyi’q kristalli’ JK (LCD).</p>
              </div>
            </div>
            <li>
              <b>Klaviatura (tu’ymesheler quri’lmasi’)</b> baspa mashinkadag’i’
              si’yaqli’ tu’ymeshelerden ibarat boli’p, mag’luwmatlardi’ kirgiziw
              quri’lmasi’ yesaplanadi’ (11-su’wret). Tiykarg’i’ quri’lmalardan
              ti’sqari’, kompyuter basqara alatug’i’n quri’lmalar da bar. Wolar
              kompyuterdin’ ja’rdemshi yamasa qosi’msha qu ri ’lmala ri ’ dep a
              taladi ’. Kompyu te r qosi’msha quri’lmalarsi’z da isley aladi’,
              biraq bul quri’lmalarsi’z mag’luwmatlardi’ basi’p shi’g’ari’w,
              nusqa ali’w yamasa jetkeri p beriwdi a’melge asi’ri’p bolmaydi’
            </li>
          </div>
        </ol>
        <div className="monitor-imgs extra-devices">
          <div className="extra-device">
            <img
              src="https://i.pinimg.com/originals/12/78/2a/12782ac2b8ae20cf43f86afa1f4f6076.png"
              alt=""
              width={150}
            />
            <p>Kompyuter mi’shkasi’</p>
          </div>
          <div className="extra-device">
            <img src="https://pngimg.com/d/scanner_PNG101534.png" alt="" />
            <p>Printer</p>
          </div>
          <div className="extra-device">
            <img src="https://pngimg.com/d/hard_disc_PNG102032.png" alt="" />
            <p>Disk ju’rgiziwshi</p>
          </div>
          <div className="extra-device">
            <img
              src="https://pngimg.com/uploads/scanner/small/scanner_PNG101534.png"
              alt=""
            />
            <p>Skaner</p>
          </div>
          <div className="extra-device">
            <img
              src="https://images.pngnice.com/download/2007/Computer-Speakers-Transparent-PNG.png"
              alt=""
            />
            <p>Ses kolonkalari’</p>
          </div>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>Kompyuter ha’m woni’n’ wazi’ypasi’ haqqi’nda ayti’p berin’.</li>
          <li>
            Jeke kompyuterler qanday tiykarg’i’ quri’lmalardan ibarat ha’m ne
            sebepten tiykarg’i’ dep esaplanadi’?
          </li>
          <li>
            Kompyuterdin’ tiykarg’i’ quri’lmalari’ni’n’ wazi’ypalari’n ayti’p
            berin’
          </li>
          <li>Sistemali’ blok qanday quri’lmalardi’ wo’z ishine aladi’?</li>
          <li>
            Processor ha’m tez yadlardi’n’ wazi’ypasi’n tu’sindirip berin’.
          </li>
          <li>Kompyuterdin’ ja’rdemshi quri’lmalari’na neler kiredi?</li>
          <li>Printer, skanerlerdin’ wazi’ypasi’ neden ibarat?</li>
        </ol>
      </div>
    </div>
  );
};
export default Theme2;
