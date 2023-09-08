const accessKey = 'oEZIpCg3bQVProEPQn1eU31g958nGl8b_VNdEU8rUOA'

const inputField = document.getElementById("search-box")
const SearchBtn = document.getElementById("searchButton")
const container = document.getElementById('imageContainer')
const showMoreBtn = document.getElementById('show-more')




const loadData = async (keyword = 'coding') => {
    container.innerHTML = ''
    const url = `https://api.unsplash.com/search/photos?&query=${keyword}&per_page=20&client_id=${accessKey}`;

    const res = await fetch(url)
    const data = await res.json()
    const result = data.results

    result.forEach(photo => {
        const {urls,alt_description} = photo
        const photoDiv = document.createElement('div')
        photoDiv.innerHTML = `
        <img class = "w-[320px] h-[220px] rounded-md hover:opacity-80" src="${urls.regular}" alt="${alt_description}">
        <h3></h3>
        `
        container.appendChild(photoDiv)
    })   
}

SearchBtn.addEventListener('click',function (event) {
    event.preventDefault()
    const keyword = inputField.value ;
    inputField.value = ''
    
    loadData(keyword)
})




loadData()


// const accesskey = 'oEZIpCg3bQVProEPQn1eU31g958nGl8b_VNdEU8rUOA'