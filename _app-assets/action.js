
// Remove alert
document.querySelector('.no-js-alert').remove()


// Projects
const projects = [
    {
        name: 'Drone Icon',
        thumbnail_path: 'drone-icon/drone-icon.svg',
    },
    {
        name: 'Infinity Loop',
        thumbnail_path: 'infinity-loop/infinity-loop-v2.svg',
    },
    {
        name:'Low Poly Background',
        thumbnail_path: 'low-poly-background/low-poly-background.svg',
    },
    {
        name: 'Neon Text',
        thumbnail_path: 'neon-text/neon-text.svg',
    },
    {
        name: 'Gradient Letter Logo',
        thumbnail_path: 'simple-letter-logo/letter-d-logo.svg',
    },
    {
        name: 'Transparent Capsule',
        thumbnail_path: 'transparent-capsule/transparent-capsule.svg',
    }
]


// Template
function template(name, image) {
    return `
        <li>
            <h2> ${name} </h2>
            <img src="${image}">
        </li>
    `
}


// Populate projects
const list = document.querySelector('ul.project-list')

projects.forEach( (project) => {
    list.insertAdjacentHTML('beforeend', template(project.name, project.thumbnail_path) )
})


