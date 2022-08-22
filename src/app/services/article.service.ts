import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable()
export class ArticleService{

getArticles(){

  // let articles: Article[];
  // // articles = [a1, a2, a3, a4, a5, a6];
  // return articles;

}

}


// const a1 = new Article()
// a1.Id = 1;
// a1.Title = "Wyprawa do Albani - Relacja!";
// a1.Content = "Albania jest krajem górzystym, gdzie góry wraz z wyżynami zajmują 75% powierzchni kraju, a obszary leżące powyżej 1 000 m n.p.m. zajmują blisko 30% powierzchni państwa. Góry, które wznoszą się na terytorium Albanii są południowym przedłużeniem wielkiego, bałkańskiego łańcucha Gór Dynarskich. Na północny wznoszą się Góry Północnoalbańskie zwane Alpet Shqiptare. Między rzekami Drin a Osum wznoszą się Góry Środkowo-albańskie. Niziny zajmują jedną czwartą powierzchni kraju i skupiają się w pasie nadbrzeżnym w postaci aluwiów, maksymalnie do 50 km w głąb lądu. Strefę nadmorską zajmuje Nizina Albańska, gdzie zalegają na niej osady morskie i rzeczne. W obrębie Gór Środkowo-albańskich leży Kotlina Korczy, która jest największą kotliną w kraju. Dno kotliny spoczywa na wysokości około 800 m n.p.m. Tereny górskie Albanii są w wielu miejscach rozcięte dolinami rzecznymi o przebiegu równoleżnikowym. Wyprawa odbywa się latem – kiedy jest ciepło, spanie w namiocie nie sprawia wtedy problemów a ciepła woda w jeziorach i morzu zachęca do kąpieli. Trasa nie wymaga topienia aut po klamki – jest miejscami wymagająca, ale pokona ją każdy, nawet początkujący kierowca off-roadowy. Wystarczy samochód 4×4 z reduktorem. Wyciągarka raczej się nie przyda. Codziennie będzie dostęp do wody i paliwa. Bez problemów też można zaopatrzyć się we wszystko co potrzebne w mijanych każdego dnia wioskach llub miasteczkach, więc nie trzeba brać za dużo zapasów z Polski. Weźcie ze sobą wyposażenie biwakowe, jakąś latarkę, dobre buty „za kostkę” i kurtkę typu „wind stoper” – w wysokich górach może silnie wiać.";
// a1.Author = "Maciej Schulc";
// a1.Image = "/assets/offroad_zdjecia_test/1.jpg";

// const a2 = new Article()
// a2.Id = 2;
// a2.Title = "Najnowszy pickup Toyoty - Czy sprawdzi się w trudnym terenie?";
// a2.Content = "Legendarna Toyota Hilux zadebiutowała w 1968 r. w Japonii, a rok później była już dostępna w Europie. Samochód należy do dominujących graczy na globalnym rynku pick-upów od niemal 50 lat. Jak dotąd ten najpopularniejszy pick-up na świecie może pochwalić się łączną sprzedażą globalną przekraczającą 18 milionów sztuk. W 2015 r. w Europie sprzedano ok. 34 000 egzemplarzy, co zapewnia modelowi 23,1% udziału w jego segmencie i sprawia, że Hilux jest najlepiej sprzedającym się pick-upem na Starym Kontynencie. Hilux to samochód nie do pobicia, ceniony za jakość, wytrzymałość i niezawodność. Ma na swoim koncie zdobycie Bieguna Północnego i wulkanów na Islandii oraz wiele podróży po Antarktyce i pustyniach całego świata. Nierzadko zajmuje też miejsca na podium w Rajdzie Dakar. Nowa, 8. generacja Toyoty Hilux jest dostępna z trzema rodzajami nadwozia: z pojedynczą kabiną (Single Cab), z czteromiejscową przedłużoną kabiną (Extra Cab) i pięciomiejscową podwójną kabiną (Double Cab). Auto potwierdza doskonałą reputację budowaną od wielu lat i oferuje niezmiennie najwyższą jakość, wytrzymałość, a także legendarną niezawodność. Dzięki nowemu, mocniejszemu podwoziu z ramą podłużnicową, wzmocnionej strukturze skrzyni ładunkowej, udoskonalonemu napędowi 4x4 i większej maksymalnej masie przyczepy, Hilux na nowo definiuje segment pick-upów przeznaczonych do ciężkiej pracy. Jednocześnie nowa Toyota Hilux jest odpowiedzią na tendencję coraz częstszego wykorzystywania pick-upów do rekreacji, dlatego otrzymała nowy, uwspółcześniony design, oferuje też większą wygodę, bogate wyposażenie, nowoczesne technologie i wysoki standard bezpieczeństwa. Wszystko to sprawia, że jazda nowym stylowym Hiluxem jest bardziej komfortowa i przyjemna niż dotąd.";
// a2.Author = "Bolesław Iksiński";
// a2.Image = "/assets/offroad_zdjecia_test/2.jpg";

