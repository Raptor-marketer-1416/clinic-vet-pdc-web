# Assets de Cliente — Clinic Vet PDC

## NAP oficial

**Nombre:** Clinic Vet PDC
**Dirección:** Calle 30 Nte 304-Local 1, entre 32 norte y 34 norte, Gonzalo Guerrero, 77720 Playa del Carmen, Q.R.
**Teléfono:** 984 803 6212
**Coordenadas:** 20.6364704, -87.0743475
**GBP:** https://maps.app.goo.gl/wv2LiHY9dZYf9fL97

## Embed Google Maps (limpio, sin typo)

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8131792930653!2d-87.0743475257723!3d20.636470401138688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43295086b795%3A0xfa8fde3a4fe8408d!2sClinic%20Vet%20PDC!5e0!3m2!1ses!2smx!4v1777381937844!5m2!1ses!2smx"
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación de Clinic Vet PDC en Playa del Carmen">
</iframe>
```

> Corregido: el atributo `width="100%SSSSSSSS"` que enviaste tenía un typo. Ya está como `width="100%"` y se le añadió `title` para accesibilidad.

## Identidad visual (extraída del sitio actual — Divi Theme)

### Logo
- Original: https://clinicvetpdc.com/wp-content/uploads/2024/12/Logotipo-Clinic-Vet-PDC.webp
- Descargado a: [img/logo-clinic-vet-pdc.webp](img/logo-clinic-vet-pdc.webp)

### Tipografías (Google Fonts — confirmadas en el HTML actual)

| Rol | Fuente | Justificación |
|---|---|---|
| **Titulares (H1/H2)** | **Francois One** | Sans-serif condensada, alta personalidad — el cliente la valora |
| **Subtítulos / UI** | **Montserrat** | Geométrica, clean, peso variable 300–700 |
| **Cuerpo / párrafos** | **Nunito** | Humanista redondeada, alta legibilidad — la más usada en el sitio actual |

**Import recomendado para el sitio nuevo:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Francois+One&family=Montserrat:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap">
```

### Paleta oficial de marca (confirmada por Alberto desde el logo)

> La marca usa **únicamente 4 colores**: azul, amarillo, negro y blanco. No es naranja, no es teal genérico, no son grises de marca. Los grises son solo neutros funcionales para texto y bordes.

| Rol | Hex | Uso |
|---|---|---|
| **Azul Clinic Vet (primario)** | `#3aabd1` | Botones primarios, links, headers, iconos médicos |
| **Azul claro** | `#7dc7e0` | Hover, fondos suaves |
| **Azul oscuro** | `#2789a8` | Active state, énfasis fuerte |
| **Amarillo Clinic Vet (secundario)** | `#fbab31` | CTAs secundarios, highlights de palabras clave, badges destacados |
| **Amarillo oscuro** | `#e69620` | Hover de amarillo |
| **Negro** | `#000000` | Outlines opcionales (afín al logo), iconos puntuales |
| **Blanco** | `#ffffff` | Fondos principales |
| Texto cuerpo | `#1f2937` | Neutro funcional, no identitario |
| Texto soft | `#6b7280` | Captions, metadata |
| Fondo alterno azul | `#f3f7fa` | Tintado azul muy suave |
| Fondo alterno amarillo | `#fff7e6` | Tintado amarillo muy suave |

> Los colores que aparecían en el CSS del WordPress (`#2ea3f2`, `#419dc4`, `#82c0c7`, etc.) eran defaults de Divi/Gutenberg, no de la marca real — descartados.

### Otros elementos del theme actual

- **Builder:** WordPress + **Divi Theme** (Elegant Themes)
- **Iconos:** Font Awesome + ETmodules (Divi) — los reemplazaremos por Lucide / inline SVG en el sitio nuevo
- **Veterinario titular:** Fernando de Jesús Pérez Castillo, Cédula 4080938, especialidad Dermatología Veterinaria

## WhatsApp
**Mismo número que el fijo:** 984 803 6212 (confirmado por Alberto)

## Páginas legítimas confirmadas a migrar

1. `/` — Home (rescatar copy core, optimizar H1)
2. `/analisis-clinicos/` — confirmada en GSC con tráfico real (17 clics/28d, pos 6.6)
3. **`/certificado-de-viaje/`** — confirmada por Alberto. ⚠️ GSC dice "URL is unknown to Google" (no indexada — el hack bloqueó el descubrimiento). Ya tiene copy completo + 7 imágenes propias del cliente. **Promovida a página PILAR** en el sitio nuevo (no metida dentro de `/servicios/`).

## Imágenes del cliente a migrar (7 reales, no stock)

