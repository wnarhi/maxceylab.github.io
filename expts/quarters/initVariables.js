let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

let RpCats = chance1.shuffle([02, 04, 10, 12, 14, 17]);
let NrpCats = chance1.shuffle([01, 03, 05, 06, 07, 08]);
let RpExemSlice = chance1.shuffle(counter(11, 28));
let RpPlusExem = RpExemSlice.slice(0, 3); //type 0
let RpMinusExem = RpExemSlice.slice(3, 6); //type 1
let PracLuresExem = RpExemSlice.slice(6, 12); //type 3
let RpTestLuresExem = RpExemSlice.slice(12, 18); //type 4
let NrpExemSlice = chance1.shuffle(counter(11, 22));
let NrpExem = NrpExemSlice.slice(0, 6); //type 2
let NrpTestLuresExem = NrpExemSlice.slice(6, 12); //type 5
let StudyTrialType = [];
StudyTrialType = StudyTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length), repmat(repmat(2, NrpExem.length), NrpCats.length));
StudyTrialType = chance1.shuffle(StudyTrialType);
let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(3, PracLuresExem.length), RpCats.length));
PracTrialType = chance1.shuffle(PracTrialType);
// let TestTrialType = [];
// TestTrialType = TestTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length),
//   repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(4, RpTestLuresExem.length),
//     RpCats.length), repmat(repmat(5, NrpTestLuresExem.length), NrpCats.length));
// TestTrialType = chance1.shuffle(TestTrialType);
let RpPlus = chance1.shuffle(perm_concat(RpCats,RpPlusExem));
let RpPlusPrac = repmat(chance1.shuffle(perm_concat(RpCats,RpPlusExem)),2); //twice as many because of two practice trials
let RpMinus = chance1.shuffle(perm_concat(RpCats,RpMinusExem));
let Nrp = chance1.shuffle(perm_concat(NrpCats,NrpExem));
let PracLures = chance1.shuffle(perm_concat(RpCats,PracLuresExem));
let RpTestLures = chance1.shuffle(perm_concat(RpCats,RpTestLuresExem));
let NrpTestLures = chance1.shuffle(perm_concat(NrpCats,NrpTestLuresExem));
let AllImages = [];
AllImages = AllImages.concat(RpPlus,RpMinus,Nrp,PracLures,RpTestLures,NrpTestLures);

// Quarters only protocol, assumes 144 test trials:
let RandDispersed = [];
RandDispersed = RandDispersed.concat(perm_concat(RpCats.slice(4,6),RpPlusExem),perm_concat(RpCats.slice(4,6),RpMinusExem),
    perm_concat(RpCats.slice(4,6),RpTestLuresExem),perm_concat(NrpCats.slice(4,6),NrpExem),perm_concat(NrpCats.slice(4,6),NrpTestLuresExem));
RandDispersed = chance1.shuffle(RandDispersed);

let Q1 = [];
Q1 = Q1.concat(perm_concat(RpCats.slice(0,1),RpPlusExem),perm_concat(RpCats.slice(0,1),RpMinusExem),
  perm_concat(RpCats.slice(0,1),RpTestLuresExem),perm_concat(NrpCats.slice(0,1),NrpExem),perm_concat(NrpCats.slice(0,1),NrpTestLuresExem));
Q1 = Q1.concat(RandDispersed.slice(0,12));

let Q2 = []
Q2 = Q2.concat(perm_concat(RpCats.slice(1,2),RpPlusExem),perm_concat(RpCats.slice(1,2),RpMinusExem),
    perm_concat(RpCats.slice(1,2),RpTestLuresExem),perm_concat(NrpCats.slice(1,2),NrpExem),perm_concat(NrpCats.slice(1,2),NrpTestLuresExem));
Q2 = Q2.concat(RandDispersed.slice(12,24));

let Q3 = []
Q3 = Q3.concat(perm_concat(RpCats.slice(2,3),RpPlusExem),perm_concat(RpCats.slice(2,3),RpMinusExem),
        perm_concat(RpCats.slice(2,3),RpTestLuresExem),perm_concat(NrpCats.slice(2,3),NrpExem),perm_concat(NrpCats.slice(2,3),NrpTestLuresExem));
Q3 = Q3.concat(RandDispersed.slice(24,36));

let Q4 = []
Q4 = Q4.concat(perm_concat(RpCats.slice(3,4),RpPlusExem),perm_concat(RpCats.slice(3,4),RpMinusExem),
        perm_concat(RpCats.slice(3,4),RpTestLuresExem),perm_concat(NrpCats.slice(3,4),NrpExem),perm_concat(NrpCats.slice(3,4),NrpTestLuresExem));
Q4 = Q4.concat(RandDispersed.slice(36,48));

Q1 = chance1.shuffle(Q1); Q2 = chance1.shuffle(Q2); Q3 = chance1.shuffle(Q3); Q4 = chance1.shuffle(Q4);

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
