module.exports = {
  hubs: {
    "you": {
      id: "you",
      title: "You",
      feeds: ["in-progress", "your-shows", "your-channels", "you-might-like", "recently-aired", "favorites", "bookmarks", "purchases"],
      defaultFeed: "in-progress"
    },
    "live-tv": {
      id: "live-tv",
      title: "Live TV",
      feeds: []
    },
    "on-demand": {
      id: "on-demand",
      title: "On Demand",
      feeds: []
    }
  },
  feeds: {
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      videos: ["1"]
    },
    "your-shows": {
      id: "your-shows",
      title: "Your Shows",
      videos: []
    },
    "your-channels": {
      id: "your-channels",
      title: "Your Channels",
      videos: []
    },
    "you-might-like": {
      id: "you-might-like",
      title: "You Might Like",
      videos: []
    },
    "recently-aired": {
      id: "recently-aired",
      title: "Recently Aired",
      videos: []
    },
    "favorites": {
      id: "favorites",
      title: "Favorites",
      videos: []
    },
    "bookmarks": {
      id: "bookmarks",
      title: "Bookmarks",
      videos: []
    },
    "purchases": {
      id: "purchases",
      title: "Purchases",
      videos: []
    }
  },
  videos: {
    "1": {
      id: "1",
      uri: "theresa-may-wont-be-afraid-to-challenge-donald-trum.mp4",
      title: "Theresa May 'won't be afraid' to challenge Donald Trump - BBC News",
      description: "Theresa May says she won't be afraid to tell Donald Trump if he says or does anything she feels is unacceptable. The two will ...",
      duration: {
        mm: 15,
        ss: 32
      },
      poster: "1",
      channel: "1"
    }
  },
  posters: {
    "1": {
      id: "1",
      src: "/mock/posters/bbc-theresa-may.jpg",
      width: 246,
      height: 138
    }
  },
  channels: {
    "1": {
      id: "1",
      name: "BBC"
    }
  }
}
