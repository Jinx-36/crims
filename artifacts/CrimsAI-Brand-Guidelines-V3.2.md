# CrimsAI — Brand Guidelines V3.2
### Identité visuelle — Édition Light Theme
Version 3.2 · Met à jour V3.1 (nouvelle police display : Gloock)

---

## 0. À propos de ce document

Ce guide définit **l'identité visuelle** de CrimsAI (logo, couleurs, typographie, grille, iconographie, photographie, éléments graphiques). Il constitue le **socle de référence** pour tout futur support créé pour la marque — réseaux sociaux, site web, présentations, print — et est pensé pour être exploité directement par des agents IA en plus des designers humains.

L'identité verbale (ton, voix, messaging) n'est **pas** couverte par ce document.

Les standards de composants d'interface (boutons, formulaires, états, navigation) seront détaillés dans un **Design System** séparé, à venir. Ce guide pose néanmoins les fondations (couleurs, typo, grille, ombres, rayons) sur lesquelles ce Design System s'appuiera.

**Changements V3.1 → V3.2 :**
- Police display remplacée : ~~Playfair Display~~ → **Gloock** (Google Fonts, libre de droits)
- Échelle typographique retravaillée pour les proportions de Gloock (poids unique, empattements très contrastés)
- Le rôle "accroche italique" passe de Playfair Display Italic à **Montserrat Italic**, Gloock n'existant qu'en un seul style droit

**Changements V3 → V3.1 :**
- Police display remplacée : ~~Black Mango~~ → Playfair Display (Google Fonts, libre de droits, plus de restriction de licence commerciale)
- Échelle typographique retravaillée pour les proportions de Playfair Display
- Ajout de la **règle de couleur 60/30/10**, appliquée par section/page, avec presets approuvés

---

## 1. Territoire de marque

Le light theme est le mode principal et unique de la marque CrimsAI (réseaux sociaux, site, présentations). Il n'existe plus de mode dark officiel.

**Attributs visuels de la marque :**

| Attribut | Ce que ça signifie visuellement |
|---|---|
| **Éditorial** | Mise en page inspirée du print haut de gamme — grands titres display, colonnes aérées, respiration généreuse |
| **Chaleureux** | Fond ivoire plutôt que blanc pur ou noir ; tons chauds en photographie |
| **Précis** | Grille stricte, alignement rigoureux, hiérarchie typographique nette |
| **Premium sans être froid** | Le crimson est utilisé comme accent de conviction, jamais comme fond dominant par défaut |
| **Organique** | Le motif de la fée/libellule du logo (courbes, ailes, étincelle) infuse les éléments graphiques secondaires |

---

## 2. Logo

*(Inchangé depuis V3)*

### 2.1 Système de logo

