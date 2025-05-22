import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative py-16 bg-[#00330a] dark:bg-[#001a05] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Polityka Prywatności
          </h1>
          <p className="mt-4 mx-auto max-w-[700px] text-zinc-200 md:text-xl text-center">
            Informacje o tym, jak przetwarzamy Twoje dane
          </p>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
            <p>Ostatnia aktualizacja: 20 maja 2025</p>

            <h2>1. Wprowadzenie</h2>
            <p>
              Modelarnia Gdańska ("my", "nas", "nasza") szanuje Twoją prywatność i zobowiązuje się do jej ochrony.
              Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy i udostępniamy
              informacje o Tobie, gdy korzystasz z naszej strony internetowej modelarniagdanska.pl ("Strona").
            </p>
            <p>
              Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności. Korzystając z naszej Strony, wyrażasz
              zgodę na praktyki opisane w niniejszej Polityce.
            </p>

            <h2>2. Informacje, które gromadzimy</h2>
            <p>Możemy gromadzić różne rodzaje informacji, w tym:</p>
            <ul>
              <li>
                <strong>Informacje osobowe</strong>: Imię i nazwisko, adres e-mail, numer telefonu, adres pocztowy, dane
                płatnicze i inne podobne informacje, gdy je podajesz.
              </li>
              <li>
                <strong>Informacje o zamówieniu</strong>: Szczegóły dotyczące produktów lub usług, które zamawiasz za
                pośrednictwem naszej Strony.
              </li>
              <li>
                <strong>Informacje o użytkowaniu</strong>: Jak korzystasz z naszej Strony, jakie strony odwiedzasz, czas
                spędzony na Stronie i inne dane dotyczące użytkowania.
              </li>
              <li>
                <strong>Informacje techniczne</strong>: Adres IP, typ i wersja przeglądarki, ustawienia strefy czasowej,
                typy i wersje wtyczek przeglądarki, system operacyjny i platforma.
              </li>
              <li>
                <strong>Informacje o marketingu i komunikacji</strong>: Twoje preferencje dotyczące otrzymywania
                marketingu od nas oraz nasze preferencje komunikacyjne.
              </li>
            </ul>

            <h2>3. Jak gromadzimy Twoje informacje</h2>
            <p>Gromadzimy informacje o Tobie poprzez:</p>
            <ul>
              <li>
                <strong>Bezpośrednie interakcje</strong>: Możesz podać nam swoje dane osobowe, wypełniając formularze na
                naszej Stronie lub komunikując się z nami pocztą, telefonicznie, e-mailem lub w inny sposób.
              </li>
              <li>
                <strong>Zautomatyzowane technologie lub interakcje</strong>: Podczas interakcji z naszą Stroną możemy
                automatycznie gromadzić dane techniczne o Twoim sprzęcie, działaniach i wzorcach przeglądania.
              </li>
              <li>
                <strong>Strony trzecie</strong>: Możemy otrzymywać dane osobowe o Tobie od różnych stron trzecich,
                takich jak dostawcy analityki lub dostawcy informacji technicznych.
              </li>
            </ul>

            <h2>4. Jak wykorzystujemy Twoje informacje</h2>
            <p>Wykorzystujemy Twoje informacje w następujących celach:</p>
            <ul>
              <li>Aby zarejestrować Cię jako nowego klienta.</li>
              <li>Aby przetwarzać i dostarczać Twoje zamówienia.</li>
              <li>Aby zarządzać naszą relacją z Tobą.</li>
              <li>Aby umożliwić Ci uczestnictwo w funkcjach interaktywnych naszej Strony.</li>
              <li>Aby administrować i chronić naszą firmę i Stronę.</li>
              <li>Aby dostarczać odpowiednie treści i reklamy oraz mierzyć skuteczność reklam.</li>
              <li>
                Aby wykorzystywać analizę danych do ulepszania naszej Strony, produktów/usług, marketingu, relacji z
                klientami i doświadczeń.
              </li>
            </ul>

            <h2>5. Udostępnianie Twoich informacji</h2>
            <p>Możemy udostępniać Twoje dane osobowe następującym stronom:</p>
            <ul>
              <li>
                <strong>Dostawcy usług</strong>: Strony trzecie, które świadczą usługi dla nas lub w naszym imieniu,
                takie jak przetwarzanie płatności, dostarczanie zamówień, świadczenie usług IT i systemowych, usługi
                e-mailowe, marketingowe, audytowe i inne usługi.
              </li>
              <li>
                <strong>Profesjonalni doradcy</strong>: W tym prawnicy, bankowcy, audytorzy i ubezpieczyciele, którzy
                świadczą usługi konsultingowe, bankowe, prawne, ubezpieczeniowe i księgowe.
              </li>
              <li>
                <strong>Organy podatkowe, regulacyjne i inne</strong>: Organy, które wymagają zgłaszania działań
                przetwarzania w określonych okolicznościach.
              </li>
            </ul>

            <h2>6. Bezpieczeństwo danych</h2>
            <p>
              Wdrożyliśmy odpowiednie środki bezpieczeństwa, aby zapobiec przypadkowemu zgubienia, wykorzystaniu lub
              dostępowi do Twoich danych osobowych w nieautoryzowany sposób, ich zmianie lub ujawnieniu. Ponadto
              ograniczamy dostęp do Twoich danych osobowych do tych pracowników, agentów, wykonawców i innych stron
              trzecich, którzy mają potrzebę biznesową, aby je znać.
            </p>

            <h2>7. Przechowywanie danych</h2>
            <p>
              Będziemy przechowywać Twoje dane osobowe tylko tak długo, jak jest to konieczne do wypełnienia celów, dla
              których je zebraliśmy, w tym do celów spełnienia wszelkich wymogów prawnych, księgowych lub
              sprawozdawczych.
            </p>

            <h2>8. Twoje prawa</h2>
            <p>W określonych okolicznościach masz prawa związane z Twoimi danymi osobowymi, w tym prawo do:</p>
            <ul>
              <li>Żądania dostępu do swoich danych osobowych.</li>
              <li>Żądania korekty swoich danych osobowych.</li>
              <li>Żądania usunięcia swoich danych osobowych.</li>
              <li>Sprzeciwu wobec przetwarzania swoich danych osobowych.</li>
              <li>Żądania ograniczenia przetwarzania swoich danych osobowych.</li>
              <li>Żądania przeniesienia swoich danych osobowych.</li>
              <li>Wycofania zgody.</li>
            </ul>

            <h2>9. Pliki cookie</h2>
            <p>
              Używamy plików cookie, aby odróżnić Cię od innych użytkowników naszej Strony, co pomaga nam zapewnić Ci
              dobre doświadczenie podczas przeglądania naszej Strony oraz pozwala nam ulepszać naszą Stronę.
            </p>

            <h2>10. Zmiany w naszej Polityce Prywatności</h2>
            <p>
              Wszelkie zmiany, które możemy wprowadzić w naszej Polityce Prywatności w przyszłości, zostaną opublikowane
              na tej stronie. Prosimy o regularne sprawdzanie, aby być na bieżąco z wszelkimi aktualizacjami lub
              zmianami w naszej Polityce Prywatności.
            </p>

            <h2>11. Kontakt</h2>
            <p>
              Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, w tym jakiekolwiek prośby o
              skorzystanie z Twoich praw, prosimy o kontakt z nami:
            </p>
            <p>
              <strong>Email</strong>: privacy@modelarniagdanska.pl
              <br />
              <strong>Adres pocztowy</strong>: ul. Przykładowa 123, 80-000 Gdańsk
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
