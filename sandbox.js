//query selector All

//we want not just the first query but a reference of all p tags
//storing it in a collection
const paras = document.querySelectorAll('p');
console.log(paras[3]);

paras.forEach(para => {
    console.log(para);
});