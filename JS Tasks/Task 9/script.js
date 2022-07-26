/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    console.log(typeof this.title, typeof this.director, typeof this.budget);
  }
  wasExpensive() {
    if (
      typeof this.title !== "string" ||
      typeof this.director !== "string" ||
      typeof this.budget !== "number"
    ) {
      console.log("Suveskite teisingus duomenis");
    } else if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const movie1 = new Movie("Fantastic Beasts", "David Yates", 200000000);
console.log(movie1);
console.log(movie1.wasExpensive());

const movie2 = new Movie("The Blair Witch Project", "Daniel Myrick", 750000);
console.log(movie2);
console.log(movie2.wasExpensive());

const movie3 = new Movie("Sex and the city", 25, 65000000);
console.log(movie3);
console.log(movie3.wasExpensive());
