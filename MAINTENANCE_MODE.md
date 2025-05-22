# Tryb konserwacji (Maintenance Mode)

Ten dokument zawiera instrukcje dotyczące włączania i wyłączania trybu konserwacji dla strony Modelarnia Gdańska.

## Włączanie trybu konserwacji

Aby włączyć tryb konserwacji, należy ustawić zmienną środowiskową `MAINTENANCE_MODE` na `true`.

### Dla środowiska produkcyjnego (Vercel)

1. Przejdź do panelu projektu na Vercel
2. Wybierz zakładkę "Settings"
3. Przejdź do sekcji "Environment Variables"
4. Dodaj zmienną `MAINTENANCE_MODE` z wartością `true`
5. Kliknij "Save"
6. Wykonaj ponowne wdrożenie aplikacji (redeploy)

### Dla środowiska lokalnego

Utwórz lub edytuj plik `.env.local` w katalogu głównym projektu i dodaj:

\`\`\`
MAINTENANCE_MODE=true
\`\`\`

## Wyłączanie trybu konserwacji

Aby wyłączyć tryb konserwacji, należy ustawić zmienną środowiskową `MAINTENANCE_MODE` na `false` lub usunąć ją.

### Dla środowiska produkcyjnego (Vercel)

1. Przejdź do panelu projektu na Vercel
2. Wybierz zakładkę "Settings"
3. Przejdź do sekcji "Environment Variables"
4. Zmień wartość zmiennej `MAINTENANCE_MODE` na `false` lub usuń ją
5. Kliknij "Save"
6. Wykonaj ponowne wdrożenie aplikacji (redeploy)

### Dla środowiska lokalnego

Edytuj plik `.env.local` w katalogu głównym projektu i zmień wartość na:

\`\`\`
MAINTENANCE_MODE=false
\`\`\`

lub usuń tę zmienną.

## Obejście trybu konserwacji (dla administratorów)

Administratorzy mogą obejść tryb konserwacji, używając specjalnego klucza. Domyślny klucz to `admin-bypass`, ale można go zmienić, ustawiając zmienną środowiskową `MAINTENANCE_BYPASS_KEY`.

Aby uzyskać dostęp do strony w trybie konserwacji jako administrator:

1. Dodaj ciasteczko (cookie) o nazwie takiej jak wartość `MAINTENANCE_BYPASS_KEY` (domyślnie `admin-bypass`) z dowolną wartością
2. Odśwież stronę

### Ustawianie ciasteczka w przeglądarce

1. Otwórz konsolę deweloperską (F12 lub Ctrl+Shift+I)
2. Przejdź do zakładki "Console"
3. Wpisz: `document.cookie = "admin-bypass=true; path=/;"`
4. Naciśnij Enter
5. Odśwież stronę

## Dostosowywanie strony konserwacyjnej

Strona konserwacyjna znajduje się w pliku `app/maintenance/page.tsx`. Możesz dostosować jej wygląd i treść, edytując ten plik.

Aby zmienić przewidywany czas zakończenia prac konserwacyjnych, edytuj parametr `endTime` w komponencie `MaintenanceCountdown` w pliku `app/maintenance/page.tsx`.
