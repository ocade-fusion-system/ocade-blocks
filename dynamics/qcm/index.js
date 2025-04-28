document.addEventListener("DOMContentLoaded", () => {
  const qcmWrappers = document.querySelectorAll(".wp-block-ocade-blocks-qcm");

  qcmWrappers.forEach((wrapper) => {
    const options = wrapper.querySelectorAll(".qcm-option");

    options.forEach((option) => {
      option.addEventListener("click", (event) => {
        if (event.detail === 0) return; // ignore clic clavier sans intention
        handleSelect(wrapper, option);
      });

      option.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleSelect(wrapper, option);
        }
      });
    });
  });

  function handleSelect(wrapper, option) {
    wrapper
      .querySelectorAll(".qcm-option")
      .forEach((opt) => opt.removeAttribute("data-checked"));
    option.setAttribute("data-checked", "true");
    wrapper.setAttribute("data-checked", "true");

    const input = option.querySelector("input");
    if (input) input.checked = true;

    const isCorrect = input?.dataset.correct === "true";
    wrapper.setAttribute("data-success", isCorrect ? "true" : "false");

    const feedback = wrapper.querySelector(".qcm-aria-feedback");
    if (feedback)
      feedback.textContent = isCorrect
        ? "Bonne réponse !"
        : "Mauvaise réponse.";
  }
});
