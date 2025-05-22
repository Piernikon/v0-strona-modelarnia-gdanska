import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative py-16 bg-[#00330a] dark:bg-[#001a05] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Regulamin Serwisu</h1>
          <p className="mt-4 mx-auto max-w-[700px] text-zinc-200 md:text-xl text-center">
            Warunki korzystania z usług Modelarni Gdańskiej
          </p>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
            <p>Ostatnia aktualizacja: 20 maja 2025</p>

            <h2>1. Wprowadzenie</h2>
            <p>
              Niniejszy Regulamin określa zasady korzystania ze strony internetowej modelarniagdanska.pl ("Strona") oraz
              usług oferowanych przez Modelarnię Gdańską ("my", "nas", "nasza", "Usługodawca"). Korzystając z naszej
              Strony i usług, akceptujesz niniejszy Regulamin w całości. Jeśli nie zgadzasz się z jakimkolwiek
              postanowieniem niniejszego Regulaminu, nie korzystaj z naszej Strony ani usług.
            </p>

            <h2>2. Definicje</h2>
            <p>W niniejszym Regulaminie:</p>
            <ul>
              <li>
                <strong>"Klient"</strong> oznacza osobę fizyczną, osobę prawną lub jednostkę organizacyjną
                nieposiadającą osobowości prawnej, która korzysta z usług oferowanych przez Usługodawcę.
              </li>
              <li>
                <strong>"Usługi"</strong> oznaczają usługi druku 3D, cięcia laserowego, malowania modeli oraz inne
                usługi oferowane przez Usługodawcę.
              </li>
              <li>
                <strong>"Zamówienie"</strong> oznacza zlecenie wykonania określonych Usług złożone przez Klienta.
              </li>
              <li>
                <strong>"Materiały"</strong> oznaczają wszelkie pliki, projekty, modele 3D, specyfikacje i inne
                materiały dostarczone przez Klienta w celu realizacji Zamówienia.
              </li>
            </ul>

            <h2>3. Usługi</h2>
            <p>
              Usługodawca oferuje usługi druku 3D, cięcia laserowego, malowania modeli oraz inne powiązane usługi.
              Szczegółowy zakres i specyfikacja Usług są określane indywidualnie dla każdego Zamówienia.
            </p>
            <p>
              Usługodawca zastrzega sobie prawo do odmowy realizacji Zamówienia, jeśli jego wykonanie byłoby niemożliwe
              ze względów technicznych, naruszałoby prawa osób trzecich lub byłoby niezgodne z prawem.
            </p>

            <h2>4. Zamówienia i płatności</h2>
            <p>
              Zamówienia mogą być składane za pośrednictwem formularza na Stronie, drogą e-mailową lub telefonicznie.
              Każde Zamówienie wymaga akceptacji przez Usługodawcę.
            </p>
            <p>
              Ceny Usług są ustalane indywidualnie dla każdego Zamówienia, w zależności od jego specyfikacji,
              złożoności, wymaganych materiałów i czasu realizacji. Usługodawca przedstawia Klientowi wycenę przed
              rozpoczęciem realizacji Zamówienia.
            </p>
            <p>
              Płatności za Usługi mogą być dokonywane przelewem bankowym, za pobraniem lub za pomocą innych metod
              płatności udostępnionych przez Usługodawcę. Usługodawca może wymagać zaliczki przed rozpoczęciem
              realizacji Zamówienia.
            </p>

            <h2>5. Realizacja zamówień</h2>
            <p>
              Czas realizacji Zamówienia jest ustalany indywidualnie i zależy od jego specyfikacji, złożoności oraz
              aktualnego obciążenia Usługodawcy. Usługodawca informuje Klienta o przewidywanym czasie realizacji
              Zamówienia przy przedstawianiu wyceny.
            </p>
            <p>
              Usługodawca dokłada wszelkich starań, aby zrealizować Zamówienie zgodnie z dostarczonymi przez Klienta
              Materiałami i specyfikacją. Jednakże, ze względu na specyfikę Usług, mogą wystąpić niewielkie odchylenia
              od oryginalnego projektu, które nie stanowią podstawy do reklamacji.
            </p>

            <h2>6. Prawa własności intelektualnej</h2>
            <p>
              Klient oświadcza, że posiada wszelkie prawa do Materiałów dostarczonych Usługodawcy w celu realizacji
              Zamówienia, w tym prawa autorskie i prawa własności przemysłowej, lub jest uprawniony do korzystania z
              tych Materiałów w zakresie niezbędnym do realizacji Zamówienia.
            </p>
            <p>
              Klient ponosi pełną odpowiedzialność za naruszenie praw osób trzecich w związku z realizacją Zamówienia na
              podstawie dostarczonych przez niego Materiałów.
            </p>

            <h2>7. Odpowiedzialność</h2>
            <p>
              Usługodawca ponosi odpowiedzialność za należyte wykonanie Usług zgodnie z Zamówieniem. W przypadku
              nienależytego wykonania Usług, Klient ma prawo do reklamacji zgodnie z punktem 8 niniejszego Regulaminu.
            </p>
            <p>Usługodawca nie ponosi odpowiedzialności za:</p>
            <ul>
              <li>Szkody wynikające z dostarczenia przez Klienta nieprawidłowych lub niekompletnych Materiałów.</li>
              <li>Szkody wynikające z użytkowania produktów niezgodnie z ich przeznaczeniem.</li>
              <li>Utracone korzyści Klienta związane z realizacją Zamówienia.</li>
              <li>Opóźnienia w realizacji Zamówienia wynikające z przyczyn niezależnych od Usługodawcy.</li>
            </ul>

            <h2>8. Reklamacje</h2>
            <p>
              Klient ma prawo do złożenia reklamacji w przypadku nienależytego wykonania Usług. Reklamacje należy
              składać w formie pisemnej lub elektronicznej w terminie 14 dni od daty odbioru Zamówienia.
            </p>
            <p>
              Reklamacja powinna zawierać opis wad lub niezgodności z Zamówieniem oraz oczekiwania Klienta co do sposobu
              rozpatrzenia reklamacji (naprawa, wymiana, obniżenie ceny, zwrot płatności).
            </p>
            <p>
              Usługodawca rozpatruje reklamację w terminie 14 dni od daty jej otrzymania i informuje Klienta o sposobie
              jej rozpatrzenia.
            </p>

            <h2>9. Ochrona danych osobowych</h2>
            <p>
              Administratorem danych osobowych Klientów jest Usługodawca. Dane osobowe są przetwarzane zgodnie z
              obowiązującymi przepisami o ochronie danych osobowych oraz Polityką Prywatności dostępną na Stronie.
            </p>

            <h2>10. Zmiany Regulaminu</h2>
            <p>
              Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. Zmiany wchodzą w
              życie z dniem ich opublikowania na Stronie. Korzystanie ze Strony lub Usług po wprowadzeniu zmian oznacza
              akceptację nowego Regulaminu.
            </p>

            <h2>11. Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w
              szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.
            </p>
            <p>
              Wszelkie spory wynikające z korzystania ze Strony lub Usług będą rozstrzygane przez sąd właściwy dla
              siedziby Usługodawcy, z zastrzeżeniem przepisów dotyczących konsumentów.
            </p>
            <p>
              Jeśli którekolwiek z postanowień niniejszego Regulaminu zostanie uznane za nieważne lub nieskuteczne przez
              jakikolwiek sąd lub organ administracyjny, nie wpłynie to na ważność pozostałych postanowień Regulaminu.
            </p>

            <div className="mt-8 text-center">
              <Link href="/">
                <Button variant="outline">Powrót do strony głównej</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
