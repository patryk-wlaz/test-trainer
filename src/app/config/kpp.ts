import { Test } from './model';
// tslint:disable: max-line-length

export const kpp: Test = {
  name: 'Testy na egzamin kpp',
  route: 'kpp',
  description: 'Test pierwszej pomocy',
  amounts: {
    all: 3,
    required: 2,
    timeForQuestion: 6000,
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          answer: 'B. występują zaburzenia świadomości aż do jej utraty. C. może być spowodowana przedawkowaniem insuliny.',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '40. Jaka jest najpoważniejsza wczesna komplikacja porażenia prądem elektrycznym zmiennym?',
      answers: [
        {
          answer: 'A. zaburzenia rytmu serca.',
          isCorrect: false
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
          answer: 'C. III0.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorect: true
        },
        {
          answer: 'B. 1,4.',
          isCorect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '65. W krwotoku tętniczym przedramienia, który nie zmniejsza się po zaopatrzeniu opatrunkiem uciskowym założonym w miejscu krwawienia, należy rozważyć następujące postępowanie: 1. ułożeniem poszkodowanego płasko oraz umieszczenie kończyny powyżej poziomu serca. 2. wzmocnienie ucisku poprzez owinięcie opatrunku dodatkowymi zwojami bandaża. 3. zdjęcie już założonego opatrunku i ponowne założenie grubszego opatrunku. 4. założenie opaski zaciskowej na przedramieniu 5-7 cm powyżej miejsca krwawienia. 5. założenie drugiej opaski zaciskowej na ramieniu jeżeli pierwsza jest nieskuteczna. Prawidłowa odpowiedź to:',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '82. W złamaniu otwartym kości udowej, któremu towarzyszy krwotok tętniczy, priorytetem ratowniczym jest:',
      answers: [
        {
          answer: 'A. zatamowanie krwotoku, w razie potrzeby przez ucisk na tętnicę powyżej miejsca złamania.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          answer: 'B. wypadkowi komunikacyjnemu towarzyszy uraz głowy, C. masz do czynienia z upadkiem z wysokości.'
        },
        {
          answer: 'D. prawdziwe są odpowiedzi A i C.',
          isCorrect: false
        },
        {
          answer: 'E. prawdziwe są odpowiedzi A, B i C.',
          isCorrect: false
        }
      ]
    },
    {
      question: '89. Opatrunek uciskowy stosuje się:',
      answers: [
        {
          answer: 'A. w przypadku krwotoków zewnętrznych.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '94. Dla ratownika różnica pomiędzy transportem a ewakuacją polega na tym, że:',
      answers: [
        {
          answer: 'A. każde przemieszczenie poszkodowanego na mocy decyzji ratownika to ewakuacja, a na mocy decyzji lekarza lub ratownika medycznego to transport.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
      question: '101. Do zadań koordynatora medycznych działań ratowniczych (KMDR) KSRG należy: 1. koordynacja działań z zakresu kwalifikowanej pierwszej pomocy, segregacji pierwotnej do czasu przybycia ZRM. 2. realizuje wraz z ratownikami KSRG kpp w strefach zagrożenie dla ZRM. 3. prowadzenie i ewentualne nadzorowanie segregacji, jako procesu określania priorytetów terapeutyczno-transportowych. 4. przekazuje informacje o wykonaniu dostępu do poszkodowanego i możliwości podjęcia medycznych czynności ratowniczych (mcr) przez ZRM. 5. transport poszkodowanych z kodem czerwonym do specjalistycznej placówki służby zdrowia. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 2, 3, 4.      ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2, 3.      ',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 4.      ',
          isCorrect: false
        },
        {
          answer: 'D. 3, 4, 5.      ',
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
          isCorrect: false
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
          answer: 'A. 1, 3, 4.       ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2,3.        ',
          isCorrect: false
        },
        {
          answer: 'C. 3, 4.      ',
          isCorrect: false
        },
        {
          answer: 'D. 3, 4, 5.       ',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          answer: 'A. maksymalnie odchylając głowę do tyłu.',
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
          isCorrect: false
        }
      ]
    },
    {
      question: '109. Zbliżasz się do osoby dorosłej, która leży na podłodze. Nie ma nikogo innego w pobliżu. Jak powinieneś postąpić?',
      answers: [
        {
          answer: 'A. ocenić przytomność leżącego, sprawdzić oddech, potem wezwać Zespół Ratownictwa Medycznego.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '118. W postępowaniu z nieprzytomnym dorosłym nieurazowym, wezwanie Zespołu Ratownictwa Medycznego powinno nastąpić:',
      answers: [
        {
          answer: 'A. po ocenie oddechu.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          answer: 'A. 2, 4, 5.        ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 4.        ',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 4.        ',
          isCorrect: false
        },
        {
          answer: 'D. 3, 4, 5.        ',
          isCorrect: false
        },
        {
          answer: 'E. 1, 2, 4',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '133. Wykonujesz resuscytację u 5-letniego dziecka z zatrzymaniem czynności serca. Którą z technik ucisku klatki piersiowej powinieneś zastosować?',
      answers: [
        {
          answer: 'A. uciskanie jedną lub dwoma dłońmi (zależnie od gabarytów poszkodowanego),       z częstością 100-120 razy na minutę.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '158. Nawrót kapilarny badamy uciskając:',
      answers: [
        {
          answer: 'A. płytkę paznokciową.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '164. Elektrody AED:',
      answers: [
        {
          answer: 'A. przyklejamy do gołej klatki piersiowej po jej ewentualnym wytarciu i usunięciu zbyt obfitego owłosienia.',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '168. Asystolia to:',
      answers: [
        {
          answer: 'A. brak czynności elektrycznej komór serca i przedsionków lub tylko komór.',
          isCorrect: false
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
          answer: 'A. jedną pod prawym obojczykiem, drugą w przedniej linii pachowej przedniej lewej tuż pod mięśniem piersiowym, ułożenie przednio-boczne. (zgodnie z piktogramem umieszczonym na elektrodach).',
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        },
        {
          answer: 'D. używać pod adresem poszkodowanego stwierdzeń w rodzaju „ja wiem lepiej", co daje mu',
          isCorrect: false
        },
        {
          answer: 'E. pewność wysokich kompetencji ratownika.',
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '178. Stabilizując bezprzyrządowo kręgosłup szyjny należy pamiętać, aby:',
      answers: [
        {
          answer: 'A. nie pociągać głowy w osi długiej i nie odchylać głowy poszkodowanego ku tyłowi.',
          isCorrect: false
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
          isCorrect: false
        },
        {
          answer: 'C. podtrzymywać odchyloną ku tyłowi ku tyłowi głowę poszkodowanego, aby udrożnić drogi oddechowe.',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '191. Jaka jest prawidłowa kolejność czynności niezbędnych do skutecznej resuscytacji osób, u których doszło do nagłego zatrzymania krążenia według koncepcji zwanej „łańcuchem przeżycia"? 1. wczesna defibrylacja. 2. wczesne wezwanie pomocy. 3. wczesne rozpoczęcie RKO. 4. opieka poresuscytacyjna. 5. wczesne rozpoznanie. Prawidłowa odpowiedź to:',
      answers: [
        {
          answer: 'A. 1, 3, 2, 5, 4.     ',
          isCorrect: false
        },
        {
          answer: 'B. 5, 2, 3, 1, 4.      ',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 4, 1, 5.      ',
          isCorrect: false
        },
        {
          answer: 'D. 1, 2, 3, 4, 5.      ',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          answer: 'A. 1, 3, 5.      ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 3, 4.     ',
          isCorrect: false
        },
        {
          answer: 'C. 3, 4, 5.      ',
          isCorrect: false
        },
        {
          answer: 'D. 1, 4, 5.     ',
          isCorrect: false
        },
        {
          answer: 'E. 2, 4, 5. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '199. Które z poniższych objawów występujących u dziecka, które w trakcie jedzenia zakrztusiło się pokarmem, są charakterystyczne dla łagodnej niedrożności dróg oddechowych? 1. bezgłośny kaszel. 2. głośny kaszel. 3. sinica. 4. możliwość nabrania powietrza przed kaszlem. 5. głośny płacz. Prawidłowa odpowiedź to. ',
      answers: [
        {
          answer: 'A. 1, 3, 4.      ',
          isCorrect: false
        },
        {
          answer: 'B. 1, 2, 5.      ',
          isCorrect: false
        },
        {
          answer: 'C. 2, 4, 5.     ',
          isCorrect: false
        },
        {
          answer: 'D. 1, 4, 5.      ',
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
          isCorrect: false
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
          answer: 'A. 1, 2, 3.       ',
          isCorrect: false
        },
        {
          answer: 'B. 2, 4, 5.       ',
          isCorrect: false
        },
        {
          answer: 'C. 2, 3, 5.       ',
          isCorrect: false
        },
        {
          answer: 'D. 2, 3, 4.       ',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '207. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 8-miesięcznego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 3:1.     ',
          isCorrect: false
        },
        {
          answer: 'B. 5:1.     ',
          isCorrect: false
        },
        {
          answer: 'C. 15:1.     ',
          isCorrect: false
        },
        {
          answer: 'D. 15:2.     ',
          isCorrect: false
        },
        {
          answer: 'E. 30:2. ',
          isCorrect: false
        }
      ]
    },
    {
      question: '208. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez dwóch ratowników u 6 letniego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 10:2.     ',
          isCorrect: false
        },
        {
          answer: 'B. 15:2.     ',
          isCorrect: false
        },
        {
          answer: 'C. 20:2.     ',
          isCorrect: false
        },
        {
          answer: 'D. 30:2.     ',
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
          answer: 'A. 15:2.     ',
          isCorrect: false
        },
        {
          answer: 'B. 20:2.     ',
          isCorrect: false
        },
        {
          answer: 'C. 30:1.     ',
          isCorrect: false
        },
        {
          answer: 'D. 30:2.     ',
          isCorrect: false
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
          answer: 'A. 3:1.     ',
          isCorrect: false
        },
        {
          answer: 'B. 5:1.     ',
          isCorrect: false
        },
        {
          answer: 'C. 15:2.     ',
          isCorrect: false
        },
        {
          answer: 'D. 15:5.     ',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
      question: '238. Prawidłowy rozmiar rurki krtaniowej (dotyczy rozmiarów 5, 4, 3) dobiera się na podstawie:',
      answers: [
        {
          answer: 'A. wzrostu',
          isCorrect: false
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
          isCorrect: false
        }
      ]
    },
    {
      question: '240. Podczas prowadzenia resuscytacji krążeniowo-oddechowej przez jednego ratownika u 6-miesięcznego dziecka stosunek uciśnięć klatki piersiowej do wentylacji płuc powinien wynosić:',
      answers: [
        {
          answer: 'A. 3:1.       ',
          isCorrect: false
        },
        {
          answer: 'B. 5:1.       ',
          isCorrect: false
        },
        {
          answer: 'C. 15:1.       ',
          isCorrect: false
        },
        {
          answer: 'D. 15:2.       ',
          isCorrect: false
        },
        {
          answer: 'E. 30:2. ',
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
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
          isCorrect: false
        }
      ]
    }
  ]
};
