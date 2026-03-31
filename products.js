/*
  =============================================
  IZZO — Product List
  =============================================

  HOW TO ADD A NEW PRODUCT:
  1. Upload your photo to the "images" folder on GitHub
  2. Find the right category below
  3. Copy one of the existing entries (the bit between { and }),
     paste it at the end of that category's list, and fill in the details
  4. Leave image as "" if you don't have a photo yet — it will show a placeholder
  5. Save the file on GitHub (click "Commit changes")

  That's it!
  =============================================
*/

const products = {

  jewellery: [
    {
      name: "Chokers",
      description: "Handmade with care, available in a range of colours.",
      price: "£3",
      image: "images/IMG_2521 2.jpg"
    },
    {
      name: "Charm Bracelet",
      description: "A beautiful bracelet with hand-chosen charms.",
      price: "£TBC",
      image: ""
    }
  ],

  bracelets: [
    {
      name: "Mira Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2553.jpg"
    },
    {
      name: "Classic Friendship Bracelet",
      description: "A gift for someone special.",
      price: "£2",
      image: "images/IMG_2527 2.jpg",
      custom: true
    },
    {
      name: "Friendship Bracelet",
      description: "Handmade and full of colour — the perfect gift for a best friend!",
      price: "£TBC",
      image: "images/IMG_2533 2.jpg",
      custom: true
    },
    {
      name: "Citrus Lemon Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2540.jpg"
    },
    {
      name: "Orange Sherbert Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2541.jpg"
    },
    {
      name: "Rose Petal Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2545.jpg"
    },
    {
      name: "Sea Shell Waves Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2547.jpg"
    },
    {
      name: "Matching Best Friend Set",
      description: "Two matching bracelets — one for you, one for your bestie!",
      price: "£4",
      image: "images/IMG_2551.jpg"
    }
  ],

  keyrings: [
    {
      name: "Mykeys Keyring",
      description: "A lovely handmade keyring to brighten up your keys or bag.",
      price: "£1",
      image: "images/IMG_2538.jpg"
    },
    {
      name: "Starship Sunshine Keyring",
      description: "A handmade keyring to brighten up your keys or bag.",
      price: "£1",
      image: "images/IMG_2554.jpg"
    },
    {
      name: "Peace Charm Keyring",
      description: "With cute little charms — a great gift idea too!",
      price: "£2",
      image: "images/IMG_2550.jpg"
    }
  ],

  bookmarks: [
    {
      name: "Tassel Bookmark",
      description: "A pretty handmade bookmark for every bookworm!",
      price: "£TBC",
      image: ""
    },
    {
      name: "Beaded Bookmark",
      description: "Colourful beads on a ribbon — beautiful and unique.",
      price: "£TBC",
      image: ""
    }
  ]

};
