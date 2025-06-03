// Gallery Page Script Interactions

// Art data storage
const artworkData = {
  // Original Section
  'original1': {
    image: '../Asset/8th Anniversary.JPG',
    title: 'The Last Warrior: Hope at the Edge of the Blade',
    artist: 'CanvasCraze',
    description: 'A powerful piece depicting a lone warrior standing against the odds, representing hope and determination in the face of adversity. The artwork combines traditional and modern techniques to create a stunning visual narrative.',
    tags: '#Original #Fantasy #Warrior #Hope',
    likes: 247,
    comments: 23,
    bookmarked: false
  },
  'original2': {
    image: '../Asset/profile (1).jpg',
    title: 'Twilight Melody: A Story Written in the Sky',
    artist: 'InkfinityFan',
    description: 'A mesmerizing artwork that captures the beauty of twilight through vibrant colors and ethereal composition. The piece tells a story of transition and beauty in everyday moments.',
    tags: '#Original #Landscape #Twilight #Sky',
    likes: 189,
    comments: 15,
    bookmarked: false
  },
  'original3': {
    image: '../Asset/Background.png',
    title: 'Wings of Destiny: Soaring Towards Freedom',
    artist: 'DreamSketcher',
    description: 'An inspiring artwork that symbolizes breaking free from constraints and reaching for one\'s dreams. The dynamic composition and bold colors create a sense of movement and liberation.',
    tags: '#Original #Freedom #Wings #Dreams',
    likes: 312,
    comments: 41,
    bookmarked: false
  },
  'original4': {
    image: '../Asset/download (1).jpg',
    title: 'Shadows of Fate: A Light in the Darkness',
    artist: 'VectorVortex',
    description: 'A dramatic piece exploring the contrast between light and shadow, representing the eternal struggle between hope and despair. The artwork uses intricate details to convey deep emotions.',
    tags: '#Original #Drama #Light #Shadow',
    likes: 156,
    comments: 8,
    bookmarked: false
  },
  'original5': {
    image: '../Asset/download (2).jpg',
    title: 'The Tale of Three Acts: Art in the Journey',
    artist: 'CelestialBrush',
    description: 'A narrative artwork that unfolds like a story in three parts, each representing a different stage of life\'s journey. The composition flows seamlessly from one act to the next.',
    tags: '#Original #Narrative #Journey #Story',
    likes: 203,
    comments: 19,
    bookmarked: false
  },

  // Games Section
  'games1': {
    image: '../Asset/download (3).jpg',
    title: 'Eight Years Together: A Celebration to Remember',
    artist: 'ShafingSorcerer',
    description: 'A commemorative artwork celebrating eight years of gaming excellence and community building. The piece captures the essence of collaboration and shared achievements.',
    tags: '#Games #Anniversary #Celebration #Community',
    likes: 445,
    comments: 67,
    bookmarked: false
  },
  'games2': {
    image: '../Asset/images.jpg',
    title: 'A New Era: The Beginning of an Adventure',
    artist: 'StarlightDoodle',
    description: 'An exciting artwork that marks the beginning of a new gaming adventure. The piece combines futuristic elements with classic gaming aesthetics to create anticipation.',
    tags: '#Games #Adventure #NewEra #Future',
    likes: 378,
    comments: 52,
    bookmarked: false
  },
  'games3': {
    image: '../Asset/OIP.jpg',
    title: 'Phantom Enforcers: Shadows of Justice',
    artist: 'DreamSketcher',
    description: 'A tactical artwork featuring the elite Phantom Enforcers team. The piece showcases stealth, strategy, and justice through detailed character design and atmospheric lighting.',
    tags: '#Games #Tactical #Phantom #Justice',
    likes: 289,
    comments: 34,
    bookmarked: false
  },
  'games4': {
    image: '../Asset/v7.8 banner.JPG',
    title: 'Battle Arena: Champions Unite',
    artist: 'PixelMaster',
    description: 'An action-packed artwork depicting the ultimate battle arena where champions from different realms come together to compete. The dynamic composition captures the intensity of competition.',
    tags: '#Games #Battle #Arena #Champions',
    likes: 521,
    comments: 89,
    bookmarked: false
  },
  'games5': {
    image: '../Asset/Vol 3 artbook.JPG',
    title: 'Fantasy Quest: Legends Awakened',
    artist: 'GameArtist',
    description: 'A comprehensive artwork collection showcasing the rich world of Fantasy Quest. Each element tells part of a larger story about legendary heroes and their epic adventures.',
    tags: '#Games #Fantasy #Quest #Legends',
    likes: 367,
    comments: 76,
    bookmarked: false
  },

  // Fanart Section
  'fanart1': {
    image: '../Asset/8th Anniversary.JPG',
    title: 'Anime Heroes: Bonds of Friendship',
    artist: 'AnimeLover99',
    description: 'A heartwarming fanart celebrating the bonds between anime characters. The artwork captures the essence of friendship, loyalty, and the power of working together.',
    tags: '#Fanart #Anime #Friendship #Heroes',
    likes: 412,
    comments: 45,
    bookmarked: false
  },
  'fanart2': {
    image: '../Asset/profile (2).jpg',
    title: 'Manga Style: Classic Characters Reimagined',
    artist: 'MangaFan',
    description: 'A beautiful reinterpretation of classic characters in authentic manga style. The artwork pays homage to traditional manga while adding modern artistic flair.',
    tags: '#Fanart #Manga #Classic #Reimagined',
    likes: 298,
    comments: 90,
    bookmarked: false
  },
  'fanart3': {
    image: '../Asset/Background.png',
    title: 'Fantasy Characters: Epic Adventures',
    artist: 'FantasyFan',
    description: 'An epic fanart featuring beloved fantasy characters embarking on grand adventures. The piece combines multiple elements to create a cohesive narrative.',
    tags: '#Fanart #Fantasy #Adventure #Epic',
    likes: 356,
    comments: 100,
    bookmarked: false
  },
  'fanart4': {
    image: '../Asset/download (1).jpg',
    title: 'Game Characters: Digital Warriors',
    artist: 'GameFanArt',
    description: 'A tribute to iconic game characters portrayed as digital warriors. The artwork bridges the gap between gaming culture and fine art.',
    tags: '#Fanart #Gaming #Warriors #Digital',
    likes: 187,
    comments: 57,
    bookmarked: false
  },
  'fanart5': {
    image: '../Asset/download (2).jpg',
    title: 'Movie Heroes: Cinematic Tribute',
    artist: 'MovieArtist',
    description: 'A cinematic tribute to legendary movie heroes through detailed character studies. The artwork captures the essence of what makes these characters memorable.',
    tags: '#Fanart #Movies #Heroes #Cinematic',
    likes: 234,
    comments: 77,
    bookmarked: false
  },

  // Picture Section
  'picture1': {
    image: '../Asset/download (3).jpg',
    title: 'Nature\'s Beauty: Captured Moments',
    artist: 'PhotoMaster',
    description: 'A stunning photograph that captures the raw beauty of nature in its purest form. The composition and lighting create a sense of tranquility and wonder.',
    tags: '#Picture #Nature #Photography #Beauty',
    likes: 267,
    comments: 60,
    bookmarked: false
  },
  'picture2': {
    image: '../Asset/images.jpg',
    title: 'Urban Life: City Chronicles',
    artist: 'StreetPhoto',
    description: 'A documentary-style photograph that tells the story of urban life. The image captures the energy, diversity, and rhythm of city living.',
    tags: '#Picture #Urban #City #Documentary',
    likes: 145,
    comments: 62,
    bookmarked: false
  },
  'picture3': {
    image: '../Asset/OIP.jpg',
    title: 'Portrait Art: Human Expressions',
    artist: 'PortraitPro',
    description: 'An intimate portrait that captures the depth of human emotion and expression. The lighting and composition work together to reveal the subject\'s character.',
    tags: '#Picture #Portrait #Human #Expression',
    likes: 198,
    comments: 111,
    bookmarked: false
  },
  'picture4': {
    image: '../Asset/v7.8 banner.JPG',
    title: 'Abstract Vision: Beyond Reality',
    artist: 'AbstractArt',
    description: 'An abstract composition that challenges perception and invites interpretation. The piece uses color, form, and texture to create meaning beyond literal representation.',
    tags: '#Picture #Abstract #Vision #Reality',
    likes: 176,
    comments: 120,
    bookmarked: false
  },
  'picture5': {
    image: '../Asset/Vol 3 artbook.JPG',
    title: 'Landscape Dreams: Scenic Wonders',
    artist: 'LandscapeArt',
    description: 'A breathtaking landscape that captures the majesty of natural wonders. The photograph showcases the artist\'s ability to find beauty in the world around us.',
    tags: '#Picture #Landscape #Nature #Scenic',
    likes: 312,
    comments: 41,
    bookmarked: false
  },

  // Copyright Section
  'copyright1': {
    image: '../Asset/8th Anniversary.JPG',
    title: 'Licensed Art: Professional Collection',
    artist: 'ProArtist',
    description: 'A professionally licensed artwork that meets industry standards for commercial use. The piece demonstrates high-quality artmanship and creative vision.',
    tags: '#Copyright #Licensed #Professional #Commercial',
    likes: 89,
    comments: 28,
    bookmarked: false
  },
  'copyright2': {
    image: '../Asset/profile.jpg',
    title: 'Commercial Use: Business Graphics',
    artist: 'CommercialArt',
    description: 'A business-focused graphic design created for commercial applications. The artwork balances aesthetic appeal with practical functionality.',
    tags: '#Copyright #Commercial #Business #Graphics',
    likes: 67,
    comments: 28,
    bookmarked: false
  },
  'copyright3': {
    image: '../Asset/Background.png',
    title: 'Brand Assets: Corporate Identity',
    artist: 'BrandDesigner',
    description: 'A comprehensive brand asset that defines corporate identity through visual elements. The design reflects company values and market positioning.',
    tags: '#Copyright #Brand #Corporate #Identity',
    likes: 54,
    comments: 20,
    bookmarked: false
  },
  'copyright4': {
    image: '../Asset/download (1).jpg',
    title: 'Trademark Art: Protected Designs',
    artist: 'TradmarkArt',
    description: 'A legally protected design that represents intellectual property. The artwork showcases the importance of creative rights and artistic ownership.',
    tags: '#Copyright #Trademark #Protected #Legal',
    likes: 43,
    comments: 23,
    bookmarked: false
  },
  'copyright5': {
    image: '../Asset/download (2).jpg',
    title: 'Registered Works: Official Collection',
    artist: 'RegisteredArt',
    description: 'An officially registered artwork that forms part of a protected collection. The piece demonstrates the value of proper artistic documentation.',
    tags: '#Copyright #Registered #Official #Collection',
    likes: 76,
    comments: 15,
    bookmarked: false
  },

  // 2025Art Section
  '2025art1': {
    image: '../Asset/download (3).jpg',
    title: 'Future Vision: Tomorrow\'s Art Today',
    artist: 'FutureArtist',
    description: 'A forward-thinking artwork that explores what art might look like in the future. The piece combines current trends with speculative design elements.',
    tags: '#2025Art #Future #Vision #Innovation',
    likes: 423,
    comments: 73,
    bookmarked: false
  },
  '2025art2': {
    image: '../Asset/images.jpg',
    title: 'Modern Trends: Contemporary Expressions',
    artist: 'ModernArt',
    description: 'A contemporary artwork that captures current artistic trends and cultural movements. The piece reflects the zeitgeist of modern creative expression.',
    tags: '#2025Art #Modern #Contemporary #Trends',
    likes: 267,
    comments: 59,
    bookmarked: false
  },
  '2025art3': {
    image: '../Asset/OIP.jpg',
    title: 'Digital Evolution: Tech-Enhanced Art',
    artist: 'DigitalEvolution',
    description: 'An artwork that showcases the evolution of digital art techniques. The piece demonstrates how technology enhances rather than replaces traditional creativity.',
    tags: '#2025Art #Digital #Technology #Evolution',
    likes: 345,
    comments: 83,
    bookmarked: false
  },
  '2025art4': {
    image: '../Asset/v7.8 banner.JPG',
    title: 'AI Collaboration: Human-Machine Creativity',
    artist: 'AIArtist',
    description: 'A collaborative artwork created through human-AI partnership. The piece explores the potential of artificial intelligence as a creative tool and collaborator.',
    tags: '#2025Art #AI #Collaboration #Innovation',
    likes: 489,
    comments: 99,
    bookmarked: false
  },
  '2025art5': {
    image: '../Asset/Vol 3 artbook.JPG',
    title: 'Next Generation: Art of Tomorrow',
    artist: 'NextGenArt',
    description: 'A next-generation artwork that pushes the boundaries of traditional art forms. The piece represents the cutting edge of contemporary artistic expression.',
    tags: '#2025Art #NextGen #Tomorrow #Cutting-edge',
    likes: 378,
    comments: 88,
    bookmarked: false
  }
};

