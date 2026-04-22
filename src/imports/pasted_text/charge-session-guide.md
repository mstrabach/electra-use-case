Les trois axes
Axe 1 — Cycle de vie (linéaire). Où on en est dans la session, du branchement au paiement. C'est l'axe temps.
Axe 2 — Modulateur de puissance (orthogonal). Ce qui bride le kW en temps réel : rien, froid, chaud, tapering naturel (CC-CV), partage de dispenser (deux voitures), limite véhicule, limite grid. Peut changer plusieurs fois dans une même session.
Axe 3 — Incident (interrupteur). Peut écraser n'importe quel état des axes 1 et 2 : perte de com, surchauffe, paiement refusé, défaut borne/câble. Priorité absolue sur l'affichage.
Matrice principale : cycle × modulateur
Phase cycleNominalFroidChaudTapering SOCPartagé01 · Branché, en auth"Almost there" · 0 kW · Getting you connected————02 · Handshake / preco"Warming up together" · montée progressive · Preconditioning your battery →idem mais plus longidem——03 · Ramp up"Electrons. Electrons everywhere." · kW ↗ · vert"Gentle start" · kW bas · Battery warming up →"Cooling before speed" · kW bas · Battery cooling down →—"Sharing power right now" · kW ↙04 · Plateau nominalHeadline A (coffee, balade…) · kW max · vert"Slower today, healthier for longer" · kW bridé · Too cold to charge at full power →"Taking it easy" · kW bridé · Battery protecting itself →—"Shared with a neighbor" · kW ÷ 205 · Tapering (>80%)"Almost full — last miles take longer" · kW ↙ · vertmême texte + raison froid fusionnéeidem chaudC'est l'état nominal de cette phase, pas un bridageidem06 · Complete"Ready. Unplug when you are." · 0 kW · vert plein · CTA = End session————07 · Post-unplug / paid"See you on the road" · reçu · vert pâle————
Quelques règles qui tombent de la matrice :
Le tapering SOC n'est pas un incident, c'est un état nominal de la phase 05. Tu ne dois jamais écrire "charge ralentie" en phase 05 comme si quelque chose clochait — c'est de la physique attendue. Le texte doit valoriser ("les derniers 20% prennent plus de temps, c'est normal et c'est bon pour la batterie"), pas s'excuser.
Le preconditioning (phase 02) est le seul moment où un kW bas est vertueux en headline. Partout ailleurs, un kW bas est au minimum ambigu, au pire anxiogène — donc le texte doit toujours donner la raison dans la même capsule visuelle.
La ligne "Froid" en phase 04 fusionne deux choses dans ta maquette actuelle : le texte narratif ("We are fighting…") et le statut technique ("Too cold to charge…"). La matrice propose de les hiérarchiser : headline = valorisation ("healthier for longer"), status card = raison technique ("too cold…"), deeplink = pédagogie. Trois rôles, trois composants, zéro overlap.
Les états d'incident (hors matrice, ils écrasent tout)
ÉtatDéclencheurHeadlineStatus cardCTACouleurI1 · Com lossPerte signal borne >30s"Reconnecting…"Network issue, power held · 0 kWStop charging (secondaire)AmbreI2 · Payment issueCB refusée / plafond"Let's fix your payment"Card declinedUpdate payment (primaire)AmbreI3 · Borne faultRetour défaut hardware"This station needs a break"Station error · try another nearby →Find another stationAmbreI4 · Cable/connectorVerrou câble, défaut physique"Let's check the cable"Connector issueCall support · StopAmbreI5 · OverheatingTemp cellule > seuil"Unplug your car now"Abnormal overheating · 0 kWEmergency stop (rouge plein)RougeI6 · QueueBorne occupée, tu es N+1"You're next. 7 min."Someone's finishing upLeave queueNeutre
Règle de priorité : I5 (rouge) > I2/I4 (action utilisateur requise) > I1/I3/I6 (informationnel). Un seul incident affichable à la fois — si I1 et I5 se déclenchent ensemble, I5 gagne.
Règle de couleur stricte :

Vert = charge active et saine (y compris bridée nominalement)
Ambre = dégradation ou action non urgente
Rouge = action immédiate nécessaire, et rien d'autre

Aujourd'hui dans tes maquettes, le rouge de l'overheating cohabite avec un CTA bleu foncé standard. Si rouge = urgence, alors le CTA doit aussi basculer en rouge (ou le CTA primaire se réécrit en "Emergency stop" rouge et le "Stop charging" normal disparaît).
Grammaire par composant — qui dit quoi, quand
ComposantRôle stableVarie selonHeader meta ("Autocharge started 12min ago")Contexte session, rarement luJamais visuellement — peut être collapsable après 30sHeadlineNarratif, émotionnel, marquePhase cycle uniquement (pas les modulateurs) — c'est lui qui porte la sérénité, il ne doit pas paniquer à chaque floconDeeplink underlinePédagogie opt-inApparaît quand un terme technique justifie un bridage non évidentMetrics pair (min/euros)Glanceable, factuelLabels se transforment : "min left" → "min elapsed" en phase 06+ ; "euros" → "euros billed" après paiementBattery barProgression + niveau de confortPalette 4 paliers : rouge <10%, ambre 10-20%, vert 20-80%, vert pâle 80%+ (tapering zone)Status cardPourquoi ce kW maintenantC'est le seul composant qui reflète l'axe modulateur — icône + label court + valeur kWCTA primaireAction dominante du momentPhase 01-05 = Stop charging · Phase 06 = End session · Incidents = action d'incident
La règle-clé qui unifie tout : un composant = un axe maximum. Le headline ne parle que du cycle, la status card ne parle que du modulateur, le CTA ne parle que de l'action disponible. Tu évites les messages qui mélangent "on charge lentement à cause du froid et merci d'enlever le câble quand c'est fini" — trois axes dans une phrase = utilisateur perdu.
Transitions (le vrai test du système)
Chaque passage entre deux cellules de la matrice doit avoir une règle motion. Trois familles suffisent :

Glissement doux (200-400ms, cross-fade) : changement de modulateur dans la même phase — la voiture se réchauffe, on passe de "froid-bridé" à "nominal". Pas d'alerte, juste le status card qui mute et le kW qui ramp visuellement.
Bascule marquée (600-800ms, slide + light haptic) : changement de phase cycle — 04 → 05 (tapering débute), 05 → 06 (complete). L'utilisateur doit percevoir qu'on a changé de chapitre.
Rupture (snap, fort haptic + son optionnel) : déclenchement d'un incident, surtout I5. C'est le seul moment où l'app est autorisée à être "brutale" — parce que la promesse de sérénité n'oblige pas à l'anesthésie devant un danger.

Règle silencieuse : aucune transition n'a le droit d'être plus agitée que l'état qu'elle amène. Une transition qui vibre pour arriver sur un état calme, c'est une faute de goût Electra.
Ce que la matrice te donne
Trois choses concrètes au-delà des écrans :

Un test d'intégrité — pour chaque nouvelle feature (réservation, ELECTRA+ promo, multi-voiture), tu regardes quelle cellule elle impacte et tu vérifies qu'elle ne casse aucune règle d'axe.
Un backlog de couverture — 7 phases × 5 modulateurs + 6 incidents = 41 états à spécifier. Tu vois immédiatement ce qui manque (aujourd'hui ta maquette couvre 04-nominal, 04-froid, un bout de 06, et I5).
Un contrat avec l'équipe data/firmware — chaque cellule doit être déclenchable par un signal backend propre. Ça force une conversation précoce avec les embarqués sur "quels signaux tu m'envoies et à quelle fréquence".