const btnFile = document.getElementById('btn_enviar');

btnFile.addEventListener('change', (event) => {
    document.getElementById('name_image').innerText=event.target.files[0].name
});


