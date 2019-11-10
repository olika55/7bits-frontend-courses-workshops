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

  let arrProm = [];

  content.append(spinnerTemplate());

  urls.map((url) => {
      // console.log("url: ", url);
      fetch(url)
          .then((response) => {
              if(response.ok) {
                  // let prom = response.json().catch(e => {console.log("incorrect json ", response.url, ". ", e)});
                  let prom = response.json();
                  if(prom) {
                      arrProm.push(prom);
                  }
                  console.log("prom: ");
                  console.log(prom);
              }
              else {
                  let p = new Promise((resolve,reject) => {console.log("rejected!!");reject(new Error(response.url+", status: "+response.status));});
                  // p.catch(err=>{console.log(err);});
                  arrProm.push(p);

                  console.log("p: ");
                  console.log(p);
                  // throw new Error(item.url+", status: "+item.status);
              }
          });
     // arrProm.push(fetch(url));
  });

    console.log("arrProm:");
    console.log(arrProm);

    Promise.all(arrProm)
        .then(values => {
            console.log("values:");
            console.log(values);
            /*values.map((item) => {
                console.log('parsed json or an error promise: ', item);
                item.then((res) => {
                    console.log("res: ", res);
                    if(res) {
                        setTimeout(() => {}, 5000);
                        res.data.forEach((it) => {
                            setTimeout(() => {content.append(articleTemplate(it));}, 5000);
                        })
                    }

                })
            })*/
        })
        .finally(() => { setTimeout(()=>$("#loading").remove(), 5000)})
        .catch(ex => {
            console.log('general error', ex);
        });
});
