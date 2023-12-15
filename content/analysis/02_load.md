---
Title: Load (Kmom05)
Template: technologies
---

<p>I denna analys kommer jag titta på tre hemsidor och analysera designvalet specifikt gällande laddningstid och användbarhet. </p>

Urval
-----------------------

<p>För kontinuerlighetens skull väljer jag samma hemsidor från Kmom04 och Färg-analysen:</p>
<br />
<table>
<tr>
    <td style="width: 100px;">
        <a href="../image/blogg-blondinbella.png"><img src="../image/blogg-blondinbella.png?height=200" alt="Bild på Blondinbellas blogg" /></a>
    </td>
    <td>
<b><a href="https://web.archive.org/web/20160528173355/https://www.blondinbella.se/">Isabella Löwengrips blogg "Blondinbella"</a></b>, via Wayback Machine då bloggen inte finns kvar längre<br />
Jag valde denna blogg då den är känd för att vara en av de mest kända och största bloggarna i Sveriges historia.
    </td>
</tr>
<tr>
    <td>
        <a href="../image/blogg-zeinas.png"><img src="../image/blogg-zeinas.png?height=200" alt="Bild på Zeinas Kitchen" /></a>
    </td>
    <td>
<b><a href="https://zeinaskitchen.se/">Zeina Mourtadas matblogg "Zeinas Kitchen"</b></a><br />
Jag valde denna blogg då det är en av Sveriges största matbloggar, men också för att det är en blogg i en annan genre, jämfört med den första bloggen jag valde.
    </td>
</tr>
<tr>
    <td>
        <a href="../image/blogg-jardenberg.png"><img src="../image/blogg-jardenberg.png?height=200" alt="Bild på Jardenberg" /></a>
    </td>
    <td>
<b><a href="https://jardenberg.se/">Joakim Jardenbergs personliga hemsida och blogg "Jardenberg"</b></a><br />
Sist men inte minst valde jag denna blogg då även den är i en distinkt genre från de tidigare två bloggarna, men också för att Joakim Jardenberg är en internetprofil som ofta uttalar sig om ny teknik, inte minst genom sin blogg "#ensakidag", och jag anser därför att han bör ha en mer kvalificerad idé om designen på sin hemsida. 
    </td>
</tr>
</table>

Metod
-----------------------

