var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>pseudo</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function displayUploadedImages(event) {'+
'            const imageContainer = document.getElementById(\'imageContainer\');'+
'            imageContainer.innerHTML = \'\';'+
'            const files = event.target.files;'+
''+
'            for (const file of files) {'+
'                const reader = new FileReader();'+
'                reader.onload = function(e) {'+
'                    const img = document.createElement(\'img\');'+
'                    img.src = e.target.result;'+
'                    img.alt = \'Uploaded image\';'+
'                    img.width = 400;'+
'                    img.height = 341;'+
'                    imageContainer.appendChild(img);'+
'                };'+
'                reader.readAsDataURL(file);'+
'            }'+
'        }'+
''+
'        function editBio() {'+
'            const bio = document.getElementById(\'bio\');'+
'            const bioText = bio.textContent;'+
'            const input = document.createElement(\'textarea\');'+
'            input.id = \'bioInput\';'+
'            input.value = bioText;'+
'            bio.innerHTML = \'\';'+
'            bio.appendChild(input);'+
''+
'            const saveButton = document.createElement(\'button\');'+
'            saveButton.textContent = \'Enregistrer\';'+
'            saveButton.onclick = saveBio;'+
'            bio.appendChild(saveButton);'+
'        }'+
''+
'        function saveBio() {'+
'            const bio = document.getElementById(\'bio\');'+
'            const input = document.getElementById(\'bioInput\');'+
'            bio.textContent = input.value;'+
'        }'+
''+
'        function logout() {'+
'            alert(\'Vous êtes déconnecté.\');'+
'            window.location.href = \'index.html\';'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <h1 style="text-align: center;">pseudo</h1>'+
'    <section style="text-align: left;">'+
'        <input type="file" name="photo[]" accept="image/*" multiple onchange="displayUploadedImages(event)" required>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="cohotvial_questcequecest.html">cohotvial qu\'est-ce que c\'est ?</a></button>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="premiere_paj.html">retour accueil</a></button>'+
'    </section>'+
'    <section style="text-align: right;">invitations DM notifications</section>'+
'    <section style="text-align: right;">'+
'        <button><a href="parametres.html">paramètres</a></button>'+
'    </section>'+
'    <main>'+
'        <p style="text-align: center;">mes hôte.sse.s mes invité.e.s</p>'+
'        <p style="text-align: center;">note</p>'+
'        <p style="text-align: center;">commentaires</p>'+
'        <p style="text-align: center;" id="bio">ma bio</p>'+
'        <section style="text-align: center;">'+
'            <button onclick="editBio()">modifier</button>'+
'        </section>'+
'        <div id="imageContainer" style="text-align: center;"></div>'+
'        <section style="text-align: center;">'+
'            <button onclick="logout()">Te déconnecter</button>'+
'        </section>'+
'    </main>'+
'</body>'+
'</html>';