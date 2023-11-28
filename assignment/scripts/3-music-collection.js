console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
  
let myCollection = [];
  
const addToCollection = function (collection, title, artist, yearPublished) {
  let record = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  myCollection.push(record);
  return collection;
}
addToCollection('rap', 'Man on the Moon', 'Kid Cudi', 2009);
addToCollection('electronic', 'Discovery', 'Daft Punk', 2001);
addToCollection('rock', `Good Apollo I'm Burning Star IV`, 'Coheed and Cambria', 2005);
addToCollection('indie', 'The Ocean Went Mad and We Were to Blame', 'The Dead South', 2013);
addToCollection('electronic', 'Gorillaz', 'Gorillaz', 2001);
addToCollection('electronic', 'Homework', 'Daft Punk', 1997);
console.log(myCollection);
    //- Add the new object to the end of the `collection` array.
    //- `return` the newly created object.
    console.log('!!!show!!!');
const showCollection = function (collection) {
    collection.forEach(function (record) {
      console.log(`Album: ${record.title} Artist: ${record.artist} Released on ${record.yearPublished}`);
    });
}
showCollection(myCollection);
console.log("!!!find!!!")
let result = [];
const findByArtist = function (collection) {
  myCollection.forEach (function (record) {
    if (collection === record.artist) {
      result.push(record);
     
    }
  });
}
console.log(result);
findByArtist('Daft Punk');
findByArtist('lady gaga');
  //create a function named findByArtist
    //- Take in a `collection` parameter. Remember, we want to be able to search any collection!
    //- Take in an `artist` (string) parameter.
    //- Create an empty array to hold any matching results, if any.
    //- Loop through the `collection` and add any album objects with a matching artist to the array.
    //- Return the array with the matching results. (If no results are found, an empty array should be returned.)  






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}