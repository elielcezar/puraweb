# PuraWeb - Landing Page

Landing page institucional para a agência digital **PuraWeb**, especializada em criação de sites profissionais para pequenas empresas. Construída com Next.js 16, TypeScript, Tailwind CSS e shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)

---

## Sobre o Projeto

A PuraWeb é uma agência digital que oferece sites profissionais com **investimento único** (sem mensalidades). Esta landing page apresenta os serviços, diferenciais e depoimentos de clientes.

### Proposta de Valor
- Sites profissionais com investimento único
- Visual moderno otimizado para conversão
- Alto desempenho no Google (SEO)
- Configuração completa de domínio e hospedagem
- Integrações com WhatsApp, redes sociais e mais

### Contato
- **WhatsApp:** (41) 99963.1609
- **Website:** puraweb.com.br

---

## Stack Tecnológica

### Core
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Next.js | 16 | Framework React com App Router |
| TypeScript | 5.8 | Tipagem estática |
| React | 18.3 | Biblioteca UI |
| Tailwind CSS | 3.4 | Estilização utilitária |

### UI Components
| Biblioteca | Propósito |
|------------|-----------|
| shadcn/ui | Componentes baseados em Radix UI |
| Radix UI | Primitivos acessíveis |
| Lucide React | Ícones principais |
| React Icons | Ícones complementares (FontAwesome, etc.) |

### Animações e Interatividade
| Biblioteca | Propósito |
|------------|-----------|
| Framer Motion | Animações de entrada e scroll |
| Embla Carousel | Carrosséis (Hero, Testimonials) |
| embla-carousel-autoplay | Auto-play para carrosséis |

### Utilitários
| Biblioteca | Propósito |
|------------|-----------|
| TanStack Query | Gerenciamento de estado assíncrono |
| clsx + tailwind-merge | Merge de classes CSS |
| class-variance-authority | Variantes de componentes |
| Zod | Validação de schemas |
| React Hook Form | Gerenciamento de formulários |

---

## Estrutura do Projeto

```
puraweb/
├── app/                          # Next.js App Router
│   ├── globals.css              # Estilos globais e Design System
│   ├── layout.tsx               # Layout raiz com metadata SEO
│   ├── page.tsx                 # Página inicial (composição)
│   ├── not-found.tsx            # Página 404
│   ├── providers.tsx            # Context providers (Query, Tooltip, Toast)
│   └── sobre/                   # Página sobre (rota adicional)
│       └── page.tsx
│
├── components/                   # Componentes React
│   ├── ui/                      # Componentes shadcn/ui + customizados
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── H2.tsx              # Título customizado com linha decorativa
│   │   └── ...                 # Demais componentes Radix
│   │
│   ├── Header.tsx              # Navegação fixa no topo
│   ├── Hero.tsx                # Carousel fullscreen principal
│   ├── WhyChooseUs.tsx         # Seção "Sobre a Pura Web"
│   ├── Features.tsx            # 6 cards de benefícios
│   ├── Prevention.tsx          # Seção de prevenção/cuidados
│   ├── Services.tsx            # Carousel de serviços (slides fullscreen)
│   ├── Numbers.tsx             # Estatísticas com parallax
│   ├── Testimonials.tsx        # Carousel de depoimentos
│   ├── BrandsCarousel.tsx      # Logos de clientes (scroll infinito)
│   └── Footer.tsx              # Rodapé
│
├── lib/                         # Utilitários e helpers
│   ├── utils.ts                # Função cn() para merge de classes
│   └── wordpress.ts            # Integração WP (placeholder)
│
├── utils/                       # Funções utilitárias
│   └── helpers.ts              # openWhatsApp(), scrollToSection()
│
├── hooks/                       # React hooks customizados
│   ├── use-mobile.tsx          # Detecção de mobile
│   └── use-toast.ts            # Hook para toasts
│
├── public/                      # Assets estáticos
│   ├── brands/                 # Logos de marcas de notebooks
│   ├── logo-pura.webp          # Logo principal
│   ├── favicon.png             # Favicon
│   └── ...                     # Imagens de seções
│
├── next.config.js              # Configuração Next.js (export estático)
├── tailwind.config.ts          # Configuração Tailwind + Design System
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências e scripts
```

