// lib/calculProgramme.js

const joursArabes = {
  1: 'الإثنين',
  2: 'الثلاثاء',
  3: 'الأربعاء',
  4: 'الخميس',
  5: 'الجمعة',
  6: 'السبت',
  7: 'الأحد',
};

function nomJourArabe(numeroJour) {
  if (numeroJour < 1 || numeroJour > 7)
    throw new Error('Le numéro de jour doit être entre 1 et 7');
  return joursArabes[numeroJour];
}

function nombreJoursDepuis(date) {
  const aujourdHui = new Date();
  const difference = Math.floor(Math.abs((aujourdHui - date) / (1000 * 60 * 60 * 24)));
  return difference;
}

const tf1 = [
  { name: "إهنهاون", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إدردار", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إساوار", time: "امساءاً7 ", type: "اماغور", day: "" },
  { name: "إساوار", time: "-", type: "اماغور", day: "" },
  { name: "إساوار", time: "-", type: "اماغور", day: "" },
  { name: "ايت خويا حسين", time: "امساءاً7 ", type: "-", day: "" },
  { name: "إملوان", time: "امساءاً7 ", type: "-", day: "" },
  { name: "ايت عبدي", time: "امساءاً7 ", type: "-", day: "" }
];

const tf2 = [
  { name: "إدردار", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إهنهاون", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إساوار", time: "امساءاً7 ", type: "اماغور", day: "" },
  { name: "إساوار", time: "-", type: "اماغور", day: "" },
  { name: "إساوار", time: "-", type: "اماغور", day: "" },
  { name: "ايت خويا حسين", time: "امساءاً7 ", type: "-", day: "" },
  { name: "إملوان", time: "امساءاً7 ", type: "-", day: "" },
  { name: "ايت عبدي", time: "امساءاً7 ", type: "-", day: "" }
];

const tm1 = [
  { name: "إهنهاون", time: "امساءاً7 ", type: "اماغور", day: "" },
  { name: "إهنهاون", time: "-", type: "اماغور", day: "" },
  { name: "إدردار", time: "9صباحا", type: "اماغور", day: "" },
  { name: "إساوار", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إساوار", time: "-", type: "أفردي", day: "" },
  { name: "ايت خويا حسين", time: "امساءاً7 ", type: "-", day: "" },
  { name: "إملوان", time: "امساءاً7 ", type: "-", day: "" },
  { name: "ايت عبدي", time: "امساءاً7 ", type: "-", day: "" }
];

const tm2 = [
  { name: "إدردار", time: "امساءاً7 ", type: "اماغور", day: "" },
  { name: "إدردار", time: "-", type: "اماغور", day: "" },
  { name: "إهنهاون", time: "9صباحا", type: "اماغور", day: "" },
  { name: "إساوار", time: "امساءاً7 ", type: "أفردي", day: "" },
  { name: "إساوار", time: "-", type: "أفردي", day: "" },
  { name: "ايت خويا حسين", time: "امساءاً7 ", type: "-", day: "" },
  { name: "إملوان", time: "امساءاً7 ", type: "-", day: "" },
  { name: "ايت عبدي", time: "امساءاً7 ", type: "-", day: "" }
];

export function calculer(nombrejour) {
  const tab = [];
  let type = 2, p = 1, k = -1, j = 3, m = 1;
  const nbj = nombreJoursDepuis(new Date(2023, 2, 9));
  const somme = nbj + nombrejour;

  for (let i = 0; i < somme; i++) {
    k++;
    j++;
    if (j === 8) j = 1;
    if (k === 8) {
      k = 0;
      m++;
      type = type === 1 ? 2 : 1;
      if (m === 3) {
        p = p === 1 ? 2 : 1;
        m = 1;
      }
    }

    if (i >= nbj) {
      let item = null;
      if (type === 1) {
        item = p === 1 ? { ...tf1[k] } : { ...tf2[k] };
      } else {
        item = p === 1 ? { ...tm1[k] } : { ...tm2[k] };
      }
      item.day = nomJourArabe(j);
      const today = new Date(2023, 2, 9);
      today.setDate(today.getDate() + i);
      item.date = today.toLocaleDateString('en');
      tab.push(item);
    }
  }

  return tab;
}
