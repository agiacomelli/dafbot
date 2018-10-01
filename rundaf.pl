#!/usr/bin/perl


# dafbot
#
# daf = Deutsch als Fremdsprache
#
# Adrian Giacomelli
#
# Frankfurt, 2017/2018
#
# adriangiacomelli@icloud.com
#

# Das Script rundaf.pl erzeugt zufallsgenerierte Aphorismen indem das DAF-Basis-Vokabular mit Aphorismen einiger herausragender deutschen Denker (inkl. zweier Vertreter des erweiterten deutschen Kulturkreises i.e. das Abendland) gekreuzt werden. 
# Die Auswahl des Vokabulars oblag nicht mir. Die Auswahl der Sprüche hingegen schon. 
# Dabei richtete sich mein Fokus auf solche, die a) als besonders deutsch gelten können und b) besonders makaber oder irgendwie anders Kontraste zum Thema der Flüchtlingskrise allgemein und besonders zu denen, die in DAF-Kursen sitzen und schwitzen, ausschwitzen.


my @maskulina;
my @maskuli;
my @genitivmaskulina;
my @feminina;
my @femininas;
my @neutra;
my @neutronen;
my @genitivneutra;
my @verben;
my $trans;
my $A =  "Aristoteles";
my $TA = "Theodor W. Adorno";
my $F =  "Theodor Fontane";
my $FR = "Friedrich II. (Der alte Fritz)";
my $G =  "Goethe";
my $H =  "Hegel";
my $K =  "Kant";
my $LE = "Lessing";
my $L =  "Lichtenberg";
my $LS = "Lessing";
my $LU = "Goerge Lucas";
my $M =  "Karl Marx";
my $HU = "W. von Humboldt";
my $SC = "Schiller";
my $SH = "Schopenhauer";
my $ST = "Theodor Storm";
my $W =  "Wittgenstein";
my $epi = "- Frei nach";

#########################
#			#
#   D A F - S O N G	#
#   ===============	#
#			#
#########################


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


##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################


sub Tropisch {
	# Ein Freund aller ist niemandes Freund. Aristoteles
	my $trans = Apparat(1);
	Color(1250);
	print "Ein $trans ist niemandes $trans.\n";
	end($A);
}

sub Kutan {
	# Das Schicksal mischt die Karten und wir spielen. Schopenhauer
	my $trans = Apparat(3);
	Color(1253);
	print "Das $trans mischt die ";
	$trans = Apparat(21);
	print "$trans und wir spielen.\n";
	end($SH);
}

sub Sahara {
	# Verbunden werden auch die Schwachen mächtig. Schiller
	my $trans = Apparat(11);
	Color(1254);
	print "Verbunden werden auch die $trans mächtig.\n";
	end($SC);
}

sub Spezies {
	# Kein Mensch ist so wichtig, wie er sich nimmt. Kant
	my $trans = Apparat(1);
	Color(1256);
	print "Kein $trans ist so wichtig, wie er sich nimmt.\n";
	end($K);
}

sub Strahiere {
	# Er ist ein unbeschriebenes Blatt. Aristoteles
	my $trans = Apparat(3);
	Color(1250);
	print "Er ist ein unbeschriebenes $trans.\n";
	end($A);
}

sub Kontinent {
	# Man muß sein Leben aus dem Holz schnitzen, das man zur Verfügung hat. Th. Storm
	my $trans = Apparat(3);
	Color(1253);
	print "Man muss sein Leben aus dem $trans schnitzen, das man zur Verfügung hat.\n";
	end($ST);
}

sub Marin {
	# Nur der verdient sich Freiheit wie das Leben, der täglich sie erobern muss. Goethe
	my $trans = Apparat(3);
	Color(1254);
	print "Nur der verdient sich Freiheit wie das $trans, der täglich sie erobern muss.\n";
	end($G);
}

sub Versiv {
	# Man muß es so einrichten, daß einem das Ziel entgegenkommt. Fontane
	my $trans = Apparat(5);
	Color(1256);
	print "Man muß es so $trans, ";
	$trans = Apparat(3);
	print "dass einem das $trans entgegenkommt.\n";
	end($F);
}

