# Auditoría Search Console — Clinic Vet PDC
**Fecha:** 2026-04-28
**Periodo analizado:** 28 días (2026-03-30 a 2026-04-26)
**Periodo comparativo:** 28 días previos (2026-03-02 a 2026-03-29)
**Propiedad GSC:** `sc-domain:clinicvetpdc.com` (acceso owner ✅)
**Propiedad GA4:** ❌ **NO EXISTE** — el cliente no tiene GA4 configurado

---

## ⚠️ Advertencia de tracking

No hay propiedad GA4 bajo la cuenta "Raptor Marketer" para este cliente. Sin GA4 estamos volando a ciegas en engagement y conversiones — solo tenemos el "qué Google muestra", no el "qué hacen los visitantes". **Acción inmediata post-migración:** crear propiedad GA4 + ejecutar skill `setup-tracking-cliente` para configurar Key Events (click_whatsapp, click_phone, generate_lead).

---

## 🚨 Hallazgo Crítico #1 — El hack es MUCHO peor de lo que pensábamos

| Métrica | Total | Origen |
|---|---|---|
| **Clics totales (28d)** | **227,085** | El sitio recibe tráfico masivo... pero NO es del cliente |
| **Impresiones totales** | **973,951** | Lo mismo |
| **CTR global** | 23.3% | Anormalmente alto para un sitio veterinario local |
| **Posición media** | 4.4 | — |

**El desglose verdadero:**

| Keyword | Clics | % del total | Origen |
|---|---|---|---|
| `romabet` | 226,732 | **99.85%** | 🚨 SPAM — sitio de apuestas turco |
| `romabet giriş` | 111 | 0.05% | 🚨 SPAM |
| `roma bet` | 54 | 0.02% | 🚨 SPAM |
| `clinic vet pdc` | 26 | 0.01% | ✅ Marca cliente |
| `analisis-clinicos` (URL) | 17 | — | ✅ Legítimo |
| **Veterinaria/clínica/PdC** (todas combinadas) | **~12** | **0.005%** | ✅ Legítimo |

> **De cada 1,000 clics que recibe el dominio, 998 son apuestas turcas y solo 2 son veterinaria.** El daño reputacional ante Google es severo.

### Distribución geográfica (confirma el hack)

| País | Clics | Impresiones | Comentario |
|---|---|---|---|
| 🇹🇷 Turquía (TUR) | **224,231** | 946,618 | Casi todo el spam |
| 🇸🇾 Siria (SYR) | 2,088 | 7,548 | Spam adicional |
| 🇨🇾 Chipre (CYP) | 217 | 2,209 | Spam adicional |
| 🇺🇸 USA | 152 | 2,112 | Mezcla (algo legítimo, mucho spam) |
| 🇲🇽 **México** | **119** | 4,728 | Tráfico LEGÍTIMO real del cliente |

**226,536 clics no-México** → todo ruido. Solo **119 clics desde México** son potencialmente legítimos en 28 días — esa es la realidad del tráfico actual del cliente.

### Distribución por dispositivo

| Dispositivo | Clics | CTR |
|---|---|---|
| Mobile | 226,997 | 26.1% |
| Desktop | 68 | 0.06% |
| Tablet | 20 | 23.8% |

El spam ataca casi exclusivamente móvil (Googlebot-Mobile). El cloaking probablemente está condicionado por user-agent.

---

## 🚨 Hallazgo Crítico #2 — Arquitectura del hack: cloaking, no URLs falsas

### Las únicas URLs que GSC tiene indexadas

| URL | Clics | Impresiones | Posición | Estado |
|---|---|---|---|---|
| `https://clinicvetpdc.com/` | 227,034 | 972,541 | 4.4 | 🚨 Hack vía cloaking |
| `http://clinicvetpdc.com/` | 40 | 1,723 | 3.6 | ⚠️ Duplicado HTTP (sin redirect 301) |
| `https://clinicvetpdc.com/analisis-clinicos/` | 17 | 751 | 6.6 | ✅ Página legítima |
| `https://clinicvetpdc.com/2024/11/` | 0 | 13 | 3.1 | 🗑️ Archivo WP (eliminar) |
| `https://clinicvetpdc.com/2024/11/23/hello-world/` | 0 | 12 | 4.0 | 🗑️ Post default WP "Hello World" (eliminar — síntoma del hack) |

> ✅ **Buena noticia operativa:** **NO existen 1,000 URLs spam que limpiar.** El atacante usa **cloaking** sobre la URL raíz `/` (sirve contenido diferente a Googlebot que a usuarios reales). Esto significa que la migración a Cloudflare Pages elimina el cloaking automáticamente — porque el código PHP malicioso deja de ejecutarse al apagar el WordPress.

### Confirmación vía URL Inspection API (URL `/`)

```
verdict: PASS
coverageState: "Submitted and indexed"
crawledAs: MOBILE
googleCanonical: https://clinicvetpdc.com/
userCanonical: https://clinicvetpdc.com/

Rich Results detectados:
  - Breadcrumbs: 1 item
  - FAQ: 1 item   ← 🚨 FAQ schema FALSO inyectado por el hacker (con preguntas de apuestas)
```

