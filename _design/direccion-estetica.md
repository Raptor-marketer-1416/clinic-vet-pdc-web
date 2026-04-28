# Dirección Estética — Clinic Vet PDC

**Fecha:** 2026-04-28
**Stack:** HTML/CSS/JS vanilla · Cloudflare Pages
**Targets duros:** Core Web Vitals 100/100 · Accessibility 100/100 · Best Practices 100 · SEO 100

---

## 1. Dirección Estética Elegida

### **Médico Cálido Profesional** ("Clinical Warmth")

Una intersección deliberada entre dos mundos que la competencia trata por separado:

| Eje | Nuestro tratamiento | Competencia local |
|---|---|---|
| Calidez emocional | Tipografía humanista, amarillo de marca como acento, fotografía de pacientes reales | Pet-cute infantil, emojis, comic sans-style |
| Autoridad médica | Espaciado generoso, tipografía display fuerte, layouts editoriales | Clínico frío, hospital genérico, foto stock |

**Coherencia con la identidad de marca actual:** el logo y el sitio actual ya usan el blend azul-amarillo con outlines negros. Mantenemos esa familia cromática (es lo que el cliente y los visitantes recurrentes ya reconocen) pero subimos el nivel ejecutivo: layouts más sofisticados, tipografía con jerarquía clara, espaciado generoso. La identidad **no cambia**; el sitio sí madura.

**Cómo se siente al entrar:** "Esta gente sabe lo que hace. Y le importa mi mascota."

**Lo que evitamos rotundamente:**
- ❌ Comic-style con huellitas y corazones (pet-cute genérico)
- ❌ Hospital frío azul institucional (la trampa "salud genérica")
- ❌ Gradient morado AI default
- ❌ Layout Bootstrap predecible (filas de cards iguales)
- ❌ Stock photos de "veterinario abrazando perro" — la usa toda la competencia

---

## 2. El "Momento Inolvidable"

> **Sección "Servicios" en Home con efecto Stack Cards** — los 8 servicios médicos se apilan al hacer scroll, cada uno cubriendo al anterior con sensación premium tipo linearity.io.

Refuerzos visuales:
- **Hero**: título con animación staggered fade+slide y sub-acento naranja en la palabra "Playa del Carmen"
- **Counters animados** en hero strip: `+20 años · 8,000+ mascotas atendidas · 5 idiomas`
- **Header transparente** sobre hero que se vuelve sólido en scroll

Estos 3 elementos juntos = personalidad inconfundible que **nadie en Playa del Carmen tiene**.

---

## 3. Sistema de Diseño

### Tipografías (locked — provienen del WP actual)

```css
@import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Montserrat:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700;800&display=swap');

:root {
  --font-display: 'Francois One', sans-serif;     /* H1, hero, titulares destacados */
  --font-heading: 'Montserrat', sans-serif;       /* H2, H3, UI, navegación */
  --font-body: 'Nunito', sans-serif;              /* Párrafos, listas, cuerpo */
}
```

**Por qué este trío funciona:**
- **Francois One** es condensada y de gran personalidad — diferencia inmediata vs. competencia que usa Inter/Roboto.
- **Montserrat** es geométrica clean — autoridad sin frialdad.
- **Nunito** es humanista redondeada — cálida sin ser infantil. La más usada (cuerpo).

### Escala tipográfica (con `clamp()` para fluidez)

```css
:root {
  --text-xs:   0.75rem;      /* 12px - micro labels */
  --text-sm:   0.875rem;     /* 14px - captions, footer */
  --text-base: 1rem;         /* 16px - cuerpo */
  --text-lg:   1.125rem;     /* 18px - lead paragraph */
  --text-xl:   1.375rem;     /* 22px - subtítulos */
  --text-2xl:  1.75rem;      /* 28px - H3 */
  --text-3xl:  clamp(1.875rem, 3vw, 2.5rem);   /* H2 */
  --text-4xl:  clamp(2.25rem, 4vw, 3.25rem);   /* H1 interior */
  --text-hero: clamp(2.5rem, 6vw, 4.75rem);    /* H1 home — display fluido */

  --leading-tight:   1.15;
  --leading-snug:    1.35;
  --leading-normal:  1.6;
  --leading-relaxed: 1.75;

  --tracking-tight:  -0.02em;
  --tracking-normal: 0;
  --tracking-wide:   0.05em;
}
```

### Paleta oficial — 4 colores de marca

> **Confirmado por Alberto desde el logo y el sitio actual:** la marca tiene únicamente **azul, amarillo, negro y blanco**. No usamos naranja, ni grises de marca, ni teal genérico. Los grises son solo neutros funcionales (texto y bordes) — nunca como color identitario.

