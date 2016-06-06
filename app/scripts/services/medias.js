'use strict';

/**
 * @ngdoc service
 * @name geomediaApp.medias
 * @description
 * # medias
 * Factory in the geomediaApp.
 */
angular.module('geomediaApp')
  .factory('medias', function () {

    var languages = {
      fr: "French",
      ar: "Arabic",
      en: "English",
      pt: "Portuguese",
      it: "Italian",
      es: "Spanish",
      ca: "Catalan",
      de: "German",
      pl: "Polish"
    }


    var medias = {
      "fr_FRA_20minu_une":  {
        "media_name" : "20 minutes",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "20minu",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.20minutes.fr",
        "url_feed" : "http://www.20minutes.fr/rss/une.xml"
      },
      "ar_EGY_alahra_une":  {
        "media_name" : "Al-Ahram",
        "language" : "ar",
        "country" : "EGY",
        "media_code" : "alahra",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ahram.org.eg/",
        "url_feed" : "http://www.ahram.org.eg/archive/RssXml.aspx?CategoryID=25"
      },
      "ar_EGY_alahra_int":  {
        "media_name" : "Al-Ahram",
        "language" : "ar",
        "country" : "EGY",
        "media_code" : "alahra",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ahram.org.eg/",
        "url_feed" : "http://www.ahram.org.eg/archive/RssXml.aspx?CategoryID=2"
      },
      "ar_ARE_albaya_int":  {
        "media_name" : "Al Bayan",
        "language" : "ar",
        "country" : "ARE",
        "media_code" : "albaya",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.albayan.ae/",
        "url_feed" : "http://www.albayan.ae/1.450?ot=ot.AjaxPageLayout"
      },
      "ar_ARE_albaya_brn":  {
        "media_name" : "Al Bayan",
        "language" : "ar",
        "country" : "ARE",
        "media_code" : "albaya",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.albayan.ae/",
        "url_feed" : "http://www.albayan.ae/1.446?ot=ot.AjaxPageLayout"
      },
      "ar_QAT_aljaze_gen":  {
        "media_name" : "Al Jazeera",
        "language" : "ar",
        "country" : "QAT",
        "media_code" : "aljaze",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.aljazeera.net/portal",
        "url_feed" : "http://www.aljazeera.net/aljazeerarss/3c66e3fb-a5e0-4790-91be-ddb05ec17198/4e9f594a-03af-4696-ab98-880c58cd6718"
      },
      "ar_QAT_aljaze_int":  {
        "media_name" : "Al Jazeera",
        "language" : "ar",
        "country" : "QAT",
        "media_code" : "aljaze",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.aljazeera.net/portal",
        "url_feed" : "http://www.aljazeera.net/aljazeerarss/47e851f7-db55-45b6-8d9b-d54055bec967/0b6b9876-62a7-46b4-be20-8b77d302f9d7"
      },
      "en_XX _africa_gen":  {
        "media_name" : "All Africa",
        "language" : "en",
        "country" : "XX ",
        "media_code" : "africa",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://allafrica.com/",
        "url_feed" : "http://allafrica.com/tools/headlines/rdf/angola/headlines.rdf"
      },
      "en_BLZ_amanda_gen":  {
        "media_name" : "Amandala",
        "language" : "en",
        "country" : "BLZ",
        "media_code" : "amanda",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://amandala.com.bz/",
        "url_feed" : "http://amandala.com.bz/news/feed/"
      },
      "en_SAU_arabnw_int":  {
        "media_name" : "Arab news",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "arabnw",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.arabnews.com",
        "url_feed" : "http://www.arabnews.com/cat/3/rss.xml"
      },
      "en_SAU_arabnw_une":  {
        "media_name" : "Arab news",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "arabnw",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.arabnews.com",
        "url_feed" : "http://www.arabnews.com/rss.xml"
      },
      "en_KWT_arabti_int":  {
        "media_name" : "Arab Times Kuwait",
        "language" : "en",
        "country" : "KWT",
        "media_code" : "arabti",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.arabtimesonline.com/",
        "url_feed" : "http://www.arabtimesonline.com/DesktopModules/DNNArticle/DNNArticleRSS.aspx?moduleid=414&tabid=69&categoryid=51"
      },
      "en_KWT_arabti_une":  {
        "media_name" : "Arab Times Kuwait",
        "language" : "en",
        "country" : "KWT",
        "media_code" : "arabti",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.arabtimesonline.com/",
        "url_feed" : "http://www.arabtimesonline.com/DesktopModules/DNNArticle/DNNArticleRSS.aspx?moduleidx3d-1x26tabidx3d69x26categoryidx3d-1"
      },
      "en_ARM_aravot_gen":  {
        "media_name" : "Aravot (Morning)",
        "language" : "en",
        "country" : "ARM",
        "media_code" : "aravot",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://en.aravot.am",
        "url_feed" : "http://en.aravot.am/feed/"
      },
      "en_ARG_argind_uni":  {
        "media_name" : "argentina independent",
        "language" : "en",
        "country" : "ARG",
        "media_code" : "argind",
        "type_feed" : "Unique",
        "periodicity" : "mensuel",
        "url_media" : "http://www.argentinaindependent.com",
        "url_feed" : "http://www.argentinaindependent.com/feed/"
      },
      "en_JPN_asahis_uni":  {
        "media_name" : "Asahi Shimbun",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "asahis",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://ajw.asahi.com/?iref=comtop_footer",
        "url_feed" : "http://ajw.asahi.com/feed/"
      },
      "en_AUT_austim_gen":  {
        "media_name" : "Austrian Times",
        "language" : "en",
        "country" : "AUT",
        "media_code" : "austim",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://austriantimes.at/",
        "url_feed" : "http://www.austriantimes.at/RSS-Feed/onobase/generatedRssXMLs/news.xml"
      },
      "en_THA_bangko_brn":  {
        "media_name" : "Bangkok Post",
        "language" : "en",
        "country" : "THA",
        "media_code" : "bangko",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.bangkokpost.com",
        "url_feed" : "http://www.bangkokpost.com/rss/data/breakingnews.xml"
      },
      "en_BTN_bhutan_uni":  {
        "media_name" : "Bhutan Observer",
        "language" : "en",
        "country" : "BTN",
        "media_code" : "bhutan",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://bhutanobserver.bt/",
        "url_feed" : "http://bhutanobserver.bt/rss.aspx"
      },
      "en_BRN_borneo_brn":  {
        "media_name" : "Borneo Bulletin",
        "language" : "en",
        "country" : "BRN",
        "media_code" : "borneo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://borneobulletin.brunei-online.com/",
        "url_feed" : "http://borneobulletin.com.bn/feed/"
      },
      "pt_BRA_defato_int":  {
        "media_name" : "Brasil de Fato",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "defato",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire",
        "url_media" : "http://www.brasildefato.com.br",
        "url_feed" : "http://www.brasildefato.com.br/rss_internacional"
      },
      "en_ARG_bueair_uni":  {
        "media_name" : "Buenos Aires Herald",
        "language" : "en",
        "country" : "ARG",
        "media_code" : "bueair",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.buenosairesherald.com",
        "url_feed" : "http://www.buenosairesherald.com/articles/rss.aspx"
      },
      "pt_BRA_cartac_int":  {
        "media_name" : "Carta Capital",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "cartac",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire",
        "url_media" : "http://www.cartacapital.com.br/",
        "url_feed" : "http://www.cartacapital.com.br/internacional/internacional/atom.xml"
      },
      "pt_BRA_cartac_brn":  {
        "media_name" : "Carta Capital",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "cartac",
        "type_feed" : "Breaking news",
        "periodicity" : "hebdomadaire",
        "url_media" : "http://www.cartacapital.com.br/",
        "url_feed" : "http://www.cartacapital.com.br/atom.xml"
      },
      "en_CHN_chinad_int":  {
        "media_name" : "China Daily",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "chinad",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.chinadaily.com.cn",
        "url_feed" : "http://www.chinadaily.com.cn/rss/world_rss.xml"
      },
      "en_ZWE_chroni_int":  {
        "media_name" : "Chronicle",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "chroni",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.chronicle.co.zw",
        "url_feed" : "http://www.chronicle.co.zw/category/s6-demo-section/c45-international-news/feed/"
      },
      "en_ZWE_chroni_gen":  {
        "media_name" : "Chronicle",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "chroni",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.chronicle.co.zw",
        "url_feed" : "http://www.chronicle.co.zw/feed/"
      },
      "pt_BRA_corrio_int":  {
        "media_name" : "Corrieo Braziliense",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "corrio",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.correiobraziliense.com.br",
        "url_feed" : "http://www.correiobraziliense.com.br/rss/noticia/mundo/rss.xml"
      },
      "it_ITA_corrie_int":  {
        "media_name" : "Corriere della Sera",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "corrie",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.corriere.it/",
        "url_feed" : "http://xml.corriereobjects.it/rss/esteri.xml"
      },
      "it_ITA_corrie_gen":  {
        "media_name" : "Corriere della Sera",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "corrie",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.corriere.it/",
        "url_feed" : "http://www.corriere.it/rss/homepage.xml"
      },
      "en_CYP_cyprus_uni":  {
        "media_name" : "Cyprus Mail",
        "language" : "en",
        "country" : "CYP",
        "media_code" : "cyprus",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://cyprus-mail.com/",
        "url_feed" : "http://cyprus-mail.com/feed/"
      },
      "pt_BRA_daglob_int":  {
        "media_name" : "Da Globo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "daglob",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.globo.com/",
        "url_feed" : "http://g1.globo.com/dynamo/mundo/rss2.xml"
      },
      "en_GBR_dailym_brn":  {
        "media_name" : "Daily Mail",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailym",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dailymail.co.uk/home/index.html",
        "url_feed" : "http://www.dailymail.co.uk/news/index.rss"
      },
      "en_GBR_dailym_gen":  {
        "media_name" : "Daily Mail",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailym",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dailymail.co.uk/home/index.html",
        "url_feed" : "http://www.dailymail.co.uk/home/index.rss"
      },
      "en_UGA_dailmo_int":  {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.monitor.co.ug",
        "url_feed" : "http://www.monitor.co.ug/News/World/-/688340/688340/-/view/asFeed/-/4xcc6sz/-/index.xml"
      },
      "en_UGA_dailmo_brn":  {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.monitor.co.ug",
        "url_feed" : "http://www.monitor.co.ug/News/-/688324/688324/-/view/asFeed/-/wiq989/-/index.xml"
      },
      "en_UGA_dailmo_gen":  {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.monitor.co.ug",
        "url_feed" : "http://www.monitor.co.ug/-/691150/691150/-/view/asFeed/-/11emxavz/-/index.xml"
      },
      "en_ATG_dailyo_gen":  {
        "media_name" : "Daily Observer",
        "language" : "en",
        "country" : "ATG",
        "media_code" : "dailyo",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.antiguaobserver.com",
        "url_feed" : "http://www.antiguaobserver.com/feed/"
      },
      "en_ATG_dailyo_int":  {
        "media_name" : "Daily Observer",
        "language" : "en",
        "country" : "ATG",
        "media_code" : "dailyo",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.antiguaobserver.com",
        "url_feed" : "http://www.antiguaobserver.com/?cat=8&feed=rss2"
      },
      "en_GBR_dailyt_int":  {
        "media_name" : "Daily telegraph",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailyt",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.telegraph.co.uk/",
        "url_feed" : "http://www.telegraph.co.uk/news/worldnews/rss"
      },
      "en_AUS_dteleg_brn":  {
        "media_name" : "Daily Telegraph (AUS)",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "dteleg",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dailytelegraph.com.au/",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/dtele_breaking_news_199.xml"
      },
      "en_AUS_dteleg_int":  {
        "media_name" : "Daily Telegraph (AUS)",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "dteleg",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dailytelegraph.com.au/",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/dtele_world_news_204.xml"
      },
      "es_ESP_deiaxx_une":  {
        "media_name" : "DEIA",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "deiaxx",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.deia.com/",
        "url_feed" : "http://www.deia.com/index.php/services/rss"
      },
      "es_ESP_deiaxx_int":  {
        "media_name" : "DEIA",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "deiaxx",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.deia.com/",
        "url_feed" : "http://www.deia.com/index.php/services/rss?seccion=mundo"
      },
      "fr_BEL_derheu_int":  {
        "media_name" : "Dernière Heure",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "derheu",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dhnet.be/",
        "url_feed" : "http://www.dhnet.be/rss/section/actu/monde.xml"
      },
      "fr_BEL_derheu_une":  {
        "media_name" : "Dernière Heure",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "derheu",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dhnet.be/",
        "url_feed" : "http://www.dhnet.be/rss"
      },
      "fr_FRA_dernou_gen":  {
        "media_name" : "Dernières Nouvelles d'Alsace",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "dernou",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dna.fr",
        "url_feed" : "http://www.dna.fr/rss"
      },
      "fr_FRA_dernou_int":  {
        "media_name" : "Dernières Nouvelles d'Alsace",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "dernou",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.dna.fr",
        "url_feed" : "http://www.dna.fr/actualite/france-monde/rss"
      },
      "ca_AND_diaria_uni":  {
        "media_name" : "Diari d'Andorra",
        "language" : "ca",
        "country" : "AND",
        "media_code" : "diaria",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.diariandorra.ad",
        "url_feed" : "http://www.diariandorra.ad/nXml/nXml.php"
      },
      "es_ESP_mallor_int":  {
        "media_name" : "Diario de Mallorca",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "mallor",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.diariodemallorca.es/",
        "url_feed" : "http://www.diariodemallorca.es/elementosInt/rss/7"
      },
      "pt_BRA_nordes_int":  {
        "media_name" : "Diario do Nordeste",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "nordes",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://diariodonordeste.verdesmares.com.br/",
        "url_feed" : "http://diariodonordeste.verdesmares.com.br/feed/internacional-1.784447"
      },
      "pt_BRA_nordes_brn":  {
        "media_name" : "Diario do Nordeste",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "nordes",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://diariodonordeste.verdesmares.com.br/",
        "url_feed" : "http://diariodonordeste.verdesmares.com.br/feed/ultima-hora-1.784440"
      },
      "de_DEU_tagesz_gen":  {
        "media_name" : "Die Tageszeitung (taz)",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "tagesz",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.taz.de",
        "url_feed" : "http://www.taz.de/!p4608;rss/"
      },
      "de_DEU_diewel_int":  {
        "media_name" : "Die Welt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "diewel",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.welt.de",
        "url_feed" : "http://www.welt.de/politik/ausland/?service=Rss"
      },
      "de_DEU_diewel_gen":  {
        "media_name" : "Die Welt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "diewel",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.welt.de",
        "url_feed" : "http://www.welt.de/?service=Rss"
      },
      "es_ESP_confid_int":  {
        "media_name" : "El Confidencial",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "confid",
        "type_feed" : "International",
        "periodicity" : "pure-player",
        "url_media" : "http://www.elconfidencial.com/",
        "url_feed" : "http://rss.elconfidencial.com/mundo/"
      },
      "es_BOL_eldebe_uni":  {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eldeber.com.bo/",
        "url_feed" : "http://www.eldeber.com.bo/rss/"
      },
      "es_BOL_eldebe_int":  {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eldeber.com.bo/",
        "url_feed" : "http://www.eldeber.com.bo/rss/internacional.php"
      },
      "es_BOL_eldebe_brn":  {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eldeber.com.bo/",
        "url_feed" : "http://www.eldeber.com.bo/rss/ultimas-noticias.php"
      },
      "es_BOL_ldiari_une":  {
        "media_name" : "El Diario (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "ldiari",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eldiario.net/",
        "url_feed" : "http://rss.eldiario.net/index.php"
      },
      "es_MEX_diamex_int":  {
        "media_name" : "El Diario (mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "diamex",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.diario.com.mx/",
        "url_feed" : "http://diario.mx/RSS/Internacional"
      },
      "es_MEX_Inform_int":  {
        "media_name" : "El Informador",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "Inform",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.informador.com.mx",
        "url_feed" : "http://rss.informador.com.mx/informador-internacional?format=xml"
      },
      "ar_DZA_elkhab_brn":  {
        "media_name" : "El khabar",
        "language" : "ar",
        "country" : "DZA",
        "media_code" : "elkhab",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elkhabar.com/",
        "url_feed" : "http://www.elkhabar.com/feeds"
      },
      "es_CHL_mercur_brn":  {
        "media_name" : "El mercurio",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "mercur",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.emol.com/",
        "url_feed" : "http://rss.emol.com/rss.asp?canal=0"
      },
      "es_CHL_mercur_int":  {
        "media_name" : "El mercurio",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "mercur",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.emol.com/",
        "url_feed" : "http://rss.emol.com/rss.asp?canal=2"
      },
      "fr_DZA_elmoud_gen":  {
        "media_name" : "El Moudjahid",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elmoud",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elmoudjahid.com/",
        "url_feed" : "http://feeds.feedburner.com/ElmoudjahidFlash?format=xml"
      },
      "es_VEN_lmundo_une":  {
        "media_name" : "El Mundo",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "lmundo",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elmundo.com.ve/",
        "url_feed" : "http://www.elmundo.com.ve/CMSPages/rsssources/emenactualidad.aspx"
      },
      "es_VEN_nation_uni":  {
        "media_name" : "El National",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "nation",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.el-nacional.com/",
        "url_feed" : "http://www.el-nacional.com/rss/"
      },
      "es_ESP_elpais_int":  {
        "media_name" : "El Pais",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "elpais",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://elpais.com/",
        "url_feed" : "http://ep00.epimg.net/rss/internacional/portada.xml"
      },
      "es_ESP_elpais_une":  {
        "media_name" : "El Pais",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "elpais",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://elpais.com/",
        "url_feed" : "http://ep00.epimg.net/rss/elpais/portada.xml"
      },
      "es_ESP_aragon_int":  {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elperiodicodearagon.com/",
        "url_feed" : "http://www.zetaestaticos.com/aragon/rss/4_es.xml"
      },
      "es_ESP_aragon_brn":  {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elperiodicodearagon.com/",
        "url_feed" : "http://www.zetaestaticos.com/aragon/rss/ultimahora_es.xml"
      },
      "es_ESP_aragon_une":  {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elperiodicodearagon.com/",
        "url_feed" : "http://www.zetaestaticos.com/aragon/rss/portada_es.xml"
      },
      "es_ESP_catalu_int":  {
        "media_name" : "El periodico de Catalunya",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "catalu",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elperiodico.com/es/",
        "url_feed" : "http://www.elperiodico.com/es/rss/internacional/rss.xml"
      },
      "es_ESP_catalu_une":  {
        "media_name" : "El periodico de Catalunya",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "catalu",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elperiodico.com/es/",
        "url_feed" : "http://www.elperiodico.com/es/rss/rss_portada.xml"
      },
      "es_MEX_univer_int":  {
        "media_name" : "El Universal",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "univer",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eluniversal.com.mx/",
        "url_feed" : "http://www.eluniversal.com.mx/seccion/5/rss.xml"
      },
      "es_VEN_univer_int":  {
        "media_name" : "El Universal (VEN)",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "univer",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eluniversal.com/",
        "url_feed" : "http://www.eluniversal.com/rss/int_avances.xml"
      },
      "es_VEN_univer_brn":  {
        "media_name" : "El Universal (VEN)",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "univer",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.eluniversal.com/",
        "url_feed" : "http://www.eluniversal.com/rss/avances.xml"
      },
      "fr_DZA_elwata_une":  {
        "media_name" : "El Watan",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elwata",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elwatan.com/",
        "url_feed" : "http://www.elwatan.com/actualite/rss.xml"
      },
      "fr_DZA_elwata_int":  {
        "media_name" : "El Watan",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elwata",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.elwatan.com/",
        "url_feed" : "http://www.elwatan.com/international/rss.xml"
      },
      "en_ARE_emirat_une":  {
        "media_name" : "Emirates 24-7",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "emirat",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.emirates247.com",
        "url_feed" : "http://www.emirates247.com/cmlink/en/rss-feed-gulf-news-bollywood-1.4268?ot=ot.AjaxPageLayout"
      },
      "en_ARE_emirat_int":  {
        "media_name" : "Emirates 24-7",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "emirat",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.emirates247.com",
        "url_feed" : "http://www.emirates247.com/cmlink/en/dubai-chamber-http-emirates247-com-international-1.517977?localLinksEnabled=false"
      },
      "es_ESP_farode_int":  {
        "media_name" : "Faro de vigo",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "farode",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.farodevigo.es/",
        "url_feed" : "http://www.farodevigo.es/elementosInt/rss/7"
      },
      "en_GBR_finati_int":  {
        "media_name" : "Financial Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "finati",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ft.com",
        "url_feed" : "http://www.ft.com/rss/world"
      },
      "en_GBR_finati_gen":  {
        "media_name" : "Financial Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "finati",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ft.com",
        "url_feed" : "http://www.ft.com/rss/home/uk"
      },
      "pt_BRA_folhas_brn":  {
        "media_name" : "Folha de S. Paulo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "folhas",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www1.folha.uol.com.br/",
        "url_feed" : "http://feeds.folha.uol.com.br/emcimadahora/rss091.xml"
      },
      "pt_BRA_folhas_int":  {
        "media_name" : "Folha de S. Paulo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "folhas",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www1.folha.uol.com.br/",
        "url_feed" : "http://feeds.folha.uol.com.br/mundo/rss091.xml"
      },
      "en_BRA_folhen_int":  {
        "media_name" : "Folha de S. Paulo (English Version)",
        "language" : "en",
        "country" : "BRA",
        "media_code" : "folhen",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www1.folha.uol.com.br/",
        "url_feed" : "http://feeds.folha.uol.com.br/internacional/en/rss091.xml"
      },
      "en_RUS_strate_uni":  {
        "media_name" : "Fond Strateghitchesckoi Koultoury",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "strate",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.strategic-culture.org/",
        "url_feed" : "http://www.strategic-culture.org/rss.html"
      },
      "fr_FRA_antill_int":  {
        "media_name" : "France Antilles",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "antill",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.guadeloupe.franceantilles.fr",
        "url_feed" : "http://www.guadeloupe.franceantilles.fr/rss/lea_actualite_international.xml"
      },
      "fr_FRA_antill_une":  {
        "media_name" : "France Antilles",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "antill",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.guadeloupe.franceantilles.fr",
        "url_feed" : "http://www.guadeloupe.franceantilles.fr/rss/lea_Une.xml"
      },
      "de_DEU_zeitun_int":  {
        "media_name" : "Frankfurter Allgemeine Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "zeitun",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.faz.net",
        "url_feed" : "http://www.faz.net/rss/aktuell/politik/ausland/"
      },
      "de_DEU_zeitun_gen":  {
        "media_name" : "Frankfurter Allgemeine Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "zeitun",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.faz.net",
        "url_feed" : "http://www.faz.net/rss/aktuell/"
      },
      "de_DEU_anzeig_int":  {
        "media_name" : "General Anzeiger",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "anzeig",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.general-anzeiger-bonn.de/",
        "url_feed" : "http://www.general-anzeiger-bonn.de/?service=rss&p=ga-info.xml"
      },
      "de_DEU_anzeig_brn":  {
        "media_name" : "General Anzeiger",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "anzeig",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.general-anzeiger-bonn.de/",
        "url_feed" : "http://www.general-anzeiger-bonn.de/?service=rss&p=rr-gesamt.xml"
      },
      "de_DEU_google_nat":  {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.de",
        "url_feed" : "http://news.google.de/news?pz=1&cf=all&ned=de&hl=de&topic=n&output=rss"
      },
      "de_DEU_google_int":  {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.de",
        "url_feed" : "http://news.google.de/news?pz=1&cf=all&ned=de&hl=de&topic=w&output=rss"
      },
      "de_DEU_google_une":  {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.de",
        "url_feed" : "http://news.google.de/news?pz=1&cf=all&ned=de&hl=de&output=rss"
      },
      "es_ARG_google_une":  {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ar",
        "url_feed" : "http://news.google.com.ar/news?pz=1&cf=all&ned=ar&hl=es&output=rss"
      },
      "es_ARG_google_int":  {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ar",
        "url_feed" : "http://news.google.com.ar/news?pz=1&cf=all&ned=ar&hl=es&topic=w&output=rss"
      },
      "es_ARG_google_nat":  {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ar",
        "url_feed" : "http://news.google.com.ar/news?pz=1&cf=all&ned=ar&hl=es&topic=n&output=rss"
      },
      "pt_BRA_google_nat":  {
        "media_name" : "Google News Brésil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.br",
        "url_feed" : "http://news.google.com.br/news?pz=1&cf=all&ned=pt-BR_br&hl=pt&topic=n&output=rss"
      },
      "pt_BRA_google_une":  {
        "media_name" : "Google News Brésil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.br",
        "url_feed" : "http://news.google.com.br/news?pz=1&cf=all&ned=pt-BR_br&hl=pt&output=rss"
      },
      "pt_BRA_google_int":  {
        "media_name" : "Google News Brésil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.br",
        "url_feed" : "http://news.google.com.br/news?pz=1&cf=all&ned=pt-BR_br&hl=pt&topic=w&output=rss"
      },
      "en_USA_google_une":  {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com",
        "url_feed" : "http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&output=rss"
      },
      "en_USA_google_nat":  {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com",
        "url_feed" : "http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&topic=n&output=rss"
      },
      "en_USA_google_int":  {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com",
        "url_feed" : "http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&topic=w&output=rss"
      },
      "fr_FRA_google_nat":  {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.fr/",
        "url_feed" : "http://news.google.fr/news?pz=1&cf=all&ned=fr&hl=fr&topic=n&output=rss"
      },
      "fr_FRA_google_int":  {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.fr/",
        "url_feed" : "http://news.google.fr/news?pz=1&cf=all&ned=fr&hl=fr&topic=w&output=rss"
      },
      "fr_FRA_google_une":  {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.fr/",
        "url_feed" : "http://news.google.fr/news?pz=1&cf=all&ned=fr&hl=fr&output=rss"
      },
      "en_IND_google_une":  {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.in",
        "url_feed" : "http://news.google.co.in/news?pz=1&cf=all&ned=in&hl=en&output=rss"
      },
      "en_IND_google_nat":  {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.in",
        "url_feed" : "http://news.google.co.in/news?pz=1&cf=all&ned=in&hl=en&topic=n&output=rss"
      },
      "en_IND_google_int":  {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.in",
        "url_feed" : "http://news.google.co.in/news?pz=1&cf=all&ned=in&hl=en&topic=w&output=rss"
      },
      "it_ITA_google_nat":  {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.it",
        "url_feed" : "http://news.google.it/news?pz=1&cf=all&ned=it&hl=it&topic=n&output=rss"
      },
      "it_ITA_google_int":  {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.it",
        "url_feed" : "http://news.google.it/news?pz=1&cf=all&ned=it&hl=it&topic=w&output=rss"
      },
      "it_ITA_google_une":  {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.it",
        "url_feed" : "http://news.google.it/news?pz=1&cf=all&ned=it&hl=it&output=rss"
      },
      "fr_MAR_google_int":  {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ma",
        "url_feed" : "http://news.google.co.ma/news?pz=1&cf=all&ned=fr_ma&hl=fr&topic=w&output=rss"
      },
      "fr_MAR_google_une":  {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ma",
        "url_feed" : "http://news.google.co.ma/news?pz=1&cf=all&ned=fr_ma&hl=fr&output=rss"
      },
      "fr_MAR_google_nat":  {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ma",
        "url_feed" : "http://news.google.co.ma/news?pz=1&cf=all&ned=fr_ma&hl=fr&topic=n&output=rss"
      },
      "es_MEX_google_une":  {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.mx",
        "url_feed" : "http://news.google.com.mx/news?pz=1&cf=all&ned=es_mx&hl=es&output=rss"
      },
      "es_MEX_google_nat":  {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.mx",
        "url_feed" : "http://news.google.com.mx/news?pz=1&cf=all&ned=es_mx&hl=es&topic=n&output=rss"
      },
      "es_MEX_google_int":  {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.mx",
        "url_feed" : "http://news.google.com.mx/news?pz=1&cf=all&ned=es_mx&hl=es&topic=w&output=rss"
      },
      "en_NGA_google_nat":  {
        "media_name" : "Google News Nigéria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ng",
        "url_feed" : "http://news.google.com.ng/news?pz=1&cf=all&ned=en_ng&hl=en&topic=n&output=rss"
      },
      "en_NGA_google_int":  {
        "media_name" : "Google News Nigéria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ng",
        "url_feed" : "http://news.google.com.ng/news?pz=1&cf=all&ned=en_ng&hl=en&topic=w&output=rss"
      },
      "en_NGA_google_une":  {
        "media_name" : "Google News Nigéria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ng",
        "url_feed" : "http://news.google.com.ng/news?pz=1&cf=all&ned=en_ng&hl=en&output=rss"
      },
      "en_UGA_google_nat":  {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ug",
        "url_feed" : "http://news.google.co.ug/news?pz=1&cf=all&ned=ug&hl=en&topic=n&output=rss"
      },
      "en_UGA_google_une":  {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ug",
        "url_feed" : "http://news.google.co.ug/news?pz=1&cf=all&ned=ug&hl=en&output=rss"
      },
      "en_UGA_google_int":  {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.ug",
        "url_feed" : "http://news.google.co.ug/news?pz=1&cf=all&ned=ug&hl=en&topic=w&output=rss"
      },
      "en_PAK_google_nat":  {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.pk",
        "url_feed" : "http://news.google.com.pk/news?pz=1&cf=all&ned=en_pk&hl=en&topic=n&output=rss"
      },
      "en_PAK_google_une":  {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.pk",
        "url_feed" : "http://news.google.com.pk/news?pz=1&cf=all&ned=en_pk&hl=en&output=rss"
      },
      "en_PAK_google_int":  {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.pk",
        "url_feed" : "http://news.google.com.pk/news?pz=1&cf=all&ned=en_pk&hl=en&topic=w&output=rss"
      },
      "en_PHL_google_nat":  {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ph",
        "url_feed" : "http://news.google.com.ph/news?pz=1&cf=all&ned=en_ph&hl=en&topic=n&output=rss"
      },
      "en_PHL_google_une":  {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ph",
        "url_feed" : "http://news.google.com.ph/news?pz=1&cf=all&ned=en_ph&hl=en&output=rss"
      },
      "en_PHL_google_int":  {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.com.ph",
        "url_feed" : "http://news.google.com.ph/news?pz=1&cf=all&ned=en_ph&hl=en&topic=w&output=rss"
      },
      "en_GBR_google_nat":  {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.uk",
        "url_feed" : "http://news.google.co.uk/news?pz=1&cf=all&ned=uk&hl=en&topic=n&output=rss"
      },
      "en_GBR_google_une":  {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.uk",
        "url_feed" : "http://news.google.co.uk/news?pz=1&cf=all&ned=uk&hl=en&output=rss"
      },
      "en_GBR_google_int":  {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre",
        "url_media" : "http://news.google.co.uk",
        "url_feed" : "http://news.google.co.uk/news?pz=1&cf=all&ned=uk&hl=en&topic=w&output=rss"
      },
      "en_ISR_haretz_une":  {
        "media_name" : "Haaretz (The Land)",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "haretz",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.haaretz.com",
        "url_feed" : "http://www.haaretz.com/cmlink/1.263335"
      },
      "en_ISR_haretz_int":  {
        "media_name" : "Haaretz (The Land)",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "haretz",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.haaretz.com",
        "url_feed" : "http://www.haaretz.com/cmlink/1.628765"
      },
      "de_DEU_handel_une":  {
        "media_name" : "Handelsblatt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "handel",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.handelsblatt.de",
        "url_feed" : "http://www.handelsblatt.com/contentexport/feed/schlagzeilen"
      },
      "en_AUS_hersun_int":  {
        "media_name" : "Herald Sun",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "hersun",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.heraldsun.com.au/",
        "url_feed" : "http://feeds.news.com.au/heraldsun/rss/heraldsun_news_worldnews_2793.xml"
      },
      "en_AUS_hersun_brn":  {
        "media_name" : "Herald Sun",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "hersun",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.heraldsun.com.au/",
        "url_feed" : "http://feeds.news.com.au/heraldsun/rss/heraldsun_news_breakingnews_2800.xml"
      },
      "en_IND_hindti_brn":  {
        "media_name" : "Hindustan Times",
        "language" : "en",
        "country" : "IND",
        "media_code" : "hindti",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.hindustantimes.com/",
        "url_feed" : "http://feeds.hindustantimes.com/HT-HomePage-TopStories"
      },
      "en_IND_hindti_int":  {
        "media_name" : "Hindustan Times",
        "language" : "en",
        "country" : "IND",
        "media_code" : "hindti",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.hindustantimes.com/",
        "url_feed" : "http://feeds.hindustantimes.com/HT-World"
      },
      "en_ZMB_indeol_int":  {
        "media_name" : "iol",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "indeol",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.iol.co.za/",
        "url_feed" : "http://www.iol.co.za/cmlink/news-world-extended-1.679217"
      },
      "en_ZMB_indeol_une":  {
        "media_name" : "iol",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "indeol",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.iol.co.za/",
        "url_feed" : "http://www.iol.co.za/cmlink/home-page-extended-1.628986"
      },
      "en_JPN_jatime_brn":  {
        "media_name" : "Japan Times",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "jatime",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.japantimes.co.jp/",
        "url_feed" : "http://www.japantimes.co.jp/news/feed/"
      },
      "en_JPN_jatime_int":  {
        "media_name" : "Japan Times",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "jatime",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.japantimes.co.jp/",
        "url_feed" : "http://www.japantimes.co.jp/news_category/world/feed/"
      },
      "en_JOR_jordti_uni":  {
        "media_name" : "Jordan times",
        "language" : "en",
        "country" : "JOR",
        "media_code" : "jordti",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://jordantimes.com/",
        "url_feed" : "http://feeds.feedburner.com/TheJordanTimes-LatestNews?format=xml"
      },
      "pt_BRA_jornal_gen":  {
        "media_name" : "Jornal do Brasil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "jornal",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jb.com.br/",
        "url_feed" : "http://www.jb.com.br/noticias/rss.xml"
      },
      "pt_BRA_jornal_int":  {
        "media_name" : "Jornal do Brasil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "jornal",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jb.com.br/",
        "url_feed" : "http://www.jb.com.br/internacional/noticias/rss.xml"
      },
      "en_ARE_khalej_une":  {
        "media_name" : "Khaleej Times",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "khalej",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.khaleejtimes.com/",
        "url_feed" : "http://www.khaleejtimes.com/services/rss/topstories/rss.xml"
      },
      "en_ARE_khalej_int":  {
        "media_name" : "Khaleej Times",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "khalej",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.khaleejtimes.com/",
        "url_feed" : "http://www.khaleejtimes.com/services/rss/international/rss.xml"
      },
      "es_MEX_cronic_int":  {
        "media_name" : "La cronica de hoy",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "cronic",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.cronica.com.mx/",
        "url_feed" : "http://www.cronica.com.mx/rss/rssSeccion.php?id=3"
      },
      "es_BOL_lajord_une":  {
        "media_name" : "La Jordana (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "lajord",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jornadanet.com",
        "url_feed" : "http://www.jornadanet.com/rss/Portada.xml"
      },
      "es_BOL_lajord_int":  {
        "media_name" : "La Jordana (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "lajord",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jornadanet.com",
        "url_feed" : "http://www.jornadanet.com/rss/Mundo.xml"
      },
      "es_MEX_jormex_gen":  {
        "media_name" : "La Jordana (Mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "jormex",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jornada.unam.mx/",
        "url_feed" : "http://www.jornada.unam.mx/rss/edicion.xml"
      },
      "es_MEX_jormex_int":  {
        "media_name" : "La Jordana (Mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "jormex",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jornada.unam.mx/",
        "url_feed" : "http://www.jornada.unam.mx/rss/mundo.xml"
      },
      "es_ARG_nacion_brn":  {
        "media_name" : "La Nacion",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "nacion",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lanacion.com.ar/",
        "url_feed" : "http://contenidos.lanacion.com.ar/herramientas/rss/origen=2"
      },
      "es_ARG_nacion_int":  {
        "media_name" : "La Nacion",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "nacion",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lanacion.com.ar/",
        "url_feed" : "http://contenidos.lanacion.com.ar/herramientas/rss/categoria_id=7"
      },
      "fr_FRA_nourep_gen":  {
        "media_name" : "la nouvelle republique",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "nourep",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lanouvellerepublique.fr",
        "url_feed" : "http://www.lanouvellerepublique.fr/nr/flux/rss/Toute-zone"
      },
      "es_BOL_patria_int":  {
        "media_name" : "La patria",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "patria",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://lapatriaenlinea.com",
        "url_feed" : "http://lapatriaenlinea.com/rss/Internacional.xml"
      },
      "es_ARG_prensa_int":  {
        "media_name" : "La Prensa",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "prensa",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.laprensa.com.ar/",
        "url_feed" : "http://www.laprensa.com.ar/ResourcesManager.aspx?Resource=Rss.aspx&Rss=7"
      },
      "es_ARG_prensa_une":  {
        "media_name" : "La Prensa",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "prensa",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.laprensa.com.ar/",
        "url_feed" : "http://www.laprensa.com.ar/ResourcesManager.aspx?Resource=Rss.aspx&Rss=8"
      },
      "es_BOL_larazo_gen":  {
        "media_name" : "La Razon",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "larazo",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.la-razon.com/",
        "url_feed" : "http://www.la-razon.com/rss/latest/?contentType=NWS"
      },
      "es_BOL_larazo_int":  {
        "media_name" : "La Razon",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "larazo",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.la-razon.com/",
        "url_feed" : "http://www.la-razon.com/rss/mundo/"
      },
      "es_CHL_tercer_gen":  {
        "media_name" : "La Tercera",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "tercer",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.latercera.com/",
        "url_feed" : "http://www.latercera.com/feed/manager?type=rss&sc=TEFURVJDRVJB&ul=1"
      },
      "es_CHL_tercer_int":  {
        "media_name" : "La Tercera",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "tercer",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.latercera.com/",
        "url_feed" : "http://www.latercera.com/feed/manager?type=rss&sc=TEFURVJDRVJB&citId=9&categoryId=678"
      },
      "es_ARG_vozint_brn":  {
        "media_name" : "La voz del interior",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "vozint",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lavoz.com.ar/",
        "url_feed" : "http://www.lavoz.com.ar/rss.xml"
      },
      "es_ARG_vozint_int":  {
        "media_name" : "La voz del interior",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "vozint",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lavoz.com.ar/",
        "url_feed" : "http://www.lavoz.com.ar/taxonomy/term/5/1/feed"
      },
      "fr_BFA_lefaso_uni":  {
        "media_name" : "Le faso",
        "language" : "fr",
        "country" : "BFA",
        "media_code" : "lefaso",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lefaso.net/",
        "url_feed" : "http://www.lefaso.net/spip.php?page=backend"
      },
      "fr_FRA_figaro_une":  {
        "media_name" : "Le Figaro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "figaro",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lefigaro.fr/",
        "url_feed" : "http://rss.lefigaro.fr/lefigaro/laune"
      },
      "fr_FRA_figaro_int":  {
        "media_name" : "Le Figaro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "figaro",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lefigaro.fr/",
        "url_feed" : "http://www.lefigaro.fr/rss/figaro_international.xml"
      },
      "fr_CAN_jmontr_int":  {
        "media_name" : "Le Journal de Montréal",
        "language" : "fr",
        "country" : "CAN",
        "media_code" : "jmontr",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.journaldemontreal.com/",
        "url_feed" : "http://www.journaldemontreal.com/actualite/monde/rss.xml"
      },
      "fr_CAN_jmontr_brn":  {
        "media_name" : "Le Journal de Montréal",
        "language" : "fr",
        "country" : "CAN",
        "media_code" : "jmontr",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.journaldemontreal.com/",
        "url_feed" : "http://www.journaldemontreal.com/accueil/rss.xml"
      },
      "fr_DZA_lmatin_uni":  {
        "media_name" : "Le Matin",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "lmatin",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lematindz.net/",
        "url_feed" : "http://www.lematindz.net/feed/index.1.rss"
      },
      "fr_MAR_lemati_gen":  {
        "media_name" : "Le Matin (maroc)",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "lemati",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lematin.ma/",
        "url_feed" : "http://feeds.feedburner.com/lematin-ma?format=xml"
      },
      "fr_FRA_lmonde_une":  {
        "media_name" : "Le Monde",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lmonde",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://lemonde.fr",
        "url_feed" : "http://www.lemonde.fr/rss/une.xml"
      },
      "fr_FRA_lmonde_int":  {
        "media_name" : "Le Monde",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lmonde",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://lemonde.fr",
        "url_feed" : "http://rss.lemonde.fr/c/205/f/3052/index.rss"
      },
      "fr_FRA_lepari_int":  {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.leparisien.fr/",
        "url_feed" : "http://rss.leparisien.fr/leparisien/rss/international.xml"
      },
      "fr_FRA_lepari_gen":  {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.leparisien.fr/",
        "url_feed" : "http://www.leparisien.fr/actualites-a-la-une.rss.xml"
      },
      "fr_FRA_lepari_une":  {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.leparisien.fr/",
        "url_feed" : "http://rss.leparisien.fr/leparisien/rss/une.xml"
      },
      "fr_BFA_lepays_uni":  {
        "media_name" : "Le pays",
        "language" : "fr",
        "country" : "BFA",
        "media_code" : "lepays",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lepays.bf",
        "url_feed" : "http://lepays.bf/feed/"
      },
      "fr_LUX_quotid_uni":  {
        "media_name" : "Le Quotidien",
        "language" : "fr",
        "country" : "LUX",
        "media_code" : "quotid",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lequotidien.lu",
        "url_feed" : "http://www.lequotidien.lu/rss"
      },
      "fr_BEL_lesoir_brn":  {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lesoir.be",
        "url_feed" : "http://www.lesoir.be/feed/Actualit%C3%A9/Fil%20Info/destination_principale_block"
      },
      "fr_BEL_lesoir_une":  {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lesoir.be",
        "url_feed" : "http://www.lesoir.be/feed/La%20Une/destination_une_block/"
      },
      "fr_BEL_lesoir_int":  {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lesoir.be",
        "url_feed" : "http://www.lesoir.be/feed/Actualit%C3%A9/Monde/destination_principale_block"
      },
      "fr_DZA_xpress_brn":  {
        "media_name" : "L'Expression",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "xpress",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lexpressiondz.com",
        "url_feed" : "http://www.lexpressiondz.com/feed/linformation_en_continue/index.1.rss"
      },
      "fr_DZA_xpress_int":  {
        "media_name" : "L'Expression",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "xpress",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lexpressiondz.com",
        "url_feed" : "http://www.lexpressiondz.com/feed/internationale/index.1.rss"
      },
      "fr_FRA_libera_int":  {
        "media_name" : "Libération",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "libera",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.liberation.fr/",
        "url_feed" : "http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/10/"
      },
      "fr_FRA_libera_une":  {
        "media_name" : "Libération",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "libera",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.liberation.fr/",
        "url_feed" : "http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/9/"
      },
      "es_BOL_tiempo_brn":  {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lostiempos.com/",
        "url_feed" : "http://www.lostiempos.com/rss/lostiempos-ultimas.xml"
      },
      "es_BOL_tiempo_int":  {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lostiempos.com/",
        "url_feed" : "http://www.lostiempos.com/rss/lostiempos-internacional.xml"
      },
      "es_BOL_tiempo_une":  {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.lostiempos.com/",
        "url_feed" : "http://www.lostiempos.com/rss/lostiempos-titulares.xml"
      },
      "fr_FRA_metron_une":  {
        "media_name" : "Metro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "metron",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.metrofrance.com",
        "url_feed" : "http://www.metrofrance.com/rss.xml?c=section-news"
      },
      "fr_FRA_metron_brn":  {
        "media_name" : "Metro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "metron",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.metrofrance.com",
        "url_feed" : "http://www.metronews.fr/rss.xml"
      },
      "es_MEX_mileni_gen":  {
        "media_name" : "Milenio",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "mileni",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.milenio.com/",
        "url_feed" : "http://www.milenio.com/rss"
      },
      "de_DEU_mittel_gen":  {
        "media_name" : "Mitteldeutsche Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "mittel",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.mz-web.de/startseite/20639998,20639998.html",
        "url_feed" : "http://www.mz-web.de/startseite/20639998,20639998,view,asFeed.xml"
      },
      "en_BWA_megiwa_gen":  {
        "media_name" : "Mmegi wa Digmang",
        "language" : "en",
        "country" : "BWA",
        "media_code" : "megiwa",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.mmegi.bw",
        "url_feed" : "http://www.mmegi.bw/2013_website/widgets/rss/rss.php?wid=1"
      },
      "en_RUS_moscow_brn":  {
        "media_name" : "Moscow times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "moscow",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.themoscowtimes.com/",
        "url_feed" : "http://www.themoscowtimes.com/rss/news/"
      },
      "en_BHS_nassau_brn":  {
        "media_name" : "Nassau Guardian",
        "language" : "en",
        "country" : "BHS",
        "media_code" : "nassau",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thenassauguardian.com",
        "url_feed" : "http://www.thenassauguardian.com/index.php?option=com_content&view=category&id=3&format=feed&type=rss"
      },
      "en_MYS_newstr_une":  {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nst.com.my",
        "url_feed" : "http://www.nst.com.my/cmlink/top-news-feed-1.3086?localLinksEnabled=false"
      },
      "en_MYS_newstr_uni":  {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nst.com.my",
        "url_feed" : "http://www.nst.com.my/latest.xml"
      },
      "en_MYS_newstr_brn":  {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nst.com.my",
        "url_feed" : "http://www.nst.com.my/cmlink/1.3108"
      },
      "en_UGA_newvis_int":  {
        "media_name" : "New Vision",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "newvis",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.newvision.co.ug",
        "url_feed" : "http://www.newvision.co.ug/feed.aspx?cat_id=2"
      },
      "en_NZL_nzhera_une":  {
        "media_name" : "New Zealand Herald",
        "language" : "en",
        "country" : "NZL",
        "media_code" : "nzhera",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nzherald.co.nz/",
        "url_feed" : "http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"
      },
      "en_NZL_nzhera_int":  {
        "media_name" : "New Zealand Herald",
        "language" : "en",
        "country" : "NZL",
        "media_code" : "nzhera",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nzherald.co.nz/",
        "url_feed" : "http://rss.nzherald.co.nz/rss/xml/nzhrsscid_000000002.xml"
      },
      "de_DEU_nurnbe_uni":  {
        "media_name" : "Nürnberger Nachrichten",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "nurnbe",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nordbayern.de/nuernberger-nachrichten",
        "url_feed" : "http://www.nordbayern.de/cmlink/15.423?cid=2.230&locid=2.1831"
      },
      "ar_SAU_okazsa_int":  {
        "media_name" : "Okaz",
        "language" : "ar",
        "country" : "SAU",
        "media_code" : "okazsa",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.okaz.com.sa/",
        "url_feed" : "http://www.okaz.com.sa/new/rss/f_rss.xml"
      },
      "fr_FRA_ouestf_uni":  {
        "media_name" : "Ouest France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "ouestf",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ouest-france.fr",
        "url_feed" : "http://www.ouest-france.fr/dma-rss_-Toutes-les-DMA-RSS_6346--fils-tous_filDMA.Htm#xtor=RSS-3003"
      },
      "en_PHL_phildy_uni":  {
        "media_name" : "Philippine Daily Inquirer",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "phildy",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.inquirer.com.ph/",
        "url_feed" : "http://www.inquirer.net/fullfeed"
      },
      "en_UGA_redpep_int":  {
        "media_name" : "Red Pepper",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "redpep",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.redpepper.co.ug",
        "url_feed" : "http://www.redpepper.co.ug/?feed=rss2&cat=33"
      },
      "en_UGA_redpep_gen":  {
        "media_name" : "Red Pepper",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "redpep",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.redpepper.co.ug",
        "url_feed" : "http://www.redpepper.co.ug/?feed=rss2"
      },
      "it_ITA_repubb_gen":  {
        "media_name" : "repubblica",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "repubb",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.repubblica.it/",
        "url_feed" : "http://www.repubblica.it/rss/homepage/rss2.0.xml"
      },
      "it_ITA_repubb_int":  {
        "media_name" : "repubblica",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "repubb",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.repubblica.it/",
        "url_feed" : "http://rss.feedsportal.com/c/32275/f/438640/index.rss"
      },
      "en_BRA_riotim_uni":  {
        "media_name" : "Rio Times Online",
        "language" : "en",
        "country" : "BRA",
        "media_code" : "riotim",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://riotimesonline.com/",
        "url_feed" : "http://riotimesonline.com/feed/"
      },
      "en_RUS_russia_int":  {
        "media_name" : "Russia beyond the Headlines",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "russia",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://rbth.co.uk/",
        "url_feed" : "http://rbth.com/xml/international.xml"
      },
      "en_RUS_russia_gen":  {
        "media_name" : "Russia beyond the Headlines",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "russia",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://rbth.co.uk/",
        "url_feed" : "http://rbth.com/xml/index.xml"
      },
      "pl_POL_Rzeczp_une":  {
        "media_name" : "Rzeczpospolita",
        "language" : "pl",
        "country" : "POL",
        "media_code" : "Rzeczp",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.rp.pl/",
        "url_feed" : "http://www.rp.pl/rss/2.html"
      },
      "pl_POL_Rzeczp_int":  {
        "media_name" : "Rzeczpospolita",
        "language" : "pl",
        "country" : "POL",
        "media_code" : "Rzeczp",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.rp.pl/",
        "url_feed" : "http://www.rp.pl/rss/11.html"
      },
      "en_SAU_saudig_uni":  {
        "media_name" : "Saudi Gazette",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "saudig",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.saudigazette.com.sa/",
        "url_feed" : "http://saudigazette.com.sa/rss"
      },
      "en_SAU_saudig_int":  {
        "media_name" : "Saudi Gazette",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "saudig",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.saudigazette.com.sa/",
        "url_feed" : "http://www.saudigazette.com.sa/rss/wr_rss.xml"
      },
      "en_CHN_mopost_brn":  {
        "media_name" : "South China Morning Post",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "mopost",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.scmp.com",
        "url_feed" : "http://www.scmp.com/rss/91/feed"
      },
      "en_CHN_mopost_int":  {
        "media_name" : "South China Morning Post",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "mopost",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.scmp.com",
        "url_feed" : "http://www.scmp.com/rss/5/feed"
      },
      "en_KHM_asiglo_uni":  {
        "media_name" : "Southeast Asia Globe",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "asiglo",
        "type_feed" : "Unique",
        "periodicity" : "mensuel",
        "url_media" : "http://sea-globe.com/",
        "url_feed" : "http://sea-globe.com/feed/"
      },
      "en_ZAF_soweta_gen":  {
        "media_name" : "sowetan",
        "language" : "en",
        "country" : "ZAF",
        "media_code" : "soweta",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.sowetanlive.co.za/",
        "url_feed" : "http://www.sowetanlive.co.za/?service=rss"
      },
      "en_ZAF_soweta_brn":  {
        "media_name" : "sowetan",
        "language" : "en",
        "country" : "ZAF",
        "media_code" : "soweta",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.sowetanlive.co.za/",
        "url_feed" : "http://www.sowetanlive.co.za/news/?service=rss"
      },
      "en_SGP_strtim_brn":  {
        "media_name" : "Straits Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "strtim",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.straitstimes.com",
        "url_feed" : "http://www.straitstimes.com/breaking-news/world/rss.xml"
      },
      "en_SGP_strtim_int":  {
        "media_name" : "Straits Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "strtim",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.straitstimes.com",
        "url_feed" : "http://www.straitstimes.com/news/world/rss.xml"
      },
      "de_DEU_suddeu_gen":  {
        "media_name" : "Süddeutsche  Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "suddeu",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.sueddeutsche.de",
        "url_feed" : "http://suche.sueddeutsche.de/?output=rss"
      },
      "en_SWZ_swazio_uni":  {
        "media_name" : "Swazi Observer",
        "language" : "en",
        "country" : "SWZ",
        "media_code" : "swazio",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.observer.org.sz",
        "url_feed" : "http://www.observer.org.sz/feed/index.rss"
      },
      "en_VNM_thanhn_gen":  {
        "media_name" : "Thanh  Nien (news - english version)",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "thanhn",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thanhniennews.com/",
        "url_feed" : "http://www.thanhniennews.com/rss/home.rss"
      },
      "en_VNM_thanhn_int":  {
        "media_name" : "Thanh  Nien (news - english version)",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "thanhn",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thanhniennews.com/",
        "url_feed" : "http://www.thanhniennews.com/rss/world-region-10.rss"
      },
      "en_AUS_theage_une":  {
        "media_name" : "The Age",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "theage",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theage.com.au/",
        "url_feed" : "http://feeds.theage.com.au/rssheadlines/top.xml"
      },
      "en_AUS_theage_int":  {
        "media_name" : "The Age",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "theage",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theage.com.au/",
        "url_feed" : "http://rss.feedsportal.com/c/34696/fe.ed/feeds.theage.com.au/rssheadlines/world.xml"
      },
      "en_AUS_austra_int":  {
        "media_name" : "the australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "austra",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theaustralian.com.au",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/aus_world_808.xml"
      },
      "en_AUS_austra_brn":  {
        "media_name" : "the australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "austra",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theaustralian.com.au",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/aus_news_807.xml"
      },
      "en_BGD_bangla_int":  {
        "media_name" : "the bangladesh today",
        "language" : "en",
        "country" : "BGD",
        "media_code" : "bangla",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://thebangladeshtoday.com/",
        "url_feed" : "http://thebangladeshtoday.com/international/feed/"
      },
      "en_BGD_bangla_uni":  {
        "media_name" : "the bangladesh today",
        "language" : "en",
        "country" : "BGD",
        "media_code" : "bangla",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://thebangladeshtoday.com/",
        "url_feed" : "http://thebangladeshtoday.com/feed/"
      },
      "en_SGP_busine_gen":  {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.businesstimes.com.sg/",
        "url_feed" : "http://www.businesstimes.com.sg/premium/all/rss.xml"
      },
      "en_SGP_busine_int":  {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.businesstimes.com.sg/",
        "url_feed" : "http://www.businesstimes.com.sg/premium/world/rss.xml"
      },
      "en_SGP_busine_une":  {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.businesstimes.com.sg/",
        "url_feed" : "http://www.businesstimes.com.sg/rss-feed/top-stories"
      },
      "en_KHM_cambdy_uni":  {
        "media_name" : "The Cambodia Daily",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "cambdy",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.cambodiadaily.com",
        "url_feed" : "http://www.cambodiadaily.com/rss/"
      },
      "en_AUS_comail_brn":  {
        "media_name" : "The Courier Mail",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "comail",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.couriermail.com.au/",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/bcm_breaking_news_67.xml"
      },
      "en_AUS_comail_une":  {
        "media_name" : "The Courier Mail",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "comail",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.couriermail.com.au/",
        "url_feed" : "http://feeds.news.com.au/public/rss/2.0/bcm_top_stories_257.xml"
      },
      "en_KEN_dailyn_gen":  {
        "media_name" : "The Daily Nation",
        "language" : "en",
        "country" : "KEN",
        "media_code" : "dailyn",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nation.co.ke",
        "url_feed" : "http://www.nation.co.ke/-/1148/1148/-/view/asFeed/-/vtvnjq/-/index.xml"
      },
      "en_KEN_dailyn_int":  {
        "media_name" : "The Daily Nation",
        "language" : "en",
        "country" : "KEN",
        "media_code" : "dailyn",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nation.co.ke",
        "url_feed" : "http://www.nation.co.ke/News/world/-/1068/1068/-/view/asFeed/-/hswh9v/-/index.xml"
      },
      "en_BRB_dainat_uni":  {
        "media_name" : "The Daily Nation (Barbados)",
        "language" : "en",
        "country" : "BRB",
        "media_code" : "dainat",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nationnews.com/",
        "url_feed" : "http://www.nationnews.com/site/feed/"
      },
      "en_GBR_guardi_brn":  {
        "media_name" : "The Guardian",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "guardi",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theguardian.com/",
        "url_feed" : "http://feeds.theguardian.com/theguardian/uk/rss"
      },
      "en_GBR_guardi_int":  {
        "media_name" : "The Guardian",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "guardi",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.theguardian.com/",
        "url_feed" : "http://feeds.guardian.co.uk/theguardian/world/rss"
      },
      "en_ARE_gulfto_int":  {
        "media_name" : "The Gulf Today",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "gulfto",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://gulftoday.ae",
        "url_feed" : "http://gulftoday.ae/pages/rss.ashx?id=12"
      },
      "en_ARE_gulfto_brn":  {
        "media_name" : "The Gulf Today",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "gulfto",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://gulftoday.ae",
        "url_feed" : "http://gulftoday.ae/pages/rss.ashx?id=138"
      },
      "en_ZWE_herald_int":  {
        "media_name" : "The Herald",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "herald",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.herald.co.zw",
        "url_feed" : "http://www.herald.co.zw/category/articles/international/feed/"
      },
      "en_ZWE_herald_gen":  {
        "media_name" : "The Herald",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "herald",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.herald.co.zw",
        "url_feed" : "http://www.herald.co.zw/feed/"
      },
      "en_ISR_jepost_int":  {
        "media_name" : "The Jerusalem Post",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "jepost",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jpost.com",
        "url_feed" : "http://www.jpost.com/Rss/RssFeedsPolitiqueetsocial.aspx"
      },
      "en_ISR_jepost_une":  {
        "media_name" : "The Jerusalem Post",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "jepost",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.jpost.com",
        "url_feed" : "http://www.jpost.com/RSS/RssFeedsFrontPage.aspx"
      },
      "en_DEU_tlocal_uni":  {
        "media_name" : "The local",
        "language" : "en",
        "country" : "DEU",
        "media_code" : "tlocal",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thelocal.de/",
        "url_feed" : "http://www.thelocal.de/feeds/rss.php"
      },
      "en_USA_latime_une":  {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.latimes.com/",
        "url_feed" : "http://feeds.latimes.com/latimes/news"
      },
      "en_USA_latime_int":  {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.latimes.com/",
        "url_feed" : "http://www.latimes.com/world/rss2.0.xml"
      },
      "en_USA_latime_gen":  {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.latimes.com/",
        "url_feed" : "http://www.latimes.com/rss2.0.xml"
      },
      "en_AUS_mercur_une":  {
        "media_name" : "The Mercury",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mercur",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.themercury.com.au/",
        "url_feed" : "http://www.themercury.com.au/rss/mercury-todays-news.xml"
      },
      "en_DEU_munich_uni":  {
        "media_name" : "The munich eye",
        "language" : "en",
        "country" : "DEU",
        "media_code" : "munich",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.themunicheye.com/",
        "url_feed" : "http://www.themunicheye.com/themunicheye.rss"
      },
      "en_THA_nation_une":  {
        "media_name" : "The Nation",
        "language" : "en",
        "country" : "THA",
        "media_code" : "nation",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nationmultimedia.com/index.php",
        "url_feed" : "http://www.nationmultimedia.com/home/rss/topstories.rss"
      },
      "en_THA_nation_brn":  {
        "media_name" : "The Nation",
        "language" : "en",
        "country" : "THA",
        "media_code" : "nation",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nationmultimedia.com/index.php",
        "url_feed" : "http://www.nationmultimedia.com/home/rss/breakingnews.rss"
      },
      "en_PAK_newint_une":  {
        "media_name" : "The News International",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "newint",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thenews.com.pk/",
        "url_feed" : "http://old.thenews.com.pk/rss/thenews_updates.xml"
      },
      "en_PAK_newint_int":  {
        "media_name" : "The News International",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "newint",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thenews.com.pk/",
        "url_feed" : "http://old.thenews.com.pk/rss/thenews_world.xml"
      },
      "en_USA_nytime_int":  {
        "media_name" : "The New York Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nytime",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nytimes.com",
        "url_feed" : "http://www.nytimes.com/services/xml/rss/nyt/World.xml"
      },
      "en_USA_nytime_gen":  {
        "media_name" : "The New York Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nytime",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nytimes.com",
        "url_feed" : "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
      },
      "en_USA_nyintr_gen":  {
        "media_name" : "The New York Times (International edition)",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nyintr",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.nytimes.com/",
        "url_feed" : "http://www.nytimes.com/services/xml/rss/nyt/InternationalHome.xml"
      },
      "en_ZMB_postzm_uni":  {
        "media_name" : "The Post",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "postzm",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.postzambia.com",
        "url_feed" : "http://www.postzambia.com/post-articles_rss.php?ver=2"
      },
      "en_RUS_petime_une":  {
        "media_name" : "The Saint Petersburg Times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "petime",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.sptimes.ru/",
        "url_feed" : "http://www.themoscowtimes.com/rss/top/"
      },
      "en_RUS_petime_uni":  {
        "media_name" : "The Saint Petersburg Times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "petime",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.sptimes.ru/",
        "url_feed" : "http://feeds.feedburner.com/sptimes"
      },
      "en_KHM_souasi_int":  {
        "media_name" : "The Southeast Asia weekly",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "souasi",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire",
        "url_media" : "http://www.thesoutheastasiaweekly.com/",
        "url_feed" : "http://www.thesoutheastasiaweekly.com/category/world/feed/"
      },
      "en_CAN_starca_gen":  {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com",
        "url_feed" : "http://www.thestar.com/feeds.articles.news.rss"
      },
      "en_CAN_starca_int":  {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com",
        "url_feed" : "http://www.thestar.com/feeds.articles.news.world.rss"
      },
      "en_CAN_starca_une":  {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com",
        "url_feed" : "http://www.thestar.com/feeds.topstories.rss"
      },
      "en_JAM_starjm_brn":  {
        "media_name" : "The Star (Jamaica)",
        "language" : "en",
        "country" : "JAM",
        "media_code" : "starjm",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://jamaica-star.com",
        "url_feed" : "http://jamaica-star.com/feed/news.xml"
      },
      "en_MYS_starmy_int":  {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com.my/",
        "url_feed" : "http://www.thestar.com.my/RSS/News/World"
      },
      "en_MYS_starmy_une":  {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com.my/",
        "url_feed" : "http://www.thestar.com.my/RSS/Editors-Choice/Main"
      },
      "en_MYS_starmy_brn":  {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thestar.com.my/",
        "url_feed" : "http://www.thestar.com.my/RSS/Editors-Choice/News"
      },
      "en_AUS_mohera_une":  {
        "media_name" : "The Sydney Morning Herald",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mohera",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.smh.com.au/",
        "url_feed" : "http://feeds.smh.com.au/rssheadlines/top.xml"
      },
      "en_AUS_mohera_int":  {
        "media_name" : "The Sydney Morning Herald",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mohera",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.smh.com.au/",
        "url_feed" : "http://feeds.smh.com.au/rssheadlines/world.xml"
      },
      "en_GBR_ttimes_brn":  {
        "media_name" : "The Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "ttimes",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thetimes.co.uk/",
        "url_feed" : "http://www.thetimes.co.uk/tto/news/rss"
      },
      "en_GBR_ttimes_int":  {
        "media_name" : "The Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "ttimes",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thetimes.co.uk/",
        "url_feed" : "http://www.thetimes.co.uk/tto/news/world/rss"
      },
      "en_IND_tindia_int":  {
        "media_name" : "The times of India",
        "language" : "en",
        "country" : "IND",
        "media_code" : "tindia",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://timesofindia.indiatimes.com",
        "url_feed" : "http://timesofindia.feedsportal.com/c/33039/f/533917/index.rss"
      },
      "en_IND_tindia_brn":  {
        "media_name" : "The times of India",
        "language" : "en",
        "country" : "IND",
        "media_code" : "tindia",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://timesofindia.indiatimes.com",
        "url_feed" : "http://timesofindia.feedsportal.com/c/33039/f/533965/index.rss"
      },
      "en_BHS_tri242_uni":  {
        "media_name" : "The Tribune 242",
        "language" : "en",
        "country" : "BHS",
        "media_code" : "tri242",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.tribune242.com/",
        "url_feed" : "http://www.tribune242.com/rss/headlines/"
      },
      "en_CAN_vansun_int":  {
        "media_name" : "The Vancouver Sun",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "vansun",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.vancouversun.com",
        "url_feed" : "http://rss.canada.com/get/?F7432"
      },
      "en_CAN_vansun_gen":  {
        "media_name" : "The Vancouver Sun",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "vansun",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.vancouversun.com",
        "url_feed" : "http://rss.canada.com/get/?F229"
      },
      "en_USA_wallst_gen":  {
        "media_name" : "The Wall street journal",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wallst",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://online.wsj.com",
        "url_feed" : "http://online.wsj.com/xml/rss/3_7011.xml"
      },
      "en_USA_wallst_int":  {
        "media_name" : "The Wall street journal",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wallst",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://online.wsj.com",
        "url_feed" : "http://online.wsj.com/xml/rss/3_7085.xml"
      },
      "en_CHN_wsasia_uni":  {
        "media_name" : "The Wall Street Journal Asia",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "wsasia",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://www.wsj-asia.com/",
        "url_feed" : "http://online.wsj.com/xml/rss/3_7013.xml"
      },
      "en_AUS_westau_brn":  {
        "media_name" : "The West Australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "westau",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "https://au.news.yahoo.com/thewest/",
        "url_feed" : "http://d.yimg.com/au.rss.news.yahoo.com/thewest/breaking.xml"
      },
      "en_AUS_westau_int":  {
        "media_name" : "The West Australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "westau",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "https://au.news.yahoo.com/thewest/",
        "url_feed" : "http://d.yimg.com/au.rss.news.yahoo.com/thewest/world.xml"
      },
      "en_NGA_thiday_int":  {
        "media_name" : "This Day",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "thiday",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thisdaylive.com",
        "url_feed" : "http://www.thisdaylive.com/go/search/?search=News+World&contenttype=article&sort=date&output=rss"
      },
      "en_NGA_thiday_brn":  {
        "media_name" : "This Day",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "thiday",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.thisdaylive.com",
        "url_feed" : "http://www.thisdaylive.com/go/search/?search=News&contenttype=article&sort=date&output=rss"
      },
      "en_MLT_tmalta_int":  {
        "media_name" : "times of malta",
        "language" : "en",
        "country" : "MLT",
        "media_code" : "tmalta",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.timesofmalta.com",
        "url_feed" : "http://www.timesofmalta.com/rss/world"
      },
      "en_MLT_tmalta_gen":  {
        "media_name" : "times of malta",
        "language" : "en",
        "country" : "MLT",
        "media_code" : "tmalta",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.timesofmalta.com",
        "url_feed" : "http://www.timesofmalta.com/rss"
      },
      "en_SGP_twoday_brn":  {
        "media_name" : "Today",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "twoday",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien",
        "url_media" : "http://www.todayonline.com",
        "url_feed" : "http://www.todayonline.com/hot-news/feed"
      },
      "en_SGP_twoday_int":  {
        "media_name" : "Today",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "twoday",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.todayonline.com",
        "url_feed" : "http://www.todayonline.com/feed/world"
      },
      "es_VEN_notici_une":  {
        "media_name" : "Ultimas Noticias",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "notici",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.ultimasnoticias.com.ve/",
        "url_feed" : "http://www.ultimasnoticias.com.ve/CMSPages/RSS/Un/Actualidad.aspx"
      },
      "en_USA_USGEOS_gen":  {
        "media_name" : "United States Geological Survey",
        "language" : "en",
        "country" : "USA",
        "media_code" : "USGEOS",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.usgs.gov/",
        "url_feed" : "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.atom"
      },
      "en_USA_usatdy_une":  {
        "media_name" : "USA Today",
        "language" : "en",
        "country" : "USA",
        "media_code" : "usatdy",
        "type_feed" : "Une",
        "periodicity" : "quotidien",
        "url_media" : "http://www.usatoday.com/",
        "url_feed" : "http://rssfeeds.usatoday.com/usatoday-newstopstories&x=1"
      },
      "en_USA_usatdy_int":  {
        "media_name" : "USA Today",
        "language" : "en",
        "country" : "USA",
        "media_code" : "usatdy",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.usatoday.com/",
        "url_feed" : "http://rssfeeds.usatoday.com/usatodaycomworld-topstories&x=1"
      },
      "pt_BRA_vejaxx_gen":  {
        "media_name" : "veja",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "vejaxx",
        "type_feed" : "General",
        "periodicity" : "hebdomadaire",
        "url_media" : "http://veja.abril.com.br/",
        "url_feed" : "http://feeds.feedburner.com/noticiasveja"
      },
      "en_VNM_netbri_int":  {
        "media_name" : "Vietnamnet Bridge",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "netbri",
        "type_feed" : "International",
        "periodicity" : "pure-player",
        "url_media" : "http://english.vietnamnet.vn/",
        "url_feed" : "http://english.vietnamnet.vn/rss/world-news.rss"
      },
      "en_VNM_vnnews_gen":  {
        "media_name" : "Vietnam News",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "vnnews",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://vietnamnews.vn/",
        "url_feed" : "http://vietnamnews.feedsportal.com/c/35237/f/655031/index.rss"
      },
      "en_USA_wapost_int":  {
        "media_name" : "Washington Post",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wapost",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://www.washingtonpost.com/",
        "url_feed" : "http://feeds.washingtonpost.com/rss/world"
      },
      "en_USA_wapost_gen":  {
        "media_name" : "Washington Post",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wapost",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://www.washingtonpost.com/",
        "url_feed" : "http://feeds.washingtonpost.com/rss/homepage"
      },
      "pt_BRA_zeroho_uni":  {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "Unique",
        "periodicity" : "quotidien",
        "url_media" : "http://zerohora.clicrbs.com.br/rs/",
        "url_feed" : "http://zh.clicrbs.com.br/rs/noticias/ultimas-noticias-rss/"
      },
      "pt_BRA_zeroho_gen":  {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "General",
        "periodicity" : "quotidien",
        "url_media" : "http://zerohora.clicrbs.com.br/rs/",
        "url_feed" : "http://br.zerohora.feedsportal.com/c/33341/f/566001/index.rss"
      },
      "pt_BRA_zeroho_int":  {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "International",
        "periodicity" : "quotidien",
        "url_media" : "http://zerohora.clicrbs.com.br/rs/",
        "url_feed" : "http://br.zerohora.feedsportal.com/c/33341/f/616332/index.rss"
      }
    }




    // Public API here
    return {

      getmedias:function(){
        return medias;
      },
      getLanguage: function (ln) {
        return languages[ln];
      },
      getMediaLanguage: function(media) {
        return languages[medias[media].language];
      },
      getOneMedia: function(media) {
        return medias[media];
      },
      getMediaName: function(media) {
        return medias[media].media_name;
      },
      getMediaCountry: function(media) {
        return medias[media].country;
      },
      getMediaType: function(media) {
        return medias[media].type_feed;
      },
      getMediaPeriod: function(media) {
        return medias[media].periodicity;
      },
      getMediaUrl: function(media) {
        return medias[media].url_media;
      },
      getMediaFeed: function(media) {
        return medias[media].url_feed;
      }
    };
  });
