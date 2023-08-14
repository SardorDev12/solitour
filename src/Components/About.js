import about from "../images/about.jpeg";
import Title from "./Title";

function About() {
  return (
    <section className="section" id="about">
      <Title title={"biz haqimizda"} />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>turfa xillikni his qiling</h3>
          <p>
            Dunyo bo'ylab sayohat qilish — bu dunyo bo'ylab turar joylarini
            kashf qilib, turli madaniyat va tabiat tajribalarini olish uchun
            ajoyib imkoniyat. Yangi odamlar bilan tanishish, dunyoqarashni
            kengaytirish va o'zgacha xotiralarga ega bo'lish imkonini beradi.
          </p>
          <p>
            Sayohat dunyoni keng ko'rinishda tajriba qilish uchun eng muhim
            vosita. Dunyo bo'ylab o'tkazilayotgan sayohatlar, hayotni zamonaviy,
            butunlay yangi ko'rinishda ko'rib chiqishga imkoniyat yaratadi.
          </p>
          <a href="/" className="btn">
            ko'roq o'qish
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
