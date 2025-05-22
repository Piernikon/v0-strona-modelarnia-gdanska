const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Uruchom testy z pokryciem kodu
console.log("Uruchamianie testów z pokryciem kodu...")
execSync("npm run test:coverage", { stdio: "inherit" })

// Sprawdź, czy katalog coverage istnieje
const coverageDir = path.join(__dirname, "..", "coverage")
if (!fs.existsSync(coverageDir)) {
  console.error("Katalog coverage nie istnieje. Testy mogły zakończyć się niepowodzeniem.")
  process.exit(1)
}

// Sprawdź, czy raport HTML został wygenerowany
const htmlReportDir = path.join(coverageDir, "lcov-report")
if (!fs.existsSync(htmlReportDir)) {
  console.error("Raport HTML nie został wygenerowany.")
  process.exit(1)
}

// Wyświetl informacje o raporcie
console.log(`
Raport pokrycia kodu został wygenerowany w katalogu:
${htmlReportDir}

Możesz otworzyć plik index.html w przeglądarce, aby zobaczyć szczegółowy raport.
`)

// Odczytaj plik summary.json, jeśli istnieje
const summaryPath = path.join(coverageDir, "coverage-summary.json")
if (fs.existsSync(summaryPath)) {
  try {
    const summary = JSON.parse(fs.readFileSync(summaryPath, "utf8"))
    const total = summary.total

    console.log("Podsumowanie pokrycia kodu:")
    console.log(`- Linie: ${total.lines.pct}%`)
    console.log(`- Instrukcje: ${total.statements.pct}%`)
    console.log(`- Gałęzie: ${total.branches.pct}%`)
    console.log(`- Funkcje: ${total.functions.pct}%`)
  } catch (error) {
    console.error("Nie udało się odczytać podsumowania pokrycia kodu:", error)
  }
}
