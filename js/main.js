document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalAuthor = document.getElementById("modal-author");
  const modalStory = document.getElementById("modal-story");
  const closeBtn = document.querySelector(".modal-close");

  const h1 = document.querySelector(".hero-video h1");
  const h2 = document.querySelector(".hero h2");
  const h5 = document.querySelector(".hero h5");
  const header = document.querySelector("header");

  window.scrollTo(0, 0);

  const recuerdos = [
    ...document.querySelectorAll(".container article, .container2 article"),
  ];

  recuerdos.forEach((article, index) => {
    article.addEventListener("click", () => {
      const data = historiasCompletas[index];
      if (!data) return;

      modalImg.src = data.img;
      modalTitle.textContent = data.titulo;
      modalAuthor.textContent = data.autor;
      modalStory.textContent = data.historia;
      modal.showModal();
    });
  });

  closeBtn.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  // Línea de tiempo
  const tl = gsap.timeline({
    ease: "power2.out",
  });

  tl.to(h1, {
    fontSize: "calc(1vw + 1.5rem)",
    duration: 2,
    delay: 1.5,
  })
    .from(
      "video",
      {
        width: "100%",
        height: "100%",
        marginBottom: "0vh",
        borderRadius: "0px",
        duration: 3,
      },
      "<"
    )
    .to(h1, {
      opacity: 0,
    })
    .from(h2, { autoAlpha: 0, y: -15 })
    .from(h5, { autoAlpha: 0, y: -15 })
    .add(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    })
    .from(header, { autoAlpha: 0, y: "-100%" });
});

