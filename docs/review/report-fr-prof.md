# Rapport de relecture — version française du guide interactif GR4AI

**Relectrice :** Pre Claire Béranger, linguistique française, littérature de jeunesse et acquisition de la lecture
**Objet :** `text-fr.md` (traduction) confrontée à `text-en.md` (source)
**Public visé :** enfants de 7 à 12 ans, francophones

---

## 0. Jugement d'ensemble

Ce n'est pas une mauvaise traduction. Elle est faite par quelqu'un qui sait écrire le français : l'apostrophe typographique est employée partout (360 occurrences de U+2019, zéro apostrophe droite), les guillemets sont bien des chevrons français (16 paires, aucun guillemet anglais), les titres sont en casse de phrase et non en casse de titre à l'anglaise, les grands nombres ont été correctement reconvertis (`1,800,000,000,000` → `1 800 000 000 000`), et quelques trouvailles sont excellentes : « Création à quatre mains, humain et IA », « L'IA n'a ni cœur ni conscience — NOUS, si. », « Sortir des sentiers battus », « Robots pizzaïolos », le trio d'options du quiz Q1 (`Internet automatique / Intelligence artificielle / Interface avancée`) qui conserve les initiales I-A dans les trois cas.

Mais le texte **ne se situe pas actuellement dans la tranche 7–12 ans**. Il se situe entre 11 et 14, et par endroits au-dessus. Trois causes :

1. **Un lexique d'adulte non filtré** — *aplomb, voire, outre, de ton vivant, n'est pas négociable, juriste, professionnels, en situation de handicap, résolution visuelle de problèmes, épingle, survoler, retour (feedback), équité* avant définition. Aucun de ces mots n'est illisible pour un enfant de 12 ans ; presque tous le sont pour un enfant de 7 ou 8.
2. **Une syntaxe non dégraissée** — la phrase de définition de l'IA (ch2) fait 38 mots avec quatre infinitifs coordonnés ; la question finale du ch14 empile un complément antéposé formel (« Outre… »), une interrogative indirecte et une inversion. La traduction a suivi la ponctuation anglaise au lieu de refaire la respiration en français.
3. **Un calque de surface régulier** — « Électricité allumée/éteinte », « Te conseille ton style », « la langue de l'IA », « garder l'IA du bon côté », « mener l'avenir », « Explique à TA façon ». Le français est grammatical mais l'os est anglais.

S'y ajoutent trois défauts **structurels** à corriger avant toute mise en ligne : un texte de réserve (« À compléter : insérer ici… ») laissé en production, un glossaire **non classé par ordre alphabétique français**, et une chaîne de score qui produira « Tu as 1 bonnes réponses sur 10 ! ».

Le travail à faire est une **passe de réécriture pour l'âge**, pas une correction de fautes. Le nombre de fautes dures est faible ; le nombre de phrases qu'un enfant de 8 ans ne franchira pas est élevé.

**Note sur la typographie :** le fichier soumis est une extraction textuelle du site. J'y signale des problèmes d'espaces insécables ; ils sont peut-être un artefact d'extraction. Un indice suggère fortement que non : les chaînes du script du quiz (l. 736–791) contiennent bien des U+00A0, alors que **tout le corps du texte n'en contient aucun**. Cette asymétrie ne peut pas venir de l'extraction. À vérifier dans le HTML source, mais il faut partir du principe que le corps du texte est fautif.

---

## 1. Erreurs franches

### 1.1 Grammaire, accord, mode

**MUST-FIX — ch3, l. 131**
> « Imagine que tu **apprennes** à un tout-petit à reconnaître un chat. »

`imaginer que` au sens de « suppose que » se construit avec **l'indicatif** en français (*Imagine que tu es en vacances*). Le subjonctif est une hypercorrection. Faute franche, et le subjonctif alourdit la phrase pour l'enfant.
→ **« Imagine : tu apprends à un tout-petit à reconnaître un chat. »**

**MUST-FIX — chaîne de résultat, l. 789**
> `` `Tu as ${score} bonnes réponses sur ${total} !` ``

Avec `score = 1` l'enfant lira **« Tu as 1 bonnes réponses sur 10 ! »** ; avec `score = 0`, « Tu as 0 bonnes réponses » (en français, 0 entraîne le singulier : *0 bonne réponse*). L'anglais « You scored 1 out of 10 » n'a pas ce problème : c'est un bug **créé** par le passage au français. Il se déclenchera pour tout enfant qui obtient 0 ou 1.
→ **`` `Tu as ${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${total} !` ``**
→ ou, plus sûr, **`` `Ton score : ${score} sur ${total} !` ``**

**MUST-FIX — ch10, l. 468**
> « **Deepfake : ces vidéos** ont trompé des millions de personnes ! »

Anglais : « Deepfake videos have fooled millions of people! ». Le traducteur a coupé le syntagme `Deepfake videos` en deux et introduit un démonstratif **« ces »** dont l'antécédent n'existe pas : c'est la **première** phrase de l'encadré de réponse. L'enfant lit « ces vidéos » et cherche lesquelles.
→ **« Les vidéos deepfake ont trompé des millions de personnes ! »**

**MUST-FIX — ch14, l. 612**
> « **Cultivée** dans des fermes verticales »

Participe passé accordé au féminin singulier sans sujet exprimé. Il s'accorde en réalité avec le titre de la carte (« Alimentation »), à deux lignes de distance et dans un autre bloc typographique. L'enfant lit un participe qui pend.
→ **« De la nourriture cultivée dans des fermes verticales »**

**SHOULD-FIX — ch3, l. 144**
> « On **l'**essaie sur des données NOUVELLES, qu'**elle** n'a jamais vues »

