import menuFront from "../assets/images/the-grind-menu-front.webp";
import menuBack from "../assets/images/the-grind-menu-back.webp";
import chamoyadaImage from "../assets/images/chamoyada.png";

export const business = {
  name: "The Grind Internet Shop",
  tagline: "A little break. A lot of flavor.",
  phone: "(915) 400-5824",
  phoneHref: "tel:+19154005824",
  email: "thegrindnet@gmail.com",
  street: "309 Red Sun Dr.",
  city: "Chaparral, NM 88081",
  facebookUrl: "", // Add the real Facebook page URL here.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=309%20Red%20Sun%20Dr%2C%20Chaparral%2C%20NM%2088081",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=309%20Red%20Sun%20Dr%2C%20Chaparral%2C%20NM%2088081&z=15&output=embed",
};
export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our story", href: "#about" },
  { label: "Visit us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];
export const hours = [
  ["Monday", "11:00 am – 6:00 pm"],
  ["Tuesday", "11:00 am – 6:00 pm"],
  ["Wednesday", "11:00 am – 5:00 pm"],
  ["Thursday", "11:00 am – 6:00 pm"],
  ["Friday", "11:00 am – 6:00 pm"],
  ["Saturday & Sunday", "Closed"],
];

export const photos = {
  chamoyada: {
    source: chamoyadaImage,
    alt: "Mango Chamoyada with a bright red chamoy swirl",
  },
  fresas: { source: menuFront, alt: "Fresas Con Crema in a tall cup" },
  frappe: {
    source: menuFront,
    alt: "Blended coffee topped with whipped cream and chocolate",
  },
  special: {
    source: menuFront,
    alt: "The Grind Special with ice cream, fruit, and almonds",
  },
  bagel: { source: menuBack, alt: "Bagel sandwich with vegetables and chips" },
  "shaved-ice": {
    source: menuFront,
    alt: "Bright red fruit-flavored shaved ice",
  },
  milkshake: {
    source: menuFront,
    alt: "Creamy milkshake topped with whipped cream",
  },
  papas: { source: menuBack, alt: "Papas Locas served in a tall snack cup" },
};
export const galleryItems = [
  {
    name: "Chamoyada",
    image: "chamoyada",
    description: "Mango or pineapple. Sweet, tangy, and a little spicy.",
    price: "$6.50",
    size: "16 oz",
    category: "Fruit favorites",
  },
  {
    name: "Fresas Con Crema",
    image: "fresas",
    description: "Strawberries and cream, with your choice of topping.",
    price: "$6.50",
    size: "16 oz",
    category: "Something sweet",
  },
  {
    name: "Blended coffee & more",
    image: "frappe",
    description: "Vanilla, mocha, matcha, spiced chai, and more.",
    price: "$6.50",
    size: "16 oz",
    category: "Coffee break",
  },
  {
    name: "The Grind Special",
    image: "special",
    description: "Ice cream, colorful fruit, and a sweet finishing touch.",
    price: "$7.25",
    size: "each",
    category: "Something sweet",
  },
  {
    name: "Bagel sandwich",
    image: "bagel",
    description: "A savory stop between all those sweet treats.",
    price: "$6.50",
    size: "each",
    category: "Savory bites",
  },
  {
    name: "Fruit shaved ice",
    image: "shaved-ice",
    description: "A refreshing scoop of color with natural fruit syrups.",
    price: "$6.50",
    size: "16 oz",
    category: "Cool down",
  },
];
export const services = [
  {
    number: "01",
    title: "Your coffee break",
    description:
      "Hot or iced espresso, lattes, mochas, and blended favorites. A little pick-me-up, your way.",
    link: "#menu-coffee",
    label: "Explore coffee",
  },
  {
    number: "02",
    title: "A sweeter afternoon",
    description:
      "Ice cream, crepes, Fresas Con Crema, and fruit-filled treats worth slowing down for.",
    link: "#menu-sweets",
    label: "Explore treats",
  },
  {
    number: "03",
    title: "Something refreshing",
    description:
      "Chamoyada, Agua Frescas, fruit juices, and Agua Mineral Preparada for a colorful cool-down.",
    link: "#menu-drinks",
    label: "Explore drinks",
  },
  {
    number: "04",
    title: "A savory little bite",
    description:
      "Bagel sandwiches, Papas Locas, breakfast biscuits, and shrimp specialties to satisfy your craving.",
    link: "#menu-savory",
    label: "Explore snacks",
  },
];
export const menuGroups = [
  {
    id: "coffee",
    name: "Coffee & blended drinks",
    subtitle: "Hot, iced, or blended. Make it your kind of break.",
    items: [
      ["Americano", "16 oz $2.99 · 32 oz $4.99"],
      ["Latte", "16 oz $3.99 · 32 oz $5.99"],
      ["Mocha, vanilla, or macchiato", "16 oz $4.50 · 32 oz $6.50"],
      ["Affogato", "$5.25"],
      ["Extra double espresso shot", "$2.00"],
      ["Hot or iced chocolate / tea", "16 oz $3.50 · 32 oz $5.50"],
      [
        "Blended drinks",
        "16 oz $6.50 · 32 oz $10.25",
        "Matcha green tea, spiced chai, vanilla, latte, mocha, or charcoal mocha.",
      ],
      [
        "Milkshakes",
        "16 oz $6.50 · 32 oz $10.25",
        "Choose from available ice cream flavors.",
      ],
      [
        "Ice cream float",
        "16 oz $6.50",
        "Two scoops of ice cream, sweetened condensed milk, cherry, soda, and whipped cream.",
      ],
    ],
  },
  {
    id: "sweets",
    name: "Ice cream & sweet treats",
    subtitle: "Save a little room for something delicious.",
    items: [
      ["Kids’ ice cream cone or cup", "Single $3.15"],
      ["Ice cream cone or cup", "Single $3.75 · Double $5.75 · Triple $7.25"],
      [
        "Ice cream sundae",
        "Single $5.50 · Double $7.25 · Triple $8.99",
        "Ice cream, toppings, syrup, cherries, and whipped cream.",
      ],
      [
        "The Grind Special",
        "$7.25",
        "Two small scoops, mango, pineapple, strawberry, kiwi, and sweetened condensed milk. Choose almonds, nuts, or granola.",
      ],
      [
        "Super banana split",
        "$9.99",
        "Three large scoops, toppings, syrups, cherries, cookies, banana, and whipped cream.",
      ],
      [
        "Fresas Con Crema",
        "16 oz $6.50 · 32 oz $10.25",
        "Choose almonds, nuts, or granola.",
      ],
      [
        "Crepe",
        "$6.50",
        "Choose two: strawberry, kiwi, pineapple, or banana. With cream cheese or chocolate-hazelnut spread.",
      ],
      ["Chocolate-covered strawberries", "5 for $7.99 · 12 for $16.50"],
      [
        "Shaved ice with ice cream & fruit",
        "16 oz $6.50 · 32 oz $10.25",
        "One shaved ice flavor with ice cream, sweetened condensed milk, and fruit pieces.",
      ],
      [
        "Fruit shaved ice",
        "16 oz $6.50 · 32 oz $9.99",
        "Made with natural fruit syrups.",
      ],
    ],
  },
  {
    id: "drinks",
    name: "Fruit & refreshing drinks",
    subtitle: "Bright flavors for your next refreshment break.",
    items: [
      ["Chamoyada", "16 oz $6.50 · 32 oz $10.25", "Mango or pineapple."],
      [
        "Agua Frescas",
        "16 oz $3.99 · 32 oz $6.25",
        "Horchata, pistachio, melon, watermelon, pineapple, coconut, piña colada, hibiscus, tamarind, marzipan, cucumber, or strawberry.",
      ],
      [
        "Fruit juices",
        "16 oz $6.50 · 32 oz $10.25",
        "A combination of five fruits or vegetables. Options include spinach, pineapple, orange, apple, banana, and mango.",
      ],
      [
        "Fruit cocktail",
        "16 oz $6.50 · 32 oz $10.25",
        "Chamoy, chili, and lime, or honey with almonds, nuts, or granola.",
      ],
      ["Agua Mineral Preparada", "32 oz $4.55", "With salt or sugar."],
      [
        "Prepared Clamato",
        "16 oz $7.00 · 32 oz $12.00",
        "With dried beef and shrimp.",
      ],
    ],
  },
  {
    id: "savory",
    name: "Savory snacks & seafood",
    subtitle: "A quick bite with plenty of flavor.",
    items: [
      ["Bagel sandwich", "$6.50"],
      ["Stuffed pastry sandwich", "$2.50 each"],
      ["Corn dog", "$2.00 each"],
      ["Sausage, egg & cheese biscuit", "$2.50 each"],
      ["Papas Locas", "32 oz $4.55", "With soy sauce, salsa, and lime."],
      ["Shrimp cocktail", "16 oz $8.99 · 32 oz $14.99"],
      ["Citrus-marinated shrimp with chips", "1½ lb $14.00"],
    ],
  },
];
export const reviews = [
  {
    name: "Lori P",
    quote: "You gotta come here. Everything is delicious.",
    url: "https://www.google.com/maps/contrib/102588274027598160957/reviews?hl=en",
  },
  {
    name: "Gabe M",
    quote:
      "Great place to have coffee and goodies. They have great food available too. You won't be disappointed.",
    url: "https://www.google.com/maps/contrib/107768875063157168150/reviews?hl=en",
  },
  {
    name: "J S",
    quote: "Customer service at its best. Don’t miss out.😊",
    url: "https://www.google.com/maps/contrib/110515444181492334547/reviews?hl=en",
  },
  {
    name: "Ryan Martinez",
    quote:
      "Very productive and professional, they’ve been handling all of my business’s needs and never let me down. Highly recommended.",
    url: "https://www.google.com/maps/contrib/105787919526063826197/reviews?hl=en",
  },
  {
    name: "claudia lopez",
    quote:
      "Everyone is very friendly, and you can find a little of everything.",
    original: "Todos son muy amable y encuentras de todo.",
    translated: true,
    url: "https://www.google.com/maps/contrib/115303992863297746931/reviews?hl=en",
  },
];
export const faqs = [
  {
    question: "What kinds of sweet treats do you offer?",
    answer:
      "We serve ice cream cones and cups, sundaes, banana splits, milkshakes, crepes, chocolate-covered strawberries, and Fresas Con Crema. You can also enjoy shaved ice with natural fruit syrups or our shaved ice topped with ice cream and fruit.",
  },
  {
    question: "Do you have refreshing fruit drinks?",
    answer:
      "Yes! Choose from fruit juices, Agua Frescas in flavors such as watermelon, pineapple, cucumber, and strawberry, or a mango or pineapple Chamoyada. We also offer Agua Mineral Preparada.",
  },
  {
    question: "Can I choose the toppings for my treat?",
    answer:
      "Several treats offer topping choices. Enjoy Fresas Con Crema with almonds, nuts, or granola, or choose two fruits for your crepe with cream cheese or chocolate-hazelnut spread. Available options vary by item.",
  },
  {
    question: "Do you serve coffee and blended drinks?",
    answer:
      "Absolutely! We offer hot or iced espresso drinks, including Americanos, lattes, and mochas. Our blended drinks include flavors such as vanilla, mocha, matcha green tea, and spiced chai. Hot or iced chocolate and tea are also available.",
  },
  {
    question: "Do you offer savory snacks, too?",
    answer:
      "Yes! Our menu includes Papas Locas, bagel sandwiches, corn dogs, stuffed pastry sandwiches, and sausage, egg, and cheese biscuits. For seafood lovers, we also serve shrimp cocktail and citrus-marinated shrimp with chips.",
  },
];
