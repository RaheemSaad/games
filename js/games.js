import { Details } from "./details.js";
import { Ui } from "./ui.js";


export class Games {
    constructor(){
        this.getGames("mmorpg");
        document.querySelectorAll(".links a").forEach((link) => {
            link.addEventListener("click",(e) => {
                document.querySelector(".links .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            })
        });
        this.ui = new Ui();
        
    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
           method: "GET",
           headers: {
              "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
              Accept: "application/json",
              "Content-Type": "application/json",
           },
        };
  
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();
        this.ui.displayGames(response)
        this.begin();
        loading.classList.add("d-none");



    }

    begin(){
        document.querySelectorAll(".card").forEach((one) => {
            one.addEventListener("click", () => {
                let id = one.dataset.id;
                this.findDetails(id);
            })
        }

    )
    }

    findDetails(idGame){
        let details =new Details(idGame);
        document.querySelector(".games").classList.add("d-none")
        document.querySelector(".details").classList.remove("d-none")
    }


}