// Current artwork being viewed
let currentArtworkId = '';

// Gallery functionality
function scrollToTag(tagId) {
  // Remove active class from all buttons
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  // Scroll to section
  const section = document.getElementById(tagId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Modal functionality
function openModal(artworkId) {
  currentArtworkId = artworkId;
  const artwork = artworkData[artworkId];
  
  if (!artwork) return;
  
  // Update modal content
  document.getElementById('modal-image').src = artwork.image;
  document.getElementById('modal-title').textContent = artwork.title;
  document.getElementById('modal-artist').textContent = artwork.artist;
  document.getElementById('modal-description').textContent = artwork.description;
  document.getElementById('modal-tags').textContent = artwork.tags;
  document.getElementById('modal-likes').textContent = artwork.likes;
  
  // Update button states
  updateBookmarkButton();
  
  // Show modal
  document.getElementById('modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
   document.getElementById('modal').classList.remove('show');
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = 'auto';
  currentArtworkId = '';
}

// Modal action functions
function likeArtwork() {
  if (!currentArtworkId) return;
  
  const artwork = artworkData[currentArtworkId];
  artwork.likes += 1;
  document.getElementById('modal-likes').textContent = artwork.likes;
  
  // Add visual feedback
  const likeBtn = document.querySelector('.like-btn');
  likeBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    likeBtn.style.transform = 'scale(1)';
  }, 150);
  
  console.log(`Liked artwork: ${artwork.title}`);
}

function shareArtwork() {
  if (!currentArtworkId) return;
  
  const artwork = artworkData[currentArtworkId];
  
  // Create share data
  const shareData = {
    title: artwork.title,
    text: `Check out this amazing artwork by ${artwork.artist}!`,
    url: window.location.href
  };
  
  // Try to use Web Share API if available
  if (navigator.share) {
    navigator.share(shareData).catch(err => {
      console.log('Error sharing:', err);
      fallbackShare(artwork);
    });
  } else {
    fallbackShare(artwork);
  }
}

function fallbackShare(artwork) {
  // Fallback sharing method
  const shareText = `Check out "${artwork.title}" by ${artwork.artist} - ${window.location.href}`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Share link copied to clipboard!');
    }).catch(() => {
      prompt('Copy this link to share:', shareText);
    });
  } else {
    prompt('Copy this link to share:', shareText);
  }
}

