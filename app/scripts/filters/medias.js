'use strict';

/**
 * @ngdoc filter
 * @name geomediaApp.filter:medias
 * @function
 * @description
 * # medias
 * Filter in the geomediaApp.
 */
angular.module('geomediaApp')
  .filter('medias', function () {

    var allmedias = {
      "fr_FRA_20minu_une": {
        "media_name" : "20 minutes",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "20minu",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "ar_EGY_alahra_une": {
        "media_name" : "Al-Ahram",
        "language" : "ar",
        "country" : "EGY",
        "media_code" : "alahra",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "ar_EGY_alahra_int": {
        "media_name" : "Al-Ahram",
        "language" : "ar",
        "country" : "EGY",
        "media_code" : "alahra",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "ar_ARE_albaya_int": {
        "media_name" : "Al Bayan",
        "language" : "ar",
        "country" : "ARE",
        "media_code" : "albaya",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "ar_ARE_albaya_brn": {
        "media_name" : "Al Bayan",
        "language" : "ar",
        "country" : "ARE",
        "media_code" : "albaya",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "ar_QAT_aljaze_gen": {
        "media_name" : "Al Jazeera",
        "language" : "ar",
        "country" : "QAT",
        "media_code" : "aljaze",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "ar_QAT_aljaze_int": {
        "media_name" : "Al Jazeera",
        "language" : "ar",
        "country" : "QAT",
        "media_code" : "aljaze",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_XX _africa_gen": {
        "media_name" : "All Africa",
        "language" : "en",
        "country" : "XX ",
        "media_code" : "africa",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_BLZ_amanda_gen": {
        "media_name" : "Amandala",
        "language" : "en",
        "country" : "BLZ",
        "media_code" : "amanda",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_SAU_arabnw_int": {
        "media_name" : "Arab news",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "arabnw",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_SAU_arabnw_une": {
        "media_name" : "Arab news",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "arabnw",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_KWT_arabti_int": {
        "media_name" : "Arab Times Kuwait",
        "language" : "en",
        "country" : "KWT",
        "media_code" : "arabti",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_KWT_arabti_une": {
        "media_name" : "Arab Times Kuwait",
        "language" : "en",
        "country" : "KWT",
        "media_code" : "arabti",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_ARM_aravot_gen": {
        "media_name" : "Aravot (Morning)",
        "language" : "en",
        "country" : "ARM",
        "media_code" : "aravot",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ARG_argind_uni": {
        "media_name" : "argentina independent",
        "language" : "en",
        "country" : "ARG",
        "media_code" : "argind",
        "type_feed" : "Unique",
        "periodicity" : "mensuel"
      },
      "en_JPN_asahis_uni": {
        "media_name" : "Asahi Shimbun",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "asahis",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_AUT_austim_gen": {
        "media_name" : "Austrian Times",
        "language" : "en",
        "country" : "AUT",
        "media_code" : "austim",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_THA_bangko_brn": {
        "media_name" : "Bangkok Post",
        "language" : "en",
        "country" : "THA",
        "media_code" : "bangko",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_BTN_bhutan_uni": {
        "media_name" : "Bhutan Observer",
        "language" : "en",
        "country" : "BTN",
        "media_code" : "bhutan",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_BRN_borneo_brn": {
        "media_name" : "Borneo Bulletin",
        "language" : "en",
        "country" : "BRN",
        "media_code" : "borneo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "pt_BRA_defato_int": {
        "media_name" : "Brasil de Fato",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "defato",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire"
      },
      "en_ARG_bueair_uni": {
        "media_name" : "Buenos Aires Herald",
        "language" : "en",
        "country" : "ARG",
        "media_code" : "bueair",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "pt_BRA_cartac_int": {
        "media_name" : "Carta Capital",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "cartac",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire"
      },
      "pt_BRA_cartac_brn": {
        "media_name" : "Carta Capital",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "cartac",
        "type_feed" : "Breaking news",
        "periodicity" : "hebdomadaire"
      },
      "en_CHN_chinad_int": {
        "media_name" : "China Daily",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "chinad",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ZWE_chroni_int": {
        "media_name" : "Chronicle",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "chroni",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ZWE_chroni_gen": {
        "media_name" : "Chronicle",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "chroni",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pt_BRA_corrio_int": {
        "media_name" : "Corrieo Braziliense",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "corrio",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "it_ITA_corrie_int": {
        "media_name" : "Corriere della Sera",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "corrie",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "it_ITA_corrie_gen": {
        "media_name" : "Corriere della Sera",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "corrie",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_CYP_cyprus_uni": {
        "media_name" : "Cyprus Mail",
        "language" : "en",
        "country" : "CYP",
        "media_code" : "cyprus",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "pt_BRA_daglob_int": {
        "media_name" : "Da Globo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "daglob",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_GBR_dailym_brn": {
        "media_name" : "Daily Mail",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailym",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_GBR_dailym_gen": {
        "media_name" : "Daily Mail",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailym",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_UGA_dailmo_int": {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_UGA_dailmo_brn": {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_UGA_dailmo_gen": {
        "media_name" : "Daily Monitor",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "dailmo",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ATG_dailyo_gen": {
        "media_name" : "Daily Observer",
        "language" : "en",
        "country" : "ATG",
        "media_code" : "dailyo",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ATG_dailyo_int": {
        "media_name" : "Daily Observer",
        "language" : "en",
        "country" : "ATG",
        "media_code" : "dailyo",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_GBR_dailyt_int": {
        "media_name" : "Daily telegraph",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "dailyt",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_AUS_dteleg_brn": {
        "media_name" : "Daily Telegraph (AUS)",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "dteleg",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_AUS_dteleg_int": {
        "media_name" : "Daily Telegraph (AUS)",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "dteleg",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ESP_deiaxx_une": {
        "media_name" : "DEIA",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "deiaxx",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_ESP_deiaxx_int": {
        "media_name" : "DEIA",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "deiaxx",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_BEL_derheu_int": {
        "media_name" : "DerniÃ¨re Heure",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "derheu",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_BEL_derheu_une": {
        "media_name" : "DerniÃ¨re Heure",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "derheu",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_FRA_dernou_gen": {
        "media_name" : "DerniÃ¨res Nouvelles d'Alsace",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "dernou",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "fr_FRA_dernou_int": {
        "media_name" : "DerniÃ¨res Nouvelles d'Alsace",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "dernou",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "ca_AND_diaria_uni": {
        "media_name" : "Diari d'Andorra",
        "language" : "ca",
        "country" : "AND",
        "media_code" : "diaria",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "es_ESP_mallor_int": {
        "media_name" : "Diario de Mallorca",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "mallor",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "pt_BRA_nordes_int": {
        "media_name" : "Diario do Nordeste",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "nordes",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "pt_BRA_nordes_brn": {
        "media_name" : "Diario do Nordeste",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "nordes",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "de_DEU_tagesz_gen": {
        "media_name" : "Die Tageszeitung (taz)",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "tagesz",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "de_DEU_diewel_int": {
        "media_name" : "Die Welt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "diewel",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_diewel_gen": {
        "media_name" : "Die Welt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "diewel",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_ESP_confid_int": {
        "media_name" : "El Confidencial",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "confid",
        "type_feed" : "International",
        "periodicity" : "pure-player"
      },
      "es_BOL_eldebe_uni": {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "es_BOL_eldebe_int": {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_BOL_eldebe_brn": {
        "media_name" : "El deber",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "eldebe",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_BOL_ldiari_une": {
        "media_name" : "El Diario (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "ldiari",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_MEX_diamex_int": {
        "media_name" : "El Diario (mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "diamex",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_MEX_Inform_int": {
        "media_name" : "El Informador",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "Inform",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "ar_DZA_elkhab_brn": {
        "media_name" : "El khabar",
        "language" : "ar",
        "country" : "DZA",
        "media_code" : "elkhab",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_CHL_mercur_brn": {
        "media_name" : "El mercurio",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "mercur",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_CHL_mercur_int": {
        "media_name" : "El mercurio",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "mercur",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_DZA_elmoud_gen": {
        "media_name" : "El Moudjahid",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elmoud",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_VEN_lmundo_une": {
        "media_name" : "El Mundo",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "lmundo",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_VEN_nation_uni": {
        "media_name" : "El National",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "nation",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "es_ESP_elpais_int": {
        "media_name" : "El Pais",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "elpais",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ESP_elpais_une": {
        "media_name" : "El Pais",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "elpais",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_ESP_aragon_int": {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ESP_aragon_brn": {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_ESP_aragon_une": {
        "media_name" : "El periodico de Aragon",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "aragon",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_ESP_catalu_int": {
        "media_name" : "El periodico de Catalunya",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "catalu",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ESP_catalu_une": {
        "media_name" : "El periodico de Catalunya",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "catalu",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_MEX_univer_int": {
        "media_name" : "El Universal",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "univer",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_VEN_univer_int": {
        "media_name" : "El Universal (VEN)",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "univer",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_VEN_univer_brn": {
        "media_name" : "El Universal (VEN)",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "univer",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "fr_DZA_elwata_une": {
        "media_name" : "El Watan",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elwata",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_DZA_elwata_int": {
        "media_name" : "El Watan",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "elwata",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ARE_emirat_une": {
        "media_name" : "Emirates 24-7",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "emirat",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_ARE_emirat_int": {
        "media_name" : "Emirates 24-7",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "emirat",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ESP_farode_int": {
        "media_name" : "Faro de vigo",
        "language" : "es",
        "country" : "ESP",
        "media_code" : "farode",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_GBR_finati_int": {
        "media_name" : "Financial Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "finati",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_GBR_finati_gen": {
        "media_name" : "Financial Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "finati",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pt_BRA_folhas_brn": {
        "media_name" : "Folha de S. Paulo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "folhas",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "pt_BRA_folhas_int": {
        "media_name" : "Folha de S. Paulo",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "folhas",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_BRA_folhen_int": {
        "media_name" : "Folha de S. Paulo (English Version)",
        "language" : "en",
        "country" : "BRA",
        "media_code" : "folhen",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_RUS_strate_uni": {
        "media_name" : "Fond Strateghitchesckoi Koultoury",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "strate",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "fr_FRA_antill_int": {
        "media_name" : "France Antilles",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "antill",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_antill_une": {
        "media_name" : "France Antilles",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "antill",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "de_DEU_zeitun_int": {
        "media_name" : "Frankfurter Allgemeine Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "zeitun",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_zeitun_gen": {
        "media_name" : "Frankfurter Allgemeine Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "zeitun",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "de_DEU_anzeig_int": {
        "media_name" : "General Anzeiger",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "anzeig",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_anzeig_brn": {
        "media_name" : "General Anzeiger",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "anzeig",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "de_DEU_google_nat": {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "de_DEU_google_int": {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "de_DEU_google_une": {
        "media_name" : "Google News Allemagne",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "es_ARG_google_une": {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "es_ARG_google_int": {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "es_ARG_google_nat": {
        "media_name" : "Google News Argentine",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "pt_BRA_google_nat": {
        "media_name" : "Google News BrÃ©sil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "pt_BRA_google_une": {
        "media_name" : "Google News BrÃ©sil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "pt_BRA_google_int": {
        "media_name" : "Google News BrÃ©sil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_USA_google_une": {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_USA_google_nat": {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_USA_google_int": {
        "media_name" : "Google News Etats-unis",
        "language" : "en",
        "country" : "USA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "fr_FRA_google_nat": {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "fr_FRA_google_int": {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "fr_FRA_google_une": {
        "media_name" : "Google News France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_IND_google_une": {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_IND_google_nat": {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_IND_google_int": {
        "media_name" : "Google News Inde",
        "language" : "en",
        "country" : "IND",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "it_ITA_google_nat": {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "it_ITA_google_int": {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "it_ITA_google_une": {
        "media_name" : "Google News Italy",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "fr_MAR_google_int": {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "fr_MAR_google_une": {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "fr_MAR_google_nat": {
        "media_name" : "Google News Maroc",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "es_MEX_google_une": {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "es_MEX_google_nat": {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "es_MEX_google_int": {
        "media_name" : "Google News Mexique",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_NGA_google_nat": {
        "media_name" : "Google News NigÃ©ria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_NGA_google_int": {
        "media_name" : "Google News NigÃ©ria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_NGA_google_une": {
        "media_name" : "Google News NigÃ©ria",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_UGA_google_nat": {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_UGA_google_une": {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_UGA_google_int": {
        "media_name" : "Google News Ouganda",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_PAK_google_nat": {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_PAK_google_une": {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_PAK_google_int": {
        "media_name" : "Google News Pakistan",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_PHL_google_nat": {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_PHL_google_une": {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_PHL_google_int": {
        "media_name" : "Google News Philippines",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_GBR_google_nat": {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "National",
        "periodicity" : "autre"
      },
      "en_GBR_google_une": {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "Une",
        "periodicity" : "autre"
      },
      "en_GBR_google_int": {
        "media_name" : "Google News United Kingdom",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "google",
        "type_feed" : "International",
        "periodicity" : "autre"
      },
      "en_ISR_haretz_une": {
        "media_name" : "Haaretz (The Land)",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "haretz",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_ISR_haretz_int": {
        "media_name" : "Haaretz (The Land)",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "haretz",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_handel_une": {
        "media_name" : "Handelsblatt",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "handel",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_AUS_hersun_int": {
        "media_name" : "Herald Sun",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "hersun",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_AUS_hersun_brn": {
        "media_name" : "Herald Sun",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "hersun",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_IND_hindti_brn": {
        "media_name" : "Hindustan Times",
        "language" : "en",
        "country" : "IND",
        "media_code" : "hindti",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_IND_hindti_int": {
        "media_name" : "Hindustan Times",
        "language" : "en",
        "country" : "IND",
        "media_code" : "hindti",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ZMB_indeol_int": {
        "media_name" : "iol",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "indeol",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ZMB_indeol_une": {
        "media_name" : "iol",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "indeol",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_JPN_jatime_brn": {
        "media_name" : "Japan Times",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "jatime",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_JPN_jatime_int": {
        "media_name" : "Japan Times",
        "language" : "en",
        "country" : "JPN",
        "media_code" : "jatime",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_JOR_jordti_uni": {
        "media_name" : "Jordan times",
        "language" : "en",
        "country" : "JOR",
        "media_code" : "jordti",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "pt_BRA_jornal_gen": {
        "media_name" : "Jornal do Brasil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "jornal",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pt_BRA_jornal_int": {
        "media_name" : "Jornal do Brasil",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "jornal",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ARE_khalej_une": {
        "media_name" : "Khaleej Times",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "khalej",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_ARE_khalej_int": {
        "media_name" : "Khaleej Times",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "khalej",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_MEX_cronic_int": {
        "media_name" : "La cronica de hoy",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "cronic",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_BOL_lajord_une": {
        "media_name" : "La Jordana (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "lajord",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_BOL_lajord_int": {
        "media_name" : "La Jordana (Bol)",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "lajord",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_MEX_jormex_gen": {
        "media_name" : "La Jordana (Mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "jormex",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_MEX_jormex_int": {
        "media_name" : "La Jordana (Mex)",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "jormex",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ARG_nacion_brn": {
        "media_name" : "La Nacion",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "nacion",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_ARG_nacion_int": {
        "media_name" : "La Nacion",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "nacion",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_nourep_gen": {
        "media_name" : "la nouvelle republique",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "nourep",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_BOL_patria_int": {
        "media_name" : "La patria",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "patria",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ARG_prensa_int": {
        "media_name" : "La Prensa",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "prensa",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ARG_prensa_une": {
        "media_name" : "La Prensa",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "prensa",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_BOL_larazo_gen": {
        "media_name" : "La Razon",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "larazo",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_BOL_larazo_int": {
        "media_name" : "La Razon",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "larazo",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_CHL_tercer_gen": {
        "media_name" : "La Tercera",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "tercer",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "es_CHL_tercer_int": {
        "media_name" : "La Tercera",
        "language" : "es",
        "country" : "CHL",
        "media_code" : "tercer",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_ARG_vozint_brn": {
        "media_name" : "La voz del interior",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "vozint",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_ARG_vozint_int": {
        "media_name" : "La voz del interior",
        "language" : "es",
        "country" : "ARG",
        "media_code" : "vozint",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_BFA_lefaso_uni": {
        "media_name" : "Le faso",
        "language" : "fr",
        "country" : "BFA",
        "media_code" : "lefaso",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "fr_FRA_figaro_une": {
        "media_name" : "Le Figaro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "figaro",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_FRA_figaro_int": {
        "media_name" : "Le Figaro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "figaro",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_CAN_jmontr_int": {
        "media_name" : "Le Journal de MontrÃ©al",
        "language" : "fr",
        "country" : "CAN",
        "media_code" : "jmontr",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_CAN_jmontr_brn": {
        "media_name" : "Le Journal de MontrÃ©al",
        "language" : "fr",
        "country" : "CAN",
        "media_code" : "jmontr",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "fr_DZA_lmatin_uni": {
        "media_name" : "Le Matin",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "lmatin",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "fr_MAR_lemati_gen": {
        "media_name" : "Le Matin (maroc)",
        "language" : "fr",
        "country" : "MAR",
        "media_code" : "lemati",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "fr_FRA_lmonde_une": {
        "media_name" : "Le Monde",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lmonde",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_FRA_lmonde_int": {
        "media_name" : "Le Monde",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lmonde",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_lepari_int": {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_lepari_gen": {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "fr_FRA_lepari_une": {
        "media_name" : "Le Parisien",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "lepari",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_BFA_lepays_uni": {
        "media_name" : "Le pays",
        "language" : "fr",
        "country" : "BFA",
        "media_code" : "lepays",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "fr_LUX_quotid_uni": {
        "media_name" : "Le Quotidien",
        "language" : "fr",
        "country" : "LUX",
        "media_code" : "quotid",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "fr_BEL_lesoir_brn": {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "fr_BEL_lesoir_une": {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_BEL_lesoir_int": {
        "media_name" : "Le soir",
        "language" : "fr",
        "country" : "BEL",
        "media_code" : "lesoir",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_DZA_xpress_brn": {
        "media_name" : "L'Expression",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "xpress",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "fr_DZA_xpress_int": {
        "media_name" : "L'Expression",
        "language" : "fr",
        "country" : "DZA",
        "media_code" : "xpress",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_libera_int": {
        "media_name" : "LibÃ©ration",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "libera",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_libera_une": {
        "media_name" : "LibÃ©ration",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "libera",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "es_BOL_tiempo_brn": {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_BOL_tiempo_int": {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_BOL_tiempo_une": {
        "media_name" : "Los tiempos",
        "language" : "es",
        "country" : "BOL",
        "media_code" : "tiempo",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_FRA_metron_une": {
        "media_name" : "Metro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "metron",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "fr_FRA_metron_brn": {
        "media_name" : "Metro",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "metron",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "es_MEX_mileni_gen": {
        "media_name" : "Milenio",
        "language" : "es",
        "country" : "MEX",
        "media_code" : "mileni",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "de_DEU_mittel_gen": {
        "media_name" : "Mitteldeutsche Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "mittel",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_BWA_megiwa_gen": {
        "media_name" : "Mmegi wa Digmang",
        "language" : "en",
        "country" : "BWA",
        "media_code" : "megiwa",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_RUS_moscow_brn": {
        "media_name" : "Moscow times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "moscow",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_BHS_nassau_brn": {
        "media_name" : "Nassau Guardian",
        "language" : "en",
        "country" : "BHS",
        "media_code" : "nassau",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_MYS_newstr_une": {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_MYS_newstr_uni": {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_MYS_newstr_brn": {
        "media_name" : "News Straits Times",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "newstr",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_UGA_newvis_int": {
        "media_name" : "New Vision",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "newvis",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_NZL_nzhera_une": {
        "media_name" : "New Zealand Herald",
        "language" : "en",
        "country" : "NZL",
        "media_code" : "nzhera",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_NZL_nzhera_int": {
        "media_name" : "New Zealand Herald",
        "language" : "en",
        "country" : "NZL",
        "media_code" : "nzhera",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_nurnbe_uni": {
        "media_name" : "NÃ¼rnberger Nachrichten",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "nurnbe",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "ar_SAU_okazsa_int": {
        "media_name" : "Okaz",
        "language" : "ar",
        "country" : "SAU",
        "media_code" : "okazsa",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "fr_FRA_ouestf_uni": {
        "media_name" : "Ouest France",
        "language" : "fr",
        "country" : "FRA",
        "media_code" : "ouestf",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_PHL_phildy_uni": {
        "media_name" : "Philippine Daily Inquirer",
        "language" : "en",
        "country" : "PHL",
        "media_code" : "phildy",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_UGA_redpep_int": {
        "media_name" : "Red Pepper",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "redpep",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_UGA_redpep_gen": {
        "media_name" : "Red Pepper",
        "language" : "en",
        "country" : "UGA",
        "media_code" : "redpep",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "it_ITA_repubb_gen": {
        "media_name" : "repubblica",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "repubb",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "it_ITA_repubb_int": {
        "media_name" : "repubblica",
        "language" : "it",
        "country" : "ITA",
        "media_code" : "repubb",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_BRA_riotim_uni": {
        "media_name" : "Rio Times Online",
        "language" : "en",
        "country" : "BRA",
        "media_code" : "riotim",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_RUS_russia_int": {
        "media_name" : "Russia beyond the Headlines",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "russia",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_RUS_russia_gen": {
        "media_name" : "Russia beyond the Headlines",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "russia",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pl_POL_Rzeczp_une": {
        "media_name" : "Rzeczpospolita",
        "language" : "pl",
        "country" : "POL",
        "media_code" : "Rzeczp",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "pl_POL_Rzeczp_int": {
        "media_name" : "Rzeczpospolita",
        "language" : "pl",
        "country" : "POL",
        "media_code" : "Rzeczp",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_SAU_saudig_uni": {
        "media_name" : "Saudi Gazette",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "saudig",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_SAU_saudig_int": {
        "media_name" : "Saudi Gazette",
        "language" : "en",
        "country" : "SAU",
        "media_code" : "saudig",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_CHN_mopost_brn": {
        "media_name" : "South China Morning Post",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "mopost",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_CHN_mopost_int": {
        "media_name" : "South China Morning Post",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "mopost",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_KHM_asiglo_uni": {
        "media_name" : "Southeast Asia Globe",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "asiglo",
        "type_feed" : "Unique",
        "periodicity" : "mensuel"
      },
      "en_ZAF_soweta_gen": {
        "media_name" : "sowetan",
        "language" : "en",
        "country" : "ZAF",
        "media_code" : "soweta",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ZAF_soweta_brn": {
        "media_name" : "sowetan",
        "language" : "en",
        "country" : "ZAF",
        "media_code" : "soweta",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_SGP_strtim_brn": {
        "media_name" : "Straits Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "strtim",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_SGP_strtim_int": {
        "media_name" : "Straits Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "strtim",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "de_DEU_suddeu_gen": {
        "media_name" : "SÃ¼ddeutsche  Zeitung",
        "language" : "de",
        "country" : "DEU",
        "media_code" : "suddeu",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_SWZ_swazio_uni": {
        "media_name" : "Swazi Observer",
        "language" : "en",
        "country" : "SWZ",
        "media_code" : "swazio",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_VNM_thanhn_gen": {
        "media_name" : "Thanh  Nien (news - english version)",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "thanhn",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_VNM_thanhn_int": {
        "media_name" : "Thanh  Nien (news - english version)",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "thanhn",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_AUS_theage_une": {
        "media_name" : "The Age",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "theage",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_AUS_theage_int": {
        "media_name" : "The Age",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "theage",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_AUS_austra_int": {
        "media_name" : "the australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "austra",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_AUS_austra_brn": {
        "media_name" : "the australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "austra",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_BGD_bangla_int": {
        "media_name" : "the bangladesh today",
        "language" : "en",
        "country" : "BGD",
        "media_code" : "bangla",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_BGD_bangla_uni": {
        "media_name" : "the bangladesh today",
        "language" : "en",
        "country" : "BGD",
        "media_code" : "bangla",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_SGP_busine_gen": {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_SGP_busine_int": {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_SGP_busine_une": {
        "media_name" : "The Business Times",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "busine",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_KHM_cambdy_uni": {
        "media_name" : "The Cambodia Daily",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "cambdy",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_AUS_comail_brn": {
        "media_name" : "The Courier Mail",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "comail",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_AUS_comail_une": {
        "media_name" : "The Courier Mail",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "comail",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_KEN_dailyn_gen": {
        "media_name" : "The Daily Nation",
        "language" : "en",
        "country" : "KEN",
        "media_code" : "dailyn",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_KEN_dailyn_int": {
        "media_name" : "The Daily Nation",
        "language" : "en",
        "country" : "KEN",
        "media_code" : "dailyn",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_BRB_dainat_uni": {
        "media_name" : "The Daily Nation (Barbados)",
        "language" : "en",
        "country" : "BRB",
        "media_code" : "dainat",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_GBR_guardi_brn": {
        "media_name" : "The Guardian",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "guardi",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_GBR_guardi_int": {
        "media_name" : "The Guardian",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "guardi",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ARE_gulfto_int": {
        "media_name" : "The Gulf Today",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "gulfto",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ARE_gulfto_brn": {
        "media_name" : "The Gulf Today",
        "language" : "en",
        "country" : "ARE",
        "media_code" : "gulfto",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_ZWE_herald_int": {
        "media_name" : "The Herald",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "herald",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ZWE_herald_gen": {
        "media_name" : "The Herald",
        "language" : "en",
        "country" : "ZWE",
        "media_code" : "herald",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ISR_jepost_int": {
        "media_name" : "The Jerusalem Post",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "jepost",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_ISR_jepost_une": {
        "media_name" : "The Jerusalem Post",
        "language" : "en",
        "country" : "ISR",
        "media_code" : "jepost",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_DEU_tlocal_uni": {
        "media_name" : "The local",
        "language" : "en",
        "country" : "DEU",
        "media_code" : "tlocal",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_USA_latime_une": {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_USA_latime_int": {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_USA_latime_gen": {
        "media_name" : "The Los Angeles Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "latime",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_AUS_mercur_une": {
        "media_name" : "The Mercury",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mercur",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_DEU_munich_uni": {
        "media_name" : "The munich eye",
        "language" : "en",
        "country" : "DEU",
        "media_code" : "munich",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_THA_nation_une": {
        "media_name" : "The Nation",
        "language" : "en",
        "country" : "THA",
        "media_code" : "nation",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_THA_nation_brn": {
        "media_name" : "The Nation",
        "language" : "en",
        "country" : "THA",
        "media_code" : "nation",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_PAK_newint_une": {
        "media_name" : "The News International",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "newint",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_PAK_newint_int": {
        "media_name" : "The News International",
        "language" : "en",
        "country" : "PAK",
        "media_code" : "newint",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_USA_nytime_int": {
        "media_name" : "The New York Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nytime",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_USA_nytime_gen": {
        "media_name" : "The New York Times",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nytime",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_USA_nyintr_gen": {
        "media_name" : "The New York Times (International edition)",
        "language" : "en",
        "country" : "USA",
        "media_code" : "nyintr",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_ZMB_postzm_uni": {
        "media_name" : "The Post",
        "language" : "en",
        "country" : "ZMB",
        "media_code" : "postzm",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_RUS_petime_une": {
        "media_name" : "The Saint Petersburg Times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "petime",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_RUS_petime_uni": {
        "media_name" : "The Saint Petersburg Times",
        "language" : "en",
        "country" : "RUS",
        "media_code" : "petime",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_KHM_souasi_int": {
        "media_name" : "The Southeast Asia weekly",
        "language" : "en",
        "country" : "KHM",
        "media_code" : "souasi",
        "type_feed" : "International",
        "periodicity" : "hebdomadaire"
      },
      "en_CAN_starca_gen": {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_CAN_starca_int": {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_CAN_starca_une": {
        "media_name" : "The Star",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "starca",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_JAM_starjm_brn": {
        "media_name" : "The Star (Jamaica)",
        "language" : "en",
        "country" : "JAM",
        "media_code" : "starjm",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_MYS_starmy_int": {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_MYS_starmy_une": {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_MYS_starmy_brn": {
        "media_name" : "The Star (malaisie)",
        "language" : "en",
        "country" : "MYS",
        "media_code" : "starmy",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_AUS_mohera_une": {
        "media_name" : "The Sydney Morning Herald",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mohera",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_AUS_mohera_int": {
        "media_name" : "The Sydney Morning Herald",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "mohera",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_GBR_ttimes_brn": {
        "media_name" : "The Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "ttimes",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_GBR_ttimes_int": {
        "media_name" : "The Times",
        "language" : "en",
        "country" : "GBR",
        "media_code" : "ttimes",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_IND_tindia_int": {
        "media_name" : "The times of India",
        "language" : "en",
        "country" : "IND",
        "media_code" : "tindia",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_IND_tindia_brn": {
        "media_name" : "The times of India",
        "language" : "en",
        "country" : "IND",
        "media_code" : "tindia",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_BHS_tri242_uni": {
        "media_name" : "The Tribune 242",
        "language" : "en",
        "country" : "BHS",
        "media_code" : "tri242",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_CAN_vansun_int": {
        "media_name" : "The Vancouver Sun",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "vansun",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_CAN_vansun_gen": {
        "media_name" : "The Vancouver Sun",
        "language" : "en",
        "country" : "CAN",
        "media_code" : "vansun",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_USA_wallst_gen": {
        "media_name" : "The Wall street journal",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wallst",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_USA_wallst_int": {
        "media_name" : "The Wall street journal",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wallst",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_CHN_wsasia_uni": {
        "media_name" : "The Wall Street Journal Asia",
        "language" : "en",
        "country" : "CHN",
        "media_code" : "wsasia",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "en_AUS_westau_brn": {
        "media_name" : "The West Australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "westau",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_AUS_westau_int": {
        "media_name" : "The West Australian",
        "language" : "en",
        "country" : "AUS",
        "media_code" : "westau",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_NGA_thiday_int": {
        "media_name" : "This Day",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "thiday",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_NGA_thiday_brn": {
        "media_name" : "This Day",
        "language" : "en",
        "country" : "NGA",
        "media_code" : "thiday",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_MLT_tmalta_int": {
        "media_name" : "times of malta",
        "language" : "en",
        "country" : "MLT",
        "media_code" : "tmalta",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_MLT_tmalta_gen": {
        "media_name" : "times of malta",
        "language" : "en",
        "country" : "MLT",
        "media_code" : "tmalta",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_SGP_twoday_brn": {
        "media_name" : "Today",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "twoday",
        "type_feed" : "Breaking news",
        "periodicity" : "quotidien"
      },
      "en_SGP_twoday_int": {
        "media_name" : "Today",
        "language" : "en",
        "country" : "SGP",
        "media_code" : "twoday",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "es_VEN_notici_une": {
        "media_name" : "Ultimas Noticias",
        "language" : "es",
        "country" : "VEN",
        "media_code" : "notici",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_USA_USGEOS_gen": {
        "media_name" : "United States Geological Survey",
        "language" : "en",
        "country" : "USA",
        "media_code" : "USGEOS",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_USA_usatdy_une": {
        "media_name" : "USA Today",
        "language" : "en",
        "country" : "USA",
        "media_code" : "usatdy",
        "type_feed" : "Une",
        "periodicity" : "quotidien"
      },
      "en_USA_usatdy_int": {
        "media_name" : "USA Today",
        "language" : "en",
        "country" : "USA",
        "media_code" : "usatdy",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "pt_BRA_vejaxx_gen": {
        "media_name" : "veja",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "vejaxx",
        "type_feed" : "General",
        "periodicity" : "hebdomadaire"
      },
      "en_VNM_netbri_int": {
        "media_name" : "Vietnamnet Bridge",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "netbri",
        "type_feed" : "International",
        "periodicity" : "pure-player"
      },
      "en_VNM_vnnews_gen": {
        "media_name" : "Vietnam News",
        "language" : "en",
        "country" : "VNM",
        "media_code" : "vnnews",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "en_USA_wapost_int": {
        "media_name" : "Washington Post",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wapost",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      },
      "en_USA_wapost_gen": {
        "media_name" : "Washington Post",
        "language" : "en",
        "country" : "USA",
        "media_code" : "wapost",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pt_BRA_zeroho_uni": {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "Unique",
        "periodicity" : "quotidien"
      },
      "pt_BRA_zeroho_gen": {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "General",
        "periodicity" : "quotidien"
      },
      "pt_BRA_zeroho_int": {
        "media_name" : "Zero Hora",
        "language" : "pt",
        "country" : "BRA",
        "media_code" : "zeroho",
        "type_feed" : "International",
        "periodicity" : "quotidien"
      }
    }



    return function (input) {
      return allmedias[input].media_name;
    };
  });
