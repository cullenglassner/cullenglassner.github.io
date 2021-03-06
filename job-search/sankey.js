var ctx = document.getElementById("chart").getContext("2d");

var colors = {
  "Applied": "blue",
  "Ignored": "slategray",
  "1st Round": "lightgreen",
  "Project": "purple",
  "On-Site": "limegreen",
  "Offer": "green",
  "Rejected": "red",
  "Cancelled": "slategray"
};

function getColor(name) {
  return colors[name] || "green";
}

var chart = new Chart(ctx, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
          { from: "Applied", to: "1st Round", flow: 8 }, // Amazon, Twitch, Google, FB, Twitter, Square, Rockstar, DoorDash
          { from: "Applied", to: "Ignored", flow: 4 }, // Blizzard, Netflix, MagicLeap, Microsoft
          { from: "1st Round", to: "On-Site", flow: 5 }, // Amazon, FB, Twitter, Square, DoorDash
          { from: "1st Round", to: "Project", flow: 1 }, // Twitch
          { from: "Project", to: "On-Site", flow: 1 }, // Twitch
          { from: "1st Round", to: "Rejected", flow: 2 }, // Google, Rockstar
          { from: "On-Site", to: "Offer", flow: 4 }, // Amazon, Twitch, FB, DoorDash
          { from: "On-Site", to: "Cancelled", flow: 2 } // TBD: Square, Twitter
          // { from: "On-Site", to: "Rejected", flow: 0 }
        ],
        colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
        borderWidth: 0
      }
    ]
  }
});