Rupture de référent dans une même phrase : `l'` renvoie au **modèle** (masculin, titre de l'étape 4 : « Tester le modèle »), puis `elle` renvoie à **l'IA**. Deux référents pour un seul objet, à sept mots d'intervalle.
→ **« On le teste sur des données NOUVELLES, qu'il n'a jamais vues »**

**SHOULD-FIX — page de garde, l. 33**
> « 9 ans et demi, adore les expériences, **les maths et bricoler** ! »

Coordination bancale : deux groupes nominaux puis un infinitif. Le français ne coordonne pas ainsi ; l'anglais « experiments, maths & making stuff » le tolère.
→ **« 9 ans et demi, adore les expériences, les maths et le bricolage ! »**

**SHOULD-FIX — ch12, l. 532**
> « pour créer des œuvres, **des musiques** et des histoires à couper le souffle »

`musique` ne se pluralise pas dans ce sens en français ; « des musiques » sonne fautif ici.
→ **« pour créer des œuvres d'art, de la musique et des histoires à couper le souffle »**

**SHOULD-FIX — glossaire, l. 700 (Sciences humaines)**
> « **Des matières** comme l'histoire, l'éthique et la philosophie, qui nous aident à comprendre les gens, la société et la différence entre le bien et le mal — **des compétences** que l'IA ne sait toujours pas vraiment remplacer. »

Apposition impossible : des *matières* ne sont pas des *compétences*. Le défaut existe déjà en anglais mais il est bien plus visible en français à cause de l'apposition par tiret. En prime, 37 mots dans une définition de glossaire pour enfants.
→ **« Des matières comme l'histoire, la philosophie et la morale. Elles nous aident à comprendre les gens, la société, et la différence entre le bien et le mal. C'est quelque chose que l'IA ne sait toujours pas faire à notre place. »**

**SHOULD-FIX — ch5, l. 230 + liste**
> « **L'IA peut aider les enfants à :** … Rendre Internet plus sûr **pour eux** »

La liste est syntaxiquement rattachée à « aider les enfants à », donc les infinitifs ont pour sujet les *enfants*. Mais ce n'est pas l'enfant qui rend Internet plus sûr pour lui-même, c'est l'IA. Le sujet bascule en milieu de liste. Défaut hérité de l'anglais, aggravé en français par la rection de l'infinitif.
→ Reformuler le chapeau : **« L'IA peut aider les enfants. Elle : corrige l'orthographe · rend la lecture plus facile · repère des maladies plus vite · écrit des histoires · fait des films · crée de nouveaux jouets · rend Internet plus sûr pour eux. »**

### 1.2 Lexique fautif, faux amis, collocations impossibles

**MUST-FIX — ch13, l. 549**
> « raisonnement logique — **la langue de l'IA**. »

`language` → **langage**, pas *langue*, dans l'emploi métaphorique (« le langage mathématique »). *Langue* renvoie au français, à l'anglais, à l'organe. Faux ami classique, et ici le sens est faux.
→ **« … raisonnement logique — le langage de l'IA. »**

**MUST-FIX — ch4, l. 203**
> « Binaire (des 0 et des 1) → **Électricité allumée/éteinte** »

Calque de « Electricity On/Off ». On n'allume pas l'électricité en français ; on allume une lampe, un appareil. Agrammatical au niveau de la collocation.
→ **« … → Le courant passe ou ne passe pas »**

**MUST-FIX — ch15, l. 629 (titre de chapitre)**
> « Notre responsabilité : **garder l'IA du bon côté** »

Calque de « Keeping AI Good ». En français, *rester du bon côté* se dit d'une personne ; *garder quelque chose du bon côté* n'existe pas. Un enfant ne peut rien en tirer.
→ **« Notre responsabilité : faire en sorte que l'IA serve à faire le bien »**

**MUST-FIX — ch15, l. 635**
> « Ce sont les curieux, ceux qui apprennent toujours, qui **mèneront l'avenir de l'IA**. »

Calque de « will lead the AI future ». On ne *mène* pas un avenir en français.
→ **« … qui construiront l'avenir de l'IA. »**

**SHOULD-FIX — ch8, l. 328**
> « **Te conseille ton style** »

Calque de « Recommends your style ». Si c'est *ton* style, on n'a rien à te conseiller. Non-sens en français.
→ **« Te propose des vêtements à ton goût »**

**SHOULD-FIX — ch6, l. 268**
> « Touche une **épingle** – ou **survole-la** – pour faire leur connaissance. »

Trois problèmes. (a) `pin` sur une carte = **un repère**, **un marqueur** ou **une punaise** ; *une épingle* est un objet de couture. (b) *survoler* au sens de `hover` est du jargon d'interface qu'un enfant de 7 ans n'a jamais lu. (c) Rupture de nombre : « une épingle » (singulier) → « **leur** connaissance » (pluriel).
→ **« Clique sur un point de la carte pour découvrir la personne qui travaille là-bas. »**

**SHOULD-FIX — ch11, l. 487**
> « **N'envoie pas de photos** de toi ou de tes amis **sur des sites d'IA** »

`upload` → *envoyer sur un site* est un anglicisme. Le français dit *mettre en ligne* ou *publier*.
→ **« Ne mets pas en ligne de photos de toi ou de tes amis sur des sites d'IA sans l'autorisation d'un parent. »**

**SHOULD-FIX — ch5, l. 225**
> « **Soutenir** l'exploration spatiale »

Calque de « Support space exploration ». *Soutenir* implique un soutien moral ou financier ; ici il s'agit d'aide technique.
→ **« Aider à explorer l'espace »**

**SHOULD-FIX — ch1, l. 66–67**
> « Cerveau : un **processeur humain d'idées**, de pensées et de connaissances »
> « Ordinateur : un **processeur numérique de données**, qui nous aide à **donner du sens à des nombres compliqués** »

`processor` → *processeur* est un faux ami partiel : en français courant, un processeur est **la puce d'un ordinateur**, pas un agent qui traite. Appeler le cerveau « un processeur humain d'idées » est incompréhensible pour un enfant, et contredit le ch4 où « Le processeur » désigne justement la puce. `make sense of` → *donner du sens à* est un calque : en français on *comprend* des nombres.
→ **« Cerveau : la machine qui, dans notre tête, trie les idées, les pensées et les connaissances. Elle nous aide à comprendre le monde physique et à trouver des choses nouvelles. »**
→ **« Ordinateur : la machine qui trie les données. Elle nous aide à comprendre des nombres compliqués. »**

**SHOULD-FIX — ch11, l. 481**
> « Pas de **mystères cachés** ! »

Pléonasme : un mystère est par définition caché.
→ **« Pas de secrets ! »**

**NICE-TO-HAVE — ch2, l. 114**
> « Le parcours de l'IA **n'a pas été tout droit** ! » — collocation bancale ; un *parcours* n'est pas *droit* en français.
→ **« L'IA n'a pas avancé en ligne droite ! »**

**NICE-TO-HAVE — ch7, l. 295**
> « **Partons voir** où tu peux la croiser » — l'invitation collective se dit *Allons voir*.
→ **« Allons voir où tu peux la croiser dans la vraie vie. »**

### 1.3 Dérive de sens par rapport à l'anglais

**SHOULD-FIX — ch14, l. 585**
> EN : « Zero turbulence predictions » → FR : « Des prévisions de turbulences **au plus juste** »

*Au plus juste* signifie « calculé au plus serré, sans marge » (un budget au plus juste) : ce n'est ni « zéro turbulence » ni « des prévisions très précises ». Le sens a glissé sur une troisième signification.
→ **« Des vols sans turbulences grâce à des prévisions très précises »**

**SHOULD-FIX — page d'adieu, l. 652**
> EN : « If you use me **safely**, we can do miracles! » → FR : « Si tu m'utilises **avec précaution**, on peut faire des miracles ! »

*Avec précaution* = comme on manipule un objet fragile. L'anglais dit « sans te mettre en danger / avec bon sens ». C'est la dernière phrase que l'enfant lit avant le quiz : elle doit porter la bonne idée.
→ **« Si tu m'utilises intelligemment, on peut faire des merveilles ! »**

**NICE-TO-HAVE — ch10, l. 464/468** — EN « steal millions **of pounds** » → FR « voler **des millions** » (sans devise). Suppression défendable pour un lectorat francophone international, mais l'enfant reste sans unité. → **« voler des millions d'euros »**.

**NICE-TO-HAVE — galerie, l. 252** — EN « What do YOU imagine AI **looks like**? » → FR « Toi, tu imagines l'IA comment ? ». Le français perd la dimension visuelle, alors que la consigne qui suit demande un **dessin**. → **« Toi, l'IA, tu l'imagines comment ? À quoi elle ressemble, dans ta tête ? »**

### 1.4 Défauts hérités de l'anglais qu'il faut corriger dans la VF

**MUST-FIX — ch6, l. 282**
> « **À compléter : insérer ici le vrai domaine et le parcours de la Prof. Ling.** »

Texte de réserve laissé en production (identique en anglais). Ne peut pas paraître.

**MUST-FIX — ch5, l. 225 et l. 228**
> Liste « Que sait faire l'IA ? » : « **Repérer des maladies sur des radios et des IRM** »
> Liste « Que ne sait pas faire l'IA ? » : « **Repérer des maladies sur des radios et des IRM** »

Le même item figure dans les deux colonnes, mot pour mot. Contradiction frontale que l'enfant verra en une seconde — c'est exactement le genre de détail que les 9–12 ans relèvent. Défaut de la source, mais impubliable.
→ Retirer l'item de la colonne « ne sait pas faire », ou le reformuler : **« Décider toute seule du traitement après avoir lu une radio »**.

**SHOULD-FIX — description de page, l. 3 et l. 21**
> « Un parcours à travers **les six chapitres** de GR4AI »

Le guide compte **quinze** chapitres (`01 … 15` dans la barre de navigation). Erreur de la source, mais elle décrédibilise la VF.
→ **« Un parcours à travers les quinze chapitres de GR4AI »**

**SHOULD-FIX — Ling, l. 45 / 238 / 281 / 490**
Ling est à la fois **une enfant de 12 ans** (« Ling, 12 ans, mordue de sciences et grande lectrice ») et **une professeure** (« Bonjour, je suis **la professeure** Ling », « **Prof.** Ling — Hong Kong »), puis redevient enfant au ch11 (« Salut, c'est Ling — encore une question ! »). Le français aggrave la confusion parce qu'il marque le genre là où l'anglais laisse tout au flou. Un enfant ne peut pas démêler ça.
→ Renommer l'un des deux personnages, ou distinguer systématiquement : **« la professeure Ling (Hong Kong) »** vs **« Ling, 12 ans »**.

---

## 2. Adéquation à la tranche 7–12 ans

### 2.1 Mots au-dessus de la tranche — avec remplacement

| Ch. | Citation | Problème | Remplacement |
|---|---|---|---|
| ch4, l. 208 | « écrire un mot de travers **avec un aplomb total** » | *aplomb* = registre soutenu adulte. Inconnu avant le lycée. | « écrire un mot n'importe comment, et **avoir l'air très sûre d'elle** » |
| ch14, l. 617 | « **Outre** la faim dans le monde et le changement climatique » | *Outre* est littéraire et écrit ; jamais oral. | « **En plus de** la faim dans le monde et du changement climatique » |
| ch15, l. 639 | « être biaisée, **voire** devenir dangereuse » | *voire* est un connecteur d'adulte lettré ; confondu avec *voir* par les enfants. | « être biaisée, **et même** devenir dangereuse » |
| ch14, l. 621 | « … le changement climatique, **de ton vivant** » | Formule administrative, et sinistre pour un enfant : elle sous-entend « avant ta mort ». | « … le changement climatique — **et tout ça pendant TA vie !** » |
| ch15, l. 645 | « la surveillance humaine de l'IA **n'est pas négociable** » | Jargon de salle de réunion. | « … c'est pour ça que **des humains doivent TOUJOURS vérifier le travail de l'IA.** » |
| ch12, l. 519 | « **Juriste** en éthique de l'IA » | Mot de profession que les enfants ne rencontrent pas ; ils connaissent *avocat*. | « **Avocat ou avocate** spécialiste de l'IA » |
| ch6, l. 268 | « Rencontre 9 **professionnels** formidables » | Nominalisation d'adulte. | « Rencontre 9 **personnes** formidables qui travaillent avec l'IA » |
| ch10, l. 425 | « Le côté **délicat** de l'IA » (titre) | *délicat* au sens de « épineux » est un emploi adulte ; l'enfant comprend « fragile ». Le titre perd son sens d'avertissement. | « **Les côtés compliqués de l'IA** » ou « **Attention : l'IA a aussi ses dangers** » |
| ch13, l. 561 | « **résolution visuelle de problèmes** » | Empilement nominal calqué sur *visual problem solving*. Illisible avant 14 ans. | « **trouver des solutions en dessinant** » |
| ch13, l. 561 | « **design d'interfaces** » | Jargon métier. | « **dessiner des écrans et des boutons d'applis** » |
| ch8/ch9, l. 346 + 397 | « **Retours** immédiats » / « Donne un **retour** immédiat » | *retour* au sens de *feedback* est du vocabulaire d'entreprise ; en français enfantin, *retour* = le fait de revenir. | « **Te dit tout de suite si c'est juste** » |
| ch12, l. 507 | « Médecin **augmenté par l'IA** » | *médecine augmentée* est un terme de colloque. | « **Médecin qui travaille avec l'IA** » |
| ch15, l. 636 | « les personnes **en situation de handicap** » | Formule institutionnelle de neuf syllabes. Respectueuse, mais illisible pour un CE1. | « les personnes **qui ont un handicap** » |
| ch3, l. 156 | « Comme des **cartes mémo** ! » | *cartes mémo* n'est pas un terme reçu en français ; calque de *flashcards*. | « Comme un **jeu de cartes questions-réponses** ! » |
| ch2, l. 122 | « Le « **cycle du hype** de Gartner » » | *hype* est un anglicisme non naturalisé ; *le cycle du hype* n'est pas une formule française. | « la « **courbe de l'emballement** » de Gartner (en anglais : *Gartner Hype Cycle*) » |
| ch2, l. 108 | « Elle fait des **suppositions** » | Abstrait ; l'anglais *guesses* est plus concret. | « **Elle devine** » |
| ch4, l. 187–188 | « La RAM – **la mémoire courte** / Le stockage – **la mémoire longue** » | N'existent pas en français ; on dit *mémoire à court/long terme*. Sans *durée*, l'enfant comprend « une mémoire de petite taille ». | « La RAM – **la mémoire courte durée** » / « Le stockage – **la mémoire longue durée** » |
| ch13, l. 546 | « développer **de belles compétences** » | Collocation vide et adulte. | « **apprendre des choses vraiment utiles** » |
| ch14, l. 618–619 | « **Le paludisme** » | Terme exact, mais les enfants francophones rencontrent surtout *malaria* dans les médias. | « **Le paludisme (aussi appelé malaria)** » |
| ch11, l. 486 | « à un chatbot IA, **quel qu'il soit** » | *quel qu'il soit* postposé est du registre écrit soutenu. | « **à aucun chatbot IA** » |
| glossaire, l. 700 | « **Sciences humaines** » | En français, *sciences humaines* désigne d'abord sociologie et psychologie ; l'équivalent de *Humanities* est plutôt *les lettres et la philosophie*. | « **Histoire, philosophie et morale** » |
| ch2, l. 122 / ch3, l. 155 | « ton **professeur** » / « Le **professeur** montre des exemples » | En France, *professeur* désigne le secondaire ; les 7–10 ans ont un *maître* ou une *maîtresse*. Le ch6 emploie d'ailleurs « les **enseignants** » (l. 278) — incohérent. | « ton **enseignant ou ton enseignante** » / « **La maîtresse ou le maître** montre des exemples » |

### 2.2 Phrases trop longues ou trop subordonnées — où couper

**MUST-FIX — ch2, l. 90 (38 mots, quatre infinitifs coordonnés + subordonnée finale)**
> « L'IA est un programme informatique capable d'apprendre à partir d'informations (on les appelle des DONNÉES), de repérer des motifs, de prendre des décisions et de s'améliorer avec le temps — sans qu'on lui indique chaque étape à suivre. »

C'est **la** phrase de définition du livre. Elle doit être la plus lisible de toutes ; c'est la plus longue de tout le texte suivi. Couper après la parenthèse et après « décisions ».
→ **« L'IA, c'est un programme d'ordinateur qui apprend tout seul. On lui donne des informations : on les appelle des DONNÉES. Avec ça, elle repère ce qui revient souvent, elle prend des décisions, et elle devient meilleure au fil du temps. Et personne n'a besoin de lui indiquer chaque étape ! Imagine un cerveau fait de maths et de code. »**

**MUST-FIX — ch14, l. 617 (24 mots, trois obstacles syntaxiques empilés)**
> « Outre la faim dans le monde et le changement climatique, quelle maladie les scientifiques pensent-ils que l'IA pourrait aider à éliminer ? »

Complément antéposé littéraire + interrogative indirecte enchâssée + inversion du sujet. Structure la plus difficile du document, et c'est une **question de quiz** : l'enfant doit la comprendre pour répondre.
→ **« Les scientifiques pensent que l'IA pourrait aider à faire disparaître une maladie. Laquelle ? »**

**MUST-FIX — ch10, l. 464**
> « En 2024, quelqu'un s'est servi de l'IA pour imiter **quelle voix** et voler des millions ? »

Interrogatif *in situ* enchâssé dans une proposition infinitive : structure quasi impossible à analyser, et impossible pour un enfant.
→ **« En 2024, quelqu'un a utilisé l'IA pour imiter une voix et voler des millions. La voix de qui ? »**

**MUST-FIX — ch4, l. 182 (titre de chapitre, 25 mots sans ponctuation)**
> « L'intelligence artificielle est un type d'intelligence créé par les humains dans le monde numérique pour aider à automatiser des tâches dans l'environnement physique »

Un titre de chapitre ne peut pas être une phrase de 25 mots à trois compléments circonstanciels enchâssés.
→ **« L'IA, une intelligence fabriquée par les humains »**, en sous-titre : **« Elle vit dans le monde numérique, et elle nous aide à faire des tâches dans le monde réel. »**

**SHOULD-FIX — ch10, l. 426**
> « Voici de vrais risques **auxquels** il faut penser et **dont** il faut parler. » — deux relatives à pronom composé coordonnées : rédaction administrative.
→ **« Voici de vrais risques. Il faut y penser, et il faut en parler. »**

**SHOULD-FIX — ch14, l. 579**
> « … — mais seulement si NOUS faisons dès maintenant **les bons choix sur la façon de l'utiliser de manière responsable**. »

Empilement de trois groupes prépositionnels en cascade (*sur* + *de* + *de*), plus une redondance : *les bons choix* et *de manière responsable* disent la même chose.
→ **« … — mais seulement si NOUS choisissons, dès maintenant, de l'utiliser de façon responsable. »**

**SHOULD-FIX — ch5, l. 239**
> « Malgré tout ce que l'IA sait faire, quelle est la chose qu'elle **NE PEUT toujours PAS** faire ? » — négation discontinue coupée par des capitales, illisible à voix haute ; « quelle est la chose que » est une périphrase.
→ **« Malgré tout ça, qu'est-ce que l'IA ne sait TOUJOURS pas faire ? »**

**SHOULD-FIX — ch15, l. 641**
> « Pourquoi une **IA de recrutement** a-t-elle un jour **écarté** TOUTES les femmes **des postes d'ingénieur** ? » — trois blocs de vocabulaire RH d'adulte dans une même question de quiz.
→ **« Pourquoi une IA qui aidait à choisir des employés a-t-elle un jour refusé TOUTES les femmes pour des métiers d'ingénieur ? »**

**SHOULD-FIX — ch15, l. 637**
> « Tu as le droit de savoir quand une IA est **utilisée à ton sujet**, et de poser des questions **à ce propos**. » — *utilisée à ton sujet* est un calque opaque de *used on you* ; *à ce propos* est du registre écrit.
→ **« Tu as le droit de savoir quand une IA s'occupe de toi ou de tes données. Et tu as le droit de poser des questions. »**

---

## 3. Registre : le tutoiement, et la voix des personnages

### 3.1 Le tutoiement tient — sauf à un endroit

Le « tu » est parfaitement tenu dans tout le corps du texte (aucune fuite de « vous »). Le passage au « vous » dans la note aux parents (l. 257–258 : « au nom de **votre** enfant », « **Vous** souhaitez qu'une image soit retirée ? ») est **correct et souhaitable** : le destinataire change, le français doit le marquer. Rien à redire.

**MUST-FIX — galerie, l. 259**
> « La galerie ne s'affiche pas ? **Ouvre-la** dans un nouvel onglet . »

Cette ligne suit immédiatement le bloc « Un mot pour les parents et les responsables », intégralement au « vous ». Le retour brutal à l'impératif de 2ᵉ personne du singulier casse l'adresse : le lecteur du paragraphe est le parent, et on le tutoie. En anglais le problème n'existe pas.
→ Deux issues : **remonter cette ligne avant le bloc parents** (elle redevient adressée à l'enfant, « Ouvre-la »), ou la laisser et écrire **« Ouvrez-la dans un nouvel onglet. »**

### 3.2 Les répliques des personnages

Globalement **bien** : c'est le point le plus réussi de la traduction. « Coucou, c'est Ronan », « Salut, c'est Fleur — en voilà une amusante ! », « C'est Anish — celle-là, elle est pour moi ! », « Sers-toi aussi de ta tête ! », « Aïe, ça se complique », « Et ça marche, tout simplement ! » : du français parlé qu'un enfant reconnaît. À conserver tel quel.

Trois exceptions où la voix redevient de la prose traduite :

**SHOULD-FIX — ch5, l. 238** — « **Bonjour, je suis la professeure Ling.** » Comparé à « Coucou, c'est Ronan », cette réplique sonne comme une présentation de réunion parents-professeurs.
→ **« Bonjour, moi c'est Ling, je suis professeure. »**

**SHOULD-FIX — ch1, l. 79** — « pas **un robot méchant de film** ». L'ordre des mots produit un groupe bancal ; le français place l'épithète évaluative avant.
→ **« … pas un méchant robot de film. »**

**NICE-TO-HAVE — ch3, l. 162** — « quand elle **vise juste** » : image d'adulte (tir, argumentation).
→ **« … quand elle trouve la bonne réponse. »**

### 3.3 Les prénoms des personnages

Les noms sont laissés en anglais à dessein ; je ne les signale pas comme fautes. Deux remarques utiles :

- **Prof. Goldilocks** (ch6, l. 285) : en français, le personnage s'appelle **Boucle d'or**. Le clin d'œil au conte — manifestement l'intention — est **entièrement perdu** pour un enfant francophone, qui lit une suite de lettres imprononçables (`gol-di-lo-cks`). Si le nom reste, ajouter une glose : **« Prof. Goldilocks (« Boucle d'or » en français) »**.
- **Prof. Shy Jeans** (ch6, l. 283) : lu à la française, cela donne à peu près « chi-jan », et l'enfant reconnaîtra surtout le mot *jeans* (le pantalon). Risque de rire non prévu.
- Les autres passent sans peine : **Ronan** et **Fleur** sont des prénoms français ; **Katerina**, **Rebecca**, **Anish**, **Bembe**, **Ling**, **Nallah** se prononcent sans obstacle.

---

## 4. Cohérence terminologique

### 4.1 « IA » vs « intelligence artificielle » — correct

`IA` : 193 occurrences ; forme développée : 9. Le sigle est développé à la première occurrence (ch1, l. 57 : « l'intelligence artificielle (aussi appelée IA) ») puis employé seul. Bonne pratique. **Rien à changer.**

**NICE-TO-HAVE — capitalisation.** Le texte hésite : « IA signifie **I**ntelligence artificielle » (l. 88) contre « l'**i**ntelligence artificielle » (l. 57, 89, 182). En français, *intelligence artificielle* est un nom commun : minuscules partout sauf en début de phrase.

### 4.2 « apprentissage automatique » / « apprentissage profond » — incohérent

**MUST-FIX — ch3, l. 165 vs l. 168**
> Titre : « 🧠 Réseaux de neurones : comment fonctionne **l'apprentissage profond** »
> Corps, quatre lignes plus bas : « apprentissage plus profond = « **DEEP LEARNING** », le type d'IA le plus puissant aujourd'hui ! »

Le terme français est donné dans le titre, puis **abandonné au profit de l'anglais** dans la seule phrase qui le met en capitales et le présente comme *le mot à retenir*. L'enfant repartira avec « DEEP LEARNING ». C'est l'inverse de ce que fait le même chapitre avec *machine learning*, correctement francisé (« On appelle ça l'**APPRENTISSAGE AUTOMATIQUE** », l. 132) — d'où l'incohérence entre deux notions sœurs.
→ **« Plus il y a de couches = apprentissage plus profond = l'« APPRENTISSAGE PROFOND » (en anglais : *deep learning*), le type d'IA le plus puissant aujourd'hui ! »**

Par ailleurs, `APPRENTISSAGE AUTOMATIQUE` n'apparaît **qu'une seule fois** et n'est jamais repris ; `apprentissage profond` **qu'une seule fois**. Aucun des deux n'est au glossaire. Un terme présenté en capitales comme mot-clé doit être réutilisé au moins une fois et figurer au glossaire.

### 4.3 « données » — correct

16 occurrences, toujours au pluriel, toujours dans le même sens, en capitales à la première présentation (ch2, l. 90) et repris au ch3 et au quiz Q2. **Bon travail.** Manque seulement au glossaire (§ 8).

### 4.4 « motifs » pour *patterns* — le point le plus délicat

5 occurrences (l. 90, 107, 141, 159, 225), toujours dans « repérer / trouver des motifs ».

**Mon avis : ce n'est pas le bon rendu pour cette tranche d'âge, mais ce n'est pas non plus une faute.** *Motif* est le terme technique reçu en apprentissage automatique. Le problème est qu'en français scolaire, un enfant de 7 à 12 ans rencontre le mot **motif** dans exactement deux sens, et aucun n'est celui-ci :
1. **le motif décoratif** — le motif d'un tissu, d'un papier peint (sens dominant en arts plastiques au primaire) ;
2. **le motif = la raison** — « quel est le motif de ton absence ? ».

L'enfant lira donc « l'IA repère des motifs » comme « l'IA repère des dessins sur un tissu » ou « l'IA repère des raisons ». Le premier contresens est presque productif (l'idée de forme qui se répète n'est pas loin), le second est une impasse.

**« Régularités » n'est pas la solution** : mot plus long, plus abstrait et plus rare que *motif*. On remplacerait un mot ambigu par un mot inconnu.

**Ma recommandation** — garder *motif* comme terme officiel, mais **le gloser à sa première occurrence** et l'ancrer sur une image concrète, puis l'ajouter au glossaire :
→ ch2, l. 90 : **« … elle repère des motifs, c'est-à-dire des choses qui reviennent souvent … »**
→ glossaire : **« Motif — Quelque chose qui revient plusieurs fois, comme les rayures d'un pull ou la même erreur qu'on refait toujours. L'IA est très forte pour repérer les motifs dans une montagne de données. »**
Une fois glosé, *motif* peut rester tel quel aux l. 107, 141, 159 et 225. En variante, là où le mot n'est pas mis en avant (l. 107), la formule la plus claire pour un CE1 reste **« Elle repère ce qui revient souvent »**.

### 4.5 Autres incohérences terminologiques

**SHOULD-FIX — « monde physique » vs « environnement physique »**
Ch1, l. 61 : titre de panneau « **Monde physique** ». Ch1, l. 58 : « aussi appelé **l'environnement physique** ». Ch4, l. 182 : « dans **l'environnement physique** ». Deux étiquettes pour un même concept opposé au « monde numérique », dans un chapitre dont c'est l'objet. Choisir **« monde physique »** partout.

**SHOULD-FIX — ch12 : cinq patrons de dénomination pour un seul patron anglais**
L'anglais dit uniformément *AI + métier*. Le français produit : « Médecin **augmenté par** l'IA », « Créateur de jeux vidéo **IA** », « Climatologue **avec** l'IA », « Juriste **en éthique de** l'IA », « Ingénieur alimentaire **IA** », « Enseignant **avec** l'IA », « Artiste **avec** l'IA », « Ingénieur **en sécurité de** l'IA ». Sur une page qu'on parcourt en défilant, cette bigarrure fait perdre le fil.
→ Harmoniser sur **« … avec l'IA »** partout.

**SHOULD-FIX — renvoi ch13 → ch12 rompu**
Ch13, l. 555 : « biologie pour **les médecins de l'IA** ». Renvoi au métier du ch12, nommé « Médecin **augmenté par** l'IA ». Les deux formulations ne se reconnaissent pas, et « les médecins de l'IA » ne veut rien dire (des médecins qui soignent l'IA ?).
→ **« biologie pour les médecins qui travaillent avec l'IA »**

**SHOULD-FIX — ch11, l. 483 : article manquant dans une liste appariée**
Les cinq principes : « ⚖️ **L'**équité », « 🔍 **La** transparence », « 🛡️ **La** sécurité », « 🔒 **Vie privée** », « 🧑‍💻 **Le** contrôle humain ». Le quatrième est le seul sans déterminant.
→ **« 🔒 La vie privée »**

**NICE-TO-HAVE — ch11, l. 495 : « son AI Act »** — le nom officiel français est *le règlement sur l'intelligence artificielle*. Laisser « AI Act » sans glose dans un texte pour enfants francophones est une lacune.
→ **« … a adopté en 2024 son « AI Act », la loi européenne sur l'IA — la première grande loi au monde sur la sécurité de l'IA ! »**

**NICE-TO-HAVE — ch7, l. 302 : « feux de circulation »** — correct et compris dans toute la francophonie ; en France on dit plutôt *feux tricolores* ou *feux rouges*. Si la cible est prioritairement la France, préférer **« gestion des feux rouges »**.

---

## 5. Calques et « traductionese »

Les calques lexicaux les plus lourds sont traités au § 1.2. Restent les calques **de structure** — le français est correct, mais l'ossature est anglaise.

**SHOULD-FIX — ch9, l. 396 et l. 399**
> « Explique à TA façon » · « Avance à ton rythme »

Les autres puces de ces cartes sont des verbes à la 3ᵉ personne dont le sujet implicite est l'IA (« Donne un retour immédiat », « Traduit n'importe quelle langue »). Mais **« Explique »** et **« Avance »** sont formellement identiques à des **impératifs de 2ᵉ personne** — et le contexte les y pousse, puisque le reste du guide tutoie l'enfant à l'impératif (« Vérifie », « Réfléchis », « Sers-toi »). L'enfant lit donc « Explique à ta façon ! » comme un ordre. Ambiguïté **créée** par le passage au français : l'anglais « Explains » / « Works » porte la marque de 3ᵉ personne.
→ **« T'explique à ta façon »** et **« S'adapte à ton rythme »** — le pronom clitique lève l'ambiguïté d'un coup.

**SHOULD-FIX — galerie, l. 253–255**
> « **Crée.** Dessine ton idée de l'IA… · **Photographie.** Prends une photo bien nette… · **Partage.** Envoie-la ci-dessous… »

Calque de « Create it. / Snap it. / Share it. » avec chute du pronom objet. Deux effets : (a) « Crée. » et « Partage. » tout nus sont faibles en français, qui a besoin du complément ; (b) **« Photographie. »** est lu en premier lieu comme le **nom** (*une photographie*), pas comme un impératif — ambiguïté catégorielle qu'un enfant ne résoudra pas.
→ **« Dessine-la. · Prends-la en photo. · Partage-la. »**

**SHOULD-FIX — galerie, l. 257**
> « **Nous ne demandons jamais qu'un** prénom, un âge et un pays — **jamais** de nom de famille… »

Le sens visé est « nous demandons uniquement… ». Il est bien rendu (*ne… que*), mais la collision de *jamais* et de *ne… que* dans la même proposition, suivie d'un second *jamais*, fait hésiter même un adulte : à la première lecture on comprend « il nous arrive de demander plus ». Dans une note de protection de l'enfance, l'ambiguïté est inacceptable.
→ **« Nous demandons uniquement un prénom, un âge et un pays — jamais de nom de famille, d'adresse e-mail ni de localisation précise. »**

**SHOULD-FIX — galerie, l. 257** — « rien ne **paraît** automatiquement » : *paraître* au sens de « être publié » se dit d'un livre, pas d'une image sur un site.
→ **« rien n'est mis en ligne automatiquement »**

**SHOULD-FIX — ch7, l. 315** — « autant de CO₂ que **700 000 km en voiture** » : ellipse anglaise (*as driving a car for…*), il manque le participe.
→ **« … autant de CO₂ que 700 000 km parcourus en voiture »**

**SHOULD-FIX — ch3, l. 138** — « Des humains **indiquent ce qu'est chaque exemple** » : calque de *mark what each example IS*. La complétive avec inversion est du français écrit soutenu appliqué à une phrase de six mots destinée à un enfant.
→ **« Des humains écrivent ce qu'on voit sur chaque image. »**

**NICE-TO-HAVE — ch4, l. 205** — « l'IA invente parfois **des faits** qui sonnent vrai mais qui sont **faux** ». Un *fait* est vrai par définition : accroc logique. Et le quiz Q3 (l. 746) dit, lui, « des **choses** … qui sont **fausses** » — deux formulations pour la même notion, dans un texte et son quiz.
→ Uniformiser sur la formule du quiz : **« l'IA invente parfois des choses qui ont l'air vraies mais qui sont fausses ! »**

**NICE-TO-HAVE — clôture, l. 719** — « sur le projet, l'équipe**,** ou sur la façon de le soutenir ? » : virgule sérielle devant *ou*, ponctuation anglaise.
→ **« sur le projet, l'équipe ou la façon de le soutenir ? »**

**NICE-TO-HAVE — clôture, l. 714/718** — « Et voilà tout le voyage. » : calque de « That's the whole journey. »
→ **« Et voilà, le voyage est terminé. »**

---

## 6. Typographie, orthographe, nombres

### 6.1 Ce qui est bien fait — à conserver

- **Apostrophe** : U+2019 partout, **360 occurrences, aucune apostrophe droite**. Impeccable.
- **Guillemets** : chevrons français U+00AB / U+00BB, 16 paires équilibrées, **aucun guillemet anglais**. Impeccable.
- **Ligature œ** présente là où requise (*cœur*, *œuvres*) ; aucune graphie *oe*.
- **Virgule décimale** : « 1,8 million », « 1,8 milliard », « 0,1 seconde ». Correct.
- **Espace comme séparateur de milliers** : « 1 800 000 000 000 », « 100 000 », « 700 000 », « 12 000 » — les virgules anglaises ont bien été converties. Correct sur le principe (voir 6.3).
- **« 8 bits = 1 octet »** : *octet* et non *byte*. Excellent.
- **« 24 h/24 »**, **« 0,1 seconde »** (singulier après une valeur < 2) : conformes.
- **Casse de phrase** dans les titres, là où l'anglais est en casse de titre. Bon choix français, appliqué sans exception.

### 6.2 L'espace insécable devant `! ? : ;` et dans les guillemets — MUST-FIX

**Le corps du texte ne contient aucune espace insécable.** Vérification faite : le fichier contient 18 caractères U+00A0, **tous** situés dans les chaînes du script du quiz (l. 736–791), et **zéro** caractère U+202F (espace fine insécable) où que ce soit. Les 180 occurrences de `!`, `?`, `:`, `;` et `»` du corps du texte sont précédées d'une **espace ordinaire sécable** (U+0020).

Conséquences concrètes sur un écran de téléphone, support probable :
- « Est-ce que l'IA va dominer le monde \n? » — point d'interrogation seul en début de ligne ;
- « le monde de l'IA \n! » ;
- « Le mot « \nartificielle » » — chevron ouvrant orphelin.

La règle française : **espace fine insécable (U+202F)** avant `!`, `?`, `;`, après `«` et avant `»` ; **espace mots insécable (U+00A0)** avant `:`. Si la chaîne de production ne gère pas U+202F, U+00A0 partout est un repli acceptable — c'est d'ailleurs ce que font déjà les chaînes du quiz, ce qui prouve que la solution est disponible dans le projet et n'a simplement pas été appliquée au corps.

→ **Passe globale sur tout le corps du texte.** Lignes touchées, entre autres : 21, 27, 31, 33, 48, 58, 59, 64–71, 73, 75–77, 79, 87–90, 111, 112, 114, 122, 132, 152, 165, 168, 170, 174, 204–208, 222, 224, 227, 228, 230, 239, 251, 252, 257–259, 282, 284, 295, 315, 361, 362, 366, 412, 413, 426, 468, 476, 484, 489, 491, 495, 503, 509–537, 545, 546, 565, 566, 570, 616, 617, 629, 632, 633, 636, 639–641, 645, 652, 661, 664, 688, 694, 706, 719.

### 6.3 Séparateur de milliers sécable — SHOULD-FIX

Les espaces de « 1 800 000 000 000 » (l. 174), « 100 000 milliards » (l. 174), « 700 000 km » (l. 315), « 12 000 images » (l. 366) et « 1 800 milliards » (l. 173, 174) sont toutes des espaces **ordinaires**. Un nombre coupé en fin de ligne (« 1 800 000 \n 000 000 ») est illisible, et ces nombres sont précisément l'effet de manche du chapitre.
→ Remplacer par **U+202F** (ou U+00A0) dans tous les grands nombres.

### 6.4 Le rendu de « 1.8 trillion » — jugement demandé

**« 1 800 milliards » est le bon choix. À conserver.** Justification :
- L'écueil du *trillion* est évité : en français, *trillion* vaut 10¹⁸, soit un million de fois trop. Écrire « 1,8 trillion » aurait été un faux ami majeur, et le traducteur ne l'a pas commis. À porter à son crédit.
- L'autre option correcte, **« 1,8 billion »** (échelle longue française, 10¹²), est un piège pour l'enfant comme pour l'adulte : *billion* est le faux ami numérique le plus fréquent du français, et un enfant de 9 ans ne connaît pas ce mot.
- « 1 800 milliards » ne demande à l'enfant de connaître que **milliard**, mot qu'il rencontre par ailleurs dans le même chapitre (« des milliards de neurones », l. 166). C'est la formulation la plus économique cognitivement.

**MAIS elle crée un problème de quiz** — voir § 7.1.

### 6.5 Points de détail

- **NICE-TO-HAVE, l. 413/417 :** « la **COVID-19** ». L'usage français établi est **« la Covid-19 »**, en bas de casse hors de l'initiale. La forme tout en capitales est la graphie anglaise de l'OMS.
- **NICE-TO-HAVE, l. 790 vs 791 :** « **B**onne réponse : » et « bonne réponse : » dans deux chaînes voisines. Uniformiser.
- **NICE-TO-HAVE, l. 186 :** le tiret demi-cadratin `–` des listes matériel/logiciel coexiste avec le cadratin `—` du reste du texte. Uniformiser sur le cadratin.
- **Artefacts d'extraction (à ignorer)** : les espaces avant point aux l. 88, 170, 258 proviennent de balises inline et existent aussi dans le fichier anglais.

---

## 7. Le quiz final (10 questions) et les quiz de chapitre

### 7.1 Quiz de chapitre — deux questions dont la forme trahit la réponse

**MUST-FIX — ch3, l. 171–173**
> `Environ 1,8 million` · `Environ 1,8 milliard` · `Environ 1 800 milliards`

En anglais, les trois options forment une échelle parfaitement parallèle : *1.8 million / 1.8 billion / 1.8 trillion*. La forme ne dit rien, seule la connaissance tranche. **En français, le parallélisme est rompu** : deux options commencent par « 1,8 » et une seule par « 1 800 ». L'intrus formel est la bonne réponse. Un enfant de 10 ans qui a fait trois QCM dans sa vie coche la troisième sans avoir lu le chapitre. Le passage au français a transformé une question de connaissance en question de forme.
→ Restaurer un jeu d'options où la forme ne désigne personne, en gardant « 1 800 milliards » (qui reste le meilleur rendu, § 6.4) :
**`Environ 2 millions` · `Environ 90 milliards` · `Environ 1 800 milliards`**
(Les deux distracteurs restent faux pour une raison visible : ordres de grandeur nettement plus petits, et le texte de réponse explique l'écart.)

**SHOULD-FIX — ch13, l. 567–569**
> `Savoir programmer` · `Apprendre des faits par cœur` · `La curiosité et la créativité`

Même défaut, en syntaxe : deux groupes infinitifs, puis un groupe nominal — l'intrus formel est encore la bonne réponse.
→ **`Savoir programmer` · `Apprendre des choses par cœur` · `Être curieux et créatif`**

### 7.2 Quiz de chapitre — problèmes de formulation

- **MUST-FIX, ch14, l. 617** : formulation impraticable (« Outre… quelle maladie les scientifiques pensent-ils que… »). Voir § 2.2.
- **MUST-FIX, ch10, l. 464** : « pour imiter quelle voix et voler des millions ? » — interrogatif enchâssé illisible. Voir § 2.2.
- **SHOULD-FIX, ch11, l. 491** : « **Qu'a adopté** l'Union européenne en 2024 ? » — inversion complexe, registre écrit. → **« Qu'est-ce que l'Union européenne a voté en 2024 ? »**
- **SHOULD-FIX, ch15, l. 643** : `Elle avait été entraînée uniquement sur des CV d'ingénieurs hommes` — de loin l'option la plus longue et la plus détaillée des trois : longueur = indice. En prime, « des CV d'ingénieurs hommes » est une séquence nominale mal formée. → **« On lui avait montré seulement des CV d'hommes »** (les trois options retrouvent une longueur comparable).
- **SHOULD-FIX, ch5, l. 239** : « quelle est la chose qu'elle NE PEUT toujours PAS faire ? » Voir § 2.2.

**Validité logique** : les quiz de chapitre ont chacun **une seule réponse défendable**, et les distracteurs sont faux pour une raison qu'un enfant peut reconstruire. **Aucune option incorrecte n'est rendue défendable par la formulation française.** Bon résultat.

### 7.3 Le quiz final (10 questions)

**Une seule réponse défendable partout — validé.** Les dix questions et leurs trente options ont été vérifiées : aucun distracteur ne devient défendable en français, aucune ambiguïté d'accord ou de référence.

Points positifs :
- **Q1** (`Internet automatique` / `Intelligence artificielle` / `Interface avancée`) : les trois options conservent les initiales **I-A**, exactement comme l'anglais conserve A-I. C'est une adaptation, pas une traduction, et elle est très réussie.
- **Q6** : « Une fausse vidéo, photo ou voix qui a l'air **vraie** » — les trois noms coordonnés étant tous féminins, l'accord de l'adjectif ne pose aucun problème. Bien vu.
- **Q8** et **Q10** : distracteurs volontairement absurdes (`À piloter des avions`, `À faire la cuisine`) — bon registre pour ce niveau.

Trois réserves :

**SHOULD-FIX — Q9, l. 776–779**
> « Que veut dire « **trop compter sur l'IA** » ? » → « L'utiliser tellement qu'on arrête de réfléchir par soi-même »

En anglais, la question teste un terme opaque (*Over-Reliance*) qu'il faut avoir appris. **En français, l'expression retenue est transparente** : « trop » annonce l'excès, « compter sur » annonce la dépendance. La question ne teste plus rien : elle se répond par analyse du libellé. C'est le cas d'une question dont la formulation française donne la réponse.
Le remède n'est pas de retraduire le terme (« trop compter sur l'IA » est excellent, bien meilleur que *sur-dépendance*), mais de changer ce que la question mesure :
→ **« Que se passe-t-il si tu comptes trop sur l'IA ? »**
→ `Tu apprends plus vite` · **`Tu risques d'arrêter de réfléchir par toi-même`** · `Tu deviens meilleur en orthographe`

**SHOULD-FIX — Q3, l. 746**
> « Comment appelle-t-on le fait qu'une IA invente des choses qui sonnent vrai mais qui sont fausses ? »

20 mots, trois relatives enchâssées : question la plus lourde du quiz final. Et le mot testé, **hallucination**, ne figure **pas au glossaire** (§ 8).
→ **« Comment appelle-t-on une réponse d'IA qui a l'air vraie, mais qui est fausse ? »**

**NICE-TO-HAVE — Q2, l. 741**
> « Comment appelle-t-on les informations **dont** une IA apprend ? » — *dont* est correct, mais la relative à pronom relatif complexe est un cran au-dessus du reste du quiz.
→ **« Comment appelle-t-on les informations qu'une IA utilise pour apprendre ? »**

**Couverture** : le quiz interroge le ch2, le ch4, le ch10, le ch11, le ch15 et le glossaire. Il **n'interroge rien du ch3** — apprentissage automatique, apprentissage profond, réseaux de neurones, motifs — qui est pourtant le chapitre conceptuel central. Si une onzième question était envisagée :
→ **« Comment appelle-t-on la façon dont l'IA apprend à partir de milliers d'exemples ? »** → `L'apprentissage automatique` · `La programmation` · `Le téléchargement`

---

## 8. Le glossaire

### 8.1 Le classement n'est pas alphabétique en français — MUST-FIX

L'ordre du glossaire français est celui de l'anglais, entrée pour entrée : *Artificial Intelligence, Aviation, ChatGPT, Deepfake, Defence, Fake News, Food Engineer, Humanities, MRI, Over-Reliance, Privacy* — alphabétique en anglais. Traduites, les entrées deviennent :

> Intelligence artificielle · Aviation · ChatGPT · Deepfake · Défense · Fausses informations · Ingénieur alimentaire IA · Sciences humaines · Imagerie par résonance magnétique · Trop compter sur l'IA · Vie privée

C'est-à-dire **I, A, C, D, D, F, I, S, I, T, V**. Un glossaire n'a qu'une fonction : permettre de retrouver un mot. Celui-ci ne le permet pas. Un enfant qui cherche « Imagerie par résonance magnétique » le trouvera en neuvième position, après « Sciences humaines ». Défaut fonctionnel, pas cosmétique.

→ **Reclasser dans l'ordre alphabétique français :**
> Aviation · ChatGPT · Deepfake · Défense · Fausses informations · Imagerie par résonance magnétique (IRM) · Ingénieur alimentaire IA · Intelligence artificielle (IA) · Sciences humaines · Trop compter sur l'IA · Vie privée

### 8.2 Une définition circulaire — SHOULD-FIX

**Intelligence artificielle (IA)**, l. 679 :
> « **Un type d'intelligence créé par les humains**, qui aide les ordinateurs à apprendre, à réfléchir et à résoudre des problèmes — comme un cerveau numérique très rapide et très travailleur. »

L'entrée ouvre en redisant le terme (*intelligence… créé par les humains* = *intelligence artificielle*), ce qui n'apprend rien. C'est la définition la plus importante du glossaire, et la seule qui ne soit pas plus simple que son entrée. Elle fait en outre 30 mots.
→ **« Des ordinateurs assez malins pour apprendre, comprendre et résoudre des problèmes presque tout seuls. Ce sont des humains qui les fabriquent — c'est pour ça qu'on dit « artificielle ». »**

### 8.3 Les autres définitions — validées

| Entrée | Verdict |
|---|---|
| Aviation | ✔ « La science qui permet de faire voler les avions. » Nette, plus simple. |
| ChatGPT | ✔ « en devinant les meilleurs mots à dire ensuite » — excellente vulgarisation. |
| Deepfake | ✔ Simple et opérationnelle. |
| Défense | ✔ « Protéger les personnes et les pays. » |
| Fausses informations | ✔ « Une information fausse présentée comme vraie. » |
| Imagerie par résonance magnétique (IRM) | ✔ « Un examen médical qui prend des images de l'intérieur de ton corps. » Écart maximal entre terme et glose : usage exemplaire d'un glossaire. |
| Ingénieur alimentaire IA | ✔ sur le fond ; l'**intitulé** empile trois substantifs (§ 4.5). |
| Sciences humaines | ✘ apposition fautive (§ 1.1) + intitulé discutable (§ 2.1). |
| Trop compter sur l'IA | ✔ mais légèrement circulaire (*compter* dans le terme et dans la définition) et transparent au point de rendre la Q9 du quiz inutile (§ 7.3). |
| Vie privée | ✔ Claire et concrète. |

### 8.4 Ce que le glossaire promet et ne tient pas — SHOULD-FIX

L. 676 : « Des définitions bien pratiques pour **tous les mots de l'IA** croisés en chemin. »

Le glossaire contient onze entrées, dont **Aviation**, **Défense** et **Ingénieur alimentaire IA** — trois termes accessoires. Il ne contient **aucun** des termes techniques que le corps du texte met en capitales comme mots à retenir :

| Terme absent | Où il est présenté comme mot-clé |
|---|---|
| **DONNÉES** | ch2, l. 90 (capitales) ; ch3 ; **quiz final Q2** |
| **Motif** | ch2, l. 90 ; ch3, l. 107, 141, 159 ; ch5, l. 225 — 5 occurrences, jamais expliqué (§ 4.4) |
| **APPRENTISSAGE AUTOMATIQUE** | ch3, l. 132 (capitales, nom du processus) |
| **Apprentissage profond / deep learning** | ch3, l. 165, 168 (capitales) |
| **Hallucination** | ch4, l. 205 (gras) ; **quiz final Q3** — le quiz teste un mot que le glossaire ignore |
| **Biais / biaisé** | ch6, l. 270 ; ch10, l. 441 ; ch15, l. 639 |
| **Modèle** | ch3, l. 140, 143, 150 ; ch7, l. 315 |
| **Paramètre** | ch3, l. 170, 174 |

Deux de ces mots (**données**, **hallucination**) sont directement interrogés au quiz final. Un enfant qui se trompe et veut vérifier ne trouvera rien. La lacune existe déjà en anglais, mais elle est plus grave en français, où *motif* et *modèle* sont ambigus et où *biais* est un mot rare pour un enfant.

→ **Ajouter au minimum six entrées** (à leur place alphabétique) :

> **Apprentissage automatique** — La façon dont une IA apprend : on lui montre des milliers d'exemples, et elle finit par comprendre toute seule. En anglais, on dit *machine learning*.
>
> **Apprentissage profond** — Un apprentissage automatique avec beaucoup de couches de neurones artificiels, les unes derrière les autres. Plus il y a de couches, plus l'IA apprend des choses compliquées. En anglais, on dit *deep learning*.
>
> **Biais** — Quand une IA a appris sur des exemples déséquilibrés, elle devient injuste sans le faire exprès. Par exemple, si on ne lui montre que des ingénieurs hommes, elle croit qu'une femme ne peut pas être ingénieure.
>
> **Données** — Toutes les informations qu'on donne à une IA pour qu'elle apprenne : des photos, des mots, des nombres, des sons.
>
> **Hallucination** — Quand une IA invente une réponse qui a l'air vraie, mais qui est complètement fausse. Elle n'en a pas conscience : c'est à toi de vérifier !
>
> **Motif** — Quelque chose qui revient plusieurs fois, comme les rayures d'un pull ou la même erreur qu'on refait toujours. L'IA est très forte pour repérer les motifs dans une montagne de données.

---

## 9. Ce qu'il faut conserver

Pour que la passe de réécriture ne détruise pas ce qui marche :

- Toute la typographie de base : apostrophes courbes, chevrons, ligature œ, casse de phrase dans les titres.
- Le tutoiement du corps et le vouvoiement du bloc parents.
- Les répliques d'ouverture des personnages (« Coucou, c'est Ronan », « C'est Anish — celle-là, elle est pour moi ! », « Sers-toi aussi de ta tête ! »).
- Les options I-A du quiz Q1.
- « octet », « apprentissage automatique », « 1 800 milliards » (et le refus de *trillion*).
- « Création à quatre mains, humain et IA », « L'IA n'a ni cœur ni conscience — NOUS, si. », « Sortir des sentiers battus », « Robots pizzaïolos », « Aïe, ça se complique », « Et ça marche, tout simplement ! ».
- Le choix de la formulation centrée sur la personne : « Lit les textes à voix haute pour **les personnes aveugles** » (l'anglais dit « for blind »). La VF est meilleure que sa source.

---

*Fin du rapport.*
