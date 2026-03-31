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
      price: "£TBC",
      image: "images/IMG_2521 2.jpg"
    },
    {
      name: "Stud Earrings",
      description: "Dainty and cute, perfect for everyday wear.",
      price: "£TBC",
      image: ""
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
      name: "Classic Friendship Bracelet",
      description: "Choose your colours and we'll weave it just for you.",
      price: "£TBC",
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
      name: "Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2540.jpg"
    },
    {
      name: "Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2541.jpg"
    },
    {
      name: "Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2545.jpg"
    },
    {
      name: "Bracelet",
      description: "Handmade with love — perfect for every day.",
      price: "£2",
      image: "images/IMG_2547.jpg"
    },
    {
      name: "Matching Best Friend Set",
      description: "Two matching bracelets — one for you, one for your bestie!",
      price: "£TBC",
      image: ""
    }
  ],

  keyrings: [
    {
      name: "Beaded Keyring",
      description: "A lovely handmade keyring to brighten up your keys or bag.",
      price: "£TBC",
      image: "images/IMG_2538.jpg"
    },
    {
      name: "Charm Keyring",
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
