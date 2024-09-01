var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>cohotvial</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        // Fonction pour valider les champs de destination et centres d\'intérêt'+
'        function validateForm() {'+
'            const destination = document.getElementById(\'destination\').value;'+
'            const ctrinteret = document.getElementById(\'ctrinteret\').value;'+
''+
'            if (!destination || !ctrinteret) {'+
'                alert(\'Veuillez remplir tous les champs.\');'+
'                return false;'+
'            }'+
'            return true;'+
'        }'+
''+
'        // Fonction pour la déconnexion'+
'        function logout() {'+
'            alert(\'Vous êtes déconnecté.\');'+
'            // Redirection vers la page d\'accueil ou de connexion'+
'            window.location.href = \'index.html\';'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <header>'+
'        <h1 style="text-align: center;">cohotvial</h1>'+
'        <section style="text-align: center;">'+
'            <button><a href="cohotvial_questcequecest.html">cohotvial qu\'est-ce que c\'est ?</a></button>'+
'        </section>'+
'        <section style="text-align: right;">invitations DM notifications</section>'+
'        <section style="text-align: right;">'+
'            <button><a href="parametres.html">paramètres</a></button>'+
'        </section>'+
'        <section style="text-align: center;">'+
'            <button><a href="mon_profil.html">Ton profil</a></button>'+
'        </section>'+
'    </header>'+
'    <main>'+
'        <p>Nous t\'aidons à trouver ton hôte.sse et/ou ton invité.e.</p><br />'+
'        '+
'        <form onsubmit="return validateForm()">'+
'            <p class="champ">'+
'                <label for="destination">Destination</label>'+
'                <input id="destination" name="destination" />'+
'            </p>'+
''+
'            <div>'+
'                <label for="ctrinteret">centres d\'intérêt</label>'+
'                <input type="text" id="ctrinteret" name="ctrinteret" minlength="4" required />'+
'            </div><br />'+
'            <button type="submit">Rechercher</button>'+
'        </form>'+
''+
'        <table>'+
'            <tr>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'            </tr>'+
'            <tr>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'            </tr>'+
'            <tr>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'            </tr>'+
'            <tr>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'            </tr>'+
'        </table><br />'+
'        '+
'        <section style="text-align: center;">'+
'            <button onclick="logout()">Te déconnecter</button>'+
'        </section>'+
'    </main>'+
'</body>'+
'</html>';