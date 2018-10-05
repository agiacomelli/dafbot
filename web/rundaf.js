/*
 * dafbot - (daf=Deutsch als Fremdsprache)
 * 
 * Adrian Giacomelli
 * 
 * Frankfurt 2017/2018
 * 
 *
 * 
 * 
 *
 */


// Funktionen Ablauf: 

function Run() {
	
Praeparat();

	Tropisch(); Kutan();

Sahara(); Spezies(); Strahiere(); Kontinent();

	Marin(); Versiv(); Jektive();

	Nautica();

		Til(); Missive(); Terra(); Lime();

		Alpine();

		Strate();

		Urban();

	Mission(); Stantiv();

		Optimal(); Sequent();

			System(); Ventionierung();

	Sumiere(); Kultur(); Mersion();

Iure(); Nova();

}

/*
 * Globale Variablen
 * 
 */
 
//Data
var maskulina, maskuli, genitivmaskulina, feminina, femininas, neutra, neutronen, genitivneutra, verben = new Array();

//Autoren
var A =  "Aristoteles";
var TA = "Theodor W. Adorno";
var F =  "Theodor Fontane";
var FR = "Friedrich II. (Der alte Fritz)";
var G =  "Goethe";
var H =  "Hegel";
var HU = "W. von Humboldt";
var K =  "Kant";
var LS = "Lessing";
var L =  "Lichtenberg";
var LU = "Goerge Lucas";
var M =  "Karl Marx";
var SC = "Schiller";
var SH = "Schopenhauer";
var ST = "Theodor Storm";
var W =  "Wittgenstein";

//Sonstige Helferlein
var content = document.getElementById("contents");
var epi = "- Frei nach";
var couleur = 1;

/*
 * Unterfunktionen 
 */

function Tropisch() {
	// Ein Freund aller ist niemandes Freund. Aristoteles
    let trans = Apparat(maskulina);
    let Apho = "Ein " + trans + " ist niemandes " + trans + ".";
    Formular(Apho, A);
}

function Kutan() {
	// Das Schicksal mischt die Karten und wir spielen. Schopenhauer
	let trans = Apparat(neutra);
	let transeunt = Apparat(femininas);
	let Apho = "Das " + trans + " mischt die " + transeunt + " und wir spielen."
	Formular(Apho, SH);
}

function Sahara() {
	// Verbunden werden auch die Schwachen mächtig. Schiller
	let trans = Apparat(maskuli);
	let Apho = "Verbunden werden auch die " + trans + " mächtig.";
	Formular(Apho, SC);
}

function Spezies() {
	// Kein Mensch ist so wichtig, wie er sich nimmt. Kant
	let trans = Apparat(maskulina);
	let Apho = "Kein " + trans + " ist so wichtig, wie er sich nimmt.";
	Formular(Apho, K);
}

function Strahiere() {
	// Er ist ein unbeschriebenes Blatt. Aristoteles
	let trans = Apparat(neutra);
	let Apho = "Er ist ein unbeschriebenes " + trans + ".";
	Formular(Apho, A);
}

function Kontinent() {
	// Man muß sein Leben aus dem Holz schnitzen, das man zur Verfügung hat. Th. Storm
	let trans = Apparat(neutra);
	let transeunt = Apparat(dativneutra);
	let Apho = "Man muß sein " + trans + " aus dem " + transeunt + " schnitzen,";
	Apho = Apho + " das man zur Verfügung hat.";
	Formular(Apho, ST);
}
	
function Marin() {
	// Nur der verdient sich Freiheit wie das Leben, der täglich sie erobern muss. Goethe
	let trans = Apparat(neutra);
	let transeunt = Apparat(verben);
	let Apho = "Nur der verdient sich Freiheit wie das "+trans+", der täglich sie " + transeunt +" muss.";
	Formular(Apho, G);
}
	
function Versiv() {
	// Man muß es so einrichten, daß einem das Ziel entgegenkommt. Fontane
	let trans = Apparat(verben);
	let transeunt = Apparat(neutra);
	let Apho = "Man muß es so " + trans + ", dass einem das " + transeunt + " entgegenkommt.";
	Formular(Apho, F);
}

