"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HelpCircle, Upload, X, FileText } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ServiceOrderFormProps {
  serviceName: string
  serviceDetails: string
  orderTips: string
  language?: "pl" | "en"
  onClose: () => void
}

export default function ServiceOrderForm({
  serviceName,
  serviceDetails,
  orderTips,
  language = "pl",
  onClose,
}: ServiceOrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    quantity: 1,
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const texts = {
    pl: {
      title: "Zamów",
      description: "Wypełnij formularz poniżej, aby zamówić tę usługę. Skontaktujemy się z Tobą z wyceną.",
      name: "Imię",
      email: "Email",
      details: "Szczegóły",
      quantity: "Ilość",
      tips: "Wskazówki",
      attachFiles: "Załącz pliki",
      clickToUpload: "Kliknij, aby przesłać",
      dragAndDrop: "lub przeciągnij i upuść",
      fileTypes: "STL, OBJ, ZIP, PDF, JPG (max 50MB)",
      uploadedFiles: "Przesłane pliki:",
      submit: "Wyślij zapytanie",
      submitting: "Wysyłanie...",
      successMessage: "Dziękujemy za zapytanie! Skontaktujemy się z Tobą wkrótce.",
    },
    en: {
      title: "Order",
      description: "Fill out the form below to request this service. We'll get back to you with a quote.",
      name: "Name",
      email: "Email",
      details: "Details",
      quantity: "Quantity",
      tips: "Tips",
      attachFiles: "Attach Files",
      clickToUpload: "Click to upload",
      dragAndDrop: "or drag and drop",
      fileTypes: "STL, OBJ, ZIP, PDF, JPG (max 50MB)",
      uploadedFiles: "Uploaded Files:",
      submit: "Submit Request",
      submitting: "Submitting...",
      successMessage: "Thank you for your inquiry! We'll get back to you soon.",
    },
  }

  const currentTexts = texts[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "quantity" ? Math.max(1, Number.parseInt(value) || 1) : value,
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

    setSubmitMessage(currentTexts.successMessage)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      details: "",
      quantity: 1,
    })
    setFiles([])

    // Clear message and close form after 3 seconds
    setTimeout(() => {
      setSubmitMessage("")
      onClose()
    }, 3000)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">
          {currentTexts.title}: {serviceName}
        </h3>
        <p className="text-sm text-muted-foreground">{currentTexts.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">{currentTexts.name}</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{currentTexts.email}</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="quantity">{currentTexts.quantity}</Label>
          </div>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="details">{currentTexts.details}</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{orderTips}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder={serviceDetails}
            required
            className="min-h-[100px]"
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="files">{currentTexts.attachFiles}</Label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">{currentTexts.clickToUpload}</span> {currentTexts.dragAndDrop}
                </p>
                <p className="text-xs text-muted-foreground">{currentTexts.fileTypes}</p>
              </div>
              <Input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".stl,.obj,.zip,.pdf,.jpg,.jpeg,.png"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">{currentTexts.uploadedFiles}</p>
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-md bg-muted">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 rounded-full hover:bg-background"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2 pt-2">
          <Button type="button" variant="outline" onClick={onClose}>
            {language === "pl" ? "Anuluj" : "Cancel"}
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? currentTexts.submitting : currentTexts.submit}
          </Button>
        </div>

        {submitMessage && (
          <div className="p-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-md text-center">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}
