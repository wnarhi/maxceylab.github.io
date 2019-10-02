let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

LettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // no I or O
FontList = [
  'cherryswash','cinzeldecorative','combo','farsan','glassantiqua','griffy','lancelot','lifesavers','macondo','mountainsofchristmas','pompiere','unkempt', // Display
  'annieuseyourtelescope','badscript','charm','euphoriascript','lovedbytheking','marckscript','nothingyoucoulddo','parisienne','sacramento','shadowsintolight','thegirlnextdoor','zeyada', // Handwriting
  'anonymouspro','cutivemono','ibmplexmono','inconsolata','nanumgothiccoding','novamono','ptnova','robotomono','sharetechmono','sourcecodepro','spacemono','ubuntomono', // Monospace
  'abel','adventpro','baijamjuree','belleza','carroisgothicsc','chakrapetch','dosis','englebert','gayathri','geo','jura','kodchasan', // Sans Serif
  'alegreyasc','alemendrasc','anticslab','bellefair','cormorantupright','glegoo','imfelldoublepicasc','italiana','maitree','podkova','trykker','unna'
];

let Letters = chance1.shuffle(LettersList); // 10 letters/categories (24 letters possible)
let Fonts = chance1.shuffle(FontList);

let RpCats = Letters.slice(0,5); // 5 categories
let NrpCats = Letters.slice(5,10); // 5 categories
let RpExemSlice = Fonts.slice(0,22); // letters I and O were excluded from imagesets due to lacking characteristic features; A and Z excluded due to instructions
let RpPlusExem = RpExemSlice.slice(0, 3); //type 0
let RpMinusExem = RpExemSlice.slice(3, 6); //type 1
let PracLuresExem = RpExemSlice.slice(6, 12); //type 3
let RpTestLuresExem = RpExemSlice.slice(12, 18); //type 4
let NrpExemSlice = Fonts.slice(22,44);
let NrpExem = NrpExemSlice.slice(0, 6); //type 2
let NrpTestLuresExem = NrpExemSlice.slice(6, 12); //type 5

let StudyTrialType = [];
StudyTrialType = StudyTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length), repmat(repmat(2, NrpExem.length), NrpCats.length));
StudyTrialType = chance1.shuffle(StudyTrialType);
let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(3, PracLuresExem.length), RpCats.length));
PracTrialType = chance1.shuffle(PracTrialType);
let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length),
  repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(4, RpTestLuresExem.length),
    RpCats.length), repmat(repmat(5, NrpTestLuresExem.length), NrpCats.length));
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

function perm_concat(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result = result.concat(array1[i].toString() + '_' + array2[j].toString());
    }
  }
  return result;
}

function GetImg(input) {
  letter0 = input.substr(0, input.indexOf('_'));
  font0 = input.split('_').pop();
  imagename = '#' + font0 + '_' + letter0.toUpperCase();
  return imagename
}
