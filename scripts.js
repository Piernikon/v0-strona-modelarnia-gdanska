document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  const darkModeToggleMobile = document.getElementById("dark-mode-toggle-mobile")

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode)
  }

  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener("click", toggleDarkMode)
  }

  // Check for saved theme preference or respect OS preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .stagger-container").forEach((el) => {
    observer.observe(el)
  })

  // Service order form handling
  const orderButtons = document.querySelectorAll(".order-service-button")
  const orderModal = document.getElementById("order-modal")
  const closeModalButton = document.getElementById("close-modal")
  const orderForm = document.getElementById("order-form")
  const serviceNameElement = document.getElementById("service-name")

  if (orderButtons.length > 0 && orderModal && closeModalButton && orderForm && serviceNameElement) {
    orderButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const serviceName = this.getAttribute("data-service-name")
        const serviceDetails = this.getAttribute("data-service-details")
        const orderTips = this.getAttribute("data-order-tips")

        serviceNameElement.textContent = serviceName
        document.getElementById("service-details").value = serviceDetails
        document.getElementById("order-tips").textContent = orderTips

        orderModal.classList.remove("hidden")
      })
    })

    closeModalButton.addEventListener("click", () => {
      orderModal.classList.add("hidden")
    })

    orderForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.disabled = true
      submitButton.textContent = "Wysyłanie..."

      // Simulate form submission
      setTimeout(() => {
        const successMessage = document.createElement("div")
        successMessage.className =
          "p-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-md text-center mt-4"
        successMessage.textContent = "Dziękujemy za zapytanie! Skontaktujemy się z Tobą wkrótce."

        this.appendChild(successMessage)

        // Reset form
        this.reset()

        // Reset button
        submitButton.disabled = false
        submitButton.textContent = originalText

        // Close modal after delay
        setTimeout(() => {
          orderModal.classList.add("hidden")
          successMessage.remove()
        }, 3000)
      }, 1000)
    })
  }
})
