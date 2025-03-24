// src/app/animations/animations.component.ts
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animations',
  standalone: true,
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
  ngOnInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

    // Animazione della sezione eroe
    tl.from(".hero h1", { opacity: 0, y: -50 });
    tl.from(".hero .subheading", { opacity: 0, y: -30 }, "-=0.5");
    tl.from(".navbar a", { opacity: 0, y: -20, stagger: 0.2 }, "-=0.5");

    // Animazione delle scatole e del bottone
    tl.from(".box", { opacity: 0, scale: 0.5, stagger: 0.2, duration: 1.2 });
    tl.to(".animate-button", { scale: 1.2, duration: 0.5, ease: "bounce.out" }, "+=0.5")
      .to(".animate-button", { scale: 1, duration: 0.3 });

    // Animazione delle scatole: rotazione
    tl.to(".box", { rotation: 360, duration: 2, stagger: 0.2 }, "+=0.5");

    // Timeline per animare le linee: scorrimento, rotazione e fade away
    const tlLines = gsap.timeline({ defaults: { duration: 2, ease: "power2.inOut" } });
    tlLines.fromTo(".line",
      { opacity: 1, x: -200, rotation: 0 },
      { opacity: 0, x: 200, rotation: 45, stagger: 0.3 }
    );
    tl.add(tlLines, "+=0.5");

    // Timeline "spettacolare" per animare gli elementi in .spectacular-item
    const tlSpectacular = gsap.timeline({ defaults: { duration: 2, ease: "elastic.out(1, 0.5)" } });
    tlSpectacular.fromTo(".spectacular-item",
      { scale: 0, opacity: 0, rotation: 0 },
      { scale: 1.2, opacity: 1, rotation: 360, stagger: 0.3 }
    );
    tlSpectacular.to(".spectacular-item", { backgroundColor: "#f1c40f", scale: 0.8, rotation: -360, stagger: 0.2 }, "+=0.5");
    tlSpectacular.to(".spectacular-item", { x: 100, y: 50, ease: "back.out(1.7)", stagger: 0.2 }, "+=0.5");
    tl.add(tlSpectacular, "+=0.5");

    // Timeline per animare la lista
    const tlList = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
    tlList.from(".animated-list li", { opacity: 0, x: -100, stagger: 0.2 });
    tl.add(tlList, "+=0.5");

    // Timeline per animare la sezione contatti con fade-in
    const tlContact = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });
    tlContact.from(".contact-section", { opacity: 0, y: 50 });
    tl.add(tlContact, "+=0.5");
  }
}