---

## Sistema de Design

### Paleta de Cores (HSL)

Todas as cores são definidas em HSL no arquivo `app/globals.css`:

```css
/* Cores Principais */
--primary: 217 91% 18%;           /* Azul escuro profundo */
--primary-foreground: 0 0% 100%;  /* Branco */
--secondary: 217 91% 60%;         /* Azul claro */
--accent: 217 91% 60%;            /* Azul accent */

/* Cores Neon (Destaques) */
--neongreen: 168 80% 45%;         /* Verde neon - CTA principal */
--neonred: 338 69% 48%;           /* Vermelho neon */
--neonblue: 209 80% 45%;          /* Azul neon */

/* Cores de Suporte */
--deepgray: 220 36% 20%;          /* Cinza profundo para textos */
--background: 0 0% 100%;          /* Fundo branco */
--foreground: 215 25% 15%;        /* Texto principal */
--muted: 210 40% 96.1%;           /* Fundos suaves */
--muted-foreground: 215 16% 47%;  /* Texto secundário */

/* Cores Legadas (hex - evitar usar) */
--darkblue: #001d4c;
--deepblue: #193061;
--blue: #0053b1;
--lightblue: #4f9ad2;
```

### Tipografia

```typescript
// tailwind.config.ts
fontFamily: {
  roboto: ['Roboto', 'sans-serif'],      // Fonte base do body
  oswald: ['Oswald', 'sans-serif'],      // Títulos grandes (uppercase)
  pacifico: ['Pacifico', 'cursive'],     // Subtítulos decorativos
  archivo: ['Archivo Black', 'sans-serif'], // Display bold
  bowlby: ['Bowlby One', 'sans-serif'],  // Display alternativo
}
```

**Hierarquia de Títulos:**
- **H2 Principal:** `text-[32px] md:text-[38px] font-oswald uppercase font-bold text-deepgray`
- **H2 com subtítulo:** Fonte Pacifico para subtítulo + Oswald para título principal
- **H3 Cards:** `text-3xl font-bold font-oswald uppercase`
- **Corpo:** `text-[1.15rem] font-normal text-muted-foreground`

### Componentes de UI

#### Componente H2 Customizado
```tsx
// components/ui/H2.tsx
<H2 title="Título" marginBorder="mx-auto" color="text-foreground" />
// Renderiza título + linha decorativa verde de 24px
```

#### Classes Utilitárias Globais
```css
/* globals.css */
.btn-primary {
  @apply flex items-center justify-center text-xl tracking-tight font-bold 
         rounded-md bg-[var(--blue)] hover:bg-[var(--darkblue)] 
         text-white px-6 py-2 transition-all duration-300 cursor-pointer;
}

.btn-wpp {
  @apply flex items-center justify-center bg-green-500 hover:bg-[var(--darkblue)] 
         transition-colors hover:cursor-pointer border-2 border-green-500 
         hover:border-[var(--darkblue)] px-6 py-2 text-white text-lg 
         tracking-tight font-semibold rounded-md mx-auto z-50 gap-2;
}

.numbers-description {
  @apply text-white text-lg font-normal max-w-[400px] mx-auto leading-tight mb-0;
}
```

### Animações

#### Keyframes Customizados
```typescript
// tailwind.config.ts
keyframes: {
  "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
  "fade-in-up": { 
    from: { opacity: "0", transform: "translateY(20px)" },
    to: { opacity: "1", transform: "translateY(0)" }
  },
  "fade-in-left": { 
    from: { opacity: "0", transform: "translateX(-30px)" },
    to: { opacity: "1", transform: "translateX(0)" }
  },
  "fade-in-right": { 
    from: { opacity: "0", transform: "translateX(30px)" },
    to: { opacity: "1", transform: "translateX(0)" }
  },
}
```

#### Framer Motion Pattern
```tsx
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  {/* Conteúdo */}
</motion.div>
```

