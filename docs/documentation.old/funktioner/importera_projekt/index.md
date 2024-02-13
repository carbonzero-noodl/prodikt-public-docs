# Importera ett projekt till Prodikt

## Introduktion

Prodikt stöttar befintliga processer

Vi tror verkligen att vi har byggt något bra men vi vet också att dina och ditt team’s befintliga processer är viktiga. 

Vid en import av en IFC-fil (3D-modell) eller en Excel-fil (kalkyl/materiallista) till ett projekt i Prodikt så analyseras den data som importeras och matchas mot antingen produkter eller system som finns i Prodikt. För att få produktspecifik data utan att användaren ska behöva räkna om eller samla in någon data så kan nedan steg följas.

## 1. Säkerställ produtspecifik data

Många tillverkare har redan registrerat sina produkter i Prodikt, men för att säkerställa att de produkter som är relevanta för projektet finns tillgängliga så bör en kravställning göras rörande produkternas registrering i Prodikt. På så sätt kan det säkerställas att produktspecifik data finns lättillgängligt.

Hjälp med kravställningen kan fås genom att läsa: ”Föreskriftstexter – Privat sektor” eller ”Föreskriftstexter – Offentlig sektor”.

Skulle en produkt sakna visst underlag och det accepteras i exempelvis en upphandling, då kan produkten registreras i Prodikt likväl. Produkten kommer då ha vissa luckor i sitt produktkort, men när produkten läggs till i ett projekt kommer generisk data automatiskt att tilldelas produkten vilket underlättar för användaren.

Läs mer om produktsidan här: [Produktsida](/documentation/kom_igang/produktsida/)

## 2. Importera & granska produkter

I ett projekt kan olika typer av filer importeras.

![Importera](/ui-toolbox-import.gif)

Om en Excelfil ska importeras kan en standardmall enkelt laddas ner vilken importen stödjer. 

| ProdiktID | Name | Manufacturer | Qty | Unit | GTIN | art_nr	| Floor | Tags | Identifier | Length | Width | Height | Thickness | Diameter | Weight |
| ---------- | :--: | ------------ |-----|------|------|--------|-------|------|------------|--------|-------|--------|-----------|----------|--------|
| xxxxxx     | xxxx | xxxx         | xxx | xx   |      |        |       |      |            |        |       |        |           |          |        |

Skulle användaren ingå i en organisationsplan så kan importen konfigureras för att stödja organisationsspecifika Excelmallar.
Om en IFC-fil ska importeras så har Prodikt fullt stöd för alla olika modeller.

Oavsett vad för typ av fil som importeras så matchas **artikelnummer/GTIN/bim-objekt** med produkter i Prodikts databas.
I projektet visas i procent mängden produktspecifik data. Därmed är det enkelt att avgöra och upptäcka ifall någon produkt i projektet baseras på generisk data.

## 3.	Optimera projektet

Skulle en import inte ge en fullständig matchning kan detta antingen bero på att produkten fattades i produktdatabasen alternativt att importfilen innehöll bristfällig data, ex. avsaknad av **artikelnummer/GTIN/bim-objekt**.
 
I projektet är det enkelt att skilja på generisk och specifik data. Det är även lika enkelt att byta ut en eller flera produkter på en gång.

## 4.	Analysera & rapportera

När projektet är fullständigt kan en analys enkelt göras utifrån sammanställningen som finns för klimatpåverkan, cirkularitet och hälsa/material i projektvyn.
En projektrapport kan skapas samt att en klimatdeklaration kan upprättas om det kravet skulle finnas.

![Importera](/ui-projectoverview.png)

						
