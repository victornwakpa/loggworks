//STORE IN ARRAY OF OBJECTS (10)
const testimonialData = [
    {
      id: 1,
      name: "Emel Aydin",
      location: "London, UK",
      designation: "General Manager ",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      message:
        "“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I”",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.8,
      audio: "https://testimonialapi.toolcarton.com/audio/1.mp3",
    },
    {
      id: 2,
      name: "Alisan Karateke",
      location: "Sweden",
      designation: "Technical Director",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg",
      message:
      "Great session! Dani was super helpful. She shared some practical advice on how can we go about refining our service offerings.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.4,
      audio: "https://testimonialapi.toolcarton.com/audio/2.mp3",
    },
    {
      id: 3,
      name: "Michael D.",
      location: "Austin, Texas",
      designation: "Investor",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      message:
        "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/3.mp3",
    },
    {
      id: 4,
      name: "Kylie Lutz",
      location: "Paris, France",
      designation: "Freelancer",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      message:
        "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 5,
      audio: "https://testimonialapi.toolcarton.com/audio/4.mp3",
    },
    {
      id: 5,
      name: "Mark Twin",
      location: "Berlin, Germany",
      designation: "Developer",
      avatar: "https://randomuser.me/api/portraits/men/64.jpg",
      message:
        "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/5.mp3",
    },
    {
      id: 6,
      name: "Anne",
      location: "New York, USA",
      designation: "Content Writer & Artist",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      message:
        "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.7,
      audio: "https://testimonialapi.toolcarton.com/audio/6.mp3",
    },
    // {
    //   id: 7,
    //   name: "Bryan S.",
    //   location: "Sydney, Australia",
    //   designation: "Manager",
    //   avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    //   message:
    //     "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team.",
    //   lorem:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    //   rating: 4.7,
    //   audio: "https://testimonialapi.toolcarton.com/audio/7.mp3",
    // },
    // {
    //   id: 8,
    //   name: "Kamren Hays",
    //   location: "Florida, USA",
    //   designation: "Marketing Head",
    //   avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    //   message:
    //     "Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services.",
    //   lorem:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    //   rating: 4.8,
    //   audio: "https://testimonialapi.toolcarton.com/audio/8.mp3",
    // },
    // {
    //   id: 9,
    //   name: "Diane Smith",
    //   location: "New York, USA",
    //   designation: "Sales Head",
    //   avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    //   message:
    //     "Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all.",
    //   lorem:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    //   rating: 4.1,
    //   audio: "https://testimonialapi.toolcarton.com/audio/9.mp3",
    // },
    // {
    //   id: 10,
    //   name: "Mikayla Mccullough",
    //   location: "Madrid, Spain",
    //   designation: "Designer",
    //   avatar: "https://randomuser.me/api/portraits/men/69.jpg",
    //   message:
    //     "The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive.",
    //   lorem:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    //   rating: 4.9,
    //   audio: "https://testimonialapi.toolcarton.com/audio/10.mp3",
    // },
    
  ];
  
  module.exports = testimonialData;