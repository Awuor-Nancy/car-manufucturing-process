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

