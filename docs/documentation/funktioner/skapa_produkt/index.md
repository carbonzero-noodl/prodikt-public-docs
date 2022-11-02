# Skapa produkt

Produkter är en av de viktigaste beståndsdelarna i Prodikt. Om du inte kan hitta en specifik produkt från en tillverkare eller en som är genererad från generisk data, då kan du välja skapa en egen produkt.

## Skapa produkt

![Skapa produkt](/docs-createproduct.gif)

1. Klicka på ”skapa produkt”
2. Välj en bild genom att klicka på kameraikonen.
3. Klicka på Välj produktgrupp och sök efter den grupp som passar alternativt välj från listan.
4. Skriv in tillverkare och välj från listan. Du kan även lägga till en egen genom att skriva namnet och trycka Enter.
5. Skriv in produktnamn (minst 5 tecken)
6. Du kan skriva in ett GTIN-nummer (GTIN (Global Trade Item Number) och artikelnummer.
7. Klicka till nästa steg.

## Material

Alla produkter i Prodikt behöver bestå av minst ett material.

![Material](/ui-createproduct-material.png)

1. Ge ditt material ett namn.
2. Lägg till CAS-nummer om du önskar.
3. Välj den kategori som passar bäst eller övrigt.
4. För att kunna beräkna och gå vidare så behöver du ange vikt av materialet.
5. När du lagt till de material som ingår i produkten så går du vidare.

## Lägg till hållbarhetsinformation

### Klimatpåverkan

**EPD**

Koppla en befintlig EPD med specifik information  genom att välja i listan. Om EPD:n inkluderar mer än en produkt så väljer du alternativet som stämmer överens med produkten du skapar. Genom att välja en befintlig EPD så läggs dess värden automatiskt in och kopplas till produkten du skapar.

**Generisk data**

Du kan välja att koppla generisk data till den produkt du skapar genom att välja från en klimatdatabas som tillhandahåller generisk data.

**LCA**

🏗️ Under konstruktion

**CUSTOM**

Detta är för dig som vill få in ett eget värde snabbt. ⚠️ Observera att Custom-värden inte får användas i exempelvis i en klimatdeklaration.

### Cirkularitet

Här fyller du i cirkularitetsegenskaper för produkten.

### Material

Här fylls de hälsorelaterade värdena för inomhusmiljö i och anges i mikrogram per kubikmeter (µg/m³). 

**BASTA**
Du kan även söka upp värdena om produkten är kopplad till BASTAs databas.

## Tekniska egenskaper
Här fyller du i de tekniska egenskaperna som är baserat på en valda produktgruppen. Ett exempel på en golvprodukt är: 
- Stegljudsdämpning - ∆Lw	
- Ljudabsorption
- Bruksklass

## SPARA
När du sparat i det sista steget så läggs produkten till i din produktsamling.

⚙️ Du kan alltid redigera din produkt genom att klicka på kugghjulet.
![Spara och redigera](/ui-createproduct-editproduct.png)


::: info ℹ️ Bra att veta
Det finns tre nivåer av indelningen av produkter och system i Prodikt:
- Produktkategori
	- Produktfamilj
		- Produktgrupp
:::