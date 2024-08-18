function showSection(sectionId) {
    document.querySelectorAll('div[id$="-section"]').forEach(div => div.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function displayAboutMe() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const strengths = document.getElementById('strengths').value;
    const weaknesses = document.getElementById('weaknesses').value;
    const bio = document.getElementById('bio').value;
    const hobbies = document.getElementById('hobbies').value;
    const goals = document.getElementById('goals').value;

    let introduction = `Hello, my name is ${name}.`;

    if (education) {
        introduction += ` I have a background in ${education}.`;
    }
    if (address) {
        introduction += ` I currently reside at ${address}.`;
    }
    if (experience) {
        introduction += ` My career has been shaped by my experience in ${experience}.`;
    }
    if (skills) {
        introduction += ` I possess skills in ${skills}.`;
    }
    if (strengths) {
        introduction += ` My strengths include ${strengths}.`;
    }
    if (weaknesses) {
        introduction += ` I am aware of my weaknesses, such as ${weaknesses}, and I am working on improving them.`;
    }
    if (hobbies) {
        introduction += ` I have a passion for ${hobbies}.`;
    }
    if (goals) {
        introduction += ` My goals include ${goals}.`;
    }
    if (bio) {
        introduction += ` ${bio}`;
    }

    document.getElementById('introduction').innerHTML = `<p>${introduction}</p>`;
}

function clearForm() {
    document.getElementById('about-me-form').reset();
    document.getElementById('introduction').innerHTML = '';
}

function suggestRole() {
    const interest = document.getElementById('interest-dropdown').value;
    let role = '';

    switch (interest) {
        case 'technology':
            role = '<p>With an interest in technology, you might explore roles in software development, data science, or IT management.</p>';
            break;
        case 'design':
            role = '<p>If you are interested in design, consider roles in graphic design, UX/UI design, or creative direction.</p>';
            break;
        case 'writing':
            role = '<p>For an interest in writing, potential roles include content writing, copywriting, or journalism.</p>';
            break;
        case 'business':
            role = '<p>If business is your interest, you could explore roles in project management, marketing, or entrepreneurship.</p>';
            break;
        case 'cooking':
            role = '<p>With a passion for cooking, you might consider roles in culinary arts, food critique, or restaurant management.</p>';
            break;
        case 'traveling':
            role = '<p>For those who love traveling, roles such as travel blogging, tour guiding, or travel consulting might be exciting.</p>';
            break;
        case 'gardening':
            role = '<p>If gardening is your interest, consider roles in landscape design, horticulture, or urban farming.</p>';
            break;
        case 'photography':
            role = '<p>With an interest in photography, you could explore roles in portrait photography, event photography, or photojournalism.</p>';
            break;
        case 'astronomy':
            role = '<p>If you are fascinated by astronomy, roles in research, science communication, or working at an observatory might suit you.</p>';
            break;
        case 'historical reenactment':
            role = '<p>For those interested in historical reenactment, roles in historical education, museum curation, or event organization might be fulfilling.</p>';
            break;
        case 'urban exploration':
            role = '<p>If urban exploration is your passion, consider roles in urban research, historical preservation, or adventure journalism.</p>';
            break;
        case 'collecting':
            role = '<p>With a knack for collecting, you might explore roles in antique dealing, museum curatorship, or collector community management.</p>';
            break;
        case 'diy projects':
            role = '<p>If you enjoy DIY projects, roles in home improvement, crafting, or instructional content creation could be perfect.</p>';
            break;
        case 'bird watching':
            role = '<p>For those interested in bird watching, consider roles in environmental education, wildlife research, or nature conservation.</p>';
            break;
        case 'fermentation':
            role = '<p>If you enjoy fermentation, roles in brewing, food science, or artisanal food production might be exciting.</p>';
            break;
        case 'puzzle solving':
            role ='<p>With a love for puzzle solving, you might explore roles in problem-solving fields such as programming, data analysis, or escape room design.</p>';
            break;
        case 'extreme sports':
            role = '<p>If extreme sports are your interest, consider roles in sports coaching, adventure tourism, or sports marketing.</p>';
            break;
        case 'mythology':
            role = '<p>If mythology fascinates you, roles in writing, cultural studies, or museum curatorship might align with your interests.</p>';
            break;
        default:
            role = '<p>Select an interest to see a related role suggestion.</p>';
    }
    document.getElementById('role-suggestion').innerHTML = role;
}