function Jektive() {
	// 	Der Wechsel allein ist das Beständige. Schopenhauer
	let trans = Apparat(maskulina);
	let transeunt = Apparat(neutra);
	let Apho = "Der " + trans + " allein ist das " + transeunt + ".";
	Formular(Apho, SH);
}
	
function Nautica(){
	// Nur der Betrug entehrt, der Irrtum nie. Lichtenberg
	let trans = Apparat(maskulina);
	let transeunt = Apparat(maskulina);
	let Apho = "Nur der " + trans + " entehrt, der " + transeunt + " nie.";
	Formular(Apho, L);
}
	
function Til() {
	// Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt. Wittgenstein
	let trans = Apparat(femininas);
	let Apho = "Die " + trans + " meiner Sprache bedeuten die " + trans + " meiner Welt."; 
	Formular(Apho, W);
}

function Missive() {
	// Alles Gute, was geschieht, setzt das Nächste in Bewegung. Goethe
	let trans = Apparat(neutra);
	let Apho = "Alles Gute, was geschieht, setzt das " + trans + " in Bewegung.";
	Formular(Apho, G);
}	

function Terra() {
	// Jeder Tag ist ein kleines Leben. Schopenhauer
	let trans = Apparat(maskulina);
	let transeunt = Apparat(neutra);
	let Apho = "Jeder " + trans + " ist ein kleines " + transeunt + ".";
	Formular(Apho, SH);
}

function Lime() {
	// Ohne Sicherheit ist keine Freiheit. W v Humboldt
	let trans = Apparat(feminina);
	let transeunt = Apparat(feminina);
	let Apho = "Ohne " + trans + " ist keine " + transeunt + ".";
	Formular (Apho, HU);
}

function Alpine() {
	// Am Mute hängt der Erfolg. Fontane
	let trans = Apparat(maskulina);
	let transeunt = Apparat(maskulina);
	let Apho = "Am " + trans + " hängt der " + transeunt + ".";
	Formular(Apho, F);
}

function Strate() {
	// Des Menschen Wille, das ist sein Glück. Lessing
	let trans = Apparat(maskulina);
	let transeunt = Apparat(neutra);
	let Apho = "Des Menschen " + trans + ", das ist sein " + transeunt + ".";
	Formular(Apho, LS);
}

function Urban() {
	// Ein Gespenst geht um in Europa - das Gespenst des ...
	let trans = Apparat(neutra);
	let transeunt = Apparat(genitivmaskulina);
	let Apho = "Ein " + trans + " geht um in Europa - das " + trans + " des " + transeunt + ".";
	Formular(Apho, M);
}

function Mission() {
	// Fleiß ist aller Tugenden Anfang. Fritz II.
	let trans = Apparat(femininas);
	let Apho = "Fleiß ist aller " + trans + " Anfang.";
	Formular(Apho, FR);
}

function Stantiv() {
	// Die Liebe ist der Liebe Preis. Schiller
	let trans = Apparat(feminina);
	let transeunt = Apparat(maskulina);
	let Apho = "Die " + trans + " ist der " + trans + " " + transeunt + ".";
	Formular(Apho, SC);
}

function Optimal() {
	// Kein Mensch taugt ohne Freude. Fritz II
	let trans = Apparat(feminina);
	let Apho = "Kein Mensch taugt ohne " + trans + ".";
	Formular(Apho, FR);
}

function Sequent() {
	// Die Welt ist alles was der Fall ist. Wittgenstein
	let trans = Apparat(feminina);
	let transeunt = Apparat(maskulina);
	let Apho = "Die " + trans + " ist alles was der " + transeunt + " ist.";
	Formular(Apho, W);
}

function System() {
	// Wenn wir die Ziele wollen, wollen wir auch die Mittel. Kant
	let trans = Apparat(femininas);
	let transeunt = Apparat(neutronen);
	let Apho = "Wenn wir die " + trans + " wollen, wollen wir auch die " + transeunt + ".";
	Formular(Apho, K);
}

