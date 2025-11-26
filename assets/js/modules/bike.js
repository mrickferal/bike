const bike = {
  init: function () {
    console.log("Hello world, I'm bike.js");

    // moving from Épinay-sur-Orge to Brétigny-sur-Orge
    bike.goingTrips = [
      {
        // ISO date (YYYY-MM-DD)
        date: "YYY-MM-DD",
        // `time` in seconds (s)
        time: 0,
        // `distance` in meters (m)
        distance: 0,
        // `averageSpeed` in kilometers per hour (km/h)
        averageSpeed: 0,
        // `averageHeartRate` in Beats Per Minute (BPM)
        averageHeartRate: 0,
        infos: "∅",
      },
      //! blank
      {
        // ISO date (YYYY-MM-DD)
        date: "YYY-MM-DD",
        // `time` in seconds (s)
        time: 0,
        // `distance` in meters (m)
        distance: 0,
        // `averageSpeed` in kilometers per hour (km/h)
        averageSpeed: 0,
        // `averageHeartRate` in Beats Per Minute (BPM)
        averageHeartRate: 0,
        infos: "∅",
      },
    ];

    // moving from Brétigny-sur-Orge to Épinay-sur-Orge
    bike.returnTrips = [
      {
        // ISO date (YYYY-MM-DD)
        date: "YYY-MM-DD",
        // `time` in seconds (s)
        time: 0,
        // `distance` in meters (m)
        distance: 0,
        // `averageSpeed` in kilometers per hour (km/h)
        averageSpeed: 0,
        // `averageHeartRate` in Beats Per Minute (BPM)
        averageHeartRate: 0,
        infos: "∅",
      },
      //! blank
      {
        // ISO date (YYYY-MM-DD)
        date: "YYY-MM-DD",
        // `time` in seconds (s)
        time: 0,
        // `distance` in meters (m)
        distance: 0,
        // `averageSpeed` in kilometers per hour (km/h)
        averageSpeed: 0,
        // `averageHeartRate` in Beats Per Minute (BPM)
        averageHeartRate: 0,
        infos: "∅",
      },
    ];
  },
};
