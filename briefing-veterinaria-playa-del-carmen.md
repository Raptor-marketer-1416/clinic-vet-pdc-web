# Briefing Estratégico: Veterinaria en Playa del Carmen
**Cliente:** Clinic Vet PDC
**Sitio actual:** https://clinicvetpdc.com (WordPress hackeado — migración urgente)
**Fecha:** 2026-04-28
**Analista:** Raptor Marketer

---

## 0. Contexto del Proyecto

- Cliente con **+1.5 años** trabajando con la agencia.
- Sitio WordPress comprometido con inyección de páginas spam (casino/apuestas) — Google está indexando URLs basura inexistentes y dañando autoridad del dominio.
- Migración a HTML estático + Cloudflare Pages para eliminar el vector de ataque (PHP/DB/admin).
- **Solo 3 páginas legítimas** a rescatar (Alberto definirá cuáles). El resto es inyección y se sirve **410 Gone** vía Cloudflare.
- **Restricción crítica:** Home actual posiciona #1 (probablemente para keyword de marca o long-tail específico — validar con GSC). **Preservar H1 y copy core de Home.**

---

## 1. Resumen de Oportunidad

### Cómo vamos a ganar

El mercado veterinario de Playa del Carmen es competido (12+ jugadores con presencia digital), pero **fragmentado y técnicamente débil**. Ningún top-3 implementa Schema completo, FAQ ni arquitectura silo SEO. Ganamos con una combinación de:

1. **Capital ya ganado:** Clinic Vet PDC tiene **+20 años** de antigüedad (vs. 10–12 promedio de la competencia) y trayectoria de marca consolidada — la migración limpia el dominio sin perder autoridad histórica.
2. **Diferenciador subexplotado #1 — Bilingüe:** Playa del Carmen tiene población expat masiva. Solo "El Especialista" compite explícitamente en bilingual. Aquí hay un **silo en inglés** o sección dedicada que casi nadie está atacando bien.
3. **Diferenciador subexplotado #2 — Dermatología veterinaria:** El sitio actual ya menciona especialidad. Ningún competidor de Playa la posiciona como pilar — keyword nicho de muy poca competencia y alto valor por consulta.
4. **Diferenciador #3 — Cat-friendly:** El sitio actual dice "próximamente". Si activamos esto en el lanzamiento, capturamos un segmento creciente (gateros que evitan clínicas convencionales por estrés).
5. **Ventaja técnica abrumadora:** Migrar a HTML estático con Schema completo, FAQ, Core Web Vitals 100, sitemap correcto y silos = supera a TODOS los competidores en SEO técnico de un solo golpe.

### Debilidades del Top 3 (Map Pack)

- **Kronos Veterinaria (4.9, 1234 reseñas, 24h)** — Líder absoluto. Debilidad: web escasa, sin schema, sin contenido SEO real. Su fuerte es GBP, no la web. NO competimos en 24h (saturado), competimos en autoridad médica + bilingüe.
- **Castillo Canino (4.4, 681 reseñas)** — Más volumen de reseñas. Debilidad: enfoque en pensión/grooming, no en medicina especializada. Diferente target.
- **Hospipet (especialistas)** — Web pobre, sin menú estructurado, sin H2s claros, sin FAQ, sin schema, sin botones flotantes. CTA principal es solo número de teléfono. Es el competidor médico más comparable y su sitio es DERROTABLE solo con buen SEO técnico.
- **Sanimal (4.6, 473 reseñas)** — Sitio web no responde (.com caído al momento del análisis). Pierde tráfico orgánico por completo a directorios.
- **Veterinaria Rufo (4.7, 129 reseñas)** — **Vecino directo geográfico** (Av. 30 entre 24 y 26 vs. nosotros en Calle 30 entre 32 y 34, ambos en Gonzalo Guerrero). Misma colonia, casi misma calle. Web inexistente, solo presencia social. Ganamos por tener web real.

---

## 2. Mapa Competitivo Completo (Map Pack)

