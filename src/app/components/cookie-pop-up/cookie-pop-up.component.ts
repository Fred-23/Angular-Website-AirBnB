import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-pop-up',
  templateUrl: './cookie-pop-up.component.html',
  styleUrls: ['./cookie-pop-up.component.scss']
})
export class CookiePopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Vérifie si le cookie "cookiesAccepted" existe
    if (getCookie("cookiesAccepted")) {
      // Masque la fenêtre pop-up si le cookie est déjà accepté
      const popupElement = document.getElementById("cookie-popup");
      if (popupElement) {
        popupElement.style.display = "none";
      }
    }

    // Ajoute l'écouteur d'événement pour accepter les cookies
    const acceptCookiesButton = document.getElementById("accept-cookies");
    if (acceptCookiesButton) {
      acceptCookiesButton.addEventListener("click", function () {
        // Cache la fenêtre pop-up
        const popupElement = document.getElementById("cookie-popup");
        if (popupElement) {
          popupElement.style.display = "none";
        }

        // Définit un cookie pour enregistrer l'acceptation
        setCookie("cookiesAccepted", "true", 365); // Expire après 365 jours
      });
    }
  }
}

// Les fonctions setCookie et getCookie restent inchangées
function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name: string | any[]) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}
