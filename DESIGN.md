# Ficha técnica de referencia — A Cozy Kitchen

## Alcance y evidencia

- **Referencia:** https://www.acozykitchen.com/ (home).
- **Captura fresca:** 5 de noviembre de 2026; Firecrawl, sin caché (`maxAge: 0`), escritorio.
- **Evidencia primaria:** HTML, branding y estilos computados desde un navegador alojado de Firecrawl. Captura de referencia: `scrapeId 01a1ad63-027c-748b-8545-dc455ffdc2e7`.
- **Restricción respetada:** se excluye el análisis de color de la web de referencia. Esta ficha tampoco propone color alguno.
- **Precisión:** las medidas de esta ficha son valores observados en la sesión desktop de Firecrawl. No se han inferido estados hover ni comportamiento móvil.
- **Captura local:** Firecrawl generó una captura completa, pero este entorno no pudo descargarla desde su almacenamiento por restricciones de red. Esto no afecta las medidas de DOM/CSS verificadas abajo; sí impide una inspección manual píxel a píxel de esa imagen local.

## 1. Sistema tipográfico

### Familias y principio editorial

El contraste central del sistema es deliberado: **serif editorial solo para grandes titulares** y **sans-serif de sistema para todo el contenido utilitario y de lectura**.

| Rol | Familia observada | Tamaño / interlineado | Peso y casing |
| --- | --- | --- | --- |
| H1 de página | `Noto Serif Display, sans-serif` | 40px / 44px | 500; sin transformación |
| H2 de sección | `Noto Serif Display, sans-serif` | 32px / 38.4px | 500; sin transformación |
| Subtítulo editorial interno | `Noto Serif Display, sans-serif` | 30px / 36px | 500; sin transformación |
| Título de receta (H3) | pila sans del sistema (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, Roboto…) | 20px / 24px | 700; `lowercase` |
| Categoría de receta | pila sans del sistema | 12px / 19.2px | 400; mayúsculas, tracking 0.6px |
| Navegación / CTA outline | pila sans del sistema | 14px / 16.8px | 400; mayúsculas, tracking 0.7px |
| Párrafo editorial | pila sans del sistema | 20px / 32px | 400; normal |
| Pie de página | pila sans del sistema | 14px / 22.4px | 400; normal |

### Reglas de composición tipográfica

- El H1 se reserva para una promesa de marca breve; no se usa como bloque descriptivo largo.
- Los H2 dan ritmo a las colecciones y conservan la voz de revista con serif de alto contraste.
- Los nombres de recetas abandonan el serif y pasan a sans bold en minúsculas: el gesto hace que las tarjetas se sientan cercanas y contemporáneas, no formales.
- Las categorías, la navegación y las acciones emplean versales espaciadas: son información de orientación, no el foco de lectura.
- La prosa de módulos editoriales usa 20px/32px; el interlineado amplio sostiene el tono sereno y acogedor.

## 2. Layout, contenedor y espaciado

### Contenedor y cabecera

- El ancho máximo de las colecciones principales es **1200px**. En la sesión desktop inspeccionada, las secciones se centraban y no llevaban padding lateral propio.
- La cabecera mide **99px** de alto y usa una composición grid de **400px + 800px**: marca a la izquierda y navegación a la derecha.
- La banda superior (“top hat”) mide **44px** de alto. Aloja una invitación a newsletter y accesos sociales; funciona como preámbulo editorial, no como barra utilitaria densa.
- Secciones de recetas: **40px de margen superior y 40px de margen inferior**. El sistema crea aire mediante márgenes y no con tarjetas contenedoras.

### Grillas verificadas

| Variante | Columnas desktop | Ancho de columna | Gap | Uso observado |
| --- | ---: | ---: | ---: | --- |
| `layout-4up-grid` / `layout-4up-full` | 4 | 276px | 32px horizontal y vertical | Novedades y colecciones principales |
| `layout-6up-grid` / `layout-6up-featured` | 6 | ~186.67px | 16px horizontal, 32px vertical | Categorías y módulos de descubrimiento compacto |
| `layout-3up-featured` | 3 | ~378.67px | 32px | Destacados de mayor presencia |

**Regla de implementación extraída:** el ancho de lectura no es uniforme. Las colecciones con fotografías usan el máximo de 1200px; el texto narrativo se coloca dentro de módulos más contenidos. Repetir siempre una grilla de cuatro rompería el ritmo de la referencia.

