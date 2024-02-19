// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Step 1: Define the structure of the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for the number of tracks
  }
  
  // Step 2: Create the makeAlbum function
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    // Step 3: Build the album object
    const album: Album = {
      artist: artist,
      title: title,
    };
  
    // Step 4: Add tracks if provided
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    // Step 5: Return the album object
    return album;
  }
  
  // Step 6: Make three function calls to create different albums
  const album1 = makeAlbum("Atif Aslam", "Wohi Khuda Hai");
  const album2 = makeAlbum("Sami Yousuf", "The Fire In", 12);
  const album3 = makeAlbum("Meher Zain", "Ya Nabi Zalam Alayka", 8);
  
  // Step 7: Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);


  