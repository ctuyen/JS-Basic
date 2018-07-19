//Exercise

// Design database for a e-magazine website
    //name, category, language
var magazines = [
  {
    name: 'Tuoi tre',
    category: 2,
    language: 1
  },
  {
    name: 'Thoi bao',
    category: 1,
    language: 3
  },
  {
    name: 'Toan Cau',
    category: 3,
    language: 2
  },
  {
    name: 'Thanh nien',
    category: 0,
    language: 0
  }
];

var categories = [
  {
    id: 0,
    name: 'IT'
  },
  {
    id: 1,
    name: 'Healthy'
  },
  {
    id: 2,
    name: 'Sport'
  },
  {
    id: 3,
    name: 'Politic'
  }
];

var languages = [
  {
    id: 0,
    languageName: 'English'
  },
  {
    id: 1,
    languageName: 'Japanese'
  },
  {
    id: 2,
    languageName: 'Chinese'
  },
  {
    id: 3,
    languageName: 'Spanish'
  }
];

function getMagazineOfLanguage(language) {
  var languageObject = languages.find(function(item) {
    return item.languageName === language;
  });

  var magazineOfLanguage = magazines.filter(function(magazine) {
    return magazine.language === languageObject.id;
  });

  return magazineOfLanguage;
};
// test thu
console.log(getMagazineOfLanguage('English'));


// Using node table to make the previous app look nicer
const {table} = require('table');

var data, output;

var magazine = magazines.map(function(magazine) {
  return magazine.name;
});


function getNameOfCategory(id) {
  var categoryObject = categories.find(function(category) {
    return category.id === id;
  });

  return categoryObject.name;
};

function getNameOfLanguage(id) {
  var languageObject = languages.find(function(language) {
    return language.id === id;
  });

  return languageObject.languageName;
};

var i;
var category = new Array();
var language = new Array();
for (i = 0; i < magazines.length; i++ ) {
  category[i] = getNameOfCategory(magazines[i].category);
  language[i] = getNameOfLanguage(magazines[i].language);
}

magazine.unshift('--Magazine Name--');
language.unshift('--Language--');
category.unshift('--Category--');

data = [
  magazine,
  category,
  language
];

output = table(data);
console.log(output);
