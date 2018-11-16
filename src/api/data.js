export const props = {
  data: [
    {
      title: "origin",
      info: ["Shanghai"]
      //infoLink: false,
    },
    {
      title: "destincion",
      info: ["Hongkong"]
      //infoLink: false,
    },
    {
      title: "vessel(s)",
      info: [],
      subInfo: [
        {
          title: "1st",
          info: ["vessel name 1"],
          infoLink: true
        },
        {
          title: "transship",
          info: ["vessel name 2", "vessel name 3", "vessel name 4"],
          infoLink: true
        },
        {
          title: "last",
          info: ["vessel name 5"],
          infoLink: true
        }
      ]
    }
  ]
};
