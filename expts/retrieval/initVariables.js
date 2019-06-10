let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

let Cats = chance1.shuffle([01,02,04,05,06,07,08,09,10,11,15,16]); // 12 cats

let RpCatsR = Cats.slice(0,4); // 4 categories
let NrpCatsR = Cats.slice(4,8);
let CatchCatsR = Cats.slice(8,11); // 3 cat

let RpExemSliceR = chance1.shuffle(counter(11, 28));
let RpPlusExemR = RpExemSliceR.slice(0, 6); //type 10
let RpMinusExemR = RpExemSliceR.slice(6, 12); //type 11
let PracLuresExemR = RpExemSliceR.slice(6, 12); //type 13
let RpTestLuresExemR = RpExemSliceR.slice(12, 18); //type 14
let NrpExemSliceR = chance1.shuffle(counter(11, 22));
let NrpExemR = NrpExemSliceR.slice(0, 12); //type 12
let NrpTestLuresExemR = NrpExemSliceR.slice(6, 12); //type 15
let CatchExemR = counter(11, 16);

let StudyTrialType = []; let StudyAr = [];
StudyAr = StudyAr.concat(repmat(repmat([10, 11], RpPlusExemR.length),RpCatsR.length), repmat(repmat(12, NrpExemR.length), NrpCatsR.length), repmat(repmat(99, CatchExemR.length), 1));
StudyTrialType = StudyTrialType.concat(chance1.shuffle(StudyAr),chance1.shuffle(StudyAr),chance1.shuffle(StudyAr));
while (StudyTrialType.slice(0,1)==99) {
  StudyTrialType = [];
  StudyTrialType = StudyTrialType.concat(chance1.shuffle(StudyAr),chance1.shuffle(StudyAr),chance1.shuffle(StudyAr));
}

let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(10, RpPlusExemR.length), RpCatsR.length));
PracTrialType = chance1.shuffle(PracTrialType);

let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([10, 11], RpPlusExemR.length), RpCatsR.length), repmat(repmat(12, NrpExemR.length), NrpCatsR.length));
TestTrialType = chance1.shuffle(TestTrialType);

// let RandStart = Math.floor(chance1.random()*360)+1; // random number from 1 to 360

let RpPlusR = chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR));
let RpPlusPracR = [];
RpPlusPracR = RpPlusPracR.concat(chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR)),chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR)),chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR))); //thrice because of three practice trials
let RpMinusR = chance1.shuffle(perm_concat(RpCatsR,RpMinusExemR));
let NrpR = chance1.shuffle(perm_concat(NrpCatsR,NrpExemR));
let CatchR = chance1.shuffle(perm_concat(CatchCatsR,CatchExemR));
let NrpTestLuresR = chance1.shuffle(perm_concat(NrpCatsR,NrpTestLuresExemR));

let numpercat = NrpR.length/NrpCatsR.length;

var RpPlusRC = new Array();
var RpPlusRind = new Array();
for (var i = 0; i < RpCatsR.length/2; i++) {
  RpPlusRC[i] = wrap(RandStart(counter(1,360,360/numpercat)).slice(0,numpercat/2));
}
var RpMinusRC = new Array();
for (var i = 0; i < RpCatsR.length/2; i++) {
  RpMinusRC[i] = wrap(RandStart(counter(1,360,360/numpercat)).slice(0,numpercat/2));
}
var NrpRC = new Array();
for (var i = 0; i < NrpCatsR.length/2; i++) {
  NrpRC[i] = wrap(RandStart(counter(1,360,360/numpercat)).slice(0,numpercat));
}
var CatchRC = new Array();
for (var i = 0; i < CatchCatsR.length/2; i++) {
  CatchRC[i] = wrap(RandStart(counter(1,360,360/numpercat)).slice(0,numpercat));
}

var CatIndx = new Array(); var ExemIndx = new Array(); var CIndx = new Array();
CatIndx[0] = RpCatsR; CatIndx[1] = NrpCatsR; CatIndx[2] = CatchCatsR;
ExemIndx[0] = RpPlusExemR; ExemIndx[1] = RpMinusExemR; ExemIndx[2] = NrpExemR; ExemIndx[3] = CatchExemR;
CIndx[0] = RpPlusRC; CIndx[1] = RpMinusRC; CIndx[2] = NrpRC; CIndx[3] = CatchRC;

let AllImages = [];
AllImages = AllImages.concat(RpPlusR,RpMinusR,NrpR,CatchR);

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

function RandStart(array) {
  v = Math.floor(chance1.random()*360)+1;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + v;
  }
  return array;
}
