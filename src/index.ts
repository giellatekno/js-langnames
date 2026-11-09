const LANGNAMES: Record<string, Record<InterfaceLangs, string>> = {
    "bxr": {
        eng: "Buryat",
        nob: "burjatisk",
        sme: "burjátagiella",
        fin: "burjaatin kieli",
        rus: "бурятский язык",
    },
    "ciw": {
        eng: "Chippewa",
        nob: "ojibwe",
        sme: "ojibwegiella",
        fin: "ojibwen kieli",
        rus: "чиппева",
    },
    "chp": {
        eng: "Denesuline",
        nob: "dene suline",
        sme: "denesuline",
        fin: "denesuline",
        rus: "дене сулин",
    },
    "chr": {
        eng: "Cherokee",
        nob: "cherokesisk",
        sme: "cherokee",
        fin: "cherokeen kieli",
        rus: "чероки",
    },
    "cor": {
        eng: "Cornish",
        nob: "kornisk",
        sme: "kornagiella",
        fin: "korni",
        rus: "корнский язык",
    },
    "deu": {
        eng: "German",
        nob: "tysk",
        sme: "duiskkagiella",
        fin: "saksa",
        rus: "немецкий язык",
    },
    "eng": {
        eng: "English",
        nob: "engelsk",
        sme: "eaŋgalasgiella",
        fin: "englanti",
        rus: "английский язык",
    },
    "evn": {
        eng: "Evenki",
        nob: "evenkisk",
        sme: "evenkigiella",
        fin: "evenkin kieli",
        rus: "эвенкийский язык",
    },
    "est": {
        eng: "Estonian",
        nob: "estisk",
        sme: "esttegiella",
        fin: "viro",
        rus: "эстонский язык",
    },
    "fao": {
        eng: "Faroese",
        nob: "færøysk",
        sme: "fearagiella",
        fin: "fäärin kieli",
        rus: "фарерский язык",
    },
    "fin": {
        eng: "Finnish",
        nob: "finsk",
        sme: "suomagiella",
        fin: "suomi",
        rus: "финский язык",
    },
    "fit": {
        eng: "Meänkieli",
        nob: "meänkieli",
        sme: "meängiella",
        fin: "meänkieli",
        rus: "меянкиели",
    },
    "gle": {
        eng: "Irish",
        nob: "irsk",
        sme: "iirragiella",
        fin: "iiri",
        rus: "ирландский язык",
    },
    "fkv": {
        eng: "Kven",
        nob: "kvensk",
        sme: "kveanagiella",
        fin: "kveeni",
        rus: "квенский язык",
    },
    "hdn": {
        eng: "Northern Haida",
        nob: "nordhaida",
        sme: "davvihaidagiella",
        fin: "pohjoishaida",
        rus: "северохайдский язык",
    },
    "hun": {
        eng: "Hungarian",
        nob: "ungarsk",
        sme: "ungáragiella",
        fin: "unkari",
        rus: "венгерский язык",
    },
    "izh": {
        eng: "Ingrian",
        nob: "ingrisk",
        sme: "inkeroisgiella",
        fin: "inkeroinen",
        rus: "ижорский язык",
    },
    "koi": {
        eng: "Komi Permyak",
        nob: "komipermjakisk",
        sme: "komipermjakgiella",
        fin: "komipermjakki",
        rus: "коми-пермяцкий язык",
    },
    "kom": {
        eng: "Komi",
        nob: "komi",
        sme: "komigiella",
        fin: "komi",
        rus: "коми язык",
    },
    "kpv": {
        eng: "Komi",
        nob: "syrjensk",
        sme: "komigiella",
        fin: "komi",
        rus: "коми язык",
    },
    "ipk": {
        eng: "Iñupiaq",
        nob: "inupiak",
        sme: "inupiaka",
        fin: "inupiatun",
        rus: "инупиакский язык",
    },
    "kal": {
        eng: "Greenlandic",
        nob: "grønlandsk",
        sme: "ruonáeatnanlaš",
        fin: "grönlannin kieli",
        rus: "гренландский язык",
    },
    "kca": {
        eng: "Khanty",
        nob: "khanti",
        sme: "hantigiella",
        fin: "hantin kieli",
        rus: "хантыйский язык",
    },
    "lav": {
        eng: "Latvian",
        nob: "latvisk",
        sme: "latviagiella",
        fin: "latvia",
        rus: "латвийский язык",
    },
    "liv": {
        eng: "Livonian",
        nob: "livisk",
        sme: "liivigiella",
        fin: "liivin kieli",
        rus: "ливский язык",
    },
    "mdf": {
        eng: "Moksha",
        nob: "moksja",
        sme: "mokšagiella",
        fin: "mokša",
        rus: "мокшанский язык",
    },
    "mhr": {
        eng: "Eastern Mari",
        nob: "østmarisk",
        sme: "niitomarigiella",
        fin: "niitymari",
        rus: "луговомарийский язык",
    },
    "mns": {
        eng: "Mansi",
        nob: "mansisk",
        sme: "mansigiella",
        fin: "mansi",
        rus: "мансийский язык",
    },
    "mrj": {
        eng: "Hill Mari",
        nob: "vestmarisk",
        sme: "várremarigiella",
        fin: "vuorimari",
        rus: "горномарийский язык",
    },
    "myv": {
        eng: "Erzya",
        nob: "erzja",
        sme: "ersagiella",
        fin: "ersä",
        rus: "эрзянский язык",
    },
    "nio": {
        eng: "Nganasan",
        nob: "nganasansk",
        sme: "nganasanagiella",
        fin: "nganasanin kieli",
        rus: "нганасанский язык",
    },
    "nob": {
        eng: "Norwegian bokmål",
        nob: "norsk bokmål",
        sme: "dárogiella",
        fin: "norja",
        rus: "норвежский язык",
    },
    "olo": {
        eng: "Livvi-Karelian",
        nob: "livvisk",
        sme: "livvi",
        fin: "livvi",
        rus: "ливвиковский язык",
    },
    "otw": {
        eng: "Odawa",
        nob: "odawa",
        sme: "odawa",
        fin: "odawa",
        rus: "оттава",
    },
    "ron": {
        eng: "Romanian",
        nob: "rumensk",
        sme: "romaniagiella",
        fin: "romania",
        rus: "румынский язык",
    },
    "rmf": {
        eng: "Finnish Kalo",
        nob: "kalo finsk romani",
        sme: "suoma romanigiella",
        fin: "suomen romanikieli",
        rus: "финский кало",
    },
    "rus": {
        eng: "Russian",
        nob: "russisk",
        sme: "ruoššagiella",
        fin: "venäjä",
        rus: "русский язык",
    },
    "sjd": {
        eng: "Kildin Sámi",
        nob: "kildinsamisk",
        sme: "gielddasámegiella",
        fin: "kiltinänsaame",
        rus: "кильдинский язык",
    },
    "sje": {
        eng: "Pite Sámi",
        nob: "pitesamisk",
        sme: "bihtánsámegiella",
        fin: "piitimensaame",
        rus: "пите саамский язык",
    },
    "sjt": {
        eng: "Ter Sámi",
        nob: "tersamisk",
        sme: "darjjesámegiella",
        fin: "turjansaame",
        rus: "йоканьгско-саамский язык",
    },
    "sma": {
        eng: "South Sámi",
        nob: "sørsamisk",
        sme: "lullisámegiella",
        fin: "eteläsaame",
        rus: "южносаамский язык",
    },
    "sme": {
        eng: "North Sámi",
        nob: "nordsamisk",
        sme: "davvisámegiella",
        fin: "pohjoissaame",
        rus: "северосаамский язык",
    },
    "smj": {
        eng: "Lule Sámi",
        nob: "lulesamisk",
        sme: "julevsámegiella",
        fin: "luulajansaame",
        rus: "люлесаамский язык",
    },
    "smn": {
        eng: "Inari Sámi",
        nob: "enaresamisk",
        sme: "anárašgiella",
        fin: "inarinsaame",
        rus: "инарисаамский язык",
    },
    "sms": {
        eng: "Skolt Sámi",
        nob: "skoltesamisk",
        sme: "nuortalašgiella",
        fin: "koltansaame",
        rus: "колтта-саамский язык",
    },
    "som": {
        eng: "Somali",
        nob: "somalisk",
        sme: "somaligiella",
        fin: "somali",
        rus: "сомалийский язык",
    },
    "srs": {
        eng: "Tsuutʼina",
        nob: "tsuutʼina",
        sme: "tsuutʼina",
        fin: "tsuut’ina",
        rus: "тсу т'ина",
    },
    "swe": {
        eng: "Swedish",
        nob: "svensk",
        sme: "ruoŧagiella",
        fin: "ruotsi",
        rus: "шведский язык",
    },
    "tkl": {
        eng: "Tokelau",
        nob: "tokelauisk",
        sme: "tokelaugiella",
        fin: "tokelaun kieli",
        rus: "токелау",
    },
    "udm": {
        eng: "Udmurt",
        nob: "udmurtisk",
        sme: "udmurtagiella",
        fin: "udmurtti",
        rus: "удмуртский язык",
    },
    "vep": {
        eng: "Veps",
        nob: "vepsisk",
        sme: "vepsägiella",
        fin: "vepsän kieli",
        rus: "вепсский язык",
    },
    "vot": {
        eng: "Votic",
        nob: "votisk",
        sme: "vatjagiella",
        fin: "vatja",
        rus: "водский язык",
    },
    "vro": {
        eng: "Võro",
        nob: "võro",
        sme: "võrogiella",
        fin: "võro",
        rus: "выруский язык",
    },
    "yrk": {
        eng: "Nenets",
        nob: "nenetsisk",
        sme: "nenetsagiella",
        fin: "nenetsi",
        rus: "ненецкий язык",
    },
    // Exception to the iso-code rule. OLSS doesn't have a proper ISO code
    //TODO: fin and rus names
    "sju-x-sydlapsk": {
        eng: "Old Literary Southern Sámi",
        nob: "sydlapska bokspråket",
        sme: "dološ oarjjitsámi girjegiella",
        fin: "",
        rus: "",
    },
};