| Competidor | Zona | Rating | Reseñas | 24h | Web propia | Schema | FAQ | Amenaza |
|---|---|---|---|---|---|---|---|---|
| Kronos | Misión del Carmen | 4.9 | 1234+ | Sí | Sí (débil) | No | No | **Alta** |
| Castillo Canino | Ejido La Cruz | 4.4 | 681+ | No | Limitada | No | No | Baja (pensión) |
| Coco's Bienestar | El Pedregal | 4.7 | 846+ | No | Sí (ONG) | Parcial | No | Baja (esterilización) |
| Mundo Animal Toscana | Toscana | 4.3 | 507+ | No | No | — | — | Media |
| Sanimal | Playacar | 4.6 | 473+ | No | Caída | — | — | Baja |
| Hospipet | Santa Fé | — | — | No | Sí (pobre) | No | No | **Media-Alta** |
| Playa Pet | Zazil-ha | 4.3 | 237+ | No | Limitada | — | — | Media |
| Vitanimal | Ejidal | 4.5 | 209+ | No | — | — | — | Media |
| Excola | Ejidal | 4.5 | 162+ | No | — | — | — | Media |
| Veterinaria Rufo | **Gonzalo Guerrero (vecino)** | 4.7 | 129+ | No | Solo Facebook | — | — | **Alta (proximidad)** |
| Clinivet | Las Palmas | 4.7 | 135+ | No | — | — | — | Baja |
| MIIS & PEEK | Las Palmas | — | — | Sí | — | — | — | Baja |
| Vikerpets | Centro | 4.3 | 56+ | No | — | — | — | Baja |
| Daktary | — | — | — | Sí | Solo Facebook | — | — | Baja |

---

## 3. Blueprint Estructural — Home

### H1 actual (a preservar — Alberto confirma que rankea #1)
> "Clinica Veterinaria"

> ⚠️ **Nota:** El H1 literal es genérico, pero si efectivamente está #1 para alguna búsqueda objetivo, el riesgo de cambiarlo supera la ganancia. Antes de tocar el H1 hay que **validar contra GSC qué keyword exacta lo posiciona** y solo modificar si:
> - Está #1 para una keyword sin volumen (entonces sí podemos optimizar)
> - Está #1 para "Clinic Vet PDC" como marca (entonces sí podemos optimizar la subcadena geográfica)

**Propuesta condicionada a GSC:** Si la keyword de #1 NO es de marca, mantener literal. Si es de marca, mejorar a:
> "Clínica Veterinaria en Playa del Carmen — Clinic Vet PDC"

### H2s sugeridos para Home (estructura silo + autoridad)

1. **Atención veterinaria con +20 años de experiencia en Playa del Carmen** (autoridad)
2. **Servicios veterinarios** (hub link a /servicios/ con tarjetas a cada subservicio)
3. **¿Por qué elegir Clinic Vet PDC?** (bilingüe, dermatología, cat-friendly, equipo de diagnóstico completo)
4. **Bilingual veterinary care — English speaking team** (gancho expat, 2-3 párrafos)
5. **Lo que dicen nuestros clientes** (testimonios — preservar los actuales)
6. **Horarios y ubicación** (Calle 30 Nte, Gonzalo Guerrero — con mapa embebido)
7. **Preguntas frecuentes** (FAQ con Schema FAQPage — diferenciador técnico)
8. **Contacto rápido** (CTA WhatsApp + llamada)

---

## 4. Mapa Semántico — Entidades Obligatorias

### Términos que DEBEN aparecer (mencionados por toda la competencia top)
- "Clínica veterinaria" / "veterinario"
- "Playa del Carmen" / "Quintana Roo"
- "Perros y gatos"
- "Vacunación" + "desparasitación"
- "Cirugía"
- "Esterilización"
- "Estética canina" / "grooming"
- "Consulta veterinaria"
- "Urgencias" (mencionar aunque no sea 24h)
- "Análisis clínicos" / "rayos X" / "ultrasonido"

### Diferenciadores nuestros (entidades de oportunidad)
- "Veterinaria bilingüe" / "English speaking veterinarian"
- "Dermatología veterinaria"
- "Especies exóticas"
- "+20 años de experiencia"
- "Cat-friendly" / "consultorio amigable para gatos"
- "Electrocardiograma veterinario" (poco mencionado)
- "Medicina preventiva"

### Keywords objetivo (priorizar por volumen e intent)

**Keyword principal (Home):**
- `veterinaria Playa del Carmen` (alta competencia, alto volumen, transaccional)
- `clínica veterinaria Playa del Carmen` (variante directa)

**Keywords secundarias (silo de servicios):**
- `vacunación perros Playa del Carmen`
- `vacunación gatos Playa del Carmen`
- `esterilización perros Playa del Carmen` (cuidado: campañas gratis dominan — diferenciar con "esterilización segura con anestesia inhalada" o similar)
- `cirugía veterinaria Playa del Carmen`
- `dermatología veterinaria Playa del Carmen` ← oro
- `veterinario especies exóticas Playa del Carmen` ← oro
- `estética canina Playa del Carmen`
- `rayos X veterinario Playa del Carmen`
- `ultrasonido veterinario Playa del Carmen`

**Keywords en inglés (silo bilingüe):**
- `veterinarian Playa del Carmen`
- `english speaking veterinarian Playa del Carmen`
- `bilingual vet Playa del Carmen`
- `pet clinic Playa del Carmen`