```css
:root {
  /* === Marca: 4 colores oficiales === */
  --color-primary:        #3aabd1;   /* Azul Clinic Vet — primario marca, botones, links, headers */
  --color-primary-light:  #7dc7e0;   /* Hover, fondos suaves, badges secundarios */
  --color-primary-dark:   #2789a8;   /* Active state, énfasis, borders fuertes */

  --color-secondary:      #fbab31;   /* Amarillo Clinic Vet — CTAs secundarios, highlights, badges destacados */
  --color-secondary-dark: #e69620;   /* Hover de amarillo */

  --color-black:          #000000;   /* Outlines (afín al logo), iconos puntuales */
  --color-white:          #ffffff;   /* Fondo principal */

  /* === Neutros funcionales (no identitarios) === */
  --color-text:           #1f2937;   /* Cuerpo de texto — gris muy oscuro casi negro */
  --color-text-soft:      #6b7280;   /* Captions, metadata */
  --color-text-on-dark:   #ffffff;
  --color-bg-soft:        #f3f7fa;   /* Fondo alterno tintado azul suave */
  --color-bg-warm:        #fff7e6;   /* Fondo alterno tintado amarillo suave */
  --color-border:         #e5e9ec;
  --color-divider:        #f0f3f5;

  /* === Semánticos (no de marca) === */
  --color-success:        #2d8a4e;
  --color-warning:        #d97706;
  --color-error:          #c63d3d;
}
```

**Reglas de uso de color (60-30-10 ajustado):**
- **Azul (`--color-primary`)**: dominante ~60% — botones primarios, headers, links, iconos médicos, hero accents
- **Amarillo (`--color-secondary`)**: ~25% — CTAs secundarios, badges "destacado", highlights y subrayados de palabras clave en H1/H2, iconos de servicios diferenciadores, fondos cálidos puntuales
- **Negro**: ~5% — outlines opcionales (afín al logo), iconos puntuales en hero
- **Blanco**: ~10% — fondos, contraste, respiración
- **Nunca** usar amarillo para texto largo — solo en elementos puntuales y badges
- **Nunca** mezclar el amarillo con tints naranjas/rojos — mantener fidelidad al amarillo dorado del logo

### Espaciado (sistema de 8px)

```css
:root {
  --space-1:  0.25rem;   /* 4px  */
  --space-2:  0.5rem;    /* 8px  */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.5rem;    /* 24px */
  --space-6:  2rem;      /* 32px */
  --space-8:  3rem;      /* 48px */
  --space-10: 4rem;      /* 64px */
  --space-12: 6rem;      /* 96px - separación entre secciones grandes */
  --space-16: 8rem;      /* 128px - separación pilar */
}
```

### Radios y sombras

```css
:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  /* Sombras con tinte azul marca — no negro plano */
  --shadow-sm: 0 1px 2px rgba(39, 137, 168, 0.06);
  --shadow-md: 0 4px 12px rgba(39, 137, 168, 0.08), 0 2px 4px rgba(39, 137, 168, 0.04);
  --shadow-lg: 0 12px 32px rgba(39, 137, 168, 0.10), 0 4px 12px rgba(39, 137, 168, 0.06);
  --shadow-xl: 0 24px 56px rgba(39, 137, 168, 0.14), 0 8px 24px rgba(39, 137, 168, 0.08);

  /* Sombra amarilla para elementos con acento secundario */
  --shadow-warm: 0 12px 32px rgba(251, 171, 49, 0.18);
}
```

### Anchos de contenido

```css
:root {
  --container-tight:  720px;  /* Texto largo (legales, copy denso) */
  --container-normal: 1200px; /* Standard */
  --container-wide:   1400px; /* Hero, secciones full bleed */
}
```

---

## 4. Componentes (mapeados a skills del kit)

### 4.1 Header — `skill: encabezado-transparente`
**Aplica skill `encabezado-transparente`** completa, adaptada con:
- Dropdown en "Servicios" con grid de 2 columnas mostrando los 8 servicios + iconos
- "Certificado de Viaje" como ítem top-level destacado con badge ✈️
- Selector de idioma con banderitas 🇲🇽 / 🇺🇸 a la derecha (links a `/` ↔ `/vet-clinic-playa-del-carmen/`, no JS toggle)
- En móvil: menú off-canvas con animación slide
- Logo: 140px ancho desktop, 110px móvil
- Background: `transparent` en home con hero, `rgba(255,255,255,0.96)` con `backdrop-filter: blur(12px)` al hacer scroll >50px

### 4.2 Hero (Home) — Layout asimétrico