**Backlinks externos (PBN spam) detectados apuntando a la home:**
- `customdoorsandframes.com.au/downloads/adforest-classified-native-ios-app/`
- `kansha.vn/san-pham/chun-tach-ke-wbt-korea/`
- `jacobverghese.info/8141f46ff16c49a6a23446005267f089-list.html`

Estos son sitios hackeados de la misma red criminal apuntando link juice al dominio. Hay que **desautorizarlos** vía Google Disavow.

### Sitemap

```
mcp__gsc__sitemaps_list → {} vacío
```

**No hay sitemap registrado.** Otra señal de WordPress mal mantenido + hack. Tras la migración, enviar `sitemap.xml` limpio.

---

## 🎯 Hallazgo Crítico #3 — Decisión sobre el H1 (esto cambia el briefing)

> Recordatorio: en el briefing inicial dejamos pendiente confirmar si el H1 actual ("Clinica Veterinaria") rankea #1 por una keyword genérica (preservar) o de marca (optimizar).

### Veredicto de GSC

| Keyword | Posición | Clics | Impresiones |
|---|---|---|---|
| `clinic vet pdc` | **1.21** | 26 | 165 |
| `pdc vet` | 1.33 | 1 | 3 |
| `playa del carmen` | 1.66 | 2 | 3 |
| `clinic vet` | 4.92 | 1 | 13 |
| `veterinaria playa del carmen` | **5.22** | 4 | 828 |
| `clinica veterinaria playa del carmen` | **2.81** | 0 | 42 |
| `veterinarias playa del carmen` | 5.40 | 2 | 162 |
| `hospital veterinario playa del carmen` | 3.72 | 1 | 29 |

**El #1 es para "clinic vet pdc" — es la keyword de marca.** El H1 genérico actual NO está protegiendo ningún ranking valioso de keyword genérica.

### Conclusión: **podemos optimizar el H1 sin riesgo.**

H1 propuesto (a confirmar en Fase 2 — copywriting):
> **"Clínica Veterinaria en Playa del Carmen — Clinic Vet PDC"**

Captura: `clinica veterinaria playa del carmen` (pos 2.81, donde ya rankeamos sin esfuerzo aun con el sitio hackeado), `veterinaria playa del carmen` (pos 5.22, oportunidad fuerte), y la marca `Clinic Vet PDC`.

---

## 🟢 Oportunidades reales de SEO (Cuadrante Q2/Q4)

> Filtramos el ruido turco y nos quedamos solo con queries legítimas en español/inglés relacionadas a veterinaria + Playa del Carmen.

### Top oportunidades (alta posición, CTR roto por el hack — Q4)

| Query | Pos | Impr | CTR | Acción |
|---|---|---|---|---|
| `clinica veterinaria playa del carmen` | **2.81** | 42 | **0%** | 🔥 Rankeamos top 3 y NADIE clica — el snippet envenenado por el hack es la causa |
| `hospital veterinario playa del carmen` | 3.72 | 29 | 3.4% | Title + meta + schema VeterinaryCare |
| `veterinarias en playa del carmen` | 3.93 | 46 | 4.3% | Casi top 3, push con contenido + schema |
| `clinivet playa del carmen` | 3.55 | 11 | 9.1% | Confusión con marca competidora — capitalizar con redirección de intención |

### Oportunidades por encima del top 10 que pueden subir (Q2)

| Query | Pos | Impr | Prioridad |
|---|---|---|---|
| `veterinaria playa del carmen` | 5.22 | **828** | 🔥🔥🔥 Mayor volumen — keyword core |
| `veterinarias playa del carmen` | 5.40 | 162 | Alta |
| `veterinaria` | 5.22 | 37 | Media |
| `veterinarian near me` | 3.18 | 38 | Alta (intent expat/inglés) |
| `clinica veterinaria near me` | 3.36 | 11 | Media |
| `vets near me` | 4.33 | 6 | Media (inglés) |

**Lectura clave:** Los CTRs son CERO o muy bajos en posiciones top 3-5 porque **el snippet de Google tiene contenido de "romabet"** debido al cloaking. En el momento que el sitio se sirva limpio desde Cloudflare Pages y Google re-crawlee, esos rankings deberían convertirse en clics reales casi de inmediato.

### Long-tail informativo (futuro blog Fase 2)

Queries con 0 clics pero impresiones — confirma intent del mercado:
- `acupuntura para perros`, `acupuntura perros` (1 imp cada uno)
- `cistitis en perros`, `a los perros les da cistitis` (1 imp)
- `analisis de sangre perros precio`
- `análisis clínicos para mascotas`
- `agroveterinaria playa del carmen`

Estas alimentan futuras páginas de servicios y artículos.

---

## 📋 Plan de Acción Priorizado