function Ventionierung() {
	// Das Gesetz ist der Freund des Schwachen. Schiller
	let trans = Apparat(neutra);
	let transeunt = Apparat(maskulina);
	let Apho = "Das " + trans + " ist der " + transeunt + " des Schwachen.";
	Formular(Apho, SC);
}

function Sumiere() {
	// Das Ganze ist mehr als die Summe seiner Teile. Aristoteles
	let trans = Apparat(neutra);
	let transeunt = Apparat(feminina);
	let Apho = "Das " + trans + " ist mehr als die " + transeunt + " seiner Teile.";
	Formular(Apho, A);
}

function Kultur() {
	// Mit dem Wissen wächst der Zweifel. Goethe
	let trans = Apparat(dativmaskulina);
	let transeunt = Apparat(maskulina);
	let Apho = "Mit dem " + trans + " wächst der " + transeunt + ".";
	Formular(Apho, G);
}

function Mersion() {
	// Die Religion ist das Opium des Volks. Marx
	let trans = Apparat(feminina);
	let transeunt = Apparat(genitivneutra);
	let Apho = "Die " + trans + " ist das Opium des " + transeunt + ".";
	Formular(Apho, M);
}

function Iure() {
	// Erster und einziger Grundsatz der Sexualethik: der Ankläger hat immer Unrecht. Adorno
	let trans = Apparat(maskulina);
	let transeunt = Apparat(maskulina);
	let Apho = "Erster und einziger " + trans + " der Sexualethik: ";
	Apho += "der " + transeunt + " hat immer Unrecht.";
	Formular(Apho, TA);
}

function Nova() {
	// Möge die Macht mit Euch sein. George Lucas
	let trans = Apparat(feminina);
	let transeunt = Apparat(verben);
	let Apho = "Möge die " + trans + " mit Euch " + transeunt + ".";
	Formular(Apho, LU);
}

function Apparat() {
	let what = arguments[0];
	return what[Math.floor(Math.random() * (what.length-1) + 0)];
}

function Formular(what, who) {
	
	switch (couleur) {
		case 1:
			document.write('<span style="font-family: Times, serif; font-size: 1.1em; color: red;">');
			break;
		case 2:
			document.write('<span style="font-family: Times, serif; font-size: 1.1em; color: blue;">');
			break;
		case 3:
			document.write('<span style="font-family: Times, serif; font-size: 1.1em; color: green;">');
			break;
		case 4:
			document.write('<span style="font-family: Times, serif; font-size: 1.1em; color: brown;">');
			break;
		}

	document.write("<p>" + what + "</p>");
	document.write("</span>");

	couleur < 4 ? couleur++ : couleur = 1;
	document.write('<span style="font-family: Times, serif; font-size: 0.9em; font-style: italic; color: black;">');
	document.write('<p>' + epi + ' ' + who + '</p></span><br>');

}


