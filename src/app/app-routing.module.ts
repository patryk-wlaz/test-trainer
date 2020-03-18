import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { TestComponent } from './test/test.component';
import { Test } from './config/model';

// because of 'Cannot read property 'loadChildren' of null' error I can't do this in a sane way

// tslint:disable: max-line-length
const inspekcjaAll: Test = {
  name: 'Pytania na inspekcje gotowości',
  updatedAt: 1483272000000,
  route: 'inspekcje',
  description: 'Zestawy pytań testowych do wykorzystywania w sprawdzianach wiedzy obsad podziału bojowego i stanowisk kierowania w trakcie inspekcji gotowości operacyjnej - wszystkie kategorie pytań.',
  amounts: {
    all: 15,
    required: 13,
    timeForQuestion: 60000,
  },
  questions: [
    {
      question: '1. Minimalny czas działania awaryjnego oświetlenia ewakuacyjnego wynosi:',
      answers: [
        {
          answer: 'a) 1 godzina',
          isCorrect: true
        },
        {
          answer: 'b) 2 godziny',
          isCorrect: false
        },
        {
          answer: 'c) 4 godziny',
          isCorrect: false
        }
      ]
    },
    {
      question: '2. Kurek główny umożliwiający odcięcie dopływu gazu do budynku powinien być zainstalowany:',
      answers: [
        {
          answer: 'a) na zewnątrz budynku',
          isCorrect: true
        },
        {
          answer: 'b) w kuchni i przedpokoju',
          isCorrect: false
        },
        {
          answer: 'c) w odległości mniejszej niż 3 m od urządzenia gazowego, licząc po długości przewodu',
          isCorrect: false
        }
      ]
    },
    {
      question: '3. Który z gazów jest lżejszy od powietrza?:',
      answers: [
        {
          answer: 'a) gaz ziemny',
          isCorrect: true
        },
        {
          answer: 'b) propan-butan',
          isCorrect: false
        },
        {
          answer: 'c) dwutlenek węgla',
          isCorrect: false
        }
      ]
    },
    {
      question: '4. Przeciwpożarowy wyłącznik prądu służy do:',
      answers: [
        {
          answer: 'a) odcięcia dopływu prądu do bezwzględnie wszystkich obwodów elektrycznych w budynku',
          isCorrect: false
        },
        {
          answer: 'b) odcięcia dopływu prądu do wszystkich obwodów elektrycznych, z wyjątkiem obwodów zasilających instalacje i urządzenia, których funkcjonowanie jest niezbędne podczas pożaru',
          isCorrect: true
        },
        {
          answer: 'c) załączenia dopływu prądu do obwodów zasilających instalacje i urządzenia, których funkcjonowanie jest niezbędne podczas pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '5. Do kategorii zagrożenia ludzi ZL IV zalicza się budynki:',
      answers: [
        {
          answer: 'a) mieszkalne',
          isCorrect: true
        },
        {
          answer: 'b) zamieszkania zbiorowego nie zakwalifikowane do ZL I i ZL II',
          isCorrect: false
        },
        {
          answer: 'c) przeznaczone przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się',
          isCorrect: false
        }
      ]
    },
    {
      question: '6. Instalacje gazowe w budynkach oznaczane są kolorem:',
      answers: [
        {
          answer: 'a) zielonym',
          isCorrect: false
        },
        {
          answer: 'b) brązowym',
          isCorrect: false
        },
        {
          answer: 'c) żółtym',
          isCorrect: true
        }
      ]
    },
    {
      question: '7. Kategoria zagrożenia ludzi ZL II odnosi się do budynków oraz części budynków:',
      answers: [
        {
          answer: 'a) przeznaczonych przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się',
          isCorrect: true
        },
        {
          answer: 'b) nieprzeznaczonych przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się',
          isCorrect: false
        },
        {
          answer: 'c) niezakwalifikowanych do ZL I',
          isCorrect: false
        }
      ]
    },
    {
      question: '8. System sygnalizacji pożarowej zainstalowany w budynku ma na celu:',
      answers: [
        {
          answer: 'a) ugasić pożar',
          isCorrect: false
        },
        {
          answer: 'b) wykryć i ugasić pożar',
          isCorrect: false
        },
        {
          answer: 'c) wykryć pożar i przekazać alarm o pożarze',
          isCorrect: true
        }
      ]
    },
    {
      question: '9. Zadziałanie instalacji tryskaczowej powoduje wypływ wody:',
      answers: [
        {
          answer: 'a) ze wszystkich tryskaczy występujących na kondygnacji budynku objętej pożarem',
          isCorrect: false
        },
        {
          answer: 'b) z tryskacza (lub tryskaczy), na który oddziałuje pożar',
          isCorrect: true
        },
        {
          answer: 'c) ze wszystkich tryskaczy w całym budynku',
          isCorrect: false
        }
      ]
    },
    {
      question: '10. Jaka powinna być maksymalna odległość między dwoma hydrantami zewnętrznymi w mieście:',
      answers: [
        {
          answer: 'a) 80 m',
          isCorrect: false
        },
        {
          answer: 'b) 100 m',
          isCorrect: false
        },
        {
          answer: 'c) 150 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '11. Budynek niemieszkalny zaliczony do grupy „wysoki”, to budynek o wysokości:',
      answers: [
        {
          answer: 'a) ponad 12 m do 25 m włącznie nad poziomem terenu',
          isCorrect: false
        },
        {
          answer: 'b) ponad 25 m do 55 m włącznie nad poziomem terenu',
          isCorrect: true
        },
        {
          answer: 'c) powyżej 55 m nad poziomem terenu lub ponad 9 do 18 kondygnacji nadziemnych włącznie',
          isCorrect: false
        }
      ]
    },
    {
      question: '12. Instalacja tryskaczowa powinna posiadać przyłącza dla straży pożarnej, służące do:',
      answers: [
        {
          answer: 'a) poboru wody ze zbiornika zapasu wody instalacji tryskaczowej przez jednostki straży pożarnej',
          isCorrect: false
        },
        {
          answer: 'b) zasilania instalacji tryskaczowej przez jednostki straży pożarnej',
          isCorrect: true
        },
        {
          answer: 'c) zasilania zbiornika zapasu wody instalacji tryskaczowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '13. Hydranty zewnętrzne umieszcza się od ściany budynku chronionego w odległości:',
      answers: [
        {
          answer: 'a) nie mniejszej niż 150 m',
          isCorrect: false
        },
        {
          answer: 'b) co najmniej 5 m i nie większej niż 75 m',
          isCorrect: true
        },
        {
          answer: 'c) co najmniej 15 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '14. W budynkach stosuje się następujące rodzaje punktów poboru wody do celów przeciwpożarowych:',
      answers: [
        {
          answer: 'a) hydranty 33 i hydranty 52, zawory 75',
          isCorrect: false
        },
        {
          answer: 'b) hydranty 75 i zawory 52',
          isCorrect: false
        },
        {
          answer: 'c) hydranty 25, hydranty 33, hydranty 52 i zawory 52',
          isCorrect: true
        }
      ]
    },
    {
      question: '15. Urządzenia zabezpieczające przed zadymieniem poziomych dróg ewakuacyjnych obligatoryjnie należy stosować:',
      answers: [
        {
          answer: 'a) w budynku wysokim dla stref pożarowych ZL IV',
          isCorrect: false
        },
        {
          answer: 'b) w budynku wysokim i wysokościowym dla stref pożarowych innych niż ZL IV',
          isCorrect: true
        },
        {
          answer: 'c) w budynku wysokościowym',
          isCorrect: false
        }
      ]
    },
    {
      question: '16. Instrukcja bezpieczeństwa pożarowego powinna zawierać:',
      answers: [
        {
          answer: 'a) warunki ochrony przeciwpożarowej wraz z planami obiektów',
          isCorrect: true
        },
        {
          answer: 'b) ocenę ryzyka wystąpienia pożaru',
          isCorrect: false
        },
        {
          answer: 'c) opis sił i środków PSP przewidzianych do walki z pożarem w obiekcie',
          isCorrect: false
        }
      ]
    },
    {
      question: '17. Sposób przechowywania instrukcji bezpieczeństwa pożarowego:',
      answers: [
        {
          answer: 'a) nie jest określony',
          isCorrect: false
        },
        {
          answer: 'b) powinien zapewnić możliwość jej natychmiastowego wykorzystania na potrzeby prowadzenia działań ratowniczych',
          isCorrect: true
        },
        {
          answer: 'c) powinien być określony przez właściciela zarządcę lub użytkownika obiektu i gwarantować dostęp do niej inspektora do spraw ppoż',
          isCorrect: false
        }
      ]
    },
    {
      question: '18. Instrukcja bezpieczeństwa pożarowego jest dokumentem, który:',
      answers: [
        {
          answer: 'a) nie powinien być wykorzystywany przy działaniach gaśniczych',
          isCorrect: false
        },
        {
          answer: 'b) powinien być wykorzystywany przy działaniach gaśniczych, jeżeli zachodzi taka potrzeba',
          isCorrect: true
        },
        {
          answer: 'c) powinien być wykorzystywany przy działaniach gaśniczych, jeżeli zachodzi taka potrzeba, jednak wyłącznie w przypadku obiektów, które muszą być wyposażone w system sygnalizacji pożarowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '19. Podczas pożaru instalacja wodociągowa przeciwpożarowa z zaworami 52 (np. w postaci nawodnionych pionów):',
      answers: [
        {
          answer: 'a) nie może być wykorzystywana do celów gaśniczych, ponieważ tego typu instalacje zostały wycofane z uwagi na dużą zawodność',
          isCorrect: false
        },
        {
          answer: 'b) może być wykorzystywana przez ekipy straży pożarnej',
          isCorrect: true
        },
        {
          answer: 'c) może być wykorzystywana przez użytkowników budynku',
          isCorrect: false
        }
      ]
    },
    {
      question: '20. Przy założeniu, że w budynku użyteczności publicznej o wysokości ponad 25 m zastosowano normatywne wyposażenie w urządzenia przeciwpożarowe, Kierujący działaniami ratowniczymi w takim budynku będzie mógł wykorzystać:',
      answers: [
        {
          answer: 'a) co najmniej jeden rękaw ratowniczy',
          isCorrect: false
        },
        {
          answer: 'b) instalację suchych pionów',
          isCorrect: false
        },
        {
          answer: 'c) dźwiękowy system ostrzegawczy',
          isCorrect: true
        }
      ]
    },
    {
      question: '21. Gdzie nie jest wymagane stosowanie dźwiękowego systemu ostrzegawczego?',
      answers: [
        {
          answer: 'a) salach widowiskowych i sportowych o liczbie miejsc powyżej 1 500',
          isCorrect: false
        },
        {
          answer: 'b) wszystkich budynkach użyteczności publicznej wysokich i wysokościowych',
          isCorrect: false
        },
        {
          answer: 'c) budynkach mieszkalnych',
          isCorrect: true
        }
      ]
    },
    {
      question: '22. Gdzie nie jest wymagane stosowanie dźwiękowego systemu ostrzegawczego?',
      answers: [
        {
          answer: 'a) budynkach zamieszkania zbiorowego wysokich i wysokościowych lub o liczbie miejsc noclegowych powyżej 200',
          isCorrect: false
        },
        {
          answer: 'b) wszystkich kinach i teatrach',
          isCorrect: true
        },
        {
          answer: 'c) budynkach handlowych lub wystawowych wielokondygnacyjnych, zawierających strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 5 000 m2',
          isCorrect: false
        }
      ]
    },
    {
      question: '23. Instrukcji bezpieczeństwa pożarowego nie mają obowiązku zapewnić i wdrożyć właściciele zarządcy lub użytkownicy obiektów:',
      answers: [
        {
          answer: 'a) użyteczności publicznej, gdy kubatura brutto budynku lub jego części stanowiącej odrębną strefę pożarową przekracza 1 000 m3',
          isCorrect: false
        },
        {
          answer: 'b) mieszkalnych, gdy kubatura brutto budynku lub jego części stanowiącej odrębną strefę pożarową przekracza 1 000 m3',
          isCorrect: true
        },
        {
          answer: 'c) produkcyjnych i magazynowych, w których występuje strefa zagrożenia wybuchem',
          isCorrect: false
        }
      ]
    },
    {
      question: '24. Wskaż nieprawidłową odpowiedź. Hydranty 25 muszą być stosowane w strefach pożarowych zakwalifikowanych do kategorii zagrożenia ludzi ZL:',
      answers: [
        {
          answer: 'a) na każdej kondygnacji budynku wysokiego i wysokościowego, z wyjątkiem kondygnacji obejmującej wyłącznie strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL IV',
          isCorrect: false
        },
        {
          answer: 'b) garażu zamkniętym o więcej niż 10 stanowiskach postojowych',
          isCorrect: true
        },
        {
          answer: 'c) w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL III o powierzchni przekraczającej 200 m2 w budynku średniowysokim i przekraczającej 1000 m2 w budynku niskim',
          isCorrect: false
        }
      ]
    },
    {
      question: '25. Wskaż nieprawidłową odpowiedź. Hydranty 33 muszą być stosowane:',
      answers: [
        {
          answer: 'a) w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL IV w budynkach wysokich i wysokościowych',
          isCorrect: true
        },
        {
          answer: 'b) w garażu jednokondygnacyjnym zamkniętym o więcej niż 10 stanowiskach postojowych',
          isCorrect: false
        },
        {
          answer: 'c) w garażu wielokondygnacyjnym',
          isCorrect: false
        }
      ]
    },
    {
      question: '26. Wskaż nieprawidłową odpowiedź. Hydranty 52 muszą być stosowane:',
      answers: [
        {
          answer: 'a) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 i powierzchni przekraczającej 200 m2',
          isCorrect: false
        },
        {
          answer: 'b) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego nieprzekraczającej 500 MJ/m2, w której znajduje się pomieszczenie o powierzchni przekraczającej 100 m2 i gęstości obciążenia ogniowego przekraczającej 1 000 MJ/m2',
          isCorrect: false
        },
        {
          answer: 'c) w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL V w budynkach wysokich i wysokościowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '27. Hydranty zewnętrzne na obszarach miejskich umieszcza się wzdłuż dróg i ulic oraz przy ich skrzyżowaniach przy zachowaniu odległości:',
      answers: [
        {
          answer: 'a) do 150 m między hydrantami, do 15 m od zewnętrznej krawędzi jezdni drogi lub ulicy, co najmniej 15 m od ściany chronionego budynku',
          isCorrect: false
        },
        {
          answer: 'b) do 100 m między hydrantami, do 10 m od zewnętrznej krawędzi jezdni drogi lub ulicy co najmniej 5 m od ściany chronionego budynku',
          isCorrect: false
        },
        {
          answer: 'c) do 150 m między hydrantami, do 15 m od zewnętrznej krawędzi jezdni drogi lub ulicy co najmniej 5 m od ściany chronionego budynku',
          isCorrect: true
        }
      ]
    },
    {
      question: '28. Jaka powinna być wydajność nominalna hydrantu zewnętrznego DN 80, przy ciśnieniu nominalnym 0,2 MPa mierzonym na zaworze hydrantowym podczas poboru wody?',
      answers: [
        {
          answer: 'a) nie mniejsza niż 5 dm3/s',
          isCorrect: false
        },
        {
          answer: 'b) nie mniejsza niż 10 dm3/s',
          isCorrect: true
        },
        {
          answer: 'c) nie mniejsza niż 15 dm3/s',
          isCorrect: false
        }
      ]
    },
    {
      question: '29. Wskaż nieprawidłową odpowiedź. Drogę pożarową o utwardzonej nawierzchni umożliwiającą dojazd pojazdów jednostek ochrony przeciwpożarowej do obiektu budowlanego o każdej porze roku należy doprowadzić do:',
      answers: [
        {
          answer: 'a) budynku zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I lub ZL II',
          isCorrect: false
        },
        {
          answer: 'b) wszystkich budynku zawierających strefę pożarową produkcyjną lub magazynową',
          isCorrect: true
        },
        {
          answer: 'c) stanowiska czerpania wody do celów przeciwpożarowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '30. Jaką najmniejszą nośność powinna mieć droga pożarowa doprowadzonej do budynku zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL:',
      answers: [
        {
          answer: 'a) 50 kN na oś pojazdu',
          isCorrect: true
        },
        {
          answer: 'b) 100 kN na oś pojazdu',
          isCorrect: false
        },
        {
          answer: 'c) 150 kN na oś pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '31. Wskaż nieprawidłową odpowiedź. Dźwigi przystosowane do potrzeb ekip ratowniczych wymagane są w następujących budynkach:',
      answers: [
        {
          answer: 'a) kategorii zagrożenia ludzi ZL I ZL II ZL III lub ZL V, mającym kondygnację z posadzką na wysokości powyżej 25 m ponad poziomem terenu przy najniżej położonym wejściu do budynku',
          isCorrect: false
        },
        {
          answer: 'b) kategorii zagrożenia ludzi ZL IV wysokościowych',
          isCorrect: false
        },
        {
          answer: 'c) wszystkich wysokich i wysokościowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '32. Przeglądy techniczne i czynności konserwacyjne hydrantów wewnętrznych powinny być przeprowadzane w okresach ustalonych przez producenta, nie rzadziej jednak niż:',
      answers: [
        {
          answer: 'a) raz na kwartał',
          isCorrect: false
        },
        {
          answer: 'b) raz na pół roku',
          isCorrect: false
        },
        {
          answer: 'c) raz na rok',
          isCorrect: true
        }
      ]
    },
    {
      question: '33. Węże stanowiące wyposażenie hydrantów wewnętrznych powinny być poddawane próbie ciśnieniowej na maksymalne ciśnienie robocze, zgodnie z Polską Normą dotyczącą konserwacji hydrantów wewnętrznych:',
      answers: [
        {
          answer: 'a) raz na 5 lat',
          isCorrect: true
        },
        {
          answer: 'b) raz na rok',
          isCorrect: false
        },
        {
          answer: 'c) przy każdym przeglądzie technicznym i czynnościach konserwacyjnych hydrantu',
          isCorrect: false
        }
      ]
    },
    {
      question: '34. W jakiej odległości od granicy działki sąsiedniej zabronione jest składowanie materiałów palnych, w tym pozostałości roślinnych gałęzi i chrustu?',
      answers: [
        {
          answer: 'a) w odległości mniejszej niż 1 m',
          isCorrect: false
        },
        {
          answer: 'b) w odległości mniejszej niż 2 m',
          isCorrect: false
        },
        {
          answer: 'c) w odległości mniejszej niż 4 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '35. Instrukcja bezpieczeństwa pożarowego powinna być poddawana okresowej aktualizacji co najmniej:',
      answers: [
        {
          answer: 'a) raz na 5 lat',
          isCorrect: false
        },
        {
          answer: 'b) raz na 2 lata',
          isCorrect: true
        },
        {
          answer: 'c) raz na rok',
          isCorrect: false
        }
      ]
    },
    {
      question: '36. Prowadzenie detalicznej sprzedaży wyrobów pirotechnicznych widowiskowych w budynkach może odbywać się wyłącznie:',
      answers: [
        {
          answer: 'a) na stanowiskach wyodrębnionych do tego celu, bez możliwości sprzedaży samoobsługowej',
          isCorrect: true
        },
        {
          answer: 'b) na stanowiskach wyodrębnionych do tego celu, z możliwością sprzedaży samoobsługowej',
          isCorrect: false
        },
        {
          answer: 'c) w obiektach o kategorii zagrożenia ludzi ZL I wyposażonych w SSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '37. Pomieszczenie magazynowe butli z gazami palnymi należy chronić przed ogrzaniem do temperatury przekraczającej:',
      answers: [
        {
          answer: 'a) 294,15 K (21 st. C)',
          isCorrect: false
        },
        {
          answer: 'b) 308,15 K (35 st. C)',
          isCorrect: true
        },
        {
          answer: 'c) 328,15 K (55 st. C)',
          isCorrect: false
        }
      ]
    },
    {
      question: '38. Właściciel lub zarządca obiektu przeznaczonego dla ponad 50 osób będących jego stałymi użytkownikami niezakwalifikowanego do kategorii zagrożenia ludzi ZL IV powinien przeprowadzać praktyczne sprawdzenie organizacji oraz warunków ewakuacji z całego obiektu:',
      answers: [
        {
          answer: 'a) co najmniej raz na 3 lata',
          isCorrect: false
        },
        {
          answer: 'b) co najmniej raz na 2 lata',
          isCorrect: true
        },
        {
          answer: 'c) co najmniej raz na rok',
          isCorrect: false
        }
      ]
    },
    {
      question: '39. Hydranty 33 muszą być stosowane w:',
      answers: [
        {
          answer: 'a) w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II, ZL III i ZL V',
          isCorrect: false
        },
        {
          answer: 'b) w garażu wielokondygnacyjnym',
          isCorrect: true
        },
        {
          answer: 'c) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 i powierzchni przekraczającej 200 m2',
          isCorrect: false
        }
      ]
    },
    {
      question: '40. Stosowanie stałych urządzeń gaśniczych związanych na stałe z obiektem zawierających zapas środka gaśniczego i uruchamianych samoczynnie we wczesnej fazie rozwoju pożaru jest wymagane w:',
      answers: [
        {
          answer: 'a) kinach o liczbie miejsc powyżej 600',
          isCorrect: false
        },
        {
          answer: 'b) budynkach użyteczności publicznej wysokich i wysokościowych',
          isCorrect: false
        },
        {
          answer: 'c) archiwach wyznaczonych przez Naczelnego Dyrektora Archiwów Państwowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '41. Stosowanie systemu sygnalizacji pożarowej, obejmującego urządzenia sygnalizacyjno-alarmowe, służące do samoczynnego wykrywania i przekazywania informacji o pożarze, a także urządzenia odbiorcze alarmów pożarowych i urządzenia odbiorcze sygnałów o uszkodzeniach jest wymagane w:',
      answers: [
        {
          answer: 'a) salach widowiskowych i sportowych o liczbie miejsc powyżej 1500',
          isCorrect: true
        },
        {
          answer: 'b) szpitalach psychiatrycznych o liczbie łóżek bez ograniczeń',
          isCorrect: false
        },
        {
          answer: 'c) budynkach zamieszkania zbiorowego, w których przewidywany okres pobytu tych samych osób przekracza trzy doby o liczbie miejsc noclegowych powyżej 50',
          isCorrect: false
        }
      ]
    },
    {
      question: '42. W obiektach i na terenach przyległych, gdzie są prowadzone procesy technologiczne z użyciem materiałów mogących wytworzyć mieszaniny wybuchowe lub w których materiały takie są magazynowane dokonuje się:',
      answers: [
        {
          answer: 'a) analizy bezpieczeństwa obiektu lub terenu',
          isCorrect: false
        },
        {
          answer: 'b) oceny zagrożenia wybuchem',
          isCorrect: true
        },
        {
          answer: 'c) uzgodnienia sposobu zabezpieczenia prac niebezpiecznych pod względem pożarowym z właściwym miejscowo komendantem powiatowym (miejskim) Państwowej Straży Pożarnej',
          isCorrect: false
        }
      ]
    },
    {
      question: '43. W jakiej odległości od granicy lasów nie jest dopuszczalne wykonywanie czynności mogących wywołać niebezpieczeństwo pożaru, w szczególności: rozniecanie ognia poza miejscami wyznaczonymi do tego celu przez właściciela lub zarządcę lasu i palenie tytoniu z wyjątkiem miejsc na drogach utwardzonych i miejsc wyznaczonych do pobytu ludzi?',
      answers: [
        {
          answer: 'a) do 20 m',
          isCorrect: false
        },
        {
          answer: 'b) do 50 m',
          isCorrect: false
        },
        {
          answer: 'c) do 100 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '44. Wypalanie słomy i pozostałości roślinnych na polach jest:',
      answers: [
        {
          answer: 'a) dozwolone tylko przez właścicieli pola',
          isCorrect: false
        },
        {
          answer: 'b) dozwolone tylko w okresie jesiennym',
          isCorrect: false
        },
        {
          answer: 'c) zabronione',
          isCorrect: true
        }
      ]
    },
    {
      question: '45. Minimalna szerokość użytkowa biegu klatki schodowej w budynku ZL V powinna wynosić:',
      answers: [
        {
          answer: 'a) 130 cm',
          isCorrect: false
        },
        {
          answer: 'b) 120 cm',
          isCorrect: true
        },
        {
          answer: 'c) 110 cm',
          isCorrect: false
        }
      ]
    },
    {
      question: '46. Minimalna szerokość użytkowa spocznika klatki schodowej w budynkach hotelarskich powinna wynosić:',
      answers: [
        {
          answer: 'a) 1,5 m',
          isCorrect: true
        },
        {
          answer: 'b) 1,2 m',
          isCorrect: false
        },
        {
          answer: 'c) 1,0 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '47. Dopuszczalna długość dojścia ewakuacyjnego w strefach pożarowych ZL I (przy jednym dojściu) wynosi:',
      answers: [
        {
          answer: 'a) 10 m',
          isCorrect: true
        },
        {
          answer: 'b) 30 m',
          isCorrect: false
        },
        {
          answer: 'c) 60 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '48. W jakiej odległości od budynków zaliczanych do kategorii zagrożenia ludzi musi być oddalona bliższa krawędź drogi pożarowej?',
      answers: [
        {
          answer: 'a) od 10 do 20 m',
          isCorrect: false
        },
        {
          answer: 'b) od 7 do 20 m',
          isCorrect: false
        },
        {
          answer: 'c) od 5 do 15 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '49. Uzgodnienia z rzeczoznawcą do spraw zabezpieczeń przeciwpożarowych pod względem ochrony przeciwpożarowej wymaga projekt budowlany:',
      answers: [
        {
          answer: 'a) budynku zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I, ZL II lub ZL V',
          isCorrect: true
        },
        {
          answer: 'b) budynku zawierającego strefę pożarową produkcyjną lub magazynową o powierzchni przekraczającą 500 m2 oraz gęstość obciążenia ogniowego przekraczającą 1500 MJ/m2',
          isCorrect: false
        },
        {
          answer: 'c) tunelu o długości ponad 50 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '50. Wszystkimi elementami niezbędnymi do zaistnienia zjawiska pożaru są:',
      answers: [
        {
          answer: 'a) drewno i źródło zapłonu',
          isCorrect: false
        },
        {
          answer: 'b) materiał palny, źródło zapłonu i utleniacz',
          isCorrect: true
        },
        {
          answer: 'c) materiał palny i tlen',
          isCorrect: false
        }
      ]
    },
    {
      question: '51. Budynek zaliczony do grupy wysokie (W) to:',
      answers: [
        {
          answer: 'a) budynek o wysokości od 18 do 30m',
          isCorrect: false
        },
        {
          answer: 'b) budynek o wysokości od 25 do 55m',
          isCorrect: true
        },
        {
          answer: 'c) budynek o wysokości powyżej 55m',
          isCorrect: false
        }
      ]
    },
    {
      question: '52. Do kategorii ZL I zalicza się następujące obiekty:',
      answers: [
        {
          answer: 'a) w których występują pomieszczenia przeznaczone do jednoczesnego przebywania ponad 50 osób niebędących ich stałymi użytkownikami',
          isCorrect: true
        },
        {
          answer: 'b) w których występują pomieszczenia przeznaczone do jednoczesnego przebywania ponad 60 osób niebędących ich stałymi użytkownikami',
          isCorrect: false
        },
        {
          answer: 'c) w których występują pomieszczenia przeznaczone do jednoczesnego przebywania ponad 40 osób niebędących ich stałymi użytkownikami',
          isCorrect: false
        }
      ]
    },
    {
      question: '53. Do kategorii zagrożenia ZL II zalicza się następujące obiekty:',
      answers: [
        {
          answer: 'a) Dyskoteki, kina',
          isCorrect: false
        },
        {
          answer: 'b) mieszkalne',
          isCorrect: false
        },
        {
          answer: 'c) szpitale, przedszkola',
          isCorrect: true
        }
      ]
    },
    {
      question: '54. W strefach pożarowych zakwalifikowanych do kategorii PM powinny być stosowane:',
      answers: [
        {
          answer: 'a) hydranty 75',
          isCorrect: false
        },
        {
          answer: 'b) hydranty 52',
          isCorrect: true
        },
        {
          answer: 'c) hydranty 25',
          isCorrect: false
        }
      ]
    },
    {
      question: '55. Materiał niebezpieczny pożarowo w myśl rozporządzenia MSWiA w sprawie ochrony przeciwpożarowej budynków innych obiektów budowlanych i terenów to:',
      answers: [
        {
          answer: 'a) olej napędowy',
          isCorrect: false
        },
        {
          answer: 'b) tlen',
          isCorrect: false
        },
        {
          answer: 'c) benzyna',
          isCorrect: true
        }
      ]
    },
    {
      question: '56. Zawory 52 i zawory odcinające hydrantów 25 i 52 powinny być umieszczone na wysokości:',
      answers: [
        {
          answer: 'a) 1,5m',
          isCorrect: false
        },
        {
          answer: 'b) 1,6m',
          isCorrect: false
        },
        {
          answer: 'c) 1,35m',
          isCorrect: true
        }
      ]
    },
    {
      question: '57. Czy gaśnica proszkowa GPr 6x jest urządzeniem przeciwpożarowym:',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: true
        },
        {
          answer: 'b) tak',
          isCorrect: false
        },
        {
          answer: 'c) tak ponieważ jest stałym urządzeniem gaśniczym',
          isCorrect: false
        }
      ]
    },
    {
      question: '58. W gaśnicy śniegowej piktogram grupy pożarowej oznaczony wielką literą „C” informuje użytkownika o zastosowaniu urządzenia do gaszenia pożarów:',
      answers: [
        {
          answer: 'a) cieczy palnych',
          isCorrect: false
        },
        {
          answer: 'b) ciał stałych pochodzenia organicznego',
          isCorrect: false
        },
        {
          answer: 'c) gazów palnych',
          isCorrect: true
        }
      ]
    },
    {
      question: '59. Pożary ciał stałych topliwych zaliczamy do grupy pożarów:',
      answers: [
        {
          answer: 'a) A',
          isCorrect: false
        },
        {
          answer: 'b) B',
          isCorrect: true
        },
        {
          answer: 'c) C',
          isCorrect: false
        }
      ]
    },
    {
      question: '60. W Polsce przyjęty jest podział na następujące grupy pożarów:',
      answers: [
        {
          answer: 'a) A B C D E F',
          isCorrect: false
        },
        {
          answer: 'b) A B C D',
          isCorrect: false
        },
        {
          answer: 'c) A B C D E',
          isCorrect: false
        },
        {
          answer: 'd) A B C D F',
          isCorrect: true
        }
      ]
    },
    {
      question: '61. Od jakiego parametru pożarowego uzależniona jest intensywność podawania środka gaśniczego?',
      answers: [
        {
          answer: 'a) temperatura zapłonu',
          isCorrect: false
        },
        {
          answer: 'b) temperatura zapalenia',
          isCorrect: false
        },
        {
          answer: 'c) dolna granica wybuchowości',
          isCorrect: false
        },
        {
          answer: 'd) masową i liniową szybkością spalania',
          isCorrect: true
        }
      ]
    },
    {
      question: '62. Dominującym mechanizmem gaśniczym wody jest:',
      answers: [
        {
          answer: 'a) izolowanie powierzchni',
          isCorrect: false
        },
        {
          answer: 'b) chłodzenie',
          isCorrect: true
        },
        {
          answer: 'c) rozrzedzanie strefy spalania',
          isCorrect: false
        },
        {
          answer: 'd) inhibicja chemiczna wolnych rodników',
          isCorrect: false
        }
      ]
    },
    {
      question: '63. Czynnik określający jakość i przydatność środków zwilżających:',
      answers: [
        {
          answer: 'a) zdolność obniżania napięcia powierzchniowego',
          isCorrect: true
        },
        {
          answer: 'b) zdolność wytwarzania piany',
          isCorrect: false
        },
        {
          answer: 'c) zdolność wytwarzania piany relatywnie trwałej',
          isCorrect: false
        },
        {
          answer: 'd) zdolność poprawienia przyczepności wody do gaszonych materiałów',
          isCorrect: false
        }
      ]
    },
    {
      question: '64. Środki zwilżające stosuje się, aby:',
      answers: [
        {
          answer: 'a) zwiększyć prędkość pompowania wody',
          isCorrect: false
        },
        {
          answer: 'b) spowodować lepsze wnikanie wody w materiały gaszone',
          isCorrect: true
        },
        {
          answer: 'c) wytworzyć pianę gaśniczą',
          isCorrect: false
        }
      ]
    },
    {
      question: '65. Woda podawana z systemów mgłowych i gaśnic np. GWM doskonale nadaje się do gaszenia pożarów substancji wymienionych w pkt:',
      answers: [
        {
          answer: 'a) olejów tłuszczy smarów',
          isCorrect: true
        },
        {
          answer: 'b) sprasowanych bel słomy',
          isCorrect: false
        },
        {
          answer: 'c) torfu',
          isCorrect: false
        }
      ]
    },
    {
      question: '66. Uszlachetnianie wody do celów gaśniczych polega na:',
      answers: [
        {
          answer: 'a) usuwaniu zanieczyszczeń',
          isCorrect: false
        },
        {
          answer: 'b) zmianie twardości wody i usuwaniu zanieczyszczeń',
          isCorrect: false
        },
        {
          answer: 'c) zmianie napięcia powierzchniowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '67. Największy stopień odparowania wody ma:',
      answers: [
        {
          answer: 'a) prąd zwarty',
          isCorrect: false
        },
        {
          answer: 'b) prąd kroplisty',
          isCorrect: false
        },
        {
          answer: 'c) prąd mgłowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '68. Piana o liczbie spienienia LS=172, zaliczana jest do piany:',
      answers: [
        {
          answer: 'a) lekkiej',
          isCorrect: false
        },
        {
          answer: 'b) średniej',
          isCorrect: true
        },
        {
          answer: 'c) ciężkiej',
          isCorrect: false
        }
      ]
    },
    {
      question: '69. Liczba spienienia Ls to:',
      answers: [
        {
          answer: 'a) stosunek objętości roztworu do objętości piany',
          isCorrect: false
        },
        {
          answer: 'b) stosunek objętości piany do objętości roztworu, z którego została wytworzona',
          isCorrect: true
        },
        {
          answer: 'c) iloczyn objętości roztworu i objętości piany',
          isCorrect: false
        },
        {
          answer: 'd) iloczyn objętości piany i objętości roztworu',
          isCorrect: false
        }
      ]
    },
    {
      question: '70. Piana gaśnicza powstaje:',
      answers: [
        {
          answer: 'a) w wyniku energicznego zmieszania środka pianotwórczego z powietrzem lub gazem obojętnym',
          isCorrect: false
        },
        {
          answer: 'b) w wyniku energicznego zmieszania roztworu środka pianotwórczego z powietrzem lub gazem obojętnym',
          isCorrect: true
        },
        {
          answer: 'c) w wyniku energicznego zmieszania środka zagęszczającego z powietrzem lub gazem obojętnym',
          isCorrect: false
        },
        {
          answer: 'd) w wyniku energicznego zmieszania związku powierzchniowo czynnego z powietrzem lub gazem obojętnym',
          isCorrect: false
        }
      ]
    },
    {
      question: '71. Zasadniczy mechanizm gaśniczy piany polega na:',
      answers: [
        {
          answer: 'a) działaniu inhibicyjnym',
          isCorrect: false
        },
        {
          answer: 'b) działaniu rozcieńczającym tzn. obniżeniu stężenia tlenu',
          isCorrect: false
        },
        {
          answer: 'c) połączonym działaniu inhibicyjnym i rozcieńczającym',
          isCorrect: false
        },
        {
          answer: 'd) oddzieleniu strefy spalania od otaczającego powietrza',
          isCorrect: true
        }
      ]
    },
    {
      question: '72. Piany stosowane są do gaszenia pożarów:',
      answers: [
        {
          answer: 'a) grupy A B',
          isCorrect: true
        },
        {
          answer: 'b) grupy B C',
          isCorrect: false
        },
        {
          answer: 'c) grupy A D',
          isCorrect: false
        }
      ]
    },
    {
      question: '73. Pianą gaśniczą nie można gasić:',
      answers: [
        {
          answer: 'a) materiałów strzępiastych',
          isCorrect: false
        },
        {
          answer: 'b) oleju napędowego',
          isCorrect: false
        },
        {
          answer: 'c) urządzeń elektrycznych pod napięciem',
          isCorrect: true
        }
      ]
    },
    {
      question: '74. Do wytwarzania piany mechanicznej potrzebne są:',
      answers: [
        {
          answer: 'a) woda i środek pianotwórczy',
          isCorrect: false
        },
        {
          answer: 'b) woda, środek pianotwórczy, powietrze, sprzęt pożarniczy',
          isCorrect: true
        },
        {
          answer: 'c) sprzęt pożarniczy, woda, środek pianotwórczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '75. Które z poniższych środków pianotwórczych określa symbol AFFF:',
      answers: [
        {
          answer: 'a) proteinowe',
          isCorrect: false
        },
        {
          answer: 'b) proteinowe fluorowane',
          isCorrect: false
        },
        {
          answer: 'c) syntetyczne',
          isCorrect: false
        },
        {
          answer: 'd) fluorosyntetyczne tworzące film wodny',
          isCorrect: true
        }
      ]
    },
    {
      question: '76. Które z poniższych środków pianotwórczych określa symbol FFFP:',
      answers: [
        {
          answer: 'a) proteinowe',
          isCorrect: false
        },
        {
          answer: 'b) proteinowe fluorowane',
          isCorrect: false
        },
        {
          answer: 'c) fluoroproteinowe tworzące film wodny',
          isCorrect: true
        },
        {
          answer: 'd) fluorosyntetyczne tworzące film wodny',
          isCorrect: false
        }
      ]
    },
    {
      question: '77. Które z poniższych środków pianotwórczych określa symbol P:',
      answers: [
        {
          answer: 'a) proteinowe',
          isCorrect: true
        },
        {
          answer: 'b) proteinowe fluorowane',
          isCorrect: false
        },
        {
          answer: 'c) fluoroproteinowe tworzące film wodny',
          isCorrect: false
        },
        {
          answer: 'd) syntetyczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '78. Które z poniższych środków pianotwórczych określa symbol S:',
      answers: [
        {
          answer: 'a) proteinowe',
          isCorrect: false
        },
        {
          answer: 'b) proteinowe fluorowane',
          isCorrect: false
        },
        {
          answer: 'c) fluorosyntetyczne tworzące film wodny',
          isCorrect: false
        },
        {
          answer: 'd) syntetyczne',
          isCorrect: true
        }
      ]
    },
    {
      question: '79. Jakimi środkami gaśniczymi należy gasić metale alkaliczne?',
      answers: [
        {
          answer: 'a) pianą średnią',
          isCorrect: false
        },
        {
          answer: 'b) prądem mgłowym wody',
          isCorrect: false
        },
        {
          answer: 'c) proszkami gaśniczymi typu D',
          isCorrect: true
        }
      ]
    },
    {
      question: '80. Zasadniczy mechanizm gaśniczy gazów obojętnych to:',
      answers: [
        {
          answer: 'a) izolowanie',
          isCorrect: false
        },
        {
          answer: 'b) chłodzenie',
          isCorrect: false
        },
        {
          answer: 'c) wypieranie i zmniejszanie stężenia tlenu',
          isCorrect: true
        }
      ]
    },
    {
      question: '81. Do gazów gaśniczych nie jest zaliczany:',
      answers: [
        {
          answer: 'a) dwutlenek węgla',
          isCorrect: false
        },
        {
          answer: 'b) tlenek węgla',
          isCorrect: true
        },
        {
          answer: 'c) azot',
          isCorrect: false
        }
      ]
    },
    {
      question: '82. Co można gasić dwutlenkiem węgla?',
      answers: [
        {
          answer: 'a) ciała stałe ciecze i metale',
          isCorrect: false
        },
        {
          answer: 'b) ciała stałe o temp do 1000st. C',
          isCorrect: false
        },
        {
          answer: 'c) gazy i metale',
          isCorrect: false
        },
        {
          answer: 'd) ciecze i gazy',
          isCorrect: true
        }
      ]
    },
    {
      question: '83. Działanie rozcieńczające jako najważniejszy mechanizm gaśniczy posiadają:',
      answers: [
        {
          answer: 'a) halony',
          isCorrect: false
        },
        {
          answer: 'b) gazy obojętne',
          isCorrect: true
        },
        {
          answer: 'c) proszki gaśnicze',
          isCorrect: false
        }
      ]
    },
    {
      question: '84. Co to jest sorbent?',
      answers: [
        {
          answer: 'a) Ciało porowate zdolne do wchłaniania pewnej ograniczonej ilości substancji zanieczyszczającej środowisko',
          isCorrect: true
        },
        {
          answer: 'b) Substancja posiadająca właściwości zobojętniające',
          isCorrect: false
        },
        {
          answer: 'c) Środek powierzchniowo czynny znajdujący zastosowanie podczas usuwania plam substancji ropopochodnych z powierzchni wód i gruntów',
          isCorrect: false
        },
        {
          answer: 'd) Środek zobojętniający rozlewy olejowe powstałe podczas wypadków drogowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '85. Materiał lub substancję pochłaniającą oleje nazywamy:',
      answers: [
        {
          answer: 'a) sorbentem',
          isCorrect: true
        },
        {
          answer: 'b) dyspergentem',
          isCorrect: false
        },
        {
          answer: 'c) neutralizatorem',
          isCorrect: false
        }
      ]
    },
    {
      question: '86. Zastosowanie sorbentów organicznych naturalnych wobec substancji ciekłych utleniających może spowodować:',
      answers: [
        {
          answer: 'a) nie są skuteczne, ponieważ nie wchłaniają tych substancji',
          isCorrect: false
        },
        {
          answer: 'b) zapalenie się sorbentu',
          isCorrect: true
        },
        {
          answer: 'c) lepiej wchłaniają substancje',
          isCorrect: false
        }
      ]
    },
    {
      question: '87. Do dyspergentów zaliczamy?',
      answers: [
        {
          answer: 'a) toluen',
          isCorrect: false
        },
        {
          answer: 'b) olej i oleum',
          isCorrect: false
        },
        {
          answer: 'c) ropopochodne ciecze',
          isCorrect: false
        },
        {
          answer: 'd) środki powierzchniowo czynne',
          isCorrect: true
        }
      ]
    },
    {
      question: '88. Dyspergenty mogą być stosowane do unieszkodliwiania:',
      answers: [
        {
          answer: 'a) ropy naftowej',
          isCorrect: true
        },
        {
          answer: 'b) alkoholi i ługów',
          isCorrect: false
        },
        {
          answer: 'c) kwasów organicznych',
          isCorrect: false
        }
      ]
    },
    {
      question: '89. Do sorbowania stężonych kwasów można zastosować:',
      answers: [
        {
          answer: 'a) mokry piasek i torf',
          isCorrect: false
        },
        {
          answer: 'b) trociny i wiórki',
          isCorrect: false
        },
        {
          answer: 'c) środek pianotwórczy i gliny',
          isCorrect: false
        },
        {
          answer: 'd) sorbenty syntetyczne',
          isCorrect: true
        }
      ]
    },
    {
      question: '90. Absorbent to substancja która:',
      answers: [
        {
          answer: 'a) Gromadzi na swojej powierzchni inną substancję',
          isCorrect: false
        },
        {
          answer: 'b) Pochłania całą objętością inną substancję',
          isCorrect: true
        },
        {
          answer: 'c) Umożliwia zmniejszenie napięcia powierzchniowego produktów ropopochodnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '91. Adsorbent to substancja która:',
      answers: [
        {
          answer: 'a) Gromadzi na swojej powierzchni inną substancję',
          isCorrect: true
        },
        {
          answer: 'b) Wiąże się z absorbentem',
          isCorrect: false
        },
        {
          answer: 'c) Pochłania całą objętością inną substancję',
          isCorrect: false
        }
      ]
    },
    {
      question: '92. Który z poniższych materiałów możemy zastosować jako neutralizator:',
      answers: [
        {
          answer: 'a) wapno gaszone',
          isCorrect: true
        },
        {
          answer: 'b) słomę',
          isCorrect: false
        },
        {
          answer: 'c) popiół',
          isCorrect: false
        },
        {
          answer: 'd) sproszkowaną korę drzewną',
          isCorrect: false
        }
      ]
    },
    {
      question: '93. Czym należy zobojętnić stężony kwas siarkowy VI?',
      answers: [
        {
          answer: 'a) trocinami',
          isCorrect: false
        },
        {
          answer: 'b) wodą',
          isCorrect: false
        },
        {
          answer: 'c) dyspergentem',
          isCorrect: false
        },
        {
          answer: 'd) tlenkiem wapnia',
          isCorrect: true
        }
      ]
    },
    {
      question: '94. Dyspergent jest to:',
      answers: [
        {
          answer: 'a) ciało porowate zdolne do wchłaniania pewnej ilości substancji zanieczyszczającej środowisko',
          isCorrect: false
        },
        {
          answer: 'b) substancja posiadająca właściwości zobojętniające',
          isCorrect: false
        },
        {
          answer: 'c) środek powierzchniowo czynny znajdujący zastosowanie podczas usuwania plam substancji ropopochodnych z powierzchni, głównie podczas wypadków drogowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '95. Sprzęt pożarniczy to:',
      answers: [
        {
          answer: 'a) sprzęt służący do dostarczania środków gaśniczych na miejsce pożaru',
          isCorrect: false
        },
        {
          answer: 'b) sprzęt służący do prowadzenia akcji ratowania ludzi i mienia',
          isCorrect: false
        },
        {
          answer: 'c) przenośny lub przewoźny specjalny sprzęt służący do gaszenia pożarów, prowadzenia akcji ratowniczej oraz specjalny sprzęt ochrony stosowany przez straże pożarne podczas akcji',
          isCorrect: true
        }
      ]
    },
    {
      question: '96. Pole pracy to:',
      answers: [
        {
          answer: 'a) Powierzchnia, na której sprawiony lub ustawiony sprzęt do pracy obsługiwany przez operatora realizuje zadania',
          isCorrect: false
        },
        {
          answer: 'b) wykres możliwości obciążania drabiny wysięgnika hydraulicznego czy podestu w zależności od wysuwu i wysięgu',
          isCorrect: true
        },
        {
          answer: 'c) charakterystyczny dla żurawia ratowniczego zasięg wysuwu ramienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '97. Awaryjne ściąganie parku drabinowego realizowane jest:',
      answers: [
        {
          answer: 'a) tylko ręcznie',
          isCorrect: false
        },
        {
          answer: 'b) osobnym silnikiem spalinowym',
          isCorrect: false
        },
        {
          answer: 'c) osobnym silnikiem spalinowym lub ręcznie, lub w nowszych modelach akumulatorowym silnikiem elektrycznym',
          isCorrect: true
        }
      ]
    },
    {
      question: '98. Opuszczanie przęseł drabiny mechanicznej następuje wówczas, gdy:',
      answers: [
        {
          answer: 'a) ratownik ma problemy z samodzielnym zejściem',
          isCorrect: false
        },
        {
          answer: 'b) nie ma nikogo na drabinie',
          isCorrect: true
        },
        {
          answer: 'c) ratownik znajdujący się na drabinie zauważył brak pokrywania się szczebli',
          isCorrect: false
        }
      ]
    },
    {
      question: '99. Elementami które utrzymują stabilność drabiny hydraulicznej podczas pracy to:',
      answers: [
        {
          answer: 'a) nośniki',
          isCorrect: false
        },
        {
          answer: 'b) podpory',
          isCorrect: true
        },
        {
          answer: 'c) stabilizatory hydrauliczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '100. Rozstawienie podpór i poziomowanie pojazdu:',
      answers: [
        {
          answer: 'a) jest konieczne przy każdym sprawianiu drabiny',
          isCorrect: true
        },
        {
          answer: 'b) ma znaczenie tylko przy silnym wietrze',
          isCorrect: false
        },
        {
          answer: 'c) wymagane jest przy nachyleniu terenu powyżej 700',
          isCorrect: false
        }
      ]
    },
    {
      question: '101. Zwyczajowe oznaczenie operacyjne samochodu ratowniczo-gaśniczego średniego to:',
      answers: [
        {
          answer: 'a) GCBA',
          isCorrect: false
        },
        {
          answer: 'b) GLBAM',
          isCorrect: false
        },
        {
          answer: 'c) GBA',
          isCorrect: true
        }
      ]
    },
    {
      question: '102. Samochód pożarniczy w świetle PN-EN 1846-1 jest to:',
      answers: [
        {
          answer: 'a) samochód używany do zwalczania pożarów i/lub ratownictwa',
          isCorrect: true
        },
        {
          answer: 'b) samochód i przyczepa specjalna użytkowana przez straże pożarne przystosowane do wykonywania zadań przy akcji gaśniczej lub ratowniczej',
          isCorrect: false
        },
        {
          answer: 'c) dowolny pojazd użytkowany przez straże pożarne',
          isCorrect: false
        }
      ]
    },
    {
      question: '103. Który z symboli oznacza samochód ratowniczo-gaśniczy ciężki z autopompą:',
      answers: [
        {
          answer: 'a) GBA',
          isCorrect: false
        },
        {
          answer: 'b) GCBA',
          isCorrect: true
        },
        {
          answer: 'c) GCBM',
          isCorrect: false
        }
      ]
    },
    {
      question: '104. Symbol SH-18 oznacza:',
      answers: [
        {
          answer: 'a) samochód z podnośnikiem hydraulicznym o wysokości podnoszenia 18m',
          isCorrect: true
        },
        {
          answer: 'b) samochód ratowniczo-gaśniczy specjalny z dźwigiem 18t',
          isCorrect: false
        },
        {
          answer: 'c) samochód specjalny z drabiną i podnośnikiem hydraulicznym o wysięgu 18m',
          isCorrect: false
        }
      ]
    },
    {
      question: '105. Hełmy stosowane w Państwowej Straży Pożarnej w Polsce powinny mieć kolor:',
      answers: [
        {
          answer: 'a) biały',
          isCorrect: false
        },
        {
          answer: 'b) czerwony',
          isCorrect: true
        },
        {
          answer: 'c) żółty',
          isCorrect: false
        }
      ]
    },
    {
      question: '106. Do ekwipunku osobistego nie zaliczamy:',
      answers: [
        {
          answer: 'a) pasa strażackiego',
          isCorrect: false
        },
        {
          answer: 'b) hełmu',
          isCorrect: true
        },
        {
          answer: 'c) toporka strażackiego',
          isCorrect: false
        }
      ]
    },
    {
      question: '107. Do ubrań ochronnych nie zaliczamy:',
      answers: [
        {
          answer: 'a) ubranie specjalne',
          isCorrect: false
        },
        {
          answer: 'b) ubranie chroniące przed promieniowaniem cieplnym',
          isCorrect: false
        },
        {
          answer: 'c) ubranie koszarowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '108. W przypadku gdy na gaśnicy lub etykiecie widnieje wielka litera „C” oznacza to, że zmagazynowany w niej środek gaśniczy umożliwia gaszenie:',
      answers: [
        {
          answer: 'a) cieczy i gazów palnych',
          isCorrect: false
        },
        {
          answer: 'b) ciał stałych pochodzenia organicznego',
          isCorrect: false
        },
        {
          answer: 'c) gazów palnych',
          isCorrect: true
        }
      ]
    },
    {
      question: '109. Z oznaczenia gaśnicy GP 4 X ABC wynika, że:',
      answers: [
        {
          answer: 'a) jest to gaśnica płynowa pod stałym ciśnieniem',
          isCorrect: false
        },
        {
          answer: 'b) gaśnica pianowa, w której czynnik roboczy jest w oddzielnym zbiorniku',
          isCorrect: false
        },
        {
          answer: 'c) gaśnica proszkowa, w której proszek i gaz wyrzucający (roboczy) są w tym samym zbiorniku',
          isCorrect: true
        }
      ]
    },
    {
      question: '110. W gaśnicy śniegowej środkiem gaśniczym jest:',
      answers: [
        {
          answer: 'a) proszek',
          isCorrect: false
        },
        {
          answer: 'b) dwutlenek węgla',
          isCorrect: true
        },
        {
          answer: 'c) tlenek węgla',
          isCorrect: false
        }
      ]
    },
    {
      question: '111. Wydajność 800 l/min to inaczej:',
      answers: [
        {
          answer: 'a) 1600 dm3/min',
          isCorrect: false
        },
        {
          answer: 'b) 12000 l/godz.',
          isCorrect: false
        },
        {
          answer: 'c) 48 m3/godz.',
          isCorrect: true
        }
      ]
    },
    {
      question: '112. Ciśnienie o wartości 25 atmosfer wyrażone w innych jednostkach pomiarowych to – zaznacz właściwe:',
      answers: [
        {
          answer: 'a) 0,025MPa',
          isCorrect: false
        },
        {
          answer: 'b) 250m H2O',
          isCorrect: true
        },
        {
          answer: 'c) 250kPa',
          isCorrect: false
        }
      ]
    },
    {
      question: '113. Ciśnienie 0,21 MPa to inaczej:',
      answers: [
        {
          answer: 'a) 210 mmH2O',
          isCorrect: false
        },
        {
          answer: 'b) 2,1 at',
          isCorrect: true
        },
        {
          answer: 'c) 21 bar',
          isCorrect: false
        }
      ]
    },
    {
      question: '114. Wysokość ssania pompy pożarniczej:',
      answers: [
        {
          answer: 'a) Zależy od długości linii ssawnej i nie zależy od sposobu jej ułożenia',
          isCorrect: false
        },
        {
          answer: 'b) Jest ograniczona do 10,33m z powodu niedoskonałości konstrukcyjnych pomp',
          isCorrect: false
        },
        {
          answer: 'c) Jest to odległość pomiędzy lustrem wody a osią nasady ssawnej pompy',
          isCorrect: true
        }
      ]
    },
    {
      question: '115. Manowakuometr służy do pomiaru:',
      answers: [
        {
          answer: 'a) wartości ciśnienia, z jakim woda opuszcza pompę',
          isCorrect: false
        },
        {
          answer: 'b) wartości podciśnienia podczas poboru wody z zewnętrznego zbiornika',
          isCorrect: true
        },
        {
          answer: 'c) wartości podciśnienia w przypadku gdy motopompa od strony nasady ssawnej otrzymuje wodę z innej pompy',
          isCorrect: false
        }
      ]
    },
    {
      question: '116. Manometr zastosowany w pompie wirowej służy do pomiaru:',
      answers: [
        {
          answer: 'a) wartość ciśnienia wody tłoczonej przez pompę',
          isCorrect: true
        },
        {
          answer: 'b) wartość podciśnienia podczas ssania przez pompę',
          isCorrect: false
        },
        {
          answer: 'c) manometr nie jest to element pompy wirowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '117. Pompa próżniowa tłokowa (tzw. „trokomat”) to:',
      answers: [
        {
          answer: 'a) sprzęt armatury wodnej',
          isCorrect: false
        },
        {
          answer: 'b) urządzenie działające w gaśnicach',
          isCorrect: false
        },
        {
          answer: 'c) urządzenie zasysające do pomp wirowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '118. Teoretyczna wysokość ssania wynosi 10,33 metra słupa wody (mH2O) W praktyce wielkość ta jest nie do osiągnięcia między innymi z powodu:',
      answers: [
        {
          answer: 'a) strat lokalnych i liniowych w linii ssawnej',
          isCorrect: true
        },
        {
          answer: 'b) niedoskonałej szczelności pompy i zbyt małej prędkości wirnika',
          isCorrect: false
        },
        {
          answer: 'c) występowania zjawiska kawitacji',
          isCorrect: false
        }
      ]
    },
    {
      question: '119. Praktyczna wysokość ssania pomp pożarniczych wg PN wynosi:',
      answers: [
        {
          answer: 'a) 6,5 m',
          isCorrect: false
        },
        {
          answer: 'b) 7,5 m',
          isCorrect: true
        },
        {
          answer: 'c) 10,33 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '120. Dwoma motopompami pożarniczymi M16/8 przy założeniu pracy w obszarze parametrów nominalnych można napełnić zbiornik samochodu o pojemności 18 m3 w czasie ok:',
      answers: [
        {
          answer: 'a) 21 minuty',
          isCorrect: false
        },
        {
          answer: 'b) 41 minuty',
          isCorrect: false
        },
        {
          answer: 'c) 56 minuty',
          isCorrect: true
        }
      ]
    },
    {
      question: '121. Symbol A 32/8 oznacza:',
      answers: [
        {
          answer: 'a) autopompę o ciśnieniu nominalnym 320 m sł.w. i wydajności nominalnej 800 l/min',
          isCorrect: false
        },
        {
          answer: 'b) autopompę o ciśnieniu nominalnym 32 at i wydajności nominalnej 8000 l/min',
          isCorrect: false
        },
        {
          answer: 'c) autopompę o wydajności nominalnej 32 hl/min i ciśnieniu nominalnym 80 m sł.w.',
          isCorrect: true
        }
      ]
    },
    {
      question: '122. W oznaczeniu M 16/8 cyfra 16 oznacza:',
      answers: [
        {
          answer: 'a) ciśnienie w atmosferach',
          isCorrect: false
        },
        {
          answer: 'b) wydajność w hl/min',
          isCorrect: true
        },
        {
          answer: 'c) wydajność w hl/sek',
          isCorrect: false
        }
      ]
    },
    {
      question: '123. Oznaczenie M 8/8 informuje o następujących parametrach motopompy:',
      answers: [
        {
          answer: 'a) wydajności nominalnej 8 hl/min przy wysokości podnoszenia 80 m H2O',
          isCorrect: true
        },
        {
          answer: 'b) wydajności 8m3/godzinę przy nominalnym ciśnieniu 80 bar',
          isCorrect: false
        },
        {
          answer: 'c) wydajności 8hl/min przy nominalnej wysokości podnoszenia 8 Pa',
          isCorrect: false
        }
      ]
    },
    {
      question: '124. Manometr wskazuje:',
      answers: [
        {
          answer: 'a) ciśnienie po stronie tłocznej oraz podciśnienie po stronie ssawnej motopompy',
          isCorrect: false
        },
        {
          answer: 'b) ciśnienie po stronie tłocznej motopompy',
          isCorrect: true
        },
        {
          answer: 'c) wydajność motopompy',
          isCorrect: false
        }
      ]
    },
    {
      question: '125. Jakie wielkości nasad posiadają prądownice wodne?',
      answers: [
        {
          answer: 'a) 25, 52 i 75',
          isCorrect: true
        },
        {
          answer: 'b) 52, 75 i 110',
          isCorrect: false
        },
        {
          answer: 'c) tylko 25 i 52',
          isCorrect: false
        }
      ]
    },
    {
      question: '126. Smoki ssawne stosowane w jednostkach organizacyjnych PSP to:',
      answers: [
        {
          answer: 'a) tylko skośne',
          isCorrect: false
        },
        {
          answer: 'b) proste i ukośne',
          isCorrect: false
        },
        {
          answer: 'c) proste i skośne',
          isCorrect: true
        }
      ]
    },
    {
      question: '127. W wysysaczu głębinowym wykorzystano zasadę działania pompy:',
      answers: [
        {
          answer: 'a) odśrodkowej',
          isCorrect: false
        },
        {
          answer: 'b) strumieniowej',
          isCorrect: true
        },
        {
          answer: 'c) wirnikowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '128. Wysysacz głębinowy ma praktyczne zastosowanie do głębokości:',
      answers: [
        {
          answer: 'a) 20 m',
          isCorrect: false
        },
        {
          answer: 'b) 25 m',
          isCorrect: true
        },
        {
          answer: 'c) 25 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '129. Wysysacz głębinowy posiada:',
      answers: [
        {
          answer: 'a) nasadę 52 wylotową i nasadę 75 do zasilania',
          isCorrect: false
        },
        {
          answer: 'b) nasadę 75 wylotową i nasadę 52 do zasilania',
          isCorrect: true
        },
        {
          answer: 'c) nasadę 52 do zasilania i nasadę 52 wylotową',
          isCorrect: false
        }
      ]
    },
    {
      question: '130. Wysysacz może służyć do:',
      answers: [
        {
          answer: 'a) usunięcia powietrza z linii ssawnej, w celu zassania wody prze pompę',
          isCorrect: false
        },
        {
          answer: 'b) zassania środka pianotwórczego, w celu uzyskania wodnego roztworu środka pianotwórczego',
          isCorrect: false
        },
        {
          answer: 'c) wyssania wody z zalanych pomieszczeń np: piwnic',
          isCorrect: true
        }
      ]
    },
    {
      question: '131. Do armatury wodnej zaliczamy:',
      answers: [
        {
          answer: 'a) zbieracz',
          isCorrect: true
        },
        {
          answer: 'b) spinacz',
          isCorrect: false
        },
        {
          answer: 'c) gaśnicę wodno-pianową',
          isCorrect: false
        }
      ]
    },
    {
      question: '132. Stojak hydrantowy służy do:',
      answers: [
        {
          answer: 'a) zassania wody z hydrantu podziemnego',
          isCorrect: false
        },
        {
          answer: 'b) pobrania wody z hydrantu podziemnego',
          isCorrect: true
        },
        {
          answer: 'c) poboru wody z hydrantu nadziemnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '133. Symbol Z-2500 oznacza:',
      answers: [
        {
          answer: 'a) zasysacz liniowy o wydajności 2500l/ min',
          isCorrect: false
        },
        {
          answer: 'b) zbiornik wodny składany o pojemności 2500l',
          isCorrect: true
        },
        {
          answer: 'c) zasysacz liniowy o liczbie spienienia 2500',
          isCorrect: false
        }
      ]
    },
    {
      question: '134. Minimalna pojemność zbiornika wodnego składanego wynosi',
      answers: [
        {
          answer: 'a) 2500 l',
          isCorrect: true
        },
        {
          answer: 'b) 250 l',
          isCorrect: false
        },
        {
          answer: 'c) 25 hl',
          isCorrect: false
        }
      ]
    },
    {
      question: '135. Do wytwarzania piany średniej służy następujący sprzęt:',
      answers: [
        {
          answer: 'a) WP 2-150',
          isCorrect: true
        },
        {
          answer: 'b) PWP 2-75',
          isCorrect: false
        },
        {
          answer: 'c) PP 2-12',
          isCorrect: false
        }
      ]
    },
    {
      question: '136. Nominalne natężenie przepływu wodnego roztworu środka pianotwórczego w wytwornicy pianowej WP 2-75 wynosi:',
      answers: [
        {
          answer: 'a) 20 l/min',
          isCorrect: false
        },
        {
          answer: 'b) 20 hl/min',
          isCorrect: false
        },
        {
          answer: 'c) 2 hl/min',
          isCorrect: true
        }
      ]
    },
    {
      question: '137. Nominalna wydajność wodnego roztworu środka pianotwórczego prądownicy pianowej PP 8-15 wynosi:',
      answers: [
        {
          answer: 'a) 80 l/min',
          isCorrect: false
        },
        {
          answer: 'b) 8 hl/min',
          isCorrect: true
        },
        {
          answer: 'c) 8 m3/min',
          isCorrect: false
        }
      ]
    },
    {
      question: '138. Nominalna wydajność pianowa wytwornicy WP 4 -75 wynosi:',
      answers: [
        {
          answer: 'a) 3000 l/min',
          isCorrect: false
        },
        {
          answer: 'b) 30 hl/min',
          isCorrect: false
        },
        {
          answer: 'c) 30 m3/min',
          isCorrect: true
        }
      ]
    },
    {
      question: '139. W ciągu 60 sekund 30000 dm3 piany wytworzy wytwornica:',
      answers: [
        {
          answer: 'a) WP – 2/75',
          isCorrect: false
        },
        {
          answer: 'b) WP – 4/75',
          isCorrect: true
        },
        {
          answer: 'c) WP – 4/150',
          isCorrect: false
        }
      ]
    },
    {
      question: '140. Do linii W-52 zalecany jest zasysacz:',
      answers: [
        {
          answer: 'a) Z-2',
          isCorrect: true
        },
        {
          answer: 'b) Z-6',
          isCorrect: false
        },
        {
          answer: 'c) Z-8',
          isCorrect: false
        }
      ]
    },
    {
      question: '141. Pianę średnią wytwarza się przy pomocy:',
      answers: [
        {
          answer: 'a) prądownic pianowych',
          isCorrect: false
        },
        {
          answer: 'b) działka wodno-pianowego',
          isCorrect: false
        },
        {
          answer: 'c) wytwornic pianowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '142. Generator pianowy GPL2/700W wytwarza pianę o liczbie spienienia:',
      answers: [
        {
          answer: 'a) 1-20',
          isCorrect: false
        },
        {
          answer: 'b) 21-200',
          isCorrect: false
        },
        {
          answer: 'c) powyżej 200',
          isCorrect: true
        }
      ]
    },
    {
      question: '143. Piana ciężka powstaje:',
      answers: [
        {
          answer: 'a) w wytwornicach',
          isCorrect: false
        },
        {
          answer: 'b) w generatorach',
          isCorrect: false
        },
        {
          answer: 'c) w prądownicach i działkach pianowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '144. Symbol WP 4-75 oznacza wytwornicę pianową o:',
      answers: [
        {
          answer: 'a) wydajności pianowej 400 l/min i liczbie spienienia 75',
          isCorrect: false
        },
        {
          answer: 'b) wydajności wodnego roztworu środka pianotwórczego 400 l/min i liczbie spienienia 75',
          isCorrect: true
        },
        {
          answer: 'c) wydajności piany 75 m3/min przy ciśnieniu 4 bar',
          isCorrect: false
        }
      ]
    },
    {
      question: '145. Prądownica pianowa służy do wytwarzania piany:',
      answers: [
        {
          answer: 'a) ciężkiej',
          isCorrect: true
        },
        {
          answer: 'b) średniej',
          isCorrect: false
        },
        {
          answer: 'c) lekkiej',
          isCorrect: false
        }
      ]
    },
    {
      question: '146. Wydajność pianowa wytwornicy WP 4-75 wynosi:',
      answers: [
        {
          answer: 'a) 15 m3/min',
          isCorrect: false
        },
        {
          answer: 'b) 75 m3/min',
          isCorrect: false
        },
        {
          answer: 'c) 30 m3/min',
          isCorrect: true
        }
      ]
    },
    {
      question: '147. W generatorze piany lekkiej czynnikiem roboczym napędzającym urządzenie jest:',
      answers: [
        {
          answer: 'a) woda',
          isCorrect: false
        },
        {
          answer: 'b) środek pianotwórczy',
          isCorrect: false
        },
        {
          answer: 'c) wodny roztwór środka pianotwórczego',
          isCorrect: true
        }
      ]
    },
    {
      question: '148. Za pomocą wytwornic wytwarzamy pianę:',
      answers: [
        {
          answer: 'a) lekką',
          isCorrect: false
        },
        {
          answer: 'b) średnią',
          isCorrect: true
        },
        {
          answer: 'c) ciężką',
          isCorrect: false
        }
      ]
    },
    {
      question: '149. Do wytwarzania piany średniej służy następujący sprzęt:',
      answers: [
        {
          answer: 'a) WP 2-150',
          isCorrect: true
        },
        {
          answer: 'b) PP 2-12',
          isCorrect: false
        },
        {
          answer: 'c) PWP 4-150',
          isCorrect: false
        }
      ]
    },
    {
      question: '150. Do poboru środka pianotwórczego z zewnętrznego zbiornika służy:',
      answers: [
        {
          answer: 'a) wysysacz głębinowy',
          isCorrect: false
        },
        {
          answer: 'b) zasysacz liniowy',
          isCorrect: true
        },
        {
          answer: 'c) pompka tłokowo-próżniowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '151. Zasysasz liniowy służy do:',
      answers: [
        {
          answer: 'a) wytworzenia podciśnienia w linii ssawnej',
          isCorrect: false
        },
        {
          answer: 'b) wyciągnięcia wody z piwnicy',
          isCorrect: false
        },
        {
          answer: 'c) poboru środka pianotwórczego ze zbiornika zewnętrznego',
          isCorrect: true
        }
      ]
    },
    {
      question: '152. W trakcie działań gaśniczych podjęto decyzje o pokryciu pianą gaśniczą powierzchni pomieszczenia. Którego sprzętu należy użyć, aby zużyć najmniejszą ilość środka pianotwórczego:',
      answers: [
        {
          answer: 'a) WP 2/150',
          isCorrect: true
        },
        {
          answer: 'b) WP 2/75',
          isCorrect: false
        },
        {
          answer: 'c) WP 4/75',
          isCorrect: false
        }
      ]
    },
    {
      question: '153. Mostek przejazdowy, który zabezpiecza pożarnicze węże tłoczne przed zgnieceniem przez koła samochodu układa się zawsze:',
      answers: [
        {
          answer: 'a) na węże',
          isCorrect: false
        },
        {
          answer: 'b) pod węże',
          isCorrect: true
        },
        {
          answer: 'c) nie ma żadnego znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '154. Wskaż właściwą wartość nominalnego natężenia przepływu [dm3/min] pożarniczych węży tłocznych:',
      answers: [
        {
          answer: 'a) W25 – 100',
          isCorrect: false
        },
        {
          answer: 'b) W75 – 800',
          isCorrect: true
        },
        {
          answer: 'a) W110 – 1200',
          isCorrect: false
        }
      ]
    },
    {
      question: '155. Który z wymienionych czynników ma wpływ na straty w liniach wężowych:',
      answers: [
        {
          answer: 'a) wydajność pompy',
          isCorrect: false
        },
        {
          answer: 'b) obroty silnika motopompy lub autopompy',
          isCorrect: false
        },
        {
          answer: 'c) liczba i rodzaj armatury zastosowanej do budowy linii wężowej',
          isCorrect: true
        }
      ]
    },
    {
      question: '156. Straty ciśnienia przy przepływie wody przez pożarnicze węże tłoczne:',
      answers: [
        {
          answer: 'a) zależą od długości węży',
          isCorrect: true
        },
        {
          answer: 'b) nie zależą od średnicy węży',
          isCorrect: false
        },
        {
          answer: 'c) są większe w rozwinięciu na taką samą odległość W75 niż W52',
          isCorrect: false
        }
      ]
    },
    {
      question: '157. Ciśnienie próbne dla pożarniczego węża tłocznego W 52 to ciśnienie:',
      answers: [
        {
          answer: 'a) 14 MPa',
          isCorrect: false
        },
        {
          answer: 'b) 16 MPa',
          isCorrect: false
        },
        {
          answer: 'c) 18 MPa',
          isCorrect: true
        }
      ]
    },
    {
      question: '158. Nominalne ciśnienie robocze pożarniczych węży tłocznych wynosi:',
      answers: [
        {
          answer: 'a) 8 atm',
          isCorrect: true
        },
        {
          answer: 'b) 10 atm',
          isCorrect: false
        },
        {
          answer: 'c) 12 atm',
          isCorrect: false
        }
      ]
    },
    {
      question: '159. Maksymalne ciśnienie robocze pożarniczych węży tłocznych wynosi:',
      answers: [
        {
          answer: 'a) 14 MPa',
          isCorrect: false
        },
        {
          answer: 'b) 12 MPa',
          isCorrect: true
        },
        {
          answer: 'c) 16 MPa',
          isCorrect: false
        }
      ]
    },
    {
      question: '160. Ilość wody w jednym odcinku węża W-75 to:',
      answers: [
        {
          answer: 'a) ok 88 l',
          isCorrect: true
        },
        {
          answer: 'b) ok 60 l',
          isCorrect: false
        },
        {
          answer: 'c) ok 80 l',
          isCorrect: false
        }
      ]
    },
    {
      question: '161. Nominalny przepływ wody w wężu W-52 to:',
      answers: [
        {
          answer: 'a) 100 l/min',
          isCorrect: false
        },
        {
          answer: 'b) 200 l/min',
          isCorrect: true
        },
        {
          answer: 'c) 400 l/min',
          isCorrect: false
        }
      ]
    },
    {
      question: '162. Nominalne natężenie przepływu wody w pożarniczym wężu tłocznym W-75 wynosi:',
      answers: [
        {
          answer: 'a) 800 l/min',
          isCorrect: true
        },
        {
          answer: 'b) 200 l/min',
          isCorrect: false
        },
        {
          answer: 'c) 1600 l/min',
          isCorrect: false
        }
      ]
    },
    {
      question: '163. Wartość ciśnienia roboczego dla pożarniczego węża tłocznego W75 wynosi:',
      answers: [
        {
          answer: 'a) 12 MPa',
          isCorrect: true
        },
        {
          answer: 'b) 18 MPa',
          isCorrect: false
        },
        {
          answer: 'c) 40 MPa',
          isCorrect: false
        }
      ]
    },
    {
      question: '164. Stosowane pożarnicze węże ssawne W110 posiadają następujące długości:',
      answers: [
        {
          answer: 'a) 240 cm, 160 cm',
          isCorrect: true
        },
        {
          answer: 'b) 160 cm, 260 cm',
          isCorrect: false
        },
        {
          answer: 'c) 200 cm, 160 cm',
          isCorrect: false
        }
      ]
    },
    {
      question: '165. Co oznacza pojęcie „szybkie natarcie”?',
      answers: [
        {
          answer: 'a) szybką akcję strażaków w celu ugaszenia pożaru',
          isCorrect: false
        },
        {
          answer: 'b) linię gaśniczą trwale połączoną z wyznaczoną nasadą tłoczną samochodu gaśniczego gotową do natychmiastowego użycia',
          isCorrect: true
        },
        {
          answer: 'c) gaszenie pożaru przy pomocy gaśnicy',
          isCorrect: false
        }
      ]
    },
    {
      question: '166. Inopur zalicza się do:',
      answers: [
        {
          answer: 'a) podręcznego sprzętu burzącego',
          isCorrect: true
        },
        {
          answer: 'b) sprzętu ratowniczego mechanicznego',
          isCorrect: false
        },
        {
          answer: 'c) wyposażenia osobistego',
          isCorrect: false
        }
      ]
    },
    {
      question: '167. Które bosaki wymagają obsługi przez dwóch ratowników?',
      answers: [
        {
          answer: 'a) tylko bosaki ciężki i sufitowy',
          isCorrect: false
        },
        {
          answer: 'b) tylko bosaki sufitowy i strzechowy',
          isCorrect: false
        },
        {
          answer: 'c) tylko bosaki strzechowy i ciężki',
          isCorrect: true
        }
      ]
    },
    {
      question: '168. Sprawianie drabiny nasadkowej z trzech przęseł wykonuje:',
      answers: [
        {
          answer: 'a) dwóch strażaków i dowódca',
          isCorrect: false
        },
        {
          answer: 'b) trzech strażaków',
          isCorrect: false
        },
        {
          answer: 'c) dwie roty',
          isCorrect: true
        }
      ]
    },
    {
      question: '169. Obsługa drabiny przystawnej ciężkiej to:',
      answers: [
        {
          answer: 'a) jeden strażak',
          isCorrect: false
        },
        {
          answer: 'b) jedna rota',
          isCorrect: true
        },
        {
          answer: 'c) zawsze czterech',
          isCorrect: false
        }
      ]
    },
    {
      question: '170. Kąt pochylenia drabiny przystawnej nie może być większy niż:',
      answers: [
        {
          answer: 'a) 50°',
          isCorrect: false
        },
        {
          answer: 'b) 65°',
          isCorrect: false
        },
        {
          answer: 'c) 75°',
          isCorrect: true
        }
      ]
    },
    {
      question: '171. Drabina słupkowa to drabina o symbolu:',
      answers: [
        {
          answer: 'a) D-5',
          isCorrect: false
        },
        {
          answer: 'b) D-3,1',
          isCorrect: true
        },
        {
          answer: 'c) D-4,2',
          isCorrect: false
        }
      ]
    },
    {
      question: '172. Co oznacza symbol D-3,1',
      answers: [
        {
          answer: 'a) drabinę hakową',
          isCorrect: false
        },
        {
          answer: 'b) drabinę słupkową',
          isCorrect: true
        },
        {
          answer: 'c) drabinę nasadkową',
          isCorrect: false
        }
      ]
    },
    {
      question: '173. Drabinę D-10W winno sprawiać:',
      answers: [
        {
          answer: 'a) 1 ratownik',
          isCorrect: false
        },
        {
          answer: 'b) 2 ratowników',
          isCorrect: false
        },
        {
          answer: 'c) 4 ratowników',
          isCorrect: true
        }
      ]
    },
    {
      question: '174. Drabiny pożarnicze wykorzystywane w jednostkach organizacyjnych PSP to:',
      answers: [
        {
          answer: 'a) D12W',
          isCorrect: false
        },
        {
          answer: 'b) DN 28',
          isCorrect: false
        },
        {
          answer: 'c) D10W',
          isCorrect: true
        }
      ]
    },
    {
      question: '175. Maksymalnie z ilu przęseł sprawia się regulaminowo DN 2,73:',
      answers: [
        {
          answer: 'a) czterech',
          isCorrect: true
        },
        {
          answer: 'b) pięciu',
          isCorrect: false
        },
        {
          answer: 'c) sześciu',
          isCorrect: false
        }
      ]
    },
    {
      question: '176. Aparat Rollgiss typu BRDA służy do:',
      answers: [
        {
          answer: 'a) podawania piany gaśniczej',
          isCorrect: false
        },
        {
          answer: 'b) ewakuacji ludzi i mienia',
          isCorrect: true
        },
        {
          answer: 'c) zabezpieczenia linii gaśniczej prowadzonej po drabinie mechanicznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '177. Strażackie linki ratownicze mają długość:',
      answers: [
        {
          answer: 'a) 15 m i 25 m',
          isCorrect: false
        },
        {
          answer: 'b) 10 m i 20 m',
          isCorrect: false
        },
        {
          answer: 'c) 20 m i 30 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '178. Oddawanie skoków na skokochron duży podczas ćwiczeń odbywa się:',
      answers: [
        {
          answer: 'a) maksymalnie z 2 piętra',
          isCorrect: false
        },
        {
          answer: 'b) nie powinno się skakać',
          isCorrect: true
        },
        {
          answer: 'c) z dowolnej wysokości nie przekraczającej wskazań producenta',
          isCorrect: false
        }
      ]
    },
    {
      question: '179. Do urządzeń wykrywania i pomiaru temperatury stosuje się:',
      answers: [
        {
          answer: 'a) piknometry punktowe, skanery liniowe i kamery termowizyjne',
          isCorrect: false
        },
        {
          answer: 'b) pirometry punktowe, skanery liniowe i kamery termowizyjne',
          isCorrect: true
        },
        {
          answer: 'c) pirometry punktowe, skanery termowizyjne i kamery liniowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '180. Skokochron używamy podczas ewakuacji:',
      answers: [
        {
          answer: 'a) zawsze, kiedy jest taka możliwość',
          isCorrect: false
        },
        {
          answer: 'b) nigdy, bo jest za duże ryzyko',
          isCorrect: false
        },
        {
          answer: 'c) w ostateczności, gdy nie ma innych możliwości',
          isCorrect: true
        }
      ]
    },
    {
      question: '181. Sprzęt ochrony dróg oddechowych dzielimy na:',
      answers: [
        {
          answer: 'a) monitorujący, filtrujący',
          isCorrect: false
        },
        {
          answer: 'b) monitorujący, izolujący',
          isCorrect: false
        },
        {
          answer: 'c) filtrujący, izolujący',
          isCorrect: true
        }
      ]
    },
    {
      question: '182. Dokumentacja określająca warunki techniczne eksploatacji sprzętu ochronny układu oddechowego to:',
      answers: [
        {
          answer: 'a) książka techniczno-ruchowa',
          isCorrect: false
        },
        {
          answer: 'b) książka paszportowa',
          isCorrect: true
        },
        {
          answer: 'c) książka kontroli sprzętu',
          isCorrect: false
        }
      ]
    },
    {
      question: '183. Do obliczania czasu pracy strażaka w aparacie powietrznym potrzebne są następujące dane:',
      answers: [
        {
          answer: 'a) pojemność wodna butli, intensywność oddychania strażaka, ciśnienie powietrza w \tbutli',
          isCorrect: true
        },
        {
          answer: 'b) ciśnienie robocze',
          isCorrect: false
        },
        {
          answer: 'c) ciśnienie próbne powietrza',
          isCorrect: false
        }
      ]
    },
    {
      question: '184. Wśród znaków trwałych umieszczanych na metalowej butli powietrznej wyróżnia się:',
      answers: [
        {
          answer: 'a) termin wprowadzenia do jednostki',
          isCorrect: false
        },
        {
          answer: 'b) waga butli bez powietrza',
          isCorrect: false
        },
        {
          answer: 'c) ciśnienie próbne powietrza',
          isCorrect: true
        }
      ]
    },
    {
      question: '185. Ile stopni redukcji występuje w aparacie powietrznym nadciśnieniowym:',
      answers: [
        {
          answer: 'a) 1',
          isCorrect: false
        },
        {
          answer: 'b) 2',
          isCorrect: true
        },
        {
          answer: 'c) 3',
          isCorrect: false
        }
      ]
    },
    {
      question: '186. Reduktor ciśnienia w sprzęcie ochrony dróg oddechowych ma za zadanie:',
      answers: [
        {
          answer: 'a) kierowanie wydychanego powietrza do maski wewnętrznej',
          isCorrect: false
        },
        {
          answer: 'b) dawkowania i wytwarzania nadciśnienia w masce',
          isCorrect: true
        },
        {
          answer: 'c) kierowanie wydychanego powietrza na zewnątrz',
          isCorrect: false
        }
      ]
    },
    {
      question: '187. Zawór dodawczy w automacie oddechowym służy do:',
      answers: [
        {
          answer: 'a) zwiększenia dawki powietrza',
          isCorrect: true
        },
        {
          answer: 'b) zapowietrzenia układu',
          isCorrect: false
        },
        {
          answer: 'c) sprawdzenia zadziałania sygnalizatora akustycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '188. Sygnalizator akustyczny stosowany w sprzęcie ochrony dróg oddechowych informuje o:',
      answers: [
        {
          answer: 'a) uruchomieniu rezerwy powietrza',
          isCorrect: true
        },
        {
          answer: 'b) bezruchu ratownika',
          isCorrect: false
        },
        {
          answer: 'c) zakończeniu rezerwy powietrza',
          isCorrect: false
        }
      ]
    },
    {
      question: '189. W masce do aparatu nadciśnieniowego panuje ciśnienie:',
      answers: [
        {
          answer: 'a) równe ciśnieniu atmosferycznemu',
          isCorrect: false
        },
        {
          answer: 'b) niższe od ciśnienia atmosferycznego',
          isCorrect: false
        },
        {
          answer: 'c) wyższe od ciśnienia atmosferycznego',
          isCorrect: true
        }
      ]
    },
    {
      question: '190. Kontrola maski odbywa się:',
      answers: [
        {
          answer: 'a) co 1 rok',
          isCorrect: false
        },
        {
          answer: 'b) po każdym użyciu',
          isCorrect: true
        },
        {
          answer: 'c) przynajmniej raz na dwa lata',
          isCorrect: false
        }
      ]
    },
    {
      question: '191. Do czyszczenia i dezynfekcji masek aparatów powietrznych należy stosować:',
      answers: [
        {
          answer: 'a) alkohol etylowy',
          isCorrect: false
        },
        {
          answer: 'b) alkohol metylowy',
          isCorrect: false
        },
        {
          answer: 'c) środek zgodny ze wskazaniem producenta',
          isCorrect: true
        }
      ]
    },
    {
      question: '192. Sprawdzenie szczelności maski należy przeprowadzić:',
      answers: [
        {
          answer: 'a) przed założeniem maski',
          isCorrect: false
        },
        {
          answer: 'b) po założeniu maski',
          isCorrect: true
        },
        {
          answer: 'c) po każdorazowym użyciu',
          isCorrect: false
        }
      ]
    },
    {
      question: '193. Zadaniem sprzętu izolacyjnego (dielektrycznego) jest:',
      answers: [
        {
          answer: 'a) odizolowanie ratowników od urządzeń elektroenergetycznych, które znajdują się w Jednostkach Ratowniczo Gaśniczych',
          isCorrect: false
        },
        {
          answer: 'b) odizolowanie ratowników od osób poszkodowanych, u których występuje krwotok zewnętrzny',
          isCorrect: false
        },
        {
          answer: 'c) odizolowanie ratowników od części urządzeń elektroenergetycznych, które są lub mogą się znaleźć pod napięciem w czasie prowadzonych działań ratowniczo – gaśniczych',
          isCorrect: true
        }
      ]
    },
    {
      question: '194. Proporcja paliwa i oleju, jaka winna być zachowana podczas przygotowania mieszanki paliwowo-olejowej stosowanej do napędu silników dwusuwowych, zależy od:',
      answers: [
        {
          answer: 'a) zaleceń producenta sprzętu',
          isCorrect: true
        },
        {
          answer: 'b) rodzaju oleju',
          isCorrect: false
        },
        {
          answer: 'c) długości prowadnicy',
          isCorrect: false
        }
      ]
    },
    {
      question: '195. W ramach obsługi codziennej pilarki łańcuchowej do drewna nie wykonujemy:',
      answers: [
        {
          answer: 'a) czyszczenia filtra paliwa w zbiorniku paliwa',
          isCorrect: true
        },
        {
          answer: 'b) smarowania łańcucha',
          isCorrect: false
        },
        {
          answer: 'c) regulacji napięcia łańcucha',
          isCorrect: false
        }
      ]
    },
    {
      question: '196. Podczas przenoszenia unieruchomionej pilarki do drewna prowadnica powinna być skierowana:',
      answers: [
        {
          answer: 'a) do przodu',
          isCorrect: false
        },
        {
          answer: 'b) do tyłu',
          isCorrect: true
        },
        {
          answer: 'c) w górę',
          isCorrect: false
        }
      ]
    },
    {
      question: '197. Technika cięcia elementów stalowych tarczą tnącą polega między innymi na:',
      answers: [
        {
          answer: 'a) utrzymaniu średnich obrotów tarczy ściernej',
          isCorrect: false
        },
        {
          answer: 'b) doprowadzeniu wody do tarczy w celu chłodzenia tarczy',
          isCorrect: false
        },
        {
          answer: 'c) utrzymaniu maksymalnych obrotów tarczy tnącej',
          isCorrect: true
        }
      ]
    },
    {
      question: '198. Przy doborze tarczy ściernicowej (korundowej) do przecinarki należy uwzględnić między innymi:',
      answers: [
        {
          answer: 'a) tylko kierunek obrotu tarczy',
          isCorrect: false
        },
        {
          answer: 'b) maksymalną prędkość obrotową tarczy i średnicę zewnętrzną tarczy',
          isCorrect: true
        },
        {
          answer: 'c) grubość tarczy i termin jej przydatności',
          isCorrect: false
        }
      ]
    },
    {
      question: '199. Piły tarczowe do cięcia stali i betonu należą do sprzętu:',
      answers: [
        {
          answer: 'a) burzącego, podręcznego',
          isCorrect: false
        },
        {
          answer: 'b) ratowniczego, pomocniczego',
          isCorrect: false
        },
        {
          answer: 'c) burzącego, mechanicznego',
          isCorrect: true
        }
      ]
    },
    {
      question: '200. Przed podłączeniem reduktora do butli powietrznej (sprzęt pneumatyczny) należy:',
      answers: [
        {
          answer: 'a) poluzować śrubę nastawną reduktora, odkręcając ją w lewo',
          isCorrect: true
        },
        {
          answer: 'b) odkręcić zawór iglicowy',
          isCorrect: false
        },
        {
          answer: 'c) podłączyć przewód do sterownika',
          isCorrect: false
        }
      ]
    },
    {
      question: '201. Ratownicze zestawy pneumatyczne podnoszące niskiego ciśnienia niskociśnieniowe powinny pracować:',
      answers: [
        {
          answer: 'a) niezależnie od pozycji poduszki',
          isCorrect: false
        },
        {
          answer: 'b) pracować pionowo lub pod kątem do 45o',
          isCorrect: false
        },
        {
          answer: 'c) tylko w płaszczyźnie pionowej',
          isCorrect: true
        }
      ]
    },
    {
      question: '202. Wewnętrzne wzmocnienia stosowane w siłownikach pneumatycznych niskociśnieniowych zapobiegają:',
      answers: [
        {
          answer: 'a) wybrzuszeniom płaszczyzny dolnej i górnej',
          isCorrect: true
        },
        {
          answer: 'b) wybrzuszeniom płaszczyzn bocznych',
          isCorrect: false
        },
        {
          answer: 'c) nie mają wpływu na wybrzuszenia płaszczyzn poduszki, tylko na wzrost bezpieczeństwa',
          isCorrect: false
        }
      ]
    },
    {
      question: '203. Ustawienie dwóch siłowników niskociśnieniowych jeden na drugim podczas operacji podnoszenia elementu jest:',
      answers: [
        {
          answer: 'a) ogólnie dozwolone',
          isCorrect: false
        },
        {
          answer: 'b) dozwolone w szczególnych sytuacjach',
          isCorrect: false
        },
        {
          answer: 'c) zabronione',
          isCorrect: true
        }
      ]
    },
    {
      question: '204. Jaką maksymalną ilość siłowników pneumatycznych podnoszących niskociśnieniowych można ułożyć w stosie ?',
      answers: [
        {
          answer: 'a) 2',
          isCorrect: false
        },
        {
          answer: 'b) 4',
          isCorrect: false
        },
        {
          answer: 'c) siłowników pneumatycznych niskociśnieniowych nie można układać w stosie',
          isCorrect: true
        }
      ]
    },
    {
      question: '205. Bezpośrednio do butli powietrznej w siłowym zestawie pneumatycznym podnoszącym podłączamy:',
      answers: [
        {
          answer: 'a) urządzenie sterujące',
          isCorrect: false
        },
        {
          answer: 'b) reduktor',
          isCorrect: true
        },
        {
          answer: 'c) poduszki',
          isCorrect: false
        }
      ]
    },
    {
      question: '206. Olej hydrauliczny w ratowniczym zestawie hydraulicznym należy sprawdzać:',
      answers: [
        {
          answer: 'a) przed każdym uruchomieniem pompy',
          isCorrect: true
        },
        {
          answer: 'b) raz w roku podczas corocznego przeglądu sprzętu silnikowego',
          isCorrect: false
        },
        {
          answer: 'c) po wymianie oleju silnikowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '207. Po zakończeniu pracy ratowniczymi zestawami hydraulicznymi należy elementy robocze:',
      answers: [
        {
          answer: 'a) sprowadzić do maksymalnego rozwarcia',
          isCorrect: false
        },
        {
          answer: 'b) sprowadzić do maksymalnego zwarcia',
          isCorrect: false
        },
        {
          answer: 'c) sprowadzić do niepełnego zwarcia – wielkość szczeliny nie jest szczególnie istotna',
          isCorrect: true
        }
      ]
    },
    {
      question: '208. W samochodach osobowych, w których kolumna kierownicy jest łączona przegubami, odciąganie kolumny, w celu wykonania dostępu do kierowcy przy użyciu rozpieraczy i łańcuchów jest:',
      answers: [
        {
          answer: 'a) dozwolone',
          isCorrect: false
        },
        {
          answer: 'b) zabronione',
          isCorrect: true
        },
        {
          answer: 'c) dozwolone, ale z zachowaniem środków ostrożności',
          isCorrect: false
        }
      ]
    },
    {
      question: '209. W jakim położeniu należy pozostawić po użyciu ramiona rozpieracza?',
      answers: [
        {
          answer: 'a) końcówki ramion powinny być oddalone od siebie o ok. 10 - 15 mm',
          isCorrect: true
        },
        {
          answer: 'b) końcówki ramion powinny być oddalone od siebie o ok 100 - 150 mm',
          isCorrect: false
        },
        {
          answer: 'c) końcówki ramion należy zewrzeć ze sobą w dowolnym położeniu ramienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '210. Po każdorazowym użyciu rozpieracza ramieniowego:',
      answers: [
        {
          answer: 'a) ramiona należy dokładnie zamknąć do pozycji styku, dzięki czemu urządzenie jest odciążone mechanicznie i hydraulicznie',
          isCorrect: false
        },
        {
          answer: 'b) ramiona należy ustawić w pozycji maksymalnego rozwarcia, dzięki czemu urządzenie jest odciążone mechanicznie i hydraulicznie',
          isCorrect: false
        },
        {
          answer: 'c) ramiona należy zamknąć do pozycji rozwarcia około 15 mm, dzięki czemu urządzenie jest odciążone mechanicznie i hydraulicznie',
          isCorrect: true
        }
      ]
    },
    {
      question: '211. Nożycami hydraulicznymi nie należy ciąć:',
      answers: [
        {
          answer: 'a) koła kierownicy pojazdu',
          isCorrect: false
        },
        {
          answer: 'b) sprężyn układu zawieszenia pojazdu',
          isCorrect: true
        },
        {
          answer: 'c) poszycia drzwi pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '212. Przed uruchomieniem agregatu prądotwórczego należy:',
      answers: [
        {
          answer: 'a) uziemić agregat',
          isCorrect: true
        },
        {
          answer: 'b) podłączyć urządzenia odbiorcze',
          isCorrect: false
        },
        {
          answer: 'c) sprawdzić działanie urządzeń zabezpieczających',
          isCorrect: false
        }
      ]
    },
    {
      question: '213. Oznaczenie IP dotyczy stopnia:',
      answers: [
        {
          answer: 'a) zabezpieczenia przed szkodliwym działaniem energii elektrycznej',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenia przeciwwybuchowego',
          isCorrect: false
        },
        {
          answer: 'c) zabezpieczenia przed ciałami obcymi i wodą',
          isCorrect: true
        }
      ]
    },
    {
      question: '214. Do pracy w strefach zagrożonych wybuchem dopuszcza się sprzęt wykonany w klasie:',
      answers: [
        {
          answer: 'a) Ex',
          isCorrect: true
        },
        {
          answer: 'b) EC',
          isCorrect: false
        },
        {
          answer: 'c) IP',
          isCorrect: false
        }
      ]
    },
    {
      question: '215. Co to oznacza symbol Ex',
      answers: [
        {
          answer: 'a) urządzenie może pracować w wysokich temperaturach',
          isCorrect: false
        },
        {
          answer: 'b) urządzenie jest w wykonaniu przeciwwybuchowym',
          isCorrect: true
        },
        {
          answer: 'c) nie ma takiego oznaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '216. Pirometry służą do:',
      answers: [
        {
          answer: 'a) oznaczania stężeń substancji niebezpiecznych',
          isCorrect: false
        },
        {
          answer: 'b) wykrywania substancji niebezpiecznych',
          isCorrect: false
        },
        {
          answer: 'c) bezkontaktowego pomiaru temperatury',
          isCorrect: true
        }
      ]
    },
    {
      question: '217. W celu wyboru właściwego ubrania, stanowiącego ochronę ratownika, kierujący działaniami ratowniczymi przez wpuszczeniem ratowników do strefy zagrożenia winien ustalić:',
      answers: [
        {
          answer: 'a) kierunek wiatru',
          isCorrect: false
        },
        {
          answer: 'b) ukształtowanie terenu',
          isCorrect: false
        },
        {
          answer: 'c) rodzaj niebezpiecznej substancji',
          isCorrect: true
        }
      ]
    },
    {
      question: '218. W chemoodpornym ubraniu gazoszczelnym nadciśnienie panujące wewnątrz ubrania zapewnia:',
      answers: [
        {
          answer: 'a) komfort pracy związany z poprawą mikroklimatu, panującego wewnątrz ubrania',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenie przed przenikaniem substancji z zewnątrz do wnętrza ubrania, podczas wystąpienia niewielkich nieszczelności',
          isCorrect: true
        },
        {
          answer: 'c) dobra wentylację ubrania',
          isCorrect: false
        }
      ]
    },
    {
      question: '219. Zawór wydechowy w ubraniu gazoszczelnym ma za zadanie:',
      answers: [
        {
          answer: 'a) umożliwić pobór powietrza przez ratownika',
          isCorrect: false
        },
        {
          answer: 'b) umożliwić właściwą wymianę powietrza wydychanego i utrzymać niewielkie nadciśnienie wewnątrz ubrania',
          isCorrect: true
        },
        {
          answer: 'c) umożliwić pracę bez użycia sprzętu ODO',
          isCorrect: false
        }
      ]
    },
    {
      question: '220. W ubraniu gazoszczelnym można pracować podczas dużego promieniowania cieplnego:',
      answers: [
        {
          answer: 'a) tak – temperatura otoczenia nie wpływa jego szczelność i wytrzymałość',
          isCorrect: false
        },
        {
          answer: 'b) nie – podwyższona temperatura może spowodować jego uszkodzenie',
          isCorrect: true
        },
        {
          answer: 'c) zależy od intensywności wzrostu temperatury',
          isCorrect: false
        }
      ]
    },
    {
      question: '221. Czynności naprawcze chemoodpornych ubrań gazoszczelnych:',
      answers: [
        {
          answer: 'a) wykonujemy we własnym zakresie na miejscu akcji',
          isCorrect: false
        },
        {
          answer: 'b) wykonujemy we własnym zakresie w JRG PSP',
          isCorrect: false
        },
        {
          answer: 'c) powinny być przeprowadzone tylko w autoryzowanych punktach serwisowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '222. Próbę szczelności chemicznego chemoodpornego ubrania gazoszczelnego wykonuje się',
      answers: [
        {
          answer: 'a) po każdorazowym użyciu',
          isCorrect: true
        },
        {
          answer: 'b) po pięciu użyciach',
          isCorrect: false
        },
        {
          answer: 'c) co dwa lata',
          isCorrect: false
        }
      ]
    },
    {
      question: '223. Który element w chemicznym ubraniu gazoszczelnym można wymienić, nie korzystając z autoryzowanego serwisu:',
      answers: [
        {
          answer: 'a) zamek\t',
          isCorrect: false
        },
        {
          answer: 'b) rękawy\t',
          isCorrect: false
        },
        {
          answer: 'c) membranę zaworu nadmiarowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '224. Chemoodporne ubrania gazoszczelne przechowuje się magazynie w następujący sposób:',
      answers: [
        {
          answer: 'a) zwinięte i ułożone na wyściełanej półce',
          isCorrect: false
        },
        {
          answer: 'b) powieszone na uchwycie, może dotykać podłoża',
          isCorrect: true
        },
        {
          answer: 'c) w stanie napompowanym w dowolnej pozycji',
          isCorrect: false
        }
      ]
    },
    {
      question: '225. Eksplozymetry najczęściej kalibrowane są na:',
      answers: [
        {
          answer: 'a) metan',
          isCorrect: true
        },
        {
          answer: 'b) etan',
          isCorrect: false
        },
        {
          answer: 'c) propan-butan',
          isCorrect: false
        }
      ]
    },
    {
      question: '226. Przyrządy pomiarowe do pomiaru stężeń gazów wybuchowych to:',
      answers: [
        {
          answer: 'a) spirometry',
          isCorrect: false
        },
        {
          answer: 'b) manometry',
          isCorrect: false
        },
        {
          answer: 'c) eksplozymetry',
          isCorrect: true
        }
      ]
    },
    {
      question: '227. Do pomiaru i identyfikacji substancji chemicznych stosowane są:',
      answers: [
        {
          answer: 'a) kalorymetryczne rurki wskaźnikowe eksplozymetry wielofunkcyjne mierniki gazów i analizatory wielofunkcyjne',
          isCorrect: false
        },
        {
          answer: 'b) kolorymetryczne rurki wskaźnikowe wielofunkcyjne mierniki gazów i analizatory wielofunkcyjne',
          isCorrect: true
        },
        {
          answer: 'c) kolorymetryczne rurki wskaźnikowe dozymetry wielofunkcyjne mierniki gazów i analizatory wielofunkcyjne',
          isCorrect: false
        }
      ]
    },
    {
      question: '228. Na wyświetlaczu toksymetru stężenie gazu pojawia się w:',
      answers: [
        {
          answer: 'a) ppm',
          isCorrect: true
        },
        {
          answer: 'b) DGW',
          isCorrect: false
        },
        {
          answer: 'c) GGW',
          isCorrect: false
        }
      ]
    },
    {
      question: '229. Papierki wskaźnikowe służą do:',
      answers: [
        {
          answer: 'a) określenia stopnia palności',
          isCorrect: false
        },
        {
          answer: 'b) przybliżonego określenia pH substancji',
          isCorrect: true
        },
        {
          answer: 'c) pomiaru objętości substancji',
          isCorrect: false
        }
      ]
    },
    {
      question: '230. Eksplozymetr służy do:',
      answers: [
        {
          answer: 'a) pomiaru parametrów toksyczności',
          isCorrect: false
        },
        {
          answer: 'b) pomiaru parametrów wybuchowości',
          isCorrect: true
        },
        {
          answer: 'c) pomiaru energii wybuchu',
          isCorrect: false
        }
      ]
    },
    {
      question: '231. Przyrządy do pomiaru stężeń gazów toksycznych należy włączać i wyłączać:',
      answers: [
        {
          answer: 'a) w strefie, w której prawdopodobnie znajdują się substancje niebezpieczne',
          isCorrect: false
        },
        {
          answer: 'b) w strefie bezpiecznej (czystej)',
          isCorrect: true
        },
        {
          answer: 'c) nie ma żadnych ograniczeń w tym zakresie',
          isCorrect: false
        }
      ]
    },
    {
      question: '232. Do wykrywania gazów palnych stosuje się:',
      answers: [
        {
          answer: 'a) indykatory',
          isCorrect: false
        },
        {
          answer: 'b) eksplozymetry',
          isCorrect: true
        },
        {
          answer: 'c) toksynomierze',
          isCorrect: false
        }
      ]
    },
    {
      question: '233. Określenie odczynu roztworu może być dokonywane za pomocą:',
      answers: [
        {
          answer: 'a) indykatorów',
          isCorrect: true
        },
        {
          answer: 'b) eksplozymetrów',
          isCorrect: false
        },
        {
          answer: 'c) toksynomierzy',
          isCorrect: false
        }
      ]
    },
    {
      question: '234. Wśród nadruków na rurkach wskaźnikowych do pomiaru ilościowego występuje:',
      answers: [
        {
          answer: 'a) skala',
          isCorrect: true
        },
        {
          answer: 'b) wartość NDSCh',
          isCorrect: false
        },
        {
          answer: 'c) wartość NDS',
          isCorrect: false
        }
      ]
    },
    {
      question: '235. Eksplozymetry to elektroniczne przyrządy pomiarowe służące do wykrywania oraz oznaczania stężeń:',
      answers: [
        {
          answer: 'a) stężeń substancji trujących',
          isCorrect: false
        },
        {
          answer: 'b) gazów oraz par cieczy palnych',
          isCorrect: true
        },
        {
          answer: 'c) odczynów PH',
          isCorrect: false
        }
      ]
    },
    {
      question: '236. Litera „n” na rurce wskaźnikowej określa:',
      answers: [
        {
          answer: 'a) rurkę do azotu',
          isCorrect: false
        },
        {
          answer: 'b) numer seryjny',
          isCorrect: false
        },
        {
          answer: 'c) liczbę zassań niezbędnych do prawidłowego wskazania',
          isCorrect: true
        }
      ]
    },
    {
      question: '237. pH – metr to urządzenie do:',
      answers: [
        {
          answer: 'a) pomiaru właściwości utleniających/redukujących badanej próbki',
          isCorrect: false
        },
        {
          answer: 'b) pomiaru ogólnej zawartości rozpuszczonych w wodzie/próbce soli mineralnych',
          isCorrect: false
        },
        {
          answer: 'c) ilościowego pomiaru kwasowości i zasadowości roztworów',
          isCorrect: true
        }
      ]
    },
    {
      question: '238. Urządzenie TMX 412 umożliwia wykrywanie obecności:',
      answers: [
        {
          answer: 'a) do czterech rodzajów gazów',
          isCorrect: true
        },
        {
          answer: 'b) do sześciu rodzajów gazów',
          isCorrect: false
        },
        {
          answer: 'c) do ośmiu rodzajów gazów',
          isCorrect: false
        }
      ]
    },
    {
      question: '239. Żółty pokrowiec zakładany na poduszkę pneumatyczną uszczelniającą służy do:',
      answers: [
        {
          answer: 'a) zabezpieczania poduszki przed uszkodzeniami mechanicznymi',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenia poduszki przed przekroczeniem dopuszczalnego ciśnienia roboczego',
          isCorrect: false
        },
        {
          answer: 'c) zabezpieczenia przed substancjami agresywnymi',
          isCorrect: true
        }
      ]
    },
    {
      question: '240. Poduszki uszczelniające podciśnieniowe służą do:',
      answers: [
        {
          answer: 'a) do uszczelniania długich wzdłużnych pęknięć rurociągów',
          isCorrect: false
        },
        {
          answer: 'b) do uszczelniania studzienek kanalizacyjnych',
          isCorrect: false
        },
        {
          answer: 'c) do uszczelniania nieszczelności płaszczy cystern',
          isCorrect: true
        }
      ]
    },
    {
      question: '241. Pompa perystaltyczna to pompa:',
      answers: [
        {
          answer: 'a) pompa wężowa',
          isCorrect: true
        },
        {
          answer: 'b) pompa śmigłowa',
          isCorrect: false
        },
        {
          answer: 'c) pompa membranowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '242. Pompa wężowa (perystaltyczna) służy do:',
      answers: [
        {
          answer: 'a) pompowania substancji chemicznych tylko o temperaturze otoczenia tej substancji niezależnie od rodzaju umieszczonego w niej węża',
          isCorrect: false
        },
        {
          answer: 'b) pompowania każdej substancji chemicznej w każdej temperaturze tej substancji niezależnie od odporności chemicznej umieszczonego w niej węża',
          isCorrect: false
        },
        {
          answer: 'c) pompowania substancji chemicznych w zależności od odporności chemicznej umieszczonego w niej węża',
          isCorrect: true
        }
      ]
    },
    {
      question: '243. Pompy do wypompowywania substancji chemicznie niebezpiecznych z beczek butli szklanych itp. to pompy:',
      answers: [
        {
          answer: 'a) wężowe',
          isCorrect: false
        },
        {
          answer: 'b) śmigłowe',
          isCorrect: true
        },
        {
          answer: 'c) membranowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '244. Węże chemiczne w oplocie stalowym stosowane są do przepompowywania:',
      answers: [
        {
          answer: 'a) kwasów i zasad',
          isCorrect: false
        },
        {
          answer: 'b) substancji ropopochodnych',
          isCorrect: true
        },
        {
          answer: 'c) wszystkich substancji',
          isCorrect: false
        }
      ]
    },
    {
      question: '245. W strefie „0” można zastosować pompę:',
      answers: [
        {
          answer: 'a) membranową',
          isCorrect: false
        },
        {
          answer: 'b) beczkową NIRO',
          isCorrect: true
        },
        {
          answer: 'c) przelewową',
          isCorrect: false
        }
      ]
    },
    {
      question: '246. Do pracy w strefie zagrożenia wybuchem „0” dopuszczona jest pompa:',
      answers: [
        {
          answer: 'a) NIRO – beczkowa',
          isCorrect: true
        },
        {
          answer: 'b) Mast – przelewowa',
          isCorrect: false
        },
        {
          answer: 'c) Depa Elro – wężowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '247. Pompa beczkowa wykonana z PP (polipropylenu) może być używana w strefie 0:',
      answers: [
        {
          answer: 'a) tak – jest to pompa uniwersalna i zawsze można ją używać w tej strefie',
          isCorrect: false
        },
        {
          answer: 'b) nie – ponieważ występuje zagrożenie elektrycznością statyczną',
          isCorrect: true
        },
        {
          answer: 'c) zależy tylko od temperatury zapłonu pompowanej cieczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '248. Czy pompa NIRO może być używana w strefie „0”?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie – ponieważ występuje zagrożenie elektrycznością statyczną',
          isCorrect: false
        },
        {
          answer: 'c) zależy tylko od temperatury zapłonu pompowanej cieczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '249. Pompa beczkowa z PP (koloru żółtego) służy do:',
      answers: [
        {
          answer: 'a) pompowania cieczy palnych',
          isCorrect: false
        },
        {
          answer: 'b) pompowania cieczy żrących (ługów i kwasów)',
          isCorrect: true
        },
        {
          answer: 'c) do pompowania cieczy łatwopalnych i kwasów',
          isCorrect: false
        }
      ]
    },
    {
      question: '250. Wąż z polichlorku winylu (PCV) to:',
      answers: [
        {
          answer: 'a) wąż ssawno – tłoczny odporny na oleje i rozcieńczone kwasy',
          isCorrect: true
        },
        {
          answer: 'b) wąż ssawny do pompowania rozpuszczalników',
          isCorrect: false
        },
        {
          answer: 'c) wąż ssawno – tłoczny do pompowania stężonych zasad',
          isCorrect: false
        }
      ]
    },
    {
      question: '251. Perystaltyczna pompa wężowa ELRO służy do:',
      answers: [
        {
          answer: 'a) pompowania substancji palnych żrących i o dużej lepkości',
          isCorrect: true
        },
        {
          answer: 'b) przetłaczania wszystkich substancji palnych i agresywnych',
          isCorrect: false
        },
        {
          answer: 'c) przepompowywania tylko substancji agresywnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '252. Ręczna pompa membranowa służy do pompowania substancji:',
      answers: [
        {
          answer: 'a) palnych i żrących',
          isCorrect: true
        },
        {
          answer: 'b) tylko żrących',
          isCorrect: false
        },
        {
          answer: 'c) kleistych',
          isCorrect: false
        }
      ]
    },
    {
      question: '253. Za pomocą pompy beczkowej „NIRO” można pompować ciecze:',
      answers: [
        {
          answer: 'a) żrące i palne',
          isCorrect: true
        },
        {
          answer: 'b) tylko żrące',
          isCorrect: false
        },
        {
          answer: 'c) kleiste',
          isCorrect: false
        }
      ]
    },
    {
      question: '254. Jaką pompę użyjesz do przepompowania MAZUTU:',
      answers: [
        {
          answer: 'a) pompa turbinowa',
          isCorrect: false
        },
        {
          answer: 'b) pompa beczkowa',
          isCorrect: false
        },
        {
          answer: 'c) pompa z wężem hypalonowym',
          isCorrect: true
        }
      ]
    },
    {
      question: '255. Niebiesko-biało-zielonymi rombami oznaczono:\t\t',
      answers: [
        {
          answer: 'a) wąż kwasoodporny\t',
          isCorrect: false
        },
        {
          answer: 'b) wąż uniwersalny\t',
          isCorrect: true
        },
        {
          answer: 'c) wąż z PCV\t\t',
          isCorrect: false
        }
      ]
    },
    {
      question: '256. Przy doborze rodzaju zbieraczy olejowych szczególną uwagę należy zwrócić na:',
      answers: [
        {
          answer: 'a) lepkość zbieranej cieczy ropopochodnej',
          isCorrect: true
        },
        {
          answer: 'b) grubość warstwy zbieranej cieczy ropopochodnej',
          isCorrect: false
        },
        {
          answer: 'c) rodzaj akwenu z którego zbieramy ciecz ropopochodną',
          isCorrect: false
        }
      ]
    },
    {
      question: '257. Do zbierania oleju o dużej lepkości służą:',
      answers: [
        {
          answer: 'a) zbieracze sorpcyjne',
          isCorrect: false
        },
        {
          answer: 'b) zbieracze przelewowo – pompowe',
          isCorrect: false
        },
        {
          answer: 'c) podajnik śrubowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '258. Zbieracz przelewowy służy do:',
      answers: [
        {
          answer: 'a) ograniczania w sposób chemiczny rozlewisk substancji ropopochodnej',
          isCorrect: false
        },
        {
          answer: 'b) zbierania i umożliwienia odpompowania przy pomocy pompy filmu substancji ropopochodnej z powierzchni wody',
          isCorrect: true
        },
        {
          answer: 'c) zbierania i przetłaczania każdej substancji niebezpiecznej z powierzchni wody, pod warunkiem że posiada duża gęstość – tzw. spływ grawitacyjny do środka zbieracza',
          isCorrect: false
        }
      ]
    },
    {
      question: '259. Zbieracz przelewowo-pompowy to urządzenie służące do:',
      answers: [
        {
          answer: 'a) zbierania oleju z powierzchni gruntu',
          isCorrect: false
        },
        {
          answer: 'b) zbierania mieszaniny wodno-olejowej z powierzchni wody',
          isCorrect: true
        },
        {
          answer: 'c) oddzielania wody od oleju po zebraniu go z powierzchni wody',
          isCorrect: false
        }
      ]
    },
    {
      question: '260. Zapora przeciwolejowa składająca się z pływaka fartucha i balastu to:',
      answers: [
        {
          answer: 'a) zapora sztywna pomostowa',
          isCorrect: false
        },
        {
          answer: 'b) zapora sorpcyjna',
          isCorrect: false
        },
        {
          answer: 'c) zapora elastyczna płaszczowa',
          isCorrect: true
        }
      ]
    },
    {
      question: '261. Separator to urządzenie służące do:',
      answers: [
        {
          answer: 'a) przepompowanie substancji niebezpiecznej',
          isCorrect: false
        },
        {
          answer: 'b) oddzielenie substancji ropopochodnej od wody',
          isCorrect: true
        },
        {
          answer: 'c) zbiornik do przewozu substancji niebezpiecznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '262. Rękawy sorpcyjne służą do:',
      answers: [
        {
          answer: 'a) ograniczenia rozlewu i zebrania substancji ropopochodnej',
          isCorrect: true
        },
        {
          answer: 'b) wykrycia rodzaju substancji',
          isCorrect: false
        },
        {
          answer: 'c) uszczelniania przy wyciekach z cystern',
          isCorrect: false
        }
      ]
    },
    {
      question: '263. Jaką gaśnicą można gasić odzież płonącą na człowieku:',
      answers: [
        {
          answer: 'a) śniegową',
          isCorrect: false
        },
        {
          answer: 'b) wodno-mgłową',
          isCorrect: true
        },
        {
          answer: 'c) proszkową',
          isCorrect: false
        }
      ]
    },
    {
      question: '264. Która z gaśnic będzie najskuteczniejsza w gaszeniu cieczy ropopochodnej:',
      answers: [
        {
          answer: 'a) pianowa',
          isCorrect: true
        },
        {
          answer: 'b) proszkowa',
          isCorrect: false
        },
        {
          answer: 'c) śniegowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '265. Pilarka spalinowa posiada:',
      answers: [
        {
          answer: 'a) 1 filtr',
          isCorrect: false
        },
        {
          answer: 'b) 2 litry',
          isCorrect: true
        },
        {
          answer: 'c) 3 filtry',
          isCorrect: false
        },
        {
          answer: 'd) 4 filtry',
          isCorrect: false
        }
      ]
    },
    {
      question: '266. Za bezpieczną pracę pilarką odpowiada:',
      answers: [
        {
          answer: 'a) segment napinający',
          isCorrect: false
        },
        {
          answer: 'b) prowadnica',
          isCorrect: false
        },
        {
          answer: 'c) wychwyt łańcucha',
          isCorrect: true
        },
        {
          answer: 'd) zębatka oporowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '267. Jakiej wielkości powinien być wlot ssawny w autopompie:',
      answers: [
        {
          answer: 'a) średnica 110',
          isCorrect: true
        },
        {
          answer: 'b) średnica 75',
          isCorrect: false
        },
        {
          answer: 'c) średnica 52',
          isCorrect: false
        },
        {
          answer: 'd) średnica 150',
          isCorrect: false
        }
      ]
    },
    {
      question: '268. Dowódca Zastępu z PSP powinien posiadać hełm:',
      answers: [
        {
          answer: 'a) koloru czerwonego ze srebrnym otokiem',
          isCorrect: false
        },
        {
          answer: 'b) koloru czerwonego z brązowym otokiem',
          isCorrect: true
        },
        {
          answer: 'c) koloru białego z brązowym otokiem',
          isCorrect: false
        }
      ]
    },
    {
      question: '269. KDR poziomu interwencyjnego powinien być oznakowany kamizelką taktyczną:',
      answers: [
        {
          answer: 'a) biało – brązową',
          isCorrect: false
        },
        {
          answer: 'b) biało – zieloną',
          isCorrect: false
        },
        {
          answer: 'c) biało – niebieską',
          isCorrect: true
        }
      ]
    },
    {
      question: '270. KDR poziomu taktycznego powinien być oznakowany kamizelką taktyczną:',
      answers: [
        {
          answer: 'a) biało – brązową',
          isCorrect: false
        },
        {
          answer: 'b) biało – zieloną',
          isCorrect: true
        },
        {
          answer: 'c) biało – niebieską',
          isCorrect: false
        }
      ]
    },
    {
      question: '271. KDR poziomu strategicznego powinien być oznakowany kamizelką taktyczną:',
      answers: [
        {
          answer: 'a) biało – brązową',
          isCorrect: true
        },
        {
          answer: 'b) biało – zieloną',
          isCorrect: false
        },
        {
          answer: 'c) biało – niebieską',
          isCorrect: false
        }
      ]
    },
    {
      question: '272. Do środków ochrony indywidualnej strażaka zaliczamy:',
      answers: [
        {
          answer: 'a) hełm, buty strażackie, ubranie specjalne, rękawice specjalne kominiarkę',
          isCorrect: true
        },
        {
          answer: 'b) toporek, szelki ratownicze lub pas strażacki, zatrzaśnik',
          isCorrect: false
        },
        {
          answer: 'c) ubranie i buty koszarowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '273. Czy kamera termowizyjna znajdzie zastosowanie podczas:',
      answers: [
        {
          answer: 'a) działania poszukiwawcze osób zaginionych i zasypanych',
          isCorrect: false
        },
        {
          answer: 'b) w działaniach z zakresu ratownictwa chemicznego',
          isCorrect: false
        },
        {
          answer: 'c) podczas pożarów ukrytych',
          isCorrect: false
        },
        {
          answer: 'd) wszystkie powyższe są prawidłowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '274. Po przybyciu na miejsce zdarzenia kierowca pojazdu pożarniczego:',
      answers: [
        {
          answer: 'a) powinien wyłączyć silnik pojazdu',
          isCorrect: false
        },
        {
          answer: 'b) wedle uznania, może wyłączyć silnik lub nie',
          isCorrect: false
        },
        {
          answer: 'c) powinien mieć włączone w pojeździe niebieskie światła błyskowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '275. W przypadku prowadzenia akcji ratowniczej w obrębie drogi publicznej pojazdy ratownicze powinny mieć:',
      answers: [
        {
          answer: 'a) włączone tylko pełne oświetlenie zewnętrzne',
          isCorrect: false
        },
        {
          answer: 'b) włączone pełne oświetlenie zewnętrzne i światła ostrzegawcze',
          isCorrect: true
        },
        {
          answer: 'c) włączone tylko światła ostrzegawcze',
          isCorrect: false
        }
      ]
    },
    {
      question: '276. Podczas jazdy do pożaru (w ruchu uprzywilejowanym) dowódca ma prawo:',
      answers: [
        {
          answer: 'a) żądać zwiększenia prędkości',
          isCorrect: false
        },
        {
          answer: 'b) nakazania zmniejszenia prędkości',
          isCorrect: true
        },
        {
          answer: 'c) decydować o prędkości pojazdu (zmniejszyć lub zwiększyć prędkość)',
          isCorrect: false
        }
      ]
    },
    {
      question: '277. Czy samochód pożarniczy jadący do zdarzenia bez sprawnego sygnału dźwiękowego jest traktowany jako uprzywilejowany w ruchu ?',
      answers: [
        {
          answer: 'a) zawsze',
          isCorrect: false
        },
        {
          answer: 'b) w wyjątkowych przypadkach',
          isCorrect: false
        },
        {
          answer: 'c) nie jest traktowany jako pojazd uprzywilejowany',
          isCorrect: true
        }
      ]
    },
    {
      question: '278. Czy kierowca pojazdu uprzywilejowanego udającego się do zdarzenia ma obowiązek jazdy w hełmie:',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        },
        {
          answer: 'c) tak tylko podczas występowania niekorzystnych warunków drogowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '279. Pojazdem uprzywilejowanym jest pojazd:',
      answers: [
        {
          answer: 'a) wysyłający sygnały świetlne w postaci niebieskich świateł błyskowych i jednocześnie sygnały dźwiękowe o zmiennym tonie, jadący z włączonymi światłami mijania lub drogowymi',
          isCorrect: true
        },
        {
          answer: 'b) wysyłający sygnały świetlne w postaci niebieskich świateł błyskowych i jednocześnie sygnały dźwiękowe o zmiennym tonie',
          isCorrect: false
        },
        {
          answer: 'c) wysyłający sygnały świetlne w postaci niebieskich świateł błyskowych, jadący z włączonymi światłami mijania lub drogowymi',
          isCorrect: false
        }
      ]
    },
    {
      question: '280. Kolumna pojazdów uprzywilejowanych oznakowana jest:',
      answers: [
        {
          answer: 'a) nie wymagane jest dodatkowe oznakowanie, poza obowiązującym dla samochodów uprzywilejowanych',
          isCorrect: false
        },
        {
          answer: 'b) światłem błyskowym czerwonym tylko na początku kolumny',
          isCorrect: false
        },
        {
          answer: 'c) dodatkowym światłem błyskowym czerwonym na początku i końcu kolumny',
          isCorrect: true
        }
      ]
    },
    {
      question: '281. Kierowca ma obowiązek na polecenie dowódcy:',
      answers: [
        {
          answer: 'a) zwiększyć prędkość jazdy',
          isCorrect: false
        },
        {
          answer: 'b) zmniejszyć prędkość jazdy',
          isCorrect: true
        },
        {
          answer: 'c) zignorować polecenia dowódcy w tym zakresie',
          isCorrect: false
        }
      ]
    },
    {
      question: '282. Czy dowódca zastępu (sekcji) może nakazać kierowcy samochodu pożarniczego podczas jazdy alarmowej do zdarzenia szybszą jazdę:',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        },
        {
          answer: 'c) tylko wtedy kiedy istnieje poważne zagrożenie życia lub mienia znacznej wartości',
          isCorrect: false
        }
      ]
    },
    {
      question: '283. Za stan techniczny i sprawność samochodu pożarniczego, który powrócił z akcji odpowiedzialny jest:',
      answers: [
        {
          answer: 'a) kierowca',
          isCorrect: true
        },
        {
          answer: 'b) dowódca',
          isCorrect: false
        },
        {
          answer: 'c) konserwator',
          isCorrect: false
        }
      ]
    },
    {
      question: '284. Za skutki nieprzestrzegania przepisów Prawa o ruchu drogowym przez samochód uprzywilejowany ponosi odpowiedzialność:',
      answers: [
        {
          answer: 'a) dowódca',
          isCorrect: false
        },
        {
          answer: 'b) osoba prowadząca pojazd uprzywilejowany',
          isCorrect: true
        },
        {
          answer: 'c) inny kierowca lub użytkownik drogi',
          isCorrect: false
        }
      ]
    },
    {
      question: '285. Podczas jazdy w kolumnie należy zachować odległość:',
      answers: [
        {
          answer: 'a) 10 m',
          isCorrect: false
        },
        {
          answer: 'b) 30 m',
          isCorrect: false
        },
        {
          answer: 'c) bezpieczną dostosowaną do prędkości i warunków drogowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '286. Czy kierowca jadący alarmowo do akcji samochodem uprzywilejowanym może przejechać skrzyżowanie na czerwonym świetle:',
      answers: [
        {
          answer: 'a) może - pod warunkiem zachowania szczególnej ostrożności',
          isCorrect: true
        },
        {
          answer: 'b) nie może',
          isCorrect: false
        },
        {
          answer: 'c) może - bez względu na znaki wydawane przez kierującego ruchem drogowym na skrzyżowaniu',
          isCorrect: false
        }
      ]
    },
    {
      question: '287. Kierujący pojazdem uprzywilejowanym ma prawo nie stosować się do obowiązujących przepisów prawa o ruchu drogowym, pod warunkiem zachowania szczególnej ostrożności tylko gdy:',
      answers: [
        {
          answer: 'a) pojazd uczestniczy w akcji ratowniczej ma włączone: światła drogowe lub mijania, światła niebieskie błyskowe, sygnały dźwiękowe o zmiennym tonie',
          isCorrect: true
        },
        {
          answer: 'b) ma włączone: światła drogowe lub mijania, światła niebieskie błyskowe, sygnały dźwiękowe o zmiennym tonie',
          isCorrect: false
        },
        {
          answer: 'c) ma włączone światła niebieskie błyskowe, sygnały dźwiękowe o zmiennym tonie',
          isCorrect: false
        }
      ]
    },
    {
      question: '288. Po dojechaniu na miejsce wypadku drogowego kierujący powinien ustawić samochód:',
      answers: [
        {
          answer: 'a) w sposób zapewniający bezpieczeństwo podczas prowadzenia akcji',
          isCorrect: true
        },
        {
          answer: 'b) w miejscu wyznaczonym przez policjanta',
          isCorrect: false
        },
        {
          answer: 'c) w miejscu wybranym przez siebie',
          isCorrect: false
        }
      ]
    },
    {
      question: '289. Po dojeździe na miejsce zdarzenia mającego miejsce na jezdni, załoga wychodzi z kabiny:',
      answers: [
        {
          answer: 'a) drzwiami na stronę jezdni',
          isCorrect: false
        },
        {
          answer: 'b) drzwiami na stronę pobocza',
          isCorrect: true
        },
        {
          answer: 'c) nie ma znaczenia, w którą stronę',
          isCorrect: false
        }
      ]
    },
    {
      question: '290. Na skrzyżowaniu dróg równorzędnych spotykają się dwa pojazdy uprzywilejowane: Policja i Straż Pożarna. Który z wymienionych pojazdów ma pierwszeństwo:',
      answers: [
        {
          answer: 'a) Straż Pożarna',
          isCorrect: false
        },
        {
          answer: 'b) Policja',
          isCorrect: false
        },
        {
          answer: 'c) pojazd nadjeżdżający z prawej strony',
          isCorrect: true
        }
      ]
    },
    {
      question: '291. Po ogłoszeniu alarmu kierowca może wyjechać z garażu:',
      answers: [
        {
          answer: 'a) natychmiast, gdy zajmie miejsce w kabinie',
          isCorrect: false
        },
        {
          answer: 'b) gdy cała załoga jest w pojeździe',
          isCorrect: false
        },
        {
          answer: 'c) na polecenie dowódcy – „odjazd”',
          isCorrect: true
        }
      ]
    },
    {
      question: '292. Za mocowanie sprzętu na samochodzie odpowiada:',
      answers: [
        {
          answer: 'a) dowódca sekcji',
          isCorrect: false
        },
        {
          answer: 'b) dowódca zastępu',
          isCorrect: false
        },
        {
          answer: 'c) kierowca',
          isCorrect: true
        }
      ]
    },
    {
      question: '293. Podczas jazdy do zdarzenia nocą przez teren zabudowany sygnały dźwiękowe należy:',
      answers: [
        {
          answer: 'a) wyłączyć, ponieważ zakłócamy ciszę nocną',
          isCorrect: false
        },
        {
          answer: 'b) nie wyłączać',
          isCorrect: true
        },
        {
          answer: 'c) jest to obojętne – zależne od umiejętności kierowcy',
          isCorrect: false
        }
      ]
    },
    {
      question: '294. Po akcji ratowniczo – gaśniczej należy:',
      answers: [
        {
          answer: 'a) uzupełnić wodę w zbiorniku',
          isCorrect: true
        },
        {
          answer: 'b) sprawdzić stan ogumienia',
          isCorrect: false
        },
        {
          answer: 'c) sprawdzić luzy w układzie kierowniczym',
          isCorrect: false
        }
      ]
    },
    {
      question: '295. Po podaniu wody gaśniczej w linię gaśniczą operator-kierowca powinien:',
      answers: [
        {
          answer: 'a) podawać prąd wodny prądownicą',
          isCorrect: false
        },
        {
          answer: 'b) nadzorować linię gaśniczą',
          isCorrect: false
        },
        {
          answer: 'c) stale nadzorować pracę sprzętu silnikowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '296. Definicją pożaru jest:',
      answers: [
        {
          answer: 'a) Wystąpienie procesu spalania powodujące zagrożenie dla otoczenia',
          isCorrect: false
        },
        {
          answer: 'b) Niekontrolowany proces palenia w miejscu do tego nie przeznaczonym',
          isCorrect: true
        },
        {
          answer: 'c) Każde zjawisko palenia budzące niepokój społeczeństwa, powodujące wezwanie jednostek ochrony przeciwpożarowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '297. Spalanie cieczy palnych gazów i ciał stałych, które w wyniku ogrzewania wytwarzają palną fazę lotną określamy jako:',
      answers: [
        {
          answer: 'a) żarzenie',
          isCorrect: false
        },
        {
          answer: 'b) spalanie bezpłomieniowe',
          isCorrect: false
        },
        {
          answer: 'c) spalanie płomieniowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '298. Czynnikami niezbędnymi do rozpoczęcia procesu spalania są:',
      answers: [
        {
          answer: 'a) materiał palny, utleniacz, bodziec energetyczny',
          isCorrect: true
        },
        {
          answer: 'b) tylko materiał palny i utleniacz',
          isCorrect: false
        },
        {
          answer: 'c) tylko materiał palny i bodziec energetyczny o odpowiedniej mocy',
          isCorrect: false
        }
      ]
    },
    {
      question: '299. Sporządzając informację z pożaru traw o powierzchni 110 ha, zakwalifikujesz ten pożar jako:',
      answers: [
        {
          answer: 'a) Bardzo duży',
          isCorrect: true
        },
        {
          answer: 'b) Duży',
          isCorrect: false
        },
        {
          answer: 'c) Średni',
          isCorrect: false
        },
        {
          answer: 'd) Mały',
          isCorrect: false
        }
      ]
    },
    {
      question: '300. Pożar podpowierzchniowy występuje:',
      answers: [
        {
          answer: 'a) Na kondygnacjach podziemnych obiektów budowlanych',
          isCorrect: false
        },
        {
          answer: 'b) W głębszych warstwach gruntowych, najczęściej na terenach łąk i lasów',
          isCorrect: true
        },
        {
          answer: 'c) W każdym przypadku, gdy źródło ognia znajduje się poniżej poziomu gruntu',
          isCorrect: false
        }
      ]
    },
    {
      question: '301. Które z poniższych rodzajów pożarów zaliczamy w całości do pożarów leśnych:',
      answers: [
        {
          answer: 'a) podpowierzchniowe pokrywy gleby całkowitego drzewostanu',
          isCorrect: true
        },
        {
          answer: 'b) podpowierzchniowe wewnętrzne podszytów',
          isCorrect: false
        },
        {
          answer: 'c) podrostów składów drewna drzewostanu',
          isCorrect: false
        }
      ]
    },
    {
      question: '302. Podczas pożaru pokrywy gleby i podszytów w lasach przeciętna prędkość rozprzestrzeniania się frontu pożaru wynosi',
      answers: [
        {
          answer: 'a) 1-5 m/s',
          isCorrect: false
        },
        {
          answer: 'b) 1-5 m/min',
          isCorrect: true
        },
        {
          answer: 'c) 5-10 m/min',
          isCorrect: false
        }
      ]
    },
    {
      question: '303. Podczas pożarów w lasach front przesuwa się w kierunku:',
      answers: [
        {
          answer: 'a) Zgodnym z kierunkiem wiatru, zależnie od prędkości wiatru',
          isCorrect: true
        },
        {
          answer: 'b) Zawsze równomiernie w każdym kierunku',
          isCorrect: false
        },
        {
          answer: 'c) Zależnym od rodzaju drzewostanu',
          isCorrect: false
        }
      ]
    },
    {
      question: '304. Podczas pożaru wierzchołkowego w lasach średnia prędkość rozprzestrzeniania się frontu pożaru wynosi:',
      answers: [
        {
          answer: 'a) 5-10 m / min',
          isCorrect: false
        },
        {
          answer: 'b) 10-40 m / min',
          isCorrect: false
        },
        {
          answer: 'c) 40-100 m /min',
          isCorrect: true
        }
      ]
    },
    {
      question: '305. Najgroźniejszym i najbardziej niebezpiecznym pożarem lasu jest pożar:',
      answers: [
        {
          answer: 'a) całkowity drzewostanu',
          isCorrect: true
        },
        {
          answer: 'b) podszytów',
          isCorrect: false
        },
        {
          answer: 'c) pokrywy gleby',
          isCorrect: false
        }
      ]
    },
    {
      question: '306. Temperatura płomieni przy pożarze składowiska cieczy ropopochodnych wynosi ok.:',
      answers: [
        {
          answer: 'a) 700-800st. C',
          isCorrect: false
        },
        {
          answer: 'b) 1100-1300st. C',
          isCorrect: true
        },
        {
          answer: 'c) 2000-2200st. C',
          isCorrect: false
        }
      ]
    },
    {
      question: '307. Pożary wewnętrzne dzielimy na:',
      answers: [
        {
          answer: 'a) pojedyncze i wielokondygnacyjne',
          isCorrect: false
        },
        {
          answer: 'b) ukryte i otwarte',
          isCorrect: true
        },
        {
          answer: 'c) parterowe i piętrowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '308. Pożar średni to pożar:',
      answers: [
        {
          answer: 'a) instalacji technologicznej, przy którym podano 17 prądów gaśniczych',
          isCorrect: false
        },
        {
          answer: 'b) w wyniku którego spaleniu uległo część obiektu o kubaturze 420 m good3',
          isCorrect: true
        },
        {
          answer: 'c) w wyniku którego spaleniu uległ obiekt o powierzchni 380 m2',
          isCorrect: false
        }
      ]
    },
    {
      question: '309. Który z niżej podanych pożarów zakwalifikujesz jako duży:',
      answers: [
        {
          answer: 'a) lasów, upraw, traw, torfowisk lub nieużytków o powierzchni ponad 100 ha',
          isCorrect: false
        },
        {
          answer: 'b) odwiertu gazu ziemnego, gdy podczas działań podano 10 prądów gaśniczych',
          isCorrect: false
        },
        {
          answer: 'c) składowiska opon o powierzchni 700 m good2',
          isCorrect: true
        }
      ]
    },
    {
      question: '310. W trakcie akcji gaśniczej podczas pożaru lasu podano 13 prądów gaśniczych. Jaką wielkość pożaru wpiszesz do informacji ze zdarzenia?',
      answers: [
        {
          answer: 'a) Duży',
          isCorrect: false
        },
        {
          answer: 'b) Bardzo duży',
          isCorrect: false
        },
        {
          answer: 'c) Zależy jaka była powierzchnia pożaru',
          isCorrect: true
        }
      ]
    },
    {
      question: '311. Likwidując pożar, którego powierzchnia lub kubatura nie byłą cechą odzwierciedlającą skalę działań gaśniczych, podano 13 prądów gaśniczych. Jaką wielkość pożaru wpiszesz do informacji ze zdarzenia?',
      answers: [
        {
          answer: 'a) Średni',
          isCorrect: false
        },
        {
          answer: 'b) Duży',
          isCorrect: true
        },
        {
          answer: 'c) Bardzo duży',
          isCorrect: false
        }
      ]
    },
    {
      question: '312. Po zakończonych działaniach gaśniczych stwierdziłeś, że pożarem objęte było 70m² powierzchni oraz 355m³ jego kubatury. Podczas sporządzania informacji ze zdarzenia zdarzenie to zaznaczysz jako pożar:',
      answers: [
        {
          answer: 'a) mały',
          isCorrect: false
        },
        {
          answer: 'b) średni',
          isCorrect: true
        },
        {
          answer: 'c) duży',
          isCorrect: false
        },
        {
          answer: 'd) bardzo duży',
          isCorrect: false
        }
      ]
    },
    {
      question: '313. Pożar obejmujący kilka kondygnacji jednego obiektu lub pożar zespołu obiektów to:',
      answers: [
        {
          answer: 'a) Pożar otwarty',
          isCorrect: false
        },
        {
          answer: 'b) Pożar blokowy',
          isCorrect: true
        },
        {
          answer: 'c) Pożar przestrzenny',
          isCorrect: false
        }
      ]
    },
    {
      question: '314. Inicjowanie procesu spalania to:',
      answers: [
        {
          answer: 'a) podpalenie',
          isCorrect: false
        },
        {
          answer: 'b) zapalenie',
          isCorrect: true
        },
        {
          answer: 'c) utlenianie',
          isCorrect: false
        }
      ]
    },
    {
      question: '315. W modelowym rozwoju pożaru w pomieszczeniu zamkniętym zjawisko rozgorzenia występuje:',
      answers: [
        {
          answer: 'a) w fazie drugiej',
          isCorrect: false
        },
        {
          answer: 'b) na granicy fazy pierwszej i drugiej',
          isCorrect: true
        },
        {
          answer: 'c) na granicy fazy drugiej i trzeciej',
          isCorrect: false
        }
      ]
    },
    {
      question: '316. Nagłe rozprzestrzenienie się pożaru poprzez nie spalone pary i gazy palne zebrane pod sufitem, któremu towarzyszą efekty akustyczne nazywamy:',
      answers: [
        {
          answer: 'a) rozgorzeniem',
          isCorrect: true
        },
        {
          answer: 'b) burzą ogniową',
          isCorrect: false
        },
        {
          answer: 'c) wstecznym ciągiem płomieni',
          isCorrect: false
        }
      ]
    },
    {
      question: '317. Rozgorzeniem nie jest:',
      answers: [
        {
          answer: 'a) przejście od pożaru kontrolowanego przez paliwo do pożaru kontrolowanego przez wentylację',
          isCorrect: false
        },
        {
          answer: 'b) gwałtowne przejście pożaru z fazy I w fazę II',
          isCorrect: false
        },
        {
          answer: 'c) spalanie powierzchniowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '318. Które z poniższych stwierdzeń opisuje zjawisko rozgorzenia',
      answers: [
        {
          answer: 'a) cechą charakterystyczną jest to, że po wystąpieniu rozgorzenia pożar nie pozostaje w tym stanie',
          isCorrect: false
        },
        {
          answer: 'b) jest to przejście ze spalania miejscowego w spalanie przestrzenne',
          isCorrect: true
        },
        {
          answer: 'c) jest to zjawisko mogące wystąpić na granicy fazy II – pożaru w pełni rozwiniętego, a III fazy stygnięcia',
          isCorrect: false
        },
        {
          answer: 'd) przyrost temperatury jest proporcjonalny do czasu',
          isCorrect: false
        }
      ]
    },
    {
      question: '319. Przy pożarach lasów zjawisko rozgorzenia może wystąpić:',
      answers: [
        {
          answer: 'a) przy pożarach całkowitych drzewostanu',
          isCorrect: false
        },
        {
          answer: 'b) przy pożarach poszycia',
          isCorrect: false
        },
        {
          answer: 'c) jest ono niemożliwe',
          isCorrect: true
        }
      ]
    },
    {
      question: '320. Który z symptomów nie jest właściwy dla wstecznego ciągu płomieni:',
      answers: [
        {
          answer: 'a) deficyt tlenowy',
          isCorrect: false
        },
        {
          answer: 'b) deficyt palnych par i gazów w pomieszczeniu, w którym jest pożar',
          isCorrect: true
        },
        {
          answer: 'c) pulsujący okresowy charakter',
          isCorrect: false
        }
      ]
    },
    {
      question: '321. Warunki sprzyjające wystąpieniu zjawiska „ognistego podmuchu”',
      answers: [
        {
          answer: 'a) wysoka zawartość tlenu i obecność CO2',
          isCorrect: false
        },
        {
          answer: 'a) obecność CO i niska zawartość tlenu',
          isCorrect: true
        },
        {
          answer: 'b) niska zawartość tlenu i obecność CO2',
          isCorrect: false
        },
        {
          answer: 'c) obecność CO oraz brak bodźca energetycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '322. Temperatura pożaru wewnętrznego jest to:',
      answers: [
        {
          answer: 'a) uśredniona po objętości pomieszczenia objętego pożarem temperatura gazów pożarowych, wypełniających to pomieszczenie z wyłączeniem strefy spalania',
          isCorrect: true
        },
        {
          answer: 'b) temperatura płomienia mierzona w jego części górnej',
          isCorrect: false
        },
        {
          answer: 'c) temperatura strefy spalania mierzona u podstawy tej strefy',
          isCorrect: false
        }
      ]
    },
    {
      question: '323. Temperaturą pożaru zewnętrznego nazywamy:',
      answers: [
        {
          answer: 'a) uśrednioną po objętości temperaturę gazów pożarowych mierzoną w promieniu do 25 m od granicy strefy spalania',
          isCorrect: false
        },
        {
          answer: 'b) uśrednioną po objętości płomienia temperaturę strefy spalania',
          isCorrect: true
        },
        {
          answer: 'c) temperaturę gazów pożarowych mierzoną na granicy strefy spalania',
          isCorrect: false
        }
      ]
    },
    {
      question: '324. W trójfazowym modelu pożaru, pożar wewnętrzny osiąga najwyższą temperaturę w:',
      answers: [
        {
          answer: 'a) I fazie',
          isCorrect: false
        },
        {
          answer: 'b) II fazie',
          isCorrect: true
        },
        {
          answer: 'c) III fazie',
          isCorrect: false
        }
      ]
    },
    {
      question: '325. Liniowa prędkość rozprzestrzeniania się pożaru jest to:',
      answers: [
        {
          answer: 'a) prędkość przesuwania się frontu płomienia po powierzchni materiału palnego',
          isCorrect: true
        },
        {
          answer: 'b) prędkość, z jaką następuje ubytek masy paliwa ulegającemu spalaniu',
          isCorrect: false
        },
        {
          answer: 'c) szybkość, z jaką następuje powierzchniowe zwęglanie się materiału palnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '326. Czy stwierdzenie że „zjawisko konwekcji w środowisku pożarowym jest główną przyczyną pionowego transportu ciepła poprzez ogrzane gazy” jest:',
      answers: [
        {
          answer: 'a) prawdziwe',
          isCorrect: true
        },
        {
          answer: 'b) fałszywe',
          isCorrect: false
        }
      ]
    },
    {
      question: '327. Gwałtowne (chwilowe) spalanie mieszaniny gazowo – powietrznej połączone ze wzrostem ciśnienia to:',
      answers: [
        {
          answer: 'a) Detonacja',
          isCorrect: false
        },
        {
          answer: 'b) Wybuch fizyczny',
          isCorrect: false
        },
        {
          answer: 'c) Wybuch chemiczny',
          isCorrect: true
        }
      ]
    },
    {
      question: '328. Zapalenie się mieszaniny powietrzno – gazowej lub powietrzno – pyłowej to:',
      answers: [
        {
          answer: 'a) Podpalenie',
          isCorrect: false
        },
        {
          answer: 'b) Samozapalenie',
          isCorrect: false
        },
        {
          answer: 'c) Zapłon',
          isCorrect: true
        }
      ]
    },
    {
      question: '329. Które stwierdzenie jest prawdziwe:',
      answers: [
        {
          answer: 'a) Im niższe jest stężenie palnych gazów, par palnych cieczy, pyłów lub włókien palnych ciał stałych w powietrzu tym niższe jest prawdopodobieństwo wystąpienia wybuchu',
          isCorrect: false
        },
        {
          answer: 'b) Im wyższe stężenie palnych gazów, par palnych cieczy, pyłów lub włókien palnych ciał stałych w powietrzu tym wyższe jest prawdopodobieństwo wystąpienia wybuchu',
          isCorrect: false
        },
        {
          answer: 'c) Wybuch jest możliwy tylko w przedziale wybuchowości określonym przez dolną i górną granicą stężenia w powietrzu',
          isCorrect: true
        }
      ]
    },
    {
      question: '330. Czynnikami inicjującymi wybuch mogą być:',
      answers: [
        {
          answer: 'a) Tylko przedmioty o temperaturze wyższej niż temperatura zapłonu mieszaniny gazowo powietrznej',
          isCorrect: false
        },
        {
          answer: 'b) Tylko otwarty płomień iskra elektryczności statycznej i łuk elektryczny',
          isCorrect: false
        },
        {
          answer: 'c) Dowolne źródło o energii wyższej niż min. energia zapłonu',
          isCorrect: true
        }
      ]
    },
    {
      question: '331. Dolną granicę wybuchowości dla gazów wyraża się w:',
      answers: [
        {
          answer: 'a) g/m3 s-1',
          isCorrect: false
        },
        {
          answer: 'b) g/m2',
          isCorrect: false
        },
        {
          answer: 'c) procentach i g / m3',
          isCorrect: true
        },
        {
          answer: 'd) g/cm3',
          isCorrect: false
        }
      ]
    },
    {
      question: '332. W pożarze wewnętrznym w strefie oddziaływania cieplnego – podstawowym sposobem transportu energii cieplnej jest:',
      answers: [
        {
          answer: 'a) unoszenie',
          isCorrect: false
        },
        {
          answer: 'b) promieniowanie',
          isCorrect: true
        },
        {
          answer: 'c) przewodzenie',
          isCorrect: false
        }
      ]
    },
    {
      question: '333. W warunkach środowiska pożarowego transport ciepła poprzez przewodzenie ma zasadnicze znaczenie dla:',
      answers: [
        {
          answer: 'a) nagrzewania się gazów pożarowych',
          isCorrect: false
        },
        {
          answer: 'b) nagrzewania się elementów konstrukcyjnych obiektu',
          isCorrect: true
        },
        {
          answer: 'c) wzrostu liniowej prędkości rozprzestrzeniania się pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '334. Zjawisko kondukcji polega na:',
      answers: [
        {
          answer: 'a) Ogrzewaniu produktów spalania i ich unoszeniu',
          isCorrect: false
        },
        {
          answer: 'b) Przenoszeniu energii cieplnej przez materiały przewodzące ciepło',
          isCorrect: true
        },
        {
          answer: 'c) Uszkodzeniu warstw izolujących pod wpływem energii wytworzonej podczas pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '335. W warunkach pożaru zjawisko radiacji polega na:',
      answers: [
        {
          answer: 'a) Transportowaniu energii cieplnej przy wykorzystaniu pojemności cieplnej gazów i dymów pożarowych',
          isCorrect: false
        },
        {
          answer: 'b) Transportowaniu energii cieplnej w drodze promieniowania',
          isCorrect: true
        },
        {
          answer: 'c) Występuje jedynie w pożarach, podczas których doszło do rozszczelnienia źródeł promieniotwórczych',
          isCorrect: false
        }
      ]
    },
    {
      question: '336. Podczas pożaru w wyniku konwekcji:',
      answers: [
        {
          answer: 'a) Następuje rozszczelnienie okien i drzwi i wyparcie dymów z pomieszczenia',
          isCorrect: false
        },
        {
          answer: 'b) Następuje transport energii cieplnej ku górze i rozgrzanie stropów',
          isCorrect: true
        },
        {
          answer: 'c) Następuje podgrzewanie materiałów znajdujących się w strefie przypodłogowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '337. Rozwój pożaru to:',
      answers: [
        {
          answer: 'a) Przebieg pożaru do czasu podania pierwszego prądu gaśniczego',
          isCorrect: false
        },
        {
          answer: 'b) Sytuacja w której następuje intensyfikacja procesów związanych ze spalaniem',
          isCorrect: true
        },
        {
          answer: 'c) Zwiększanie powierzchni objętej pożarem',
          isCorrect: false
        }
      ]
    },
    {
      question: '338. Dla której z faz rozwoju pożaru charakterystycznym jest termiczny rozkład materiału palnego',
      answers: [
        {
          answer: 'a) Faza I - swobodny rozwój',
          isCorrect: true
        },
        {
          answer: 'b) Faza II - rozgorzenie',
          isCorrect: false
        },
        {
          answer: 'c) Faza III - spalanie pełne',
          isCorrect: false
        },
        {
          answer: 'd) Faza IV - wygasanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '339. Dla której z faz rozwoju pożaru charakterystycznym jest gwałtowny wzrost intensywności spalania:',
      answers: [
        {
          answer: 'a) swobodny rozwój',
          isCorrect: false
        },
        {
          answer: 'b) rozgorzenie',
          isCorrect: true
        },
        {
          answer: 'c) spalanie pełne',
          isCorrect: false
        },
        {
          answer: 'd) wygasanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '340. Podczas której z faz rozwoju pożaru działania gaśnicze są najbardziej efektywne:',
      answers: [
        {
          answer: 'a) swobodny rozwój',
          isCorrect: true
        },
        {
          answer: 'b) rozgorzenie',
          isCorrect: false
        },
        {
          answer: 'c) spalanie pełne',
          isCorrect: false
        },
        {
          answer: 'd) wygasanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '341. Rozprzestrzenianie się pożaru to:',
      answers: [
        {
          answer: 'a) Intensyfikacja procesów związanych ze spalaniem',
          isCorrect: false
        },
        {
          answer: 'b) Zwiększanie przez pożar powierzchni lub kubatury',
          isCorrect: true
        },
        {
          answer: 'c) Zwiększenie powierzchni zagrożonej w wyniku promieniowania cieplnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '342. Pojęcie lokalizacji pożaru odnosi się do:',
      answers: [
        {
          answer: 'a) Pojęcia rozwoju pożaru',
          isCorrect: false
        },
        {
          answer: 'b) Pojęcia rozprzestrzeniania się pożaru',
          isCorrect: true
        },
        {
          answer: 'c) Miejsca w którym dostrzeżono źródło pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '343. Liniową szybkość spalania zaliczamy do parametrów',
      answers: [
        {
          answer: 'a) Rozwoju pożaru',
          isCorrect: true
        },
        {
          answer: 'b) Lokalizacji pożaru',
          isCorrect: false
        },
        {
          answer: 'c) Rozprzestrzeniania się pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '344. Końcowy etap działań polegający na ostatecznym ugaszeniu pożaru i wykluczeniu możliwości jego wznowienia to:',
      answers: [
        {
          answer: 'a) likwidacja pożaru',
          isCorrect: true
        },
        {
          answer: 'b) lokalizacja pożaru',
          isCorrect: false
        },
        {
          answer: 'c) opanowanie pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '345. Wykipienie i wyrzut należą do charakterystycznych zjawisk towarzyszących pożarom zbiorników:',
      answers: [
        {
          answer: 'a) z alkoholami',
          isCorrect: false
        },
        {
          answer: 'b) z lekkimi węglowodorami',
          isCorrect: false
        },
        {
          answer: 'c) z mieszaninami różnych węglowodorów',
          isCorrect: true
        }
      ]
    },
    {
      question: '346. Wykipienie lub wyrzut cieczy może nastąpić w zbiorniku podczas pożaru:',
      answers: [
        {
          answer: 'a) mazutu',
          isCorrect: true
        },
        {
          answer: 'b) benzyny',
          isCorrect: false
        },
        {
          answer: 'c) alkoholu',
          isCorrect: false
        }
      ]
    },
    {
      question: '347. Reakcja egzotermiczna przebiega:',
      answers: [
        {
          answer: 'a) z wydzieleniem ciepła do otoczenia',
          isCorrect: true
        },
        {
          answer: 'b) z pobieraniem ciepła z otoczenia',
          isCorrect: false
        },
        {
          answer: 'c) ciepło reakcji nie ma związku z otoczeniem',
          isCorrect: false
        }
      ]
    },
    {
      question: '348. Do których z niżej wymienionych substancji odnosi się pojęcie BLEVE:',
      answers: [
        {
          answer: 'a) materiały wybuchowe',
          isCorrect: false
        },
        {
          answer: 'b) gazy skroplone',
          isCorrect: true
        },
        {
          answer: 'c) ropa naftowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '349. Które z poniższych zjawisk opisują oddziaływanie na otoczenie (skutki) po wybuchu BLEVE zbiornika LPG:',
      answers: [
        {
          answer: 'a) powstanie znikomo małej fali nadciśnienia, bardzo dużego promieniowania cieplnego wywołanego fire ball (kula ognia), odłamkowania fragmentów zbiornika oraz niewielkiego rozpryskiwania palącej się cieczy, ponieważ większość spaliła się w czasie wybuchu',
          isCorrect: false
        },
        {
          answer: 'b) powstanie fali nadciśnienia promieniowania cieplnego o znacznym natężeniu wywołanego fire ball (kula ognia), odłamkowania fragmentów zbiornika oraz rozpryskiwania palącej się cieczy wzniecającej lokalne pożary',
          isCorrect: true
        },
        {
          answer: 'c) tylko promieniowanie cieplne wywołanego fire ball (kula ognia), inne czynniki są znikomo małe i można je zaniedbać',
          isCorrect: false
        }
      ]
    },
    {
      question: '350. Kula ognista (Fireball) może powstać przy:',
      answers: [
        {
          answer: 'a) wyrzucie cieczy palnej',
          isCorrect: false
        },
        {
          answer: 'b) wykipieniu cieczy palnej',
          isCorrect: false
        },
        {
          answer: 'c) wybuchu wrzących par palnych cieczy (BLEVE)',
          isCorrect: true
        }
      ]
    },
    {
      question: '351. Pożar rozwijający się w przestrzeni zamkniętej z widzialnym ogniskiem to pożar:',
      answers: [
        {
          answer: 'a) wewnętrzny ukryty',
          isCorrect: false
        },
        {
          answer: 'b) wewnętrzny otwarty',
          isCorrect: true
        },
        {
          answer: 'c) zewnętrzny przestrzenny',
          isCorrect: false
        }
      ]
    },
    {
      question: '352. Pożar rozwijający się w przestrzeni zamkniętej z niewidzialnym ogniskiem to pożar:',
      answers: [
        {
          answer: 'a) wewnętrzny ukryty',
          isCorrect: true
        },
        {
          answer: 'b) wewnętrzny otwarty',
          isCorrect: false
        },
        {
          answer: 'c) zewnętrzny przestrzenny',
          isCorrect: false
        }
      ]
    },
    {
      question: '353. Krajowy system ratowniczo-gaśniczy zorganizowany jest na:',
      answers: [
        {
          answer: 'a) Jednym poziomie – poziomie centralnym',
          isCorrect: false
        },
        {
          answer: 'b) Dwóch poziomach – poziomie centralnym i wojewódzkim',
          isCorrect: false
        },
        {
          answer: 'c) Trzech poziomach - poziomie centralnym, wojewódzkim i powiatowym',
          isCorrect: true
        },
        {
          answer: 'd) Czterech poziomach - poziomie centralnym, wojewódzkim, powiatowym i gminnym',
          isCorrect: false
        }
      ]
    },
    {
      question: '354. Działaniami ratowniczymi nazywamy:',
      answers: [
        {
          answer: 'a) Każdą czynność podjętą w celu ochrony życia, zdrowia, mienia lub środowiska, a także likwidację przyczyn powstania pożaru, wystąpienia klęski żywiołowej lub innego miejscowego zagrożenia',
          isCorrect: false
        },
        {
          answer: 'b) Każdą czynność podjętą w celu ochrony życia, zdrowia, mienia lub środowiska, a także likwidację skutków pożaru, wystąpienia klęski żywiołowej lub innego miejscowego zagrożenia',
          isCorrect: false
        },
        {
          answer: 'c) Każdą czynność podjętą w celu ochrony życia, zdrowia, mienia lub środowiska przed nagłym zagrożeniem, a także likwidację skutków pożaru, wystąpienia klęski żywiołowej lub innego miejscowego zagrożenia',
          isCorrect: true
        }
      ]
    },
    {
      question: '355. Rota to:',
      answers: [
        {
          answer: 'a) Dwuosobowy zespół ratowników, wchodzący w skład zastępu lub specjalistycznej grupy ratowniczej',
          isCorrect: true
        },
        {
          answer: 'b) Każdy dwuosobowy zespół ratowników',
          isCorrect: false
        },
        {
          answer: 'c) Kierowca i ratownik',
          isCorrect: false
        }
      ]
    },
    {
      question: '356. Zastęp to:',
      answers: [
        {
          answer: 'a) zespół 3 do 6 ratowników wykonujący te same zadania ratownicze',
          isCorrect: false
        },
        {
          answer: 'b) pododdział taktyczny liczący od 3 do 6 ratowników',
          isCorrect: false
        },
        {
          answer: 'c) pododdział liczący od 3 do 6 ratowników, w tym dowódca wyposażony w pojazd przystosowany do realizacji zadania ratowniczego',
          isCorrect: true
        }
      ]
    },
    {
      question: '357. Sekcja to:',
      answers: [
        {
          answer: 'a) zespół 6 ratowników wyposażonych w samochód pożarniczy',
          isCorrect: false
        },
        {
          answer: 'b) pododdział w sile dwóch zastępów w tym dowódca',
          isCorrect: true
        },
        {
          answer: 'c) załoga dwóch samochodów gaśniczych niezależnie od ilości osób',
          isCorrect: false
        }
      ]
    },
    {
      question: '358. Pluton to:',
      answers: [
        {
          answer: 'a) Pododdział taktyczny liczący od 3 do 6 ratowników',
          isCorrect: false
        },
        {
          answer: 'b) Pododdział w sile dwóch zastępów liczący od 9 do 12 ratowników w tym dowódca',
          isCorrect: false
        },
        {
          answer: 'c) Pododdział w sile od trzech do czterech zastępów w tym dowódca',
          isCorrect: true
        }
      ]
    },
    {
      question: '359. Kompania to:',
      answers: [
        {
          answer: 'a) Pododdział w sile od ośmiu do szesnastu zastępów oraz dowódca',
          isCorrect: true
        },
        {
          answer: 'b) Oddział w sile od ośmiu do szesnastu zastępów oraz dowódca',
          isCorrect: false
        },
        {
          answer: 'c) Związek taktyczny w sile od ośmiu do szesnastu zastępów oraz dowódca',
          isCorrect: false
        }
      ]
    },
    {
      question: '360. Pododdział w sile od ośmiu do szesnastu zastępów oraz dowódca to:',
      answers: [
        {
          answer: 'a) Brygada',
          isCorrect: false
        },
        {
          answer: 'b) Batalion',
          isCorrect: false
        },
        {
          answer: 'c) Kompania',
          isCorrect: true
        }
      ]
    },
    {
      question: '361. Batalion to:',
      answers: [
        {
          answer: 'a) Pododdział',
          isCorrect: false
        },
        {
          answer: 'b) Oddział',
          isCorrect: true
        },
        {
          answer: 'c) Związek taktyczny',
          isCorrect: false
        }
      ]
    },
    {
      question: '362. Związek pododdziałów i oddziałów oraz dowódca i sztab to:',
      answers: [
        {
          answer: 'a) Kompania',
          isCorrect: false
        },
        {
          answer: 'b) Batalion',
          isCorrect: false
        },
        {
          answer: 'c) Brygada',
          isCorrect: true
        }
      ]
    },
    {
      question: '363. W skład kompanii wchodzi:',
      answers: [
        {
          answer: 'a) Od 6 do 9 zastępów',
          isCorrect: false
        },
        {
          answer: 'b) Od 8 do 16 zastępów',
          isCorrect: true
        },
        {
          answer: 'c) Od 10 do 15 zastępów',
          isCorrect: false
        }
      ]
    },
    {
      question: '364. Osobę odpowiedzialną za organizację działań ratowniczo – gaśniczych nazywamy:',
      answers: [
        {
          answer: 'a) Dowódcą akcji ratowniczej',
          isCorrect: false
        },
        {
          answer: 'b) Kierującym akcją ratowniczą',
          isCorrect: false
        },
        {
          answer: 'c) Kierującym działaniami ratowniczymi',
          isCorrect: true
        },
        {
          answer: 'd) Dowódcą akcji ratowniczo – gaśniczej',
          isCorrect: false
        }
      ]
    },
    {
      question: '365. Kierowanie działaniami ratowniczymi rozpoczyna się z chwilą:',
      answers: [
        {
          answer: 'a) przybycia na miejsce zdarzenia pierwszych sił podmiotu krajowego systemu ratowniczo - gaśniczego',
          isCorrect: true
        },
        {
          answer: 'b) wydania pierwszego rozkazu bojowego przez dowódcę najniższego szczeble w ramach krajowego systemu ratowniczo gaśniczego',
          isCorrect: false
        },
        {
          answer: 'c) rozpoczęcia pierwszych działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'd) wyjazdu pierwszej jednostki z garażu',
          isCorrect: false
        }
      ]
    },
    {
      question: '366. Kierowanie działaniem ratowniczym realizowane jest przez:',
      answers: [
        {
          answer: 'a) sztab w przypadku, gdy siły przekraczają jedną kompanię',
          isCorrect: false
        },
        {
          answer: 'b) zawsze jednoosobowo bez względu na wielkość zdarzenia',
          isCorrect: true
        },
        {
          answer: 'c) kilku kierujących w zależności od typu kierowania',
          isCorrect: false
        }
      ]
    },
    {
      question: '367. Które z typów kierowania powinien być uruchomiony, gdy w działaniach ratowniczych biorą udział siły i środki powyżej jednej kompanii?',
      answers: [
        {
          answer: 'a) Interwencyjny i taktyczny',
          isCorrect: true
        },
        {
          answer: 'b) Interwencyjny taktyczny i strategiczny',
          isCorrect: false
        },
        {
          answer: 'c) Taktyczny',
          isCorrect: false
        },
        {
          answer: 'd) Taktyczny i strategiczny',
          isCorrect: false
        }
      ]
    },
    {
      question: '368. W przypadku, gdy w działaniach ratowniczych biorą udział siły przekraczające wielkością jeden batalion realizowane jest kierowanie:',
      answers: [
        {
          answer: 'a) interwencyjne',
          isCorrect: false
        },
        {
          answer: 'b) strategiczne',
          isCorrect: true
        },
        {
          answer: 'c) operacyjne',
          isCorrect: false
        }
      ]
    },
    {
      question: '369. Wskaż poprawny podział typów kierowania działaniami ratowniczymi:',
      answers: [
        {
          answer: 'a) interwencyjny, ratowniczy oraz gaśniczy',
          isCorrect: false
        },
        {
          answer: 'b) interwencyjny, taktyczny oraz strategiczny',
          isCorrect: true
        },
        {
          answer: 'c) podstawowy, szczególny oraz operacyjny',
          isCorrect: false
        }
      ]
    },
    {
      question: '370. Typ kierowania realizowany w strefie zagrożenia lub bezpośrednich działań ratowniczych to:',
      answers: [
        {
          answer: 'a) kierowanie strategiczne',
          isCorrect: false
        },
        {
          answer: 'b) kierowanie interwencyjne',
          isCorrect: true
        },
        {
          answer: 'c) kierowanie taktyczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '371. Analiza stanu i określenie konsekwencji, wynikających z rozwoju i rozprzestrzeniania się pożaru skutków katastrof bądź innych zagrożeń przez kierującego działaniami ratowniczymi po przeprowadzonym rozpoznaniu to:',
      answers: [
        {
          answer: 'a) Zamiar taktyczny',
          isCorrect: false
        },
        {
          answer: 'b) Ocena możliwości',
          isCorrect: false
        },
        {
          answer: 'c) Ocena sytuacji',
          isCorrect: true
        }
      ]
    },
    {
      question: '372. Schemat wypracowania rozkazu bojowego przedstawia:',
      answers: [
        {
          answer: 'a) rozpoznanie – podjęcie decyzji – ocena sytuacji – zamiar taktyczny – rozkaz bojowy',
          isCorrect: false
        },
        {
          answer: 'b) rozpoznanie – zamiar taktyczny – ocena sytuacji – podjęcie decyzji – rozkaz bojowy',
          isCorrect: false
        },
        {
          answer: 'c) rozpoznanie – ocena sytuacji – ocena własnych możliwości – zamiar taktyczny – podjęcie decyzji – rozkaz bojowy',
          isCorrect: true
        },
        {
          answer: 'd) rozpoznanie – ocena sytuacji – podjęcie decyzji – zamiar taktyczny – rozkaz bojowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '373. W myśl ustawy o ochronie przeciwpożarowej – kierujący działaniem ratowniczym ma prawo:',
      answers: [
        {
          answer: 'a) wstrzymać ruch drogowy oraz wprowadzić zakaz przebywania osób trzecich w rejonie działań ratowniczych',
          isCorrect: true
        },
        {
          answer: 'b) wprowadzić czasowo stan nadzwyczajny na obszarze prowadzonych działań w sytuacjach tego wymagających',
          isCorrect: false
        },
        {
          answer: 'c) odstąpić od prowadzenia działań ratowniczych w przypadku zaistnienia sytuacji zbyt dużego ryzyka utraty zdrowia lub życia przez strażaków',
          isCorrect: false
        }
      ]
    },
    {
      question: '374. Odstąpienie od zasad uznanych powszechnie za bezpieczne następuje tylko i wyłącznie gdy:',
      answers: [
        {
          answer: 'a) jest możliwe uratowanie mienia o bardzo dużej wartości',
          isCorrect: false
        },
        {
          answer: 'b) strażak jest zbyt daleko, aby wrócić po właściwy sprzęt',
          isCorrect: false
        },
        {
          answer: 'c) istnieje prawdopodobieństwo uratowania życia ludzkiego',
          isCorrect: true
        }
      ]
    },
    {
      question: '375. Uprawnieniem kierującego działaniem ratowniczym nie jest:',
      answers: [
        {
          answer: 'a) przejęcie ujęć wody niezbędnych do prowadzenia działań',
          isCorrect: false
        },
        {
          answer: 'b) wstrzymanie ruchu w komunikacji drogowej',
          isCorrect: false
        },
        {
          answer: 'c) wprowadzenie czasowo stanu nadzwyczajnego na obszarze prowadzonych działań w sytuacjach tego wymagających',
          isCorrect: true
        }
      ]
    },
    {
      question: '376. Teren pożaru to:',
      answers: [
        {
          answer: 'a) Obszar przez który biegną główne linie wężowe, ułożone między stanowiskiem wodnym a rozdzielaczem',
          isCorrect: false
        },
        {
          answer: 'b) Obszar pomiędzy rozdzielaczem a miejscem pożaru',
          isCorrect: false
        },
        {
          answer: 'c) Obszar na którym znajdują się pomieszczenia, budynki, lasy, a także inne obiekty palące się oraz zagrożone bezpośrednio i pośrednio',
          isCorrect: true
        }
      ]
    },
    {
      question: '377. Do elementów pożaru zaliczamy:',
      answers: [
        {
          answer: 'a) Front pożaru, bok pożaru, tył pożaru, oś pożaru',
          isCorrect: false
        },
        {
          answer: 'b) Front pożaru, tył pożaru, skrzydła pożaru, oś pożaru',
          isCorrect: true
        },
        {
          answer: 'c) Front pożaru, środek pożaru, tył pożaru, skrzydła pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '378. „Odcinek bojowy” jest to:',
      answers: [
        {
          answer: 'a) ściśle określona część terenu akcji, na której działają wydzielone siły pod wspólnym dowództwem',
          isCorrect: true
        },
        {
          answer: 'b) część obwodu pożaru, na której można prowadzić skuteczne działania jednym prądem gaśniczym',
          isCorrect: false
        },
        {
          answer: 'c) część terenu akcji, przez którą biegną linie główne',
          isCorrect: false
        }
      ]
    },
    {
      question: '379. Elementem pożaru nie jest:',
      answers: [
        {
          answer: 'a) odcinek bojowy',
          isCorrect: true
        },
        {
          answer: 'b) front pożaru',
          isCorrect: false
        },
        {
          answer: 'c) tył pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '380. Linia prostopadła do frontu pożaru i przechodząca przez teren pożaru, zgodnie z kierunkiem jego rozprzestrzeniania się to:',
      answers: [
        {
          answer: 'a) oś pożaru',
          isCorrect: true
        },
        {
          answer: 'b) środek pożaru',
          isCorrect: false
        },
        {
          answer: 'c) skrzydło pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '381. Pod względem taktycznym teren akcji gaśniczej można podzielić na:',
      answers: [
        {
          answer: 'a) Pozycję wodną, pozycję wężową, pozycję ogniową',
          isCorrect: true
        },
        {
          answer: 'b) Pozycję wodną, pozycję liniową, pozycję ogniową',
          isCorrect: false
        },
        {
          answer: 'c) Pozycję wodną, pozycję liniową, pozycję gaśniczą',
          isCorrect: false
        }
      ]
    },
    {
      question: '382. Pod pojęciem rozpoznania pożaru rozumiemy:',
      answers: [
        {
          answer: 'a) ocenę zniszczeń, które zostały dokonane przez pożar przed podjęciem czynności gaśniczych',
          isCorrect: false
        },
        {
          answer: 'b) działania prowadzące do uzyskania informacji o przebiegu pożaru i możliwości prowadzenia akcji gaśniczej',
          isCorrect: true
        },
        {
          answer: 'c) wykonywanie czynności zmierzających do ustalenia przybliżonego czasu rozwoju pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '383. Rozpoznanie sytuacji pożarowej dzielimy na rozpoznanie:',
      answers: [
        {
          answer: 'a) wstępne, końcowe, cząstkowe',
          isCorrect: false
        },
        {
          answer: 'b) wstępne, szczegółowe, bojem',
          isCorrect: true
        },
        {
          answer: 'c) pełne oraz niepełne',
          isCorrect: false
        }
      ]
    },
    {
      question: '384. Podczas prowadzenia rozpoznania pożaru w obiekcie najważniejszym elementem rozpoznania jest:',
      answers: [
        {
          answer: 'a) zagrożenie rozgorzeniem pożaru',
          isCorrect: false
        },
        {
          answer: 'b) zagrożenie życia ludzi',
          isCorrect: true
        },
        {
          answer: 'c) zagrożenie rozprzestrzenienia się pożaru na sąsiednie pomieszczenia/budynki',
          isCorrect: false
        },
        {
          answer: 'd) odszukanie źródła pożaru',
          isCorrect: false
        }
      ]
    },
    {
      question: '385. Rozpoznanie miejsca pożaru w budynku mieszkalnym rozpoczynamy od:',
      answers: [
        {
          answer: 'a) kondygnacji objętej pożarem',
          isCorrect: true
        },
        {
          answer: 'b) kondygnacji pod miejscem pożaru',
          isCorrect: false
        },
        {
          answer: 'c) kondygnacji nad miejscem pożaru',
          isCorrect: false
        },
        {
          answer: 'd) kondygnacji najwyższej',
          isCorrect: false
        }
      ]
    },
    {
      question: '386. Rozpoznanie wodne przeprowadza:',
      answers: [
        {
          answer: 'a) dowódca zastępu',
          isCorrect: false
        },
        {
          answer: 'b) rota I',
          isCorrect: false
        },
        {
          answer: 'c) rota II',
          isCorrect: true
        }
      ]
    },
    {
      question: '387. W skład patrolu rozpoznania podczas akcji, do której na miejsce akcji przybyły jednostki w sile przynajmniej 1 sekcji gaśniczej, wchodzi:',
      answers: [
        {
          answer: 'a) przodownik roty I i dowódca',
          isCorrect: false
        },
        {
          answer: 'b) przodownik roty II i dowódca',
          isCorrect: false
        },
        {
          answer: 'c) rota I i dowódca zastępu',
          isCorrect: true
        }
      ]
    },
    {
      question: '388. Strażacy zabierając ze sobą: stojak hydrantowy, klucz do hydrantów, łopatę, topór, latarkę udając się na rozpoznanie:',
      answers: [
        {
          answer: 'a) wstępne',
          isCorrect: false
        },
        {
          answer: 'b) wodne',
          isCorrect: true
        },
        {
          answer: 'c) szczegółowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '389. Rozpoznanie wstępne prowadzone jest:',
      answers: [
        {
          answer: 'a) do czasu uzyskania informacji niezbędnych do wydania rozkazu szczegółowego przez dowódcę',
          isCorrect: true
        },
        {
          answer: 'b) przez cały czas trwania akcji ratowniczo-gaśniczej',
          isCorrect: false
        },
        {
          answer: 'c) przez czas od 5 do 10 min od chwili przyjazdu na miejsce zdarzenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '390. Prawidłowe wyposażenie roty udającej się na rozpoznanie:',
      answers: [
        {
          answer: 'a) sprzęt ochrony dróg oddechowych, linka, podręczny sprzęt burzący (topór ciężki, łom), sprzęt oświetleniowy, podręczny sprzęt gaśniczy (gaśnica, hydronetka), środki łączności, sygnalizator bezruchu',
          isCorrect: true
        },
        {
          answer: 'b) sprzęt ochrony dróg oddechowych, podręczny sprzęt burzący (topór ciężki, łom), sprzęt oświetleniowy, podręczny sprzęt gaśniczy (gaśnica, hydronetka), środki łączności, sygnalizator bezruchu',
          isCorrect: false
        },
        {
          answer: 'c) sprzęt ochrony dróg oddechowych, linka, podręczny sprzęt burzący (topór ciężki, łom), rozdzielacz podręczny, sprzęt gaśniczy (gaśnica, hydronetka), środki łączności, sygnalizator bezruchu',
          isCorrect: false
        }
      ]
    },
    {
      question: '391. Forma rozpoznania polegająca na zbieraniu informacji z równoczesnym prowadzeniem działań to:',
      answers: [
        {
          answer: 'a) Rozpoznanie bojem',
          isCorrect: true
        },
        {
          answer: 'b) Rozpoznanie ogniowe',
          isCorrect: false
        },
        {
          answer: 'c) Rozpoznanie szczegółowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '392. Działanie prowadzące do uzyskania informacji o przebiegu pożaru i możliwości prowadzenia akcji gaśniczej to:',
      answers: [
        {
          answer: 'a) Rozpoznanie ratownicze',
          isCorrect: false
        },
        {
          answer: 'b) Rozpoznanie bojem',
          isCorrect: false
        },
        {
          answer: 'c) Rozpoznanie ogniowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '393. Działania prowadzące do uzyskania informacji o zasobach wodnych i możliwościach ich wykorzystania to:',
      answers: [
        {
          answer: 'a) Rozpoznanie bojem',
          isCorrect: false
        },
        {
          answer: 'b) Rozpoznanie wodne',
          isCorrect: true
        },
        {
          answer: 'c) Rozpoznanie logistyczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '394. W przypadku pożarów budynków mieszkalnych rozpoznanie pożaru prowadzić trzeba w patrolach minimum dwuosobowych, o ile dowódca nie rozkaże inaczej:',
      answers: [
        {
          answer: 'a) zasada ta powinna być zawsze przestrzegana',
          isCorrect: true
        },
        {
          answer: 'b) nie należy przywiązywać uwagi do tego typu ograniczeń, można wykonywać te czynności jednoosobowo',
          isCorrect: false
        },
        {
          answer: 'c) nie, jeśli wewnątrz pomieszczeń nie ma osób poszkodowanych',
          isCorrect: false
        }
      ]
    },
    {
      question: '395. Co z wymienionego sprzętu wchodzi w skład wyposażenie patrolu rozpoznania wodnego:',
      answers: [
        {
          answer: 'a) podręczny sprzęt gaśniczy',
          isCorrect: false
        },
        {
          answer: 'b) radiotelefon',
          isCorrect: true
        },
        {
          answer: 'c) kamera termowizyjna',
          isCorrect: false
        }
      ]
    },
    {
      question: '396. Podczas działań gaśniczych rozpoznanie wodne przeprowadza:',
      answers: [
        {
          answer: 'a) przodownik roty drugiej z pomocnikiem roty drugiej',
          isCorrect: true
        },
        {
          answer: 'b) przodownik roty drugiej z dowódcą zastępu',
          isCorrect: false
        },
        {
          answer: 'c) przodownik roty drugiej z kierowcą',
          isCorrect: false
        }
      ]
    },
    {
      question: '397. Pod pojęciem zamiaru taktycznego rozumieć powinniśmy:',
      answers: [
        {
          answer: 'a) określenie przez kierującego działaniami ratowniczymi sposobu osiągnięcia zamierzonego celu taktycznego',
          isCorrect: true
        },
        {
          answer: 'b) wyznaczenie przez kierującego akcją szczegółowych zadań do realizacji',
          isCorrect: false
        },
        {
          answer: 'c) koncepcję podziału terenu akcji na odcinki bojowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '398. Po przybyciu na miejsce pożaru, gdzie istnieje możliwość porażenia prądem elektrycznym:',
      answers: [
        {
          answer: 'a) możemy wyłączyć napięcie, korzystając z oznakowanego wyłącznika przeciwpożarowego',
          isCorrect: true
        },
        {
          answer: 'b) bezwzględnie musimy czekać na przybycie Pogotowia Energetycznego',
          isCorrect: false
        },
        {
          answer: 'c) możemy wyłączyć napięcie poprzez użycie wyłącznika głównego',
          isCorrect: false
        }
      ]
    },
    {
      question: '399. Podstawową formą prowadzenia działań ratowniczo – gaśniczych jest:',
      answers: [
        {
          answer: 'a) Natarcie',
          isCorrect: false
        },
        {
          answer: 'b) Obrona',
          isCorrect: false
        },
        {
          answer: 'c) Obie formy są podstawowe',
          isCorrect: true
        }
      ]
    },
    {
      question: '400. Które z poniższych zdań określa ogólną zasadę podawania wody w trakcie działań gaśniczych:',
      answers: [
        {
          answer: 'a) materiały sypkie, strzępiaste i włókniste gasimy prądem zwartym',
          isCorrect: false
        },
        {
          answer: 'b) przy gaszeniu powierzchni pionowych prąd kierujemy od dołu powierzchni ku górze',
          isCorrect: false
        },
        {
          answer: 'c) przy równoczesnej pracy wodą i pianą nie kierować wody w miejsca ułożenia piany',
          isCorrect: true
        }
      ]
    },
    {
      question: '401. Który z rodzajów natarć wymaga użycia największej ilości sił gaśniczych',
      answers: [
        {
          answer: 'a) natarcie frontalne',
          isCorrect: false
        },
        {
          answer: 'b) natarcie oskrzydlające',
          isCorrect: false
        },
        {
          answer: 'c) natarcie okrążające',
          isCorrect: true
        }
      ]
    },
    {
      question: '402. Czy przeprowadzenie rozpoznania pożaru jest warunkiem koniecznym do podjęcia skutecznych działań w natarciu:',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie',
          isCorrect: false
        }
      ]
    },
    {
      question: '403. Prowadzenie działań ratowniczo – gaśniczych w obronie polega na:',
      answers: [
        {
          answer: 'a) Użyciu środków gaśniczych dla zmniejszenia prędkości rozprzestrzeniania się pożaru',
          isCorrect: false
        },
        {
          answer: 'b) Gaszeniu zarzewi ognia na obiektach sąsiadujących z pożarem',
          isCorrect: false
        },
        {
          answer: 'c) Niedopuszczeniu do zapalenia się obiektów bezpośrednio lub pośrednio zagrożonych pożarem',
          isCorrect: true
        }
      ]
    },
    {
      question: '404. Obrona jest to:',
      answers: [
        {
          answer: 'a) Forma działania taktycznego, mająca na celu chwilowe ograniczenie rozprzestrzeniania się pożaru na jego froncie',
          isCorrect: false
        },
        {
          answer: 'b) Forma działania taktycznego, mająca na celu ograniczenie  rozprzestrzeniania się pożaru na jego froncie',
          isCorrect: false
        },
        {
          answer: 'c) Forma działania taktycznego, polegająca na oddziaływaniu określonymi środkami na obiekty zagrożone pożarem',
          isCorrect: true
        }
      ]
    },
    {
      question: '405. Działania skierowane na obiekty zagrożone bezpośrednio to obrona:',
      answers: [
        {
          answer: 'a) dalsza',
          isCorrect: false
        },
        {
          answer: 'b) bliższa',
          isCorrect: true
        },
        {
          answer: 'c) połączona',
          isCorrect: false
        }
      ]
    },
    {
      question: '406. Działania na obiekty zagrożone pośrednio z zadaniem niedopuszczenia do wytworzenia nowych ognisk pożaru to:',
      answers: [
        {
          answer: 'a) Asekuracja',
          isCorrect: false
        },
        {
          answer: 'b) Opóźnianie',
          isCorrect: false
        },
        {
          answer: 'c) Obrona dalsza',
          isCorrect: true
        }
      ]
    },
    {
      question: '407. Działania prowadzone na obiekty zagrożone bezpośrednio z zadaniem niedopuszczenia do rozprzestrzeniania się pożaru to:',
      answers: [
        {
          answer: 'a) obrona bliższa',
          isCorrect: true
        },
        {
          answer: 'b) obrona dalsza',
          isCorrect: false
        },
        {
          answer: 'c) osłona',
          isCorrect: false
        }
      ]
    },
    {
      question: '408. Pas przeciwpożarowy to',
      answers: [
        {
          answer: 'a) system drzewostanów różnej szerokości, poddanych specjalnym zabiegom gospodarczym i porządkowym',
          isCorrect: false
        },
        {
          answer: 'b) powierzchnia wylesiona i oczyszczona do warstwy mineralnej',
          isCorrect: false
        },
        {
          answer: 'c) Ściana pełna, oddzielająca obiekty zlokalizowane na obszarach leśnych',
          isCorrect: false
        },
        {
          answer: 'd) Rozwiązania wymienione w punktach „a” i „b” opisują różne rodzaje pasów przeciwpożarowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '409. Linia wężowa od hydrantu do pompy lub od pompy do kolejnej pompy to',
      answers: [
        {
          answer: 'a) Linia główna',
          isCorrect: false
        },
        {
          answer: 'b) Linia zasilająca',
          isCorrect: true
        },
        {
          answer: 'c) Magistrala wodna',
          isCorrect: false
        }
      ]
    },
    {
      question: '410. Linia wężowa od nasady tłocznej rozdzielacza pompy pożarniczej lub hydrantu zakończona prądownicą lub wytwornicą to:',
      answers: [
        {
          answer: 'a) Linia zasilająca',
          isCorrect: false
        },
        {
          answer: 'b) Linia główna',
          isCorrect: false
        },
        {
          answer: 'c) Linia gaśnicza',
          isCorrect: true
        }
      ]
    },
    {
      question: '411. Linia tłoczna od nasady pompy do nasady rozdzielacza:',
      answers: [
        {
          answer: 'a) Linia główna',
          isCorrect: true
        },
        {
          answer: 'b) Linia zasilająca',
          isCorrect: false
        },
        {
          answer: 'c) Linia gaśnicza',
          isCorrect: false
        }
      ]
    },
    {
      question: '412. Linie wężowe biegnące pionowo musza być mocowane do wytrzymałych elementów konstrukcyjnych. Do tego celu służy:',
      answers: [
        {
          answer: 'a) podpinka',
          isCorrect: true
        },
        {
          answer: 'b) zatrzaśnik',
          isCorrect: false
        },
        {
          answer: 'c) opaska wężowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '413. Miejsce pracy strażaka wyposażonego w linię gaśniczą zakończona prądownicą, który prowadzi działania gaśnicze nazywamy:',
      answers: [
        {
          answer: 'a) pozycją ogniową',
          isCorrect: false
        },
        {
          answer: 'b) stanowiskiem gaśniczym',
          isCorrect: true
        },
        {
          answer: 'c) stanowiskiem wysuniętym',
          isCorrect: false
        }
      ]
    },
    {
      question: '414. Nawodnienie linii gaśniczej i podanie wody następuje na wyraźną komendę:',
      answers: [
        {
          answer: 'a) dowódcy zastępu',
          isCorrect: false
        },
        {
          answer: 'b) dowódcy sekcji',
          isCorrect: false
        },
        {
          answer: 'c) prądownika',
          isCorrect: true
        }
      ]
    },
    {
      question: '415. Zdolność do podjęcia działań interwencyjnych w określonym czasie to:',
      answers: [
        {
          answer: 'a) gotowość operacyjna',
          isCorrect: true
        },
        {
          answer: 'b) dyspozycyjność',
          isCorrect: false
        },
        {
          answer: 'c) mobilność',
          isCorrect: false
        }
      ]
    },
    {
      question: '416. Wskaż czynniki decydujące o wyborze miejsca na stanowisko gaśnicze:',
      answers: [
        {
          answer: 'a) zapewnienie możliwości ewakuowania roty ze stanowiska gaśniczego oraz zapewnienie skutecznego operowania prądem gaśniczym w strefie pożaru',
          isCorrect: true
        },
        {
          answer: 'b) zapewnienie widzialności wzrokowej pomiędzy rotą na stanowisku a dowódcą',
          isCorrect: false
        },
        {
          answer: 'c) zapewnienie jak najkrótszej linii gaśniczej celem zmniejszenia strat ciśnienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '417. O wyborze miejsca ustawienia rozdzielacza decyduje:',
      answers: [
        {
          answer: 'a) przodownik roty I',
          isCorrect: false
        },
        {
          answer: 'b) dowódca zastępu',
          isCorrect: true
        },
        {
          answer: 'c) kierowca-mechanik',
          isCorrect: false
        }
      ]
    },
    {
      question: '418. W zastępie 6 osobowym hydrant obsługuje:',
      answers: [
        {
          answer: 'a) dowódca zastępu',
          isCorrect: false
        },
        {
          answer: 'b) przodownik roty pierwszej',
          isCorrect: false
        },
        {
          answer: 'c) przodownik roty drugiej',
          isCorrect: true
        }
      ]
    },
    {
      question: '419. Zastęp GBA 2/16 o 6 osobowej obsadzie prowadząc działania połączone, może podać maksymalnie:',
      answers: [
        {
          answer: 'a) Jeden prąd wody',
          isCorrect: false
        },
        {
          answer: 'b) Dwa prądy wody',
          isCorrect: false
        },
        {
          answer: 'c) Trzy prądy wody',
          isCorrect: true
        },
        {
          answer: 'd) Cztery prądy wody',
          isCorrect: false
        }
      ]
    },
    {
      question: '420. Zasięg taktyczny jest to:',
      answers: [
        {
          answer: 'a) Maksymalna odległość na jaką można podać środek gaśniczy z określonego urządzenia (prądownica, wytwornica, działko)',
          isCorrect: false
        },
        {
          answer: 'b) Odległość na jaką zastęp gaśniczy może podać określoną ilość prądów gaśniczych',
          isCorrect: true
        },
        {
          answer: 'c) Część obwodu pożaru, na której zastęp może prowadzić skuteczne działania gaśnicze',
          isCorrect: false
        },
        {
          answer: 'd) Maksymalna odległość na jaką można podać środek gaśniczy w głąb powierzchni objętej pożarem',
          isCorrect: false
        }
      ]
    },
    {
      question: '421. Uśredniona szerokość działania jednego stanowiska gaśniczego pracującego w natarciu wynosi:',
      answers: [
        {
          answer: 'a) 10 m',
          isCorrect: true
        },
        {
          answer: 'b) 15 m',
          isCorrect: false
        },
        {
          answer: 'c) 20 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '422. Pożary pokrywy gleby możemy zwalczać poprzez:',
      answers: [
        {
          answer: 'a) podawanie wody ze zwilżaczem i wykonanie pasa izolacyjnego',
          isCorrect: true
        },
        {
          answer: 'b) wypalanie i wykonywanie przerw ogniowych',
          isCorrect: false
        },
        {
          answer: 'c) wykonanie wykopu',
          isCorrect: false
        }
      ]
    },
    {
      question: '423. Podczas gaszenia pożaru wewnętrznego pomieszczenia podstawowym celem schłodzenia strefy podsufitowej jest:',
      answers: [
        {
          answer: 'a) Rozrzedzenie dymu i poprawa widoczności',
          isCorrect: false
        },
        {
          answer: 'b) Obniżenie temperatury – zapobieżenie zjawisku rozgorzenia',
          isCorrect: true
        },
        {
          answer: 'c) Spowolnienie procesu spalania i uniknięcie tzw. pułapki wodnej',
          isCorrect: false
        }
      ]
    },
    {
      question: '424. Podczas pożaru poddasza, strychu (bez okien i świetlików), gdy prowadzone są działania ratowniczo-gaśnicze w celu oddymienia, należy wykonać otwory oddymiające o wymiarach 1x1 m. Wykonać je należy:',
      answers: [
        {
          answer: 'a) w dolnej części dachu, skąd szczelinami wydobywa się dym',
          isCorrect: false
        },
        {
          answer: 'b) w górnej części dachu, tam gdzie jest największa kumulacja dymu',
          isCorrect: true
        },
        {
          answer: 'c) w każdym miejscu, nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '425. W czasie forsowania zamkniętych drzwi do pomieszczenia objętego pożarem należy:',
      answers: [
        {
          answer: 'a) podpierając nogą jak najszybciej je wyważyć i podać do pomieszczenia silny i zwarty prąd wody, w celu zbicia płomieni, co wpłynie na szybką lokalizację pożaru',
          isCorrect: false
        },
        {
          answer: 'b) dokonać oględzin, wyważyć je, zabezpieczając korzystać z osłony ścian, przyjąć jak najniższą pozycję z przygotowaną nawodnioną linią gaśniczą',
          isCorrect: true
        },
        {
          answer: 'c) stanąć na wprost drzwi i wyważyć je jak najszybciej, gdyż chodzi o życie zagrożonych ludzi',
          isCorrect: false
        }
      ]
    },
    {
      question: '426. Największą skuteczność gaśniczą wody uzyskujemy stosując:',
      answers: [
        {
          answer: 'a) Prąd zwarty',
          isCorrect: false
        },
        {
          answer: 'b) Prąd rozproszony mgłowy',
          isCorrect: true
        },
        {
          answer: 'c) Prąd zmienny',
          isCorrect: false
        }
      ]
    },
    {
      question: '427. Główną zaletą prądu mgłowego wody jest:',
      answers: [
        {
          answer: 'a) Zdolność do wiązania cząsteczek sadzy',
          isCorrect: false
        },
        {
          answer: 'b) Zdolność do przesiąkania przez materiał palny, wynikająca z małych rozmiarów kropel',
          isCorrect: false
        },
        {
          answer: 'c) Zdolność do szybkiego odbierania ciepła, wynikająca z rozwiniętej powierzchni parowania',
          isCorrect: true
        }
      ]
    },
    {
      question: '428. Główną wadą prądu mgłowego wody jest:',
      answers: [
        {
          answer: 'a) mała skuteczność zbijania płomieni',
          isCorrect: true
        },
        {
          answer: 'b) brak możliwości stosowania modyfikatorów środka gaśniczego',
          isCorrect: false
        },
        {
          answer: 'c) czułość na zanieczyszczenia wody z sieci hydrantowych i zbiorników naturalnych i wynikająca z tego zawodność prądownic',
          isCorrect: false
        }
      ]
    },
    {
      question: '429. Główną zaletą prądu zwartego wody jest:',
      answers: [
        {
          answer: 'a) Niski koszt prądownic',
          isCorrect: false
        },
        {
          answer: 'b) Duży zasięg rzutu środka i duża wydajność przepływu',
          isCorrect: true
        },
        {
          answer: 'c) Wysoka energia kinetyczna prądu gaśniczego, pozwalająca dotrzeć środkowi gaśniczemu w głąb niektórych materiałów palnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '430. Do gaszenia pożaru tunelu kablowego użyjesz:',
      answers: [
        {
          answer: 'a) piany ciężkiej',
          isCorrect: false
        },
        {
          answer: 'b) piany średniej',
          isCorrect: true
        },
        {
          answer: 'c) zwartego strumienia wody',
          isCorrect: false
        }
      ]
    },
    {
      question: '431. Brak widocznych symptomów skutecznego oddziaływania prądem gaśniczym w strefie pożaru (np. zmniejszanie intensywności spalania, spadek temperatury) jest oznaką:',
      answers: [
        {
          answer: 'a) Zbyt niskiej intensywności podawania środka gaśniczego',
          isCorrect: true
        },
        {
          answer: 'b) Złego doboru środka gaśniczego',
          isCorrect: false
        },
        {
          answer: 'c) Niedostatecznego stopnia rozproszenia środka gaśniczego',
          isCorrect: false
        },
        {
          answer: 'd) Zbyt niskiego ciśnienia podawania strumienia gaśniczego',
          isCorrect: false
        }
      ]
    },
    {
      question: '432. Pożar wewnętrzny komina gasimy poprzez:',
      answers: [
        {
          answer: 'a) Całkowite zalanie wodą',
          isCorrect: false
        },
        {
          answer: 'b) Całkowite wypełnienie pianą',
          isCorrect: false
        },
        {
          answer: 'c) Wygaszenie paleniska, przymknięcie klapek dozujących powietrze, wsypanie soli lub piasku do otworu komina, przykrycie komina sitem kominowym',
          isCorrect: true
        }
      ]
    },
    {
      question: '433. Podczas gaszenia cysterny paliwowej najskuteczniejszym działaniem jest:',
      answers: [
        {
          answer: 'a) Podanie rozproszonego prądu gaśniczego wody',
          isCorrect: false
        },
        {
          answer: 'b) Podanie prądu gaśniczego piany ciężkiej',
          isCorrect: true
        },
        {
          answer: 'c) Podanie prąd gaśniczego dwufazowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '434. Gasząc pożary na powierzchniach pionowych (ściany, przegrody itp.) prądy wody kierujemy',
      answers: [
        {
          answer: 'a) z góry na dół',
          isCorrect: true
        },
        {
          answer: 'b) z dołu do góry',
          isCorrect: false
        },
        {
          answer: 'c) tylko na dół',
          isCorrect: false
        }
      ]
    },
    {
      question: '435. Do gaszenia materiałów sypkich strzępiastych i włóknistych podamy wodę w postaci prądów gaśniczych:',
      answers: [
        {
          answer: 'a) kroplistych',
          isCorrect: true
        },
        {
          answer: 'b) zwartych',
          isCorrect: false
        },
        {
          answer: 'c) mgłowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '436. Gasząc pianą gaśniczą plamę olejową – prąd gaśniczy kierujemy:',
      answers: [
        {
          answer: 'a) od środka do zewnątrz, ale tylko w przypadku piany ciężkiej',
          isCorrect: false
        },
        {
          answer: 'b) od zewnątrz do środka',
          isCorrect: true
        },
        {
          answer: 'c) jednocześnie na całą powierzchnię plamy',
          isCorrect: false
        }
      ]
    },
    {
      question: '437. Podczas którego z niżej wymienionych pożarów nie należy stosować jako środka gaśniczego wody:',
      answers: [
        {
          answer: 'a) Archiwów',
          isCorrect: true
        },
        {
          answer: 'b) Składowisk węgla',
          isCorrect: false
        },
        {
          answer: 'c) Mieszkań',
          isCorrect: false
        }
      ]
    },
    {
      question: '438. Podczas akcji ratowniczo-gaśniczej na otwartej przestrzeni operując prądem gaśniczym z kosza drabiny mechanicznej strażak musi używać sprzętu ochrony dróg oddechowych:',
      answers: [
        {
          answer: 'a) Zawsze',
          isCorrect: true
        },
        {
          answer: 'b) Konieczność taka uzależniona jest od sytuacji pożarowej',
          isCorrect: false
        },
        {
          answer: 'c) Nie jest wymagane zabezpieczenie sprzętem ODO jako warunek konieczny',
          isCorrect: false
        }
      ]
    },
    {
      question: '439. Podczas pożaru stolarni, w której występuje pył drzewny wprowadza się prądy gaśnicze:',
      answers: [
        {
          answer: 'a) Wody zwarte',
          isCorrect: false
        },
        {
          answer: 'b) Wody rozproszone / mgłowe',
          isCorrect: true
        },
        {
          answer: 'c) Proszku',
          isCorrect: false
        }
      ]
    },
    {
      question: '440. Podczas ustawiania drabiny w czasie działań należy ją tak opierać aby:',
      answers: [
        {
          answer: 'a) co najmniej jeden szczebel wystawał poza krawędź dachu ściany itp.',
          isCorrect: false
        },
        {
          answer: 'b) co najmniej dwa szczeble wystawały poza krawędź dachu ściany itp.',
          isCorrect: false
        },
        {
          answer: 'c) co najmniej trzy szczeble wystawały poza krawędź dachu ściany itp.',
          isCorrect: true
        }
      ]
    },
    {
      question: '441. Linię gaśniczą prowadzoną po drabinie mechanicznej przedłużamy:',
      answers: [
        {
          answer: 'a) od prądownika',
          isCorrect: false
        },
        {
          answer: 'b) od rozdzielacza',
          isCorrect: true
        },
        {
          answer: 'c) nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '442. Dokonując tzw. „otwarcia dachu” przy pożarach strychów i poddaszy, w sytuacji braku możliwości prowadzenia działań od wewnątrz, wykonujemy otwory w poszyciu dachowym w ilości co najmniej:',
      answers: [
        {
          answer: 'a) 1',
          isCorrect: false
        },
        {
          answer: 'b) 3',
          isCorrect: false
        },
        {
          answer: 'c) 2',
          isCorrect: true
        }
      ]
    },
    {
      question: '443. Podczas gaszenia pożaru cieczy palnej na dużej powierzchni:',
      answers: [
        {
          answer: 'a) podajemy zwarty prąd wody, by rozcieńczyć ciecz palną',
          isCorrect: false
        },
        {
          answer: 'b) podajemy rozproszony prąd wody',
          isCorrect: false
        },
        {
          answer: 'c) pokrywamy lustro cieczy warstwą piany, wykorzystując zdolność rozpływania się piany',
          isCorrect: true
        }
      ]
    },
    {
      question: '444. Prowadząc działania gaśnicze przy użyciu proszku gaśniczego, podaje się go do pożaru:',
      answers: [
        {
          answer: 'a) Kierując prąd gaśniczy bezpośrednio na palący się materiał',
          isCorrect: false
        },
        {
          answer: 'b) Kierując prąd gaśniczy bezpośrednio nad palący się materiał, odcinając dopływ powietrza i zdmuchując płomień',
          isCorrect: false
        },
        {
          answer: 'c) Rozpylając środek gaśniczy do strefy spalania i coraz bardziej zacieśniając strefę spalania',
          isCorrect: true
        }
      ]
    },
    {
      question: '445. Wentylację (oddymianie) należy prowadzić:',
      answers: [
        {
          answer: 'a) praktycznie równocześnie z działaniami gaśniczymi',
          isCorrect: true
        },
        {
          answer: 'b) dopiero po zakończeniu działań gaśniczych i ewakuacji',
          isCorrect: false
        },
        {
          answer: 'c) przed rozpoczęciem działań gaśniczych',
          isCorrect: false
        }
      ]
    },
    {
      question: '446. Wentylacja korzystająca z unoszenia się gorących gazów wspomagana ciągami powietrznymi to:',
      answers: [
        {
          answer: 'a) wentylacja grawitacyjna',
          isCorrect: true
        },
        {
          answer: 'b) wentylacja nadciśnieniowa',
          isCorrect: false
        },
        {
          answer: 'c) wentylacja wyciągowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '447. Jakie wyróżniamy sposoby wentylacji pomieszczeń?',
      answers: [
        {
          answer: 'a) podciśnieniowa autowentylacja',
          isCorrect: false
        },
        {
          answer: 'b) grawitacyjna podciśnieniowa i nadciśnieniowa',
          isCorrect: true
        },
        {
          answer: 'c) hiperwentylacja, stosowanie wody do oddymiania',
          isCorrect: false
        }
      ]
    },
    {
      question: '448. Stosując wentylację nadciśnieniową w piwnicy należy pamiętać o:',
      answers: [
        {
          answer: 'a) asekuracji drożnego otworu wentylacyjnego',
          isCorrect: true
        },
        {
          answer: 'b) zamknąć okna i zgasić światło',
          isCorrect: false
        },
        {
          answer: 'c) ustawić wentylator w pomieszczeniu leżącym najdalej wejścia do piwnicy',
          isCorrect: false
        }
      ]
    },
    {
      question: '449. Dostarczanie wody za pomocą przetłaczania to:',
      answers: [
        {
          answer: 'a) podawanie wody przez nasadę tłoczną pompy do zbiornika wodnego, a następnie przy pomocy linii ssawnej i kolejnej pompy podajemy wodę do następnego zbiornika',
          isCorrect: false
        },
        {
          answer: 'b) podawanie wody przez nasadę tłoczną pompy do nasady ssawnej kolejnej pompy',
          isCorrect: true
        },
        {
          answer: 'c) transportowanie wody przy pomocy cystern samochodowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '450. Wadą systemu dostarczania wody przez przepompowywanie jest:',
      answers: [
        {
          answer: 'a) duża ilość sprzętu',
          isCorrect: false
        },
        {
          answer: 'b) długi czas uruchamiania systemu',
          isCorrect: true
        },
        {
          answer: 'c) możliwość natychmiastowego zachwiania pracy przy awarii jakiejś pompy',
          isCorrect: false
        }
      ]
    },
    {
      question: '451. Określ zakres ewakuacji ludzi w sytuacji pożaru mieszkania na poziomie 1 piętra w budynku pięciokondygnacyjnym:',
      answers: [
        {
          answer: 'a) Należy ewakuować ludzi z poziomu parteru oraz z poziomu 2 piętra',
          isCorrect: false
        },
        {
          answer: 'b) Należy ewakuować ludzi tylko z pięter znajdujących się powyżej piętra 1',
          isCorrect: false
        },
        {
          answer: 'c) Zakres ewakuacji określa kierujący działaniami ratowniczymi w oparciu o ocenę sytuacji pożarowej',
          isCorrect: true
        }
      ]
    },
    {
      question: '452. W budynku użyteczności publicznej – miejsce przeznaczone do ewakuacji ludzi z budynku określone jest w:',
      answers: [
        {
          answer: 'a) książce obiektu',
          isCorrect: false
        },
        {
          answer: 'b) instrukcji bezpieczeństwa pożarowego obiektu',
          isCorrect: true
        },
        {
          answer: 'c) obiekty użyteczności publicznej nie muszą posiadać wyznaczonego miejsca ewakuacji ludzi – takie miejsce określa wyłącznie kierujący działaniami ratowniczymi',
          isCorrect: false
        }
      ]
    },
    {
      question: '453. Przenoszenie ratowanego z zastosowaniem tzw. „chwytu strażaka” polega na:',
      answers: [
        {
          answer: 'a) transportowaniu poszkodowanego na ramionach ratownika',
          isCorrect: true
        },
        {
          answer: 'b) transportowaniu poszkodowanego za pomocą noszy',
          isCorrect: false
        },
        {
          answer: 'c) ewakuacji poszkodowanego na plecach ratownika',
          isCorrect: false
        }
      ]
    },
    {
      question: '454. Podczas ewakuacji mienia ruchomego można stosować system:',
      answers: [
        {
          answer: 'a) 24/24',
          isCorrect: false
        },
        {
          answer: 'b) 24/48',
          isCorrect: false
        },
        {
          answer: 'c) brygadowy lub potokowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '455. Brygadowy potokowy lub indywidualny system ewakuacji można wykorzystywać podczas:',
      answers: [
        {
          answer: 'a) ewakuacji mienia ruchomego',
          isCorrect: true
        },
        {
          answer: 'b) ewakuacji ludzi',
          isCorrect: false
        },
        {
          answer: 'c) ewakuacji zwierząt hodowlanych',
          isCorrect: false
        }
      ]
    },
    {
      question: '456. W celu ewakuacji dużych stad zwierząt w pierwszej kolejności należy:',
      answers: [
        {
          answer: 'a) przewodnika stada wyprowadzić w bezpieczne miejsce',
          isCorrect: true
        },
        {
          answer: 'b) zastosować zastrzyki usypiające',
          isCorrect: false
        },
        {
          answer: 'c) wynieść zwierzęta',
          isCorrect: false
        }
      ]
    },
    {
      question: '457. Rejon ewakuacji to:',
      answers: [
        {
          answer: 'a) Obszar, z którego w wyniku zagrożenia ewakuowani są ludzie i mienie wraz z obszarem, przez który skierowany jest ruch ewakuacji',
          isCorrect: false
        },
        {
          answer: 'b) Obszar, z którego w wyniku zagrożenia ewakuowani są ludzie i mienie',
          isCorrect: false
        },
        {
          answer: 'c) Obszar poza strefą zagrożenia, dokąd ewakuowani są ludzie i mienie',
          isCorrect: true
        }
      ]
    },
    {
      question: '458. O kolejności ewakuowania ludzi z budynku decyduje:',
      answers: [
        {
          answer: 'a) Sztab akcji ratowniczej',
          isCorrect: false
        },
        {
          answer: 'b) Kierujący działaniem ratowniczym',
          isCorrect: true
        },
        {
          answer: 'c) Zawsze ratownik wyższy stopniem',
          isCorrect: false
        },
        {
          answer: 'd) Dowódca jednostki na swoim terenie chronionym',
          isCorrect: false
        }
      ]
    },
    {
      question: '459. KDR prowadząc działania ratowniczo – gaśnicze podejmuje decyzję o ewakuacji szpitala w porozumieniu z:',
      answers: [
        {
          answer: 'a) Wojewódzką Stacją Pogotowia Ratunkowego',
          isCorrect: false
        },
        {
          answer: 'b) ordynatorem lub lekarzem dyżurnym',
          isCorrect: true
        },
        {
          answer: 'c) dowódcą jednostki',
          isCorrect: false
        }
      ]
    },
    {
      question: '460. Przy ewakuacji mienia w pierwszej kolejności ratujemy:',
      answers: [
        {
          answer: 'a) Dzieła sztuki',
          isCorrect: false
        },
        {
          answer: 'b) Sprzęt elektroniczny',
          isCorrect: false
        },
        {
          answer: 'c) Materiały, które pod wpływem wysokiej temperatury lub w wyniku kontaktu z wodą grożą gwałtownym rozszerzeniem się pożaru lub wybuchem',
          isCorrect: true
        },
        {
          answer: 'd) Pościel',
          isCorrect: false
        }
      ]
    },
    {
      question: '461. Ewakuacja to:',
      answers: [
        {
          answer: 'a) Zorganizowane działania, mające na celu wyprowadzenia ludzi zwierząt lub mienia ruchomego ze strefy zagrożonej, podejmowane po otrzymaniu sygnału o zagrożeniu',
          isCorrect: true
        },
        {
          answer: 'b) Forma działań, polegająca na niesieniu pomocy w sytuacjach bezpośredniego zagrożenia życia i zdrowia ludzi, zwierząt oraz zagrożonego mienia',
          isCorrect: false
        },
        {
          answer: 'c) Zorganizowane i ciągłe działanie prowadzące do uzyskania informacji, co do zagrożenia ludzi, zwierząt oraz mienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '462. Kto może ostatecznie zadecydować o odstąpieniu od zasad powszechnie uznanych za bezpieczne, podczas akcji ratowniczo – gaśniczej:',
      answers: [
        {
          answer: 'a) Sztab doradców i specjalistów na miejscu akcji',
          isCorrect: false
        },
        {
          answer: 'b) Kierujący działaniami ratowniczymi',
          isCorrect: true
        },
        {
          answer: 'c) Strażak osobiście, ale tylko w stosunku do siebie',
          isCorrect: false
        }
      ]
    },
    {
      question: '463. Podczas przeszukiwania pomieszczenia całkowicie zadymionego, uniemożliwiającego widzenie wzrokowe – należy stosować następujący poziom zabezpieczenia:',
      answers: [
        {
          answer: 'a) Przeszukiwania dokonywać musi obowiązkowo 2 strażaków (rota)',
          isCorrect: false
        },
        {
          answer: 'b) Przeszukiwania dokonywać musi obowiązkowo 2 strażaków (rota) zabezpieczona strażacką linką ratowniczą z asekuracją strażaka, będącego poza strefą zagrożoną',
          isCorrect: true
        },
        {
          answer: 'c) Przeszukiwania dokonywać może 1 strażak, posiadający radiotelefon nasobny oraz zabezpieczony strażacką linką ratowniczą z asekuracją strażaka, będącego poza pomieszczeniem zadymionym',
          isCorrect: false
        }
      ]
    },
    {
      question: '464. Sygnalizator bezruchu należy zakładać:',
      answers: [
        {
          answer: 'a) każdorazowo w przypadku wejścia do strefy zagrożonej',
          isCorrect: true
        },
        {
          answer: 'b) tylko w przypadku rozpoznania pożaru',
          isCorrect: false
        },
        {
          answer: 'c) raz na pół roku',
          isCorrect: false
        }
      ]
    },
    {
      question: '465. Ilu ratowników powinno oczekiwać przed wejściem do strefy zagrożonej w gotowości do natychmiastowego wejścia?',
      answers: [
        {
          answer: 'a) 1',
          isCorrect: false
        },
        {
          answer: 'b) 2',
          isCorrect: true
        },
        {
          answer: 'c) 3',
          isCorrect: false
        }
      ]
    },
    {
      question: '466. Przodownik roty I upewniwszy się o rzeczywistej gotowości do odjazdu poleca kierowcy wyjazd hasłem „Odjazd”:',
      answers: [
        {
          answer: 'a) dzieje się tak zawsze, podczas wyjazdu alarmowego zastępu z garażu',
          isCorrect: false
        },
        {
          answer: 'b) decyzję o wyjeździe podejmuje dowódca i to on sprawdza gotowość zastępu',
          isCorrect: true
        },
        {
          answer: 'c) tak, jeśli jest to zastęp czteroosobowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '467. Podczas jazdy do zdarzenia nie wolno:',
      answers: [
        {
          answer: 'a) otwierać drzwi',
          isCorrect: true
        },
        {
          answer: 'b) uchylać okna',
          isCorrect: false
        },
        {
          answer: 'c) korzystać z mapy',
          isCorrect: false
        }
      ]
    },
    {
      question: '468. Samochód gaśniczy jadący do pożaru może zostać zawrócony do jednostki przez:',
      answers: [
        {
          answer: 'a) dowódcę zastępu',
          isCorrect: false
        },
        {
          answer: 'b) dowódcę JRG',
          isCorrect: false
        },
        {
          answer: 'c) właściwe stanowisko kierowania',
          isCorrect: true
        },
        {
          answer: 'd) kierowcę zastępu',
          isCorrect: false
        }
      ]
    },
    {
      question: '469. Informację ze zdarzenia sporządza:',
      answers: [
        {
          answer: 'a) dyżurny operacyjny Stanowiska Kierowania',
          isCorrect: false
        },
        {
          answer: 'b) dowódca zmiany JRG właściwej dla miejsca konkretnego zdarzenia',
          isCorrect: false
        },
        {
          answer: 'c) kierujący działaniami ratowniczymi',
          isCorrect: true
        }
      ]
    },
    {
      question: '470. W trakcie długotrwałych działań ratowniczych KDR przekazuje do SK KM/P dane pozwalające na częściowe sporządzenie informacji ze zdarzenia nie później niż:',
      answers: [
        {
          answer: 'a) W drugiej godzinie działań',
          isCorrect: false
        },
        {
          answer: 'b) W trzeciej godzinie działań',
          isCorrect: false
        },
        {
          answer: 'c) W czwartej godzinie działań',
          isCorrect: true
        }
      ]
    },
    {
      question: '471. Którego z druków wymienionych poniżej Kierujący Działaniami Ratowniczymi nie wypełnia na miejscu zdarzenia:',
      answers: [
        {
          answer: 'a) Karta udzielonej pomocy medycznej',
          isCorrect: false
        },
        {
          answer: 'b) Decyzja Kierującego Działaniem Ratowniczym',
          isCorrect: false
        },
        {
          answer: 'c) Raport Kierującego Działaniem Ratowniczym',
          isCorrect: true
        },
        {
          answer: 'd) Pokwitowanie przejęcia mienia w użytkowanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '472. Raport Kierującego Działaniem Ratowniczym sporządza się każdorazowo w przypadku:',
      answers: [
        {
          answer: 'a) wypadku ciężkiego lub zbiorowego, jakiemu ulegli ratownicy prowadzący działania',
          isCorrect: false
        },
        {
          answer: 'b) w działaniach użyto siły przekraczające wielkością kompanię pożarniczą',
          isCorrect: false
        },
        {
          answer: 'c) skorzystania przez kierującego działaniami ratowniczymi ze szczególnych uprawnień uwarunkowanych stanem wyższej konieczności',
          isCorrect: true
        }
      ]
    },
    {
      question: '473. Czy przekazanie przez kierującego działaniami ratowniczymi pogorzeliska właścicielowi /administratorowi terenu lub obiektu może nastąpić w formie ustnej?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        }
      ]
    },
    {
      question: '474. Za prawidłowość danych zawartych w informacji ze zdarzenia odpowiada:',
      answers: [
        {
          answer: 'a) dowódca Jednostki Ratowniczo-Gaśniczej',
          isCorrect: false
        },
        {
          answer: 'b) sporządzający tę informację',
          isCorrect: true
        },
        {
          answer: 'c) dyspozytor PSK (MSK)',
          isCorrect: false
        },
        {
          answer: 'd) dyżurny PA',
          isCorrect: false
        }
      ]
    },
    {
      question: '475. Wydzielone siły na miejscu prowadzonych działań, nie biorące udziału w bezpośrednich działaniach gaśniczych, pozostające w dyspozycji kierującego działaniem ratowniczym to siły:',
      answers: [
        {
          answer: 'a) odwodu wojewódzkiego',
          isCorrect: false
        },
        {
          answer: 'b) odwodu taktycznego',
          isCorrect: true
        },
        {
          answer: 'c) odwodu operacyjnego',
          isCorrect: false
        },
        {
          answer: 'd) odwodu centralnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '476. Co zawiera Dyspozycja SK KW o alarmowaniu pododdziału odwodowego kierowana do powiatowych/miejskich stanowisk kierowania?',
      answers: [
        {
          answer: 'a) pododdział, cel użycia oraz czas i miejsce koncentracji pododdziału',
          isCorrect: true
        },
        {
          answer: 'b) rodzaj sprzętu, ilość osób, czas i miejsce koncentracji',
          isCorrect: false
        },
        {
          answer: 'c) rodzaj sprzętu, cel użycia, czas i miejsce koncentracji oraz punkt przyjęcia sił',
          isCorrect: false
        }
      ]
    },
    {
      question: '477. Jaki dokument sporządza d-ca zastępu wchodzącego w skład centralnego odwodu operacyjnego',
      answers: [
        {
          answer: 'a) Kartę ukompletowania sił i środków centralnego odwodu operacyjnego',
          isCorrect: false
        },
        {
          answer: 'b) Kartę alarmowania zastępu w centralnym odwodzie operacyjnym',
          isCorrect: true
        },
        {
          answer: 'c) Informację z działań prowadzonych w ramach pododdziału',
          isCorrect: false
        }
      ]
    },
    {
      question: '478. Wyposażenie pododdziałów centralnego odwodu operacyjnego powinno umożliwić udział w działaniach ratowniczych bez zaprowiantowania przez okres nie krótszy niż:',
      answers: [
        {
          answer: 'a) 12 godzin',
          isCorrect: false
        },
        {
          answer: 'b) 24 godziny',
          isCorrect: false
        },
        {
          answer: 'c) 36 godzin',
          isCorrect: true
        }
      ]
    },
    {
      question: '479. Celem tworzenia odwodu taktycznego na terenie akcji jest:',
      answers: [
        {
          answer: 'a) Zabezpieczenie terenu akcji gaśniczej',
          isCorrect: false
        },
        {
          answer: 'b) Umożliwienie kierującemu działaniami ratowniczymi reagowanie na zmiany sytuacji pożarowej lub obniżenie potencjału sił wprowadzonych do działań',
          isCorrect: true
        },
        {
          answer: 'c) Stworzenie zapasu sprzętu i środków gaśniczych dla jednostek realizujących główny zamiar taktyczny',
          isCorrect: false
        }
      ]
    },
    {
      question: '480. Zastęp oznaczony symbolem SW to:',
      answers: [
        {
          answer: 'a) zastęp wężowy',
          isCorrect: true
        },
        {
          answer: 'b) zastęp ze sprzętem oświetleniowym',
          isCorrect: false
        },
        {
          answer: 'c) zastęp kwatermistrzowski',
          isCorrect: false
        }
      ]
    },
    {
      question: '481. Co oznacza skrót PW 1000',
      answers: [
        {
          answer: 'a) Punkt czerpania wody o zasobach 1000 m3',
          isCorrect: false
        },
        {
          answer: 'b) Prądownica wodna o wydajności 1000 l/min',
          isCorrect: false
        },
        {
          answer: 'c) Przyczepka wężowa z 1000 m odcinków tłocznych',
          isCorrect: true
        }
      ]
    },
    {
      question: '482. Co oznacza liczba 24 w oznaczeniu GCBA 5/24',
      answers: [
        {
          answer: 'a) Pojemność zbiornika wody w hektolitrach',
          isCorrect: false
        },
        {
          answer: 'b) Wydajność autopompy w hektolitrach / min',
          isCorrect: true
        },
        {
          answer: 'c) Masę pojazdu wyrażoną w tonach',
          isCorrect: false
        }
      ]
    },
    {
      question: '483. Co oznacza liczba 5 w oznaczeniu GCBA 5/24',
      answers: [
        {
          answer: 'a) Minimalną obsadę pojazdu',
          isCorrect: false
        },
        {
          answer: 'b) Wydajność autopompy w m3 / min',
          isCorrect: false
        },
        {
          answer: 'c) Pojemność zbiornika wody w m3',
          isCorrect: true
        }
      ]
    },
    {
      question: '484. Na samochodzie GBA 2,5/16 zainstalowano działko o wydatku 1600 l/min. Ile czasu można podawać skuteczny prąd gaśniczy z tego działka przy zasilaniu samochodu z hydrantu o wydatku 10 l/s?',
      answers: [
        {
          answer: 'a) Około 15 min',
          isCorrect: false
        },
        {
          answer: 'b) Około 25 min',
          isCorrect: true
        },
        {
          answer: 'c) Około 5 min',
          isCorrect: false
        }
      ]
    },
    {
      question: '485. W numerze operacyjnym stosowanym do oznaczenia pojazdów pożarniczych pierwsze trzy cyfry określają?',
      answers: [
        {
          answer: 'a) jednostkę organizacyjną ochrony przeciwpożarowej',
          isCorrect: true
        },
        {
          answer: 'b) pojazd wg rodzaju i w kolejności w danej jednostce organizacyjnej ochrony przeciwpożarowej',
          isCorrect: false
        },
        {
          answer: 'c) województwo lub wyróżnik jednostki centralnej',
          isCorrect: false
        },
        {
          answer: 'd) masę pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '486. Kolor przewodów wysokiego napięcia w samochodach hybrydowych to:',
      answers: [
        {
          answer: 'a) Zielony',
          isCorrect: false
        },
        {
          answer: 'b) Czarny',
          isCorrect: false
        },
        {
          answer: 'c) Pomarańczowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '487. Zanik napięcia w instalacji elektrycznej po odłączeniu akumulatora HV w pojeździe hybrydowym ustępuje po:',
      answers: [
        {
          answer: 'a) 2-3 minut w zależności od marki i modelu pojazdu',
          isCorrect: false
        },
        {
          answer: 'b) 8-12 minut w zależności od marki i modelu pojazdu',
          isCorrect: true
        },
        {
          answer: 'c) 4-7 minut w zależności od marki i modelu pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '488. Po osiągnięciu jakiej temperatury ogniwa w akumulatorach wysokonapięciowych HV mogą ulec samozapłonowi:',
      answers: [
        {
          answer: 'a) 45 st C',
          isCorrect: false
        },
        {
          answer: 'b) 60 st C',
          isCorrect: false
        },
        {
          answer: 'c) 80 st C',
          isCorrect: true
        }
      ]
    },
    {
      question: '489. Wartość napięcia zasilającego silnik elektryczny w samochodzie hybrydowym to:',
      answers: [
        {
          answer: 'a) 50-100 V',
          isCorrect: false
        },
        {
          answer: 'b) 100-200 V',
          isCorrect: false
        },
        {
          answer: 'c) 200-400 V',
          isCorrect: true
        }
      ]
    },
    {
      question: '490. Podczas oddymiania obiektu wentylator nadciśnieniowy ustawiamy:',
      answers: [
        {
          answer: 'a) w drzwiach wejściowych tłocząc powietrze do wnętrza obiektu',
          isCorrect: false
        },
        {
          answer: 'b) na zewnątrz w odległości równej przekątnej drzwi, tłocząc powietrze do wnętrza obiektu',
          isCorrect: true
        },
        {
          answer: 'c) w środku obiektu wydmuchując dym na zewnątrz przez otwory okienne lub drzwiowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '491. Powstanie przegrzanej warstwy ropy może doprowadzić do:',
      answers: [
        {
          answer: 'a) Wyrzutu lub wykipienia',
          isCorrect: true
        },
        {
          answer: 'b) Wybuchu fizycznego',
          isCorrect: false
        },
        {
          answer: 'c) Wybuchu chemicznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '492. Który rodzaj zdarzenia nie zalicza się do miejscowych zagrożeń?',
      answers: [
        {
          answer: 'a) katastrofa drogowa',
          isCorrect: false
        },
        {
          answer: 'b) pożar',
          isCorrect: true
        },
        {
          answer: 'c) katastrofa chemiczna',
          isCorrect: false
        }
      ]
    },
    {
      question: '493. Ratownictwo chemiczne to min:',
      answers: [
        {
          answer: 'a) eliminacja skutków działania człowieka lub natury powodujących skażenie środowiska naturalnego',
          isCorrect: false
        },
        {
          answer: 'b) zatrzymanie emisji do otoczenia materiałów stwarzających zagrożenie dla życia zdrowia ludzi i zwierząt mienia i środowiska naturalnego',
          isCorrect: true
        },
        {
          answer: 'c) przeprowadzenie ewakuacji oraz udzielenie pierwszej pomocy poszkodowanym w wypadku z udziałem niebezpiecznego medium',
          isCorrect: false
        }
      ]
    },
    {
      question: '494. Stabilizacja samochodu polega na:',
      answers: [
        {
          answer: 'a) Przewróceniu samochodu na koła, jeśli leży na boku i podłożeniu klocków i klinów stabilizacyjnych',
          isCorrect: false
        },
        {
          answer: 'b) Przewróceniu samochodu na koła jeśli leży na dachu i podłożeniu klocków i klinów stabilizacyjnych',
          isCorrect: true
        },
        {
          answer: 'c) Podłożeniu podpór pod samochód, tak aby uniemożliwić zmianę jego położenia podczas prowadzonych działań ratowniczych',
          isCorrect: false
        }
      ]
    },
    {
      question: '495. Stosowany w pojazdach samochodowych jako paliwo gaz propan butan jest gazem:',
      answers: [
        {
          answer: 'a) lżejszym od powietrza',
          isCorrect: false
        },
        {
          answer: 'b) cięższym od powietrza',
          isCorrect: true
        },
        {
          answer: 'c) zdecydowanie lżejszym od powietrza',
          isCorrect: false
        }
      ]
    },
    {
      question: '496. Technikę tzw. „trzecich drzwi” stosuje się w przypadku pojazdów:',
      answers: [
        {
          answer: 'a) pięciodrzwiowych (hatchback)',
          isCorrect: false
        },
        {
          answer: 'b) czterodrzwiowych (sedan)',
          isCorrect: false
        },
        {
          answer: 'c) dwudrzwiowych (coupe)',
          isCorrect: true
        }
      ]
    },
    {
      question: '497. Pole składowania narzędzi podczas prowadzenia działań ratowniczych na drodze powinno być zlokalizowane:',
      answers: [
        {
          answer: 'a) możliwie najbliżej miejsca działania',
          isCorrect: true
        },
        {
          answer: 'b) bezpośrednio przy samochodzie ratowniczym',
          isCorrect: false
        },
        {
          answer: 'c) bezpośrednio przy pojeździe uszkodzonym',
          isCorrect: false
        }
      ]
    },
    {
      question: '498. W procesie usuwania drzwi przednich samochodu osobowego na miejscu katastrofy drogowej metodą ułatwienia dostępu do zawiasów jest:',
      answers: [
        {
          answer: 'a) usunięcie zewnętrznego poszycia drzwi',
          isCorrect: false
        },
        {
          answer: 'b) usunięcie części błotnika przedniego',
          isCorrect: true
        },
        {
          answer: 'c) usunięcie dolnej części słupka',
          isCorrect: false
        }
      ]
    },
    {
      question: '499. Zaznacz prawidłową kolejność czynności ratowniczych wykonywanych podczas katastrof drogowych:',
      answers: [
        {
          answer: 'a) dojazd, rozpoznanie, działania ratownicze, zabezpieczenie terenu akcji, zakończenie akcji',
          isCorrect: false
        },
        {
          answer: 'b) dojazd, zabezpieczenie terenu akcji, rozpoznanie, działania ratownicze, zakończenie akcji',
          isCorrect: true
        },
        {
          answer: 'c) dojazd, rozpoznanie, zabezpieczenie terenu akcji, działania ratownicze, zakończenie akcji',
          isCorrect: false
        }
      ]
    },
    {
      question: '500. Skrót CNG określa zasilanie samochodu:',
      answers: [
        {
          answer: 'a) gazem propan – butan',
          isCorrect: false
        },
        {
          answer: 'b) gazem ziemnym',
          isCorrect: true
        },
        {
          answer: 'c) wodorem',
          isCorrect: false
        }
      ]
    },
    {
      question: '501. Na miejscu wypadku samochodowego, gdy doszło do rozszczelnienia zbiornika z gazem LPG, w pierwszej kolejności należy:',
      answers: [
        {
          answer: 'a) ewakuować poszkodowanych ze strefy zagrożenia',
          isCorrect: true
        },
        {
          answer: 'b) zakręcić zawór przy zbiorniku z gazem',
          isCorrect: false
        },
        {
          answer: 'c) dokonać stabilizacji pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '502. Szyby hartowane w pojazdach powinniśmy usuwać za pomocą:',
      answers: [
        {
          answer: 'a) rozpieracza hydraulicznego',
          isCorrect: false
        },
        {
          answer: 'b) toporka',
          isCorrect: false
        },
        {
          answer: 'c) zbijaka punktowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '503. Zaznacz prawidłowy sposób odłączenia przewodów instalacji od akumulatora:',
      answers: [
        {
          answer: 'a) w pierwszej kolejności odłączamy biegun dodatni akumulatora, co zapobiega przypadkowemu iskrzeniu w razie zwarcia bieguna ujemnego do masy pojazdu',
          isCorrect: false
        },
        {
          answer: 'b) w pierwszej kolejności odłączamy biegun ujemny akumulatora, co zapobiega \tprzypadkowemu iskrzeniu w razie zwarcia bieguna dodatniego do masy pojazdu',
          isCorrect: true
        },
        {
          answer: 'c) nie ma znaczenia kolejność odłączania biegunów',
          isCorrect: false
        },
        {
          answer: 'd) o kolejności odłączania biegunów decyduje dowódca akcji',
          isCorrect: false
        }
      ]
    },
    {
      question: '504. Szyby laminowane w uszkodzonym pojeździe usuwamy przy pomocy:',
      answers: [
        {
          answer: 'a) zbijaka sprężynowego',
          isCorrect: false
        },
        {
          answer: 'b) toporka',
          isCorrect: false
        },
        {
          answer: 'c) piły do metalu',
          isCorrect: false
        },
        {
          answer: 'd) piły do szyb',
          isCorrect: true
        }
      ]
    },
    {
      question: '505. Na miejscu wypadku z udziałem samochodu zasilanego gazem LPG, którą z niżej wymienionych czynności należy wykonać w pierwszej kolejności:',
      answers: [
        {
          answer: 'a) odłączyć akumulator',
          isCorrect: false
        },
        {
          answer: 'b) ustabilizować pojazd',
          isCorrect: false
        },
        {
          answer: 'c) zakręcić zawory przy zbiorniku z gazem',
          isCorrect: true
        }
      ]
    },
    {
      question: '506. Pole sprzętowe tworzymy po to by:',
      answers: [
        {
          answer: 'a) narzędzia i sprzęt były w jednym miejscu',
          isCorrect: true
        },
        {
          answer: 'b) by wykonać tam jego konserwację',
          isCorrect: false
        },
        {
          answer: 'c) by można było wyciągnąć sprzęt',
          isCorrect: false
        }
      ]
    },
    {
      question: '507. Termin LNG odnosi się do:',
      answers: [
        {
          answer: 'a) fazy ciekłej metanu',
          isCorrect: true
        },
        {
          answer: 'b) fazy gazowej metanu',
          isCorrect: false
        },
        {
          answer: 'c) fazy ciekłej propanu-butanu',
          isCorrect: false
        },
        {
          answer: 'd) fazy gazowej propanu-butanu',
          isCorrect: false
        }
      ]
    },
    {
      question: '508. Przy cięciu słupka „C” musimy uważać na:',
      answers: [
        {
          answer: 'a) zbiorniki wysokociśnieniowe do napełniania kurtyn',
          isCorrect: true
        },
        {
          answer: 'b) grubość słupka i jego skomplikowany profil',
          isCorrect: false
        },
        {
          answer: 'c) szerokość słupka i tapicerkę',
          isCorrect: false
        },
        {
          answer: 'd) elementy tapicerskie słupka',
          isCorrect: false
        }
      ]
    },
    {
      question: '509. Miejsce podparcia pudła wagonu tramwajowego oznaczone jest symbolem w kształcie:',
      answers: [
        {
          answer: 'a) strzałki',
          isCorrect: false
        },
        {
          answer: 'b) koła',
          isCorrect: false
        },
        {
          answer: 'c) trójkąta',
          isCorrect: true
        }
      ]
    },
    {
      question: '510. Awaryjne uszynienie sieci trakcyjnej polega na:',
      answers: [
        {
          answer: 'a) połączeniu metalową linka obu szyn',
          isCorrect: false
        },
        {
          answer: 'b) połączeniu metalowa linka słupa trakcyjnego z przewodem jezdnym',
          isCorrect: false
        },
        {
          answer: 'c) połączeniu metalową linką przewodu elektrycznego z jedną szyną',
          isCorrect: true
        }
      ]
    },
    {
      question: '511. Do zadań jednostek Państwowej Straży Pożarnej podczas likwidacji skutków katastrofy kolejowej zaliczamy:',
      answers: [
        {
          answer: 'a) zabezpieczenie mienia poszkodowanych oraz majątku PKP',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenie śladów pomocnych w określeniu przyczyn katastrofy',
          isCorrect: false
        },
        {
          answer: 'c) organizowanie i prowadzenie akcji ratowniczej',
          isCorrect: true
        }
      ]
    },
    {
      question: '512. Pojazdem trakcyjnym nazywamy:',
      answers: [
        {
          answer: 'a) zestaw wagonów kolejowych',
          isCorrect: false
        },
        {
          answer: 'b) pojazd szynowy z własnym źródłem napędu',
          isCorrect: true
        },
        {
          answer: 'c) pojazd szynowy bez własnego źródła napędu',
          isCorrect: false
        }
      ]
    },
    {
      question: '513. Minimalna bezpieczna odległość od zerwanej linii trakcyjnej zasilającej pojazdy szynowe to:',
      answers: [
        {
          answer: 'a) 5 metrów',
          isCorrect: false
        },
        {
          answer: 'b) 8 metrów',
          isCorrect: false
        },
        {
          answer: 'c) 10 metrów',
          isCorrect: true
        }
      ]
    },
    {
      question: '514. Napięcie w sieci tramwajowej zasilającej pojazdy szynowe wynosi:',
      answers: [
        {
          answer: 'a) 100V',
          isCorrect: false
        },
        {
          answer: 'b) 600V',
          isCorrect: true
        },
        {
          answer: 'c) 3000V',
          isCorrect: false
        }
      ]
    },
    {
      question: '515. System trakcji elektrycznej stosowanej w polskim kolejnictwie:',
      answers: [
        {
          answer: 'a) system prądu stałego 5000V (5kV)',
          isCorrect: false
        },
        {
          answer: 'b) system prądu zmiennego 3000V (3kV)',
          isCorrect: false
        },
        {
          answer: 'c) system prądu stałego 3000V (3kV)',
          isCorrect: true
        },
        {
          answer: 'd) system prądu zmiennego 5000V (5kV)',
          isCorrect: false
        }
      ]
    },
    {
      question: '516. Awaryjne uszynienie kolejowej sieci trakcyjnej ma na celu:',
      answers: [
        {
          answer: 'a) wyłączenie napięcia w sieci',
          isCorrect: false
        },
        {
          answer: 'b) wyrównanie potencjałów sieci jezdnej i powrotnej dla sprowadzenia do ziemi ładunku szczątkowego',
          isCorrect: true
        },
        {
          answer: 'c) uziemienie trakcji elektrycznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '517. Na zewnętrznej warstwie poszycia kadłuba samolotu zazwyczaj zaznaczone są miejsca cięcia konstrukcji w celu wykonania dostępu do pasażerów uwięzionych wewnątrz Na ogół oznaczenia te są wykonane farbą barwy:',
      answers: [
        {
          answer: 'a) żółtej',
          isCorrect: false
        },
        {
          answer: 'b) białej',
          isCorrect: false
        },
        {
          answer: 'c) czerwonej',
          isCorrect: true
        }
      ]
    },
    {
      question: '518. Instalacja paliwowa w samolocie ma oznaczenie barwne:',
      answers: [
        {
          answer: 'a) żółte',
          isCorrect: true
        },
        {
          answer: 'b) czarne',
          isCorrect: false
        },
        {
          answer: 'c) zielone',
          isCorrect: false
        }
      ]
    },
    {
      question: '519. Ewakuacje łańcuchową osób podczas katastrofy lotniczej stosujemy gdy:',
      answers: [
        {
          answer: 'a) pasażerowie i załoga samolotu znajdują się w dobrej kondycji i w pełni reagują na polecenia ratowników',
          isCorrect: true
        },
        {
          answer: 'b) pasażerowie i załoga samolotu wymagają delikatnego transportu do punktu medycznego',
          isCorrect: false
        },
        {
          answer: 'c) pasażerowie i załoga nie reagują na polecenia ratowników i wymagają natychmiastowego transportu do punktu medycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '520. W samolocie instalacja oznaczona kolorem brązowym jest to:',
      answers: [
        {
          answer: 'a) instalacja hydrauliczna',
          isCorrect: false
        },
        {
          answer: 'b) instalacja paliwowa',
          isCorrect: false
        },
        {
          answer: 'c) instalacja olejowa i smarowania',
          isCorrect: true
        }
      ]
    },
    {
      question: '521. W samolocie instalacja zaznaczona kolorem szarym jest to instalacja:',
      answers: [
        {
          answer: 'a) paliwowa',
          isCorrect: false
        },
        {
          answer: 'b) hydrauliczna',
          isCorrect: true
        },
        {
          answer: 'c) pneumatyczna',
          isCorrect: false
        },
        {
          answer: 'd) przeciwpożarowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '522. Do miejsca zdarzenia chemicznego należy podjeżdżać od strony:',
      answers: [
        {
          answer: 'a) zawietrznej',
          isCorrect: false
        },
        {
          answer: 'b) nawietrznej',
          isCorrect: true
        },
        {
          answer: 'c) pod wiatr',
          isCorrect: false
        }
      ]
    },
    {
      question: '523. Jak należy ustawić pojazdy na miejscu zdarzenia chemicznego:',
      answers: [
        {
          answer: 'a) z uwzględnieniem odległości od miejsca zdarzenia siły i kierunku wiatru oraz topografii terenu',
          isCorrect: true
        },
        {
          answer: 'b) najlepiej na podwyższeniu i przeciwnie do kierunku wiatru',
          isCorrect: false
        },
        {
          answer: 'c) bez znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '524. Dekontaminację dzielimy na:',
      answers: [
        {
          answer: 'a) wstępną i właściwą',
          isCorrect: true
        },
        {
          answer: 'a) wstępną i wtórną',
          isCorrect: false
        },
        {
          answer: 'b) utylizacyjną i właściwą',
          isCorrect: false
        }
      ]
    },
    {
      question: '525. Proces dekontaminacji można podzielić na:',
      answers: [
        {
          answer: 'a) dwa etapy',
          isCorrect: true
        },
        {
          answer: 'b) trzy etapy',
          isCorrect: false
        },
        {
          answer: 'c) cztery etapy',
          isCorrect: false
        }
      ]
    },
    {
      question: '526. Wyróżnia się dekontaminację:',
      answers: [
        {
          answer: 'a) wstępną',
          isCorrect: true
        },
        {
          answer: 'b) ogólną',
          isCorrect: false
        },
        {
          answer: 'c) odkażającą',
          isCorrect: false
        }
      ]
    },
    {
      question: '527. Punkt dekontaminacji wstępnej na miejscu akcji ratowniczej powinien znajdować się:',
      answers: [
        {
          answer: 'a) od strony nawietrznej w drugiej strefie działań',
          isCorrect: true
        },
        {
          answer: 'b) od strony zawietrznej poza strefą oddziaływania substancji niebezpiecznej',
          isCorrect: false
        },
        {
          answer: 'c) przy punkcie wejścia do strefy skażonej',
          isCorrect: false
        }
      ]
    },
    {
      question: '528. Dekontaminację wstępną realizuje się:',
      answers: [
        {
          answer: 'a) bezpośrednio po zakończeniu działań, najczęściej na terenie akcji ratownictwa chemicznego',
          isCorrect: true
        },
        {
          answer: 'b) poza terenem akcji ratownictwa chemicznego, w strażnicy lub specjalnym do tego przeznaczonym miejscu',
          isCorrect: false
        },
        {
          answer: 'c) po każdorazowym powrocie z akcji do jednostki',
          isCorrect: false
        }
      ]
    },
    {
      question: '529. Dekontaminację wstępną przeprowadzamy:',
      answers: [
        {
          answer: 'a) na miejscu akcji',
          isCorrect: true
        },
        {
          answer: 'b) w jednostce',
          isCorrect: false
        },
        {
          answer: 'c) przed rozpoczęciem działań',
          isCorrect: false
        }
      ]
    },
    {
      question: '530. Dekontaminację wstępną sprzętu użytego podczas akcji ratownictwa chemicznego wykonujemy:',
      answers: [
        {
          answer: 'a) po przyjeździe do jednostki',
          isCorrect: false
        },
        {
          answer: 'b) na miejscu prowadzonych działań',
          isCorrect: true
        },
        {
          answer: 'c) częściowo na miejscu prowadzonych działań, częściowo po przyjeździe do jednostki',
          isCorrect: false
        }
      ]
    },
    {
      question: '531. Punkt dekontaminacji wstępnej znajduje się:',
      answers: [
        {
          answer: 'a) w bezpośrednim miejscu prowadzonych działań (tj. w strefie I)',
          isCorrect: false
        },
        {
          answer: 'b) w strefie II na pograniczu strefy I',
          isCorrect: true
        },
        {
          answer: 'c) w dowolnym miejscu strefy II',
          isCorrect: false
        }
      ]
    },
    {
      question: '532. Podstawowe metody dekontaminacji wstępnej to:',
      answers: [
        {
          answer: 'a) degradacja',
          isCorrect: false
        },
        {
          answer: 'b) rozcieńczenie',
          isCorrect: true
        },
        {
          answer: 'c) spalenie',
          isCorrect: false
        }
      ]
    },
    {
      question: '533. Dekontaminacja wstępna sprzętu wykonywana jest:',
      answers: [
        {
          answer: 'a) w jednostce macierzystej po powrocie z akcji',
          isCorrect: false
        },
        {
          answer: 'b) na miejscu akcji po zakończeniu działań ratowniczych',
          isCorrect: true
        },
        {
          answer: 'c) na miejscu akcji po każdym wyjściu ze strefy działań',
          isCorrect: false
        }
      ]
    },
    {
      question: '534. Nalepka zgodnie z przepisami ADR dla gazów niepalnych i nietrujących ma kolor:',
      answers: [
        {
          answer: 'a) biały',
          isCorrect: false
        },
        {
          answer: 'b) zielony',
          isCorrect: true
        },
        {
          answer: 'c) niebieski',
          isCorrect: false
        }
      ]
    },
    {
      question: '535. Numer rozpoznawczy rodzaju niebezpieczeństwa składa się z:',
      answers: [
        {
          answer: 'a) tylko dwóch cyfr',
          isCorrect: false
        },
        {
          answer: 'b) dwóch lub trzech cyfr',
          isCorrect: true
        },
        {
          answer: 'c) z czterech cyfr',
          isCorrect: false
        }
      ]
    },
    {
      question: '536. Numer umieszczony w górnej części tablicy ostrzegawczej pojazdu przewożącego materiały niebezpieczne określa:',
      answers: [
        {
          answer: 'a) nr rozpoznawczy ONZ (UN) substancji',
          isCorrect: false
        },
        {
          answer: 'b) nr transportu',
          isCorrect: false
        },
        {
          answer: 'c) nr rozpoznawczy rodzaju niebezpieczeństwa',
          isCorrect: true
        }
      ]
    },
    {
      question: '537. Według przepisów ADR o przewozie drogowym materiałów niebezpiecznych znak X określa:',
      answers: [
        {
          answer: 'a) materiał niebezpiecznie reagujący z wodą',
          isCorrect: true
        },
        {
          answer: 'b) substancje toksyczne i wybuchowe',
          isCorrect: false
        },
        {
          answer: 'c) materiał promieniotwórczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '538. Znak X umieszczony na tablicy ostrzegawczej przy przewozie materiałów niebezpiecznych oznacza:',
      answers: [
        {
          answer: 'a) absolutny zakaz kontaktu przewożonej substancji z wodą',
          isCorrect: true
        },
        {
          answer: 'b) przewożona substancja nie wchodzi w niebezpieczny kontakt z wodą',
          isCorrect: false
        },
        {
          answer: 'c) woda jako zalecany środek gaśniczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '539. Co oznacza liczba w dolnej części tablicy służącej do oznaczania przewozu materiałów niebezpiecznych',
      answers: [
        {
          answer: 'a) właściwości fizykochemiczne substancji',
          isCorrect: false
        },
        {
          answer: 'b) zachowanie się substancji przy kontakcie z wodą',
          isCorrect: false
        },
        {
          answer: 'c) pozwala na zidentyfikowanie substancji na podstawie numeru ONZ (UN)',
          isCorrect: true
        }
      ]
    },
    {
      question: '540. Materiał samozapalny oznakowany jest nalepką:',
      answers: [
        {
          answer: 'a) https://naklejkiadr.pl/168-home_default/naklejka-adr-materialy-samozapalne-42-100x100.jpg',
          isCorrect: true
        },
        {
          answer: 'b) https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwC4nAJPf1fyIJYOjHhXQ07QzK0dzgY8d0YB4X_DRgPYCHeqtGgg&s',
          isCorrect: false
        },
        {
          answer: 'c) https://shop.truckdesign.pl/media/images/big/b49debbf382e7b60fcef69a916b9549b.jpg',
          isCorrect: false
        },
        {
          answer: 'd) https://www.sklep-kormex.pl/media/products/359049e8e6bbf9b201e5c5c16dc24133/images/thumbnail/small_Nalepka-4-1.png?lm=1573145001',
          isCorrect: false
        }
      ]
    },
    {
      question: '541. Absolutny zakaz kontaktu z wodą jest oznaczony na tablicy pomarańczowej do oznaczania towarów niebezpiecznych w transporcie drogowym następującym znakiem:',
      answers: [
        {
          answer: 'a) W',
          isCorrect: false
        },
        {
          answer: 'b) X',
          isCorrect: true
        },
        {
          answer: 'c) Y',
          isCorrect: false
        }
      ]
    },
    {
      question: '542. Strefa „0” jest to przestrzeń w której:',
      answers: [
        {
          answer: 'a) przez cały czas lub długotrwale występuje atmosfera wybuchowa',
          isCorrect: true
        },
        {
          answer: 'b) poziom stężenia materiału niebezpiecznego nie przekracza wartości NDS',
          isCorrect: false
        },
        {
          answer: 'c) występuje emisja materiału niebezpiecznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '543. GGW to:',
      answers: [
        {
          answer: 'a) najwyższe stężenie substancji palnej w mieszaninie z powietrzem, przy którym jeszcze może wystąpić zapalenie się tej substancji pod wpływem bodźca energetycznego',
          isCorrect: true
        },
        {
          answer: 'b) najniższe stężenie substancji palnej w mieszaninie z powietrzem, przy którym może już wystąpić zapalenie się tej substancji pod wpływem bodźca energetycznego',
          isCorrect: false
        },
        {
          answer: 'c) jest to stężenie czynników szkodliwych dla zdrowia – ustalone jako wartości średnie – które nie powinno powodować ujemnych zmian w stanie zdrowia pracownika oraz jego przyszłych pokoleń, jeśli utrzymuje się ono w środowisku pracy nie dłużej niż 30 \tminut w czasie zmiany roboczej',
          isCorrect: false
        }
      ]
    },
    {
      question: '544. Pokrycie rozlewu substancji ropopochodnych pianą gaśniczą ma na celu:',
      answers: [
        {
          answer: 'a) obniżenie procesu parowania lotnych związków mogących spowodować pożar',
          isCorrect: true
        },
        {
          answer: 'b) neutralizuje substancję ropopochodną',
          isCorrect: false
        },
        {
          answer: 'c) widoczne oznakowanie miejsca rozlewiska',
          isCorrect: false
        }
      ]
    },
    {
      question: '545. Eksplozymetr wykorzystujemy do:',
      answers: [
        {
          answer: 'a) pomiarów stężeń gazów wybuchowych',
          isCorrect: true
        },
        {
          answer: 'b) identyfikacji substancji niebezpiecznych',
          isCorrect: false
        },
        {
          answer: 'c) pomiarów stężeń substancji toksycznych',
          isCorrect: false
        }
      ]
    },
    {
      question: '546. Zastosowanie sorbentów organicznych naturalnych wobec substancji ciekłych utleniających może spowodować:',
      answers: [
        {
          answer: 'a) nieskuteczność działań, ponieważ nie wchłaniają tych substancji',
          isCorrect: false
        },
        {
          answer: 'b) zapalenie się sorbentu',
          isCorrect: true
        },
        {
          answer: 'c) poprawę wchłaniania substancji',
          isCorrect: false
        }
      ]
    },
    {
      question: '547. Zjawisko adsorpcji jest to:',
      answers: [
        {
          answer: 'a) pochłanianie, polegające na utworzeniu cienkiej cząsteczkowej warstwy na powierzchni sorbentu',
          isCorrect: true
        },
        {
          answer: 'b) pochłanianie, polegające na przenikaniu substancji do wewnątrz sorbentu',
          isCorrect: false
        },
        {
          answer: 'c) proces zobojętniania',
          isCorrect: false
        },
        {
          answer: 'd) proces neutralizacji',
          isCorrect: false
        }
      ]
    },
    {
      question: '548. Absorpcja jest to:',
      answers: [
        {
          answer: 'a) przyspieszenie biodegradacji substancji niebezpiecznych',
          isCorrect: false
        },
        {
          answer: 'b) pochłanianie rozlanych cieczy i innych substancji niebezpiecznych całą objętością przez sorbent',
          isCorrect: true
        },
        {
          answer: 'c) chemiczny proces zobojętniania toksycznego oddziaływania substancji niebezpiecznych, poprzez zmianę ich struktury chemicznej na nową nie stwarzającą zagrożenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '549. Pojęcie sorpcja dotyczy:',
      answers: [
        {
          answer: 'a) objętościowego zatrzymywania substancji',
          isCorrect: false
        },
        {
          answer: 'b) powierzchniowego zatrzymywania substancji',
          isCorrect: false
        },
        {
          answer: 'c) objętościowego i powierzchniowego zatrzymywania substancji',
          isCorrect: true
        }
      ]
    },
    {
      question: '550. Neutralizacja jest to:',
      answers: [
        {
          answer: 'a) pochłanianie rozlanych cieczy i innych substancji niebezpiecznych przez ciała porowate',
          isCorrect: false
        },
        {
          answer: 'b) chemiczny proces zobojętniania chemicznie aktywnych substancji niebezpiecznych',
          isCorrect: true
        },
        {
          answer: 'c) proces dyfuzyjnego przenikania składnika jednej fazy w głąb drugiej, zachodzący podczas bezprzeponowego zetknięcia obu faz',
          isCorrect: false
        }
      ]
    },
    {
      question: '551. Neutralizacja kwasu (np. kwasu solnego) w miejscu zdarzenia polega na:',
      answers: [
        {
          answer: 'a) przesypaniu i wymieszaniu rozlewiska z piaskiem',
          isCorrect: false
        },
        {
          answer: 'b) przesypaniu i wymieszaniu rozlewiska z wapnem hydratyzowanym',
          isCorrect: true
        },
        {
          answer: 'c) spłukanie niewielką ilością wody, ponieważ pod jej wpływem kwas ulegnie rozłożeniu',
          isCorrect: false
        }
      ]
    },
    {
      question: '552. Rozlaną z uszkodzonego zbiornika paliwa samochodu benzynę neutralizujemy:',
      answers: [
        {
          answer: 'a) wodorowęglanem sodu, a następnie pianą gaśniczą',
          isCorrect: false
        },
        {
          answer: 'b) sorbentem lub piaskiem, a następnie roztworem detergentów',
          isCorrect: false
        },
        {
          answer: 'c) benzyna, tak jak inne substancje ropopochodne nie podlega neutralizacji',
          isCorrect: true
        }
      ]
    },
    {
      question: '553. Zneutralizowanie substancji niebezpiecznej polega na:',
      answers: [
        {
          answer: 'a) rozcieńczeniu jej dużą ilością wody',
          isCorrect: false
        },
        {
          answer: 'b) zebraniu jej przy użyciu sorbentu',
          isCorrect: false
        },
        {
          answer: 'c) zobojętnieniu odpowiednią substancją',
          isCorrect: true
        }
      ]
    },
    {
      question: '554. Ługami nazywamy:',
      answers: [
        {
          answer: 'a) mieszaninę kwasu z zasadą',
          isCorrect: false
        },
        {
          answer: 'b) wodne roztwory silnych zasad',
          isCorrect: true
        },
        {
          answer: 'c) silne kwasy',
          isCorrect: false
        }
      ]
    },
    {
      question: '555. Wskaż w którym z poniższych zestawów występują wyłącznie gazy lżejsze od powietrza:',
      answers: [
        {
          answer: 'a) Metan, propan-butan, wodór',
          isCorrect: false
        },
        {
          answer: 'b) siarkowodór, amoniak, chlor',
          isCorrect: false
        },
        {
          answer: 'c) amoniak, metan, wodór',
          isCorrect: true
        }
      ]
    },
    {
      question: '556. Zjawisko konwekcji powoduje, że obłok gazowy:',
      answers: [
        {
          answer: 'a) ścieli się tuż przy ziemi',
          isCorrect: false
        },
        {
          answer: 'b) unosi się',
          isCorrect: true
        },
        {
          answer: 'c) pozostaje w stanie równowagi, nie przemieszcza się',
          isCorrect: false
        }
      ]
    },
    {
      question: '557. Zjawisko inwersji powoduje, że obłok gazowy:',
      answers: [
        {
          answer: 'a) ścieli się przy ziemi',
          isCorrect: true
        },
        {
          answer: 'b) unosi się',
          isCorrect: false
        },
        {
          answer: 'c) pozostaje w stanie równowagi, nie przemieszcza się',
          isCorrect: false
        }
      ]
    },
    {
      question: '558. W razie wycieku z cysterny nieznanej substancji przed przystąpieniem do uszczelnienia w pierwszej kolejności należy:',
      answers: [
        {
          answer: 'a) zabezpieczyć teren wokół cysterny przez podanie piany średniej',
          isCorrect: false
        },
        {
          answer: 'b) przeprowadzić rozpoznanie i określić wyciekającą substancję',
          isCorrect: true
        },
        {
          answer: 'c) niezwłocznie przystąpić do rozłączania składu pociągu',
          isCorrect: false
        }
      ]
    },
    {
      question: '559. W przypadku awarii cysterny przewożącej materiały niebezpieczne rodzaj substancji identyfikujemy po:',
      answers: [
        {
          answer: 'a) zapachu',
          isCorrect: false
        },
        {
          answer: 'b) wpływie substancji na środowisko',
          isCorrect: false
        },
        {
          answer: 'c) numerze na tablicy ostrzegawczej umieszczonej na cysternie',
          isCorrect: true
        }
      ]
    },
    {
      question: '560. Do strefy 1 bezpośredniego zagrożenia substancją chemiczną może wchodzić:',
      answers: [
        {
          answer: 'a) minimum dwóch ratowników',
          isCorrect: true
        },
        {
          answer: 'b) minimum jeden ratownik',
          isCorrect: false
        },
        {
          answer: 'c) minimum czterech ratowników',
          isCorrect: false
        }
      ]
    },
    {
      question: '561. Kurtyny wodne sprawia się na terenie akcji ratownictwa chemicznego w celu:',
      answers: [
        {
          answer: 'a) przeprowadzenie dekontaminacji',
          isCorrect: false
        },
        {
          answer: 'b) opłukania terenu skażonego',
          isCorrect: false
        },
        {
          answer: 'c) związania lub rozpuszczenia par i gazów, co zwalnia przemieszczanie się obłoku gazowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '562. Po przybyciu zastępem gaśniczym na miejsce wycieku fazy ciekłej skroplonego gazu z uszkodzonej cysterny samochodowej, można podjąć następujące działania ratownicze w zakresie ratownictwa chemicznego:',
      answers: [
        {
          answer: 'a) zabezpieczenie miejsca zdarzenia przed dostępem osób postronnych, identyfikacja substancji według numeru na tablicy ostrzegawczej, przekazanie danych do PSK/MSK i wezwanie specjalistycznej grupy ratownictwa chemicznego',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenie miejsca zdarzenia przed dostępem osób postronnych, zatkanie miejsca wypływu zmoczoną wodą szmatą oraz podaniu prądów mgłowych wody na bezpośrednie sąsiedztwo wycieku, a następnie dokonanie rozpoznania oceny sytuacji i \twezwanie specjalistycznej grupy ratownictwa chemicznego',
          isCorrect: true
        },
        {
          answer: 'c) zabezpieczenie miejsca zdarzenia przed dostępem osób postronnych i monitorowanie sytuacji do czasu przybycia specjalistycznej grupy ratownictwa chemicznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '563. Lokalizacja i likwidacja rozlanego oleju na akwenie polega na:',
      answers: [
        {
          answer: 'a) postawieniu zapory pływającej i rozproszeniu plamy olejowej silnymi zwartymi \tprądami wody',
          isCorrect: false
        },
        {
          answer: 'b) postawieniu zapory pływającej i pokryciu powierzchni rozlewiska pianą gaśniczą w celu ekologicznej neutralizacji',
          isCorrect: false
        },
        {
          answer: 'c) postawieniu zapory pływającej i zbieranie plamy olejowej przy użyciu zbieracza',
          isCorrect: true
        }
      ]
    },
    {
      question: '564. Zapory sorpcyjne:',
      answers: [
        {
          answer: 'a) zapobiegają przedostaniu się poza nią grubej warstwy oleju',
          isCorrect: false
        },
        {
          answer: 'b) wykorzystuje się do zbierania resztek rozlanego oleju',
          isCorrect: true
        },
        {
          answer: 'c) ograniczają rozprzestrzenianie się warstwy rozlanego oleju w pierwszej fazie działań',
          isCorrect: false
        }
      ]
    },
    {
      question: '565. Jakim kolorem oznakowany powinien być rurociąg, którym przesyłane są oleje i ciecze palne?',
      answers: [
        {
          answer: 'a) czarny',
          isCorrect: false
        },
        {
          answer: 'b) żółty',
          isCorrect: false
        },
        {
          answer: 'c) brązowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '566. Jakim kolorem oznakowany powinien być rurociąg, którym przesyłane jest powietrze?',
      answers: [
        {
          answer: 'a) białe',
          isCorrect: false
        },
        {
          answer: 'b) błękitne',
          isCorrect: true
        },
        {
          answer: 'c) zielone',
          isCorrect: false
        }
      ]
    },
    {
      question: '567. Gdy ratownik ma do czynienia z podejrzaną przesyłką, która jest nieuszkodzona i nie posiada sprzętu dozymetrycznego, powinien wyznaczyć wstępną strefę awaryjną o promieniu?',
      answers: [
        {
          answer: 'a) 3 m wokół przesyłki',
          isCorrect: true
        },
        {
          answer: 'b) 5 m wokół przesyłki',
          isCorrect: false
        },
        {
          answer: 'c) 10 m wokół przesyłki',
          isCorrect: false
        }
      ]
    },
    {
      question: '568. Gdy ratownik podejrzewa zagrożenie użycia tzw. „brudnej bomby” i nie posiada sprzętu dozymetrycznego, powinien wyznaczyć wstępną strefę awaryjną o promieniu?',
      answers: [
        {
          answer: 'a) 150 m',
          isCorrect: false
        },
        {
          answer: 'b) 300 m',
          isCorrect: true
        },
        {
          answer: 'c) 500 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '569. Wskaż poprawny zestaw specjalistycznego sprzętu używanego do likwidacji rozlewów olejowych na akwenach:',
      answers: [
        {
          answer: 'a) zapory przeciwolejowe, zbieracze olejowe, węże ssawne',
          isCorrect: false
        },
        {
          answer: 'b) zapory przeciwolejowe, zbieracze olejowe, separatory oleju, pompy wraz z sprzętem pomocniczym',
          isCorrect: true
        },
        {
          answer: 'c) zapory przeciwolejowe, pompy chemiczne, pływaki, węże tłoczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '570. Butle z acetylenem mają kolor?',
      answers: [
        {
          answer: 'a) granatowy',
          isCorrect: false
        },
        {
          answer: 'b) kasztanowy',
          isCorrect: true
        },
        {
          answer: 'c) ciemno-zielony/ szary',
          isCorrect: false
        }
      ]
    },
    {
      question: '571. Poszkodowanego ewakuuje się z wnętrza pojazdu, gdy:',
      answers: [
        {
          answer: 'a) strażak ma na to ochotę',
          isCorrect: false
        },
        {
          answer: 'b) na polecenie KDR',
          isCorrect: false
        },
        {
          answer: 'c) gdy występuje stan zagrożenia życia',
          isCorrect: true
        }
      ]
    },
    {
      question: '572. Podczas wypadków z udziałem autobusów najważniejszym elementem działań jest:',
      answers: [
        {
          answer: 'a) ustalenie liczby osób poszkodowanych',
          isCorrect: true
        },
        {
          answer: 'b) ustalenie danych firmy przewozowej',
          isCorrect: false
        },
        {
          answer: 'c) ustalenie ilości bagaży podręcznych',
          isCorrect: false
        }
      ]
    },
    {
      question: '573. Po dojechaniu do miejsca wypadku stwierdzono, że nie ma osób poszkodowanych. Działania straży pożarnej będą polegały na:',
      answers: [
        {
          answer: 'a) ustawieniu pojazdu na jezdni',
          isCorrect: false
        },
        {
          answer: 'b) odłączeniu akumulatorów oraz zabezpieczeniu miejsca zdarzenia',
          isCorrect: true
        },
        {
          answer: 'c) stabilizacji pojazdu poprzez spuszczenie powietrza z kół',
          isCorrect: false
        }
      ]
    },
    {
      question: '574. Jakie przepisy normują transport drogowy towarów niebezpiecznych?',
      answers: [
        {
          answer: 'a) OND',
          isCorrect: false
        },
        {
          answer: 'b) TGE',
          isCorrect: false
        },
        {
          answer: 'c) ADR',
          isCorrect: true
        }
      ]
    },
    {
      question: '575. Zaznacz prawidłowy skrót przepisów regulujących przewóz towarów niebezpiecznych drogą kolejową:',
      answers: [
        {
          answer: 'a) ADR',
          isCorrect: false
        },
        {
          answer: 'b) RID',
          isCorrect: true
        },
        {
          answer: 'c) ICAO',
          isCorrect: false
        }
      ]
    },
    {
      question: '576. Podział towarów niebezpiecznych na klasy wg przepisów o transporcie drogowym określa:',
      answers: [
        {
          answer: 'a) RID',
          isCorrect: false
        },
        {
          answer: 'b) ADR',
          isCorrect: true
        },
        {
          answer: 'c) Kodeks Ruchu Drogowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '577. Terminem substancje samoreaktywne określamy:',
      answers: [
        {
          answer: 'a) nadtlenki organiczne',
          isCorrect: false
        },
        {
          answer: 'b) materiały utleniające podtrzymujące palenie',
          isCorrect: false
        },
        {
          answer: 'c) materiały podatne na samorzutny rozkład',
          isCorrect: true
        }
      ]
    },
    {
      question: '578. TSR (temperatura samoprzyśpieszającego się rozkładu) stosowana jest w odniesieniu do:',
      answers: [
        {
          answer: 'a) materiałów wybuchowych',
          isCorrect: false
        },
        {
          answer: 'b) materiałów stałych zapalnych',
          isCorrect: false
        },
        {
          answer: 'c) nadtlenków organicznych',
          isCorrect: true
        }
      ]
    },
    {
      question: '579. Neutralizację substancji prowadzi się za pomocą:',
      answers: [
        {
          answer: 'a) wody',
          isCorrect: false
        },
        {
          answer: 'b) związków chemicznych',
          isCorrect: true
        },
        {
          answer: 'c) sorbentów',
          isCorrect: false
        }
      ]
    },
    {
      question: '580. Wartość pH 10 oznacza:',
      answers: [
        {
          answer: 'a) roztwór obojętny',
          isCorrect: false
        },
        {
          answer: 'b) roztwór kwaśny',
          isCorrect: false
        },
        {
          answer: 'c) roztwór zasadowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '581. Jaka jest podstawowa jednostka pomiarowa substancji toksycznych?',
      answers: [
        {
          answer: 'a) ppm',
          isCorrect: true
        },
        {
          answer: 'b) AV',
          isCorrect: false
        },
        {
          answer: 'c) mm',
          isCorrect: false
        }
      ]
    },
    {
      question: '582. Temperatura zapłonu jest podstawowym parametrem do określania niebezpieczeństwa wybuchowego:',
      answers: [
        {
          answer: 'a) drewna',
          isCorrect: false
        },
        {
          answer: 'b) metali',
          isCorrect: false
        },
        {
          answer: 'c) benzyny',
          isCorrect: true
        }
      ]
    },
    {
      question: '583. Minimalna zawartość składnika palnego w mieszaninie z powietrzem przy której zapłon jest już możliwy to:',
      answers: [
        {
          answer: 'a) dolna granica wybuchowości',
          isCorrect: true
        },
        {
          answer: 'b) najwyższe dopuszczalne stężenie',
          isCorrect: false
        },
        {
          answer: 'c) górna granica wybuchowości',
          isCorrect: false
        }
      ]
    },
    {
      question: '584. Zdefiniuj jednostkę ppm:',
      answers: [
        {
          answer: 'a) oznacza jedna cząstkę na milion i jest jednostką liczności substancji',
          isCorrect: true
        },
        {
          answer: 'b) oznacza jedna cząstkę na bilion i jest jednostką liczności substancji',
          isCorrect: false
        },
        {
          answer: 'c) oznacza jednostkę substancji tj. jedna cząstka na tysiąc',
          isCorrect: false
        }
      ]
    },
    {
      question: '585. Proszę wyjaśnić, jak zachowują się gazy, gdy ich gęstość względem powietrza jest porównywalna:',
      answers: [
        {
          answer: 'a) gazy unoszą się do góry',
          isCorrect: false
        },
        {
          answer: 'b) gazy rozchodzą się we wszystkich kierunkach',
          isCorrect: true
        },
        {
          answer: 'c) gazy opadają i pełzną',
          isCorrect: false
        }
      ]
    },
    {
      question: '586. Papierek lakmusowy w obecności kwasów barwi się na kolor:',
      answers: [
        {
          answer: 'a) niebieski',
          isCorrect: false
        },
        {
          answer: 'b) nie zmienia barwy',
          isCorrect: false
        },
        {
          answer: 'c) czerwony',
          isCorrect: true
        }
      ]
    },
    {
      question: '587. Odczyn substancji określamy przy pomocy:',
      answers: [
        {
          answer: 'a) rurek wskaźnikowych',
          isCorrect: false
        },
        {
          answer: 'b) papierka wskaźnikowego',
          isCorrect: true
        },
        {
          answer: 'c) eksplozymetru',
          isCorrect: false
        }
      ]
    },
    {
      question: '588. Ciecz o roztworze pH=3 jest to:',
      answers: [
        {
          answer: 'a) ciecz obojętna',
          isCorrect: false
        },
        {
          answer: 'b) ciecz o odczynie kwaśnym',
          isCorrect: true
        },
        {
          answer: 'c) ciecz o odczynie zasadowym',
          isCorrect: false
        }
      ]
    },
    {
      question: '589. Wartość wskaźnika pH=7 świadczy iż badana substancja posiada odczyn:',
      answers: [
        {
          answer: 'a) obojętny',
          isCorrect: true
        },
        {
          answer: 'b) zasadowy',
          isCorrect: false
        },
        {
          answer: 'c) kwaśny',
          isCorrect: false
        }
      ]
    },
    {
      question: '590. Metoda katalityczna stosowana jest do pomiarów:',
      answers: [
        {
          answer: 'a) gazów toksycznych',
          isCorrect: false
        },
        {
          answer: 'b) gazów palnych',
          isCorrect: true
        },
        {
          answer: 'c) odczynu roztworu pH',
          isCorrect: false
        },
        {
          answer: 'd) promieniowania jonizującego',
          isCorrect: false
        }
      ]
    },
    {
      question: '591. Czy zmiany stężenia tlenu w strefie zagrożenia wybuchem wpływają w istotny sposób na oznaczenie dolnej granicy wybuchowości:',
      answers: [
        {
          answer: 'a) nie – wynik pomiaru zawsze jest stały',
          isCorrect: false
        },
        {
          answer: 'b) tak – wynik może zostać zafałszowany',
          isCorrect: true
        },
        {
          answer: 'c) tak – ale różnica jest niewielka i można to zaniedbać',
          isCorrect: false
        }
      ]
    },
    {
      question: '592. Czy wilgotność powietrza ma wpływ na odprowadzanie ładunków elektrostatycznych?',
      answers: [
        {
          answer: 'a) nie ma żadnego znaczenia – nie zostanie ona rozładowana',
          isCorrect: false
        },
        {
          answer: 'b) tak – ale nie można mieć pewności, że zostaną wyrównane potencjały',
          isCorrect: true
        },
        {
          answer: 'c) tak – zawsze nastąpi jej rozładowanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '593. Kwasem nie jest:',
      answers: [
        {
          answer: 'a) NaCl',
          isCorrect: true
        },
        {
          answer: 'b) HCl',
          isCorrect: false
        },
        {
          answer: 'c) HNO3',
          isCorrect: false
        }
      ]
    },
    {
      question: '594. Który z poniższych związków nie jest utleniaczem:',
      answers: [
        {
          answer: 'a) fluor (F2)',
          isCorrect: false
        },
        {
          answer: 'b) etan (C good2H good6)',
          isCorrect: true
        },
        {
          answer: 'c) woda utleniona (H2O2)',
          isCorrect: false
        }
      ]
    },
    {
      question: '595. Jeżeli gęstość gazu lub mieszaniny gazów i par względem powietrza wynosi 2,35 to:',
      answers: [
        {
          answer: 'a) gaz lub mieszanina gazów i par będzie unosiła się do góry',
          isCorrect: false
        },
        {
          answer: 'b) gaz lub mieszanina gazów i par będzie opadała i ścieliła się po powierzchni',
          isCorrect: true
        },
        {
          answer: 'c) gaz lub mieszanina gazów i par będzie rozchodziła się we wszystkich kierunkach',
          isCorrect: false
        }
      ]
    },
    {
      question: '596. Neutralizacja to:',
      answers: [
        {
          answer: 'a) pochłanianie gazów par cieczy par substancji stałych i ciał rozpuszczonych w cieczach przez ciała porowate',
          isCorrect: false
        },
        {
          answer: 'b) zobojętnienie proces zachodzący przy dodaniu do nadmiaru kwasu/zasady takiej ilości zasady/kwasu, że powstająca substancja nie jest ani kwaśna, ani alkaliczna, a jej pH wynosi 7',
          isCorrect: true
        },
        {
          answer: 'c) proces zachodzący przy dodaniu do nadmiaru kwasu/zasady takiej ilości zasady/kwasu, że powstająca substancja posiada pH=1',
          isCorrect: false
        }
      ]
    },
    {
      question: '597. Czy w przypadku gdy stężenie chloru wynosi 1,99 ppm konieczna jest praca w sprzęcie ochrony dróg oddechowych (NDS = 0,47 ppm NDSCh = 2,84 ppm)?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie',
          isCorrect: false
        }
      ]
    },
    {
      question: '598. Podaj co oznacza strefa zagrożenia wybuchem „2”:',
      answers: [
        {
          answer: 'a) przestrzeń, w której stale lub w długich okresach występuje atmosfera wybuchowa',
          isCorrect: false
        },
        {
          answer: 'b) przestrzeń, w której czasami występuje atmosfera wybuchowa',
          isCorrect: false
        },
        {
          answer: 'c) przestrzeń, w której zagrożenie występuje bardzo rzadko i w krótkim okresie',
          isCorrect: true
        }
      ]
    },
    {
      question: '599. Papierek lakmusowy stosowany do określenia pH w środowisku kwaśnym barwi się:',
      answers: [
        {
          answer: 'a) na niebiesko',
          isCorrect: false
        },
        {
          answer: 'b) na czerwono',
          isCorrect: true
        },
        {
          answer: 'c) na żółto',
          isCorrect: false
        },
        {
          answer: 'd) nie zmienia zabarwienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '600. Co oznacza jeśli papierek wskaźnikowy zabarwi się na niebiesko?',
      answers: [
        {
          answer: 'a) odczyn roztworu kwaśny',
          isCorrect: false
        },
        {
          answer: 'b) odczyn roztworu obojętny',
          isCorrect: false
        },
        {
          answer: 'c) odczyn roztworu zasadowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '601. NDSP to:',
      answers: [
        {
          answer: 'a) stężenie czynników szkodliwych dla zdrowia lub życia pracownika, które nie może być przekroczone w środowisku pracy',
          isCorrect: true
        },
        {
          answer: 'b) stężenie czynników szkodliwych dla zdrowia lub życia pracownika, które może być przekroczone w środowisku pracy',
          isCorrect: false
        },
        {
          answer: 'c) stężenie czynników szkodliwych dla zdrowia lub życia pracownika, które jest obojętne w środowisku pracy',
          isCorrect: false
        }
      ]
    },
    {
      question: '602. NDSch to:',
      answers: [
        {
          answer: 'a) stężenie czynników szkodliwych dla zdrowia, które nie powinno powodować ujemnych zmian w stanie zdrowia, jeżeli utrzymuje się w środowisku pracy nie dłużej niż 30 minut podczas zmiany roboczej',
          isCorrect: true
        },
        {
          answer: 'b) stężenie czynników szkodliwych dla zdrowia, które nie powinno powodować ujemnych zmian w stanie zdrowia, jeżeli utrzymuje się w środowisku pracy nie dłużej niż 15 minut podczas zmiany roboczej',
          isCorrect: false
        },
        {
          answer: 'c) stężenie czynników szkodliwych dla zdrowia, które nie powinno powodować ujemnych zmian w stanie zdrowia, jeżeli utrzymuje się w środowisku pracy nie dłużej niż 20 minut podczas zmiany roboczej',
          isCorrect: false
        }
      ]
    },
    {
      question: '603. NDS to:',
      answers: [
        {
          answer: 'a) stężenie substancji szkodliwej, która przy stałym kontakcie w ciągu 8 godzin pracy, przez wieloletni okres nie wywołuje żadnych objawów zatrucia',
          isCorrect: true
        },
        {
          answer: 'b) stężenie substancji szkodliwej, która przy stałym kontakcie w ciągu 8 godzin pracy, przez wieloletni okres wywołuje lekkie objawy zatrucia',
          isCorrect: false
        },
        {
          answer: 'c) stężenie substancji szkodliwej, która przy stałym kontakcie w ciągu 8 godzin pracy, przez wieloletni okres wywołuje ciężkie objawy zatrucia',
          isCorrect: false
        }
      ]
    },
    {
      question: '604. DGW to:',
      answers: [
        {
          answer: 'a) wartość stężenia substancji palnej przekroczenie, którego powoduje konieczność wyłączenia wszelkich urządzeń elektrycznych za wyjątkiem konstrukcyjnie dostosowanych do pracy w strefach zagrożonych wybuchem',
          isCorrect: false
        },
        {
          answer: 'b) najniższe stężenie substancji palnej w mieszaninie z powietrzem, przy którym może nastąpić wybuch tej substancji pod wpływem bodźca energetycznego',
          isCorrect: true
        },
        {
          answer: 'c) najwyższe stężenie substancji palnej w mieszaninie z powietrzem, przy którym może nastąpić zapalenie się tej substancji pod wpływem bodźca energetycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '605. Jednostką stężenia gazu w powietrzu jest:',
      answers: [
        {
          answer: 'a) mm/m2',
          isCorrect: false
        },
        {
          answer: 'b) mg/m3',
          isCorrect: true
        },
        {
          answer: 'c) kN/m3',
          isCorrect: false
        }
      ]
    },
    {
      question: '606. Gaz ziemny składa się przede wszystkim z:',
      answers: [
        {
          answer: 'a) propanu i butanu',
          isCorrect: false
        },
        {
          answer: 'b) metanu i butanu',
          isCorrect: false
        },
        {
          answer: 'c) metanu',
          isCorrect: true
        }
      ]
    },
    {
      question: '607. Co rozumiesz pod pojęciem numeru UN materiału?',
      answers: [
        {
          answer: 'a) cyfrowe oznaczenie rodzaju zagrożenia stwarzanego przez materiał niebezpieczny',
          isCorrect: false
        },
        {
          answer: 'b) numer rozpoznawczy materiału lub przedmiotu',
          isCorrect: true
        },
        {
          answer: 'c) numer porządkowy danego materiału',
          isCorrect: false
        }
      ]
    },
    {
      question: '608. Znakiem określającym wytrzymałość opakowań dla materiałów niebezpiecznych jest:',
      answers: [
        {
          answer: 'a) X, Y, Z',
          isCorrect: true
        },
        {
          answer: 'b) I, II, III',
          isCorrect: false
        },
        {
          answer: 'c) D, S, M',
          isCorrect: false
        }
      ]
    },
    {
      question: '609. Kiedy pojazd przewożący towary niebezpieczne musi być oznakowany pomarańczowymi tablicami odblaskowymi bez numerów:',
      answers: [
        {
          answer: 'a) zawsze',
          isCorrect: false
        },
        {
          answer: 'b) tylko wtedy, gdy ilość materiałów niebezpiecznych w pojeździe przekracza określone limity',
          isCorrect: true
        },
        {
          answer: 'c) nie jest wymagane takie oznakowanie pojazdu',
          isCorrect: false
        }
      ]
    },
    {
      question: '610. Materiały ciekłe zapalne klasy 3 (zgodnie z Umową ADR) mogą stwarzać następujące zagrożenia:',
      answers: [
        {
          answer: 'a) tylko pożarem',
          isCorrect: false
        },
        {
          answer: 'b) pożarem i zatruciem',
          isCorrect: true
        },
        {
          answer: 'c) pożarem działaniem utleniającym i żrącym',
          isCorrect: false
        }
      ]
    },
    {
      question: '611. Co oznacza symbol X umieszczony przed numerem zagrożenia na tablicach ostrzegawczych na pojazdach przewożących towary niebezpieczne:',
      answers: [
        {
          answer: 'a) do gaszenia i ograniczania wycieku używać tylko wody',
          isCorrect: false
        },
        {
          answer: 'b) konieczność szybkiego schładzania zbiorników z przewożoną substancją',
          isCorrect: false
        },
        {
          answer: 'c) bezwzględny zakaz kontaktu przewożonej substancji z wodą',
          isCorrect: true
        }
      ]
    },
    {
      question: '612. Jak powinna być prawidłowo oznakowana cysterna samochodowa przewożąca towary niebezpieczne',
      answers: [
        {
          answer: 'a) powinna mieć wypisane z boku cysterny wszystkie dane na temat przewożonej substancji',
          isCorrect: false
        },
        {
          answer: 'b) nalepki ostrzegawcze tablice z numerem rozpoznawczym niebezpieczeństwa i numerem ONZ (UN)',
          isCorrect: true
        },
        {
          answer: 'c) tabliczkę tylko z numerem ONZ (UN)',
          isCorrect: false
        }
      ]
    },
    {
      question: '613. Jakim sprzętem określamy wielkość stref w trakcie działań ratownictwa chemicznego?',
      answers: [
        {
          answer: 'a) podręcznym sprzętem gaśniczym',
          isCorrect: false
        },
        {
          answer: 'b) urządzeniami do pomiaru stężeń substancji niebezpiecznej',
          isCorrect: true
        },
        {
          answer: 'c) kamerami termowizyjnymi',
          isCorrect: false
        }
      ]
    },
    {
      question: '614. Podczas prowadzenia działań w zakresie ratownictwa chemicznego do zadań meldunkowego należy m.in.:',
      answers: [
        {
          answer: 'a) Kontrolowanie liczby ratowników w strefie niebezpiecznej oraz czasu ich pracy',
          isCorrect: true
        },
        {
          answer: 'b) Zbieranie informacji na temat stanu zdrowia osób poszkodowanych',
          isCorrect: false
        },
        {
          answer: 'c) Przyjmowanie na miejscu zdarzenia przybyłych sił i przydzielanie im zadań',
          isCorrect: false
        }
      ]
    },
    {
      question: '615. Dobierając CUG do pracy w strefie niebezpiecznej należy:',
      answers: [
        {
          answer: 'a) wybrać ubranie uniwersalne',
          isCorrect: false
        },
        {
          answer: 'b) nie ma znaczenia rodzaj stosowanego ubrania',
          isCorrect: false
        },
        {
          answer: 'c) wybrać ubranie o największej odporności wobec danego związku',
          isCorrect: true
        }
      ]
    },
    {
      question: '616. Źródłem promieniowania jonizującego mogą być przede wszystkim:',
      answers: [
        {
          answer: 'a) urządzenia medyczne do dezynfekcji',
          isCorrect: false
        },
        {
          answer: 'b) substancje toksyczne i wybuchowe',
          isCorrect: false
        },
        {
          answer: 'c) materiały promieniotwórcze',
          isCorrect: true
        }
      ]
    },
    {
      question: '617. Najbardziej przenikliwe promieniowanie to?',
      answers: [
        {
          answer: 'a) α',
          isCorrect: false
        },
        {
          answer: 'b) β',
          isCorrect: false
        },
        {
          answer: 'c) γ',
          isCorrect: true
        }
      ]
    },
    {
      question: '618. Co jest priorytetem przy prowadzeniu akcji ratowniczej podczas awarii z uwolnieniem niebezpiecznych substancji chemicznych:',
      answers: [
        {
          answer: 'a) ochrona przed skażeniem wód gruntowych i gleby',
          isCorrect: false
        },
        {
          answer: 'b) powstrzymywanie wycieku substancji niebezpiecznej',
          isCorrect: false
        },
        {
          answer: 'c) ratowanie życia i zdrowia ludzi',
          isCorrect: true
        }
      ]
    },
    {
      question: '619. Mieszanina gazu lub par palnych z powietrzem jest niebezpieczna gdy stężenie jest:',
      answers: [
        {
          answer: 'a) poniżej DGW',
          isCorrect: false
        },
        {
          answer: 'b) powyżej GGW',
          isCorrect: false
        },
        {
          answer: 'c) pomiędzy DGW i GGW',
          isCorrect: true
        }
      ]
    },
    {
      question: '620. Podczas bezpośredniego udziału w ograniczaniu wycieku amoniaku z cysterny należy stosować:',
      answers: [
        {
          answer: 'a) ubrania ochrony podstawowej i narzędzi nieiskrzących',
          isCorrect: false
        },
        {
          answer: 'b) ubrania odporne na wysokie temperatury',
          isCorrect: false
        },
        {
          answer: 'c) chemoodporne ubrania gazoszczelne',
          isCorrect: true
        }
      ]
    },
    {
      question: '621. Podczas przepompowywania cieczy palnych i wybuchowych uziemieniu podlega:',
      answers: [
        {
          answer: 'a) tylko pompa z wężami',
          isCorrect: false
        },
        {
          answer: 'b) cysterna, do której medium jest przepompowywane i cysterna, z której jest ono pobierane',
          isCorrect: false
        },
        {
          answer: 'c) cysterna, do której prowadzone jest przepompowywanie pompa węże i cysterna, z której jest medium wypompowywane',
          isCorrect: true
        }
      ]
    },
    {
      question: '622. Czy stanowisko do przepompowywania substancji niebezpiecznych może znajdować się pod siecią trakcyjną pod napięciem:',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: true
        },
        {
          answer: 'b) tak',
          isCorrect: false
        },
        {
          answer: 'c) bez znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '623. Jaki neutralizator jest najwłaściwszy do oczyszczenia skażonej kwasem solnym powierzchni:',
      answers: [
        {
          answer: 'a) rozcieńczona (10%) woda amoniakalna (wodny roztwór amoniaku)',
          isCorrect: false
        },
        {
          answer: 'b) wapno hydratyzowane (wodorotlenek wapnia) lub mleczko wapienne (zawiesina wapna hydratyzowanego w wodzie)',
          isCorrect: true
        },
        {
          answer: 'c) woda z detergentami',
          isCorrect: false
        }
      ]
    },
    {
      question: '624. Rejestrację czasu pracy ratowników w strefie I prowadzi:',
      answers: [
        {
          answer: 'a) KDR',
          isCorrect: false
        },
        {
          answer: 'b) dowódca zastępu SRchem',
          isCorrect: false
        },
        {
          answer: 'c) meldunkowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '625. Działania ratownicze w strefie I powinny być wykonywane przez:',
      answers: [
        {
          answer: 'a) minimum 2 ratowników zabezpieczanych przez parę asekuracyjną',
          isCorrect: true
        },
        {
          answer: 'b) jednego ratownika zabezpieczanego przez parę asekuracyjną',
          isCorrect: false
        },
        {
          answer: 'c) minimum dwóch ratowników zabezpieczanych przez jednego ratownika',
          isCorrect: false
        }
      ]
    },
    {
      question: '626. Asekuracja polega na:',
      answers: [
        {
          answer: 'a) Wyznaczeniu i utrzymaniu w pełnej gotowości roty asekuracyjnej od momentu wejścia roty I do strefy zagrożenia',
          isCorrect: true
        },
        {
          answer: 'b) Wyznaczeniu roty asekuracyjnej spośród ratowników i obserwowaniu roty I w strefie zagrożonej',
          isCorrect: false
        },
        {
          answer: 'c) Utrzymywaniu stałej łączności z rotą I',
          isCorrect: false
        }
      ]
    },
    {
      question: '627. Czy zaleca się mieszanie roztworów dekontaminacyjnego i dezynfekującego:',
      answers: [
        {
          answer: 'a) TAK',
          isCorrect: false
        },
        {
          answer: 'b) NIE',
          isCorrect: true
        }
      ]
    },
    {
      question: '628. Przy pompowaniu cieczy z beczek lub zbiorników przyjmuje się, że strefa „O” występuje',
      answers: [
        {
          answer: 'a) przy górnej krawędzi zbiornika lub beczki',
          isCorrect: false
        },
        {
          answer: 'b) przy otworze, którym wypompowywane jest medium',
          isCorrect: false
        },
        {
          answer: 'c) wewnątrz beczki lub zbiornika',
          isCorrect: true
        }
      ]
    },
    {
      question: '629. W podziale na 2 strefy podczas akcji ratownictwa chemicznego',
      answers: [
        {
          answer: 'a) zdarzenie znajduje się w strefie 2',
          isCorrect: false
        },
        {
          answer: 'b) do strefy 2 można wejść tylko w specjalnym zabezpieczeniu',
          isCorrect: false
        },
        {
          answer: 'c) strefa 2 to strefa bezpieczna',
          isCorrect: true
        }
      ]
    },
    {
      question: '630. Pomiar stężenia gazów palnych i(lub) toksycznych w powietrzu przyrządami elektrochemicznymi należy prowadzić równocześnie z pomiarem stężenia:',
      answers: [
        {
          answer: 'a) powietrza',
          isCorrect: false
        },
        {
          answer: 'b) tlenu',
          isCorrect: true
        },
        {
          answer: 'c) tlenku węgla',
          isCorrect: false
        }
      ]
    },
    {
      question: '631. Zakończenie działań ratowniczych z zakresu ratownictwa chemicznego prowadzonych na drodze może nastąpić:',
      answers: [
        {
          answer: 'a) w momencie likwidacji bezpośredniego zagrożenia stwarzanego przez substancje chemiczne',
          isCorrect: true
        },
        {
          answer: 'b) w momencie usunięcia odpadów powstałych po działaniach ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) po przywróceniu parametrów technicznych drogi',
          isCorrect: false
        }
      ]
    },
    {
      question: '632. Wentylując obiekt zamknięty objęty wyciekiem amoniaku (wyciek powstrzymany załoga obiektu ewakuowana), chcąc wzmóc efekt wentylacji można:',
      answers: [
        {
          answer: 'a) otworzyć klapy dymowe w dachu (jeśli są) i okna na wyższych kondygnacjach',
          isCorrect: true
        },
        {
          answer: 'b) włączyć wentylację wywiewną obiektu',
          isCorrect: false
        },
        {
          answer: 'c) zamknąć klapy dymowe i okna na wyższych kondygnacjach, natomiast otworzyć okna i wrota na najniższej kondygnacji',
          isCorrect: false
        }
      ]
    },
    {
      question: '633. Dekontaminacja ubrania gazoszczelnego to:',
      answers: [
        {
          answer: 'a) zabiegi mające na celu usunięcie z powierzchni lub struktury wewnętrznej materiału związków chemicznych',
          isCorrect: true
        },
        {
          answer: 'b) usunięcie nieszczelności w ubraniu gazoszczelnym',
          isCorrect: false
        },
        {
          answer: 'c) odkażenie ratownika w stopniu umożliwiającym mu bezpieczne wyjście do II strefy',
          isCorrect: false
        }
      ]
    },
    {
      question: '634. Jakie promieniowanie jonizacyjne jesteśmy w stanie ograniczyć przy pomocy folii aluminiowej?',
      answers: [
        {
          answer: 'a) alfa i beta',
          isCorrect: true
        },
        {
          answer: 'b) tylko beta',
          isCorrect: false
        },
        {
          answer: 'c) beta i gamma',
          isCorrect: false
        }
      ]
    },
    {
      question: '635. Do zbierania benzyny z powierzchni wody należy użyć:',
      answers: [
        {
          answer: 'a) sorbentów mineralnych',
          isCorrect: false
        },
        {
          answer: 'b) sorbentów naturalnych',
          isCorrect: false
        },
        {
          answer: 'c) nie zbiera się benzyny z powierzchni wody',
          isCorrect: true
        }
      ]
    },
    {
      question: '636. Najbardziej skuteczną metodą usuwania rozlewów olejowych na akwenach jest:',
      answers: [
        {
          answer: 'a) polewanie w rejon rozlewu dużej ilości mikroorganizmów odżywiających się węglowodorami',
          isCorrect: false
        },
        {
          answer: 'b) dyspergowanie',
          isCorrect: false
        },
        {
          answer: 'c) zbieranie rozlanego oleju przy wykorzystaniu zbieraczy olejowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '637. Która z metod usuwania rozlewów olejowych ze zbiorników wodnych jest dozwolona bez zgody właściwego terytorialnie inspektoratu ochrony środowiska:',
      answers: [
        {
          answer: 'a) dyspergowanie',
          isCorrect: false
        },
        {
          answer: 'b) zatapianie',
          isCorrect: false
        },
        {
          answer: 'c) żadna z podanych',
          isCorrect: true
        }
      ]
    },
    {
      question: '638. Do sprawienia zapory pływającej na rzece potrzebne są?',
      answers: [
        {
          answer: 'a) przynajmniej jedna jednostka pływająca z silnikiem spalinowym',
          isCorrect: true
        },
        {
          answer: 'b) dwie jednostki pływające wiosłowe bez silnika spalinowego',
          isCorrect: false
        },
        {
          answer: 'c) jedna jednostka pływająca z silnikiem elektrycznym',
          isCorrect: false
        }
      ]
    },
    {
      question: '639. Zapory przeciwolejowe służą do:',
      answers: [
        {
          answer: 'a) Utrzymywania określonego poziomu oleju w zbiorniku',
          isCorrect: false
        },
        {
          answer: 'b) Ograniczenia i zatrzymania wędrującej na powierzchni wody plamy olejowej',
          isCorrect: true
        },
        {
          answer: 'c) Ochrony brzegu rzeki przed dopływem do niego plamy olejowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '640. Zapory sorpcyjne stosuje się głównie do:',
      answers: [
        {
          answer: 'a) wyłapywania „cienkich” filmów olejowych',
          isCorrect: true
        },
        {
          answer: 'b) wyłapywania „grubych” filmów olejowych',
          isCorrect: false
        },
        {
          answer: 'c) uszczelniania kanałów melioracyjnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '641. Zastosowanie pomocnicze do końcowego doczyszczenia powierzchni wód powierzchniowych z pozostałości filmu olejowego mają zapory:',
      answers: [
        {
          answer: 'a) pomostowe',
          isCorrect: false
        },
        {
          answer: 'b) sztywne',
          isCorrect: false
        },
        {
          answer: 'c) elastyczne płaszczowe',
          isCorrect: false
        },
        {
          answer: 'd) sorpcyjne',
          isCorrect: true
        }
      ]
    },
    {
      question: '642. Prawidłowa kolejność faz usuwania rozlewów olejowych z powierzchni wody to:',
      answers: [
        {
          answer: 'a) gromadzenie mieszaniny wodno-olejowej, doczyszczanie powierzchni wody, ograniczenie wielkości rozlewu, usuwanie oleju z powierzchni wody obróbka \tzebranego oleju',
          isCorrect: false
        },
        {
          answer: 'b) ograniczenie wielkości rozlewu, usuwanie oleju z powierzchni wody, gromadzenie mieszaniny wodno-olejowej, doczyszczanie powierzchni wody, obróbka zebranego oleju',
          isCorrect: true
        },
        {
          answer: 'c) usuwanie oleju z powierzchni wody, ograniczenie wielkości rozlewu, gromadzenie mieszaniny wodno-olejowej, doczyszczanie powierzchni wody, obróbka zebranego oleju',
          isCorrect: false
        }
      ]
    },
    {
      question: '643. Zaporę przeciwolejową – płaszczową stosuje się',
      answers: [
        {
          answer: 'a) na każdym cieku i zbiorniku wodnym, niezależnie od szybkości przepływu wody',
          isCorrect: false
        },
        {
          answer: 'b) na ciekach i zbiornikach wodnych o małym i burzliwym przepływie wody',
          isCorrect: false
        },
        {
          answer: 'c) na ciekach i zbiornikach wodnych o małym i spokojnym przepływie wody',
          isCorrect: true
        }
      ]
    },
    {
      question: '644. Zastawka stosowana jest:',
      answers: [
        {
          answer: 'a) jako zapora kierunkowa',
          isCorrect: false
        },
        {
          answer: 'b) jako zapora doczyszczająca',
          isCorrect: false
        },
        {
          answer: 'c) na wąskich ciekach wodnych',
          isCorrect: true
        }
      ]
    },
    {
      question: '645. Zaznacz poprawną kolejność ustawienia systemu zapór olejowych na wodach powierzchniowych:',
      answers: [
        {
          answer: 'a) zapora pomocnicza, zapora główna, zapora doczyszczająca',
          isCorrect: false
        },
        {
          answer: 'b) zapora doczyszczająca, zapora główna, zapora pomocnicza',
          isCorrect: false
        },
        {
          answer: 'c) zapora główna, zapora pomocnicza, zapora doczyszczająca',
          isCorrect: true
        }
      ]
    },
    {
      question: '646. Zaporę elastyczną można wykorzystać w celu:',
      answers: [
        {
          answer: 'a) uszczelnienia zapory sztywnej',
          isCorrect: true
        },
        {
          answer: 'b) określenia prędkości nurtu rzeki',
          isCorrect: false
        },
        {
          answer: 'c) pochłaniania substancji z powierzchni lustra wody',
          isCorrect: false
        }
      ]
    },
    {
      question: '647. Elastyczna zapora pływająca na rzece w celu ograniczenia rozprzestrzeniania się plamy olejowej powinna być ustawiona:',
      answers: [
        {
          answer: 'a) równolegle do kierunku prądu rzeki',
          isCorrect: false
        },
        {
          answer: 'b) ukośnie do kierunku prądu rzeki',
          isCorrect: true
        },
        {
          answer: 'c) prostopadle do kierunku prądu rzeki',
          isCorrect: false
        }
      ]
    },
    {
      question: '648. Rozprzestrzenianie się oleju na powierzchni wody to:',
      answers: [
        {
          answer: 'a) zjawisko rozpływania się oleju na powierzchni wody pod wpływem działania sił grawitacji',
          isCorrect: true
        },
        {
          answer: 'b) zjawisko rozpływania się oleju na powierzchni wody pod wpływem działania siły \todśrodkowej cząsteczek oleju',
          isCorrect: false
        },
        {
          answer: 'c) zjawisko rozpływania się oleju na powierzchni wody pod wpływem działania reakcji egzotermicznej substancji',
          isCorrect: false
        }
      ]
    },
    {
      question: '649. W celu prawidłowego oznakowania strefy działań jeden ze strażaków:',
      answers: [
        {
          answer: 'a) prowadzi ciągły pomiar stężenia substancji niebezpiecznej przy stanowisku meldunkowego',
          isCorrect: false
        },
        {
          answer: 'b) prowadzi ciągły pomiar stężenia substancji niebezpiecznej przy stanowisku dekontaminacji',
          isCorrect: false
        },
        {
          answer: 'c) prowadzi ciągły pomiar stężenia substancji niebezpiecznej wokół strefy działań',
          isCorrect: true
        }
      ]
    },
    {
      question: '650. Obciążenie, którego wartość jest niezmienna podczas oddziaływania na konstrukcję obiektu budowlanego to obciążenie:',
      answers: [
        {
          answer: 'a) dynamiczne',
          isCorrect: false
        },
        {
          answer: 'b) spoczynkowe',
          isCorrect: false
        },
        {
          answer: 'c) statyczne',
          isCorrect: true
        }
      ]
    },
    {
      question: '651. Rozpora przeznaczona jest do zabezpieczenia osłabionych:',
      answers: [
        {
          answer: 'a) stropów',
          isCorrect: false
        },
        {
          answer: 'b) wykopów',
          isCorrect: true
        },
        {
          answer: 'c) kominów',
          isCorrect: false
        }
      ]
    },
    {
      question: '652. Dotarcie do poszkodowanych zagruzowanych w rumowisku jest możliwe poprzez:',
      answers: [
        {
          answer: 'a) wykonanie przekopu przez gruzowisko',
          isCorrect: true
        },
        {
          answer: 'b) wykonanie wykopu',
          isCorrect: false
        },
        {
          answer: 'c) odgruzowanie wejść do budynku',
          isCorrect: false
        }
      ]
    },
    {
      question: '653. Ile powinna wynosić maksymalna odległość między dwoma stemplami zabezpieczającymi naruszony strop?',
      answers: [
        {
          answer: 'a) 2 metry',
          isCorrect: false
        },
        {
          answer: 'b) 1 metr',
          isCorrect: false
        },
        {
          answer: 'c) 1,5 metra',
          isCorrect: true
        }
      ]
    },
    {
      question: '654. Zabezpieczenie elementów budowlanych przy pomocy rozpory wykonujemy gdy:',
      answers: [
        {
          answer: 'a) strop grozi oberwaniem',
          isCorrect: false
        },
        {
          answer: 'b) dwie ściany odchodzą od siebie',
          isCorrect: false
        },
        {
          answer: 'c) naprzeciwległe ściany schodzą się',
          isCorrect: true
        }
      ]
    },
    {
      question: '655. Przebicie w ścianie powinno mieć kształt:',
      answers: [
        {
          answer: 'a) kwadratu',
          isCorrect: false
        },
        {
          answer: 'b) trójkąta',
          isCorrect: true
        },
        {
          answer: 'c) koła',
          isCorrect: false
        }
      ]
    },
    {
      question: '656. Prawidłowa realizacja wykonania przebicia ściany w murze ceglanym za pomocą młotka i przecinaka wygląda następująco:',
      answers: [
        {
          answer: 'a) odsunięcie gruzu z miejsca wykonania przebicia, oznaczenie wielkości wykonywanego otworu, wybicie cegły z górnej warstwy wykonywanego otworu, powiększenie otworu w dół i na boki, aż do odpowiedniej wielkości otworu wykonując sklepienie',
          isCorrect: false
        },
        {
          answer: 'b) odsunięcie gruzu z miejsca wykonania przebicia, oznaczenie wielkości wykonywanego otworu, wybicie cegły z dolnej warstwy wykonywanego otworu, powiększenie otworu w górę i na boki, aż do odpowiedniej wielkości otworu wykonując sklepienie',
          isCorrect: true
        },
        {
          answer: 'c) odsunięcie gruzu z miejsca wykonania przebicia, oznaczenie wielkości \twykonywanego otworu, wybicie cegły z środkowej warstwy wykonywanego otworu,\tpowiększenie otworu w górę i na boki, aż do odpowiedniej wielkości otworu, wykonując kształt kwadratu',
          isCorrect: false
        }
      ]
    },
    {
      question: '657. W konstrukcji zastrzałowo-rozporowej kąt pomiędzy belką rozporową i podporą nie powinien być większy niż:',
      answers: [
        {
          answer: 'a) 45o',
          isCorrect: true
        },
        {
          answer: 'b) 60o',
          isCorrect: false
        },
        {
          answer: 'c) 75o',
          isCorrect: false
        }
      ]
    },
    {
      question: '658. Określić zadania PSP podczas katastrof budowlanych:',
      answers: [
        {
          answer: 'a) rozpoznanie i zabezpieczenie terenu działania',
          isCorrect: true
        },
        {
          answer: 'b) lokalizacja ewentualnych niewypałów',
          isCorrect: false
        },
        {
          answer: 'c) naprawa uszkodzeń sieci i urządzeń',
          isCorrect: false
        },
        {
          answer: 'd) transport poszkodowanych do placówki medycznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '659. W wyniku doziemienia napowietrznej linii energetycznej mamy do czynienia z zagrożeniem wynikającym z:',
      answers: [
        {
          answer: 'a) pola elektromagnetycznego',
          isCorrect: false
        },
        {
          answer: 'b) napięcia krokowego',
          isCorrect: true
        },
        {
          answer: 'c) prądów błądzących',
          isCorrect: false
        }
      ]
    },
    {
      question: '660. Rzaz podcinający powinien wynosić:',
      answers: [
        {
          answer: 'a) 1/3 średnicy drzewa',
          isCorrect: true
        },
        {
          answer: 'b) 1/8 średnicy drzewa',
          isCorrect: false
        },
        {
          answer: 'c) 2/3 średnicy drzewa',
          isCorrect: false
        }
      ]
    },
    {
      question: '661. Od której strony należy wykonywać rzaz odciążający podczas przerzynki drzewa leżącego?',
      answers: [
        {
          answer: 'a) od strony włókien ściskanych',
          isCorrect: true
        },
        {
          answer: 'b) od strony włókien rozciąganych',
          isCorrect: false
        },
        {
          answer: 'c) kierunek prowadzenia rzazu nie ma znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '662. Czy w działaniach poszukiwawczo-ratowniczych w zakresie podstawowym wymagane jest stosowanie specjalistycznych technik lokalizacji osób znajdujących się w miejscach niedostępnych',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        }
      ]
    },
    {
      question: '663. W jakim zakresie należy zabezpieczyć konstrukcje w trakcie działań ratowniczych podczas katastrof budowlanych',
      answers: [
        {
          answer: 'a) w całym obiekcie',
          isCorrect: false
        },
        {
          answer: 'b) w zakresie niezbędnym dla zapewnienia bezpieczeństwa ratowników',
          isCorrect: true
        },
        {
          answer: 'c) zabezpieczenie nie musi być wykonywane',
          isCorrect: false
        }
      ]
    },
    {
      question: '664. Priorytetem grup poszukiwawczo-ratowniczych jest:',
      answers: [
        {
          answer: 'a) ratowanie mienia po katastrofie budowlanej',
          isCorrect: false
        },
        {
          answer: 'b) poszukiwanie osób zasypanych lub unieruchomionych i zaginionych',
          isCorrect: true
        },
        {
          answer: 'c) zabezpieczenie konstrukcji obiektu',
          isCorrect: false
        }
      ]
    },
    {
      question: '665. Na czym polega biologiczna metoda poszukiwania?',
      answers: [
        {
          answer: 'a) stosowaniu specjalnie szkolonych psów ratowniczych',
          isCorrect: true
        },
        {
          answer: 'b) stosowaniu detektorów podczerwieni',
          isCorrect: false
        },
        {
          answer: 'c) stosowaniu bioradarów',
          isCorrect: false
        }
      ]
    },
    {
      question: '666. Psy ratownicze „gruzowiskowe” są szkolone do poszukiwania w:',
      answers: [
        {
          answer: 'a) lasach i na otwartej przestrzeni',
          isCorrect: false
        },
        {
          answer: 'b) wodzie',
          isCorrect: false
        },
        {
          answer: 'c) obiektach budowlanych',
          isCorrect: true
        }
      ]
    },
    {
      question: '667. Psy ratownicze „terenowe” są szkolone do poszukiwania w:',
      answers: [
        {
          answer: 'a) lasach i na otwartej przestrzeni',
          isCorrect: true
        },
        {
          answer: 'b) wodzie',
          isCorrect: false
        },
        {
          answer: 'c) obiektach budowlanych',
          isCorrect: false
        }
      ]
    },
    {
      question: '668. Psy ratownicze „gruzowiskowe” i „terenowe” są szkolone do poszukiwania:',
      answers: [
        {
          answer: 'a) rzeczy osobistych',
          isCorrect: false
        },
        {
          answer: 'b) osób żywych',
          isCorrect: true
        },
        {
          answer: 'c) osób martwych',
          isCorrect: false
        }
      ]
    },
    {
      question: '669. Czy psy ratownicze mogą być w stosunku do ludzi agresywne?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        },
        {
          answer: 'c) nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '670. W jakich warunkach atmosferycznych nie można prowadzić poszukiwań z psami?',
      answers: [
        {
          answer: 'a) podczas mrozu',
          isCorrect: false
        },
        {
          answer: 'b) we mgle',
          isCorrect: false
        },
        {
          answer: 'c) zagrażających bezpieczeństwu ratownika',
          isCorrect: true
        }
      ]
    },
    {
      question: '671. Ile lat pies ratowniczy może pracować:',
      answers: [
        {
          answer: 'a) 7',
          isCorrect: false
        },
        {
          answer: 'b) 12',
          isCorrect: false
        },
        {
          answer: 'c) nie ma reguły',
          isCorrect: true
        }
      ]
    },
    {
      question: '672. Czy wskazanie przez psa miejsca, w którym może znajdować osoba poszkodowana należy sprawdzać drugim psem?',
      answers: [
        {
          answer: 'a) nie ma potrzeby',
          isCorrect: false
        },
        {
          answer: 'b) zawsze',
          isCorrect: false
        },
        {
          answer: 'c) tak, gdy nie ma żadnego kontaktu z osobą poszkodowaną',
          isCorrect: true
        }
      ]
    },
    {
      question: '673. Który podzespół GPR jest w pierwszej kolejności dysponowany do działań na terenie kraju?',
      answers: [
        {
          answer: 'a) ratowniczy i wsparcia technicznego',
          isCorrect: false
        },
        {
          answer: 'b) poszukiwawczo-ratowniczy',
          isCorrect: true
        },
        {
          answer: 'c) wsparcia medycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '674. Co jest podstawowym wyróżnikiem GPR zadysponowanego do działań poza granicami kraju?',
      answers: [
        {
          answer: 'a) szybkość przemieszczania',
          isCorrect: false
        },
        {
          answer: 'b) samowystarczalność',
          isCorrect: true
        },
        {
          answer: 'c) wyposażenie techniczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '675. Który z wymienionych poniżej sygnałów dźwiękowych oznacza ewakuację?',
      answers: [
        {
          answer: 'a) (3 sygnały krótkie)',
          isCorrect: true
        },
        {
          answer: 'b) (1 sygnał długi trwający 3 sekundy)',
          isCorrect: false
        },
        {
          answer: 'c) (1 sygnał długi + 1 sygnał krótki)',
          isCorrect: false
        }
      ]
    },
    {
      question: '676. Jakim znakiem graficznym zaznacza się zakończenie działań GPR w danym obiekcie',
      answers: [
        {
          answer: 'a) kwadratem',
          isCorrect: true
        },
        {
          answer: 'b) kołem',
          isCorrect: false
        },
        {
          answer: 'c) trójkątem',
          isCorrect: false
        }
      ]
    },
    {
      question: '677. Działania poszukiwawcze można realizować różnymi metodami. Wskaż wszystkie możliwe:',
      answers: [
        {
          answer: 'a) ludzkie zmysły i umiejętności, metodą biologiczną, metodami technicznymi',
          isCorrect: true
        },
        {
          answer: 'b) metodami technicznymi i ludzkimi zmysłami',
          isCorrect: false
        },
        {
          answer: 'c) psy ratownicze, geofon, kamera termowizyjna',
          isCorrect: false
        }
      ]
    },
    {
      question: '678. Powierzchnią roboczą czujek sejsmiczno-akustycznych jest:',
      answers: [
        {
          answer: 'a) spód czujki',
          isCorrect: false
        },
        {
          answer: 'b) powierzchnie boczne czujki',
          isCorrect: false
        },
        {
          answer: 'c) wszystkie powierzchnie czujki',
          isCorrect: true
        }
      ]
    },
    {
      question: '679. Nagłe zniszczenie konstrukcji uniemożliwiające całkowicie dalsze jej użytkowanie (przekroczenie stanu granicznego nośności), stanowiące poważne zagrożenie dla życia ludzi i mienia, nazywamy:',
      answers: [
        {
          answer: 'a) awarią budowlaną',
          isCorrect: false
        },
        {
          answer: 'b) katastrofą budowlaną',
          isCorrect: true
        },
        {
          answer: 'c) żadne z określeń nie definiuje powyższej sytuacji',
          isCorrect: false
        }
      ]
    },
    {
      question: '680. Uszkodzenie elementu lub elementów konstrukcyjnych, powodujące zaburzenie w eksploatacji obiektu utratę właściwości użytkowych, mogące stanowić zagrożenie dla życia ludzi i mienia nazywamy:',
      answers: [
        {
          answer: 'a) awarią budowlaną',
          isCorrect: true
        },
        {
          answer: 'b) katastrofą budowlaną',
          isCorrect: false
        },
        {
          answer: 'c) żadne z określeń nie definiuje powyższej sytuacji',
          isCorrect: false
        }
      ]
    },
    {
      question: '681. Wyróżniamy następujące rodzaje zagruzowania. Wskaż prawidłowe:',
      answers: [
        {
          answer: 'a) Stok (zawał pochyły), uwarstwienie (zawał płaski), ruina brzegowa',
          isCorrect: false
        },
        {
          answer: 'b) stożek gruzowy (stos rumowiska), pomieszczenia zniszczone, jaskółcze gniazdo',
          isCorrect: false
        },
        {
          answer: 'c) prawidłowe są odpowiedzi a i b',
          isCorrect: true
        }
      ]
    },
    {
      question: '682. Jednym ze zniszczeń budynku jest tzw. zawał płaski, inaczej uwarstwienie, które charakteryzuje się:',
      answers: [
        {
          answer: 'a) Występuje, gdy nastąpi częściowe zniszczenie ścian zewnętrznych i wyrzucenie powstałego gruzu na zewnątrz poza obrys budynku',
          isCorrect: false
        },
        {
          answer: 'b) Powstaje, gdy zniszczeniu ulegnie jedna z podpór stropu w stosunku do drugiej lub po osunięciu jednej z nich stropy układają się skośnie i są częściowo wypełnione gruzem, powstałym ze ścian działowych i nośnych',
          isCorrect: false
        },
        {
          answer: 'c) żadna z odpowiedzi nie jest prawidłowa',
          isCorrect: true
        }
      ]
    },
    {
      question: '683. Podaj typowe zasady ustawiania czujników sejsmiczno - akustycznych:',
      answers: [
        {
          answer: 'a) ustawienie: koliste, półkoliste, wężowe, krzyżowe, inne wymuszone zastaną sytuacją',
          isCorrect: true
        },
        {
          answer: 'b) ustawienie krzyżowe, koliste, inne wymuszone zastaną sytuacją',
          isCorrect: false
        },
        {
          answer: 'c) czujki ustawia się na gruzowisku w sposób nie określony - wymuszony zastana sytuacją',
          isCorrect: false
        }
      ]
    },
    {
      question: '684. Do poszukiwań i lokalizacji osób poszkodowanych może służyć bioradar. Jest to:',
      answers: [
        {
          answer: 'a) urządzenie wykorzystujące w lokalizacji osób zasadę odbicia fal radiowych',
          isCorrect: true
        },
        {
          answer: 'b) przystawka elektroniczna do geofonu, emitująca krótkie wiązki fal radiowych i analizująca ich powracające widmo',
          isCorrect: false
        },
        {
          answer: 'c) nie ma takiego urządzenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '685. Czy zespół (przewodnik i pies), posiadający ważna specjalność gruzowiskową lub terenową klasy 0 może uczestniczyć w akcji poszukiwawczej',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        },
        {
          answer: 'c) nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '686. Czy zespół (przewodnik i pies), posiadający ważna specjalność gruzowiskową lub terenową klasy I może uczestniczyć w akcji poszukiwawczej',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie',
          isCorrect: false
        },
        {
          answer: 'c) nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '687. Jak długo jest ważna specjalność gruzowiskowa lub terenowa klasy 0',
      answers: [
        {
          answer: 'a) bezterminowo',
          isCorrect: false
        },
        {
          answer: 'b) 12 miesięcy',
          isCorrect: true
        },
        {
          answer: 'c) 18 miesięcy',
          isCorrect: false
        }
      ]
    },
    {
      question: '688. Jak długo jest ważna specjalność gruzowiskowa klasy I',
      answers: [
        {
          answer: 'a) bezterminowo',
          isCorrect: false
        },
        {
          answer: 'b) 12 miesięcy',
          isCorrect: false
        },
        {
          answer: 'c) 18 lub 24 miesiące',
          isCorrect: true
        }
      ]
    },
    {
      question: '689. Zjawisko „cofki” jest charakterystyczne dla powodzi:',
      answers: [
        {
          answer: 'a) Zimowych, zatorowych, sztormowych',
          isCorrect: true
        },
        {
          answer: 'b) roztopowych',
          isCorrect: false
        },
        {
          answer: 'c) opadowych, nawalnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '690. Zjawisko „cofki” polega na:',
      answers: [
        {
          answer: 'a) zalewaniu terenu, po przerwaniu przez wezbraną wodę wałów przeciwpowodziowych, postępującym w kierunku przeciwnym do biegu rzeki, aż do wyrównania rzędnych poziomu wody',
          isCorrect: false
        },
        {
          answer: 'b) postępowaniu fali wezbraniowej w górę biegu rzeki, powstające wskutek podnoszenia się poziomu wody w zbiorniku, do którego ów ciek uchodzi',
          isCorrect: true
        },
        {
          answer: 'c) cofaniu się wezbranej wody do koryta rzeki',
          isCorrect: false
        }
      ]
    },
    {
      question: '691. Upuszczając wodę z cieku, rozkopujemy wał przeciwpowodziowy:',
      answers: [
        {
          answer: 'a) od strony lądu',
          isCorrect: true
        },
        {
          answer: 'b) od strony wody',
          isCorrect: false
        },
        {
          answer: 'c) od środka wału w obydwu kierunkach',
          isCorrect: false
        }
      ]
    },
    {
      question: '692. Przesiąkanie wody przez wał przeciwpowodziowy jest najgroźniejsze, gdy:',
      answers: [
        {
          answer: 'a) przesiąkająca woda jest brudna z piaskiem',
          isCorrect: true
        },
        {
          answer: 'b) przesiąkająca woda nie jest zanieczyszczona',
          isCorrect: false
        },
        {
          answer: 'c) przesiąkająca woda jest czysta, ale wypływa strużką',
          isCorrect: false
        }
      ]
    },
    {
      question: '693. Podczas budowy wałów przeciwpowodziowych metodą „duńską” worki napełniamy piaskiem w:',
      answers: [
        {
          answer: 'a) 100% ich pojemności',
          isCorrect: false
        },
        {
          answer: 'b) 75% ich pojemności',
          isCorrect: false
        },
        {
          answer: 'c) 50% ich pojemności',
          isCorrect: true
        }
      ]
    },
    {
      question: '694. Zasada układania worków z piaskiem metodą „duńską” mówi:',
      answers: [
        {
          answer: 'a) pełne worki układamy w systemie „konika szachowego”',
          isCorrect: false
        },
        {
          answer: 'b) układamy worki w całości wypełnione piaskiem na przemian w systemie „L”',
          isCorrect: false
        },
        {
          answer: 'c) worki układamy, tak aby część pełna worka spoczęła na części pustej worka poprzedniego pod kątem 90o good, tworząc dwurzędowy wał',
          isCorrect: true
        }
      ]
    },
    {
      question: '695. Pierwszą czynnością podczas niesienia pomocy osobie porwanej przez wodę powodziową powinna być:',
      answers: [
        {
          answer: 'a) próba nawiązania kontaktu z poszkodowanym',
          isCorrect: true
        },
        {
          answer: 'b) wejście do wody, celem jak najszybszego wydobycia osoby porwanej',
          isCorrect: false
        },
        {
          answer: 'c) wezwanie dodatkowych sił i środków',
          isCorrect: false
        }
      ]
    },
    {
      question: '696. Czy do działań podstawowych związanych z ratownictwem wodnym typu: ewakuacja ludzi i mienia z terenów zalanych, podjęcie z wody zwłok, ochrona budowli hydrotechnicznych, konieczne jest dysponowanie Specjalistycznej Grupy Wodno-Nurkowej:',
      answers: [
        {
          answer: 'a) tak zawsze',
          isCorrect: false
        },
        {
          answer: 'b) niekoniecznie',
          isCorrect: true
        },
        {
          answer: 'c) tak, jeżeli grupa działa na terenie województwa, na którym zaistniało zdarzenie',
          isCorrect: false
        }
      ]
    },
    {
      question: '697. Deska lodowa przeznaczona jest do:',
      answers: [
        {
          answer: 'a) zabezpieczenia otworów w pokrywie lodowej',
          isCorrect: false
        },
        {
          answer: 'b) bezpiecznego przemieszczania się ratowników i poszkodowanego po zamarzniętym akwenie',
          isCorrect: true
        },
        {
          answer: 'c) usuwania pokrywy lodowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '698. W czasie ratowania człowieka z akwenu w czasie zimy poruszamy się po lodzie w następujący sposób:',
      answers: [
        {
          answer: 'a) biegniemy',
          isCorrect: false
        },
        {
          answer: 'b) czołgamy się',
          isCorrect: true
        },
        {
          answer: 'c) idziemy',
          isCorrect: false
        }
      ]
    },
    {
      question: '699. Każdy ratownik działający na łodzi lub pontonie powinien być wyposażony w:',
      answers: [
        {
          answer: 'a) skafander nurkowy suchy',
          isCorrect: false
        },
        {
          answer: 'b) kamizelkę asekuracyjną',
          isCorrect: true
        },
        {
          answer: 'c) urządzenie ratowniczo-wyrównawcze',
          isCorrect: false
        }
      ]
    },
    {
      question: '700. Pokrywa lodu o tej samej grubości:',
      answers: [
        {
          answer: 'a) jest mocniejsza na wodzie stojącej',
          isCorrect: true
        },
        {
          answer: 'b) jest mocniejsza na wodzie płynącej',
          isCorrect: false
        },
        {
          answer: 'c) rodzaj akwenu nie ma znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '701. W celu jak najszybszego opuszczenia zamarzniętego akwenu po załamaniu się lodu, należy:',
      answers: [
        {
          answer: 'a) odczołgać się',
          isCorrect: false
        },
        {
          answer: 'b) odturlać się',
          isCorrect: true
        },
        {
          answer: 'c) odbiec',
          isCorrect: false
        }
      ]
    },
    {
      question: '702. Specjalistyczną Grupę Ratownictwa Wodno-Nurkowego do działań poza terenem powiatu, na teren własnego województwa może zadysponować:',
      answers: [
        {
          answer: 'a) SK KW',
          isCorrect: true
        },
        {
          answer: 'b) SK KM/P',
          isCorrect: false
        },
        {
          answer: 'c) CPR',
          isCorrect: false
        }
      ]
    },
    {
      question: '703. Strażacy biorący udział w akcjach ratowniczych na powierzchni wody na brzegach akwenów i budowlach hydrotechnicznych winni być wyposażeni w:',
      answers: [
        {
          answer: 'a) kamizelkę asekuracyjna, gwizdek, siekierę',
          isCorrect: false
        },
        {
          answer: 'b) kombinezon ratunkowy, latarkę',
          isCorrect: false
        },
        {
          answer: 'c) kamizelkę asekuracyjną, latarkę, nóż ratowniczy',
          isCorrect: true
        }
      ]
    },
    {
      question: '704. Sanie lodowe mogą być wykorzystane w ratownictwie do przemieszczania się:',
      answers: [
        {
          answer: 'a) po brzegu rzeki',
          isCorrect: false
        },
        {
          answer: 'b) po powierzchni wody i lodu',
          isCorrect: true
        },
        {
          answer: 'c) wyłącznie po zamarzniętych akwenach',
          isCorrect: false
        }
      ]
    },
    {
      question: '705. Działania ratownicze w zakresie podstawowym na akwenach należą do standardowych czynności ratowniczych:',
      answers: [
        {
          answer: 'a) tylko jednostki ratowniczo – gaśnicze PSP w powiatach o najwyższym stopniu zagrożenia wodnego',
          isCorrect: false
        },
        {
          answer: 'b) wszystkie jednostki ratowniczo – gaśnicze PSP',
          isCorrect: true
        },
        {
          answer: 'c) tylko specjalistycznych grup ratownictwa wodno – nurkowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '706. Podczas wykonywania zadań na jednostce pływającej wymagane jest:',
      answers: [
        {
          answer: 'a) bezwzględne stosowanie kamizelki asekuracyjnej',
          isCorrect: true
        },
        {
          answer: 'b) bezwzględne stosowanie kamizelki ratunkowej',
          isCorrect: false
        },
        {
          answer: 'c) bezwzględne stosowanie kombinezonów do prac na akwenach i przy temperaturach ujemnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '707. W czasie ćwiczeń i szkoleń na akwenach (lodzie), uczestnicy powinni być wyposażeni w środki ochrony indywidualnej:',
      answers: [
        {
          answer: 'a) tylko, jeżeli głębokość akwenu w miejscu prowadzenia ćwiczeń przekracza 2m lub występuje kruchy lód',
          isCorrect: false
        },
        {
          answer: 'b) zawsze',
          isCorrect: true
        },
        {
          answer: 'c) można odstąpić od wyposażenia uczestników środki ochrony indywidualnej, jeżeli krępują ruchy a na miejscu znajduje się ratownik WOPR',
          isCorrect: false
        }
      ]
    },
    {
      question: '708. Minimalne zabezpieczenie medyczne w czasie prowadzenia działań ratowniczych ćwiczeń i szkoleń jednostek realizujących zadania podstawowe na akwenach powinno zawierać:',
      answers: [
        {
          answer: 'a) samochód ratownictwa wodnego wraz z wyposażeniem',
          isCorrect: false
        },
        {
          answer: 'b) zestaw do tlenoterapii (zapas tlenu 1500l)',
          isCorrect: false
        },
        {
          answer: 'c) zestaw ratownictwa medycznego R 1 i dodatkową deską ortopedyczną (nosze pływające wg bhp par42 pkt 5)',
          isCorrect: true
        }
      ]
    },
    {
      question: '709. Podczas prowadzenia działań nurkowych w przestrzeniach zamkniętych oraz na akwenach, na których występuje kra lodowa, w celu zapewnienia bezpieczeństwa nurków wymaga się dodatkowych przedsięwzięć w zakresie zastosowania co najmniej:',
      answers: [
        {
          answer: 'a) sprzętu do autoasekuracji, oświetlenia i łączności, dwóch niezależnych źródeł mieszaniny oddechowej',
          isCorrect: true
        },
        {
          answer: 'b) dwóch niezależnych źródeł mieszaniny oddechowej i co najmniej dwóch źródeł światła',
          isCorrect: false
        },
        {
          answer: 'c) oświetlenia i łączności, dwóch niezależnych źródeł mieszaniny oddechowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '710. Sygnał przekazywany liną asekuracyjną „Natychmiast rozpocznij wynurzenie – niebezpieczeństwo”, sygnalizujemy poprzez:',
      answers: [
        {
          answer: 'a) 3 szarpnięcia liną',
          isCorrect: false
        },
        {
          answer: 'b) 2 szarpnięcia liną',
          isCorrect: false
        },
        {
          answer: 'c) wielokrotne szarpnięcia liną',
          isCorrect: true
        }
      ]
    },
    {
      question: '711. Na głębokości 10m napełniono balonik powietrzem do objętości 6l. Jaką objętość będzie miał balonik na powierzchni wody?',
      answers: [
        {
          answer: 'a) 7 litrów',
          isCorrect: false
        },
        {
          answer: 'b) 12 litrów',
          isCorrect: true
        },
        {
          answer: 'c) 14 litrów',
          isCorrect: false
        }
      ]
    },
    {
      question: '712. Zanurzenie kontrolne wykonuje się w celu:',
      answers: [
        {
          answer: 'a) sprawdzenia głębokości nurkowania',
          isCorrect: false
        },
        {
          answer: 'b) poprawności wyważenia konfiguracji i działania sprzętu nurkowego',
          isCorrect: true
        },
        {
          answer: 'c) sprawdzenia przeźroczystości wody i głębokości nurkowania',
          isCorrect: false
        }
      ]
    },
    {
      question: '713. Ilu nurków może jednocześnie nurkować z jednego przerębla:',
      answers: [
        {
          answer: 'a) jeden nurek',
          isCorrect: false
        },
        {
          answer: 'b) dwóch nurków',
          isCorrect: true
        },
        {
          answer: 'c) trzech nurków',
          isCorrect: false
        }
      ]
    },
    {
      question: '714. Do nurkowania w warunkach nietypowych zaliczamy:',
      answers: [
        {
          answer: 'a) nurkowania w zimnej wodzie',
          isCorrect: false
        },
        {
          answer: 'b) nurkowania w deszczu',
          isCorrect: false
        },
        {
          answer: 'c) nurkowania pod lodem',
          isCorrect: true
        }
      ]
    },
    {
      question: '715. Kablolinę mocujemy do nurka poprzez:',
      answers: [
        {
          answer: 'a) wpięcie liny zakręcanym karabińczykiem w uprząż asekuracyjną',
          isCorrect: true
        },
        {
          answer: 'b) zawiązanie liny pod pachami, po wcześniejszym założeniu całego sprzętu',
          isCorrect: false
        },
        {
          answer: 'c) trwałe wpięcie w element wyposażenia nurka',
          isCorrect: false
        }
      ]
    },
    {
      question: '716. Powietrze używane do oddychania podczas nurkowania nie może być przechowywane w butlach dłużej niż:',
      answers: [
        {
          answer: 'a) 2 miesiące',
          isCorrect: false
        },
        {
          answer: 'b) 3 miesiące',
          isCorrect: true
        },
        {
          answer: 'c) 4 miesiące',
          isCorrect: false
        }
      ]
    },
    {
      question: '717. Stropem nazywamy:',
      answers: [
        {
          answer: 'a) linę mocującą wydobywany obiekt',
          isCorrect: true
        },
        {
          answer: 'b) linę określającą położenie wydobywanego obiektu',
          isCorrect: false
        },
        {
          answer: 'c) żadne z wymienionych',
          isCorrect: false
        }
      ]
    },
    {
      question: '718. Ciśnienie podstawowej rezerwy powietrza to wartość:',
      answers: [
        {
          answer: 'a) 70 atm',
          isCorrect: false
        },
        {
          answer: 'b) 50 atm',
          isCorrect: true
        },
        {
          answer: 'c) 40 atm',
          isCorrect: false
        }
      ]
    },
    {
      question: '719. Pierwszy stopień automatu oddechowego posiada oznaczenia portów HP i LP – w które miejsce podłączysz przewód skafandra suchego:',
      answers: [
        {
          answer: 'a) HP',
          isCorrect: false
        },
        {
          answer: 'b) LP',
          isCorrect: true
        },
        {
          answer: 'c) Nieoznaczony',
          isCorrect: false
        }
      ]
    },
    {
      question: '720. Na jednostkach pływających dopuszcza się przebywanie nurków w rozpiętych skafandrach suchych, jeżeli:',
      answers: [
        {
          answer: 'a) posiadają napompowane urządzenie ratownicze wypornościowe (URW)',
          isCorrect: false
        },
        {
          answer: 'b) posiadają założone kamizelki ratownicze',
          isCorrect: false
        },
        {
          answer: 'c) nie dopuszcza się',
          isCorrect: true
        }
      ]
    },
    {
      question: '721. Używanie tego samego komputera przez kilku nurków jest dopuszczone, jeżeli:',
      answers: [
        {
          answer: 'a) jest zachowana przerwa pomiędzy nurkowaniami – min. 35 minut',
          isCorrect: false
        },
        {
          answer: 'b) komputer wskazał zakończenie dekompresji poprzedniego nurkowania',
          isCorrect: false
        },
        {
          answer: 'c) komputer zakończył obliczenia i został ustawiony na indywidualny profil bezpieczeństwa kolejnego nurka',
          isCorrect: true
        }
      ]
    },
    {
      question: '722. Aby prawidłowo obliczyć dekompresję pod wodą, należy oprócz wiedzy posiadać także:',
      answers: [
        {
          answer: 'a) tabelę dekompresyjną, manometr i zegarek',
          isCorrect: false
        },
        {
          answer: 'b) głębokościomierz, tabelę dekompresyjną i zegarek',
          isCorrect: true
        },
        {
          answer: 'c) manometr, tabelę dekompresyjną i kompas',
          isCorrect: false
        }
      ]
    },
    {
      question: '723. Jaki efekt występuje podczas zamarznięcia automatu oddechowego:',
      answers: [
        {
          answer: 'a) przestaje podawać powietrze',
          isCorrect: false
        },
        {
          answer: 'b) podaje powietrze w sposób ciągły',
          isCorrect: true
        },
        {
          answer: 'c) przerywa podawanie powietrza',
          isCorrect: false
        }
      ]
    },
    {
      question: '724. Balon wypornościowy to:',
      answers: [
        {
          answer: 'a) balon służący do podnoszenia na powierzchnię zatopionych przedmiotów',
          isCorrect: true
        },
        {
          answer: 'b) urządzenie służące do regulacji pływalności nurka',
          isCorrect: false
        },
        {
          answer: 'c) wszystkie prawidłowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '725. Największą wyporność posiada woda:',
      answers: [
        {
          answer: 'a) słodka o temp 4 st C',
          isCorrect: false
        },
        {
          answer: 'b) morska o temp 4 st C',
          isCorrect: true
        },
        {
          answer: 'c) destylowana o temp 4 st C',
          isCorrect: false
        }
      ]
    },
    {
      question: '726. Minimalne zabezpieczenie ratownika wykonującego czynności w bezpośrednim kontakcie z akwenem lub ciekiem wodnym to:',
      answers: [
        {
          answer: 'a) koło ratunkowe, lina asekuracyjna i urządzenie sygnalizacji dźwiękowej',
          isCorrect: false
        },
        {
          answer: 'b) kamizelka ratunkowa, nóż ratowniczy i urządzenie sygnalizacji dźwiękowej',
          isCorrect: true
        },
        {
          answer: 'c) kamizelka ratownicza, nóż ratowniczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '727. Ciśnienie powietrza oddechowego pobieranego przez nurka na gł. 12 m wynosi:',
      answers: [
        {
          answer: 'a) 2 atm',
          isCorrect: false
        },
        {
          answer: 'b) 2,2 atm',
          isCorrect: true
        },
        {
          answer: 'c) 1,2 atm',
          isCorrect: false
        }
      ]
    },
    {
      question: '728. Zjawisko stratyfikacji termicznej w jeziorach uzależnione jest:',
      answers: [
        {
          answer: 'a) budową misy jeziornej',
          isCorrect: false
        },
        {
          answer: 'b) zmianami temperatury powietrza wskutek zmiany pory roku',
          isCorrect: true
        },
        {
          answer: 'c) zmianami temperatury powietrza wskutek zmiany pory dnia',
          isCorrect: false
        }
      ]
    },
    {
      question: '729. Najwyższa wartość prędkości nurtu na rzece występuje:',
      answers: [
        {
          answer: 'a) ok 0,5 m pod powierzchnią wody',
          isCorrect: true
        },
        {
          answer: 'b) przy dnie',
          isCorrect: false
        },
        {
          answer: 'c) w połowie głębokości koryta rzeki',
          isCorrect: false
        }
      ]
    },
    {
      question: '730. Podstawowy zestaw do wykonywania prac podwodnych składa się z:',
      answers: [
        {
          answer: 'a) automatu oddechowego, KRW, butli nurkowej',
          isCorrect: false
        },
        {
          answer: 'b) maski pełnotwarzowej z łącznością przewodową, uprzęży roboczej z butlą nurkową, kabloliny, urządzenia nadawczo-odbiorczego',
          isCorrect: true
        },
        {
          answer: 'c) maski pełnotwarzowej, KRW, butli nurkowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '731. Wielkość oraz typ zastosowanego zaopatrzenia nurka w czynnik oddechowy zależy od:',
      answers: [
        {
          answer: 'a) głębokości pracy, sposobu jej wykonania, rodzaju wykorzystanego sprzętu',
          isCorrect: false
        },
        {
          answer: 'b) głębokości pracy, czasu na jej wykonanie, indywidualnego zużycia w odniesieniu do powierzchni, rodzaju wykorzystywanego sprzętu',
          isCorrect: true
        },
        {
          answer: 'c) głębokości i czasu pracy, typu pracy, wytrenowania nurka',
          isCorrect: false
        }
      ]
    },
    {
      question: '732. Elementy zanurzenia kontrolnego to:',
      answers: [
        {
          answer: 'a) ocena warunków nurkowania, sprawności sprzętu, samopoczucia i meldunku o gotowości do wykonania zadania, uzyskując pływalność zerową',
          isCorrect: true
        },
        {
          answer: 'b) sprawdzenie sprzętu, warunków i ocena poziomu stresu przed zanurzeniem',
          isCorrect: false
        },
        {
          answer: 'c) uzyskanie pływalności zerowej, ocena pracy sprzętu i samopoczucia',
          isCorrect: false
        }
      ]
    },
    {
      question: '733. Wraz ze zwiększeniem prędkości pod wodą i wielkości przekroju poprzecznego opór nurka w wodzie:',
      answers: [
        {
          answer: 'a) rośnie',
          isCorrect: false
        },
        {
          answer: 'b) rośnie w kwadracie',
          isCorrect: true
        },
        {
          answer: 'c) maleje',
          isCorrect: false
        }
      ]
    },
    {
      question: '734. Podstawowym dokumentem rejestrującym prace podwodne jest:',
      answers: [
        {
          answer: 'a) karta nurkowania',
          isCorrect: false
        },
        {
          answer: 'b) dziennik prac podwodnych',
          isCorrect: false
        },
        {
          answer: 'c) dzienna karta prac podwodnych',
          isCorrect: true
        }
      ]
    },
    {
      question: '735. Czy możliwe jest wykorzystanie dostępnych w PSP ratowniczych zestawów hydraulicznych do prac podwodnych?',
      answers: [
        {
          answer: 'a) możliwe, przy odpowiednim zabezpieczeniu narzędzi liną oraz braku przeciwwskazań producenta',
          isCorrect: true
        },
        {
          answer: 'b) niemożliwe i zabronione',
          isCorrect: false
        },
        {
          answer: 'c) możliwe, jeżeli ciśnienie panujące na głębokości pracy nurka nie przekracza ciśnienia roboczego urządzenia hydraulicznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '736. Z uwagi na specyfikę prowadzenia prac podwodnych w ramach działań na rzecz bezpieczeństwa i porządku publicznego, osoba posiadająca kwalifikacje:',
      answers: [
        {
          answer: 'a) młodszego nurka wykonuje samodzielnie prace podwodne na głębokości do 12 metrów oraz wykonuje prace podwodne na głębokości do 30 metrów w asyście co najmniej nurka',
          isCorrect: false
        },
        {
          answer: 'b) młodszego nurka wykonuje samodzielnie prace podwodne na głębokości do 20 metrów oraz wykonuje prace podwodne na głębokości do 40 metrów w asyście co najmniej nurka',
          isCorrect: false
        },
        {
          answer: 'c) młodszego nurka wykonuje samodzielnie prace podwodne na głębokości do 20 metrów oraz wykonuje prace podwodne na głębokości do 30 metrów w asyście co najmniej nurka',
          isCorrect: true
        }
      ]
    },
    {
      question: '737. Podstawowym czynnikiem oddechowym przy nurkowaniu na małe głębokości jest:',
      answers: [
        {
          answer: 'a) tlen',
          isCorrect: false
        },
        {
          answer: 'b) powietrze',
          isCorrect: true
        },
        {
          answer: 'c) mieszanka tlenu i helu',
          isCorrect: false
        }
      ]
    },
    {
      question: '738. Urządzenie do napełniania powietrznych butli nurkowych może obsługiwać osoba posiadające uprawnienia do:',
      answers: [
        {
          answer: 'a) sporządzania mieszanin nurkowych',
          isCorrect: false
        },
        {
          answer: 'b) napełniania zbiorników ciśnieniowych',
          isCorrect: true
        },
        {
          answer: 'c) obsługi komór dekompresyjnych',
          isCorrect: false
        }
      ]
    },
    {
      question: '739. W skład zestawu ABC wchodzi sprzęt nurkowy:',
      answers: [
        {
          answer: 'a) płetwy, maska, fajka, nóż, pas balastowy',
          isCorrect: false
        },
        {
          answer: 'b) maska, fajka, płetwy',
          isCorrect: true
        },
        {
          answer: 'c) nóż, maska, pas balastowy, fajka',
          isCorrect: false
        }
      ]
    },
    {
      question: '740. Uraz ciśnieniowy płuc to:',
      answers: [
        {
          answer: 'a) rozerwanie pęcherzyków płucnych i naczyń włosowatych',
          isCorrect: true
        },
        {
          answer: 'b) blokada oskrzeli płynami ustrojowymi',
          isCorrect: false
        },
        {
          answer: 'c) żadne z powyższych',
          isCorrect: false
        }
      ]
    },
    {
      question: '741. Podstawowe objawy urazu ciśnieniowego płuc to:',
      answers: [
        {
          answer: 'a) zawroty głowy, krwioplucie, mdłości',
          isCorrect: false
        },
        {
          answer: 'b) zawroty głowy, bóle stawów, zaburzenia równowagi',
          isCorrect: false
        },
        {
          answer: 'c) krwioplucie, kaszel, piskliwy głos',
          isCorrect: true
        }
      ]
    },
    {
      question: '742. Uraz ciśnieniowy płuc jest najgroźniejszym urazem dla nurka i najczęściej powstaje w wyniku:',
      answers: [
        {
          answer: 'a) niekontrolowanego wynurzenia z zatrzymanym oddechem',
          isCorrect: true
        },
        {
          answer: 'b) niekontrolowanego wynurzenia bez możliwości wykonania przystanku dekompresyjnego',
          isCorrect: false
        },
        {
          answer: 'c) niekontrolowanego wynurzenia, spowodowanego utratą pływalności obojętnej',
          isCorrect: false
        }
      ]
    },
    {
      question: '743. Nurek ma do wykonania pracę na głębokości 15 m. Praca polega na wypełnieniu powietrzem 2 balonów wypornościowych o objętości 1 m³ każdy. Zakładając, że balony wypełnią się w całej swojej objętości do napełnienia zużyjesz ok:',
      answers: [
        {
          answer: 'a) 7500 l powietrza',
          isCorrect: false
        },
        {
          answer: 'b) 5000 l powietrza',
          isCorrect: true
        },
        {
          answer: 'c) 2500 l powietrza',
          isCorrect: false
        },
        {
          answer: 'd) Żadna z tych odpowiedzi nie jest prawidłowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '744. Zdublowany układ oddechowy jest niezbędny podczas:',
      answers: [
        {
          answer: 'a) wykonywania prac podwodnych w wodach o ograniczonej przejrzystości',
          isCorrect: false
        },
        {
          answer: 'b) wykonywania prac podwodnych w przestrzeniach zamkniętych i pod lodem',
          isCorrect: true
        },
        {
          answer: 'c) wykonywania prac podwodnych przy obiektach hydrotechnicznych',
          isCorrect: false
        },
        {
          answer: 'd) wykonywania prac podwodnych na głębokości większej niż 12 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '745. Objawem narkozy azotowej jest:',
      answers: [
        {
          answer: 'a) ból w klatce piersiowej',
          isCorrect: false
        },
        {
          answer: 'b) zachwianie stanu równowagi (ogólna wesołość, euforia)',
          isCorrect: true
        },
        {
          answer: 'c) bóle stawowe',
          isCorrect: false
        }
      ]
    },
    {
      question: '746. Działania ratownicze w zakresie specjalistycznym na akwenach realizowane są w KSRG przez:',
      answers: [
        {
          answer: 'a) jednostki OSP w KSRG, posiadające sprzęt ratownictwa wodnego',
          isCorrect: false
        },
        {
          answer: 'b) specjalistyczne grupy ratownictwa wodno – nurkowego',
          isCorrect: true
        },
        {
          answer: 'c) wszystkie jednostki ochrony przeciwpożarowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '747. Wymień na jakie podstawowe (główne) grupy dzielimy metody poszukiwawcze:',
      answers: [
        {
          answer: 'a) przyrządowe, bez przyrządowe',
          isCorrect: true
        },
        {
          answer: 'b) audiowizualne, sonarowe',
          isCorrect: false
        },
        {
          answer: 'c) pracę nurkami',
          isCorrect: false
        }
      ]
    },
    {
      question: '748. Na głębokości 35 metrów panuje ciśnienie absolutne o wartości:',
      answers: [
        {
          answer: 'a) 4,5 MPa',
          isCorrect: false
        },
        {
          answer: 'b) 4,5 atm',
          isCorrect: true
        },
        {
          answer: 'c) 3,5 atm',
          isCorrect: false
        }
      ]
    },
    {
      question: '749. Jakie jest ciśnienie robocze balonu wypornościowego typu otwartego na 15 m:',
      answers: [
        {
          answer: 'a) 1,5 atm',
          isCorrect: false
        },
        {
          answer: 'b) 2,5 atm',
          isCorrect: true
        },
        {
          answer: 'c) 1,5 MPa',
          isCorrect: false
        }
      ]
    },
    {
      question: '750. Z jaką prędkością powinien wynurzać się nurek z głębokości 20 m:',
      answers: [
        {
          answer: 'a) 12 m/min',
          isCorrect: false
        },
        {
          answer: 'b) 9 m/min',
          isCorrect: true
        },
        {
          answer: 'c) 10 m/sekundę',
          isCorrect: false
        }
      ]
    },
    {
      question: '751. Trzy szarpnięcia liną asekuracyjną nadane przez nurka oznaczają:',
      answers: [
        {
          answer: 'a) rozpoczynam wynurzanie',
          isCorrect: true
        },
        {
          answer: 'b) stop zmień kierunek',
          isCorrect: false
        },
        {
          answer: 'c) niebezpieczeństwo wynurzam się',
          isCorrect: false
        }
      ]
    },
    {
      question: '752. Ile powietrza zużyjesz do napełnienia balonu wypornościowego o sile wyporu 500 kg na głębokości 35 m:',
      answers: [
        {
          answer: 'a) 1750 l',
          isCorrect: false
        },
        {
          answer: 'b) 2250 l',
          isCorrect: true
        },
        {
          answer: 'c) 2050 l',
          isCorrect: false
        }
      ]
    },
    {
      question: '753. Przyczyną wstrząsu hipowolemicznego jest:',
      answers: [
        {
          answer: 'a) nagły spadek poziomu cukru we krwi',
          isCorrect: false
        },
        {
          answer: 'b) nagłe podniesienie poziomu cukru we krwi',
          isCorrect: false
        },
        {
          answer: 'c) chwilowa utrata przytomności',
          isCorrect: false
        },
        {
          answer: 'd) spadek objętości krwi krążącej',
          isCorrect: true
        },
        {
          answer: 'e) wszystkie odpowiedzi są fałszywe',
          isCorrect: false
        }
      ]
    },
    {
      question: '754. Drgawki mogą występować przy:',
      answers: [
        {
          answer: 'a) urazie mózgowo-czaszkowym',
          isCorrect: false
        },
        {
          answer: 'b) zatruciu niedotlenieniu',
          isCorrect: false
        },
        {
          answer: 'c) wysokiej temperaturze ciała szczególnie u dzieci',
          isCorrect: false
        },
        {
          answer: 'd) odwodnieniu udarze cieplnym',
          isCorrect: false
        },
        {
          answer: 'e) wszystkie odpowiedzi są prawdziwe',
          isCorrect: true
        }
      ]
    },
    {
      question: '755. U dorosłej osoby, która uskarżała się na ból w kl. piersiowej doszło w Twojej obecności do utraty przytomności i osunięcia na ziemię:',
      answers: [
        {
          answer: 'a) układasz osobę w pozycji bocznej ustalonej z utrzymaniem drożności dróg oddechowych i wzywasz pomoc',
          isCorrect: false
        },
        {
          answer: 'b) układasz osobę na wznak z nogami uniesionymi około 30cm do góry i wzywasz pomoc',
          isCorrect: false
        },
        {
          answer: 'c) sprawdzasz czy w kieszeni poszkodowany nie ma leków na serce, by je podać',
          isCorrect: false
        },
        {
          answer: 'd) udrażniasz drogi oddechowe i sprawdzasz obecność oddechu, podejmujesz masaż serca, jeśli jest brak oddechu',
          isCorrect: true
        },
        {
          answer: 'e) po stwierdzeniu braku oddechu, prowadzisz oddech zastępczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '756. Przy trudnościach w oddychaniu pacjenta przytomnego przebywającego w strefie zadymienia należy:',
      answers: [
        {
          answer: 'a) podać tlen i posadzić poszkodowanego w pozycji półsiedzącej',
          isCorrect: false
        },
        {
          answer: 'b) podać tlen i ewakuować ze strefy zadymienia',
          isCorrect: false
        },
        {
          answer: 'c) wezwać pomoc do poszkodowanego i przystąpić do oceny stanu poszkodowanego w miejscu zdarzenia',
          isCorrect: false
        },
        {
          answer: 'd) w miarę możliwości odizolować drogi oddechowe poszkodowanego od atmosfery toksycznej i ewakuować ze strefy zagrożenia oraz w strefie bezpiecznej wdrożyć tlenoterapię',
          isCorrect: true
        },
        {
          answer: 'e) ułożyć w pozycji bezpiecznej i czekać na przybycie ratowników',
          isCorrect: false
        }
      ]
    },
    {
      question: '757. Osobę posypaną nieznaną substancją gdy zachodzi podejrzenie skażenia należy:',
      answers: [
        {
          answer: 'a) natychmiast wykąpać pod prysznicem',
          isCorrect: false
        },
        {
          answer: 'b) zdecydowanie otrzepać ubranie z pyłu, by skrócić czas ekspozycji',
          isCorrect: false
        },
        {
          answer: 'c) zdjąć ubranie, chroniąc drogi oddechowe poszkodowanego, a następnie spłukać go wodą',
          isCorrect: true
        },
        {
          answer: 'd) polewać wodą po ubraniu, by zwilżyć substancję, by łatwiej ją zebrać',
          isCorrect: false
        },
        {
          answer: 'e) żadne z powyższych',
          isCorrect: false
        }
      ]
    },
    {
      question: '758. Osobie która uległa podtopieniu po wyjęciu z wody należy:',
      answers: [
        {
          answer: 'a) wylać wodę z dróg oddechowych, poprzez odpowiednie ułożenie',
          isCorrect: false
        },
        {
          answer: 'b) utrzymywać stabilizację kręgosłupa, gdyż najczęściej dochodzi do urazu w odcinku szyjnym',
          isCorrect: false
        },
        {
          answer: 'c) okryć natychmiast folią życia, chroniąc przed wychłodzeniem',
          isCorrect: false
        },
        {
          answer: 'd) udrożnić drogi oddechowe i w przypadku braku oddechu prowadzić RKO rozpoczynając od 5 wdechów',
          isCorrect: true
        },
        {
          answer: 'e) wszystkie prawdziwe',
          isCorrect: false
        }
      ]
    },
    {
      question: '759. W przypadku podtopienia prowadzenie oddechu zastępczego należy rozpocząć:',
      answers: [
        {
          answer: 'a) po 5 min od wyjęcia z wody, by mogła się ona wchłonąć z płuc',
          isCorrect: false
        },
        {
          answer: 'b) po wylaniu wody z dróg oddechowych',
          isCorrect: false
        },
        {
          answer: 'c) najważniejsza jest stabilizacja kręgosłupa szyjnego',
          isCorrect: false
        },
        {
          answer: 'd) jak najwcześniej, w miarę możliwości jeszcze w wodzie',
          isCorrect: true
        },
        {
          answer: 'e) wszystkie fałszywe',
          isCorrect: false
        }
      ]
    },
    {
      question: '760. Stosując regułę „9” oparzenie obejmujące obie kończyny dolne u osoby dorosłej stanowi procentową powierzchnię całego ciała:',
      answers: [
        {
          answer: 'a) 18%',
          isCorrect: false
        },
        {
          answer: 'b) 27%',
          isCorrect: false
        },
        {
          answer: 'c) 30%',
          isCorrect: false
        },
        {
          answer: 'd) 36%',
          isCorrect: true
        },
        {
          answer: 'e) 45%',
          isCorrect: false
        }
      ]
    },
    {
      question: '761. O oparzeniu dróg oddechowych i zatruciu wziewnym mogą świadczyć następujące objawy:',
      answers: [
        {
          answer: 'a) duszność kaszel',
          isCorrect: false
        },
        {
          answer: 'b) ślady sadzy na twarzy w jamie ustnej i ślinie, opalone brwi i rzęsy',
          isCorrect: false
        },
        {
          answer: 'c) charakter zdarzenia',
          isCorrect: false
        },
        {
          answer: 'd) chrypka świszczący oddech',
          isCorrect: false
        },
        {
          answer: 'e) wszystkie wymienione',
          isCorrect: true
        }
      ]
    },
    {
      question: '762. Jaka jest najpoważniejsza wczesna komplikacja porażenia prądem elektrycznym zmiennym?',
      answers: [
        {
          answer: 'a) zaburzenia rytmu serca',
          isCorrect: true
        },
        {
          answer: 'b) uraz kręgosłupa szyjnego',
          isCorrect: false
        },
        {
          answer: 'c) wstrząs hipowolemiczny',
          isCorrect: false
        },
        {
          answer: 'd) niewydolność nerek',
          isCorrect: false
        },
        {
          answer: 'e) oparzenie',
          isCorrect: false
        }
      ]
    },
    {
      question: '763. Brak czucia bólu stwierdzisz przy oparzeniu:',
      answers: [
        {
          answer: 'a) I°',
          isCorrect: false
        },
        {
          answer: 'b) II°',
          isCorrect: false
        },
        {
          answer: 'c) III°',
          isCorrect: true
        },
        {
          answer: 'd) oparzeniu chemicznym',
          isCorrect: false
        },
        {
          answer: 'e) zawsze jest ból',
          isCorrect: false
        }
      ]
    },
    {
      question: '764. Podczas prac budowlanych jeden z pracowników został ochlapany wapnem w okolicy twarzy. Poprawna kolejność postępowania to: 1) opłukanie twarzy wodą, w celu usunięcia substancji 2) starcie suchą szmatką zaprawy z twarzy i okolicy oczu 3) usunięcie poszkodowanego ze strefy zagrożenia 4) delikatne przemywanie wodą, najlepiej mineralną 5) zdecydowane przemywanie oczu bieżącym strumieniem wody Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'a) 1, 2',
          isCorrect: false
        },
        {
          answer: 'b) 3, 2, 4',
          isCorrect: false
        },
        {
          answer: 'c) 3, 2, 5',
          isCorrect: true
        },
        {
          answer: 'd) 4, 1, 2, 3',
          isCorrect: false
        },
        {
          answer: 'e) 3, 5',
          isCorrect: false
        }
      ]
    },
    {
      question: '765. Postępowanie z osobą w stanie wychłodzenia – wskaż prawidłową sekwencję działania: 1) przenieść do suchego ciepłego pomieszczenia i zdjęcie zbędnego ubrania 2) podać ciepły napój najlepiej z alkoholem - działa rozgrzewająco 3) kontrola podstawowych czynności życiowych 4) zdecydowanymi ruchami rozcierać miejsca wychłodzone lub zalecić gimnastykę 5) ułożyć w pozycji poziomej, ograniczyć ruch i ogrzewać biernie Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'a) 1, 2, 3, 4, 5',
          isCorrect: false
        },
        {
          answer: 'b) 1, 3, 2, 5',
          isCorrect: false
        },
        {
          answer: 'c) 3, 4, 2',
          isCorrect: false
        },
        {
          answer: 'd) 2, 4, 3',
          isCorrect: false
        },
        {
          answer: 'e) 3, 1, 5',
          isCorrect: true
        }
      ]
    },
    {
      question: '766. Po ochlapaniu gorącym olejem całej dłoni, natychmiastowe postępowanie ratownicze będzie polegało na: 1) natychmiastowym odsunięciu poszkodowanego od naczynia z olejem 2) umyciu ręki pod bieżącą ciepłą wodą z użyciem detergentu, by zmyć olej 3) chłodzeniu ręki pod bieżącą wodą ok. 15 min. 4) trzymaniu ręki w wiadrze z wodą 5) polewaniu ręki alkoholem, bo świetnie odprowadza ciepło Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'a) 1, 3',
          isCorrect: false
        },
        {
          answer: 'b) 1, 2, 3',
          isCorrect: true
        },
        {
          answer: 'c) 3, 5',
          isCorrect: false
        },
        {
          answer: 'd) 4, 5',
          isCorrect: false
        },
        {
          answer: 'e) 1, 2, 4, 5',
          isCorrect: false
        }
      ]
    },
    {
      question: '767. Podczas prac przeładunkowych jeden z pracowników został oblany ługiem sodowym. Wskaż prawidłowe postępowanie: 1) natychmiast polewasz wodą poszkodowanego 2) usuwasz w miejsce bezpieczne poszkodowanego 3) zdejmujesz odzież z poszkodowanego 4) posypujesz piachem ubranego poszkodowanego - piach wchłania ług sodowy 5) spłukujesz poszkodowanego i wzywasz pomoc Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'a) 1, 5, 2',
          isCorrect: false
        },
        {
          answer: 'b) 2 ,3 ,4',
          isCorrect: false
        },
        {
          answer: 'c) 2 ,3, 5',
          isCorrect: true
        },
        {
          answer: 'd) 5 ,3 ,4',
          isCorrect: false
        },
        {
          answer: 'e) 1, 2, 3, 5',
          isCorrect: false
        }
      ]
    },
    {
      question: '768. Ranę kłutą klatki piersiowej na miejscu zdarzenia zaopatrzysz:',
      answers: [
        {
          answer: 'a) opatrunkiem okrężnym z opaski dzianej',
          isCorrect: false
        },
        {
          answer: 'b) opatrunkiem z folii szczelnie przymocowanym do klatki piersiowej ze wszystkich stron',
          isCorrect: false
        },
        {
          answer: 'c) pozostawiasz bez zaopatrzenia ze względu na niebezpieczeństwo braku przepływu powietrza w drogach oddechowych poszkodowanego',
          isCorrect: false
        },
        {
          answer: 'd) opatrunkiem zastawkowym',
          isCorrect: true
        },
        {
          answer: 'e) opatrunkiem uciskowym dla stabilizacji żeber',
          isCorrect: false
        }
      ]
    },
    {
      question: '769. U poszkodowanego w wyniku wypadku stwierdzono szereg obrażeń i objawów. Zaznacz, który objaw (lub grupa objawów), albo obrażenie Twoim zdaniem jest najbardziej niepokojący i może wskazywać na potencjalne zagrożenie poszkodowanego:',
      answers: [
        {
          answer: 'a) złamanie kończyny górnej ze znacznym przemieszczeniem',
          isCorrect: false
        },
        {
          answer: 'b) oparzenie II stopnia okolicy goleni',
          isCorrect: false
        },
        {
          answer: 'c) rana szarpana dłoni z niewielkim powolnym wyciekiem krwi',
          isCorrect: false
        },
        {
          answer: 'd) blada, chłodna i spocona skóra',
          isCorrect: true
        },
        {
          answer: 'e) złamanie otwarte goleni lewej bez krwotoku',
          isCorrect: false
        }
      ]
    },
    {
      question: '770. W przypadku krwotoku u poszkodowanego występują pewne charakterystyczne objawy. Wskaż który z niżej wymienionych objawów raczej nie wystąpi u takiego poszkodowanego:',
      answers: [
        {
          answer: 'a) przyspieszone tętno',
          isCorrect: false
        },
        {
          answer: 'b) przyspieszony i spłycony oddech',
          isCorrect: false
        },
        {
          answer: 'c) odczuwalne wzmożone pragnienie',
          isCorrect: false
        },
        {
          answer: 'd) zwolniona czynność serca',
          isCorrect: true
        },
        {
          answer: 'e) uczucie zimna',
          isCorrect: false
        }
      ]
    },
    {
      question: '771. Najdogodniejszą pozycją dla poszkodowanych po urazie brzucha jest pozycja:',
      answers: [
        {
          answer: 'a) leżąca z nogami zgiętymi w stawach biodrowych i kolanowych',
          isCorrect: true
        },
        {
          answer: 'b) półsiedząca',
          isCorrect: false
        },
        {
          answer: 'c) boczna bezpieczna',
          isCorrect: false
        },
        {
          answer: 'd) leżąca na brzuchu z nogami wyprostowanymi',
          isCorrect: false
        },
        {
          answer: 'e) przeciwwstrząsowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '772. W złamaniu otwartym kości udowej, któremu towarzyszy krwotok tętniczy priorytetem ratowniczym jest:',
      answers: [
        {
          answer: 'a) zatamowanie krwotoku w razie potrzeby przez ucisk na tętnicę powyżej miejsca złamania',
          isCorrect: true
        },
        {
          answer: 'b) ułożenie odłamów w pozycji zbliżonej do fizjologicznej dla stworzenia warunków dla zastosowania opatrunku uciskowego',
          isCorrect: false
        },
        {
          answer: 'c) założenie opatrunku osłaniającego i stabilizacja w pozycji zbliżonej do fizjologicznej',
          isCorrect: false
        },
        {
          answer: 'd) stabilizacja i unieruchomienie w pozycji zastanej oraz opatrunek uciskowy',
          isCorrect: false
        },
        {
          answer: 'e) tlenoterapia 100% tlenem',
          isCorrect: false
        }
      ]
    },
    {
      question: '773. Poszkodowanemu w hipotermii należy zapewnić pozycję:',
      answers: [
        {
          answer: 'a) poziomą',
          isCorrect: true
        },
        {
          answer: 'b) półsiedzącą',
          isCorrect: false
        },
        {
          answer: 'c) przeciwwstrząsową',
          isCorrect: false
        },
        {
          answer: 'd) boczną bezpieczną',
          isCorrect: false
        },
        {
          answer: 'e) pozycja nie ma znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '774. Widziałeś jak koleżanka upadła na korytarzu w pracy. Stwierdziłeś, że jest nieprzytomna Poprosiłeś drugą osobę, by wezwała pogotowie ratunkowe. Po udrożnieniu dróg oddechowych należy:',
      answers: [
        {
          answer: 'a) przyłożyć lusterko do ust nieprzytomnej',
          isCorrect: false
        },
        {
          answer: 'b) zbliżyć do ust i nosa poszkodowanej kartkę papieru lub piórko',
          isCorrect: false
        },
        {
          answer: 'c) ocenić ruchy tchawicy (jabłko Adama)',
          isCorrect: false
        },
        {
          answer: 'd) ocenić obecność oddechu przez 10 sek.',
          isCorrect: true
        },
        {
          answer: 'e) obserwować przez 5 sekund czy unosi się klatka piersiowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '775. U nieprzytomnego poszkodowanego nie stwierdzasz oddechu ani tętna. Po rozpoczęciu masażu pośredniego serca stwierdzasz, że doszło u niego do złamania kilku żeber. W takiej sytuacji:',
      answers: [
        {
          answer: 'a) przerywasz pośredni masaż serca i prowadzisz u poszkodowanego tylko sztuczną wentylację',
          isCorrect: false
        },
        {
          answer: 'b) rozpoczynasz bezpośredni masaż serca',
          isCorrect: false
        },
        {
          answer: 'c) nadal prowadzisz podjęte działania ratownicze (resuscytacja krążeniowo - oddechowa) zgodnie z procedurą',
          isCorrect: true
        },
        {
          answer: 'd) w pierwszej kolejności owijasz klatkę piersiową poszkodowanego bandażem elastycznym, dopiero wówczas rozpoczynasz wykonywanie masażu pośredniego serca',
          isCorrect: false
        },
        {
          answer: 'e) kontynuujesz podjęte czynności ratownicze, omijając uszkodzoną okolicę',
          isCorrect: false
        }
      ]
    },
    {
      question: '776. Nawrót kapilarny badamy uciskając:',
      answers: [
        {
          answer: 'a) mięsień dwugłowy',
          isCorrect: false
        },
        {
          answer: 'b) płytkę paznokciową',
          isCorrect: true
        },
        {
          answer: 'c) tętnicę promieniową',
          isCorrect: false
        },
        {
          answer: 'd) wypełnione żyły szyjne',
          isCorrect: false
        },
        {
          answer: 'e) grzbiet dłoni',
          isCorrect: false
        }
      ]
    },
    {
      question: '777. Zobaczyłeś jak twojego kolegę poraził prąd. Po odłączeniu źródła prądu stwierdzasz brak czynności życiowych, wzywasz pomoc i:',
      answers: [
        {
          answer: 'a) Rozpoczynasz wentylację workiem samorozprężalnym, a następnie masaż serca w stosunku 2/30. Przygotowujesz AED',
          isCorrect: false
        },
        {
          answer: 'b) Rozpoczynasz masaż serca, a następnie wentylację workiem samorozprężalnym w stosunku 30/2. Przygotowujesz AED',
          isCorrect: true
        },
        {
          answer: 'c) Wykonujesz wentylację workiem samorozprężalnym, dopóki nie uniesie się klatka piersiowa',
          isCorrect: false
        },
        {
          answer: 'd) Rozpoczynasz uciskanie klatki piersiowej',
          isCorrect: false
        },
        {
          answer: 'e) Podejmujesz wentylację i masaż serca w stosunku 2/30, a po 5 minutach wzywasz zespół ratownictwa medycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '778. Które z twierdzeń dotyczących hipotermii (wychłodzenia) jest prawdziwe:',
      answers: [
        {
          answer: 'a) Występuje tylko przy ujemnych temperaturach powietrza',
          isCorrect: false
        },
        {
          answer: 'b) Należy rozcierać ręce i nogi',
          isCorrect: false
        },
        {
          answer: 'c) Badanie tętna powinno trwać 60 sekund',
          isCorrect: true
        },
        {
          answer: 'd) Zalecane jest oklepywanie zimnych obszarów skóry',
          isCorrect: false
        },
        {
          answer: 'e) Należy podać do picia alkohol',
          isCorrect: false
        }
      ]
    },
    {
      question: '779. Jaka jest najczęstsza przyczyna śmierci, której można uniknąć u dorosłego poszkodowanego, który w wyniku wypadku komunikacyjnego leży nieprzytomny na plecach?',
      answers: [
        {
          answer: 'a) Niedrożność dróg oddechowych',
          isCorrect: true
        },
        {
          answer: 'b) Tamponada serca',
          isCorrect: false
        },
        {
          answer: 'c) Wstrząs krwotoczny',
          isCorrect: false
        },
        {
          answer: 'd) Uraz kręgosłupa',
          isCorrect: false
        },
        {
          answer: 'e) Zaburzenia rytmu serca',
          isCorrect: false
        }
      ]
    },
    {
      question: '780. Działania ratownicze wobec osoby ewakuowanej z wody rozpoczynamy od:',
      answers: [
        {
          answer: 'a) Uciskania mostka',
          isCorrect: false
        },
        {
          answer: 'b) Oceny stanu przytomności i obecności oznak krążenia',
          isCorrect: true
        },
        {
          answer: 'c) 5 wdechów ratowniczych',
          isCorrect: false
        },
        {
          answer: 'd) Udrożnienia dróg oddechowych',
          isCorrect: false
        },
        {
          answer: 'e) Odessania treści płynnej z jamy ustnej',
          isCorrect: false
        }
      ]
    },
    {
      question: '781. Optymalną pozycją dla nieprzytomnej “nieurazowej” kobiety w zaawansowanej ciąży jest:',
      answers: [
        {
          answer: 'a) Pozycja boczna ustalona (bezpieczna) na boku prawym',
          isCorrect: false
        },
        {
          answer: 'b) Pozycja ze zgiętymi kończynami dolnymi w stawach biodrowych i kolanowych',
          isCorrect: false
        },
        {
          answer: 'c) Pozycja boczna ustalona (bezpieczna) na boku lewym',
          isCorrect: true
        },
        {
          answer: 'd) Pozycja leząca z uniesionym lewym biodrem',
          isCorrect: false
        },
        {
          answer: 'e) Pozycja horyzontalna (pozioma)',
          isCorrect: false
        }
      ]
    },
    {
      question: '782. W przypadku stwierdzenia zatrzymania krążenia u dzieci resuscytację rozpoczynamy od:',
      answers: [
        {
          answer: 'a) 5 oddechów ratowniczych',
          isCorrect: true
        },
        {
          answer: 'b) 2 oddechów ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) 5 uciśnięć mostka',
          isCorrect: false
        },
        {
          answer: 'd) 10 uciśnięć mostka',
          isCorrect: false
        },
        {
          answer: 'e) 5 uciśnięć klatki piersiowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '783. Zwichnięcie stawu charakteryzuje się:',
      answers: [
        {
          answer: 'a) Koniecznością szybkiego zastosowania miejscowego chłodzenia',
          isCorrect: false
        },
        {
          answer: 'b) Koniecznością stabilizacji i unieruchomienia w pozycji zastanej',
          isCorrect: true
        },
        {
          answer: 'c) Koniecznością stabilizacji i unieruchomienia w pozycji zbliżonej do fizjologicznej',
          isCorrect: false
        },
        {
          answer: 'd) Koniecznością szybkiej stabilizacji i unieruchomienia na noszach typu deska',
          isCorrect: false
        },
        {
          answer: 'e) Koniecznością szybkiej stabilizacji na noszach typu deska',
          isCorrect: false
        }
      ]
    },
    {
      question: '784. U każdego poszkodowanego nieprzytomnego po skoku do wody „na główkę” podejrzewasz i wykonujesz:',
      answers: [
        {
          answer: 'a) Obrażenia w odcinku szyjnym kręgosłupa - w związku z tym nie udrażniasz dróg oddechowych',
          isCorrect: false
        },
        {
          answer: 'b) Obrażenia w odcinku szyjnym kręgosłupa - stosujesz stabilizację kręgosłupa w odcinku szyjnym ale bez wyciągu za szyję lub głowę',
          isCorrect: true
        },
        {
          answer: 'c) Dużą ilość wody w płucach - na początku resuscytacji zawsze usuwasz wodę z płuc',
          isCorrect: false
        },
        {
          answer: 'd) Niedrożność dróg oddechowych wywołana wodą – na początku resuscytacji zawsze odsysasz ssakiem',
          isCorrect: false
        },
        {
          answer: 'e) Obrażenia w odcinku szyjnym kręgosłupa - stosujesz stabilizację kręgosłupa w odcinku szyjnym przez zastosowanie wyciągu za szyję lub głowę',
          isCorrect: false
        }
      ]
    },
    {
      question: '785. Jaka jest najczęstsza przyczyna śmierci "do uniknięcia" u poszkodowanego po urazie?',
      answers: [
        {
          answer: 'a) Tamponada osierdzia',
          isCorrect: false
        },
        {
          answer: 'b) Wstrząs rdzeniowy',
          isCorrect: false
        },
        {
          answer: 'c) Uraz kręgosłupa',
          isCorrect: false
        },
        {
          answer: 'd) Niedrożność dróg oddechowych',
          isCorrect: true
        },
        {
          answer: 'e) Odma otwarta',
          isCorrect: false
        }
      ]
    },
    {
      question: '786. Będąc świadkiem napadu drgawkowego u osoby leżącej na chodniku należy:',
      answers: [
        {
          answer: 'a) Natychmiast założyć rurkę UG',
          isCorrect: false
        },
        {
          answer: 'b) Przy pomocy patyka rozchylić usta poszkodowanego',
          isCorrect: false
        },
        {
          answer: 'c) Przytrzymać kończyny starając się wyhamować drgawki',
          isCorrect: false
        },
        {
          answer: 'd) Ochraniać głowę przed obrażeniami',
          isCorrect: true
        },
        {
          answer: 'e) Nie dotykać poszkodowanego, ponieważ przyspiesza to ustąpienie drgawek',
          isCorrect: false
        }
      ]
    },
    {
      question: '787. Na przystanku autobusowym leży na brzuchu mężczyzna w wieku ok. 50 lat. Twoje postępowanie rozpoczniesz od:',
      answers: [
        {
          answer: 'a) Wezwania policji, ponieważ podejrzewasz że jest pijany',
          isCorrect: false
        },
        {
          answer: 'b) Ułożenia go w pozycji bezpiecznej i wezwania ZRM',
          isCorrect: false
        },
        {
          answer: 'c) Oceny czynności życiowych',
          isCorrect: true
        },
        {
          answer: 'd) Pozostawienia w pozycji zastanej i wezwania ZRM',
          isCorrect: false
        },
        {
          answer: 'e) Podania tlenu przy użyciu zestawu do tlenoterapii',
          isCorrect: false
        }
      ]
    },
    {
      question: '788. Pozycję boczną bezpieczną wykonujemy u poszkodowanych:',
      answers: [
        {
          answer: 'a) Nieprzytomnych nieoddychających z dobrze wyczuwalnym tętnem',
          isCorrect: false
        },
        {
          answer: 'b) Nieprzytomnych z zachowanym oddechem i tętnem po wykluczeniu urazu kręgosłupa',
          isCorrect: true
        },
        {
          answer: 'c) Poszkodowanych przytomnych',
          isCorrect: false
        },
        {
          answer: 'd) U wszystkich poszkodowanych',
          isCorrect: false
        },
        {
          answer: 'e) Stosujemy tylko u dorosłych',
          isCorrect: false
        }
      ]
    },
    {
      question: '789. Podczas wykonywania defibrylacji przy użyciu AED należy:',
      answers: [
        {
          answer: 'a) Przytrzymać elektrody, aby dobrze przylegały',
          isCorrect: false
        },
        {
          answer: 'b) Słuchać i wykonywać polecenia defibrylatora',
          isCorrect: true
        },
        {
          answer: 'c) Utrzymywać drożność dróg oddechowych',
          isCorrect: false
        },
        {
          answer: 'd) Prowadzić cały czas wentylację',
          isCorrect: false
        },
        {
          answer: 'e) Odkleić elektrody podczas masażu',
          isCorrect: false
        }
      ]
    },
    {
      question: '790. Podchodząc do poszkodowanego widzisz krwotok z rany uda. Prawdopodobnie stało się to w wyniku niewłaściwego posługiwania się pilarką spalinową. Należy:',
      answers: [
        {
          answer: 'a) Zabezpieczyć miejsce zdarzenia, wdrożyć kolejno schematy AVPU, ABC, SAMPLE',
          isCorrect: false
        },
        {
          answer: 'b) Zabezpieczyć miejsce zdarzenia, wdrożyć kolejno schematy SAMPLE, AVPU, ABC',
          isCorrect: false
        },
        {
          answer: 'c) Zabezpieczyć miejsce zdarzenia, wdrożyć kolejno schematy CAB, AVPU, SAMPLE',
          isCorrect: true
        },
        {
          answer: 'd) Natychmiast przystąpić do CAB',
          isCorrect: false
        },
        {
          answer: 'e) Zabezpieczyć miejsce zdarzenia, przełożyć na nosze i szybko ewakuować do ZRM',
          isCorrect: false
        }
      ]
    },
    {
      question: '791. SAMPLE to:',
      answers: [
        {
          answer: 'a) Skrót od pierwszych liter wywiadu ratowniczego',
          isCorrect: true
        },
        {
          answer: 'b) Rodzaj opatrunku osłaniającego',
          isCorrect: false
        },
        {
          answer: 'c) Rodzaj szyny do unieruchomienia złamania',
          isCorrect: false
        },
        {
          answer: 'd) Sposób odksztuszania ciała obcego',
          isCorrect: false
        },
        {
          answer: 'e) Nazwa nie związana z ratownictwem',
          isCorrect: false
        }
      ]
    },
    {
      question: '792. W przypadku stwierdzenia obecności oddechu u poszkodowanego określenie “oddech nieprawidłowy” oznacza:',
      answers: [
        {
          answer: 'a) Odchylenie częstości oddechu o ok. +/- 10% od wartości fizjologicznych',
          isCorrect: false
        },
        {
          answer: 'b) Częstość oddechu powyżej dolnej granicy fizjologii',
          isCorrect: false
        },
        {
          answer: 'c) Częstość oddechu poniżej górnej granicy fizjologii',
          isCorrect: false
        },
        {
          answer: 'd) Oddech nie zapewniający prawidłowej wymiany gazowej niezbędnej do życia',
          isCorrect: true
        },
        {
          answer: 'e) Oddech przez nos',
          isCorrect: false
        }
      ]
    },
    {
      question: '793. W którym momencie ratownik może przerwać ręczną stabilizację głowy',
      answers: [
        {
          answer: 'a) Po przełożeniu poszkodowanego na deskę',
          isCorrect: false
        },
        {
          answer: 'b) Po wykonaniu badania urazowego',
          isCorrect: false
        },
        {
          answer: 'c) Po wdrożeniu tlenoterapii',
          isCorrect: false
        },
        {
          answer: 'd) Po zabezpieczeniu poszkodowanego pasami i pełnej stabilizacji głowy przy pomocy stabilizatorów',
          isCorrect: true
        },
        {
          answer: 'e) W momencie założenia kołnierza',
          isCorrect: false
        }
      ]
    },
    {
      question: '794. W samochodzie który uczestniczył w wypadku komunikacyjnym znajduje się dziecko ok. 1,5-2 lat zapięte w foteliku. Dziecko jest przytomne, płacze. W badaniu nie stwierdzasz obrażeń. Twoje postępowanie będzie polegało na:',
      answers: [
        {
          answer: 'a) Ewakuacji dziecka na deskę ortopedyczną, podaniu tlenu i zapewnieniu komfortu termicznego',
          isCorrect: false
        },
        {
          answer: 'b) Pozostawieniu dziecka w foteliku i wykonaniu stabilizacji odcinka szyjnego kręgosłupa oraz podaniu tlenu, jeśli wskazane zapewnieniu kontaktu z rodzicem / opiekunem oraz komfortu termicznego',
          isCorrect: true
        },
        {
          answer: 'c) Pozostawieniu dziecka w foteliku, podaniu tlenu i maskotki',
          isCorrect: false
        },
        {
          answer: 'd) Wypięciu dziecka z fotelika i przekazaniu rodzicom/ opiekunom',
          isCorrect: false
        },
        {
          answer: 'e) Ewakuacji dziecka na deskę ortopedyczną, wykonaniu stabilizacji odcinka szyjnego kręgosłupa i podaniu tlenu, zapewnieniu kontaktu z rodzicem / opiekunem oraz komfortu termicznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '795. U poszkodowanego po upadku z wysokości 3 metrów wykonałeś stabilizację ciała obcego wbitego w klatkę piersiową od strony pleców. Poszkodowanego należy ułożyć:',
      answers: [
        {
          answer: 'a) Na desce ortopedycznej na wznak z uniesieniem deski od strony głowy. Pozycja ta umożliwi przesunięcie trzewi jamy brzusznej do miednicy, co odciąży przeponę',
          isCorrect: false
        },
        {
          answer: 'b) Na desce ortopedycznej na boku po stronie tkwiącego ciała obcego. Pozycja ta umożliwi pracę nieuszkodzonego płuca',
          isCorrect: true
        },
        {
          answer: 'c) W pozycji, w której dolegliwości bólowe są najmniejsze, a oddychanie najmniej utrudnione',
          isCorrect: false
        },
        {
          answer: 'd) Na desce ortopedycznej na boku po stronie nieuszkodzonego płuca. Pozycja ta zapewni niepogłębienie obrażeń, jakich doznało płuco',
          isCorrect: false
        },
        {
          answer: 'e) Na desce ortopedycznej na brzuchu. Pozycja ta zapewni dostęp do ciała obcego oraz zapewni osiowe ustawienie głowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '796. Wyczuwalny u poszkodowanego podczas badania wstępnego “twardy brzuch”, świadczy o:',
      answers: [
        {
          answer: 'a) Pęknięciu przepony. Należy wdrożyć postępowanie jak w obrażeniach kl. piersiowej',
          isCorrect: false
        },
        {
          answer: 'b) Uszkodzeniu narządów jamy brzusznej i/lub krwawieniu do jamy brzusznej. Należy wdrożyć postępowanie dla obrażeń brzucha i kontrolować parametry życiowe, aby ocenić objawy narastania wstrząsu',
          isCorrect: true
        },
        {
          answer: 'c) Wystąpieniu zaburzeń funkcji jelita grubego. Nie wymaga pomocy w zakresie kpp',
          isCorrect: false
        },
        {
          answer: 'd) Uszkodzeniu wyłącznie wątroby. Należy wdrożyć postępowanie dla obrażeń brzucha. Należy kontrolować parametry życiowe, aby ocenić objawy narastania wstrząsu',
          isCorrect: false
        },
        {
          answer: 'e) Uszkodzeniu wyłącznie nerek. Należy wdrożyć postępowanie dla obrażeń brzucha. Należy kontrolować parametry życiowe, aby ocenić objawy narastania wstrząsu',
          isCorrect: false
        }
      ]
    },
    {
      question: '797. Właściwe postępowanie przy otwartej ranie jamy brzusznej z wytrzewieniem narządów to:',
      answers: [
        {
          answer: 'a) Ucisk na ranę dla powstrzymania sączenia krwi i podanie tlenu',
          isCorrect: false
        },
        {
          answer: 'b) Tylko zabezpieczenie jałowym opatrunkiem wytrzewionych narządów',
          isCorrect: false
        },
        {
          answer: 'c) Zabezpieczenie jałowym zwilżonym opatrunkiem wytrzewionych narządów, folia miejscowo chroniąca przed wysychaniem, ugięcie nóg w kolanach i podanie tlenu',
          isCorrect: true
        },
        {
          answer: 'd) Zabezpieczenie jałowym opatrunkiem wytrzewionych narządów, uniesienie nóg o 30st do góry i podanie tlenu',
          isCorrect: false
        },
        {
          answer: 'e) Wprowadzenie jelit do środka',
          isCorrect: false
        }
      ]
    },
    {
      question: '798. Poszkodowanego z obrażeniami brzucha i miednicy należy ułożyć w pozycji:',
      answers: [
        {
          answer: 'a) Z ugiętymi nogami w stawach kolanowych i biodrowych',
          isCorrect: false
        },
        {
          answer: 'b) Na wznak',
          isCorrect: true
        },
        {
          answer: 'c) Z uniesioną głową',
          isCorrect: false
        },
        {
          answer: 'd) Trendelenburga',
          isCorrect: false
        },
        {
          answer: 'e) Na lewym boku w przypadku kobiet w ciąży',
          isCorrect: false
        }
      ]
    },
    {
      question: '799. Przemieszczenie poszkodowanego na nosze typu deska techniką rolowania jest przeciwskazana przy:',
      answers: [
        {
          answer: 'a) Podejrzeniu obrażenia kręgosłupa',
          isCorrect: false
        },
        {
          answer: 'b) Obrażeniu kończyny dolnej',
          isCorrect: false
        },
        {
          answer: 'c) Stłuczeniu klatki piersiowej',
          isCorrect: false
        },
        {
          answer: 'd) Niestabilnej miednicy potwierdzonej w badaniu',
          isCorrect: true
        },
        {
          answer: 'e) Nie stosujemy takiej techniki w ratownictwie',
          isCorrect: false
        }
      ]
    },
    {
      question: '800. Przy podejrzeniu obrażeń miednicy:',
      answers: [
        {
          answer: 'a) Zawsze rolujemy poszkodowanego na deskę bez względu na liczbę ratowników',
          isCorrect: false
        },
        {
          answer: 'b) Poszkodowanego przytomnego prosimy, aby się delikatnie wsunął na deskę',
          isCorrect: false
        },
        {
          answer: 'c) Przenosimy przy użyciu techniki wielu rąk lub dostępnych noszy podbierakowych',
          isCorrect: true
        },
        {
          answer: 'd) Obrażenia miednicy nie wpływają na sposób przenoszenia poszkodowanego na deskę',
          isCorrect: false
        },
        {
          answer: 'e) Poszkodowanego zawsze pozostawiamy w pozycji zastanej',
          isCorrect: false
        }
      ]
    },
    {
      question: '801. Postępowanie w przypadku złamania zamkniętego kości polega na:',
      answers: [
        {
          answer: 'a) Stabilizacji w pozycji zbliżonej do fizjologicznej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'b) Stabilizacji w pozycji zastanej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'c) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej i unieruchomieniu',
          isCorrect: true
        },
        {
          answer: 'd) Stabilizacji w pozycji zastanej, założeniu opatrunku na ranę i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'e) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej, założeniu opatrunku i unieruchomieniu',
          isCorrect: false
        }
      ]
    },
    {
      question: '802. Postępowanie w przypadku skręcenia stawu kolanowego polega na:',
      answers: [
        {
          answer: 'a) Stabilizacji w pozycji zbliżonej do fizjologicznej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'b) Stabilizacji w pozycji zastanej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'c) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej i unieruchomieniu',
          isCorrect: true
        },
        {
          answer: 'd) Stabilizacji w pozycji zastanej, założeniu opatrunku na ranę i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'e) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej, założeniu opatrunku i unieruchomieniu',
          isCorrect: false
        }
      ]
    },
    {
      question: '803. Postępowanie w przypadku zwichnięcia stawu kolanowego polega na:',
      answers: [
        {
          answer: 'a) Stabilizacji w pozycji zbliżonej do fizjologicznej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'b) Stabilizacji w pozycji zastanej i unieruchomieniu',
          isCorrect: true
        },
        {
          answer: 'c) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'd) Stabilizacji w pozycji zastanej, założeniu opatrunku na ranę i unieruchomieniu',
          isCorrect: false
        },
        {
          answer: 'e) Stabilizacji w pozycji zbliżonej do fizjologicznej, a w razie braku takiej możliwości w pozycji zastanej, założeniu opatrunku i unieruchomieniu',
          isCorrect: false
        }
      ]
    },
    {
      question: '804. Wskaż twierdzenie prawidłowe:',
      answers: [
        {
          answer: 'a) Opaskę zaciskową (staza taktyczna) jest zakładana bezpośrednio na ranę',
          isCorrect: false
        },
        {
          answer: 'b) Opatrunek uciskowy jest zakładany bezpośrednio w miejscu krwawienia',
          isCorrect: true
        },
        {
          answer: 'c) Nadrzędną metodą tamowania krwotoków jest założenie opaski zaciskowej (stazy taktycznej)',
          isCorrect: false
        },
        {
          answer: 'd) Opaska zaciskowa (staza taktyczna) powinna mieć nie więcej niż 25 cm szerokości',
          isCorrect: false
        },
        {
          answer: 'e) Opatrunek uciskowy jest zakładany powyżej miejsca krwawienia',
          isCorrect: false
        }
      ]
    },
    {
      question: '805. Kiedy założysz opaskę zaciskową (stazę taktyczną):',
      answers: [
        {
          answer: 'a) Jeśli wykorzystałeś wszystkie dostępne sposoby tamowania krwotoków',
          isCorrect: true
        },
        {
          answer: 'b) Jeśli na uszkodzonej kończynie nie wyczuwasz tętna',
          isCorrect: false
        },
        {
          answer: 'c) Nie stosuje się opaski zaciskowej w działaniach z zakresu kpp',
          isCorrect: false
        },
        {
          answer: 'd) Po konsultacji z Koordynatorem Medycznym',
          isCorrect: false
        },
        {
          answer: 'e) Gdy transport poszkodowanego przekracza 30 min',
          isCorrect: false
        }
      ]
    },
    {
      question: '806. Krwawienie z nosa zaopatrujemy w następujący sposób:',
      answers: [
        {
          answer: 'a) Poszkodowanemu polecamy pochylić się do przodu i zacisnąć skrzydełka nosa',
          isCorrect: true
        },
        {
          answer: 'b) Poszkodowanemu polecamy pochylić się do tyłu i zacisnąć skrzydełka nosa',
          isCorrect: false
        },
        {
          answer: 'c) Poszkodowanemu polecamy pochylić się na bok i zacisnąć skrzydełka nosa',
          isCorrect: false
        },
        {
          answer: 'd) Zakładamy opatrunek uciskowy',
          isCorrect: false
        },
        {
          answer: 'e) Dajemy opatrunek na okolice nosa',
          isCorrect: false
        }
      ]
    },
    {
      question: '807. W przypadku amputacji urazowej:',
      answers: [
        {
          answer: 'a) W pierwszej kolejności należy wdrożyć wsparcie psychiczne. Takie działanie poprawia stan poszkodowanego',
          isCorrect: false
        },
        {
          answer: 'b) W pierwszej kolejności należy zabezpieczyć amputowaną część ciała. Od tego zależy późniejsza możliwość replantacji (przyszycia)',
          isCorrect: false
        },
        {
          answer: 'c) Nadrzędnym działaniem jest zabezpieczenie rany pod kątem krwotoku',
          isCorrect: true
        },
        {
          answer: 'd) Nadrzędnym jest zabezpieczenie rany amputowanej części ciała. Zakażenie jest główną przyczyną dyskwalifikacji do replantacji (przyszycia)',
          isCorrect: false
        },
        {
          answer: 'e) Amputacja urazowa wymaga specjalistycznego postępowania wstępnego, należy wstrzymać wszelkie czynności do czasu przyjazdu ZRM',
          isCorrect: false
        }
      ]
    },
    {
      question: '808. Amputowaną część ciała należy:',
      answers: [
        {
          answer: 'a) Obmyć z krwi i zanieczyszczeń',
          isCorrect: false
        },
        {
          answer: 'b) Umieścić w lodzie',
          isCorrect: false
        },
        {
          answer: 'c) Zabezpieczyć na sucho jałowym opatrunkiem umieścić w foliowym worku i w miarę możliwości umieścić w drugim worku wypełnionym wodą z lodem',
          isCorrect: true
        },
        {
          answer: 'd) Zabezpieczenie części amputowanej jest priorytetem',
          isCorrect: false
        },
        {
          answer: 'e) Postępowanie w tym przypadku może przeprowadzić tylko zespól pogotowia',
          isCorrect: false
        }
      ]
    },
    {
      question: '809. Tlenoterapia u poszkodowanych kobiet w ciąży:',
      answers: [
        {
          answer: 'a) Jest prowadzona zgodnie z ogólnymi zasadami',
          isCorrect: true
        },
        {
          answer: 'b) Jest przeciwskazana, gdyż duże stężenia tlenu są szkodliwe dla płodu',
          isCorrect: false
        },
        {
          answer: 'c) Powinna być prowadzona z podwójną intensywnością',
          isCorrect: false
        },
        {
          answer: 'd) Powinna być prowadzona w połowie wartości przepływów standardowych',
          isCorrect: false
        },
        {
          answer: 'e) Nie jest konieczna, kobiety w ciąży mają duże mechanizmy kompensacyjne',
          isCorrect: false
        }
      ]
    },
    {
      question: '810. Udzielając pomocy poszkodowanemu 5-letniemu dziecku, należy zapewnić komfort psychiczny między innymi przez:',
      answers: [
        {
          answer: 'a) Odizolowanie go od świadków zdarzenia w tym i opiekunów',
          isCorrect: false
        },
        {
          answer: 'b) Odizolowanie go od świadków zdarzenia i zapewnienie mu kontaktu z opiekunami',
          isCorrect: true
        },
        {
          answer: 'c) Odizolowanie go od świadków zdarzenia i zapewnienia mu możliwości spożycia czekolady',
          isCorrect: false
        },
        {
          answer: 'd) Pozostawienie go tylko pod nadzorem opiekunów',
          isCorrect: false
        },
        {
          answer: 'e) Odizolowanie go od świadków zdarzenia poprzez zasłonięcie mu oczu',
          isCorrect: false
        }
      ]
    },
    {
      question: '811. Optymalną pozycją dla nieprzytomnej “nieurazowej” kobiety w zaawansowanej ciąży jest:',
      answers: [
        {
          answer: 'a) Pozycja boczna ustalona (bezpieczna) na boku prawym',
          isCorrect: false
        },
        {
          answer: 'b) Pozycja ze zgiętymi kończynami dolnymi w stawach biodrowych i kolanowych',
          isCorrect: false
        },
        {
          answer: 'c) Pozycja boczna ustalona (bezpieczna) na boku lewym',
          isCorrect: true
        },
        {
          answer: 'd) Pozycja leżąca z uniesionym lewym biodrem',
          isCorrect: false
        },
        {
          answer: 'e) Pozycja horyzontalna (pozioma)',
          isCorrect: false
        }
      ]
    },
    {
      question: '812. Podczas długotrwałej akcji ratowniczej w upalny dzień jeden z ratowników skarży się na: zawroty głowy, osłabienie, nudności, niewyraźne widzenie, suchość w ustach. Prawdopodobnie:',
      answers: [
        {
          answer: 'a) Są to objawy zatrucia. Należy wykonać płukanie żołądka',
          isCorrect: false
        },
        {
          answer: 'b) Jeśli ratownikiem jest kobieta są to objawy ciąży. Należy wyłączyć ją z działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) Są to wczesne objawy wstrząsu anafilaktycznego (uczuleniowego). Należy wezwać Zespół Ratownictwa Medycznego',
          isCorrect: false
        },
        {
          answer: 'd) Objawy te są znamienne dla choroby dekompresyjnej. Należy wdrożyć intensywną tlenoterapię',
          isCorrect: false
        },
        {
          answer: 'e) Ratownik ten jest przegrzany. Należy rozpocząć postępowanie, mające na celu ustąpienie powyższych objawów',
          isCorrect: true
        }
      ]
    },
    {
      question: '813. Kto organizuje Ratownictwo Wysokościowe w zakresie podstawowym w KSRG:',
      answers: [
        {
          answer: 'a) Komendant Wojewódzki PSP',
          isCorrect: false
        },
        {
          answer: 'b) terytorialnie Specjalistyczna Grupa Ratownictwa Wysokościowego',
          isCorrect: false
        },
        {
          answer: 'c) właściwy terytorialnie Komendant Powiatowy lub Miejski PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '814. Ratownictwo Wysokościowe w zakresie podstawowym realizują:',
      answers: [
        {
          answer: 'a) Jednostki Ratowniczo - Gaśnicze PSP, gdzie utworzona jest SGRW',
          isCorrect: false
        },
        {
          answer: 'b) Wszystkie Jednostki Ratowniczo - Gaśnicze PSP',
          isCorrect: true
        },
        {
          answer: 'c) Wszystkie Jednostki Ratowniczo - Gaśnicze PSP + OSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '815. Czynności ratownicze w zakresie podstawowym ratownictwa wysokościowego nie obejmują:',
      answers: [
        {
          answer: 'a) zabezpieczenia poszkodowanego przed upadkiem z wykorzystaniem liny pętli do asekuracji i uprzęży ewakuacyjnej',
          isCorrect: false
        },
        {
          answer: 'b) samodzielnego ratowania życia i zdrowia i mienia, poprzez wykonanie czynności ratowniczych za pomocą technik linowych i sprzętu specjalistycznego w tym z wykorzystaniem śmigłowca',
          isCorrect: true
        },
        {
          answer: 'c) współdziałania z innymi podmiotami współpracującymi z KSRG (w tym między innymi: CSRG, GOPR, LPR, OSP spoza KSRG, PCK, PZA, TOPR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '816. Budynek wysoki jest to budynek o wysokości nad poziomem terenu:',
      answers: [
        {
          answer: 'a) 12-25 m',
          isCorrect: false
        },
        {
          answer: 'b) 25-55 m',
          isCorrect: true
        },
        {
          answer: 'c) 55-75 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '817. Budynki niskie to:',
      answers: [
        {
          answer: 'a) budynki mieszkalne o wysokości do 4 kondygnacji włącznie',
          isCorrect: true
        },
        {
          answer: 'b) budynki mieszkalne o wysokości do 9 kondygnacji włącznie',
          isCorrect: false
        },
        {
          answer: 'c) budynki mieszkalne o wysokości do 2 kondygnacji włącznie',
          isCorrect: false
        }
      ]
    },
    {
      question: '818. Różnice w wyszkoleniu z zakresu ratownictwa wysokościowego na poziomie podstawowym należy kompensować w ramach:',
      answers: [
        {
          answer: 'a) szkoleń specjalistycznych',
          isCorrect: false
        },
        {
          answer: 'b) doskonalenia zawodowego',
          isCorrect: true
        },
        {
          answer: 'c) szkolenia kwalifikacyjnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '819. Wykonywanie czynności ratowniczych, polegających na zabezpieczeniu poszkodowanego przed upadkiem z wykorzystaniem liny pętli do asekuracji i uprzęży ewakuacyjnej dopuszczalne jest przez:',
      answers: [
        {
          answer: 'a) jednostki poziomu podstawowego z zakresu ratownictwa wysokościowego',
          isCorrect: true
        },
        {
          answer: 'b) jednostki poziomu podstawowego z zakresu ratownictwa wysokościowego tylko i wyłącznie pod nadzorem dowódcy SGRW',
          isCorrect: false
        },
        {
          answer: 'c) Specjalistyczne Grupy Ratownictwa Wysokościowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '820. Dotarcie ratownika w dół z asekuracją z użyciem szelek bezpieczeństwa lin pętli stanowiskowych i węzłów zrealizujesz w oparciu o:',
      answers: [
        {
          answer: 'a) drabiny, bezwzględnie pewny punktu mocowania (drzewo lub samochód pożarniczy itp), zjazd na węźle półwyblinka',
          isCorrect: false
        },
        {
          answer: 'b) dwie drabiny nasadkowe, stanowiące improwizowany „trójnóg”',
          isCorrect: false
        },
        {
          answer: 'c) odpowiedź prawidłowa a i b',
          isCorrect: true
        }
      ]
    },
    {
      question: '821. Sprzęt wykorzystywany w działaniach ratownictwa wysokościowego w zakresie podstawowym powinien spełniać wymagania normy i posiadać certyfikaty:',
      answers: [
        {
          answer: 'a) CNOBP',
          isCorrect: false
        },
        {
          answer: 'b) CE i spełniać normy PN i EN lub UIAA',
          isCorrect: true
        },
        {
          answer: 'c) PZA',
          isCorrect: false
        }
      ]
    },
    {
      question: '822. W zakresie podstawowym strażak – ratownik po ukończeniu szkolenia LPR może:',
      answers: [
        {
          answer: 'a) wyznaczać lądowisko i przyjmować śmigłowiec',
          isCorrect: true
        },
        {
          answer: 'b) działać z pokładu śmigłowca',
          isCorrect: false
        },
        {
          answer: 'c) prowadzić dolną i górną asekurację',
          isCorrect: false
        }
      ]
    },
    {
      question: '823. Strażak, który przyjmuje śmigłowiec podchodzący do lądowania powinien ustawić się:',
      answers: [
        {
          answer: 'a) mając wiatr w plecy',
          isCorrect: true
        },
        {
          answer: 'b) mając wiatr w twarz',
          isCorrect: false
        },
        {
          answer: 'c) mając wiatr z boku',
          isCorrect: false
        }
      ]
    },
    {
      question: '824. Minimalne wymiary miejsca lądowania dla śmigłowca LPR (EC135) w nocy wynoszą:',
      answers: [
        {
          answer: 'a) 25x25',
          isCorrect: false
        },
        {
          answer: 'b) 35x25',
          isCorrect: false
        },
        {
          answer: 'c) 50x25',
          isCorrect: true
        }
      ]
    },
    {
      question: '825. Na wyznaczonym miejscu lądowania śmigłowca zabrania się:',
      answers: [
        {
          answer: 'a) oznakowania terenu taśmą ostrzegawczą',
          isCorrect: true
        },
        {
          answer: 'b) oświetlenia teren lądowiska',
          isCorrect: false
        },
        {
          answer: 'c) zabezpieczenia teren przed wtargnięciem osób trzecich',
          isCorrect: false
        }
      ]
    },
    {
      question: '826. Podchodzenia do śmigłowca od strony wznoszącego się zbocza w czasie pracy wirnika:',
      answers: [
        {
          answer: 'a) dokonujemy w przemysłowym hełmie ochronnym',
          isCorrect: false
        },
        {
          answer: 'b) dokonujemy w kasku alpinistycznym',
          isCorrect: false
        },
        {
          answer: 'c) zabrania się',
          isCorrect: true
        }
      ]
    },
    {
      question: '827. Wejście na pokład śmigłowca:',
      answers: [
        {
          answer: 'a) jest możliwe tylko na wyraźne polecenie członka załogi śmigłowca',
          isCorrect: true
        },
        {
          answer: 'b) jest możliwe po otrzymaniu komendy od operatora',
          isCorrect: false
        },
        {
          answer: 'c) po przyziemieniu (zawisie) maszyny nad lądowiskiem',
          isCorrect: false
        }
      ]
    },
    {
      question: '828. W nocy przyjęcie śmigłowca LPR (EC135) odbywa się za pomocą:',
      answers: [
        {
          answer: 'a) gestów strażaka stojącego w środku wyznaczonego do lądowania prostokąta',
          isCorrect: false
        },
        {
          answer: 'b) gestów strażaka stojącego poza obszarem wyznaczonego do lądowania prostokąta',
          isCorrect: false
        },
        {
          answer: 'c) strażaków z oświetleniem nakierowanym na miejsce przyziemienia śmigłowca',
          isCorrect: true
        }
      ]
    },
    {
      question: '829. Podstawowym kanałem łączności do współdziałania Straż Pożarna/LPR jest:',
      answers: [
        {
          answer: 'a) kanał 40',
          isCorrect: false
        },
        {
          answer: 'b) KSWL UO2',
          isCorrect: true
        },
        {
          answer: 'c) kanał ogólnopolski ratowniczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '830. W przypadku zaistnienia realnego zagrożenia podczas lądowania śmigłowca EC135 na lądowisku gminnym w nocy, informację o niebezpieczeństwie przekażesz:',
      answers: [
        {
          answer: 'a) za pomocą znaku/gestu „nie lądować” (jedna ręka uniesiona do góry, druga opuszczona, odchylona nieco od tułowia, symbolizująca literę N)',
          isCorrect: false
        },
        {
          answer: 'b) za pomocą łączności radiowej',
          isCorrect: true
        },
        {
          answer: 'c) podczas lądowania śmigłowca nie ma już możliwości przekazania informacji o niebezpieczeństwie',
          isCorrect: false
        }
      ]
    },
    {
      question: '831. Zatrzaśnik służy do:',
      answers: [
        {
          answer: 'a) szybkiego łączenia węży tłoczonych i zabezpieczenia przed ich samoczynnym rozłączeniem',
          isCorrect: false
        },
        {
          answer: 'b) łączenia maski z reduktorem aparatu powietrznego wysokociśnieniowego',
          isCorrect: false
        },
        {
          answer: 'c) zabezpieczenia strażaka przy pracach na wysokości',
          isCorrect: true
        }
      ]
    },
    {
      question: '832. Węzły mocujące to:',
      answers: [
        {
          answer: 'a) wyblinka, półwyblinka',
          isCorrect: false
        },
        {
          answer: 'b) ósemka, ósemka powrotna',
          isCorrect: true
        },
        {
          answer: 'c) półwyblinka, węzeł flagowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '833. Jaki węzeł musimy zabezpieczyć:',
      answers: [
        {
          answer: 'a) ósemka',
          isCorrect: false
        },
        {
          answer: 'b) skrajny tatrzański',
          isCorrect: true
        },
        {
          answer: 'c) kluczka',
          isCorrect: false
        }
      ]
    },
    {
      question: '834. Którego węzła użyjesz przy wypuszczaniu liny do asekuracji ratownika:',
      answers: [
        {
          answer: 'a) ratowniczy',
          isCorrect: false
        },
        {
          answer: 'b) półwyblinka',
          isCorrect: true
        },
        {
          answer: 'c) wyblinka',
          isCorrect: false
        }
      ]
    },
    {
      question: '835. Jakiego węzła użyjesz do zjazdu na zatrzaśniku, w przypadku samoratowania z okna trzeciego piętra:',
      answers: [
        {
          answer: 'a) podwójnego zderzakowego',
          isCorrect: false
        },
        {
          answer: 'b) półwyblinki',
          isCorrect: true
        },
        {
          answer: 'c) kluczki na rozrywanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '836. Jakim węzłem zabezpieczysz półwyblinkę, podczas zjazdu ze wspinalni sportowej w celu zatrzymania się:',
      answers: [
        {
          answer: 'a) ósemką podwójną',
          isCorrect: false
        },
        {
          answer: 'b) ósemką potrójną',
          isCorrect: false
        },
        {
          answer: 'c) flagowym',
          isCorrect: true
        }
      ]
    },
    {
      question: '837. Jakim węzłem w sytuacji awaryjnej dowiążesz siebie lub poszkodowanego do końca liny:',
      answers: [
        {
          answer: 'a) flagowym',
          isCorrect: false
        },
        {
          answer: 'b) skrajnym tatrzańskim',
          isCorrect: true
        },
        {
          answer: 'c) ósemką',
          isCorrect: false
        }
      ]
    },
    {
      question: '838. Półwyblinka to węzeł:',
      answers: [
        {
          answer: 'a) do łączenia liny',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczający',
          isCorrect: false
        },
        {
          answer: 'c) służący do zjazdu lub asekuracji',
          isCorrect: true
        }
      ]
    },
    {
      question: '839. Węzeł służący między innymi do zjazdu to:',
      answers: [
        {
          answer: 'a) wyblinka',
          isCorrect: false
        },
        {
          answer: 'b) półwyblinka',
          isCorrect: true
        },
        {
          answer: 'c) flagowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '840. Który węzeł służy do zabezpieczenia węzła półwyblinka przed samoczynnym rozwiązaniem:',
      answers: [
        {
          answer: 'a) ósemka',
          isCorrect: false
        },
        {
          answer: 'b) flagowy',
          isCorrect: true
        },
        {
          answer: 'c) ratowniczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '841. Ósemka powrotna to węzeł służący do:',
      answers: [
        {
          answer: 'a) blokowania liny',
          isCorrect: false
        },
        {
          answer: 'b) zabezpieczenia liny',
          isCorrect: false
        },
        {
          answer: 'c) mocowania liny',
          isCorrect: true
        }
      ]
    },
    {
      question: '842. W jaki sprzęt specjalistyczny należy bezwzględnie wyposażyć ratownika opuszczanego w zagłębienia terenu (studnie, kanały itp.):',
      answers: [
        {
          answer: 'a) oświetlenie, łączność, detektor gazu',
          isCorrect: true
        },
        {
          answer: 'b) torba PSP R1, łączność, gaśnicę, oświetlenie, detektor gazu',
          isCorrect: false
        },
        {
          answer: 'c) aparat powietrzny, łączność, torba PSP R1, kapok, oświetlenie',
          isCorrect: false
        }
      ]
    },
    {
      question: '843. Zamiast trójnogu ratowniczego wykorzystasz:',
      answers: [
        {
          answer: 'a) dwa przęsła drabiny nasadkowej DN 2,7',
          isCorrect: true
        },
        {
          answer: 'b) elementy znalezione na miejscu zdarzenia',
          isCorrect: false
        },
        {
          answer: 'c) drabinę słupkową',
          isCorrect: false
        }
      ]
    },
    {
      question: '844. Do ewakuacji poszkodowanego ze studni wykorzystasz:',
      answers: [
        {
          answer: 'a) wyciągniesz poszkodowanego za pomocą samochodu',
          isCorrect: false
        },
        {
          answer: 'b) wykorzystasz trójnóg ratowniczy z wielokrążkiem',
          isCorrect: true
        },
        {
          answer: 'c) wydostaniesz poszkodowanego za pomocą siły rąk, zakładając przy tym rękawiczki',
          isCorrect: false
        }
      ]
    },
    {
      question: '845. Po przyjeździe na miejsce wypadku zastajesz poszkodowanego - przytomnego w studni z wodą. Twoje postępowanie przebiega wg schematu:',
      answers: [
        {
          answer: 'a) sprawdzasz stężenie gazów niebezpiecznych/ w przypadku braku gazów rozstawiasz trójnóg/ opuszczasz ratownika do poszkodowanego',
          isCorrect: false
        },
        {
          answer: 'b) wzywasz najbliższą SGRW i czekasz na przybycie',
          isCorrect: false
        },
        {
          answer: 'c) rzucasz poszkodowanemu linę, by pozostał na powierzchni/ budujesz stanowisko przy użyciu sprzętu dostępnego na samochodzie/ opuszczasz ratownika wyposażonego w czujnik gazowy i inny sprzęt do ratownictwa poszkodowanego',
          isCorrect: true
        }
      ]
    },
    {
      question: '846. „Bezwzględnie pewny punkt mocowania” do budowy stanowisk ratowniczych powinien:',
      answers: [
        {
          answer: 'a) być tylko metalowy, bo metal ma dużą wytrzymałość i jest twardy',
          isCorrect: false
        },
        {
          answer: 'b) być to dowolny punkt mocowania, który gwarantuje nam odpowiednią stabilność i wytrzymałość',
          isCorrect: true
        },
        {
          answer: 'c) powinno być to tylko drzewo o średnicy powyżej 30 cm, gdyż ma dobrze rozwinięty system korzeniowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '847. Gotowość operacyjna w zakresie podstawowym ma być osiągnięta w czasie:',
      answers: [
        {
          answer: 'a) Niezwłocznie',
          isCorrect: true
        },
        {
          answer: 'b) 15 min',
          isCorrect: false
        },
        {
          answer: 'c) 20 min',
          isCorrect: false
        }
      ]
    },
    {
      question: '848. Czy do wydobycia np. ze studni osoby poszkodowanej można użyć dźwigu (HDS itp.) ?',
      answers: [
        {
          answer: 'a) Nie',
          isCorrect: false
        },
        {
          answer: 'b) Tak, ale tylko jako punkt stanowiskowy',
          isCorrect: true
        },
        {
          answer: 'c) Tak, jeśli tylko przyspieszy to wydobycie osoby poszkodowanej',
          isCorrect: false
        }
      ]
    },
    {
      question: '849. Do wyposażenia JRG w zakresie ratownictwa wysokościowego (poziom podstawowy), zgodnie z zasadami organizacji ratownictwa wysokościowego w KSRG (lipiec 2013 r.), należy:',
      answers: [
        {
          answer: 'a) linka strażacka ratownicza ZL-20',
          isCorrect: false
        },
        {
          answer: 'b) lina alpinistyczna statyczna 50m',
          isCorrect: true
        },
        {
          answer: 'c) linka gospodarcza 20 metrów',
          isCorrect: false
        }
      ]
    },
    {
      question: '850. Czy podczas używania trójnogu ratowniczego i stosowania techniki dwóch lin, druga lina powinna:',
      answers: [
        {
          answer: 'a) być wpięta w stanowisko niezależne od trójnogu',
          isCorrect: true
        },
        {
          answer: 'b) być wpięta do trójnogu za pomocą dwóch pętli z taśmy',
          isCorrect: false
        },
        {
          answer: 'c) być wpięta do trójnogu za pomocą dwóch przeciwstawnie skierowanych karabinków',
          isCorrect: false
        }
      ]
    },
    {
      question: '851. W zakresie podstawowym ratownictwa wysokościowego czynności ratownicze obejmują w szczególności dotarcie ratownika w dół za pomocą:',
      answers: [
        {
          answer: 'a) opuszczenia strażaka w technice dwóch lin',
          isCorrect: true
        },
        {
          answer: 'b) zjazdu z wykorzystaniem techniki jednej liny i przyrządów zjazdowych',
          isCorrect: false
        },
        {
          answer: 'c) liny opuszczanej rękami strażaków z zastępu ratowniczo - gaśniczego',
          isCorrect: false
        }
      ]
    },
    {
      question: '852. W jakim czasie powinien nastąpić wyjazd JRG do zdarzenia w zakresie ratownictwa wysokościowego:',
      answers: [
        {
          answer: 'a) natychmiast',
          isCorrect: true
        },
        {
          answer: 'b) do 15 min od zgłoszenia',
          isCorrect: false
        },
        {
          answer: 'c) gdy skompletujemy specjalistyczną grupę ratownictwa wysokościowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '853. Jaką długość powinna posiadać końcówka liny wychodząca z ósemki:',
      answers: [
        {
          answer: 'a) 15cm',
          isCorrect: false
        },
        {
          answer: 'b) 10 średnic liny',
          isCorrect: true
        },
        {
          answer: 'c) Tyle, aby można było zawiązać zabezpieczanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '854. Technika asekuracji górnej polega na:',
      answers: [
        {
          answer: 'a) asekuracji przyrządem zaciskowym od góry',
          isCorrect: false
        },
        {
          answer: 'b) wpięciu odpowiedniego przyrządu w linę poręczową, podczas poruszania się po konstrukcji lub wspinaczki',
          isCorrect: false
        },
        {
          answer: 'c) asekuracji ratownika liną prowadzoną do niego od góry',
          isCorrect: true
        }
      ]
    },
    {
      question: '855. Podstawowym parametrem różniącym przyrządy do asekuracji dynamicznej jest:',
      answers: [
        {
          answer: 'a) siła hamowania',
          isCorrect: false
        },
        {
          answer: 'b) cena',
          isCorrect: true
        },
        {
          answer: 'c) waga',
          isCorrect: false
        }
      ]
    },
    {
      question: '856. Która wartość współczynnika odpadnięcia jest najkorzystniejsza:',
      answers: [
        {
          answer: 'a) WO = 0,5',
          isCorrect: false
        },
        {
          answer: 'b) WO = 1',
          isCorrect: false
        },
        {
          answer: 'c) WO = 0,2',
          isCorrect: true
        }
      ]
    },
    {
      question: '857. Jak często Dowódca SGRW przeprowadza dla jej członków test sprawnościowy oraz egzamin teoretyczny i praktyczny z zakresu technik ratownictwa wysokościowego:',
      answers: [
        {
          answer: 'a) raz w roku',
          isCorrect: true
        },
        {
          answer: 'b) dwa razy w roku',
          isCorrect: false
        },
        {
          answer: 'c) raz na dwa lata',
          isCorrect: false
        }
      ]
    },
    {
      question: '858. Jaką podstawową techniką jest technika DED (z wykorzystaniem dwóch przyrządów):',
      answers: [
        {
          answer: 'a) techniką zjazdu',
          isCorrect: false
        },
        {
          answer: 'b) techniką wychodzenia',
          isCorrect: true
        },
        {
          answer: 'c) techniką ratowniczą',
          isCorrect: false
        }
      ]
    },
    {
      question: '859. Jaki tytuł ratownika wysokościowego uprawnia do samodzielnego wykonywania zadań z zakresu ratownictwa wysokościowego, pełnienia funkcji operatora w śmigłowcu ratowniczym oraz dowodzenia akcjami ratownictwa wysokościowego w pełnym zakresie (także z udziałem śmigłowca)',
      answers: [
        {
          answer: 'a) tytuł młodszego ratownika wysokościowego',
          isCorrect: false
        },
        {
          answer: 'b) tytuł ratownika wysokościowego',
          isCorrect: false
        },
        {
          answer: 'c) tytuł starszego ratownika wysokościowego',
          isCorrect: true
        }
      ]
    },
    {
      question: '860. Ile i jakie tytuły instruktorskie obecnie występują w ratownictwie wysokościowym:',
      answers: [
        {
          answer: 'a) jeden – instruktor ratownictwa wysokościowego',
          isCorrect: false
        },
        {
          answer: 'b) dwa – instruktor ratownictwa wysokościowego, starszy instruktor ratownictwa wysokościowego',
          isCorrect: true
        },
        {
          answer: 'c) trzy – młodszy instruktor ratownictwa wysokościowego, instruktor ratownictwa wysokościowego, starszy instruktor ratownictwa wysokościowego',
          isCorrect: false
        }
      ]
    },
    {
      question: '861. Jakie wymiary powinna mieć powierzchnia robocza dla śmigłowca MI-8 w terenie:',
      answers: [
        {
          answer: 'a) 10 m x 5 m',
          isCorrect: false
        },
        {
          answer: 'b) 5 m x 5 m',
          isCorrect: false
        },
        {
          answer: 'c) 50 m x 50 m',
          isCorrect: true
        }
      ]
    },
    {
      question: '862. Jaki węzeł stosuje się do asekuracji podczas zjazdu na linie:',
      answers: [
        {
          answer: 'a) flagowy',
          isCorrect: false
        },
        {
          answer: 'b) prusik',
          isCorrect: true
        },
        {
          answer: 'c) ósemka podwójna',
          isCorrect: false
        }
      ]
    },
    {
      question: '863. Kiedy dopuszcza się budowę stanowisk na bazie jednego punktu:',
      answers: [
        {
          answer: 'a) w każdym przypadku',
          isCorrect: false
        },
        {
          answer: 'b) w przypadku bezwzględnie pewnego punktu mocowania',
          isCorrect: true
        },
        {
          answer: 'c) w czasie asekuracji',
          isCorrect: false
        }
      ]
    },
    {
      question: '864. Czynności ratownicze wykonywane z pokładu śmigłowca muszą być uzgadniane:',
      answers: [
        {
          answer: 'a) nie muszą być uzgadniane',
          isCorrect: false
        },
        {
          answer: 'b) muszą być uzgadniane z dowódcą statku powietrznego',
          isCorrect: true
        },
        {
          answer: 'c) muszą być uzgadniane z innym ratownikiem',
          isCorrect: false
        }
      ]
    },
    {
      question: '865. Celem ratownictwa wysokościowego jest:',
      answers: [
        {
          answer: 'a) niesienie pomocy osobom poszkodowanym i zagrożonym, znajdującym się poza zasięgiem i możliwościami użycia standardowego sprzętu i technik wykorzystywanych w Państwowej Straży Pożarnej oraz w innych służbach i podmiotach ratowniczych',
          isCorrect: true
        },
        {
          answer: 'b) wspomaganie działań związanych z gaszeniem pożarów, ratownictwem medycznym, technicznym wodnym, chemicznym i ekologicznym w zakresie niezbędnym do udzielenia pomocy osobom poszkodowanym i zagrożonym bądź likwidacji innego miejscowego zagrożenia',
          isCorrect: false
        },
        {
          answer: 'c) ratowanie zagrożonego mienia na wysokościach',
          isCorrect: false
        }
      ]
    },
    {
      question: '866. Działania w zakresie ratownictwa wysokościowego w krajowym systemie ratowniczo –gaśniczym prowadzi specjalistyczna grupa ratownictwa wysokościowego (bez użycia śmigłowca) w składzie minimum:',
      answers: [
        {
          answer: 'a) pięciu ratowników wysokościowych',
          isCorrect: false
        },
        {
          answer: 'b) trzech ratowników wysokościowych',
          isCorrect: false
        },
        {
          answer: 'c) dwóch ratowników wysokościowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '867. Zajęcia z doskonalenia zawodowego SGRW może prowadzić strażak lub inny ratownik z tytułem:',
      answers: [
        {
          answer: 'a) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego od minimum 2 lat',
          isCorrect: true
        },
        {
          answer: 'b) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego',
          isCorrect: false
        },
        {
          answer: 'c) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego od minimum 1 lat',
          isCorrect: false
        }
      ]
    },
    {
      question: '868. Działaniami ratowniczymi SGRW może kierować ratownik z tytułem:',
      answers: [
        {
          answer: 'a) 1) starszego instruktora ratownictwa wysokościowego 2) instruktora ratownictwa wysokościowego 3) starszego ratownika wysokościowego 4) ratownika wysokościowego 5) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego',
          isCorrect: false
        },
        {
          answer: 'b) 1) starszego instruktora ratownictwa wysokościowego 2) instruktora ratownictwa wysokościowego 3) starszego ratownika wysokościowego 4) ratownika wysokościowego 5) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego od minimum 1 lat',
          isCorrect: false
        },
        {
          answer: 'c) 1) starszego instruktora ratownictwa wysokościowego 2) instruktora ratownictwa wysokościowego 3) starszego ratownika wysokościowego 4) ratownika wysokościowego 5) młodszego ratownika wysokościowego, posiadający kwalifikacje uprawniające do prowadzenia działań ratowniczych i uprawnienia młodszego ratownika wysokościowego od minimum 2 lat',
          isCorrect: true
        }
      ]
    },
    {
      question: '869. W stanowisku kąt zawarty pomiędzy połączonymi skrajnymi punktami nie powinien być:',
      answers: [
        {
          answer: 'a) mniejszy niż 90°',
          isCorrect: false
        },
        {
          answer: 'b) większy niż 90°',
          isCorrect: true
        },
        {
          answer: 'c) większy niż 45°',
          isCorrect: false
        }
      ]
    },
    {
      question: '870. Na bazie stanowiska ratowniczego lub asekuracyjnego dopuszcza się stosowanie techniki ratowniczej jednej liny:',
      answers: [
        {
          answer: 'a) jeżeli wyeliminowane są czynniki mogące spowodować zagrożenie uszkodzenia liny. Jeżeli nie są spełnione te warunki, należy stosować technikę ratowniczą dwóch lin',
          isCorrect: false
        },
        {
          answer: 'b) jeżeli wyeliminowane są czynniki mogące spowodować zagrożenie uszkodzenia liny i kiedy nie istnieje możliwość przeciążenia układu. Jeżeli nie jest spełniony ten warunek, należy stosować technikę ratowniczą dwóch lin',
          isCorrect: true
        },
        {
          answer: 'c) kiedy nie istnieje możliwość przeciążenia układu. Jeżeli nie jest spełniony ten warunek, należy stosować technikę ratowniczą dwóch lin',
          isCorrect: false
        }
      ]
    },
    {
      question: '871. W przypadku stosowania techniki dwóch lin:',
      answers: [
        {
          answer: 'a) każda z lin powinna być wpięta w odrębne stanowisko',
          isCorrect: false
        },
        {
          answer: 'b) każda z lin powinna być wpięta w odrębne stanowisko. Od zasady tej można odstąpić tylko wówczas, gdy nie ma możliwości stworzenia drugiego odpowiedniego stanowiska',
          isCorrect: true
        },
        {
          answer: 'c) każda z lin może być wpięta w odrębne stanowisko. Od zasady tej można odstąpić tylko wówczas gdy mamy bezwzględnie jeden pewny punkt mocowania',
          isCorrect: false
        }
      ]
    },
    {
      question: '872. Autoasekuracja przyrządem zaciskowym – polega na wpięciu odpowiedniego przyrządu w linę poręczową podczas poruszania się np. po konstrukcji. W takim przypadku lina poręczowa jest wykorzystywana:',
      answers: [
        {
          answer: 'a) biernie',
          isCorrect: true
        },
        {
          answer: 'b) biernie lub czynnie',
          isCorrect: false
        },
        {
          answer: 'c) czynnie',
          isCorrect: false
        }
      ]
    },
    {
      question: '873. Po dotarciu na miejsce zdarzenia zadaniem SGRW jest przede wszystkim:',
      answers: [
        {
          answer: 'a) zabezpieczenie terenu akcji, rozpoznanie zagrożeń, jak najszybsze dotarcie do osób potrzebujących pomocy, udzielenie kwalifikowanej pierwszej pomocy, przygotowanie do ewakuacji i ewakuacja ze strefy zagrożonej',
          isCorrect: true
        },
        {
          answer: 'b) rozpoznanie zagrożeń, jak najszybsze dotarcie do osób potrzebujących pomocy, ich zabezpieczenie, udzielenie kwalifikowanej pierwszej pomocy, przygotowanie do ewakuacji i ewakuacja ze strefy zagrożonej, lokalizacja, likwidacja lub ograniczenie innych zagrożeń',
          isCorrect: false
        },
        {
          answer: 'c) rozpoznanie zagrożeń, jak najszybsze dotarcie do osób potrzebujących pomocy, ich zabezpieczenie, przygotowanie do ewakuacji i ewakuacja ze strefy zagrożonej, zabezpieczenie terenu i przekazanie miejsca zdarzenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '874. Jakiej liny używamy do wspinaczki z dolną asekuracją:',
      answers: [
        {
          answer: 'a) statycznej',
          isCorrect: false
        },
        {
          answer: 'b) półstatycznej',
          isCorrect: false
        },
        {
          answer: 'c) dynamicznej',
          isCorrect: true
        }
      ]
    },
    {
      question: '875. Podchodzenia do śmigłowca od strony wznoszącego się zbocza w czasie pracy wirnika:',
      answers: [
        {
          answer: 'a) dokonujemy w przemysłowym hełmie ochronnym\t',
          isCorrect: false
        },
        {
          answer: 'b) dokonujemy w kasku alpinistycznym',
          isCorrect: false
        },
        {
          answer: 'c) zabrania się',
          isCorrect: true
        }
      ]
    },
    {
      question: '876. Autoasekuracja na trawersie jeżeli ratownik wykorzystuje linę biernie wymaga:',
      answers: [
        {
          answer: 'a) zachowania zasady dwóch niezależnych punktów wpięcia\t',
          isCorrect: false
        },
        {
          answer: 'b) co najmniej jednego punktu wpięcia',
          isCorrect: true
        },
        {
          answer: 'c) założenia przyrządu autoasekuracyjnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '877. Dopuszcza się zjazd po linie z wykorzystaniem tylko przyrządu zjazdowego bez autoasekuracji:',
      answers: [
        {
          answer: 'a) podczas stosowania techniki jednej liny',
          isCorrect: false
        },
        {
          answer: 'b) podczas krótkiego zjazdu',
          isCorrect: false
        },
        {
          answer: 'c) podczas użycia technik alpinistycznych we współdziałaniu ze śmigłowcem',
          isCorrect: true
        }
      ]
    },
    {
      question: '878. W przypadku budowy stanowiska asekuracyjnego typu ZG (technika poręczowania jaskini):',
      answers: [
        {
          answer: 'a) punkt główny znajduje się na tej samej wysokości co punkt zabezpieczający',
          isCorrect: false
        },
        {
          answer: 'b) punkt główny znajduje się niżej niż punkt zabezpieczający',
          isCorrect: true
        },
        {
          answer: 'c) punkt główny znajduje się wyżej niż punkt zabezpieczający',
          isCorrect: false
        }
      ]
    },
    {
      question: '879. Sprzęt wchodzący w skład sprzętu ratowniczego szkoleniowo-treningowego i wyposażenia indywidualnego powinien posiadać wymagane i odpowiednie certyfikaty:',
      answers: [
        {
          answer: 'a) CE i spełniać normy PN i EN lub UIAA',
          isCorrect: true
        },
        {
          answer: 'b) CNBOP',
          isCorrect: false
        },
        {
          answer: 'c) PZA',
          isCorrect: false
        }
      ]
    },
    {
      question: '880. Z jakiej liny wykonasz swoją lonżę:',
      answers: [
        {
          answer: 'a) statyczna\t',
          isCorrect: false
        },
        {
          answer: 'b) dynamiczna',
          isCorrect: true
        },
        {
          answer: 'c) półstatyczna',
          isCorrect: false
        }
      ]
    },
    {
      question: '881. Wskaż węzły mocujące:',
      answers: [
        {
          answer: 'a) ósemka, skrajny tatrzański, motyl',
          isCorrect: true
        },
        {
          answer: 'b) półwyblinka, prusik, Bachmana',
          isCorrect: false
        },
        {
          answer: 'c) podwójny, zderzakowy, ósemka powtarzalna, taśmowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '882. Przy budowie stanowisk ratowniczych obowiązuje zasada:',
      answers: [
        {
          answer: 'a) dwóch niezależnych punktów',
          isCorrect: false
        },
        {
          answer: 'b) trzech niezależnych punktów',
          isCorrect: false
        },
        {
          answer: 'c) dopuszcza się budowę stanowiska na bazie jednego bezwzględnie pewnego punktu mocowania – sztucznego lub naturalnego poprzez: zastosowanie co najmniej dwóch pętli stanowiskowych, bezpośrednie dowiązanie liny do tego punktu i jej odpowiednie zabezpieczenie lub na bazie specjalnie tworzonego punktu o cechach stanowiska (np: trójnóg ratowniczy)',
          isCorrect: true
        }
      ]
    },
    {
      question: '883. Autoasekuracja na trawersie, jeżeli ratownik obciąża linę wymaga:',
      answers: [
        {
          answer: 'a) zachowania zasady dwóch niezależnych punktów wpięcia',
          isCorrect: true
        },
        {
          answer: 'b) co najmniej jednego punktu wpięcia',
          isCorrect: false
        },
        {
          answer: 'c) założenia przyrządu autoasekuracyjnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '884. Dopuszcza się zjazd po linie z wykorzystaniem tylko przyrządu zjazdowego bez autoasekuracji:',
      answers: [
        {
          answer: 'a) podczas stosowania techniki jednej liny',
          isCorrect: false
        },
        {
          answer: 'b) podczas krótkiego zjazdu',
          isCorrect: false
        },
        {
          answer: 'c) podczas prowadzenia działań ratowniczych, jeżeli zaistniały szczególne warunki i użycie autoasekuracji mogłoby powodować poważne utrudnienia w działaniach lub uniemożliwić ich przeprowadzenie',
          isCorrect: true
        }
      ]
    },
    {
      question: '885. W technice DED używamy:',
      answers: [
        {
          answer: 'a) dwóch przyrządów zaciskowych (piersiowy i ręczny)',
          isCorrect: true
        },
        {
          answer: 'b) dwóch przyrządów zaciskowych (piersiowy i piersiowy)',
          isCorrect: false
        },
        {
          answer: 'c) dwóch przyrządów zaciskowych (nożny i ręczny)',
          isCorrect: false
        }
      ]
    },
    {
      question: '886. Współczynnik odpadnięcia to iloraz:',
      answers: [
        {
          answer: 'a) długość lotu do długości pracującej liny',
          isCorrect: true
        },
        {
          answer: 'b) długości lonży do długości lotu',
          isCorrect: false
        },
        {
          answer: 'c) długości toru lotu do długości liny do przelotu',
          isCorrect: false
        }
      ]
    },
    {
      question: '887. Czy stanowisko ratownicze może pełnić funkcję stanowiska asekuracyjnego:',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: false
        },
        {
          answer: 'b) tak',
          isCorrect: true
        },
        {
          answer: 'c) tylko przy zastosowaniu trzech lin wpiętych w bezwzględnie pewny punkt',
          isCorrect: false
        }
      ]
    },
    {
      question: '888. Czy od strony ogona śmigłowca można podchodzić i wsiadać do statku powietrznego:',
      answers: [
        {
          answer: 'a) tylko z noszami i poszkodowanym',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        },
        {
          answer: 'c) tak',
          isCorrect: false
        }
      ]
    },
    {
      question: '889. W przypadku stwierdzenia uszkodzenia sprzętu należy:',
      answers: [
        {
          answer: 'a) wycofać sprzęt z użycia',
          isCorrect: true
        },
        {
          answer: 'b) dokonać naprawy w własnym zakresie',
          isCorrect: false
        },
        {
          answer: 'c) używać tylko do ćwiczeń',
          isCorrect: false
        }
      ]
    },
    {
      question: '890. Technika dolnej asekuracji polega na:',
      answers: [
        {
          answer: 'a) rozpoczęciu wchodzenia z przyrządami od dołu',
          isCorrect: false
        },
        {
          answer: 'b) dwóch ratowników asekuruje jednego wchodzącego',
          isCorrect: false
        },
        {
          answer: 'c) asekurowanie ratownika liną prowadzącą do niego z dołu',
          isCorrect: true
        }
      ]
    },
    {
      question: '891. Kiedy można zastosować technikę jednej liny:',
      answers: [
        {
          answer: 'a) podczas wyciągania ratownika i poszkodowanego w noszach w przypadku braku możliwości przeciążenia układu lub uszkodzenia liny',
          isCorrect: false
        },
        {
          answer: 'b) podczas opuszczania ratownika i poszkodowanego w noszach w przypadku braku możliwości przeciążenia układu lub uszkodzenia liny',
          isCorrect: false
        },
        {
          answer: 'c) odpowiedz a i b jest prawidłowa',
          isCorrect: true
        }
      ]
    },
    {
      question: '892. Przy organizowaniu lądowiska, należy pamiętać o tym, aby:',
      answers: [
        {
          answer: 'a) kierunek wiatru był oznaczony przez chorągiewkę ognisko (dym) lub postawę ratownika',
          isCorrect: true
        },
        {
          answer: 'b) oznaczenie kierunku wiatru nie jest wymagane – pilot sam decyduje o kierunku podejścia',
          isCorrect: false
        },
        {
          answer: 'c) oznaczamy kierunek wiatru przez chorągiewkę lub ognisko ale umieszczamy w środku lądowiska',
          isCorrect: false
        }
      ]
    },
    {
      question: '893. Podchodzenie do śmigłowca jest:',
      answers: [
        {
          answer: 'a) dozwolone z każdej strony',
          isCorrect: false
        },
        {
          answer: 'b) dozwolone tylko z przodu maszyny',
          isCorrect: false
        },
        {
          answer: 'c) dozwolone od strony strefy bezpiecznej',
          isCorrect: true
        }
      ]
    },
    {
      question: '894. Wejście na pokład śmigłowca:',
      answers: [
        {
          answer: 'a) jest możliwe tylko na wyraźny znak i polecenie głosowe pilota',
          isCorrect: false
        },
        {
          answer: 'b) jest możliwe po otrzymaniu komendy od operatora',
          isCorrect: true
        },
        {
          answer: 'c) po przyziemieniu (zawisie) maszyny nad lądowiskiem',
          isCorrect: false
        }
      ]
    },
    {
      question: '895. Ratownicy wysokościowi desantują się ze śmigłowca za pomocą:',
      answers: [
        {
          answer: 'a) tylko własnej liny o długości do 40 m',
          isCorrect: false
        },
        {
          answer: 'b) desant jest zabroniony, gdy silniki maszyny pracują. Ratownicy desantują się z maszyny po przyziemieniu i po wyłączeniu silników',
          isCorrect: false
        },
        {
          answer: 'c) w zależności od sytuacji – na linie własnej, linie wspólnej, przez zeskok',
          isCorrect: true
        }
      ]
    },
    {
      question: '896. Z kim należy uzgadniać rozpoczęcie wykonywania czynności ratowniczych z pokładu śmigłowca:',
      answers: [
        {
          answer: 'a) z ratownikiem pokładowym',
          isCorrect: false
        },
        {
          answer: 'b) z dowódcą statku powietrznego',
          isCorrect: true
        },
        {
          answer: 'c) z dowódcą akcji',
          isCorrect: false
        }
      ]
    },
    {
      question: '897. Jak powinien w zależności od kierunku wiatru lądować śmigłowiec:',
      answers: [
        {
          answer: 'a) pod wiatr',
          isCorrect: true
        },
        {
          answer: 'b) z wiatrem',
          isCorrect: false
        },
        {
          answer: 'c) nie ma to znaczenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '898. Do łączenia lin stosuje następujące węzły:',
      answers: [
        {
          answer: 'a) kluczka na rozrywanie, ósemka, taśmowy',
          isCorrect: false
        },
        {
          answer: 'b) skrajny tatrzański, wyblinka, ósemka równoległa',
          isCorrect: false
        },
        {
          answer: 'c) ósemka równoległa, podwójny zderzakowy',
          isCorrect: true
        }
      ]
    },
    {
      question: '899. Parametr „a” w oznaczeniu karabinka alpinistycznego oznacza:',
      answers: [
        {
          answer: 'a) wytrzymałość karabinka przy obciążeniu 23 kN',
          isCorrect: false
        },
        {
          answer: 'b) wytrzymałość karabinka w osi podłużnej przy zamkniętym zamku',
          isCorrect: true
        },
        {
          answer: 'c) żadna z odpowiedzi nie jest prawidłowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '900. Poruszanie się po pionowych i poziomych linach w obszarze eksponowanym wymaga niezależnych punktów wpięcia:',
      answers: [
        {
          answer: 'a) jednego',
          isCorrect: false
        },
        {
          answer: 'b) dwóch',
          isCorrect: true
        },
        {
          answer: 'c) trzech',
          isCorrect: false
        }
      ]
    },
    {
      question: '901. Dopuszcza się zjazd po linie z wykorzystaniem przyrządu zjazdowego bez asekuracji:',
      answers: [
        {
          answer: 'a) podczas użycia technik alpinistycznych we współdziałaniu ze śmigłowcem',
          isCorrect: true
        },
        {
          answer: 'b) podczas zjazdu z niewielkiej wysokości',
          isCorrect: false
        },
        {
          answer: 'c) podczas zjazdu na ósemce Fischera',
          isCorrect: false
        }
      ]
    },
    {
      question: '902. Stosowanie techniki jednej liny na bazie stanowiska ratowniczego lub asekuracyjnego dopuszcza się:',
      answers: [
        {
          answer: 'a) zawsze',
          isCorrect: false
        },
        {
          answer: 'b) gdy brak czynników, mogących uszkodzić linę',
          isCorrect: false
        },
        {
          answer: 'c) gdy brak czynników, mogących uszkodzić linę i nie istnieje możliwość przeciążenia układu',
          isCorrect: true
        }
      ]
    },
    {
      question: '903. Pokonywanie podczas zjazdu i wychodzenia po linie pośrednich stanowisk i punktów mocowania wymaga przestrzegania zasady dwóch niezależnych punktów wpięcia:',
      answers: [
        {
          answer: 'a) zawsze',
          isCorrect: true
        },
        {
          answer: 'b) nigdy',
          isCorrect: false
        },
        {
          answer: 'c) powyżej wysokości 5 m',
          isCorrect: false
        }
      ]
    },
    {
      question: '904. Wytrzymałość na obciążenie lin alpinistycznych podaje się w:',
      answers: [
        {
          answer: 'a) kg',
          isCorrect: false
        },
        {
          answer: 'b) kN',
          isCorrect: true
        },
        {
          answer: 'c) tonach',
          isCorrect: false
        }
      ]
    },
    {
      question: '905. Stoper francuski (węzeł Bachmana) to:',
      answers: [
        {
          answer: 'a) węzeł zaciskowy',
          isCorrect: false
        },
        {
          answer: 'b) węzeł służący do łączenia lin',
          isCorrect: false
        },
        {
          answer: 'c) węzeł specjalnego przeznaczenia',
          isCorrect: true
        }
      ]
    },
    {
      question: '906. Węzeł służący do mocowania lin to:',
      answers: [
        {
          answer: 'a) zderzakowy podwójny',
          isCorrect: false
        },
        {
          answer: 'b) skrajny tatrzański',
          isCorrect: true
        },
        {
          answer: 'c) półwyblinka',
          isCorrect: false
        }
      ]
    },
    {
      question: '907. W przypadku naciągu tyrolek naciąg wykonują:',
      answers: [
        {
          answer: 'a) 3 osoby',
          isCorrect: false
        },
        {
          answer: 'b) 2 osoby',
          isCorrect: false
        },
        {
          answer: 'c) w zależności od przełożenia 1, 2 lub 3 osoby',
          isCorrect: true
        }
      ]
    },
    {
      question: '908. W czasie zjazdu przedłużanie liny wykonujemy z użyciem węzła:',
      answers: [
        {
          answer: 'a) podwójny zderzakowy',
          isCorrect: false
        },
        {
          answer: 'b) ósemka powrotna',
          isCorrect: false
        },
        {
          answer: 'c) ósemka potrójna',
          isCorrect: true
        }
      ]
    },
    {
      question: '909. Ewentualne uszkodzenie liny zabezpieczamy podczas zjazdu z wykorzystaniem:',
      answers: [
        {
          answer: 'a) motyl z kluczką',
          isCorrect: true
        },
        {
          answer: 'b) ósemka',
          isCorrect: false
        },
        {
          answer: 'c) linę należy rozciąć i połączyć węzłem do wiązania lin',
          isCorrect: false
        }
      ]
    },
    {
      question: '910. Aby zminimalizować uszkodzenia oplotu liny w czasie naciągu tyrolek należy:',
      answers: [
        {
          answer: 'a) do naciągu używać shunta',
          isCorrect: false
        },
        {
          answer: 'b) do naciągu używać crolla',
          isCorrect: false
        },
        {
          answer: 'c) do naciągu używać dwóch połączonych przyrządów zaciskowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '911. Jakie liny stosujemy do akcji ratownictwa wysokościowego:',
      answers: [
        {
          answer: 'a) typu A',
          isCorrect: true
        },
        {
          answer: 'b) typu B',
          isCorrect: false
        },
        {
          answer: 'c) typu A i B',
          isCorrect: false
        }
      ]
    },
    {
      question: '912. Czy do prowadzenia działań z użyciem wciągarki Evak zawsze wymagana jest dodatkowa lina asekuracyjna?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie',
          isCorrect: false
        },
        {
          answer: 'c) tak, jeżeli jest zagrożona uszkodzeniem lub przeciążeniem lina trakcyjna',
          isCorrect: false
        }
      ]
    },
    {
      question: '913. Dwa węzły na końcu liny oznaczają:',
      answers: [
        {
          answer: 'a) linę asekuracyjną',
          isCorrect: false
        },
        {
          answer: 'b) linę trakcyjną',
          isCorrect: true
        },
        {
          answer: 'c) linę poręczową',
          isCorrect: false
        }
      ]
    },
    {
      question: '914. Użycie bloczka P50 podczas działań ratowniczych z wykorzystaniem techniki wielokrążka podstawowego, pozwala praktycznie zredukować siłę potrzebną do wyciągnięcia ciężaru o około:',
      answers: [
        {
          answer: 'a) 30 %',
          isCorrect: false
        },
        {
          answer: 'b) 40 %',
          isCorrect: false
        },
        {
          answer: 'c) 50 %',
          isCorrect: true
        }
      ]
    },
    {
      question: '915. Jeżeli kąt pomiędzy dwoma taśmami stanowiskowymi wpiętymi w stanowiska wynosi 60 stopni to obciążenie na każdy z punktów wynosić będzie:',
      answers: [
        {
          answer: 'a) 71 %',
          isCorrect: false
        },
        {
          answer: 'b) 58 %',
          isCorrect: true
        },
        {
          answer: 'c) 100 %',
          isCorrect: false
        }
      ]
    },
    {
      question: '916. Liny alpinistyczne ze względu na przeznaczenia dzielimy na:',
      answers: [
        {
          answer: 'a) dynamiczne, statyczne',
          isCorrect: true
        },
        {
          answer: 'b) dynamiczne, rozciągliwe',
          isCorrect: false
        },
        {
          answer: 'c) rojowe, statyczne',
          isCorrect: false
        }
      ]
    },
    {
      question: '917. Karabinki stosowane w ratownictwie wysokościowym wykonane są z:',
      answers: [
        {
          answer: 'a) stopów metali, aluminium',
          isCorrect: true
        },
        {
          answer: 'b) mosiądzu',
          isCorrect: false
        },
        {
          answer: 'c) tworzyw sztucznych',
          isCorrect: false
        }
      ]
    },
    {
      question: '918. Korespondencji radiowej nie przekażemy:',
      answers: [
        {
          answer: 'a) radiotelefonem przenośnym',
          isCorrect: false
        },
        {
          answer: 'b) terminalem statusów',
          isCorrect: true
        },
        {
          answer: 'c) radiotelefonem bazowym',
          isCorrect: false
        }
      ]
    },
    {
      question: '919. Poprawny sposób nawiązania łączności w sieciach radiowych PSP to użycie zwrotu:',
      answers: [
        {
          answer: 'a) WARSZAWA 998 ZGŁOŚ SIĘ DLA DF 303-21 ODBIÓR',
          isCorrect: false
        },
        {
          answer: 'b) WARSZAWA 998 TU DF 303-21 ODBIÓR',
          isCorrect: true
        },
        {
          answer: 'c) WARSZAWA 998 ZGŁOŚ SIĘ - TU DF 303-21 ODBIÓR',
          isCorrect: false
        }
      ]
    },
    {
      question: '920. Sieć radiowa Ratowniczo-Gaśnicza jest to:',
      answers: [
        {
          answer: 'a) sieć o zmiennym obszarze pracy, przeznaczona dla potrzeb łączności w miejscu prowadzenia akcji ratowniczo-gaśniczej. Komunikacja radiowa prowadzona jest na wydzielonym kanale radiowym – KRG',
          isCorrect: true
        },
        {
          answer: 'b) sieć o zmiennym obszarze pracy, przeznaczona dla potrzeb łączności w miejscu prowadzenia akcji ratowniczo-gaśniczej. Komunikacja radiowa prowadzona jest na kanale radiowym powiatowym',
          isCorrect: false
        },
        {
          answer: 'c) sieć o stałym obszarze pracy, przeznaczona dla potrzeb łączności w miejscu prowadzenia akcji ratowniczo-gaśniczej. Komunikacja radiowa prowadzona jest na wydzielonym kanale radiowym – KRG',
          isCorrect: false
        }
      ]
    },
    {
      question: '921. Czy numer operacyjny pojazdu pożarniczego jest w praktyce tożsamy z kryptonimem radiowym pojazdu?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: true
        },
        {
          answer: 'b) nie',
          isCorrect: false
        }
      ]
    },
    {
      question: '922. Jak brzmi nakaz alarmowego opuszczenia strefy zagrożenia:',
      answers: [
        {
          answer: 'a) GRANIT',
          isCorrect: false
        },
        {
          answer: 'b) OMEGA',
          isCorrect: false
        },
        {
          answer: 'c) GEJZER',
          isCorrect: true
        },
        {
          answer: 'd) RATUNEK',
          isCorrect: false
        }
      ]
    },
    {
      question: '923. Sieć radiowa jest to:',
      answers: [
        {
          answer: 'a) Zespół dwóch lub więcej stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        },
        {
          answer: 'b) Zespół trzech stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        },
        {
          answer: 'c) Zespół trzech lub więcej stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: true
        },
        {
          answer: 'd) Zespół dwóch stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '924. Kryptonim jest to:',
      answers: [
        {
          answer: 'a) Dowolne słowo logiczne w języku polskim używane podczas prowadzenia korespondencji radiowej w sieciach MSWiA',
          isCorrect: false
        },
        {
          answer: 'b) Umowny znak rozpoznawczy maskujący przynależność służbową korespondenta i stanowiący jego adres radiotelefoniczny',
          isCorrect: true
        },
        {
          answer: 'c) Określenie pełnionej funkcji korespondenta radiowego podczas prowadzonej łączności w sieci radiowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '925. Kierunek radiowy jest to:',
      answers: [
        {
          answer: 'a) Zespół trzech stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        },
        {
          answer: 'b) Zespół dwóch ściśle określonych stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: true
        },
        {
          answer: 'c) Zespół dwóch lub więcej stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        },
        {
          answer: 'd) Zespół trzech lub więcej stacji radiowych pracujących wg wspólnych danych radiowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '926. Dane radiowe jest to:',
      answers: [
        {
          answer: 'a) Wykaz częstotliwości poszczególnych stacji radiowych danej sieci radiowej MSWiA',
          isCorrect: false
        },
        {
          answer: 'b) Zestaw informacji dotyczących parametrów radiotelefonów pracujących w danej sieci radiowej (np. moc, czułość, dewiacja itp.)',
          isCorrect: false
        },
        {
          answer: 'c) Zestaw informacji określających: sieć, nazwę użytkownika, numer kanału radiowego, kryptonimy i sygnały alarmowe',
          isCorrect: true
        },
        {
          answer: 'd) Tabelaryczny wykaz wszystkich urządzeń radiowych pracujących w danej sieci radiowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '927. Siecią ruchomą o zmiennym obszarze pracy jest:',
      answers: [
        {
          answer: 'a) Sieć szkolna',
          isCorrect: false
        },
        {
          answer: 'b) Sieć alarmowa',
          isCorrect: false
        },
        {
          answer: 'c) Sieć ratowniczo-gaśnicza',
          isCorrect: true
        },
        {
          answer: 'd) Sieć wojewódzka',
          isCorrect: false
        }
      ]
    },
    {
      question: '928. Która z sieci nie jest siecią o stałym obszarze pracy:',
      answers: [
        {
          answer: 'a) Krajowa Sieć Współdziałania i Alarmowania- KSW',
          isCorrect: false
        },
        {
          answer: 'b) Sieć Wojewódzka – PW',
          isCorrect: false
        },
        {
          answer: 'c) Sieć Dowodzenia i Współdziałania – KDW',
          isCorrect: true
        },
        {
          answer: 'd) Sieć Powiatowa – PR',
          isCorrect: false
        }
      ]
    },
    {
      question: '929. Sieć powiatowa jest to sieć służąca do:',
      answers: [
        {
          answer: 'a) Organizacji łączności podczas dużych akcji ratowniczych na terenie powiatu do łączności w obrębie danego zastępu',
          isCorrect: false
        },
        {
          answer: 'b) Łączności pomiędzy SK KM/P, a stacjami pracującymi w tej sieci',
          isCorrect: true
        },
        {
          answer: 'c) Łączności pomiędzy SK KM/P, a SK KW któremu to SK KM/P podlega',
          isCorrect: false
        },
        {
          answer: 'd) Łączności alarmowej pomiędzy SK KM/P, a jednostkami podległymi',
          isCorrect: false
        }
      ]
    },
    {
      question: '930. Karat to kryptonim oznaczający:',
      answers: [
        {
          answer: 'a) Komendanta danego powiatu, na terenie którego prowadzona jest akcja',
          isCorrect: false
        },
        {
          answer: 'b) Kierującego działaniami ratowniczymi',
          isCorrect: true
        },
        {
          answer: 'c) Dowódcę zastępu przybyłego na miejsce akcji',
          isCorrect: false
        },
        {
          answer: 'd) Komendanta wojewódzkiego na miejscu akcji ratowniczo-gaśniczej',
          isCorrect: false
        }
      ]
    },
    {
      question: '931. Daria to kryptonim oznaczający:',
      answers: [
        {
          answer: 'a) Stanowisko ratownicze',
          isCorrect: false
        },
        {
          answer: 'b) Stanowisko przy zaworze nasady tłocznej',
          isCorrect: false
        },
        {
          answer: 'c) Stanowisko rozdzielacza',
          isCorrect: false
        },
        {
          answer: 'd) Dowódcę zastępu sekcji lub odcinka bojowego podczas działań',
          isCorrect: true
        }
      ]
    },
    {
      question: '932. Niagara to kryptonim oznaczający:',
      answers: [
        {
          answer: 'a) Stanowisko wodne',
          isCorrect: true
        },
        {
          answer: 'b) Stanowisko gaśnicze podczas działań w obronie',
          isCorrect: false
        },
        {
          answer: 'c) Stanowisko gaśnicze podczas pracy prądem rozproszonym',
          isCorrect: false
        },
        {
          answer: 'd) Stanowisko gaśnicze podczas działań w natarciu',
          isCorrect: false
        }
      ]
    },
    {
      question: '933. Ratunek to sygnał radiowy oznaczający:',
      answers: [
        {
          answer: 'a) Pogotowie Ratunkowe',
          isCorrect: false
        },
        {
          answer: 'b) Sygnał Alarmowy',
          isCorrect: true
        },
        {
          answer: 'c) Zastęp Sanitarny',
          isCorrect: false
        },
        {
          answer: 'd) Lekarza Dyżurnego',
          isCorrect: false
        }
      ]
    },
    {
      question: '934. Sygnał radiowy Gejzer oznacza:',
      answers: [
        {
          answer: 'a) Stanowisko wodne',
          isCorrect: false
        },
        {
          answer: 'b) Stanowisko z działkiem wodnym',
          isCorrect: false
        },
        {
          answer: 'c) Nakaz alarmowego opuszczenia strefy',
          isCorrect: true
        },
        {
          answer: 'd) Punkt czerpania wody',
          isCorrect: false
        }
      ]
    },
    {
      question: '935. Operacyjny Kierunek Radiowy służy do łączności w relacjach:',
      answers: [
        {
          answer: 'a) Karat/Sztab a stanowisko kierowania PSP',
          isCorrect: true
        },
        {
          answer: 'b) Daria a Karat',
          isCorrect: false
        },
        {
          answer: 'c) DOB a KDR',
          isCorrect: false
        },
        {
          answer: 'd) Stoper a Daria',
          isCorrect: false
        }
      ]
    },
    {
      question: '936. Kryptonim „Reduta” oznacza:',
      answers: [
        {
          answer: 'a) Odcinek bojowy działający w obronie',
          isCorrect: false
        },
        {
          answer: 'b) Odcinek bojowy działający w natarciu na front pożaru',
          isCorrect: false
        },
        {
          answer: 'c) Punkt przyjęcia sił i środków',
          isCorrect: true
        },
        {
          answer: 'd) Punk pomocy medycznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '937. Łączność przeznaczoną do porozumiewania się dowódców poszczególnych odcinków bojowych w celu skoordynowania działań należy zorganizować jako:',
      answers: [
        {
          answer: 'a) na kanale dowodzenia i współdziałania (KDW)',
          isCorrect: true
        },
        {
          answer: 'b) na kanale ogólnopolskim KSW)',
          isCorrect: false
        },
        {
          answer: 'c) łączność na kanale powiatowym (PR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '938. Okólnik to:',
      answers: [
        {
          answer: 'a) Sygnał o zagrożeniu skierowany do wszystkich znajdujących się w strefie zagrożenia',
          isCorrect: false
        },
        {
          answer: 'b) informacja przekazywana drogą radiową jednocześnie do wielu abonentów sieci radiowej',
          isCorrect: true
        },
        {
          answer: 'c) Rozkaz dowódcy przekazywany drogą radiową',
          isCorrect: false
        }
      ]
    },
    {
      question: '939. Udając się do działań poza obszar własnego powiatu – opuszczając teren własny:',
      answers: [
        {
          answer: 'a) Zgłaszamy ten fakt do własnego stanowiska kierowania na kanale powiatowym i do właściwego terenowo powiatowego stanowiska kierowania na jego kanale powiatowym',
          isCorrect: false
        },
        {
          answer: 'b) Jeśli nie ma innych ustaleń, nasłuch/korespondencję prowadzimy w sieci KSW. O przejściu na KSW informujemy własne PSK/MSK',
          isCorrect: true
        },
        {
          answer: 'c) Zgłaszamy ten fakt do własnego WSKR na kanale wojewódzkim oraz do WSKR sąsiedniego województwa na właściwym dla niego kanale wojewódzkim',
          isCorrect: false
        }
      ]
    },
    {
      question: '940. W przypadku utworzenia PPSiŚ przyjeżdżające do niego z innego powiatu/województwa jednostki zgłaszają się na:',
      answers: [
        {
          answer: 'a) KDW',
          isCorrect: false
        },
        {
          answer: 'b) KSW',
          isCorrect: true
        },
        {
          answer: 'c) KRG',
          isCorrect: false
        }
      ]
    },
    {
      question: '941. Udając się do działań ratowniczych podczas przejazdu przez inne województwa:',
      answers: [
        {
          answer: 'a) Pozostajemy na własnym kanale wojewódzkim, zmieniając go na kanał wojewódzki województwa docelowego po przekroczeniu jego granic i nawiązujemy na nim łączność z właściwym SK KW',
          isCorrect: false
        },
        {
          answer: 'b) Każdorazowo przejeżdżając granice województw zmieniamy kanał na właściwy kanał wojewódzki i nawiązujemy łączność z właściwym obszarowo SK KW',
          isCorrect: false
        },
        {
          answer: 'c) Utrzymujemy łączność na KSW nawiązując korespondencję radiową z SK KW informując o wjechaniu na teren województwa oraz opuszczeniu terenu województwa – w przypadku braku możliwości bezpośredniego kontaktu radiowego z SK KW prowadzimy korespondencję poprzez SK KP/KM',
          isCorrect: true
        }
      ]
    },
    {
      question: '942. Operacyjny Kierunek Radiowy / KO / to:',
      answers: [
        {
          answer: 'a) To sieć radiowa funkcjonująca stałe zapewniająca łączność pomiędzy stanowiskiem kierowania PSP a właściwym komendantem PSP',
          isCorrect: false
        },
        {
          answer: 'b) To sieć radiowa uruchamiana doraźnie podczas dużych akcji zapewniająca łączność pomiędzy właściwym komendantem PSP a Kierującym Działaniami Ratowniczymi',
          isCorrect: false
        },
        {
          answer: 'c) To kanał radiowy uruchamiany doraźnie podczas dużych akcji zapewniający łączność pomiędzy Stanowiskiem Kierowania PSP a Kierującym Działaniami Ratowniczymi/Sztabem',
          isCorrect: true
        }
      ]
    },
    {
      question: '943. Podstawowa zasada obowiązująca w sieciach radiowych to:',
      answers: [
        {
          answer: 'a) Maksimum czasu nadawania – maksimum treści',
          isCorrect: false
        },
        {
          answer: 'b) Minimum czasu nadawania – maksimum treści',
          isCorrect: true
        },
        {
          answer: 'c) Maksimum czasu nadawania – minimum treści',
          isCorrect: false
        }
      ]
    },
    {
      question: '944. Komunikat adresowany do wszystkich abonentów pracujących w danej sieci poprzedzony jest wywołaniem:',
      answers: [
        {
          answer: 'a) OMEGA',
          isCorrect: true
        },
        {
          answer: 'b) RATUNEK',
          isCorrect: false
        },
        {
          answer: 'c) GRANIT',
          isCorrect: false
        }
      ]
    },
    {
      question: '945. Zwrot „BEZ ODBIORU” stosuje się:',
      answers: [
        {
          answer: 'a) zawsze jako informację całkowitego zakończenia łączności w sieci radiowej',
          isCorrect: true
        },
        {
          answer: 'b) po zakończeniu prowadzenia działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) w celu wstrzymania korespondencji, żeby był czas na uzupełnienie karty manipulacyjnej',
          isCorrect: false
        }
      ]
    },
    {
      question: '947. Który kanał służy do prowadzenia korespondencji radiowej ze statkami powietrznymi biorącymi udział w akcji ratowniczej?',
      answers: [
        {
          answer: 'a) B 036W',
          isCorrect: false
        },
        {
          answer: 'b) jeden z ośmiu kanałów ratowniczo-gaśniczych',
          isCorrect: false
        },
        {
          answer: 'c) U 02',
          isCorrect: true
        },
        {
          answer: 'd) jeden z kanałów dowodzenia i współdziałania',
          isCorrect: false
        }
      ]
    },
    {
      question: '948. Po przyjeździe na miejsce zdarzenia łączność pomiędzy KDR a rotami realizowana powinna być na kanale:',
      answers: [
        {
          answer: 'a) KSW',
          isCorrect: false
        },
        {
          answer: 'b) KRG',
          isCorrect: true
        },
        {
          answer: 'c) Powiatowym',
          isCorrect: false
        }
      ]
    },
    {
      question: '949. Czy dyżurny stanowiska kierowania komendanta powiatowego/miejskiego PSP ma obowiązek nasłuchu i prowadzenia korespondencji na kanale ratowniczo-gaśniczym?',
      answers: [
        {
          answer: 'a) Tak',
          isCorrect: false
        },
        {
          answer: 'b) Nie',
          isCorrect: true
        }
      ]
    },
    {
      question: '950. Dysponentem kanałów ratowniczo-gaśniczych jest:',
      answers: [
        {
          answer: 'a) KCKR',
          isCorrect: false
        },
        {
          answer: 'b) WSKR',
          isCorrect: false
        },
        {
          answer: 'c) P/MSK',
          isCorrect: true
        }
      ]
    },
    {
      question: '951. Dysponentem operacyjnego kierunku radiowego jest:',
      answers: [
        {
          answer: 'a) KCKR',
          isCorrect: true
        },
        {
          answer: 'b) WSKR',
          isCorrect: false
        },
        {
          answer: 'c) P/MSK',
          isCorrect: false
        }
      ]
    },
    {
      question: '952. Kanałem łączności do współdziałania jednostek KSRG z Biurem Ochrony Rządu podczas zabezpieczania osób podlegających ochronie:',
      answers: [
        {
          answer: 'a) kanał Krajowej Sieci Współdziałania KSW 28',
          isCorrect: false
        },
        {
          answer: 'b) kanał MSW współdziałanie 112',
          isCorrect: true
        },
        {
          answer: 'c) ogólnopolski kanał ratowniczy służby zdrowia 999',
          isCorrect: false
        }
      ]
    },
    {
      question: '953. Kanałem podstawowym do łączności współdziałania jednostek KSRG ze śmigłowcami LPR podczas prowadzonych działań jest:',
      answers: [
        {
          answer: 'a) kanał Krajowej Sieci Współdziałania KSW 28',
          isCorrect: false
        },
        {
          answer: 'b) kanał MSW współdziałanie 112',
          isCorrect: false
        },
        {
          answer: 'c) ogólnopolski kanał ratowniczy służby zdrowia 999',
          isCorrect: false
        },
        {
          answer: 'd) kanał Krajowej Sieci Współdziałania ze statkami powietrznymi KSWL U02',
          isCorrect: true
        }
      ]
    },
    {
      question: '954. Kanałem rezerwowym do łączności współdziałania jednostek KSRG ze śmigłowcami LPR podczas prowadzonych działań jest:',
      answers: [
        {
          answer: 'a) kanał Krajowej Sieci Współdziałania KSW 28',
          isCorrect: false
        },
        {
          answer: 'b) kanał MSW współdziałanie 112',
          isCorrect: false
        },
        {
          answer: 'c) ogólnopolski kanał ratowniczy służby zdrowia 999',
          isCorrect: true
        },
        {
          answer: 'd) kanał Krajowej Sieci Współdziałania ze statkami powietrznymi KSWL U02',
          isCorrect: false
        }
      ]
    },
    {
      question: '955. Poprawne wywołanie abonenta radiowego w sieciach PSP to:',
      answers: [
        {
          answer: 'a) SF201-00 tu MIKOŁÓW998 ODBIÓR',
          isCorrect: true
        },
        {
          answer: 'b) SF201-00 tu MIKOŁÓW998 ZGŁOŚ SIĘ',
          isCorrect: false
        },
        {
          answer: 'c) SF201-00 ZGŁOŚ SIĘ DLA MIKOŁÓW998',
          isCorrect: false
        },
        {
          answer: 'd) SF201-00 DLA MIKOŁÓW998',
          isCorrect: false
        }
      ]
    },
    {
      question: '956. Kanał radiowy przeznaczony do organizacji łączności współdziałania w sieci radiowej współdziałania służb MSW oznaczony jest:',
      answers: [
        {
          answer: 'a) B040W',
          isCorrect: false
        },
        {
          answer: 'b) KRG1',
          isCorrect: false
        },
        {
          answer: 'c) B112',
          isCorrect: true
        },
        {
          answer: 'd) KDW1',
          isCorrect: false
        }
      ]
    },
    {
      question: '957. Według Zasad Organizacji Łączności, Alarmowania, Powiadamiania, Dysponowania oraz współdziałania na potrzeby działań ratowniczych na poziomie interwencyjnym łączność pomiędzy KDR a PSK odbywa się na kanale:',
      answers: [
        {
          answer: 'a) Ratowniczo Gaśniczym KRG za pomocą radiotelefonu przewoźnego',
          isCorrect: false
        },
        {
          answer: 'b) Kierunku operacyjnym K0 za pomocą radiotelefonu przewoźnego',
          isCorrect: false
        },
        {
          answer: 'c) Ratowniczo Gaśniczym KRG za pomocą radiotelefonu przewoźnego',
          isCorrect: false
        },
        {
          answer: 'd) Powiatowym za pomocą radiotelefonu przewoźnego',
          isCorrect: true
        }
      ]
    },
    {
      question: '958. Oznaczenie kanału symbolem BF171 dotyczy:',
      answers: [
        {
          answer: 'a) Uruchomienia kanału radiowego dowodzenia i współdziałania z statkami powietrznymi podczas prowadzonych działań',
          isCorrect: false
        },
        {
          answer: 'b) Komunikacji radiowej pomiędzy WSKR a wszystkimi PSKMSK w sieci PW za pomocą łącza sterującego',
          isCorrect: false
        },
        {
          answer: 'c) Radiowej sieci retransmisyjnej o zmiennym obszarze działania',
          isCorrect: true
        },
        {
          answer: 'd) Organizacji łączności na operacyjnym kierunku radiowym KO podczas prowadzonych działań przydzielonym przez WSKR na wniosek KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '959. Krajowa sieć współdziałania ze statkami powietrznymi to sieć oznaczona:',
      answers: [
        {
          answer: 'a) KSWL U02',
          isCorrect: true
        },
        {
          answer: 'b) RATOWNIK 4',
          isCorrect: false
        },
        {
          answer: 'c) PW SAMOLOT',
          isCorrect: false
        },
        {
          answer: 'd) KSW',
          isCorrect: false
        }
      ]
    },
    {
      question: '960. W przypadku utworzenia drugiego i trzeciego odcinka bojowego DOB z ratownikami prowadzi korespondencje:',
      answers: [
        {
          answer: 'a) Na przydzielonym kanale ratowniczo gaśniczym',
          isCorrect: true
        },
        {
          answer: 'b) Na kanale powiatowym do czasu gdy KDR otrzyma przydział kanałów KRG',
          isCorrect: false
        },
        {
          answer: 'c) Na kanale dowodzenia i współdziałania',
          isCorrect: false
        }
      ]
    },
    {
      question: '961. Na kanale wojewódzkim słysząc wywołanie GRANIT tu SF 220-97 odbiór, należy:',
      answers: [
        {
          answer: 'a) Zgłosić się niezwłocznie – tu (podać własny kryptonim) zgłaszam się dla GRANIT odbiór',
          isCorrect: false
        },
        {
          answer: 'b) Zgłosić się niezwłocznie - tu (podać własny kryptonim) zgłaszam się dla SF220-97 odbiór',
          isCorrect: true
        },
        {
          answer: 'c) Zgłosić się niezwłocznie - tu GRANIT zgłaszam się dla SF220-97 odbiór',
          isCorrect: false
        },
        {
          answer: 'd) Zgłosić się niezwłocznie - tu SF220-97 tu podać własny kryptonim zgłaszam odbiór',
          isCorrect: false
        }
      ]
    },
    {
      question: '962. Jak brzmi nakaz alarmowego opuszczenia strefy zagrożenia:',
      answers: [
        {
          answer: 'a) GRANIT',
          isCorrect: false
        },
        {
          answer: 'b) GEJZER',
          isCorrect: true
        },
        {
          answer: 'c) RATUNEK',
          isCorrect: false
        }
      ]
    },
    {
      question: '963. Uruchomienie operacyjnego kierunku radiowego wymaga zgody:',
      answers: [
        {
          answer: 'a) SK KP/KM PSP',
          isCorrect: false
        },
        {
          answer: 'b) SK KW PSP',
          isCorrect: false
        },
        {
          answer: 'c) SK KG PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '964. Kryptonim REDUTA oznacza:',
      answers: [
        {
          answer: 'a) Odcinek bojowy działający w natarciu na front pożaru',
          isCorrect: false
        },
        {
          answer: 'b) Punkt przyjęcia sił i środków',
          isCorrect: true
        },
        {
          answer: 'c) Punkt pomocy medycznej',
          isCorrect: false
        }
      ]
    },
    {
      question: '965. Kryptonim okólnikowy „OMEGA”:',
      answers: [
        {
          answer: 'a) służy wyłącznie do przekazania informacji o zagrożeniu',
          isCorrect: false
        },
        {
          answer: 'b) służy do równoczesnego przekazania informacji wszystkim korespondentom sieci radiowej',
          isCorrect: true
        },
        {
          answer: 'c) może być stosowany za zgodą SK KW PSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '966. Kodowana blokada szumów (CTCSS) na kanale powiatowym:',
      answers: [
        {
          answer: 'a) wpływa na poprawę komfortu pracy użytkowników sieci powiatowej',
          isCorrect: true
        },
        {
          answer: 'b) może być wyłączana przy braku zakłóceń',
          isCorrect: false
        },
        {
          answer: 'c) powinna być zmieniana minimum raz w roku',
          isCorrect: false
        }
      ]
    },
    {
      question: '967. Który z korespondentów usłyszy informacje przekazywane przez SK na kanale B021T?',
      answers: [
        {
          answer: 'a) wyłącznie korespondent pracujący na kanale B021T',
          isCorrect: false
        },
        {
          answer: 'b) korespondenci pracujący na kanałach B021T lub B021',
          isCorrect: true
        },
        {
          answer: 'c) wszyscy korespondenci pracujący na kanałach B021M B021T lub B021R',
          isCorrect: false
        }
      ]
    },
    {
      question: '968. KARAT oznacza:',
      answers: [
        {
          answer: 'a) Komendanta danego powiatu, na terenie którego prowadzone są działania ratownicze',
          isCorrect: false
        },
        {
          answer: 'b) Kierującego Działaniami Ratowniczymi',
          isCorrect: true
        },
        {
          answer: 'c) Dowódcę zastępu przybyłego na miejsce akcji',
          isCorrect: false
        }
      ]
    },
    {
      question: '969. Kanały ratowniczo-gaśnicze na terenie powiatu:',
      answers: [
        {
          answer: 'a) mogą być wykorzystywane tylko w przypadku działań prowadzonych przez więcej niż dwa zastępy',
          isCorrect: false
        },
        {
          answer: 'b) powinny być wykorzystywane zawsze w miejscu prowadzenia działań ratowniczo-gaśniczych',
          isCorrect: true
        },
        {
          answer: 'c) mogą być wykorzystywane wyłącznie za zgodą KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '970. Po przybyciu na miejsce działań dowódca do prowadzenia korespondencji na miejscu akcji:',
      answers: [
        {
          answer: 'a) używa kanału ratowniczo gaśniczego (KRG) ustalonego pomiędzy Komendantem Wojewódzkim PSP a Komendantem Powiatowym/ Miejskim PSP, a w przypadku zajętości tego kanału uzgadnia z SK KP/KM inny kanał ratowniczo gaśniczy (KRG)',
          isCorrect: true
        },
        {
          answer: 'b) uzgadnia z SK KP/KM kanał ratowniczo gaśniczy (KRG)',
          isCorrect: false
        },
        {
          answer: 'c) używa kanału powiatowego (PR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '971. Korzystanie z kanałów sieci dowodzenia i współdziałania (KDW):',
      answers: [
        {
          answer: 'a) jest możliwe za zgodą SK KW PSP',
          isCorrect: true
        },
        {
          answer: 'b) nie jest zalecane przy działaniach na terenie jednego powiatu',
          isCorrect: false
        },
        {
          answer: 'c) wymaga zgłoszenia do SK KG PSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '972. Łączność przeznaczoną do porozumiewania się dowódców poszczególnych odcinków bojowych w celu skoordynowania działań, należy zorganizować w:',
      answers: [
        {
          answer: 'a) Sieci Dowodzenia i Współdziałania (KDW)',
          isCorrect: true
        },
        {
          answer: 'b) Krajowej Sieci Współdziałania i Alarmowania (KSW)',
          isCorrect: false
        },
        {
          answer: 'c) Sieci Wojewódzkiej (PW)',
          isCorrect: false
        }
      ]
    },
    {
      question: '973. Radiowa Sieć Retransmisyjna – RSR (kanał BF 171) może być wykorzystywana jako dodatkowy kanał w:',
      answers: [
        {
          answer: 'a) Sieci Dowodzenia i Współdziałania (KDW)',
          isCorrect: true
        },
        {
          answer: 'b) Krajowej Sieci Współdziałania i Alarmowania (KSW)',
          isCorrect: false
        },
        {
          answer: 'c) Sieci Powiatowej (PW)',
          isCorrect: false
        }
      ]
    },
    {
      question: '974. Podstawowym kanałem pracy jednostek PSP do współdziałania ze statkami powietrznymi Lotniczego Pogotowia Ratunkowego (LPR) jest:',
      answers: [
        {
          answer: 'a) Kanał Krajowej Sieci Współdziałania ze statkami powietrznymi (KSWL)',
          isCorrect: true
        },
        {
          answer: 'b) Ogólnopolski Kanał Współdziałania wszystkich jednostek służby zdrowia',
          isCorrect: false
        },
        {
          answer: 'c) nie ma znaczenia, obydwa kanały są wykorzystywane równoznacznie',
          isCorrect: false
        }
      ]
    },
    {
      question: '975. Kto ustala kolejność przydziału kanałów ratowniczo-gaśniczych na terenie powiatów:',
      answers: [
        {
          answer: 'a) Dowódcy Jednostek Ratowniczo Gaśniczych',
          isCorrect: false
        },
        {
          answer: 'b) Komendanci Powiatowi/Miejscy PSP w uzgodnieniu z Dowódcami Jednostek Ratowniczo Gaśniczych',
          isCorrect: false
        },
        {
          answer: 'c) Komendant Wojewódzki PSP w uzgodnieniu z Komendantami Powiatowymi/Miejskimi PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '976. Pojazdy dysponowane poza teren własnego powiatu prowadzą nasłuch/korespondencję:',
      answers: [
        {
          answer: 'a) do momentu przekroczenia granicy administracyjnej powiatu na kanale powiatowym, a następnie na KSW',
          isCorrect: false
        },
        {
          answer: 'b) do momentu przekroczenia granicy administracyjnej powiatu na kanale powiatowym, a następnie na kanale powiatowym powiatu do którego pojazdy zostały zadysponowane',
          isCorrect: false
        },
        {
          answer: 'c) w sieci KSW',
          isCorrect: true
        }
      ]
    },
    {
      question: '977. Organizatorem łączności w relacjach miejsce prowadzonych działań - stanowisko kierowania - sztab jest:',
      answers: [
        {
          answer: 'a) Stanowisko kierowania',
          isCorrect: false
        },
        {
          answer: 'b) Sztab',
          isCorrect: false
        },
        {
          answer: 'c) KDR',
          isCorrect: true
        }
      ]
    },
    {
      question: '978. Łączność KDR z SK KP/KM PSP w Sieci Powiatowej (PR) odbywa się za pośrednictwem:',
      answers: [
        {
          answer: 'a) wyłącznie radiotelefonu przewoźnego',
          isCorrect: false
        },
        {
          answer: 'b) wyłącznie radiotelefonu nasobnego',
          isCorrect: false
        },
        {
          answer: 'c) pierwszy i drugi sposób jest dopuszczony',
          isCorrect: true
        }
      ]
    },
    {
      question: '979. Korespondencja pomiędzy KDR a poszczególnymi rotami lub pododdziałami odbywa się:',
      answers: [
        {
          answer: 'a) wyłącznie w sieci powiatowej (PR)',
          isCorrect: false
        },
        {
          answer: 'b) wyłącznie na kanale ratowniczo gaśniczym (KRG)',
          isCorrect: true
        },
        {
          answer: 'c) pierwszy i drugi sposób jest dopuszczony decyzja należy do KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '980. Kryptonim jest to:',
      answers: [
        {
          answer: 'a) Dowolne słowo logiczne w języku polskim używane podczas prowadzenia korespondencji radiowej w sieciach MSWiA',
          isCorrect: false
        },
        {
          answer: 'b) Umowny znak rozpoznawczy maskujący przynależność służbową korespondenta i stanowiący jego adres radiotelefoniczny',
          isCorrect: true
        },
        {
          answer: 'c) Określenie pełnionej funkcji korespondenta radiowego podczas prowadzonej łączności w sieci radiowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '981. GRANIT to:',
      answers: [
        {
          answer: 'a) kryptonim Kierującego Działaniem Ratowniczym',
          isCorrect: false
        },
        {
          answer: 'b) Sygnał Krajowej Sieci Współdziałania i Alarmowania (KSW)',
          isCorrect: true
        },
        {
          answer: 'c) Nakaz alarmowego opuszczenia strefy zagrożonej',
          isCorrect: false
        }
      ]
    },
    {
      question: '982. Przekazywanie informacji z miejsca prowadzonych działań na numery alarmowe obsługiwane przez stanowiska kierowania jest:',
      answers: [
        {
          answer: 'a) bezwzględnie zabronione',
          isCorrect: true
        },
        {
          answer: 'b) dopuszczone',
          isCorrect: false
        },
        {
          answer: 'c) wskazane, gdyż są to numery rejestrowane',
          isCorrect: false
        }
      ]
    },
    {
      question: '983. Prowadzenie komunikacji głosowej w Sieci Alarmowej PA1 i PA2 jest:',
      answers: [
        {
          answer: 'a) bezwzględnie zabronione',
          isCorrect: true
        },
        {
          answer: 'b) dopuszczone',
          isCorrect: false
        },
        {
          answer: 'c) wskazane ze względu na znikome wykorzystywanie',
          isCorrect: false
        }
      ]
    },
    {
      question: '984. Radiotelefony nasobne wykorzystywane przez ratowników zaleca się oprogramować, tak aby pozwalały na ich bezpośrednie uruchamianie się:',
      answers: [
        {
          answer: 'a) w Sieci Powiatowej (PR)',
          isCorrect: false
        },
        {
          answer: 'b) na uzgodnionym pomiędzy Komendantem Wojewódzkim PSP a Komendantem Powiatowym/Miejskim PSP Kanale Ratowniczo Gaśniczym (KRG)',
          isCorrect: true
        },
        {
          answer: 'c) na jakimkolwiek Kanale Ratowniczo Gaśniczym (KRG), ważne aby nie w Sieci Powiatowej (PR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '985. Podstawowa zasada obowiązująca w sieciach radiowych to:',
      answers: [
        {
          answer: 'a) „Maksimum czasu nadawania – maksimum treści”',
          isCorrect: false
        },
        {
          answer: 'b) „Minimum czasu nadawania – maksimum treści”',
          isCorrect: true
        },
        {
          answer: 'c) „Maksimum czasu nadawania – minimum treści”',
          isCorrect: false
        }
      ]
    },
    {
      question: '986. W przypadku utworzenia PPSiŚ przyjeżdżające do niego z innego powiatu/województwa jednostki zgłaszają się na:',
      answers: [
        {
          answer: 'a) KDW',
          isCorrect: false
        },
        {
          answer: 'b) KSW',
          isCorrect: true
        },
        {
          answer: 'c) KRG',
          isCorrect: false
        }
      ]
    },
    {
      question: '987. W momencie utworzenia PPSiŚ korespondencja pomiędzy KDR a kierującym PPSiŚ odbywa się na kanale sieci:',
      answers: [
        {
          answer: 'a) KDW',
          isCorrect: true
        },
        {
          answer: 'b) KSW',
          isCorrect: false
        },
        {
          answer: 'c) KRG',
          isCorrect: false
        }
      ]
    },
    {
      question: '988. Czy dopuszcza się wykorzystanie kanału powiatowego celem zgłaszania się jednostek przyjeżdżających do PPSiŚ:',
      answers: [
        {
          answer: 'a) Nie',
          isCorrect: false
        },
        {
          answer: 'b) Tak, ale tylko wtedy gdy do działań są dysponowane siły i środki z własnego powiatu',
          isCorrect: true
        },
        {
          answer: 'c) Tak, decyzja należy do KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '989. Udając się do działań ratowniczych podczas przejazdu przez inne województwa:',
      answers: [
        {
          answer: 'a) pozostajemy na własnym kanale wojewódzkim, zmieniając go na kanał wojewódzki województwa docelowego po przekroczeniu jego granic i nawiązujemy na nim łączność z właściwym SK KW PSP',
          isCorrect: false
        },
        {
          answer: 'b) każdorazowo przejeżdżając granice województw zmieniamy kanał na właściwy kanał wojewódzki i nawiązujemy łączność z właściwym obszarowo SK KW PSP',
          isCorrect: false
        },
        {
          answer: 'c) utrzymujemy łączność na KSW nawiązując korespondencję radiową z SK KW informując o wjechaniu na teren województwa oraz opuszczeniu terenu województwa – w przypadku braku możliwości bezpośredniego kontaktu radiowego z SK KW prowadzimy korespondencję poprzez SK KP/KM',
          isCorrect: true
        }
      ]
    },
    {
      question: '990. Operacyjny Kierunek Radiowy (KO) służy do łączności w relacjach:',
      answers: [
        {
          answer: 'a) Kierujący Działaniem Ratowniczym/Sztab a Stanowisko Kierowania PSP',
          isCorrect: true
        },
        {
          answer: 'b) Dowódca Odcinka Bojowego a Kierujący Działaniem Ratowniczym',
          isCorrect: false
        },
        {
          answer: 'c) Dowódca Odcinka Bojowego a podległe SIS',
          isCorrect: false
        }
      ]
    },
    {
      question: '991. Poprawny sposób nawiązania łączności w sieciach radiowych PSP to użycie zwrotu:',
      answers: [
        {
          answer: 'a) DF 200-01 ZGŁOŚ SIĘ DLA DF 200-00 ODBIÓR',
          isCorrect: false
        },
        {
          answer: 'b) DF 200-01 TU DF 200-00 ODBIÓR',
          isCorrect: true
        },
        {
          answer: 'c) DF 200-01 ZGŁOŚ SIĘ - 200-00 ODBIÓR',
          isCorrect: false
        }
      ]
    },
    {
      question: '992. Jeżeli na kanale B043 użytkownik ma zaprogramowaną w radiotelefonie blokadę szumów typu M, to usłyszy On zgłoszenie na wywołanie:',
      answers: [
        {
          answer: 'a) użytkowników z zaprogramowaną blokadą tego samego typu (M) oraz bez zaprogramowanej blokady (tzw. kanał otwarty)',
          isCorrect: false
        },
        {
          answer: 'b) tylko użytkowników z zaprogramowaną blokadą tego samego typu (M)',
          isCorrect: true
        },
        {
          answer: 'c) użytkowników bez zaprogramowanej blokady (tzw. kanał otwarty)',
          isCorrect: false
        }
      ]
    },
    {
      question: '993. Siecią ruchomą o zmiennym obszarze pracy jest:',
      answers: [
        {
          answer: 'a) Sieć Powiatowa',
          isCorrect: false
        },
        {
          answer: 'b) Sieć Alarmowa',
          isCorrect: false
        },
        {
          answer: 'c) Sieć Ratowniczo-Gaśnicza',
          isCorrect: true
        }
      ]
    },
    {
      question: '994. Która z sieci nie jest siecią o stałym obszarze pracy:',
      answers: [
        {
          answer: 'a) Sieć Szkolna (KS)',
          isCorrect: false
        },
        {
          answer: 'b) Sieć Dowodzenia i Współdziałania (KDW)',
          isCorrect: true
        },
        {
          answer: 'c) Sieć Powiatowa (PR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '995. Zgodnie z „Metodyką postępowania podczas organizacji łączności na potrzeby KDR” kryptonim DARIA oznacza:',
      answers: [
        {
          answer: 'a) Stanowisko ratownicze zastępu lub sekcji',
          isCorrect: false
        },
        {
          answer: 'b) Dowódcę odcinka bojowego zastępu lub sekcji',
          isCorrect: true
        },
        {
          answer: 'c) Odcinek bojowy',
          isCorrect: false
        }
      ]
    },
    {
      question: '996. Sieć Komendy Głównej służy do:',
      answers: [
        {
          answer: 'a) zapewnienia łączności pomiędzy stacją stałą a stacjami ruchomymi będącymi w dyspozycji KG PSP',
          isCorrect: true
        },
        {
          answer: 'b) zapewnienia łączności podczas długotrwałych akcji ratowniczych, gdy kierującym działaniami jest Komendant Główny PSP lub jego zastępcy',
          isCorrect: false
        },
        {
          answer: 'c) zapewnienia łączności na terenie całego kraju',
          isCorrect: false
        }
      ]
    },
    {
      question: '997. W przypadku konieczności ograniczenia ilości prowadzonej korespondencji na Kanale Powiatowym (PR) pomiędzy KDR i SK KP/KM uruchamia się:',
      answers: [
        {
          answer: 'a) Operacyjny Kierunek Radiowy (KO)',
          isCorrect: true
        },
        {
          answer: 'b) Kanał Dowodzenia i Współdziałania (KDW)',
          isCorrect: false
        },
        {
          answer: 'c) Radiową Sieć Retransmisyjną (RSR)',
          isCorrect: false
        }
      ]
    },
    {
      question: '998. Kto prowadzi ewidencję zdarzeń z prowadzonych działań ratowniczych',
      answers: [
        {
          answer: 'a) Podmioty ksrg',
          isCorrect: true
        },
        {
          answer: 'b) Pierwsza przybyła na miejsce zdarzeń jednostka PSP',
          isCorrect: false
        },
        {
          answer: 'c) Pierwsza przybyła na miejsce zdarzeń jednostka ksrg',
          isCorrect: false
        }
      ]
    },
    {
      question: '999. Dokumentację działań ratowniczych prowadzi i przechowuje:',
      answers: [
        {
          answer: 'a) Komendant Wojewódzki i Powiatowy (Miejski) PSP',
          isCorrect: false
        },
        {
          answer: 'b) Komendant Główny PSP',
          isCorrect: false
        },
        {
          answer: 'c) Komendanci Państwowej Straży Pożarnej',
          isCorrect: true
        }
      ]
    },
    {
      question: '1000. Dokumentacja działań ratowniczych nie obejmuje:',
      answers: [
        {
          answer: 'a) karty zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) zestawienia dobowego zdarzeń',
          isCorrect: false
        },
        {
          answer: 'c) informacji ze zdarzenia',
          isCorrect: false
        },
        {
          answer: 'd) planu ratowniczego',
          isCorrect: true
        }
      ]
    },
    {
      question: '1001. Dyspozytor lub dyżurny operacyjny stanowiska kierowania komendanta Państwowej Straży Pożarnej nie sporządza:',
      answers: [
        {
          answer: 'a) karty zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) zestawienia dobowego',
          isCorrect: false
        },
        {
          answer: 'c) informacji ze zdarzenia, gdy na miejscu zdarzenia są obecne sis PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '1002. Zestawienie dobowe zdarzeń za dany dzień sporządza się:',
      answers: [
        {
          answer: 'a) na zmianę służby',
          isCorrect: false
        },
        {
          answer: 'b) za dany dzień do godz. 0:30 dnia następnego',
          isCorrect: true
        },
        {
          answer: 'c) do godz. 2400',
          isCorrect: false
        }
      ]
    },
    {
      question: '1003. Kartę udzielonej kwalifikowanej pierwszej pomocy podczas zdarzeń pojedynczych lub mnogich wypełnia:',
      answers: [
        {
          answer: 'a) dyspozytor lub dyżurny operacyjny stanowiska kierowania komendanta Państwowej Straży Pożarnej',
          isCorrect: false
        },
        {
          answer: 'b) Ratownik podmiotu ksrg, który udzielił kpp',
          isCorrect: true
        },
        {
          answer: 'c) Kierujący',
          isCorrect: false
        }
      ]
    },
    {
      question: '1004. Stanowisko kierowania komendanta powiatowego (miejskiego) Państwowej Straży Pożarnej niezwłocznie nie przekazuje wstępnej informację o zdarzeniu do stanowiska kierowania komendanta wojewódzkiego Państwowej Straży Pożarnej a stanowisko kierowania komendanta wojewódzkiego Państwowej Straży Pożarnej do stanowiska kierowania Komendanta Głównego Państwowej Straży Pożarnej m.in. w przypadku zdarzeń:',
      answers: [
        {
          answer: 'a) podczas których wypadkowi uległ ratownik podmiotu ratowniczego',
          isCorrect: false
        },
        {
          answer: 'b) w których w bezpośrednim działaniu ratowniczym uczestniczyło co najmniej 7 zastępów',
          isCorrect: true
        },
        {
          answer: 'c) podczas których dysponowano śmigłowiec lub samolot do prowadzenia działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'd) w których uczestniczyły co najmniej 3 zespoły ratownictwa medycznego',
          isCorrect: false
        }
      ]
    },
    {
      question: '1005. W skład dokumentacji funkcjonowania ksrg nie wchodzi:',
      answers: [
        {
          answer: 'a) analiza zagrożeń oraz analiza zabezpieczenia operacyjnego',
          isCorrect: false
        },
        {
          answer: 'b) plan ratowniczy',
          isCorrect: false
        },
        {
          answer: 'c) zestawienie dobowe',
          isCorrect: true
        },
        {
          answer: 'd) analizę działania ratowniczego',
          isCorrect: false
        }
      ]
    },
    {
      question: '1006. Analiza gotowości operacyjnej nie zawiera:',
      answers: [
        {
          answer: 'a) czasów dysponowania do działań ratowniczych oraz wyznaczonych obszarów chronionych',
          isCorrect: false
        },
        {
          answer: 'b) ilości rodzaju i parametrów taktycznych oraz techniczno-użytkowych sprzętu ratowniczego i sprzętu ochrony osobistej',
          isCorrect: false
        },
        {
          answer: 'c) liczby ratowników wyszkolonych w poszczególnych dziedzinach ratownictwa',
          isCorrect: false
        },
        {
          answer: 'd) planu ratowniczego',
          isCorrect: true
        }
      ]
    },
    {
      question: '1007. Dokumentacja działań ratowniczych oraz dokumentacja funkcjonowania ksrg jest prowadzona w formie:',
      answers: [
        {
          answer: 'a) pisemnej',
          isCorrect: false
        },
        {
          answer: 'b) w elektronicznym systemie przetwarzania',
          isCorrect: false
        },
        {
          answer: 'c) pisemnej lub w elektronicznym systemie przetwarzania',
          isCorrect: true
        }
      ]
    },
    {
      question: '1008. Plany ratownicze nie zawierają:',
      answers: [
        {
          answer: 'a) wykazu zadań realizowanych przez podmioty ratownicze',
          isCorrect: false
        },
        {
          answer: 'b) zbioru zalecanych zasad i procedur ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) danych teleadresowych',
          isCorrect: false
        },
        {
          answer: 'd) grafiku służb',
          isCorrect: true
        }
      ]
    },
    {
      question: '1009. Stanowiskami kierowania są:',
      answers: [
        {
          answer: 'a) PA JRG, SK KM PSP, SK KW PSP',
          isCorrect: false
        },
        {
          answer: 'b) SK KM/P PSP, SK KW PSP, SK KG PSP',
          isCorrect: true
        },
        {
          answer: 'c) PA JRG, SK KP PSP, SK KW PSP, SK KG PSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '1010. Do głównych zadań stanowisk kierowania komendantów powiatowych/miejskich PSP należy:',
      answers: [
        {
          answer: 'a) tylko informowanie przełożonych i organów administracji publicznej o rodzajach zagrożeń prognozie ich rozwoju oraz skali i miejscu zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) przyjmowanie, kwalifikowanie, w razie potrzeby przekazywanie zgłoszeń alarmowych, dysponowanie zasobów ratowniczych, wspomaganie i koordynacja działań ratowniczych oraz bieżąca analiza gotowości oraz zagrożeń',
          isCorrect: true
        },
        {
          answer: 'c) tylko korzystanie z map systemów informatycznych oraz innych narzędzi niezbędnych do analizowania i prognozowania zagrożeń',
          isCorrect: false
        }
      ]
    },
    {
      question: '1011. W stanowiskach kierowania pełnią służbę:',
      answers: [
        {
          answer: 'a) wszyscy strażacy zatrudnieni w PSP',
          isCorrect: false
        },
        {
          answer: 'b) tylko dyżurni operacyjni i dyspozytorzy PSP',
          isCorrect: false
        },
        {
          answer: 'c) tylko wyznaczeni funkcjonariusze, spełniający wymagania kwalifikacyjne dla dyspozytora lub dyżurnego operacyjnego PSP',
          isCorrect: false
        },
        {
          answer: 'd) dyżurni operacyjni PSP, dyspozytorzy PSP oraz wyznaczeni funkcjonariusze spełniający wymagania kwalifikacyjne dla dyspozytora lub dyżurnego operacyjnego PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '1012. Stanowisko kierowania komendanta powiatowego/miejskiego PSP zbiera i przekazuje do stanowiska kierowania komendanta wojewódzkiego PSP zbiór informacji o:',
      answers: [
        {
          answer: 'a) posiadanym zasilaniu gwarantowanym i pomieszczeniach spełniających wymagania w zakresie bezpiecznych i higienicznych warunków pracy',
          isCorrect: false
        },
        {
          answer: 'b) ilości przechowywanej dokumentacji i danych dotyczących przebiegu działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'c) stanie sił i środków na swym obszarze oraz zadysponowaniu ich do działań ratowniczych',
          isCorrect: true
        }
      ]
    },
    {
      question: '1013. Stanowisko kierowania komendanta wojewódzkiego PSP przekazuje do stanowiska kierowania Komendanta Głównego PSP zbiór informacji o:',
      answers: [
        {
          answer: 'a) ilości wykonanych analiz z prowadzonych działań ratowniczych',
          isCorrect: false
        },
        {
          answer: 'b) stanie sił i środków na swym obszarze oraz zadysponowaniu ich do działań ratowniczych',
          isCorrect: true
        },
        {
          answer: 'c) ilości urządzeń do rejestrowania treści zgłoszeń alarmowych',
          isCorrect: false
        }
      ]
    },
    {
      question: '1014. Co rozumie się przez otwarcie zmiany w SWD PSP:',
      answers: [
        {
          answer: 'a) uruchomienie funkcji Otwarcie nowej zmiany, aktualizację obsady osobowej jednostki/jednostek, aktualizację obsady osobowej pojazdów',
          isCorrect: true
        },
        {
          answer: 'b) tylko uruchomienie funkcji Otwarcie nowej zmiany',
          isCorrect: false
        },
        {
          answer: 'c) zalogowanie się do systemu',
          isCorrect: false
        }
      ]
    },
    {
      question: '1015. Karta manipulacyjna w SWD PSP jest wypełniana:',
      answers: [
        {
          answer: 'a) Jedynie automatycznie (na podstawie czasów operacyjnych zdarzenia i dyspozycji w zdarzeniu zarejestrowanych w czasie obsługi zdarzenia)',
          isCorrect: false
        },
        {
          answer: 'b) Automatyczne - na podstawie czasów operacyjnych zdarzenia i dyspozycji w zdarzeniu zarejestrowanych w czasie obsługi zdarzenia oraz ręcznie - wpisy dodane przez użytkownika',
          isCorrect: true
        },
        {
          answer: 'c) Jedynie ręcznie - wpisy dodane przez użytkownika',
          isCorrect: false
        }
      ]
    },
    {
      question: '1016. Karta zdarzenia możliwa jest do przeniesienia do archiwum w SWD PSP:',
      answers: [
        {
          answer: 'a) Kiedy zdarzenie jest zakończone, a kontrola poszczególnych elementów zdarzenia nie wykazuje błędów',
          isCorrect: true
        },
        {
          answer: 'b) Kiedy wszystkie siły i środki wrócą do koszar',
          isCorrect: false
        },
        {
          answer: 'c) Kiedy sporządzona jest informacja ze zdarzenia',
          isCorrect: false
        }
      ]
    },
    {
      question: '1017. Obsada osobowa pojazdu biorącego udział w zdarzeniu w SWD PSP:',
      answers: [
        {
          answer: 'a) Jest niezmienna podczas trwania zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) Dla każdego wpisu o obsadzie (funkcja i osoba ją pełniąca) istnieje możliwość określenia przedziału czasu, w jakim dana osoba pełniła tą funkcję w obsadzie konkretnego pojazdu w konkretnym zdarzeniu. Dzięki tej funkcjonalności jest możliwość obsługi podmiany obsad w dyspozycji',
          isCorrect: true
        },
        {
          answer: 'c) Może być wpisana przez dowolnego użytkownika systemu',
          isCorrect: false
        }
      ]
    },
    {
      question: '1018. Funkcja zatwierdzania meldunków w SWD PSP jest dostępna:',
      answers: [
        {
          answer: 'a) Na poziomie KM/P i KW PSP',
          isCorrect: true
        },
        {
          answer: 'b) Na poziomie KW PSP i KG PSP',
          isCorrect: false
        },
        {
          answer: 'c) Na wszystkich poziomach, ale w KP/KM tylko dla użytkowników posiadających uprawnienia administratora',
          isCorrect: false
        }
      ]
    },
    {
      question: '1019. Do czego służy moduł Bazy Sił i Środków SWD PSP:',
      answers: [
        {
          answer: 'a) moduł Bazy Sił i Środków jest modułem służącym do zarządzania siłami i środkami, jak również obsadami osobowymi, danymi teleadresowymi oraz parametrami danej jednostki',
          isCorrect: true
        },
        {
          answer: 'b) moduł Bazy Sił i Środków jest modułem służącym tylko do zarządzania siłami i środkami',
          isCorrect: false
        },
        {
          answer: 'c) moduł Bazy Sił i Środków służy do wyszukiwania danych o zdarzeniach na terenie własnego obszaru działania',
          isCorrect: false
        }
      ]
    },
    {
      question: '1020. Informacja dobowa generowana jest:',
      answers: [
        {
          answer: 'a) tylko za pojedynczą dobę (od 00:00 do 23:59)',
          isCorrect: true
        },
        {
          answer: 'b) za dowolną ilość dób (od 00:00 do 23:59)',
          isCorrect: false
        },
        {
          answer: 'c) za dowolny ustalony przez użytkownika okres czasu',
          isCorrect: false
        }
      ]
    },
    {
      question: '1021. Informacja dobowa sporządzana jest na podstawie:',
      answers: [
        {
          answer: 'a) Czasów zgłoszenia zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) Czasów sporządzenia meldunków',
          isCorrect: true
        },
        {
          answer: 'c) Czasów powrotu ostatniej jednostki',
          isCorrect: false
        }
      ]
    },
    {
      question: '1022. Zestawienie dobowe wykonywane jest:',
      answers: [
        {
          answer: 'a) przez jednostki podrzędne i wysyłane do jednostek nadrzędnych',
          isCorrect: false
        },
        {
          answer: 'b) tylko za okres jednej doby',
          isCorrect: false
        },
        {
          answer: 'c) na każdym poziomie struktury PSP zestawienie to jest generowane na podstawie danych posiadanych w bazie danych tej jednostki',
          isCorrect: true
        }
      ]
    },
    {
      question: '1023. Nazwy w katalogu sił i środków:',
      answers: [
        {
          answer: 'a) Są nadawane tylko automatycznie',
          isCorrect: false
        },
        {
          answer: 'b) Są nadawane automatycznie, ale zawierają część możliwą do wprowadzenia przez użytkownika',
          isCorrect: true
        },
        {
          answer: 'c) Są nadawane przez użytkownika',
          isCorrect: false
        }
      ]
    },
    {
      question: '1024. Czy Dyżurny Operacyjny Województwa ma obowiązek poinformowania SK KG PSP o wyjeździe samochodu służbowego poza teren własnego województwa?',
      answers: [
        {
          answer: 'a) Nie ma obowiązku',
          isCorrect: false
        },
        {
          answer: 'b) Ma, ale tylko WG',
          isCorrect: false
        },
        {
          answer: 'c) Ma obowiązek zgłaszania wyjazdów wszystkich samochodów służbowych',
          isCorrect: true
        }
      ]
    },
    {
      question: '1025. Czy wsparcie psychologiczne jest zaliczane do medycznych działań ratowniczych?',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: false
        },
        {
          answer: 'b) tak',
          isCorrect: true
        },
        {
          answer: 'c) wg informacji od KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '1026. W SWD-PSP w „Informacji ze zdarzenia” w pozycji nr 23 w polu „ranni” uwzględniamy osoby które odmówiły zabrania z miejsca zdarzenia przez ZRM?',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: false
        },
        {
          answer: 'b) tak',
          isCorrect: true
        },
        {
          answer: 'c) decyduje o tym KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '1027. Do czego służy moduł „Zestawienia – ST”?',
      answers: [
        {
          answer: 'a) Do tworzenia informacji ze zdarzenia',
          isCorrect: false
        },
        {
          answer: 'b) Do opracowań statystycznych',
          isCorrect: true
        },
        {
          answer: 'c) Do sporządzania raportu ze służby',
          isCorrect: false
        }
      ]
    },
    {
      question: '1028. Jakie informacje nie zawiera „Karta zdarzenia” w SWD – PSP?',
      answers: [
        {
          answer: 'a) Daty i godziny zadysponowania do zdarzenia sis',
          isCorrect: false
        },
        {
          answer: 'b) daty i godziny zakończenia działań',
          isCorrect: false
        },
        {
          answer: 'c) przypuszczalnej przyczyny zdarzenia',
          isCorrect: true
        }
      ]
    },
    {
      question: '1029. W przypadku otwarcia mieszkania przy podejrzeniu zagrożenie zdrowia i życia osoby, gdy w środku nikogo nie było kwalifikujemy jako?',
      answers: [
        {
          answer: 'a) MZ',
          isCorrect: true
        },
        {
          answer: 'b) AF w dobrej wierze',
          isCorrect: false
        },
        {
          answer: 'c) WG',
          isCorrect: false
        }
      ]
    },
    {
      question: '1030. Przy zabezpieczeniu operacyjnym, wymagającym czasowej zmiany miejsca stacjonowania sił i środków PSP:',
      answers: [
        {
          answer: 'a) Sporządzamy tylko kartę zdarzenia – przekazanie na zabezpieczenie rejonu',
          isCorrect: true
        },
        {
          answer: 'b) Tworzymy informację ze zdarzenia',
          isCorrect: false
        },
        {
          answer: 'c) Traktujemy zdarzenie jako wyjazd gospodarczy',
          isCorrect: false
        }
      ]
    },
    {
      question: '1031. Czy ofiarę śmiertelną podczas pomocy Policji przy otwarciu mieszkania uwzględniamy w informacji ze zdarzenia?',
      answers: [
        {
          answer: 'a) Tak, tylko wtedy, jeżeli w stosunku do ofiary były podejmowane działania z zakresu kpp',
          isCorrect: true
        },
        {
          answer: 'b) Tak, jeżeli lekarz stwierdzi zgon',
          isCorrect: false
        },
        {
          answer: 'c) Tak, na wniosek Policji',
          isCorrect: false
        }
      ]
    },
    {
      question: '1032. Czy zadysponowana a następnie cofnięta grupa specjalistyczna jest wykazywana w Informacji ze zdarzenia jako liczba zastępów na miejscu zdarzenia?',
      answers: [
        {
          answer: 'a) Nie',
          isCorrect: true
        },
        {
          answer: 'b) Tak',
          isCorrect: false
        },
        {
          answer: 'c) Tak, w przypadku specjalistycznej grupy wodno-nurkowej',
          isCorrect: false
        }
      ]
    },
    {
      question: '1033. Czy usunięta podczas zdarzenia plama oleju jest MZ ekologicznym?',
      answers: [
        {
          answer: 'a) Tak',
          isCorrect: false
        },
        {
          answer: 'b) Tak, ale tylko jedynie w przypadku zagrożenia dla środowiska naturalnego',
          isCorrect: true
        },
        {
          answer: 'c) Tak, ale jedynie w przypadku rozlanej na powierzchni drogi, po której poruszają się pojazdy',
          isCorrect: false
        }
      ]
    },
    {
      question: '1034. Kto jest odpowiedzialny za sporządzenie informacji ze zdarzenia:',
      answers: [
        {
          answer: 'a) dyspozytor',
          isCorrect: false
        },
        {
          answer: 'b) KDR',
          isCorrect: true
        },
        {
          answer: 'c) osoba wyznaczona przez KDR',
          isCorrect: false
        }
      ]
    },
    {
      question: '1035. W punkcie 22 „Medyczne działania ratownicze” Informacji ze zdarzenia w części „Ewakuowano ze strefy zagrożenia” należy uwzględnić:',
      answers: [
        {
          answer: 'a) liczbę osób, które ewakuowały się przed przybyciem JOP',
          isCorrect: false
        },
        {
          answer: 'b) jedynie liczbę osób ewakuowanych przez JOP',
          isCorrect: false
        },
        {
          answer: 'c) jedynie liczbę osób ewakuowanych przez JOP, którym udzielono kpp',
          isCorrect: true
        }
      ]
    },
    {
      question: '1036. Zabezpieczenie lądowania niezwiązane z awarią środka transportu lotniczego (np LPR) klasyfikowane jest jako:',
      answers: [
        {
          answer: 'a) MZ w transporcie lotniczym',
          isCorrect: false
        },
        {
          answer: 'b) MZ bez określonego rodzaju',
          isCorrect: true
        }
      ]
    },
    {
      question: '1037. Czy istnieje obowiązek częściowego wypełnienia IzZ?',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: false
        },
        {
          answer: 'b) tak, nie później niż w czwartej godzinie działań',
          isCorrect: true
        },
        {
          answer: 'c) tak, niezwłocznie po powrocie JOP do jednostki macierzystej',
          isCorrect: false
        }
      ]
    },
    {
      question: '1038. W przypadku pożaru piwnicy w 3-kondygnacyjnym budynku wielorodzinnym standardowo należy zadysponować:',
      answers: [
        {
          answer: 'a) GBA, GCBA, SD/SH',
          isCorrect: true
        },
        {
          answer: 'b) GBA, GCBA',
          isCorrect: false
        },
        {
          answer: 'c) GBA',
          isCorrect: false
        }
      ]
    },
    {
      question: '1039. W przypadku kolizji 3 pojazdów standardowo należy zadysponować:',
      answers: [
        {
          answer: 'a) GBA i SRt',
          isCorrect: false
        },
        {
          answer: 'b) 2x GBA i SRt',
          isCorrect: true
        },
        {
          answer: 'c) GBARt',
          isCorrect: false
        }
      ]
    },
    {
      question: '1040. Podczas imprezy masowej zabezpieczanej przez PSP ma miejsce pożar śmietnika. W takim przypadku należy:',
      answers: [
        {
          answer: 'a) założyć nowe zdarzenie – pożar',
          isCorrect: true
        },
        {
          answer: 'b) zdarzenie opisać w ramach prowadzonego MZ',
          isCorrect: false
        }
      ]
    },
    {
      question: '1041. Czy plama oleju napędowego na odcinku 1 km jezdni jest MZ ekologicznym?',
      answers: [
        {
          answer: 'a) tak',
          isCorrect: false
        },
        {
          answer: 'b) nie',
          isCorrect: true
        }
      ]
    },
    {
      question: '1042. Czy wypadek szybowca należy zgłosić do nadrzędnego SK?',
      answers: [
        {
          answer: 'a) nie',
          isCorrect: false
        },
        {
          answer: 'b) tak',
          isCorrect: true
        },
        {
          answer: 'c) jedynie gdy są osoby poszkodowane',
          isCorrect: false
        }
      ]
    },
    {
      question: '1043. W przypadku ratownictwa wodnego, w jakim maksymalnym czasie należy podjąć interwencję:',
      answers: [
        {
          answer: 'a) 15 min',
          isCorrect: false
        },
        {
          answer: 'b) 120 min',
          isCorrect: false
        },
        {
          answer: 'c) to zależy od poziomu zagrożenia powiatu',
          isCorrect: true
        }
      ]
    },
    {
      question: '1044. W przypadku zabezpieczeniu K1 w formie Z3 przejazdu osoby ochranianej:',
      answers: [
        {
          answer: 'a) Zastępy włączają się do kolumny',
          isCorrect: false
        },
        {
          answer: 'b) Zabezpieczenie odbywa się z miejsca stacjonowania jednostek',
          isCorrect: true
        },
        {
          answer: 'c) Zastępy udają się w określone w piśmie miejsce',
          isCorrect: false
        }
      ]
    },
    {
      question: '1045. Do wypadku w transporcie kolejowym w I rzucie należy zadysponować:',
      answers: [
        {
          answer: 'a) GBA, GCBA, SRt',
          isCorrect: true
        },
        {
          answer: 'b) SOP, GBA',
          isCorrect: false
        },
        {
          answer: 'c) SD-30, SRt',
          isCorrect: false
        }
      ]
    },
    {
      question: '1046. Kompania gaśnicza Pluton typu D składa się z:',
      answers: [
        {
          answer: 'a) 3 zastępów GCBA o min. wydajności autopomp stosownej dla parametrów DWP, które będą zasilać 3 DWP o min wydajności 3800dm3/min',
          isCorrect: true
        },
        {
          answer: 'b) 2 zastępów GCBA o min wydajności autopomp stosownej dla parametrów DWP, które będą zasilać 3 DWP o min wydajności 3800dm3/min',
          isCorrect: false
        },
        {
          answer: 'c) 4 zastępów GCBA o min wydajności autopomp stosownej dla parametrów DWP, które będą zasilać 3 DWP o min wydajności 3800dm3/min',
          isCorrect: false
        }
      ]
    },
    {
      question: '1047. Kompania gaśnicza Pluton typu A składa się z:',
      answers: [
        {
          answer: 'a) 2 samochodów GBA lub GCBA o obsadzie min 5 osób, minimalna pojemność zbiornika wody 2m3',
          isCorrect: false
        },
        {
          answer: 'b) 3 samochodów GBA lub GCBA o obsadzie min 5 osób, minimalna pojemność zbiornika wody 1m3',
          isCorrect: false
        },
        {
          answer: 'c) 3 samochodów GBA lub GCBA o obsadzie min 5 osób, minimalna pojemność zbiornika wody 2m3',
          isCorrect: true
        }
      ]
    },
    {
      question: '1048. W przypadku konieczności zadysponowania SGR z terenu innego województwa SKKW PSP przesyła:',
      answers: [
        {
          answer: 'a) zapotrzebowanie pisemne na SGR do SKKG PSP',
          isCorrect: true
        },
        {
          answer: 'b) zapotrzebowanie pisemne na SGR do właściwego SKKW PSP',
          isCorrect: false
        },
        {
          answer: 'c) jedynie informację do SK KG PSP',
          isCorrect: false
        }
      ]
    },
    {
      question: '1049. Co oznacza skrót AFFF-AR',
      answers: [
        {
          answer: 'a) środek biobójczy',
          isCorrect: false
        },
        {
          answer: 'b) dyspergent',
          isCorrect: false
        },
        {
          answer: 'c) środek pianotwórczy wytwarzający film wodny alkoholoodporny',
          isCorrect: true
        }
      ]
    },
    {
      question: '1050. Co oznacza kryptonim radiowy 300 – 05',
      answers: [
        {
          answer: 'a) Dowódca JRG',
          isCorrect: false
        },
        {
          answer: 'b) Z-ca KM PSP',
          isCorrect: false
        },
        {
          answer: 'c) Naczelnik Wydziału Operacyjnego w KM PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '1051. Kanał łączności z LPR to:',
      answers: [
        {
          answer: 'a) B043',
          isCorrect: false
        },
        {
          answer: 'b) U007',
          isCorrect: false
        },
        {
          answer: 'c) KSWL U02',
          isCorrect: true
        }
      ]
    },
    {
      question: '1052. W informacji ze zdarzenia ranny druh OSP jest oznaczany jako:',
      answers: [
        {
          answer: 'a) Ranny ratownik',
          isCorrect: true
        },
        {
          answer: 'b) Ranny ratownik w tym strażak',
          isCorrect: false
        },
        {
          answer: 'c) Obie odpowiedzi są błędne',
          isCorrect: false
        }
      ]
    },
    {
      question: '1053. Jaki filtr powinien być zastosowany w module EWID – Przeglądanie meldunków do wygenerowania zdarzeń za dany okres, przy których współdziałały razem pojazdy jednostek PSP OSP KSRG OSP spoza KSRG (wskaż odpowiedź nieprawidłową):',
      answers: [
        {
          answer: 'a) W działaniach brało udział: PSP – ilość pojazdów>0 i OSP KSRG – ilość pojazdów>0 i OSP inne – ilość pojazdów>0',
          isCorrect: false
        },
        {
          answer: 'b) W działaniach brało udział: PSP – ilość pojazdów ≠0 i OSP KSRG – ilość pojazdów≠0 i OSP inne – ilość pojazdów≠0',
          isCorrect: false
        },
        {
          answer: 'c) W działaniach brało udział: PSP – ilość pojazdów≠0 lub OSP KSRG – ilość pojazdów≠0 lub OSP inne – ilość pojazdów≠0',
          isCorrect: true
        }
      ]
    },
    {
      question: '1054. Jeżeli z treści zgłoszenia wynika zagrożenie dla zdrowia i życia ludzkiego dyżurny:',
      answers: [
        {
          answer: 'a) musi zadysponować cały stan osobowy JRG',
          isCorrect: false
        },
        {
          answer: 'b) nie może dysponować sił i środków z OSP',
          isCorrect: false
        },
        {
          answer: 'c) w procesie dysponowania powinien dążyć do zadysponowania co najmniej 6 ratowników PSP',
          isCorrect: true
        }
      ]
    },
    {
      question: '1055. Którą z sekcji gaśniczych o niżej podanym składzie zadysponujesz w I rzucie do pożaru piwnicy w trzykondygnacyjnym budynku mieszkalnym wielorodzinnym:',
      answers: [
        {
          answer: 'a) 2 x GBA i GCBA',
          isCorrect: false
        },
        {
          answer: 'b) GCBA i GBA',
          isCorrect: false
        },
        {
          answer: 'c) GBA, GCBA i SHD',
          isCorrect: true
        }
      ]
    },
    {
      question: '1056. Którą z sekcji gaśniczych o niżej podanym składzie zadysponujesz zgodnie z zasadami w I rzucie do pożaru w dwukondygnacyjnym szpitalu:',
      answers: [
        {
          answer: 'a) GBA GCBA',
          isCorrect: false
        },
        {
          answer: 'b) 2 x GBA, GCBA, SHD',
          isCorrect: true
        },
        {
          answer: 'c) GBA 2 x GCBA SHD',
          isCorrect: false
        }
      ]
    },
    {
      question: '1057. IV stopień pomocy w systemie SPOT obejmuje:',
      answers: [
        {
          answer: 'a) doradztwo na miejscu wypadku / awarii',
          isCorrect: false
        },
        {
          answer: 'b) doradztwo drogą telefoniczna przez specjalistę',
          isCorrect: false
        },
        {
          answer: 'c) pomoc bezpośrednio na miejscu zdarzenia przez jednostki ratownicze działające w ramach SPOT',
          isCorrect: false
        },
        {
          answer: 'd) nie ma takiego stopnia pomocy',
          isCorrect: true
        }
      ]
    },
    {
      question: '1058. I stopień pomocy w systemie SPOT obejmuje:',
      answers: [
        {
          answer: 'a) doradztwo na miejscu wypadku / awarii',
          isCorrect: false
        },
        {
          answer: 'b) doradztwo drogą telefoniczna przez specjalistę',
          isCorrect: true
        },
        {
          answer: 'c) pomoc bezpośrednio na miejscu zdarzenia przez jednostki ratownicze działające w ramach SPOT',
          isCorrect: false
        }
      ]
    },
    {
      question: '1059. II stopień pomocy w systemie SPOT obejmuje:',
      answers: [
        {
          answer: 'a) doradztwo na miejscu wypadku / awarii',
          isCorrect: true
        },
        {
          answer: 'b) doradztwo drogą telefoniczna przez specjalistę',
          isCorrect: false
        },
        {
          answer: 'c) pomoc bezpośrednio na miejscu zdarzenia przez jednostki ratownicze działające w ramach SPOT',
          isCorrect: false
        }
      ]
    },
    {
      question: '1060. III stopień pomocy w systemie SPOT obejmuje:',
      answers: [
        {
          answer: 'a) doradztwo na miejscu wypadku / awarii',
          isCorrect: false
        },
        {
          answer: 'b) doradztwo drogą telefoniczna przez specjalistę',
          isCorrect: false
        },
        {
          answer: 'c) pomoc bezpośrednio na miejscu zdarzenia przez jednostki ratownicze działające w ramach SPOT',
          isCorrect: true
        }
      ]
    },
    {
      question: '1061. I stopień pomocy w systemie SPOT może być uruchamiany:',
      answers: [
        {
          answer: 'a) przez SKKP',
          isCorrect: true
        },
        {
          answer: 'b) przez SKKW lub KCKRiOL',
          isCorrect: false
        },
        {
          answer: 'c) wyłącznie przez SKKW',
          isCorrect: false
        },
        {
          answer: 'd) wyłącznie przez KCKRiOL',
          isCorrect: false
        }
      ]
    },
    {
      question: '1062. II stopień pomocy w systemie SPOT może być uruchamiany:',
      answers: [
        {
          answer: 'a) przez SKKP',
          isCorrect: false
        },
        {
          answer: 'b) przez SKKW lub KCKRiOL',
          isCorrect: true
        },
        {
          answer: 'c) wyłącznie przez SKKW',
          isCorrect: false
        },
        {
          answer: 'd) wyłącznie przez KCKRiOL',
          isCorrect: false
        }
      ]
    },
    {
      question: '1063. II stopień pomocy w systemie SPOT może być uruchamiany:',
      answers: [
        {
          answer: 'a) przez SKKP',
          isCorrect: false
        },
        {
          answer: 'b) przez SKKW lub KCKRiOL',
          isCorrect: true
        },
        {
          answer: 'c) wyłącznie przez SKKW',
          isCorrect: false
        },
        {
          answer: 'd) wyłącznie przez KCKRiOL',
          isCorrect: false
        }
      ]
    },
    {
      question: '1064. Co oznacza skrót SPOT:',
      answers: [
        {
          answer: 'a) System Pomocy w Transporcie Materiałów Niebezpiecznych',
          isCorrect: true
        },
        {
          answer: 'b) System Pomocy dla Środków Transportu',
          isCorrect: false
        },
        {
          answer: 'c) System Pomocy w Transporcie Samochodowym',
          isCorrect: false
        }
      ]
    },
    {
      question: '1065. Uruchomienie którego ze stopni SPOT jest w pełni odpłatne:',
      answers: [
        {
          answer: 'a) I stopnia',
          isCorrect: false
        },
        {
          answer: 'b) II stopnia',
          isCorrect: false
        },
        {
          answer: 'c) III stopnia',
          isCorrect: true
        }
      ]
    }
  ],
};

const kpp: Test = {
  name: 'Recertyfikacja KPP',
  updatedAt: 1578524400000,
  route: 'kpp',
  description: 'Test na egzamin potwierdzający posiadanie tytułu ratownika',
  amounts: {
    all: 30,
    required: 27,
    timeForQuestion: 60000,
  },
  questions: [
    {
      question: '1. Jedną z przyczyn wstrząsu hipowolemicznego jest:',
      answers: [
        {
          answer: 'A. nagły spadek poziomu glukozy we krwi.',
          isCorrect: false
        },
        {
          answer: 'B. nagłe podniesienie poziomu glukozy we krwi.',
          isCorrect: false
        },
        {
          answer: 'C. chwilowa utrata przytomności.',
          isCorrect: false
        },
        {
          answer: 'D. spadek objętości krwi krążącej.',
          isCorrect: true
        },
        {
          answer: 'E. żadne z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '2. Osobę poszkodowaną zabezpieczamy przed wychłodzeniem folią „NRC". Należy ja ułożyć:',
      answers: [
        {
          answer: 'A. złotą stroną na zewnątrz.',
          isCorrect: false
        },
        {
          answer: 'B. srebrną stroną na zewnątrz.',
          isCorrect: false
        },
        {
          answer: 'C. kolor nie ma znaczenia.',
          isCorrect: false
        },
        {
          answer: 'D. najważniejsze jest dokładne owinięcie poszkodowanego folią.',
          isCorrect: false
        },
        {
          answer: 'E. Poprawne są C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '3. Pozycja przeciwwstrząsowa polega na ułożeniu poszkodowanego:',
      answers: [
        {
          answer: 'A. w pozycji bocznej ustalonej.',
          isCorrect: false
        },
        {
          answer: 'B. na wznak (na plecach), jeżeli brak cech urazów, można zastosować bierne uniesienie kończyn dolnych do 7min.',
          isCorrect: true
        },
        {
          answer: 'C. na wznak z uniesionymi kończynami dolnymi 30 cm do góry.',
          isCorrect: false
        },
        {
          answer: 'D. na wznak z uniesioną głową (wałek pod głowę).',
          isCorrect: false
        },
        {
          answer: 'E. w pozycji półsiedzącej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '4. Niepokój, szybki oddech, brak wyczuwalnego tętna na tętnicy promieniowej, nawrót kapilarny >2sek, bladość powłok skórnych, zimny pot. Te objawy mogą być oznaką:',
      answers: [
        {
          answer: 'A. udaru cieplnego.',
          isCorrect: false
        },
        {
          answer: 'B. śmierci klinicznej.',
          isCorrect: false
        },
        {
          answer: 'C. przegrzania.',
          isCorrect: false
        },
        {
          answer: 'D. wstrząsu.',
          isCorrect: true
        },
        {
          answer: 'E. żadne z wymienionych',
          isCorrect: false
        }
      ]
    },
    {
      question: '5. Czas nawrotu kapilarnego (CRT - capillary refill time).',
      answers: [
        {
          answer: 'A. < 2 sek. świadczy, że nie wystąpiła centralizacja krążenia.',
          isCorrect: false
        },
        {
          answer: 'B. > 2 sek. może być jedną z oznak wstrząsu.',
          isCorrect: false
        },
        {
          answer: 'C. przy wychłodzeniu nie jest wyznacznikiem stanu poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi B, C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '6. Będąc świadkiem napadu drgawek u chorego na ulicy należy:',
      answers: [
        {
          answer: 'A. wezwać natychmiast Zespół Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'B. przy pomocy długopisu rozchylić usta poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. przytrzymać całe ciało starając się wyhamować drgawki.',
          isCorrect: false
        },
        {
          answer: 'D. chronić głowę przed obrażeniami, następnie utrzymać drożność górnych dróg oddechowych.',
          isCorrect: true
        },
        {
          answer: 'E. nie dotykać pacjenta bo napad musi sam minąć.',
          isCorrect: false
        }
      ]
    },
    {
      question: '7. Wskaż zdanie fałszywe dotyczące napadu drgawkowego:',
      answers: [
        {
          answer: 'A. może wystąpić utrata przytomności z niepamięcią wsteczną.',
          isCorrect: false
        },
        {
          answer: 'B. najczęściej dochodzi do zagryzienia języka i należy włożyć patyk między zęby, by nie było krwawienia (nawet podczas drgawek należy próbować).',
          isCorrect: true
        },
        {
          answer: 'C. często bezwiednie następuje oddanie moczu.',
          isCorrect: false
        },
        {
          answer: 'D. podczas drgawek może dojść do urazów głowy.',
          isCorrect: false
        },
        {
          answer: 'E. drgawki i prężenia często obejmują całe ciało.',
          isCorrect: false
        }
      ]
    },
    {
      question: '8. Drgawki mogą występować przy:',
      answers: [
        {
          answer: 'A. urazie mózgowo-czaszkowym.',
          isCorrect: false
        },
        {
          answer: 'B. zatruciu, niedotlenieniu.',
          isCorrect: false
        },
        {
          answer: 'C. wysokiej temperaturze ciała, szczególnie u dzieci.',
          isCorrect: false
        },
        {
          answer: 'D. odwodnieniu, udarze cieplnym.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkich wymienionych.',
          isCorrect: true
        }
      ]
    },
    {
      question: '9. Wskaż zdanie prawdziwe dotyczące występowania śpiączki u chorego na cukrzycę:',
      answers: [
        {
          answer: 'A. może być spowodowana znacznym spadkiem glukozy we krwi.',
          isCorrect: false
        },
        {
          answer: 'B. występują zaburzenia świadomości aż do jej utraty.',
          isCorrect: false
        },
        {
          answer: 'C. może być spowodowana przedawkowaniem insuliny.',
          isCorrect: false
        },
        {
          answer: 'D. prawidłowe są odpowiedzi A, B.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '10. U osoby, która jest nieprzytomna, śpiączkę cukrzycową możesz podejrzewać na podstawie:',
      answers: [
        {
          answer: 'A.  obecności cukierków w kieszeni, bo to chroni przed „niedocukrzeniem".',
          isCorrect: false
        },
        {
          answer: 'B.  zapachu acetonu w wydychanym powietrzu.',
          isCorrect: false
        },
        {
          answer: 'C. suchości skóry i języka.',
          isCorrect: false
        },
        {
          answer: 'D.  pokłute opuszki palców.',
          isCorrect: false
        },
        {
          answer: 'E.  prawdziwe są odpowiedzi B, C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '11. Hipoglikemia to stan:',
      answers: [
        {
          answer: 'A. w którym może dojść do utraty przytomności.',
          isCorrect: false
        },
        {
          answer: 'B. charakteryzujący się niskim poziomem glukozy we krwi (znacznie poniżej normy).',
          isCorrect: false
        },
        {
          answer: 'C. mogą wystąpić następujące objawy: dezorientacja, bełkotliwa mowa, uczucie niepokoju, obfite pocenie się lub bladość powłok skórnych.',
          isCorrect: false
        },
        {
          answer: 'D. w którym jak najszybciej podasz insulinę.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '12. Wskaż prawdziwe stwierdzenie dotyczące powikłań dotyczących cukrzycy:',
      answers: [
        {
          answer: 'A. śpiączka cukrzycowa to stan, w którym może być znacznie podwyższone stężenie glukozy we krwi. (hiperglikemia)',
          isCorrect: false
        },
        {
          answer: 'B. śpiączka cukrzycowa to stan, w którym może być znacznie obniżone stężenie glukozy we krwi. (hipoglikemia)',
          isCorrect: false
        },
        {
          answer: 'C. hipoglikemia to stan bezpośredniego zagrożenia życia.',
          isCorrect: false
        },
        {
          answer: 'D. w hipoglikemii mogą wystąpić następujące objawy: dezorientacja, bełkotliwa mowa, uczucie niepokoju, obfite pocenie się lub bladość powłok skórnych.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie wymienione.',
          isCorrect: true
        }
      ]
    },
    {
      question: '13. Na przystanku autobusowym leży na brzuchu mężczyzna w wieku ok. 55 lat. Co robisz?',
      answers: [
        {
          answer: 'A. zapewne jest pijany i wzywasz policję.',
          isCorrect: false
        },
        {
          answer: 'B. układasz go w pozycji bocznej ustalonej, wzywasz policję.',
          isCorrect: false
        },
        {
          answer: 'C. sprawdzasz oznaki życia.',
          isCorrect: true
        },
        {
          answer: 'D. wsiadasz do autobusu bo nadjechał ten na który czekałeś.',
          isCorrect: false
        },
        {
          answer: 'E. pytasz czy jest w pobliżu lekarz.',
          isCorrect: false
        }
      ]
    },
    {
      question: '14. W autobusie siedzi mężczyzna, skarżący się na piekący ból w kl. piersiowej, jest blady i spocony, oddycha szybko. Jakie będzie Twoje działanie?',
      answers: [
        {
          answer: 'A. natychmiast wyprowadzisz go z autobusu i zaprowadzisz na postój taksówek by pojechał do szpitala.',
          isCorrect: false
        },
        {
          answer: 'B. nie pozwolisz mu wstać, rozepniesz koszulę, zapytasz: jak długo boli , czy leczy się na serce, wezwiesz pomoc, rozważysz ułożenie w pozycji przeciwwstrząsowej.',
          isCorrect: false
        },
        {
          answer: 'C. jeśli jest dostępna podasz mu aspirynę (160-300 mg).',
          isCorrect: false
        },
        {
          answer: 'D. nie należy podawać aspiryny dorosłym z bólem w klatce piersiowej niejasnego pochodzenia, uczulonym na lek lub przyjmującym go na stałe.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi B, C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '15. U osoby, która uskarżała się na ból w kl. piersiowej doszło w Twojej obecności do utraty przytomności i osunięcia na podłogę. Co robisz?',
      answers: [
        {
          answer: 'A. układasz osobę w pozycji bocznej ustalonej z utrzymaniem drożności dróg oddechowych i wzywasz pomoc.',
          isCorrect: false
        },
        {
          answer: 'B. układasz osobę na wznak z nogami uniesionymi około 30cm do góry i wzywasz pomoc.',
          isCorrect: false
        },
        {
          answer: 'C. sprawdzasz czy w kieszeni poszkodowany nie ma leków na serce by je podać.',
          isCorrect: false
        },
        {
          answer: 'D. udrażniasz drogi oddechowe i sprawdzasz obecność oddechu, podejmujesz uciśnięcia klatki piersiowej, jeśli jest brak oddechu.',
          isCorrect: true
        },
        {
          answer: 'E. po stwierdzeniu braku oddechu prowadzisz oddech zastępczy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '16. U nieprzytomnej osoby dorosłej brak oddechu stanowi podstawę do podjęcia resuscytacji w schemacie:',
      answers: [
        {
          answer: 'A. 2 wdechy, 15 uciśnięć kl. piersiowej.',
          isCorrect: false
        },
        {
          answer: 'B. 2 wdechy, 30 uciśnięć kl. piersiowej.',
          isCorrect: false
        },
        {
          answer: 'C. 15 uciśnięć kl. Piersiowej, 2 wdechy.',
          isCorrect: false
        },
        {
          answer: 'D. 30 uciśnięć kl. piersiowej, 2 wdechy.',
          isCorrect: true
        },
        {
          answer: 'E. dowolnym z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '17. Do często spotykanych objawów zawału mięśnia sercowego należą:',
      answers: [
        {
          answer: 'A. piekący lub kłujący ból w kl. piersiowej.',
          isCorrect: false
        },
        {
          answer: 'B. drętwienie lewej kończyny górnej.',
          isCorrect: false
        },
        {
          answer: 'C. uczucie lęku i osłabienia.',
          isCorrect: false
        },
        {
          answer: 'D. pobudzenie psychoruchowe.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '18. Częstym powikłaniem uciśnięć klatki piersiowej u osoby z zatrzymaniem oddechu i krążenia, jest:',
      answers: [
        {
          answer: 'A. uraz kręgosłupa.',
          isCorrect: false
        },
        {
          answer: 'B. niedowład kończyn dolnych.',
          isCorrect: false
        },
        {
          answer: 'C. złamanie żeber i mostka.',
          isCorrect: true
        },
        {
          answer: 'D. uszkodzenie naczyń w kl. piersiowej.',
          isCorrect: false
        },
        {
          answer: 'E. zaburzenia rytmu serca.',
          isCorrect: false
        }
      ]
    },
    {
      question: '19. Przy trudnościach w oddychaniu pacjenta przebywającego w strefie zadymienia należy:',
      answers: [
        {
          answer: 'A. podać tlen i posadzić poszkodowanego w pozycji półsiedzącej.',
          isCorrect: false
        },
        {
          answer: 'B. podać tlen i ewakuować ze strefy zadymienia.',
          isCorrect: false
        },
        {
          answer: 'C. wezwać pomoc do poszkodowanego i przystąpić do oceny stanu poszkodowanego w miejscu zdarzenia.',
          isCorrect: false
        },
        {
          answer: 'D. w miarę możliwości odizolować drogi oddechowe poszkodowanego od atmosfery toksycznej i ewakuować ze strefy zagrożenia',
          isCorrect: true
        },
        {
          answer: 'E. ułożyć w pozycji bezpiecznej i czekać na przybycie ratowników.',
          isCorrect: false
        }
      ]
    },
    {
      question: '20. Oddechu zastępczego metodą usta - usta nie wolno wykonywać gdy:',
      answers: [
        {
          answer: 'A. poszkodowany jest pijany.',
          isCorrect: false
        },
        {
          answer: 'B. poszkodowany jest chory na cukrzycę.',
          isCorrect: false
        },
        {
          answer: 'C. poszkodowany ma krótką szyję.',
          isCorrect: false
        },
        {
          answer: 'D. poszkodowany wypił środki ochrony roślin.',
          isCorrect: true
        },
        {
          answer: 'E. należy prowadzić oddech zastępczy z użyciem mokrej chusteczki.',
          isCorrect: false
        }
      ]
    },
    {
      question: '21. Przy podejrzeniu zatrucia cyjanowodorem poszkodowanego (możliwy wyczuwalny zapach gorzkich migdałów), który ma ślady wymiocin na ustach możemy:',
      answers: [
        {
          answer: 'A. wentylować metodą usta-usta jeśli nie ma innych możliwości.',
          isCorrect: false
        },
        {
          answer: 'B. wentylować tylko przy użyciu maski twarzowej.',
          isCorrect: false
        },
        {
          answer: 'C. zaniechać wentylacji metodą usta-usta jeżeli są opory natury estetycznej.',
          isCorrect: false
        },
        {
          answer: 'D. wentylować z użyciem nawilżonej wodą chusteczki.',
          isCorrect: false
        },
        {
          answer: 'E. wentylować go tylko przy użyciu worka samorozprężalnego.',
          isCorrect: true
        }
      ]
    },
    {
      question: '22. Najczęstszą przyczyną zgonu u osób, które uległy zatruciu substancjami wpływającymi na funkcjonowanie centralnego układu nerwowego jest:',
      answers: [
        {
          answer: 'A. działanie samej substancji trującej.',
          isCorrect: false
        },
        {
          answer: 'B. podawanie odtrutek przez osoby niewykwalifikowane.',
          isCorrect: false
        },
        {
          answer: 'C. utrata przytomności i niedrożność górnych dróg oddechowych.',
          isCorrect: true
        },
        {
          answer: 'D. zaburzenia świadomości i próby samobójcze.',
          isCorrect: false
        },
        {
          answer: 'E. żadne z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '23. W stosunku do osoby, która w wyniku zatrucia straciła przytomność podejmiesz następujące czynności:',
      answers: [
        {
          answer: 'A. podasz węgiel aktywowany jako odtrutkę i wezwiesz pomoc.',
          isCorrect: false
        },
        {
          answer: 'B. sprowokujesz wymioty i udasz się po pomoc.',
          isCorrect: false
        },
        {
          answer: 'C. zabezpieczysz substancję która została zażyta i udasz się po pomoc.',
          isCorrect: false
        },
        {
          answer: 'D. przy zachowanym oddechu, ułożysz poszkodowanego w pozycji bocznej bezpiecznej i wezwiesz pomoc.',
          isCorrect: true
        },
        {
          answer: 'E. wezwiesz pomoc by nie tracić czasu na zbędne działania.',
          isCorrect: false
        }
      ]
    },
    {
      question: '24. Wskaż prawidłową kolejność postępowania z osobą, która straciła przytomność podczas kąpieli w łazience w której jest piecyk gazowy: 1. wstrzymując oddech zamkniesz dopływ gazu i otworzysz okno w łazience. 2. ocenisz czynności życiowe. 3. wyniesiesz poszkodowanego poza strefę zagrożenia. 4. wezwiesz Zespół Ratownictwa Medycznego i straż pożarną następnie udzielisz pomocy w razie potrzeby. 5. opuścisz pomieszczenie by Tobie nic się nie stało i wezwiesz pomoc. Prawidłowa odpowiedź to: ',
      answers: [
        {
          answer: 'A. 5,4.',
          isCorrect: false
        },
        {
          answer: 'B. 3,2,4,1.',
          isCorrect: false
        },
        {
          answer: 'C. 3,4,5.',
          isCorrect: false
        },
        {
          answer: 'D. 1,2,3,4.',
          isCorrect: false
        },
        {
          answer: 'E. 3,2,4.',
          isCorrect: true
        }
      ]
    },
    {
      question: '25. Wskaż zdanie fałszywe dotyczące informacji o tlenku węgla:',
      answers: [
        {
          answer: 'A. łączy się z hemoglobiną 250-300 razy trwalej niż tlen.',
          isCorrect: false
        },
        {
          answer: 'B. ma charakterystyczny zapach i barwę.',
          isCorrect: true
        },
        {
          answer: 'C. jest lżejszy od powietrza.',
          isCorrect: false
        },
        {
          answer: 'D. potocznie nazywany jest czadem.',
          isCorrect: false
        },
        {
          answer: 'E. powstaje podczas spalania.',
          isCorrect: false
        }
      ]
    },
    {
      question: '26. Po wyjściu z kąpieli z łazienki w której jest piecyk gazowy, osoba zgłasza nudności oraz zawroty głowy, zaczyna wymiotować. Jakie jest Twoje postępowanie?',
      answers: [
        {
          answer: 'A. podejrzewasz, że za długo przebywała w gorącej kąpieli i polecasz jej odpoczynek w pokoju.',
          isCorrect: false
        },
        {
          answer: 'B. sądzisz, że zjadła „coś" co jej zaszkodziło.',
          isCorrect: false
        },
        {
          answer: 'C. podejrzewasz zatrucie gazami spalinowymi w łazience (CO).',
          isCorrect: true
        },
        {
          answer: 'D. uważasz że piła alkohol w łazience podczas kąpieli.',
          isCorrect: false
        },
        {
          answer: 'E. zabierasz na spacer by się „przewietrzyła".',
          isCorrect: false
        }
      ]
    },
    {
      question: '27. Pulsoksymetria jako metoda pomiarowa do czego jest wykorzystywana?',
      answers: [
        {
          answer: 'A. Jest to nieinwazyjna metoda przezskórnego oznaczania wysycenia krwi tlenem.',
          isCorrect: false
        },
        {
          answer: 'B. Jest to inwazyjna metoda żylnego oznaczania wysycenia krwi tlenem.',
          isCorrect: false
        },
        {
          answer: 'C. Jest to nieinwazyjna metoda przezskórnego oznaczania wysycenia krwi CO2.',
          isCorrect: false
        },
        {
          answer: 'D. Metoda ta pozwala na jednoczesną ocenę tętna.',
          isCorrect: false
        },
        {
          answer: 'E. Prawidłowe jest A i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '28. Osobie, która uległa podtopieniu, po wyjęciu z wody należy:',
      answers: [
        {
          answer: 'A. wylać wodę z dróg oddechowych poprzez odpowiednie ułożenie.',
          isCorrect: false
        },
        {
          answer: 'B. utrzymywać stabilizację kręgosłupa, gdyż najczęściej dochodzi do urazu w odcinku szyjnym.',
          isCorrect: false
        },
        {
          answer: 'C. okryć natychmiast folią życia chroniąc przed wychłodzeniem.',
          isCorrect: false
        },
        {
          answer: 'D. udrożnić drogi oddechowe i w przypadku braku oddechu wykonać 5 oddechów ratowniczych.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie prawdziwe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '29. Jednym z pierwszych objawów zatrucia tlenkiem węgla jest/są:',
      answers: [
        {
          answer: 'A. bóle brzucha.',
          isCorrect: false
        },
        {
          answer: 'B. zawroty głowy.',
          isCorrect: true
        },
        {
          answer: 'C. drapanie w gardle.',
          isCorrect: false
        },
        {
          answer: 'D. skoki temperatury.',
          isCorrect: false
        },
        {
          answer: 'E. swędzenie skóry.',
          isCorrect: false
        }
      ]
    },
    {
      question: '30. Osobie, która uległa podtopieniu, po wyjęciu z wody należy:',
      answers: [
        {
          answer: 'A. wylać wodę z dróg oddechowych poprzez odpowiednie ułożenie.',
          isCorrect: false
        },
        {
          answer: 'B. utrzymywać stabilizację kręgosłupa, gdyż najczęściej dochodzi do urazu w odcinku szyjnym.',
          isCorrect: false
        },
        {
          answer: 'C. okryć natychmiast folią życia chroniąc przed wychłodzeniem.',
          isCorrect: false
        },
        {
          answer: 'D. sprawdzić jamę ustną, następnie udrożnić drogi oddechowe i w przypadku braku oddechu wykonać 5 oddechów ratowniczych.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie prawdziwe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '31. Wskaż zdanie prawdziwe:',
      answers: [
        {
          answer: 'A. woda słona uszkadza drogi oddechowe i należy ją najpierw wylać z poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. woda słodka się nie wchłania i należy ja wylać z poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. przy utonięciu w wodzie morskiej rokowanie jest lepsze.',
          isCorrect: false
        },
        {
          answer: 'D. przy utonięciu w wodzie słodkiej rokowanie jest lepsze.',
          isCorrect: false
        },
        {
          answer: 'E. postępowanie z osobą podtopioną jest takie samo, niezależnie od rodzaju wody.',
          isCorrect: true
        }
      ]
    },
    {
      question: '32. Ratując osobę podtopioną w wodzie o niskiej temperaturze należy pamiętać że:',
      answers: [
        {
          answer: 'A. śmierć mózgu następuje szybciej w zimnej wodzie.',
          isCorrect: false
        },
        {
          answer: 'B. uciskanie kl. piersiowej i prowadzenie oddechu zastępczego jest mało efektywne z uwagi na wodę w płucach.',
          isCorrect: false
        },
        {
          answer: 'C. głowa nie powinna być odchylana z uwagi na możliwość zachłyśnięcia wypitą wodą.',
          isCorrect: false
        },
        {
          answer: 'D. uzyskanie powrotu czynności życiowych może wystąpić po kilkudziesięciu minutach resuscytacji.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie powyższe stwierdzenia są fałszywe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '33. W przypadku podtopienia prowadzenie oddechu zastępczego należy rozpocząć:',
      answers: [
        {
          answer: 'A. po 5 min od wyjęcia z wody by mogła się ona wchłonąć z płuc.',
          isCorrect: false
        },
        {
          answer: 'B. po wylaniu wody z dróg oddechowych.',
          isCorrect: false
        },
        {
          answer: 'C. po zapewnieniu stabilizacji kręgosłupa szyjnego.',
          isCorrect: false
        },
        {
          answer: 'D. najwcześniej jak jest to możliwe, w miarę możliwości jeszcze w wodzie.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie powyższe są fałszywe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '34. Stosując regułę „9" można ustalić, że oparzenie obejmujące obie kończyny dolne u osoby dorosłej stanowi następujący procent powierzchni całego ciała:',
      answers: [
        {
          answer: 'A. 18%.',
          isCorrect: false
        },
        {
          answer: 'B. 27%.',
          isCorrect: false
        },
        {
          answer: 'C. 30%.',
          isCorrect: false
        },
        {
          answer: 'D. 36%.',
          isCorrect: true
        },
        {
          answer: 'E. 45%.',
          isCorrect: false
        }
      ]
    },
    {
      question: '35. Powierzchnia dłoni u dorosłego (reguła dłoni) to:',
      answers: [
        {
          answer: 'A. 0,5% powierzchni całkowitej ciała..',
          isCorrect: false
        },
        {
          answer: 'B. 1% powierzchni całkowitej ciała.',
          isCorrect: true
        },
        {
          answer: 'C. 1,5% powierzchni całkowitej ciała.',
          isCorrect: false
        },
        {
          answer: 'D.  2% powierzchni całkowitej ciała.',
          isCorrect: false
        },
        {
          answer: 'E. 2,5% powierzchni całkowitej ciała.',
          isCorrect: false
        }
      ]
    },
    {
      question: '36. Przy oparzeniu parą wodną obu rąk należy:',
      answers: [
        {
          answer: 'A. wezwać pomoc i podawać środki przeciwbólowe.',
          isCorrect: false
        },
        {
          answer: 'B. pokryć powierzchnię mokrym, jałowym opatrunkiem.',
          isCorrect: false
        },
        {
          answer: 'C. schładzać aktywnie wodą co najmniej 10 min lub do ustania bólu i wezwać pomoc.',
          isCorrect: false
        },
        {
          answer: 'D. okryć folią „życia" w celu ochrony przed utratą ciepła.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe odpowiedzi to C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '37. Oparzenie ciężkie to:',
      answers: [
        {
          answer: 'A. oparzenie prądem elektrycznym.',
          isCorrect: false
        },
        {
          answer: 'B. oparzenie dróg oddechowych.',
          isCorrect: false
        },
        {
          answer: 'C. oparzenie II stopnia >25 % powierzchni ciała.',
          isCorrect: false
        },
        {
          answer: 'D. oparzenie III stopnia >10 % powierzchni ciała.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie wymienione.',
          isCorrect: true
        }
      ]
    },
    {
      question: '38. Wskaż pierwszą czynność przy poszkodowanym porażeniem prądem po odłączeniu źródła napięcia:',
      answers: [
        {
          answer: 'A. udrożnienie dróg oddechowych i uciski klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'B. ocena stanu świadomości i oddechu u poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'C. stabilizacja kręgosłupa szyjnego, udrożnienie dróg oddechowych i prowadzenie oddechu zastępczego.',
          isCorrect: false
        },
        {
          answer: 'D. nie podchodzimy i nie ruszamy poszkodowanego w obawie o pozostały ładunek elektryczny wokół poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z powyższych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '39. O oparzeniu dróg oddechowych i zatruciu wziewnym mogą świadczyć następujące objawy:',
      answers: [
        {
          answer: 'A. duszność, kaszel.',
          isCorrect: false
        },
        {
          answer: 'B. ślady sadzy na twarzy, w jamie ustnej i ślinie, opalone brwi i rzęsy.',
          isCorrect: false
        },
        {
          answer: 'C. charakter zdarzenia.',
          isCorrect: false
        },
        {
          answer: 'D. chrypka, świszczący oddech.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie wymienione.',
          isCorrect: true
        }
      ]
    },
    {
      question: '40. Jaka jest najpoważniejsza wczesna komplikacja porażenia prądem elektrycznym zmiennym?',
      answers: [
        {
          answer: 'A. zaburzenia rytmu serca.',
          isCorrect: true
        },
        {
          answer: 'B. uraz kręgosłupa szyjnego.',
          isCorrect: false
        },
        {
          answer: 'C. wstrząs hipowolemiczny.',
          isCorrect: false
        },
        {
          answer: 'D. niewydolność nerek.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '41. Brak odczuwania bólu w miejscu urazu, stwierdzisz przy oparzeniach:',
      answers: [
        {
          answer: 'A. I°.',
          isCorrect: false
        },
        {
          answer: 'B. II°.',
          isCorrect: false
        },
        {
          answer: 'C. III°.',
          isCorrect: true
        },
        {
          answer: 'D. chemicznym.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkich wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '42. Podczas prac budowlanych jeden z pracowników został ochlapany wapnem w okolicy twarzy. Wskaż poprawną kolejność postępowania: 1. opłukanie twarzy wodą w celu usunięcia substancji. 2. starcie suchą szmatką zaprawy z twarzy i okolicy oczu. 3. usunięcie poszkodowanego ze strefy zagrożenia. 4. delikatne przemywanie wodą, najlepiej mineralną. 5. zdecydowane przemywanie oczu bieżącym strumieniem wody Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1,2.',
          isCorrect: false
        },
        {
          answer: 'B. 3,2,4.',
          isCorrect: false
        },
        {
          answer: 'C. 3,2,5.',
          isCorrect: true
        },
        {
          answer: 'D. 4,1,2,3.',
          isCorrect: false
        },
        {
          answer: 'E. 3,5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '43. Wskaż prawidłową sekwencję postępowania z osobą nieprzytomną z objawami hipotermii: 1. przenieść do suchego, ciepłego pomieszczenia i zdjęcie mokrego ubrania. 2. podać ciepły napój najlepiej z alkoholem - działa rozgrzewająco. 3. kontrola podstawowych czynności życiowych. 4. zdecydowanymi ruchami rozcierać miejsca wychłodzone lub zalecić gimnastykę. 5. ułożyć w pozycji poziomej, ograniczyć ruch i ogrzewać biernie. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 2, 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 2, 5.',
          isCorrect: false
        },
        {
          answer: 'C. 3 ,4, 2.',
          isCorrect: false
        },
        {
          answer: 'D. 2, 4, 3.',
          isCorrect: false
        },
        {
          answer: 'E. 3, 1, 5.',
          isCorrect: true
        }
      ]
    },
    {
      question: '44. Podczas smażenia frytek doszło do ochlapania gorącym olejem całej dłoni. Skuteczne postępowanie polega na: 1. natychmiastowym odsunięciu poszkodowanego od naczynia z olejem; 2. ułożenie w pozycji bocznej ustalonej. 3. chłodzeniu ręki aktywnie bieżącą wodą co najmniej 10 min. lub do ustania bólu. 4. trzymaniu ręki w wiadrze z wodą; 5. polewaniu ręki alkoholem, bo świetnie odprowadza ciepło. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 3.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3.',
          isCorrect: true
        },
        {
          answer: 'C. 3, 5.',
          isCorrect: false
        },
        {
          answer: 'D. 4,5.',
          isCorrect: false
        },
        {
          answer: 'E. 1, 2, 4, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '45. Wskaż jaki procent powierzchni ciała stanowi powierzchnia głowy odpowiednio u osoby dorosłej i niemowlęcia (według reguły 9):',
      answers: [
        {
          answer: 'A. 18%, 16%.',
          isCorrect: false
        },
        {
          answer: 'B. 8%, 18%.',
          isCorrect: false
        },
        {
          answer: 'C. 9%, 18%.',
          isCorrect: true
        },
        {
          answer: 'D. 9%, 20%.',
          isCorrect: false
        },
        {
          answer: 'E. 10%, 20%.',
          isCorrect: false
        }
      ]
    },
    {
      question: '46. Podczas prac przeładunkowych jeden z pracowników został obsypany wapnem gaszonym. Wskaż prawidłowe postępowanie: 1. natychmiast polewasz wodą poszkodowanego. 2. usuwasz poszkodowanego w miejsce bezpieczne. 3. zdejmujesz odzież z poszkodowanego. 4. posypujesz piachem ubranego poszkodowanego- piach wchłania ług sodowy. 5. spłukujesz poszkodowanego bieżącą woda i wzywasz pomoc. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A.1,5,2.',
          isCorrect: false
        },
        {
          answer: 'B. 2,3,4.',
          isCorrect: false
        },
        {
          answer: 'C. 2,3,5.',
          isCorrect: true
        },
        {
          answer: 'D. 5,3,4.',
          isCorrect: false
        },
        {
          answer: 'E. 1,2,3,5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '47. Jesteś świadkiem wypadku samochodu-cysterny, na drogę wycieka płyn, który daje biało-żółty dym. Jakie działania podejmujesz? 1. natychmiast udajesz się do kabiny by wyciągnąć kierowcę z kabiny. 2. zabezpieczasz miejsce wypadku: zatrzymujesz pojazd w bezpiecznej odległości, zakładasz kamizelkę odblaskową, rozstawiasz trójkąt ostrzegawczy. 3. dzwonisz na 998 i podajesz informacje o zdarzeniu oraz numery z pomarańczowej tablicy informacyjnej z samochodu jeżeli są widoczne. 4. jak najszybciej oddalasz się z miejsca zdarzenia by nie ulec zatruciu. 5. w bezpiecznej odległości oczekujesz na przybycie służb ratowniczych. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 5, 2.',
          isCorrect: false
        },
        {
          answer: 'B. 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'C. 3, 2, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'D. 3, 2, 1.',
          isCorrect: false
        },
        {
          answer: 'E. 3, 2, 5.',
          isCorrect: true
        }
      ]
    },
    {
      question: '48. Po spożyciu przez poszkodowanego dużej ilości leków w celach samobójczych należy jak najszybciej:',
      answers: [
        {
          answer: 'A. zapytać poszkodowanego o powód i rozmawiać z nim by nie zasnął.',
          isCorrect: false
        },
        {
          answer: 'B. prowokować wymioty w celu eliminacji trucizny pod warunkiem, że jest przytomny, dbając by się nie zachłysnął.',
          isCorrect: true
        },
        {
          answer: 'C. zabezpieczyć pozostałe opakowania po środkach by przekazać je ratownikom.',
          isCorrect: false
        },
        {
          answer: 'D. wezwać Zespół Ratownictwa Medycznego i czekać na przyjazd.',
          isCorrect: false
        },
        {
          answer: 'E. wezwać policję.',
          isCorrect: false
        }
      ]
    },
    {
      question: '49. Osobę po spożyciu dużej ilości alkoholu należy:',
      answers: [
        {
          answer: 'A. chronić przed upadkiem, wychłodzeniem.',
          isCorrect: false
        },
        {
          answer: 'B. w przypadku utraty świadomości, ułożyć w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'C. prowokować wymioty w celu eliminacji alkoholu i zmniejszenie efektu toksycznego.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A, B, C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B.',
          isCorrect: true
        }
      ]
    },
    {
      question: '50. Czy jest różnica w postępowaniu z osobą oparzoną silnym kwasem lub silną zasadą? (w postępowaniu na poziomie kwalifikowanej pierwszej pomocy)',
      answers: [
        {
          answer: 'A. nie ma różnicy, w obu przypadkach musimy najpierw zobojętnić substancję żrącą.',
          isCorrect: false
        },
        {
          answer: 'B. przy oparzeniu kwasem mamy więcej czasu na podjęcie działań.',
          isCorrect: false
        },
        {
          answer: 'C. zasada jest mniej groźna.',
          isCorrect: false
        },
        {
          answer: 'D. postępowanie w obu przypadkach jest takie samo.',
          isCorrect: true
        },
        {
          answer: 'E. wszystko zależy od stężenia substancji żrącej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '51. Oparzenie I° charakteryzuje się:',
      answers: [
        {
          answer: 'A. pęcherzami z płynem surowiczym.',
          isCorrect: false
        },
        {
          answer: 'B. piekącym, swędzącym rumieniem na skórze, bólem przy dotyku.',
          isCorrect: true
        },
        {
          answer: 'C. brakiem czucia.',
          isCorrect: false
        },
        {
          answer: 'D. wszystkimi wymienionymi cechami.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '52. Oparzenie II° charakteryzuje się:',
      answers: [
        {
          answer: 'A. piekącym, rumieniem na skórze, bólem przy dotyku.',
          isCorrect: false
        },
        {
          answer: 'B. martwicą tkanek, brakiem czucia.',
          isCorrect: false
        },
        {
          answer: 'C. pęcherzami wypełnionymi płynem surowiczym na podłożu rumieniowym.',
          isCorrect: false
        },
        {
          answer: 'D. dużym bólem w miejscu oparzenia.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '53. Oparzenie III° charakteryzuje się:',
      answers: [
        {
          answer: 'A. brakiem czucia dotyku i bólu w miejscu oparzenia.',
          isCorrect: false
        },
        {
          answer: 'B. uszkodzeniem wszystkich warstw skóry.',
          isCorrect: false
        },
        {
          answer: 'C. pęcherzami na zaczerwienionej skórze i wyciekiem płynu z pęcherzy.',
          isCorrect: false
        },
        {
          answer: 'D. wszystkimi wymienionymi cechami.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B.',
          isCorrect: true
        }
      ]
    },
    {
      question: '54. Hipertermia to stan w którym występuje: ',
      answers: [
        {
          answer: 'A. podwyższona temperatura ciała.',
          isCorrect: false
        },
        {
          answer: 'B. obniżona temperatura ciała.',
          isCorrect: false
        },
        {
          answer: 'C. temperatura ciała nie ulega zmianie.',
          isCorrect: false
        },
        {
          answer: 'D. należy podjąć działania zmierzające do ochłodzenia organizmu.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '55. Na wycieczce w lesie doszło do ukąszenia przez żmiję jednego z uczestników. Należy natychmiast:',
      answers: [
        {
          answer: 'A. naciąć nożem ranę i wyssać krew.',
          isCorrect: false
        },
        {
          answer: 'B. wycisnąć jad razem z krwią.',
          isCorrect: false
        },
        {
          answer: 'C. założyć opatrunek osłonowy i udać się do szpitala z poszkodowanym.',
          isCorrect: true
        },
        {
          answer: 'D. wszystkie odpowiedzi są poprawne i możliwe do zastosowania.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i B. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '56. 5 letnie dziecko w trakcie zabawy w ogrodzie zostało ukąszone wielokrotnie przez pszczoły. Należy natychmiast:',
      answers: [
        {
          answer: 'A. jeżeli występują objawy ostrej anafilaksji należy podać 0,3 mg adrenaliny (ampułkostrzykawka) domięśniowo.',
          isCorrect: false
        },
        {
          answer: 'B. wezwać pomoc.',
          isCorrect: false
        },
        {
          answer: 'C. przenieść dziecko w miejsce bezpieczne, w miarę możliwości usunąć pozostałe żądła.',
          isCorrect: false
        },
        {
          answer: 'D. wezwać pomoc, obserwować oddech, uspokoić dziecko.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi C, D, A.',
          isCorrect: true
        }
      ]
    },
    {
      question: '57.  Hipoksja to stan w którym:',
      answers: [
        {
          answer: 'A. występuje nadmiar tlenu w tkankach w stosunku do zapotrzebowania, prowadzący do hiperwentylacji.',
          isCorrect: false
        },
        {
          answer: 'B. następuje spadek ciśnienia wywołany zmianą pozycji ciała.',
          isCorrect: false
        },
        {
          answer: 'C. występuje niedobór tlenu w tkankach w stosunku do zapotrzebowania, prowadzący do niedotlenienia organizmu',
          isCorrect: true
        },
        {
          answer: 'D. następuje wzrost ciśnienia wywołany zmianą pozycji ciała.',
          isCorrect: false
        },
        {
          answer: 'E.  prawidłowe są odpowiedzi A i B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '58. Hipotonia ortostatyczna to stan w którym:',
      answers: [
        {
          answer: 'A. następuje spadek ciśnienia wywołany zmianą pozycji ciała.',
          isCorrect: true
        },
        {
          answer: 'B. następuje wzrost ciśnienia wywołany zmianą pozycji ciała.  ',
          isCorrect: false
        },
        {
          answer: 'C. występuje niedobór tlenu w tkankach w stosunku do zapotrzebowania, prowadzący do niedotlenienia organizmu',
          isCorrect: false
        },
        {
          answer: 'D. występuje nadmiar tlenu w tkankach w stosunku do zapotrzebowania, prowadzący do hiperwentylacji.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '59. W masywnych krwotokach (duża utrata krwi w krótkim czasie), w pierwszej fazie spodziewamy się u poszkodowanego: 1. zaburzeń świadomości; 2. przyśpieszonego tętna; 3. zaczerwienienia skóry; 4. sinicy twarzy. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 2, 3.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3.',
          isCorrect: false
        },
        {
          answer: 'C. 1, 2.',
          isCorrect: true
        },
        {
          answer: 'D. 1, 4.',
          isCorrect: false
        },
        {
          answer: 'E. 2, 4.',
          isCorrect: false
        }
      ]
    },
    {
      question: '60. Przy oparzeniach elektrycznych najbardziej zagrażające dla poszkodowanego są:',
      answers: [
        {
          answer: 'A. skutki miejscowe, jak np. oparzenie dłoni.',
          isCorrect: false
        },
        {
          answer: 'B. zaburzenia rytmu serca',
          isCorrect: true
        },
        {
          answer: 'C. niekorzystne działanie prądu na skórę (późniejsze blizny).',
          isCorrect: false
        },
        {
          answer: 'D. wpływ prądu elektrycznego na potencjały mózgowe.',
          isCorrect: false
        },
        {
          answer: 'E. żadne z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '61. Przy oparzeniach termicznych dłoni istotnymi elementami działań ratowniczych są: 1. schładzanie bieżącą wodą co najmniej 10 min. lub do ustąpienia bólu lub zastosowanie hydrożelu bezpośrednio na oparzenie. 2. zdjęcie biżuterii z palców i nadgarstków. 3. okrycie rany oparzeniowej po schłodzeniu suchym jałowym opatrunkiem. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1,3.',
          isCorrect: false
        },
        {
          answer: 'B. 1,2.',
          isCorrect: false
        },
        {
          answer: 'C. 2,3.',
          isCorrect: false
        },
        {
          answer: 'D. wszystkie wymienione.',
          isCorrect: true
        },
        {
          answer: 'E. tylko 1.',
          isCorrect: false
        }
      ]
    },
    {
      question: '62. U nieprzytomnego poszkodowanego, po upadku ze schodów, bez krwotoków zewnętrznych, z widocznym powierzchniowym otarciem skóry głowy, z zachowanym własnym oddechem i tętnem, działania pilne należy wykonać w następującej kolejności: 1. tlenoterapia (jeżeli są wskazania). 2. odkażenie rany. 3. ręczna stabilizacja kręgosłupa szyjnego, ocena oddechu. 4. ułożenie w pozycji przeciwwstrząsowej. 5. założenie opatrunku osłaniającego. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A 3,1.',
          isCorrect: true
        },
        {
          answer: 'B. 1,4.',
          isCorrect: false
        },
        {
          answer: 'C. 1,2,3.',
          isCorrect: false
        },
        {
          answer: 'D. 2,3,5.',
          isCorrect: false
        },
        {
          answer: 'E. 1,2,3,4.',
          isCorrect: false
        }
      ]
    },
    {
      question: '63. Spośród niżej wymienionych czynności ratowniczych, wskaż priorytetowe:',
      answers: [
        {
          answer: 'A. opatrzenie rany oparzeniowej.',
          isCorrect: false
        },
        {
          answer: 'B. udrożnienie dróg oddechowych.',
          isCorrect: false
        },
        {
          answer: 'C. unieruchomienie złamanej kończyny.',
          isCorrect: false
        },
        {
          answer: 'D. zatamowanie krwotoku.',
          isCorrect: false
        },
        {
          answer: 'E. czynności ujęte w punktach D i B mają zawsze pierwszeństwo przed innymi działaniami.',
          isCorrect: true
        }
      ]
    },
    {
      question: '64. Ranę kłutą klatki piersiowej na miejscu zdarzenia zaopatrzysz:',
      answers: [
        {
          answer: 'A. pozostawić bez opatrunku lub opatrunkiem nieokluzyjnym.',
          isCorrect: false
        },
        {
          answer: 'B. opatrunkiem z folii, szczelnie przymocowanym do klatki piersiowej ze wszystkich stron.',
          isCorrect: false
        },
        {
          answer: 'C. pozostawiasz bez zaopatrzenia ze względu na niebezpieczeństwo braku przepływu powietrza w drogach oddechowych poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. opatrunkiem zastawkowym.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe odpowiedzi A, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '65. W krwotoku tętniczym przedramienia, który nie zmniejsza się po zaopatrzeniu opatrunkiem uciskowym założonym w miejscu krwawienia, należy rozważyć następujące postępowanie: 1. ułożenie poszkodowanego płasko oraz umieszczenie kończyny powyżej poziomu serca. 2. wzmocnienie ucisku poprzez owinięcie opatrunku dodatkowymi zwojami bandaża. 3. zdjęcie już założonego opatrunku i ponowne założenie grubszego opatrunku. 4. założenie opaski zaciskowej na przedramieniu 5-7 cm powyżej miejsca krwawienia. 5. założenie drugiej opaski zaciskowej na ramieniu jeżeli pierwsza jest nieskuteczna. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1,3,5.',
          isCorrect: false
        },
        {
          answer: 'B. 1,2,4.',
          isCorrect: false
        },
        {
          answer: 'C. 1,2,4,5.',
          isCorrect: true
        },
        {
          answer: 'D. 1,3,4.',
          isCorrect: false
        },
        {
          answer: 'E. 1,2,3,4,5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '66. Podawanie tlenu poszkodowanemu jest w określonych sytuacjach bezwzględnie konieczne. Spośród niżej przedstawionych wersji wybierz właściwą: 1. tlen podawać można tylko poszkodowanemu, znajdującemu się w pozycji leżącej. 2. podawanie tlenu jest podstawowym działaniem w zatruciach wziewnych. 3. aby uzyskać ok. 100% stężenie tlenu podawanego dorosłemu przez maskę do tlenoterapii należy zastosować przepływ minimum 6 litrów na minutę. 4. tlen jest szkodliwy przy dłuższym stosowaniu. 5. zestaw do tlenoterapii biernej powinien posiadać rezerwuar. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 2, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2, 4.',
          isCorrect: false
        },
        {
          answer: 'C. 2, 4, 5.',
          isCorrect: true
        },
        {
          answer: 'D. 1, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 1, 3, 4',
          isCorrect: false
        }
      ]
    },
    {
      question: '67. U poszkodowanego w wyniku wypadku, stwierdzono szereg obrażeń i objawów. Zaznacz, który objaw (lub grupa objawów), albo obrażenie Twoim zdaniem jest najbardziej niepokojący i może wskazywać na potencjalne zagrożenie życia poszkodowanego:',
      answers: [
        {
          answer: 'A. złamanie kończyny górnej ze znacznym przemieszczeniem.',
          isCorrect: false
        },
        {
          answer: 'B. oparzenie II stopnia okolicy podudzia.',
          isCorrect: false
        },
        {
          answer: 'C. rana szarpana dłoni z niewielkim, powolnym wyciekiem krwi.',
          isCorrect: false
        },
        {
          answer: 'D. blada, chłodna i spocona skóra.',
          isCorrect: true
        },
        {
          answer: 'E. złamanie otwarte podudzia lewego bez krwotoku.',
          isCorrect: false
        }
      ]
    },
    {
      question: '68. Wyciek płynu mózgowo-rdzeniowego i/lub krwawienie z uszu u poszkodowanego po urazie:',
      answers: [
        {
          answer: 'A. może grozić rozwinięciem wstrząsu.',
          isCorrect: false
        },
        {
          answer: 'B. świadczyć może o złamaniu podstawy czaszki.',
          isCorrect: false
        },
        {
          answer: 'C. wymaga założenia jałowego tamponu do ucha.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A i B.',
          isCorrect: true
        }
      ]
    },
    {
      question: '69. Krwotok tętniczy zaopatrujemy w pierwszej kolejności :',
      answers: [
        {
          answer: 'A. opaską zaciskową poniżej miejsca zranienia.',
          isCorrect: false
        },
        {
          answer: 'B. opaską zaciskową powyżej miejsca zranienia.',
          isCorrect: false
        },
        {
          answer: 'C. opatrunkiem uciskowym w miejscu zranienia.',
          isCorrect: false
        },
        {
          answer: 'D. szczelnym opatrunkiem osłaniającym.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi C i/lub B.',
          isCorrect: true
        }
      ]
    },
    {
      question: '70. W przypadku krwotoku u poszkodowanego w pierwszej fazie występują pewne charakterystyczne objawy. Wskaż, który z niżej wymienionych objawów raczej nie wystąpi u takiego poszkodowanego:',
      answers: [
        {
          answer: 'A. przyspieszone tętno',
          isCorrect: false
        },
        {
          answer: 'B. przyspieszony i spłycony oddech.',
          isCorrect: false
        },
        {
          answer: 'C. odczuwalne wzmożone pragnienie.',
          isCorrect: false
        },
        {
          answer: 'D. zwolniona czynność serca.',
          isCorrect: true
        },
        {
          answer: 'E. uczucie zimna.',
          isCorrect: false
        }
      ]
    },
    {
      question: '71. W trakcie udzielania pomocy w przypadku oparzenia, miejsce urazu należy schłodzić bieżącą wodą lub użyć opatrunku hydrożelowego. Zaletami zastosowania opatrunku hydrożelowego są:',
      answers: [
        {
          answer: 'A. zmniejsza uczucie bólu.',
          isCorrect: false
        },
        {
          answer: 'B. opatrunek nie przywiera do rany.',
          isCorrect: false
        },
        {
          answer: 'C. zmniejsza znacznie ryzyko wystąpienia hipotermii spowodowanej schładzaniem.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i B.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '72. W wyniku zdarzenia drogowego poszkodowany leży na ulicy. Stwierdzasz ranę tłuczoną głowy, złamanie kości obu podudzi na tej samej wysokości oraz stłuczenie barku. Jeden ze stojących obok samochodów ma zbitą przednią szybę i wgniecioną maskę. Najbardziej prawdopodobną przyczyną doznanych obrażeń jest:',
      answers: [
        {
          answer: 'A. wypadnięcie poszkodowanego z jadącego samochodu.',
          isCorrect: false
        },
        {
          answer: 'B. zgniecenie samochodu, w którym znajdował się poszkodowany.',
          isCorrect: false
        },
        {
          answer: 'C. potrącenie poszkodowanego przez ten samochód osobowy.',
          isCorrect: true
        },
        {
          answer: 'D. na podstawie takiego obrazu nie można przypuszczać jaki był mechanizm urazu.',
          isCorrect: false
        },
        {
          answer: 'E. analiza przyczyn obrażeń nie ma znaczenia.',
          isCorrect: false
        }
      ]
    },
    {
      question: '73. Najdogodniejszą pozycją dla poszkodowanych po urazie brzucha jest pozycja:',
      answers: [
        {
          answer: 'A. leżąca z nogami zgiętymi w stawach biodrowych i kolanowych.',
          isCorrect: true
        },
        {
          answer: 'B. półsiedząca.',
          isCorrect: false
        },
        {
          answer: 'C. boczna bezpieczna.',
          isCorrect: false
        },
        {
          answer: 'D. leżąca na brzuchu, z nogami wyprostowanymi.',
          isCorrect: false
        },
        {
          answer: 'E. przeciwwstrząsowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '74. U poszkodowanego po urazie głowy z ucha wycieka powoli różowo podbarwiony płyn. Podaj właściwy sposób postępowania:',
      answers: [
        {
          answer: 'A. stan taki nie wymaga na miejscu zdarzenia żadnych szczególnych działań ratowniczych, gdyż wyciek ustaje po kilku minutach.',
          isCorrect: false
        },
        {
          answer: 'B. należy wykonać opatrunek osłaniający z gazy jałowej i codofixu.',
          isCorrect: true
        },
        {
          answer: 'C. należy wykonać opatrunek uciskowy z gazy jałowej z użyciem bandaża elastycznego.',
          isCorrect: false
        },
        {
          answer: 'D. należy do przewodu słuchowego włożyć szczelny tampon z gazy jałowej, aby zapobiec dalszemu wyciekowi.',
          isCorrect: false
        },
        {
          answer: 'E. żaden z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '75. Krwotok tętniczy można próbować odróżnić od żylnego na podstawie:',
      answers: [
        {
          answer: 'A. intensywności wypływu krwi.',
          isCorrect: false
        },
        {
          answer: 'B. większej bolesności przy krwawieniu.',
          isCorrect: false
        },
        {
          answer: 'C. różnicy koloru wypływającej krwi.',
          isCorrect: false
        },
        {
          answer: 'D. krwotok tętniczy ma zazwyczaj charakter tętniący.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '76. Poszkodowany siedzi w rozbitym samochodzie, jest blady, spocony, ma przyśpieszony oddech, złamania zamknięte obu kończyn dolnych na różnych wysokościach oraz zaburzenia świadomości. Podaj prawidłowy sposób postępowania przed przybyciem Zespołu Ratownictwa Medycznego:',
      answers: [
        {
          answer: 'A. w pierwszej kolejności należy unieruchomić złamania, później wykonywać dalsze czynności.',
          isCorrect: false
        },
        {
          answer: 'B. należy podać poszkodowanemu tlen i zaczekać z dalszym działaniem na przybycie lekarza.',
          isCorrect: false
        },
        {
          answer: 'C. należy pilnie ewakuować poszkodowanego z pojazdu, bo pozycja, w jakiej się znajduje stanowi dla niego zagrożenie, a następnie wykonywać dalsze, określone rodzajem obrażeń procedury ratownicze.',
          isCorrect: false
        },
        {
          answer: 'D.  jeżeli pilna ewakuacja z pojazdu jest niemożliwa, należy dążyć do ułożenia w pozycji przeciwwstrząsowej w pojeździe.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi C i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '77. Wskaż prawidłową kolejność postępowania z poszkodowanym po urazie w wyniku wypadku samochodowego:',
      answers: [
        {
          answer: 'A. pilne unieruchomienie złamań, zatamowanie krwotoku, zapewnienie komfortu termicznego.',
          isCorrect: false
        },
        {
          answer: 'B. zabezpieczenie miejsca zdarzenia, dotarcie do poszkodowanego, udzielenie pomocy.',
          isCorrect: true
        },
        {
          answer: 'C. zabezpieczenie miejsca zdarzenia, unieruchomienie złamań, podanie tlenu.',
          isCorrect: false
        },
        {
          answer: 'D. stabilizacja głowy przy pomocy kołnierza ortopedycznego, tamowanie krwotoku, unieruchomienie złamań.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie wymienione są nieprawidłowe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '78. Kołnierz ortopedyczny służy do:',
      answers: [
        {
          answer: 'A. ograniczenia ruchomości odcinka szyjnego kręgosłupa.',
          isCorrect: true
        },
        {
          answer: 'B. usztywnienia kręgosłupa szyjnego.',
          isCorrect: false
        },
        {
          answer: 'C. unieruchomienia głowy.',
          isCorrect: false
        },
        {
          answer: 'D. unieruchomienia głowy tylko na czas ewakuacji.',
          isCorrect: false
        },
        {
          answer: 'E. żadnego z wymienionych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '79. U poszkodowanego z rozległą raną powłok i obrażeniami narządów jamy brzusznej ratownik powinien:',
      answers: [
        {
          answer: 'A. podać doustnie ogrzane, niesłodzone płyny celem zmniejszenia utraty ciepła.',
          isCorrect: false
        },
        {
          answer: 'B. założyć wilgotny opatrunek osłaniający przykryty szczelnie folią.',
          isCorrect: true
        },
        {
          answer: 'C. założyć opatrunek uciskowy przykryty folią termoizolacyjną.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '80. Spośród wymienionych czynności, do zakresu kwalifikowanej pierwszej pomocy medycznej udzielanej przez ratowników, nie należy:',
      answers: [
        {
          answer: 'A. wykonywanie resuscytacji krążeniowo oddechowej (RKO).',
          isCorrect: false
        },
        {
          answer: 'B. podejmowanie decyzji o transporcie poszkodowanych do ośrodków leczniczych.',
          isCorrect: true
        },
        {
          answer: 'C. tamowanie krwotoków.',
          isCorrect: false
        },
        {
          answer: 'D. udrożnienie dróg oddechowych z użyciem rurki ustno-gardłowej lub maski krtaniowej.',
          isCorrect: false
        },
        {
          answer: 'E. zapewnienie komfortu cieplnego.',
          isCorrect: false
        }
      ]
    },
    {
      question: '81. W masywnych krwotokach (duża utrata krwi w krótkim czasie) w pierwszej fazie, spodziewamy się u poszkodowanego:',
      answers: [
        {
          answer: 'A. zaburzeń świadomości.',
          isCorrect: false
        },
        {
          answer: 'B. przyspieszonego tętna.',
          isCorrect: false
        },
        {
          answer: 'C. zaczerwienienia skóry.',
          isCorrect: false
        },
        {
          answer: 'D. bladości skóry.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '82. W złamaniu otwartym kości udowej, któremu towarzyszy krwotok tętniczy, priorytetem ratowniczym jest:',
      answers: [
        {
          answer: 'A. zatamowanie krwotoku, w razie potrzeby przez ucisk na tętnicę powyżej miejsca złamania.',
          isCorrect: true
        },
        {
          answer: 'B. ułożenie odłamów w pozycji zbliżonej do fizjologicznej dla stworzenia warunków dla zastosowania opatrunku uciskowego.',
          isCorrect: false
        },
        {
          answer: 'C. założenie opatrunku osłaniającego i stabilizacja w pozycji zbliżonej do fizjologicznej.',
          isCorrect: false
        },
        {
          answer: 'D. stabilizacja i unieruchomienie w pozycji zastanej oraz opatrunek uciskowy.',
          isCorrect: false
        },
        {
          answer: 'E. tlenoterapia 100% tlenem ',
          isCorrect: false
        }
      ]
    },
    {
      question: '83. Poszkodowanemu w hipotermii należy zapewnić pozycję:',
      answers: [
        {
          answer: 'A. poziomą.',
          isCorrect: true
        },
        {
          answer: 'B. półsiedzącą.',
          isCorrect: false
        },
        {
          answer: 'C. przeciwwstrząsową.',
          isCorrect: false
        },
        {
          answer: 'D. boczną bezpieczną.',
          isCorrect: false
        },
        {
          answer: 'E. pozycja nie ma znaczenia.',
          isCorrect: false
        }
      ]
    },
    {
      question: '84. W razie zwichnięcia stawu należy:',
      answers: [
        {
          answer: 'A. nakazać delikatne ruchy czynne, po kilkunastu minutach ból ustąpi.',
          isCorrect: false
        },
        {
          answer: 'B. nastawić zwichnięcie, podciągając w osi kończyny, staw rozmasować.',
          isCorrect: false
        },
        {
          answer: 'C. unieruchomić staw w pozycji fizjologicznej.',
          isCorrect: false
        },
        {
          answer: 'D. unieruchomić staw w pozycji zastanej.',
          isCorrect: true
        },
        {
          answer: 'E. dla zmniejszenia obrzęku zastosować opatrunek z bandaża elastycznego.',
          isCorrect: false
        }
      ]
    },
    {
      question: '85. W przypadku braku szyn Kramera, jedną z możliwych alternatyw zabezpieczenia złamanego podudzia będzie:',
      answers: [
        {
          answer: 'A. pozostawiamy bez zaopatrzenia.',
          isCorrect: false
        },
        {
          answer: 'B. unieruchamiamy w pozycji zastanej przy użyciu kija, deski itp. sprzętu przygodnego.',
          isCorrect: false
        },
        {
          answer: 'C. owijamy ściśle bandażem elastycznym.',
          isCorrect: false
        },
        {
          answer: 'D. mocujemy do drugiej kończyny.',
          isCorrect: false
        },
        {
          answer: 'E. mocujemy do drugiej kończyny przy użyciu przekładki pomiędzy nimi.',
          isCorrect: true
        }
      ]
    },
    {
      question: '86. Uszkodzoną kończynę górną możesz unieruchomić:',
      answers: [
        {
          answer: 'A. szyną Kramera.',
          isCorrect: false
        },
        {
          answer: 'B. na chuście trójkątnej.',
          isCorrect: false
        },
        {
          answer: 'C. przez przybandażowanie kończyny do klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. przy użyciu sprzętu przygodnego.',
          isCorrect: false
        },
        {
          answer: 'E. każdą z wymienionych metod.',
          isCorrect: true
        }
      ]
    },
    {
      question: '87. Leżącego poszkodowanego po urazie kręgosłupa ratownik wyposażony w sprzęt medyczny:',
      answers: [
        {
          answer: 'A. powinien zawsze ułożyć w pozycji bezpiecznej (bocznej ustalonej), gdyż zabezpiecza ona przed dalszymi urazami.',
          isCorrect: false
        },
        {
          answer: 'B. powinien zawsze ułożyć na plecach na miękkim podłożu.',
          isCorrect: false
        },
        {
          answer: 'C. powinien zawsze ułożyć na plecach, założyć kołnierz szyjny i uważać, aby przy przenoszeniu nie powodować zmian pozycji w osi kręgosłupa.',
          isCorrect: false
        },
        {
          answer: 'D. powinien, po założeniu kołnierza ortopedycznego, niezwłocznie doprowadzić do pozycji siedzącej w celu stabilizacji grawitacyjnej.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie powyższe są fałszywe.',
          isCorrect: true
        }
      ]
    },
    {
      question: '88. Podejrzewasz uraz kręgosłupa w przypadku, gdy:',
      answers: [
        {
          answer: 'A. wypadkowi komunikacyjnemu towarzyszy złamanie kończyny dolnej.',
          isCorrect: false
        },
        {
          answer: 'B. wypadkowi komunikacyjnemu towarzyszy uraz głowy.',
          isCorrect: false,
        },
        {
          answer: 'C. masz do czynienia z upadkiem z wysokości.',
          isCorrect: false,
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '89. Opatrunek uciskowy stosuje się:',
      answers: [
        {
          answer: 'A. w przypadku krwotoków zewnętrznych.',
          isCorrect: true
        },
        {
          answer: 'B. w przypadku krwotoków wewnętrznych.',
          isCorrect: false
        },
        {
          answer: 'C. jedynie w przypadku krwotoków żylnych.',
          isCorrect: false
        },
        {
          answer: 'D. jedynie w przypadku krwotoków z kończyn',
          isCorrect: false
        },
        {
          answer: 'E. jednocześnie z opaską zaciskową.',
          isCorrect: false
        }
      ]
    },
    {
      question: '90. W przypadku rozpoznania wstrząsu hipowolemicznego postępowanie przeciwwstrząsowe obejmuje:',
      answers: [
        {
          answer: 'A. ułożenie w pozycji przeciwwstrząsowej.',
          isCorrect: false
        },
        {
          answer: 'B. tlenoterapia.',
          isCorrect: false
        },
        {
          answer: 'C. wsparcie psychiczne.',
          isCorrect: false
        },
        {
          answer: 'D. zapewnienie komfortu termicznego.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe jest postępowanie wskazane w odpowiedziach A, B, C, i D, po wcześniejszym zatamowaniu krwawienia zewnętrznego (jeżeli występuje).',
          isCorrect: true
        }
      ]
    },
    {
      question: '91. W postępowaniu przeciwwstrząsowym najważniejsze jest:',
      answers: [
        {
          answer: 'A. wspomaganie psychiczne.',
          isCorrect: false
        },
        {
          answer: 'B. termoizolacja.',
          isCorrect: false
        },
        {
          answer: 'C. ułożenie w pozycji przeciwwstrząsowej.',
          isCorrect: true
        },
        {
          answer: 'D. tlenoterapia.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie wymienione są jednakowo ważne.',
          isCorrect: false
        }
      ]
    },
    {
      question: '92. Podczas ewakuacji poszkodowanego na noszach - desce, powinny być spełnione określone warunki. Wskaż wśród niżej wymienionych stwierdzeń błędne:',
      answers: [
        {
          answer: 'A. przed jakimkolwiek przemieszczeniem poszkodowanego na desce, należy zapiąć 4 pasy mocujące.',
          isCorrect: false
        },
        {
          answer: 'B. przenosić poszkodowanego należy - w miarę możliwości - nogami w kierunku marszu.',
          isCorrect: false
        },
        {
          answer: 'C. dla unieruchomienia głowy poszkodowanego w trakcie takiej ewakuacji wystarczy jedynie kołnierz ortopedyczny.',
          isCorrect: false
        },
        {
          answer: 'D. należy unikać kolejnego przekładania poszkodowanego na nosze karetki pogotowia; zgodnie z „zasadą jednych noszy".',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe odpowiedzi to: A, C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '93. Poszkodowanego w wypadku drogowym ewakuuje się z wnętrza pojazdu, gdy:',
      answers: [
        {
          answer: 'A. dowódca wyda polecenie.',
          isCorrect: false
        },
        {
          answer: 'B. występuje konieczność resuscytacji.',
          isCorrect: false
        },
        {
          answer: 'C. rozpoznano objawy wstrząsu u poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. występuje zagrożenie zewnętrzne.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi B, C i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '94. Dla ratownika różnica pomiędzy transportem a ewakuacją polega na tym, że:',
      answers: [
        {
          answer: 'A. każde przemieszczenie poszkodowanego na mocy decyzji ratownika to ewakuacja, a na mocy decyzji lekarza lub ratownika medycznego to transport.',
          isCorrect: true
        },
        {
          answer: 'B. przemieszczanie poszkodowanego na noszach to zawsze ewakuacja, a przemieszczenie przy wykorzystaniu karetki - to transport.',
          isCorrect: false
        },
        {
          answer: 'C. strażacy zawsze ewakuują, a zespoły ratownictwa medycznego transportują.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i C.',
          isCorrect: false
        },
        {
          answer: 'E. ewakuacja i transport to dwie nazwy tego samego zjawiska.',
          isCorrect: false
        }
      ]
    },
    {
      question: '95. Określona w procesie segregacji poszkodowanych w zdarzeniu masowym grupa „czerwona" to grupa o najwyższym priorytecie:',
      answers: [
        {
          answer: 'A. transportowym.',
          isCorrect: false
        },
        {
          answer: 'B. terapeutycznym i transportowym.',
          isCorrect: true
        },
        {
          answer: 'C. reanimacyjnym.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: false
        },
        {
          answer: 'E. segregacja to wyznaczanie kolejności, a nie priorytetów.',
          isCorrect: false
        }
      ]
    },
    {
      question: '96. Zdarzenie masowe to zdarzenie o znacznej dysproporcji pomiędzy zapotrzebowaniem na medyczne działania ratownicze realizowane w trybie natychmiastowym a możliwościami:',
      answers: [
        {
          answer: 'A. sił i środków podmiotów ratowniczych obecnych na miejscu zdarzenia.',
          isCorrect: true
        },
        {
          answer: 'B. sił i środków ratowniczych powiatu.',
          isCorrect: false
        },
        {
          answer: 'C. sił i środków ratowniczych województwa.',
          isCorrect: false
        },
        {
          answer: 'D. sił i środków ujętych w planie ratowniczym dla obszaru chronionego.',
          isCorrect: false
        },
        {
          answer: 'E. zespołów ratownictwa medycznego obecnych na miejscu zdarzenia.',
          isCorrect: false
        }
      ]
    },
    {
      question: '97. Umieszczona w planie ratowniczym procedura dysponowania danego podmiotu ratowniczego oparta powinna być głównie na: 1. odległości miejsca stacjonowania podmiotu od miejsca zdarzenia; 2. przynależności administracyjnej miejsca zdarzenia; 3. teoretycznym czasie przybycia podmiotu ratowniczego na miejsce zdarzenia; 4. rodzaju zdarzenia; 5. aktualnym czasie przybycia podmiotu ratowniczego na miejsce zdarzenia. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 4.',
          isCorrect: false
        },
        {
          answer: 'B. 2, 4.',
          isCorrect: false
        },
        {
          answer: 'C. 4, 5.',
          isCorrect: true
        },
        {
          answer: 'D. 1, 4.',
          isCorrect: false
        },
        {
          answer: 'E. 2, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '98. Poszkodowany wydolny krążeniowo i oddechowo z zamkniętym złamaniem podudzi, u którego po kilkunastu minutach po segregacji pierwotnej rozwinęły się objawy wstrząsu, należy do grupy:',
      answers: [
        {
          answer: 'A. najpierw zielonej, później żółtej',
          isCorrect: false
        },
        {
          answer: 'B. najpierw czerwonej, potem żółtej.',
          isCorrect: false
        },
        {
          answer: 'C. cały czas żółtej.',
          isCorrect: false
        },
        {
          answer: 'D. cały czas czerwonej.',
          isCorrect: false
        },
        {
          answer: 'E. najpierw żółtej, potem czerwonej.',
          isCorrect: true
        }
      ]
    },
    {
      question: '99. W założeniach taktycznych ratownictwa medycznego w zdarzeniach na drogach, wykonanie dostępu oznacza:',
      answers: [
        {
          answer: 'A. dotarcie do poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. stworzenie możliwości zbadania i ewakuacji poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'C. stworzenie możliwości zbadania poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. to samo, co „wycięcie poszkodowanego z pojazdu".',
          isCorrect: false
        },
        {
          answer: 'E. zabezpieczenie miejsca zdarzenia i umożliwienie procedur dochodzeniowych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '100. Zadania z zakresu kwalifikowanej pierwszej pomocy realizowane przez ratowników KSRG:',
      answers: [
        {
          answer: 'A. zawsze w całości zastępują działania Zespołów Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'B. wspomagają działania Zespołów Ratownictwa Medycznego.',
          isCorrect: true
        },
        {
          answer: 'C. są realizowane tylko i wyłącznie w przypadku technicznych trudności, uniemożliwiających dotarcie do poszkodowanego przez członków Zespołu Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'D. mogą być wykonywane tylko przy udziale koordynatora medycznych czynności ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'E. odbywają się zawsze pod nadzorem lekarza.',
          isCorrect: false
        }
      ]
    },
    {
      question: '101. Do zadań koordynatora medycznych działań ratowniczych (KMDR) KSRG należy: 1. koordynacja działań z zakresu kwalifikowanej pierwszej pomocy, segregacji pierwotnej do czasu przybycia ZRM. 2. realizuje wraz z ratownikami KSRG kpp w strefach zagrożenia dla ZRM. 3. prowadzenie i ewentualne nadzorowanie segregacji, jako procesu określania priorytetów terapeutyczno-transportowych. 4. przekazuje informacje o wykonaniu dostępu do poszkodowanego i możliwości podjęcia medycznych czynności ratowniczych (mcr) przez ZRM. 5. transport poszkodowanych z kodem czerwonym do specjalistycznej placówki służby zdrowia. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 2, 3, 4.',
          isCorrect: true
        },
        {
          answer: 'B. 1, 2, 3.',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'D. 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 2, 4, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '102. Organizacja ratownictwa medycznego realizowanego przez podmioty KSRG nie obejmuje:',
      answers: [
        {
          answer: 'A. ujednolicenia zasad powiadamiania i dysponowania podmiotów systemu oraz podmiotów współdziałających z systemem.',
          isCorrect: false
        },
        {
          answer: 'B. ujednolicania zasad postępowania w zdarzeniach z dużą liczbą poszkodowanych.',
          isCorrect: false
        },
        {
          answer: 'C. transportu lżej poszkodowanych do miejsca zamieszkania.',
          isCorrect: true
        },
        {
          answer: 'D. ujednolicania metodyki planowania transportu poszkodowanej lub zagrożonej ludności do izb przyjęć lub szpitalnych oddziałów wyspecjalizowanych w zakresie medycyny ratunkowej lub innych podmiotów prowadzących ratownictwo medyczne w warunkach szpitalnych.',
          isCorrect: false
        },
        {
          answer: 'E. wsparcia psychologicznego osób uczestniczących w działaniach ratowniczych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '103. Kwalifikowana pierwsza pomoc to określenie czynności podejmowanych wobec osoby w stanie nagłego zagrożenia zdrowotnego przez ratownika. W rozumieniu Ustawy o Państwowym Ratownictwie Medycznym ratownikiem może być: 1. wyłącznie osoba posiadająca dyplom szkoły lub uczelni medycznej. 2. wyłącznie osoba zatrudniona lub pełniąca służbę w jednostkach współpracujących z systemem ratownictwa medycznego lub będąca członkiem tych jednostek. 3. osoba posiadająca ważne zaświadczenie o ukończeniu kursu w zakresie kwalifikowanej pierwszej pomocy i uzyskaniu tytułu ratownika. 4. osoba której stan zdrowia pozwala na udzielanie kwalifikowanej pierwszej pomocy. 5. osoba posiadająca dyplom ukończenia szkoły medycznej oraz pełną zdolność do czynności prawnych. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2,3.',
          isCorrect: false
        },
        {
          answer: 'C. 3, 4.',
          isCorrect: true
        },
        {
          answer: 'D. 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 2, 4, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '104. Czy osoba udzielająca pierwszej pomocy, kwalifikowanej pierwszej pomocy oraz podejmująca medyczne czynności ratunkowe korzysta z ochrony przewidzianej prawem?',
      answers: [
        {
          answer: 'A. zawarte jest to w prawie zwyczajowym.',
          isCorrect: false
        },
        {
          answer: 'B. tak, wynika to z Rozporządzenia MSW i A w sprawie szczegółowych zasad organizacji krajowego systemu ratowniczo-gaśniczego z 1999 roku.',
          isCorrect: false
        },
        {
          answer: 'C. nie, wynika to z Kodeksu Karnego.',
          isCorrect: false
        },
        {
          answer: 'D. tak, wynika to z Ustawy o Państwowym Ratownictwie Medycznym z 2006 roku.',
          isCorrect: true
        },
        {
          answer: 'E. nie podlega żadnej ochronie prawnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '105. Pozycja boczna ustalona ma na celu zapewnienie drożnych dróg oddechowych oraz umożliwienie swobodnego wypływu śliny i treści z jamy ustnej. Aby spełniała swoje zadanie muszą być spełnione poniższe warunki, z wyjątkiem:',
      answers: [
        {
          answer: 'A. pozycja musi być stabilna.',
          isCorrect: false
        },
        {
          answer: 'B. musi być możliwe łatwe ocenianie czynności życiowych.',
          isCorrect: false
        },
        {
          answer: 'C. nie zmienia się raz przyjętego ułożenia poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'D. musi być zapewniony swobodny wypływ śliny i innych wydzielin.',
          isCorrect: false
        },
        {
          answer: 'E. należy unikać ucisku na klatkę piersiową.',
          isCorrect: false
        }
      ]
    },
    {
      question: '106. Jesteś świadkiem jak osoba, która się krztusi traci przytomność i upada na podłogę. Dzwonisz na 112 lub 999, a następnie przystępujesz do działania w następującej kolejności:',
      answers: [
        {
          answer: 'A. obracasz poszkodowanego plecami ku górze i wykonujesz 5 uderzeń pomiędzy łopatkami.',
          isCorrect: false
        },
        {
          answer: 'B. wykonujesz parę szybkich i bardzo silnych oddechów usta - usta.',
          isCorrect: false
        },
        {
          answer: 'C. czekasz aż pacjent odzyska przytomność, podnosisz go, następnie stajesz za jego plecami i wykonujesz uciśnięcia Heimlicha.',
          isCorrect: false
        },
        {
          answer: 'D. usuwasz widoczne ciało obce z jamy ustnej, następnie rozpoczynasz resuscytacje krążeniowo oddechową zaczynając od 30 uciśnięć klatki piersiowej.',
          isCorrect: true
        },
        {
          answer: 'E. siadasz okrakiem na udach poszkodowanego i wykonujesz 5 uciśnięć nadbrzusza.',
          isCorrect: false
        }
      ]
    },
    {
      question: '107. Kobieta 24-letnia połknęła garść pigułek nasennych około 30-45 minut temu. Znajdujesz ją nieprzytomną, wykonującą sporadyczne, łapiące powietrze, oddechy. Jej tętno jest szybkie i dobrze wyczuwalne. Co powinieneś zrobić?',
      answers: [
        {
          answer: 'A. zadzwonić po pogotowie ratunkowe i rozpocząć oddech wspomagany z częstością 10 oddechów na minutę.',
          isCorrect: true
        },
        {
          answer: 'B. rozpocząć uciski klatki piersiowej, a po minucie zadzwonić po Zespół Ratownictwa Medycznego. Wykonać 2 uciśnięcia nadbrzusza, a następnie położyć pacjenta w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'C. podjąć reanimację przez 1 minutę, a następnie zadzwonić po Zespół Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'D. wykonać 5 uciśnięć nadbrzusza, a następnie 2 wdechy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '108. Udzielasz pomocy 6-letniej ofierze wypadku samochodowego, u której podejrzewasz uraz kręgosłupa szyjnego. Dziecko jest nieprzytomne, oddycha płytko, z wysiłkiem, słychać charczenie. Częstość oddechów 30 na minutę. Aby udrożnić drogi oddechowe powinieneś wykonać następujący manewr:',
      answers: [
        {
          answer: 'A. maksymalnie odchylić głowę do tyłu.',
          isCorrect: false
        },
        {
          answer: 'B. wysunąć żuchwę na szczękę, odchylając głowę do tyłu.',
          isCorrect: false
        },
        {
          answer: 'C. wyciągnąć język przed żuchwę.',
          isCorrect: false
        },
        {
          answer: 'D. usiąść okrakiem na udach ratowanego dziecka i wykonywać uciśnięcia nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'E. wykluczyć obecność ciała obcego i wysunąć żuchwę na szczękę jednocześnie stabilizując kręgosłup szyjny. Rozważyć założenie rurki ustno-gardłowej.',
          isCorrect: true
        }
      ]
    },
    {
      question: '109. Zbliżasz się do osoby dorosłej, która leży na podłodze. Nie ma nikogo innego w pobliżu. Jak powinieneś postąpić?',
      answers: [
        {
          answer: 'A. ocenić przytomność leżącego, sprawdzić oddech, potem wezwać Zespół Ratownictwa Medycznego.',
          isCorrect: true
        },
        {
          answer: 'B. zadzwonić po Zespół Ratownictwa Medycznego i czekać na karetkę przed domem.',
          isCorrect: false
        },
        {
          answer: 'C. usunąć ewentualne ciała obce z dróg oddechowych palcem.',
          isCorrect: false
        },
        {
          answer: 'D. prowadzić RKO przez 5 minut, a potem zadzwonić po Zespół Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'E. zawołać o pomoc i zacząć oddechy zastępcze.',
          isCorrect: false
        }
      ]
    },
    {
      question: '110. Wskaż fałszywe stwierdzenie dotyczące pomocy tonącym:',
      answers: [
        {
          answer: 'A. u tonących w pierwszej chwili po wydobyciu staramy się wylać całą wodę zgromadzoną w układzie oddechowym.',
          isCorrect: true
        },
        {
          answer: 'B. jeżeli nie ma pewności co do mechanizmu tonięcia, zakładamy kołnierz ortopedyczny.',
          isCorrect: false
        },
        {
          answer: 'C. również w porze letniej należy poszkodowanemu, wydobytemu z wody, zapewnić komfort cieplny.',
          isCorrect: false
        },
        {
          answer: 'D. resuscytację u podtopionych zaczynamy od 5 oddechów ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'E. po sprawdzeniu przytomności i ocenie oddechu, woła się o pomoc.',
          isCorrect: false
        }
      ]
    },
    {
      question: '111. U niektórych poszkodowanych nieprzytomnych, ale oddychających stosuje się pozycję bezpieczną. Wskaż stwierdzenie fałszywe:',
      answers: [
        {
          answer: 'A. pozycja ta może zapobiec dostaniu się treści pokarmowej do dróg oddechowych.',
          isCorrect: false
        },
        {
          answer: 'B. pozycję taką stosuje się ze względu na łatwą kontrolę tętna u poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'C. ułożenie poszkodowanego w tej pozycji nie gwarantuje przeżycia.',
          isCorrect: false
        },
        {
          answer: 'D. możliwość ułożenia poszkodowanego w tej pozycji dopuszcza na jego pozostawienie, celem udzielenia pomocy większej liczbie poszkodowanych.',
          isCorrect: false
        },
        {
          answer: 'E. pozycja ta zapewnia udrożnienie górnych dróg oddechowych u osoby nieprzytomnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '112. Wskaż czynność, która nie jest elementem procedury udrażniania dróg oddechowych:',
      answers: [
        {
          answer: 'A. odessanie płynnej treści z jamy ustnej.',
          isCorrect: false
        },
        {
          answer: 'B. uciśnięcia nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'C. tlenoterapia bierna.',
          isCorrect: true
        },
        {
          answer: 'D. założenie poszkodowanemu rurki ustno-gardłowej.',
          isCorrect: false
        },
        {
          answer: 'E. rękoczyn czoło-żuchwa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '113. Jakie będzie Twoje postępowanie u poszkodowanego, który w wyniku wypadku samochodowego doznał urazu z raną tłuczoną głowy, z przejściową utratą świadomości i przebywa nadal w samochodzie?',
      answers: [
        {
          answer: 'A. zadzwonię po Zespół Ratownictwa Medycznego i będę czekać przy samochodzie obserwując poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. wezwę pomoc, sprawdzę jego podstawowe funkcje życiowe (stan świadomości, oddech, krążenie), a następnie zależnie od sytuacji podejmę decyzję o ewakuacji lub udzieleniu pomocy w samochodzie.',
          isCorrect: true
        },
        {
          answer: 'C. wyciągnę poszkodowanego z samochodu i zacznę oddechy zastępcze.',
          isCorrect: false
        },
        {
          answer: 'D. podam tlen i będę czekać na pomoc.',
          isCorrect: false
        },
        {
          answer: 'E. zacznę resuscytację w samochodzie.',
          isCorrect: false
        }
      ]
    },
    {
      question: '114. Wskaż prawidłową kolejność czynności jakie należy wykonać po wezwaniu Zespołu Ratownictwa Medycznego u głęboko nieprzytomnego poszkodowanego, po urazie, bez widocznych obrażeń, z zachowanym własnym charczącym oddechem i oznakami krążenia: 1. okrycie kocem termoizolacyjnym. 2. tlenoterapia bierna (jeżeli są wskazania). 3. założenie rurki ustno-gardłowej (jeżeli toleruje). 4. stabilizacja kręgosłupa szyjnego. 5. udrożnienie dróg oddechowych poprzez wysunięcie żuchwy. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 2, 5, 3, 1, 4. ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 5, 4, 2. ',
          isCorrect: false
        },
        {
          answer: 'C. 3, 2, 4, 1, 5. ',
          isCorrect: false
        },
        {
          answer: 'D. 5, 4, 3, 2, 1. ',
          isCorrect: true
        },
        {
          answer: 'E. 4, 2, 1, 3, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '115. Postępowanie z poszkodowanym, który w czasie pożaru wyskoczył z III piętra i doznał urazu kręgosłupa w odcinku piersiowo-lędźwiowym oraz jest nieprzytomny, z zachowanym oddechem i krążeniem, w pierwszej kolejności obejmuje:',
      answers: [
        {
          answer: 'A. resuscytacje krążeniowo oddechową (RKO), bo podtrzymanie krążenia jest priorytetem.',
          isCorrect: false
        },
        {
          answer: 'B. oddech zastępczy z tlenoterapią o przepływie 10 l na minutę.',
          isCorrect: false
        },
        {
          answer: 'C. ręczną stabilizację kręgosłupa oraz tlenoterapię bierną (jeżeli są wskazania).',
          isCorrect: true
        },
        {
          answer: 'D. opatrzenie ran i złamań oraz oparzeń.',
          isCorrect: false
        },
        {
          answer: 'E. szybki transport do szpitala',
          isCorrect: false
        }
      ]
    },
    {
      question: '116. Spośród niżej wymienionych czynności ratowniczych, wskaż czynność priorytetową u osoby nieprzytomnej:',
      answers: [
        {
          answer: 'A. opatrzenie rany oparzeniowej.',
          isCorrect: false
        },
        {
          answer: 'B. udrożnienie dróg oddechowych.',
          isCorrect: true
        },
        {
          answer: 'C. unieruchomienie złamanej kończyny.',
          isCorrect: false
        },
        {
          answer: 'D. zaopatrzenie złamania otwartego.',
          isCorrect: false
        },
        {
          answer: 'E. okrycie kocem termoizolacyjnym.',
          isCorrect: false
        }
      ]
    },
    {
      question: '117. Rurkę ustno-gardłową, spróbujesz zastosować:',
      answers: [
        {
          answer: 'A. u poszkodowanych przytomnych, ale po urazach klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'B. u nieprzytomnych z obecną treścią pokarmową w jamie ustnej (dla udrożnienia).',
          isCorrect: false
        },
        {
          answer: 'C. zawsze u poszkodowanych przytomnych z urazem twarzoczaszki.',
          isCorrect: false
        },
        {
          answer: 'D. tylko przy bezdechu u dorosłych, zamiast tlenoterapii.',
          isCorrect: false
        },
        {
          answer: 'E. u nieprzytomnych, aby zmniejszyć zagrożenie niedrożnością dróg oddechowych.',
          isCorrect: true
        }
      ]
    },
    {
      question: '118. W postępowaniu z nieprzytomnym dorosłym nieurazowym, wezwanie Zespołu Ratownictwa Medycznego powinno nastąpić:',
      answers: [
        {
          answer: 'A. po ocenie oddechu.',
          isCorrect: true
        },
        {
          answer: 'B. jeżeli poszkodowany ma poważne obrażenia.',
          isCorrect: false
        },
        {
          answer: 'C. nie należy wzywać pomocy, jeżeli strażak-ratownik wie, co należy zrobić z osobą poszkodowaną.',
          isCorrect: false
        },
        {
          answer: 'D. po pierwszej minucie resuscytacji.',
          isCorrect: false
        },
        {
          answer: 'E. po udzieleniu pierwszej pomocy i stwierdzeniu, że stan poszkodowanego nie ulega zmianie.',
          isCorrect: false
        }
      ]
    },
    {
      question: '119. Podczas oceny stanu neurologicznego poszkodowanego korzystamy ze skali AVPU. Co oznaczają poszczególne litery tej skali:',
      answers: [
        {
          answer: 'A. A-alergie V-wysypki P- przyjmowane leki U- uzależnienia.',
          isCorrect: false
        },
        {
          answer: 'B. A-zorientowany, V-reaguje na głos, P- reaguje na bodźce bólowe, U- brak reakcji.',
          isCorrect: true
        },
        {
          answer: 'C. A- brak reakcji, V- reaguje na bodźce bólowe, P- reaguje na bodźce słowne, U-zorientowany.',
          isCorrect: false
        },
        {
          answer: 'D. A- agresywny, V-wulgarny P-podsypiający, U- unikający kontaktu.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie powyższe są fałszywe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '120. Właściwy rozmiar rurki ustno-gardłowej dla poszkodowanego nieprzytomnego wyznacza odległość:',
      answers: [
        {
          answer: 'A. od brody do obojczyka.',
          isCorrect: false
        },
        {
          answer: 'B. od płatka ucha do kącika ust.',
          isCorrect: true
        },
        {
          answer: 'C. od czubka jego nosa do brody.',
          isCorrect: false
        },
        {
          answer: 'D. rurkę dobiera się tylko u osoby przytomnej.',
          isCorrect: false
        },
        {
          answer: 'E. rurki nie stosuje się u osób nieprzytomnych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '121. Jeśli wystąpią trudności w prowadzeniu skutecznej wentylacji za pomocą maski i worka samorozprężalnego, należy: 1. poprawić ułożenie maski na twarzy poszkodowanego. 2. ponownie spróbować udrożnić drogi oddechowe za pomocą odpowiednich rękoczynów. 3. poczekać z decyzją co, do dalszego postępowania na przybycie lekarza, gdyż możemy zaszkodzić poszkodowanemu. 4. sprawdzić szczelność układu do wentylacji. 5. pomimo trudności kontynuować wentylację, bo każdy manewr sprawdzający to strata czasu. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 2, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'D. 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 1, 2, 4',
          isCorrect: true
        }
      ]
    },
    {
      question: '122. W czasie prowadzenia u poszkodowanego oddechu zastępczego przy użyciu maski twarzowej i worka samorozprężalnego, należy pamiętać o dołączeniu do zestawu rezerwuaru tlenowego. Ma to na celu:',
      answers: [
        {
          answer: 'A. zwiększenie stężenia tlenu w mieszaninie oddechowej z 21% do około 40-50 %.',
          isCorrect: false
        },
        {
          answer: 'B. utrzymanie, przy właściwym dopływie tlenu, wysokiego stężenia tlenu w mieszaninie oddechowej, nawet na poziomie bliskim 85%.',
          isCorrect: true
        },
        {
          answer: 'C. ułatwienie prowadzenia oddechu zastępczego (w takim przypadku nie trzeba dbać',
          isCorrect: false
        },
        {
          answer: 'D. o szczelne przyłożenie maski oddechowej do twarzy poszkodowanego).',
          isCorrect: false
        },
        {
          answer: 'E. stworzenie wystarczającej rezerwy tlenowej na czas, nawet do 4 minut po odłączeniu przewodu, łączącego układ z butlą tlenową (co jest niezwykle przydatne, np. przy ewakuacji poszkodowanego).',
          isCorrect: false
        }
      ]
    },
    {
      question: '123. Wskaż prawdziwe stwierdzenie dotyczące relacji między resuscytacją krążeniowo- oddechową(RKO) i Automatyczną Defibrylacją Zewnętrzną (AED):',
      answers: [
        {
          answer: 'A. pacjent z ostrym zawałem serca potrzebuje RKO, a nie AED.',
          isCorrect: false
        },
        {
          answer: 'B. natychmiastowa RKO i wczesna defibrylacja (w ciągu 4-5 minut) może znacznie zwiększyć liczbę uratowanych poszkodowanych z nagłym zatrzymaniem krążenia.',
          isCorrect: true
        },
        {
          answer: 'C. jeśli defibrylacja była wykonana w ciągu 10 minut, RKO nie ma sensu.',
          isCorrect: false
        },
        {
          answer: 'D. jeśli RKO było podjęte natychmiast, defibrylacja nie jest potrzebna.',
          isCorrect: false
        },
        {
          answer: 'E. RKO należy wdrożyć dopiero po podłączeniu AED i przeprowadzonej analizie przez defibrylator.',
          isCorrect: false
        }
      ]
    },
    {
      question: '124. Na jakiej podstawie podejmiesz decyzję o wdrożeniu resuscytacji krążeniowo-oddechowej:',
      answers: [
        {
          answer: 'A. szerokości źrenic poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. obecności tętna na obwodzie.',
          isCorrect: false
        },
        {
          answer: 'C. utracie przytomności i stwierdzeniu braku oddechu.',
          isCorrect: true
        },
        {
          answer: 'D. bladości i ochłodzeniu powłok skórnych.',
          isCorrect: false
        },
        {
          answer: 'E. obecności sinicy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '125. U dorosłych pacjentów prowadzenie resuscytacji krążeniowo-oddechowej w obserwowanym zatrzymaniu krążenia rozpoczyna się od:',
      answers: [
        {
          answer: 'A. 30 uciśnięć klatki piersiowej oraz jak najszybszym użyciu AED.',
          isCorrect: true
        },
        {
          answer: 'B. 2 oddechów ratowniczych oraz jak najszybszym użyciu AED.',
          isCorrect: false
        },
        {
          answer: 'C. 15 uciśnięć klatki piersiowej oraz jak najszybszym użyciu AED.',
          isCorrect: false
        },
        {
          answer: 'D. 30 uciśnięć klatki piersiowej (1 ratownik) lub 15 uciśnięć klatki piersiowej (2 ratowników).',
          isCorrect: false
        },
        {
          answer: 'E. 5 oddechów zastępczych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '126. W celu uciskania klatki piersiowej podczas resuscytacji, ręce układa się:',
      answers: [
        {
          answer: 'A. na środku klatki piersiowej poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'B. na górnej 1/4 części mostka poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. na lewo od środka mostka nad sercem ratowanego.',
          isCorrect: false
        },
        {
          answer: 'D. 1 cm powyżej łuku międzyżebrowego ratowanego.',
          isCorrect: false
        },
        {
          answer: 'E. w górnej 1/3 części mostka poszkodowanego.',
          isCorrect: false
        }
      ]
    },
    {
      question: '127. Stosunek uciśnięć do oddechów ratowniczych u osoby dorosłej powinien wynosić:',
      answers: [
        {
          answer: 'A. 50:2.',
          isCorrect: false
        },
        {
          answer: 'B. 30:2.',
          isCorrect: true
        },
        {
          answer: 'C. 15:2.',
          isCorrect: false
        },
        {
          answer: 'D. 10:1.',
          isCorrect: false
        },
        {
          answer: 'E. 15:1.',
          isCorrect: false
        }
      ]
    },
    {
      question: '128. Podczas prowadzenia podstawowych czynności resuscytacyjnych, ocenę stanu poszkodowanego wykonuje się:',
      answers: [
        {
          answer: 'A. co jedną minutę.',
          isCorrect: false
        },
        {
          answer: 'B. co 5 cykli (30 uciśnięć klatki piersiowej i 2 oddechy zastępcze).',
          isCorrect: false
        },
        {
          answer: 'C. jeżeli u poszkodowanego pojawią się oznaki życia.',
          isCorrect: true
        },
        {
          answer: 'D. przed naklejeniem elektrod AED.',
          isCorrect: false
        },
        {
          answer: 'E. po około 15 minutach resuscytacji.',
          isCorrect: false
        }
      ]
    },
    {
      question: '129. Jeżeli pierwszy oddech ratowniczy nie powoduje uniesienia się klatki piersiowej, należy wykonać następujące czynności, z wyjątkiem:',
      answers: [
        {
          answer: 'A. sprawdzenia, czy udrożnienie dróg oddechowych jest poprawnie wykonane.',
          isCorrect: false
        },
        {
          answer: 'B. wygarnięcia „na ślepo" ewentualnych ciał obcych, będących przyczyną niedrożności dróg oddechowych.',
          isCorrect: true
        },
        {
          answer: 'C. usunięcia tylko widocznych ciał obcych.',
          isCorrect: false
        },
        {
          answer: 'D. wykonania nie więcej niż 2 prób podania oddechów ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'E. sprawdzenia, czy nie występują uszkodzenia (bądź anomalie) klatki piersiowej, uniemożliwiające jej prawidłowe unoszenie.',
          isCorrect: false
        }
      ]
    },
    {
      question: '130. W przypadku stwierdzenia u pacjenta objawów łagodnej niedrożności dróg oddechowych spowodowanej prawdopodobnie obecnością ciała obcego, działania ratownika polegają na:',
      answers: [
        {
          answer: 'A. zachęcaniu poszkodowanego do kaszlu.',
          isCorrect: true
        },
        {
          answer: 'B. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 5 uderzeń w okolicę międzyłopatkową, a następnie 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'E. rytmicznym uderzaniu poszkodowanego w okolicę międzyłopatkową, na przemian z uciskaniem nadbrzusza.',
          isCorrect: false
        }
      ]
    },
    {
      question: '131. Worek samorozprężalny posiada następujące zalety, z wyjątkiem:',
      answers: [
        {
          answer: 'A. może być podłączony do maski twarzowej, rurki dotchawiczej lub alternatywnych      przyrządów do udrażniania dróg oddechowych.',
          isCorrect: false
        },
        {
          answer: 'B. jest zalecany do stosowania w przypadku zatrucia wziewnego',
          isCorrect: false
        },
        {
          answer: 'C. przy zastosowaniu maski, rezerwuaru tlenowego i przepływu tlenu 12-16 l/min pozwala      osiągnąć wdechowe stężenie tlenu nie wyższe niż 75%.',
          isCorrect: true
        },
        {
          answer: 'D. zabezpiecza przed zakażeniem ratownika prowadzącego wentylację.',
          isCorrect: false
        },
        {
          answer: 'E. w razie uszkodzenia mechanicznego worka, można go zastosować tylko do tlenoterapii biernej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '132. Wykonujesz resuscytację z udziałem kolegi. Jak często powinieneś uciskać klatkę piersiową?',
      answers: [
        {
          answer: 'A. 50-60 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'B. z częstością zależną od wielkości klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'C. poniżej 100 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'D. wystarczająco szybko by utrzymać różowy kolor skóry twarzy.',
          isCorrect: false
        },
        {
          answer: 'E. 100-120 razy na minutę.',
          isCorrect: true
        }
      ]
    },
    {
      question: '133. Wykonujesz resuscytację u 5-letniego dziecka z zatrzymaniem czynności serca. Którą z technik ucisku klatki piersiowej powinieneś zastosować?',
      answers: [
        {
          answer: 'A. uciskanie jedną lub dwoma dłońmi (zależnie od gabarytów poszkodowanego),       z częstością 100-120 razy na minutę.',
          isCorrect: true
        },
        {
          answer: 'B. uciskanie dwoma dłońmi tak, by odchylenie mostka nie przekraczało około 1,5 cm.',
          isCorrect: false
        },
        {
          answer: 'C. uciskanie dolnego odcinka mostka tylko dwoma palcami.',
          isCorrect: false
        },
        {
          answer: 'D. wykonanie 15 uciśnięć, a następnie 3 wolnych wdechów.',
          isCorrect: false
        },
        {
          answer: 'E. wykonywanie uciśnięć jedną z częstością około 100 razy na minutę.',
          isCorrect: false
        }
      ]
    },
    {
      question: '134. Bawisz się z dziećmi w pokoju, w którym jest dużo zabawek składających się z drobnych części. Nagle, 8-miesięczne niemowlę zaczyna się dusić. Słyszysz świst towarzyszący każdej próbie oddechu. Jego kaszel jest cichy i nieefektywny, zaczyna sinieć. Twoim zdaniem u niemowlęcia doszło do:',
      answers: [
        {
          answer: 'A. ostrego ataku astmy oskrzelowej.',
          isCorrect: false
        },
        {
          answer: 'B. napadu padaczki.',
          isCorrect: false
        },
        {
          answer: 'C. obrzęku strun głosowych w przebiegu infekcji.',
          isCorrect: false
        },
        {
          answer: 'D. całkowitej niedrożności dróg oddechowych spowodowanej ciałem obcym.',
          isCorrect: true
        },
        {
          answer: 'E. częściowej niedrożności dróg oddechowych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '135. Widziałeś jak koleżanka upadła na korytarzu w pracy. Podchodząc do poszkodowanej stwierdziłeś, że jest nieprzytomna. Udrożniłeś drogi oddechowe. Aby ocenić czy nieprzytomna oddycha należy:',
      answers: [
        {
          answer: 'A. przyłożyć lusterko do ust nieprzytomnej.',
          isCorrect: false
        },
        {
          answer: 'B. zbliżyć do ust i nosa poszkodowanej kartkę papieru lub piórko.',
          isCorrect: false
        },
        {
          answer: 'C. ocenić ruchy tchawicy (jabłko Adama).',
          isCorrect: false
        },
        {
          answer: 'D. przez 10 sekund pochylając się uchem nad ustami i nosem poszkodowanej, starasz się usłyszeć oddech i wyczuć go na swoim policzku, jednocześnie obserwując ruchy klatki piersiowej.',
          isCorrect: true
        },
        {
          answer: 'E. obserwować przez 5 sekund, czy unosi się klatka piersiowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '136. Czynności resuscytacyjne (uciski klatki piersiowej i oddechy) przerwiesz w następującej sytuacji:',
      answers: [
        {
          answer: 'A. po około 10 -15 minutach prowadzenia czynności ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'B. odzyskania prawidłowego oddechu przez poszkodowanego, przybycia na miejsce zdarzenia Zespołu Ratownictwa Medycznego i przejęcia poszkodowanego, fizycznego wyczerpania ratownika, niebezpieczeństwa.',
          isCorrect: true
        },
        {
          answer: 'C. w bardzo niesprzyjających warunkach atmosferycznych.',
          isCorrect: false
        },
        {
          answer: 'D. w przypadku wydobycia poszkodowanego z zimnej wody, który po 10 minutach akcji nie daje oznak życia.',
          isCorrect: false
        },
        {
          answer: 'E. po przybyciu na miejsce innych służb ratowniczych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '137. U nieprzytomnego poszkodowanego nie stwierdzasz oddechu, ani tętna. Po rozpoczęciu resuscytacji krążeniowo-oddechowej (RKO) stwierdzasz, że doszło u niego do złamania kilku żeber. W takiej sytuacji:',
      answers: [
        {
          answer: 'A. przerywasz RKO i wykonujesz tylko oddechy ratownicze.',
          isCorrect: false
        },
        {
          answer: 'B. rozpoczynasz bezpośrednie uciski serca .',
          isCorrect: false
        },
        {
          answer: 'C. nadal prowadzisz podjęte działania ratownicze (resuscytacje krążeniowo-oddechową) zgodnie z algorytmem.',
          isCorrect: true
        },
        {
          answer: 'D. w pierwszej kolejności owijasz klatkę piersiową poszkodowanego bandażem elastycznym, dopiero wówczas rozpoczynasz wykonywanie RKO.',
          isCorrect: false
        },
        {
          answer: 'E. kontynuujesz podjęte czynności ratownicze, omijając uszkodzoną okolicę.',
          isCorrect: false
        }
      ]
    },
    {
      question: '138. Kierownik firmy, w której pracujesz jest 50-letnim, otyłym mężczyzną. Do tej pory nie chorował na serce. Aktualnie zaczął uskarżać się na nagły, ostry ból w klatce piersiowej, promieniujący do lewej ręki i żuchwy. Jak powinieneś postąpić?',
      answers: [
        {
          answer: 'A. zadzwonić po Zespołu Ratownictwa Medycznego.',
          isCorrect: false
        },
        {
          answer: 'B. podać nitroglicerynę pod język (1 tabletkę).',
          isCorrect: false
        },
        {
          answer: 'C. podać aspirynę 160-300 mg jeżeli jest nie uczulony.',
          isCorrect: false
        },
        {
          answer: 'D. ułożyć mężczyznę w dogodnej pozycji (opcjonalnie pozycja półsiedząca) i wezwać pogotowie ratunkowe.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe odpowiedzi C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '139. Wykonujesz resuscytacje krążeniowo-oddechową (RKO) u półrocznego dziecka z zatrzymaniem czynności serca. Którą technikę ucisków klatki piersiowej powinieneś zastosować? 1. uciskanie klatki piersiowej jedną dłonią z częstotliwością około 100 uciśnięć na minutę. 2. uciskanie klatki piersiowej dwoma palcami jednej ręki tak, by ugiąć dolną połowę mostka na głębokość około 4 cm. 3. uciskanie górnego odcinka mostka dwoma palcami; 4. uciskanie klatki piersiowej 15x, a następnie wykonanie 3 wolnych wdechów; 5. uciskanie klatki piersiowej z częstotliwością około 100-120 razy na minutę. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 5.',
          isCorrect: false
        },
        {
          answer: 'B. 2, 5.',
          isCorrect: true
        },
        {
          answer: 'C. 3, 4.',
          isCorrect: false
        },
        {
          answer: 'D. 1, 3.',
          isCorrect: false
        },
        {
          answer: 'E. 4, 5. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '140. Szybkie badanie urazowe poszkodowanego w zdarzeniu pojedynczym nie powinno trwać dłużej niż:',
      answers: [
        {
          answer: 'A. 1min.',
          isCorrect: false
        },
        {
          answer: 'B. 2 min.',
          isCorrect: true
        },
        {
          answer: 'C. 5 min.',
          isCorrect: false
        },
        {
          answer: 'D. 10 min.',
          isCorrect: false
        },
        {
          answer: 'E. 15 min.',
          isCorrect: false
        }
      ]
    },
    {
      question: '141. Przed przystąpieniem do badania wstępnego u poszkodowanych z obrażeniami pourazowymi z zachowanymi czynnościami życiowymi, należy:',
      answers: [
        {
          answer: 'A. unieruchomić złamaną kończynę.',
          isCorrect: false
        },
        {
          answer: 'B. stabilizować ręcznie kręgosłup szyjny.',
          isCorrect: true
        },
        {
          answer: 'C. podać tlen.',
          isCorrect: false
        },
        {
          answer: 'D. wykonać resuscytacje krążeniowo-oddechową (RKO).',
          isCorrect: false
        },
        {
          answer: 'E. wykonać manewr Sellicka.',
          isCorrect: false
        }
      ]
    },
    {
      question: '142. Poszkodowanych z obrażeniami pourazowymi obraca się podczas wymiotów:',
      answers: [
        {
          answer: 'A. na komendę prowadzącego wstępne badanie urazowe.',
          isCorrect: false
        },
        {
          answer: 'B. tylko po założeniu kołnierza ortopedycznego.',
          isCorrect: false
        },
        {
          answer: 'C. po zastosowaniu manewru Sellicka.',
          isCorrect: false
        },
        {
          answer: 'D. w sposób zsynchronizowany na komendę ratownika trzymającego głowę.',
          isCorrect: true
        },
        {
          answer: 'E. w inny niż wymienione sposób.',
          isCorrect: false
        }
      ]
    },
    {
      question: '143. Prowadzący wstępne badanie urazowe podchodzi w miarę możliwości do poszkodowanego:',
      answers: [
        {
          answer: 'A. od strony jego nóg.',
          isCorrect: true
        },
        {
          answer: 'B. od strony jego głowy.',
          isCorrect: false
        },
        {
          answer: 'C. od strony lewej.',
          isCorrect: false
        },
        {
          answer: 'D. nie ma znaczenia, z której strony podejdzie.',
          isCorrect: false
        },
        {
          answer: 'E. od strony prawej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '144. Ocenę oddechu poszkodowanego prowadzi się przez:',
      answers: [
        {
          answer: 'A. 10 sek.',
          isCorrect: true
        },
        {
          answer: 'B. 15 sek.',
          isCorrect: false
        },
        {
          answer: 'C. 25 sek.',
          isCorrect: false
        },
        {
          answer: 'D. 60 sek.',
          isCorrect: false
        },
        {
          answer: 'E. 90 sek.',
          isCorrect: false
        }
      ]
    },
    {
      question: '145. Kiedy można przerwać wstępne badanie urazowe?',
      answers: [
        {
          answer: 'A. gdy wystąpi niedrożność dróg oddechowych i zatrzymanie krążenia.',
          isCorrect: false
        },
        {
          answer: 'B. tylko po założeniu kołnierza ortopedycznego.',
          isCorrect: false
        },
        {
          answer: 'C. prawdziwe są odpowiedzi A i B.',
          isCorrect: false
        },
        {
          answer: 'D.  gdy występuje masywny krwotok.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '146. Podczas wstępnego badania urazowego przy poszkodowanym powinno być, w miarę możliwości:',
      answers: [
        {
          answer: 'A. 2 ratowników.',
          isCorrect: false
        },
        {
          answer: 'B. 3 ratowników.',
          isCorrect: true
        },
        {
          answer: 'C. 4 ratowników.',
          isCorrect: false
        },
        {
          answer: 'D. 5 ratowników.',
          isCorrect: false
        },
        {
          answer: 'E. 6 ratowników.',
          isCorrect: false
        }
      ]
    },
    {
      question: '147. Podczas wstępnego badania urazowego poszkodowanego, który leży na brzuchu, ale ma zachowany prawidłowy oddech:',
      answers: [
        {
          answer: 'A. przekładamy natychmiast na plecy.',
          isCorrect: false
        },
        {
          answer: 'B. jak najszybciej wnosimy do karetki.',
          isCorrect: false
        },
        {
          answer: 'C. badamy i opatrujemy wstępnie w pozycji zastanej.',
          isCorrect: true
        },
        {
          answer: 'D. sadzamy go i podajemy tlen.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i D.',
          isCorrect: false
        }
      ]
    },
    {
      question: '148. Podczas wstępnego badania urazowego poszkodowanego z obrażeniami pourazowymi w pierwszej kolejności należy znaleźć:',
      answers: [
        {
          answer: 'A. złamania.',
          isCorrect: false
        },
        {
          answer: 'B. uszkodzenia skóry.',
          isCorrect: false
        },
        {
          answer: 'C. przyczyny złego samopoczucia.',
          isCorrect: false
        },
        {
          answer: 'D. obrażenia stanowiące bezpośrednie zagrożenie życia.',
          isCorrect: true
        },
        {
          answer: 'E. przyczyny podwyższenia temperatury ciała.',
          isCorrect: false
        }
      ]
    },
    {
      question: '149. Ratownik będący liderem zespołu prowadząc wstępne badanie:',
      answers: [
        {
          answer: 'A. zajmuje się bezpośrednio przeprowadzeniem szybkiego badania urazowego.',
          isCorrect: false
        },
        {
          answer: 'B. wydaje wolnemu ratownikowi polecenia co do wykonania ewentualnych rękoczynów i opatrunków.',
          isCorrect: false
        },
        {
          answer: 'C. zajmuje się wykonaniem opatrunków.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i B.',
          isCorrect: true
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '150. Badanie powtórne (szczegółowe) chorego z obrażeniami pourazowymi rozpoczynamy po:',
      answers: [
        {
          answer: 'A. wykonaniu badania wstępnego i wykonaniu niezbędnych interwencji.',
          isCorrect: true
        },
        {
          answer: 'B. udrożnieniu poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. ułożeniu poszkodowanego w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu defibrylacji.',
          isCorrect: false
        },
        {
          answer: 'E. ułożeniu poszkodowanego w pozycji przeciwwstrząsowej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '151. Szybkie badanie urazowe poszkodowanego z obrażeniami pourazowymi powinno być przeprowadzone:',
      answers: [
        {
          answer: 'A. od strony lewej ku stronie prawej.',
          isCorrect: false
        },
        {
          answer: 'B. nie ma znaczenia od której części ciała zaczniemy.',
          isCorrect: false
        },
        {
          answer: 'C. od głowy do stóp na końcu kończyny górne.',
          isCorrect: true
        },
        {
          answer: 'D. zawsze od strony złamanych kończyn.',
          isCorrect: false
        },
        {
          answer: 'E. od strony pleców, aby nie pominąć ran.',
          isCorrect: false
        }
      ]
    },
    {
      question: '152. Badanie szyi chorego z obrażeniami pourazowymi nie obejmuje:',
      answers: [
        {
          answer: 'A. sprawdzenia istnienia ewentualnych ran.',
          isCorrect: false
        },
        {
          answer: 'B. oceny wyrostków kolczystych.',
          isCorrect: false
        },
        {
          answer: 'C. oceny nawrotu kapilarnego.',
          isCorrect: true
        },
        {
          answer: 'D. oceny wypełnienia żył szyjnych.',
          isCorrect: false
        },
        {
          answer: 'E. oceny ewentualnego przemieszczenia tchawicy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '153. Po wykonaniu szybkiego badania urazowego i założeniu ewentualnych opatrunków można:',
      answers: [
        {
          answer: 'A. sprawdzić szmer oddechowy.',
          isCorrect: false
        },
        {
          answer: 'B. sprawdzić nawrót kapilarny',
          isCorrect: false
        },
        {
          answer: 'C. założyć kołnierz ortopedyczny.',
          isCorrect: true
        },
        {
          answer: 'D. ocenić wypełnienie żył szyjnych',
          isCorrect: false
        },
        {
          answer: 'E. ułożyć poszkodowanego w pozycji bocznej ustalonej (bezpiecznej).',
          isCorrect: false
        }
      ]
    },
    {
      question: '154. Wypełnione żyły szyjne mogą sugerować np.:',
      answers: [
        {
          answer: 'A. odmę prężną.',
          isCorrect: false
        },
        {
          answer: 'B. tamponadę serca.',
          isCorrect: false
        },
        {
          answer: 'C. zaburzenia krzepliwości.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i B.',
          isCorrect: true
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A i C',
          isCorrect: false
        }
      ]
    },
    {
      question: '155. Po założeniu kołnierza ortopedycznego osobie nieprzytomnej z cechami urazu kręgosłupa w odcinku szyjnym:',
      answers: [
        {
          answer: 'A. sprawdzamy istnienie ewentualnych ran na szyi.',
          isCorrect: false
        },
        {
          answer: 'B. głowa musi być nadal stabilizowana ręcznie.',
          isCorrect: true
        },
        {
          answer: 'C. oceniamy nawrót kapilarny.',
          isCorrect: false
        },
        {
          answer: 'D. ratownik stabilizujący głowę puszcza ją.',
          isCorrect: false
        },
        {
          answer: 'E. poszkodowany może położyć się w wygodnej dla siebie pozycji.',
          isCorrect: false
        }
      ]
    },
    {
      question: '156. Jeśli podczas próby stabilizacji kręgosłupa szyjnego występują opory lub bolesność, to:',
      answers: [
        {
          answer: 'A. sprawdzamy istnienie ewentualnych ran.',
          isCorrect: false
        },
        {
          answer: 'B. stabilizujemy go w pozycji, na którą pozwalają zaistniałe ograniczenia.',
          isCorrect: true
        },
        {
          answer: 'C. mimo to staramy się ustabilizować kręgosłup równo w osi ciała.',
          isCorrect: false
        },
        {
          answer: 'D. oceniamy wypełnienie żył szyjnych.',
          isCorrect: false
        },
        {
          answer: 'E. oceniamy ewentualne przemieszczenia tchawicy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '157. Jeśli podczas badania chorego z obrażeniami pourazowymi głowy zauważysz wyciekające płyny z uszu i nosa, to:',
      answers: [
        {
          answer: 'A. sprawdzisz istnienie ewentualnych ran.',
          isCorrect: false
        },
        {
          answer: 'B. polecisz wolnemu ratownikowi założenie jałowych opatrunków osłaniających na uszy i nos.',
          isCorrect: false
        },
        {
          answer: 'C. polecisz trzeciemu ratownikowi włożenie jałowych sączków do uszu i nosa.',
          isCorrect: false
        },
        {
          answer: 'D. ułożysz poszkodowanego w pozycji przeciwwstrząsowej.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe odpowiedzi A, B, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '158. Nawrót kapilarny badamy uciskając:',
      answers: [
        {
          answer: 'A. płytkę paznokciową.',
          isCorrect: true
        },
        {
          answer: 'B. mięsień dwugłowy.',
          isCorrect: false
        },
        {
          answer: 'C. tętnicę promieniową.',
          isCorrect: false
        },
        {
          answer: 'D. wypełnione żyły szyjne.',
          isCorrect: false
        },
        {
          answer: 'E. płatek ucha ',
          isCorrect: false
        }
      ]
    },
    {
      question: '159. Podczas badania poszkodowanego z obrażeniami pourazowymi klatki piersiowej należy go:',
      answers: [
        {
          answer: 'A. prześwietlić.',
          isCorrect: false
        },
        {
          answer: 'B. tylko osłuchać.',
          isCorrect: false
        },
        {
          answer: 'C. opukać i osłuchać.',
          isCorrect: false
        },
        {
          answer: 'D. tylko obejrzeć i opukać.',
          isCorrect: false
        },
        {
          answer: 'E. obejrzeć, obmacać, opukać. ',
          isCorrect: true
        }
      ]
    },
    {
      question: '160. Podczas badania chorego z obrażeniami pourazowymi brzucha szukamy:',
      answers: [
        {
          answer: 'A. powiększonych naczyń krwionośnych.',
          isCorrect: false
        },
        {
          answer: 'B. śladów obrażeń i bolesności .',
          isCorrect: true
        },
        {
          answer: 'C. potwierdzenia prawidłowego nawrotu kapilarnego.',
          isCorrect: false
        },
        {
          answer: 'D. przemieszczonych naczyń włosowatych.',
          isCorrect: false
        },
        {
          answer: 'E. potwierdzenia odmy otwartej. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '161. Podczas badania poszkodowanego leżącego na wznak z obrażeniami pourazowymi, plecy powinno zbadać się, gdy:',
      answers: [
        {
          answer: 'A. leży on w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'B. jest on przekładany na nosze typu deska.',
          isCorrect: true
        },
        {
          answer: 'C. zostanie unieruchomiony.',
          isCorrect: false
        },
        {
          answer: 'D. zostanie ułożony na brzuchu, pamiętając o stabilizacji głowy.',
          isCorrect: false
        },
        {
          answer: 'E. po założeniu kołnierza ortopedycznego. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '162. Podczas wykonywania defibrylacji:',
      answers: [
        {
          answer: 'A. tylko ratownik może dotykać poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. sprawdzamy, czy nie powstała rozedma.',
          isCorrect: false
        },
        {
          answer: 'C. nie ma znaczenia, kto dotyka poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. nikt nie może dotykać poszkodowanego.',
          isCorrect: true
        },
        {
          answer: 'E. ratownik wciska przycisk „Analiza".',
          isCorrect: false
        }
      ]
    },
    {
      question: '163. Przed przyklejeniem elektrod defibrylatora:',
      answers: [
        {
          answer: 'A. skóra klatki piersiowej poszkodowanego musi być sucha.',
          isCorrect: false
        },
        {
          answer: 'B. zaleca się aby poszkodowany miał zdjętą biżuterię z szyi.',
          isCorrect: false
        },
        {
          answer: 'C. należy, w razie potrzeby, zgolić owłosienie klatki piersiowej .',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i B.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '164. Elektrody AED:',
      answers: [
        {
          answer: 'A. przyklejamy do gołej klatki piersiowej po jej ewentualnym wytarciu i usunięciu zbyt obfitego owłosienia.',
          isCorrect: true
        },
        {
          answer: 'B. przyklejamy do gołej klatki piersiowej po jej ewentualnym wytarciu.',
          isCorrect: false
        },
        {
          answer: 'C. przyklejamy do gołej klatki piersiowej po usunięciu biżuterii.',
          isCorrect: false
        },
        {
          answer: 'D. delikatnie przyklejamy na wysokości brodawek sutkowych.',
          isCorrect: false
        },
        {
          answer: 'E. przyklejamy do gołej klatki piersiowej po jej ewentualnym wytarciu na wysokości łuków żebrowych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '165. W strefie przeprowadzania defibrylacji:',
      answers: [
        {
          answer: 'A. można dotykać poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. może być mokro.',
          isCorrect: false
        },
        {
          answer: 'C. należy odsunąć źródło tlenu.',
          isCorrect: true
        },
        {
          answer: 'D. poszkodowany może być wentylowany.',
          isCorrect: false
        },
        {
          answer: 'E. można dotykać elektrod.',
          isCorrect: false
        }
      ]
    },
    {
      question: '166. Jeśli są wskazania u podtopionych z NZK, defibrylację wykonujemy po:',
      answers: [
        {
          answer: 'A. dokonaniu 5 oddechów, kontroli tętna i 5 cyklach resuscytacji zakończonej uciskami klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 cykli resuscytacji zakończonej masażem serca.',
          isCorrect: false
        },
        {
          answer: 'C. dokonaniu 5 oddechów 100% tlenem.',
          isCorrect: false
        },
        {
          answer: 'D. natychmiast po podłączeniu defibrylatora i ocenie rytmu jeżeli są wskazania.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie powyższe są fałszywe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '167. W trakcie oczekiwania na zespół ratownictwa medycznego po pomyślnym wykonaniu defibrylacji i powrocie oznak krążenia u poszkodowanego:',
      answers: [
        {
          answer: 'A. kontrolujemy oddech i tętno.',
          isCorrect: false
        },
        {
          answer: 'B. elektrody należy pozostawić na klatce piersiowej.',
          isCorrect: false
        },
        {
          answer: 'C. prowadzimy, w razie potrzeby, wentylację wspomaganą lub zastępczą.',
          isCorrect: false
        },
        {
          answer: 'D. dla bezpieczeństwa pacjenta elektrody należy jak najszybciej odkleić z klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A, B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '168. Asystolia to:',
      answers: [
        {
          answer: 'A. brak czynności elektrycznej komór serca i przedsionków lub tylko komór.',
          isCorrect: true
        },
        {
          answer: 'B. aktywność elektryczna bez tętna.',
          isCorrect: false
        },
        {
          answer: 'C. migotanie komór.',
          isCorrect: false
        },
        {
          answer: 'D. brak tętna na tętnicach szyjnych',
          isCorrect: false
        },
        {
          answer: 'E. częstoskurcz komorowy bez tętna.',
          isCorrect: false
        }
      ]
    },
    {
      question: '169. Elektrody AED umieszczamy:',
      answers: [
        {
          answer: 'A. jedną pod prawym obojczykiem, drugą w przedniej linii pachowej tuż pod mięśniem piersiowym, ułożenie przednio-boczne. (zgodnie z piktogramem umieszczonym na elektrodach).',
          isCorrect: true
        },
        {
          answer: 'B. elektrody mogą pozostać na klatce piersiowej w dowolnych miejscach po obu stronach mostka poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. jedną pod lewym obojczykiem wzdłuż mostka, drugą nad koniuszkiem serca poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'D. elektrody należy umieścić 2 palce powyżej kąta międzyżebrowego poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'E. w taki sposób, aby ich końce stykały się nad mostkiem poszkodowanego, co ułatwi przepływ energii. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '170. Wsparcie psychiczne poszkodowanego powinno być zastosowane:',
      answers: [
        {
          answer: 'A. w momencie przybycia do szpitala.',
          isCorrect: false
        },
        {
          answer: 'B. po umieszczeniu poszkodowanego w karetce.',
          isCorrect: false
        },
        {
          answer: 'C. po ustaleniu diagnozy w celu jasnego sprecyzowania form leczenia.',
          isCorrect: false
        },
        {
          answer: 'D. jak najwcześniej.',
          isCorrect: true
        },
        {
          answer: 'E. w obecności rodziny.',
          isCorrect: false
        }
      ]
    },
    {
      question: '171. Wskaż, co nie jest zabronione podczas udzielania wsparcia psychicznego poszkodowanemu:',
      answers: [
        {
          answer: 'A. brak zainteresowania tym, co mówi poszkodowany.',
          isCorrect: false
        },
        {
          answer: 'B. prezentowanie przez ratownika postawy ,ja wiem lepiej".',
          isCorrect: false
        },
        {
          answer: 'C. utrzymywanie kontaktu wzrokowego.',
          isCorrect: true
        },
        {
          answer: 'D. utrzymywanie nadmiernego dystansu.',
          isCorrect: false
        },
        {
          answer: 'E. okazywanie braku akceptacji.',
          isCorrect: false
        }
      ]
    },
    {
      question: '172. Wskaż, co jest zabronione podczas udzielania kwalifikowanej pierwszej pomocy poszkodowanemu:',
      answers: [
        {
          answer: 'A. okazywanie braku zainteresowania tym, co mówi poszkodowany.',
          isCorrect: false
        },
        {
          answer: 'B. prezentowanie przez ratownika postawy ,ja wiem lepiej".',
          isCorrect: false
        },
        {
          answer: 'C. głośne zwracanie uwagi członkom zespołu ratowniczego.',
          isCorrect: false
        },
        {
          answer: 'D. stwarzanie dodatkowego zamieszania wokół poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są A, B, C, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '173. U poszkodowanych urazowych wsparcie psychiczne może prowadzić ratownik:',
      answers: [
        {
          answer: 'A. z wykształceniem psychologicznym.',
          isCorrect: false
        },
        {
          answer: 'B. specjalnie do tego celu przygotowany.',
          isCorrect: false
        },
        {
          answer: 'C. trzeci, który również m.in. opatruje rany.',
          isCorrect: false
        },
        {
          answer: 'D. dokonujący ręcznej stabilizacji odcinka szyjnego kręgosłupa.',
          isCorrect: true
        },
        {
          answer: 'E. drugi, który dokonuje jednocześnie badania urazowego.',
          isCorrect: false
        }
      ]
    },
    {
      question: '174. Od udzielających wsparcia psychicznego poszkodowany oczekuje:',
      answers: [
        {
          answer: 'A. okazywanie natrętnego zainteresowania jego stanem psychicznym.',
          isCorrect: false
        },
        {
          answer: 'B. akceptacji, zainteresowania, kontaktu wzrokowego i bycia otwarcie zdystansowanym.',
          isCorrect: false
        },
        {
          answer: 'C. akceptacji, zainteresowania, kontaktu wzrokowego i bycia dobrym słuchaczem.',
          isCorrect: true
        },
        {
          answer: 'D. akceptacji, zainteresowania, unikania kontaktu wzrokowego i bycia dobrym słuchaczem.',
          isCorrect: false
        },
        {
          answer: 'E. używania pod adresem poszkodowanego stwierdzeń w rodzaju „ja wiem lepiej", co daje mu pewność wysokich kompetencji ratownika.',
          isCorrect: false
        }
      ]
    },
    {
      question: '175. Podchodząc do poszkodowanego pozostającego po wypadku w pojeździe ratownik powinien:',
      answers: [
        {
          answer: 'A. zapytać, co się wydarzyło.',
          isCorrect: false
        },
        {
          answer: 'B. informować, co i w jakim celu będzie wykonywane.  przedstawić się.',
          isCorrect: false
        },
        {
          answer: 'C. powiedzieć, kim jest, zapytać, co się wydarzyło i informować, co i w jakim celu będzie wykonywane.',
          isCorrect: true
        },
        {
          answer: 'D. używać pod adresem poszkodowanego stwierdzeń w rodzaju „ja wiem lepiej", co daje mu pewność wysokich kompetencji ratownika.',
          isCorrect: false
        }
      ]
    },
    {
      question: '176. Po przybyciu na miejsce zdarzenia ekipy ratunkowej następuje rozpoznanie, które ma na celu:',
      answers: [
        {
          answer: 'A. rozpoznanie charakteru zdarzenia, jego okoliczności i udzielenie pierwszej pomocy.',
          isCorrect: false
        },
        {
          answer: 'B. rozpoznanie charakteru zdarzenia, jego okoliczności, rodzaju zagrożeń dla akcji i ustalenia dróg ewakuacji.',
          isCorrect: false
        },
        {
          answer: 'C. rozpoznanie charakteru zdarzenia, jego okoliczności, rodzaju zagrożeń dla akcji i ustalenia rodzaju sprzętu koniecznego do ewakuacji poszkodowanych.',
          isCorrect: false
        },
        {
          answer: 'D. rozpoznanie charakteru zdarzenia, jego okoliczności, rodzaju zagrożeń, ustalenie orientacyjnej liczby poszkodowanych, ustalenia priorytetów działania i ewentualne uznanie zdarzenia za masowe.',
          isCorrect: true
        },
        {
          answer: 'E. rozpoznanie charakteru zdarzenia, jego okoliczności, rodzaju zagrożeń dla akcji, ustalenie orientacyjnej liczby poszkodowanych i ich ewakuacja.',
          isCorrect: false
        }
      ]
    },
    {
      question: '177. W badaniu wstępnym osoby poszkodowanej bierzemy pod uwagę:',
      answers: [
        {
          answer: 'A. istnienie ewentualnych ran.',
          isCorrect: false
        },
        {
          answer: 'B. jedynie kontrolę ABC, ponieważ tylko te parametry są istotne.',
          isCorrect: false
        },
        {
          answer: 'C. urazy w obrębie kręgosłupa.',
          isCorrect: false
        },
        {
          answer: 'D. wypełnienie żył szyjnych.',
          isCorrect: false
        },
        {
          answer: 'E. ocena miejsca zdarzenia, ocena wstępna, szybkie badanie urazowe lub badanie miejscowe.',
          isCorrect: true
        }
      ]
    },
    {
      question: '178. Stabilizując bezprzyrządowo kręgosłup szyjny należy pamiętać, aby:',
      answers: [
        {
          answer: 'A. nie pociągać głowy w osi długiej i nie odchylać głowy poszkodowanego ku tyłowi.',
          isCorrect: true
        },
        {
          answer: 'B. co 2 minuty sprawdzać tętno na tętnicy szyjnej.',
          isCorrect: false
        },
        {
          answer: 'C. odchylić głowę poszkodowanego ku tyłowi, aby udrożnić drogi oddechowe.',
          isCorrect: false
        },
        {
          answer: 'D. ustabilizować przemieszczoną tchawicę.',
          isCorrect: false
        },
        {
          answer: 'E. zbytnio nie pociągać za głowę w osi długiej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '179. Podczas wykonywania defibrylacji należy:',
      answers: [
        {
          answer: 'A. co 2 minuty sprawdzać tętno na tętnicy szyjnej.',
          isCorrect: false
        },
        {
          answer: 'B. słuchać i wykonywać polecenia AED.',
          isCorrect: true
        },
        {
          answer: 'C. podtrzymywać odchyloną ku tyłowi głowę poszkodowanego, aby udrożnić drogi oddechowe.',
          isCorrect: false
        },
        {
          answer: 'D. ustabilizować przemieszczoną tchawicę.',
          isCorrect: false
        },
        {
          answer: 'E. naciskać elektrody, aby dobrze przylegały.',
          isCorrect: false
        }
      ]
    },
    {
      question: '180. Wsparcie psychiczne poszkodowanych powinno:',
      answers: [
        {
          answer: 'A. rozpocząć się w momencie przyjęcia do szpitala, gdyż pozwala to na osiągnięcie lepszych efektów terapeutycznych.',
          isCorrect: false
        },
        {
          answer: 'B. trwać do czasu osiągnięcia przez poszkodowanego równowagi psychicznej.',
          isCorrect: false
        },
        {
          answer: 'C. odbywać się tylko w obecności rodziny, co ułatwi powrót do zdrowia.',
          isCorrect: false
        },
        {
          answer: 'D. rozpocząć się jak najszybciej i trwać, w miarę możliwości, do czasu osiągnięcia przez poszkodowanego równowagi psychicznej.',
          isCorrect: true
        },
        {
          answer: 'E. rozpocząć się po ustaleniu diagnozy w celu jasnego sprecyzowania form leczenia powinno zostać wstrzymane.',
          isCorrect: false
        }
      ]
    },
    {
      question: '181. Najczęstsze objawy występujące w przypadku występowania odmy opłucnowej to:',
      answers: [
        {
          answer: 'A. zmniejszenie pojemności płuc.',
          isCorrect: false
        },
        {
          answer: 'B. ograniczenie ruchomości ściany klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'C. gwałtowny ból uciskający w klatce piersiowej, pojawiają się po silnym kaszlu, większym wysiłku fizycznym lub po urazie klatki piersiowej, zazwyczaj szybko narastająca duszność, przyspieszenie tętna, bladość powłok skórnych, nadmierna potliwość, pogłębiające się ogólne osłabienie.',
          isCorrect: true
        },
        {
          answer: 'D. prawdziwe A i B.',
          isCorrect: false
        },
        {
          answer: 'E. przesunięcie tchawicy.',
          isCorrect: false
        }
      ]
    },
    {
      question: '182. W przypadku złamania podudzia but zdejmujemy:',
      answers: [
        {
          answer: 'A. jak najwcześniej.',
          isCorrect: false
        },
        {
          answer: 'B. jeżeli występuje krwawienie.',
          isCorrect: false
        },
        {
          answer: 'C. przy stabilizacji ręcznej kończyny w pozycji zbliżonej do fizjologicznej.',
          isCorrect: false
        },
        {
          answer: 'D. przecinając go dla zmniejszenia ryzyka urazów wtórnych.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe B, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '183. Przy przepływie 15 l/min zawartość butli o pojemności 2,7 litra wypełnionej tlenem sprężonym do 150 atmosfer wystarczy na:',
      answers: [
        {
          answer: 'A. maksimum 20 minut tlenoterapii.',
          isCorrect: false
        },
        {
          answer: 'B. maksimum 27 minut tlenoterapii.',
          isCorrect: true
        },
        {
          answer: 'C. ponad 30 minut tlenoterapii.',
          isCorrect: false
        },
        {
          answer: 'D. maksimum 37 minut tlenoterapii.',
          isCorrect: false
        },
        {
          answer: 'E. ponad 40 minut tlenoterapii.',
          isCorrect: false
        }
      ]
    },
    {
      question: '184. Rana kłuta brzucha:',
      answers: [
        {
          answer: 'A. nie wyklucza odmy.',
          isCorrect: false
        },
        {
          answer: 'B. może stanowić bezpośrednie zagrożenie życia.',
          isCorrect: false
        },
        {
          answer: 'C. zawsze powoduje silny krwotok zewnętrzny.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe A i B.',
          isCorrect: true
        },
        {
          answer: 'E. prawdziwe A, B i C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '185. U poszkodowanego nieprzytomnego w przypadku niedrożności nosa zastępczą wentylację prowadzimy:',
      answers: [
        {
          answer: 'A. przy użyciu worka samorozprężalnego i alternatyw takich jak maska lub rurka krtaniowa.',
          isCorrect: false
        },
        {
          answer: 'B. przy użyciu maski worka samorozprężalnego trzymanej chwytem jednoręcznym (CE) z wykorzystaniem rurki ustno-gardłowej.',
          isCorrect: false
        },
        {
          answer: 'C. przy użyciu maski worka samorozprężalnego trzymanej chwytem jednoręcznym (CE).',
          isCorrect: false
        },
        {
          answer: 'D. tylko po udrożnieniu nosa przy pomocy urządzenia ssącego.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A i B.',
          isCorrect: true
        }
      ]
    },
    {
      question: '186. Skręcenie stawu skokowego:',
      answers: [
        {
          answer: 'A. traktuje się je jak złamanie.',
          isCorrect: false
        },
        {
          answer: 'B. traktujemy jak zwichnięcie.',
          isCorrect: false
        },
        {
          answer: 'C. stabilizujemy i unieruchamiamy w pozycji zastanej.',
          isCorrect: false
        },
        {
          answer: 'D. stabilizujemy i unieruchamiamy w pozycji zbliżonej do fizjologicznej.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '187. Złamanie otwarte:',
      answers: [
        {
          answer: 'A. to złamanie, w którym zawsze kość przebija skórę.',
          isCorrect: false
        },
        {
          answer: 'B. to złamanie z przerwaniem ciągłości skóry.',
          isCorrect: true
        },
        {
          answer: 'C. to złamanie, w którym na ranę zakładamy opatrunek uciskowy.',
          isCorrect: false
        },
        {
          answer: 'D. to złamanie, w którym nie wolno ruszać kończyny.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe B i D.',
          isCorrect: false
        }
      ]
    },
    {
      question: '188. Gdy poszkodowany niedosłyszy:',
      answers: [
        {
          answer: 'A. aby nawiązać kontakt krzyczymy do niego.',
          isCorrect: false
        },
        {
          answer: 'B. aby nawiązać kontakt przybliżamy usta do jego ucha.',
          isCorrect: false
        },
        {
          answer: 'C. rezygnujemy z kontaktu głosowego na rzecz gestów.',
          isCorrect: false
        },
        {
          answer: 'D. wspomagamy wypowiedź gestami.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe B i D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '189. Utrata przytomności jest niebezpieczna, ponieważ:',
      answers: [
        {
          answer: 'A. zawsze jest objawem zatrzymania krążenia.',
          isCorrect: false
        },
        {
          answer: 'B. dochodzi do osłabienia i /lub zniesienia odruchów obronnych.',
          isCorrect: true
        },
        {
          answer: 'C. nieuchronnie prowadzi do zatrzymania krążenia.',
          isCorrect: false
        },
        {
          answer: 'D. prawdziwe B i C.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie fałszywe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '190. Nudności i wymioty u poszkodowanego w wypadku drogowym:',
      answers: [
        {
          answer: 'A. mogą być normalną reakcją na drastyczne widoki.',
          isCorrect: false
        },
        {
          answer: 'B. mogą być objawem niedotlenienia mózgu.',
          isCorrect: false
        },
        {
          answer: 'C. mogą być objawem obrażeń mózgu.',
          isCorrect: false
        },
        {
          answer: 'D. są zjawiskiem przemijającym.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe A, B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '191. Jaka jest prawidłowa kolejność czynności niezbędnych do skutecznej resuscytacji osób, u których doszło do nagłego zatrzymania krążenia według koncepcji zwanej „łańcuchem przeżycia"? 1. wczesna defibrylacja. 2. wczesne wezwanie pomocy. 3. wczesne rozpoczęcie RKO. 4. opieka poresuscytacyjna. 5. wczesne rozpoznanie. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 3, 2, 5, 4.',
          isCorrect: false
        },
        {
          answer: 'B. 5, 2, 3, 1, 4.',
          isCorrect: true
        },
        {
          answer: 'C. 2, 3, 4, 1, 5.',
          isCorrect: false
        },
        {
          answer: 'D. 1, 2, 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 5, 2, 4, 1, 3.',
          isCorrect: false
        }
      ]
    },
    {
      question: '192. Jeśli podczas oceny czynności życiowych masz wątpliwości czy doszło do zatrzymania krążenia powinieneś:',
      answers: [
        {
          answer: 'A. wydłużyć ocenę o kolejne 10 sekund.',
          isCorrect: false
        },
        {
          answer: 'B. rozpocząć wentylacje bez uciskania klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'C. rozpocząć resuscytację krążeniowo-oddechową.',
          isCorrect: true
        },
        {
          answer: 'D. ułożyć poszkodowanego w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'E. podłączyć AED i postępować zgodnie z jego poleceniami.',
          isCorrect: false
        }
      ]
    },
    {
      question: '193. Którą z bezprzyrządowych metod udrażniania dróg oddechowych zastosujesz w pierwszej kolejności u osoby z podejrzeniem urazu szyjnego odcinka rdzenia kręgowego?',
      answers: [
        {
          answer: 'A. odgięcie głowy.',
          isCorrect: false
        },
        {
          answer: 'B. wysunięcie żuchwy.',
          isCorrect: true
        },
        {
          answer: 'C. odgięcie głowy połączone z wysunięciem żuchwy.',
          isCorrect: false
        },
        {
          answer: 'D. odgięcie głowy połączone z uniesieniem żuchwy.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A, D.',
          isCorrect: false
        }
      ]
    },
    {
      question: '194. Która z poniższych czynności zabezpiecza dolne drogi oddechowe przed zachłyśnięciem treścią płynną?',
      answers: [
        {
          answer: 'A. założenie rurki ustno-gardłowej.',
          isCorrect: false
        },
        {
          answer: 'B. odessanie.',
          isCorrect: false
        },
        {
          answer: 'C. ułożenie w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'D. prawidłowe są odpowiedzi B, C.',
          isCorrect: true
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A, B, C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '195. Która z poniższych metod tlenoterapii zapewnia uzyskanie około 85% stężenia tlenu w mieszaninie oddechowej?',
      answers: [
        {
          answer: 'A. wąsy tlenowe zasilane tlenem o przepływie 6 l/min.',
          isCorrect: false
        },
        {
          answer: 'B. worek samorozprężalny bez rezerwuaru z podłączonym tlenem o przepływie 10 l/min.',
          isCorrect: false
        },
        {
          answer: 'C. maska do tlenoterapii biernej bez rezerwuaru z podłączonym tlenem o przepływie 15 l/min.',
          isCorrect: false
        },
        {
          answer: 'D. maska do tlenoterapii biernej z rezerwuarem z podłączonym tlenem o przepływie 8 l/min.',
          isCorrect: false
        },
        {
          answer: 'E.  maska do tlenoterapii biernej z rezerwuarem podłączona tlenem       o przepływie 15 l/min.',
          isCorrect: true
        }
      ]
    },
    {
      question: '196. Które z poniższych działań dotyczących prowadzenia wentylacji zastępczej u osoby dorosłej w trakcie resuscytacji krążeniowo-oddechowej negatywnie wpływają na jej skuteczność?',
      answers: [
        {
          answer: 'A. wykonanie pojedynczego oddechu w czasie około 1 sekundy.',
          isCorrect: false
        },
        {
          answer: 'B. gwałtowne ściskanie worka samorozprężalnego.',
          isCorrect: true
        },
        {
          answer: 'C. wykonanie dwóch oddechów zastępczych w czasie nie przekraczającym 5 sekund.',
          isCorrect: false
        },
        {
          answer: 'D. stosowanie objętości pojedynczego oddechu powodującego widoczne unoszenie się klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'E. wykonywanie uciśnięć klatki piersiowej i wentylacji płuc w stosunku 30:2. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '197. Które z poniższych działań negatywnie wpływa na efektywność uciśnięć klatki piersiowej obniżając skuteczność resuscytacji krążeniowo-oddechowej?',
      answers: [
        {
          answer: 'A. uciskanie klatki piersiowej z częstotliwością co najmniej 100 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'B. rozpoczęcie uciskania klatki piersiowej zanim całkowicie powróci do pozycji wyjściowej.',
          isCorrect: true
        },
        {
          answer: 'C. minimalizowanie przerw pomiędzy kolejnymi seriami uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. zmiany osoby wykonującej uciskanie klatki piersiowej co 2 minuty.',
          isCorrect: false
        },
        {
          answer: 'E. uciskanie klatki piersiowej na głębokość co najmniej 5 cm u osoby dorosłej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '198. Które z poniższych objawów występujących u osoby dorosłej, która w trakcie jedzenia zakrztusiła się pokarmem, są charakterystyczne dla ciężkiej niedrożności dróg oddechowych? 1. bezgłośny kaszel. 2. głośny kaszel. 3. niemożność oddychania. 4. postępująca utrata przytomności. 5. możliwość swobodnego mówienia. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 3, 5.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 4.',
          isCorrect: true
        },
        {
          answer: 'C. 3, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'D. 1, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 2, 4, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '199. Które z poniższych objawów występujących u dziecka, które w trakcie jedzenia zakrztusiło się pokarmem, są charakterystyczne dla łagodnej niedrożności dróg oddechowych? 1. bezgłośny kaszel. 2. głośny kaszel. 3. sinica. 4. możliwość nabrania powietrza przed kaszlem. 5. głośny płacz. Prawidłowa odpowiedź to. ',
      answers: [
        {
          answer: 'A. 1, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2, 5.',
          isCorrect: false
        },
        {
          answer: 'C. 2, 4, 5.',
          isCorrect: true
        },
        {
          answer: 'D. 1, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'E. 3, 4, 5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '200. Które z poniższych stwierdzeń dotyczących użycia rurki ustno-gardłowej jest nieprawdziwe?',
      answers: [
        {
          answer: 'A. jest zalecana podczas wentylacji workiem samorozprężalnym z maską twarzową.',
          isCorrect: false
        },
        {
          answer: 'B. zabezpiecza przed zachłyśnięciem.',
          isCorrect: true
        },
        {
          answer: 'C. może spowodować niedrożność.',
          isCorrect: false
        },
        {
          answer: 'D. może prowokować wymioty.',
          isCorrect: false
        },
        {
          answer: 'E. jest dostępna w rozmiarach dla dzieci i dorosłych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '201. Które ze stwierdzeń odnoszących się do prowadzenia resuscytacji krążeniowo-oddechowej u nieprzytomnej osoby dorosłej z całkowitą niedrożnością dróg oddechowych spowodowanej ciałem obcym są prawdziwe? 1. przed rozpoczęciem podawania oddechów ratowniczych należy podjąć próbę usunięcia palcem z jamy ustnej niewidocznych ciał obcych. 2. należy rozpocząć RKO od 30 uciśnięć klatki piersiowej bezzwłocznie jak tylko poszkodowany przestanie odpowiadać lub straci przytomność. 3. należy sprawdzić zawartość jamy ustnej w poszukiwaniu ciała obcego przed rozpoczęciem wykonywania oddechów ratowniczych. 4. należy rozpocząć uciskanie klatki piersiowej tylko w sytuacji braku tętna na tętnicy szyjnej. 5. uciśnięcia klatki piersiowej i oddechy ratownicze należy prowadzić w sekwencji 30:2. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 2, 3.',
          isCorrect: false
        },
        {
          answer: 'B. 2, 4, 5.',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 5.',
          isCorrect: true
        },
        {
          answer: 'D. 2, 3, 4.',
          isCorrect: false
        },
        {
          answer: 'E. 1, 4, 5. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '202. Miejsce uciskania klatki piersiowej podczas resuscytacji krążeniowo- oddechowej to:',
      answers: [
        {
          answer: 'A. tuż pod linią łącząca sutki.',
          isCorrect: false
        },
        {
          answer: 'B. środek linii łączącej sutki.',
          isCorrect: false
        },
        {
          answer: 'C. górna połowa mostka.',
          isCorrect: false
        },
        {
          answer: 'D. środek mostka.',
          isCorrect: false
        },
        {
          answer: 'E. środek klatki piersiowej (dolna połowa mostka).',
          isCorrect: true
        }
      ]
    },
    {
      question: '203. Odgłos bulgotania u nieprzytomnej osoby leżącej na plecach jest charakterystyczny dla wystąpienia częściowej niedrożności dróg oddechowych na skutek:',
      answers: [
        {
          answer: 'A. kurczu krtani.',
          isCorrect: false
        },
        {
          answer: 'B. obecności treści płynnej.',
          isCorrect: true
        },
        {
          answer: 'C. obecności ciała obcego.',
          isCorrect: false
        },
        {
          answer: 'D. zapadnięcia języka na tylną ścianę gardła.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '204. Odgłos charczenia (chrapania) u nieprzytomnej osoby leżącej na plecach jest charakterystyczny dla wystąpienia częściowej niedrożności dróg oddechowych na skutek:',
      answers: [
        {
          answer: 'A. kurczu krtani.',
          isCorrect: false
        },
        {
          answer: 'B. obecności treści płynnej.',
          isCorrect: false
        },
        {
          answer: 'C. obecności ciała obcego.',
          isCorrect: false
        },
        {
          answer: 'D. opadnięcia języka na tylną ścianę gardła.',
          isCorrect: true
        },
        {
          answer: 'E. wszystkie odpowiedzi są prawidłowe.',
          isCorrect: false
        }
      ]
    },
    {
      question: '205. Odgłos świstu lub stridoru u 4-letniego dziecka może wskazywać na częściową niedrożność dróg oddechowych spowodowaną:',
      answers: [
        {
          answer: 'A.  obecnością ciała obcego.',
          isCorrect: false
        },
        {
          answer: 'B.  obecnością treści płynnej.',
          isCorrect: false
        },
        {
          answer: 'C.  kurczem krtani.',
          isCorrect: false
        },
        {
          answer: 'D. zapadnięciem języka na tylną ścianę gardła.',
          isCorrect: false
        },
        {
          answer: 'E.  prawidłowe są odpowiedzi A, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '206. Podczas oceny czynności życiowych u 8-miesięcznego dziecka badanie tętna wykonasz na:',
      answers: [
        {
          answer: 'A. tętnicy szyjnej.',
          isCorrect: false
        },
        {
          answer: 'B. tętnicy pachowej.',
          isCorrect: false
        },
        {
          answer: 'C. tętnicy ramieniowej.',
          isCorrect: false
        },
        {
          answer: 'D. tętnicy pachwinowej.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '207. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 8-miesięcznego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 3:1.',
          isCorrect: false
        },
        {
          answer: 'B. 5:1.',
          isCorrect: false
        },
        {
          answer: 'C. 15:1.',
          isCorrect: false
        },
        {
          answer: 'D. 15:2.',
          isCorrect: true
        },
        {
          answer: 'E. 30:2.',
          isCorrect: false
        }
      ]
    },
    {
      question: '208. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 6 letniego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 10:2.',
          isCorrect: false
        },
        {
          answer: 'B. 15:2.',
          isCorrect: true
        },
        {
          answer: 'C. 20:2.',
          isCorrect: false
        },
        {
          answer: 'D. 30:2.',
          isCorrect: false
        },
        {
          answer: 'E. 30:5.',
          isCorrect: false
        }
      ]
    },
    {
      question: '209. Podczas prowadzenia resuscytacji krążeniowo-oddechowej u osoby dorosłej stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 15:2.',
          isCorrect: false
        },
        {
          answer: 'B. 20:2.',
          isCorrect: false
        },
        {
          answer: 'C. 30:1.',
          isCorrect: false
        },
        {
          answer: 'D. 30:2.',
          isCorrect: true
        },
        {
          answer: 'E. 30:3.',
          isCorrect: false
        }
      ]
    },
    {
      question: '210. Podczas prowadzenia resuscytacji krążeniowo-oddechowej noworodka, u którego zaraz po urodzeniu (świeżorodek) nie stwierdzono oznak życia, stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 3:1.',
          isCorrect: true
        },
        {
          answer: 'B. 5:1.',
          isCorrect: false
        },
        {
          answer: 'C. 15:2.',
          isCorrect: false
        },
        {
          answer: 'D. 15:5.',
          isCorrect: false
        },
        {
          answer: 'E. 30:2.',
          isCorrect: false
        }
      ]
    },
    {
      question: '211. Podczas prowadzenia resuscytacji krążeniowo-oddechowej u 6-letniego dziecka uciskanie klatki piersiowej powinno się wykonywać z częstotliwością:',
      answers: [
        {
          answer: 'A. 80-100 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'B. 100-120 razy na minutę.',
          isCorrect: true
        },
        {
          answer: 'C. 120-130 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'D. 130-140 razy na minutę.',
          isCorrect: false
        },
        {
          answer: 'E. > 140 razy na minutę.',
          isCorrect: false
        }
      ]
    },
    {
      question: '212. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 7-miesięcznego dziecka uciskanie klatki piersiowej powinno się wykonywać:',
      answers: [
        {
          answer: 'A. dwoma palcami jednej ręki.',
          isCorrect: false
        },
        {
          answer: 'B. palcem wskazującym.',
          isCorrect: false
        },
        {
          answer: 'C. dwoma kciukami, podczas gdy dłonie obejmują klatkę piersiową.',
          isCorrect: true
        },
        {
          answer: 'D. dłonią jednej ręki.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A, D.',
          isCorrect: false
        }
      ]
    },
    {
      question: '213. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 8-miesięcznego dziecka uciskanie klatki piersiowej powinno się wykonywać:',
      answers: [
        {
          answer: 'A. dwoma palcami jednej ręki.',
          isCorrect: false
        },
        {
          answer: 'B. palcem wskazującym.',
          isCorrect: false
        },
        {
          answer: 'C. metodą dwóch kciuków, podczas gdy dłonie obejmują klatkę piersiową.',
          isCorrect: true
        },
        {
          answer: 'D. dłonią jednej ręki.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A, B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '214. Podczas prowadzenia resuscytacji krążeniowo-oddechowej u 8-miesięcznego dziecka uciskanie klatki piersiowej powinno się wykonywać na głębokość:',
      answers: [
        {
          answer: 'A. 1/4 wymiaru przednio-tylnego.',
          isCorrect: false
        },
        {
          answer: 'B. 1/3 wymiaru przednio-tylnego.',
          isCorrect: true
        },
        {
          answer: 'C. 1/2 wymiaru przednio-tylnego.',
          isCorrect: false
        },
        {
          answer: 'D. 2/3 wymiaru przednio-tylnego.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '215. Aby rozpoznać nagłe zatrzymanie krążenia u osoby dorosłej, która jest głęboko nieprzytomna konieczne jest stwierdzenie:',
      answers: [
        {
          answer: 'A. braku oddechu.',
          isCorrect: true
        },
        {
          answer: 'B. braku tętna na tętnicy szyjnej.',
          isCorrect: false
        },
        {
          answer: 'C. oddechu agonalnego.',
          isCorrect: false
        },
        {
          answer: 'D. prawidłowe są odpowiedzi A, B.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A, C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '216. Udzielasz pomocy dorosłej osobie potrąconej przez samochód osobowy. Ofiara leży na plecach, jest głęboko nieprzytomna, a ty utrzymujesz drożność dróg oddechowych metodą wysunięcia żuchwy. W pewnym momencie poszkodowany zaczyna wymiotować. Prawidłowe postępowanie w pierwszej kolejności będzie polegało na:',
      answers: [
        {
          answer: 'A. ułożeniu w pozycji bezpiecznej.',
          isCorrect: false
        },
        {
          answer: 'B. obróceniu głowy na bok.',
          isCorrect: false
        },
        {
          answer: 'C. wygarnięciu palcem wymiocin.',
          isCorrect: false
        },
        {
          answer: 'D. obróceniu na bok z utrzymaniem głowy i szyi w osi podłużnej ciała.',
          isCorrect: true
        },
        {
          answer: 'E. odgięciu głowy do tyłu.',
          isCorrect: false
        }
      ]
    },
    {
      question: '217. Udzielasz pomocy dorosłej osobie, która jest nieprzytomna, oddycha płytko, wolno i nieregularnie. W pewnym momencie doszło do zatrzymania oddechu, tętno na tętnicy szyjnej jest wyczuwalne. Z jaką częstotliwością będziesz prowadził wentylację zastępczą za pomocą worka samorozprężalnego i maski twarzowej?',
      answers: [
        {
          answer: 'A. 6 oddechów na minutę.',
          isCorrect: false
        },
        {
          answer: 'B. 8 oddechów na minutę.',
          isCorrect: false
        },
        {
          answer: 'C. 10 oddechów na minutę.',
          isCorrect: true
        },
        {
          answer: 'D. 12 oddechów na minutę.',
          isCorrect: false
        },
        {
          answer: 'E. 20 oddechów na minutę.',
          isCorrect: false
        }
      ]
    },
    {
      question: '218. Udzielasz pomocy kobiecie w zaawansowanej ciąży, która nagle osunęła się na ziemię, jest nieprzytomna, oddycha prawidłowo z częstością 15 razy na minutę. W tej sytuacji najwłaściwsze będzie ułożenie pacjentki w pozycji:',
      answers: [
        {
          answer: 'A. leżącej na plecach z nogami uniesionymi 30 cm powyżej tułowia.',
          isCorrect: false
        },
        {
          answer: 'B. bezpiecznej na lewym boku.',
          isCorrect: true
        },
        {
          answer: 'C. bezpiecznej na prawym boku.',
          isCorrect: false
        },
        {
          answer: 'D. półleżącej z pochyleniem tułowia o 30%.',
          isCorrect: false
        },
        {
          answer: 'E. leżącej na plecach z nogami zgiętymi w stawach kolanowych.',
          isCorrect: false
        }
      ]
    },
    {
      question: '219. W przypadku 2-letniego dziecka, które podczas jedzenia zakrztusiło się pokarmem i pomimo prób usunięcia ciała obcego nie może nabrać powietrza, straciło przytomność i upadło na ziemię, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uciśnięć nadbrzusza oraz 5 oddechów ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 5 oddechów ratowniczych, a następnie rozpoczęciu resuscytacji krążeniowo-oddechowej.',
          isCorrect: true
        },
        {
          answer: 'E. próbie usunięcia palcem niewidocznego ciała obcego z jamy ustnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '220. W przypadku 2-letniego dziecka, które podczas jedzenia zakrztusiło się pokarmem, jest przytomne, głośno kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. ocenie stanu dziecka.',
          isCorrect: true
        },
        {
          answer: 'B. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'E. próbie usunięcia palcem niewidocznego ciała obcego z jamy ustnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '221. W przypadku 2-letniego dziecka, które podczas jedzenia zakrztusiło się pokarmem, jest przytomne, nie może nabrać powietrza, bezgłośnie kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. prawidłowe są odpowiedzi A i B.',
          isCorrect: true
        },
        {
          answer: 'E. prawidłowe są odpowiedzi A i C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '222. W przypadku 6-miesięcznego dziecka, które podczas jedzenia zakrztusiło się pokarmem i pomimo prób usunięcia ciała obcego nie może nabrać powietrza, straciło przytomność, jest wiotkie, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'B. próbie usunięcia palcem niewidocznego ciała obcego z jamy ustnej.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 5 oddechów ratowniczych, a następnie rozpoczęciu resuscytacji krążeniowo-oddechowej.',
          isCorrect: true
        },
        {
          answer: 'E. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        }
      ]
    },
    {
      question: '223. W przypadku 6-miesięcznego dziecka, które podczas jedzenia zakrztusiło się pokarmem, jest przytomne, głośno kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'C. ocenie stanu dziecka.',
          isCorrect: true
        },
        {
          answer: 'D. wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'E. próbie usunięcia palcem niewidocznego ciała obcego z jamy ustnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '224. W przypadku 6-miesięcznego dziecka, które podczas jedzenia zakrztusiło się pokarmem, jest przytomne, nie może nabrać powietrza, bezgłośnie kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. w pozycji stojącej wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'B. ułożeniu na przedramieniu główką w dół, następnie wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. ułożeniu na przedramieniu główką w dół, następnie wykonaniu 5 uciśnięć klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. prawidłowe są odpowiedzi A i B.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi B i C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '225. W przypadku dorosłej osoby, która podczas jedzenia zakrztusiła się pokarmem i pomimo prób usunięcia ciała obcego z dróg oddechowych nie może nabrać powietrza, straciła przytomność i upadła na ziemię, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. zbadaniu tętna na tętnicy szyjnej.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 oddechów ratowniczych.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 30 uciśnięć klatki piersiowej.',
          isCorrect: true
        },
        {
          answer: 'E. próbie usunięcia niewidocznego ciała obcego z jamy ustnej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '226. W przypadku dorosłej osoby, która podczas jedzenia zakrztusiła się pokarmem, jest przytomna i głośno kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. zachęcaniu do spontanicznego kaszlu.',
          isCorrect: true
        },
        {
          answer: 'B. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'D. próbie wygarnięcia palcem ciała obcego z jamy ustnej.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są odpowiedzi B i C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '227. W przypadku dorosłej osoby, która podczas jedzenia zakrztusiła się pokarmem, jest przytomna, nie może nabrać powietrza, bezgłośnie kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. zachęcaniu do spontanicznego kaszlu.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'D. próbie wygarnięcia palcem ciała obcego z jamy ustnej.',
          isCorrect: false
        },
        {
          answer: 'E. wykonaniu 5 uderzeń w okolicę międzyłopatkową, a następnie 5 uciśnięć nadbrzusza.',
          isCorrect: true
        }
      ]
    },
    {
      question: '228. W przypadku kobiety będącej w 8 miesiącu ciąży, która podczas jedzenia zakrztusiła się pokarmem, jest przytomna, nie może nabrać powietrza, bezgłośnie kaszle, prawidłowe postępowanie polega na:',
      answers: [
        {
          answer: 'A. zachęcaniu do spontanicznego kaszlu.',
          isCorrect: false
        },
        {
          answer: 'B. wykonaniu 5 uderzeń w okolicę międzyłopatkową.',
          isCorrect: false
        },
        {
          answer: 'C. wykonaniu 5 uciśnięć nadbrzusza.',
          isCorrect: false
        },
        {
          answer: 'D. wykonaniu 5 uderzeń w okolicę międzyłopatkową, a następnie 5 uciśnięć na wysokości klatki piersiowej.',
          isCorrect: true
        },
        {
          answer: 'E. wykonaniu 5 uderzeń w okolice międzyłopatkową, a następnie 5 uciśnięć nadbrzusza.',
          isCorrect: false
        }
      ]
    },
    {
      question: '229. W trakcie resuscytacji krążeniowo-oddechowej kobiety w zaawansowanej ciąży, aby zmniejszyć ucisk macicy na aortę i żyłę główną dolną zaleca się:',
      answers: [
        {
          answer: 'A. ręczne przesunięcie macicy na lewą stronę.',
          isCorrect: false
        },
        {
          answer: 'B. ręczne przesunięcie macicy na prawą stronę.',
          isCorrect: false
        },
        {
          answer: 'C. pochylenie na prawą stronę pod kątem 30° w osi długiej ciała.',
          isCorrect: false
        },
        {
          answer: 'D. przechylenie na lewą stronę w osi długiej ciała.',
          isCorrect: true
        },
        {
          answer: 'E. uniesienie nóg 30 cm powyżej tułowia.',
          isCorrect: false
        }
      ]
    },
    {
      question: '230. W trakcie resuscytacji krążeniowo-oddechowej podczas uciskania klatki piersiowej doszło do złamania żeber. Właściwe postępowanie polega na:',
      answers: [
        {
          answer: 'A. zmniejszeniu głębokości uciśnięć.',
          isCorrect: false
        },
        {
          answer: 'B. zmniejszeniu częstości uciśnięć.',
          isCorrect: false
        },
        {
          answer: 'C. zmianie miejsca uciskania klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. sprawdzeniu poprawności ułożenia rąk na klatce piersiowej.',
          isCorrect: true
        },
        {
          answer: 'E. zaprzestaniu uciskania klatki piersiowej.',
          isCorrect: false
        }
      ]
    },
    {
      question: '231. Wybierając odpowiedni rozmiar rurki ustno-gardłowej należy kierować się:',
      answers: [
        {
          answer: 'A. masą ciała poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'B. wzrostem poszkodowanego.',
          isCorrect: false
        },
        {
          answer: 'C. grubością małego palca u ręki.',
          isCorrect: false
        },
        {
          answer: 'D. odległością od skrzydełek nosa do kąta żuchwy.',
          isCorrect: false
        },
        {
          answer: 'E. odległością od płatka ucha do kącika ust.',
          isCorrect: true
        }
      ]
    },
    {
      question: '232. Zgodnie z wytycznymi ERC termin dziecko dotyczy osób:',
      answers: [
        {
          answer: 'A. o masie ciała < 50 kg.',
          isCorrect: false
        },
        {
          answer: 'B. w wieku od narodzin do 18 roku życia.',
          isCorrect: false
        },
        {
          answer: 'C. w wieku od 1 roku życia do 8 roku życia.',
          isCorrect: false
        },
        {
          answer: 'D. w wieku od 1 roku do momentu przed osiągnięciem widocznych cech pokwitania.',
          isCorrect: true
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '233. Zastosowanie rurki ustno-gardłowej w celu utrzymania drożności dróg oddechowych jest wskazane u osoby:',
      answers: [
        {
          answer: 'A. tylko głęboko nieprzytomnej.',
          isCorrect: true
        },
        {
          answer: 'B. z zachowanym odruchem wymiotnym.',
          isCorrect: false
        },
        {
          answer: 'C. w trakcie napadu drgawek z towarzyszącym szczękościskiem.',
          isCorrect: false
        },
        {
          answer: 'D. ze świstami oddechowymi podczas oddychania.',
          isCorrect: false
        },
        {
          answer: 'E. z urazem twarzoczaszki.',
          isCorrect: false
        }
      ]
    },
    {
      question: '234. Defibrylację, przy pomocy AED, wykonuje się w:',
      answers: [
        {
          answer: 'A. migotaniu komór i częstoskurczu komorowym bez tętna.',
          isCorrect: true
        },
        {
          answer: 'B. asystoli.',
          isCorrect: false
        },
        {
          answer: 'C. częstoskurczu nadkomorowym.',
          isCorrect: false
        },
        {
          answer: 'D. migotaniu przedsionków.',
          isCorrect: false
        },
        {
          answer: 'E. nadkomorowych zaburzeniach rytmu serca.',
          isCorrect: false
        }
      ]
    },
    {
      question: '235. Krwawiącą ranę kłutą klatki piersiowej zabezpieczysz:',
      answers: [
        {
          answer: 'A. opatrunkiem zastawkowym.',
          isCorrect: false
        },
        {
          answer: 'B. zabezpieczę opatrunkiem uciskowym.',
          isCorrect: false
        },
        {
          answer: 'C. pozostawię bez opatrunku oraz zastosuję ucisk bezpośredni w miejscu krwawienia.',
          isCorrect: false
        },
        {
          answer: 'D. zastosuje opatrunek hemostatyczny.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowa odpowiedź A, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '236. Opatrunek hemostatyczny stosuje się gdy:',
      answers: [
        {
          answer: 'A. bezpośredni ucisk nie tamuje silnego krwawienia.',
          isCorrect: false
        },
        {
          answer: 'B. w miejscu gdzie bezpośredni ucisk nie jest możliwy.',
          isCorrect: false
        },
        {
          answer: 'C. obrażeniem jest kłuta rana klatki piersiowej.',
          isCorrect: false
        },
        {
          answer: 'D. obrażeniem jest głęboka krwawiąca rana penetrująca.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowa odpowiedz to A, B, D.',
          isCorrect: true
        }
      ]
    },
    {
      question: '237. Właściwy rozmiar maski krtaniowej dobiera się na podstawie:',
      answers: [
        {
          answer: 'A. wzrostu',
          isCorrect: false
        },
        {
          answer: 'B. masy ciała',
          isCorrect: true
        },
        {
          answer: 'C. masy ciała i Wzrostu',
          isCorrect: false
        },
        {
          answer: 'D. od kącika ust do górnego uzębienia.',
          isCorrect: false
        },
        {
          answer: 'E. wzoru.',
          isCorrect: false
        }
      ]
    },
    {
      question: '238. Prawidłowy rozmiar rurki krtaniowej (dotyczy rozmiarów 5, 4, 3) dobiera się na podstawie:',
      answers: [
        {
          answer: 'A. wzrostu',
          isCorrect: true
        },
        {
          answer: 'B. masy ciała',
          isCorrect: false
        },
        {
          answer: 'C. masy ciała i Wzrostu',
          isCorrect: false
        },
        {
          answer: 'D. od kącika ust do górnego uzębienia.',
          isCorrect: false
        },
        {
          answer: 'E. wzoru.',
          isCorrect: false
        }
      ]
    },
    {
      question: '239. Odma opłucnowa może występować w następujących postaciach:',
      answers: [
        {
          answer: 'A. otwartej.',
          isCorrect: false
        },
        {
          answer: 'B. zamkniętej.',
          isCorrect: false
        },
        {
          answer: 'C. prężnej.',
          isCorrect: false
        },
        {
          answer: 'D. poprawne odpowiedzi A, C.',
          isCorrect: false
        },
        {
          answer: 'E. poprawne odpowiedzi A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '240. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez jednego ratownika u 6-miesięcznego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 3:1.',
          isCorrect: false
        },
        {
          answer: 'B. 5:1.',
          isCorrect: false
        },
        {
          answer: 'C. 15:1.',
          isCorrect: false
        },
        {
          answer: 'D. 15:2.',
          isCorrect: true
        },
        {
          answer: 'E. 30:2.',
          isCorrect: false
        }
      ]
    },
    {
      question: '241. Zgodnie z wytycznymi ERC termin niemowlę dotyczy osób:',
      answers: [
        {
          answer: 'A. o masie ciała < 50 kg.',
          isCorrect: false
        },
        {
          answer: 'B. w wieku od narodzin do 18 roku życia.',
          isCorrect: false
        },
        {
          answer: 'C. w wieku od pierwszego miesiąca do 1 roku życia.',
          isCorrect: true
        },
        {
          answer: 'D. w wieku od 1 roku do momentu przed osiągnięciem widocznych cech pokwitania.',
          isCorrect: false
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa.',
          isCorrect: false
        }
      ]
    },
    {
      question: '242. Zgodnie z wytycznymi ERC termin noworodek dotyczy osób:',
      answers: [
        {
          answer: 'A. w wieku od pierwszego miesiąca do 1 roku życia.',
          isCorrect: false
        },
        {
          answer: 'B. w wieku od narodzin do 18 roku życia.',
          isCorrect: false
        },
        {
          answer: 'C. w wieku od miesiąca do 2 roku życia.',
          isCorrect: false
        },
        {
          answer: 'D. w wieku od narodzin do pierwszego miesiąca życia.',
          isCorrect: true
        },
        {
          answer: 'E. żadna z odpowiedzi nie jest prawidłowa',
          isCorrect: false
        }
      ]
    },
    {
      question: '243. Zgodnie z wytycznymi ERC termin „świeżorodek" dotyczy osób:',
      answers: [
        {
          answer: 'A. w wieku od pierwszego miesiąca do 1 roku życia.',
          isCorrect: false
        },
        {
          answer: 'B. w wieku od narodzin do 18 roku życia.',
          isCorrect: false
        },
        {
          answer: 'C. w wieku od miesiąca do 2 roku życia.',
          isCorrect: false
        },
        {
          answer: 'D. w wieku od narodzin do pierwszego miesiąca życia.',
          isCorrect: false
        },
        {
          answer: 'E. noworodka od narodzin do kilku godzin po porodzie.',
          isCorrect: true
        }
      ]
    },
    {
      question: '244. Wykonując defibrylacje u kobiety w zaawansowanej ciąży, należy pamiętać aby:',
      answers: [
        {
          answer: 'A. ułożyć poszkodowaną na prawym boku.',
          isCorrect: false
        },
        {
          answer: 'B. ułożyć poszkodowaną na plecach.',
          isCorrect: false
        },
        {
          answer: 'C. przyklejając elektrody jedną umieścić pod prawym obojczykiem drugą wysoko pod lewą pachą.',
          isCorrect: true
        },
        {
          answer: 'D. wszystkie czynności wykonujemy jak u poszkodowanej nie będącej w ciąży.',
          isCorrect: false
        },
        {
          answer: 'E. przed wykonaniem defibrylacji należy zmienić elektrody na pediatryczne.',
          isCorrect: false
        }
      ]
    },
    {
      question: '245. Dla dziecka powyżej pierwszego roku życia chcąc użyć AED należy:',
      answers: [
        {
          answer: 'A. użyć elektrod pediatrycznych.',
          isCorrect: false
        },
        {
          answer: 'B. przełączyć urządzenie na tryb pediatryczny celem zmiany energii defibrylacji do 4kJ/kg/mc.',
          isCorrect: false
        },
        {
          answer: 'C. jeżeli nie posiadasz AED z kluczem pediatrycznym, możesz użyć AED dla osoby dorosłej.',
          isCorrect: false
        },
        {
          answer: 'D. poprawne odpowiedzi to A, B.',
          isCorrect: false
        },
        {
          answer: 'E. poprawne odpowiedzi to A, B, C.',
          isCorrect: true
        }
      ]
    },
    {
      question: '246. Przyrządowe udrożnienie dróg oddechowych stosowane dla osoby poszkodowanej mogące być zastosowane przez ratownika kpp to:',
      answers: [
        {
          answer: 'A. rurka ustno-gardłowa.',
          isCorrect: false
        },
        {
          answer: 'B. maska krtaniowa.',
          isCorrect: false
        },
        {
          answer: 'C. rurka krtaniowa.',
          isCorrect: false
        },
        {
          answer: 'D. rurka nosowo-gardłowa.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie odpowiedzi są poprawne.',
          isCorrect: true
        }
      ]
    },
    {
      question: '247. Typowe objawy udaru to:',
      answers: [
        {
          answer: 'A. bełkotliwa mowa',
          isCorrect: false
        },
        {
          answer: 'B. zaburzenia równowagi.',
          isCorrect: false
        },
        {
          answer: 'C. opadnięty kącik ust.',
          isCorrect: false
        },
        {
          answer: 'D. połowiczne porażenie ciała, częściowe lub całkowite.',
          isCorrect: false
        },
        {
          answer: 'E. wszystkie odpowiedzi są poprawne.',
          isCorrect: true
        }
      ]
    },
    {
      question: '248. Najbardziej prawdopodobną przyczyną nagłego zatrzymania krążenia u osób dorosłych jest/ są:',
      answers: [
        {
          answer: 'A. uraz głowy.',
          isCorrect: false
        },
        {
          answer: 'B. niewydolność krążeniowa.',
          isCorrect: true
        },
        {
          answer: 'C. niewydolność oddechowa.',
          isCorrect: false
        },
        {
          answer: 'D. przedawkowanie leków .',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe A, B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '249. Najbardziej prawdopodobną przyczyną nagłego zatrzymania krążenia u dzieci jest/ są:',
      answers: [
        {
          answer: 'A. uraz głowy.',
          isCorrect: false
        },
        {
          answer: 'B. niewydolność krążeniowa.',
          isCorrect: false
        },
        {
          answer: 'C. niewydolność oddechowa.',
          isCorrect: true
        },
        {
          answer: 'D. przedawkowanie leków .',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są A, B.',
          isCorrect: false
        }
      ]
    },
    {
      question: '250. Algorytm resuscytacji osoby dorosłej rozpoczniesz od próby wykonania 5 oddechów ratowniczych w sytuacji rozpoznanego:',
      answers: [
        {
          answer: 'A. uduszenia.',
          isCorrect: false
        },
        {
          answer: 'B. utonięcia.',
          isCorrect: false
        },
        {
          answer: 'C. porażenia prądem.',
          isCorrect: false
        },
        {
          answer: 'D. zatrucie tlenkiem węgla.',
          isCorrect: false
        },
        {
          answer: 'E. prawidłowe są A, B.',
          isCorrect: true
        }
      ]
    }
  ]
};

export const tests = [kpp, inspekcjaAll];

const routes: Routes = [
  {
    path: kpp.route,
    component: TestComponent,
    data: { test: kpp },
  },
  {
    path: inspekcjaAll.route,
    component: TestComponent,
    data: { test: inspekcjaAll },
  },
  {
    path: '**',
    component: MainViewComponent,
    data: { tests },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
