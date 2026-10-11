export const CURRENT_USER = {
    username: "shirleyromero",
    name: "Shirley Romero",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  };
  
  export const INITIAL_STORIES = [
    { id: 1, username: "your_story", avatar: CURRENT_USER.avatar, isUser: true, hasStory: false },
    { id: 2, username: "terrylucas", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: true },
    { id: 3, username: "lauramatt...", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: true },
    { id: 4, username: "harryprescott", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: false },
    { id: 5, username: "ednamanz", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: true },
    { id: 6, username: "christinaferg...", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: false },
    { id: 7, username: "john_doe", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", hasStory: true, unread: true },
  ];
  
  export const SUGGESTIONS = [
    { id: 1, username: "terrylucas", subtext: "Followed by marylucas + 2 more", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { id: 2, username: "lauramatthews", subtext: "Followed by alex_m + 5 more", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
    { id: 3, username: "harryprescott", subtext: "Followed by harryprescott + 1 more", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { id: 4, username: "ednamanz", subtext: "Followed by ednamanz + 2 more", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" },
    { id: 5, username: "christinaferg", subtext: "Followed by christinaferg + 4 more", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80" },
  ];
  
  export const INITIAL_POSTS = [
    {
      id: 1,
      username: "terrylucas",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      likes: 1069,
      isLiked: false,
      isSaved: false,
      caption: "Imperdiet in sit rhoncus, eleifend tellus augue lectus potem pellentesque... ",
      timeAgo: "2 HOURS AGO",
      comments: [
        { id: 101, username: "lauramatthews", text: "Awesome shot! 🔥", time: "1h" },
        { id: 102, username: "harryprescott", text: "Love the lighting setup here ✨", time: "45m" },
        { id: 103, username: "ednamanz", text: "Super cool vibe 🙌", time: "20m" }
      ]
    },
    {
      id: 2,
      username: "lauramatthews",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
      likes: 2450,
      isLiked: true,
      isSaved: true,
      caption: "Exploring the mountains today! Nature always heals. 🌲🏔️",
      timeAgo: "5 HOURS AGO",
      comments: [
        { id: 201, username: "terrylucas", text: "Where is this location?", time: "3h" },
        { id: 202, username: "christinaferg", text: "Stunning view! Enjoy!", time: "2h" }
      ]
    }
  ];