```
┌─────────────────────────────────────────┐
│  [logo]            [menu]      [🇲🇽|🇺🇸]│  ← header transparente
├─────────────────────────────────────────┤
│                                         │
│  EYEBROW (caps + accent)                │
│  H1 GRANDE — 3 LÍNEAS                   │
│  Subtítulo en una línea                 │  [imagen
│                                         │   real
│  [CTA primario]  [CTA secundario]       │   pacient.]
│                                         │
│  ✓ +20 años · ✓ Bilingüe · ✓ Cat-friendly │
│                                         │
└─────────────────────────────────────────┘
```

- **H1**: `font-display`, color `--color-text`, con palabra "Playa del Carmen" subrayada o pintada en `--color-secondary` (amarillo) para break visual — congruente con el highlight amarillo que ya usa el sitio actual
- **Animación entry**: `staggered fade-slide-up` (eyebrow → h1 → sub → ctas → trust)
- **Background**: `radial-gradient` mesh sutil con tints azul suave y blanco cálido
- **Decoración**: blob orgánico SVG de fondo (azul `--color-primary-light` muy translúcido) animado con `transform` lento — sensación viva sin distraer
- **Imagen lateral**: real del consultorio o equipo, no stock; bordes `--radius-lg` y sombra `--shadow-xl`

### 4.3 Trust Strip (bajo hero)

Banda angosta con 4 métricas en counters animados (IntersectionObserver al scrollear):

```
+20             8,000+              5            100%
AÑOS DE      MASCOTAS       IDIOMAS         BILINGÜE
EXPERIENCIA  ATENDIDAS      ATENDIDOS
```

Estilo: tipografía display gigante para el número, label en Montserrat caps. Background `--color-bg-soft` para diferenciar del hero.

### 4.4 Sección Servicios (Home) — `skill: efecto-stack-cards`
**Este es el "momento inolvidable".** Aplicar la skill `efecto-stack-cards` con los 8 servicios médicos. Cada card:
- Imagen real del servicio (cuando Alberto la suba)
- Título en Francois One
- Descripción corta en Nunito
- Lista de 3-4 features con checkmarks teal
- CTA "Ver servicio →"
- Color de fondo alternado entre `--color-bg-soft` y `--color-bg-warm` para evitar monotonía

### 4.5 Pilar Certificado (bloque destacado en home + landing dedicada)
Este pilar merece tratamiento especial:
- **Bloque en home**: layout split con imagen del Westie abordando avión a la izq, copy a la der, fondo `--color-bg-warm` (sutil amarillo) con badge azul "✈️ Servicio destacado"
- **Página dedicada**: hero específico con sub-headers grandes para cada bloque (USA, Europa, Mexico)

### 4.6 Sección "¿Por qué elegirnos?" — Bento grid
NO usar 3 columnas iguales típicas. Usar **bento grid asimétrico**:

```
┌──────────────────┬──────────────┐
│                  │              │
│    +20 años      │  Bilingüe    │
│    (grande)      │              │
│                  ├──────────────┤
│                  │  Dr.         │
│                  │  Dermatólogo │
├──────────────────┴──────────────┤
│  Cat-friendly        | Diagnóst.│
└─────────────────────────────────┘
```

Cada celda con un icono inline SVG (no Font Awesome — SVGs custom monocromáticos en `--color-primary`). Hover: sutil lift + sombra crece.

### 4.7 Bilingual Block — Gancho expat
Sección dedicada en home con copy bilingüe + CTA grande:
- Background `--color-primary` con texto blanco
- "We are a bilingual clinic" en Francois One gigante
- Subtitle en inglés
- CTA outline blanco "See our English page →"
- Decoración: bandera USA SVG sutil de fondo (opacity 0.08)

### 4.8 Testimonios — Trust signals via TrustIndex
Bloque que recibe el embed HTML de TrustIndex que pasará Alberto:
```html
<section class="reviews">
  <h2>Lo que dicen nuestros clientes</h2>
  <p class="reviews-lead">Reseñas reales desde Google · Actualizadas en tiempo real</p>
  <div id="trustindex-widget">
    <!-- INSERT: HTML embed de TrustIndex que pasará Alberto -->
  </div>
  <a href="https://maps.app.goo.gl/wv2LiHY9dZYf9fL97"
     class="btn btn-outline" rel="noopener">
    Ver todas en Google →
  </a>
</section>
```
Wrapper estilizado para que el widget herede tipografía y colores del sitio.

### 4.9 NAP + Mapa — Ubicación
Layout split: izq info de contacto en card con ícono pin teal, der mapa embebido con bordes redondeados `--radius-lg` y sombra. Sticky en desktop al hacer scroll en sección.