Le logo CrimsAI est une marque combinée : un monogramme (silhouette ailée façon fée/libellule, surmontée d'une étincelle) + le logotype "CrimsAI" en typographie serif display.

| Version | Fichier | Usage |
|---|---|---|
| **BM1 — Primaire** | `logo-crims-bm1.png` | Version par défaut sur tout fond clair (`#F5F0EE`, blanc, beige). C'est **le logo à utiliser en priorité** sur le site, les réseaux sociaux et tout support. |
| **Black — Secondaire** | `logo-crims-black.png` | Réservée aux fonds sombres/noirs (ex. footer de site, section contrastée, vidéo). Usage exceptionnel. |
| **Rev (blanc) — Inverse** | `logo-crims-rev.png` | Réservée aux fonds crimson saturés ou aux photos sombres où le contraste l'exige. Jamais sur fond clair. |

**Règle simple : sur fond clair → toujours BM1.**

### 2.2 Zone de protection

Zone de protection minimale équivalente à **la hauteur de l'étincelle du monogramme** tout autour du logo. Aucun élément ne doit y entrer.

### 2.3 Taille minimale

- **Digital :** 32px de hauteur totale (silhouette + logotype)
- **Favicon / avatar :** monogramme seul, 16px minimum
- **Print :** 15mm de hauteur totale

### 2.4 Usage du monogramme seul

Utilisable isolément comme favicon, avatar, ou motif décoratif — jamais comme signature officielle remplaçant le logo complet sur un document ou une proposition commerciale.

### 2.5 Interdictions

- Ne jamais recolorer le logo en dehors des trois versions officielles
- Ne jamais étirer, incliner ou déformer les proportions
- Ne jamais placer BM1 (crimson) sur un fond de couleur proche du crimson
- Ne jamais ajouter d'ombre portée, de contour ou d'effet au logo
- Ne jamais recomposer monogramme et logotype avec un espacement différent de l'original
- Ne jamais placer le logo directement sur une photo sans zone de contraste garantie

---

## 3. Palette chromatique & règle 60/30/10

### 3.1 Couleurs de marque (core)

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| 🟥 | **Crimson** (primaire) | `#8B1E1E` | Logo, titres d'accent, CTA, liens, éléments de conviction |
| ⬜ | **Ivoire** (fond primaire) | `#F5F0EE` | Fond principal de tous les supports |

### 3.2 Rampe crimson (dérivée)

| Nom | Hex | Usage |
|---|---|---|
| Crimson Deep | `#511010` | Texte sur fond crimson, état hover/pressed, contrastes forts |
| Crimson (primaire) | `#8B1E1E` | Couleur de marque principale — accent 10% par défaut |
| Crimson Soft | `#C74D4D` | Accent secondaire, états actifs légers, illustrations |
| Crimson Tint | `#F1DCDC` | Fonds de badge, surlignage doux, zones d'alerte légère |

### 3.3 Neutres chauds (dérivée)

| Nom | Hex | Usage |
|---|---|---|
| Ivoire (fond primaire) | `#F5F0EE` | Fond principal |
| Blanc chaud | `#FFFFFF` | Cartes, modales, zones qui doivent se détacher légèrement de l'ivoire |
| Beige surface | `#EDE4DF` | Fonds de section alternés, zones secondaires |
| Bordure | `#E1D5CE` | Séparateurs, bordures de carte, lignes de grille |
| Texte secondaire | `#6E6259` | Sous-titres, légendes, texte de support |
| Encre (texte primaire) | `#1F1815` | Titres et corps de texte — noir chaud, jamais de noir pur `#000000` |

### 3.4 Accent or (optionnel)

| Nom | Hex | Usage |
|---|---|---|
| Or | `#C9A96E` | Accent tertiaire ponctuel (badge, séparateur fin, micro-détail). N'entre pas dans le calcul du 60/30/10 — usage rare et indépendant. |

### 3.5 La règle 60/30/10

**Principe :** chaque **section ou page** (pas chaque composant isolé) doit répartir sa couleur selon un équilibre approximatif **60% dominante / 30% texte / 10% accent**. C'est un principe d'équilibre global, pas une mesure au pixel près — un agent ou un designer doit pouvoir l'évaluer à l'œil sur une capture de section.

| Rôle | Part | Fonction |
|---|---|---|
| **Dominante (60%)** | Fond de la section — la couleur qui occupe le plus de surface | Ivoire par défaut, mais peut être toute couleur de la palette selon le preset |
| **Texte (30%)** | Couleur du texte principal de la section | Toujours une couleur *non pure* (jamais `#000000` ni `#FFFFFF` seuls) |
| **Accent (10%)** | La touche crimson — titres soulignés, CTA, icônes, cadres d'image, mots-clés | Toujours une teinte de la rampe crimson (§3.2). Jamais l'or, jamais un neutre. |

**Les rôles peuvent être inversés d'une section à l'autre** pour créer du contraste ou de l'originalité — c'est l'équilibre 60/30/10 qui compte, pas quelle couleur précise occupe quel rôle. Une page peut ainsi alterner plusieurs presets pour rythmer la lecture.

Les photos/images sont **exclues** de ce calcul — elles sont traitées comme un élément neutre séparé (voir §8), quelle que soit leur dominante colorimétrique.

### 3.6 Presets approuvés

Ces combinaisons sont pré-validées ; un agent ou un designer peut les utiliser directement sans revalider l'équilibre à chaque fois.

| Preset | 60% Dominante | 30% Texte | 10% Accent | Usage type |
|---|---|---|---|---|
| **A — Défaut clair** | Ivoire `#F5F0EE` | Encre `#1F1815` | Crimson `#8B1E1E` | Section standard, contenu éditorial, formulaires, la majorité des pages |
| **B — Bloc crimson** | Crimson `#8B1E1E` | Ivoire `#F5F0EE` ou Blanc chaud `#FFFFFF` | Crimson Soft `#C74D4D` ou Crimson Deep `#511010` | Bandeau CTA, section "feature", bloc de conviction forte |
| **C — Éditorial neutre** | Beige surface `#EDE4DF` | Encre `#1F1815` | Crimson `#8B1E1E` | Citations, témoignages, blocs de mise en avant douce, alternance visuelle entre sections A |

**Règle de composition :** ne jamais enchaîner deux sections consécutives avec exactement le même preset si elles sont visuellement adjacentes — alterner (ex. A → B → A → C) pour garder le rythme éditorial observé dans les carousels sources.

### 3.7 Règles d'usage générales

- Le crimson (accent, 10%) ne devient jamais la couleur de texte courant, même sur le preset B — il reste réservé aux CTA, titres ponctuels, icônes et bordures.
- Le texte est toujours une couleur *non pure* — Encre `#1F1815` sur fond clair, Ivoire/Blanc chaud sur fond crimson — jamais de noir ou blanc absolu.
- L'or `#C9A96E` reste hors système 60/30/10 : accent rare et indépendant, jamais utilisé comme substitut du crimson dans le rôle "accent 10%".

---

## 4. Typographie

### 4.1 Familles

| Rôle | Police | Usage |
|---|---|---|
| **Display / Titrage** | **Gloock** (Google Fonts, poids unique 400, sans italique, sans gras) | Titres, chiffres marquants, moments d'impact |
| **Texte / UI** | **Montserrat** (300–700, avec italique) | Corps de texte, labels, boutons, navigation, légendes, accroches éditoriales italiques |

Les deux polices sont des Google Fonts libres de droits (Gloock sous licence OFL), sans restriction de licence commerciale — aucune vérification légale nécessaire avant déploiement.

⚠️ **Particularité Gloock :** contrairement à Black Mango et Playfair Display, Gloock n'existe qu'en **un seul poids (Regular 400)**, sans variante grasse ni italique. La hiérarchie entre les niveaux de titre (Display 1, Display 2, H1, H2) ne peut donc plus se construire par la graisse — elle se construit uniquement par la **taille**, l'**espacement** et, ponctuellement, la **couleur** (mot accentué en crimson).

### 4.2 Logique de hiérarchie

Gloock porte l'émotion et l'impact (grands titres, punchlines, chiffres clés) grâce à son contraste de traits très marqué, dans l'esprit "headline de presse" — écho du serif display déjà présent dans les carousels sources. Montserrat porte la lisibilité et la fonction (paragraphes, listes, interface, CTA). On ne mélange jamais les deux rôles : Gloock ne sert jamais pour du texte long, Montserrat ne sert jamais pour un titre d'impact.

**Gloock n'ayant pas d'italique**, le rôle d'accroche éditoriale/sous-titre secondaire (auparavant en italique display) passe désormais à **Montserrat Italic** — le même usage que les sous-titres italiques observés dans les carousels ("si tu étais le client ?"), mais rendu en texte, pas en display.

### 4.3 Échelle typographique (web) — retravaillée pour Gloock

Gloock est un serif à très fort contraste de pleins/déliés, conçu pour les grands formats ("great performance anywhere in big sizes" selon sa fiche officielle) et perd en lisibilité à petite taille. Les tailles display ont donc été maintenues volontairement généreuses, et aucune version display n'est autorisée sous 28px.

| Style | Police / graisse | Taille | Line-height | Tracking | Usage |
|---|---|---|---|---|---|
| Display 1 | Gloock Regular | 72px (clamp 44–80px) | 1.05 | -1% | Titre héros |
| Display 2 | Gloock Regular | 48px (clamp 34–52px) | 1.1 | -0.5% | Titre de section |
| H1 | Gloock Regular | 36px | 1.15 | -0.5% | Titre de page |
| H2 | Gloock Regular | 28px | 1.2 | 0% | Sous-titre de section |
| H3 | Montserrat SemiBold | 20px | 1.3 | 0% | Titre de bloc/carte |
| Accroche italique | Montserrat Italic Medium | 18–20px | 1.5 | 0% | Sous-titre éditorial, citation |
| Corps (body) | Montserrat Regular | 16px | 1.6 | 0% | Paragraphes |
| Corps petit | Montserrat Regular | 14px | 1.6 | 0% | Légendes, notes |
| Label / Eyebrow | Montserrat SemiBold | 11px | 1.4 | +8% (uppercase) | Étiquettes, catégories, boutons |
| Micro | Montserrat Medium | 10px | 1.4 | +6% (uppercase) | Mentions légales, métadonnées |

### 4.4 Règles d'usage

- Les labels/eyebrows sont toujours en majuscules avec un tracking élargi (+6 à +10%), jamais en Gloock.
- Un titre Gloock ne dépasse jamais 3 lignes ; au-delà, redécouper le message.
- **Ne jamais utiliser Gloock en dessous de 28px** — à petite taille, ses empattements très fins se dégradent visuellement (aliasing, perte de lisibilité). Pour tout besoin de titre display sous ce seuil, basculer sur H3 (Montserrat SemiBold).
- Ne jamais mettre un paragraphe entier en Gloock — c'est une police de titre exclusivement, jamais de texte courant.
- Comme Gloock n'a pas de variante grasse, ne jamais simuler un gras via un "faux bold" logiciel (`font-weight: bold` forcé) — cela déforme le dessin des lettres. Utiliser la taille ou la couleur pour renforcer un mot à la place.
- Le crimson `#8B1E1E` peut colorer un mot ou groupe de mots dans un titre pour créer un point focal — cet usage compte dans le 10% "accent" de la section (§3.5), pas en dehors.

---

## 5. Grille & espacement

*(Inchangé depuis V3)*

### 5.1 Grille responsive (site web)

| Breakpoint | Largeur | Colonnes | Marge extérieure | Gouttière |
|---|---|---|---|---|
| Mobile | 375–639px | 4 | 20px | 16px |
| Tablette | 640–1023px | 8 | 40px | 20px |
| Desktop | 1024–1439px | 12 | 80px | 24px |
| Large desktop | ≥1440px | 12 | max container 1280px, centré | 24px |

### 5.2 Échelle d'espacement (base 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

Utiliser exclusivement ces valeurs (ou leurs multiples) pour marges, paddings et écarts.

### 5.3 Principes de mise en page

- Respiration généreuse entre les blocs (min. 64px entre deux sections sur desktop)
- Alignement systématique sur la grille — pas d'éléments "flottants" hors colonne
- Le contenu texte est toujours plus étroit que la grille complète (max ~680px de largeur de lecture pour un paragraphe)

---

## 6. Bordures, rayons & élévation

*(Inchangé depuis V3)*

Objectif : un rendu **propre, moderne, discret** — jamais de skeuomorphisme, jamais d'ombres dures.

### 6.1 Rayons de bordure

| Token | Valeur | Usage |
|---|---|---|
| `radius-sm` | 4px | Champs de formulaire, petits tags |
| `radius-md` | 12px | Cartes, images, blocs de contenu |
| `radius-lg` | 24px | Grands blocs héros, conteneurs image pleine largeur |
| `radius-pill` | 999px | Boutons, badges, chips |

### 6.2 Bordures

- Couleur par défaut : `#E1D5CE` (Bordure), épaisseur 1px
- Bordure d'accent : 1px dashed `#8B1E1E` à 40% d'opacité — compte comme accent dans le calcul 60/30/10 si elle est visuellement dominante dans le composant

### 6.3 Ombres (élévation)

| Token | Valeur | Usage |
|---|---|---|
| `shadow-1` | `0 1px 2px rgba(31,24,21,0.04)` | Cartes au repos |
| `shadow-2` | `0 4px 12px rgba(31,24,21,0.06)` | Cartes au survol, dropdowns |
| `shadow-3` | `0 12px 32px rgba(31,24,21,0.10)` | Modales, éléments flottants |

---

## 7. Iconographie

*(Inchangé depuis V3)*

- **Style :** trait fin (line icons), jamais rempli/solid
- **Épaisseur de trait :** 1.5px, cohérente à toutes les tailles
- **Angles :** coins arrondis (cap "round"), en écho aux courbes du monogramme
- **Grille :** dessinées sur une grille 24×24px, zone de sécurité de 2px
- **Couleur :** Encre `#1F1815` par défaut ; crimson `#8B1E1E` uniquement pour un état actif/sélectionné ou une icône d'accent isolée — compte alors dans le 10% accent de la section
- **Ce qu'on évite :** icônes multicolores, style 3D/glossy, remplissages pleins, style "emoji"

---

## 8. Photographie

*(Inchangé depuis V3 — traité indépendamment du système 60/30/10, voir §3.5)*

### 8.1 Direction artistique

- **Lumière :** naturelle, douce, chaude — jamais de flash dur ou de lumière blanche clinique
- **Colorimétrie :** tons chauds dominants (ambre, terracotta, beige), cohérents avec l'ivoire de fond — pas de teintes bleutées/froides
- **Sujets privilégiés :**
  - Macro de matière/texture (liquides, crèmes, gouttes, produits de soin)
  - Portraits candides et naturels, pas de pose trop "corporate stock photo"
  - Objets simples porteurs de sens (tasse, carnet, enveloppe) plutôt que compositions surchargées
- **Ce qu'on évite :** photos de banque d'images génériques, lumière froide/bleutée, arrière-plans encombrés, filtres saturés ou vintage

### 8.2 Traitement

- Contraste modéré, pas de noir profond ni de blanc cramé
- Grain léger accepté, pas de flou artistique excessif
- Recadrages généreux et aérés, jamais compressés dans de petites vignettes serrées

---

## 9. Éléments graphiques de marque

*(Inchangé depuis V3)*

- **L'étincelle** seule peut servir de puce, de séparateur visuel ou de point d'accent à côté d'un titre
- **Le contour d'aile** peut être extrait en filigrane à très faible opacité (5–8%) comme texture de fond décorative
- **Le monogramme complet** en aplat crimson peut servir de tampon/signature en fin de contenu (footer, dernier slide, coin de page)

Règle : ces motifs sont des touches discrètes, jamais des éléments dominants.

### Séparateurs

Ligne fine horizontale (1px, couleur Bordure), avec option d'un petit ornement centré (étincelle ou point crimson).

---

## 10. Do's & Don'ts — Résumé

**✅ À faire**
- Fond ivoire `#F5F0EE` par défaut, logo BM1 sur tout support clair
- Gloock pour l'impact (28px et plus uniquement), Montserrat pour la lisibilité et l'italique éditorial
- Évaluer chaque section/page selon l'équilibre 60/30/10 (§3.5) en piochant parmi les presets approuvés (§3.6)
- Crimson en touche ciblée (mot, CTA, icône, bordure), jamais en couleur de texte courant
- Espacement généreux, alignement strict sur la grille 4px

**🚫 À ne pas faire**
- Ne pas réintroduire le dark theme (noir + or dominant) de la V2
- Ne pas utiliser le logo Black ou Rev sur fond clair
- Ne pas utiliser Gloock pour du texte long, en dessous de 28px, ou en faux gras/faux italique simulé
- Ne pas déséquilibrer une section (ex. 50% crimson en fond + 50% texte crimson) — toujours revenir à une logique 60/30/10
- Ne pas utiliser l'or comme substitut du crimson dans le rôle accent
- Ne pas utiliser de photographie froide, saturée ou de banque d'images générique

---

*CrimsAI — Brand Guidelines V3.1 · Identité visuelle uniquement · Les standards de composants UI feront l'objet d'un Design System séparé.*