Eftersom denna analys kommer undersöka laddningstiden och användbarheten i hemsidornas design, har jag valt att använda verktyget "PageSpeed Insights", eftersom det är ett verktyg som mäter många olika typer av värden och villkor av hemsidans prestanda. Dessa resultat anser jag är väldigt användbara för att förbättra hemsidors laddningstid och användbarhet. Om man bara tittar på PageSpeed Insights resultat kan vi enkelt jämföra de tre hemsidornas prestanda. I resultatet nedan kommer jag utgå från att god kod används (i enlighet med <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring">"Lighthouse performance scoring"</a> av Google, som PageSpeed Insights refererar till), och endast lista nackdelarna jag stött på. Jag kommer dessutom även använda Developer Tools som är inbyggt i Safari på macOS för att mäta laddningstid, resursmängd, och storlek på hemsidorna. 

Resultat
-----------------------

Samlat resultat från Developer Tools i macOS Safari:
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_Ry2BYTom2MaaewvIjznvFOVFgPLLUHt5XL7hVtrex7WJjyjsAhan-4Qup37t0MMbx6H7l6gwM-Ep/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" class="iframe-google-sheets"></iframe>
<br />
Samlat resultat från Google PageSpeed Insights:
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_Ry2BYTom2MaaewvIjznvFOVFgPLLUHt5XL7hVtrex7WJjyjsAhan-4Qup37t0MMbx6H7l6gwM-Ep/pubhtml?gid=309158755&amp;single=true&amp;widget=true&amp;headers=false" class="iframe-google-sheets"></iframe>

Analys
-----------------------

__Blondinbella__<br />
Denna hemsida var extra intressant att analysera då originalet inte finns kvar längre, och hemsidan därför måste  nås genom Wayback Machine. Jag tänkte först att det var en dålig idé att välja denna hemsida eftersom Wayback Machines egen kod utan tvekan skulle lägga till extra "overhead", laddningstid och resurser, men sen tänkte jag att jag lika väl kan analysera Wayback Machines och Blondinbellas kod på samma gång, och göra en kombinerad analys.<br />
<br />
Tabellen ovan visar Blondinbella via Wayback Machines prestanda, men resultatet dock inte helt rättvist på grund av Wayback Machines overhead. Vi ser att "performance" har fått ett extremt lågt resultat: 39 på desktop och 9 på mobile. Det låga resultatet beror till stor del på tunga javascript-filer. Hemsidan laddar in 5,382.2 KiB javascript i diverse filer, varav Blondinbellas egen javascript-fil endast är 159.0 KiB stor. Sedan tillkommer även annan kod som användes på Blondinbella så som Google Ads och widgets för sociala nätverk så som Facebook, men den stora majoriteten är Wayback Machines kod. 
<br />
I tabellen med mätningar från Developer Tools ser vi att laddningstiden minskar ju fler gånger som hemsidan laddas in, men det är ändå helt oacceptabelt att laddningstiden snittar på 31 sekunder. <br />
<br />

__Zeinas Kitchen__<br />
Denna hemsida får en silverplats, men det var inte svårt att vara bättre än Blondinbella via Wayback Machine. Zeinas Kitchen hade 4,2 sekunder i snitt i laddningstid, vilket är betydligt bättre än Blondinbellas resultat, men fortfarande väldigt lång tid. Hemsidans "above the fold" laddades in redan efter några hundra millisekunder, men sedan fortsätter sidan att ladda in fler och fler resurser. Och många av dessa resurser är dessutom extremt stora bilder, vilket återspeglas i sidans totala storlek på 5.3 MB. Zeina hade behövt använda cimage för att förminska bilder, och också ladda in de delar av hemsidan som inte ska användas direkt dynamiskt.<br />
<br />

__Jardenberg__<br />
Joakim Jardenbergs hemsida och blogg "Jardenberg" tar guldplatsen i alla kategorier. Både i Google PageSpeed Insights på desktop och mobile, och även i Developer Tools mätningar, har Jardenberg fått bäst resultat. Första gången sidan laddas tar det mellan 1-2 sekunder, men sedan laddas sidan på ca 200 millisekunder. Hemsidan har även bäst resultat i PageSpeed Insights och får godkänt av verktyget i samtliga kategorier.<br />
<br />

__Slutsats__<br />
Processorerna som sitter i våra datorer och mobiltelefoner har blivit exponentiellt snabbare med tiden, och dagens internethastighet är också blixtsnabb och går inte ens att jämföra med dåtidens 56k modem. Även mobiltelefoner som är uppkopplade med 4G och 5G har inga problem med att ladda in många och stora resurser. Men jag anser ändå att det är viktigt att tänka på hur mycket designen belastar hemsidan. Om man slutar tänka på detta helt skulle hemsidorna kunna bli så långsamma att vi helt plötsligt slungas tillbaka till 56k modemets era. Med det sagt anser jag inte heller att vi kan vara helt kritiska, inte ens Google som har skapat verktyget PageSpeed Insights får felfritt resultat när man kör verktyget på Google.se. Blondinbella via Wayback Machine tar dock en lång stund på sig innan hemsidan går att använda, och det är oacceptabelt. 
I min jämförelse blir Jardenberg vinnare, följt av Zeinas Kitchen och sedan Blondinbella via Wayback Machine. Jardenberg laddas in med så få resurser som möjligt, till så liten storlek som möjligt, så fort som möjligt, och det är värt att sträva efter. Det är också värt att nämna att toleransen för att vänta på att en hemsida laddar är väldigt låg nu för tiden. Inte längre låter man en hemsida ladda medan man kokar kaffe eller går på toaletten &mdash; laddar det inte tillräckligt snabbt så struntar man i hemsidan. Personligen tycker jag ungefär 2 sekunder är gränsen innan jag tröttnar. 

Referenser
-----------------------

- Google, "Lighthouse performance scoring", https://developer.chrome.com/docs/lighthouse/performance/performance-scoring, hämtad 2023-12-09

Skriven av
-----------------------

Kevin Erazo (keer23)