### 4.10 FAQ — Acordeón con `<details>` nativo
Usar `<details>/<summary>` semánticos (mejor accesibilidad que JS custom). Estilizar con flecha animada que rota 90deg al abrir. Sin JS — accesibilidad y performance perfectos.

### 4.11 Botones Flotantes — `skill: botones-conversion`
**Aplicar skill `botones-conversion` completa**: WhatsApp + llamada flotantes con modal de confirmación + tracking GTM. Posición bottom-right, stack vertical en móvil.

### 4.12 Footer
Layout 4 columnas desktop, stack móvil:
- Col 1: Logo + breve descripción + redes
- Col 2: Servicios (lista de los 8)
- Col 3: Empresa (Sobre, Contacto, Cert. de viaje, English page)
- Col 4: Contacto (NAP completo, horarios, teléfono, email)
Bottom strip: copyright + links a Aviso de Privacidad + T&C
Background: `--color-text` (gris oscuro) con texto blanco. **NO negro puro** — más cálido.

### 4.13 Títulos rellenables — `skill: titulo-rellenable`
**Aplicar skill `titulo-rellenable`** en al menos:
- Sección "Más de 20 años cuidando a tu mascota" (título grande en H2 home)
- H1 del Pilar Certificado de Viaje
- H1 del Pilar Vet Clinic EN

Las palabras se rellenan de teal mientras el usuario hace scroll. Premium feel sin sobrecargar.

---

## 5. Micro-interacciones globales

| Elemento | Interacción |
|---|---|
| Botones primarios | `transform: translateY(-2px)` + sombra crece en hover, transition 200ms ease-out |
| Cards de servicios | Lift + shadow crece (skill stack-cards lo maneja) |
| Links inline | Underline animado de izq a der con `linear-gradient` background-size |
| Iconos | Scale 1.05 en hover de su contenedor |
| CTAs principales | Pulse sutil cada 4s en mobile (driver de conversión) |
| Imágenes | Zoom suave 1.04 al hover en cards |
| Header al scrollear | Fade-in del background con `backdrop-filter` |

