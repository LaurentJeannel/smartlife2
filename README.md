# smartlife2
 version off line

Cette méthode nécessite que vous créiez un compte développeur sur iot.tuya.com . Peu importe si le ou les appareils sont actuellement enregistrés dans l'application Tuya Smart ou l'application Smart Life ou non.

Créez un nouveau compte sur iot.tuya.com et assurez-vous d'être connecté. Sélectionnez États-Unis comme pays lors de votre inscription. Cela semble ignorer une étape de vérification obligatoire .

Allez dans Cloud -> Développement dans le tiroir de navigation de gauche. Si vous ne l'avez pas déjà fait, vous devrez "acheter" le plan d'essai avant de pouvoir passer à cette étape. Vous n'aurez pas à ajouter de mode de paiement et l'achat est sans frais. Une fois dans l'onglet Projets, cliquez sur "Créer". Assurez-vous de sélectionner "Smart Home" pour le champ "Industrie" et la méthode de développement. Sélectionnez votre pays d'utilisation dans l'option d'accès à la localisation et n'hésitez pas à ignorer l'option de services dans la fenêtre suivante. Après avoir créé un nouveau projet, cliquez dessus. "Access ID/Client ID" et "Access Secret/Client Secret" sont les valeurs API Key et API Secret nécessaires à l'étape .

Allez dans Cloud -> Développement -> "MyProject" -> Service API -> "Aller à autoriser". "Sélectionner l'API"> cliquez sur s'abonner sur "IoT Core", "Autorisation" et "Smart Home Scene Linkage" dans la liste déroulante. Cliquez à nouveau sur s'abonner sur chaque service (vérifiez également votre bloqueur de PopUp). Cliquez sur "édition de base" et "acheter maintenant" (l'édition de base est gratuite). Vérifiez si les 3 services sont répertoriés sous Cloud -> Projets -> "MyProject" -> API. Sinon, cliquez sur "Ajouter une autorisation" et sélectionnez-les.

Allez dans Cloud -> Développement et cliquez sur le projet que vous avez créé précédemment. Cliquez ensuite sur l'onglet "Appareils". Cliquez sur l'onglet "Lier le compte de l'application Tuya" et sélectionnez le bon centre de données dans le menu déroulant en haut à droite (par exemple, l'Amérique de l'Ouest).

Cliquez sur "Ajouter un compte d'application" et scannez le code QR à partir de l'application de votre smartphone/tablette en accédant à l'onglet "Moi" de l'application et en appuyant sur un bouton QR code / Scan en haut à droite. Votre compte sera maintenant lié.



/////////////////

le fichier wizard.js est à remplacer dans : C:\JarvisIA\plugins\smartlife2\cli\lib

cliquer sur nodevars-Raccourci et rentrer les valeurs

lancer Jarvis

phrase d'appel dans le xml

!! Jarvis à la racine du dique c
si non, modifier nodevars-raccourci et nodevarstuya.bat et wizzard.js

!! les objets doivent etre allimentés lors du lancement de Jarvis