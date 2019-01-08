let RpCats = [12, 14, 17, 02, 04, 10];
let NrpCats = [01, 03, 05, 06, 07, 08];
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
PracTrialType = PracTrialType.concat(repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(3, PracLuresExem.length), RpCats.length));
PracTrialType = chance1.shuffle(PracTrialType);
let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length),
  repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(4, RpTestLuresExem.length),
    RpCats.length), repmat(repmat(5, NrpTestLuresExem.length), NrpCats.length));
TestTrialType = chance1.shuffle(TestTrialType);
let RpPlus = chance1.shuffle(perm_concat(RpCats,RpPlusExem));
let RpMinus = chance1.shuffle(perm_concat(RpCats,RpMinusExem));
let Nrp = chance1.shuffle(perm_concat(NrpCats,NrpExem));
let PracLures = chance1.shuffle(perm_concat(RpCats,PracLuresExem));
let RpTestLures = chance1.shuffle(perm_concat(RpCats,RpTestLuresExem));
let NrpTestLures = chance1.shuffle(perm_concat(NrpCats,NrpTestLuresExem));
let AllImages = AllImages.concat(RpPlus,RpMinus,Nrp,PracLures,RpTestLures,NrpTestLures);

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
