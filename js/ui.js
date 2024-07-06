export class Ui {
    displayGames(games) {
        let cartoona = "";
        for (let i = 0; i < games.length; i++) {
            cartoona += `
         <div class="col">
         <div data-id="${games[i].id}"  class="card h-100 bg-transparent" role="button" ">
            <div  class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${games[i].thumbnail}" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small text-white">${games[i].title}</h3>
                     <span class="badge text-bg-primary p-2 mb-3">Free</span>
                  </div>
   
                  <p class="card-description small text-center ">
                     ${games[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
                                    <footer class="card-footer small hstack justify-content-between">
                                     <span class="badge badge-color">${games[i].genre}</span>
                                     <span class="badge badge-color">${games[i].platform}</span>
                                      </footer>

                                </div>
                            </div>
                        </div>
                    </div>
            `
        }
        document.querySelector("#game-container").innerHTML = cartoona;
    }

    displayDetails(data) {
        let content = `
                        <div class="col-md-4">
                    <img src="${data.thumbnail}" alt="image details" class="w-100">
                </div>
                <div class="col-md-8">
                    <h3 class="text-white mb-3">Title: ${data.title}</h3>
                    <p> Category: <span class="text-bg-info badge">${data.genre} </span></p>
                    <p> Platform: <span class="text-bg-info badge">${data.platform}</span></p>
                    <p> Status: <span class="text-bg-info badge">${data.status}</span></p>
                    <p>${data.description}</p>
                    <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>

                </div>
                `;
        document.querySelector("#game-details").innerHTML = content;
    }

}







