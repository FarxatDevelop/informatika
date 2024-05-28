import React from "react";
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
        <h3>3-sabaq. Kompyuterdi basqari’w programmalari’</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"> </span>
          <p>
            Aldi’ng’i’ temada kompyuterdin’ tiykarg’i’ ha’m ayi’ri’m qosi’msha
            quri’lmalari’, wolardi’n’ wazi’ypalari’ menen tani’sti’q.
            Kompyuterdin’ tiykarg’i’ ha’m qosi’msha quri’lmalari’
            uluwmalasti’ri’li’p <b>qatti’ bo’lim</b> (<i>ingl</i>.{" "}
            <b>Hardware, hard</b> – qatti’, <b>ware</b> – buyi’m) dep ataladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Biraq, kompyuterlerdin’ islewi ushi’n bul quri’lmalardi’n’ wo’zi
            jetkilikli yemes. Kompyuter islewi ushi’n buyri’qlar ha’m
            ko’rsetpeler, yag’ni’y kompyuter programmalari’ kerek boladi’.
            <b> Kompyuter programmalari’</b> – kompyuter tu’sinetug’i’n tilde
            jazi’lg’an buyri’q ha’m ko’rsetpelerdin’ ta’rtipli izbe-izligi
            boli’p tabi’ladi’.
          </p>
        </div>
        <div className="subtitle">
          <h3>Kompyuter programmalari’ o’z gezeginde:</h3>
        </div>
        <ol>
          <li>Basqari’w programmalari’ (operacion sistemalar)</li>
          <li>Tekst penen islew programmalari’</li>
          <li>Su’wret, si’zi’lmalar menen islew programmalari’</li>
          <li>
            Esap-sanaqlardi’ wori’nlawshi’ programmalar ha’m basqa tu’rli
            programmalardan ibarat boli’p tabi’ladi’
          </li>
        </ol>
        <div className="text">
          <span className="provel"></span>
          <p>
            Bunday progammalardi’n’ toplami’ programmali’q ta’miynat (
            <i>ingl</i>. <b>Software, soft</b> – jumsaq, <b>ware</b> – buyi’m)
            dep ataladi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Programmali’q ta’miynatti’n’ tiykarg’i’ bo’limi
            <b> – operacion sistema</b>
            boli’p tabi’ladi’. Operacion sistema arnawli’ programmalar toplami’
            boli’p, kompyuterdi basqari’w ha’m de kompyuter ha’m adam
            wortasi’nda baylani’s wornati’w wazi’ypalari’n atqaradi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Tekst jarati’w, su’wret sali’w, yesaplaw, mag’luwmat jetkerip beriw
            si’yaqli’ wazi’ypalar arnawli’ <b>a’meliy programmalar </b>
            ja’rdeminde a’melge asi’ri’ladi’
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Zamanago’y kompyuter ushi’n <b>UNIX, LINUX, WINDOWS, MacOS</b>{" "}
            si’yaqli’ oparacion sistemalar jarati’lg’an. Olardi’ to’mendegi
            arnawli’ belgiler arqali’ bilip ali’w mu’mkin:
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img
              src="https://www.pngall.com/wp-content/uploads/2/Windows-Logo.png"
              alt=""
            />
            <h4 className="operation-sistem-name">Windows</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://iconape.com/wp-content/files/pd/182970/svg/182970.svg"
              alt=""
            />
            <h4>Unix</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://seeklogo.com/images/A/apple-mac-os-logo-EC1F5EA25E-seeklogo.com.png"
              alt=""
            />
            <h4>MacOS</h4>
          </div>
          <div className="operation-sistem">
            <img src="https://pngimg.com/d/linux_PNG9.png" alt="" />
            <h4>Linux</h4>
          </div>
        </div>
        <div className="subtitle">
          <h3>Windows operacion sistemasi’</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Windows</b> operacion sistemasi’ Microsoft korporaciyasi’
            ta’repinen jarati’lg’an boli’p, kompyuter paydalani’wshi’lari’
            arasi’nda yen’ ko’p qollani’latug’i’n basqari’w programmasi’nan biri
            boli’p yesaplanadi’.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>Windows</b> <i>inglis</i> tilinen ali’ng’an boli’p,
            <b> «aynalar», «ko’rinisler»</b> degen ma’nisti an’latadi’.
            Operacion sistemani’n’ bunday atali’wi’ ondag’i’ barli’q
            programmalar o’z aldi’na ayna ko’rinisinde ashi’li’wi’nda boli’p
            tabi’ladi’. Bu’gingi ku’nge shekem wolardi’n’ tu’rli versiyalari’
            jarati’lg’an.
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b140052-cc50-4879-9382-26a89a456826/dfom9gw-00d58bcf-c034-4120-874e-76b1c8c08a01.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiMTQwMDUyLWNjNTAtNDg3OS05MzgyLTI2YTg5YTQ1NjgyNlwvZGZvbTlndy0wMGQ1OGJjZi1jMDM0LTQxMjAtODc0ZS03NmIxYzhjMDhhMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mSWL7KD-3FPHqObIFB1ZWZdoOLfOBmkysHKNTTmBrxA"
              alt=""
            />
            <h4 className="operation-sistem-name">Windows 7</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://technogecko.net/wp-content/uploads/2015/06/windows-8-logo.png"
              alt=""
            />
            <h4>Windows 8</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://filestore.community.support.microsoft.com/api/images/7c06f078-b027-434d-8a83-4af7d3d64452?upload=true"
              alt=""
            />
            <h4>Windows 10</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://seeklogo.com/images/W/windows-11-icon-logo-6C39629E45-seeklogo.com.png"
              alt=""
            />
            <h4>Windows 11</h4>
          </div>
        </div>
        <div className="subtitle">
          <h3>Windows jumi’s stoli’</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            Windows operacion sistemasi’ iske tu’sirilgende monitorda payda
            bolatug’i’n ko’rinis «<b>Jumi’s stoli’</b>» «<b>Рабочий стол </b>
            »dep ataladi’. «<b>Jumi’s stoli’</b>»nda paydalani’wshi’larg’a
            za’ru’r bolg’an ha’m tez mu’ra’ja’a’t yetiw kerek bolg’an programma
            yarli’kleri jaylasqan:
          </p>
        </div>
        <div className="imgs operation-sistems">
          <div className="operation-sistem">
            <img
              src="https://s1.iconbird.com/ico/1012/VivaIcons/w256h2561350588229MyComputer.png"
              alt=""
            />
            <h4 className="operation-sistem-name">Мой компьютeр</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://cdn.icon-icons.com/icons2/160/PNG/256/folder_my_documents_22605.png"
              alt=""
            />
            <h4>Мои докумeнты</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://img.icons8.com/fluency/240w/windows-explorer.png"
              alt=""
            />
            <h4>Проводник</h4>
          </div>
          <div className="operation-sistem">
            <img
              src="https://cdn0.iconfinder.com/data/icons/iwindows-by-wwalczyszyn-d3dwi6l/512/Recycle_Bin_Full.png"
              alt=""
            />
            <h4>Корзина</h4>
          </div>
        </div>
        <div className="subtitle">
          <h3>Ataqli’ insanlar</h3>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            <b>«Bill Geyc»</b> ati’ menen tani’lg’an Uilyam Genri Geyc III
            1955-ji’li’ 28-oktyabrde Sietl qalasi’nda advokat ha’m oqi’ti’wshi’
            shan’arag’i’nda tuwi’ladi’. Bill jaslayi’nan ani’q pa’nlerge
            qi’zi’g’adi’. Yadta saqlap qali’w qa’bileti ku’shli bolg’anli’qtan
            klasta o’zlestiriw boyi’nsha 1-ori’nlardi’ iyelep keledi.
          </p>
        </div>
        <div className="text">
          <span className="provel"></span>
          <p>
            13 jasi’nan kompyuter kursi’na bari’p, programmalasti’ri’wg’a
            qi’zi’g’i’p ketedi ha’m dosti’ Poll Allen menen birgelikte
            1975-ji’li’ <b>Microsoft kompaniyasi’n</b> du’zedi. Kompaniyada
            jarati’lg’an MSDOS (Microsoft Disk Operatsion System) operacion
            sistemasi’ wolarg’a ju’da’ u’lken jetiskenlik ali’p keledi.
          </p>
        </div>
        <div className="subtitle">
          <h3>Temag’a tiyisli soraw ha’m tapsi’rmalar</h3>
        </div>
        <ol>
          <li>Kompyuter islewi ushi’n qanday ta’miynatlar za’ru’r?</li>
          <li>
            Kompyuterdin’ programmali’q ta’miynati’na qanday programmalar kiriwi
            mu’mkin?
          </li>
          <li>Programma dep nege ayti’ladi’?</li>
          <li>
            Qaysi’ ka’sip iyeleri kompyuter programmalari’nan ko’birek
            paydalanadi’?
          </li>
          <li>
            Ne ushi’n operacion sistemalari’ basqari’w programmalari’ dep
            ataladi’?
          </li>
          <li>Windows operacion sistemasi’ haqqi’nda mag’luwmat berin’</li>
          <li>Windows jumi’s stoli’ haqqi’nda ayti’p berin’</li>
        </ol>
      </div>
    </div>
  );
};
export default Theme2;
