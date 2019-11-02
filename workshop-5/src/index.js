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
  let arr = [];

  urls.map((url) => {
      console.log(url);
     arrProm.push(fetch(url));
  });

    Promise.all(arrProm)
        .then(values => {
            // console.log(values);
            values.map((item) => {
                // console.log(item);
                if(item.ok) {
                        let it = item.json().catch(e => {console.log("incorrect json ", item.url, ". ", e)});
                        arr.push(it);
                }
                else {
                    let p = new Promise((resolve,reject) => {console.log("rejected!!");reject(new Error(item.url+", status: "+item.status));});
                    p.catch(err=>{console.log(err);});
                    // arr.push(p);
                    // throw new Error(item.url+", status: "+item.status);
                }
            });
            // console.log("arr:");
            // console.log(arr);
            return arr;
        })
       .then(arr => {
            arr.map((item) => {
                // console.log('parsed json', item);
                item.then((res) => {
                    // console.log("res: ", res);
                    if(res) {
                        res.data.forEach((it) => {
                            content.append(articleTemplate(it));
                        })
                    }

                })
            })
        })
        .catch(ex => {
            console.log('general error', ex);
        });
});
