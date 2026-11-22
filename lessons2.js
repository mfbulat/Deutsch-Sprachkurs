// Дополнительные упражнения к главам учебника
(function(){
const X={
L1:[
 {t:'fill',q:'Ich ___ Deutsch. (lernen)',a:['lerne'],ex:'ich → -e: lern<b>e</b>.'},
 {t:'fill',q:'Was ___ er? (trinken)',a:['trinkt'],ex:'er → -t: trink<b>t</b>.'},
 {t:'mc',q:'Wir ___ Tennis. (spielen)',o:['spielen','spielt','spielst','spiele'],a:0,ex:'wir → -en.'},
 {t:'fill',q:'___ du Englisch? (sprechen)',a:['sprichst'],ex:'sprechen: e → i у du → <b>sprichst</b>. Вопрос да/нет — глагол первым.'},
 {t:'fill',q:'Er ___ gern. (helfen)',a:['hilft'],ex:'helfen: e → i у er → <b>hilft</b>.'},
 {t:'fill',q:'Ihr ___ zu viel! (essen)',a:['esst'],ex:'У ihr гласная не меняется: ihr <b>esst</b>.'},
 {t:'fill',q:'Sie (она) ___ lange. (schlafen)',a:['schläft'],ex:'schlafen: a → ä у du/er/sie → <b>schläft</b>.'},
 {t:'fill',q:'Was ___ du? (sehen)',a:['siehst'],ex:'sehen: e → ie у du → <b>siehst</b>.'},
 {t:'fill',q:'Du ___ hier. (warten)',a:['wartest'],ex:'Основа на -t → du wart<b>e</b>st.'},
 {t:'mc',q:'Er ___ nach Wien. (reisen)',o:['reist','reisst','reiset','reisen'],a:0,ex:'Основа на -s → у er обычное -t: er reis<b>t</b> (и du reist).'},
 {t:'multi',q:'essen: ich ___, du ___, er ___, ihr ___',a:[['esse'],['isst'],['isst'],['esst']],ex:'du и er — одинаково <b>isst</b> (e→i, основа на -s). ihr esst.'},
 {t:'fill',q:'Wie ___ er das Buch? (finden)',a:['findet'],ex:'Основа на -d → er find<b>e</b>t.'},
 {t:'sel',q:'sein oder haben?',rows:[['Peter ___ Lehrer.','ist'],['Wir ___ keine Zeit.','haben'],['___ du Hunger?','hast'],['Ihr ___ aus Polen.','seid']],c:['ist','hast','haben','seid','sind'],ex:'Profession, происхождение → sein; иметь (Zeit, Hunger) → haben.'},
 {t:'tf',q:'Ist alles richtig?\nDu isst. Er nimmt. Ihr lest.',a:true,ex:'Да: du isst, er nimmt, ihr lest (у ihr без смены гласной).'},
 {t:'tf',q:'Ist alles richtig?\nDu arbeitst. Er findet.',a:false,ex:'Нужно du arbeit<b>est</b> (основа на -t). Er findet — верно.'}
],
L2:[
 {t:'fill',q:'Was ___ du heute machen? (möchten)',a:['möchtest'],ex:'du → möcht<b>est</b>.'},
 {t:'fill',q:'___ Sie mir bitte helfen? (können)',a:['können'],ex:'Sie → können. Вопрос да/нет — модальный первым.'},
 {t:'fill',q:'Er ___ keinen Fisch. (mögen)',a:['mag'],ex:'er → <b>mag</b> (как ich).'},
 {t:'fill',q:'Wir ___ ins Kino gehen. (möchten)',a:['möchten'],ex:'wir → möchten.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nich / Gitarre / können / spielen',a:['ich kann gitarre spielen'],show:'Ich kann Gitarre spielen.',ex:'kann — 2-е место, spielen — конец.'},
 {t:'short',q:'Schreiben Sie den Satz richtig! (Ja/Nein-Frage)\ndu / heute / ins Kino / gehen / möchten / ?',a:['möchtest du heute ins kino gehen'],show:'Möchtest du heute ins Kino gehen?',ex:'Möchtest первым, gehen — в конце.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nAnna / gut / kochen / können',a:['anna kann gut kochen'],show:'Anna kann gut kochen.',ex:'Anna = sie → kann.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['Am Abend','möchte','ich','lesen','ein Buch','.'],a:['am abend möchte ich ein buch lesen','ich möchte am abend ein buch lesen','ein buch möchte ich am abend lesen'],show:'Am Abend möchte ich ein Buch lesen.',ex:'Am Abend (1) — möchte (2) — ich — ein Buch — lesen (конец).'},
 {t:'mc',q:'Was ist richtig?',o:['Ich kann heute nicht arbeiten.','Ich kann nicht arbeiten heute.','Ich heute kann nicht arbeiten.','Heute ich kann nicht arbeiten.'],a:0,ex:'Инфинитив (arbeiten) — в самом конце.'},
 {t:'mc',q:'„Magst du Katzen?“ – „___“',o:['Ja, ich mag Katzen.','Ja, ich möchte Katzen.','Ja, ich mögen Katzen.','Ja, ich kann Katzen.'],a:0,ex:'Вопрос с mögen → ответ с mag.'},
 {t:'mc',q:'Ich ___ nicht gern.',o:['tanze','tanzen','tanzt','mag tanzen'],a:0,ex:'«не люблю делать» → глагол + nicht gern: Ich tanze nicht gern.'},
 {t:'tf',q:'Ist der Satz richtig?\nEr kannt gut Deutsch.',a:false,ex:'er <b>kann</b> — без -t.'}
],
L3:[
 {t:'order',q:'Ordnen Sie den Satz.',w:['Mein Bruder','in Wien','wohnt','.'],a:['mein bruder wohnt in wien','in wien wohnt mein bruder'],show:'Mein Bruder wohnt in Wien.',ex:'Подлежащее — глагол — остальное.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['heißen','Wie','Sie','?'],a:['wie heißen sie'],show:'Wie heißen Sie?',ex:'W-слово → глагол → подлежащее.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['am Wochenende','Was','du','machst','?'],a:['was machst du am wochenende'],show:'Was machst du am Wochenende?',ex:'Was — machst — du — am Wochenende.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['Dann','ich','trinke','einen Kaffee','.'],a:['dann trinke ich einen kaffee','ich trinke dann einen kaffee'],show:'Dann trinke ich einen Kaffee.',ex:'Dann (1) — trinke (2) — ich (инверсия).'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nwoher / Sie / kommen / ?',a:['woher kommen sie'],show:'Woher kommen Sie?',ex:'W-вопрос: Woher — kommen — Sie.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nAm Abend / meine Frau / kochen',a:['am abend kocht meine frau','meine frau kocht am abend'],show:'Am Abend kocht meine Frau.',ex:'Am Abend (1) — kocht (2) — meine Frau. Глагол под «meine Frau» (sie) → kocht.'},
 {t:'short',q:'Schreiben Sie den Satz richtig! (Ja/Nein-Frage)\nihr / Zeit / haben / ?',a:['habt ihr zeit'],show:'Habt ihr Zeit?',ex:'ihr → habt, глагол первым.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nWann / der Kurs / beginnen / ?',a:['wann beginnt der kurs'],show:'Wann beginnt der Kurs?',ex:'der Kurs = er → beginnt.'},
 {t:'mc',q:'___ kostet das Brot? – 2 Euro.',o:['Was','Wer','Wo','Wann'],a:0,ex:'Цена: Was kostet …? / Wie viel kostet …?'},
 {t:'mc',q:'___ Kinder hast du? – Zwei.',o:['Wie viele','Wer','Was','Wo'],a:0,ex:'Сколько штук → Wie viele.'},
 {t:'mc',q:'„Sprichst du kein Englisch?“ – „___, ich spreche Englisch.“',o:['Doch','Ja','Nein','Nicht'],a:0,ex:'Вопрос с kein + положительный ответ → doch.'},
 {t:'mc',q:'„Wohnst du in Graz?“ – „___, ich wohne in Klagenfurt.“',o:['Nein','Doch','Ja','Kein'],a:0,ex:'Обычный вопрос, ответ отрицательный → nein.'},
 {t:'tf',q:'„Wo wohnst du?“ ist eine Ja/Nein-Frage.',a:false,ex:'Это W-вопрос (начинается с Wo). Ja/Nein-Frage начинается с глагола: Wohnst du …?'}
],
L4:[
 {t:'sel',q:'der, die oder das?',rows:[['Freundin','die'],['Fenster','das'],['Sommer','der'],['Zentrum','das'],['Rechnung','die'],['Brötchen','das']],c:['der','die','das'],ex:'-in, -ung → die; -um, -chen → das; времена года → der; das Fenster — запомнить.'},
 {t:'mc',q:'___ Schlafzimmer',o:['das','der','die'],a:0,ex:'schlafen + das Zimmer.'},
 {t:'mc',q:'___ Orangensaft',o:['der','die','das'],a:0,ex:'die Orange + der Saft → der Orangensaft.'},
 {t:'mc',q:'___ Speisekarte',o:['die','der','das'],a:0,ex:'die Speise + die Karte.'},
 {t:'mc',q:'___ Kaffeetasse',o:['die','der','das'],a:0,ex:'der Kaffee + die Tasse → die Kaffeetasse (по последнему слову!).'},
 {t:'multi',q:'Ergänzen Sie (1. unbestimmter, 2. bestimmter Artikel): Das ist ___ Wohnung. ___ Wohnung ist groß.',a:[['eine'],['die']],ex:'Сначала eine, потом die.'},
 {t:'sel',q:'nicht, kein, keine oder keinen?',rows:[['Ich habe ___ Hunger.','keinen'],['Das Essen ist ___ gut.','nicht'],['Er hat ___ Kinder.','keine'],['Das ist ___ meine Tasche.','nicht'],['Das ist ___ Problem.','kein']],c:['nicht','kein','keine','keinen'],ex:'der Hunger (Akk.) → keinen; прилагательное → nicht; мн. ч. → keine; перед mein → nicht; das Problem → kein.'},
 {t:'mc',q:'Wie ist der Kaffee? – ___ ist kalt.',o:['Er','Es','Sie','Den'],a:0,ex:'der Kaffee → er.'},
 {t:'mc',q:'Ist das Zimmer groß? – Ja, ___ ist sehr groß.',o:['es','er','sie','ihn'],a:0,ex:'das Zimmer → es.'},
 {t:'mc',q:'Wo sind die Kinder? – ___ sind im Garten.',o:['Sie','Er','Es','Ihr'],a:0,ex:'мн. ч. → sie.'},
 {t:'mc',q:'Das ist ___ Kuli. Der Kuli ist rot. (unbestimmt)',o:['ein','eine','einen','kein'],a:0,ex:'der Kuli, Nominativ (после sein) → ein.'},
 {t:'tf',q:'„das Wohnzimmer“ — der Artikel ist richtig.',a:true,ex:'wohnen + das Zimmer → das Wohnzimmer.'}
],
L5:[
 {t:'fill',q:'Ich habe ___ Hund. (ein)',a:['einen'],ex:'der Hund, haben + Akk. → einen.'},
 {t:'fill',q:'Wir kaufen ___ Lampe. (ein)',a:['eine'],ex:'die Lampe → не меняется: eine.'},
 {t:'fill',q:'Hast du ___ Fahrrad? (ein)',a:['ein'],ex:'das Fahrrad → не меняется: ein.'},
 {t:'fill',q:'Ich sehe ___ Bus. (der)',a:['den'],ex:'der Bus → Akk. den.'},
 {t:'fill',q:'Er nimmt ___ Salat. (der)',a:['den'],ex:'der Salat → Akk. den.'},
 {t:'mc',q:'___ Kaffee ist kalt.',o:['Der','Den','Dem','Einen'],a:0,ex:'Kaffee — подлежащее (что холодное?) → Nominativ: der.'},
 {t:'mc',q:'Ich trinke ___ Tee nicht.',o:['den','der','dem','das'],a:0,ex:'der Tee — объект (что пью?) → den.'},
 {t:'mc',q:'Hier gibt es ___ Bäckerei.',o:['eine','einen','ein','einer'],a:0,ex:'die Bäckerei → eine.'},
 {t:'mc',q:'Das ist ___ Drucker.',o:['kein','keinen','keine','keiner'],a:0,ex:'После sein → Nominativ: kein.'},
 {t:'mc',q:'Ich brauche ___ Drucker.',o:['keinen','kein','keine','keiner'],a:0,ex:'brauchen + Akk., der Drucker → keinen.'},
 {t:'sel',q:'Nominativ oder Akkusativ? (подчёркнутая часть)',rows:[['<u>Der Hund</u> sieht die Katze.','Nominativ'],['Der Hund sieht <u>die Katze</u>.','Akkusativ'],['Ich kaufe <u>den Stuhl</u>.','Akkusativ'],['Das ist <u>der Stuhl</u>.','Nominativ']],c:['Nominativ','Akkusativ'],ex:'Кто видит? — der Hund (Nom.). Кого? — die Katze (Akk.). После sein — Nom.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nich / ein Kühlschrank / brauchen',a:['ich brauche einen kühlschrank'],show:'Ich brauche einen Kühlschrank.',ex:'Не забудь: ein → <b>einen</b> (der Kühlschrank, Akk.).'},
 {t:'gap',q:'Im Supermarkt. Ergänzen Sie.',parts:['Ich kaufe ',' Kuchen, ',' Flasche Wasser und ',' Brot für das Frühstück. Oh nein, leider habe ich ',' Geld!'],bank:['einen','eine','ein','kein','der','keinen','einer'],a:['einen','eine','ein','kein'],
  ex:'der Kuchen → einen; die Flasche → eine; das Brot → ein; das Geld → kein.'}
],
L6:[
 {t:'sel',q:'dein, deine oder deinen?',rows:[['Ist das ___ Handy?','dein'],['Ist das ___ Tasche?','deine'],['Sind das ___ Kinder?','deine'],['Ich kenne ___ Bruder.','deinen']],c:['dein','deine','deinen'],ex:'das → dein; die/мн. ч. → deine; der в Akk. → deinen.'},
 {t:'mc',q:'Frau Weber, ist das ___ Auto?',o:['Ihr','Ihre','dein','sein'],a:0,ex:'Sie → Ihr; das Auto → Ihr.'},
 {t:'mc',q:'Das ist Max und das ist ___ Freundin.',o:['seine','sein','ihre','ihr'],a:0,ex:'Max → sein; die Freundin → seine.'},
 {t:'mc',q:'Die Kinder und ___ Mutter gehen in den Park.',o:['ihre','ihr','seine','sein'],a:0,ex:'Мать детей (они) → ihr; die Mutter → ihre.'},
 {t:'mc',q:'Wir besuchen ___ Großeltern.',o:['unsere','unser','unseren','unserer'],a:0,ex:'мн. ч. → unsere.'},
 {t:'mc',q:'Ich suche ___ Handy.',o:['mein','meinen','meine','meiner'],a:0,ex:'das Handy в Akk. не меняется → mein.'},
 {t:'mc',q:'Paul sucht ___ Pass.',o:['seinen','sein','seine','ihren'],a:0,ex:'Paul → sein; der Pass в Akk. → seinen.'},
 {t:'fill',q:'Das ist Maria. ___ Tochter heißt Lea.',a:['ihre'],ex:'Maria (sie) → ihr; die Tochter → ihre.'},
 {t:'mc',q:'Die Schwester von meiner Mutter ist meine ___.',o:['Tante','Nichte','Oma','Cousine'],a:0,ex:'Сестра матери — die Tante.'},
 {t:'mc',q:'Der Sohn von meinem Onkel ist mein ___.',o:['Cousin','Neffe','Bruder','Enkel'],a:0,ex:'Сын дяди — der Cousin (двоюродный брат).'},
 {t:'mc',q:'Ich habe keine Frau. Ich bin ___.',o:['ledig','verheiratet','Eltern','Kinder'],a:0,ex:'ledig — не женат.'}
],
L7:[
 {t:'multi',q:'der Apfel → die ___ · die Banane → die ___ · das Brötchen → die ___ · der Saft → die ___',a:[['äpfel'],['bananen'],['brötchen'],['säfte']],ex:'Äpfel (умлаут), Bananen, Brötchen (-chen без изменений), Säfte.'},
 {t:'multi',q:'das Zimmer → die ___ · die Küche → die ___ · der Schrank → die ___ · das Bett → die ___',a:[['zimmer'],['küchen'],['schränke'],['betten']],ex:'Zimmer, Küchen, Schränke, Betten.'},
 {t:'mc',q:'Wien und Graz sind zwei ___. (die Stadt)',o:['Städte','Stadten','Stadts','Stadt'],a:0,ex:'die Stadt → die Städte (исключение для die-слова).'},
 {t:'mc',q:'Ein Jahr hat zwölf ___. (der Monat)',o:['Monate','Monaten','Monats','Mönate'],a:0,ex:'der Monat → die Monat<b>e</b>.'},
 {t:'mc',q:'Ich habe viele ___. (das Foto)',o:['Fotos','Fote','Foten','Fotoen'],a:0,ex:'das Foto → Fotos.'},
 {t:'mc',q:'Der Kurs dauert zwölf ___. (die Woche)',o:['Wochen','Woche','Wochs','Wöchen'],a:0,ex:'die Woche → Wochen.'},
 {t:'mc',q:'___ Kinder spielen.',o:['Die','Das','Der','Den'],a:0,ex:'Мн. ч. → die.'},
 {t:'sel',q:'Welche Pluralendung?',rows:[['die Zeitung','-en'],['das Kino','-s'],['der Lehrer','— (без изменений)'],['der Tisch','-e'],['die Tasche','-n']],c:['-e','-n','-en','-s','— (без изменений)'],ex:'Zeitungen, Kinos, Lehrer, Tische, Taschen.'},
 {t:'fill',q:'Ich habe zwei ___. (der Bruder)',a:['brüder'],ex:'der Bruder → die Brüder.'},
 {t:'tf',q:'„die Kinds“ ist richtig.',a:false,ex:'Правильно: die Kinder.'}
],
L8:[
 {t:'mc',q:'13 =',o:['dreizehn','dreißig','dreizig','dreitzehn'],a:0,ex:'13 = dreizehn, 30 = dreißig.'},
 {t:'mc',q:'70 =',o:['siebzig','siebenzig','siebzehn','sechzig'],a:0,ex:'70 = siebzig (без en).'},
 {t:'fill',q:'21 in Worten:',a:['einundzwanzig'],ex:'ein + und + zwanzig.'},
 {t:'fill',q:'65 in Worten:',a:['fünfundsechzig'],ex:'fünf + und + sechzig.'},
 {t:'fill',q:'100 in Worten:',a:['hundert','einhundert'],ex:'(ein)hundert.'},
 {t:'fill',q:'1500 in Worten:',a:['tausendfünfhundert','eintausendfünfhundert','fünfzehnhundert'],ex:'(ein)tausendfünfhundert; fünfzehnhundert — так говорят о годах и иногда разговорно.'},
 {t:'mc',q:'12,30 € =',o:['zwölf Euro dreißig','zwanzig Euro dreizehn','zwölf Euro dreizehn','dreißig Euro zwölf'],a:0,ex:'12 евро + 30 центов.'},
 {t:'mc',q:'Was kostet der Kaffee? – ___',o:['Er kostet drei Euro.','Er macht drei Euro.','Sie kostet drei Euro.','Er hat drei Euro.'],a:0,ex:'der Kaffee → er; глагол kosten. (Можно и «Das kostet drei Euro».)'}
],
L9:[
 {t:'mc',q:'12:30 (informell)',o:['halb eins','halb zwölf','zwölf Uhr halb','Viertel nach zwölf'],a:0,ex:'halb + следующий час: halb eins.'},
 {t:'mc',q:'7:45 (informell)',o:['Viertel vor acht','Viertel nach sieben','Viertel vor sieben','halb acht'],a:0,ex:'Viertel vor acht (австр. dreiviertel acht).'},
 {t:'mc',q:'1:15 (informell)',o:['Viertel nach eins','Viertel vor eins','Viertel nach zwei','halb zwei'],a:0,ex:'Viertel nach eins (австр. viertel zwei).'},
 {t:'mc',q:'4:50 (informell)',o:['zehn vor fünf','zehn nach fünf','zehn vor vier','fünf vor zehn'],a:0,ex:'Без 10 пять.'},
 {t:'mc',q:'9:25 (informell)',o:['fünf vor halb zehn','fünf nach halb zehn','fünf vor halb neun','fünf nach neun'],a:0,ex:'9:30 = halb zehn, на 5 минут раньше.'},
 {t:'mc',q:'13:45 (offiziell)',o:['dreizehn Uhr fünfundvierzig','ein Uhr fünfundvierzig','Viertel vor zwei','dreizehn Uhr Viertel'],a:0,ex:'Официально: dreizehn Uhr fünfundvierzig.'},
 {t:'mc',q:'Österreichisch: „dreiviertel zehn“ =',o:['9:45','10:45','9:15','10:15'],a:0,ex:'«без четверти десять» = 9:45.'},
 {t:'sel',q:'am, um oder im?',rows:[['___ Freitag','am'],['___ halb acht','um'],['___ Dezember','im'],['___ Wochenende','am'],['___ Abend','am']],c:['am','um','im'],ex:'am + день/часть дня/Wochenende; um + время; im + месяц.'},
 {t:'mc',q:'Welcher Tag kommt nach Samstag?',o:['Sonntag','Freitag','Montag','Mittwoch'],a:0,ex:'Samstag → Sonntag.'},
 {t:'mc',q:'Wann frühstückst du? – ___ Morgen.',o:['Am','Um','Im','In'],a:0,ex:'Часть дня → am.'}
],
L10:[
 {t:'mc',q:'„Grüß Gott!“ sagt man:',o:['zur Begrüßung (wie „Guten Tag“)','zum Abschied (wie „Tschüss“)','als Dank (wie „Danke“)','als Entschuldigung'],a:0,ex:'Grüß Gott — австрийское вежливое приветствие.'},
 {t:'mc',q:'Was fragen Sie eine gute Freundin?',o:['Wie geht’s?','Wie geht es Ihnen?','Wie heißen Sie?','Woher kommen Sie?'],a:0,ex:'С подругой — на du: Wie geht’s (dir)?'},
 {t:'mc',q:'der Student → die ___',o:['Studentin','Studentinin','Studenten','Studentfrau'],a:0,ex:'+in → Studentin.'},
 {t:'mc',q:'der Verkäufer → die ___',o:['Verkäuferin','Verkauferin','Verkäufer','Verkäufin'],a:0,ex:'+in → Verkäuferin.'},
 {t:'mc',q:'„Wohnort“ im Formular bedeutet:',o:['город (место жительства)','улица','индекс','страна'],a:0,ex:'Wohnort — место жительства.'},
 {t:'mc',q:'„Buchstabieren Sie bitte!“ bedeutet:',o:['Назовите по буквам','Повторите','Говорите медленнее','Напишите'],a:0,ex:'buchstabieren — по буквам.'}
],
L11:[
 {t:'sel',q:'der, die oder das? (Essen)',rows:[['Kartoffel','die'],['Fleisch','das'],['Kuchen','der'],['Suppe','die'],['Obst','das'],['Reis','der']],c:['der','die','das'],ex:'die Kartoffel, das Fleisch, der Kuchen, die Suppe, das Obst, der Reis.'},
 {t:'sel',q:'der, die oder das? (Wohnung)',rows:[['Küche','die'],['Bad','das'],['Flur','der'],['Balkon','der'],['Lampe','die'],['Sofa','das']],c:['der','die','das'],ex:'die Küche, das Bad, der Flur, der Balkon, die Lampe, das Sofa.'},
 {t:'mc',q:'Was passt nicht?',o:['der Apfel','der Tisch','der Stuhl','das Sofa'],a:0,ex:'Tisch, Stuhl, Sofa — мебель; Apfel — еда.'},
 {t:'mc',q:'Das Gegenteil von „groß“ ist:',o:['klein','alt','teuer','dunkel'],a:0,ex:'groß — klein.'},
 {t:'mc',q:'Das Gegenteil von „neu“ ist:',o:['alt','groß','schön','billig'],a:0,ex:'neu — alt.'},
 {t:'mc',q:'Das Frühstück isst man:',o:['am Morgen','am Abend','in der Nacht','am Nachmittag'],a:0,ex:'Frühstück — утром.'}
]};
(window.LESSONS||[]).forEach(l=>{if(X[l.id])l.items.push(...X[l.id])});
})();
