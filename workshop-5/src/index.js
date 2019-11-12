import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinnerTemplate from './components/spinner/spinner.hbs';

const urls = [
  'api/data1.json',
  'api/data2.json',
  'api/data3.json',
  'api/data4.json'
];

document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');

  content.append(spinnerTemplate());

    Promise.all(urls.map((url) => {
      return fetch(url)
          .then((response) => {
              if(response.ok) {
                  return response.json().catch((er) => {console.log("error in json: ",er,". File ",response.url)});
              }
              return Promise.reject(response.url+", status: "+response.status+" ("+response.statusText+")");
              })
          .catch((error) => {
              console.log("error in catch: ", error);
          })
          }))
        .then(values => {
            // console.log("values:");
            // console.log(values);
            values.forEach((item, ind, values) => {
                // console.log('parsed json or an error promise: ', item);
                    if(item) {
                        setTimeout(() => {}, 5000);
                        item.data.forEach((it) => {
                            setTimeout(() => {content.append(articleTemplate(it));}, 5000);
                        })
                    }
                })
            })
        .finally(() => { setTimeout(()=>$("#loading").remove(), 5000)})
        .catch(ex => {
            console.log('general error', ex);
        });
});