**Keywords del pilar Certificado de Viaje (ES):**
- `certificado de viaje para mascotas Playa del Carmen`
- `certificado para viajar con mi perro Playa del Carmen`
- `certificado zoosanitario Playa del Carmen`
- `viajar con perro a Estados Unidos desde México`
- `certificado GBG screwworm perros México` (regulación dic 2024)
- `certificado de exportación mascotas SENASICA Quintana Roo`
- `certificado CDC perros importación México`

**Keywords del pilar Certificado de Viaje (EN — alto valor turista/expat):**
- `pet travel certificate Playa del Carmen`
- `USDA accredited veterinarian Playa del Carmen`
- `pet health certificate Mexico to USA`
- `dog travel certificate Playa del Carmen`
- `screwworm certificate dogs Mexico`
- `CDC dog import form Mexico`

**Long-tail informativo (FAQ + blog futuro):**
- `cuánto cuesta vacunar a un perro Playa del Carmen`
- `vacunas obligatorias para perros en México`
- `cuándo esterilizar a mi gato`
- `qué hacer si mi perro tiene urticaria` (gancho dermatología)

---

## 5. Arquitectura SILO — Estructura Propuesta

> **Update 2026-04-28:** Tras inspeccionar `/certificado-de-viaje/`, lo promovemos a **página pilar dedicada en el menú principal**, no a subservicio. Razones: (a) tiene su propio universo semántico independiente del silo médico (USDA, CDC, SENASICA, GBG, screwworm, pet travel), (b) ningún competidor de Playa del Carmen tiene página dedicada, (c) timing ideal por el cambio regulatorio de dic 2024 que exige certificado GBG, (d) keyword en EN super valiosa para turistas/expats, (e) el cliente ya tiene copy completo + 7 imágenes propias.

```
/                                                          ← Home (optimizar H1)
/certificado-de-viaje-mascotas-playa-del-carmen/           ← ★★★ PILAR DEDICADO
/servicios/                                                ← Hub de servicios médicos
/servicios/consulta-veterinaria-playa-del-carmen/
/servicios/vacunacion-perros-gatos-playa-del-carmen/
/servicios/esterilizacion-playa-del-carmen/
/servicios/cirugia-veterinaria-playa-del-carmen/
/servicios/dermatologia-veterinaria-playa-del-carmen/      ← ★ diferenciador
/servicios/especies-exoticas-playa-del-carmen/             ← ★ nicho
/servicios/estetica-canina-playa-del-carmen/
/servicios/analisis-clinicos-rayos-x-ultrasonido-playa-del-carmen/   ← incluye /analisis-clinicos/ legacy
/vet-clinic-playa-del-carmen/                  ← ★ versión EN para expats
/sobre-nosotros/
/contacto/
/aviso-de-privacidad/
/terminos-y-condiciones/
```

**Total: 15 páginas** (Home + 1 pilar viaje + 8 servicios + 1 bilingüe + 1 sobre + 1 contacto + 2 legales).

### Menú principal propuesto

```
Inicio  |  Servicios ▾  |  Certificado de Viaje  |  Sobre Nosotros  |  Contacto  |  English
```

`Certificado de Viaje` aparece como categoría top-level (no escondido en submenu) — refuerza el silo y le da peso de autoridad temática.

### Plan de cluster expansion para certificado (Fase 2 — post-lanzamiento)

Una vez la página pilar tenga autoridad, expandir con cluster de 4 hijos según demanda real validada en GSC:

```
/certificado-de-viaje-mascotas-playa-del-carmen/
  ├── /viajar-con-perro-a-estados-unidos-desde-mexico/      (cluster intent USA)
  ├── /pet-travel-certificate-playa-del-carmen/             (cluster EN — expats)
  ├── /certificado-zoosanitario-senasica-quintana-roo/      (cluster intent local + nacional)
  └── /certificado-gbg-screwworm-perros-mexico/             (cluster regulación nueva 2024)
```

### Justificación del número
- 8 servicios = mapeamos los 8 servicios médicos reales que ya ofrece el cliente.
- 1 pilar de certificado de viaje = nicho diferenciador sin competencia local.
- 1 página bilingüe en EN = captura intent de expats sin duplicar todo el sitio.
- Sin blog en lanzamiento (puede agregarse en Fase 2 una vez recuperada autoridad post-hack).

