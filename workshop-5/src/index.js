import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinnerTemplate from './components/spinner/spinner.hbs';

const urls = [
  'data1.json',
  'data2.json',
  'data3.json',
  'data4.json'
];

document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');

  let arr = [];

    let d1 = fetch('api/data1.json');
    let d2 = fetch('api/data2.json');
    let d3 = fetch('api/data3.json');
    let d4 = fetch('api/data4.json');

    Promise.all([d1, d2, d3, d4])
        .then(values => {
            console.log(values);
            values.map((item) => {
                console.log(item);
                if(item.ok) {
                        let it = item.json().catch(e => {console.log("incorrect json ", item.url, ". ", e)});
                        arr.push(it);
                }
                else {
                    // arr.push(Promise.reject(item.url+", status: "+item.status));
                    throw new Error(item.url+", status: "+item.status);
                }
            });
            return arr;
        })
       .then(arr => {
            arr.map((json) => {
                console.log('parsed json', json);
            })
        })
        .catch(ex => {
            console.log('general error', ex);
        });



});
