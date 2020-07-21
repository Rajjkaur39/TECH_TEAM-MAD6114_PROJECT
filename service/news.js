import { articles_url, _api_key, country_code } from '../config/rest_consfig';

export async function getArticles(category='general') {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                '99b8488e244e49d0b4167e2cae543afc': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}