#### Scroll Infinito (Brands)
```css
@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-infinite-scroll {
  animation: infinite-scroll 60s linear infinite;
}
```

### Responsividade

#### Variantes Customizadas
```typescript
// tailwind.config.ts - plugins
function({ addVariant }) {
  addVariant('landscape', '@media (orientation: landscape)');
  addVariant('portrait', '@media (orientation: portrait)');
}
```

**Uso:**
```tsx
<div className="landscape:pt-16 portrait:pb-20 portrait:flex-col">
  {/* Layout diferente por orientação */}
</div>
```

---

## Guia de Componentes

### Header
- **Arquivo:** `components/Header.tsx`
- **Tipo:** Client Component
- **Características:** Fixo no topo, fundo semi-transparente com blur, navegação horizontal
- **Estilo:** `bg-black/75 backdrop-blur-sm max-w-[1100px] rounded-full`

### Hero / Services
- **Arquivo:** `components/Hero.tsx` (ou `Services.tsx`)
- **Tipo:** Client Component
- **Biblioteca:** Embla Carousel com AutoPlay
- **Características:** Slides fullscreen (800px min-height), tipografia grande
- **Padrão de texto:** Fonte Pacifico para subtítulo + Oswald para título principal

### WhyChooseUs
- **Arquivo:** `components/WhyChooseUs.tsx`
- **Tipo:** Client Component
- **Características:** Layout flex com imagem e texto, animação Framer Motion
- **Background:** Imagem com `background-size: cover`

### Features
- **Arquivo:** `components/Features.tsx`
- **Tipo:** Client Component
- **Características:** Grid 3 colunas, cards com ícone circular verde no topo
- **Efeito hover:** `hover:mt-[-20px]` para elevação

### Numbers
- **Arquivo:** `components/Numbers.tsx`
- **Tipo:** Client Component
- **Características:** Parallax com `background-attachment: fixed`
- **Estilo números:** `text-[66px] font-oswald text-neongreen`

### Testimonials
- **Arquivo:** `components/Testimonials.tsx`
- **Tipo:** Client Component
- **Biblioteca:** Embla Carousel com AutoPlay
- **Características:** Cards de depoimento com avatar inicial, rating 5 estrelas

### BrandsCarousel
- **Arquivo:** `components/BrandsCarousel.tsx`
- **Tipo:** Client Component
- **Características:** Scroll infinito horizontal com animação CSS
- **Duplicação:** Logos duplicados 3x para efeito seamless

---

## Configuração e Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clonar repositório
git clone [repo-url]
cd puraweb

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

### Variáveis de Ambiente
Criar arquivo `.env.local`:
```env
# Base path para deploy em subdiretório (opcional)
NEXT_PUBLIC_BASE_PATH=/caminho

# WordPress API (opcional, para blog)
NEXT_PUBLIC_WP_API_URL=https://admin.puraweb.com.br/wp-json/wp/v2
```

### Scripts Disponíveis
```bash
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build de produção (export estático)
npm run start    # Servidor de produção
npm run lint     # Verificação ESLint
```

---

## Build e Deploy

### Configuração de Export Estático
O projeto está configurado para gerar arquivos estáticos:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',           // Gera /out com HTML estático
  basePath: basePath,         // Suporta subdiretório
  assetPrefix: basePath,      // Prefixo para assets
  images: {
    unoptimized: true,        // Necessário para export
  },
};
```

### Build para Produção
```bash
npm run build
# Arquivos gerados em /out
```

### Deploy
Os arquivos da pasta `/out` podem ser hospedados em qualquer servidor estático:
- Vercel
- Netlify
- GitHub Pages
- Apache/Nginx
- S3 + CloudFront

---

## Padrões de Código para IAs

### Regras Obrigatórias

#### 1. Base Path para Imagens
**SEMPRE** usar o base path para referências de imagens:
```tsx
// CORRETO
<img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.webp`} />
style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bg.jpg)` }}

// INCORRETO
<img src="/logo.webp" />
```

#### 2. Client Components
Componentes com interatividade DEVEM usar a diretiva:
```tsx
'use client';