| # | Acción | Cómo | Impacto | Esfuerzo |
|---|---|---|---|---|
| **1** | **Desconectar WordPress** apagando hosting una vez migrado | DNS → Cloudflare Pages | 🔥🔥🔥 | 10 min |
| **2** | **Apuntar dominio a Cloudflare Pages** (servir HTML limpio) | Cambiar nameservers en Banahosting + zona CF | 🔥🔥🔥 | 30 min |
| **3** | **Servir headers de seguridad** en `_headers` para CF Pages | CSP, HSTS, X-Frame-Options | 🔥🔥 | 15 min |
| **4** | **Sitemap.xml limpio** con las 14 URLs reales y enviarlo vía GSC | Skill `auditoria-seo-tecnica` | 🔥🔥 | 10 min |
| **5** | **Solicitar re-crawl** de la home vía `mcp__gsc__indexing_publish URL_UPDATED` | Indexing API | 🔥🔥 | 1 min |
| **6** | **Solicitar remoción temporal urgente** vía herramienta Removals en GSC web (no API) para `https://clinicvetpdc.com/` mientras Google re-procesa el contenido limpio | search.google.com/search-console/removals | 🔥🔥 | 5 min |
| **7** | **Disavow de backlinks PBN spam** | search.google.com/search-console/disavow-links | 🔥 | 10 min |
| **8** | **Redirigir HTTP → HTTPS** (los 40 clics en HTTP indican falta de redirect) | `_redirects` en CF Pages | 🔥 | 1 min |
| **9** | **410 Gone** para `/2024/11/` y `/2024/11/23/hello-world/` (paths WordPress muertos) | `_redirects` con código 410 | 🔥 | 2 min |
| **10** | **Crear FAQ schema legítimo** en home y servicios (reemplaza el FAQ falso de "romabet") | Skill `auditoria-seo-tecnica` | 🔥🔥 | 30 min |
| **11** | **Crear propiedad GA4** + instalar tag en Cloudflare Pages | Skill `setup-tracking-cliente` | 🔥🔥 | 10 min |
| **12** | **Reportar el hack** (opcional) en search.google.com/search-console/security-issues | Manual, da contexto a Google | 🔥 | 5 min |

### URLs concretas para `_redirects` post-migración

```
# Limpiar paths legacy del WordPress hackeado
/2024/* 410
/2024/11/* 410
/2024/11/23/hello-world/ 410
/wp-admin/* 410
/wp-content/* 410
/wp-includes/* 410
/wp-login.php 410
/xmlrpc.php 410
/?p=* 410
/?page_id=* 410

# Forzar HTTPS y eliminar trailing slash inconsistente — lo maneja Cloudflare Pages por defecto
```

### Backlinks a desautorizar (archivo disavow.txt para subir a GSC)

```
# Disavow file - Clinic Vet PDC - 2026-04-28
# Hack-related PBN backlinks
domain:customdoorsandframes.com.au
domain:kansha.vn
domain:jacobverghese.info
```

> Nota: Disavow se hace manualmente en https://search.google.com/search-console/disavow-links — no hay API.

---

## 📊 Update al Briefing Estratégico

Con esta auditoría confirmada, el briefing inicial ([briefing-veterinaria-playa-del-carmen.md](briefing-veterinaria-playa-del-carmen.md)) cambia en estos puntos:

1. **H1 — desbloquear optimización:** la restricción "preservar H1 actual" YA NO APLICA. El H1 puede actualizarse a algo optimizado para `veterinaria playa del carmen` (la keyword con 828 impresiones). Propuesta: `Clínica Veterinaria en Playa del Carmen — Clinic Vet PDC`.
2. **Confirmamos páginas legítimas en GSC:**
   - `/` (Home)
   - `/analisis-clinicos/`
   - El resto se reconstruye desde cero según la arquitectura silo del briefing.
3. **Quitamos del scope inicial el plan de "remover cientos de URLs spam"** — no existen. El cloaking se elimina solo al apagar el WP.
4. **Añadimos al scope:**
   - Crear propiedad GA4 + tracking (skill `setup-tracking-cliente`).
   - Disavow de PBN spam.
   - FAQ schema legítimo prioritario en Home + servicios para reemplazar el FAQ falso que Google detectó.
   - Solicitud de remoción temporal en GSC mientras Google re-procesa.

---

## 🔄 Cadencia de seguimiento

| Cuándo | Qué revisar |
|---|---|
| **Día 1 post-migración** | Verificar que `/` sirve HTML limpio + URL Inspection muestra `verdict: PASS` con FAQ legítimo |
| **Día 3** | Re-crawl de las URLs principales (Indexing API) y revisar GSC > Cobertura |
| **Día 7** | Caída esperada de impresiones de "romabet" ya visible en GSC |
| **Día 14** | Recuperación de CTR en queries legítimas (`clinica veterinaria playa del carmen`) |
| **Día 30** | Re-auditoría completa para validar rebote de keywords legítimas y caída total del spam |

---

## 📂 Archivos relacionados

- [briefing-veterinaria-playa-del-carmen.md](briefing-veterinaria-playa-del-carmen.md) — briefing estratégico (Fase 1)
- `auditoria-gsc-2026-04-28.md` — este documento
