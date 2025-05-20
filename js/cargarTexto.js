function cargarTexto(cap) {
    let archivo = "CAP"+cap+".txt";
    fetch(archivo)
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar el archivo');
            return response.text();
        })
        .then(texto => {
            const lineas = texto.split('\n');
            const htmlProcesado = lineas.map(linea => {
                linea = linea.trim();

                if (linea.startsWith('*')) {
                    const contenido = linea.slice(1).trim();
                    return `<p style="text-align: center; font-weight: bold;">${contenido}</p>`;
                } else if (linea.startsWith('_')) {
                    const contenido = linea.slice(1).trim();
                    return `<p style="font-weight: bold;">${contenido}</p>`;
                }else if (linea.startsWith('/')) {
                    const contenido = linea.slice(1).trim();
                    return `<p style="font-weight: bold; color:red">${contenido}</p>`;
                }
                else if (linea.startsWith('\\')) {
                    const contenido = linea.slice(1).trim();
                    return `<p style="text-align: center;font-weight: bold; color:red">${contenido}</p>`;
                } else {
                    return `<p>${linea}</p>`;
                }
            }).join('\n');

            document.getElementById('contenido').innerHTML = htmlProcesado;
        })
        .catch(error => {
            document.getElementById('contenido').textContent = 'Error: ' + error.message;
        });
}

cargarTexto(1);