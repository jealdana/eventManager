 
let restaurant_list = [
  "Fat Bull's - Gastro House",
  "Pho Ngon (Turun paras PHO)",
  "Deliberi Hansakortteli",
  "Salu - Ramen & Bowls",
  "Taco Nito",
  "Brokadi Kiinalainen Ravintola",
  "Bagel House ",
  "Trattoria Romana",
  "Fontana",
  "China & Thai Palace -Aurajoki",
  "Eliksiiri",
  "Sushi Panda Turku",
  "di Trevi",
  "Tårget",
  "Nobi",
  "Hügge",
  "Hallin Kotikokki",
  "Roots Kitchen",
  "Panini",
  "MAMI",
  "Himalayan kitchen",
  "Tintå",
  "Blanko",
  "Turun Kellariravintola",
  "Panimoravintola Koulu",
  "Pancho Villa Turku",
  "Rioni",
  "Brahen Kellari",
  "Dennis Linnankatu ",
  "Baan Thai *",
  "MorriSon's",
  "Nomad Food & Wine",
  "Pizzeria Via Tribunali",
  "Julinia",
  "Masala",
  "Pub Niska",
  "Intian Helmi",
  "Suomalainen Pohja",
  "Woolshed Turku",
  "Friends & Brgrs Turku",
  "Yasukon keittiö",
  "Bryggman's",
  "Ravintola Teini",
  "Lone Star",
  "Grädda",
  "Maneerat",
  "Viides Näyttämö",
  "Kerttu",
  "Yangtze",
  "Afrodite Taverna ",
  "Grill It!",
  "Nick's Food Design",
  "Ravintola Zhong Hua",
  "Delhi Darbar",
  "Ravintola Kuori (Ei MA)",
  "450*",
  "Chibi Chill Majland",
  "Fiilis Café & Bistro ",
  "Komppeli",
  "Siam Spicy Thai Vegetarian Cuisine",
  "Navetta Kortteliravintola",
  "Meet & Bite",
  "Nerå",
  "VG Wok Kupittaa",
  "China Jade",
  "Ruben - Hotel Kakola",
  "Pippurimylly",
  "Bruno II",
  "Sodexo Old Mill",
  "RantaKerttu",
  "Lang Bakke ",
  "Nooa",
  "Nummis Kebab & Pizzeria",
  "Göran",
  "Kolmas linja",
  "Itsudemo Skanssi",
  "Kirkkopuistonterassi",
  "Oobu (Ei MA)",
  "Vinami",
  "Pajamäen kioski",
];
 
let button = document.getElementById("generate");
button.addEventListener("click", function () {
  //get random numbers
 
  let numbers = [];
  let ball = document.getElementsByClassName("ball");
  let num_of_final_balls = 6;
  let num_of_potential_balls = 81;
 
  while (numbers.length < num_of_final_balls) {
    let random = Math.floor(Math.random() * num_of_potential_balls) + 1;
 
    if (numbers.indexOf(random) == -1) {
      numbers.push(random);
    }
  }
 
  //sort numbers in array
 
  // numbers.sort(function (a, b) {
  //     return a - b;
  // });
 
  //color balls
 
  for (let i = 0; i < ball.length; i++) {
    ball[i].style.backgroundColor = "white";
    ball[i].style.color = "#3d3c3a";
 
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] == parseInt(ball[i].innerHTML)) {
        ball[i].style.backgroundColor = "#fa8b60";
        ball[i].style.color = "white";
      }
    }
  }
 
  //add numbers to history
 
  let history = [];
  let historyDiv = document.getElementById("history");
  let para = document.createElement("p");
  history.push(numbers);
 
  for (let k in history) {
    let node = document.createTextNode(history[k]);
    para.appendChild(node);
    historyDiv.appendChild(para);
  }
 
  //add restaurant winner to winner history
  let restaurant_winner_history = [];
  let restaurant_winner_historyDiv =
    document.getElementById("restaurant_winner");
 
  let winner_para = document.createElement("p");
  let winner_num = numbers[numbers.length - 1];
  restaurant_winner_history.push(restaurant_list[winner_num]);

  //set the current restaurant winner
  let restaurant_winner_header_element = document.getElementById("winner");
  restaurant_winner_header_element.innerText = restaurant_list[winner_num];
 
  for (let k in restaurant_winner_history) {
    let node = document.createTextNode(restaurant_winner_history[k]);
    winner_para.appendChild(node);
    restaurant_winner_historyDiv.appendChild(winner_para);
  }
});
 