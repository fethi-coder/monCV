import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-hobbies',
  templateUrl: './mes-hobbies.component.html',
  styleUrls: ['./mes-hobbies.component.css'],
})
export class MesHobbiesComponent implements OnInit {
  filmEtSerie = [
    {
      url: 'assets/img/foundation.jpg',
      alt: 'serie foundation diffusée sur apple tv',
      paragraphe:
        "Des exilés découvrent que le seul moyen de sauver l'Empire galactique de la destruction est de le défier.",
      urlExt:
        'https://tv.apple.com/fr/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3',
    },
    {
      url: 'assets/img/the-shrink-next-door.jpg',
      alt: 'série the shrink next door diffusée sur apple tv',
      paragraphe:
        'Le célèbre psychiatre Dr Isaac "Ike" Herschkopf suit un patient, Martin "Marty" Markowitz, depuis des années. Au fil du temps, Ike commence à prendre la place de Marty dans la vie de ce dernier allant même jusqu\'à emménager chez Marty et reprendre l\'entreprise familiale des Markowitz.',
      urlExt:
        'https://tv.apple.com/us/show/the-shrink-next-door/umc.cmc.jov1gljmqnux0i15rbqsoyfk',
    },
    {
      url: 'assets/img/westworld.jpg',
      alt: 'série de SF diffusée sur ocs',
      paragraphe:
        "Westworld est un parc d'attractions futuriste peuplé d'androïdes recréant l'univers de l'Ouest américain. Pour les clients, Westworld est l'occasion d'assouvir leurs fantasmes et de laisser libre-cours à leurs pulsions. Mais l'ordre du parc est mis en péril lorsqu'à la suite d'une mise à jour, quelques robots commencent à adopter des comportements imprévisibles",
      urlExt: 'https://www.ocs.fr/programme/pswestworldw0107996',
    },
  ];

  photo = [
    {
      url: '/assets/img/IMG_0322 (2)-min.jpg',
      paragraphe: 'Une photo de nuit sous le pont Raymond Barre',
      adresse:
        'Gerland Lyon  69007 pont Raymond Barre localisation : 45.73193159718477, 4.821274906745919',
    },
    {
      url: '/assets/img/IMG_0299 (2)-min.jpg',
      paragraphe:
        'Chez Trattino, on peut manger, boire, acheter, échanger, découvrir, apprendre,… à la sauce bio, locale, équitable et italienne.',
      adresse:
        '58 Rue Clément Marot, 69007 Lyon localisation:45.73565311898291, 4.837383111473565',
    },
    {
      url: '/assets/img/IMG_0321-min.JPEG',
      paragraphe: 'Une photo de nuit du musée de la Confluence',
      adresse:
        'Gerland Lyon 69007 localisation : 45.73193159718477, 4.821274906745919',
    },
    {
      url: '/assets/img/IMG_0314 (2).jpg',
      paragraphe: "Une photo au parc de la tête d'or",
      adresse:
        'Gerland Lyon 69006 localisation : 45.73193159718477, 4.821274906745919',
    },
    {
      url: '/assets/img/IMG_0061.jpeg',
      paragraphe: 'Une photo de mon Set-up de travail',
      adresse: 'chez moi',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
