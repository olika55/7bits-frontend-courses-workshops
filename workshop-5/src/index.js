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
  const arr_prom = [fetch('api/data1.json'), fetch('api/data2.json'), fetch('api/data3.json')];
  let arr = [];
  let i = 0;

    Promise.all(arr_prom)
        .then(values => {
        values.forEach((item) => {
            arr[i] = item.json();
            i += 1;
        });
        return arr;
    })
        .then((arr) => {
            arr.forEach((item) => {
                item.then((res) => {
                    res.data.forEach((it) => {
                        content.append(articleTemplate(it));
                        // console.log(it);
                    })
                })
            })
        });

  /*fetch('api/data1.json')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        result.data.forEach((item) => {
          content.append(articleTemplate(item));
        })
      })*/
});
