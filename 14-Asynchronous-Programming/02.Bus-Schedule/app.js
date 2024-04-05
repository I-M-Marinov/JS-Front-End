function solve() {

    const targetUrl = "http://localhost:3030/jsonstore/bus/schedule";
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const infoElement = document.querySelector('.info');
    let currentStop = 'depot'; // default is depot
    let nextStop = ''; 

    async function depart() {

            fetch(`${targetUrl}/${currentStop}`)
            .then(res => res.json())
            .then(currentStopData => {
                infoElement.textContent = `Next stop ${currentStopData.name}`;
                nextStop = currentStopData.next;
            })
            .catch(error => console.log(error));       
        }

        departButtonElement.addEventListener('click', () => {

            departButtonElement.setAttribute("disabled", "true");
            arriveButtonElement.removeAttribute("disabled");

        });
    
    async function arrive() {

            fetch(`${targetUrl}/${currentStop}`)
            .then(res => res.json())
            .then(arrivedStopData => {
                infoElement.textContent = `Arriving at ${arrivedStopData.name}`;
                currentStop = nextStop;
            })
            .catch(error => console.log(error));
        };

        arriveButtonElement.addEventListener('click', () => {

            arriveButtonElement.setAttribute("disabled", "true");
            departButtonElement.removeAttribute("disabled");

        });


    return {
        depart,
        arrive
    };
}

let result = solve();