sub Jektive() {
	# Der Wechsel allein ist das Beständige. Schopenhauer
	my $trans = Apparat (1);
	Color(1250);
	print "Der $trans allein ist das ";
	$trans = Apparat(3);
	print "$trans.\n";
	end($SC);
}

sub Nautica() {
	# Nur der Betrug entehrt, der Irrtum nie. Lichtenberg
 	my $trans = Apparat(1);
	Color(1253);
	print "Nur der $trans entehrt, der ";
	$trans = Apparat(1);
	print "$trans nie.\n";
	end($L);
}

sub Til {
	# Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt. Wittgenstein
	my $trans = Apparat(31);
	Color(1254);
	print "Die $trans meiner Sprache bedeuten die $trans meiner Welt.\n";
	end($W);
}

sub Missive {
	# Alles Gute, was geschieht, setzt das Nächste in Bewegung. Goethe
	my $trans = Apparat(3);
	Color(1256);
	print "Alles $trans, was geschieht, setzt ";
	$trans = Apparat(2);
	print "die $trans in Bewegung.\n";
	end($G);
}

sub Terra {
	# Jeder Tag ist ein kleines Leben. Schopenhauer
	my $trans = Apparat(1);
	Color(1250);
	print "Jeder $trans ist ein kleines Leben.\n";
	end($SH);
}

sub Lime {
	# Ohne Sicherheit ist keine Freiheit. WvHumboldt
	my $trans = Apparat(2);
	Color(1254);
	print "Ohne $trans ";
	$trans = Apparat(2);
	print "ist keine $trans.\n";
	end($HU);
}

sub Alpine {
	# Am Mute hängt der Erfolg. Fontane
	my $trans = Apparat(1);
	Color(1256);
	print "Am $trans ";
	$trans = Apparat(1);
	print "hängt der $trans.\n";
	end($F);
}

sub Strate {
	# Des Menschen Wille, das ist sein Glück. Lessing
	my $trans = Apparat(1);
	Color(1250);
	print "Des Menschen $trans, ";
	$trans = Apparat(3);
	print "das ist sein $trans.\n";
	end($LS);
}

sub Urban {
	# Ein Gespenst geht um in Europa - das Gespenst des ...
	my $trans = Apparat(3);
	Color(1253);
	print "Ein $trans geht um in Europa - das $trans ";
	$trans = Apparat(12);
	print "des $trans.\n";
	end($M);
}

sub Mission {
	# Fleiß ist aller Tugenden Anfang. Fritz II.
	my $trans = Apparat(1);
	Color(1254);
	print "Der $trans ist ";
	$trans = Apparat(1);
	print "aller Tugenden $trans.\n";
	end($FR);
}

sub Stantiv {
	# Die Liebe ist der Liebe Preis. Schiller
	my $trans = Apparat(2);
	Color(1256);
	print "Die $trans ist der $trans ";
 	$trans = Apparat(1);
	print "$trans.\n";
	end($SC);
}

sub Optimal {
	# Kein Mensch taugt ohne Freude. Fritz II
	my $trans = Apparat(1);
	Color(1250);
	print "Kein $trans taugt ohne ";
	$trans = Apparat(2);
	print "$trans.\n";
	end($FR);
}

sub Sequent {
	# Die Welt ist alles was der Fall ist. Wittgenstein
	my $trans = Apparat(2);
	Color(1253);
	print "Die $trans ist alles ";
	$trans = Apparat(1);
	print "was der $trans ist.\n";
	end ($W);
}

sub System {
	# Wenn wir die Ziele wollen, wollen wir auch die Mittel. Kant
	my $trans = Apparat(31);
	Color(1254);
	print "Wenn wir die $trans wollen, ";
	$trans = Apparat(31);
	print "wollen wir auch die $trans.\n";
	end($K);
}

