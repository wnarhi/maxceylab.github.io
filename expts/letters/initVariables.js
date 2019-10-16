let CDSet = chance1.shuffle(repmat(perm_concat0([0,1],counter(1,25)),4)); // randomized 200 CD trials

LettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // no I or O
FontList = [
  'cherryswash','cinzeldecorative','combo','farsan','glassantiqua','griffy','lancelot','lifesavers','macondo','mountainsofchristmas','pompiere','unkempt', // Display
  'annieuseyourtelescope','badscript','charm','euphoriascript','lovedbytheking','marckscript','nothingyoucoulddo','parisienne','sacramento','shadowsintolight','thegirlnextdoor','zeyada', // Handwriting
  'anonymouspro','cutivemono','ibmplexmono','inconsolata','nanumgothiccoding','novamono','ptnova','robotomono','sharetechmono','sourcecodepro','spacemono','ubuntomono', // Monospace
  'abel','adventpro','baijamjuree','belleza','carroisgothicsc','chakrapetch','dosis','englebert','gayathri','geo','jura','kodchasan', // Sans Serif
  'alegreyasc','alemendrasc','anticslab','bellefair','cormorantupright','glegoo','imfelldoublepicasc','italiana','maitree','podkova','trykker','unna' // Serif
];

let Letters = chance1.shuffle(LettersList); // 10 letters/categories (24 letters possible)
let Fonts = chance1.shuffle(FontList);

function setup() {

  let RpCats = Letters.slice(0,5); // 5 categories
  let NrpCats = Letters.slice(5,10); // 5 categories
  let RpExemSlice = Fonts.slice(0,60); // letters I and O were excluded from imagesets due to lacking characteristic features
  let RpPlusExem = RpExemSlice.slice(0, 15); //type 0
  let RpMinusExem = RpExemSlice.slice(15, 30); //type 1
  let PracLuresExem = derange(RpExemSlice.slice(0, 30)); //type 3
  let RpTestLuresExem = derange(RpExemSlice.slice(0, 30)); //type 4
  let NrpExemSlice = Fonts.slice(0,60);
  let NrpExem = NrpExemSlice.slice(30, 60); //type 2
  let NrpTestLuresExem = derange(NrpExemSlice.slice(30, 60)); //type 5

  let StudyTrialType = [];
  StudyTrialType = StudyTrialType.concat(repmat([0, 1], RpPlusExem.length), repmat(2, NrpExem.length));
  StudyTrialType = chance1.shuffle(StudyTrialType);
  let PracTrialType = [];
  PracTrialType = PracTrialType.concat(repmat(0, RpPlusExem.length), repmat(0, RpPlusExem.length), repmat(3, PracLuresExem.length));
  PracTrialType = chance1.shuffle(PracTrialType);
  let TestTrialType = [];
  TestTrialType = TestTrialType.concat(repmat([0, 1], RpPlusExem.length),
      repmat(2, NrpExem.length), repmat(4, RpTestLuresExem.length),
      repmat(5, NrpTestLuresExem.length));
  TestTrialType = chance1.shuffle(TestTrialType);

  let RpPlus = chance1.shuffle(perm_concat(RpCats,RpPlusExem));
  let RpPlusPrac = [];
  RpPlusPrac = RpPlusPrac.concat(chance1.shuffle(perm_concat(RpCats,RpPlusExem)),chance1.shuffle(perm_concat(RpCats,RpPlusExem))); //twice because of two practice trials
  let RpMinus = chance1.shuffle(perm_concat(RpCats,RpMinusExem));
  let Nrp = chance1.shuffle(perm_concat(NrpCats,NrpExem));
  let PracLures = chance1.shuffle(perm_concat(RpCats,PracLuresExem));
  let RpTestLures = chance1.shuffle(perm_concat(RpCats,RpTestLuresExem));
  let NrpTestLures = chance1.shuffle(perm_concat(NrpCats,NrpTestLuresExem));
  let AllImages = [];
  AllImages = AllImages.concat(RpPlus,RpMinus,Nrp,PracLures,RpTestLures,NrpTestLures);

  let RpPlus_StudyOrder = [];
  let RpMinus_StudyOrder = [];
  let Nrp_StudyOrder = [];
}
setup()

function repmat(array, count) {
  let result = [];
  while (count--) {
    result = result.concat(array);
  }
  return result;
}

function counter(start, end, interval) {
  if (interval == undefined) {
    interval = 1;
  }
  let result = [];
  if (start > end) {
    start = start - 360;
  }
  while (start <= end) {
    result = result.concat(start);
    start = start + interval;
  }
  return result;
}

function perm_concat0(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result = result.concat(array1[i].toString() + '_' + array2[j].toString());
    }
  }
  return result;
}

function perm_concat(array1, array2) {
  let result = [];
  for (let i = 0; i < array2.length; i++) {
    // for (let j = 0; j < array2.length; j++) {
      j = i;
      while (j >= array1.length) {
        j = j - array1.length;
      }
      result = result.concat(array1[j].toString() + '_' + array2[i].toString());
    // }
  }
  return result;
}

function GetImg(input) {
  letter0 = input.substr(0, input.indexOf('_'));
  font0 = input.split('_').pop();
  imagename = '#' + font0 + '_' + letter0.toUpperCase();
  return imagename
}

function derangementNumber(n) {
  if(n == 0) {
      return 1;
  }
  var factorial = 1;
  while(n) {
      factorial *= n--;
  }
  return Math.floor(factorial / Math.E);
}

function derange(array) {
  array = array.slice();
  var mark = array.map(function() { return false; });
  for(var i = array.length - 1, u = array.length - 1; u > 0; i--) {
      if(!mark[i]) {
          var unmarked = mark.map(function(_, i) { return i; })
              .filter(function(j) { return !mark[j] && j < i; });
          var j = unmarked[Math.floor(Math.random() * unmarked.length)];

          var tmp = array[j];
          array[j] = array[i];
          array[i] = tmp;

          // this introduces the unbiased random characteristic
          if(Math.random() < u * derangementNumber(u - 1) /  derangementNumber(u + 1)) {
              mark[j] = true;
              u--;
          }
          u--;
      }
  }
  return array;
}

no=2;
while (no>0) {
  for (let i = 0; i < RpPlus.length; i++) {
    for (let j = 0; j < RpTestLures.length; j++) {
      if (RpPlus[i] == RpTestLures[j]) {
        no=1;
      }
    }
    for (let k = 0; k < PracLures.length; k++) {
      if (RpPlus[i] == PracLures[k]) {
        no=1;
      }
    }
    for (let k = 0; k < PracLures.length; k++) {
      if (RpMinus[i] == PracLures[k]) {
        no=1;
      }
    }
  }

  for (let i = 0; i < RpTestLures.length; i++) {
    for (let j = 0; i < PracLures; j++) {
      if (RpTestLures[i] == PracLures[j]) {
        no=1;
      }
    }
  }

  for (let i = 0; i < RpMinus.length; i++) {
    for (let j = 0; i < RpTestLures; j++) {
      if (RpMinus[i] == RpTestLures[j]) {
        no=1;
      }
    }
  }

  for (let i = 0; i < Nrp.length; i++) {
    for (let j = 0; i < NrpTestLures; j++) {
      if (Nrp[i] == NrpTestLures[j]) {
        no=1;
      }
    }
  }
  if (no==2) {
    no = 0;
  } else (
    setup()
  )
}