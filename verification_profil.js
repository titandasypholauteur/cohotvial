var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>Vérification de ton profil</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function verifyEmail() {'+
'            const email = prompt("Veuillez entrer votre courriel pour vérification:");'+
'            if (email) {'+
'                alert(`Un courriel de vérification a été envoyé à ${email}.`);'+
'            }'+
'        }'+
''+
'        function verifyPhone() {'+
'            const phone = prompt("Veuillez entrer votre numéro de téléphone pour vérification:");'+
'            if (phone) {'+
'                alert(`Un code de vérification a été envoyé au ${phone}.`);'+
'            }'+
'        }'+
''+
'        function verifySocialMedia(platform) {'+
'            alert(`Veuillez vérifier votre compte ${platform}.`);'+
'        }'+
''+
'        function verifyIdentity(document) {'+
'            alert(`Veuillez vérifier votre ${document}.`);'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'<main>'+
'    <h2>Vérifions ton profil</h2><br />'+
'    <section>'+
'        <p>'+
'            <button onclick="verifyEmail()">Vérifier courriel</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="verifyPhone()">Vérifier téléphone</button>'+
'        </p>'+
'        <p>Réseaux sociaux</p>'+
'        <p>'+
'            <button onclick="verifySocialMedia(\'Instagram\')">_Instagram</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="verifySocialMedia(\'TikTok\')">_TikTok</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="verifySocialMedia(\'X\')">_X</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="verifySocialMedia(\'YouTube\')">_YouTube</button>'+
'        </p>'+
'        <p>Identité</p>'+
'        <p>'+
'            <button onclick="verifyIdentity(\'carte d\\\'identité\')">_Carte d\'identité</button>'+
'        </p>'+
'        <p>'+
'            <button onclick="verifyIdentity(\'carte bancaire\')">_Carte bancaire</button>'+
'        </p>'+
'    </section>'+
'</main>'+
'</body>'+
'</html>';