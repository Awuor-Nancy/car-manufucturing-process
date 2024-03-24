class Phase {
  constructor(name, description, subphases, subtasks, durationWeeks) {
    this.name = name;
    this.description = description;
    this.subphases = subphases;
    this.subtasks = subtasks;
    this.durationWeeks = durationWeeks;
    this.data = {}; // Added data property for hover details
  }

  renderPhase(container) {
    const phaseElement = document.createElement('div');
    phaseElement.classList.add('phase');

    const title = document.createElement('h2');
    title.innerHTML = `<span class="material-icons-outlined">${this.getIcon()}</span>${this.name}`;

    const description = document.createElement('p');
    description.innerText = this.description;

    const subphaseList = document.createElement('ul');
    subphaseList.classList.add('subphases');

    if (this.subphases) {
      this.subphases.forEach(subphase => {
        const subphaseItem = document.createElement('button');
        subphaseItem.innerText = subphase.name;

        const subphaseDescription = document.createElement('p');
        subphaseDescription.innerText = subphase.description;
        subphaseItem.appendChild(subphaseDescription);

        const subtaskList = document.createElement('ul');
        subtaskList.classList.add('subtasks');
        if (subphase.subtasks) {
          subphase.subtasks.forEach(subtask => {
            const subtaskItem = document.createElement('li');
            subtaskItem.innerText = subtask;

            subtaskList.appendChild(subtaskItem);
          });
        }

        subphaseItem.appendChild(subtaskList);
        subphaseList.appendChild(subphaseItem);

        // Add click event listener to toggle visibility of subtasks
        subphaseItem.addEventListener('click', () => {
          const clickedSubphase = subphaseItem.parentNode;
          const subtaskList = clickedSubphase.querySelector('.subtasks');
          subtaskList.classList.toggle('active');
        });
      });
    }

    phaseElement.appendChild(title);
    phaseElement.appendChild(description);
    phaseElement.appendChild(subphaseList);

    // Add click event listener to toggle visibility of subphases
    title.addEventListener('click', () => {
      subphaseList.classList.toggle('active');
    });

    // Add event listener to toggle visibility of subphases for "External Research"
    if (this.name === "External Research") {
      const externalButton = phaseElement.querySelector('button');
      const externalSubphases = externalButton.nextElementSibling;
      externalButton.addEventListener('click', () => {
        externalSubphases.classList.toggle('active');
      });
    }

    container.appendChild(phaseElement);
  }


  getIcon() {
    switch (this.name) {
      case "Market Research":
        return "business";
      case "External Research":
        return "public";
      case "Internal Research":
        return "home";
      case "B2C":
        return "people";
      case "B2B":
        return "business";
      case "Planning":
        return "playlist_add_check";
      case "Design":
        return "style";
      case "Manufacturing":
        return "build";
      case "Sales and Marketing":
        return "shopping_cart";
      case "Online":
        return "online_prediction";
      case "Dealership":
        return "storefront";
      default:
        return "info";
    }
  }
}

// Define the phases 
const phases = [
  // new Phase(
  //   "Market Research",
  //   "Gather information about customer needs and market trends.",
  //   [
  //     new Phase(
  //       "External Research",
  //       "Conduct research outside the organization.",
  //       [
  //         new Phase(
  //           "B2C",
  //           "Research directly involving consumers.",
  //           [
  //             "Online",
  //             "Interview",
  //             "Public Data",
  //             "Health"
  //           ],
  //           [],
  //           2
  //         ),
  //         new Phase(
  //           "B2B",
  //           "Research involving other businesses.",
  //           [],
  //           [],
  //           2
  //         )
  //       ],
  //       [],
  //       2
  //     ),
  //     new Phase(
  //       "Internal Research",
  //       "Conduct research within the organization.",
  //       [],
  //       [],
  //       2
  //     )
  //   ],
  //   [],
  //   4
  // ),
  new Phase(
    "Planning",
    "Define car specifications, features, budget, and timeline.",
    [
      new Phase(
        "PRD",
        "Gather requirements and define product specifications.",
        [],
        [],
        4
      ),
      new Phase(
        "Specs",
        "Define technical specifications and features.",
        [],
        [],
        4
      )
    ],
    [],
    8
  ),
  new Phase(
    "Design",
    "Design the car's exterior, interior, and engineering.",
    [
      new Phase(
        "Hardware",
        "Design the physical components of the car.",
        [],
        [
          "Frame design",
          "Engine specifications",
          "Chassis development"
        ],
        8
      ),
      new Phase(
        "Software",
        "Develop software systems for the car.",
        [],
        [
          "Infotainment system",
          "Autonomous driving algorithms",
          "Vehicle control software"
        ],
        8
      )
    ],
    [],
    16
  ),
  new Phase(
    "Manufacturing",
    "Build the car according to the design specifications.",
    [
      new Phase(
        "Material",
        "Procure raw materials for manufacturing.",
        [],
        [],
        8
      ),
      new Phase(
        "Production",
        "Manufacture car components and assemble the car.",
        [],
        [],
        16
      )
    ],
    [],
    24
  ),
  new Phase(
    "Sales and Marketing",
    "Promote and sell the car to customers.",
    [
      new Phase(
        "Online",
        "Sell cars through online platforms.",
        [],
        [],
        16
      ),
      new Phase(
        "Dealership",
        "Sell cars through dealership networks.",
        [],
        [],
        16
      )
    ],
    [],
    32
  )
];

document.addEventListener("DOMContentLoaded", function () {
  const timelineList = document.querySelector('.timeline');
  const searchInput = document.getElementById('searchInput')
  phases.forEach(phase => phase.renderPhase(timelineList));

  searchInput.addEventListener('input', function () {
    const searchText = this.value.trim().toLowerCase();
    const phases = timelineList.querySelectorAll('.phase');

    phases.forEach(phase => {
      const phaseName = phase.querySelector('h2').innerText.toLowerCase();
      const subphases = phase.querySelectorAll('.subphases');

      if (phaseName.includes(searchText)) {
        phase.style.display = 'block';
      } else {
        phase.style.display = 'none';
      }

      subphases.forEach(subphase => {
        const subphaseName = subphase.innerText.toLowerCase();
        if (subphaseName.includes(searchText)) {
          subphase.style.display = 'block';
        } else {
          subphase.style.display = 'none';
        }
      });
    });
  });

  // event listener to toggle visibility of subphases and subtasks
  const externalButton = document.querySelector('.phase:nth-child(1) button');
  const externalSubphases = document.querySelector('.phase:nth-child(1) .subphases');

  externalButton.addEventListener('click', (event) => {
    event.stopPropagation();
    externalSubphases.classList.toggle('active');
  });

  // event listener to toggle visibility of subtasks for "B2C"
  const b2cButton = document.querySelector('.phase:nth-child(1) .subphases .subphase:nth-child(1) h3');
  const b2cSubtasks = document.querySelector('.phase:nth-child(1) .subphases .subphase:nth-child(1) .subtasks');

  // Hide subtasks for "B2C" initially
  b2cSubtasks.style.display = 'none';

  b2cButton.addEventListener('click', () => {
    b2cSubtasks.style.display = b2cSubtasks.style.display === 'none' ? 'block' : 'none';
  });
});
