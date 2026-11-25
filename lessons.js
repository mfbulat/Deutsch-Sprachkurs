// Учебник: главы = теория (HTML) + упражнения (те же типы, что в tests.js)
window.LESSONS = [
{id:'L1', title:'1. Verbs in the present tense (Präsens)', goal:'Conjugate any verb: endings, special stems, vowel change, sein and haben.',
theory:`
<h3>Шаг 1. Основа + окончание</h3>
<p>Инфинитив (Infinitiv) = <b>основа (Stamm) + -en</b>: wohn-<b>en</b>, komm-<b>en</b>, mach-<b>en</b>. Отбрасываем -en и добавляем окончание по лицу:</p>
<table class="tb"><tr><th>лицо</th><th>окончание</th><th>wohnen</th><th>machen</th></tr>
<tr><td>ich</td><td><b>-e</b></td><td>wohn<b>e</b></td><td>mach<b>e</b></td></tr>
<tr><td>du</td><td><b>-st</b></td><td>wohn<b>st</b></td><td>mach<b>st</b></td></tr>
<tr><td>er / sie / es</td><td><b>-t</b></td><td>wohn<b>t</b></td><td>mach<b>t</b></td></tr>
<tr><td>wir</td><td><b>-en</b></td><td>wohn<b>en</b></td><td>mach<b>en</b></td></tr>
<tr><td>ihr</td><td><b>-t</b></td><td>wohn<b>t</b></td><td>mach<b>t</b></td></tr>
<tr><td>sie / Sie</td><td><b>-en</b></td><td>wohn<b>en</b></td><td>mach<b>en</b></td></tr></table>
<div class="tip"><b>Запомни две пары:</b> wir = sie = Sie = инфинитив (wohnen). <b>er = ihr</b> (er wohnt, ihr wohnt) — частая ловушка.</div>
<h3>Шаг 2. Особые основы</h3>
<table class="tb"><tr><th>основа кончается на</th><th>что делаем</th><th>пример</th></tr>
<tr><td><b>-t, -d</b> (arbeiten, finden, warten); также öffnen, rechnen</td><td>вставляем <b>e</b> перед -st и -t</td><td>du arbeit<b>e</b>st, er arbeit<b>e</b>t, ihr find<b>e</b>t</td></tr>
<tr><td><b>-s, -ß, -z</b> (heißen, tanzen, reisen)</td><td>у du только <b>-t</b> (s не удваиваем)</td><td>du hei<b>ßt</b>, du tan<b>zt</b>, du rei<b>st</b></td></tr></table>
<h3>Шаг 3. Смена гласной (Vokalwechsel)</h3>
<p>У некоторых глаголов меняется гласная — <b>только у du и er/sie/es</b>. У ich, wir, ihr, sie всё обычно.</p>
<table class="tb"><tr><th>смена</th><th>глаголы</th><th>du</th><th>er/sie/es</th></tr>
<tr><td>e → i</td><td>sprechen, helfen, essen, nehmen, geben</td><td>sprichst, hilfst, <b>isst</b>, <b>nimmst</b>, gibst</td><td>spricht, hilft, isst, <b>nimmt</b>, gibt</td></tr>
<tr><td>e → ie</td><td>lesen, sehen</td><td><b>liest</b>, siehst</td><td>liest, sieht</td></tr>
<tr><td>a → ä</td><td>fahren, schlafen</td><td>fährst, schläfst</td><td>fährt, schläft</td></tr></table>
<div class="tip">Форма «L»: в таблице меняются только 2-я и 3-я строки. <i>ich spreche — du spr<b>i</b>chst — er spr<b>i</b>cht — wir sprechen — ihr sprecht</i>.</div>
<h3>Шаг 4. sein и haben — учить наизусть</h3>
<table class="tb"><tr><th></th><th>sein (быть)</th><th>haben (иметь)</th></tr>
<tr><td>ich</td><td>bin</td><td>habe</td></tr><tr><td>du</td><td>bist</td><td><b>hast</b></td></tr><tr><td>er/sie/es</td><td>ist</td><td><b>hat</b></td></tr>
<tr><td>wir</td><td>sind</td><td>haben</td></tr><tr><td>ihr</td><td><b>seid</b></td><td>habt</td></tr><tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr></table>
<div class="err"><b>Твои типичные ошибки:</b> du <s>helfst</s> → hilfst · du <s>heißst</s> → heißt · Wann <s>kommen</s> du → kommst · ihr <s>seit</s> → seid · er <s>habt</s> → hat.</div>`,
items:[
 {t:'mc',q:'Ich ___ in Klagenfurt. (wohnen)',o:['wohne','wohnst','wohnt','wohnen'],a:0,ex:'ich → <b>-e</b>.'},
 {t:'fill',q:'Wo ___ ihr? (wohnen)',a:['wohnt'],ex:'ihr → <b>-t</b> (как er).'},
 {t:'mc',q:'Was ___ du am Wochenende? (machen)',o:['machst','macht','mache','machen'],a:0,ex:'du → <b>-st</b>.'},
 {t:'multi',q:'arbeiten: ich ___, du ___, er ___, wir ___, ihr ___, sie ___',a:[['arbeite'],['arbeitest'],['arbeitet'],['arbeiten'],['arbeitet'],['arbeiten']],ex:'Основа на -t → у du, er, ihr вставляем e: arbeit<b>e</b>st, arbeit<b>e</b>t.'},
 {t:'fill',q:'Du ___ Bulat, oder? (heißen)',a:['heißt'],ex:'Основа на -ß → du heiß<b>t</b>.'},
 {t:'fill',q:'Er ___ gern Pizza. (essen)',a:['isst'],ex:'essen: e → i у du/er → er <b>isst</b>.'},
 {t:'fill',q:'___ du den Bus? (nehmen)',a:['nimmst'],ex:'nehmen: du <b>nimmst</b>, er <b>nimmt</b>.'},
 {t:'fill',q:'Sie (она) ___ ein Buch. (lesen)',a:['liest'],ex:'lesen: e → ie → sie <b>liest</b> (и du liest — основа на -s, второе s не добавляем).'},
 {t:'fill',q:'___ du nach Wien? (fahren)',a:['fährst'],ex:'fahren: a → ä → du <b>fährst</b>.'},
 {t:'mc',q:'Ihr ___ sehr gut Deutsch. (sprechen)',o:['sprecht','sprichst','spricht','sprechen'],a:0,ex:'У ihr гласная <b>не меняется</b>: ihr sprecht.'},
 {t:'multi',q:'sehen: ich ___, du ___, er ___, wir ___',a:[['sehe'],['siehst'],['sieht'],['sehen']],ex:'e → ie только у du и er.'},
 {t:'sel',q:'sein: Ergänzen Sie.',rows:[['Ich ___ Student.','bin'],['Du ___ nett.','bist'],['Wir ___ aus Russland.','sind'],['Ihr ___ müde.','seid']],c:['bin','bist','ist','sind','seid'],ex:'ich bin, du bist, wir sind, ihr <b>seid</b>.'},
 {t:'sel',q:'haben: Ergänzen Sie.',rows:[['Du ___ Zeit.','hast'],['Er ___ zwei Kinder.','hat'],['Ihr ___ ein Auto.','habt'],['Haben Sie ein Handy? – Ja, ich ___ eins.','habe']],c:['habe','hast','hat','habt','haben'],ex:'du hast, er hat, ihr habt, ich habe.'},
 {t:'tf',q:'Ist alles richtig?\nEr schläft. Du siehst. Ihr fahrt.',a:true,ex:'Да: er schl<b>ä</b>ft, du s<b>ie</b>hst, ihr fahrt (у ihr без умлаута).'}
]},

{id:'L2', title:'2. können, möchten, mögen + sentence bracket', goal:'Conjugate modal verbs, put the infinitive at the end, tell möchte from mag.',
theory:`
<h3>Формы</h3>
<table class="tb"><tr><th></th><th>können (мочь, уметь)</th><th>möchten (хотел бы)</th><th>mögen (любить, нравиться)</th></tr>
<tr><td>ich</td><td><b>kann</b></td><td>möchte</td><td><b>mag</b></td></tr>
<tr><td>du</td><td>kannst</td><td>möchtest</td><td>magst</td></tr>
<tr><td>er/sie/es</td><td><b>kann</b></td><td>möchte</td><td><b>mag</b></td></tr>
<tr><td>wir</td><td>können</td><td>möchten</td><td>mögen</td></tr>
<tr><td>ihr</td><td>könnt</td><td>möchtet</td><td>mögt</td></tr>
<tr><td>sie/Sie</td><td>können</td><td>möchten</td><td>mögen</td></tr></table>
<div class="tip"><b>ich = er</b> и без окончания -t: ich kann / er kann, ich mag / er mag, ich möchte / er möchte. «er kannt» — ошибка.</div>
<h3>Рамка предложения (Satzklammer)</h3>
<p>Модальный глагол спрягается и стоит на <b>2-м месте</b> (в вопросе да/нет — на 1-м). Второй глагол — в <b>инфинитиве в самом конце</b>.</p>
<table class="tb"><tr><th>1</th><th>2 (модальный)</th><th>середина</th><th>конец</th></tr>
<tr><td>Ich</td><td><b>kann</b></td><td>gut</td><td><b>schwimmen</b>.</td></tr>
<tr><td>Heute</td><td><b>kann</b></td><td>ich nicht</td><td><b>kommen</b>.</td></tr>
<tr><td>Was</td><td><b>möchtest</b></td><td>du</td><td><b>essen</b>?</td></tr>
<tr><td><b>Kannst</b></td><td>du</td><td>Gitarre</td><td><b>spielen</b>?</td></tr></table>
<h3>möchte или mag?</h3>
<ul><li><b>möchte</b> — желание сейчас, заказ, вежливая просьба: <i>Ich möchte einen Kaffee, bitte.</i></li>
<li><b>mag</b> — люблю вообще, нравится: <i>Ich mag Kaffee. Ich mag keine Katzen.</i></li>
<li>Про действия «люблю делать» — через <b>gern</b>: <i>Ich koche gern. Ich schwimme nicht gern.</i></li></ul>
<div class="err"><b>Твоя ошибка из теста:</b> «<s>du können Hier nicht parken</s>» → <b>Hier kannst du nicht parken!</b> — 1) спрягаем können под du; 2) kannst на 2-е место; 3) parken в конец.</div>`,
items:[
 {t:'sel',q:'können: Ergänzen Sie.',rows:[['Ich ___ schwimmen.','kann'],['___ du kochen?','kannst'],['Er ___ gut tanzen.','kann'],['Ihr ___ hier parken.','könnt']],c:['kann','kannst','können','könnt'],ex:'ich/er <b>kann</b>, du kannst, ihr könnt.'},
 {t:'sel',q:'möchten: Ergänzen Sie.',rows:[['Ich ___ ein Wasser.','möchte'],['Was ___ du?','möchtest'],['Wir ___ zahlen.','möchten'],['___ ihr Kuchen?','möchtet']],c:['möchte','möchtest','möchten','möchtet'],ex:'ich möchte, du möchtest, wir möchten, ihr möchtet.'},
 {t:'mc',q:'Er ___ Fußball spielen.',o:['kann','kannt','könnt','kannst'],a:0,ex:'er = ich → <b>kann</b>, без -t.'},
 {t:'fill',q:'Ihr ___ gut tanzen. (können)',a:['könnt'],ex:'ihr <b>könnt</b>.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['Ich','gut','kann','schwimmen','.'],a:['ich kann gut schwimmen','gut kann ich schwimmen'],show:'Ich kann gut schwimmen.',ex:'kann — 2-е место, schwimmen — конец.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['du','Kannst','Deutsch','sprechen','?'],a:['kannst du deutsch sprechen'],show:'Kannst du Deutsch sprechen?',ex:'Вопрос да/нет: модальный первым, инфинитив — в конце.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nheute / ich / nicht / können / kommen',a:['ich kann heute nicht kommen','heute kann ich nicht kommen'],show:'Ich kann heute nicht kommen.',ex:'1) ich → kann; 2) kann на 2-е место; 3) kommen в конец.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nwas / du / möchten / essen / ?',a:['was möchtest du essen'],show:'Was möchtest du essen?',ex:'W-слово → möchtest → du → … essen.'},
 {t:'sel',q:'mögen oder möchten?',rows:[['Ich ___ einen Tee, bitte.','möchte'],['Meine Mutter ___ Katzen sehr.','mag'],['Wir ___ bitte zahlen.','möchten'],['Die Kinder ___ Pizza sehr.','mögen']],c:['mag','mögen','möchte','möchten'],ex:'Заказ/просьба → möchte(n). Любить вообще → mag/mögen.'},
 {t:'mc',q:'Sie sind im Café. Was sagen Sie?',o:['Ich möchte einen Kaffee, bitte.','Ich mag einen Kaffee, bitte.','Ich kann einen Kaffee, bitte.','Ich möchten einen Kaffee, bitte.'],a:0,ex:'Заказ → <b>möchte</b>.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['gern','Ich','Pizza','esse','.'],a:['ich esse gern pizza','ich esse pizza gern','pizza esse ich gern','gern esse ich pizza'],show:'Ich esse gern Pizza.',ex:'Нейтрально: Ich esse gern Pizza (gern сразу после глагола). Тоже правильно: Ich esse Pizza gern.'}
]},

{id:'L3', title:'3. Word order and questions', goal:'Verb in second position: statements, inversion, W-questions, yes/no questions, ja / nein / doch.',
theory:`
<h3>Главное правило: спрягаемый глагол — на 2-м месте</h3>
<table class="tb"><tr><th>тип</th><th>1</th><th>2</th><th>дальше</th></tr>
<tr><td>Утверждение</td><td>Ich</td><td><b>wohne</b></td><td>in Klagenfurt.</td></tr>
<tr><td>Инверсия</td><td>Am Montag</td><td><b>arbeite</b></td><td>ich.</td></tr>
<tr><td>W-вопрос</td><td>Wo</td><td><b>wohnst</b></td><td>du?</td></tr>
<tr><td>Вопрос да/нет</td><td colspan="2"><b>Wohnst</b> (1-е место!)</td><td>du in Klagenfurt?</td></tr></table>
<div class="tip"><b>Инверсия:</b> если в начале стоит не подлежащее (Heute, Am Abend, Hier, Dann), то глагол всё равно 2-й, а подлежащее идёт <b>после</b> глагола. «<s>Heute ich arbeite</s>» — ошибка (по-русски так можно, по-немецки нет).</div>
<h3>W-слова</h3>
<table class="tb"><tr><td><b>Wer?</b> кто</td><td><b>Was?</b> что</td><td><b>Wo?</b> где</td><td><b>Woher?</b> откуда</td></tr>
<tr><td><b>Wann?</b> когда</td><td><b>Wie?</b> как</td><td><b>Wie viel?</b> сколько (стоит)</td><td><b>Wie alt?</b> сколько лет</td></tr>
<tr><td><b>Welche?</b> какие · <b>Wie viele?</b> сколько (штук)</td><td><b>Wohin?</b> куда</td><td colspan="2"><b>Um wie viel Uhr?</b> во сколько</td></tr></table>
<h3>ja / nein / doch</h3>
<ul><li>Kommst du? – <b>Ja</b>, ich komme. / <b>Nein</b>, ich komme nicht.</li>
<li>Kommst du <u>nicht</u>? – <b>Doch</b>, ich komme! (= «нет, приду же!») / Nein, ich komme nicht.</li><li>Hast du <u>keine</u> Zeit? – <b>Doch</b>! (= есть время)</li></ul>
<div class="tip"><b>Алгоритм «Schreiben Sie den Satz richtig»:</b> 1) найди подлежащее; 2) проспрягай глагол; 3) поставь его на 2-е место (в вопросе да/нет — на 1-е); 4) второй глагол — в конец; 5) заглавная буква и знак в конце.</div>`,
items:[
 {t:'order',q:'Ordnen Sie den Satz.',w:['wohne','Ich','in','Klagenfurt','.'],a:['ich wohne in klagenfurt','in klagenfurt wohne ich'],show:'Ich wohne in Klagenfurt.',ex:'Подлежащее → глагол → остальное.'},
 {t:'order',q:'Ordnen Sie den Satz. (начни с „Am“)',w:['Am','arbeite','ich','Montag','.'],a:['am montag arbeite ich'],show:'Am Montag arbeite ich.',ex:'Инверсия: Am Montag (1) — arbeite (2) — ich.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['kommst','Woher','du','?'],a:['woher kommst du'],show:'Woher kommst du?',ex:'W-слово → глагол → подлежащее.'},
 {t:'order',q:'Ordnen Sie den Satz.',w:['Sie','Sprechen','Englisch','?'],a:['sprechen sie englisch'],show:'Sprechen Sie Englisch?',ex:'Вопрос да/нет — глагол первым.'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nWo / Anna / arbeiten / ?',a:['wo arbeitet anna'],show:'Wo arbeitet Anna?',ex:'Anna = sie → arbeit<b>et</b> (основа на -t).'},
 {t:'short',q:'Schreiben Sie den Satz richtig!\nHeute / wir / Tennis / spielen',a:['heute spielen wir tennis','wir spielen heute tennis'],show:'Heute spielen wir Tennis.',ex:'Heute (1) — spielen (2) — wir.'},
 {t:'short',q:'Schreiben Sie den Satz richtig! (Ja/Nein-Frage)\ndu / Kinder / haben / ?',a:['hast du kinder'],show:'Hast du Kinder?',ex:'Глагол первым, du → <b>hast</b>.'},
 {t:'mc',q:'___ alt bist du? – 33.',o:['Wie','Was','Wer','Wo'],a:0,ex:'Возраст: <b>Wie alt</b> …?'},
 {t:'mc',q:'___ ist das? – Das ist mein Bruder.',o:['Wer','Was','Wo','Wie'],a:0,ex:'О человеке — <b>Wer</b>? О предмете — Was?'},
 {t:'mc',q:'„Hast du keinen Hunger?“ – „___, ich habe großen Hunger.“',o:['Doch','Ja','Nein','Kein'],a:0,ex:'Вопрос с отрицанием (kein/nicht) + положительный ответ → <b>doch</b>.'},
 {t:'mc',q:'Was ist richtig?',o:['Am Abend lese ich ein Buch.','Am Abend ich lese ein Buch.','Am Abend lese ein Buch ich.','Ich am Abend lese ein Buch.'],a:0,ex:'Am Abend (1) — lese (2) — ich.'},
 {t:'tf',q:'Ist der Satz richtig?\nMorgen ich habe keine Zeit.',a:false,ex:'Инверсия: <b>Morgen habe ich</b> keine Zeit.'}
]},

{id:'L4', title:'4. Articles: der / die / das, ein / kein, nicht', goal:'Guess the gender from clues; choose ein/kein and nicht/kein correctly.',
theory:`
<h3>Подсказки для рода</h3>
<table class="tb"><tr><th>der (м.)</th><th>die (ж.)</th><th>das (ср.)</th></tr>
<tr><td>мужчины: der Mann, der Lehrer<br>дни, месяцы, времена года: der Montag, der Mai, der Sommer<br>-er у людей и приборов: der Lehrer, der Drucker, der Computer (но: das Zimmer, das Fenster, die Mutter)</td>
<td><b>-ung, -heit, -keit, -ion, -tät</b>: die Wohnung, die Information<br>женщины, <b>-in</b>: die Lehrerin<br>большинство на <b>-e</b>: die Lampe, die Tasche</td>
<td><b>-chen</b>: das Mädchen<br><b>-um</b>: das Museum, das Zentrum<br>часто <b>-o</b>: das Foto, das Auto, das Büro</td></tr></table>
<p>Это подсказки, не железные правила (der Name, das Zimmer). Учи слово <b>всегда с артиклем</b>.</p>
<h3>Сложные слова (Kompositum)</h3>
<p>Род даёт <b>последнее</b> слово: das Haus + <b>die</b> Tür = <b>die</b> Haustür; die Kinder + <b>das</b> Zimmer = <b>das</b> Kinderzimmer.</p>
<h3>Неопределённый и отрицательный артикль</h3>
<table class="tb"><tr><th></th><th>der</th><th>die</th><th>das</th><th>мн. ч.</th></tr>
<tr><td>определённый</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>неопределённый</td><td>ein</td><td>eine</td><td>ein</td><td>—</td></tr>
<tr><td>отрицательный</td><td>kein</td><td>keine</td><td>kein</td><td>keine</td></tr></table>
<p>Первое упоминание — <b>ein</b>: <i>Das ist ein Tisch.</i> Дальше о конкретном — <b>der</b>: <i>Der Tisch ist neu.</i></p>
<h3>nicht или kein?</h3>
<ul><li><b>kein</b> — отрицает существительное с ein или без артикля: <i>Ich habe ein Auto → Ich habe kein Auto. Ich habe Zeit → Ich habe keine Zeit.</i></li>
<li><b>nicht</b> — всё остальное: глагол, прилагательное, существительное с der/mein: <i>Ich komme nicht. Das ist nicht teuer. Das ist nicht mein Handy.</i></li></ul>
<h3>Местоимения по роду</h3>
<p>der → <b>er</b>, die → <b>sie</b>, das → <b>es</b>, мн. ч. → sie. <i>Der Tisch? <b>Er</b> ist praktisch.</i> (не «оно»!)</p>`,
items:[
 {t:'sel',q:'der, die oder das?',rows:[['Zeitung','die'],['Mädchen','das'],['Museum','das'],['Lehrerin','die'],['Montag','der'],['Information','die']],c:['der','die','das'],ex:'-ung, -in, -ion → die; -chen, -um → das; дни → der.'},
 {t:'mc',q:'___ Hausaufgabe',o:['die','der','das'],a:0,ex:'das Haus + <b>die</b> Aufgabe → die Hausaufgabe.'},
 {t:'mc',q:'___ Bücherregal',o:['das','der','die'],a:0,ex:'die Bücher + <b>das</b> Regal → das Bücherregal.'},
 {t:'mc',q:'___ Telefonnummer',o:['die','das','der'],a:0,ex:'das Telefon + <b>die</b> Nummer → die Telefonnummer.'},
 {t:'multi',q:'Ergänzen Sie (ein/der): Das ist ___ Stuhl. ___ Stuhl ist bequem.',a:[['ein'],['der']],ex:'Сначала <b>ein</b>, потом конкретный — <b>Der</b> Stuhl.'},
 {t:'sel',q:'kein oder keine?',rows:[['Das ist ___ Tisch.','kein'],['Das ist ___ Lampe.','keine'],['Das ist ___ Sofa.','kein'],['Das sind ___ Bücher.','keine']],c:['kein','keine'],ex:'der/das → kein, die/мн. ч. → keine.'},
 {t:'mc',q:'Ich habe ___ Auto.',o:['kein','nicht','keine','nichts'],a:0,ex:'Отрицаем «ein Auto» → <b>kein</b> Auto.'},
 {t:'mc',q:'Das ist ___ mein Handy.',o:['nicht','kein','keine','keinen'],a:0,ex:'Перед притяжательным (mein) → <b>nicht</b>.'},
 {t:'mc',q:'Ich komme heute ___.',o:['nicht','kein','keine','keinen'],a:0,ex:'Отрицаем глагол → <b>nicht</b>.'},
 {t:'mc',q:'Wo ist die Tasche? – ___ ist hier.',o:['Sie','Er','Es','Ihr'],a:0,ex:'die Tasche → <b>sie</b>.'},
 {t:'mc',q:'Das Auto ist neu. ___ ist sehr schnell.',o:['Es','Er','Sie','Ihn'],a:0,ex:'das Auto → <b>es</b>.'}
]},

{id:'L5', title:'5. Accusative (Akkusativ)', goal:'Tell Nominativ from Akkusativ and never forget -en with masculine nouns.',
theory:`
<h3>Что это</h3>
<p><b>Nominativ</b> — кто/что делает (подлежащее). <b>Akkusativ</b> — кого/что (прямое дополнение, на кого направлено действие).</p>
<p><i><u>Der Mann</u> (Nom.) kauft <u>einen Tisch</u> (Akk.).</i></p>
<h3>Таблица — меняется только мужской род</h3>
<table class="tb"><tr><th></th><th>der</th><th>die</th><th>das</th><th>мн. ч.</th></tr>
<tr><td>Nominativ</td><td>der / ein / kein / mein</td><td>die / eine / keine / meine</td><td>das / ein / kein / mein</td><td>die / – / keine / meine</td></tr>
<tr><td>Akkusativ</td><td><b>den / einen / keinen / meinen</b></td><td>die / eine / keine / meine</td><td>das / ein / kein / mein</td><td>die / – / keine / meine</td></tr></table>
<div class="tip">Мужской род в Akkusativ получает <b>-n / -en</b>: der → de<b>n</b>, ein → ein<b>en</b>, kein → kein<b>en</b>, mein → mein<b>en</b>. Остальные роды не меняются.</div>
<h3>Глаголы с Akkusativ (самые частые)</h3>
<p>haben, brauchen, kaufen, suchen, sehen, möchten, essen, trinken, nehmen, finden, bestellen, lesen, besuchen, kennen, <b>es gibt</b>.</p>
<h3>Ловушка: после sein — всегда Nominativ</h3>
<p><i>Das ist <b>ein</b> Tisch. Das ist <b>kein</b> Computer.</i> (не «einen»!) — sein ничего «не делает» с предметом.</p>
<div class="tip"><b>Как решать:</b> 1) найди глагол; 2) кто делает? — Nom.; 3) кого/что? — Akk.; 4) если это der-слово → -en.</div>`,
items:[
 {t:'sel',q:'ein, eine oder einen? (Akkusativ)',rows:[['Ich habe ___ Bruder.','einen'],['Ich habe ___ Schwester.','eine'],['Ich habe ___ Kind.','ein']],c:['ein','eine','einen'],ex:'der Bruder → einen; die Schwester → eine; das Kind → ein.'},
 {t:'fill',q:'Ich kaufe ___ Kühlschrank. (ein/eine/einen)',a:['einen'],ex:'der Kühlschrank → einen.'},
 {t:'fill',q:'Wir brauchen ___ Sofa. (ein/eine/einen)',a:['ein'],ex:'das Sofa — средний род не меняется → ein.'},
 {t:'mc',q:'Siehst du ___ Mann dort?',o:['den','der','dem','das'],a:0,ex:'sehen + Akk., der Mann → <b>den</b>.'},
 {t:'mc',q:'Das ist ___ Computer.',o:['ein','einen','eine','einem'],a:0,ex:'После <b>sein</b> → Nominativ → ein.'},
 {t:'mc',q:'Ich trinke ___ Kaffee.',o:['einen','ein','eine','einer'],a:0,ex:'der Kaffee, trinken + Akk. → einen.'},
 {t:'mc',q:'Ich esse ___ Apfel.',o:['einen','ein','eine','einer'],a:0,ex:'der Apfel → einen.'},
 {t:'mc',q:'Hier gibt es ___ Supermarkt.',o:['einen','ein','eine','einer'],a:0,ex:'<b>es gibt</b> + Akkusativ → einen Supermarkt.'},
 {t:'sel',q:'Nominativ oder Akkusativ? (подчёркнутая часть)',rows:[['<u>Mein Vater</u> liest die Zeitung.','Nominativ'],['Mein Vater liest <u>die Zeitung</u>.','Akkusativ'],['Ich besuche <u>meinen Onkel</u>.','Akkusativ'],['<u>Der Tee</u> ist heiß.','Nominativ']],c:['Nominativ','Akkusativ'],ex:'Кто? → Nom. Кого/что? → Akk. После sein → Nom.'},
 {t:'gap',q:'Ich brauche Möbel. Ergänzen Sie.',parts:['Ich brauche ',' Tisch, ',' Lampe und ',' Bett. Ich habe ',' Schrank, aber ich brauche einen.'],bank:['einen','eine','ein','keinen','dem','einer','der'],a:['einen','eine','ein','keinen'],
  ex:'der Tisch → einen; die Lampe → eine; das Bett → ein; der Schrank → keinen («нет шкафа, но нужен»).'}
]},

{id:'L6', title:'6. Possessives (mein, dein, sein, ihr …) and family', goal:'Pick the possessive by owner and the ending by noun.',
theory:`
<h3>Кто владелец?</h3>
<table class="tb"><tr><th>лицо</th><th>притяжательное</th><th>пример</th></tr>
<tr><td>ich</td><td>mein</td><td>mein Vater</td></tr><tr><td>du</td><td>dein</td><td>dein Bruder</td></tr>
<tr><td>er / es</td><td>sein</td><td>Paul und <b>sein</b>e Frau</td></tr><tr><td>sie (она)</td><td>ihr</td><td>Anna und <b>ihr</b> Mann</td></tr>
<tr><td>wir</td><td>unser</td><td>unser Haus</td></tr><tr><td>ihr</td><td>euer</td><td>euer Hund, <b>eure</b> Katze</td></tr>
<tr><td>sie (они)</td><td>ihr</td><td>die Kinder und ihre Eltern</td></tr><tr><td>Sie (вы, вежл.)</td><td><b>I</b>hr</td><td>Herr Novak, ist das Ihr Pass?</td></tr></table>
<div class="tip"><b>Два шага:</b> 1) <b>чьё?</b> — выбираем слово (sein / ihr…); 2) <b>какого рода предмет и какой падеж?</b> — окончание как у ein: mein Vater, mein<b>e</b> Mutter, mein Kind, mein<b>e</b> Eltern; в Akkusativ мужской: mein<b>en</b> Vater.</div>
<p>euer + окончание → <b>eure</b> (e выпадает): eure Mutter, eure Kinder.</p>
<h3>Семья (Familie)</h3>
<table class="tb"><tr><td>der Vater / die Mutter → die <b>Eltern</b></td><td>der Sohn / die Tochter → die Kinder</td></tr>
<tr><td>der Bruder / die Schwester → die <b>Geschwister</b></td><td>der Opa (Großvater) / die Oma (Großmutter) → die Großeltern</td></tr>
<tr><td>der Onkel / die Tante</td><td>der Cousin / die Cousine</td></tr>
<tr><td>der Neffe / die Nichte</td><td>der Mann / die Frau = муж / жена</td></tr></table>
<p>Familienstand: <b>ledig</b> (холост), <b>verheiratet</b> (женат/замужем), geschieden (разведён).</p>`,
items:[
 {t:'sel',q:'mein oder meine?',rows:[['Das ist ___ Vater.','mein'],['Das ist ___ Mutter.','meine'],['Das sind ___ Eltern.','meine'],['Das ist ___ Kind.','mein']],c:['mein','meine','meinen'],ex:'der/das → mein; die/мн. ч. → meine.'},
 {t:'mc',q:'Das ist Tom und das ist ___ Schwester.',o:['seine','sein','ihre','ihr'],a:0,ex:'Чья? Тома (er) → sein; die Schwester → seine.'},
 {t:'mc',q:'Das ist Lisa und das ist ___ Bruder.',o:['ihr','sein','ihre','seine'],a:0,ex:'Чей? Лизы (sie) → ihr; der Bruder → ihr.'},
 {t:'mc',q:'Wir lieben ___ Kinder.',o:['unsere','unser','unseren','unserer'],a:0,ex:'wir → unser; мн. ч. → unsere.'},
 {t:'mc',q:'Herr Novak, wie heißt ___ Frau?',o:['Ihre','deine','seine','Ihr'],a:0,ex:'На Sie → Ihr; die Frau → Ihre.'},
 {t:'mc',q:'Ich besuche ___ Onkel.',o:['meinen','mein','meine','meiner'],a:0,ex:'Akkusativ, der Onkel → meinen.'},
 {t:'mc',q:'Kinder, wo ist ___ Lehrerin?',o:['eure','euer','euren','dein'],a:0,ex:'ihr (дети) → euer; die Lehrerin → eure.'},
 {t:'fill',q:'Das ist Anna. ___ Mann heißt Paul.',a:['ihr'],ex:'Муж Анны (sie) → ihr Mann (здесь с заглавной только потому, что начало предложения).'},
 {t:'mc',q:'Der Vater von meinem Vater ist mein ___.',o:['Großvater','Onkel','Bruder','Neffe'],a:0,ex:'Отец отца — der Großvater (der Opa).'},
 {t:'mc',q:'Mein Bruder hat eine Tochter. Sie ist meine ___.',o:['Nichte','Tante','Cousine','Enkelin'],a:0,ex:'Дочь брата — die Nichte.'},
 {t:'mc',q:'Meine Mutter und mein Vater sind meine ___.',o:['Eltern','Geschwister','Großeltern','Kinder'],a:0,ex:'die Eltern — родители.'}
]},

{id:'L7', title:'7. Plural', goal:'Know the main plural groups and learn every noun with its plural.',
theory:`
<p>Артикль во множественном числе всегда <b>die</b> (kein → <b>keine</b>). Сложность — в окончании слова.</p>
<table class="tb"><tr><th>окончание</th><th>кто так делает</th><th>примеры</th></tr>
<tr><td><b>-(e)n</b></td><td>большинство die-слов</td><td>die Frau → Frau<b>en</b>, die Lampe → Lampe<b>n</b>, die Wohnung → Wohnung<b>en</b>, die Freundin → Freundin<b>nen</b></td></tr>
<tr><td><b>-e</b> (иногда ¨e)</td><td>многие der-слова</td><td>der Tag → Tag<b>e</b>, der Tisch → Tisch<b>e</b>, der Termin → Termin<b>e</b>, der Stuhl → St<b>ü</b>hl<b>e</b></td></tr>
<tr><td><b>—</b> (иногда ¨)</td><td>der/das на -er, -el, -chen</td><td>der Lehrer → Lehrer, das Zimmer → Zimmer, der Computer → Computer, der Bruder → Br<b>ü</b>der, der Apfel → <b>Ä</b>pfel</td></tr>
<tr><td><b>-er</b> (¨er)</td><td>многие das-слова</td><td>das Kind → Kind<b>er</b>, das Buch → B<b>ü</b>ch<b>er</b>, das Haus → H<b>ä</b>us<b>er</b>, der Mann → M<b>ä</b>nn<b>er</b></td></tr>
<tr><td><b>-s</b></td><td>иностранные, часто на гласную</td><td>das Foto → Foto<b>s</b>, das Auto → Auto<b>s</b>, das Handy → Handy<b>s</b>, das Büro → Büro<b>s</b></td></tr></table>
<div class="tip">В словаре форма пишется так: <i>der Tisch, -e</i> · <i>das Buch, ¨-er</i>. Учи слово сразу в трёх формах: <b>der Tisch – die Tische</b>.</div>`,
items:[
 {t:'multi',q:'der Tisch → die ___ · die Lampe → die ___ · das Handy → die ___ · der Lehrer → die ___',a:[['tische'],['lampen'],['handys'],['lehrer']],ex:'Tische, Lampen, Handys, Lehrer (без изменений).'},
 {t:'multi',q:'das Haus → die ___ · die Freundin → die ___ · der Vater → die ___ · das Büro → die ___',a:[['häuser'],['freundinnen'],['väter'],['büros']],ex:'Häuser, Freundinnen (nn!), Väter, Büros.'},
 {t:'mc',q:'Ich habe zwei ___. (die Schwester)',o:['Schwestern','Schwesters','Schwester','Schwesteren'],a:0,ex:'die-слово → -n: Schwestern.'},
 {t:'mc',q:'Wir haben drei ___. (das Kind)',o:['Kinder','Kinds','Kinden','Kindes'],a:0,ex:'das Kind → Kinder.'},
 {t:'mc',q:'Heute habe ich viele ___. (der Termin)',o:['Termine','Terminen','Termins','Termin'],a:0,ex:'der Termin → Termine.'},
 {t:'mc',q:'___ Bücher sind neu.',o:['Die','Der','Das','Den'],a:0,ex:'Мн. ч. → всегда <b>die</b>.'},
 {t:'mc',q:'Ich habe keine ___. (der Stift)',o:['Stifte','Stiften','Stifts','Stift'],a:0,ex:'der Stift → Stifte.'},
 {t:'sel',q:'Welche Pluralendung?',rows:[['die Wohnung','-en'],['das Auto','-s'],['das Zimmer','— (без изменений)'],['der Tag','-e']],c:['-e','-en','-s','— (без изменений)'],ex:'Wohnungen, Autos, Zimmer, Tage.'},
 {t:'fill',q:'Wie viele ___ hast du? (die Tasche)',a:['taschen'],ex:'die Tasche → Taschen.'}
]},

{id:'L8', title:'8. Numbers, prices, age', goal:'Read and write numbers, years and prices without mistakes.',
theory:`
<h3>0–20</h3>
<p>null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, <b>sechzehn</b> (без s), <b>siebzehn</b> (без en), achtzehn, neunzehn, zwanzig.</p>
<h3>Десятки</h3>
<p>zwanzig, <b>dreißig</b> (ß!), vierzig, fünfzig, <b>sechzig</b>, <b>siebzig</b>, achtzig, neunzig, (ein)hundert.</p>
<h3>21–99: сначала единицы, потом десятки</h3>
<p>47 = <b>sieben</b>und<b>vierzig</b> · 21 = <b>ein</b>undzwanzig · 99 = neunundneunzig. Всё <b>одним словом</b>.</p>
<h3>От 100</h3>
<p>365 = dreihundertfünfundsechzig · 1250 = (ein)tausendzweihundertfünfzig.</p>
<p>Годы: до 2000 — сотнями: 1998 = <b>neunzehnhundert</b>achtundneunzig. С 2000 — тысячами: 2026 = zweitausendsechsundzwanzig.</p>
<h3>Цены и возраст</h3>
<p>3,50 € = drei Euro fünfzig · 0,90 € = neunzig Cent. <i>Was kostet …? / Wie viel kostet …? – Das kostet …</i> · на кассе, итог: <i>Das macht …</i></p>
<p>Возраст — через <b>sein</b>: <i>Ich bin 33 (Jahre alt).</i> «<s>Ich habe 33 Jahre</s>» — ошибка.</p>`,
items:[
 {t:'mc',q:'16 =',o:['sechzehn','sechszehn','sechzig','sechsehn'],a:0,ex:'16 — без s: sechzehn.'},
 {t:'mc',q:'30 =',o:['dreißig','dreizig','dreizehn','dreisig'],a:0,ex:'30 — dreißig (ß).'},
 {t:'mc',q:'17 =',o:['siebzehn','siebenzehn','siebzig','siebenzig'],a:0,ex:'17 — siebzehn (без en). 70 — siebzig.'},
 {t:'fill',q:'58 in Worten:',a:['achtundfünfzig'],ex:'acht + und + fünfzig.'},
 {t:'fill',q:'99 in Worten:',a:['neunundneunzig'],ex:'neun + und + neunzig.'},
 {t:'fill',q:'240 in Worten:',a:['zweihundertvierzig'],ex:'zweihundert + vierzig.'},
 {t:'mc',q:'4,90 € =',o:['vier Euro neunzig','neun Euro vierzig','vierzig Euro neun','vier Euro neunzehn'],a:0,ex:'Сначала евро, потом центы.'},
 {t:'mc',q:'Wie alt bist du?',o:['Ich bin 33 Jahre alt.','Ich habe 33 Jahre.','Ich habe 33 Jahre alt.','Mein Alter ist 33 Jahre alt.'],a:0,ex:'Возраст — через sein.'},
 {t:'mc',q:'Jahreszahl 1989 =',o:['neunzehnhundertneunundachtzig','neunzehnhundertachtundneunzig','neunzehnneunundachtzig','achtzehnhundertneunundachtzig'],a:0,ex:'neunzehnhundert + neunundachtzig.'}
]},

{id:'L9', title:'9. Time, days of the week, am / um / im', goal:'Tell the time officially and informally (incl. Austrian) and use the right preposition.',
theory:`
<h3>Вопрос и ответ</h3>
<p><i>Wie spät ist es? / Wie viel Uhr ist es?</i> – Es ist … · <i>Um wie viel Uhr …? / Wann …?</i> – <b>Um</b> …</p>
<h3>Официально (радио, вокзал): 24 часа</h3>
<p>часы + <b>Uhr</b> + минуты: 14:05 = vierzehn Uhr fünf · 20:30 = zwanzig Uhr dreißig.</p>
<h3>Разговорно: 12 часов</h3>
<table class="tb"><tr><th>время</th><th>говорим</th><th>по-австрийски также</th></tr>
<tr><td>3:05</td><td>fünf nach drei</td><td></td></tr><tr><td>3:15</td><td>Viertel nach drei</td><td><b>viertel vier</b></td></tr>
<tr><td>3:20</td><td>zwanzig nach drei</td><td>zehn vor halb vier</td></tr><tr><td>3:25</td><td>fünf vor halb vier</td><td></td></tr>
<tr><td>3:30</td><td><b>halb vier</b></td><td></td></tr><tr><td>3:35</td><td>fünf nach halb vier</td><td></td></tr>
<tr><td>3:40</td><td>zwanzig vor vier</td><td>zehn nach halb vier</td></tr><tr><td>3:45</td><td>Viertel vor vier</td><td><b>dreiviertel vier</b></td></tr>
<tr><td>3:50</td><td>zehn vor vier</td><td></td></tr></table>
<div class="tip"><b>halb</b> — всегда к <b>следующему</b> часу, как «половина четвёртого». Австрийские так же, логика как в русском: <b>viertel vier</b> = «четверть четвёртого» (3:15), <b>dreiviertel vier</b> = «без четверти четыре» (3:45).</div>
<h3>Части дня и дни недели</h3>
<p>am Morgen (австр. <b>in der Früh</b>), am Vormittag, am Mittag, am Nachmittag, am Abend, <b>in der Nacht</b>.</p>
<p>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag · das Wochenende.</p>
<h3>Предлоги времени</h3>
<table class="tb"><tr><td><b>am</b> + день, часть дня, Wochenende</td><td>am Montag, am Abend, am Wochenende</td></tr>
<tr><td><b>um</b> + время на часах</td><td>um 8 Uhr, um halb neun</td></tr>
<tr><td><b>im</b> + месяц, время года</td><td>im Mai, im Sommer (в Австрии январь — Jänner)</td></tr>
<tr><td><b>in der</b> Nacht</td><td>исключение!</td></tr>
<tr><td><b>von … bis …</b></td><td>von 17 bis 19:30 Uhr</td></tr></table>`,
items:[
 {t:'mc',q:'3:30 (informell)',o:['halb vier','halb drei','drei Uhr halb','Viertel nach drei'],a:0,ex:'halb + следующий час.'},
 {t:'mc',q:'6:15 (informell)',o:['Viertel nach sechs','Viertel vor sechs','Viertel nach sieben','halb sechs'],a:0,ex:'Viertel nach sechs (австр. viertel sieben).'},
 {t:'mc',q:'10:45 (informell)',o:['Viertel vor elf','Viertel nach zehn','Viertel vor zehn','halb elf'],a:0,ex:'Viertel vor elf (австр. dreiviertel elf).'},
 {t:'mc',q:'8:20 (informell)',o:['zwanzig nach acht','zwanzig vor acht','zehn nach acht','zwanzig nach neun'],a:0,ex:'20 минут после восьми.'},
 {t:'mc',q:'5:35 (informell)',o:['fünf nach halb sechs','fünf vor halb sechs','fünf nach halb fünf','fünfunddreißig nach sechs'],a:0,ex:'5:30 = halb sechs, +5 минут → fünf nach halb sechs.'},
 {t:'mc',q:'21:10 (offiziell)',o:['einundzwanzig Uhr zehn','neun Uhr zehn','zehn nach einundzwanzig','zwanzig Uhr zehn'],a:0,ex:'Официально: einundzwanzig Uhr zehn.'},
 {t:'mc',q:'Österreichisch: „viertel neun“ =',o:['8:15','9:15','8:45','9:45'],a:0,ex:'viertel neun = «четверть девятого» (точно как по-русски!) = 8:15. А dreiviertel neun = «без четверти девять» = 8:45.'},
 {t:'sel',q:'am, um, im oder in?',rows:[['___ Mittwoch','am'],['___ 9 Uhr','um'],['___ Sommer','im'],['___ der Nacht','in'],['___ Vormittag','am']],c:['am','um','im','in'],ex:'am + день/часть дня, um + часы, im + месяц/сезон, in der Nacht.'},
 {t:'mc',q:'Wann beginnt der Kurs? – ___ 17 Uhr.',o:['Um','Am','Im','In'],a:0,ex:'Время на часах → um.'},
 {t:'mc',q:'Welcher Tag ist vor Freitag?',o:['Donnerstag','Samstag','Mittwoch','Dienstag'],a:0,ex:'… Donnerstag, Freitag …'},
 {t:'mc',q:'Der Deutschkurs ist ___ Montag und ___ Mittwoch.',o:['am … am','um … um','im … im','in … in'],a:0,ex:'Дни недели → am.'}
]},

{id:'L10', title:'10. Introductions, du / Sie, forms', goal:'Greet, say goodbye, choose du or Sie, answer questions about yourself.',
theory:`
<h3>Приветствие и прощание</h3>
<table class="tb"><tr><th>здороваемся</th><th>прощаемся</th></tr>
<tr><td>Guten Morgen! / Guten Tag! / Guten Abend!<br><b>Grüß Gott!</b> (Австрия, вежливо)<br>Hallo! / <b>Servus!</b> (Австрия, неформально — и «привет», и «пока»)</td>
<td>Auf Wiedersehen! (вежливо)<br>Tschüss! / <b>Baba!</b> / Servus! (Австрия, неформально)<br>Bis bald! / Bis morgen!<br>Gute Nacht! — только перед сном</td></tr></table>
<h3>du или Sie?</h3>
<ul><li><b>Sie</b> — незнакомые взрослые, преподаватели, врач, в офисе: <i>Wie geht es Ihnen?</i></li>
<li><b>du</b> — друзья, семья, дети, однокурсники: <i>Wie geht es dir?</i></li></ul>
<h3>Вопросы о себе</h3>
<table class="tb"><tr><td>Wie heißen Sie? / Wie ist Ihr Name?</td><td>Ich heiße … / Mein Name ist …</td></tr>
<tr><td>Woher kommen Sie?</td><td>Ich komme aus Russland.</td></tr>
<tr><td>Wo wohnen Sie?</td><td>Ich wohne in Klagenfurt.</td></tr>
<tr><td>Was sind Sie von Beruf?</td><td>Ich bin Student. / Ich bin Ingenieur.</td></tr>
<tr><td>Welche Sprachen sprechen Sie?</td><td>Ich spreche Russisch, Englisch und ein bisschen Deutsch.</td></tr></table>
<h3>Анкета (Formular)</h3>
<p>Vorname (имя) · Nachname / Familienname (фамилия) · Straße, Hausnummer · <b>PLZ</b> = Postleitzahl (индекс) · Wohnort · Telefonnummer · E-Mail · Geburtsdatum · Familienstand: ledig / verheiratet.</p>
<h3>Профессии: женская форма на -in</h3>
<p>der Lehrer → die Lehrer<b>in</b> · der Student → die Student<b>in</b> · der Arzt → die <b>Ä</b>rzt<b>in</b> · der Koch → die K<b>ö</b>ch<b>in</b> · der Verkäufer → die Verkäufer<b>in</b>.</p>
<p>Если не понял: <i>Wie bitte?</i> — «Простите, что?» · <i>Können Sie das bitte wiederholen?</i></p>`,
items:[
 {t:'mc',q:'Es ist 8 Uhr morgens. Sie kommen ins Büro. Was sagen Sie?',o:['Guten Morgen!','Guten Abend!','Gute Nacht!','Baba!'],a:0,ex:'Утром — Guten Morgen.'},
 {t:'mc',q:'Sie gehen nach Hause und sagen zu Ihren Freunden:',o:['Tschüss!','Grüß Gott!','Guten Tag!','Wie geht’s?'],a:0,ex:'Прощание с друзьями — Tschüss (или Baba, Ciao).'},
 {t:'mc',q:'„Wie geht es Ihnen?“ – „___“',o:['Danke, gut. Und Ihnen?','Danke, gut. Und dir?','Ich heiße Novak.','Gut, und du?'],a:0,ex:'Спросили на Sie — отвечаем на Sie: Und Ihnen?'},
 {t:'mc',q:'Sie sprechen mit Ihrer Professorin. Was ist richtig?',o:['Woher kommen Sie?','Woher kommst du?','Woher kommt ihr?','Woher komme Sie?'],a:0,ex:'С преподавателем — Sie.'},
 {t:'mc',q:'der Arzt → die ___',o:['Ärztin','Arztin','Ärzte','Arztfrau'],a:0,ex:'Женская форма: -in + умлаут → Ärztin.'},
 {t:'mc',q:'der Koch → die ___',o:['Köchin','Kochin','Köche','Kochfrau'],a:0,ex:'Köchin (умлаут).'},
 {t:'sel',q:'Welches W-Wort passt?',rows:[['___ kommst du? – Aus Russland.','Woher'],['___ wohnst du? – In Klagenfurt.','Wo'],['___ ist dein Name? – Bulat.','Wie'],['___ machst du beruflich? – Ich bin Student.','Was']],c:['Woher','Wo','Wie','Was','Wann'],ex:'aus … → Woher; in … → Wo; Name → Wie; Was machst du?'},
 {t:'mc',q:'„PLZ“ im Formular bedeutet:',o:['Postleitzahl','Personalzahl','Platz','Plural'],a:0,ex:'PLZ = Postleitzahl, почтовый индекс (Klagenfurt — 9020).'},
 {t:'mc',q:'Familienstand: „ledig“ bedeutet:',o:['nicht verheiratet','verheiratet','geschieden','hat Kinder'],a:0,ex:'ledig — холост / не замужем.'},
 {t:'mc',q:'„Wie bitte?“ bedeutet:',o:['Простите, что? (не расслышал)','Как дела?','Пожалуйста','Как вас зовут?'],a:0,ex:'Wie bitte? — переспрос.'}
]},

{id:'L11', title:'11. Vocabulary: food, flat, office', goal:'Know the most frequent topic words with their articles.',
theory:`
<h3>Еда и напитки (Essen und Trinken)</h3>
<table class="tb"><tr><th>der</th><th>die</th><th>das</th></tr>
<tr><td>der Käse, der Apfel, der Salat, der Reis, der Fisch, der Kuchen, der/das Joghurt (в Австрии обычно das), der Kaffee, der Tee, der Saft, der Wein</td>
<td>die Butter, die Wurst, die Banane, die Tomate (австр. der Paradeiser), die Kartoffel (австр. der Erdapfel), die Suppe, die Schokolade, die Milch, die Nudeln (мн.), <b>die Semmel</b> (австр. булочка)</td>
<td>das Brot, das Brötchen, das Ei, das Müsli, das Obst, das Gemüse, das Fleisch, das Wasser, das Bier</td></tr></table>
<p>Приёмы пищи: das Frühstück, das Mittagessen, das Abendessen.</p>
<p>В ресторане: die Speisekarte · Ich möchte … / Ich nehme … · Was kostet …? · <b>Zahlen, bitte!</b> / Die Rechnung, bitte! · Das macht 12 Euro. · Stimmt so! (сдачи не надо).</p>
<h3>Квартира и мебель (Wohnung und Möbel)</h3>
<table class="tb"><tr><th>der</th><th>die</th><th>das</th></tr>
<tr><td>der Tisch, der Stuhl, der Schrank, der Teppich, der Kühlschrank, der Herd, der Balkon, der Flur (австр. das Vorzimmer)</td>
<td>die Wohnung, die Küche, die Lampe, die Waschmaschine, die Dusche</td>
<td>das Zimmer, das Wohnzimmer, das Schlafzimmer, das Bad, das Bett, das Sofa, das Regal</td></tr></table>
<p>Прилагательные (пары): groß – klein · hell – dunkel · teuer – billig / günstig · neu – alt · schön – hässlich · praktisch, modern, bequem.</p>
<h3>Офис (Büro)</h3>
<p>der Computer, der Drucker, der Bildschirm, der Kalender, der Kuli, der Bleistift, der Termin · die Maus, die Tastatur · das Handy, das Papier, das Passwort.</p>`,
items:[
 {t:'sel',q:'der, die oder das? (Essen)',rows:[['Käse','der'],['Wurst','die'],['Ei','das'],['Brötchen','das'],['Milch','die'],['Saft','der']],c:['der','die','das'],ex:'der Käse, die Wurst, das Ei, das Brötchen (-chen), die Milch, der Saft.'},
 {t:'sel',q:'der, die oder das? (Wohnung)',rows:[['Regal','das'],['Herd','der'],['Teppich','der'],['Waschmaschine','die'],['Schrank','der'],['Bett','das']],c:['der','die','das'],ex:'das Regal, der Herd, der Teppich, die Waschmaschine, der Schrank, das Bett.'},
 {t:'mc',q:'Was passt nicht?',o:['der Käse','der Kaffee','der Tee','der Saft'],a:0,ex:'Kaffee, Tee, Saft — напитки; Käse — еда.'},
 {t:'mc',q:'Das Gegenteil von „teuer“ ist:',o:['billig','groß','alt','hell'],a:0,ex:'teuer — billig / günstig.'},
 {t:'mc',q:'Das Gegenteil von „hell“ ist:',o:['dunkel','klein','neu','schön'],a:0,ex:'hell — dunkel.'},
 {t:'mc',q:'Sie möchten im Restaurant bezahlen. Sie sagen:',o:['Zahlen, bitte!','Kosten, bitte!','Geld, bitte!','Ich möchte die Speisekarte.'],a:0,ex:'Zahlen, bitte! / Die Rechnung, bitte!'},
 {t:'mc',q:'In Österreich ist eine „Semmel“:',o:['ein Brötchen','eine Wurst','ein Kuchen','eine Butter'],a:0,ex:'die Semmel = das Brötchen.'},
 {t:'mc',q:'Hier schläft man:',o:['das Schlafzimmer','das Wohnzimmer','die Küche','das Bad'],a:0,ex:'schlafen + das Zimmer = das Schlafzimmer.'}
]}
];
