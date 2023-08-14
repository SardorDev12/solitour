import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "bosh sahifa" },
  { id: 2, href: "#about", text: "haqimizda" },
  { id: 3, href: "#services", text: "xizmatlar" },
  { id: 4, href: "#tours", text: "sayohatlar" },
];

export const socialLinks = [
  { id: 1, href: "#", name: "telegram" },
  { id: 2, href: "#", name: "instagram" },
  { id: 3, href: "#", name: "facebook" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Pulingizni Tejang",
    text: "Biz bilan pulingizni sezilarli darajada tejaysiz.",
  },
  {
    id: 1,
    icon: "fas fa-tree fa-fw",
    title: "Ajoyib Atmosfera",
    text: "Bizning jamoa sizga unutilmas lahzalar tuhfa etadi.",
  },
  {
    id: 1,
    icon: "fas fa-socks fa-fw",
    title: "Qulaylik",
    text: "Maksimal zavq olishingiz uchun barcha sharoitlar ta'minlanadi.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "19-oktyabr, 2023",
    title: "Makka",
    desc: "Makkaga safar qilish — musulmonlar uchun ahamiyatli ibodat. Har bir musulmon ushbu maqsadga erishish uchun harakat qiladi. Makkaning muqaddas joylari barcha sayyohlarga unutilmas xotiralar sovg'a qiladi.",
    location: "BAA",
    duration: "14 kun",
    price: "1200$",
  },
  {
    id: 2,
    img: tour2,
    date: "26-Oktyabr, 2023",
    title: "Madina",
    desc: "Madinaga — musulmonlar uchun muqaddas va e'tiborli joy. Payg'ambar Muhammad sollallohu alayhi vasallamning vafot etishi bog'liq qur'oniy shahar sifatida mashhur. Bu muqaddas shaharda ajib masjidda ibodat qilish imkoniyati mavjud.",
    location: "BAA",
    duration: "7 kun",
    price: "1400$",
  },
  {
    id: 3,
    img: tour3,
    date: "28-Oktyabr, 2023",
    title: "Turkiya",
    desc: "Turkiyaga sayohat — janubiy Yevropa va shimoliy Osiyoning ajoyib tabiati, tarixiy shaharlar va zamonaviy san'ati bilan mashhur. Istanbul shahri esa geografik ahamiyati va tarixiy merosi bilan sayohatchilar uchun ulkan qiziqish manbaidir.",
    location: "Yevroosiyo",
    duration: "8 kun",
    price: "5000$",
  },
  {
    id: 4,
    img: tour4,
    date: "7-Noyabr, 2023",
    title: "Misr",
    desc: "Misrga sayohat — qadimiy tarixi, piramidalar, Nil daryosi bilan mashhur. Kahiraning Islom madaniyati va zamonaviy shahar hayoti ham barchani jalb qiladi. Luksor, Abu Simbel va Giza piramidalari turistlar uchun ulkan qiziqarli manzil hisoblanadi.",
    location: "Afrika",
    duration: "20 kun",
    price: "3300$+",
  },
  {
    id: 5,
    img: tour5,
    date: "22-Noyabr, 2023",
    title: "Buxoro",
    desc: "Buxoro — O'zbekistonning tarixiy shahri, Islom madaniyatining yirik markazi. Al-Xorazmiy, Al-Buxoriy va bir qancha boshqa olim zotlari shu joyda faoliyat yuritgan. Buxoroning tarixiy masjidlari, madrasalalari va ko'plab diniy merosi Islom dunyosining ahamiyatli qismidir.",
    location: "Osiyo",
    duration: "20 kun",
    price: "3300$+",
  },
  {
    id: 6,
    img: tour6,
    date: "1-Dekabr, 2023",
    title: "Qatar",
    desc: "Qatar — Islom madaniyatining o'ziga xos joylashuvi bilan tanilgan mamlakat. Bu joyda diniy ob'ektlar, masjidlar va Islom tarixining namunalarini topish mumkin. Doha shahri Islom san'ati va madaniyatini o'zida jamlagan va dunyo bo'ylab sayohatchilar uchun muhim manzil hisoblanadi.",
    location: "BAA",
    duration: "20 kun",
    price: "3000$+",
  },
];
