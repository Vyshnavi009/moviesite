


  const main = document.getElementById("section");
  const form = document.getElementById("form");
  const search = document.getElementById("query");

returnMovies(APILINK)
  function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const div_content = document.createElement('div');
        div_content.setAttribute('class', 'content');
        
        const div_complete = document.createElement('div');
        div_complete.setAttribute('class', 'complete');
        
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');
        
        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        
        const title = document.createElement('h3');
        title.setAttribute('id', 'title');
        
        const center = document.createElement('center');
  
        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;
  
        center.appendChild(image);
        div_content.appendChild(center);
        div_content.appendChild(title);
        div_card.appendChild(div_content);
        div_complete.appendChild(div_card);
  
        main.appendChild(div_complete);
    });
  });
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
      //search.value = "";
  }


});