function Praeparat() {
	
	maskulina = "Abend,Absender,Abflug,Alkohol,Anfang,Angestellte,Anruf,Anzug,Anrufbeantworter,Anschluss,Apfel,Arm,Arzt,Aufzug,Ausweis,Automat,Arbeitsplatz,Ausländer,Bahnhof,Balkon,Bahnsteig,Baum,Beamte,Berg,Bogen,Besuch,Beruf,Bildschirm,Blick,Brief,Briefumschlag,Briefkasten,Bruder,Buchstabe,Bus,Busen,Computer,Deutsche,Doktor,Dezember,Dienstag,Durst,Drucker,Ehemann,Eingang,Einwohner,Empfänger,Export,Fahrer,Fahrplan,Fahrschein,Februar,Fehler,Fernseher,Finger,Fisch,Flughafen,Flur,Fotoapparat,Friseur,Freund,Frühling,Füller,Fuß,Fußboden,Garten,Gast,Geburtstag,Gruß,Hafen,Hamburger,Herbst,Herr,Himmel,Hut,Hunger,Januar,Juli,Juni,Kaffee,Kakao,Keller,Kellner,Kleiderhaken,Koch,Kognak,Kuchen,Kugelschreiber,Kuchen,Kunde,Laden,Lehrer,Locher,Löffel,Mai,März,Mann,Markt,Marktplatz,Monitor,Name,November,Oktober,Opa,Park,Rock,Pass,Passant,Platz,Projektor,Pullover,Radiergummi,Regen,Rock,Rücken,Schinken,Schlüssel,Schnaps,Schnee,Schrank,Schwanz,September,See,Sessel,Schalter,Schirm,Schlüssel,Sommer,Star,Stock,Stoff,Strumpf,Stuhl,Student,Supermarkt,Tag,Tee,Teller,Teppich,Termin,Test,Text,Tisch,Topf,Tourist,Turm,Unfall,Unterricht,Unterschied,Urlaub,Vater,Vermieter,Verkäufer,Verkehr,Wagen,Wald,Weg,Wein,Wind,Winter,Wunsch,Wochentag,Wunsch,Zahn,Zeiger,Zettel,Zucker,Zug,Zuschauer".split(',');
	genitivmaskulina = "Abends,Absenders,Abflugs,Alkohols,Anfangs,Angestellten,Anrufs,Anzugs,Anrufbeantworters,Anschlusses,Apfels,Arms,Arzts,Aufzugs,Ausweises,Automats,Arbeitsplatzes,Ausländers,Bahnhofs,Balkons,Bahnsteigs,Baums,Beamten,Berges,Bogens,Besuchs,Berufs,Bildschirms,Blickes,Briefes,Briefumschlags,Briefkastens,Bruders,Buchstaben,Busses,Computers,Deutschen,Doktors,Dezembers,Dienstags,Dursts,Druckers,Ehemanns,Eingangs,Einwohners,Empfängers,Exports,Fahrers,Fahrplans,Fahrscheins,Februars,Fehlers,Fernsehers,Fingers,Fisches,Flughafens,Flurs,Fotoapparats,Friseurs,Freundes,Frühlings,Füllers,Fußes,Fußbodens,Gartens,Gastes,Geburtstags,Grußes,Hafens,Hamburgers,Herbstes,Herrn,Himmels,Hutes,Hungers,Januars,Julis,Junis,Kaffees,Kakaos,Kellers,Kellners,Kleiderhakens,Koches,Kognaks,Kuchens,Kugelschreibers,Kunden,Ladens,Lehrers,Lochers,Löffels,Mais,Märzes,Mannes,Marktes,Marktplatzes,Monitors,Namen,Novembers,Oktobers,Opas,Parkes,Rockes,Passes,Passanten,Platzes,Projektors,Pullovers,Radiergummis,Regens,Rockes,Rückens,Schinkens,Schlüssels,Schnapses,Schnees,Schrankes,Schwanzes,Septembers,Sees,Sessels,Schalters,Schirmes,Schlüssels,Sommers,Stars,Stockes,Stoffes,Strumpfes,Stuhls,Students,Supermarktes,Tags,Tees,Tellers,Teppichs,Termins,Tests,Textes,Tisches,Topfes,Tourists,Turms,Unfalls,Unterrichts,Unterschieds,Urlaubs,Vaters,Vermieters,Verkäufers,Verkehrs,Wagens,Walds,Weges,Weines,Windes,Winters,Wunsches,Wochentags,Zahnes,Zeigers,Zettels,Zuckers,Zugs,Zuschauers".split(',');
	dativmaskulina = "Abend,Absender,Abflug,Alkohol,Anfang,Angestellten,Anrufer,Anzug,Anrufbeantworter,Anschluss,Apfel,Arm,Arzt,Aufzug,Ausweis,Automat,Arbeitsplatz,Ausländer,Bahnhof,Balkon,Bahnsteig,Baum,Beamten,Berg,Bogen,Besuch,Beruf,Bildschirm,Blick,Brief,Briefumschlag,Briefkasten,Bruder,Buchstaben,Bus,Computer,Deutschen,Doktor,Dezember,Dienstag,Durst,Drucker,Ehemann,Einwohner,Empfänger,Export,Fahrer,Fahrplan,Fahrschein,Februar,Fehler,Fernseher,Finger,Fisch,Flughafen,Flur,Fotoapparat,Friseur,Freund,Frühling,Füller,Fuß,Fußboden,Garten,Gast,Geburtstag,Gruß,Hafen,Hamburger,Herbst,Herr,Himmel,Hut,Hunger,Januar,Juli,Juni,Kaffee,Kakao,Keller,Kellner,Kleiderhaken,Koch,Kognak,Kuchen,Kugelschreiber,Kuchen,Kunden,Laden,Lehrer,Locher,Löffel,Mai,März,Mann,Markt,Marktplatz,Monitor,Namen,November,Oktober,Opa,Park,Rock,Pass,Passant,Platz,Projektor,Pullover,Radiergummi,Regen,Rock,Rücken,Schinken,Schlüssel,Schnaps,Schwanz,Schnee,Schrank,September,See,Sessel,Schalter,Schirm,Schlüssel,Sommer,Star,Stock,Stoff,Strumpf,Stuhl,Student,Supermarkt,Tag,Tee,Teller,Teppich,Termin,Test,Text,Tisch,Topf,Tourist,Turm,Unfall,Unterricht,Unterschied,Urlaub,Vater,Vermieter,Verkäufer,Verkehr,Wagen,Wald,Weg,Wein,Wind,Winter,Wunsch,Wochentag,Wunsch,Zahn,Zeiger,Zettel,Zucker,Zug,Zuschauer".split(',');
	maskuli = "Abende,Absender,Abflüge,Alkoholika,Anfänge,Angestellten,Anrufe,Anzüge,Anrufbeantworter,Anschlüsse,Äpfel,Arme,Ärzte,Aufzüge,Ausweise,Automaten,Arbeitsplätze,Ausländer,Bahnhöfe,Balkone,Bahnsteige,Bäume,Beamten,Berge,Bögen,Besuche,Berufe,Bildschirme,Blicke,Briefe,Briefumschläge,Briefkästen,Brüder,Buchstaben,Busse,Computer,Deutschen,Doktoren,Drucker,Ehemänner,Eingänge,Einwohner,Empfänger,Fahrer,Fahrpläne,Fahrscheine,Fehler,Fernseher,Finger,Fische,Flughafen,Fotoapparate,Friseure,Freunde,Füße,Fußböden,Gärten,Gäste,Geburtstage,Grüße,Häfen,Hamburger,Herren,Himmel,Hüte,Kakaos,Keller,Kellner,Kleiderhaken,Köche,Kuchen,Kugelschreiber,Kunden,Läden,Lehrer,Locher,Löffel,Männer,Märkte,Marktplätze,Monitore,Namen,Parks,Röcke,Pässe,Passanten,Plätze,Projektoren,Pullover,Radiergummis,Rücken,Schinken,Schlüssel,Schnäpse,Schränke,Schwänze,Seen,Sessel,Schalter,Schirme,Sommer,Stöcke,Stoffe,Strümpfe,Stühle,Studenten,Supermärkte,Tage,Teller,Teppiche,Termine,Tests,Texte,Tische,Töpfe,Touristen,Türme,Unfälle,Unterschiede,Urlaube,Väter,Vermieter,Verkäufer,Wälder,Wege,Winde,Winter,Wünsche,Wochentage,Zähne,Zeiger,Zettel,Zucker,Züge,Zuschauer".split(',');

	feminina = "Adresse,Ärztin,Abfahrt,Angestellte,Ankunft,Anrede,Ansage,Apfelsine,Apotheke,Ausländerin,Banane,Bank,Bankkarte,Batterie,Bedienung,Beratung,Bestellung,Bibliothek,Birne,Bluse,Brille,Brücke,City,Cola,Decke,Diskette,Dolmetscherin,Dose,Dusche,Eile,Einladung,Eintrittskarte,Etage,Fabrik,Fahrkarte,Fähre,Familie,Farbe,Festung,Fotografie,Frage,Funktion,Gabel,Garage,Gardine,Gasse,Gitarre,Größe,Hilfe,Hose,Hure,Hütte,Information,Kasse,Kassette,Kirche,Krawatte,Kreditkarte,Kreide,Küche,Kultur,Lampe,Landkarte,Landschaft,Mandarine,Maschine,Maus,Milch,Mutter,Mütze,Nachbarin,Nase,Natur,Nudel,Notiz,Nachricht,Nacht,Nummer,Oma,Oper,Operation,Ordnung,Pause,Pflanze,Pizza,Polizistin,Post,Postkarte,Prüfung,Reparatur,Reservierung,Rose,Sache,Sahne,Schlampe,Schokolade,Schülerin,Schule,Sendung,Sehenswürdigkeit,SMS,Sekretärin,Seife,Sekunde,Socke,Sonne,Stadt,Suppe,Straße,Straßenbahn,Stunde,Studentin,Scheckkarte,Tasche,Tankstelle,Tasse,Terrasse,Tochter,Toilette,Tomate,Torte,Treppe,Tunika,Tüte,U-Bahn,Verspätung,Überraschung,Verbindung,Übernachtung,Unterhaltung,Verkäuferin,U-Bahn,Untersuchung,Übung,Uhr,Umwelt,Universität,Unterschrift,Vorwahl,Verbindung,Wand,Wäsche,Wanderung,Welt,Werbung,Wolke,Werkstatt,Wirtschaft,Woche,Wohnung,Wurst,Zahl,Zeitschrift,Zeitung,Zigarette,Zitrone".split(',');
	femininas = "Adressen,Ärztinnen,Abfahrten,Angestellten,Ansagen,Apfelsinen,Apotheken,Ausländerinnen,Bananen,Bänke,Bankkarten,Batterien,Bedienungen,Beratungen,Bestellungen,Bibliotheken,Birnen,Blusen,Brillen,Brücken,Busen,Citys,Decken,Disketten,Dolmetscherinnen,Dosen,Duschen,Eile,Einladungen,Eintrittskarten,Etagen,Fabriken,Fahrkarten,Fähren,Familien,Farben,Festungen,Fotografien,Fragen,Funktionen,Gabeln,Garagen,Gardinen,Gassen,Gitarren,Größen,Hosen,Huren,Hütten,Informationen,Kassen,Kassetten,Kirchen,Krawatten,Kreditkarten,Kreiden,Küchen,Kulturen,Lampen,Landkarten,Landschaften,Mandarinen,Maschinen,Mäuse,Mütter,Mützen,Nachbarinnen,Nasen,Nudeln,Notizen,Nachrichten,Nächte,Nummern,Omas,Opern,Operationen,Ordnungen,Pausen,Pflanzen,Pizzen,Polizistinnen,Postkarten,Prüfungen,Reparaturen,Reservierungen,Rosen,Sachen,Schlampen,Schülerinnen,Schulen,Sendungen,Sehenswürdigkeiten,Sekretärinnen,Seifen,Sekunden,Socken,Städte,Suppen,Straßen,Straßenbahnen,Stunden,Studentinnen,Sünden,Scheckkarten,Taschen,Tankstellen,Tassen,Terrassen,Töchter,Toiletten,Tomaten,Torten,Treppen,Tüten,U-Bahnen,Verspätungen,Überraschungen,Verbindungen,Übernachtungen,Unterhaltungen,Verkäuferinnen,Untersuchungen,Übungen,Uhren,Universitäten,Unterschriften,Vorwahlen,Verbindungen,Wände,Wanderungen,Welten,Werbungen,Wolken,Werkstätten,Wochen,Wohnungen,Würste,Zahlen,Zeitungen,Zigaretten,Zitronen".split(',');
	
	neutra = "Alter,Angebot,Appartement,Auge,Ausland,Auto,Bad,Bein,Beispiel,Benzin,Bett,Bier,Bild,Blatt,Blut,Brot,Brötchen,Buch,Büro,Café,Datum,Ding,Doppelzimmer,Dorf,Einkaufszentrum,Ei,Eis,Ergebnis,Fahrrad,Fax,Fenster,Fernsehgerät,Fest,Feuer,Fieber,Fleisch,Flugzeug,Foto,Formular,Fräulein,Frühstück,Frühjahr,Fundbüro,Gefühl,Gemüse,Gepäck,Gericht,Gesicht,Geschäft,Geschirr,Geschenk,Gespräch,Getränk,Gewicht,Gewitter,Glas,Gleis,Glück,Guthaben,Haar,Handtuch,Handy,Haus,Heft,Hemd,Hotel,Huhn,Kännchen,Holz,Internet,Internat,Jahr,Kennzeichen,Kind,Kino,Kiosk,Kleid,Klo,Konzert,Konsulat,Konto,Land,Lager,Leben,Licht,Lied,Loch,Lokal,Mädchen,Mal,Meer,Messer,Metall,Möbelstück,Motorrad,Museum,Obst,Paket,Parfüm,Parlament,Praktikum,Problem,Programm,Radio,Raum,Rathaus,Regal,Reisebüro,Regen,Rezept,Reifen,Restaurant,Rind,Schiff,Schild,Schloss,Schnitzel,Schwein,Sofa,Sonderangebot,Spiel,Steak,Streichholz,Stück,Studium,Taxi,Telefon,Telefonbuch,Theater,Ticket,Tier,Thema,Tonbandgerät,Trinkgeld,Warenhaus,Wasser,Werkzeug,Wetter,Wiedersehen,Wort,Wunder,Zentrum,Zeugnis,Zimmer".split(',');
	neutronen = "Angebote,Appartements,Augen,Autos,Bäder,Beine,Beispiele,Betten,Biere,Bilder,Blätter,Brote,Brötchen,Bücher,Büros,Cafés,Daten,Dinger,Doppelzimmer,Dörfer,Einkaufszentren,Eier,Ergebnisse,Fahrräder,Faxe,Fenster,Fernsehgeräte,Feste,Flugzeuge,Fotos,Formulare,Fräulein,Fundbüros,Gefühle,Gepäckstücke,Gerichte,Gesichter,Geschäfte,Geschenke,Gespräche,Getränke,Gewichte,Gewitter,Gläser,Gleise,Haare,Handtücher,Handys,Häuser,Hefte,Hemden,Hotels,Hühner,Kännchen,Internate,Jahre,Kennzeichen,Kinder,Kinos,Kiosks,Kleider,Klos,Konzerte,Konsulate,Kontos,Länder,Lager,Leben,Lichter,Lieder,Löcher,Lokale,Mädchen,Male,Meere,Messer,Möbelstücke,Motorräder,Museen,Pakete,Parfüms,Parlamente,Praktika,Probleme,Programme,Radios,Räume,Rabatte,Rathäuser,Regale,Reisebüros,Regenschauer,Rezepte,Reifen,Restaurants,Rinder,Schiffe,Schilder,Schlösser,Schnitzel,Schweine,Sofas,Sonderangebote,Spiele,Steaks,Streichhölzer,Stücke,Studien,Taxis,Telefone,Telefonbücher,Theater,Tickets,Tiere,Themen,Tonbandgeräte,Trinkgelder,Warenhäuser,Wasser,Werkzeuge,Wiedersehen,Worte,Wunder,Zentren,Zeugnisse,Zimmer".split(',');
	genitivneutra = "Alters,Angebots,Appartements,Auges,Auslands,Autos,Bades,Beins,Beispiels,Benzins,Betts,Biers,Bildes,Blattes,Bluts,Brotes,Brötchens,Buches,Büros,Cafés,Datums,Dings,Doppelzimmers,Dorfes,Einkaufszentrums,Eis,Ergebnisses,Fahrrads,Faxes,Fensters,Fernsehgeräts,Festes,Feuers,Fiebers,Fleisches,Flugzeugs,Fotos,Formulars,Fräuleins,Frühstücks,Frühjahrs,Fundbüros,Gefühls,Gemüses,Gepäcks,Gerichts,Gesichts,Geschäfts,Geschirrs,Geschenks,Gesprächs,Getränks,Gewichts,Gewitters,Glases,Gleises,Glücks,Guthabens,Haars,Handtuchs,Handys,Hauses,Hefts,Hemds,Hotels,Huhns,Kännchens,Internets,Internats,Jahres,Kennzeichens,Kindes,Kinos,Kiosks,Kleids,Klos,Konzerts,Konsulats,Kontos,Lands,Lagers,Lebens,Lichts,Lieds,Lochs,Lokals,Mädchens,Meers,Messers,Metalls,Möbelstücks,Motorrads,Museums,Obstes,Paketes,Parfüms,Parlaments,Praktikums,Problems,Programms,Radios,Raums,Rauchers,Rathauses,Regals,Reisebüros,Regens,Rezeptes,Reifens,Restaurants,Rindes,Schiffes,Schildes,Schlosses,Schnitzels,Schweins,Sofas,Sonderangebots,Spiels,Steaks,Streichholz,Stücks,Studiums,Taxi,Telefons,Telefonbuchs,Theaters,Tickets,Tieres,Themas,Tonbandgeräts,Trinkgelds,Warenhauses,Wassers,Werkzeugs,Wetters,Wiedersehens,Wortes,Wunders,Zentrums,Zeugnisses,Zimmers".split(',');
	dativneutra = "Alter,Angebot,Appartement,Auge,Ausland,Auto,Bad,Bein,Beispiel,Benzin,Bett,Bier,Bild,Blatt,Blut,Brot,Brötchen,Buch,Büro,Café,Datum,Ding,Doppelzimmer,Dorf,Einkaufszentrum,Ei,Eis,Ergebnis,Fahrrad,Fax,Fenster,Fernsehgerät,Fest,Feuer,Fieber,Fleische,Flugzeuge,Foto,Formular,Fräulein,Frühstück,Frühjahr,Fundbüro,Gefühl,Gemüse,Gepäck,Gericht,Gesicht,Geschäft,Geschirr,Geschenk,Gespräch,Getränk,Gewicht,Gewitter,Glase,Gleise,Glücke,Guthaben,Haare,Handtuch,Handy,Hause,Hefte,Hemde,Hotel,Huhne,Kännchen,Holze,Internet,Internat,Jahre,Kennzeichen,Kinde,Kino,Kiosk,Kleide,Klo,Konzert,Konto,Lande,Lager,Leben,Lichte,Liede,Loche,Lokale,Mädchen,Meer,Messer,Metall,Motorrad,Museum,Obst,Paket,Parfüm,Parlament,Problem,Radio,Raume,Rathaus,Regal,Reisebüro,Regen,Rezept,Reifen,Restaurant,Rinde,Schiffe,Schilde,Schlosse,Schnitzel,Schweine,Sofa,Sonderangebot,Steak,Streichholz,Stücke,Studium,Taxi,Telefon,Telefonbuch,Theater,Ticket,Tier,Thema,Tonbandgerät,Trinkgeld,Warenhaus,Wasser,Werkzeug,Wetter,Wiedersehen,Worte,Wunder,Zentrum,Zeugnis,Zimmer".split(',');

	verben = "ärgern,arbeiten,beraten,bestellen,blättern,diskutieren,essen,fahren,fangen,ficken,fragen,frieren,gehen,hören,kaufen,lauschen,legen,lesen,machen,morden,packen,pissen,pressen,produzieren,putzen,rauchen,reden,rennen,rudern,sagen,schießen,schlafen,schleudern,schreiben,schwitzen,sehen,setzen,singen,spielen,springen,spritzen,sprudeln,stellen,sticheln,stinken,streiten,treiben,trinken,töten,umsteigen,zeigen,zerren,zimmern".split(',');

	document.write('<h2 style="font-family: Helvetica, Arial, sans-serif; font-size: 1.5em; color: black;">Deutsch als Fremdsprache</h2><br>');
}
