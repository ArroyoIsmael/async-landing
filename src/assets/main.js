

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_uPycgs1AHefxHanStL-BA&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd45ab9ac3dmshd85427fca01885dp180be2jsn147decfa77cc',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


async function fecthData(urlApi) {
    const response = await fetch(urlApi, options);
    const result = await response.json();
    return result;
}

(async () => {
    try {
        const videos = await fecthData(API);
        
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div><br>
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</a>
            </div>
            `).slice(0,4).join('')}`;

        content.innerHTML = view;
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

})();