const historiasCompletas = [
  {
    img: "https://fastly.picsum.photos/id/474/500/400.jpg?hmac=pTWOxYrlha0xa2bnS2ozzWJvIUifXeiRtd5C5gjzdZw",
    titulo: "El sauce del silencio",
    autor: "por Clara",
    historia:
      "Bajo ese sauce llorón, mi abuela me enseñó a leer. Cada palabra parecía flotar con las hojas. Volvía siempre ahí cuando el mundo se volvía muy ruidoso.",
  },
  {
    img: "https://fastly.picsum.photos/id/84/500/400.jpg?hmac=y5ehkn-AWFiVgCZ_3ISRuYiMnnA6JnQyVXucVLLMSss",
    titulo: "Domingos de plaza",
    autor: "por Leandro",
    historia:
      "Nos juntábamos a tomar mate sin mirar el reloj. Las charlas, las risas, y hasta los silencios eran parte de una rutina que extraño cada domingo.",
  },
  {
    img: "https://fastly.picsum.photos/id/625/500/400.jpg?hmac=2Q6KxREOCW7e8Yzu1vnVmPdHt-uF_FwwsEWVyQ7Ml-U",
    titulo: "Sombras de escuela",
    autor: "por Valentina",
    historia:
      "Ese recreo fue diferente. Era la última vez que jugábamos juntos en esa galería. No sabíamos que crecer venía tan rápido.",
  },
  {
    img: "https://fastly.picsum.photos/id/372/500/400.jpg?hmac=5cRMbuzmideb4UckmTN8EyPl7xtvIU3RqXIgUa6WQ_A",
    titulo: "El árbol que guardó secretos",
    autor: "por Marcos",
    historia:
      "Enterré ahí mi primera carta de amor. No era para nadie, solo para guardar eso que sentía por primera vez sin entenderlo.",
  },
  {
    img: "https://fastly.picsum.photos/id/503/500/400.jpg?hmac=DyJr4JMlEf9aNxZUkH_bo5mYr09IgpFjJGRXBRQl8Tc",
    titulo: "Meriendas en la galería",
    autor: "por Sofía",
    historia:
      "Las tostadas con manteca, el ruido de los platos viejos, y ese sol entrando por la persiana. Todo eso es mi infancia.",
  },
  {
    img: "https://fastly.picsum.photos/id/156/500/400.jpg?hmac=SJhGQ4BbDQlDL9Ckfd1frwE0EshHZNVFSPC67zGcmLw",
    titulo: "Cuando el verano duraba más",
    autor: "por Tomás",
    historia:
      "El tiempo se estiraba en las tardes de bici, con los pies sucios y la cara llena de helado. No queríamos que anocheciera nunca.",
  },
  {
    img: "https://fastly.picsum.photos/id/460/500/400.jpg?hmac=oIt24I9-5cu6xe1zLAP6t1QVVQDjl77z0yNKV_b0piM",
    titulo: "Charlas en el puente",
    autor: "por Anita",
    historia:
      "Cruzábamos el puente solo para hablar de la vida. No sabíamos qué queríamos, pero sabíamos que estábamos bien ahí, juntos.",
  },
  {
    img: "https://fastly.picsum.photos/id/12/500/400.jpg?hmac=C88PgXVHRJz_m0CcvxXbIDr0BaWA1OBMmdNCgkuZ0So",
    titulo: "Nostalgia en 35mm",
    autor: "por Diego",
    historia:
      "Mi papá me llevó al cine del pueblo cuando tenía 6 años. Vi sombras bailando en la pantalla y quise congelar ese instante para siempre.",
  },
  {
    img: "https://fastly.picsum.photos/id/1055/500/400.jpg?hmac=uWQWiA5XCueBIAl0Hr_BPR7TwmKl8pwRFGo_ouoSHG0",
    titulo: "El molino y la infancia",
    autor: "por Laura",
    historia:
      "El molino viejo ya no gira, pero en mis recuerdos sí. Cada vez que lo miraba desde la bici, sentía que estaba volviendo a casa, aunque viniera de jugar lejos.",
  },
  {
    img: "https://fastly.picsum.photos/id/830/500/400.jpg?hmac=EJVk8PzMENrcjK4eoKP6TOi2b-PQcFhD2p8JcCVcxO8",
    titulo: "Rincones de papel",
    autor: "por Nati",
    historia:
      "Ahí escondía mis dibujos. Cada hoja doblada tenía un mundo inventado, una historia sin leer. Nadie los vio, pero yo los viví todos.",
  },
  {
    img: "https://fastly.picsum.photos/id/370/500/400.jpg?hmac=l3knVat2rZWc5Y0l5CzGVrJIkvF2ohQCCJ3NsTNtnL8",
    titulo: "Almacén de abuela",
    autor: "por Elías",
    historia:
      "Ese lugar olía a harina y a abrazo. Me dejaban marcar en la libreta, y era como tener poder. Lo que no tenía era apuro: me sentía eterno entre las góndolas.",
  },
  {
    img: "https://fastly.picsum.photos/id/969/500/400.jpg?hmac=esoabtsyL4zr5m5WYhVayKemNAmiu6R9yF4tttx-OeU",
    titulo: "Pasillos sin tiempo",
    autor: "por Miriam",
    historia:
      "Las paredes eran frías, pero sabían todo de mí. Caminé por esos pasillos sintiendo que el silencio también era una forma de compañía.",
  },
  {
    img: "https://fastly.picsum.photos/id/923/500/400.jpg?hmac=NgYe-Km8Gz4nUY_kuKCQmkQhaHYSq5-uxcLK1f96RxE",
    titulo: "La bici y el barrio",
    autor: "por Santi",
    historia:
      "Con mi bici de caño cromado, conocí cada baldosa rota del barrio. Si cerrás los ojos, todavía se escucha el timbre en las tardes de verano.",
  },
  {
    img: "https://fastly.picsum.photos/id/977/500/400.jpg?hmac=BSsZ-fOPqrrnBlNK0CBXc-IxxN61szClV9k0Zq4-UOU",
    titulo: "Verano en la quinta",
    autor: "por Mili",
    historia:
      "Mi tío nos llevaba a la quinta a juntar ciruelas. Las manos pegajosas, los pies descalzos, y la radio sonando desde el tractor: todo era perfecto sin saberlo.",
  },
  {
    img: "https://fastly.picsum.photos/id/688/500/400.jpg?hmac=ihqHMMHbg0gEAX8O0LLmtnoyG88MWsGlLNBc3Ai8E2c",
    titulo: "Lluvia en el ventanal",
    autor: "por Joaquín",
    historia:
      "Me sentaba ahí a mirar llover y a inventar finales para cosas que no habían terminado. Ese vidrio empañado conocía mis mejores pensamientos.",
  },
];

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

// ejemplo simple de renderizado
historiasCompletas.slice(0, 8).forEach((recuerdo) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <img src="${recuerdo.img}" alt="${recuerdo.titulo}" />
    <div><p>${recuerdo.titulo}<br><small>${recuerdo.autor}</small></p></div>
  `;
  container.appendChild(article);
});

historiasCompletas.slice(8, 15).forEach((recuerdo) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <img src="${recuerdo.img}" alt="${recuerdo.titulo}" />
    <div><p>${recuerdo.titulo}<br><small>${recuerdo.autor}</small></p></div>
  `;
  container2.appendChild(article);
});
