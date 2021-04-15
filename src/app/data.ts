export default [
  {
    id: 1,
    company: "Surya Airline, India",
    source: {
      key: "BLR",
      airport: "Kempegowda International Airport Bengaluru"
    },
    destination: {
      key: "DEL",
      airport: "Indira Gandhi International Airport"
    },
    is_oneway: true,
    price: 4735,
    duration: 135,
    arrival: new Date(),
    departure: new Date(),
    available: [
      {
        type: "economy",
        additional_price: 0
      },
      {
        type: "economy_plus",
        additional_price: 1500
      },
      {
        type: "first_class_suites",
        additional_price: 5000
      }
    ]
  }
];
