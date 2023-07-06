document.getElementById("madLibForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const adj1 = document.getElementById("adj1").value;
  const noun1 = document.getElementById("noun1").value;
  const adj2 = document.getElementById("adj2").value;
  const clothing1 = document.getElementById("clothing1").value;
  const bodyPart = document.getElementById("bodyPart").value;
  const verb1 = document.getElementById("verb1").value;
  const food1 = document.getElementById("food1").value;

  const madLibDisplay = document.querySelector(".madlib");
  let missingFields = [];

  if (adj1 === "") {
    missingFields.push("adjective 1");
  }

  if (noun1 === "") {
    missingFields.push("noun 1");
  }

  if (adj2 === "") {
    missingFields.push("adjective 2");
  }

  if (clothing1 === "") {
    missingFields.push("clothing");
  }

  if (bodyPart === "") {
    missingFields.push("body part");
  }

  if (verb1 === "") {
    missingFields.push("verb");
  }

  if (food1 === "") {
    missingFields.push("food");
  }

  if (missingFields.length > 0) {
    const missingFieldsMessage =
      "<b>Please add a word to the following placeholders before generating a sentence:</b> " +
      missingFields.join(", ");
    madLibDisplay.innerHTML = missingFieldsMessage;
  } else {
    const story = `The cows were sleeping in the field and as they were starting to wake up, the sun came up. The <b><span class="rainbow-effect">${adj1}</span></b> farmer came walking toward them with the <b><span class="rainbow-effect">${noun1}</span></b> to feed them. The grass was <b><span class="rainbow-effect">${adj2}</span></b> and they were excited - everything was really great. But suddenly there was disaster, the farmer had lost his <b><span class="rainbow-effect">${clothing1}</span></b> and all the <b><span class="rainbow-effect">${noun1}</span></b> went flying everywhere. The cows held their hooves over their <b><span class="rainbow-effect">${bodyPart}</span></b> because they could not watch. Somehow the farmer pulled his outfit together and from the truck produced some <b><span class="rainbow-effect">${food1}</span></b>. All the cows <b><span class="rainbow-effect">${verb1}</span></b> for joy and threw up their hooves to dance.`;

    madLibDisplay.innerHTML = story;
  }
});
