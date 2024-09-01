var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>cohotvial</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        // Fonction pour valider le formulaire de connexion'+
'        function validateLoginForm(event) {'+
'            event.preventDefault();'+
'            const pseudo = document.getElementById(\'login-pseudo\').value;'+
'            const password = document.getElementById(\'login-password\').value;'+
''+
'            if (pseudo && password) {'+
'                alert(\'Connexion réussie!\');'+
'                window.location.href = "premiere_paj.html";'+
'            } else {'+
'                alert(\'Veuillez remplir tous les champs.\');'+
'            }'+
'        }'+
''+
'        // Fonction pour valider le formulaire d\'inscription'+
'        function validateSignupForm(event) {'+
'            event.preventDefault();'+
'            const pseudo = document.getElementById(\'signup-pseudo\').value;'+
'            const telephone = document.getElementById(\'signup-telephone\').value;'+
'            const courriel = document.getElementById(\'signup-email\').value;'+
'            const social = document.getElementById(\'signup-social\').value;'+
'            const password = document.getElementById(\'signup-password\').value;'+
'            const confirmPassword = document.getElementById(\'signup-confirm-password\').value;'+
''+
'            if (pseudo && telephone && courriel && social && password && confirmPassword) {'+
'                if (password === confirmPassword) {'+
'                    alert(\'Inscription réussie!\');'+
'                    window.location.href = "message_inscription.html";'+
'                } else {'+
'                    alert(\'Les mots de passe ne correspondent pas.\');'+
'                }'+
'            } else {'+
'                alert(\'Veuillez remplir tous les champs.\');'+
'            }'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <header>'+
'        <h1><center>cohotvial</center></h1>'+
'        <p><center>Le partage et la convivialité entre hôtes locaux et invité.e.s.</center></p>'+
'    </header>'+
'    <main>'+
'        <section>'+
'            <h2>Connexion</h2><br />'+
'            <form id="connexion" class="formulaire" onsubmit="validateLoginForm(event)">'+
'                <fieldset>'+
'                    <p class="champ">'+
'                        <label for="login-pseudo">Pseudo</label>'+
'                        <input id="login-pseudo" name="pseudo" />'+
'                    </p>'+
'                    <div>'+
'                        <label for="login-password">Mot de passe</label>'+
'                        <input type="password" id="login-password" name="password" minlength="8" required />'+
'                    </div>'+
'                </fieldset>'+
'                <button type="submit">Connecte-toi</button>'+
'            </form>'+
'        </section>'+
'        <section>'+
'            <h2>Inscription</h2><br />'+
'            <form id="inscription" class="formulaire" onsubmit="validateSignupForm(event)">'+
'                <fieldset>'+
'                    <p class="champ">'+
'                        <label for="signup-pseudo">Pseudo</label>'+
'                        <input id="signup-pseudo" name="pseudo" />'+
'                    </p>'+
'                    <p class="champ">'+
'                        <label for="signup-telephone">Numéro de téléphone</label>'+
'                        <input id="signup-telephone" name="telephone" />'+
'                    </p>'+
'                    <p class="champ">'+
'                        <label for="signup-email">Courriel</label>'+
'                        <input id="signup-email" name="courriel" />'+
'                    </p>'+
'                    <p class="champ">'+
'                        <label for="signup-social">Réseaux sociaux</label>'+
'                        <select id="signup-social" name="reseausocial">'+
'                            <option value=""></option>'+
'                            <option value="x">X</option>'+
'                            <option value="tiktok">TikTok</option>'+
'                            <option value="youtube">YouTube</option>'+
'                            <option value="insta">Instagram</option>'+
'                        </select>'+
'                    </p>'+
'                    <div>'+
'                        <label for="signup-password">Mot de passe</label>'+
'                        <input type="password" id="signup-password" name="password" minlength="8" required />'+
'                    </div>'+
'                    <div>'+
'                        <label for="signup-confirm-password">Confirme ton mot de passe</label>'+
'                        <input type="password" id="signup-confirm-password" name="confirm-password" minlength="8" required />'+
'                    </div>'+
'                </fieldset>'+
'                <button type="submit">Inscris-toi</button>'+
'            </form>'+
'        </section>'+
'    </main>'+
'</body>'+
'</html>';