sub Ventionierung {
	# Das Gesetz ist der Freund des Schwachen. Schiller
	my $trans = Apparat(3);
	Color(1256);
	print "Das $trans ist der ";
	$trans = Apparat(12);
	print "Freund des $trans.\n";
	end($K);
}

sub Sumiere {
	# Das Ganze ist mehr als die Summe seiner Teile. Aristoteles
	my $trans = Apparat(3);
	Color(1250);
	print "Das $trans ist mehr als ";
	$trans = Apparat(2);
	print "die $trans seiner Teile.\n";
	end($A);
}

sub Kultur {
	# Mit dem Wissen wächst der Zweifel. Goethe
	my $trans = Apparat(1);
	Color(1253);
	print "Mit dem Wissen wächst der $trans.\n";
	end($G);
}

sub Mersion {
	# Die Religion ist das Opium des Volks. Marx
	my $trans = Apparat(2);
	Color(1254);
	print "Die $trans ist das Opium des ";
	$trans = Apparat(32);
	print "$trans.\n";
	end($M);
}

sub Iure {
	# Erster und einziger Grundsatz der Sexualethik: der Ankläger hat immer Unrecht. Adorno
	my $trans = Apparat(1);
	Color(1256);
	print "Erster und einziger $trans der Sexualethik: ";
	$trans = Apparat(1);
	print "der $trans hat immer Unrecht.\n";
	end ($TA);
}

sub Nova {
	my $trans = Apparat(2);
	Color(1250);
	print "Möge die $trans mit euch sein.\n";
	end($LU);
}

sub Color {
	my $para = shift @_;
	# Albania 	1250 	RED
	# Germany 	1252 	WHITE
	# Greece 	1253	BLUE
	# Turkey	1254 	CYAN
	# Arabia 	1256	GREEN
	if ($para == 1250) { 	print "\033[1;31m"; }
	if ($para == 1252) {	print "\033[0;37m"; }
	if ($para == 1253) {	print "\033[1;34m"; }
	if ($para == 1254) {	print "\033[1;36m"; }
	if ($para == 1256) {	print "\033[1;32m"; }
}

