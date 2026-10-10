import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Clock, Copy, MessageCircle, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Reveal } from "@/components/common/reveal"
import { SectionHeading } from "@/components/common/section-heading"
import { WhatsAppLink } from "@/components/common/whatsapp-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { EQUIPMENT_OPTIONS } from "@/data/services"
import { SITE, WHATSAPP_MESSAGES, WHATSAPP_SHORT_LABEL, buildWhatsAppUrl } from "@/lib/site"

const onlyDigits = (value: string) => value.replace(/\D/g, "")

/** Máscara (00) 0000-0000 para fixo e (00) 00000-0000 para celular. */
const formatPhone = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11)

  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const contactSchema = z.object({
  nome: z
    .string()
    .min(3, "Informe seu nome com pelo menos 3 caracteres.")
    .max(80, "Use no máximo 80 caracteres."),
  telefone: z
    .string()
    .refine(
      (value) => onlyDigits(value).length >= 10,
      "Informe o telefone com DDD, com 10 ou 11 dígitos."
    ),
  equipamento: z.string().min(1, "Selecione o equipamento."),
  descricao: z
    .string()
    .min(10, "Descreva o problema com pelo menos 10 caracteres.")
    .max(600, "Use no máximo 600 caracteres."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const RequiredMark = () => (
  <span className="text-destructive" aria-hidden="true">
    *
  </span>
)

const Contact = () => {
  const [sent, setSent] = useState<{ url: string; message: string } | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { nome: "", telefone: "", equipamento: "", descricao: "" },
  })

  const descricaoLength = form.watch("descricao").length

  const onSubmit = (values: ContactFormValues) => {
    const message = WHATSAPP_MESSAGES.formulario({
      nome: values.nome.trim(),
      telefone: values.telefone.trim(),
      equipamento: values.equipamento,
      descricao: values.descricao.trim(),
    })
    const url = buildWhatsAppUrl(message)

    setSent({ url, message })
    setCopied(false)
    setCopyFailed(false)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleCopy = async () => {
    if (!sent) return
    try {
      await navigator.clipboard.writeText(sent.message)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <section id="contato" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Contato"
              title="Peça seu orçamento"
              description="Preencha os campos e a mensagem pronta abre no WhatsApp da Lucky Service com os seus dados."
            />

            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-whatsapp-soft text-whatsapp-soft-foreground"
                    aria-hidden="true"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <a
                    href={SITE.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tabular text-body-md font-semibold text-foreground transition-colors hover:text-whatsapp"
                  >
                    WhatsApp {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-soft-foreground"
                    aria-hidden="true"
                  >
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="tabular text-body-md text-foreground">
                    {SITE.schedule.day}, {SITE.schedule.hours}
                    <span className="block text-body-sm text-muted-foreground">
                      Demais dias: consulte pelo WhatsApp
                    </span>
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-body-sm mt-8 text-muted-foreground">
                O formulário não envia dados para nenhum servidor: ele apenas monta a
                mensagem e abre o WhatsApp com tudo preenchido.
              </p>
            </Reveal>
          </div>

          <Reveal className="min-w-0 lg:col-span-7" delay={0.1} y={20}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md md:p-8">
              {sent ? (
                <div role="status" aria-live="polite" className="flex flex-col gap-5">
                  <Badge variant="whatsapp" className="self-start">
                    Mensagem pronta
                  </Badge>
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-whatsapp"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[1.25rem] font-semibold text-foreground">
                        Abrimos o WhatsApp em uma nova aba
                      </h3>
                      <p className="text-body-sm mt-2 text-muted-foreground">
                        Se a nova aba não abriu, use o botão abaixo para iniciar a
                        conversa com a mensagem já preenchida.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                      <a href={sent.url} target="_blank" rel="noopener noreferrer">
                        <MessageCircle aria-hidden="true" />
                        <span>Abrir o WhatsApp</span>
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => void handleCopy()}
                    >
                      <Copy aria-hidden="true" />
                      <span>{copied ? "Mensagem copiada" : "Copiar mensagem"}</span>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        setSent(null)
                        setCopied(false)
                        setCopyFailed(false)
                      }}
                    >
                      Editar dados
                    </Button>
                  </div>

                  {copyFailed ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-body-sm text-destructive">
                        Não foi possível copiar automaticamente. Selecione a mensagem
                        abaixo para copiar manualmente.
                      </p>
                      <Textarea
                        readOnly
                        value={sent.message}
                        onFocus={(event) => event.currentTarget.select()}
                        className="min-h-[104px] bg-navy-50"
                        aria-label="Mensagem que será enviada no WhatsApp"
                      />
                    </div>
                  ) : null}
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Nome <RequiredMark />
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage aria-live="polite" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Telefone / WhatsApp <RequiredMark />
                          </FormLabel>
                          <FormControl>
                            <Input
                              inputMode="tel"
                              autoComplete="tel"
                              placeholder="(11) 90000-0000"
                              name={field.name}
                              ref={field.ref}
                              value={field.value}
                              onBlur={field.onBlur}
                              onChange={(event) =>
                                field.onChange(formatPhone(event.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage aria-live="polite" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="equipamento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Equipamento <RequiredMark />
                          </FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o equipamento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {EQUIPMENT_OPTIONS.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage aria-live="polite" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="descricao"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Descrição do problema <RequiredMark />
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ex.: a máquina não centrifuga e fica com água no tambor."
                              {...field}
                            />
                          </FormControl>
                          <div className="flex items-start justify-between gap-4">
                            <FormMessage aria-live="polite" />
                            <p
                              className="tabular ml-auto shrink-0 text-[0.75rem] text-muted-foreground"
                              aria-live="polite"
                            >
                              {descricaoLength}/600
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="whatsapp"
                      size="lg"
                      className="mt-1 w-full"
                    >
                      <Send aria-hidden="true" />
                      <span>{WHATSAPP_SHORT_LABEL}</span>
                    </Button>

                    <p className="text-[0.8125rem] text-muted-foreground">
                      Ao enviar, abrimos o WhatsApp com a sua mensagem já preenchida.
                      Nenhum dado é enviado para um servidor.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { Contact }
