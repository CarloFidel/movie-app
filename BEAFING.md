# BRIEFING PROJECTE MOVIES: PREFERÈNCIES CINEMATOGRÀFIQUES

El projecte **Movies** pretén ser una aplicació web per a la gestió de preferències cinematogràfiques, que permet consultar informació de pel·lícules en temps real i registrar les favorites amb puntuacions personalitzades.

---

## OBJECTIU DE LA PLATAFORMA

Desenvolupar una plataforma web dinàmica i personal on qualsevol usuari pugui explorar pel·lícules de cartellera o clàssiques, descobrir informació detallada i afegir-les a la seva llista personal de favorites, puntuacions pròpias i rankin.

## SERVEI ESPERAT

Una aplicació web d’accés privat que ofereixi:

* Cerca i consulta de pel·lícules.
* Fitxes completes per a cada pel·lícula amb la seva informació actualitzada.
* Possibilitat de marcar pel·lícules com a favorites,
* Puntuar-les i gestionar un rànquing personal.
* Sistema d’autenticació i registre d’usuari.
* Persistència de dades personalitzades.

## NECESSITATS

### Problemes a resoldre

* *Manca d’una eina personalitzada per gestionar gustos cinematogràfics de forma interactiva i visual.*
* *Dificultat per recordar quines pel·lícules ens han agradat més o volem veure.*
* *Absència d’un sistema de puntuació subjectiva que es guardi de manera persistent.*
* *No disposar d’una plataforma àgil, senzilla i segura per gestionar aquesta informació.*

### Públic objectiu

El projecte s’adreça a **cinèfils** i usuaris particulars, persones apassionades pel cinema que volen explorar pel·lícules i gestionar la seva pròpia base de dades personal de gustos i puntuacions.

1. **Interessos:**

* Descobrir noves pel·lícules de diferents gèneres, èpoques i nacionalitats.
* Conèixer detalls tècnics i artístics de cada pel·lícula (actors, directors, guió, música...).

2. **Necessitats:**

* Crear llistes personalitzades (favorites, pendents de veure, vistes...).
* Consultar on veure les pel·lícules (plataformes de streaming).
* Cercar per títol, actor, director, gènere o paraula clau.
* Accés ràpid a la fitxa completa d’una pel·lícula amb tota la informació rellevant.
* Guardar preferències.

### Requisits funcionals esperats

- Exploració de pel·lícules:
  * Implementació d’un sistema de benvinguda a l’aplicació amb opció d’accés directe a la secció d’exploració de pelis.
  * Accés a un llistat de pel·lícules obtingudes en temps real, que incloguin: títol, pòster, any i puntuació pública.
  * Opcions de cerca i filtratge (per gènere, puntuació, tendència, etc.).

- Fitxa de detall de pel·lícula:
  * Visualització completa d’una pel·lícula amb informació ampliada: sinopsi, actors, director/a, data d’estrena, tràiler, etc.

- Fitxa de detall de actor:
  * Visualització completa d’un actor amb informació ampliada: fotografia, nom, nacionalitat,
  * Accés a un llistat de pel·lícules en què actua

- Fitxa de detall de diector:
  * Visualització completa d’un director amb informació ampliada: fotografia, nom, nacionalitat,
  * Accés a un llistat de pel·lícules que ha dirigit

- Gestió presolnal d'usuari:
  * Sistema de registre i login amb correu electrònic i contrasenya.
  * Només els usuaris autenticats poden accedir a la seva àrea personal i guardar canvis.
  * Personalització de l’experiència visual de l’usuari autenticat (google-facebook...etc)

- Favorits i ranking personal:
  * Possibilitat de marcar una pel·lícula com a  *favorita* .
  * Sistema de puntuació personal (de l’1 al 10)
  * Llistat personalitzat de pel·lícules favorites.
  * Possibilitat de modificar les puntuacions o eliminar pel·lícules de la llista de favorits.

- Navegació i interfície:
  * Menú superior amb accés a les seccions: Inici, Exploració, Favorites, Perfil.

- Futures features (Opcionals)
  * Integració amb xarxes socials per compartir llistes.
  * Sistema de comentaris personals o ressenyes per a cada pel·lícula.
  * Estadístiques: pel·lícules més puntuades, gèneres preferits, etc.

### Requisits tècnics esperats

* El client no té una base de dades de pel·lícules, demana que es consulti una font open data: creiem que **TMDB** pot ser útil
* S'ha de tenir una **base de dades pròpia** que emmagatzemi els likes i rankins de les pel·lícules de cada usuari
* Ha de ser una **SPA (Single Page Application)**
* S’ha d'utilitzar **React** o **Angular** com a framework principal
* Enfocament *mobile-first* amb disseny intuïtiu
* Backend lleuger amb base de dades per guardar favorites
* Generació d’url únic per a cada pel·lícula, actor i productor
* Desplegament a servidor o plataforma

### Requisits de UX/UI esperats

El disseny ha de ser:

* Estil visual coherent, inspirat en plataformes de cinema (Netflix, TMDB, FilmAffinity…).
* Compliment de les directrius WCAG ( *Web Content Accessibility Guidelines* )
* Accessible per a persones amb discapacitats visuals i motores
* Amb respostes clares després de qualsevol acció de l’usuari
* Navegació intuïtiva i flux de passos clar per generar el pressupost
* Contingut jerarquitzat de manera clara
* Bons contrastos, etiquetes ARIA, navegació per teclat
* Flux coherent i orientat a objectius
* Sense punts de fricció innecessaris
* Consistència en els components d’interacció
* Iconografia clara i universal
