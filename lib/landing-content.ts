import type { Service, Stat, Testimonial } from "@/types/landing";

export const SITE_NAME = "Patas & Cia";

export const WHATSAPP_URL = "https://wa.me/5511999999999";

export const services: Service[] = [
  {
    icon: "🛁",
    title: "Banho & Tosa",
    description: "Produtos hipoalergênicos e tosa feita com carinho, no estilo que seu pet merece.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e check-ups com profissionais que amam animais.",
  },
  {
    icon: "🏠",
    title: "Hotelzinho",
    description: "Hospedagem segura e divertida para quando você precisar viajar.",
  },
  {
    icon: "🦴",
    title: "Pet Shop",
    description: "Rações, petiscos, brinquedos e acessórios das melhores marcas.",
  },
];

export const stats: Stat[] = [
  { value: "10+", label: "anos de experiência" },
  { value: "5 mil", label: "pets atendidos" },
  { value: "4,9★", label: "avaliação dos clientes" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana S.",
    pet: "tutora do Thor",
    quote: "O Thor volta do banho cheiroso e feliz. Atendimento impecável!",
  },
  {
    name: "Rafael L.",
    pet: "tutor da Mel",
    quote: "Deixei a Mel no hotelzinho e recebi fotos todos os dias. Super tranquilo.",
  },
  {
    name: "Juliana P.",
    pet: "tutora do Bento",
    quote: "Equipe veterinária atenciosa e preço justo. Recomendo de olhos fechados.",
  },
];
