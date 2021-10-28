const url: string = 'https://icanhazdadjoke.com/';
// const headers = {
//     'Accept': 'application/json',
//  };

// const fetchAcudits = () => {
//     const acudits = fetch(url).then((resp) => console.log(resp));
//     // console.log(acudits)
// } 

const btnNextAcudit: HTMLElement = document.getElementById('nextAcudit')
btnNextAcudit.addEventListener('click', () => {
    // console.log('click');
    
    fetchAcudits();
})

async function fetchAcudits(): Promise<void> {
    console.log('fetchAcudits')
    const fetch: Response = await window.fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // 'user-agent': 'https://github.com/ama161',
        // 'content-type': 'application/json'
      },
    })
  
    const response = await fetch.json();
    console.log(response)
  }