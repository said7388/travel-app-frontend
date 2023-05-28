import { NavDataTypes } from "../../types";

export const navData: NavDataTypes[] = [
  {
    id: 1,
    title: "Tours",
    route: "tours",
    children: [
      {
        id: 1,
        title: "Active Tours",
        route: "/tours/active-tours",
      },
      {
        id: 2,
        title: "Gastro Tours",
        route: "/tours/gastro-tours",
      },
      {
        id: 3,
        title: "Oneday Tours",
        route: "/tours/oneday-tours",
      },
      {
        id: 4,
        title: "Classic Tours",
        route: "/tours/classic-tours",
      },
      {
        id: 5,
        title: "Fixed date Tour",
        route: "/tours/fixed-date-tour",
      },
      {
        id: 6,
        title: "Themed Tours",
        route: "/tours/themed-tours",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    route: "services",
    children: [
      {
        id: 1,
        title: "Rent A Transport",
        route: "/services/transport",
      },
      {
        id: 2,
        title: "Hotels",
        route: "/services/hotels",
      },
      {
        id: 3,
        title: "Tour Accessories",
        route: "/services/tour-accessories",
      },
      {
        id: 4,
        title: "MICE",
        route: "/services/mice",
      },
    ],
  },
  {
    id: 3,
    title: "Armenia",
    route: "armenia",
    children: [
      {
        id: 1,
        title: "Things to See",
        route: "/armenia/things-to-see",
      },
      {
        id: 2,
        title: "Things to Do",
        route: "/armenia/things-to-do",
      },
      {
        id: 3,
        title: "Food and Drink",
        route: "/armenia/food-and-drink",
      },
      {
        id: 4,
        title: "Useful To Know",
        route: "/armenia/useful-to-know",
      },
      {
        id: 5,
        title: "Events",
        route: "/armenia/events",
      },
      {
        id: 6,
        title: "Brochure",
        route: "/armenia/brochure",
      },
      {
        id: 7,
        title: "Todo In Surrounding",
        route: "/armenia/todo-in-surrounding",
      },
      {
        id: 8,
        title: "Travel Blog",
        route: "/armenia/travel-blog",
      },
    ],
  },
  {
    id: 4,
    title: "About us",
    route: "about-us",
    children: [
      {
        id: 1,
        title: "Who are  you",
        route: "/about-us/who-are-you",
      },
      {
        id: 2,
        title: "How to book a tour",
        route: "/about-us/how-to-book-a-tour",
      },
      {
        id: 3,
        title: "Vacancy",
        route: "/about-us/vacancy",
      },
      {
        id: 4,
        title: "Review",
        route: "/about-us/review",
      },
    ],
  },
];
