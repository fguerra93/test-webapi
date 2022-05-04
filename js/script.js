async function traer() {

    const { value: token } = await Swal.fire({
        input: 'text',
        inputLabel: 'Ingrese Token',
        inputPlaceholder: 'Enter the TOKEN'
      })
      
    if (token) {
        
        const response = await fetch(`https://startup.bolsadesantiago.com/api/consulta/TickerOnDemand/getIndices?access_token=${token}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: `{
        }`,
        });

        response.json().then(data => {

            
            if (data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error.message,
                  })
            }else{
                Swal.fire(`Token ingresado: ${token}`)
                let datos = data.listaResult;
                console.log("DATOS", datos);
                tabla(datos);
                grafico(datos);
            }
            
            
        });
    }


   
}


function tabla(datos) {
    contenido = document.querySelector('#contenido')
    contenido.innerHTML = ''
    for(let valor of datos){
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.Nombre }</th>
            <td>${ valor.Valor}</td>
            <td>${ valor.Mayor }</td>
            <td>${ valor.Menor }</td>
        </tr>
        
        `
    }
}

function grafico(datos) {

    let arrayValores = [];
    let arrayLabels = [];
    for(let valor of datos){
        arrayValores.push(valor.Valor);
        arrayLabels.push(valor.Nombre)
    }
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayLabels,
            datasets: [{
                label: 'Valores Índices bursátiles',
                data: arrayValores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