De `/certificado-de-viaje/`:
- `https://clinicvetpdc.com/wp-content/uploads/2026/02/Certificado-de-Viaje.webp`
- `https://clinicvetpdc.com/wp-content/uploads/2026/02/Revision-consulta-veterinaria.webp`
- `https://clinicvetpdc.com/wp-content/uploads/2025/06/antiguo-pastor-ingles-viajando.webp`
- `https://clinicvetpdc.com/wp-content/uploads/2025/06/art-therapist-illustration-06-1.png`
- `https://clinicvetpdc.com/wp-content/uploads/2026/02/Revision-Medica-Veterinaria.webp`
- `https://clinicvetpdc.com/wp-content/uploads/2026/02/Bichon-Maltes-en-torre-Eiffel.webp`
- `https://clinicvetpdc.com/wp-content/uploads/2026/02/Westie-a-punto-de-abordar-el-avion-.webp`

> **Acción Fase 4:** descargarlas todas a `/img/` antes de que el WordPress se apague.

## Email
**clinicvetpdc@gmail.com**

## Cat-friendly
✅ **ACTIVO** — el consultorio cat-friendly ya está operando. Comunicarlo en presente, no como "próximamente". Es diferenciador fuerte vs. competencia local.

## Horarios oficiales (confirmados desde GBP)

| Día | Horario |
|---|---|
| Lunes | 9:00 a.m. — 7:00 p.m. |
| Martes | 9:00 a.m. — 7:00 p.m. |
| Miércoles | 9:00 a.m. — 7:00 p.m. |
| Jueves | 9:00 a.m. — 7:00 p.m. |
| Viernes | 9:00 a.m. — 7:00 p.m. |
| Sábado | 9:00 a.m. — 4:00 p.m. |
| Domingo | Cerrado |

Para schema `openingHoursSpecification`:
```json
[
  {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00"},
  {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00"}
]
```

## Reseñas — TrustIndex
Alberto integrará widget de TrustIndex (HTML embed) que jala reseñas de la ficha de Google en tiempo real. **No usar testimonios estáticos del WordPress actual.** El embed se inserta en la sección de testimonios de cada página relevante (Home, Pilar Certificado, Vet Clinic EN, hub Servicios).

## Inventario de imágenes pendientes (Alberto las genera/sube)

> Cada espacio de imagen quedará marcado en el HTML con un placeholder claro (`<!-- IMG-PENDIENTE: descripción -->`) para que sepas exactamente qué subir y dónde.

### Ya descargadas del WP actual (legítimas — listas para usar)
- ✅ `img/logo-clinic-vet-pdc.webp` (logo principal)
- ✅ `img/certificado-viaje/certificado-de-viaje.webp`
- ✅ `img/certificado-viaje/revision-consulta-veterinaria.webp`
- ✅ `img/certificado-viaje/antiguo-pastor-ingles-viajando.webp`
- ✅ `img/certificado-viaje/revision-medica-veterinaria.webp`
- ✅ `img/certificado-viaje/bichon-maltes-torre-eiffel.webp`
- ✅ `img/certificado-viaje/westie-abordando-avion.webp`
- ✅ `img/certificado-viaje/ilustracion-veterinaria.png`

### Pendientes — Alberto las trabaja y sube
**Home:**
- `img/home/hero.webp` — Foto hero del consultorio o equipo en acción (1920x1080)
- `img/home/og-home.jpg` — Open Graph 1200x630 para compartir en redes
- `img/home/equipo-clinica.webp` — Foto del equipo médico (opcional)

**Sobre Nosotros:**
- `img/equipo/dr-perez-castillo.webp` — Retrato del Dr. Fernando de Jesús Pérez Castillo
- `img/equipo/equipo-completo.webp` — Foto grupal del equipo (opcional)

**Servicios — una imagen por servicio (cuadrada o 16:9):**
- `img/servicios/consulta-veterinaria.webp`
- `img/servicios/vacunacion.webp`
- `img/servicios/esterilizacion.webp`
- `img/servicios/cirugia.webp`
- `img/servicios/dermatologia.webp` — idealmente examen de piel real
- `img/servicios/especies-exoticas.webp`
- `img/servicios/estetica-canina.webp`
- `img/servicios/diagnostico.webp` — equipo de rayos X o ultrasonido

**Cat-friendly:**
- `img/home/cat-friendly.webp` — Foto del área cat-friendly en uso

**Favicon:**
- `img/favicon.ico` (32x32) + `img/apple-touch-icon.png` (180x180)

> Mientras llegan, en el HTML usaré placeholders con `width`/`height` correctos para evitar CLS y comentarios indicando qué imagen va. Sustituirlas es solo cambiar el `src`.

## Pendientes (de Alberto)

- [ ] Capturas del sitio actual (opcional — para validar composición visual antes de Fase 3)