function commentArtwork() {
  if (!currentArtworkId) return;
  
  const artwork = artworkData[currentArtworkId];
  const comment = prompt(`Add a comment for "${artwork.title}":`);
  
  if (comment && comment.trim()) {
    artwork.comments += 1;
    console.log(`Comment added to ${artwork.title}: ${comment}`);
    
    // Add visual feedback
    const commentBtn = document.querySelector('.comment-btn');
    commentBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      commentBtn.style.transform = 'scale(1)';
    }, 150);
    
    alert('Comment added successfully!');
  }
}

function bookmarkArtwork() {
  if (!currentArtworkId) return;
  
  const artwork = artworkData[currentArtworkId];
  artwork.bookmarked = !artwork.bookmarked;
  
  updateBookmarkButton();
  
  const action = artwork.bookmarked ? 'added to' : 'removed from';
  console.log(`Artwork ${action} bookmarks: ${artwork.title}`);
  
  // Add visual feedback
  const bookmarkBtn = document.querySelector('.bookmark-btn');
  bookmarkBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    bookmarkBtn.style.transform = 'scale(1)';
  }, 150);
}

function updateBookmarkButton() {
  if (!currentArtworkId) return;
  
  const artwork = artworkData[currentArtworkId];
  const bookmarkBtn = document.querySelector('.bookmark-btn');
  
  if (artwork.bookmarked) {
    bookmarkBtn.innerHTML = '🔖 Bookmarked';
    bookmarkBtn.style.background = 'linear-gradient(145deg, #4caf50, #66bb6a)';
  } else {
    bookmarkBtn.innerHTML = '🔖 Bookmark';
    bookmarkBtn.style.background = 'linear-gradient(145deg, #ff5722, #ff8a65)';
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  console.log('Picverse Gallery loaded successfully!');
  
  // Add smooth scrolling behavior to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
