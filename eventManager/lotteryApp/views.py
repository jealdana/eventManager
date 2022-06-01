from django.shortcuts import render

from django.views.generic import TemplateView

from random import seed
from random import randint

class home(TemplateView):
    template_name = "landing.html"

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        restaurant_list = [
            "Fat Bull’s – Gastro House",
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
            "Bryggman´s",
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
            "Pajamäen kioski"
        
        ]
        context['restaurant_list'] = restaurant_list
        return context