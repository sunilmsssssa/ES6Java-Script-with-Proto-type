const albums = [];//Empty Array. This is supposed to hold albub Objects
const artistsli = [];//Empty Array. This is supposed to hold artists Objects
const genres = [];//Empty Array. This is supposed to hold genre Objects
const titlesli = [];//Empty Array. This is supposed to hold titles Objects


const artistList = [{ 'id':'1','name': 'Brandy Clark',  'profession':'Singer'},
                     { 'id':'2','name': 'Silverstein', 'profession':'Writer'},
                     { 'id':'3','name': 'Stephen Malkmus', 'profession':'Director'},
                     {  'id':'4','name': 'Adam Brand',  'profession':'korea grapher'},
                     {  'id':'5','name': 'David James',  'profession':'dancer'},
                    ];
const genreList = [{ 'id':'6','name': 'Country'},
                     {'id':'7', 'name': 'Hip hop'},
                     { 'id':'8','name': 'R&B'},
                     { 'id':'9','name': 'Pop'},
                     { 'id':'10','name': 'folk'}, 
                     { 'id':'11','name': 'pop punk'}];

 const titlelist = [{ 'id':'12','name': 'Shady' ,'writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]},
                     {'id':'13', 'name': 'Never Fade Records','writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]},
                     { 'id':'14','name': 'Capitol Nashville','writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]},
                     { 'id':'15','name': 'Lil Lou, Warner','writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]},
                     { 'id':'16','name': 'Rough Trade','writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]}, 
                     { 'id':'17','name': 'Inside Out, Sony Music','writers':[2],'singers':[2],'directors':[3],'artists':[6],'otherArtists':[4]}];


const ablumlist = [{ 'id':'18','name': 'Peace of Mind' ,'genre':[6],'year':2020,'titles':[12]},
                     {'id':'19', 'name': 'Your Life Is a Record','genre':[7],'year':2019,'titles':[13]},
                     { 'id':'20','name': 'Superstar','genre':[8],'year':2012,'titles':[14]},
                     { 'id':'21','name': 'Baby, It\'s Okay','genre':[9],'year':2012,'titles':[15]},
                     { 'id':'22','name': 'You\'ll Be Fine','genre':[10],'year':2012,'titles':[16]}, 
                     { 'id':'23','name': 'Chilombo','genre':[11],'year':2012,'titles':[17]}];
function convertDataIntoObject() {
  
  for (const artistsVar of artistList) {
    const art = new Artist();
    art.init(artistsVar.id, artistsVar.name, artistsVar.profession);
    artistsli.push(art);
  }

  for (const genreVar of genreList) {
    const gen = new Genre();
    gen.init(genreVar.id, genreVar.name);
    genres.push(gen);
  }

  for (const titleVar of titlelist) {
    const tit = new Titles();
    tit.init(titleVar.id, titleVar.name);
    for(const singerId of titleVar.singers){
      for(const art of artistsli){
        if(art.id == singerId)
      tit.buildSinger(art);
      }
    }
    for(const writerId of titleVar.writers){
      for(const art of artistsli){
        if(art.id == writerId){
      tit.buildWriters(art);
        }
    }
  }
    titlesli.push(tit);
  }

  for (const albumVar of ablumlist) {
    const album = new Album();
    album.init(albumVar.id, albumVar.name,albumVar.year)
    for(const titleId of albumVar.titles){
      for(const titleVar of titlesli){
        if(titleVar.id==titleId){
      album.tiltebuild(titleVar);
      }
    }
  }

    for(const genid of albumVar.genre){
      for(genrvar of genres){
        if(genrvar.id == genid){
      album.genrebuild(genrvar);
      }
    }
  }
  albums.push(album);
}
   
}
function getAlubmlistById(albumId) {
  return new Promise((resolve ,reject) => {
    for(const albs of albums){
      if(albs.id == albumId)
      {
         resolve(albs);
         return;
      }
    }
    reject();
  });
}

function getAlubmtByTiltleId(tilteId) {
  return new Promise((resolve ,reject) => {
    for(const albs of albums){
      for(const titlevar of albs.titles){
      if(titlevar.id == tilteId)
      {
         resolve(albs);
         return;
      }
    }
  }
    reject();
  });
}

function getTitleByArtistId(arstiid) {
  return new Promise((resolve ,reject) => {
    for(const title of titlesli){
      for(const artvar of title.artists){
      if(artvar.id == arstiid)
      {
         resolve(artvar);
         return;
      }
    }
  }
    reject();
  });
}


function getTitlelistById(titleId) {
  return new Promise((resolve,reject) =>{
  for(const titleslivar of titlesli){
    if( titleslivar.id == titleId){
       resolve(titleslivar)
       return
    }
  }
  reject();
});
}

function  getGenrelistById(genreId){
  return new Promise((reslove,reject) =>{
    for(const genvar of genres){
      if( genvar.id == genreId){
        reslove(genvar);
    return;
    }
    }
    reject();
  }
 );
}

function getArtistlistById(artistId) {
  return new Promise((reslove,reject)=> {
    for(const artvar of artistsli){
      if( artvar.id == artistId){
     reslove(artvar);
     return
    }
  }
  reject();
});
  
}
convertDataIntoObject();
function getDataByCondition(id,criteria) {
 
  
  switch(criteria){
  case 'filterByAlbumName':
  getAlubmlistById(id)
  .then((album)=> { 
    console.log(album.describe());
   })
  .catch((Error)=>{
    console.log("No Alumb found with given name");
  })
  case 'filterByTitleId':
  getTitlelistById(id)
  .then((tiltle)=> { 
    getAlubmtByTiltleId(tiltle.id).
    then((alumb) => {
      console.log(alumb.describes());
    }).catch((Error) =>{
      console.log("Alumb details Not found");
    })
    console.log(tiltle.describe());
   })
  .catch((Error)=>{
    console.log("No Alumb found with given name");
  })
  
  case 'filterByArtistId':
  getArtistlistById(id)
  .then((artist)=> { 
    getTitleByArtistId(tiltle.id).
    then((titles) => {
      getAlubmtByTiltleId(titles.id).then((album)=>{
        console.log(album.describes());
      }).catch((Error)=>{
        console.log("No Album Details found ")
      })
      console.log(titles.describe());
    }).catch((Error) =>{
      console.log("titles details Not found");
    })
   })
  .catch((Error)=>{
    console.log("No Alumb found with given name");
  })
  }
}

getDataByCondition();