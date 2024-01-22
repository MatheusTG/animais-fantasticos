export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = numero.innerText;
      const incremento = total / 100;

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = Math.floor(start);
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer
  const observerTarget = document.querySelector(".numeros");
  function handleMutation() {
    observer.disconnect()
    animaNumeros();
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