```css
/* Reduced motion always */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 6. Iconografía

- **Sistema:** SVGs inline custom en monocromo `--color-primary` (no Font Awesome, no emoji-pack)
- **Estilo:** trazo 1.5px, esquinas suaves, vacíos respirables — más Heroicons/Lucide que Material Icons
- **Tamaño base:** 24px, escalable con `currentColor`
- **Iconos específicos** a crear/elegir:
  - Estetoscopio (consulta)
  - Jeringa simple (vacunación)
  - Cisne (esterilización — alternativa elegante a "tijera")
  - Bisturí (cirugía)
  - Lupa con piel (dermatología)
  - Ave/lagarto silueta (exóticas)
  - Tijera+peine (estética)
  - Onda ultrasonido (diagnóstico)
  - Avión (certificado de viaje)
  - Gato calmado (cat-friendly)
  - Globo terráqueo (bilingüe)

---

## 7. Imágenes — `skill: multimedia-web`

**Aplicar skill `multimedia-web` completa.** Reglas no negociables:
- Todas en **WebP** con fallback solo si Alberto sube formato fuente que no sea webp
- `loading="lazy"` para todas excepto hero (eager + preload)
- `width` y `height` explícitos siempre (anti-CLS)
- ALT text con keyword + ubicación cuando aplique (`Veterinario revisando perro en Clinic Vet PDC, Playa del Carmen`)
- Hero comprimido a <80KB con calidad 80
- Imágenes secundarias <40KB

Lista de imágenes pendientes ya documentada en [assets-cliente.md](../assets-cliente.md).

---

## 8. Accesibilidad — `skill: accesibilidad-pagespeed`

**Aplicar skill `accesibilidad-pagespeed` completa.** Highlights críticos:
- Contraste mínimo 4.5:1 para texto, 3:1 para UI
- Focus visible custom con outline teal de 3px
- `aria-label` en todos los iconos sin texto adyacente
- `lang="es"` en todas las páginas españolas, `lang="en"` en `/vet-clinic-playa-del-carmen/`
- `hreflang` recíprocos entre Home ES y Vet Clinic EN
- Skip-link para keyboard users
- Tablas con `<caption>` y `<th scope="col/row">`

---

## 9. Layout Patterns por Tipo de Página

### Home
1. Header transparente
2. Hero asimétrico con imagen
3. Trust strip (counters)
4. Stack cards de servicios (★ momento inolvidable)
5. Bloque destacado Certificado de Viaje (split)
6. Bento grid "¿Por qué elegirnos?"
7. Bilingual block teal
8. TrustIndex widget
9. Cat-friendly callout (split con foto)
10. NAP + Mapa
11. FAQ acordeón
12. CTA strip de cierre
13. Footer

### Páginas de Servicio (las 8)
1. Header sólido (no transparente)
2. Breadcrumb
3. Hero compacto con imagen (split 50/50)
4. Direct Answer (60 palabras) en card destacado
5. Secciones de contenido con H2s
6. Bloque relacionado: 3 servicios hermanos
7. FAQ acordeón
8. CTA strip
9. Footer

### Pilar Certificado
1. Header sólido
2. Hero pleno con foto Westie en avión, badge "Servicio especializado"
3. Direct Answer destacado
4. Tabs por destino (USA / Europa / México) — usar `<details>` o segmented control con anchor links
5. Proceso paso a paso visual (números grandes en círculos teal)
6. Galería de las 7 imágenes propias del cliente
7. FAQ extendido (7 preguntas)
8. CTA final con sentido de urgencia ("Agenda con anticipación")
9. Footer

### Vet Clinic EN
Estructura idéntica al pilar de viaje pero en inglés, con `<html lang="en">` y `hreflang` a Home ES.

### Sobre Nosotros + Contacto
Layouts más simples, foco en NAP, mapa y autoridad médica.

---

## 10. Performance — Core Web Vitals 100/100

- **CSS único `styles.css` ~25KB max** comprimido
- **JS único `main.js` ~8KB max** — solo: IntersectionObserver para reveals, header scroll, tabs, contador animado
- **Sin frameworks**, sin jQuery, sin Bootstrap
- **Fonts**: `display=swap` + preload de `font-display` (Francois One) crítica
- **Imágenes hero**: preload + WebP optimizado
- **Critical CSS** inline en `<head>` (above-the-fold), resto async
- **Defer JS** todo
- **No third-party** excepto Google Maps embed (lazy iframe), GTM (cuando se configure) y TrustIndex widget

---

## 11. Skills del kit aplicadas (resumen)

| Skill | Dónde se aplica | Prioridad |
|---|---|---|
| `arquitectura-web` | Estructura silo (ya hecha en Fase 1) | ✅ Aplicada |
| `accesibilidad-pagespeed` | Todo el sitio — base obligatoria | 🔥 Crítica |
| `multimedia-web` | Todas las imágenes | 🔥 Crítica |
| `encabezado-transparente` | Header global | 🔥 Crítica |
| `efecto-stack-cards` | Sección Servicios en Home (★ momento inolvidable) | 🔥 Crítica |
| `titulo-rellenable` | H2 "+20 años" en home, H1 de pilares | Alta |
| `botones-conversion` | WhatsApp + llamada flotantes con GTM | 🔥 Crítica |
| `cumplimiento-legal` | Aviso Privacidad + T&C + headers seguridad | Crítica (Fase 5) |

---

## 12. Lo que NO vamos a hacer (anti-patterns activos)

- ❌ NO carrusel/slider en hero — son convertion killers, además molestan accesibilidad
- ❌ NO "Lorem ipsum" ni placeholders genéricos en producción
- ❌ NO clichés visuales: huellitas, hueso, corazones, comic icons
- ❌ NO stock photos genéricas de "veterinario abrazando perro feliz"
- ❌ NO modal popup de newsletter ni de cookies invasivo
- ❌ NO fondos con gradient morado/azul AI default
- ❌ NO Bootstrap rows con 3 columnas iguales en cada sección
- ❌ NO transition: all on everything
- ❌ NO emojis decorativos en H1/H2 (sí en CTAs y cards puntuales)
- ❌ NO Comic Sans, Arial, Helvetica genérica
- ❌ NO sombras negras planas — todas con tinte azul marca sutil
- ❌ NO usar naranja, rojo, verde u otros colores que no sean los 4 oficiales (azul, amarillo, negro, blanco)

---

## 13. Validación previa a Fase 4

Antes de programar el HTML, Alberto debe aprobar:
- [ ] Dirección estética "Médico Cálido" (concepto general)
- [ ] Stack cards como "momento inolvidable" en Home
- [ ] Header transparente con dropdown de servicios
- [ ] Banderitas 🇲🇽/🇺🇸 como navegación bilingüe (no toggle JS)
- [ ] Bento grid asimétrico para "¿Por qué elegirnos?"
- [ ] Aplicar todas las skills del kit listadas en sección 11

Si Alberto aprueba, **Fase 4 puede arrancar inmediatamente** con esta dirección + el copy ya redactado en `_copy/`.
