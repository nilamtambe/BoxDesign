
const boxes = document.querySelectorAll(".box");

const sizeMappings = {
  small: { width: "100px", height: "100px" },
  medium: { width: "150px", height: "150px" },
  large: { width: "200px", height: "200px" },
};

function handleSizeChange(event) {
  const selectedSize = event.target.value;
  const box = event.target.closest(".box");
  const sizeStyle = sizeMappings[selectedSize];

  if (box && sizeStyle) {
    box.style.width = sizeStyle.width;
    box.style.height = sizeStyle.height;
    console.log("Size changed to:", selectedSize);
  }

  event.stopPropagation();
}

function handleColorChange(event) {
  const selectedColor = event.target.value;
  const box = event.target.closest(".box");

  if (box) {
    box.style.backgroundColor = selectedColor;

    if (selectedColor === "black") {
      box.style.color = "white";
    } else {
      box.style.color = "black";
    }
    console.log("Color changed to:", selectedColor);
  }

  event.stopPropagation();
}

function toggleBox(box) {
  const wasExpanded = box.classList.contains("expanded");

  boxes.forEach((b) => {
    b.classList.remove("expanded");
    const container = b.querySelector(".selector-container");
    if (container) {
      container.style.display = "none";
    }
  });

  if (!wasExpanded) {
    box.classList.add("expanded");
    const container = box.querySelector(".selector-container");
    if (container) {
      container.style.display = "block";
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleBox(box);
  });
});

document.addEventListener("click", (event) => {
  if (
    event.target.closest(".box") ||
    event.target.closest("select") ||
    event.target.tagName === "OPTION"
  ) {
    return;
  }

  boxes.forEach((box) => {
    box.classList.remove("expanded");
    const container = box.querySelector(".selector-container");
    if (container) {
      container.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("select.size").forEach((select) => {
    select.addEventListener("change", handleSizeChange);
    select.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll("select.color").forEach((select) => {
    select.addEventListener("change", handleColorChange);
    select.addEventListener("click", (e) => e.stopPropagation());
  });

  const selectorContainers = document.querySelectorAll(".selector-container");
  selectorContainers.forEach((container) => {
    container.style.display = "none";
  });

  document
    .querySelectoAll('input[type="radio"][name="boxSelect"]')
    .forEach((radio) => {
      radio.addEventListener("change", function () {
        const box = this.closest(".box");
        toggleBox(box);
      });
    });
});
