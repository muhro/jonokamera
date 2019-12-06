const pad2 = (number) => {

  return (number < 10 ? '0' : '') + number;

};

const date = new Date;
const day = pad2(date.getDate());
const month = pad2(date.getMonth() + 1);
const year = pad2(date.getFullYear());
const weekday = pad2(date.getDay());
let lista = document.getElementById('ruokaLista');

document.getElementById('kampuslista').addEventListener('click', function() {

  lista.innerHTML = "";

  let url = 'https://cors-anywhere.herokuapp.com/https://www.sodexo.fi/ruokalistat/output/daily_json/' +
      + event.target.id + '/' + year + '-' + month + '-' + day;

  console.log(day);
  console.log(month);
  console.log(year);
  console.log(url);


  fetch(url).then((response) => {
    if(response.ok) {
      console.log(response.json);
      return response.json();

    }
    else{
      throw new Error('Response not ok');
    }
  }).then((result) => {

    if (result.courses === null){
      lista.innerHTML = "Kampus ei tarjoa tänään lounasta."
    }

    const lunch = result.courses;
    const co = Object.keys(lunch);

    for (let i = 1; i <= co.length; i++) {

      lista.innerHTML += lunch[i].title_fi.bold() + ' / ' + lunch[i].title_en.bold() + ' ' + '<br>' + 'Hinta: ' + lunch[i].price + '<br>' +
          lunch[i].properties + "<br>" + "<br>";
    }


  })

});




