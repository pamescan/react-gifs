
export const getGifs = async (category) => {
    const endpoint ="api.giphy.com/v1/gifs/search";
    const apiKey = "4RBDoOtGnoKfNp8XGW0mk0OnDz5xFj9i";
    const limit = 10;
    const url = `https://${endpoint}?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return  data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
}