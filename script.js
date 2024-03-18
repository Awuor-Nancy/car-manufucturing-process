const phases = document.querySelectorAll('.phase')
const phaseDetails = document.getElementById('phase-details')

phases.forEach(phase => {
    phase.addEventListener('click', () => {
        let selectedPhase = phase.dataset.phase;
        phaseDetails.textContent = '';

        switch (selectedPhase) {
            case 'research':
                phaseDetails.appendChild(createResearchComponent());
                break;
            case 'planning':
                phaseDetails.appendChild(createPlanningComponent());
                break;
            case 'design':
                phaseDetails.appendChild(createDesignComponent());
                break;
            case 'manufacturing':
                phaseDetails.appendChild(createManufacturingComponent());
                break;
            case 'sales':
                phaseDetails.appendChild(createSalesComponent());
                break;
            default:
                phaseDetails.textContent = 'invalid phase';
        }
        // show details
        phaseDetails.style.display = 'block';
        phases.forEach(phase.classList.remove('active'));
        phase.classList.add('active');
    })
})

const createResearchComponent = () => {
    const researchContent = document.createElement('div');
    researchContent.innerHTML = `<h3>Market Research Phase</h3>
    <p>This phase entails gathering information and insights about the target market</p>`;
    return researchContent;
};

const createPlanningComponent = () => {
    const planningContent = document.createElement('div');
    planningContent.innerHTML = `<h3>Planning</h3>
    <p>This phase involves creating a roadmap for development, defining project timelines, resource allocation, and budgeting.</p>`;
    return planningContent;
};

const createDesignComponent = () => {
    const designContent = document.createElement('div');
    designContent.innerHTML = `<h3>Design</h3>
    <p>This phase involves product design, prototyping, user testing, and iterating on the design based on feedback.</p>`;
    return designContent;
};

const createManufacturingComponent = () => {
    const manufacturingContent = document.createElement('div');
    manufacturingContent.innerHTML = `<h3>Manufacturing</h3>
    <p>This phase involves production setup, quality control, and ensuring efficient manufacturing processes.</p>`;
    return manufacturingContent;
};

const createSalesComponent = () => {
    const salesContent = document.createElement('div');
    salesContent.innerHTML = `<h3>Sales and Marketing</h3>
    <p>This phase involves marketing the product, establishing sales channels, and managing customer relationships.</p>`;
    return salesContent;
};

