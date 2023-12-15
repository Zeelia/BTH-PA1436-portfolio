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
<br />
__Blondinbella__<br />

<br />
Lång laddningstid som beror på stora javascript-filer, oanvänd CSS, bilder som laddas in direkt (istället för endast när de är synliga) och föråldrad javascript för äldre webbläsare.<br />
<br />
Meta-taggen innehåller <code>user-scalable=no</code> och <code>maximum-scale=1</code> är mindre än gränsvärdet 5. Det finns även enstaka element som har dålig kontrastratio (vit text på en ljus-rosa bakgrund), och det saknas attribut för screen readers så som titlar på iframes, labels för formulär, och alt för länkar.<br />
<br />
<code>unload</code>-eventet har använts som inte alltid fungerar och kan förhindra webbläsaroptimisering. Det finns många errors i konsollen från webbläsaren gällande saknade resurser (filer som Blondinbella länkade till som inte finns kvar längre). Och det saknas source map-filer för minifierade javascript-filer.<br />
<br />
Det finns en länk som inte innehåller något href-attribut, vilket gör att vissa robots inte kan "crawl":a genom länken.
<br />
<br />

__Zeinas Kitchen__<br />

<img src="../image/blogg-zeinas-psi.png" alt="PageSpeed Insights resultat på Zeinas Kitchen" />(figur 2)<br />
<br />
<br />

__Jardenberg__<br />

<img src="../image/blogg-jardenberg-psi.png" alt="PageSpeed Insights resultat på Jardenberg" />(figur 3)<br />
<br />
Typsnittet är detsamma för all text på hemsidan, men det typsnitt som används varierar beroende på vad som finns tillgängligt, i denna följd: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol".
Typsnittet för logotypen är okänt då logotypen är en bild, men den innehåller tajt text utan serifer. 
Akromatiskt färgschema med vitt, svart och varierande gråa toner.<br /> 

Analys
-----------------------

__Blondinbella__<br />
Denna hemsida var extra intressant att analysera då originalet inte finns kvar längre, och hemsidan därför måste  nås genom Wayback Machine. Jag tänkte först att det var en dålig idé att välja denna hemsida eftersom Wayback Machines egen kod utan tvekan skulle lägga till extra "overhead", laddningstid och resurser, men sen tänkte jag att jag lika väl kan analysera Wayback Machines och Blondinbellas kod på samma gång, och göra en kombinerad analys.<br />
<br />
<i>Performance</i>. Bilden ovan (figur 1) visar Blondinbella via Wayback Machines prestanda, men resultatet dock inte helt rättvist på grund av Wayback Machines overhead. Vi ser att "performance" har fått ett extremt lågt resultat: 15. Det låga resultatet beror till stor del på tunga javascript-filer. Hemsidan laddar in 5,382.2 KiB javascript i diverse filer, varav Blondinbellas egen javascript-fil endast är 159.0 KiB stor. Sedan tillkommer även annan kod som användes på Blondinbella så som Google Ads och widgets för sociala nätverk så som Facebook, men den stora majoriteten är Wayback Machines kod. 

Å andra sidan är det inte heller tänkbart att Wayback Machines kod ger Blondinbellas resultat gratis god prestanda, SEO...
<br />

__Zeinas Kitchen__<br />
Den handskrivna texten i header-bannern ger bloggen en mysig och huslig/hemtrevlig karaktär, vilket jag tycker passar bra för en matblogg där hon skriver om sitt liv och vilken mat hon lagar till sin familj. Jag tycker dock att valet av att ha så pass olika typsnitt (speciellt att blanda med och utan serifer) för rubriker och brödtext känns förvirrande. Rubrikerna har serifer, och texten ser väldigt seriös ut, ungefär som att det skulle vara en artikel i The New York Times. Brödtexten har däremot inga serifer vilket passar bättre då den ser trevligare ut. 
Precis som bloggen Blondinbella, har Zeinas Kitchen för många tecken på en och samma rad (108), vilket gör texten smått svårläst.<br />
<br />

__Jardenberg__<br />
Joakim har i sin blogg Jardenberg valt en akromatisk färgpalett som jag tycker känns modern men också ganska tråkig. Den röda pricken i hemsidans logotyp är därför väldigt impaktfull. Trots att det är en så liten accent gör det att ögonen förs dit, och att hemsidan får lite mer liv och rörelse. Typografin är exakt likadan över hela hemsidan vilket gör att den känns enhetlig. Inte en enda gång lade jag anmärke till något i typografin, vilket jag ser som ett gott betyg. Precis som Norman sade, så lägger man oftast inte märke till bra design då den passar så bra att den blir osynlig: “<i>Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible,</i>” (Norman 1988)<br />
<br />

__Slutsats__<br />

Inte ens Google som har skapat verktyget PageSpeed Insights får felfritt resultat. 

Referenser
-----------------------

- Google, "Lighthouse performance scoring", https://developer.chrome.com/docs/lighthouse/performance/performance-scoring, hämtad 2023-12-09

Skriven av
-----------------------

Kevin Erazo (keer23)