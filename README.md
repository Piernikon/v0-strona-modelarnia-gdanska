# Modelarnia Gdańska

## Testy i pokrycie kodu

### Uruchamianie testów

\`\`\`bash
# Uruchomienie wszystkich testów
npm test

# Uruchomienie testów w trybie watch
npm run test:watch

# Uruchomienie testów z pokryciem kodu
npm run test:coverage

# Uruchomienie testów z pokryciem kodu w trybie watch
npm run test:coverage:watch
\`\`\`

### Raport pokrycia kodu

Po uruchomieniu testów z pokryciem kodu, raport zostanie wygenerowany w katalogu `coverage`. Możesz otworzyć plik `coverage/lcov-report/index.html` w przeglądarce, aby zobaczyć szczegółowy raport.

### Progi pokrycia kodu

Projekt ma skonfigurowane następujące progi pokrycia kodu:

- Branches (gałęzie): 70%
- Functions (funkcje): 70%
- Lines (linie): 70%
- Statements (instrukcje): 70%

Jeśli pokrycie kodu spadnie poniżej tych progów, testy zakończą się niepowodzeniem.

### Integracja z CI/CD

Raport pokrycia kodu może być zintegrowany z systemem CI/CD, aby monitorować pokrycie kodu w czasie i zapobiegać jego spadkowi.
\`\`\`

Dodajmy również skrypt do generowania raportu pokrycia kodu w formacie HTML:
