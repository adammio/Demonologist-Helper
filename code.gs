function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Ghost Finder')
    .addItem('Open', 'openInterface')
    .addToUi();
}

function openInterface() {
    var html = HtmlService.createTemplateFromFile('Index').evaluate()
      .setTitle('Ghost Finder')
      .setWidth(1200)
      .setHeight(500);
    SpreadsheetApp.getUi().showModelessDialog(html, 'Ghost Finder');
  }

function processSelection(data) {
  var selectedOptions = data.selectedOptions;
  if (selectedOptions.length === 3) {
    var results = [
      {
        options: ["1", "2", "3"],
        result: "A ghost that will fall in love with a player which they will never attack but they’ll attack everyone else close to them.",
        title: "ONYRO"
      },
      {
        options: ["1", "2", "4"],
        result: "It has a special ability that will quickly damage your sanity if you’re nearby, if it wants to, it can VERY quickly drain your sanity, it is also very fast when hunting.",
        title: "ONI"
      },
      {
        options: ["1", "2", "5"],
        result: "Will only interact with the ESG if no players are nearby. (Rumours are it still can but i have never personally seen this happen)",
        title: "GORYO"
      },
      {
        options: ["1", "2", "6"],
        result: "Result 3",
        title: "WRAITH"
      },
      {
        options: ["1", "3", "4"],
        result: "Result 3",
        title: "MARE"
      },
      {
        options: ["1", "3", "7"],
        result: "Result 3",
        title: "YOKAI"
      },
      {
        options: ["1", "4", "5"],
        result: "Result 3",
        title: "JINN"
      },
      {
        options: ["1", "4", "7"],
        result: "Result 3",
        title: "ABADDON"
      },
      {
        options: ["1", "5", "6"],
        result: "Result 3",
        title: "YUREI"
      },
      {
        options: ["1", "5", "7"],
        result: "Result 3",
        title: "BOOGEY"
      },
      {
        options: ["2", "3", "4"],
        result: "Result 3",
        title: "REVENANT"
      },
      {
        options: ["2", "3", "7"],
        result: "Result 3",
        title: "THAYE"
      },
      {
        options: ["2", "4", "6"],
        result: "Result 3",
        title: "AGASH"
      },
      {
        options: ["2", "4", "7"],
        result: "Result 3",
        title: "GUL"
      },
      {
        options: ["2", "5", "6"],
        result: "Result 3",
        title: "DEOGEN"
      },
      {
        options: ["2", "5", "7"],
        result: "Result 3",
        title: "POLTERGEIST"
      },
      {
        options: ["3", "4", "6"],
        result: "Result 3",
        title: "DEMON"
      },
      {
        options: ["3", "4", "7"],
        result: "Result 3",
        title: "HANTU"
      },
      {
        options: ["4", "5", "6"],
        result: "Result 3",
        title: "RAIJU"
      },
      {
        options: ["4", "6", "7"],
        result: "Result 3",
        title: "MYLING"
      },
      {
        options: ["5", "6", "7"],
        result: "Result 3",
        title: "GUIPO"
      },
      {
        options: ["3", "5", "6"],
        result: "Result 3",
        title: "NAAMAH"
      },
      {
        options: ["3", "5", "7"],
        result: "Result 3",
        title: "IBLIS"
      },
      {
        options: ["3", "6", "7"],
        result: "Result 3",
        title: "SHADE"
      },
      
      // Add more results here
    ];
    var selectedOptionString = selectedOptions.sort().join("");
    var result = results.find(result => result.options.sort().join("") === selectedOptionString);
    if (result) {
      var template = HtmlService.createTemplateFromFile('Result');
      template.result = result.result;
      template.title = result.title;
      for (var i = 0; i < data.options.length; i++) {
        if (!selectedOptions.includes(data.options[i])) {
          template.result = template.result.replace(new RegExp(data.options[i], 'g'), "<s>" + data.options[i] + "</s>");
        }
      }
      return template.evaluate().getContent();
    } else {
      return "This is 1 of 14 selections that are not in use at this time.";
    }
  } else {
    return "";
  }
}
