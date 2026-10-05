import { useState, type ChangeEvent, type FormEvent } from "react"

import { Github, Linkedin, Mail, Send } from "lucide-react"

import { GLASS_CARD, type Translation } from "@/types/portfolio"

type ContactProps = {
  t: Translation["contact"]
  isVisible: boolean
}

type FormStatus = "idle" | "sending" | "success" | "error"

export function Contact({ t, isVisible }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (status !== "idle") {
      setStatus("idle")
      setErrorMessage("")
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (status === "sending") {
      return
    }

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.message || t.error)
      }

      setStatus("success")

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      })
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("error")

      setErrorMessage(
        error instanceof Error ? error.message : t.error,
      )
    }
  }

  return (
    <section
      id="contact"
      className={`bg-muted/30 px-6 py-32 transition-all duration-1000 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            {t.title}{" "}
            <span className="text-primary">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="mailto:alicegamas.dev@gmail.com"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            <Mail className="h-5 w-5" />
            {t.email}
          </a>

          <a
            href="https://github.com/gamaalice"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
          >
            <Github className="h-5 w-5" />
            {t.github}
          </a>

          <a
            href="https://linkedin.com/in/alice-gama-75913022a"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
          >
            <Linkedin className="h-5 w-5" />
            {t.linkedin}
          </a>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className={`mx-auto mt-12 w-full max-w-3xl rounded-2xl p-6 sm:p-8 ${GLASS_CARD}`}
        >
          {/* Honeypot */}
          <div
            className="absolute -left-[9999px]"
            aria-hidden="true"
          >
            <label htmlFor="website">
              Website
            </label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                {t.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                className="w-full rounded-xl border border-white/40 bg-white/45 px-4 py-3 text-card-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                {t.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                className="w-full rounded-xl border border-white/40 bg-white/45 px-4 py-3 text-card-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                {t.message}
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                className="w-full resize-y rounded-xl border border-white/40 bg-white/45 px-4 py-3 text-card-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Status */}
          {status === "success" && (
            <div
              role="status"
              className="mt-6 rounded-xl border border-white/40 bg-white/45 px-4 py-3 text-sm text-primary"
            >
              {t.success}
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-200/70 bg-red-50/60 px-4 py-3 text-sm text-red-600"
            >
              {errorMessage || t.error}
            </div>
          )}

          {/* Enviar */}
          <div className="mt-7 flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <Send className="h-4 w-4" />

              {status === "sending"
                ? t.sending
                : t.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}