// const a3 = new Article()
// a3.Id = 3;
// a3.Title = "W jakich krajach można obozować na plaży? A w jakich dostaniemy mandat?";
// a3.Content = "Generalnie kwestie związane z poruszaniem się pojazdami po lesie reguluje w Polsce ustawa o lasach, a dokładniej rozdział 5. tego dokumentu. W szczególności powinien nas zainteresować Art 29, którego punkt pierwszy ma brzmienie: Art. 29. 1. Ruch pojazdem silnikowym, zaprzęgowym i motorowerem w lesie dozwolony jest jedynie drogami publicznymi, natomiast drogami leśnymi jest dozwolony tylko wtedy, gdy są one oznakowane drogowskazami dopuszczającymi ruch po tych drogach. Nie dotyczy to inwalidów poruszających się pojazdami przystosowanymi do ich potrzeb. Co to znaczy? Droga leśna wcale nie musi być zagrodzona szlabanem czy oznaczona znakiem zakazu wjazdu, by nie można było na nią wjechać samochodem. Co do zasady do lasu wjeżdżać pojazdami w ogóle nie można, z wyjątkiem tych dróg, które są wyraźnie oznaczone. Niestety oznakowanie to nie jest spójne, często go brak. Dlatego przed wjazdem do lasu warto upewnić się, dokąd dana droga prowadzi – jeżeli np. na parking dla samochodów, to logiczne, że dojechać do niego jakoś trzeba. Podpowiemy tylko, że oficjalne leśne parkingi łatwo znajdziemy na mapie online w serwisie Czas w Las, przygotowanej przez Lasy Państwowe.";
// a3.Author = "Agnieszka Istniejąca";
// a3.Image = "/assets/offroad_zdjecia_test/3.jpg";

// const a4 = new Article()
// a4.Id = 4;
// a4.Title = "Relacja z wyjazdu odkrywców!";
// a4.Content = "Klimat bułgarskiego interioru, wspaniali ludzie, niesamowite żarcie i trunki, perełki architektury bułgarskiego odrodzenia... cisza i spokój - na pewno odpoczniecie! Przemierzymy góry Riła, Pirin i Rodopy bułgarskie (jaskinie i zagubione w górach islamskie wioski oraz kolejny żywy skansen budownictwa - Kowaczewica). Potem dwie opcje - albo wariant bułgarski i kilka dni nad M. Czarnym w okolicach Rezowa, przy tureckiej granicy - ostatnim niezbyt zatłoczonym punkcie bułgarskiego wybrzeża lub przeskok do Grecji i rejs promem na wyspę Thassos. Oba warianty równie przyjemne, zwłaszcza, że będzie już po sezonie :)";
// a4.Author = "Maciej Schulc";
// a4.Image = "/assets/offroad_zdjecia_test/4.jpg";

