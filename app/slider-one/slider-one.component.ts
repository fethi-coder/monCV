import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-slider-one',
  templateUrl: './slider-one.component.html',
  styleUrls: ['./slider-one.component.css'],
})
export class SliderOneComponent implements OnInit {
  spinner: boolean = true;
  image: any;
  zoomImage: any;
  open: boolean = false;
  random: any = [];
  timer: number = 5000;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.caroussel();
    }, this.timer)
    this.open = false;


  }

  miniImg = [
    {
      id: 1,
      name: 'laboutiquemobile.fr',
      language: "langage : Angular, HTML , CSS",
      desc: "descriptif :La société laboutiquemobile.fr m'a proposé ce projet pour fournir un support pour ses clients pour une meilleure visualisation de ces produits.",
      tech: "technique : Création de composent Angular, mise en place directive, utilisation HttpModule, création de chemin de navigation pour la barre de navigation, utilisation de Boostrap .",
      url: '/assets/img/laBoutiqueMobile3.png',
      alt: 'image du site https://laboutiquemobile.fr',
    },
    {
      id: 2,
      name: 'fullstreet',
      language: "langage : Angular, Java, SQL, HTML , CSS",
      desc: "descriptif : Un projet fait pendant ma formation à la Wild Code School pour la société Fullstreet.",
      tech: "technique : Création de composent Angular, JavaMail, Jpa ",
      url: '/assets/img/fullstreet.png',
      alt: 'image du site fullstreet',
    },
    {
      id: 3,
      name: 'parle.fr',
      language: "langage : Angular, Java, SQL",
      desc: "descriptif : Un forum que je développe en ce moment",
      tech: "technique :  Autorisation et authentification Spring Security, mise en place de WebSocket, enregistrement de l'ensemble en base de donnée innoDB",
      url: '/assets/img/parle.png',
      alt: 'image du site parle.fr',
    },
    {
      id: 4,
      name: 'laboutiquemobile.fr',
      language: "langage : Angular, HTML , CSS",
      desc: "descriptif : La société laboutiquemobile.fr m'a proposé ce projet pour fournir un support pour ses clients pour une meilleure visualisation de ces produits.",
      tech: "technique : Création de composent Angular, mise en place directive, utilisation HttpModule, création de chemin de navigation pour la barre de navigation, utilisation de Boostrap.",
      url: '/assets/img/laBoutiqueMobile2.png',
      alt: 'image du site https://laboutiquemobile.fr',
    },
  ];



  detail(event: any): void {
    if (event == "") {
      this.open = false;
      console.log("vide");
    } else {
      this.open = true;
      this.zoomImage = event
    }
  }


  //réglage image du slider
  caroussel() {
    this.spinner = false
    let nBproduit = this.miniImg.length;
    if (this.random.length < nBproduit) {
      this.random.push(1)
    } else {
      this.random = ["1"]
    }
    let traite = this.miniImg.filter(
      (element: { id: number }) =>
        element.id == this.random.length
    );
    this.image = traite;
  }


  close() {
    this.open = false
  }


}