// TODO: Add rus
const INTERFACE_LANGUAGE: Record<
    InterfaceLangs,
    Record<InterfaceLangs, string>
> = {
    eng: {
        eng: "English",
        nob: "engelsk",
        sme: "eaŋgalasgillii",
        fin: "englandiksi",
        rus: "",
    },
    nob: {
        eng: "Norwegian",
        nob: "norsk",
        sme: "dárogillii",
        fin: "norjaksi",
        rus: "",
    },
    sme: {
        eng: "North Sámi",
        nob: "nordsamisk",
        sme: "davvisámegillii",
        fin: "pohjoissaameksi",
        rus: "",
    },
    fin: {
        eng: "Finnish",
        nob: "finsk",
        sme: "suomagillii",
        fin: "suomeksi",
        rus: "",
    },
    rus: {
        eng: "Russian",
        nob: "russisk",
        sme: "ruoššagillii",
        fin: "venäjäksi",
        rus: "",
    },
};

type InterfaceLangs = "eng" | "nob" | "sme" | "fin" | "rus";

function get_our(ofLang: string, inLang: InterfaceLangs): string | undefined {
    const lang = LANGNAMES[ofLang];
    if (!lang) {
        console.warn(
            `@giellatekno/langnames: Don't know how to say '${ofLang}' in any language`,
        );
        return;
    }

    const our = lang[inLang];
    if (!our) {
        console.warn(
            `@giellatekno/langnames: Don't know how to say '${ofLang}' in '${inLang}'`,
        );
        return;
    }

    return our;
}

export function langname(
    ofLang: string,
    inLang: InterfaceLangs,
    capitalize = true,
): string {
    let result = get_our(ofLang, inLang);

    if (!result) {
        try {
            result = new Intl.DisplayNames([inLang], {
                type: "language",
            }).of(ofLang);
        } catch {}
        if (!result || result === ofLang) {
            console.warn(
                `@giellatekno/langnames: Browser also doesn't know how to say '${ofLang}' in '${inLang}'`,
            );
            return ofLang;
        }
    }

    if (capitalize) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    // Replace space with non-breaking space
    return result.replace(/ /g, "\u{A0}");
}

export function interface_language(
    ofLang: InterfaceLangs,
    inLang: InterfaceLangs,
    capitalize = true,
) {
    let result = INTERFACE_LANGUAGE[ofLang][inLang];
    if (capitalize) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    return result.replace(/ /g, "\u{A0}");
}

export function iso6393_from_6391(code: string): InterfaceLangs {
    switch (code) {
        case "en":
            return "eng";
        case "nb":
            return "nob";
        case "se":
            return "sme";
        case "fi":
            return "fin";
        case "ru":
            return "rus";
        default:
            throw Error(`unknown iso6391 code: ${code}`);
    }
}