// const a5 = new Article()
// a5.Id = 5;
// a5.Title = "Robert Kowalski - samotna wyprawa po Bałkanach.";
// a5.Content = "Do wyprawy motocyklowej przez Bałkany przygotowywałam się jak do żadnej innej. Wiedziałam, że tym razem dużo będzie zależało nie tylko ode mnie, ale od przygotowania mojego motocykla. Planowana trasa: Polska, Czechy, Austria, Węgry, Serbia, Czarnogóra, Bośnia, Chorwacja, Słowenia, Węgry, Czechy, Polska. Z emocji kilka nieprzespanych nocy i czas w drogę. No prawie, bo już przy wyjeździe spod bloku, motocykl załadowany kuframi zachwiał się podnosząc mi ciśnienie. Nie miałam doświadczenia w jeździe z takim bagażem. Pierwszego dnia od razu 420 km pokonanych do Wiednia. Po noclegu poranna pobudka i dalej w drogę – czekał na mnie festiwal piwa w Serbii, na którym również miałam poznać pierwszy bałkański taniec. Plan na kolejny dzień ambitny – 471 km do Nowego Sadu. Słońce mocno prażyło już od rana. Czułam, że to będzie mila przejażdżka. Tuż po przejechaniu granicy z Węgrami zatrzymałam się, by kupić winietę. Miejscowej waluty nie miałam, jednak udało mi się zapłacić euro. Po wypiciu kawy wsiadam na motocykl i przekręciłam kluczyk. Silnik zakręcił, ale nie odpalił.  Spróbowałam jeszcze kilka razy wiedząc o tym, że szybko mogę rozładować akumulator. Nic z tego. Nie wierzę! Rozejrzałam się dookoła niemo szukając pomocy u stojących pod kantorem chłopaków. Zrozumieli. Bez pytania podeszli do mnie i łamanym angielskim zapytali co się dzieje. – może odpali na kable?- rzucili pomysł jeden z nich i zanim zdążyłam cokolwiek powiedzieć, poszedł po samochód. Spróbowaliśmy, ale nic z tego. W międzyczasie zadzwoniłam do znajomych z Polski. Każdy na swój sposób usiłował mi pomagać. Mówili co mogło się zepsuć/odłączyć/przegrzać. Sprawdzanie również nie pomogło. Najbliższy mechanik 15 kilometrów ode mnie, czynny dopiero od poniedziałku. Była  już sobota po 14.00, a na Węgrzech nikt w weekend nie pracuje. Na domiar złego moje zagraniczne assistance miało działać również od poniedziałku, bo przecież nie pomyślałam, że motocykl mógłby się zepsuć już drugiego dnia podróży. – Jeśli znajdziemy czynnego mechanika, to włożymy motocykl do mojego busa i zawieziemy go tam – powiedział Viktor, właściciel kantoru, przy którym się zatrzymałam, w międzyczasie obdzwaniając znajomych i warsztaty. Nie znaleźliśmy. Byłam 60 km od Wiednia, po środku niczego, tuż za granicą.  Nie zostało mi nic innego, jak zostawić motocykl i wrócić na weekend do Austrii. Bałam się jednak zostawiać moto w nieznanym miejscu, które w nocy pustoszeje. Bardziej niż ja, bał się też Viktor, który zaproponował, że może moto  schować do kantoru  – jeśli tylko przeniesiemy go przez  schodki prowadzące do budynku.  Podnieść się  dało, ale kierownica nie zmieściła się w drzwiach. Za kantorem znajdowała się duża hala. – tutaj możesz spokojnie zostawić motocykl do poniedziałku razem ze wszystkimi rzeczami, a ja odwiozę Cię na pociąg, albo do samego Wiednia – powiedział.";
// a5.Author = "Maciej Schulc";
// a5.Image = "/assets/offroad_zdjecia_test/5.jpg";

// const a6 = new Article()
// a6.Id = 6;
// a6.Title = "Najnowsza wyciągarka More - Czyli 8.5 tony w mocniejszym wydaniu!";
// a6.Content = "Budowa wyciągarki elektrycznej Elektryczna wyciągarka terenowa wyposażona jest w silnik, który moc pobiera z akumulatora samochodu. Sprzęt ten ma niewielkie wymiary, ale jego moc niekiedy dochodzi nawet do 9 KM. Przekładnie zwalniające oraz hamulec sprawiają, że wysokie obroty przekładają się na moc uciągu. Silnik powoduje obracanie bębna, na który nawijana jest lina zakończona hakiem. Lina rozkładana jest na bębnie równomiernie dzięki stalowym rolkom lub aluminiowym prowadnicom nazywanym ślizgami. Terenowe wyciągarki samochodowe Dragon Winch mogą być sterowane radiowo lub za pomocą kabla, dzięki czemu możliwe jest zachowanie bezpiecznej odległości od pracującego urządzenia. Jak dobrać moc wyciągarki do wielkości auta? Elektryczną wyciągarkę samochodową należy dobrać zarówno do masy samochodu, z którym będzie pracować, jak i pod względem zastosowania. Sprzęt mający służyć głównie do asekuracji pojazdów musi działać szybko i sprawnie, natomiast na rajdach przeprawowych niezbędny jest sprzęt o dużej mocy. Ważnym parametrem jest również uciąg, którego wartość należy zawyżyć, ponieważ w warunkach terenowych pojazd nie będzie wyciągany na równej drodze, ale raczej na piasku czy wciągającym błocie. Najlepiej przyjąć regułę, że uciąg wyciągarki powinien równać się dwukrotnej masie pojazdu.";
// a6.Author = "Tomasz Techniczny";
// a6.Image = "/assets/offroad_zdjecia_test/6.jpg";
