const travelDestinations = [
  ["Maldives", "Beaches", "Turquoise waters, overwater villas, and pure paradise under the sun.", "./media/beach-666122_1920.jpg"],
  ["Lombok, Indonesia", "Beaches", "A hidden gem with serene beaches, perfect for a peaceful escape.", "./media/beach-4967176_1920.jpg"],
  ["Bora Bora, French Polynesia", "Beaches", "Crystal-clear lagoons and luxurious overwater bungalows.", "./media/bora-bora.jpg"],
  ["Maui, Hawaii", "Beaches", "Golden sand beaches with dramatic volcanic landscapes.", "./media/maui.jpg"],

  ["Angkor Thom, Cambodia", "Temples", "Explore the mystical stone faces deep in Cambodia’s ancient jungle city.", "./media/angkor-thom.jpg"],
  ["Sea Shore Temple, India", "Temples", "A historic stone marvel sitting quietly on the coast of Mahabalipuram.", "./media/sea-shore-temple.jpg"],
  ["Fushimi Inari Shrine, Japan", "Temples", "Thousands of red torii gates lead through forest trails near Kyoto.", "./media/fushimi-inari.jpg"],
  ["Borobudur, Indonesia", "Temples", "World’s largest Buddhist temple surrounded by lush greenery.", "./media/borobudur.jpg"],

  ["USA", "Country", "From the skyscrapers of New York to the natural wonders like the Grand Canyon, the USA offers endless variety.", "./media/usa.jpg"],
  ["France", "Country", "A romantic getaway with iconic landmarks, fine wine, and exquisite cuisine.", "./media/france.jpg"],
  ["Japan", "Country", "An elegant fusion of tradition and technology, cherry blossoms to bullet trains.", "./media/japan.jpg"],
  ["Italy", "Country", "A treasure trove of Renaissance art, coastal beauty, and world-class food.", "./media/italy.jpg"],
  ["Brazil", "Country", "Lively cities, the Amazon rainforest, and the vibrant spirit of Carnival.", "./media/brazil.png"],
  ["Egypt", "Country", "Ancient pyramids and Nile cruises steeped in centuries of history.", "./media/egypt.jpg"]
];



document.addEventListener('DOMContentLoaded', () => {
    const recommendations = document.getElementById('recommendations');
    const recommend = document.getElementById('recommend');
    const heroText = document.getElementById('heroText');
    const cancelSearch = document.getElementById('cancelSearch');

    recommendations.addEventListener('input', () => {
        const input = recommendations.value.trim();

        if (input.length > 0) {
            heroText.classList.add('hidden');
            recommend.classList.remove('hidden');
            cancelSearch.classList.remove('hidden');
            handleSearch();
        } else {
            cancelSearch.classList.add('hidden');
            recommend.classList.add('hidden');
            heroText.classList.remove('hidden');
        }
    });

    cancelSearch.addEventListener('click', () => {
        recommendations.value = "";
        recommend.innerHTML = "";
        recommend.classList.add('hidden');
        heroText.classList.remove('hidden');
        cancelSearch.classList.add('hidden');
    });


    function handleSearch() {
        const input = document.getElementById("recommendations").value.toLowerCase();
        const resultsContainer = document.getElementById("recommend");
        resultsContainer.innerHTML = "";

        if (!input) return;

        let filtered = travelDestinations.filter(item =>
            item[1].toLowerCase().includes(input)
        );


        if (filtered.length === 0) {
            filtered = travelDestinations.filter(item =>
                item[0].toLowerCase().includes(input)
            );
        }

        if (filtered.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }

        filtered.forEach(item => {
            const [title, category, desc, img1] = item;
            const card = `
            <div class="bg-white rounded-lg shadow-md p-4 w-full max-w-xs h-1/2">
                <img src="${img1}" alt="${title}" class="w-full h-40 object-cover rounded-md mb-3">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">${title}</h3>
                <p class="text-sm text-indigo-600 font-medium mb-1">${category}</p>
                <p class="text-sm text-gray-600">${desc}</p>
            </div>
            `;

            resultsContainer.innerHTML += card;
        });
    }

});
