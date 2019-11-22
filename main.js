
fetch('ruoka.json').then(response => response.json()).then(safka => {
  console.log(safka, safka.length);

  let koko = safka.slice(0, -2);
  console.log(koko);

  let moi = document.getElementById('moi');
  for (let i = 0; i < safka.length; i++) {
    let ruokan = safka[i].name;
    let ruokah = safka[i].price;

    moi.innerHTML += (' <div class="row">\n' +
        '\n' +
        '        <div class="column left">\n' +
        '         <h1>' + ruokan + '</h2>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="columnh">\n' +
        '         <h1>' + ruokah + '  € </h2>\n' +
        '        </div>\n' +
        '      </div>');
  }
});


