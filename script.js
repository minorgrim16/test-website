const navGroups = document.querySelectorAll(".nav-group");

navGroups.forEach((group) => {
  const button = group.querySelector(".nav-toggle");

  button.addEventListener("click", () => {
    const isOpen = group.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));

    navGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.classList.remove("is-open");
        otherGroup
          .querySelector(".nav-toggle")
          .setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  navGroups.forEach((group) => {
    if (!group.contains(event.target)) {
      group.classList.remove("is-open");
      group.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
    }
  });
});
