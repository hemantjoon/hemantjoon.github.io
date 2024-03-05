let btnHome = document.getElementById('btnHome');
let btnAbout = document.getElementById('btnAbout');
let btnSkills = document.getElementById('btnSkillst');
let btnProjects = document.getElementById('btnProjects');
let btnPublications = document.getElementById('btnPublications');
let btnContact = document.getElementById('btnContact');

btnHome.onclick = function() {
    document.getElementById('home').scrollIntoView();
}

btnAbout.onclick = function() {
    document.getElementById('about').scrollIntoView();
}

btnSkills.onclick = function() {
    document.getElementById('skills').scrollIntoView();
}

btnProjects.onclick = function() {
    document.getElementById('projects').scrollIntoView();
}

btnPublications.onclick = function() {
    document.getElementById('publications').scrollIntoView();
}

btnContact.onclick = function() {
    document.getElementById('contact').scrollIntoView();
}
