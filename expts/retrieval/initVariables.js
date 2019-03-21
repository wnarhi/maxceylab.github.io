let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

let Cats = chance1.shuffle([01,02,04,05,06,07,08,09,10,11,15,16]); // 12 cats

let RpCats = Cats.slice(0,3); // 3 categories
let NrpCats = Cats.slice(3,6);

let RpExemSlice = chance1.shuffle(counter(11, 28));
let RpPlusExem = RpExemSlice.slice(0, 2); //type 0
let RpMinusExem = RpExemSlice.slice(2, 4); //type 1
let PracLuresExem = RpExemSlice.slice(4, 8); //type 3
let RpTestLuresExem = RpExemSlice.slice(8, 12); //type 4
let NrpExemSlice = chance1.shuffle(counter(11, 22));
let NrpExem = NrpExemSlice.slice(0, 4); //type 2
let NrpTestLuresExem = NrpExemSlice.slice(4, 8); //type 5

let RpCatsR = Cats.slice(6,9); // 3 categories
let NrpCatsR = Cats.slice(9,12);

let RpExemSliceR = chance1.shuffle(counter(11, 28));
let RpPlusExemR = RpExemSliceR.slice(0, 2); //type 10
let RpMinusExemR = RpExemSliceR.slice(2, 4); //type 11
let PracLuresExemR = RpExemSliceR.slice(4, 8); //type 13
let RpTestLuresExemR = RpExemSliceR.slice(8, 12); //type 14
let NrpExemSliceR = chance1.shuffle(counter(11, 22));
let NrpExemR = NrpExemSliceR.slice(0, 4); //type 12
let NrpTestLuresExemR = NrpExemSliceR.slice(4, 8); //type 15

let StudyTrialType = [];
StudyTrialType = StudyTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length), repmat(repmat(2, NrpExem.length), NrpCats.length),
  repmat(repmat([10, 11], RpPlusExemR.length), RpCatsR.length), repmat(repmat(12, NrpExemR.length), NrpCatsR.length));
StudyTrialType = chance1.shuffle(StudyTrialType);
let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(3, PracLuresExem.length), RpCats.length),
  repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(13, PracLuresExemR.length), RpCatsR.length));
PracTrialType = chance1.shuffle(PracTrialType);
let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length),
  repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(4, RpTestLuresExem.length),
    RpCats.length), repmat(repmat(5, NrpTestLuresExem.length), NrpCats.length),
    repmat(repmat([10, 11], RpPlusExemR.length), RpCatsR.length),
    repmat(repmat(12, NrpExemR.length), NrpCatsR.length), repmat(repmat(14, RpTestLuresExemR.length),
    RpCatsR.length), repmat(repmat(15, NrpTestLuresExemR.length), NrpCatsR.length));
TestTrialType = chance1.shuffle(TestTrialType);

// let RandStart = Math.floor(chance1.random()*360)+1; // random number from 1 to 360
let RpPlus = chance1.shuffle(perm_concat(RpCats,RpPlusExem));
let RpPlusC = wrap(counter(1,360,360/RpPlus.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let RpPlusPrac = [];
RpPlusPrac = RpPlusPrac.concat(chance1.shuffle(perm_concat(RpCats,RpPlusExem)),chance1.shuffle(perm_concat(RpCats,RpPlusExem))); //twice because of two practice trials
let RpMinus = chance1.shuffle(perm_concat(RpCats,RpMinusExem));
let RpMinusC = wrap(counter(1,360,360/RpMinus.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let Nrp = chance1.shuffle(perm_concat(NrpCats,NrpExem));
let NrpC = wrap(counter(1,360,360/Nrp.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let PracLures = chance1.shuffle(perm_concat(RpCats,PracLuresExem));
let PracLuresC = wrap(counter(1,360,360/PracLures.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let RpTestLures = chance1.shuffle(perm_concat(RpCats,RpTestLuresExem));
let RpTestLuresC = wrap(counter(1,360,360/RpTestLures.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let NrpTestLures = chance1.shuffle(perm_concat(NrpCats,NrpTestLuresExem));
let NrpTestLuresC = wrap(counter(1,360,360/NrpTestLures.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));

let RpPlusR = chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR));
let RpPlusRC = wrap(counter(1,360,360/RpPlusR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let RpPlusPracR = [];
RpPlusPracR = RpPlusPracR.concat(chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR)),chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR))); //twice because of two practice trials
let RpMinusR = chance1.shuffle(perm_concat(RpCatsR,RpMinusExemR));
let RpMinusRC = wrap(counter(1,360,360/RpMinusR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let NrpR = chance1.shuffle(perm_concat(NrpCatsR,NrpExemR));
let NrpRC = wrap(counter(1,360,360/NrpR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let PracLuresR = chance1.shuffle(perm_concat(RpCatsR,PracLuresExemR));
let PracLuresRC = wrap(counter(1,360,360/PracLuresR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let RpTestLuresR = chance1.shuffle(perm_concat(RpCatsR,RpTestLuresExemR));
let RpTestLuresRC = wrap(counter(1,360,360/RpTestLuresR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));
let NrpTestLuresR = chance1.shuffle(perm_concat(NrpCatsR,NrpTestLuresExemR));
let NrpTestLuresRC = wrap(counter(1,360,360/NrpTestLuresR.length).map(function(entry) {  return entry+(Math.floor(chance1.random()*360)+1); }));

let AllImages = [];
AllImages = AllImages.concat(RpPlus,RpMinus,Nrp,PracLures,RpTestLures,NrpTestLures,
            RpPlusR,RpMinusR,NrpR,PracLuresR,RpTestLuresR,NrpTestLuresR);

let RpPlus_StudyOrder = [];
let RpMinus_StudyOrder = [];
let Nrp_StudyOrder = [];

let RpPlusR_StudyOrder = [];
let RpMinusR_StudyOrder = [];
let NrpR_StudyOrder = [];

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
      if (array1[i] < 10) {
        result = result.concat('0' + array1[i].toString() + '_' + array2[j].toString());
      } else {
        result = result.concat(array1[i].toString() + '_' + array2[j].toString());
      }
    }
  }
  return result;
}

/* Make sure number is between 0 and 360: */
function wrap(v) {
    for (let i = 0; i < v.length; i++) {
        if (v[i] > 360) {
            v[i] -= 360;
        }
        if (v[i] < 0) {
            v[i] += 360;
        }
    }
    if (v.length == undefined) {
        if (v > 360) {
            v -= 360;
        }
        if (v < 0) {
            v += 360;
        }
        v = parseInt(v); // v becomes integer and not array
    }
    return v;
}
