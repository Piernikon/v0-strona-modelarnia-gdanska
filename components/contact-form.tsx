"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, X, FileText, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ContactFormProps {
  language?: "pl" | "en"
}

export default function ContactForm({ language = "pl" }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const texts = {
    pl: {
      title: "Kontakt",
      description: "Masz projekt w głowie? Skontaktuj się z nami już dziś",
      name: "Imię i nazwisko",
      email: "Email",
      subject: "Temat",
      message: "Wiadomość",
      attachFiles: "Załącz pliki (STL, OBJ, ZIP)",
      clickToUpload: "Kliknij, aby przesłać",
      dragAndDrop: "lub przeciągnij i upuść",
      fileTypes: "STL, OBJ lub ZIP (max 50MB)",
      uploadedFiles: "Przesłane pliki:",
      submit: "Wyślij",
      submitting: "Wysyłanie...",
      contactInfo: {
        title: "Informacje kontaktowe",
        description: "Jesteśmy dostępni od poniedziałku do piątku, w godzinach 9:00-17:00",
        address: "Gdańsk, Polska",
        email: "kontakt@modelarniagdanska.pl",
        phone: "+48 123 456 789",
      },
    },
    en: {
      title: "Contact Us",
      description: "Have a project in mind? Get in touch with us today",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      attachFiles: "Attach Files (STL, OBJ, ZIP)",
      clickToUpload: "Click to upload",
      dragAndDrop: "or drag and drop",
      fileTypes: "STL, OBJ, or ZIP (max 50MB)",
      uploadedFiles: "Uploaded Files:",
      submit: "Submit",
      submitting: "Submitting...",
      contactInfo: {
        title: "Contact Information",
        description: "We're available Monday to Friday, from 9:00 AM to 5:00 PM",
        address: "Gdańsk, Poland",
        email: "contact@modelarniagdanska.pl",
        phone: "+48 123 456 789",
      },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage(
      language === "pl"
        ? "Dziękujemy za wiadomość! Wkrótce się z Tobą skontaktujemy."
        : "Thank you for your message! We will get back to you soon.",
    )
    setIsSubmitting(false)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setFiles([])

    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
    }, 5000)
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-[#00330a] dark:bg-[#001a05] text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{texts[language].title}</h2>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {texts[language].description}
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  {texts[language].name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={texts[language].name}
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  {texts[language].email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={texts[language].email}
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  {texts[language].subject}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={texts[language].subject}
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  {texts[language].message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={texts[language].message}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="min-h-32 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files" className="text-white">
                  {texts[language].attachFiles}
                </Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white/5 border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-white/70" />
                      <p className="mb-2 text-sm text-white/70">
                        <span className="font-semibold">{texts[language].clickToUpload}</span>{" "}
                        {texts[language].dragAndDrop}
                      </p>
                      <p className="text-xs text-white/70">{texts[language].fileTypes}</p>
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".stl,.obj,.zip"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">{texts[language].uploadedFiles}</p>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-md bg-white/10">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-white/70" />
                          <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="p-1 rounded-full hover:bg-white/10"
                        >
                          <X className="w-4 h-4 text-white/70" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
              >
                {isSubmitting ? texts[language].submitting : texts[language].submit}
              </Button>
            </form>
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white/10 p-4 rounded-md text-center mt-4"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#dfae4f]">{texts[language].contactInfo.title}</h3>
              <p className="text-zinc-200 mb-6">{texts[language].contactInfo.description}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#dfae4f] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-zinc-300">{texts[language].contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#dfae4f] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-zinc-300">{texts[language].contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#dfae4f] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-zinc-300">{texts[language].contactInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Contact person" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
