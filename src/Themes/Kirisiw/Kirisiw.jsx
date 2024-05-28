import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Theme1 = () => {
  return (
    <div className="theme-1 theme-inf">
      <div className="title">
        <Link to="/">
          <button className="back">
            <IoArrowBack />
          </button>
        </Link>
        <h3>Kirisiw</h3>
      </div>
      <div className="subtitle">
        <h3>Hu’rmetli oqi’wshi’lar!</h3>
      </div>
      <div className="theme-information">
        <div className="text">
          <span className="provel"></span>
          <p>
            Ilim ha’m texnika, a’sirese, xabar texnologiyalari’ tez pa’t penen
            rawajlani’p barati’rg’an bul da’wirde ha’rbir insan o’zinin’
            o’mirinde a’hmiyetli bolg’an bilim ha’m ko’nlikpelerge iye boli’wi’
            za’ru’r.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            Erkin o’mirge isenimli qa’dem taslaw, a’tirapi’mi’zda boli’p
            ati’rg’an o’zgerisler ha’m jan’ali’qlar menen ten’be-ten’ qa’dem
            taslap jasaw ushi’n ha’rbir oqi’wshi’ to’mendegi bilim ha’m
            ko’nlikpelerge iye boli’wi’ kerek:
          </p>
        </div>
        <ol>
          <li>jan’a bilimlerdi izlew</li>
          <li>
            tapsi’rma, ma’sele ha’m shi’ni’g’i’wlardi’ sheshiwde doslari’ menen
            birgelikte islese ali’w
          </li>
          <li>
            bilimlerdi iyelew, tapsi’rma, ma’sele ha’m shi’ni’g’i’wlardi’
            sheshiwde kompyuterden paydalani’w
          </li>
        </ol>
        <div className="text">
          <div className="provel"></div>
          <p>
            5-klasta siz birinshi ma’rte «Informatika» pa’nin u’yrenip
            ati’rsi’z. Informatika sabaqlari’nda siz jan’a tu’siniklerdi
            u’yrenesiz, ma’sele ha’m tapsi’rmalardi’ ori’nlawda kompyuterden
            paydalanasi’z.
          </p>
        </div>
        <div className="text">
          <div className="provel"></div>
          <p>
            Informatika pa’ni a’tirapi’n’i’zda, ko’z aldi’n’i’zda boli’p
            ati’rg’an ha’diyselerdi jaqsi’raq tu’siniwge, jan’a bilimlerdi
            iyelewde yen’ jaqi’n ja’rdemshi boli’p qaladi’, degen u’mittemiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme1;
