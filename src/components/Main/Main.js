import React from "react";

const Main = () => {
  return (
    <main>
      <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src="assets/img/about.jpg" alt="" />
          </div>

          <div>
            <h2 class="about__subtitle">I'am Marlon</h2>
            <p class="about__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </section>
      <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">
          <div>
            <h2 class="skills__subtitle">Profesional Skills</h2>
            <p class="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-html5 skills__icon"></i>
                <span class="skills__name">HTML5</span>
              </div>
              <div class="skills__bar skills__html"></div>
              <div>
                <span class="skills__percentage">95%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-css3 skills__icon"></i>
                <span class="skills__name">CSS3</span>
              </div>
              <div class="skills__bar skills__css"></div>
              <div>
                <span class="skills__percentage">85%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-javascript skills__icon"></i>
                <span class="skills__name">JAVASCRIPT</span>
              </div>
              <div class="skills__bar skills__js"></div>
              <div>
                <span class="skills__percentage">65%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxs-paint skills__icon"></i>
                <span class="skills__name">UX/UI</span>
              </div>
              <div class="skills__bar skills__ux"></div>
              <div>
                <span class="skills__percentage">85%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" class="skills__img" />
          </div>
        </div>
      </section>
      <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
          <div class="work__img">
            <img src="assets/img/work1.jpg" alt="" />
          </div>
          <div class="work__img">
            <img src="assets/img/work2.jpg" alt="" />
          </div>
          <div class="work__img">
            <img src="assets/img/work3.jpg" alt="" />
          </div>
          <div class="work__img">
            <img src="assets/img/work4.jpg" alt="" />
          </div>
          <div class="work__img">
            <img src="assets/img/work5.jpg" alt="" />
          </div>
          <div class="work__img">
            <img src="assets/img/work6.jpg" alt="" />
          </div>
        </div>
      </section>
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <form action="" class="contact__form">
            <input type="text" placeholder="Name" class="contact__input" />
            <input type="mail" placeholder="Email" class="contact__input" />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              class="contact__input"
            ></textarea>
            <input
              type="button"
              value="Enviar"
              class="contact__button button"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
