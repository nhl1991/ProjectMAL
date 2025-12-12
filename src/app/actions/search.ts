"use server"
// "https://api.myanimelist.net/v2/anime?offset=4&q=one&limit=4"
export async function search(formData: FormData){
    const query = formData.get('query');
    console.log(query);

}