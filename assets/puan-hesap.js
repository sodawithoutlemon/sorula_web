/* Sorula puan hesabı — uygulamadaki Dart'ın birebir JS karşılığı (6.2.0 B16).
 * Kaynak: sorula_app/lib/helpers/yks_hesap.dart (hesaplaYks, interpolateYksSiralama, yksNet, lgsNet,
 * lgsPuan, lgsDilimYil), kpss_hesap.dart (hesaplaKpssYil, kpssDipnot), home.dart YksSiralamaPanel.
 * Katsayı ve tablolar aşağıdaki yer tutucu yerine puan/altin.json'dan (Dart çıktısı) gömülür; elle kopya yok.
 * Doğrulama: node puan/puan-hesap.test.mjs (Dart'ın hesapladığı örneklerle karşılaştırır). */
(function (kok) {
  "use strict";
  var V = {"yksPuanConfigs":[{"label":"TYT","startingValue":100,"weights":{"tytTurkce":3.3,"tytSosyal":3.4,"tytMatematik":3.3,"tytFen":3.4}},{"label":"Sayısal","startingValue":100,"weights":{"tytTurkce":1.32,"tytSosyal":1.36,"tytMatematik":1.32,"tytFen":1.36,"matematik":3,"fizik":2.86,"kimya":3.08,"biyoloji":3.08}},{"label":"Eşit Ağırlık","startingValue":100,"weights":{"tytTurkce":1.32,"tytSosyal":1.36,"tytMatematik":1.32,"tytFen":1.32,"matematik":3,"turkDiliEdebiyat":3,"tarih1":2.9,"cografya1":3.3}},{"label":"Sözel","startingValue":100,"weights":{"tytTurkce":1.32,"tytSosyal":1.36,"tytMatematik":1.32,"tytFen":1.36,"turkDiliEdebiyat":3,"tarih1":2.8,"cografya1":3.35,"tarih2":2.9,"cografya2":2.9,"felsefe":3,"dinKulturuFelsefe":3.35}},{"label":"Dil","startingValue":100,"weights":{"tytTurkce":1.32,"tytSosyal":1.36,"tytMatematik":1.32,"tytFen":1.36,"yabanciDil":3}}],"yksTabloYil":2026,"yksHam":{"tyt":{"total":2187743,"ranges":[[500,500,5],[480,500,822],[460,480,5524],[440,460,17050],[420,440,37770],[400,420,67394],[380,400,106404],[360,380,155008],[340,360,218156],[320,340,302758],[300,320,417935],[280,300,577094],[260,280,787244],[240,260,1045340],[220,240,1332391],[200,220,1630698],[180,200,1914717],[160,180,2125244],[140,160,2184873],[120,140,2187723],[100,120,2187743]]},"sayisal":{"total":1135718,"ranges":[[500,500,1],[480,500,1453],[460,480,8786],[440,460,22370],[420,440,39624],[400,420,58728],[380,400,78806],[360,380,100553],[340,360,125045],[320,340,153304],[300,320,187034],[280,300,228643],[260,280,279885],[240,260,344536],[220,240,430074],[200,220,549793],[180,200,721488],[160,180,923753],[140,160,1078515],[120,140,1134006],[100,120,1135718]]},"sozel":{"total":1085698,"ranges":[[500,500,1],[480,500,10],[460,480,74],[440,460,214],[420,440,560],[400,420,1418],[380,400,3936],[360,380,10259],[340,360,23653],[320,340,47292],[300,320,86560],[280,300,148959],[260,280,238848],[240,260,360487],[220,240,515916],[200,220,699304],[180,200,873860],[160,180,998826],[140,160,1065157],[120,140,1084720],[100,120,1085698]]},"esitAgirlik":{"total":1421290,"ranges":[[500,500,1],[480,500,52],[460,480,307],[440,460,874],[420,440,2097],[400,420,4545],[380,400,9486],[360,380,23452],[340,360,50608],[320,340,89520],[300,320,140784],[280,300,210499],[260,280,308127],[240,260,440752],[220,240,615366],[200,220,832251],[180,200,1069239],[160,180,1272506],[140,160,1391240],[120,140,1420558],[100,120,1421290]]},"dil":{"total":132826,"ranges":[[500,500,5],[480,500,118],[460,480,628],[440,460,1795],[420,440,3632],[400,420,6683],[380,400,11576],[360,380,18265],[340,360,26469],[320,340,35020],[300,320,43883],[280,300,52590],[260,280,61992],[240,260,72025],[220,240,82982],[200,220,94735],[180,200,107579],[160,180,120099],[140,160,128950],[120,140,132443],[100,120,132826]]}},"yksYer":{"tyt":{"total":2187743,"ranges":[[550,560,112],[530,550,2045],[510,530,8638],[490,510,22600],[470,490,45313],[450,470,76021],[430,450,115071],[410,430,163211],[390,410,225038],[370,390,305570],[350,370,412011],[330,350,553526],[310,330,735519],[290,310,961261],[270,290,1219171],[250,270,1499060],[230,250,1782951],[210,230,2033331],[190,210,2166477],[170,190,2186977],[150,170,2187734],[130,150,2187742],[115,130,2187743]]},"sayisal":{"total":1135718,"ranges":[[550,560,154],[530,550,3500],[510,530,12887],[490,510,27402],[470,490,44919],[450,470,63669],[430,450,83511],[410,430,105112],[390,410,129485],[370,390,157778],[350,370,191247],[330,350,232317],[310,330,282213],[290,310,344726],[270,290,425443],[250,270,533920],[230,250,681176],[210,230,858167],[190,210,1019046],[170,190,1117304],[150,170,1135198],[130,150,1135713],[115,130,1135718]]},"sozel":{"total":1085698,"ranges":[[550,560,4],[530,550,14],[510,530,69],[490,510,221],[470,490,606],[450,470,1566],[430,450,4058],[410,430,10184],[390,410,22750],[370,390,45237],[350,370,82479],[330,350,140496],[310,330,223004],[290,310,333238],[270,290,474443],[250,270,642816],[230,250,814264],[210,230,953036],[190,210,1040347],[170,190,1078859],[150,170,1085505],[130,150,1085697],[115,130,1085698]]},"esitAgirlik":{"total":1421290,"ranges":[[550,560,12],[530,550,98],[510,530,394],[490,510,1118],[470,490,2482],[450,470,5299],[430,450,12363],[410,430,29700],[390,410,58772],[370,390,97839],[350,370,148570],[330,350,215631],[310,330,307918],[290,310,429479],[270,290,585271],[250,270,775922],[230,250,990764],[210,230,1196809],[190,210,1347025],[170,190,1412649],[150,170,1421093],[130,150,1421289],[115,130,1421290]]},"dil":{"total":132826,"ranges":[[550,560,14],[530,550,231],[510,530,942],[490,510,2252],[470,490,4241],[450,470,7472],[430,450,12254],[410,430,18566],[390,410,26352],[370,390,34585],[350,370,43129],[330,350,51784],[310,330,60948],[290,310,70670],[270,290,81109],[250,270,92274],[230,250,104127],[210,230,116152],[190,210,125789],[170,190,131233],[150,170,132714],[130,150,132825],[115,130,132826]]}},"lgs":{"tabanPuan":178.06,"weights":{"turkce":4.52,"matematik":4.65,"fen":4.12,"inkilap":1.95,"din":1.92,"yabanciDil":1.9}},"lgsTabloYil":2024,"lgsDilim":[[494.5234,0.07],[488.637,0.27],[487.6466,0.34],[478.2375,0.9],[477.2732,1.01],[476.2837,1.11],[475.2645,1.17],[473.6475,1.31],[471.7965,1.5],[468.7673,1.82],[467.3099,1.96],[464.4201,2.31],[462.3874,2.55],[460.843,2.75],[459.0718,3],[456.5689,3.36],[455.0763,3.52],[451.5081,4.03],[450.1653,4.21],[450.0746,4.23],[449.475,4.31],[446.8843,4.71],[445.5013,4.82],[443.6208,5.2],[443.3859,5.24],[443.1699,5.27],[437.5939,6.16],[437.4764,6.17],[437.4453,6.18],[436.1792,6.39],[432.8762,6.93],[432.7517,6.96],[432.7249,6.97],[431.6667,7.12],[431.5781,7.13],[431.4415,7.15],[430.66,7.29],[429.2305,7.54],[423.5352,8.51],[423.2419,8.56],[422.7343,8.65],[422.2254,8.74],[422.1072,8.76],[421.2943,8.9],[420.9409,8.96],[417.0182,9.66],[416.2882,9.79],[414.8322,10.04],[414.2151,10.16],[410.7222,10.8],[409.9854,10.94],[408.8482,11.16],[408.2105,11.27],[408.0844,11.3],[407.3174,11.44],[404.1214,11.98],[402.6868,12.32],[400.4767,12.74],[400.3301,12.77],[399.4219,12.95],[397.965,13.24],[394.9288,13.85],[394.4767,13.94],[393.3547,14.17],[391.7369,14.51],[391.1587,14.62],[388.9985,15.06],[387.8341,15.31],[386.2977,15.63],[385.3379,15.98],[384.4624,16.07],[381.2549,16.7],[380.7502,16.81],[380.4417,16.87],[378.161,17.36],[373.1051,18.46],[372.7997,18.53],[372.0554,18.69],[371.1719,18.9],[369.6573,19.24],[369.1586,19.35],[367.6031,19.7],[366.4922,19.96],[366.4258,19.97],[365.5513,20.17],[362.4381,20.9],[361.6317,21.08],[359.7448,21.52],[358.4586,21.83],[354.4394,22.79],[353.3368,23.06],[353.2075,23.1],[352.2837,23.32],[351.5232,23.51],[344.5257,25.26],[343.6824,25.47],[341.6151,25.99],[340.1488,26.37],[339.6114,26.51],[335.8217,27.52],[334.4867,27.88],[334.109,27.98],[325.9536,30.21],[321.0535,31.6],[320.0722,31.89],[319.4573,32.06],[318.837,32.25],[313.4585,33.85],[313.0134,33.99],[312.0111,34.28],[311.2513,34.52],[309.5479,35.04],[308.0337,35.51],[305.1554,36.43],[303.1317,37.08],[302.0649,37.43],[299.7416,38.2],[295.5135,39.6],[294.3023,40.02],[293.2178,40.41],[284.0061,43.75],[283.9713,43.77],[281.5342,44.7],[281.1836,44.84],[280.597,45.07],[280.3672,45.16],[276.7686,46.6],[276.7118,46.62],[276.2792,46.79],[274.7571,47.42],[271.0488,48.97],[269.0908,49.83],[267.9392,50.33],[265.8994,51.23],[263.6019,52.27],[259.5261,54.19],[257.8104,55.05],[257.0815,55.41],[254.2795,56.8],[252.5327,57.7],[249.7575,59.16],[248.4521,59.84],[248.2576,59.94],[245.1774,61.65],[244.8793,61.81],[244.4781,62.04],[240.7741,64.17],[240.5891,64.28],[237.097,66.37],[234.369,68.03],[233.6084,68.5],[232.4789,69.22],[232.4604,69.23],[231.6283,69.76],[231.4836,69.85],[231.1133,70.1],[223.9779,74.8],[222.8482,75.57],[222.5579,75.76],[219.498,77.85],[218.3099,78.65],[215.2499,80.74],[208.9919,84.97],[206.6869,86.49],[206.5055,86.6],[204.3201,87.99],[202.998,88.8],[200.657,90.17],[199.2414,90.98],[198.4628,91.41],[196.4774,92.45],[194.261,93.54],[193.8709,93.73],[193.5481,93.87],[187.5674,96.17],[186.3996,96.54],[182.8318,97.49],[181.563,97.78],[181.5152,97.79],[181.1861,97.86],[181.1221,97.87],[179.45,98.22],[170.9442,99.31],[165.3121,99.66],[159.577,99.82],[155.4157,99.9]],"kpssAyar":{"surum":1,"guncelleme":"2026-10-24","yillar":{"2020":{"lisans":{"gy":{"ort":19.393,"ss":9.211},"gk":{"ort":19.451,"ss":11.449},"alfa":null,"beta":null,"kalibre":false,"cift":1,"maksHata":null,"kaynakUrl":"https://dokuman.osym.gov.tr/pdfdokuman/2020/KPSS/LISANS/sayisalbilgiler22102020.pdf"}},"2021":{"lisans":{"gy":{"ort":20.513,"ss":8.563},"gk":{"ort":22.215,"ss":11.496},"alfa":null,"beta":null,"kalibre":false,"cift":0,"maksHata":null,"kaynakUrl":"https://dokuman.osym.gov.tr/pdfdokuman/2021/KPSS/kpss_2021_sayisal_bilgiler_16092021.pdf"}},"2024":{"lisans":{"gy":{"ort":16.97758,"ss":9.13483},"gk":{"ort":19.53294,"ss":10.80818},"alfa":null,"beta":null,"kalibre":false,"cift":1,"maksHata":null,"kaynakUrl":"https://dokuman.osym.gov.tr/pdfdokuman/2024/KPSS/LISANS/sayisal-bilgiler.pdf"}},"2026":{"lisans":{"gy":{"ort":19.43895,"ss":8.86348},"gk":{"ort":20.07724,"ss":12.15079},"alfa":21.854267,"beta":0.88934,"kalibre":true,"cift":9,"maksHata":0.006,"kaynakUrl":"https://dokuman.osym.gov.tr/web/2026/10/2026-kpss-lisans-sinavi-sonuclarina-liskin-sayisal-bilgiler-l38b0s-07100549.pdf"}}}}};

  function yksNet(d, y) { var n = d - y / 4; return n < 0 ? 0 : n; }
  function lgsNet(d, y) { var n = d - y / 3; return n < 0 ? 0 : n; }

  var IDX = { TYT: 0, SAY: 1, EA: 2, "SÖZ": 3, "DİL": 4 };
  var DAL = ["tyt", "sayisal", "esitAgirlik", "sozel", "dil"];
  var YIL_T = V.yksTabloYil;

  // yks_hesap.dart interpolateYksSiralama
  function siralama(puan, dal) {
    if (puan <= 0) return dal.total;
    var r = dal.ranges;
    for (var i = 0; i < r.length; i++) {
      if (puan >= r[i][0] && puan <= r[i][1]) {
        if (i === 0) return r[i][2];
        var once = r[i - 1][2], simdi = r[i][2];
        var aralik = r[i][1] - r[i][0];
        if (aralik === 0) aralik = 1;
        var puanBasinaKisi = (simdi - once) / aralik;
        var s = simdi - Math.trunc((puan - r[i][0]) * puanBasinaKisi);
        return s < 1 ? 1 : s;
      }
    }
    return dal.total;
  }

  // Ham puan. n: katsayı anahtarlı netler (tytTurkce, tytSosyal, tytMatematik, tytFen, matematik, fizik,
  // kimya, biyoloji, turkDiliEdebiyat, tarih1, tarih2, cografya1, cografya2, felsefe, dinKulturuFelsefe,
  // yabanciDil). Toplama sırası hesaplaYks ile aynı.
  function yksHam(tur, n) {
    var c = V.yksPuanConfigs[IDX[tur] || 0], w = c.weights;
    var g = function (k) { return n[k] || 0; };
    var k = function (a) { return w[a] || 0; };
    var t = c.startingValue;
    t += g("tytTurkce") * k("tytTurkce");
    t += g("tytSosyal") * k("tytSosyal");
    t += g("tytMatematik") * k("tytMatematik");
    t += g("tytFen") * k("tytFen");
    if (tur === "SAY") {
      t += g("matematik") * k("matematik"); t += g("fizik") * k("fizik");
      t += g("kimya") * k("kimya"); t += g("biyoloji") * k("biyoloji");
    } else if (tur === "EA") {
      t += g("matematik") * k("matematik"); t += g("turkDiliEdebiyat") * k("turkDiliEdebiyat");
      t += g("tarih1") * k("tarih1"); t += g("cografya1") * k("cografya1");
    } else if (tur === "SÖZ") {
      t += g("turkDiliEdebiyat") * k("turkDiliEdebiyat");
      t += g("tarih1") * k("tarih1"); t += g("tarih2") * k("tarih2");
      t += g("cografya1") * k("cografya1"); t += g("cografya2") * k("cografya2");
      t += g("felsefe") * k("felsefe"); t += g("dinKulturuFelsefe") * k("dinKulturuFelsefe");
    } else if (tur === "DİL") {
      t += g("yabanciDil") * k("yabanciDil");
    }
    return t > 500 ? 500 : t;
  }

  function yuvarla2(x) { return Number(x.toFixed(2)); }

  // Panel (home.dart YksSiralamaPanel) biçimi: ham puan, yerleştirme (OBP), iki sıralama.
  function yks(tur, n, diploma, kirik) {
    var ham = yksHam(tur, n);
    var yer = ham + (diploma || 0) * (kirik ? 0.3 : 0.6);
    if (yer > 560) yer = 560;
    var dal = DAL[IDX[tur] || 0];
    return {
      hamPuan: ham, yerlestirmePuani: yer,
      hamSiralama: siralama(ham, V.yksHam[dal]),
      yerlestirmeSiralamasi: siralama(yer, V.yksYer[dal]),
      toplamAday: V.yksHam[dal].total, tabloYili: YIL_T,
    };
  }

  // yks_hesap.dart hesaplaYks: "TYT Türkçe" gibi önekli netler; SÖZ'de tek Tarih/Coğrafya alanı
  // soru sayısı oranıyla (Tarih 10+11, Coğrafya 11+6) bölünmüş katsayılara dağıtılır.
  function hesaplaYks(tur, netler, diploma, kirik) {
    var g = function (a) { return netler[a] || 0; };
    var n = {
      tytTurkce: g("TYT Türkçe"), tytSosyal: g("TYT Sosyal Bilgiler"),
      tytMatematik: g("TYT Matematik"), tytFen: g("TYT Fen Bilimleri"),
      matematik: g("AYT Matematik"), fizik: g("AYT Fizik"), kimya: g("AYT Kimya"), biyoloji: g("AYT Biyoloji"),
      turkDiliEdebiyat: g("AYT Edebiyat"), tarih1: g("AYT Tarih"), cografya1: g("AYT Coğrafya"),
      felsefe: g("AYT Felsefe"), dinKulturuFelsefe: g("AYT Din Kültürü ve Ahlak Bilgisi"),
      yabanciDil: g("AYT İngilizce"),
    };
    if (tur === "SÖZ") {
      var ta = g("AYT Tarih"), co = g("AYT Coğrafya");
      n.tarih1 = ta * (10 / 21); n.tarih2 = ta * (11 / 21);
      n.cografya1 = co * (11 / 17); n.cografya2 = co * (6 / 17);
    }
    var s = yks(tur, n, diploma, kirik);
    return {
      hamPuan: yuvarla2(s.hamPuan), yerlestirmePuani: yuvarla2(s.yerlestirmePuani),
      hamSiralama: s.hamSiralama, yerlestirmeSiralamasi: s.yerlestirmeSiralamasi,
    };
  }

  // LGS (lgsPuan + lgsDilimYil; home.dart LgsSiralamaPanel ile aynı)
  function lgsPuan(n) {
    var p = V.lgs.tabanPuan;
    for (var a in V.lgs.weights) p += (n[a] || 0) * V.lgs.weights[a];
    return p > 500 ? 500 : p;
  }
  function lgsDilim(puan) {
    var t = V.lgsDilim;
    if (!t.length) return 100;
    if (puan >= t[0][0]) return t[0][1];
    if (puan <= t[t.length - 1][0]) return t[t.length - 1][1];
    for (var i = 0; i < t.length - 1; i++) {
      var ust = t[i], alt = t[i + 1];
      if (puan <= ust[0] && puan >= alt[0]) {
        var oran = (ust[0] - puan) / (ust[0] - alt[0]);
        return ust[1] + oran * (alt[1] - ust[1]);
      }
    }
    return 100;
  }

  // KPSS (kpss_hesap.dart)
  var DUZEY = { lisans: { ad: "Lisans", tur: "P3" }, onlisans: { ad: "Önlisans", tur: "P93" }, ortaogretim: { ad: "Ortaöğretim", tur: "P94" } };
  var KY = (function () {
    var y = {};
    var ham = (V.kpssAyar && V.kpssAyar.yillar) || {};
    for (var yil in ham) {
      for (var d in ham[yil]) {
        var a = ham[yil][d];
        if (!DUZEY[d] || !a || !a.gy || !a.gk || !(a.gy.ss > 0) || !(a.gk.ss > 0)) continue;
        var kal = a.kalibre === true && typeof a.alfa === "number" && typeof a.beta === "number";
        (y[yil] = y[yil] || {})[d] = { gy: a.gy, gk: a.gk, alfa: kal ? a.alfa : null, beta: kal ? a.beta : null };
      }
    }
    return y;
  })();
  function yillarDuzey(d) {
    return Object.keys(KY).map(Number).filter(function (y) { return KY[y][d]; }).sort(function (a, b) { return b - a; });
  }
  function enYakin(yillar, hedef) {
    var en = null;
    yillar.forEach(function (y) {
      if (en === null) { en = y; return; }
      var f = Math.abs(y - hedef), ef = Math.abs(en - hedef);
      if (f < ef || (f === ef && y > en)) en = y;
    });
    return en;
  }
  function kpssSP(net, t) { return net < 1 ? null : 50 + 10 * (net - t.ort) / t.ss; }
  function kpss(duzey, yil, gyNet, gkNet) {
    var s = { duzey: duzey, istenenYil: yil, puan: null, neden: null, istatistikYili: null, kalibrasyonYili: null };
    var ist = enYakin(yillarDuzey(duzey), yil);
    if (ist === null) { s.neden = "veriYok"; return s; }
    s.istatistikYili = ist;
    var a = KY[ist][duzey];
    var kal = a.alfa !== null ? ist : enYakin(yillarDuzey(duzey).filter(function (y) { return KY[y][duzey].alfa !== null; }), yil);
    if (kal === null) { s.neden = "kalibrasyonYok"; return s; }
    s.kalibrasyonYili = kal;
    var gy = kpssSP(gyNet, a.gy), gk = kpssSP(gkNet, a.gk);
    if (gy === null || gk === null) { s.neden = "netYetersiz"; return s; }
    var k = KY[kal][duzey];
    var ham = k.alfa + k.beta * (0.5 * gy + 0.5 * gk);
    s.puan = Math.min(100, Math.max(0, ham));
    return s;
  }
  function kpssEnYeniYil(d) { var l = yillarDuzey(d); return l.length ? l[0] : null; }
  function kpssDipnot(s) {
    var ad = DUZEY[s.duzey].ad;
    if (s.puan === null) {
      if (s.neden === "netYetersiz") return "Testlerden birinde 1 netin altında kalınca KPSS puanı hesaplanmaz (ÖSYM kuralı).";
      if (s.neden === "veriYok") return ad + " için ÖSYM verisi henüz yok; açıklanınca tahmin kendiliğinden eklenir.";
      return ad + " için tahmin katsayısı henüz yok; resmî sonuçlar gelince eklenir.";
    }
    if (s.istatistikYili === s.istenenYil && s.kalibrasyonYili === s.istenenYil)
      return s.istenenYil + " ÖSYM test ortalamalarıyla tahmini puan; resmî puan ÖSYM'nindir.";
    var kaynak = s.istatistikYili === s.kalibrasyonYili
      ? s.istatistikYili + " verilerine"
      : s.istatistikYili + " test ortalamalarına ve " + s.kalibrasyonYili + " katsayılarına";
    return "Tahmin " + kaynak + " dayanır; birkaç puan sapabilir.";
  }

  var api = {
    yksNet: yksNet, lgsNet: lgsNet, yks: yks, hesaplaYks: hesaplaYks, siralama: siralama,
    lgsPuan: lgsPuan, lgsDilim: lgsDilim, lgsTabloYili: V.lgsTabloYil,
    kpss: kpss, kpssDipnot: kpssDipnot, kpssEnYeniYil: kpssEnYeniYil, KPSS_DUZEY: DUZEY,
    yksTabloYili: YIL_T, yksPuanConfigs: V.yksPuanConfigs,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else kok.SorulaPuan = api;
})(this);
