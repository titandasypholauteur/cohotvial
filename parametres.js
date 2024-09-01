var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>paramètres</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function handleQRCode() {'+
'            alert(\'Lien vers le QR code pour connecter votre compte.\');'+
'        }'+
''+
'        function handleNotifications() {'+
'            alert(\'Gérer les notifications et les courriels de la plateforme.\');'+
'        }'+
''+
'        function handleProfileVisibility() {'+
'            alert(\'Changer la visibilité de votre profil.\');'+
'        }'+
''+
'        function handleContactInfo() {'+
'            alert(\'Modifier vos informations de contact.\');'+
'        }'+
''+
'        function handlePrivacyPolicy() {'+
'            alert(\'Consulter la politique de confidentialité.\');'+
'        }'+
''+
'        function handleLogout() {'+
'            alert(\'Vous êtes déconnecté.\');'+
'            window.location.href = \'index.html\';'+
'        }'+
''+
'        function handleCloseAccount() {'+
'            const confirmation = confirm(\'Êtes-vous sûr de vouloir clôturer votre compte ? Cette action est irréversible.\');'+
'            if (confirmation) {'+
'                alert(\'Votre compte a été clôturé.\');'+
'                window.location.href = \'index.html\';'+
'            }'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'<main>'+
'    <ul>'+
'        <li>'+
'            <section>'+
'                <button onclick="handleQRCode()">QR code</button>'+
'            </section>'+
'        </li>'+
'        <li>'+
'            <section>'+
'                <button onclick="handleNotifications()">Notifications</button>'+
'            </section>'+
'        </li>'+
'        <br />'+
'        <section style="text-align: left;">'+
'            <button><a href="cohotvial_accueil.html">Retour accueil</a></button>'+
'        </section>'+
'        <br />'+
'        <section style="text-align: left;">'+
'            <button><a href="mon_profil.html">Retour profil</a></button>'+
'        </section>'+
'        <br />'+
'        <li>'+
'            <section>'+
'                <button onclick="handleProfileVisibility()">Paramètres et confidentialité</button>'+
'            </section>'+
'        </li>'+
'        <p>'+
'            <button onclick="handleProfileVisibility()">Profil</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="handleContactInfo()">Infos de contact</button>'+
'        </p>'+
'        <p>'+
'            <section>'+
'                <button><a href="verification_profil.html">Vérification de ton profil</a></button>'+
'            </section>'+
'        </p>'+
'        <p>'+
'            <button onclick="handlePrivacyPolicy()">Politique de confidentialité de tes données personnelles</button>'+
'        </p>'+
'        <li>'+
'            <section>'+
'                <button onclick="handleLogout()">Te déconnecter</button>'+
'            </section>'+
'        </li>'+
'        <li>'+
'            <section>'+
'                <button onclick="handleCloseAccount()">Clôturer mon compte</button>'+
'            </section>'+
'        </li>'+
'        <br />'+
'    </ul>'+
'</main>'+
'</body>'+
'</html>';