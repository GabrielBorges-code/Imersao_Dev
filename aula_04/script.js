var listaFilmes = ['https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNjdlY2Q4MzAtOGJkYy00MjI2LTk3YTAtY2JjZWIyMmNhNWQ3XkEyXkFqcGdeQXVyMjgzNjQyMjI@._V1_UY268_CR3,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BYmI1ODU5ZjMtNWUyNC00YzllLThjNzktODE1M2E4OTVmY2E5XkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UY268_CR3,0,182,268_AL_.jpg'];

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}