import { useState } from 'react';
// ... resto do componente
```

#### 3. Sistema de Cores HSL
**SEMPRE** usar variáveis HSL do design system:
```tsx
// CORRETO
className="text-primary bg-neongreen"
className="text-muted-foreground"

// EVITAR
style={{ color: '#0053b1' }}
className="text-blue-500"
```

#### 4. Tipografia para Títulos
```tsx
// Títulos grandes
className="font-oswald uppercase font-bold tracking-tight"

// Subtítulos decorativos
className="font-pacifico text-neongreen"

// Corpo de texto
className="text-muted-foreground font-normal"
```

#### 5. Animações de Entrada
Usar Framer Motion para scroll reveals:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

#### 6. Carrosséis
Usar Embla Carousel com AutoPlay:
```tsx
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true, align: 'center' },
  [AutoPlay({ delay: 1500, stopOnInteraction: true })]
);
```

#### 7. Responsividade
Usar variantes `portrait:` e `landscape:`:
```tsx
className="portrait:flex-col portrait:py-0 landscape:pt-16"
```

### Estrutura de Novo Componente

```tsx
'use client';

import { motion } from "framer-motion";
import { IconName } from "lucide-react";
import { Button } from "@/components/ui/button";

const NovoComponente = () => {
  return (
    <section id="secao-id" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-oswald uppercase font-bold text-deepgray">
            Título da Seção
          </h2>
          {/* Conteúdo */}
        </motion.div>
      </div>
    </section>
  );
};

export default NovoComponente;
```

### O que NÃO Fazer

- Adicionar imagens sem `process.env.NEXT_PUBLIC_BASE_PATH`
- Usar Server Components para carrosséis ou animações
- Ignorar o sistema de cores HSL definido
- Criar componentes UI fora de `components/ui/`
- Usar cores hardcoded (hex/rgb) em vez de variáveis
- Modificar `next.config.js` sem entender impacto no export
- Remover `'use client'` de componentes com hooks/eventos

---

## Arquitetura de Componentes

```
app/page.tsx
    │
    ├── Header (fixo)
    │
    ├── <main>
    │   ├── Hero (carousel fullscreen)
    │   ├── WhyChooseUs (sobre + imagem)
    │   ├── Features (grid 3 colunas)
    │   ├── Prevention
    │   ├── Services (carousel slides)
    │   ├── Numbers (parallax stats)
    │   ├── Testimonials (carousel cards)
    │   └── BrandsCarousel (scroll infinito)
    │
    └── Footer
```

---

## Integrações

### WhatsApp
```typescript
// utils/helpers.ts
export function openWhatsApp(message: string = 'Olá!') {
  window.open(`https://wa.me/554188815706?text=${encodeURIComponent(message)}`, '_blank');
}
```

### WordPress Headless (Preparado)
O projeto tem estrutura preparada para integração com WordPress:
- Arquivo `lib/wordpress.ts` com funções placeholder
- Configuração de `remotePatterns` para imagens do WP
- Estrutura de páginas de blog em `app/blog/` (não implementado)

### SEO e Metadata
Configurado em `app/layout.tsx`:
- Open Graph tags
- Twitter Cards
- Structured Data (JSON-LD) para LocalBusiness
- Meta robots e verification

---

## Manutenção

### Adicionar Nova Seção
1. Criar componente em `components/NovaSecao.tsx`
2. Seguir padrão de Client Component com Framer Motion
3. Importar e adicionar em `app/page.tsx` na ordem desejada
4. Usar classes do Design System

### Modificar Cores
1. Editar variáveis em `app/globals.css` (seção `:root`)
2. Cores DEVEM ser em formato HSL
3. Testar em modo claro e escuro (`.dark`)

### Adicionar Novos Ícones
```tsx
// Lucide React (preferido)
import { IconName } from "lucide-react";

// React Icons (alternativa)
import { FaWhatsapp } from "react-icons/fa";
```

---

## Licença

Propriedade de PuraWeb. Todos os direitos reservados.

---

*Documentação atualizada em Janeiro/2026*