### Arquitectura de información de la home

1. Banda de newsletter/social + cabecera con logo, navegación, favoritos y búsqueda.
2. H1/manifesto breve.
3. Colección de novedades en 4 columnas.
4. Módulo editorial de libro: portada, copy y grupos de CTAs de compra.
5. Colecciones estacionales y de ocasión, alternando 4, 6 y 3 columnas.
6. Newsletter intercalada entre contenido; no se relega al footer.
7. Categorías visuales, presentación de autora y listas de descubrimiento de menor densidad.
8. Prueba social, footer y una promoción persistente del libro.

La home se comporta como una revista culinaria: secuencia de colecciones + pausas narrativas, no como catálogo continuo.

## 3. Imágenes y tarjetas

### Tarjeta de receta principal

- Imagen portrait de **276 × 368px**, equivalente a **3:4** (`aspect-ratio: 0.75 / 1`).
- `object-fit: cover`; los platos se recortan con consistencia y llevan el peso de descubrimiento.
- **Sin radio, sin sombra.** Las imágenes son rectangulares y limpias.
- Orden fijo: imagen → categoría pequeña en mayúsculas → H3 de receta en sans bold/minúsculas.
- El grid ofrece separación de 32px, de modo que cada tarjeta respira sin necesitar borde ni fondo propio.

### Categorías visuales y featured

- Las categorías compactas usan la variante de seis columnas y miniaturas cuadradas disponibles como assets de 300 × 300px.
- Los módulos featured reducen la cantidad de columnas y escalan el impacto de la imagen. Es una jerarquía de composición, no una tarjeta visual distinta.
- Las imágenes de receta publicadas se sirven comúnmente en 600 × 800px; el formato retrato es, por tanto, un patrón de contenido y no una casualidad de la grilla.

## 4. Componentes y detalles de UI

### Botones y enlaces

- CTA predominante: enlace/botón outline, `inline-flex`, con **borde de 1px**, **padding 13px vertical / 15px horizontal**, radio **0px** y sin sombra.
- Tipografía del CTA: sans 14px, mayúsculas y letter-spacing de 0.7px.
- Acciones cortas y consistentes: explorar colección, suscribirse, comprar o saber más. Cada módulo plantea una acción primaria clara.
- Las acciones de compra del libro se agrupan y centran; no se convierten en una sola CTA dominante porque hay múltiples vendedores.

### Inputs, búsqueda y controles

- Inputs y botones: **radio 0px** y **sin box-shadow**.
- Búsqueda, favoritos y menú se resuelven con iconos SVG simples y etiquetas accesibles; no hay controles pesados ni estilo de aplicación de dashboard.
- El newsletter pide solo nombre y email, con una acción de envío directa.

### Bloques editoriales

- **Libro:** composición horizontal con portada y contenido; combina un heading serif de 30px con prosa sans de 20px/32px y CTAs outline.
- **Autora:** imagen, titular serif, breve texto de bienvenida y CTA; transforma la navegación en relación personal.
- **Prueba social:** logotipos de medios en franja discreta, subordinada a las recetas.

## 5. Sensación visual extraída

- **Editorial, no corporativa:** serif elegante solo en momentos de jerarquía; el resto es una sans funcional y silenciosa.
- **Cálida y cercana:** los títulos de receta en minúscula, la prosa relajada y la presencia de autora hacen que el sitio se sienta personal.
- **Limpia sin volverse fría:** ausencia de sombras, esquinas redondeadas y paneles superpuestos; el interés viene de las fotos, del aire y de la escala tipográfica.
- **Abundante pero ordenada:** la alternancia de 4/6/3 columnas y los módulos narrativos evita una página monótona pese al volumen de contenido.

## 6. Límites de fidelidad y siguiente fase

- No se evaluaron color, hover, animaciones ni responsive móvil en esta fase.
- No se generó HTML, CSS, componentes ni maqueta.
- La paleta proporcionada por el usuario (`#3B3C40`, `#032340`, `#BF8845`, `#8C310F`, `#F2F2F2`) queda registrada para la futura dirección visual, pero **no se aplicó** en esta ficha.
- Antes de desarrollo, queda pendiente recibir la descripción, público y objetivos del nuevo emprendimiento, además de la confirmación final de esa paleta.
