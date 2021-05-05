google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    [ 'Applied', '1st Round', 8 ], // Amazon, Twitch, Google, FB, Twitter, Square, Rockstar, DoorDash
    [ 'Applied', 'No Response', 4 ], // Blizzard, Netflix, MagicLeap, Microsoft
    [ '1st Round', 'On-Site', 5 ], // Amazon, FB, Twitter, Square, DoorDash
    [ '1st Round', 'Project', 1 ], // Twitch
    [ 'Project', 'On-Site', 1 ], // Twitch
    [ '1st Round', 'Rejected', 2 ], // Google, Rockstar
    [ 'On-Site', 'Offer', 4 ], // Amazon, Twitch, FB, DoorDash
    [ 'On-Site', 'Rejected', 0 ]
  ]);

  // Sets chart options.
  var options = {
    width: 600,
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}