sub Praeparat {

	@maskulina = split /,/ , "Abend,Absender,Abflug,Alkohol,Anfang,Angestellte,Anruf,Anzug,Anrufbeantworter,Anschluss,Apfel,Arm,Arzt,Aufzug,Ausweis,Automat,Arbeitsplatz,Ausländer,Bahnhof,Balkon,Bahnsteig,Baum,Beamte,Berg,Bogen,Besuch,Beruf,Bildschirm,Blick,Brief,Briefumschlag,Briefkasten,Bruder,Buchstabe,Bus,Computer,Deutsche,Doktor,Dezember,Dienstag,Durst,Drucker,Ehemann,Eingang,Einwohner,Empfänger,Export,Fahrer,Fahrplan,Fahrschein,Februar,Fehler,Fernseher,Finger,Fisch,Flughafen,Flur,Fotoapparat,Friseur,Freund,Frühling,Füller,Fuß,Fußboden,Garten,Gast,Geburtstag,Gruß,Hafen,Hamburger,Herbst,Herr,Himmel,Hut,Hunger,Januar,Juli,Juni,Kaffee,Kakao,Keller,Kellner,Kleiderhaken,Koch,Kognak,Kuchen,Kugelschreiber,Kuchen,Kunde,Laden,Lehrer,Locher,Löffel,Mai,März,Mann,Markt,Marktplatz,Monitor,Name,November,Oktober,Opa,Park,Rock,Pass,Passant,Platz,Projektor,Pullover,Radiergummi,Regen,Rock,Rücken,Schinken,Schlüssel,Schnaps,Schnee,Schrank,September,See,Sessel,Schalter,Schirm,Schlüssel,Sommer,Star,Stock,Stoff,Strumpf,Stuhl,Student,Supermarkt,Tag,Tee,Teller,Teppich,Termin,Test,Text,Tisch,Topf,Tourist,Turm,Unfall,Unterricht,Unterschied,Urlaub,Vater,Vermieter,Verkäufer,Verkehr,Wagen,Wald,Weg,Wein,Wind,Winter,Wunsch,Wochentag,Wunsch,Zahn,Zeiger,Zettel,Zucker,Zug,Zuschauer";
	@genitivmaskulina = split /,/ , "Abends,Absenders,Abflugs,Alkohols,Anfangs,Angestellten,Anrufs,Anzugs,Anrufbeantworters,Anschlusses,Apfels,Arms,Arzts,Aufzugs,Ausweises,Automats,Arbeitsplatzes,Ausländers,Bahnhofs,Balkons,Bahnsteigs,Baums,Beamten,Berges,Bogens,Besuchs,Berufs,Bildschirms,Blickes,Briefes,Briefumschlags,Briefkastens,Bruders,Buchstaben,Busses,Computers,Deutschen,Doktors,Dezembers,Dienstags,Dursts,Druckers,Ehemanns,Eingangs,Einwohners,Empfängers,Exports,Fahrers,Fahrplans,Fahrscheins,Februars,Fehlers,Fernsehers,Fingers,Fisches,Flughafens,Flurs,Fotoapparats,Friseurs,Freundes,Frühlings,Füllers,Fußes,Fußbodens,Gartens,Gastes,Geburtstags,Grußes,Hafens,Hamburgers,Herbstes,Herrn,Himmels,Hutes,Hungers,Januars,Julis,Junis,Kaffees,Kakaos,Kellers,Kellners,Kleiderhakens,Koches,Kognaks,Kuchens,Kugelschreibers,Kunden,Ladens,Lehrers,Lochers,Löffels,Mais,Märzes,Mannes,Marktes,Marktplatzes,Monitors,Namen,Novembers,Oktobers,Opas,Parkes,Rockes,Passes,Passanten,Platzes,Projektors,Pullovers,Radiergummis,Regens,Rockes,Rückens,Schinkens,Schlüssels,Schnapses,Schnees,Schrankes,Septembers,Sees,Sessels,Schalters,Schirmes,Schlüssels,Sommers,Stars,Stockes,Stoffes,Strumpfes,Stuhls,Students,Supermarktes,Tags,Tees,Tellers,Teppichs,Termins,Tests,Textes,Tisches,Topfes,Tourists,Turms,Unfalls,Unterrichts,Unterschieds,Urlaubs,Vaters,Vermieters,Verkäufers,Verkehrs,Wagens,Walds,Weges,Weines,Windes,Winters,Wunsches,Wochentags,Zahnes,Zeigers,Zettels,Zuckers,Zugs,Zuschauers";
	@maskuli = split /,/ , "Abende,Absender,Abflüge,Alkoholika,Anfänge,Angestellten,Anrufe,Anzüge,Anrufbeantworter,Anschlüsse,Äpfel,Arme,Ärzte,Aufzüge,Ausweise,Automaten,Arbeitsplätze,Ausländer,Bahnhöfe,Balkone,Bahnsteige,Bäume,Beamten,Berge,Bögen,Besuche,Berufe,Bildschirme,Blicke,Briefe,Briefumschläge,Briefkästen,Brüder,Buchstaben,Busse,Computer,Deutschen,Doktoren,Drucker,Ehemänner,Eingänge,Einwohner,Empfänger,Fahrer,Fahrpläne,Fahrscheine,Fehler,Fernseher,Finger,Fische,Flughafen,Fotoapparate,Friseure,Freunde,Füße,Fußböden,Gärten,Gäste,Geburtstage,Grüße,Häfen,Hamburger,Herren,Himmel,Hüte,Kakaos,Keller,Kellner,Kleiderhaken,Köche,Kuchen,Kugelschreiber,Kunden,Läden,Lehrer,Locher,Löffel,Männer,Märkte,Marktplätze,Monitore,Namen,Parks,Röcke,Pässe,Passanten,Plätze,Projektoren,Pullover,Radiergummis,Rücken,Schinken,Schlüssel,Schnäpse,Schränke,Seen,Sessel,Schalter,Schirme,Sommer,Stöcke,Stoffe,Strümpfe,Stühle,Studenten,Supermärkte,Tage,Teller,Teppiche,Termine,Tests,Texte,Tische,Töpfe,Touristen,Türme,Unfälle,Unterschiede,Urlaube,Väter,Vermieter,Verkäufer,Wälder,Wege,Winde,Winter,Wünsche,Wochentage,Zähne,Zeiger,Zettel,Zucker,Züge,Zuschauer";
	@feminina = split /,/ , "Adresse,Ärztin,Abfahrt,Angestellte,Ankunft,Anrede,Ansage,Apfelsine,Apotheke,Ausländerin,Banane,Bank,Bankkarte,Batterie,Bedienung,Beratung,Bestellung,Bibliothek,Birne,Bluse,Brille,Brücke,City,Cola,Decke,Diskette,Dolmetscherin,Dose,Dusche,Eile,Einladung,Eintrittskarte,Etage,Fabrik,Fahrkarte,Fähre,Familie,Farbe,Festung,Fotografie,Frage,Funktion,Gabel,Garage,Gardine,Gasse,Gitarre,Größe,Hilfe,Hose,Hure,Hütte,Information,Kasse,Kassette,Kirche,Krawatte,Kreditkarte,Kreide,Küche,Kultur,Lampe,Landkarte,Landschaft,Mandarine,Maschine,Maus,Milch,Mutter,Mütze,Nachbarin,Nase,Natur,Nudel,Notiz,Nachricht,Nacht,Nummer,Oma,Oper,Operation,Ordnung,Pause,Pflanze,Pizza,Polizistin,Post,Postkarte,Prüfung,Reparatur,Reservierung,Rose,Sache,Sahne,Schokolade,Schülerin,Schule,Sendung,Sehenswürdigkeit,SMS,Sekretärin,Seife,Sekunde,Socke,Sonne,Stadt,Suppe,Straße,Straßenbahn,Stunde,Studentin,Scheckkarte,Tasche,Tankstelle,Tasse,Terrasse,Tochter,Toilette,Tomate,Torte,Treppe,Tunika,Tüte,U-Bahn,Verspätung,Überraschung,Verbindung,Übernachtung,Unterhaltung,Verkäuferin,U-Bahn,Untersuchung,Übung,Uhr,Umwelt,Universität,Unterschrift,Vorwahl,Verbindung,Wand,Wäsche,Wanderung,Welt,Werbung,Wolke,Werkstatt,Wirtschaft,Woche,Wohnung,Wurst,Zahl,Zeitschrift,Zeitung,Zigarette,Zitrone";
	@femininas = split /,/, "Adressen,Ärztinnen,Abfahrten,Angestellten,Ansagen,Apfelsinen,Apotheken,Ausländerinnen,Bananen,Bänke,Bankkarten,Batterien,Bedienungrn,Beratungen,Bestellungen,Bibliotheken,Birnen,Blusen,Brillen,Brücken,Citys,Decken,Disketten,Dolmetscherinnen,Dosen,Duschen,Eile,Einladungen,Eintrittskarten,Etagen,Fabriken,Fahrkarten,Fähren,Familien,Farben,Festungen,Fotografien,Fragen,Funktionen,Gabeln,Garagen,Gardinen,Gassen,Gitarren,Größen,Hosen,Huren,Hütten,Informationen,Kassen,Kassetten,Kirchen,Krawatten,Kreditkarten,Kreiden,Küchen,Kulturen,Lampen,Landkarten,Landschaften,Mandarinen,Maschinen,Mäuse,Mütter,Mützen,Nachbarinnen,Nasen,Nudeln,Notizen,Nachrichten,Nächte,Nummern,Omas,Opern,Operationen,Ordnungen,Pausen,Pflanzen,Pizzen,Polizistinnen,Postkarten,Prüfungen,Reparaturen,Reservierungen,Rosen,Sachen,Schülerinnen,Schulen,Sendungen,Sehenswürdigkeiten,Sekretärinnen,Seifen,Sekunden,Socken,Städte,Suppen,Straßen,Straßenbahnen,Stunden,Studentinnen,Sünden,Scheckkarten,Taschen,Tankstellen,Tassen,Terrassen,Töchter,Toiletten,Tomaten,Torten,Treppen,Tüten,U-Bahnen,Verspätungen,Überraschungen,Verbindungen,Übernachtungen,Unterhaltungen,Verkäuferinnen,Untersuchungen,Übungen,Uhren,Universitäten,Unterschriften,Vorwahlen,Verbindungen,Wände,Wanderungen,Welten,Werbungen,Wolken,Werkstätten,Wirtschaften,Wochen,Wohnungen,Würste,Zahlen,Zeitschriften,Zeitungen,Zigaretten,Zitronen";
	@neutra = split /,/, "Alter,Angebot,Appartement,Auge,Ausland,Auto,Bad,Bein,Beispiel,Benzin,Bett,Bier,Bild,Blatt,Blut,Brot,Brötchen,Buch,Büro,Café,Datum,Ding,Doppelzimmer,Dorf,Einkaufszentrum,Ei,Eis,Ergebnis,Fahrkarte,Fahrrad,Fax,Fenster,Fernsehgerät,Fest,Feuer,Fieber,Fleisch,Flugzeug,Foto,Formular,Fräulein,Frühstück,Frühjahr,Fundbüro,Gefühl,Gemüse,Gepäck,Gericht,Gesicht,Geschäft,Geschirr,Geschenk,Gespräch,Getränk,Gewicht,Gewitter,Glas,Gleis,Glück,Guthaben,Haar,Handtuch,Handy,Haus,Heft,Hemd,Hotel,Huhn,Kännchen,Holz,Internet,Internat,Jahr,Kennzeichen,Kind,Kino,Kiosk,Kleid,Klo,Konzert,Konsulat,Konto,Land,Lager,Leben,Licht,Lied,Loch,Lokal,Mädchen,Mal,Meer,Messer,Metall,Möbelstück,Motorrad,Museum,Obst,Paket,Parfüm,Parlament,Praktikum,Problem,Programm,Radio,Raum,Raucher,Rabatt,Rathaus,Regal,Reisebüro,Regen,Rezept,Reifen,Restaurant,Rind,Schiff,Schild,Schloss,Schnitzel,Schwein,Sofa,Sonderangebot,Spiel,Steak,Streichholz,Stück,Studium,Taxi,Telefon,Telefonbuch,Theater,Ticket,Tier,Thema,Tonbandgerät,Trinkgeld,Warenhaus,Wasser,Werkzeug,Wetter,Wiedersehen,Wort,Wunder,Zentrum,Zeugnis,Zimmer";
	@neutronen = split /,/, "Angebote,Appartements,Augen,Autos,Bäder,Beine,Beispiele,Betten,Biere,Bilder,Blätter,Brote,Brötchen,Bücher,Büros,Cafés,Daten,Dinger,Doppelzimmer,Dörfer,Einkaufszentren,Eier,Ergebnisse,Fahrräder,Faxe,Fenster,Fernsehgeräte,Feste,Flugzeuge,Fotos,Formulare,Fräulein,Fundbüros,Gefühle,Gepäckstücke,Gerichte,Gesichter,Geschäfte,Geschenke,Gespräche,Getränke,Gewichte,Gewitter,Gläser,Gleise,Haare,Handtücher,Handys,Häuser,Hefte,Hemden,Hotels,Hühner,Kännchen,Internate,Jahre,Kennzeichen,Kinder,Kinos,Kiosks,Kleider,Klos,Konzerte,Konsulate,Kontos,Länder,Lager,Leben,Lichter,Lieder,Löcher,Lokale,Mädchen,Male,Meere,Messer,Möbelstücke,Motorräder,Museen,Pakete,Parfüms,Parlamente,Praktika,Probleme,Programme,Radios,Räume,Raucher,Rabatte,Rathäuser,Regale,Reisebüros,Regenschauer,Rezepte,Reifen,Restaurants,Rinder,Schiffe,Schilder,Schlösser,Schnitzel,Schweine,Sofas,Sonderangebote,Spiele,Steaks,Streichhölzer,Stücke,Studien,Taxis,Telefone,Telefonbücher,Theater,Tickets,Tiere,Themen,Tonbandgeräte,Trinkgelder,Warenhäuser,Wasser,Werkzeuge,Wiedersehen,Worte,Wunder,Zentren,Zeugnisse,Zimmer";
	@genitivneutra = split /,/, "Alters,Angebots,Appartements,Auges,Auslands,Autos,Bades,Beins,Beispiels,Benzins,Betts,Biers,Bildes,Blattes,Bluts,Brotes,Brötchens,Buches,Büros,Cafés,Datums,Dings,Doppelzimmers,Dorfes,Einkaufszentrums,Eis,Ergebnisses,Fahrrads,Faxes,Fensters,Fernsehgeräts,Festes,Feuers,Fiebers,Fleisches,Flugzeugs,Fotos,Formulars,Fräuleins,Frühstücks,Frühjahrs,Fundbüros,Gefühls,Gemüses,Gepäcks,Gerichts,Gesichts,Geschäfts,Geschirrs,Geschenks,Gesprächs,Getränks,Gewichts,Gewitters,Glases,Gleises,Glücks,Guthabens,Haars,Handtuchs,Handys,Hauses,Hefts,Hemds,Hotels,Huhns,Kännchens,Internets,Internats,Jahres,Kennzeichens,Kindes,Kinos,Kiosks,Kleids,Klos,Konzerts,Konsulats,Kontos,Lands,Lagers,Lebens,Lichts,Lieds,Lochs,Lokals,Mädchens,Meers,Messers,Metalls,Möbelstücks,Motorrads,Museums,Obstes,Paketes,Parfüms,Parlaments,Praktikums,Problems,Programms,Radios,Raums,Rauchers,Rabattes,Rathauses,Regals,Reisebüros,Regens,Rezeptes,Reifens,Restaurants,Rindes,Schiffes,Schildes,Schlosses,Schnitzels,Schweins,Sofas,Sonderangebots,Spiels,Steaks,Streichholz,Stücks,Studiums,Taxi,Telefons,Telefonbuchs,Theaters,Tickets,Tieres,Themas,Tonbandgeräts,Trinkgelds,Warenhauses,Wassers,Werkzeugs,Wetters,Wiedersehens,Wortes,Wunders,Zentrums,Zeugnisses,Zimmers";
	@verben = split /,/ , "ärgern,arbeiten,beraten,bestellen,blättern,diskutieren,essen,fahren,fangen,ficken,fragen,frieren,gehen,hören,kaufen,lauschen,legen,lesen,machen,morden,packen,pissen,pressen,produzieren,putzen,rauchen,reden,rennen,rudern,sagen,schießen,schlafen,schleudern,schreiben,schwitzen,sehen,setzen,singen,spielen,springen,spritzen,sprudeln,stellen,sticheln,stinken,streiten,treiben,trinken,töten,umsteigen,zeigen,zerren,zimmern";

	print "\n\n";
}

sub Apparat {

my $argument = shift @_;

if ($argument eq 1) {
	return @maskulina[int(rand($#maskulina))];
}
elsif ($argument eq 12) {
	return @genitivmaskulina[int(rand($#genitivmaskulina))];
}
elsif ($argument eq 11) {
	return @maskuli[int(rand($#maskuli))];
}
elsif ($argument eq 2)  {
	return @feminina[int(rand($#feminina))];
}
elsif ($argument eq 21) {
	return @femininas[int(rand($#femininas))];
}
elsif ($argument eq 3)  {
	return @neutra[int(rand($#neutra))];
}
elsif ($argument eq 31) {
	return @neutronen[int(rand($#neutronen))];
}
elsif ($argument eq 32) {
	return @genitivneutra[int(rand($#genitivneutra))];
}
elsif ($argument eq 5)  {
	return @verben[int(rand($#verben))];
}

}

sub end {
	my $argumend = @_[0];
	Color(1252);
	print "\r$epi $argumend\n\n";
}
