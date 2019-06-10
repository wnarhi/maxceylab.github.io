let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

let Cats = chance1.shuffle([01,02,04,05,06,07,08,09,10,11,15,16]); // 12 cats

let RpCatsR = Cats.slice(0,6); // 6 categories
let NrpCatsR = Cats.slice(6,12);
let CatchCatsR = [03,12,13];

let RpExemSliceR = chance1.shuffle(counter(11, 28));
let RpPlusExemR = RpExemSliceR.slice(0, 3); //type 10
let RpMinusExemR = RpExemSliceR.slice(3, 6); //type 11
let PracLuresExemR = RpExemSliceR.slice(6, 12); //type 13
let RpTestLuresExemR = RpExemSliceR.slice(12, 18); //type 14
let NrpExemSliceR = chance1.shuffle(counter(11, 22));
let NrpExemR = NrpExemSliceR.slice(0, 6); //type 12
let NrpTestLuresExemR = NrpExemSliceR.slice(6, 12); //type 15
let CatchExemR = counter(11, 18);

let StudyTrialType = []; let StudyAr = [];
StudyAr = StudyAr.concat(repmat(repmat([10, 11], RpPlusExemR.length),RpCatsR.length), repmat(repmat(12, NrpExemR.length), NrpCatsR.length), repmat(repmat(99, CatchExemR.length), CatchCatsR.length));
StudyTrialType = StudyTrialType.concat(chance1.shuffle(StudyAr),chance1.shuffle(StudyAr),chance1.shuffle(StudyAr));
while (StudyTrialType.slice(0,1)==99) {
  StudyTrialType = StudyTrialType.concat(chance1.shuffle(StudyAr),chance1.shuffle(StudyAr),chance1.shuffle(StudyAr));
}

let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(10, RpPlusExemR.length), RpCatsR.length), repmat(repmat(13, PracLuresExemR.length), RpCatsR.length));
PracTrialType = chance1.shuffle(PracTrialType);

let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([10, 11], RpPlusExemR.length), RpCatsR.length),
    repmat(repmat(12, NrpExemR.length), NrpCatsR.length), repmat(repmat(14, RpTestLuresExemR.length),
    RpCatsR.length), repmat(repmat(15, NrpTestLuresExemR.length), NrpCatsR.length));
TestTrialType = chance1.shuffle(TestTrialType);

// let RandStart = Math.floor(chance1.random()*360)+1; // random number from 1 to 360

let RpPlusR = chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR));
let RpRC = chance1.shuffle(wrap(RandStart(counter(1,360,Math.round(360/(RpPlusR.length*2))))));
let RpPlusRC = RpRC.slice(0,RpPlusR.length);
let RpPlusPracR = [];
RpPlusPracR = RpPlusPracR.concat(chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR)),chance1.shuffle(perm_concat(RpCatsR,RpPlusExemR))); //twice because of two practice trials
let RpMinusR = chance1.shuffle(perm_concat(RpCatsR,RpMinusExemR));
let RpMinusRC = RpRC.slice(RpPlusR.length,RpRC.length);
let NrpR = chance1.shuffle(perm_concat(NrpCatsR,NrpExemR));
let NrpRC = wrap(RandStart(counter(1,360,Math.round(360/NrpR.length))));
let CatchR = chance1.shuffle(perm_concat(CatchCatsR,CatchExemR));
let CatchRC = wrap(RandStart(counter(1,360,Math.round(360/CatchR.length))));
let PracLuresR = chance1.shuffle(perm_concat(RpCatsR,PracLuresExemR));
let PracLuresRC = wrap(RandStart(counter(1,360,Math.round(360/PracLuresR.length))));
let RpTestLuresR = chance1.shuffle(perm_concat(RpCatsR,RpTestLuresExemR));
let RpTestLuresRC = wrap(RandStart(counter(1,360,Math.round(360/RpTestLuresR.length))));
let NrpTestLuresR = chance1.shuffle(perm_concat(NrpCatsR,NrpTestLuresExemR));
let NrpTestLuresRC = wrap(RandStart(counter(1,360,Math.round(360/NrpTestLuresR.length))));

let AllImages = [];
AllImages = AllImages.concat(RpPlusR,RpMinusR,NrpR,PracLuresR,RpTestLuresR,NrpTestLuresR);

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