### Estrategia de Interlinking
- **Hijos → Padre:** cada `/servicios/[x]/` enlaza al hub `/servicios/` y a Home en breadcrumb.
- **Hermanos:** dentro de cada servicio, bloque "Otros servicios relacionados" con 3 hermanos relevantes (ej: vacunación → desparasitación, esterilización, medicina preventiva).
- **Home → silos:** tarjetas en sección "Servicios" enlazan a los 8 servicios.
- **Bilingüe ↔ Home:** enlaces recíprocos en hreflang (`hreflang="es-MX"` y `hreflang="en"`).
- **Evitar fugas:** ningún servicio enlaza directamente a contacto sin pasar por su CTA propio.

---

## 6. Plan Técnico

### Schema requerido (cada página)
- **Home:** `LocalBusiness` (subtype `VeterinaryCare`) + `BreadcrumbList`
- **Cada servicio:** `Service` + `BreadcrumbList` + `FAQPage` (3-5 preguntas por servicio)
- **Contacto:** `LocalBusiness` reforzado con `geo` y `openingHoursSpecification`
- **Bilingüe:** `LocalBusiness` con `availableLanguage: ["en", "es"]`

### Core Web Vitals — targets
- LCP < 2.0s (imágenes WebP + lazy loading + preload del hero)
- CLS < 0.05 (dimensiones explícitas en `<img>`, sin fonts FOUC)
- INP < 200ms (JS mínimo vanilla, sin frameworks)
- 100/100 en Accessibility (skill `accesibilidad-pagespeed`)

### Migración / Limpieza del hack
- **Sirve `410 Gone`** vía `_redirects` para todos los paths spam que GSC reporte.
- **Sitemap nuevo limpio** solo con las 14 URLs reales.
- **Solicitud de remoción urgente** en GSC para los paths spam (skill `auditoria-search-console`).
- **Headers de seguridad** en `_headers` (CSP, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security).

---

## 7. Estrategia Visual

- **Tipo de imágenes:** Reales del consultorio, equipo médico (rayos X, ultrasonido) y pacientes (con permiso). Evitar stock genérico de "veterinario abrazando perro" — la competencia abusa de eso.
- **Video:** Recomendado uno corto (30-45s) en Home — recorrido por las instalaciones y equipo. Ningún competidor lo tiene.
- **Diferenciación visual:** Paleta limpia y médica (no infantil ni excesivamente "pet-cute"). Profesional pero cálida — refleja la +20 años + bilingüe + dermatología.
- **Iconografía:** Custom o Lucide/Heroicons monocromáticos (no emojis ni clipart).

---

## 8. Map Pack — Oportunidades GBP

### Categoría principal recomendada
- **Veterinarian** (Veterinario) — categoría primaria estándar.

### Categorías secundarias
- Animal hospital
- Pet groomer (cubre estética canina)
- Pet boarding service (si tiene hospitalización)
- Emergency veterinarian service (si hace urgencias en horario extendido)

### Keywords a impulsar en reseñas (templates para clientes)
Pedir a clientes satisfechos que mencionen explícitamente:
- "veterinario bilingüe" / "English speaking vet"
- "dermatología" (si fue motivo de consulta)
- "+20 años de experiencia"
- "Gonzalo Guerrero" / "Calle 30"
- Nombres específicos de procedimientos (vacunación, ultrasonido, etc.)

### Ratio reseñas vs. competencia
- Kronos: 1234 reseñas → benchmark.
- Castillo Canino: 681
- Coco's: 846
- **Clinic Vet PDC objetivo año 1:** llegar a 200+ con calidad alta (5★ con texto largo) — ver skill `ecosistema-gbp`.

---

## 9. Bloqueadores / Datos pendientes (de Alberto)

- [ ] Confirmar las **3 URLs legítimas** del sitio actual a rescatar
- [ ] Acceso a GSC del dominio (para auditar URLs spam y keyword real de #1)
- [ ] Property ID de GA4 (cruce de datos)
- [ ] Logo del cliente
- [ ] Color de marca (¿libre?)
- [ ] Email de contacto
- [ ] Link de Google Business Profile
- [ ] Coordenadas exactas (lat/lon) para mapa y schema
- [ ] Confirmación cat-friendly (¿ya está activo o sigue "próximamente"?)

---

## 10. Próximos pasos

1. **Auditoría GSC** (skill `auditoria-search-console`) — identifica URLs spam, keyword real de #1, y rendimiento orgánico real.
2. **Validación de H1 de Home** post-GSC.
3. **Fase 2 — Copy** (skill `copywriting-seo-local`) usando este briefing como input.
4. **Fase 3 — Diseño** (skill `diseño-web-premium`).
5. **Fase 4 — Construcción** + Fase 5 — Optimización.
6. **Plan de remoción de URLs spam en GSC** ejecutado en paralelo a la construcción para acelerar la limpieza del dominio.
