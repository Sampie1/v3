const teamData = [
    { "role": "Founder", "name": "Sampiey", "image": "assets/dc-pfs/sampiey.jpeg", "color": "#ff0700" },
    { "role": "Founder", "name": "Jordy", "image": "assets/dc-pfs/sneakyshadow.png", "color": "#ff0700" },

    { "role": "Co-Founder", "name": "Quin", "image": "assets/dc-pfs/Quin.png", "color": "#ff5a00" },
    { "role": "Co-Founder", "name": "Arcus", "image": "assets/dc-pfs/arcus.png", "color": "#ff5a00" },

    { "role": "Supervisor", "name": "Mynkel", "image": "assets/dc-pfs/Mynkel.png", "color": "#00ff66" },

    { "role": "Management", "name": "Hidden", "image": "assets/dc-pfs/hidden.png", "color": "#00ffff" },
    { "role": "Management", "name": "Maurice", "image": "assets/dc-pfs/Maurice.png", "color": "#00ffff" },
    { "role": "Management", "name": "Irisjee", "image": "assets/dc-pfs/iris.png", "color": "#00ffff" },
    { "role": "Management", "name": "Luna", "image": "assets/dc-pfs/Luna.png", "color": "#00ffff" },

    { "role": "Head Staff", "name": "Jallie", "image": "assets/dc-pfs/jallie.png", "color": "#0074ff" },
    { "role": "Head Staff", "name": "Toob.V.K", "image": "assets/dc-pfs/toob.png", "color": "#0074ff" },

    { "role": "Super Admin", "name": "Wesleygame", "image": "assets/dc-pfs/wesleygame.png", "color": "#fffa00" },
    { "role": "Super Admin", "name": "OriginalEVB", "image": "assets/dc-pfs/EVB.png", "color": "#fffa00" },

    { "role": "Admin", "name": "Mafklapper", "image": "assets/dc-pfs/mafklapper.png", "color": "#0004ff" },
    { "role": "Admin", "name": "DIon__", "image": "assets/dc-pfs/d1on.png", "color": "#0004ff" },
    
    { "role": "Junior Admin", "name": "Demedc", "image": "assets/dc-pfs/deme.png", "color": "#d300ff" }
];

const container = document.getElementById('team-cards');

const grouped = {};
teamData.forEach(member => {
    if (!grouped[member.role]) grouped[member.role] = [];
    grouped[member.role].push(member);
});

// Hierarchy order voor de ranks
const rankOrder = ["Founder", "Co-Founder", "Supervisor", "Management", "Head Staff", "Super Admin", "Admin", "Junior Admin"];

// Sorteer de ranks volgens de hierarchy
const sortedRoles = rankOrder.filter(role => grouped[role]);

for (const role of sortedRoles) {
    // Maak een rank header
    const rankHeader = document.createElement('div');
    rankHeader.className = 'rank-header mb-4';
    rankHeader.innerHTML = `
        <h2 class="rank-title">${role}</h2>
        <div class="rank-underline"></div>
    `;
    container.appendChild(rankHeader);

    // Maak de kaarten row voor deze rank
    const row = document.createElement('div');
    row.className = 'row g-3 mb-5 justify-content-center';

    grouped[role].forEach(member => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-4 col-lg-3';

        col.innerHTML = `
            <div class="card" style="width: 14rem; margin: auto; background-color: ${member.color};">
                <img src="${member.image}" class="card-img-top" alt="${member.name}">
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="background-color: ${member.color}; color: white;">
                            <h5 class="card-title">${member.role}</h5>
                        </li>
                        <li class="list-group-item">
                            <h5 class="card-title">${member.name}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        row.appendChild(col);
    });

    container.appendChild(row);
}
